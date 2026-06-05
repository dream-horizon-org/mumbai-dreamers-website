import { getMensPlayers, getWomensPlayers } from '@/lib/sanity.queries'
import SquadPage from '@/components/squad/SquadPage'

export const metadata = { title: "Women's Squad — Mumbai Dreamers" }

export default async function WomensSquad() {
  const [mensPlayers, womensPlayers] = await Promise.all([
    getMensPlayers(),
    getWomensPlayers(),
  ])
  return <SquadPage team="womens" mensPlayers={mensPlayers} womensPlayers={womensPlayers} />
}
