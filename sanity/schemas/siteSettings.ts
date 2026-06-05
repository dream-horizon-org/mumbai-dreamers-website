import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'seasonPhase',
      title: 'Season Phase',
      type: 'string',
      options: {
        list: [
          { title: 'Pre-season — hero CTA shows "Meet the Squad"', value: 'pre_season' },
          { title: 'In-season — hero CTA shows "Watch Live"', value: 'in_season' },
          { title: 'Post-season — hero CTA shows "Watch Highlights"', value: 'post_season' },
        ],
        layout: 'radio',
      },
      initialValue: 'pre_season',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
