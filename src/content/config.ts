import { defineCollection, z } from 'astro:content';

const baseSchema = z.object({
  title: z.string(),
  date: z.date(),
  description: z.string().optional(),
  embedUrl: z.string().url().optional(),
  image: z.string().optional(),
});

export const collections = {
  music: defineCollection({ type: 'content', schema: baseSchema }),
  video: defineCollection({ type: 'content', schema: baseSchema }),
  writing: defineCollection({ type: 'content', schema: baseSchema }),
  visuals: defineCollection({ type: 'content', schema: baseSchema }),
};
