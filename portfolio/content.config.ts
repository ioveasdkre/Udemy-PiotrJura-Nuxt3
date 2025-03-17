import { defineContentConfig, defineCollection, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
    }),
    blog07: defineCollection({
      type: 'page',
      source: 'blog-ch07/**/*.md',
      schema: z.object({
        title: z.string(),
        publishedAt: z.date(), // 如果是日期，使用 z.date()
        year: z.number(),
      }),
    }),
    blog08: defineCollection({
      type: 'page',
      source: 'blog-ch08/**/*.md',
      schema: z.object({
        title: z.string(),
        publishedAt: z.date(), // 如果是日期，使用 z.date()
        year: z.number(),
      }),
    }),
    blog09: defineCollection({
      type: 'page',
      source: 'blog-ch09/**/*.md',
      schema: z.object({
        title: z.string(),
        publishedAt: z.date(), // 如果是日期，使用 z.date()
        year: z.number(),
      }),
    }),
  },
});
