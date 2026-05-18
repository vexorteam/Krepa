# Contributing

This is a personal portfolio project, but feedback and fixes are welcome.

## What belongs here

- Bug fixes (broken layout, animation glitches, accessibility gaps)
- Responsive-design corrections at the four supported breakpoints (375, 768, 1024, 1440)
- Performance improvements that keep Lighthouse ≥ 90

## What does not belong here

- Backend, API calls, or database integration
- Dark theme
- i18n / translation — the landing is English-only by design
- New dependencies unless there is a strong reason (current bundle is intentionally lean)

## Workflow

1. Fork, create a feature branch (`fix/nav-mobile-overflow`, `perf/lazy-mockup-images`).
2. Run `npm run dev` and verify at all four breakpoints before opening a PR.
3. Keep commits focused — one logical change per commit.
4. Open a pull request with a short description of what changed and why.

## Code style

Prettier and ESLint are configured. Run `npm run lint` before pushing. No special setup needed beyond `npm install`.

## Design constraints

Before adding or changing visuals, check:

- No purple/blue gradients
- Warm off-white background (`#FAFAF7`), not pure white
- Accent color (`#FF5A1F`) used sparingly — CTAs and key numbers only
- Animations: translate ≤ 24 px, no bounce, no scale > 1.05
- Copy: specific and direct, no marketing superlatives
