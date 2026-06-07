import { client, type Player, type Sponsor, type Fixture } from './sanity'

export const HERO_SLIDES_QUERY = `
  *[_type == "heroSlide"] | order(order asc) {
    _id,
    headline,
    subheading,
    ctaText,
    ctaLink,
    image,
    order
  }
`

export const SITE_SETTINGS_QUERY = `
  *[_type == "siteSettings"][0] {
    _id,
    seasonPhase,
    defaultCtaLabel
  }
`

export const ABOUT_STRIP_PHOTOS_QUERY = `
  *[_type == "aboutStrip"][0] {
    _id,
    mensPhoto,
    womensPhoto
  }
`

export const OUR_CLUB_PHOTOS_QUERY = `
  *[_type == "ourClubImages"][0] {
    _id,
    whoWeArePhoto,
    coachingPhoto,
    playersPhoto
  }
`

export const OUR_CLUB_CONTENT_QUERY = `
  *[_type == "ourClubContent"][0] {
    _id,
    whoWeAreHeading,
    whoWeAreTitle,
    whoWeAreDescription,
    whoWeArePhoto,
    identityHeading,
    identityTitle,
    identityDescription,
    coachingHeading,
    coachingTitle,
    coachingDescription,
    coachingCtaText,
    coachingCtaLink,
    coachingPhoto,
    playersHeading,
    playersTitle,
    playersDescription,
    playersPhoto,
    dreamSportsHeading,
    dreamSportsTitle,
    dreamSportsDescription,
    dreamSportsCtaText,
    dreamSportsCtaLink,
    visionHeading,
    visionTitle,
    visionDescription
  }
`

export const PLAYERS_QUERY = `
  *[_type == "player"] {
    _id,
    name,
    number,
    position,
    team,
    photo,
    bio
  }
`

export const FIXTURES_QUERY = `
  *[_type == "fixture"] | order(date asc) {
    _id,
    date,
    homeTeam,
    awayTeam,
    venue,
    competition,
    scoreA,
    scoreB,
    youtubeUrl,
    status
  }
`

export const INSTAGRAM_POSTS_QUERY = `
  *[_type == "instagramPost"] | order(order asc) {
    _id,
    postUrl,
    thumbnail,
    caption,
    order
  }
`

export const SPONSORS_QUERY = `
  *[_type == "sponsor"] | order(order asc) {
    _id,
    name,
    logo,
    link,
    active,
    order
  }
`

// Data fetching functions
export async function getHeroSlides() {
  try {
    return await client.fetch(HERO_SLIDES_QUERY)
  } catch (error) {
    console.error('Error fetching hero slides:', error)
    return []
  }
}

export async function getSiteSettings() {
  try {
    return await client.fetch(SITE_SETTINGS_QUERY)
  } catch (error) {
    console.error('Error fetching site settings:', error)
    return null
  }
}

export async function getAboutStripImages() {
  try {
    return await client.fetch(ABOUT_STRIP_PHOTOS_QUERY)
  } catch (error) {
    console.error('Error fetching about strip images:', error)
    return { mensPhoto: null, womensPhoto: null }
  }
}

export async function getOurClubImages() {
  try {
    return await client.fetch(OUR_CLUB_PHOTOS_QUERY)
  } catch (error) {
    console.error('Error fetching our club images:', error)
    return { whoWeArePhoto: null, coachingPhoto: null, playersPhoto: null }
  }
}

export async function getOurClubContent() {
  try {
    return await client.fetch(OUR_CLUB_CONTENT_QUERY)
  } catch (error) {
    console.error('Error fetching our club content:', error)
    return null
  }
}

export async function getMensPlayers() {
  try {
    const players = await client.fetch<Player[]>(PLAYERS_QUERY)
    return players.filter((p: Player) => p.team === 'mens')
  } catch (error) {
    console.error('Error fetching mens players:', error)
    return []
  }
}

export async function getWomensPlayers() {
  try {
    const players = await client.fetch<Player[]>(PLAYERS_QUERY)
    return players.filter((p: Player) => p.team === 'womens')
  } catch (error) {
    console.error('Error fetching womens players:', error)
    return []
  }
}

export async function getFixtures() {
  try {
    return await client.fetch(FIXTURES_QUERY)
  } catch (error) {
    console.error('Error fetching fixtures:', error)
    return []
  }
}

export async function getInstagramPosts() {
  try {
    return await client.fetch(INSTAGRAM_POSTS_QUERY)
  } catch (error) {
    console.error('Error fetching instagram posts:', error)
    return []
  }
}

export async function getActiveSponsors() {
  try {
    const sponsors = await client.fetch<Sponsor[]>(SPONSORS_QUERY)
    return sponsors.filter((s: Sponsor) => s.active)
  } catch (error) {
    console.error('Error fetching sponsors:', error)
    return []
  }
}

export async function getMensFixtures() {
  try {
    const fixtures = await client.fetch<Fixture[]>(FIXTURES_QUERY)
    return fixtures.filter((f: Fixture) => f.team === 'mens')
  } catch (error) {
    console.error('Error fetching mens fixtures:', error)
    return []
  }
}

export async function getWomensFixtures() {
  try {
    const fixtures = await client.fetch<Fixture[]>(FIXTURES_QUERY)
    return fixtures.filter((f: Fixture) => f.team === 'womens')
  } catch (error) {
    console.error('Error fetching womens fixtures:', error)
    return []
  }
}

export function getDefaultCtaLabel(seasonPhase: string | null) {
  const phases = {
    'pre-season': 'Register Interest',
    'in-season': 'Buy Tickets',
    'post-season': 'View Highlights',
  }
  return phases[seasonPhase] || 'Learn More'
}
