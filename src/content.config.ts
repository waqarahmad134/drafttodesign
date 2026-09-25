import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string(),
    description: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    icon: z.string(),
    priceFrom: z.string(),
    deliveryTime: z.string(),
    order: z.number(),
  }),
});

const states = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/states' }),
  schema: z.object({
    title: z.string(),
    stateName: z.string(),
    stateAbbr: z.string(),
    description: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    order: z.number(),
  }),
});

const cities = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cities' }),
  schema: z.object({
    title: z.string(),
    cityName: z.string(),
    stateName: z.string(),
    stateAbbr: z.string(),
    stateSlug: z.string(),
    description: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    neighborhoods: z.array(z.string()).optional(),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { services, states, cities, posts };
