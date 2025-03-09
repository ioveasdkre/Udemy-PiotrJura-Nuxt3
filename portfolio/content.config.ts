import { defineContentConfig, defineCollection, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
    }),
    blog: defineCollection({
      type: 'page',
      source: 'blog-ch07/**/*.md',
      schema: z.object({
        title: z.string(),
        publishedAt: z.date(), // 如果是日期，使用 z.date()
        year: z.number(),
      }),
    }),
  },
});
