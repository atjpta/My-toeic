import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'public/**/*.md',
      schema: z.object({
        date: z.string()
      })
    })
  }
})
