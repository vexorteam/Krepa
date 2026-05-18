# Krepa

> English · [Українська](README.uk.md)

Promotional landing page for the **Krepa** workout app — a fictional mobile training companion. Static, no-backend, no API calls.

## Tech stack

| Layer | Choice |
|---|---|
| Bundler | Vite 5 |
| Framework | React 18 |
| Styles | Tailwind CSS v3 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | Geist (body) · Fraunces (display) |

## Getting started

```bash
cd krepa-landing
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build   # output → dist/
npm run preview # preview the production build locally
```

Drop the `dist/` folder on any static host — no server required.

## Project structure

```
krepa-landing/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/       # Nav, Footer
│   │   ├── sections/     # Hero, Stats, Features, Showcase,
│   │   │                 # Testimonials, Pricing, FAQ, FinalCTA
│   │   ├── ui/           # Button, Container, SectionHeader, PhoneMockup
│   │   └── motion/       # Reveal (scroll fade), SplitText (hero headline)
│   ├── data/             # Static content — features, stats, testimonials,
│   │                     # pricing, faq
│   ├── hooks/            # useScrollState (nav backdrop)
│   └── styles/
│       └── globals.css
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## Design tokens

All colors, type scales, and spacing live in `tailwind.config.js`.

| Token | Value | Usage |
|---|---|---|
| `ink-900` | `#0A0A0B` | Primary text, headings |
| `ink-500` | `#71717A` | Muted text, captions |
| `paper` | `#FAFAF7` | Main background (warm off-white) |
| `accent` | `#FF5A1F` | CTAs, key numbers — used sparingly |

The accent color appears on CTAs, key numbers, and active states only. Everything else is black on warm white.

## Sections

1. **Nav** — sticky, transparent; gains `backdrop-blur` on scroll
2. **Hero** — headline with word-mask animation, phone mockup
3. **Stats** — 4 animated counters
4. **Features** — 6 feature cards
5. **Showcase** — 3 alternating app screen blocks with parallax
6. **Testimonials** — 3 cards; snap-scroll on mobile, grid on desktop
7. **Pricing** — Free / Pro / Team; monthly/yearly toggle with animated price
8. **FAQ** — 7-item accordion
9. **Final CTA** — dark section with download buttons
10. **Footer** — link columns, social icons, copyright

## Accessibility & performance

- Semantic HTML (`<nav>`, `<main>`, `<section>`, `<footer>`)
- `aria-label` on all icon-only controls; `aria-expanded` / `aria-controls` on accordion; `aria-pressed` on billing toggle
- All Framer Motion animations respect `prefers-reduced-motion`
- `scroll-padding-top` compensates for the fixed nav on anchor links
- Focus-visible ring styled with the accent color
- Target: Lighthouse performance ≥ 90 in all categories

## License

MIT
