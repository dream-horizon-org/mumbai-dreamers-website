import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'ourClubImages',
  title: 'Our Club — Photography',
  type: 'document',
  fields: [
    defineField({
      name: 'whoWeArePhoto',
      title: 'Who We Are Photo',
      type: 'image',
      options: { hotspot: true },
      description: 'Team photo for the "Who We Are" section',
    }),
    defineField({
      name: 'coachingPhoto',
      title: 'Coaching & Leadership Photo',
      type: 'image',
      options: { hotspot: true },
      description: 'Coaching staff photo',
    }),
    defineField({
      name: 'playersPhoto',
      title: 'Our Players Photo',
      type: 'image',
      options: { hotspot: true },
      description: 'Action photo of players',
    }),
  ],
})
