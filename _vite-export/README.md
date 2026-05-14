# Kurraya Hills — React + Vite SPA Export

Standalone React + Vite + TypeScript + Tailwind CSS version of the Kurraya Hills
Singkawang website. Identical branding, content, design, and animations as the
Lovable project — refactored into a classic Vite SPA structure with React Router DOM.

## Stack

- React 18 + TypeScript
- Vite 5
- Tailwind CSS 3
- React Router DOM 6
- lucide-react (icons)

## Getting Started

Copy this folder out of Lovable, then:

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run preview
```

## Structure

```
_vite-export/
├── index.html
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── package.json
└── src/
    ├── main.tsx           # ReactDOM + BrowserRouter
    ├── App.tsx            # <Routes>
    ├── index.css          # Tailwind + design tokens (oklch) + custom utilities
    ├── components/
    │   ├── SiteLayout.tsx # Nav + Outlet + Footer
    │   └── PageHero.tsx
    ├── pages/
    │   ├── Home.tsx
    │   ├── About.tsx
    │   ├── Rooms.tsx
    │   ├── Romantic.tsx
    │   ├── WeddingMeeting.tsx
    │   ├── RestaurantPool.tsx
    │   └── Contact.tsx
    ├── assets/            # All site images
    ├── data/              # (reserved)
    └── lib/utils.ts
```

## Routes

| Path | Page |
|------|------|
| `/` | Home (full-screen slideshow + nonstop marquee) |
| `/about` | Brand story |
| `/rooms` | Deluxe Twin & Single + horizontal scroll gallery |
| `/romantic` | Honeymoon setup + dinner packages |
| `/wedding-meeting` | Bespoke weddings + meeting packages |
| `/restaurant-pool` | Menu + Hill Pool pricing |
| `/contact` | Inquiry form (WhatsApp deep-link) + map |

## Hosting Notes

This is a SPA — for any static host (Vercel, Netlify, Cloudflare Pages, Nginx),
configure SPA fallback so deep links and refresh resolve to `index.html`:

- **Netlify** — add `public/_redirects`: `/* /index.html 200`
- **Vercel** — add `vercel.json`: `{ "rewrites": [{ "source": "/(.*)", "destination": "/" }] }`
- **Nginx** — `try_files $uri /index.html;`

## Notes

- All design tokens live in `src/index.css` as CSS custom properties (oklch).
- Tailwind references them via `tailwind.config.ts` (`gold`, `ink`, `cream`, etc.).
- Custom animations (`animate-ken-burns`, `animate-marquee`, `animate-fade-up`,
  `animate-float-slow`, `animate-shimmer`) are defined in the Tailwind config.
- No SSR, no server functions, no file-based routing.
