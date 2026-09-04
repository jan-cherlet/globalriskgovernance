# Master List of Global Catastrophic and Existential Risks

**Project:** Global Risk Governance Monitor
**Deliverable 1 of 4:** A rigorously derived master list of the major global catastrophic and existential risks facing humanity — those currently active, those faced in the recent past, and those anticipated through the remainder of the 21st century.
**Date:** 4 September 2026 (v2 — integrates the UN Global Risk Report 2024 as a fifth primary source; list fixed at 16 entries)
**Status:** Foundation document. §4 is the risk list; §5 holds the likelihood/impact assessment and two-dimensional risk map (Deliverable 2). The mapping of multilateral mechanisms and governance gaps (Deliverable 3) is in the companion file `GovernanceMapping.md`. The interactive dashboard (Deliverable 4, `index.html`) draws on both.

---

## 1. Purpose and terminology

This document establishes *what* belongs on the risk map and *why*. It is deliberately built from explicit criteria rather than intuition, so that every subsequent step — probability estimation, impact assessment, governance mapping, and the interactive dashboard — inherits a defensible and auditable foundation.

The phrasing **"global catastrophic and existential risks"** is taken directly from the UN *Pact for the Future* (A/RES/79/1, adopted 22 September 2024), which states that humanity is "confronted by rising catastrophic and existential risks, many caused by the choices we make." Using the UN's own language keeps this work aligned with the multilateral policy frame it is ultimately meant to inform. The UN's own *Global Risk Report 2024* offers the closest thing to a UN working definition: a global risk is "an event or condition that would have a significant negative impact on a large portion of humanity and the planet."

Two nested concepts sit at the core:

- **Global Catastrophic Risk (GCR):** Following the US *Global Catastrophic Risk Management Act* (GCRMA) definition adopted by RAND/HSOAC (2024), a GCR is "the risk of events or incidents consequential enough to significantly harm or set back human civilization at the global scale." A widely used operational threshold (Cernev, submitted to UNDRR; Bostrom & Ćirković) is an event causing **over 10 million fatalities or more than US$10 trillion in damage**, global in scope, but **from which humanity is expected to recover**. Bostrom & Ćirković's own founding definition is broader and is adopted here alongside it: a risk "that might have the potential to inflict serious damage to **human well-being** on a global scale."
- **Existential Risk (X-risk):** A subset of GCR. Following Bostrom and Ord, an existential risk threatens the **premature extinction of humanity or the permanent and drastic destruction of its long-term potential** — an outcome that is, by definition, unrecoverable.

The bridging concept between the two is **civilization collapse**: a relatively rapid disaggregation of social and political order accompanied by large-scale death, economic decline, and governmental disintegration. Collapse is treated here both as a *consequence* of a global catastrophe and as a *pathway* by which a catastrophe can become existential (e.g., a collapse that leaves survivors unable to mitigate a later asteroid impact, or in possession of nuclear or pathogenic materials).

---

## 2. Inclusion criteria (the logic)

A hazard is included on the master list only if it satisfies **all four** of the following tests. This is the rigorous filter that separates genuine global catastrophic/existential risks from serious-but-lesser harms.

**Criterion 1 — Scope: global.** The event's consequences must be global or plausibly cascade to global scale, not confined to one nation or region. (This is why the UK *National Risk Register 2025*, though an authoritative input, is used selectively: most of its entries — a rail accident, a regional power failure — are national-scale and fail this test. Its genuinely global hazards, such as pandemics and severe space weather, do qualify.)

**Criterion 2 — Severity: catastrophic or terminal, measured in lives *or* in well-being.** The event must credibly reach the GCR threshold through **any one** of three routes:

- *(a) Mortality:* ≈10 million+ deaths; or
- *(b) Civilizational function:* a comparable setback to human civilization — collapse of governance, critical infrastructure, or Earth-system function — or ≈US$10 trillion+ in damage; or
- *(c) Well-being:* **widespread, severe and sustained decline in well-being for a large share of humanity**, even where mortality is initially limited — operationalised here as the loss of basic welfare (food, water, shelter, health, physical safety, or fundamental freedoms) for roughly **10% or more of the world's population (on the order of 800 million people)**, or forced displacement on the order of **100 million or more**.

Route (c) is added because a mortality-only threshold would systematically under-weight slow-onset and "endurable-but-crushing" catastrophes — mass displacement, famine short of mass death, the loss of basic freedoms under a locked-in order. It is not an innovation: **every major authoritative framework already contains a well-being or affected-population dimension.** Bostrom & Ćirković (2008) define GCR as "serious damage to human well-being on a global scale," and Bostrom's severity scale explicitly distinguishes *endurable* from *crushing* outcomes (drastic loss of quality of life, not only of life). The **UN Global Risk Report 2024** defines a global risk by its "significant negative impact on a large portion of humanity," and its Societal category is framed around "the stability, cohesion and overall well-being of societies." The **WEF** defines a global risk by impact on "a significant proportion of global GDP, **population** or natural resources." **RAND/HSOAC (2024)** scores every hazard on four consequence categories — mortality, ecosystem instability, **societal instability**, and **reduced human capabilities** — of which only the first is a death count. The **UK NRR 2025** impact scale likewise scores human welfare and behavioural/psychological harm alongside fatalities, and the **Sendai Framework** counts "people affected," not just killed. The numeric anchors above are the analyst's operationalisation of this shared principle and are open to revision. Risks that can additionally cause extinction or the permanent loss of humanity's potential are flagged as **existential**.

**Criterion 3 — Plausibility: non-negligible probability this century.** The hazard must have a credible, non-trivial chance of occurring, or of being faced, within the analytic window (recent past → end of the 21st century). Purely speculative or astronomically improbable mechanisms are noted but not treated as primary risks (e.g., nearby gamma-ray bursts, vacuum decay).

**Criterion 4 — Distinctness.** Each listed risk must have a distinct primary hazard mechanism and, ultimately, a distinct governance response. Where two candidate risks share a mechanism and a governance regime, they are merged; where a single label hides two very different mechanisms (e.g., natural vs. engineered pandemics), they are split.

Three further principles govern how the list is *structured* rather than what it contains:

- **Do not double-count cascades as separate top-level risks.** Many catastrophes propagate through the same downstream channels (famine, infrastructure failure, financial collapse, mass displacement). These are captured as *consequence pathways* and *risk multipliers*, not as independent hazards, to avoid inflating the list.
- **Treat general-purpose enabling technologies as enablers, not as risks.** Artificial intelligence, in particular, is not a hazard in itself but a capability that makes specific hazards more likely or more severe. It is therefore embedded *inside* the risks it facilitates — an AI-assisted anthropogenic pandemic, AI-compressed nuclear escalation, AI-enabled power concentration — rather than listed as a free-standing "AI risk." The **single exception** is the case where the technology itself becomes the terminal hazard: loss of human control over advanced AI systems, which has no other home and is treated by RAND and Ord as a distinct catastrophe mechanism.
- **Preserve "unknown" risk explicitly, and cap the list at 16.** Following Ord, a residual category for unforeseen and emerging risks is retained, because the historical base rate of being surprised is high. The list is fixed at **16 entries (15 named + unknown)** — large enough to be comprehensive against all five source reports, small enough to be held in mind and displayed on a single 5 × 5 likelihood × impact grid.

---

## 3. Classification framework

Each risk is classified along four independent dimensions. This multi-axis scheme is what allows the dashboard to be filtered and re-sorted (by origin, by urgency, by severity, by governability) rather than presenting a flat list.

**Axis A — Origin** (adapted from Ord's natural / anthropogenic split and the RAND hazard typology):
- **N — Natural:** hazard arises independently of human action.
- **T — Anthropogenic-technological:** hazard arises from human technology and its misuse or failure.
- **E — Anthropogenic-environmental:** hazard arises from human pressure on Earth systems.
- **G — Anthropogenic-geopolitical/societal:** hazard arises from human conflict, governance failure, or social breakdown (these frequently act as *multipliers* on the others).
- **U — Unknown.**

**Axis B — Time profile** (this is how the list answers the brief's "past / present / future" requirement):
- **Persistent:** materially present across the whole window.
- **Recent-past realized:** has already produced a global catastrophe or near-miss in living memory (illustrates the risk is not hypothetical).
- **Emerging/escalating:** driven primarily by trends expected to intensify through 2100.

**Axis C — Severity ceiling:**
- **GCR:** can reach global-catastrophe scale; humanity expected to recover.
- **X:** can additionally cause extinction or unrecoverable collapse of human potential.

**Axis D — Source traceability:** which of the authoritative reference sources (see §9) treat this as a top-tier risk. This is included so every entry is auditable against the literature. Source tags: **RAND** (HSOAC 2024), **GCF** (2026), **WEF** (2026), **UK-NRR** (2025), **UN24** (UN Global Risk Report 2024), **Ord** (*The Precipice*).

---

## 4. The master list

Fifteen named risks are grouped into four families by origin, followed by the residual "unknown" category — sixteen entries in total. Probability and impact are scored in §5; where an illustrative estimate is quoted here it is attributed to a named source purely to signal order of magnitude.

### Family N — Natural (non-anthropogenic) risks

**N1. Asteroid or comet impact.**
A near-Earth object of ≥1 km striking Earth would inject enough dust to cause global "impact winter," crop failure, and mass mortality; a ≥10 km object is a plausible extinction mechanism (as in the end-Cretaceous event). Probability is very low but non-zero and, uniquely among these risks, quantifiable from astronomical survey data. Ord's illustrative estimate is ~1 in 1,000,000 of existential catastrophe this century. *Origin: N · Time: Persistent · Severity: X · Sources: RAND, GCF, UK-NRR, UN24 ("Space-Based Event"), Ord.*

**N2. Supervolcanic eruption.**
A magnitude-8 (VEI-8) eruption (e.g., Yellowstone, Toba scale) would eject thousands of km³ of material, causing multi-year global "volcanic winter," harvest collapse, and possible civilization-threatening famine. Higher near-term probability than a large impact (Ord: ~1 in 10,000 this century) and currently unpreventable. *Origin: N · Time: Persistent · Severity: GCR→X · Sources: RAND, UK-NRR, UN24 ("Large-Scale Natural Hazard Risks"), Ord.*

**N3. Severe space weather (extreme solar storm).**
A Carrington-class or larger coronal mass ejection could induce continent-scale, long-duration failures of electricity grids, satellites, GPS, and communications, cascading into failures of water, food, finance, and health systems. Global in reach, recurrence on a century-to-multi-century scale. *Origin: N · Time: Persistent/Emerging (rising exposure) · Severity: GCR · Sources: RAND, UK-NRR, UN24 ("Space-Based Event").*

**N4. Natural pandemic (novel zoonotic pathogen).**
A naturally emerging high-transmissibility, high-lethality pathogen (influenza, coronavirus, or unknown "Disease X") capable of exceeding the toll of 1918 or COVID-19. Realized as a global catastrophe within living memory, confirming the mechanism. *Origin: N · Time: Persistent / Recent-past realized · Severity: GCR · Sources: RAND, UK-NRR, WEF, UN24 ("New Pandemic"; "Biorisks — natural origin").*

*(Sub-threshold natural hazards — earthquakes, tsunamis, regional volcanism, stellar explosions, gamma-ray bursts — are documented in §8 but excluded from the primary list under Criteria 1 and 3.)*

### Family T — Anthropogenic-technological risks

**T1. Nuclear war (including AI-compressed escalation).**
Large-scale exchange between nuclear-armed states, with direct blast/radiation mortality plus the prospect of **nuclear winter** — soot-driven global cooling and agricultural collapse potentially killing billions indirectly. The clearest example of a human-made GCR with plausible existential reach (Ord: ~1 in 1,000 this century). The risk is now being reshaped by an *enabler*: the integration of AI and autonomous systems into military command, targeting and early-warning, which compresses decision timelines and raises the probability of inadvertent escalation — the "multi-domain escalation" danger GCF 2026 places at the centre of its WMD chapter. That AI dimension is treated here as part of the nuclear risk, not as a separate hazard. *Origin: T/G · Time: Persistent/Escalating · Severity: GCR→X · Sources: RAND, GCF (WMD; AI in military decision-making), UK-NRR, WEF, UN24 ("Weapons of Mass Destruction"), Ord.*

**T2. Anthropogenic pandemic (engineered or accidental; AI-facilitated).**
A pathogen released by human action — deliberately engineered as a weapon, or escaping from research — exploiting advances in synthetic biology and gene editing, potentially designed for higher transmissibility and lethality than anything natural. Widely judged one of the fastest-growing risks; Ord's illustrative estimate is ~1 in 30 this century — far above natural pandemics. The critical *enabler* is AI: frontier models increasingly lower the knowledge barrier to designing or enhancing pathogens, collapsing the expertise moat that once limited this threat to state programmes. UN24 explicitly frames "Biorisks" as outbreaks "of natural, accidental, or deliberate origin"; this entry is the accidental-and-deliberate half of that definition. *Origin: T · Time: Emerging/Escalating · Severity: X · Sources: RAND, GCF (WMD), UK-NRR (lab release), WEF, UN24 ("Biorisks"), Ord.*

**T3. Loss of human control over advanced AI systems.**
Narrowly defined: advanced or general-purpose AI systems pursuing objectives misaligned with human intent, or embedded so deeply in critical infrastructure and decision-making that their failures become cascading, hard-to-correct, and ultimately beyond human ability to override — culminating in gradual or sudden human disempowerment. This is the one case in which AI is the *terminal hazard* rather than an enabler of another hazard, and it is retained on that basis (see §2, structural principle 2). Assessed by RAND as a distinct GCR mechanism ("global human disempowerment") and by Ord as the largest single long-run existential risk (~1 in 10 this century); the UN's Independent International Scientific Panel on AI reported in July 2026 that "no technical guarantee" currently exists that the most advanced systems follow their instructions. AI's *enabling* roles — in pandemics, nuclear escalation, disinformation and power concentration — are assigned to T2, T1, G2 and G4 respectively, not here. *Origin: T · Time: Emerging/Escalating · Severity: X · Sources: RAND, WEF, UN24 ("Negative Outcomes of AI and Frontier Technologies"), Ord.*

**T4. Other weapons of mass destruction (chemical and radiological).**
The non-nuclear, non-biological CBRN spectrum: chemical weapons and radiological "dirty" devices, plus the uncontrolled spread of radioactive material. Retained as a distinct entry because it maps to distinct treaty regimes (Chemical Weapons Convention/OPCW; IAEA nuclear-security instruments) and to a distinct, generally sub-existential, severity ceiling. Biological weapons sit in T2. *Origin: T/G · Time: Persistent · Severity: GCR · Sources: GCF (WMD), RAND, WEF, UK-NRR, UN24 ("Weapons of Mass Destruction").*

### Family E — Anthropogenic-environmental (Earth-system) risks

**E1. Catastrophic climate change.**
Warming driven past thresholds where impacts become severe and self-reinforcing — extreme heat, crop failure, sea-level rise, mass displacement — with tail risks of runaway feedbacks. Consistently ranked the top long-term risk by WEF, central to GCF, and the top-ranked concern across all regions and stakeholder groups in UN24 ("Inaction on Climate Change"). Primarily a GCR by the well-being route of Criterion 2 (hundreds of millions exposed to loss of livelihood and habitability) and a powerful multiplier of other risks; existential only via extreme tail feedbacks. *Origin: E · Time: Persistent/Escalating · Severity: GCR(→X tail) · Sources: GCF, RAND, WEF, UN24, Ord.*

**E2. Ecological collapse, biodiversity loss and resource depletion.**
Systemic failure of the ecosystems and biodiversity underpinning food, water, pollination, and disease regulation, together with the depletion and contamination of the natural resources (freshwater, soil, fisheries, forests) on which large populations depend. Cascading collapse of these services could destabilize civilization independently of temperature. This entry absorbs three UN24 risks that share one mechanism and one governance space — "Rapid Decline in Biodiversity," "Shortages of Natural Resources," and "Large-Scale Pollution" (UN24's second-ranked concern globally). *Origin: E · Time: Persistent/Escalating · Severity: GCR · Sources: GCF, WEF, UN24 (three risks).*

**E3. Earth-system tipping points and planetary-boundary breach (including geoengineering failure).**
Crossing of interacting biophysical thresholds (ice sheets, ocean circulation such as AMOC, permafrost, freshwater, biogeochemical/nitrogen–phosphorus cycles) that could shift the Earth system into a hotter, less habitable state. Retained as distinct from E1/E2 because the governance frame — the planetary-commons / Earth-system-stability approach emphasized in GCF 2026 — is different from emissions policy alone. It also houses the emerging risk UN24 lists as "Geoengineering Disasters": large-scale deliberate intervention in planetary processes (e.g., stratospheric aerosol injection) that fails, is terminated abruptly, or triggers unintended tipping dynamics — the human-made mirror image of the natural thresholds. *Origin: E · Time: Emerging/Escalating · Severity: GCR→X · Sources: GCF (Earth system stability), WEF, UN24 (geoengineering; natural resource shortage).*

### Family G — Anthropogenic geopolitical, societal and systemic risks (primarily multipliers)

These rarely cause human extinction on their own, but they degrade the world's capacity to prevent and respond to every other risk, and can themselves reach GCR scale — most often by the *well-being* route of Criterion 2 (mass displacement, deprivation, loss of freedoms) — through cascading collapse. They are listed because the *Pact for the Future*, WEF, and UN24 all treat governance and information integrity as first-order concerns; UN24 finds "geopolitical tensions" to be the single most interconnected risk in its entire network.

**G1. Great-power and state-based armed conflict (non-nuclear escalation).**
Major interstate war and multi-domain (cyber, space, conventional) escalation that can trigger nuclear use (T1), shatter supply chains, and collapse cooperation. Ranked the top near-term risk cluster by WEF 2026 ("Geoeconomic confrontation," "State-based armed conflict") and, in UN24, "Large-Scale War" is the strongest single connection in the risk network (from "Geopolitical Tensions"). *Origin: G · Time: Persistent/Escalating · Severity: GCR · Sources: WEF, GCF, UK-NRR, UN24 ("Large-Scale War"; "Geopolitical Tensions").*

**G2. Governance failure and information collapse.**
The mutually reinforcing breakdown of collective decision-making: mis- and disinformation (UN24's single stand-out "global vulnerability" — the risk rated most important and least prepared-for, and the one over 80% of respondents see as already occurring), societal polarization, erosion of institutions, rule of law and truth, and the retreat of multilateralism itself (UN24's "Collapse of Multilateral Institutions," "Collapse of Rule of Law," "Collapse of Social Cohesion"). AI-generated synthetic media is the *enabler* that is now scaling this risk. This is the *meta-risk* that most directly undermines the governance mechanisms mapped in `GovernanceMapping.md`. *Origin: G · Time: Emerging/Escalating · Severity: GCR (as multiplier) · Sources: WEF, UN24 (four risks), Pact for the Future.*

**G3. Global systemic and infrastructure collapse.**
Cascading failure across tightly coupled global systems — finance, energy, food, water, and critical digital/physical infrastructure (including large-scale cyber attack) — where one shock propagates system-wide ("polycrisis"). Captures the systemic-risk and critical-infrastructure hazards emphasized by RAND, the UK NRR, and WEF, and absorbs UN24's economic and technological-infrastructure risks that share this mechanism: "Global Financial Crisis," "Supply Chain Collapse," "Breakdown in Cybersecurity." *Origin: G/T · Time: Persistent/Escalating · Severity: GCR · Sources: WEF, RAND, UK-NRR, UN24 (three risks).*

**G4. Technology-driven concentration of power and wealth (AI-facilitated).**
The accumulation of economic, technological, and political power in the hands of very few actors — dominant corporations and their executives, monopolistic control of strategic resources or of transformative technologies, or entrenched authoritarian states — with AI as the decisive *enabler*: whoever first controls transformative AI could entrench dominance beyond challenge, and today roughly 90% of frontier training compute sits in two states. UN24 names this risk almost exactly — "Technology-Driven Power Concentration: the growing centralization and consolidation of influence, control and authority facilitated by advancements in technology … in the hands of private companies." At its extreme this is a **distinct existential pathway that does not involve extinction**: a permanent global "lock-in" of an entrenched order that forecloses humanity's ability to course-correct — Bostrom and Ord's *unrecoverable dystopia* or *stable totalitarianism*. Short of that, it corrodes the pluralism, competition and accountability on which collective risk governance depends. Kept distinct from G2 as the opposite failure mode — not fragmentation of authority but its excessive concentration. *Origin: G/T · Time: Emerging/Escalating · Severity: GCR→X (via lock-in) · Sources: UN24 ("Technology-Driven Power Concentration"; "Rise in Inequalities"), WEF (concentration of strategic resources; inequality), Ord (dystopian lock-in).*

### Family U — Unknown and emerging risks

**U1. Unforeseen ("unknown unknowns") and other emerging technological risks.**
A deliberately open category for hazards not yet identified or not yet mature — including speculative future technologies (e.g., advanced nanotechnology/atomically precise manufacturing) and genuinely novel mechanisms. Retained on the explicit reasoning (Ord) that the historical base rate of being surprised by new risks is high; Ord assigns this residual category a larger share of century-scale existential risk than any *named* natural risk. *Origin: U · Time: Emerging · Severity: GCR→X · Sources: Ord, RAND (emerging risk), UN24 ("frontier technologies").*

---

## 5. Assessing likelihood and impact: a relative, range-based methodology

This section adds, for each risk in §4, a structured assessment of **how likely** it is to materialise at catastrophic scale this century and **how severe** its impact would be. The output is deliberately **comparative and range-based** rather than a pair of precise numbers, and it is designed to survive academic scrutiny by being explicit about its epistemic limits.

### 5.1 The epistemic problem — and why we still rank

Global catastrophic and existential risks resist ordinary probabilistic risk assessment for three reasons: most are **unprecedented** (there is no frequency of human extinction to observe), several are **one-shot** (they cannot recur to build a base rate), and nearly all involve **deep (Knightian) uncertainty** — the probabilities themselves are not reliably known. This is exactly why the RAND/HSOAC (2024) assessment deliberately **declined to assign probabilities** at all.

We take a defensible middle path. We do **not** claim predictive point probabilities. But refusing to compare risks at all is itself a strong, indefensible claim — it implicitly treats an asteroid strike and an engineered pandemic as equally urgent. Prioritisation requires comparison. So our claims are **ordinal and relative**: statements of the form "risk A is more likely / higher-impact than risk B, with this much confidence," anchored to order-of-magnitude bands. The numbers attached to the bands are **comparison aids, not forecasts.** Following the IPCC, we keep the *likelihood* estimate separate from our *confidence* in it. (UN24 takes a similar stance: its "risk importance" is a compound of perceived likelihood and severity by 2050, drawn from 1,100 stakeholders, and it declines to publish point probabilities.)

### 5.2 Axis 1 — Likelihood (calibrated ordinal bands)

Likelihood is defined as **the probability that the risk manifests at or above the GCR threshold** (§2, Criterion 2 — by any of its three routes) **at least once between now and 2100.** Anchoring every risk to the *same* threshold is what makes them comparable. We use five order-of-magnitude bands with IPCC-style labels:

| Band | Label | Indicative probability (by 2100) |
|------|-------|----------------------------------|
| **L1** | Very low | < 1% |
| **L2** | Low | 1–10% |
| **L3** | Moderate | 10–33% |
| **L4** | High | 33–66% |
| **L5** | Very high | > 66% |

Each risk's **existential-scale** likelihood (extinction / permanent lock-in) is treated separately, and always sits lower — in the tail (see §5.4).

### 5.3 Axis 2 — Impact (multidimensional, with reversibility as a step-change)

Collapsing impact to a death count alone would fail scrutiny, so impact is assessed across **five dimensions** that mirror the three routes of Criterion 2: (a) direct mortality; (b) human suffering and decline in well-being (displacement, famine, disease, loss of basic welfare and freedoms); (c) geographic and systemic breadth; (d) **reversibility / permanence**; and (e) intergenerational loss of humanity's potential. Reversibility is treated as a **step-change, not a linear increment**: an unrecoverable outcome is categorically worse than any recoverable one, because it forecloses *all* future value. This is why the scale is anchored on the GCR→existential distinction rather than on deaths alone.

| Band | Label | Rough characterisation |
|------|-------|------------------------|
| **I1** | Severe | GCR threshold reached by mortality (≈10M+), function ($10T+), or well-being (≈10% of humanity in severe sustained deprivation); regional-to-global; **fully recoverable** |
| **I2** | Catastrophic | ≈100M+ deaths or deep global setback affecting a majority of humanity's welfare; recoverable but civilisation-scarring |
| **I3** | Civilizational | ≈1B+ deaths and/or global civilisation collapse; recovery uncertain, multi-generational |
| **I4** | Near-existential | collapse threatening permanence; drastic, possibly irreversible curtailment of potential |
| **I5** | Existential | extinction or permanent, unrecoverable foreclosure of humanity's potential |

### 5.4 Why each risk is a range, not a point (the frequency–severity curve)

The central methodological move: **each risk is a region on the map, not a single coordinate**, because a risk's severity and its probability are **inversely related**. A limited nuclear exchange is far more probable than a full nuclear-winter scenario; a 10-million-death pandemic is more probable than a billion-death one. Every risk therefore has an internal **frequency–severity curve** running from a higher-likelihood/lower-impact corner to a lower-likelihood/higher-impact corner.

We capture this by giving each risk two reference points:
- a **modal** manifestation — the most probable way it reaches GCR scale (its "central" position); and
- a **tail** manifestation — the worst-case ceiling, at lower probability. **The existential tail is where X-risk lives.**

On the two-dimensional map (§5.7), the modal point is plotted and the tail is shown as an arrow rising toward the high-impact corner.

### 5.5 How the assessments were derived (evidence base and aggregation)

Each score triangulates four kinds of evidence: (1) **published structured estimates** — principally Ord's *The Precipice* century estimates, quoted with his own wide credence intervals; (2) **expert-judgment and forecasting exercises** — the 2008 Oxford FHI informal survey, the 2022 Existential Risk Persuasion Tournament (XPT, which found domain experts and superforecasters diverging by orders of magnitude on AI and bio), platforms such as Metaculus, and UN24's 1,100-respondent perception survey of likelihood and severity by 2050; (3) the **five project reference reports** — RAND's consequence analysis, GCF 2026, the WEF long-term severity rankings, the UK NRR's explicit likelihood × impact scoring, and UN24's risk-importance and time-horizon findings; and (4) **domain base rates** where they genuinely exist — asteroid-impact frequencies from astronomical surveys, volcanic return periods, Carrington-event recurrence.

Two rules keep this honest: where sources diverge (often by orders of magnitude), we **widen the range rather than average**, and we lower the confidence rating. The scores below are an analyst's **structured synthesis for comparison**, not a meta-analysis, and are explicitly provisional (see §5.9).

### 5.6 Per-risk assessment

Likelihood is the central band for reaching **GCR scale** by 2100 (plausible range in brackets). Impact gives the **modal** severity and the **tail** ceiling. Confidence reflects the depth of uncertainty, not the size of the risk.

| # | Risk | Likelihood @GCR-scale | Impact (modal → tail) | Dominant impact dimensions | Confidence |
|---|------|-----------------------|------------------------|-----------------------------|------------|
| N1 | Asteroid / comet impact | **L1** [L1] | I3 → **I5** | mortality, breadth, permanence (tail) | High (best-constrained) |
| N2 | Supervolcanic eruption | **L1** [L1–L2] | I3 → I4 | famine / well-being, breadth | Moderate |
| N3 | Severe space weather | **L3** [L2–L4] | I1 → I2 | infrastructure, cascading well-being loss | Moderate |
| N4 | Natural pandemic | **L4** [L3–L5] | I2 → I3 | mortality, well-being | Moderate–High |
| T1 | Nuclear war (incl. AI-compressed escalation) | **L3** [L2–L3] | I2 → **I5** | mortality, breadth, permanence (tail) | Moderate |
| T2 | Anthropogenic pandemic (AI-facilitated) | **L2** [L1–L3], rising | I3 → **I5** | mortality, permanence | Low |
| T3 | Loss of control over advanced AI | **L2** [L1–L4] | I3 → **I5** | permanence, loss of potential | Low (widest disagreement) |
| T4 | Other WMD (chemical, radiological) | **L2** [L2–L3] | I1 → I3 | mortality, well-being | Moderate |
| E1 | Catastrophic climate change | **L5** [L4–L5] | I2 → I4 | well-being, breadth, intergenerational | Mod–High (GCR); Low (tail) |
| E2 | Ecological collapse & resource depletion | **L3** [L3–L4] | I2 → I3 | food/water well-being, breadth | Moderate |
| E3 | Earth-system tipping points (incl. geoengineering) | **L2** [L2–L4] | I3 → I4 | permanence, breadth, intergenerational | Low |
| G1 | Great-power / state-based conflict | **L4** [L3–L5] | I1 → **I5** (via T1) | mortality, displacement, trigger | Moderate |
| G2 | Governance & information collapse | **L5** [L4–L5] | I1 direct → unbounded (multiplier) | well-being (freedoms), erosion of response capacity | Low |
| G3 | Global systemic & infrastructure collapse | **L3** [L3–L4] | I2 → I3 | systemic breadth, well-being | Low–Moderate |
| G4 | Technology-driven power concentration (AI-facilitated) | **L3** [L2–L4] | I1 → I4 (lock-in) | well-being (freedoms), permanence, loss of potential | Low |
| U1 | Unknown / unforeseen risks | **L2** [L2–L3] | I3 → **I5** | wide by construction | Very low |

### 5.7 The two-dimensional risk map

Each risk is placed at its **modal** position. The arrow **↑** marks risks whose lower-probability **tail rises into the near-existential/existential band (I4–I5)** — i.e., risks that are worse than their modal position suggests. The top two impact rows (I4–I5) contain no *modal* placements, because existential outcomes are, by their nature, tail events; they are reached via the ↑ arrows.

| Impact ↓ \ Likelihood → | **L1** (<1%) | **L2** (1–10%) | **L3** (10–33%) | **L4** (33–66%) | **L5** (>66%) |
|---|---|---|---|---|---|
| **I3 Civilizational** | N1 ↑, N2 ↑ | T2 ↑, T3 ↑, E3 ↑, U1 ↑ | — | — | — |
| **I2 Catastrophic** | — | — | T1 ↑, E2, G3 | N4 | E1 ↑ |
| **I1 Severe** | — | T4 | N3, G4 ↑ | G1 ↑ | G2 |

*↑ = frequency–severity tail extends up into I4–I5 (near-existential/existential) at lower probability.*

The vertical axis is severity; the horizontal axis is likelihood-of-reaching-GCR-scale-this-century. Reading right-to-left along any row shows risks of similar impact ordered from more to less probable; reading bottom-to-top up any column shows risks of similar probability ordered from less to more severe.

*Dashboard rendering note.* The interactive monitor displays these 16 risks on a **5 × 5 grid** whose columns are the five likelihood bands (L1→L5, left to right) and whose rows are the five impact bands (I1→I5, bottom to top) — the same axes as the table above — with at most one risk per cell. Several risks share a modal cell, so the dashboard applies a deterministic placement rule: each risk takes its exact modal cell if free; otherwise it takes the nearest unoccupied cell **that still lies within its own documented plausible range** (the likelihood range in brackets and the impact modal→tail span in the table above), preferring a sideways (likelihood) move over a vertical (impact) move. No card is ever shown outside its own range. Under this rule three risks are displayed at the upper end of their impact range in row I4 — supervolcanic eruption (N2), Earth-system tipping points (E3) and loss of control over AI (T3) — and row I5 stays empty, since no risk's *most likely* outcome is extinction. The grid is invisible; only the two axes are labelled. A card's exact bands are always shown on its face and in the detail panel, so the position is a readable approximation, never the record. The resulting layout is:

```
I4 |  N2  E3  T3   –   –
I3 |  N1  T2  U1  G3  N4
I2 |   –  T1  E2  G4  E1
I1 |   –  T4  N3  G1  G2
     L1  L2  L3  L4  L5
```

### 5.8 Reading the map: four clusters

The placements fall into four strategically distinct clusters — the key insight the dashboard should dramatise:

- **Cluster A — Rare but civilisational (lower-left): N1, N2.** Very low probability this century, but civilisation-scale impact with existential tails. Well-constrained (especially asteroids). These suit an *insurance / preparedness* governance model — cheap vigilance against a remote but terminal threat.
- **Cluster B — Deep-uncertainty, high-ceiling (upper-left of centre): T2, T3, E3, U1.** Low-to-moderate probability but the **fattest existential tails and the widest disagreement among experts.** Anthropogenic pandemics, uncontrolled AI, Earth-system tipping points, and unknown risks. On a long-termist weighting these dominate total existential risk. This is the **priority zone** — and, per `GovernanceMapping.md`, the least-governed.
- **Cluster C — Likely and catastrophic, mostly recoverable (right side, mid-impact): N4, E1, E2, G3, T1.** These are the risks most likely to *actually occur at GCR scale* this century, causing immense loss of life and well-being; most are recoverable — **except nuclear war's tail (T1 ↑), which reaches I5.** Climate (E1) sits at the far right: near-certain to impose GCR-scale cumulative harm.
- **Cluster D — Probable multipliers, lower direct impact (lower-right): G1, G2, G4, and to a lesser degree T4, N3.** Modest-to-severe *direct* impact, but their real danger is that they **raise the probability and severity of everything else** and erode the capacity to respond. Their tails (↑) run through the risks they trigger — most importantly G1 → T1 and G4 → permanent lock-in.

The overall pattern echoes the governance finding: **the highest-probability risks are mostly recoverable, while the truly unrecoverable (existential) outcomes are low-probability tails concentrated in the deep-uncertainty cluster.** Both deserve attention, but for opposite reasons — one for its likelihood of causing vast suffering, the other for the finality of its worst case.

### 5.9 Limitations and academic caveats

This methodology is built to be criticised productively; its main limitations are stated plainly:

1. **These are comparative judgments, not forecasts.** They support prioritisation and deliberation, nothing more. The bands' numbers are order-of-magnitude anchors.
2. **Single-analyst synthesis.** For a research-grade product these should be replaced by **formal structured expert elicitation** (e.g., the IDEA protocol or Cooke's classical model) with documented reasoning and a living-update cadence.
3. **Known risk-matrix pathologies.** Risk matrices can mislead (Cox 2008): they compress ranges, can't discriminate within a cell, and behave badly when frequency and severity are negatively correlated — which here they *are*. We mitigate by (a) representing each risk as a **range with an explicit tail** rather than one cell, (b) keeping the exercise **comparative, not absolute**, and (c) **refusing to multiply likelihood × impact into a single score**. The dashboard's 4 × 4 compression (§5.7 note) adds a further approximation, which is why exact bands remain visible on every card.
4. **Incommensurability is left explicit, not hidden.** We deliberately do not reduce each risk to one number, because comparing "a 10% chance of 100 million deaths" with "a 1% chance of extinction" — or a mortality catastrophe with a well-being catastrophe — depends on value judgments that belong in the open, not buried inside a product.
5. **Risks are treated as separable, but they are not.** §6 and §7 show they are correlated and compounding; correlated risks make the *joint* probability of catastrophe exceed the sum of the parts. A future version should model these dependencies rather than scoring each risk in isolation.
6. **Confidence varies enormously across risks** (high for asteroids, very low for AI and unknowns). The map must always be read **together with the confidence column** — a well-located low-confidence risk can move a long way with new evidence.

---

## 6. Cross-cutting structure: interactions, cascades, and multipliers

The risks above are **not independent**, and the logic of the list depends on modelling that. Three structural facts recur across all five authoritative reports and must carry into the dashboard:

1. **Common consequence pathways.** Most catastrophes kill and destabilize through the same downstream channels — famine and agricultural collapse, infrastructure and supply-chain failure, financial crisis, mass displacement, and state failure. UN24's network analysis confirms this: "Mass Movement of People" and "Rule of Law Collapse" appear as the *cascade* outcome of almost every focal risk. These are represented once, as shared pathways, rather than duplicated as separate risks.
2. **Convergence and compounding (polycrisis).** Risks interact to produce harm greater than the sum of their parts (WEF "polycrisis"; RAND convergence analysis; UN24 connection-strength network). Climate change (E1) amplifies conflict (G1) and displacement; AI — as enabler — amplifies anthropogenic pandemics (T2), nuclear escalation (T1), information collapse (G2) and power concentration (G4); nuclear winter (T1) is itself a climate catastrophe. The dashboard represents these as edges between nodes.
3. **Multipliers vs. terminal hazards.** Family G risks are mostly *multipliers* that raise the probability or severity of Families N, T, and E, and that erode governance capacity — which is precisely why they matter for a governance-gap analysis even though they seldom cause extinction directly.

---

## 7. Most evident interconnections between the risks

Section 6 explains *why* the risks are treated as interdependent; this section names the specific linkages that matter most. None of these risks lives in a silo, and the dashboard renders them as a connected network. The most evident interconnections, in high-level terms:

**AI is the most connected enabler on the map.** Although listed as a hazard only where it becomes the terminal danger (T3, loss of control), artificial intelligence threads through almost every other risk as an accelerant. It lowers the barrier to designing engineered pathogens (T2); it compresses decision timelines in military systems and raises the odds of nuclear escalation (T1); it supercharges disinformation and erodes shared reality (G2); and whoever controls transformative AI first could entrench permanent dominance (G4). This is why the list embeds AI inside four risks rather than isolating it in one: its danger is distributed.

**The environmental cluster is tightly self-coupled and then spills outward.** Climate change, ecological collapse and Earth-system tipping points (E1–E3) reinforce one another through shared biophysical feedbacks — warming drives ecosystem loss, which weakens carbon sinks, which drives further warming. UN24 identifies "Climate Change Inaction" as the second most interconnected risk, cascading into biodiversity decline, resource shortage and mass movement of people. That cluster then spills into the human domain: climate stress and resource scarcity intensify armed conflict and displacement (G1), which in turn can raise the probability of nuclear use (T1).

**Nuclear war and climate are two faces of one catastrophe.** A large nuclear exchange (T1) would itself trigger a global climate shock — "nuclear winter" — collapsing agriculture worldwide. The trigger for T1 is typically great-power conflict (G1) — the single strongest connection in UN24's network ("Geopolitical Tensions → Large-Scale War → Weapons of Mass Destruction") — so the chain G1 → T1 → climate catastrophe is one of the most direct routes from a geopolitical spark to a planetary outcome.

**Pandemics sit at a natural/technological junction.** Natural (N4) and anthropogenic (T2) pandemics differ in origin but share the same detection, containment and health-system response infrastructure — UN24 treats them as one "Biorisks → New Pandemic" chain — so preparedness for one is preparedness for the other. Meanwhile environmental pressure raises the natural threat: ecological collapse and climate change (E1/E2) increase zoonotic spillover, feeding N4, while biotech and AI inflate the engineered threat (T2).

**The governance risks (G2, G4) are the meta-layer that decides everything else.** Governance failure and information collapse (G2) and technology-driven power concentration (G4) are not merely additional hazards — they set the *capacity of the entire system to respond* to all the others. They pull in opposite directions (fragmentation vs. lock-in) but both degrade the multilateral machinery this project exists to map. A world that cannot cooperate or cannot hold power accountable is a world that manages none of the other fourteen risks well. This is why the *Pact for the Future* frames the crisis as much about governance as about the hazards themselves, and why UN24 finds "weak governance and lack of consensus" to be the top barriers to action on every risk.

**Most risks converge on the same downstream channels.** Regardless of the trigger, catastrophes tend to become *global* through a shared set of sinks — famine and agricultural failure, financial and supply-chain collapse (G3), critical-infrastructure failure, and mass displacement. These common pathways are why otherwise unrelated risks can compound into a "polycrisis" greater than the sum of its parts.

---

## 8. Boundary cases and documented exclusions

To make the filter auditable, the following candidate risks were considered and **excluded from the primary list**, with reasons:

- **Stratospheric ozone-layer depletion** — a genuine global catastrophic risk of the 1970s–80s, since **resolved** by the Montreal Protocol. Excluded from the live list because it no longer meets Criterion 3 (non-negligible probability this century); retained in `GovernanceMapping.md` as the **positive benchmark** of what successful multilateral governance of a GCR looks like.
- **Artificial intelligence as a generic risk** — folded into the specific hazards it enables (T1, T2, G2, G4) per structural principle 2, with only the terminal loss-of-control case (T3) listed on its own. "Military AI / autonomous weapons" as a standalone entry was likewise merged into T1, where its catastrophic pathway (escalation to nuclear use) actually lies.
- **Regional natural hazards** (earthquakes, tsunamis, tropical cyclones, regional volcanic eruptions, floods, droughts, wildfires, heatwaves): severe and prominent in the UK NRR and in UN24's "Large-Scale Natural Hazard Risks," but fail Criterion 1 (global scope) except where they cascade globally, in which case they are captured under G3/N3/E1.
- **Astrophysical extremes** (nearby gamma-ray burst, supernova, vacuum decay, rogue-star/solar-system disruption): fail Criterion 3 (negligible probability this century). Noted here for completeness; folded conceptually into U1.
- **Ongoing chronic mortality** (cancer, cardiovascular disease, ambient air pollution, road deaths): individually exceed the 10-million-deaths threshold annually, but are excluded because they are steady-state processes civilization already absorbs, not novel civilization-collapse events — consistent with RAND's reasoning. Their governance is public health, not catastrophic-risk governance. (Pollution as an *ecosystem* stressor is inside E2.)
- **UN24 risks treated as consequence pathways or drivers rather than hazards** — "Mass Movement of People," "Rise in Inequalities," "Collapse of Social Cohesion," "Widespread Debt Crisis," "Sustained Global Economic Stagnation," "Economic Fragmentation," "State Sovereignty Erosion," "Proliferation of Non-State Actors." Each is real and serious, but each is either the *downstream channel* through which the listed hazards do their damage (displacement, cohesion collapse, state erosion) or a *driver* that raises their probability (inequality, stagnation, fragmentation); listing them separately would double-count (structural principle 1). Their well-being consequences are what Criterion 2(c) is designed to capture *within* the listed risks.
- **Non-global economic and social harms** (national recessions, localized terrorism, individual state collapse): fail Criterion 1 unless they propagate into G1/G3.

Documenting these exclusions is part of the rigor: the list is defined as much by what it deliberately leaves out as by what it includes.

---

## 9. Source register

This list triangulates five authoritative reference reports supplied for the project with additional authoritative external sources.

**Primary supplied sources (in the GRG-Fable folder):**
- **GCF 2026** — Global Challenges Foundation, *Global Catastrophic Risks 2026*. Risks: catastrophic climate change; ecological collapse; weapons of mass destruction; AI in military decision-making; near-Earth asteroids; framed by Earth-system stability. (`FE2026.md`)
- **RAND 2024** — RAND/Homeland Security Operational Analysis Center, *Global Catastrophic Risk Assessment* (RRA2981-1), grounded in the US Global Catastrophic Risk Management Act. Risks assessed: supervolcanoes; asteroid/comet impact; severe pandemics; rapid & severe climate change; nuclear war; artificial intelligence. Consequence categories: mortality, ecosystem instability, societal instability, reduced human capabilities. (`HSOAC2024.md`)
- **UK NRR 2025** — UK Government, *National Risk Register 2025*. National-scale hazard taxonomy (terrorism, cyber, state threats, infrastructure failure, natural and environmental hazards, human/animal/plant health, societal, conflict) with explicit likelihood × impact scoring; used for the globally-scoped subset. (`UK2025.md`)
- **WEF 2026** — World Economic Forum, *Global Risks Report 2026* (21st ed.). 33+ risks across five categories: Economic, Environmental, Geopolitical, Societal, Technological. (`WEF2026.md`)
- **UN24** — United Nations, *Global Risk Report 2024* (Executive Office of the Secretary-General; data collected 2024). Defines a global risk as "an event or condition that would have a significant negative impact on a large portion of humanity and the planet"; 28 risks under the STEEP framework, curated from 100+ candidates by the Pardee Center and validated by UN technical focal points; 1,100 respondents across 136 countries scoring likelihood and severity by 2050, preparedness, and inter-risk connections; identifies "Global Vulnerabilities" where importance is high and preparedness low (mis/disinformation; environmental, societal and technological clusters). (`UN2024.md`)

**Additional authoritative external sources:**
- **Pact for the Future** — UN General Assembly resolution A/RES/79/1 (2024); source of the "catastrophic and existential risks" framing.
- **Ord, *The Precipice* (2020)** — three-part natural/current-anthropogenic/future-anthropogenic taxonomy and century-scale existential-risk estimates; source of illustrative probabilities and the "unknown risk" category.
- **Bostrom & Ćirković, *Global Catastrophic Risks* (2008); GCRMA (US Public Law 117-263)** — foundational definitions of GCR ("serious damage to human well-being on a global scale"), existential risk, severity (endurable vs. crushing), and civilization collapse.
- **UN Independent International Scientific Panel on AI, Preliminary Report (July 2026)** — on the absence of technical guarantees of control over advanced systems and the concentration of compute.

---

## 10. Summary table

| # | Risk | Family | Origin | Time profile | Severity ceiling |
|---|------|--------|--------|--------------|------------------|
| N1 | Asteroid / comet impact | Natural | N | Persistent | Existential |
| N2 | Supervolcanic eruption | Natural | N | Persistent | GCR→X |
| N3 | Severe space weather | Natural | N | Persistent/Emerging | GCR |
| N4 | Natural pandemic | Natural | N | Persistent / recent-past realized | GCR |
| T1 | Nuclear war (incl. AI-compressed escalation) | Technological | T/G | Persistent/Escalating | GCR→X |
| T2 | Anthropogenic pandemic (engineered/accidental; AI-facilitated) | Technological | T | Emerging/Escalating | Existential |
| T3 | Loss of human control over advanced AI | Technological | T | Emerging/Escalating | Existential |
| T4 | Other WMD (chemical, radiological) | Technological | T/G | Persistent | GCR |
| E1 | Catastrophic climate change | Environmental | E | Persistent/Escalating | GCR(→X tail) |
| E2 | Ecological collapse, biodiversity loss & resource depletion | Environmental | E | Persistent/Escalating | GCR |
| E3 | Earth-system tipping points (incl. geoengineering failure) | Environmental | E | Emerging/Escalating | GCR→X |
| G1 | Great-power / state-based armed conflict | Geopolitical | G | Persistent/Escalating | GCR |
| G2 | Governance failure & information collapse | Geopolitical | G | Emerging/Escalating | GCR (multiplier) |
| G3 | Global systemic & infrastructure collapse | Geopolitical | G/T | Persistent/Escalating | GCR |
| G4 | Technology-driven power concentration (AI-facilitated) | Geopolitical | G/T | Emerging/Escalating | GCR→X (lock-in) |
| U1 | Unknown / unforeseen & emerging risks | Unknown | U | Emerging | GCR→X |

**15 named risks + 1 residual category = 16 entries, across 5 families.** This master list is the fixed reference frame for the likelihood × impact assessment (§5), the multilateral mechanism and gap mapping (`GovernanceMapping.md`), and the interactive Global Risk Governance Monitor (`index.html`).
