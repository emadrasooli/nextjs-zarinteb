# ZarinTeb Product and Design Specification

> Version 2.0 — 5 October 2026  
> Status: authoritative implementation brief for planning, design, and coding  
> Applies to: `optimize-plan`, zarinteb.com, and its Vercel preview

Implementation direction: **shadcn/ui components, Zarin gold tokens, CSS-first interaction feedback, and Motion for justified complex animation**. This specification defines the target; it does not claim all requirements are implemented. Numbered work lives in [`tasks/`](./tasks/README.md).

## 1. Product definition

ZarinTeb is a medical-equipment supplier and manufacturer serving hospitals, clinics, laboratories, procurement teams, and patients across Afghanistan. **Zarin OrthoTeb** is its orthopedic and rehabilitation division.

The website is a multilingual catalogue and lead-generation platform. It is not currently an e-commerce checkout. Every experience should build trust, explain capabilities, help visitors find the right product, and make quotation or service requests easy.

### Primary audiences

1. Hospital, clinic, and laboratory procurement teams.
2. Doctors, technicians, and healthcare organizations.
3. Retail customers looking for orthopedic or home-care products.
4. Manufacturers and institutional partners evaluating ZarinTeb.

### Supported locales

| Locale | Language | Direction | Font |
| --- | --- | --- | --- |
| `en` | English | LTR | Montserrat |
| `fa` | Persian/Dari | RTL | Vazirmatn |
| `ps` | Pashto | RTL | Vazirmatn; verify Pashto glyph coverage before release |

## 2. Evidence and audit baseline

This specification uses the repository, the prior production-site analysis, and the local baseline in [`UI-AUDIT.md`](./UI-AUDIT.md). The protected Vercel preview has not been independently visually verified. Task 01 produced screenshots; claims about dynamic behavior still need reproducible checks. In particular, its explanation of reduced-motion opacity must not be treated as an established Motion library defect. The known route inventory is:

| Route | Purpose | Main sections |
| --- | --- | --- |
| `/[locale]` | Home | Hero, categories, mission/stats, featured products, OrthoTeb, services, contact CTA |
| `/[locale]/about` | Company | Hero, mission, timeline, partners, team |
| `/[locale]/service` | Services | Hero, six service cards, service CTA |
| `/[locale]/contact` | Lead capture | Hero, contact details, form, office locations |
| `/[locale]/products` | Catalogue | Intro, search, category filter, product grid |
| `/[locale]/products/[slug]` | Product detail | Gallery, product information, features, related products |

The owner reviews these routes on localhost in `en`, `fa`, and `ps` at mobile, tablet, and desktop widths and supplies screenshots when needed. Agents must not take screenshots or create visual recordings during or after tasks. Use non-capture browser/DOM diagnostics and text/JSON evidence for automated verification; this overrides screenshot recommendations in installed skills and older briefs. Dynamic product coverage needs at least one representative product with multiple images and one with missing optional data.

## 3. Brand system

### Direction: Zarin Gold + Clinical Confidence

“Zarin” means golden. Bright gold is the recognizable brand signal and remains the primary accent. Deep slate creates clinical authority; white and pale neutral surfaces keep catalogue content clear. OrthoTeb uses teal as a controlled sub-brand accent.

The earlier teal-first “Clinical Gold” proposal is rejected. Do not replace the primary gold token with teal, brown-gold, or a muted ivory palette.

### Color tokens

| Token | Value | Use |
| --- | --- | --- |
| `--background` | `0 0% 100%` | Main page background |
| `--foreground` | `222 47% 11%` | Primary text and dark surfaces |
| `--primary` | `47.9 95.8% 53.1%` | Zarin bright gold; primary emphasis and CTA accents |
| `--primary-foreground` | `26 83.3% 14.1%` | Readable text on gold |
| `--brand-navy` | `222 47% 11%` | Footer, high-trust bands, strong headings |
| `--brand-teal` | `168 80% 36%` | OrthoTeb and clinical secondary actions |
| `--destructive` | `0 84.2% 60.2%` | Errors and destructive states only |
| `--border` | `214.3 31.8% 91.4%` | Dividers and card/input borders |

Rules:

- Use gold intentionally for CTAs, active states, statistics, small highlights, and light effects—not as a full-page fill.
- Use navy or near-black for important text. Small gold text on white is not accessible.
- Teal communicates the orthopedic division or a medical secondary action; it must not compete with the master brand.
- Color can never be the only indication of state.
- Dark mode is optional and must not delay core catalogue work.

### Typography

- English uses Montserrat for display and body text.
- Persian/Dari and Pashto use Vazirmatn.
- Hero display: `clamp(2.5rem, 6vw, 4.5rem)`.
- H1: `clamp(2rem, 4vw, 3rem)`.
- H2: `clamp(1.5rem, 3vw, 2.25rem)`.
- Body: 16 px minimum; Arabic-script body content may use 17–18 px with approximately 1.8 line height.
- Never apply uppercase transforms, italics, or letter spacing to Arabic-script content.

Test Pashto-specific letters before release: `ټ ډ ړ ږ ښ ڼ ې ۍ ګ ځ څ`.

### Shape, spacing, and elevation

- Base spacing unit: 4 px.
- Preferred scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- Content container: 1280 px maximum with 16/24/32 px responsive side padding.
- Section block spacing: 64–128 px using a fluid clamp.
- Inputs: 8–12 px radius. Cards: 12–16 px. Pills: full radius.
- Prefer borders and one soft shadow. Avoid stacking heavy shadows or using 24 px+ radii on every surface.

## 4. Interaction and component rules

### Component architecture: shadcn/ui

- Reuse the source-owned components in `src/components/ui/`. The existing setup is `new-york`, TypeScript, React Server Components, CSS variables, Lucide icons, and Radix-backed primitives.
- Preserve customized variants, gold tokens, and the existing `cn()` helper. Add only components needed by the active task; inspect generated diffs rather than reinitializing or overwriting the UI directory.
- Keep existing working Headless UI behavior until a bounded migration task replaces it and verifies parity. Do not introduce Base UI as a second primitive system merely because an upstream skill prefers it.
- Before any CLI generation, correct `components.json`: `tailwind.css` must point to `src/app/[locale]/globals.css`, and Tailwind 4's CLI `tailwind.config` field should be empty. The CSS `@config` reference to the existing compatibility theme is a separate concern and must remain until deliberately migrated. See [shadcn configuration](https://ui.shadcn.com/docs/components-json).
- Existing HSL channel tokens are consumed through `hsl(var(--token))`. Do not mix generated full-color/OKLCH tokens into that convention without migrating their consumers together and checking the rendered result.
- Keep page content server-rendered. Isolate interactive menus, forms, galleries, and animation into the smallest useful client components.

| Surface | Preferred shadcn/ui building blocks | Required behavior |
| --- | --- | --- |
| Actions | Button and existing CVA variants | Clear focus, pending/disabled states, no nested link/button controls |
| Mobile navigation | Sheet in a later migration task | Accessible title, focus trap/restore, Escape, scroll lock, locale-aware side |
| Locale and filters | DropdownMenu, Select, Checkbox | Keyboard operation, explicit labels, correct portal direction |
| Product cards | Card, AspectRatio if needed, Skeleton | Stable image area, localized fallback, readable product name |
| Product detail | Breadcrumb, Table, Accordion when useful | Keyboard gallery, readable specs, honest missing-data states |
| Contact | Input, Label, Textarea, Button | Inline errors and server-confirmed status |
| Feedback | Existing Sonner integration | One application Toaster; inline form status remains available |

This table is a target map, not an instruction to add every component now. shadcn supplies interaction foundations; spacing, content hierarchy, brand styling, and accessibility still need review.

### Global navigation

- Sticky, readable over every page background, and keyboard operable.
- Desktop and mobile navigation expose Home, About, Products, Services, Contact, and locale switching.
- Locale switching preserves the current pathname, query string, and product/filter context.
- The mobile drawer must trap focus, close with Escape, restore trigger focus, and prevent background scrolling.
- Global search may use a command palette, but the product catalogue URL remains the source of truth for `q` and `category`.

### Product cards

Each card should include a stable-aspect image, localized name, product code when available, category or short summary, and a clear details/inquiry affordance. Missing or broken images use the same reserved area with a localized fallback and decorative Lucide icon. Essential identifiers remain readable. Cards may zoom the image subtly on hover-capable pointers but must not move surrounding layout; reduced motion removes the zoom.

### Product detail

Required target state:

- breadcrumb and category context;
- primary image plus accessible thumbnails;
- localized name, code, description, and features;
- structured specification table when data exists;
- “Request a quote” and WhatsApp actions;
- optional catalogue PDF;
- related products excluding the current product;
- graceful states for missing images, specs, translations, and related items.

### Forms

- Persistent labels above fields; placeholders are examples, not labels.
- Inline validation tied to fields through accessible descriptions.
- `dir="auto"` for free text; force email, phone, product codes, and URLs to LTR.
- Submit states: idle, pending, success, and recoverable error.
- Do not claim success until the server action confirms delivery.
- Preserve typed values after recoverable errors. Use appropriate email/telephone input types, autocomplete, and search/send keyboard hints. Do not add a second form library without a demonstrated need.

### Motion: smallest tool that meets the need

1. Use ordinary CSS transitions for hover, press, focus-adjacent styling, and simple state changes. Keep `tw-animate-css` for suitable shadcn state animations already in use.
2. Use native CSS entry techniques or WAAPI only when they simplify a concrete interaction and have a visible fallback.
3. Keep the installed `motion` package for interruptible gestures, coordinated presence, or justified layout transitions. Import from `motion/react`, not an additional `framer-motion` dependency.
4. Do not add another animation component pack for decoration. If Motion cost becomes material, measure `LazyMotion` plus `m` with the required feature bundle; a refactor alone is not evidence of a smaller download. See [Motion bundle guidance](https://motion.dev/docs/react-reduce-bundle-size).

Every animation needs a purpose: feedback, orientation, or a meaningful state change. Frequent navigation, searching, and keyboard shortcuts must not wait for animation. No animated counters for trust statistics, scroll-jacking, parallax, or looping catalogue decoration.

| Interaction | Default budget | Behavior |
| --- | --- | --- |
| Press feedback | 100–160 ms | Subtle state change; optional scale only without reduced motion |
| Small popover / tooltip | 125–200 ms | Trigger-aware origin; instant repeated tooltip traversal |
| Select / dropdown | 150–250 ms | Responsive entry and prompt dismissal |
| Sheet / dialog | 200–300 ms | Interruptible; no delay to focus or input |
| Optional marketing reveal | At most 250 ms | Once, 8 px maximum travel; no essential hidden content |

Shared target tokens: `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)`, `--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1)`, and `--ease-drawer: cubic-bezier(0.32, 0.72, 0, 1)`. Implement only tokens actually consumed. CSS color feedback may use `ease`; constant progress may use `linear`.

- Name transitioned properties explicitly; no `transition: all` in touched controls. Prefer transform/opacity over layout animation. Profile expensive blur, clipping, and large surfaces rather than assuming GPU acceleration.
- Trigger-anchored Radix surfaces use their own transform-origin variable, not Base UI's variable copied from a skill example. Dialogs stay centered.
- Avoid scaling from zero, bounce on functional controls, unbounded stagger, and React state updates on every animation frame. Use `will-change` only for a measured problem, not globally.
- **Content visibility wins:** essential text, products, and actions must render visibly with JavaScript disabled or delayed. Do not make whole sections or the catalogue depend on an IntersectionObserver to appear.
- **Reduced motion:** no entrance displacement, stagger delay, route movement, or skeleton shimmer. Reveal wrappers render visible immediately regardless of scroll position. Feedback may remain as an instant state change or a short opacity/color transition. Do not use broad CSS overrides that accidentally expose closed dialogs.
- `MotionConfig reducedMotion="user"` is useful but does not by itself implement this visibility contract: Motion preserves opacity animation. Handle wrapper behavior explicitly and test preference changes after mount. See [Motion accessibility](https://motion.dev/docs/react-accessibility).
- Prefer removing catalogue stagger and whole-page entrance animation. Optional marketing animation must be progressive enhancement, with stable server HTML and no hydration mismatch.

### Skill guidance and project decisions

The inspected web skills from [Emil Kowalski's repository](https://github.com/emilkowalski/skills) are installed under `.agents/skills/`; see [`docs/UI-SKILLS.md`](./docs/UI-SKILLS.md) for the pinned revision, routing, and exceptions. Apply relevant guidance to the active task, not every technique at once.

Use its design-engineering principles for cohesion, motion planning/review for precise handoffs, mobile guidance for touch behavior, and edge-case guidance for realistic content. Prototype multiple options only when a visual decision is unresolved. Apple-style gesture guidance does not replace the Zarin brand or require glass effects. Swift and React Native/Expo guidance is outside this web project's scope.

## 5. Responsive and bidirectional behavior

- Design mobile-first; validate at 390, 768, 1024, 1280, and 1440 px.
- Product grid target: 1 column on narrow mobile, then 2, 3, and 4 as space permits.
- Use CSS logical properties and Tailwind logical utilities for layout.
- Mirror arrows, chevrons, breadcrumb flow, carousel direction, and timeline progression in RTL.
- Never mirror logos, product photography, play controls, phone icons, or medical symbols.
- Isolate LTR values in RTL content with `<bdi dir="ltr">` or equivalent CSS.
- No horizontal overflow is acceptable at 320 px.
- Test 200% zoom, long translated labels, long product names/codes, zero/one/many results, absent images, and missing optional fields. Use `min-w-0`, intentional wrapping, and non-shrinking action icons where appropriate; do not truncate essential codes or numeric values.
- Touch inputs use at least 16 px text and comfortable targets (aim for 44 px). Preserve browser zoom and selectable content. Feedback on press must not turn navigation or submission into pointer-down actions.
- Use `dvh` for viewport-bound sheets and `svh` only when a stable hero height is required. Respect safe areas on fixed controls. Keep normal document scrolling; constrain scroll chaining only in overlays that need it.
- Verify touch, software-keyboard, and safe-area behavior on physical hardware before release. Record desktop emulation and real-device results separately.

## 6. Page requirements and known gaps

### Home

- Hero copy must identify medical equipment and Afghanistan, not rely only on “Inspiring a Healthy Life.”
- Category tiles need a useful visual and link to a URL-backed product filter.
- Rename “Customers also purchased” to “Featured products”; there is no purchase flow.
- Replace unverified statistics with owner-confirmed history; use “Since 2022” only if the founding date is verified.
- Retain the distinct OrthoTeb block without letting teal overtake the master brand.

### About

- Remove Tailwind template partner logos unless real partners are supplied.
- Replace repeated team imagery with real distinct media or one honest image.
- Describe equipment supply/manufacturing, not direct medical care.
- Verify the 2022–2025 timeline with the business owner.

### Services

- Preserve the six-service structure and the restored medical illustration.
- Correct “Get in touch with use” to “Get in touch with us.”
- Explain geographic/service constraints instead of implying unsupported emergency coverage.

### Contact

- Placeholder phone numbers and email addresses are release blockers.
- Add verified office-specific phone, email, hours, map link, and WhatsApp data.
- Do not invent contact details.
- Provide clear Resend failure behavior and abuse protection before high-volume promotion.

### Products

- Search and filters remain URL-backed and work after locale switching.
- Decide cross-language search explicitly: preserve the query and support matches against the active language plus English fallback, rather than silently losing results when switching locales. Display content in the selected locale. Native-language review is required; Persian text is not a Pashto translation.
- Add product count, empty state, clear-filter action, and deterministic sorting.
- Normalize slugs; product codes can remain visible identifiers but should not dictate inconsistent URL strategy.

### Global

- Generate unique localized metadata for every page and product.
- Add locale-aware sitemap, canonical URLs, and `hreflang` alternates.
- Replace `#` footer and social links with real destinations or remove them.
- Add localized not-found and error states.

## 7. Content blockers

The following require client-supplied, verified information and must never be fabricated:

- phone numbers, emails, WhatsApp numbers, office addresses, hours, and map URLs;
- manufacturer/partner logos and permission to use them;
- team photography and names/roles if published;
- product specifications, certifications, PDFs, warranty, and availability;
- company history and all statistics;
- social profiles;
- privacy and terms text;
- native review of Persian/Dari and Pashto translations.

## 8. Accessibility, performance, and SEO acceptance criteria

### Accessibility

- WCAG 2.2 AA contrast and interaction behavior.
- Visible focus on every interactive control.
- Full keyboard navigation, including menus, dialogs, galleries, and filters.
- Descriptive image alt text from Sanity; decorative images use empty alt text.
- Heading hierarchy has one meaningful H1 per page.
- Form errors and loading/success states are announced.

### Performance

- Mobile-field targets: LCP < 2.5 s, CLS < 0.1, INP < 200 ms at the 75th percentile.
- Use `next/image` with explicit dimensions or aspect ratios and correct `sizes`.
- Only the true LCP image receives priority/preload treatment.
- Sanity queries request minimal projections and use an intentional cache/revalidation policy.
- Keep client components at interaction boundaries; default to Server Components.
- Do not ship embedded Studio packages in the frontend.

### SEO

- Unique localized title and description per route.
- Product metadata derives from verified localized content.
- Canonical URL and `hreflang` mappings for `en`, `fa`, and `ps`.
- Structured data should use `Organization`, `LocalBusiness`, and `Product` only when all required facts are accurate.

## 9. Delivery plan for Gemini

GPT owns planning, task definition, review criteria, and architectural decisions. Gemini implements one bounded slice at a time. Do not combine unrelated visual, data, and infrastructure changes in one task.

### Phase 0 — modernization baseline (complete)

- Upgrade the runtime and packages.
- Migrate Next middleware to `proxy.ts`, Tailwind 4/PostCSS, ESLint flat config, and direct Sanity client usage.
- Pass lint, typecheck, and production build.

### Phase 1 — trust and correctness

- Execute [Task 02](./tasks/TASK-02-UI-FOUNDATION.md) first: shadcn configuration readiness and reliable shared motion/content visibility, using Task 01 evidence.

- Remove or flag fake partner, contact, social, and statistics content.
- Correct misleading English copy and translation keys.
- Add route metadata, not-found, and error handling.

### Phase 2 — navigation and discovery

- Finish accessible mobile navigation and global search.
- Make search/category state locale-safe and URL-backed.
- Add count, sort, empty state, and clear-filter behavior.

### Phase 3 — product conversion

- Upgrade cards and product detail gallery.
- Add specifications, quote/WhatsApp actions, and optional PDF support.
- Extend Sanity schemas in the separate Studio repository, with a documented migration.

### Phase 4 — page polish

- Refine Home, About, Services, and Contact against this specification.
- Integrate verified client content only.
- Validate all locales and breakpoints.

### Phase 5 — release hardening

- Add automated route smoke tests and non-capture interaction checks; the owner handles visual review on localhost.
- Run accessibility and Lighthouse checks.
- Validate structured data, sitemap, canonical URLs, and forms in the preview deployment.

Every implementation task must state: files in scope, data assumptions, LTR/RTL cases, loading/error/empty states, accessibility behavior, and commands used for verification.

Store every numbered brief under `tasks/`, with dependencies and status in `tasks/README.md`. GPT prepares and reviews the brief; Gemini implements it. Preserve existing baseline screenshots and store each task's text/JSON evidence separately. Do not generate new screenshots. Installation of skills and this specification update do not mean Task 02 implementation is complete.

## 10. Definition of done

A task is done only when:

1. its specified behavior works in English and at least one RTL locale;
2. mobile and desktop layouts have been checked;
3. keyboard and reduced-motion behavior are preserved;
4. no placeholder data was introduced;
5. `npm run lint`, `npm run typecheck`, and `npm run build` pass;
6. relevant documentation and status are updated;
7. the owner receives a concise review summary and performs the Git push.

The owner reviews visuals on localhost and may provide screenshots for feedback. Agents review source and non-capture test results. A passing build does not establish visual correctness. Report owner visual review as pending until the owner confirms it; no screenshot is required for the agent's handoff.
