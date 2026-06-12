import {
  getHeroSlides,
  getSiteSettings,
  getAboutStripImages,
  getInstagramPosts,
  getActiveSponsors,
  getMensPlayers,
  getWomensPlayers,
  getDefaultCtaLabel,
} from '@/lib/sanity.queries'
import HeroCarousel from '@/components/home/HeroCarousel'
import AboutStrip from '@/components/home/AboutStrip'
import SquadPreview from '@/components/home/SquadPreview'
import InstagramStrip from '@/components/home/InstagramStrip'
import SponsorsStrip from '@/components/home/SponsorsStrip'

export default async function Home() {
  const [slides, settings, aboutImages, posts, sponsors, mensPlayers, womensPlayers] =
    await Promise.all([
      getHeroSlides(),
      getSiteSettings(),
      getAboutStripImages(),
      getInstagramPosts(),
      getActiveSponsors(),
      getMensPlayers(),
      getWomensPlayers(),
    ])

  const defaultCtaLabel = getDefaultCtaLabel(settings?.seasonPhase)

  return (
    <>
      <HeroCarousel slides={slides} defaultCtaLabel={defaultCtaLabel} />
      <AboutStrip mensPhoto={aboutImages?.mensPhoto} womensPhoto={aboutImages?.womensPhoto} />
      <SquadPreview mensPlayers={mensPlayers} womensPlayers={womensPlayers} />
      <InstagramStrip posts={posts} />
      <SponsorsStrip sponsors={sponsors} />
    </>
  )
}
