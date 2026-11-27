// Copies the source-of-truth files from the repository root into public/,
// so that the built site serves them at the same addresses as before.
import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
mkdirSync('public', { recursive: true });
for (const f of ['GlobalRisks.json', 'RiskGovernance.json', 'Cherlet_2026_GCER_multilateral_governance.pdf']) {
  if (existsSync(f)) copyFileSync(f, `public/${f}`);
  else console.warn(`prepare: ${f} not found in the repository root`);
}
