# MUMBAI DREAMERS — CLAUDE CODE CONTEXT

## Stack
- Next.js 14 (App Router, TypeScript)
- Tailwind CSS
- Framer Motion (animations)
- Hosted on GoDaddy (static export or Node server — TBC at deployment)

## PRD Reference
Full PRD is in `/PRD.md`. Read it before making decisions about page structure, 
content, or design. The PRD is the source of truth.

## Brand Colours (use these, never invent new ones)
--color-red: #C8102E          /* buttons, active nav, CTAs, accent stripe */
--color-navy: #1A3A6B         /* section headings, section backgrounds */
--color-navy-dark: #0D1B3E    /* hero overlay, footer background */
--color-white: #FFFFFF
--color-body: #1A1A1A         /* all body copy */
--color-meta: #555555         /* dates, venues, secondary text */
--color-divider: #DDDDDD
--color-score-bg: #D6E4F0     /* score box backgrounds */

## Typography
Font: Barlow + Barlow Condensed (Google Fonts only — no substitutes)
Import: https://fonts.googleapis.com/css2?family=Barlow:wght@400;600&family=Barlow+Condensed:wght@700;800&display=swap

Usage:
- Barlow Condensed 800 → all section headings (uppercase)
- Barlow Condensed 700 → hero overlay text, player names
- Barlow 600 → nav links, buttons, labels (uppercase)
- Barlow 400 → body copy, dates, captions

## Global UI Rules (non-negotiable)
- Buttons: 0px border radius — sharp rectangular corners always
- 3px solid #C8102E accent stripe at the very top of every page viewport
- Nav: ~62px height, fixed, transparent over hero → solid white on scroll
- Player cards and article cards only: 8–10px border radius
- All section headings: Barlow Condensed 800, uppercase

## 21st.dev Components in Use
1. Spiral Animation (Kain0127) — used as the site-wide loading screen
   - Adapt colours: use #C8102E for the spiral, #0D1B3E as background
2. Spotlight/Border Glow Card (easemize) — used for player cards in carousel
   - Adapt colours: glow colour #C8102E, card background #1A3A6B on back face

## Site Architecture
/ → Homepage
/about → Our Club
/squad → Squad (redirects to /squad/mens)
/squad/mens → Men's Squad
/squad/womens → Women's Squad  
/squad/all → Full static grid
/results → Fixtures & Results
/stories → News & Stories (deferred)
/sponsors → Sponsors (deferred)
/contact → Contact (deferred)

## Assets
All images are in /public/assets/
- Placeholders are used for all photography in early batches
- Placeholder dimensions: hero images 1920×1080, player cards 400×500, squad panels 960×600

## Season 1 Archive
Season 1 website lives at www.mumbaidreamers.com
Link to it in the footer — small, below the legal bar:
"Season 1 Archive → mumbaidreamers.com"

## Build Status (update this as batches complete)
- [x] Batch 0: Foundation (tokens, nav, footer shell)
- [x] Batch 1: Hero + About Strip
- [x] Batch 2: Homepage lower sections
- [x] Batch 3: Squad page
- [x] Batch 4: Fixtures & Results
- [x] Batch 5: Our Club
- [x] Batch 6: 21st.dev component integration
- [ ] Batch 7: Deferred pages
- [x] Batch 8: CMS integration
- [ ] Batch 9: Polish + mobile
