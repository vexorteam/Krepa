# Krepa

Promotional landing page for the Krepa workout app — a fictional mobile training companion.

Built as a static, no-backend front-end project. Every piece of content is a hardcoded constant; there are no API calls, forms, or authentication.

## Tech stack

| Layer | Choice |
|---|---|
| Bundler | Vite |
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
npm run build
npm run preview
```

Output lands in `dist/`. Drop it on any static host — no server required.

## Project structure

```
krepa-landing/
├── public/
├── src/
│   ├── components/
│   │   ├── layout/       # Nav, Footer
│   │   ├── sections/     # Hero, Stats, Features, Showcase, Testimonials, Pricing, FAQ, FinalCTA
│   │   ├── ui/           # Button, Container, SectionHeader, PhoneMockup
│   │   └── motion/       # Reveal, SplitText
│   ├── data/             # Static content constants
│   ├── hooks/
│   └── styles/
└── ...config files
```

## Design tokens

Colors, typography, and spacing live in `tailwind.config.js`. The accent color (`#FF5A1F`) is used sparingly — CTAs and key numbers only.

## Accessibility & performance

- Semantic HTML (`<nav>`, `<main>`, `<section>`, `<footer>`)
- `aria-label` on all icon-only controls
- Framer Motion animations respect `prefers-reduced-motion`
- Target: Lighthouse performance ≥ 90 in all categories

## License

MIT — see [LICENSE](LICENSE).
