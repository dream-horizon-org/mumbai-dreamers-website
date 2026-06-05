import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'ourClubContent',
  title: 'Our Club — Content',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Our Club',
    }),

    // Who We Are Section
    defineField({
      name: 'whoWeAreHeading',
      title: 'Who We Are — Heading',
      type: 'string',
      initialValue: 'WHO WE ARE',
    }),
    defineField({
      name: 'whoWeAreTitle',
      title: 'Who We Are — Main Title',
      type: 'string',
      initialValue: 'FOUNDED BY DREAM SPORTS',
    }),
    defineField({
      name: 'whoWeAreDescription',
      title: 'Who We Are — Description',
      type: 'text',
    }),
    defineField({
      name: 'whoWeArePhoto',
      title: 'Who We Are — Photo',
      type: 'image',
      options: { hotspot: true },
    }),

    // Our Identity Section
    defineField({
      name: 'identityHeading',
      title: 'Our Identity — Heading',
      type: 'string',
      initialValue: 'OUR IDENTITY',
    }),
    defineField({
      name: 'identityTitle',
      title: 'Our Identity — Main Title',
      type: 'string',
      initialValue: 'MORE THAN A TEAM',
    }),
    defineField({
      name: 'identityDescription',
      title: 'Our Identity — Description',
      type: 'text',
    }),

    // Coaching & Leadership Section
    defineField({
      name: 'coachingHeading',
      title: 'Coaching & Leadership — Heading',
      type: 'string',
      initialValue: 'COACHING & LEADERSHIP',
    }),
    defineField({
      name: 'coachingTitle',
      title: 'Coaching & Leadership — Main Title',
      type: 'string',
      initialValue: 'EXPERT GUIDANCE',
    }),
    defineField({
      name: 'coachingDescription',
      title: 'Coaching & Leadership — Description',
      type: 'text',
    }),
    defineField({
      name: 'coachingCtaText',
      title: 'Coaching & Leadership — CTA Text',
      type: 'string',
      initialValue: 'Learn More',
    }),
    defineField({
      name: 'coachingCtaLink',
      title: 'Coaching & Leadership — CTA Link',
      type: 'string',
    }),
    defineField({
      name: 'coachingPhoto',
      title: 'Coaching & Leadership — Photo',
      type: 'image',
      options: { hotspot: true },
    }),

    // Our Players Section
    defineField({
      name: 'playersHeading',
      title: 'Our Players — Heading',
      type: 'string',
      initialValue: 'OUR PLAYERS',
    }),
    defineField({
      name: 'playersTitle',
      title: 'Our Players — Main Title',
      type: 'string',
      initialValue: 'THE HEART OF THE TEAM',
    }),
    defineField({
      name: 'playersDescription',
      title: 'Our Players — Description',
      type: 'text',
    }),
    defineField({
      name: 'playersPhoto',
      title: 'Our Players — Photo',
      type: 'image',
      options: { hotspot: true },
    }),

    // Vision Section
    defineField({
      name: 'visionHeading',
      title: 'Vision — Heading',
      type: 'string',
      initialValue: 'OUR VISION',
    }),
    defineField({
      name: 'visionTitle',
      title: 'Vision — Main Title',
      type: 'string',
      initialValue: 'BUILDING A RUGBY LEGACY',
    }),
    defineField({
      name: 'visionDescription',
      title: 'Vision — Description',
      type: 'text',
    }),
  ],
})
