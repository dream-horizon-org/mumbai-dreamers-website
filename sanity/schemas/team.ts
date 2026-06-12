import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'team',
  title: 'Team',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Team Name',
      type: 'string',
      description: 'e.g. Kalinga Black Tigers',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Team Logo',
      type: 'image',
      description: 'Upload a PNG or SVG. Transparent background recommended.',
      options: {
        hotspot: false,
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
    },
  },
})
