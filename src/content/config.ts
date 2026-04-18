import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		scientificName: z.string().optional(),
		date: z.string(),
		excerpt: z.string(),
		image: z.string().optional(),
		category: z.string().optional(),
		threatLevel: z.string().optional(),
	}),
});

export const collections = { blog };
