import { getMensFixtures, getWomensFixtures, getMensStandings, getWomensStandings } from '@/lib/sanity.queries'
import FixturesContent from '@/components/results/FixturesContent'

export const metadata = { title: 'Fixtures & Results — Mumbai Dreamers' }

export default async function ResultsPage() {
  const [mensFixtures, womensFixtures, mensStandings, womensStandings] = await Promise.all([
    getMensFixtures(),
    getWomensFixtures(),
    getMensStandings(),
    getWomensStandings(),
  ])
  return (
    <FixturesContent
      mensFixtures={mensFixtures}
      womensFixtures={womensFixtures}
      mensStandings={mensStandings}
      womensStandings={womensStandings}
    />
  )
}
