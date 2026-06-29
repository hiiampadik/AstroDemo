import { z, defineCollection } from 'astro:content';

const subpagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    graphic: z.string(), // Path to the SVG file
  }),
});

export const collections = {
  'subpages': subpagesCollection,
};
