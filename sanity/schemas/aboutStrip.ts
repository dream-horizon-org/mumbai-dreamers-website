import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'aboutStrip',
  title: 'About Strip — Photography',
  type: 'document',
  fields: [
    defineField({
      name: 'mensPhoto',
      title: "Men's Squad Photo",
      type: 'image',
      options: { hotspot: true },
      description: 'Background photo for the Men\'s panel on the homepage',
    }),
    defineField({
      name: 'womensPhoto',
      title: "Women's Squad Photo",
      type: 'image',
      options: { hotspot: true },
      description: 'Background photo for the Women\'s panel on the homepage',
    }),
  ],
})
