# Global Risk Governance Monitor

Source of [globalriskgovernance.org](https://www.globalriskgovernance.org): a website that maps global catastrophic and existential risks and the multilateral institutions and treaties that exist to reduce each one.

## What is in this repository

| Path | What it is |
|---|---|
| `GlobalRisks.json` | The risks: definitions, risk tree, likelihood and impact. **Source of truth.** |
| `RiskGovernance.json` | The governance of each risk on four pillars, with scores, maturity and trend. **Source of truth.** |
| `Cherlet_2026_GCER_multilateral_governance.pdf` | The paper. |
| `src/site.config.mjs` | Site name, links, the table of domains and the editorial text of the domain pages. |
| `src/styles/tokens.css` | Colours and type sizes. Change them here and the whole site follows. |
| `src/pages/` | One file per kind of page. `risks/[slug].astro` generates the 17 risk pages and the 6 domain pages. |
| `public/icons/` | The final icon set (40 SVG files). |
| `.github/workflows/deploy.yml` | Builds the site and publishes it to GitHub Pages on every push to `main`. |

Every page is generated from the two JSON files when the site is built. To change a fact, edit the JSON file, not a page.

## Updating the data

1. Edit `GlobalRisks.json` or `RiskGovernance.json` (on GitHub: open the file, click the pencil, commit).
2. Raise the `version` and `date` at the top of the file and add a line to `changes`.
3. The site rebuilds by itself within a few minutes.

## Building on your own computer

Requires Node.js 20 or later.

```
npm install
npm run dev      # preview at http://localhost:4321
npm run build    # writes the finished site to dist/
```

## Publishing

GitHub Pages must be set to build from GitHub Actions: repository **Settings > Pages > Build and deployment > Source: GitHub Actions**. The custom domain is kept in `public/CNAME`.

## Licence

Text and data: CC BY-NC 4.0. Cite as: Cherlet, J. (2026). Global Risk Governance Monitor, globalriskgovernance.org.
