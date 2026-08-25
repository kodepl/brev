import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.string().optional(),
    image: z.string().optional(),
    author: z.string().optional(),
    authorBio: z.string().optional(),
    authorAvatar: z.string().optional(),
    tags: z.array(z.string()).optional(),
    readingTime: z.string().optional(),
  }),
});

export const collections = { blog };
