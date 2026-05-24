import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const insights = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    author: z.string().default('SnowOps'),
    tags: z.array(z.string()).default([]),
    readingTime: z.string().optional(),
  }),
});

export const collections = { insights };
