# Batch 8 — CMS + Deployment Setup Guide

## What This Batch Does
Wires Sanity CMS into every page of the Mumbai Dreamers website. After this, your team member can update all content from a browser-based editor at `/studio` — no code required.

---

## Step 1 — Install Dependencies

In your project root, run:

```bash
npm install @sanity/client @sanity/image-url @sanity/vision next-sanity sanity
```

---

## Step 2 — Create Your Sanity Project

1. Go to https://www.sanity.io and sign up / log in
2. Click **New project**
3. Name it: `Mumbai Dreamers`
4. Choose dataset name: `production`
5. Free plan is fine — click Create
6. Copy your **Project ID** (you'll need it in Step 3)

---

## Step 3 — Set Environment Variables

Create a `.env.local` file in your project root (copy from `.env.local.example`):

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
```

Replace `your_project_id_here` with the Project ID from Step 2.

**For Vercel deployment:** Add these same two variables in Vercel Dashboard → your project → Settings → Environment Variables.

---

## Step 4 — Copy Batch 8 Files Into Your Project

Copy these files from the `batch8/` folder into your project at the same paths:

```
sanity.config.ts                          → project root
sanity/schemas/player.ts                  → sanity/schemas/
sanity/schemas/fixture.ts                 → sanity/schemas/
sanity/schemas/heroSlide.ts               → sanity/schemas/
sanity/schemas/siteSettings.ts            → sanity/schemas/
sanity/schemas/instagramPost.ts           → sanity/schemas/
sanity/schemas/sponsor.ts                 → sanity/schemas/
sanity/schemas/ourClubImages.ts           → sanity/schemas/
sanity/schemas/aboutStrip.ts              → sanity/schemas/
sanity/schemas/index.ts                   → sanity/schemas/
lib/sanity.ts                             → lib/
lib/sanity.queries.ts                     → lib/
app/studio/[[...tool]]/page.tsx           → app/studio/[[...tool]]/
app/page.tsx                              → REPLACES existing app/page.tsx
app/squad/page.tsx                        → REPLACES existing app/squad/page.tsx
app/results/page.tsx                      → REPLACES existing app/results/page.tsx
app/about/page.tsx                        → REPLACES existing app/about/page.tsx
```

---

## Step 5 — Update Your Components to Accept Props

The new page files pass Sanity data as props to your existing components.
You need to update the component prop types to accept this data. Key changes:

### HeroCarousel
```tsx
// Add to props:
slides: HeroSlide[]          // replaces hardcoded SLIDES array
defaultCtaLabel: string      // from siteSettings.seasonPhase
```

### AboutStrip
```tsx
// Add to props:
mensPhoto?: SanityImage      // replaces hardcoded placeholder image
womensPhoto?: SanityImage    // replaces hardcoded placeholder image
```

### InstagramStrip
```tsx
// Add to props:
posts: InstagramPost[]       // replaces hardcoded placeholder cards
```

### SponsorsStrip
```tsx
// Add to props:
sponsors: Sponsor[]          // replaces hardcoded slot array
```

### SquadPreviewCarousel / SquadPage
```tsx
// Add to props:
mensPlayers: Player[]        // replaces src/lib/data/players.ts import
womensPlayers: Player[]      // replaces src/lib/data/players.ts import
```

### FixturesPage
```tsx
// Add to props:
mensFixtures: Fixture[]      // replaces src/lib/data/fixtures.ts import
womensFixtures: Fixture[]    // replaces src/lib/data/fixtures.ts import
```

### OurClubPage
```tsx
// Add to props:
whoWeArePhoto?: SanityImage
coachingPhoto?: SanityImage
playersPhoto?: SanityImage
```

### Using Sanity images in components
Replace `<img src={hardcodedPath}>` with:
```tsx
import { urlFor } from '@/lib/sanity'

// Usage:
<img src={urlFor(photo).width(800).url()} alt="..." />

// With Next.js Image component:
<Image
  src={urlFor(photo).width(800).url()}
  alt="..."
  width={800}
  height={600}
/>
```

---

## Step 6 — Add CORS Origin in Sanity

1. Go to https://www.sanity.io/manage → your project → API → CORS origins
2. Add: `http://localhost:3000` (for local dev)
3. After Vercel deploy, also add your production domain

---

## Step 7 — Run Locally and Open Studio

```bash
npm run dev
```

Open http://localhost:3000/studio

Log in with your Sanity account. You'll see the CMS sidebar:
- Site Settings
- About Strip — Photography
- Our Club — Photography
- Hero Slides
- Squad Players
- Fixtures & Results
- Instagram Strip
- Sponsors

---

## Step 8 — Populate Initial Content

Work through each section in Studio before launch:

**Priority (needed for site to display content):**
1. Hero Slides — create 3 slides (order 1, 2, 3), upload images, set headlines
2. Squad Players — add men's and women's players, upload photos
3. Fixtures & Results — all fixtures are pre-loaded in `src/lib/data/fixtures.ts` — migrate these to Sanity one by one, or ask your developer to write a migration script

**Before go-live:**
4. About Strip — upload Men's and Women's squad photos
5. Our Club — upload Who We Are, Coaching, and Players photos
6. Site Settings — set Season Phase to the correct phase

**As confirmed:**
7. Sponsors — add logos and toggle active when ready
8. Instagram Strip — add 3 curated posts

---

## Step 9 — Deploy to Vercel

```bash
# Push your code to GitHub first, then:
# 1. Go to https://vercel.com → New Project
# 2. Import your GitHub repository
# 3. Add environment variables (from Step 3)
# 4. Deploy
```

**Point your GoDaddy domain to Vercel:**
In Vercel: Project → Settings → Domains → Add your domain
Vercel gives you nameserver values to paste into GoDaddy DNS settings.

---

## CMS Quick Reference — Day-to-Day Tasks

| Task | Where in Studio |
|------|----------------|
| Add match score after game | Fixtures & Results → find match → add Score A + Score B |
| Add YouTube highlight | Fixtures & Results → find match → paste YouTube URL |
| Update knockout opponents | Fixtures & Results → find SF/Final row → update Team A / Team B |
| Hide knockout row | Fixtures & Results → find row → toggle "Show this match?" OFF |
| Add/update squad player | Squad Players → find player or create new |
| Swap Instagram post | Instagram Strip → find slot → update URL, thumbnail, caption |
| Toggle sponsor on | Sponsors → find slot → toggle "Show this sponsor?" ON |
| Change season phase | Site Settings → Season Phase → select new phase → Publish |
| Update hero slide image | Hero Slides → find slide → upload new image → Publish |
| Swap About Strip photos | About Strip — Photography → upload new photos → Publish |
| Swap Our Club photos | Our Club — Photography → upload new photos → Publish |

---

## Fixture Data Migration

Your `src/lib/data/fixtures.ts` has all RPL Season 2 fixtures hardcoded.
Options:
1. **Manual** — enter each fixture in Studio (20 rows total — 12 men's + 8 women's)
2. **Script** — your developer can write a one-time migration using `@sanity/client`

Once all fixtures are in Sanity, you can delete `src/lib/data/fixtures.ts`.

---

*Batch 8 complete. The site is now fully CMS-driven. Batch 9 (if needed) = News & Stories, Sponsors page, Contact page.*
