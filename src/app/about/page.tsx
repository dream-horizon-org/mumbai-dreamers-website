import SectionWhoWeAre from '@/components/about/SectionWhoWeAre'
import SectionOurIdentity from '@/components/about/SectionOurIdentity'
import SectionCoachingLeadership from '@/components/about/SectionCoachingLeadership'
import SectionOurPlayers from '@/components/about/SectionOurPlayers'
import SectionVision from '@/components/about/SectionVision'

export const metadata = { title: 'Our Club — Mumbai Dreamers' }

export default async function AboutPage() {
  let content = null
  try {
    const { getOurClubContent } = await import('@/lib/sanity.queries')
    content = await getOurClubContent()
  } catch (error) {
    console.error('Failed to load content:', error)
  }

  return (
    /* paddingTop clears fixed accent stripe (3px) + nav (62px) = 65px */
    <div style={{ paddingTop: 65 }}>
      <SectionWhoWeAre content={content} />
      <SectionOurIdentity content={content} />
      <SectionCoachingLeadership content={content} />
      <SectionOurPlayers content={content} />
      <SectionVision content={content} />
    </div>
  )
}
