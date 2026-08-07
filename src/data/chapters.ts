/**
 * Chapter metadata for the Atlas — the 5 fixed sections, their display name,
 * tagline and order. This is site structure (rarely changes), kept in code
 * rather than the CMS. Infographics reference a chapter by `id`.
 */
export interface ChapterMeta {
  id: string;
  name: string; // bold chapter name, e.g. "Introduction"
  tagline: string; // descriptive tagline, e.g. "The Big Picture"
  order: number;
}

export const chapterMeta: ChapterMeta[] = [
  { id: 'introduction', name: 'Introduction', tagline: 'The Big Picture', order: 1 },
  { id: 'the-science', name: 'The Science', tagline: 'Concentrations and Temperatures', order: 2 },
  { id: 'the-impacts', name: 'The Impacts', tagline: 'A Changing Planet', order: 3 },
  { id: 'the-trajectory', name: 'The Trajectory', tagline: 'Emissions and Future Warming', order: 4 },
  { id: 'the-solutions', name: 'The Solutions', tagline: 'Pathways to Change', order: 5 },
];

export const chapterName = (id: string): string =>
  chapterMeta.find((c) => c.id === id)?.name ?? id;
