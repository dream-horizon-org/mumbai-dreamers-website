import { getMensPlayers, getWomensPlayers } from '@/lib/sanity.queries'
import SquadPage from '@/components/squad/SquadPage'

export const metadata = { title: "Men's Squad — Mumbai Dreamers" }

export default async function MensSquad() {
  const [mensPlayers, womensPlayers] = await Promise.all([
    getMensPlayers(),
    getWomensPlayers(),
  ])
  return <SquadPage team="mens" mensPlayers={mensPlayers} womensPlayers={womensPlayers} />
}
