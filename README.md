# Handoff: Team Kroken — Sponsor Webpage Graphical Profile

## Overview
This is the graphical profile and design system for **Team Kroken**, a Swedish sailing team (Gamla Stan Yacht Club) competing in the J/24 World Championship 2025. The deliverable is a sponsor-facing webpage with a classic 1980s Americas Cup / yacht club prestige aesthetic.

This folder contains **HTML design references** — high-fidelity prototypes showing the intended look and feel. The task is to **recreate these in your production codebase** (React, Next.js, or similar) using its established patterns and libraries. Do not ship the HTML files directly.

## Fidelity
**High-fidelity.** Colors, typography, spacing, ornamental details, and component states are all finalised. Recreate pixel-accurately.

---

## Chosen Direction: 3a — "Cobalt + Sail"
The preferred direction is **option 3a**: deep navy background with vivid cobalt accents, bright sail-white text, and brass/gold ornamental details. Cormorant Garamond throughout.

---

## Design Tokens

### Colors
| Token | Hex | Usage |
|---|---|---|
| `--color-navy` | `#071430` | Page background, nav background |
| `--color-cobalt` | `#1A4DB8` | Accent, interactive highlight |
| `--color-brass` | `#D4AA28` | Primary accent: labels, borders, CTA buttons, ornaments |
| `--color-sail` | `#F4ECDA` | Primary text on dark backgrounds |
| `--color-spray` | `#6AAEDC` | Secondary accent, supporting colour |
| `--color-sand` | `#F0E8D4` | Light-mode background alternative (option 2b) |

### Typography
**Primary font:** [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond)  
Load weights: 300, 400, 600 — regular and italic.

```
font-family: 'Cormorant Garamond', Georgia, serif;
```

| Role | Size | Weight | Letter-spacing | Notes |
|---|---|---|---|---|
| Hero / Display | 54px | 300 | 7px | Uppercase, line-height 0.92 |
| Section heading | 30px | 300 | 1px | |
| Card title | 17–20px | 400 | 0.5px | |
| Nav brand name | 11px | 400 | 3px | Uppercase |
| Labels / caps | 7.5–9px | 400 | 2.5–5px | Uppercase, brass colour |
| Body copy | 10px | 400 | normal | Line-height 1.65 |
| Italic subtitle | 11px | 400 italic | 0.5px | |

### Spacing
```
--space-xs:  8px
--space-sm: 14px
--space-md: 22px
--space-lg: 36px
--space-xl: 48px
```

### Borders & Dividers
- Dividers: `1px solid rgba(212, 170, 40, 0.28)` (brass tint)
- Card borders: `1px solid rgba(212, 170, 40, 0.32)`
- Nav bottom border: `1px solid rgba(200, 168, 75, 0.20)`

---

## Components

### Navigation Bar
- Background: `#071430`
- Height: ~54px, padding: `13px 24px`
- Left: circular logo mark (32×32, 0.8px brass stroke) + brand name stack
- Right: nav links in sail-white at ~40% opacity, active link in brass with 0.75px underline
- Bottom border: 1px brass tint divider

**Logo mark:** SVG circle with "TK" monogram in Cormorant Garamond 12px/600 weight, brass colour.

### Hero Section
- Full-width photo with `object-fit: cover`
- Overlay: `linear-gradient(175deg, rgba(7,20,48,0.32) 0%, rgba(7,20,48,0.68) 100%)`
- Centred content stack:
  1. Ornamental rule (SVG: two lines + diamond, brass, 240px wide)
  2. Subtitle label — 8.5px, letter-spacing 5px, uppercase, brass
  3. Display heading — "Team / Kroken", 54px/300, sail white, uppercase
  4. Ornamental rule (repeat)
  5. Event label — 8px, letter-spacing 4px, brass at 70% opacity
- `text-shadow: 0 2px 24px rgba(7,20,48,0.55)` on display heading

**Ornamental rule SVG pattern:**
```html
<svg width="240" height="14" viewBox="0 0 240 14">
  <line x1="0" y1="7" x2="105" y2="7" stroke="#D4AA28" stroke-width="0.75"/>
  <polygon points="120,3 116,7 120,11 124,7" fill="#D4AA28"/>
  <line x1="135" y1="7" x2="240" y2="7" stroke="#D4AA28" stroke-width="0.75"/>
</svg>
```

### Buttons
**Primary (CTA):**
```css
background: #D4AA28;
color: #071430;
padding: 9px 20px;
font-family: 'Cormorant Garamond', serif;
font-size: 9.5px;
letter-spacing: 3px;
text-transform: uppercase;
font-weight: 600;
border: none;
```

**Secondary (ghost):**
```css
background: transparent;
color: #D4AA28;
border: 1px solid rgba(212,170,40,0.65);
/* same padding/font as primary */
```

### Sponsor / Partner Card
```css
border: 1px solid rgba(212,170,40,0.32);
padding: 14px;
```
- Eyebrow label: 7px, letter-spacing 3px, uppercase, brass
- Title: 17px/400, sail white
- Body: 9.5px, sail white at 55% opacity, line-height 1.6

### Colour Swatch Row
Five swatches side by side, each:
- `height: 28px`, `border-radius: 3px`
- Hex label below: 7.5px, monospace, sail white at 50% opacity
- Name label: 7.5px, sail white at 35% opacity

---

## Page Sections (suggested sponsor page structure)
1. **Nav** — logo + links
2. **Hero** — full-bleed photo + team name overlay
3. **Intro** — team statement, 2-col: headline left, body right
4. **Sponsorship tiers** — Platinum / Gold / Silver cards
5. **Race calendar** — event list with dates
6. **Team** — crew grid with photos
7. **Contact / CTA** — "Become a Partner" section
8. **Footer** — yacht club logo, legal

---

## Assets
Photos to use as hero/section imagery (provided by client — in `uploads/` folder in the design project):
- `pasted-1783432618760-0.png` — aerial regatta shot, cobalt water (used in 3a hero)
- `pasted-1783432569368-0.png` — silver-toned fleet photo (used in 3b hero)
- `pasted-1783432610246-0.png` — close-up racing shot

---

## Design Reference Files
- `Team Kroken Profile.dc.html` — full graphical profile explorer with all 3 turns of iterations
  - Turn 3 (top, labelled "3") = final directions with real photos
    - **3a** = chosen direction (cobalt + sail)
    - **3b** = alternative (silver sea)
  - Turn 2 = earlier navy explorations
  - Turn 1 = initial palette explorations (forest/brass, navy/red, nordic)

Open the HTML file in a browser to inspect all options side by side.

---

## Implementation Notes
- Use `filter: brightness(1.05) contrast(1.05)` on hero images to boost photo crispness
- The ornamental SVG divider can be a reusable component — pass `color` and `width` as props
- Cormorant Garamond renders best at sizes 11px+ on dark backgrounds; avoid it below 9px in production
- For responsive: the display heading should scale down with `clamp(32px, 5vw, 54px)`
- Hover states on nav links: opacity 1.0, add brass underline transition ~150ms ease
- Hover on CTA button: brightness(1.1) on the brass background
