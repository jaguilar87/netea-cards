import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    armies: defineCollection({
      type: 'page',
      source: 'netea40k/army_lists/*.md'
    }),
    forces: defineCollection({
      type: 'page',
      source: 'netea40k/forces/*.md'
    }),
    units: defineCollection({
      type: 'page',
      source: 'netea40k/units/*.md'
    }),
    weapons: defineCollection({
      type: 'page',
      source: 'netea40k/weapons/*.md'
    }),
    specialRules: defineCollection({
      type: 'page',
      source: 'netea40k/special_rules/*.md'
    }),
    constants: defineCollection({
      type: 'data',
      source: '*.json'
    })
  },
  
})