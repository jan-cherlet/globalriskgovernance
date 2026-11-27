// Loads the two datasets from the repository root and joins them. Everything on the site is derived from here.
import { readFileSync, existsSync } from 'node:fs';
import { domains, homeOrder } from '../site.config.mjs';

const read = (f) => JSON.parse(readFileSync(new URL(`../../${f}`, import.meta.url), 'utf-8'));
export const GR = read('GlobalRisks.json');
export const RG = read('RiskGovernance.json');

export const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const method = GR.methodology.assessment_method;
export const L_BANDS = method.likelihood_scale.bands;   // L1..L5 -> {label, range}
export const I_BANDS = method.impact_scale.bands;       // I1..I5 -> {label, definition}
export const FAILURE_MODES = GR.methodology.risk_tree.failure_modes;
export const MATURITY_ORDER = RG.methodology.maturity_indicator.order;
export const MATURITY_LEVELS = RG.methodology.maturity_indicator.levels;
export const TREND_LABELS = RG.methodology.maturity_indicator.trend;
export const SOURCES = Object.fromEntries(GR.methodology.source_reports.map((s) => [s.id, s]));
export const PILLARS = ['assess', 'regulate', 'finance', 'enforce'];

const gov = Object.fromEntries(RG.risks.map((r) => [r.code, r]));
const domainOf = {};
domains.forEach((d) => d.members.forEach((c) => { domainOf[c] = d; }));

// An entry that is new in the data and not yet listed in site.config.mjs still gets a place:
// multipliers go to the multipliers group, risks go to a domain chosen by the letter of their code.
const bySlug = Object.fromEntries(domains.map((d) => [d.slug, d]));
const byLetter = { N: 'natural-hazards', E: 'earth-system', W: 'weapons-conflict', T: 'technology-society', F: 'technology-society', M: 'multipliers' };
const fallbackDomain = (r) => {
  const d = r.kind === 'risk multiplier' ? bySlug.multipliers : (bySlug[byLetter[r.code[0]]] && byLetter[r.code[0]] !== 'multipliers' ? bySlug[byLetter[r.code[0]]] : bySlug['technology-society']);
  console.warn(`[data] ${r.code} "${r.name}" is not listed in a domain in src/site.config.mjs; it is shown under "${d.name}".`);
  return d;
};

// Icons are found by risk code (public/icons/icons.json), so a risk can be renamed in the data without losing its icon.
// An entry without an icon of its own uses the icon of its domain.
const iconDir = new URL('../../public/icons/', import.meta.url);
const iconIndex = JSON.parse(readFileSync(new URL('icons.json', iconDir), 'utf-8'));
const iconOf = Object.fromEntries(iconIndex.risks.map((i) => [i.code, i]));
const has = (file) => !!file && existsSync(new URL(file, iconDir));

const num = (band) => Number(band.slice(1));

const all = GR.risks.map((r) => {
  const d = domainOf[r.code] || fallbackDomain(r);
  const g = gov[r.code];
  if (!g) throw new Error(`GlobalRisks.json lists ${r.code} "${r.name}", but RiskGovernance.json has no entry with that code. Add it, then the site can be built.`);
  const isMultiplier = r.kind === 'risk multiplier';
  const ic = iconOf[r.code] || {};
  return {
    ...r,
    slug: slugify(r.name),
    isMultiplier,
    domain: d,
    icons: {
      symbol: has(ic.symbol) ? ic.symbol : `domain-${d.slug}.svg`,
      illustration: has(ic.illustration) ? ic.illustration : `domain-${d.slug}.svg`,
      own: has(ic.symbol),
    },
    gov: g,
    href: `/risks/${slugify(r.name)}/`,
    L: isMultiplier ? null : { modal: num(r.likelihood.modal), lo: num(r.likelihood.range[0]), hi: num(r.likelihood.range[1]), rising: r.likelihood.rising,
      label: L_BANDS[r.likelihood.modal].label, range: L_BANDS[r.likelihood.modal].range,
      loLabel: L_BANDS[r.likelihood.range[0]].label, hiLabel: L_BANDS[r.likelihood.range[1]].label },
    I: isMultiplier ? null : { modal: num(r.impact.modal), tail: num(r.impact.tail), tipping: r.impact.tail_is_tipping_cascade,
      label: I_BANDS[r.impact.modal].label, tailLabel: I_BANDS[r.impact.tail].label },
  };
});

// Site order: by domain (order of the table), then as listed in the domain; entries that are new in the data come last in their domain.
const rank = (d, r) => { const i = d.members.indexOf(r.code); return i === -1 ? 1000 : i; };
export const risks = domains.flatMap((d) => all.filter((r) => r.domain === d).sort((a, b) => rank(d, a) - rank(d, b)));
for (const g of RG.risks) if (!all.some((r) => r.code === g.code)) console.warn(`[data] RiskGovernance.json has an entry ${g.code} "${g.name}" that is not in GlobalRisks.json; it is not shown.`);
export const hazards = risks.filter((r) => !r.isMultiplier);
export const multipliers = risks.filter((r) => r.isMultiplier);
export const byCode = Object.fromEntries(risks.map((r) => [r.code, r]));
export { domains };
export const domainRisks = (d) => risks.filter((r) => r.domain === d);
// Order of the cards on the front page (site.config.mjs, homeOrder); domains not named there follow in table order.
const homeRank = (d) => { const i = homeOrder.indexOf(d.slug); return i === -1 ? homeOrder.length + domains.indexOf(d) : i; };
export const homeHazards = [...hazards].sort((a, b) => homeRank(a.domain) - homeRank(b.domain));

// Places on the likelihood and impact grid. The data gives each risk a cell; if two risks claim the same cell,
// the second moves to the nearest free cell (same row first), so that no risk is hidden.
const ROWS = 4, COLS = 5;
export const gridPlace = (() => {
  const taken = new Map(), out = {};
  for (const r of hazards) {
    const row0 = Math.min(Math.max(r.grid?.impact_row ?? r.I.modal, 1), ROWS), col0 = Math.min(Math.max(r.grid?.likelihood_col ?? r.L.modal, 1), COLS);
    const cells = [];
    for (let row = 1; row <= ROWS; row++) for (let col = 1; col <= COLS; col++) cells.push({ row, col, d: Math.abs(col - col0) + 2 * Math.abs(row - row0) });
    const free = cells.sort((a, b) => a.d - b.d).find((c) => !taken.has(`${c.row}-${c.col}`));
    if (!free) { console.warn(`[data] No free cell on the grid for ${r.code}; it is not shown on the grid.`); continue; }
    if (free.d > 0) console.warn(`[data] ${r.code} shares its grid cell with another risk; it is shown in the nearest free cell.`);
    taken.set(`${free.row}-${free.col}`, r); out[r.code] = free;
  }
  return { at: (row, col) => taken.get(`${row}-${col}`), of: (code) => out[code] };
})();

export const maturityCounts = MATURITY_ORDER.map((m) => ({ level: m, n: risks.filter((r) => r.gov.maturity === m).length }));
export const latestDate = [GR.date, RG.date].sort().pop();
export const fmtDate = (iso) => new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

// Multipliers that act on a given hazard, and hazards a multiplier amplifies.
export const actingOn = (r) => multipliers.filter((m) => (m.amplifies || []).includes(r.code) || m.amplifies_note);
export const amplified = (m) => (m.amplifies || []).map((c) => byCode[c]).filter(Boolean);

// Split a long description into short paragraphs of about four sentences.
export const sentences = (text) => text.split(/(?<=[.!?]['"”)]?)\s+(?=[A-Z0-9'"“(])/).map((x) => x.trim()).filter(Boolean);
export const paragraphs = (text, per = 4) => {
  const s = sentences(text);
  const out = [];
  for (let i = 0; i < s.length; i += per) out.push(s.slice(i, i + per).join(' '));
  if (out.length > 1 && out[out.length - 1].split(' ').length < 14) { const last = out.pop(); out[out.length - 1] += ' ' + last; }
  return out;
};

export const scoreNum = (v) => Number(v) || 0;
