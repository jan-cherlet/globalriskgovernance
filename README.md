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

Replace `GlobalRisks.json` and `RiskGovernance.json` in the repository root (upload or push to `main`). The site then rebuilds and publishes itself within a few minutes. Nothing else needs to be edited.

What follows the data on its own:

- all text, scores, maturity levels, trends, likelihood and impact values, sources, version number and date;
- the counts in the text, the filters and their numbers, the grid, the governance overview;
- a renamed risk: its page moves to the new name and keeps its icon (icons are found by risk code);
- a new risk or multiplier: it gets a page, a card and a place in the lists. Until it is added to a domain in `src/site.config.mjs` it is placed by the letter of its code, and until it has an icon of its own it uses the icon of its domain;
- a removed risk: its page and card disappear.

What does not follow on its own, because it is written by hand in `src/site.config.mjs`: the line, the question and the three framing paragraphs of each domain, and the texts of the front page and the About page.

Each risk in `GlobalRisks.json` needs an entry with the same code in `RiskGovernance.json`. If one is missing, the build stops with a message that names the code, and the published site stays as it was. The build log is under the Actions tab on GitHub.

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
