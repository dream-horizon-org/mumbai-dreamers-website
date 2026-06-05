**MUMBAI DREAMERS**

**WEBSITE**

**PRODUCT REQUIREMENTS DOCUMENT**

Version 1.4  ·  May 2026  ·  Living Document

| **SECTION** | **STATUS** | **NOTES** |
| --- | --- | --- |
| Brand & Visual Identity | COMPLETE | Single source of truth locked |
| Site Architecture (8 pages) | COMPLETE | Navigation order confirmed |
| Page 1: Hero + Nav | COMPLETE | Wireframe complete |
| Page 2: Squad | COMPLETE | Wireframe complete |
| Page 3: Fixtures & Results | COMPLETE | Wireframe complete |
| Shared: Footer | COMPLETE | Design complete + animation code finalised |
| Page 1 (cont): Homepage Sections 4.3, 4.5, 4.6 | COMPLETE | About Strip, Instagram Strip, Sponsors Strip designed |
| News & Stories | DEFERRED | Not yet designed |
| Our Club | COMPLETE | Wireframe complete |
| Sponsors | DEFERRED | Not yet designed |
| Contact / Partner With Us | DEFERRED | Not yet designed |
| Shared: Match Ticker Band | REMOVED | Decision taken to remove — no ticker band |
| CMS Integration | DEFERRED | To be tackled last |

# **1. PROJECT CONTEXT & OBJECTIVES**

## **1.1 Document Purpose**

This PRD is a living document maintained throughout the website build. As sections are finalised and signed off, they are added here. The final consolidated document will serve as the handoff reference for development, CMS setup, and ongoing content management.

## **1.2 Primary Audiences**

- Rugby fans — discover the team, follow results, engage with content

- Potential sponsors — understand the brand, reach out to partner

- Media & press — access news, stories, and team information

## **1.3 Primary Goal**

Drive social media following across Instagram, YouTube, and X. All pages feature social CTAs in the footer. The website supports and amplifies the team's social presence rather than replacing it.

## **1.4 Key Constraints**

- CMS: Non-technical team member will make day-to-day updates — interface must be simple

- No Gallery page: YouTube highlights embedded directly in Fixtures & Results

- No newsletter: No newsletter signup section on the homepage

- Women's team: Equal visual prominence to Men's team throughout the site

- Social CTAs: Appear in the footer on every page (primary placement)

- No Match Ticker Band: Decision taken not to include a ticker band on the homepage. Match schedule and results are handled on the dedicated Fixtures & Results page (/results).

## **1.5 Season Versioning**

Season 1 site to be preserved at /season1. All root URLs serve Season 2.

# **2. BRAND & VISUAL IDENTITY**

All design work uses the Mumbai Dreamers Visual Identity document (March 2026) as the single source of truth.

## **2.1 Colour Palette**

| **NAME & HEX** | **USAGE** |
| --- | --- |
| #C8102E — Primary Red | Buttons, active nav, arrow icons, all CTAs |
| #1A3A6B — Deep Navy | Section headings, section backgrounds, UI borders |
| #FFFFFF — White | Page background, card background, button text |
| #1A1A1A — Body Text | All readable body copy |
| #555555 — Secondary Text | Dates, venues, meta text |
| #DDDDDD — Divider | Horizontal rules, light borders |
| #D6E4F0 — Score Box | Score number backgrounds in results |
| #0D1B3E — Hero Overlay | Dark gradient overlay on hero images; also footer background |

## **2.2 Typography**

Single font family throughout: Barlow + Barlow Condensed (Google Fonts)

Import URL: https://fonts.googleapis.com/css2?family=Barlow:wght@400;600&family=Barlow+Condensed:wght@700;800&display=swap

| **STYLE** | **WEIGHT** | **USAGE** |
| --- | --- | --- |
| Barlow Condensed ExtraBold | 800 | All section headings, uppercase |
| Barlow Condensed Bold | 700 | Hero overlay text, player names on cards |
| Barlow SemiBold | 600 | Nav links, buttons, team names, sponsor labels — all uppercase |
| Barlow Regular | 400 | Body copy, article titles, date text |

## **2.3 Global UI Rules**

- Buttons: 0px border radius — sharp rectangular corners, no rounding

- Accent stripe: 3px solid Red (#C8102E) at the very top of every page viewport

- Nav height: ~62px, fixed

- Card radius: 8–10px border radius on player cards and article cards only

# **3. SITE ARCHITECTURE**

## **3.1 Page Inventory**

| **URL** | **PAGE NAME** | **NOTES** |
| --- | --- | --- |
| / | Homepage | Hero, squad preview, about strip, Instagram strip, sponsors strip |
| /about | Our Club | Team story, values, history |
| /squad | Squad | Defaults to /squad/mens |
| /squad/mens | Men's Squad | Carousel + all players grid |
| /squad/womens | Women's Squad | Carousel + all players grid |
| /squad/all | Full Squad Grid | Static grid, no carousel |
| /results | Fixtures & Results | Mumbai Dreamers matches only; inline YouTube highlights |
| /stories | News & Stories | Article listing + individual articles |
| /sponsors | Sponsors | Partner showcase |
| /contact | Contact / Partner With Us | Enquiry form + sponsor info |

## **3.2 Navigation Order**

Home → Our Club → Squad → Fixtures & Results → News → Sponsors → Partner With Us

Navigation is unified — one Mumbai Dreamers brand with no Men's/Women's split in the nav. The Squad page manages team selection internally via the rugby ball toggle.

# **4. PAGE 1: HERO + NAVIGATION**

***STATUS: WIREFRAME COMPLETE***

## **4.1 Navigation Bar**

**Layout**

- Logo (left): shooting star icon + '· MUMBAI · DREAMERS' text

- Navy + Red on white background; White on transparent (over hero)

- Nav links (centre): Home, Our Club, Squad, Fixtures & Results, News, Sponsors, Partner With Us

- Active link: Red (#C8102E) with 2px Red underline

- Right side: Instagram + YouTube + X social icons → vertical divider → Sponsor logo pills

- Sponsor pills: subtle background, top-right of nav — same placement reference as Altrad/Adidas in All Blacks nav

- Mobile nav: hamburger menu — design deferred

**Scroll Behaviour**

- Transparent over the hero image

- On scroll: transitions to solid white with bottom border

- Logo text switches to Navy/Red; Nav links switch to #1A1A1A; Social icons switch to dark

- 3px Red accent stripe sits above the nav at the very top of the viewport at all times

- Nav height: ~62px, fixed

## **4.2 Hero Carousel**

**General Behaviour**

- Full-bleed, high quality stylised cover photography — no video

- 2–3 slides, manual navigation only (no auto-advance)

- Slide transition: crossfade on manual arrow click

- Navigation controls: left/right square arrow buttons (bottom right of hero) + dot/dash indicators (bottom left)

**Each Slide Contains**

- Small tag line above headline with a short Red line prefix (e.g. 'RPL Season 2 · June 2026')

- Large Barlow Condensed ExtraBold headline

- Sub-line: season dates, venue, broadcast info in Barlow Regular, muted white

- Single CTA button — Red, sharp corners, white text, arrow icon

**Dark Gradient Overlay**

- Applied to all hero images

- Stronger on the left where text sits, fades to transparent on the right where player photo sits

- Overlay colour: #0D1B3E

**Dynamic CTA — CMS-Controlled Season Phase Toggle**

| **PHASE** | **CTA LABEL** |
| --- | --- |
| Pre-season | MEET THE SQUAD |
| During season | WATCH HIGHLIGHTS |
| Post-season | WATCH HIGHLIGHTS |

**Planned Slides**

| **#** | **THEME** | **HEADLINE** | **SUB-LINE / DETAIL** |
| --- | --- | --- | --- |
| 1 | Men's | THE DREAM IS BACK | RPL Season 2, Gachibowli Hyderabad, 16–28 June 2026 |
| 2 | Women's | OUR WOMEN RISE | WRPL Season 1 debut, 19–28 June 2026 |
| 3 | Brand | AAMCHI MUMBAI | Dream Sports backing, 700M+ viewership, sponsor angle |

**Hero Bottom Element**

- "Featured Stories →" label sits at the very bottom of the hero, hinting at content below

## **4.3 About Strip — Men's & Women's**

***STATUS: WIREFRAME COMPLETE***

**Overview**

Full-width two-panel band immediately below the hero carousel. Introduces both squads side by side with equal visual weight. Minimum height 480px.

**Layout**

- 50/50 split — equal panel widths, no dominant team

- Each panel: full-bleed photography with dark gradient overlay (#0D1B3E), stronger at bottom-left where text sits

- Text sits over the photography on the left side of each panel

**Each Panel Contains**

- Section label — e.g. 'Men's Squad' / 'Women's Squad' — Barlow Condensed Bold 700, 11px, Red (#C8102E), uppercase, letter-spacing 0.2em

- Headline — Barlow Condensed ExtraBold 800, ~40px, white, uppercase. e.g. 'THE DREAMERS' / 'THE WOMEN RISE'

- One short line of body copy — Barlow Regular 400, 14px, rgba(255,255,255,0.75), max-width ~320px

- Single CTA button — 'MEET THE SQUAD →' — sharp corners (0px radius)

**CTA Button Differentiation**

- Men's panel: Red background (#C8102E), white text — links to /squad/mens

- Women's panel: White background, Navy text (#1A3A6B) — links to /squad/womens

Visual differentiation between the two CTAs prevents the strip from feeling identical on both sides while preserving equal prominence.

**Photography**

- [IMAGE TO UPDATE — Season 2 photography: Men's team action/squad photo]

- [IMAGE TO UPDATE — Season 2 photography: Women's team action/squad photo]

**CMS**

- Not editable at launch. Hardcoded copy and links.

- Photography slots editable (same pattern as Our Club image slots).

- Headlines and body copy hardcoded. Developer update required for copy changes post-launch.

## **4.4 Squad Preview Carousel**

The homepage reuses the Squad page carousel component (Section 5.3) in a preview context. Rugby ball toggle included. 'See All Players' CTA links to /squad. No additional design work required.

## **4.5 Instagram Strip**

***STATUS: WIREFRAME COMPLETE***

**Overview**

A curated three-post highlight strip replacing the original news preview concept. The team manually selects posts and manages content via CMS. No live Instagram API integration required.

**Layout**

- Full-width section, white background (#FFFFFF)

- Max-width container: 1100px, horizontally centred

- 56px top and bottom padding

**Header (centred above cards)**

- Section label: 'FOLLOW ALONG' — Barlow Condensed Bold 700, 11px, Red (#C8102E), uppercase, letter-spacing 0.18em

- Heading: 'LATEST FROM INSTAGRAM' — Barlow Condensed ExtraBold 800, 36px, Navy (#1A3A6B)

- Sub-label: '@mumbaidreamersrugby' — Barlow Regular 400, 14px, #555555 — links to Instagram profile in new tab

**Card Anatomy (3 cards, equal width)**

- Square image: 1:1 crop, manually uploaded thumbnail — 8–10px border radius

- Caption text below image: Barlow Regular 400, 13px, #1A1A1A, max 2 lines, truncated with ellipsis

- Post date: Barlow Regular 400, 11px, #555555

- Entire card links to the Instagram post URL in a new tab

**Hover State**

- Subtle scale-up: transform scale(1.02)

- Box shadow lifts: 0 8px 24px rgba(0,0,0,0.12)

- Transition: 0.25s ease

**CMS Fields — Per Card (3 slots)**

| **FIELD** | **NOTES** |
| --- | --- |
| Instagram post URL | Links the entire card to the post in a new tab |
| Thumbnail image | Uploaded manually by team (PNG/JPG, 1:1 crop recommended) |
| Caption text | Editable — max 2 lines displayed, can mirror post caption |
| Post date | Editable — displayed below caption in muted text |

**Launch State**

- If CMS isn't populated at launch: three static placeholder cards with Mumbai Dreamers imagery and placeholder caption text.

- Section is fully removable via CMS toggle if needed (same slot active pattern as Sponsors strip).

## **4.6 Sponsors Strip**

***STATUS: DESIGNED — Hidden at launch. Appears automatically when first sponsor is toggled on via CMS.***

**Overview**

A single-tier sponsor showcase strip. Built and ready at launch with all 6 slots available. Slots only appear once a logo is uploaded and toggled active via CMS. If no logos are active, the entire section (including heading) is hidden.

**Layout**

- Full-width section, light grey background (#F5F5F5)

- Max-width container: 1100px, horizontally centred

- 56px top and bottom padding

**Header (centred above logo grid)**

- Section label: 'OUR PARTNERS' — Barlow Condensed Bold 700, 11px, Red (#C8102E), uppercase, letter-spacing 0.18em

- Heading: 'PROUD TO BE SUPPORTED BY' — Barlow Condensed ExtraBold 800, 36px, Navy (#1A3A6B)

**Logo Grid**

- Single row, up to 6 slots, horizontally centred

- Single tier — all sponsors equal size: each logo cell 160px wide × 80px tall

- 24px gap between cells

- On smaller screens: wraps to 2 rows of 3

**Slot Behaviour**

- Filled slot: logo displayed in greyscale by default (filter: grayscale(100%) opacity(0.65))

- On hover: full colour, opacity 1, transition 0.25s ease

- On hover: sponsor name + optional category label fades in below logo cell

- Empty slot: completely hidden — takes up no space, does not render

- Grid reflows around filled slots only (e.g. 2 confirmed sponsors → 2 logos centred in row)

- Section visibility: entire section hidden if 0 slots are active

**Hover Label**

- Sponsor name: Barlow SemiBold 600, 12px, #1A1A1A, uppercase

- Category label (optional): Barlow Regular 400, 11px, #555555 — e.g. 'Official Kit Partner'

- Animation: opacity 0 → 1, translateY 4px → 0, 0.2s ease

- Each logo links to sponsor website in new tab

**CMS Fields — Per Slot (6 slots total)**

| **FIELD** | **NOTES** |
| --- | --- |
| Logo image | Upload PNG or SVG — transparent background recommended for clean rendering on grey |
| Sponsor name | Displayed on hover below the logo |
| Category label | Optional — e.g. 'Official Kit Partner', 'Technology Partner'. Leave blank to show name only |
| Link URL | Sponsor website — opens in new tab |
| Slot active toggle | On = logo visible on site. Off = slot hidden. Default: Off |

The slot active toggle is the single switch the non-technical team member uses: upload logo → fill in name → toggle on → sponsor appears on site. Toggle off to temporarily hide without deleting any content.

**Homepage Section Order — Final**

| **#** | **SECTION** | **NOTES** |
| --- | --- | --- |
| 1 | Hero Carousel | 2–3 slides, manual nav, dynamic CTA |
| 2 | About Strip — Men's & Women's | 50/50 split, full-bleed photography, CTA per team |
| 3 | Squad Preview Carousel | Reuses Squad page component, rugby ball toggle |
| 4 | Instagram Strip | 3 manually curated posts, CMS-managed |
| 5 | Sponsors Strip | Hidden at launch; appears when first sponsor toggled on |
| 6 | Footer | Address / animated logo canvas / social links |

# **5. PAGE 2: SQUAD**

***STATUS: WIREFRAME COMPLETE***

## **5.1 Page Header**

- Section label: 'Season 2 · 2026' — Red, small, uppercase, letter-spaced

- Section heading: 'OUR SQUAD' — Barlow Condensed ExtraBold, Navy

## **5.2 Rugby Ball Toggle**

A team selector styled as a rugby ball pill shape, used to switch between Men's and Women's squad carousels.

- Shape: Pill shaped like a rugby ball — Navy background with Red active indicator that slides across

- The active side features a larger oval outline and thin line weight seam details

- Labels: 'MEN'S' and 'WOMEN'S' — always visible on either side; active side fully opaque white

- On switch: replaces entire carousel content with selected team's players, resets scroll position

## **5.3 Player Card Carousel**

**Carousel Behaviour**

- Continuous right-to-left auto-scroll (conveyor belt)

- Speed: slow and smooth (~0.5px per frame)

- Pauses immediately on card hover, resumes on mouse leave

- Cards triple-duplicated for seamless infinite loop — no looping gap

- Mobile: auto-scroll continues, user can swipe horizontally to browse

**Card — Front Face**

- White background (#FFFFFF), light grey border, 12px border radius

- Upper area: diagonal red/white starburst graphic (low opacity) behind player cut-out photo

- Player photo: cut-out (no background), waist-up or full body

- Bottom info bar: 2.5px Red top border

- Player name — Barlow Bold, Navy, uppercase, left-aligned

- Country flag — right-aligned, using flag-icons CSS library (not emoji, not colour stripes)

- Flag rendered in a small rounded-corner container

- No logo or category badge on the front face

**Card — Back Face (on hover)**

- Deep Navy background (#1A3A6B)

- Upper area: illustrated cartoon of the player in Mumbai Dreamers jersey, in an action pose

- Art style: cartoon illustration, not photorealistic

- Cartoon figure fills the upper portion, ending exactly at the horizontal divider

- Horizontal divider: 1px white at 18% opacity, 12px margin either side

- Below divider: two columns — Age (left) and Position (right)

- Vertical divider between columns

- Labels: small, muted white, uppercase, letter-spaced

- Values: white, Barlow Bold

**Hover Interaction**

- Card flips on vertical axis, right-to-left direction

- Flip transition: 0.55s cubic-bezier ease

- All other cards simultaneously scale to ~91% and reduce opacity to ~45%

- Dimming/scaling transitions: 0.3s ease

- On mouse leave: card flips back, all others return to full size and opacity

## **5.4 See All Players CTA**

- Centred below the carousel

- Red background, white text, sharp rectangular corners — matches site-wide button style

- Links to /squad/all — full static grid of all player cards, no carousel

- Static grid reference: All Blacks player profile page style

- Final button design system to be confirmed in a later design pass

## **5.5 Squad Data — Placeholder**

| **NAME** | **NATIONALITY** | **POSITION** | **AGE** | **STATUS** |
| --- | --- | --- | --- | --- |
| Neeraj Khatri | India | Forward | 26 | Confirmed retention |
| Ben Lasiel | Fiji | Wing | 28 | Confirmed — Cat C |
| Placeholder 3 | New Zealand | TBC | TBC | Placeholder |
| Placeholder 4 | South Africa | TBC | TBC | Placeholder |
| Placeholder 5 | Australia | TBC | TBC | Placeholder |
| Placeholder 6 | England | TBC | TBC | Placeholder |
| Placeholder 7 | France | TBC | TBC | Placeholder |
| Placeholder 8 | TBC | TBC | TBC | Placeholder |

Women's Squad: 6 placeholder players across New Zealand, India, Australia, England, and Ireland. Real player data to replace before launch.

# **6. PAGE 3: FIXTURES & RESULTS**

***STATUS: WIREFRAME COMPLETE***

## **6.1 Page Overview**

The Fixtures & Results page (/results) shows only Mumbai Dreamers matches — not the full league schedule. It covers both Men's and Women's fixtures for RPL Season 2 (16–28 June 2026).

## **6.2 Page Header**

- Page label: 'RPL Season 2' — Red, small, uppercase, letter-spaced

- Page title: 'FIXTURES & RESULTS' — Barlow Condensed ExtraBold, white, large

- Header background: Deep Navy (#1A3A6B)

- Meta row: Season dates (16–28 June 2026) · Venue (Gachibowli Stadium, Hyderabad) · All times IST

## **6.3 Men's / Women's Toggle**

Same rugby ball pill toggle as the Squad page. Switching tabs replaces the entire fixture list.

## **6.4 Fixture List Layout**

Matches grouped by date. Each date group has a header showing day name and full date.

Match row columns (left to right): Time + Match ID · Team A (right-aligned) · Score centre · Team B (left-aligned) · Actions column

## **6.5 Pre-Match State**

- 'Upcoming' chip in actions column — light grey border, muted text

- Score centre shows VS in light grey

## **6.6 Post-Match State (CMS-Updated)**

- Scores in score boxes — #D6E4F0 background, Deep Navy text, Barlow Condensed ExtraBold

- Winning score box: Navy background (#1A3A6B) with white text

- No Win/Loss badge — score highlighting is sufficient

- 'Highlights' button appears in Red — expands inline below row on click

## **6.7 Highlights Inline Expand**

- Expands panel directly below match row — no modal, no redirect

- Panel background: Deep Navy (#1A3A6B)

- Left side: YouTube embed (16:9, 460px wide)

- Right side: match meta — label, match title, date, result, match ID

- Close button (X) top-right of panel

- Only one panel open at a time

## **6.8 Knockout Rounds**

Semi-final and Final rows shown in dimmed TBC state. CMS team updates opponent names once known. Rows removed if Mumbai Dreamers do not qualify.

## **6.9 Men's Fixtures — RPL Season 2**

| **MATCH** | **DATE** | **TIME (IST)** | **TEAM A** | **TEAM B** |
| --- | --- | --- | --- | --- |
| M3 | Tuesday 16 Jun | 9:00 PM | Kalinga Black Tigers | Mumbai Dreamers |
| M5 | Wednesday 17 Jun | 7:30 PM | Bengaluru Bravehearts | Mumbai Dreamers |
| M9 | Friday 19 Jun | 7:30 PM | Delhi Redz | Mumbai Dreamers |
| M11 | Saturday 20 Jun | 7:30 PM | Chennai Bulls | Mumbai Dreamers |
| M14 | Sunday 21 Jun | 7:30 PM | Hyderabad Heroes | Mumbai Dreamers |
| M18 | Monday 22 Jun | 8:30 PM | Kalinga Black Tigers | Mumbai Dreamers |
| M20 | Tuesday 23 Jun | 8:00 PM | Bengaluru Bravehearts | Mumbai Dreamers |
| M23 | Wednesday 24 Jun | 8:00 PM | Delhi Redz | Mumbai Dreamers |
| M26 | Thursday 25 Jun | 8:00 PM | Hyderabad Heroes | Mumbai Dreamers |
| M29 | Friday 26 Jun | 8:00 PM | Chennai Bulls | Mumbai Dreamers |
| SF | Saturday 27 Jun | TBC | TBC | TBC |
| Final | Sunday 28 Jun | TBC | TBC | TBC |

## **6.10 Women's Fixtures — RPL Season 2**

| **MATCH** | **DATE** | **TIME (IST)** | **TEAM A** | **TEAM B** |
| --- | --- | --- | --- | --- |
| W2 | Tuesday 16 Jun | 8:30 PM | Kalinga Black Tigers | Mumbai Dreamers |
| W4 | Wednesday 17 Jun | 8:30 PM | Delhi Redz | Mumbai Dreamers |
| W5 | Thursday 18 Jun | 8:00 PM | Chennai Bulls | Mumbai Dreamers |
| W8 | Friday 19 Jun | 8:30 PM | Kalinga Black Tigers | Mumbai Dreamers |
| W10 | Saturday 20 Jun | 8:30 PM | Delhi Redz | Mumbai Dreamers |
| W11 | Sunday 21 Jun | 8:00 PM | Chennai Bulls | Mumbai Dreamers |
| W13 | Monday 22 Jun | 9:00 PM | TBC | TBC |
| W14 Final | Tuesday 23 Jun | 9:00 PM | TBC | TBC |

## **6.11 CMS Requirements — Fixtures & Results**

| **FIELD** | **NOTES** |
| --- | --- |
| Scores | Added post-match — triggers score box display and enables Highlights button |
| YouTube highlight URL | Added post-match — linked to the inline expand panel per match |
| Match time | Editable per match (IST) |
| Opponent name (knockouts) | Updated once group stage standings are confirmed |
| Knockout rows visibility | Remove rows entirely if Mumbai Dreamers do not qualify |

# **7. SHARED COMPONENT: FOOTER**

***STATUS: DESIGN COMPLETE — ANIMATION CODE FINALISED***

The footer appears on every page of the site. No CMS editing required at launch — content is static.

## **7.1 Layout**

Three-column flex layout within a 1100px max-width container. 56px top padding, 36px bottom padding.

- Left column — Address block, flush left

- Centre column — Animated logo canvas, centred

- Right column — 'Follow Us' label + social links, flush right

- Full-width legal bar — Separated by a hairline divider, centred text

## **7.2 Visual Specification**

| **PROPERTY** | **VALUE** |
| --- | --- |
| Background | #0D1B3E (Hero Overlay — same as hero gradient) |
| Top border | 3px solid #C8102E (matches the global accent stripe) |
| Font family | Barlow + Barlow Condensed |
| Text colour (address) | rgba(255,255,255,0.65) |
| Text colour (legal) | rgba(255,255,255,0.30) |
| Divider (above legal) | 1px solid rgba(255,255,255,0.08) |

## **7.3 Left Column — Address Block**

- Label: 'OUR HOME' — Barlow Condensed Bold 700, 11px, letter-spacing 0.18em, #C8102E

- Address: 7th Floor, Ascent / Sudam Kalu Ahire Marg / Worli Colony, Worli / Mumbai, Maharashtra 400030

## **7.4 Centre Column — Animated Logo Canvas**

Canvas element (260×160px). Live particle animation replicating the Mumbai Dreamers logo using white five-point stars. Y-axis coin-flip spin via per-star X compression (NOT ctx.scale). Cursor repulsion within 50px radius.

## **7.5 Right Column — Social Links**

- Platforms at launch: Instagram, Facebook

- Instagram: https://www.instagram.com/mumbaidreamersrugby/

- Facebook: https://www.facebook.com/mumbaidreamersrugby/

- Hover state: icon box background and border switch to #C8102E, text switches to #FFFFFF

## **7.6 Legal Bar**

© 2026 Mumbai Dreamers Rugby. All rights reserved. RPL Season 2.

## **7.7 Key Implementation Notes**

- Canvas is NOT a static image — rendered via JavaScript on every page load

- ctx.scale() MUST NOT be used for the coin-flip spin — causes DREAMERS row to vanish at 90°

- Star coordinate arrays (TOP + DREAM) must be pasted verbatim from md_footer_v10.html

- On mobile, cursor repulsion is inactive. Spin animation continues normally.

# **8. PAGE 4: OUR CLUB**

***STATUS: WIREFRAME COMPLETE***

## **8.1 Page Overview**

The Our Club page (/about) introduces Mumbai Dreamers to fans, potential sponsors, and media. Content carried over from Season 1 site with updated photography and coaching staff. Largely static.

## **8.2 Page Structure — Six Sections**

| **SECTION** | **LAYOUT** | **BACKGROUND** |
| --- | --- | --- |
| Who We Are | Split panel — text left, photo right | Red (#C8102E) left / photography right |
| Our Identity | Centred copy + full-width skyline band | White / Deep Navy (#0D1B3E) band |
| Coaching Leadership | Split panel — text left, photo right | Navy (#1A3A6B) left / photography right |
| Our Players | Split panel — photo left, text right | Photography left / Red (#C8102E) right |
| Owned by Dream Sports | Centred heading + 3×2 brand card grid | White |
| Our Vision / Dream Big With Us | Side-by-side full-width panels | Navy (#1A3A6B) left / Red (#C8102E) right |

## **8.3 Section 1: Who We Are**

Full-bleed split panel. Red panel left (48%), photography right (52%). Min height 480px. Ghost watermark 'MD' at rgba(255,255,255,0.06). [IMAGE TO UPDATE — Season 2 team photo]

## **8.4 Section 2: Our Identity**

Centred copy block followed by full-width Deep Navy skyline illustration band. Mumbai skyline SVG, white at 18% opacity. [ASSET DECISION PENDING]

## **8.5 Section 3: Coaching Leadership**

Split panel. Navy left (46%), photography right (54%). Min height 480px. CTA: 'VIEW COACHES' links to /squad. [IMAGE TO UPDATE — Season 2 coaching staff photo]

## **8.6 Section 4: Our Players**

Split panel. Photography left (54%), Red right (46%). Min height 480px. CTA: 'VIEW SQUAD' links to /squad. [IMAGE TO UPDATE — Season 2 action photo]

## **8.7 Section 5: Owned by Dream Sports**

3×2 brand card grid. White logo area (top, min-height 120px) + Navy description bar (bottom). Sharp corners (0px radius). 2px gap between cards. [LOGO ASSET SOURCE — decision pending]

| **BRAND** | **DESCRIPTION** |
| --- | --- |
| Dream11 | The world's largest fantasy sports platform |
| FanCode | India's digital sports destination |
| Dream Set Go | A premium sports travel and experiences platform |
| Dream Cricket 25 | A AAA mobile sports game |
| Sixer | A sports-based virtual trading game |
| Dream Sports Foundation | A philanthropic arm focused on driving positive social impact through sport |

## **8.8 Section 6: Our Vision / Dream Big With Us**

Full-width two-panel band. Navy left (50%), Red right (50%). Min height 360px. No photography — copy only with decorative SVG background at low opacity.

## **8.9 Scroll Animations**

All six sections animate in on scroll using IntersectionObserver. Split-panel text: slides from respective edge. Centred blocks: fade up (translateY 28px → 0, opacity 0 → 1). Transition: 0.6s ease, threshold 12%, fires once per element.

## **8.10 CMS Requirements — Our Club**

| **FIELD** | **NOTES** |
| --- | --- |
| Who We Are — team photo | Replaced with Season 2 squad photography pre-launch |
| Coaching Leadership — staff photo | Replaced with Season 2 coaching staff photography pre-launch |
| Our Players — action photo | Replaced with Season 2 match/training photography pre-launch |

# **9. DEFERRED — NOT YET DESIGNED**

## **9.1 Remaining Pages**

| **PAGE** | **URL** | **KEY NOTES** |
| --- | --- | --- |
| News & Stories | /stories | Article listing + individual article pages |
| Sponsors | /sponsors | Partner showcase |
| Contact / Partner With Us | /contact | Enquiry form + sponsor partnership info |

## **9.2 Shared Components Remaining**

- Homepage about strip photography (Men's and Women's panels) — image slots flagged, structure complete

## **9.3 Deferred Design Decisions**

- Final button design system — shape variants, hover states, secondary button style

- Mobile nav / hamburger menu

- Individual player profile expanded view

- Full static squad grid page (/squad/all)

- Actual player photography and cartoon illustration assets

- Real player data, sponsor logos, and match data

- Final copy for all 3 hero slides

- Team logo image files for all RPL Season 2 teams

# **10. TECHNICAL DECISIONS**

## **10.1 Confirmed**

| **DECISION** | **DETAIL** |
| --- | --- |
| Fonts | Barlow + Barlow Condensed via Google Fonts — confirmed rendering correctly in browser |
| Country Flags | flag-icons CSS library via CDN |
| Hero CTA control | Season-phase toggle in CMS controls which CTA label appears |
| YouTube | Highlights embedded per match in Fixtures & Results — inline expand panel, no modal |
| Gallery | No separate Gallery page — video content lives in Fixtures & Results |
| Newsletter | No newsletter signup section on homepage |
| Match Ticker Band | Removed. Fixtures & Results page at /results handles all match schedule and results. |
| Social CTAs | Footer on every page — primary placement for all social media links |
| Season versioning | Season 1 site preserved at /season1; all root URLs serve Season 2 |
| Fixtures scope | Fixtures & Results shows Mumbai Dreamers matches only |
| Score winner highlight | Higher score box in Navy (#1A3A6B) with white text — no Win/Loss badge |
| Footer logo animation | Canvas-based particle animation. Y-axis coin-flip via per-star X compression (not ctx.scale). |
| Skyline illustration | Full-width SVG, white at 18% opacity on Deep Navy. Asset decision pending. |
| Dream Sports brand cards | 3×2 grid. White logo area top, Navy description bar bottom. Sharp corners. Logo source TBC. |
| Scroll animations | IntersectionObserver-driven. 0.6s ease, threshold 12%, fires once per element. |
| About Strip — homepage | 50/50 split panels, full-bleed photography. Hardcoded at launch; photography slots CMS-editable. |
| Instagram Strip — homepage | Manual CMS — team pastes post URL + uploads thumbnail. 3 slots. No live API integration. |
| Sponsors Strip — homepage | 6 slots, single tier. Slot active toggle per sponsor. Entire section hidden if 0 active. |

## **10.2 CMS Requirements**

The CMS must enable a non-technical team member to make day-to-day updates without developer involvement.

**Content That Must Be CMS-Editable**

- Squad: player photos, names, positions, ages, nationalities — both Men's and Women's

- Fixtures & results: match scores, YouTube highlight URLs — added post-match per row

- Knockout opponent names — updated once group stage standings are known

- News & Stories: article creation, editing, images

- Sponsors: logos, names, category labels, URLs, slot active toggle

- Hero slides: images, headlines, sub-lines, CTA labels

- Hero CTA season phase toggle (pre-season / during-post)

- About Strip: Men's and Women's photography slots

- Instagram Strip: 3 slots — post URL, thumbnail, caption, date

- Our Club: Who We Are team photo, Coaching Leadership staff photo, Our Players action photo

Footer is not CMS-editable at launch. Address, social links, and legal copy are hardcoded.

CMS platform selection is deferred — to be assessed once all page designs are finalised.

# **11. OPEN ITEMS & DECISIONS PENDING**

| **OPEN ITEM** | **OWNER** | **TARGET** |
| --- | --- | --- |
| Final button design system (hover states, variants, secondary style) | Design | TBC |
| Mobile nav / hamburger menu design | Design | TBC |
| Mobile footer layout (stacked columns) | Design | TBC |
| Individual player profile page design | Design | TBC |
| Actual player photography | Content / Photography | Pre-launch |
| Player cartoon illustration assets | Illustration | Pre-launch |
| Real squad data to replace placeholders | Team management | Pre-launch |
| Final hero slide copy (all 3 slides) | Content / Marketing | Pre-launch |
| Sponsor logos (PNG/SVG, transparent bg) | Commercial | As confirmed |
| Sponsor name + category label per partner | Commercial | As confirmed |
| Sponsor website URLs | Commercial | As confirmed |
| Confirm if 6 sponsor slots is sufficient or needs expanding | Commercial | Pre-launch |
| Team logo image files for all RPL Season 2 teams | Design / Content | Pre-launch |
| Footer social links — confirm if X/YouTube to be added | Commercial / Marketing | Pre-launch |
| CMS platform selection | Tech / Product | Post all-page design |
| All remaining page wireframes (3 pages) | Design | Ongoing |
| About Strip — Men's team photography | Photography | Pre-launch |
| About Strip — Women's team photography | Photography | Pre-launch |
| About Strip — headline and body copy per panel | Content / Marketing | Pre-launch |
| Instagram Strip — confirm OG image auto-fetch vs manual thumbnail upload | Tech / Product | Pre-build |
| Our Club — skyline illustration: reuse Season 1, commission new, or replace with photography | Design / Content | Pre-launch |
| Our Club — Dream Sports brand logos: source from brand assets or upload as files | Design / Content | Pre-launch |
| Season 2 photography: team photo, coaching staff, action shot (Our Club) | Photography | Pre-launch |

# **12. CHANGE LOG**

| **DATE** | **SECTION** | **CHANGE** |
| --- | --- | --- |
| May 2026 | All | Document created — covers brand/visual identity, site architecture, Page 1 (Hero + Nav), Page 2 (Squad) |
| May 2026 | Section 6 (new) | Page 3: Fixtures & Results added — wireframe complete |
| May 2026 | Section 1.4 | Key constraint added: No Match Ticker Band |
| May 2026 | Cover table | Fixtures & Results marked COMPLETE. Match Ticker Band marked REMOVED. |
| May 2026 | Section 7 (new) | Shared Footer added — design complete. Three-column layout, animated logo canvas, full HTML/CSS/JS included. |
| May 2026 | Section 8 (new) | Our Club (/about) added — wireframe complete. Six sections designed. |
| May 2026 | Cover table | Our Club marked COMPLETE. Version bumped to 1.3. |
| May 2026 | Sections 4.3, 4.5, 4.6 (new) | Homepage sections added: About Strip (50/50 split panels, full-bleed photography), Instagram Strip (manual CMS, 3 curated posts), Sponsors Strip (6 slots, single tier, hidden until activated). Homepage section order finalised. Version bumped to 1.4. |
| May 2026 | Section 10.1 | Technical decisions added: About Strip, Instagram Strip, Sponsors Strip approaches documented. |
| May 2026 | Section 10.2 | CMS requirements updated: About Strip photography slots, Instagram Strip 3-slot fields, Sponsors Strip slot active toggle added. |
| May 2026 | Section 11 | Open items updated: sponsor fields, About Strip photography and copy, Instagram Strip technical decision added. |

*— End of Document —*
