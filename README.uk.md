# Krepa

> [English](README.md) · Українська

Промо-лендинг для вигаданого мобільного застосунку для тренувань **Krepa**. Статична сторінка без бекенду та API-викликів.

## Технічний стек

| Шар | Вибір |
|---|---|
| Bundler | Vite 5 |
| Framework | React 18 |
| Стилі | Tailwind CSS v3 |
| Анімації | Framer Motion |
| Іконки | Lucide React |
| Шрифти | Geist (body) · Fraunces (display) |

## Запуск

```bash
cd krepa-landing
npm install
npm run dev
```

Відкрити [http://localhost:5173](http://localhost:5173).

## Збірка

```bash
npm run build   # результат → dist/
npm run preview # локальний перегляд продакшн-збірки
```

Вміст папки `dist/` можна розмістити на будь-якому статичному хостингу — сервер не потрібен.

## Структура проєкту

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
│   ├── data/             # Статичний контент — features, stats, testimonials,
│   │                     # pricing, faq
│   ├── hooks/            # useScrollState (backdrop nav)
│   └── styles/
│       └── globals.css
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## Дизайн-токени

Всі кольори, типографіка і відступи визначені у `tailwind.config.js`.

| Токен | Значення | Використання |
|---|---|---|
| `ink-900` | `#0A0A0B` | Основний текст, заголовки |
| `ink-500` | `#71717A` | Приглушений текст, підписи |
| `paper` | `#FAFAF7` | Основний фон (теплий off-white) |
| `accent` | `#FF5A1F` | CTA, ключові цифри — точково |

Акцентний колір — виключно на CTA, ключових числах та активних станах. Решта — чорне на теплому білому.

## Секції

1. **Nav** — sticky, прозорий; `backdrop-blur` при скролі
2. **Hero** — анімований заголовок по словах, мокап телефону
3. **Stats** — 4 лічильники з анімацією
4. **Features** — 6 карток можливостей
5. **Showcase** — 3 alternating-блоки з екранами застосунку і parallax
6. **Testimonials** — 3 картки; snap-scroll на мобільному, grid на десктопі
7. **Pricing** — Free / Pro / Team; перемикач monthly/yearly з анімованою ціною
8. **FAQ** — акордеон з 7 питань
9. **Final CTA** — темна секція з кнопками завантаження
10. **Footer** — колонки посилань, іконки соцмереж, копірайт

## Доступність та продуктивність

- Семантична HTML-розмітка (`<nav>`, `<main>`, `<section>`, `<footer>`)
- `aria-label` на всіх іконкових кнопках; `aria-expanded` / `aria-controls` на акордеоні; `aria-pressed` на toggle оплати
- Всі анімації Framer Motion враховують `prefers-reduced-motion`
- `scroll-padding-top` компенсує fixed nav для якорних посилань
- Focus-visible ring у кольорі акценту
- Ціль: Lighthouse performance ≥ 90 в усіх категоріях

## Ліцензія

MIT
