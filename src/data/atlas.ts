/**
 * Sample feed content for the Atlas of Climate Change.
 * Mirrors the eventual `infographics` content model (title / lead / chapter /
 * image / slug). Local data for now — swap for the Decap collection later.
 * Titles + leads are from `tmp/web _ Atlas of climate change.pdf`; images are
 * the atlas exports in public/images/atlas/ (atlas-_01 is the cover — skipped).
 */
export interface Infographic {
  slug: string;
  title: string;
  lead: string;
  image: string; // filename in public/images/atlas/
}

export interface Chapter {
  id: string;
  /** Bold chapter name, e.g. "Introduction". */
  name: string;
  /** Descriptive tagline, e.g. "The Big Picture". */
  tagline: string;
  infographics: Infographic[];
}

export const chapters: Chapter[] = [
  {
    id: 'introduction',
    name: 'Introduction',
    tagline: 'The Big Picture',
    infographics: [
      {
        slug: 'causes-and-effects-of-climate-change',
        title: 'Causes and Effects of Climate Change',
        lead: 'Climate change is much more than rising temperatures. It is a long chain of interconnected causes and effects.',
        image: 'atlas-_08.png',
      },
      {
        slug: 'century-of-climate-science',
        title: 'Century of Climate Science',
        lead: 'We have known about climate change caused by CO₂ emissions for more than a hundred years.',
        image: 'atlas-_10.png',
      },
    ],
  },
  {
    id: 'the-science',
    name: 'The Science',
    tagline: 'Concentrations and Temperatures',
    infographics: [
      {
        slug: 'co2-concentrations-at-an-800000-year-high',
        title: 'CO₂ Concentrations at an 800,000-Year High',
        lead: 'The concentration of atmospheric CO₂ today is the highest since the dawn of humanity.',
        image: 'atlas-_12.png',
      },
      {
        slug: 'the-changing-balance-of-atmospheric-co2-and-o2',
        title: 'The Changing Balance of Atmospheric CO₂ & O₂',
        lead: 'Changes in carbon dioxide and oxygen concentrations show annual cycles of respiration and photosynthesis, as well as the long-term effects of fossil fuel combustion.',
        image: 'atlas-_14.png',
      },
      {
        slug: 'how-much-is-the-planet-warming',
        title: 'How Much Is the Planet Warming?',
        lead: 'The world is now approximately 1.3 °C warmer than in 1850–1900. Over the last thirty years, the warming rate has been around 0.25 °C per decade.',
        image: 'atlas-_16.png',
      },
      {
        slug: 'global-map-of-temperature-changes',
        title: 'Global Map of Temperature Changes',
        lead: 'The warming rate is not uniform around the globe. Continents warm faster than oceans, and the Northern Hemisphere faster than the Southern.',
        image: 'atlas-_18.png',
      },
      {
        slug: 'warming-from-last-glacial-period-to-present',
        title: 'Warming from Last Glacial Period to Present',
        lead: 'It took the planet at least 7,000 years to warm by 7 °C from the last glacial period. It took only the last 100 years to warm by 1.3 °C.',
        image: 'atlas-_20.png',
      },
      {
        slug: 'the-direct-link-between-co2-and-temperature',
        title: 'The Direct Link Between CO₂ and Temperature',
        lead: 'The higher the CO₂ concentration in the atmosphere, the higher the Earth’s temperature.',
        image: 'atlas-_22.png',
      },
      {
        slug: 'the-greenhouse-effect-and-energy-imbalance',
        title: 'The Greenhouse Effect and Energy Imbalance',
        lead: 'Earth’s climate is set by a balance between energy from the Sun and energy radiated back to space. Human activity has now disrupted this equilibrium.',
        image: 'atlas-_24.png',
      },
    ],
  },
  {
    id: 'the-impacts',
    name: 'The Impacts',
    tagline: 'A Changing Planet',
    infographics: [
      {
        slug: 'accelerating-sea-level-rise',
        title: 'Accelerating Sea Level Rise',
        lead: 'From 1880 to 2025, global mean sea level rose by about 25 centimetres — and it will keep rising for centuries.',
        image: 'atlas-_26.png',
      },
      {
        slug: 'extreme-weather-is-growing-more-severe',
        title: 'Extreme Weather Is Growing More Severe',
        lead: 'Extreme weather events occur more frequently and with greater intensity with any rise in global temperature.',
        image: 'atlas-_28.png',
      },
      {
        slug: 'map-of-climate-tipping-points',
        title: 'Map of Climate Tipping Points',
        lead: 'Beyond certain critical thresholds, Earth’s response to warming is no longer linear or predictable.',
        image: 'atlas-_30.png',
      },
      {
        slug: 'the-thresholds-of-climate-tipping-risks',
        title: 'The Thresholds of Climate Tipping Risks',
        lead: 'Five of Earth’s vital climate components are already at risk of irreversible change.',
        image: 'atlas-_32.png',
      },
    ],
  },
  {
    id: 'the-trajectory',
    name: 'The Trajectory',
    tagline: 'Emissions and Future Warming',
    infographics: [
      {
        slug: 'which-greenhouse-gases-matter-most',
        title: 'Which Greenhouse Gases Matter Most?',
        lead: 'While CO₂ emissions are the dominant force behind warming, methane, nitrous oxide, and F-gases also play a significant role.',
        image: 'atlas-_34.png',
      },
      {
        slug: 'global-emissions-continue-to-grow',
        title: 'Global Emissions Continue to Grow',
        lead: 'Global greenhouse gas emissions have nearly doubled over the past 55 years.',
        image: 'atlas-_36.png',
      },
      {
        slug: 'the-carbon-budget-how-much-remains',
        title: 'The Carbon Budget: How Much Remains?',
        lead: 'If emissions continue at 2025 levels, the remaining carbon budget for staying below 1.5 °C will be exhausted in 2030.',
        image: 'atlas-_38.png',
      },
      {
        slug: 'projections-of-warming-in-2100',
        title: 'Projections of Warming in 2100',
        lead: 'With current policies, the world is on track for about 2.6 °C of warming by the end of this century.',
        image: 'atlas-_40.png',
      },
    ],
  },
  {
    id: 'the-solutions',
    name: 'The Solutions',
    tagline: 'Pathways to Change',
    infographics: [
      {
        slug: 'the-history-of-international-climate-agreements',
        title: 'The History of International Climate Agreements',
        lead: 'Key milestones in the global effort to protect the climate — summits, panels, negotiations, and treaties.',
        image: 'atlas-_42.png',
      },
      {
        slug: 'climate-solutions-across-sectors',
        title: 'Climate Solutions Across Sectors',
        lead: 'Stopping greenhouse gas emissions requires distinct strategies for different sectors of the economy.',
        image: 'atlas-_44.png',
      },
      {
        slug: 'the-steady-decline-of-eu-emissions',
        title: 'The Steady Decline of EU Emissions',
        lead: 'Between 1990 and 2023, EU emissions dropped by 34% — decreasing in every sector except transportation.',
        image: 'atlas-_46.png',
      },
      {
        slug: 'who-drives-change-state-business-and-people',
        title: 'Who Drives Change? State, Business, and People',
        lead: 'Decarbonization involves three main groups of actors: the state, businesses, and people. Success depends on their cooperation.',
        image: 'atlas-_48.png',
      },
    ],
  },
];
