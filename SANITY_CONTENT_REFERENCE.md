# Sanity CMS Content Reference

This document contains all the hardcoded content from the original components. Use this to populate the Sanity CMS fields.

---

## OUR CLUB PAGE CONTENT

### Section 1: WHO WE ARE
**Heading:** WHO WE ARE  
**Title:** BORN TO DREAM  
**Description:**  
```
Mumbai Dreamers is Mumbai's professional Men's & Women's rugby team — backed by Dream Sports, built for fans, and driven by a city that never stops dreaming. We compete in the Rugby Premier League representing the spirit, energy, and ambition of Aamchi Mumbai.
```
**Photo:** Upload a team/city image (recommended: 1040px wide)

---

### Section 2: OUR IDENTITY
**Heading:** OUR IDENTITY  
**Title:** MORE THAN A TEAM  
**Description:**  
```
We are the heartbeat of Mumbai rugby. A team that carries the dreams of a city, the backing of India's greatest sports technology company, and the ambition to put Indian rugby on the world map.
```

---

### Section 3: COACHING & LEADERSHIP
**Heading:** COACHING & LEADERSHIP  
**Title:** LED BY THE BEST  
**Description:**  
```
Our coaching staff bring international experience and a deep understanding of what it takes to win at the highest level. Olympic medallists & World Champions - Phillip Snyman & Renfred Dazel from South Africa will be guiding Mumbai Dreamers on and off the field.
```
**CTA Text:** LEARN MORE (or VIEW SQUAD →)  
**Photo:** Upload coaching staff image (recommended: 1080px wide)

---

### Section 4: OUR PLAYERS
**Heading:** OUR PLAYERS  
**Title:** THE DREAMERS  
**Description:**  
```
Men and women who represent Mumbai with pride. Local talent, international stars — united by the Dreamers badge.
```
**Photo:** Upload players in action image (recommended: 1080px wide)

---

### Section 5: DREAM SPORTS FOUNDATION
**Heading:** OUR FAMILY  
**Title:** OWNED BY DREAM SPORTS  
**Description:**  
```
Mumbai Dreamers is part of the Dream Sports family — India's leading sports technology company powering the nation's love of sport.
```

---

### Section 6: VISION
**Heading:** OUR VISION  
**Title:** DREAM BIGGER  
**Description:**  
```
To be the team that puts Mumbai and India on the global rugby map. To inspire the next generation of Indian rugby players. To build something that lasts beyond any single season.
```

---

## HOMEPAGE CONTENT

### Hero Carousel
Create at least 3 hero slides with:
- **Headline** (e.g., "MUMBAI DREAMERS")
- **Subheading** (optional)
- **CTA Text** (e.g., "Learn More", "Get Tickets")
- **CTA Link** (e.g., "/squad", "/results")
- **Image** (1920×1080px recommended)

**Example Slides:**
1. Slide 1: Team photo, "SEASON 2 KICKOFF", "EXPLORE SQUAD", "/squad"
2. Slide 2: Match action, "LIVE MATCHES", "VIEW FIXTURES", "/results"
3. Slide 3: City view, "DREAM BIGGER", "JOIN US", "/contact"

---

### Site Settings
**Season Phase:** Choose from:
- `pre-season` → Button shows "Register Interest"
- `in-season` → Button shows "Buy Tickets"
- `post-season` → Button shows "View Highlights"

---

### Squad Players
Add players with:
- **Name** (e.g., "Phillip Snyman")
- **Number** (jersey number)
- **Position** (e.g., "Coach", "Fly-half", "Prop")
- **Team** (select "mens" or "womens")
- **Photo** (400×500px portrait recommended)
- **Bio** (optional player description)

**Example Players:**
- Phillip Snyman, Number: Coach, Position: Head Coach, Team: mens
- Player Name, Number: 10, Position: Fly-half, Team: mens
- [Add more players...]

---

### Fixtures & Results
Add matches with:
- **Date** (match date)
- **Home Team** (e.g., "Mumbai Dreamers")
- **Away Team** (opponent name)
- **Venue** (location)
- **Competition** (e.g., "RPL Season 2")
- **Team** (select "mens" or "womens")
- **Status** (Scheduled, Completed, Cancelled)
- **Score A / Score B** (if completed)
- **YouTube URL** (if highlight available)

---

### About Strip Images
Upload photos for:
- **Men's Squad Photo** (960×600px recommended)
- **Women's Squad Photo** (960×600px recommended)

---

### Instagram Strip
Add 3 curated posts with:
- **Post URL** (Instagram post link)
- **Thumbnail** (image for the card)
- **Caption** (post description)
- **Order** (1, 2, 3)

---

### Sponsors
Add sponsors with:
- **Name** (sponsor name)
- **Logo** (logo image)
- **Link** (sponsor website)
- **Active** (toggle to show/hide)
- **Order** (display order)

**Example Sponsors:**
- Dream11, Logo, https://www.dream11.com, Active: Yes
- FanCode, Logo, https://www.fancode.com, Active: Yes
- [Add more...]

---

## PHOTOS TO UPLOAD

| Page Section | Recommended Size | Type |
|---|---|---|
| Hero Slides | 1920×1080px | Wide banner photos |
| Squad Players | 400×500px | Portrait headshots |
| About Strip | 960×600px | Squad/team photos |
| Who We Are | 1040px wide | Team/stadium photo |
| Coaching | 1080px wide | Coach/coaching staff |
| Players Section | 1080px wide | Players in action |
| Instagram | Variable | Social media screenshots |
| Sponsor Logos | 120×120px | Logo images |

---

## STEPS TO POPULATE SANITY

1. **Go to Sanity Studio:** http://localhost:3000/studio
2. **Create Hero Slides** (required for homepage to display)
3. **Add Squad Players** (required for squad pages)
4. **Add Fixtures** (required for results page)
5. **Create "Our Club — Content"** (for /about page)
6. **Add Site Settings** (season phase, etc.)
7. **Upload Photos** for each section
8. **Add Instagram Posts** (optional but recommended)
9. **Add Sponsors** (optional)

---

## TESTING

After populating Sanity:
- Homepage: http://localhost:3000 (shows hero + squad preview)
- Our Club: http://localhost:3000/about (shows all sections with your content)
- Squad: http://localhost:3000/squad (shows players)
- Results: http://localhost:3000/results (shows fixtures)

All content will be pulled directly from Sanity CMS!
