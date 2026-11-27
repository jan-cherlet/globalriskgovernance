// Stylised distribution chart for the risk snapshot (redesign file, M11).
// A horizontal scale with five ticks and a bell-like curve: peak = most likely band, feet = ends of the range.
const X = (b) => 32 + 64 * (b - 1);          // centre of band 1..5 on a 320-unit axis
const f = (v) => Number(v.toFixed(2));

export function distributionChart({ modal, lo, hi, impact = false, dashedTail = false, peakLabel, leftLabel, rightLabel, aria }) {
  const p = X(modal);
  const footL = Math.max(0, impact ? p - 32 : X(lo) - 32);   // impact has no lower bound in the data: short, steep foot
  const footR = Math.min(320, X(hi) + 32);
  const dL = p - footL, dR = footR - p;
  const left = `M${f(footL)} 60 C${f(footL + 0.5 * dL)} 60 ${f(p - 0.3 * dL)} 14 ${p} 14`;
  const right = `C${f(p + 0.3 * dR)} 14 ${f(footR - 0.5 * dR)} 60 ${f(footR)} 60`;
  const ticks = [1, 2, 3, 4, 5].map((b) => `<line x1="${X(b)}" y1="56" x2="${X(b)}" y2="64" class="ch-axis"/>`).join('');
  const anchor = p < 60 ? 'start' : p > 260 ? 'end' : 'middle';
  const lx = p < 60 ? p - 20 : p > 260 ? p + 20 : p;
  const stroke = dashedTail
    ? `<path d="${left}" class="ch-line"/><path d="M${p} 14 ${right}" class="ch-line ch-dash"/>`
    : `<path d="${left} ${right}" class="ch-line"/>`;
  return `<svg class="chart" viewBox="0 -6 320 96" role="img" aria-label="${aria.replace(/"/g, '&quot;')}">
<path d="${left} ${right} Z" class="ch-fill"/>${stroke}
<line x1="0" y1="60" x2="320" y2="60" class="ch-axis"/>${ticks}
<text x="${f(lx)}" y="6" text-anchor="${anchor}" class="ch-peak">${peakLabel}</text>
<text x="0" y="84" text-anchor="start" class="ch-end">${leftLabel}</text>
<text x="320" y="84" text-anchor="end" class="ch-end">${rightLabel}</text>
</svg>`;
}
