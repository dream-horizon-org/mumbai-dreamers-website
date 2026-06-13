import {
  getHeroSlides,
  getSiteSettings,
  getAboutStripImages,
  getInstagramPosts,
  getActiveSponsors,
  getMensPlayers,
  getWomensPlayers,
  getMensStandings,
  getWomensStandings,
  getDefaultCtaLabel,
} from '@/lib/sanity.queries'
import HeroCarousel from '@/components/home/HeroCarousel'
import AboutStrip from '@/components/home/AboutStrip'
import SquadPreview from '@/components/home/SquadPreview'
import StandingsStrip from '@/components/home/StandingsStrip'
import InstagramStrip from '@/components/home/InstagramStrip'
import SponsorsStrip from '@/components/home/SponsorsStrip'

export default async function Home() {
  const [slides, settings, aboutImages, posts, sponsors, mensPlayers, womensPlayers, mensStandings, womensStandings] =
    await Promise.all([
      getHeroSlides(),
      getSiteSettings(),
      getAboutStripImages(),
      getInstagramPosts(),
      getActiveSponsors(),
      getMensPlayers(),
      getWomensPlayers(),
      getMensStandings(),
      getWomensStandings(),
    ])

  const defaultCtaLabel = getDefaultCtaLabel(settings?.seasonPhase)

  return (
    <>
      <HeroCarousel slides={slides} defaultCtaLabel={defaultCtaLabel} />
      <AboutStrip mensPhoto={aboutImages?.mensPhoto} womensPhoto={aboutImages?.womensPhoto} />
      <SquadPreview mensPlayers={mensPlayers} womensPlayers={womensPlayers} />
      <StandingsStrip mensStandings={mensStandings} womensStandings={womensStandings} />
      <InstagramStrip posts={posts} />
      <SponsorsStrip sponsors={sponsors} />
    </>
  )
}
