import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'standingsEntry',
  title: 'Standings Entry',
  type: 'document',
  fields: [
    defineField({
      name: 'team',
      title: 'Team',
      type: 'reference',
      to: [{ type: 'team' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gender',
      title: 'Gender',
      type: 'string',
      options: {
        list: [
          { title: "Men's", value: 'mens' },
          { title: "Women's", value: 'womens' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'matchesPlayed',
      title: 'Matches Played',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'wins',
      title: 'Wins',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'draws',
      title: 'Draws',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'losses',
      title: 'Losses',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'scoreDifference',
      title: 'Score Difference',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'bonusPoints',
      title: 'Bonus Points',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'points',
      title: 'Points',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'team.name',
      pos: 'position',
      subtitle: 'gender',
      media: 'team.logo',
    },
    prepare({ title, pos, subtitle, media }) {
      return {
        title: `#${pos} ${title ?? 'Unknown Team'}`,
        subtitle: subtitle === 'mens' ? "Men's" : "Women's",
        media,
      }
    },
  },
})
