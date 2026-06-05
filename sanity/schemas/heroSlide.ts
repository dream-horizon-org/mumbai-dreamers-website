import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'heroSlide',
  title: 'Hero Slide',
  type: 'document',
  fields: [
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Slide display order. 1 = first.',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'tagLine',
      title: 'Tag Line',
      type: 'string',
      description: 'Small eyebrow text above headline, e.g. "RPL SEASON 2 · JUNE 2026"',
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subLine',
      title: 'Sub-line',
      type: 'string',
    }),
    defineField({
      name: 'ctaLabel',
      title: 'CTA Label Override',
      type: 'string',
      description: 'Leave blank to use the global default from Site Settings.',
    }),
    defineField({
      name: 'ctaHref',
      title: 'CTA Link',
      type: 'string',
      description: 'Internal path, e.g. /squad or /contact',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Background Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imageAlt',
      title: 'Image Alt Text',
      type: 'string',
    }),
  ],
  orderings: [
    {
      title: 'Slide Order',
      name: 'order',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
