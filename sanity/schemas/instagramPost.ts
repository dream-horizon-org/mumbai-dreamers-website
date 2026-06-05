import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'instagramPost',
  title: 'Instagram Post',
  type: 'document',
  fields: [
    defineField({
      name: 'postUrl',
      title: 'Post URL',
      type: 'url',
      description: 'Full Instagram post URL',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Post Thumbnail',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'postDate',
      title: 'Post Date',
      type: 'string',
      description: 'Display label, e.g. "MAY 22, 2026"',
    }),
  ],
})
