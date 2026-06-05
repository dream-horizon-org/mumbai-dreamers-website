import { getMensFixtures, getWomensFixtures } from '@/lib/sanity.queries'
import FixturesContent from '@/components/results/FixturesContent'

export const metadata = { title: 'Fixtures & Results — Mumbai Dreamers' }

export default async function ResultsPage() {
  const [mensFixtures, womensFixtures] = await Promise.all([
    getMensFixtures(),
    getWomensFixtures(),
  ])
  return <FixturesContent mensFixtures={mensFixtures} womensFixtures={womensFixtures} />
}
