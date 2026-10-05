# ZarinTeb Web Platform

Multilingual product and company website for **ZarinTeb**, an Afghanistan-based medical equipment supplier and manufacturer. The application presents products, services, company information, and contact channels in English, Persian/Dari, and Pashto.

Production domain: [zarinteb.com](https://zarinteb.com)

Optimization preview: [Vercel preview](https://nextjs-zarinteb-qhlz1z40g-emads-projects-c3e684c6.vercel.app/en)

## Current stack

| Area | Technology |
| --- | --- |
| Runtime | Node.js 24+, npm 11+ |
| Framework | Next.js 16.3, App Router, Turbopack |
| UI runtime | React 19.3 |
| Language | TypeScript 5.9 (newest line supported by the current ESLint parser) |
| Styling | Tailwind CSS 4.3, PostCSS, `tw-animate-css` |
| Localization | `next-intl` 4.14 |
| Content | Sanity through the lightweight `@sanity/client` 8.9 |
| Linting | ESLint 9.39.4 (newest fully resolvable release supported by Next's current plugins) |
| Motion | Motion 14 |
| UI primitives | shadcn/ui source components on Radix, Lucide; existing Headless UI pending scoped migration |
| Forms and email | Zod 4, Resend 6, Sonner 2 |

The frontend intentionally uses `@sanity/client` directly. Do not add `next-sanity` unless the app needs its preview or embedded Studio features; current versions pull the full Sanity Studio peer graph into the frontend.

## Local setup

```bash
nvm use
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Locale proxy logic redirects the root URL to the configured default locale.

Create `.env.local` for deployment-specific values:

```dotenv
NEXT_PUBLIC_SANITY_PROJECT_ID=vojt76kk
NEXT_PUBLIC_SANITY_DATASET=production
RESEND_API_KEY=
```

The Sanity project and dataset currently have repository fallbacks. `RESEND_API_KEY` is required for contact-form delivery and must only be configured server-side.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Turbopack development server |
| `npm run lint` | Run ESLint with zero warnings allowed |
| `npm run typecheck` | Run TypeScript without emitting files |
| `npm run build` | Create the production build |
| `npm run start` | Serve an existing production build |
| `npm run check` | Run lint, typecheck, and production build |

Run `npm run check` before handing work to review. A dependency bump is incomplete until this command passes.

## Application structure

```text
messages/                    Locale dictionaries: en, fa, ps
public/                      Static brand and page media
src/
  app/[locale]/              Localized App Router pages and layouts
    about/
    contact/
    products/
    service/
  components/                Shared navigation, footer, UI, motion, and home sections
  i18n/                      next-intl routing, navigation, and request config
  lib/                       Shared Sanity image and utility helpers
  sanity/client.ts           Read-only frontend Sanity client
  types/                     Domain types shared across pages
  proxy.ts                   Next.js 16 locale proxy (formerly middleware)
tailwind.config.ts           Compatibility theme consumed by Tailwind CSS 4
```

## Localization and direction

Supported route prefixes are:

- `/en` — English, left-to-right
- `/fa` — Persian/Dari, right-to-left
- `/ps` — Pashto, right-to-left

Use logical layout utilities (`start`, `end`, `ms`, `me`, `ps`, `pe`) for new UI. Do not encode left/right layout assumptions. Phone numbers, email addresses, product codes, and URLs should be isolated as LTR content inside RTL pages.

When adding copy, update all three files in `messages/`. Persian and Pashto content requires native-language review before production.

## Content and data

Products and categories come from Sanity. Queries should:

- request only fields used by the page;
- use explicit TypeScript result types;
- prefer localized content with an English fallback;
- keep filters and search state in the URL;
- retain image dimensions and meaningful alt text.

The contact form is a server action backed by Resend. Never expose the Resend key through a `NEXT_PUBLIC_` variable.

## Design and delivery rules

[`DESIGN.md`](./DESIGN.md) is the authoritative visual, content, accessibility, responsive, and RTL specification. [`STATUS.md`](./STATUS.md) records implementation state for local AI-assisted work and is intentionally ignored by Git.

All numbered briefs live in [`tasks/`](./tasks/README.md). Start with Task 02 after reviewing the delivered UI baseline. UI skills from Emil Kowalski are installed project-wide in `.agents/skills/`; read [`docs/UI-SKILLS.md`](./docs/UI-SKILLS.md) for scope, usage, attribution, and project-specific overrides. New work uses shadcn/ui, CSS for simple motion, and the existing Motion package only when needed.

Work is developed on `optimize-plan`. Do not push automatically; the repository owner reviews and pushes milestones.

## Deployment

Vercel is the expected frontend host. Configure the three environment variables above, use Node.js 24, and keep the install command as `npm install`. The generated `package-lock.json` is authoritative and must be committed with dependency changes.

Before production release, verify every public page in all locales at mobile, tablet, and desktop widths, then check the content-blocker list in `DESIGN.md`.
