import { client } from './sanity'
import type { SanityImage } from './sanity'
import {
  mensPlayers as staticMensPlayers,
  womensPlayers as staticWomensPlayers,
} from '@/lib/data/players'
import type { Player as StaticPlayer } from '@/lib/data/players'
import {
  mensFixtures as staticMensFixtures,
  womensFixtures as staticWomensFixtures,
} from '@/lib/data/fixtures'
import type { Fixture as StaticFixture } from '@/lib/data/fixtures'

export type { SanityImage } from './sanity'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Player {
  _id: string
  name: string
  nationality: string
  countryCode: string
  position: string
  age: number
  photo?: SanityImage
  cartoon?: SanityImage
  photoUrl?: string
  cartoonUrl?: string
  team: 'mens' | 'womens'
  displayOrder: number
}

export interface Fixture {
  _id: string
  matchId: string
  date: string
  time: string
  teamA: string
  teamB: string
  teamALogo?: SanityImage
  teamBLogo?: SanityImage
  scoreA?: number
  scoreB?: number
  highlightUrl?: string
  isKnockout: boolean
  opponentConfirmed: boolean
  team: 'mens' | 'womens'
  visible: boolean
}

export interface HeroSlide {
  _id: string
  order: number
  tagLine: string
  headline: string
  subLine: string
  ctaLabel?: string
  ctaHref: string
  image: SanityImage
  imageAlt: string
}

export interface InstagramPost {
  _id: string
  postUrl: string
  thumbnail: SanityImage
  caption: string
  postDate: string
}

export interface Sponsor {
  _id: string
  name: string
  logo?: SanityImage
  categoryLabel?: string
  linkUrl?: string
  active: boolean
  displayOrder: number
}

export interface SiteSettings {
  seasonPhase: 'pre_season' | 'in_season' | 'post_season'
}

export interface StandingsEntry {
  _id: string
  position: number
  teamName: string
  teamLogo?: SanityImage
  gender: 'mens' | 'womens'
  matchesPlayed: number
  wins: number
  draws: number
  losses: number
  scoreDifference: number
  bonusPoints: number
  points: number
}

export interface OurClubContent {
  whoWeAreHeading?: string
  whoWeAreTitle?: string
  whoWeAreDescription?: string
  whoWeArePhoto?: SanityImage
  identityHeading?: string
  identityTitle?: string
  identityDescription?: string
  coachingHeading?: string
  coachingTitle?: string
  coachingDescription?: string
  coachingCtaText?: string
  coachingCtaLink?: string
  coachingPhoto?: SanityImage
  playersHeading?: string
  playersTitle?: string
  playersDescription?: string
  playersPhoto?: SanityImage
  visionHeading?: string
  visionTitle?: string
  visionDescription?: string
}

// ─── Static-data adapters (used as fallback when Sanity isn't yet connected) ──

function toSanityPlayer(p: StaticPlayer, team: 'mens' | 'womens', order: number): Player {
  return {
    _id: p.id,
    name: p.name,
    nationality: p.nationality,
    countryCode: p.countryCode,
    position: p.position,
    age: p.age,
    photoUrl: p.photoUrl,
    cartoonUrl: p.cartoonUrl,
    team,
    displayOrder: order,
  }
}

function toSanityFixture(f: StaticFixture, team: 'mens' | 'womens'): Fixture {
  return {
    _id: f.id,
    matchId: f.id,
    date: f.date,
    time: f.time,
    teamA: f.teamA,
    teamB: f.teamB,
    scoreA: f.scoreA ?? undefined,
    scoreB: f.scoreB ?? undefined,
    highlightUrl: f.highlightUrl ?? undefined,
    isKnockout: f.isKnockout,
    opponentConfirmed: f.opponentConfirmed,
    team,
    visible: true,
  }
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getDefaultCtaLabel(phase?: SiteSettings['seasonPhase']): string {
  switch (phase) {
    case 'in_season':
      return 'WATCH LIVE'
    case 'post_season':
      return 'WATCH HIGHLIGHTS'
    default:
      return 'MEET THE SQUAD'
  }
}

// ─── Fetch helpers ────────────────────────────────────────────────────────────

const REVALIDATE = { next: { revalidate: 60 } }

async function safeFetch<T>(query: string, fallback: T): Promise<T> {
  try {
    const result = await client.fetch<T>(query, {}, REVALIDATE)
    return result ?? fallback
  } catch {
    return fallback
  }
}

// ─── Fetch functions ──────────────────────────────────────────────────────────

export async function getHeroSlides(): Promise<HeroSlide[]> {
  return safeFetch<HeroSlide[]>(
    `*[_type == "heroSlide"] | order(order asc)`,
    [],
  )
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return safeFetch<SiteSettings | null>(
    `*[_type == "siteSettings"][0]{ seasonPhase }`,
    null,
  )
}

export async function getMensPlayers(): Promise<Player[]> {
  const rows = await safeFetch<Player[]>(
    `*[_type == "player" && team == "mens"] | order(displayOrder asc)`,
    [],
  )
  return rows.length > 0 ? rows : staticMensPlayers.map((p, i) => toSanityPlayer(p, 'mens', i))
}

export async function getWomensPlayers(): Promise<Player[]> {
  const rows = await safeFetch<Player[]>(
    `*[_type == "player" && team == "womens"] | order(displayOrder asc)`,
    [],
  )
  return rows.length > 0 ? rows : staticWomensPlayers.map((p, i) => toSanityPlayer(p, 'womens', i))
}

export async function getMensFixtures(): Promise<Fixture[]> {
  const rows = await safeFetch<Fixture[]>(
    `*[_type == "fixture" && team == "mens" && visible != false] | order(dateISO asc) {
      ...,
      "teamALogo": teamARef->logo,
      "teamBLogo": teamBRef->logo
    }`,
    [],
  )
  return rows.length > 0 ? rows : staticMensFixtures.map((f) => toSanityFixture(f, 'mens'))
}

export async function getWomensFixtures(): Promise<Fixture[]> {
  const rows = await safeFetch<Fixture[]>(
    `*[_type == "fixture" && team == "womens" && visible != false] | order(dateISO asc) {
      ...,
      "teamALogo": teamARef->logo,
      "teamBLogo": teamBRef->logo
    }`,
    [],
  )
  return rows.length > 0 ? rows : staticWomensFixtures.map((f) => toSanityFixture(f, 'womens'))
}

export async function getInstagramPosts(): Promise<InstagramPost[]> {
  return safeFetch<InstagramPost[]>(
    `*[_type == "instagramPost"] | order(_createdAt desc)[0...3]`,
    [],
  )
}

export async function getActiveSponsors(): Promise<Sponsor[]> {
  return safeFetch<Sponsor[]>(
    `*[_type == "sponsor" && active == true] | order(displayOrder asc)`,
    [],
  )
}

export async function getAboutStripImages(): Promise<{
  mensPhoto?: SanityImage
  womensPhoto?: SanityImage
}> {
  return safeFetch<{ mensPhoto?: SanityImage; womensPhoto?: SanityImage }>(
    `*[_type == "aboutStrip"][0]{ mensPhoto, womensPhoto }`,
    {},
  )
}

export async function getOurClubImages(): Promise<{
  whoWeArePhoto?: SanityImage
  coachingPhoto?: SanityImage
  playersPhoto?: SanityImage
}> {
  return safeFetch<{
    whoWeArePhoto?: SanityImage
    coachingPhoto?: SanityImage
    playersPhoto?: SanityImage
  }>(
    `*[_type == "ourClubImages"][0]{ whoWeArePhoto, coachingPhoto, playersPhoto }`,
    {},
  )
}

export async function getOurClubContent(): Promise<OurClubContent | null> {
  return safeFetch<OurClubContent | null>(
    `*[_type == "ourClubContent"][0]{
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
      visionHeading,
      visionTitle,
      visionDescription
    }`,
    null,
  )
}

export async function getMensStandings(): Promise<StandingsEntry[]> {
  return safeFetch<StandingsEntry[]>(
    `*[_type == "standingsEntry" && gender == "mens"] | order(position asc) {
      _id,
      position,
      "teamName": team->name,
      "teamLogo": team->logo,
      gender,
      matchesPlayed,
      wins,
      draws,
      losses,
      scoreDifference,
      bonusPoints,
      points
    }`,
    [],
  )
}

export async function getWomensStandings(): Promise<StandingsEntry[]> {
  return safeFetch<StandingsEntry[]>(
    `*[_type == "standingsEntry" && gender == "womens"] | order(position asc) {
      _id,
      position,
      "teamName": team->name,
      "teamLogo": team->logo,
      gender,
      matchesPlayed,
      wins,
      draws,
      losses,
      scoreDifference,
      bonusPoints,
      points
    }`,
    [],
  )
}
