import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'fixture',
  title: 'Fixture / Result',
  type: 'document',
  fields: [
    defineField({
      name: 'matchId',
      title: 'Match ID',
      type: 'string',
      description: 'e.g. M3, W2, SF, Final',
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
      name: 'date',
      title: 'Date Label',
      type: 'string',
      description: 'Display label, e.g. "Tuesday 16 Jun"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dateISO',
      title: 'Date (ISO for sorting)',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'time',
      title: 'Kick-off Time',
      type: 'string',
      description: 'e.g. "9:00 PM" or "TBC"',
    }),
    defineField({
      name: 'teamA',
      title: 'Team A Name',
      type: 'string',
    }),
    defineField({
      name: 'teamARef',
      title: 'Team A — Logo Source',
      type: 'reference',
      to: [{ type: 'team' }],
      description: 'Link to the Team entry to show their logo on the fixture row.',
    }),
    defineField({
      name: 'teamB',
      title: 'Team B Name',
      type: 'string',
    }),
    defineField({
      name: 'teamBRef',
      title: 'Team B — Logo Source',
      type: 'reference',
      to: [{ type: 'team' }],
      description: 'Link to the Team entry to show their logo on the fixture row.',
    }),
    defineField({
      name: 'scoreA',
      title: 'Score A',
      type: 'number',
      description: 'Leave blank before match is played.',
    }),
    defineField({
      name: 'scoreB',
      title: 'Score B',
      type: 'number',
      description: 'Leave blank before match is played.',
    }),
    defineField({
      name: 'highlightUrl',
      title: 'Highlights URL (YouTube)',
      type: 'url',
      description: 'Paste full YouTube URL after the match.',
    }),
    defineField({
      name: 'isKnockout',
      title: 'Knockout Match?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'opponentConfirmed',
      title: 'Opponent Confirmed?',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'visible',
      title: 'Show this match?',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'matchId',
      subtitle: 'date',
      team: 'team',
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    prepare(val: any) {
      return {
        title: `${val.title} — ${val.team === 'mens' ? "Men's" : "Women's"}`,
        subtitle: val.subtitle,
      }
    },
  },
})
