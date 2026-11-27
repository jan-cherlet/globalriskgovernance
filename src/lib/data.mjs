// Loads the two datasets from the repository root and joins them. Everything on the site is derived from here.
import { readFileSync } from 'node:fs';
import { domains } from '../site.config.mjs';

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

const num = (band) => Number(band.slice(1));

const all = GR.risks.map((r) => {
  const d = domainOf[r.code];
  if (!d) throw new Error(`Risk ${r.code} is not assigned to a domain in site.config.mjs`);
  const g = gov[r.code];
  if (!g) throw new Error(`Risk ${r.code} has no governance record`);
  const isMultiplier = r.kind === 'risk multiplier';
  return {
    ...r,
    slug: slugify(r.name),
    isMultiplier,
    domain: d,
    gov: g,
    href: `/risks/${slugify(r.name)}/`,
    L: isMultiplier ? null : { modal: num(r.likelihood.modal), lo: num(r.likelihood.range[0]), hi: num(r.likelihood.range[1]), rising: r.likelihood.rising,
      label: L_BANDS[r.likelihood.modal].label, range: L_BANDS[r.likelihood.modal].range,
      loLabel: L_BANDS[r.likelihood.range[0]].label, hiLabel: L_BANDS[r.likelihood.range[1]].label },
    I: isMultiplier ? null : { modal: num(r.impact.modal), tail: num(r.impact.tail), tipping: r.impact.tail_is_tipping_cascade,
      label: I_BANDS[r.impact.modal].label, tailLabel: I_BANDS[r.impact.tail].label },
  };
});

// Site order: by domain (order of the table), then as listed in the domain.
export const risks = domains.flatMap((d) => d.members.map((c) => all.find((r) => r.code === c)));
if (risks.length !== GR.risks.length) throw new Error('The domain table does not account for every risk exactly once');
export const hazards = risks.filter((r) => !r.isMultiplier);
export const multipliers = risks.filter((r) => r.isMultiplier);
export const byCode = Object.fromEntries(risks.map((r) => [r.code, r]));
export { domains };
export const domainRisks = (d) => d.members.map((c) => byCode[c]);

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
