import {defineCollection, z} from "astro:content"

const blog = defineCollection({
    type: "content",
    // Type-check frontmatter using a schema
    schema: z.object({
        title: z.string(),
        excerpt: z.string(),
        // Transform string to Date object
        publishedDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        image: z.string().optional(),
        category: z.string(),
        tags: z.array(z.string()).optional(),
        draft: z.boolean().optional(),
    }),
})

export const collections = {blog}
