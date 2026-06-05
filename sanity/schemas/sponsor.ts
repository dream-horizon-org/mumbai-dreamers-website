import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'sponsor',
  title: 'Sponsor',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Sponsor Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'categoryLabel',
      title: 'Category Label',
      type: 'string',
      description: 'e.g. "Title Sponsor", "Kit Partner"',
    }),
    defineField({
      name: 'linkUrl',
      title: 'Website URL',
      type: 'url',
    }),
    defineField({
      name: 'active',
      title: 'Show this sponsor?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first.',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      active: 'active',
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    prepare(val: any) {
      return { title: val.title, subtitle: val.active ? 'Active' : 'Hidden' }
    },
  },
})
