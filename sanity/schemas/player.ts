import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'player',
  title: 'Squad Player',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'team',
      title: 'Team',
      type: 'string',
      options: {
        list: [
          { title: "Men's", value: 'mens' },
          { title: "Women's", value: 'womens' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'nationality',
      title: 'Nationality',
      type: 'string',
    }),
    defineField({
      name: 'countryCode',
      title: 'Country Code (ISO 3166-1 alpha-2)',
      type: 'string',
      description: 'e.g. "in" for India, "nz" for New Zealand. Leave blank if TBC.',
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
      description: 'e.g. "Wing", "Forward". Use "TBC" if not confirmed.',
    }),
    defineField({
      name: 'age',
      title: 'Age',
      type: 'number',
      description: 'Set to 0 if not confirmed.',
    }),
    defineField({
      name: 'photo',
      title: 'Player Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'cartoon',
      title: 'Cartoon Illustration',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first in the carousel.',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'displayOrder',
      by: [{ field: 'displayOrder', direction: 'asc' }],
    },
  ],
})
