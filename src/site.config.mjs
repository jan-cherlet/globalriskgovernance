// Site-wide settings and editorial text. Edit here; the pages follow.
export const site = {
  name: 'Global Risk Governance Monitor',
  shortName: 'Monitor',
  url: 'https://www.globalriskgovernance.org',
  description: 'An overview of global catastrophic and existential risks, and of how well the world governs them.',
  tagline: 'Mapping the risks that could end or cripple civilisation, and the gaps in the way the world governs them.',
  author: 'Jan Cherlet',
  authorUrl: 'https://jancherlet.info',
  contactUrl: 'https://jancherlet.info',
  paperTitle: 'Global catastrophic and existential risks for humanity and their multilateral governance',
  paperUrl: '/Cherlet_2026_GCER_multilateral_governance.pdf',
  repoUrl: 'https://github.com/jan-cherlet/globalriskgovernance',
  // Leave empty until a mailing service is set up. When it is set, the newsletter block shows an e-mail field that posts to this address.
  newsletterEndpoint: '',
  enableAnnouncement: false,
  announcement: { prefix: 'New paper:', text: 'Global catastrophic and existential risks and their multilateral governance', href: '/Cherlet_2026_GCER_multilateral_governance.pdf' },
};

// Five domains plus one group of risk multipliers (redesign file, M07). This table drives colours, order, captions, domain pages and the domain filter.
// The framing texts are drafts by the site builder and are meant to be edited.
export const domains = [
  {
    slug: 'natural-hazards', name: 'Natural hazards', color: 'blue', ink: 'paper', members: ['N1', 'N2', 'N3'],
    line: 'Hazards from space and from the Earth itself that do not depend on what humans do.',
    question: 'How well is humanity prepared for hazards that it cannot prevent?',
    framing: [
      'An asteroid, a super-eruption or an extreme solar storm would strike regardless of human behaviour. Humans can only watch for them, protect the systems they depend on and prepare a response.',
      'These are the best-measured risks in the Monitor. Science can estimate how often they occur and, for asteroids, can even show how to deflect one.',
      'Their governance stops at knowledge. Networks of agencies observe and warn, but no agreement says who decides, who acts and who pays when the warning comes.',
    ],
  },
  {
    slug: 'biological-risks', name: 'Biological risks', color: 'saffron', ink: 'charcoal', members: ['N4', 'W2'],
    line: 'Pandemics, whether a pathogen emerges from nature or is made and released by people.',
    question: 'Can the world detect, prevent and contain the next pandemic, whatever its origin?',
    framing: [
      'A pandemic can start in nature or in a laboratory. The two origins are separate risks, because the mechanisms and the remedies differ, but they meet in the same health systems.',
      'Detection of outbreaks is the strongest part of the regime. The World Health Organization and its networks see most events early.',
      'The weak points are compliance and verification. Nobody can make a state report in time, and the ban on biological weapons has no means of checking that it is respected.',
    ],
  },
  {
    slug: 'earth-system', name: 'Environment & Earth system', color: 'teal', ink: 'paper', members: ['E1', 'E2', 'T2'],
    line: 'The slow destabilisation of climate and living systems, and the attempt to engineer a way out.',
    question: 'Can many states and billions of people stop a harm that each of them adds to only a little?',
    framing: [
      'Climate change and the collapse of the biosphere build up slowly from countless ordinary acts. Their worst case is abrupt: tipping points that cannot be reversed.',
      'These risks have the most complete institutions of all: scientific panels, universal treaties and dedicated funds.',
      'The institutions exist, but the targets are voluntary and are being missed. A deliberate intervention in the climate could become the next risk, and almost no rule covers it.',
    ],
  },
  {
    slug: 'weapons-conflict', name: 'Weapons & conflict', color: 'vermilion', ink: 'paper', members: ['W1', 'W3'],
    line: 'The deliberate use of weapons that can kill on a mass scale.',
    question: 'Do the rules on weapons of mass destruction still bind the states that hold them?',
    framing: [
      'Nuclear, chemical and radiological weapons are built to destroy. The risk is that they are used on a large scale, by decision or by miscalculation.',
      'This domain holds the strongest regime in the Monitor, the ban on chemical weapons, which is binding, verified and enforced.',
      'It also holds a regime in retreat. Since February 2026 no treaty limits the two largest nuclear arsenals, and the states with nuclear weapons stay outside the treaty that prohibits them.',
    ],
  },
  {
    slug: 'technology-society', name: 'Technology & society', color: 'aubergine', ink: 'paper', members: ['T1', 'T3', 'F1', 'F2'],
    line: 'Loss of control: over powerful technology, over concentrated power, and over the systems that society runs on.',
    question: 'Who governs technologies and systems that no single state controls?',
    framing: [
      'The risks in this domain do not need an attacker. Advanced AI may escape control, power may concentrate beyond correction, tightly linked systems may fail together, and a new technology may bring a danger that nobody foresaw.',
      'These are the least governed risks in the Monitor. Most of them have only assessment and dialogue, and some have nothing at all.',
      'Governance of AI is now emerging, but along separate tracks: one at the United Nations, one around the United States and one around China.',
    ],
  },
  {
    slug: 'multipliers', name: 'Risk multipliers', color: 'blush', ink: 'charcoal', members: ['M1', 'M2', 'M3'],
    line: 'Conditions that raise the likelihood or severity of every risk.',
    question: 'What makes every other risk harder to govern?',
    framing: [
      'A multiplier is not a catastrophe in itself. It is a condition that makes the risks more likely or more severe, or that weakens the response to them.',
      'Rivalry between great powers blocks cooperation. Fragmented societies and a damaged information space weaken the capacity to act. AI speeds up and lowers the cost of several other risks.',
      'Multipliers are not placed on the likelihood and impact scales. Their governance is assessed in the same way as that of the risks.',
    ],
  },
];

export const pillarLabels = { assess: 'Assess', regulate: 'Regulate', finance: 'Finance', enforce: 'Enforce' };
export const pillarPlain = { assess: 'Knowledge', regulate: 'Rules', finance: 'Money', enforce: 'Teeth' };
export const pillarQuestion = { assess: 'Who assesses the risk?', regulate: 'Which rules apply?', finance: 'Who pays to reduce it?', enforce: 'Who checks and enforces?' };
