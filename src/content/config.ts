import { z, defineCollection } from 'astro:content';

/**
 * Infographics — the Atlas content model, edited in Decap CMS.
 * One markdown file per infographic; the markdown body is the article text.
 * Chapter metadata (name / tagline / order) lives in src/data/chapters.ts.
 */
const infographicsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    lead: z.string(),
    chapter: z.enum([
      'introduction',
      'the-science',
      'the-impacts',
      'the-trajectory',
      'the-solutions',
    ]),
    order: z.number().default(0),
    image: z.string(), // public path, e.g. /images/atlas/atlas-_08.png
    downloads: z
      .object({
        pdf: z.string().optional(),
      })
      .optional(),
    data: z
      .object({
        tableUrl: z.string().optional(),
        sourceUrl: z.string().optional(),
        citation: z.string().optional(),
      })
      .optional(),
    related: z.array(z.string()).optional(),
  }),
});

export const collections = {
  infographics: infographicsCollection,
};
