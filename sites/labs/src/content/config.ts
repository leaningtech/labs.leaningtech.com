import { defineDocsCollection } from "@leaningtech/astro-theme/content";
import { defineCollection, z } from "astro:content";

const productTags = z.array(z.enum(["Cheerp", "CheerpJ", "CheerpX"]));

export type ProductTag = z.infer<typeof productTags>[0];

const blogauthors = defineCollection({
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			jobTitle: z.string().optional(),
			avatar: image().optional(),
			url: z.string().optional(),
			guest: z.boolean().default(false),
		}),
	type: "data",
});

const blog = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			shortTitle: z.string().optional(),
			subtitle: z.string().optional(),
			description: z.string(),
			pubDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			updatedDate: z
				.string()
				.optional()
				.transform((str) => (str ? new Date(str) : undefined)),
			authors: z.array(z.string()),
			heroImage: image().optional(),
			featured: z.boolean().default(false),
			draft: z.boolean().default(false),
			tags: productTags.optional(),
		}),
});

const docs = defineDocsCollection();

export const collections = { docs, blog, blogauthors };
