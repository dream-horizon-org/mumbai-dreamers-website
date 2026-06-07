import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export interface Player {
  _id: string
  name?: string
  number?: number
  position?: string
  team?: string
  photo?: unknown
  bio?: string
}

export interface Sponsor {
  _id: string
  name?: string
  active?: boolean
  order?: number
}

export interface Fixture {
  _id: string
  team?: string
  homeTeam?: string
  awayTeam?: string
  date?: string
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

if (!projectId) {
  throw new Error('NEXT_PUBLIC_SANITY_PROJECT_ID is not set')
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: false,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
