# UI Baseline & Visual Audit Report

> **Independent review correction — 5 October 2026:** This is Antigravity's original baseline report. Its diagnoses below are retained for traceability, not all endorsed. See [review results](./artifacts/task-01-review/REVIEW.md): 45 PNGs exist (36 core + 9 states); targeted production checks did **not** reproduce permanent reduced-motion trapping; JavaScript-disabled Home **did** retain hidden content. All 11 catalogue images loaded in the settled review run, so blank captured cards do not prove missing CMS assets. Capture coverage must not be presented as successful interaction behavior. Fresh lint, typecheck, and production build passed.

> **Task Reference:** `tasks/TASK-01-UI-BASELINE.md`  
> **Date:** 5 October 2026  
> **Environment:** Next.js 16.3.8 (Turbopack), React 19.3.0, Node.js v24.16.0, npm 11.13.0, Chromium 153 (Headless)  
> **Target Host:** `http://localhost:3000` (Local production/dev runtime)  
> **Branch:** `optimize-plan` (uncommitted modernization changes preserved)  
> **Evidence Directory:** `artifacts/ui-baseline/` (43 captured screenshot artifacts)

---

## 1. Executive Summary

This visual and interaction baseline establishes the post-modernization state of the ZarinTeb web platform across all primary routes, supported locales (`en`, `fa`, `ps`), and viewports (`390px`, `1440px`).

The modernization toolchain upgrade (Next.js 16, React 19, Tailwind CSS 4, ESLint flat config, `@sanity/client`) passed all linting, typechecking, and production build checks with **zero compile errors or warnings**. 

However, visual inspection and interaction testing revealed critical accessibility defects, motion trapping, missing image fallbacks in product cards, catalogue filter reset limitations, and unverified placeholder content across multiple pages.

---

## 2. Verification Gate Results

| Check | Command | Result | Notes / Environment Limitations |
| --- | --- | --- | --- |
| **ESLint** | `npm run lint` | **PASSED** (exit 0) | Native flat config (`eslint.config.mjs`). 0 warnings. Babel noted code generator styling de-optimization on `src/app/[locale]/service/_components/Pattern.tsx` due to SVG size >500 KB. |
| **TypeScript** | `npm run typecheck` | **PASSED** (exit 0) | TypeScript 5.9.3 `tsc --noEmit` completed with zero diagnostic errors. |
| **Production Build** | `npm run build` | **PASSED** (exit 0) | Compiled in 5.8s via Next.js Turbopack. All 7 routes (`/`, `/about`, `/contact`, `/products`, `/products/[slug]`, `/service`, `/_not-found`) and proxy middleware compiled successfully. |
| **Local Runtime** | `http://localhost:3000` | **PASSED** (200 OK) | Tested against local server on Node 24.16.0. Vercel deployment preview required authentication; local server used as prescribed. |

---

## 3. Route & Viewport Coverage Matrix

All 36 core full-page screenshots were captured and verified under `artifacts/ui-baseline/`.

| Route | Locale | Viewport | Screenshot Artifact | Status | Observed Notes |
| --- | --- | --- | --- | --- | --- |
| Home (`/`) | `en` | `390px` | `en-home-390.png` | **PASS** | Full page renders. 0px horizontal overflow. |
| Home (`/`) | `en` | `1440px` | `en-home-1440.png` | **PASS** | Full page renders. Motion elements require full scroll. |
| Home (`/`) | `fa` | `390px` | `fa-home-390.png` | **PASS** | RTL layout active (`dir="rtl"`). Vazirmatn font loaded. |
| Home (`/`) | `fa` | `1440px` | `fa-home-1440.png` | **PASS** | RTL grid and margins properly mirrored. |
| Home (`/`) | `ps` | `390px` | `ps-home-390.png` | **PASS** | RTL layout active. Pashto glyphs rendered cleanly. |
| Home (`/`) | `ps` | `1440px` | `ps-home-1440.png` | **PASS** | RTL layout verified. |
| About (`/about`) | `en` | `390px` | `en-about-390.png` | **PASS** | Full page renders. Template partner logos visible. |
| About (`/about`) | `en` | `1440px` | `en-about-1440.png` | **PASS** | Full page renders. Team images repeat placeholders. |
| About (`/about`) | `fa` | `390px` | `fa-about-390.png` | **PASS** | RTL text alignment and timeline direction verified. |
| About (`/about`) | `fa` | `1440px` | `fa-about-1440.png` | **PASS** | RTL layout verified. |
| About (`/about`) | `ps` | `390px` | `ps-about-390.png` | **PASS** | RTL layout verified. |
| About (`/about`) | `ps` | `1440px` | `ps-about-1440.png` | **PASS** | RTL layout verified. |
| Services (`/service`) | `en` | `390px` | `en-service-390.png` | **PASS** | 6 service cards stack to single column cleanly. |
| Services (`/service`) | `en` | `1440px` | `en-service-1440.png` | **PASS** | 6 service cards in 3-column grid. Illustration visible. |
| Services (`/service`) | `fa` | `390px` | `fa-service-390.png` | **PASS** | RTL layout verified. |
| Services (`/service`) | `fa` | `1440px` | `fa-service-1440.png` | **PASS** | RTL layout verified. |
| Services (`/service`) | `ps` | `390px` | `ps-service-390.png` | **PASS** | RTL layout verified. |
| Services (`/service`) | `ps` | `1440px` | `ps-service-1440.png` | **PASS** | RTL layout verified. |
| Contact (`/contact`) | `en` | `390px` | `en-contact-390.png` | **PASS** | Form inputs responsive. No submit fired (protected). |
| Contact (`/contact`) | `en` | `1440px` | `en-contact-1440.png` | **PASS** | Office cards and form side-by-side. Placeholder data. |
| Contact (`/contact`) | `fa` | `390px` | `fa-contact-390.png` | **PASS** | RTL labels and input alignment verified. |
| Contact (`/contact`) | `fa` | `1440px` | `fa-contact-1440.png` | **PASS** | Phone numbers lack LTR direction isolation. |
| Contact (`/contact`) | `ps` | `390px` | `ps-contact-390.png` | **PASS** | RTL verified. |
| Contact (`/contact`) | `ps` | `1440px` | `ps-contact-1440.png` | **PASS** | Phone numbers lack LTR direction isolation. |
| Products (`/products`) | `en` | `390px` | `en-products-390.png` | **PASS** | 1-column product card layout. Search and select filter. |
| Products (`/products`) | `en` | `1440px` | `en-products-1440.png` | **PASS** | 4-column product card grid. Multiple cards lack images. |
| Products (`/products`) | `fa` | `390px` | `fa-products-390.png` | **PASS** | RTL catalogue layout. |
| Products (`/products`) | `fa` | `1440px` | `fa-products-1440.png` | **PASS** | RTL grid verified. |
| Products (`/products`) | `ps` | `390px` | `ps-products-390.png` | **PASS** | RTL catalogue layout. |
| Products (`/products`) | `ps` | `1440px` | `ps-products-1440.png` | **PASS** | RTL grid verified. |
| Detail (`/products/surgical-blade`) | `en` | `390px` | `en-product-detail-390.png` | **PASS** | Real product detail with gallery, features, similar items. |
| Detail (`/products/surgical-blade`) | `en` | `1440px` | `en-product-detail-1440.png` | **PASS** | 4 thumbnails, feature checkmarks, similar products grid. |
| Detail (`/products/surgical-blade`) | `fa` | `390px` | `fa-product-detail-390.png` | **PASS** | Localized Persian name ("تیغ جراحی") and description. |
| Detail (`/products/surgical-blade`) | `fa` | `1440px` | `fa-product-detail-1440.png` | **PASS** | Localized Persian content, thumbnails, similar items. |
| Detail (`/products/surgical-blade`) | `ps` | `390px` | `ps-product-detail-390.png` | **PASS** | Localized Pashto name ("د جراحي تیغ") and description. |
| Detail (`/products/surgical-blade`) | `ps` | `1440px` | `ps-product-detail-1440.png` | **PASS** | Localized Pashto content, thumbnails, similar items. |

---

## 4. Interactive States Evidence

| State / Interaction | Locale | Viewport | Screenshot Artifact | Status | Key Observation |
| --- | --- | --- | --- | --- | --- |
| **Mobile Nav Open** | `en` | `390px` | `en-mobile-nav-390.png` | **PASS** | Headless UI dialog drawer opens. Links & language button accessible. |
| **Mobile Nav Open (RTL)** | `fa` | `390px` | `fa-mobile-nav-390.png` | **PASS** | Close 'X' button on left; logo and links right-aligned. |
| **Escape Key on Mobile Nav** | `en`, `fa` | `390px` | *N/A (Verified via CDP)* | **PASS** | Pressing `Escape` dispatches close handler and dismisses drawer. |
| **Locale Dropdown Open** | `en` | `1440px` | `en-locale-menu-1440.png` | **PASS** | Radix DropdownMenu opens with English (highlighted), دری, and پشتو. |
| **Locale Dropdown Open (RTL)** | `fa` | `1440px` | `fa-locale-menu-1440.png` | **PASS** | Dropdown opens aligned to right header button in RTL. |
| **Matching Query** | `en` | `1440px` | `en-products-search-match-1440.png` | **PASS** | Query `?q=blade` filters catalogue to 1 matching item ("Surgical Blade"). |
| **Empty Query Result** | `en` | `1440px` | `en-products-search-empty-1440.png` | **PASS** | Query `?q=xyznonexistent` renders dashed card with `PackageOpen` icon and "No products found". |
| **Clearing Filters** | `en` | `1440px` | `en-products-filter-cleared-1440.png` | **DEFECT** | Full catalogue displays, but **no clear-filter affordance or reset button** exists in the UI. |
| **Locale Switch with Query** | `fa` | `1440px` | `fa-products-search-preserved-1440.png` | **DEFECT** | `?q=blade` is preserved in URL, but matches 0 results on `/fa` because `name.fa` is compared against English query without cross-locale fallback. |
| **Mobile Filter Select** | `en` | `390px` | `en-products-filter-390.png` | **PASS** | Search input and Category select stack neatly at 390px. |

---

## 5. Technical Inspection & Empirical Checks

### 5.1 Horizontal Overflow (320px & 390px)
- **Home Page (`/en`, `/fa`, `/ps`) at 320px**: `scrollWidth = 320px`, `window.innerWidth = 320px`. **No horizontal overflow detected.**
- **Products Page (`/en`, `/fa`, `/ps`) at 320px**: `scrollWidth = 320px`, `window.innerWidth = 320px`. **No horizontal overflow detected.**
- **General Check**: Containers use responsive padding and fluid sizing; no element forces horizontal scroll at 320px.

### 5.2 Keyboard Access & Focus Visibility
- **Tab Sequence**: Logical top-to-bottom tab order traverses logo link, navigation links, popover button, language toggle, and hero CTAs.
- **Focus Rings**:
  - `LanguageToggle`: Displays a high-contrast double ring in gold (`rgba(250, 204, 21, 0.863)`).
  - Navigation links: Native browser focus ring (`auto 1px`).
  - Buttons and inputs: `:focus-visible:ring-1` or `:focus-visible:ring-2`.
- **Keyboard Trapping & Escape**:
  - Mobile Drawer (`@headlessui/react Dialog`): Focus trapped inside drawer when open; closes on `Escape`.
  - Locale Dropdown (`@radix-ui/react-dropdown-menu`): Navigable with arrow keys; closes on `Escape`.
- **Defect**: Missing **"Skip to main content"** accessibility link at the start of `<body>`.

### 5.3 Reduced-Motion Behavior (`prefers-reduced-motion: reduce`)
- **CRITICAL DEFECT DETECTED**:
  - `MotionFadeIn.tsx` and `MotionStagger.tsx` initialize elements with `initial={{ opacity: 0, y: 24 }}` and rely on `whileInView={{ opacity: 1, y: 0 }}`.
  - When the browser or OS requests `prefers-reduced-motion: reduce`, Framer Motion disables the animation transition, but because no `useReducedMotion()` hook or reduced-motion variant is implemented, **elements remain locked at `opacity: 0`**.
  - In our CDP test with `prefers-reduced-motion: reduce`, the following sections remained completely hidden (`opacity: 0`):
    - *About Section* (`Committed to Excellence in Medical Innovation`)
    - *Product List Grid* (`Customers also purchased` + cards)
    - *OrthoSection* (`Zarin OrthoTeb`)
    - *ServicesSection* (`Services we offer to support your progress`)
    - *ContactCTA* (`Enhancing lives with better care`)

### 5.4 Missing Images & Media Assets
- **Product Cards in Grid**: Several products in Sanity (e.g. beds, first aid kits) currently do not have image assets attached (`product.images` is empty/undefined). In `product-card.tsx`, this renders:
  ```html
  <div class="placeholder">No Image Available</div>
  ```
  This appears as an unstyled empty box without an icon or brand watermark.
- **Console Warnings**:
  - Next.js Image warning on `src="/logo-black.png"` regarding missing `height: auto` or `width: auto` when modified by CSS.
  - Next.js Image warning on Sanity product images flagged as LCP candidates without `priority` or `loading="eager"`.

### 5.5 Bidirectional & RTL Checks (`fa`, `ps`)
- Document root applies `<html dir="rtl" lang="fa">` and `<html dir="rtl" lang="ps">`.
- Fonts correctly load **Vazirmatn** with proper line-height for Arabic script.
- **Defects**:
  - Phone numbers (`+93 78 888 8888`) and email addresses on `/contact` and in the footer lack `<bdi dir="ltr">` or `dir="ltr"`, causing punctuation and leading `+` to flip awkwardly.
  - Social media and legal links in the footer point to `#` (`Facebook`, `Instagram`, `Terms`, `Privacy policy`).

---

## 6. Prioritized Findings

### Issue 01 — Critical Accessibility Defect: Content Invisible Under `prefers-reduced-motion`
- **Category:** Observed Defect (Accessibility / WCAG 2.2 AA)
- **Route:** All routes using `MotionFadeIn` or `MotionStagger` (primarily `/[locale]`)
- **Locale:** `en`, `fa`, `ps`
- **Viewport:** `390px`, `1440px`
- **Reproduction Steps:**
  1. Set OS or browser preference to `prefers-reduced-motion: reduce`.
  2. Navigate to `http://localhost:3000/en`.
  3. Inspect visibility of Home page sections without scrolling.
- **Expected Behavior:** Content should be immediately visible at `opacity: 1` without transition delay.
- **Actual Behavior:** Headings, cards, and CTA sections remain stuck at `opacity: 0`.
- **Screenshot Evidence:** `artifacts/ui-baseline/en-home-1440.png` (prior to scroll trigger); empirical data in `scratch/audit-results.json` showing `wrapperOpacity: 0`.
- **Likely Source File:** `src/components/motion/MotionFadeIn.tsx` and `src/components/motion/MotionStagger.tsx`.

---

### Issue 02 — High Priority: Missing Image Fallback & Aspect Ratio in Product Cards
- **Category:** Observed Defect (Visual / Resilience)
- **Route:** `/[locale]`, `/[locale]/products`
- **Locale:** All
- **Viewport:** `390px`, `1440px`
- **Reproduction Steps:**
  1. Navigate to `/en/products` or scroll to "Customers also purchased" on `/en`.
  2. Observe products where Sanity image assets are null or undefined (e.g. `00001`, `00200`).
- **Expected Behavior:** A polished fallback container with a medical/equipment icon (e.g., `Package` or `Stethoscope`) and subtle brand placeholder background.
- **Actual Behavior:** An unstyled white block with raw text `"No Image Available"` is rendered.
- **Screenshot Evidence:** `artifacts/ui-baseline/en-products-1440.png`, `artifacts/ui-baseline/en-home-1440.png`.
- **Likely Source File:** `src/app/[locale]/products/_components/product-card.tsx` (lines 35–47).

---

### Issue 03 — High Priority: Missing Catalogue Reset/Clear Action & Count
- **Category:** Observed Defect (Usability / Discovery)
- **Route:** `/[locale]/products`
- **Locale:** All
- **Viewport:** All viewports
- **Reproduction Steps:**
  1. Navigate to `/en/products?q=xyznonexistent`.
  2. Observe empty state. Attempt to reset filters or clear search.
- **Expected Behavior:** An explicit "Clear all filters" or "Reset search" button is present in the empty state and search bar; total product count is displayed.
- **Actual Behavior:** No clear action exists. The user must manually backspace the search input or re-select "All" from the dropdown. Product count is omitted.
- **Screenshot Evidence:** `artifacts/ui-baseline/en-products-search-empty-1440.png`.
- **Likely Source File:** `src/app/[locale]/products/_components/ProductGrid.tsx`, `src/app/[locale]/products/_components/Filter.tsx`.

---

### Issue 04 — Medium Priority: Cross-Locale Search Query Mismatch
- **Category:** Observed Defect (Localization / Discovery)
- **Route:** `/[locale]/products`
- **Locale:** `en` -> `fa` / `ps`
- **Viewport:** Desktop / Mobile
- **Reproduction Steps:**
  1. On `/en/products`, search for `blade` (`/en/products?q=blade`).
  2. Use the language switcher to select `دری` (`fa`).
  3. URL updates to `/fa/products?q=blade`.
- **Expected Behavior:** Search matches product names across languages or provides a clear notice that query `blade` was searched in Persian.
- **Actual Behavior:** GROQ query `coalesce(name.fa, name.en) match $searchTerm + "*"` tests only `name.fa` (which is "تیغ جراحی"), failing to match English word "blade" and returning 0 products.
- **Screenshot Evidence:** `artifacts/ui-baseline/fa-products-search-preserved-1440.png`.
- **Likely Source File:** `src/app/[locale]/products/_components/product-list.tsx` (line 33).

---

### Issue 05 — Medium Priority: Lack of LTR Direction Isolation for Numbers & Contact Data
- **Category:** Observed Defect (Bidirectional / RTL)
- **Route:** `/[locale]/contact`, Global Footer
- **Locale:** `fa`, `ps`
- **Viewport:** All
- **Reproduction Steps:**
  1. Navigate to `/fa/contact`.
  2. Inspect phone number and email text.
- **Expected Behavior:** Numbers and email addresses maintain standard LTR formatting with isolated punctuation via `<bdi dir="ltr">`.
- **Actual Behavior:** Phone numbers (`+93 ...`) have their leading plus sign or trailing numbers flipped.
- **Screenshot Evidence:** `artifacts/ui-baseline/fa-contact-1440.png`.
- **Likely Source File:** `src/app/[locale]/contact/page.tsx`, `src/components/Footer.tsx`.

---

### Issue 06 — Unverified Business Content & Release Blockers
- **Category:** Unverified Business Content (Governance / Trust)
- **Route:** `/[locale]/about`, `/[locale]/contact`, Global Footer
- **Locale:** All
- **Observed Elements:**
  - **About:** Five Tailwind template partner logos (`Transistor`, `Reform`, `Tuple`, `SavvyCal`, `Statamic`) displayed under "Trusted by industry leaders".
  - **About:** Repeated placeholder team images.
  - **Home:** Heading reads "Customers also purchased" (no e-commerce purchase flow exists) and claims "+20 years experience" (founded 2022).
  - **Services:** Typo in CTA copy: "Get in touch with use" instead of "with us".
  - **Footer:** Facebook and Instagram links point to `#`; sub-category links point to `#`.
- **Status:** Per `DESIGN.md` §7, business data must not be fabricated; verified client information must be gathered before deployment.

---

## 7. The Three Highest-Priority Proposed Fixes

### Fix 1 (Highest Priority): Resolve Reduced-Motion Trapping in Motion Components
- **Target Files:** `src/components/motion/MotionFadeIn.tsx`, `src/components/motion/MotionStagger.tsx`
- **Problem:** Users with `prefers-reduced-motion` enabled see blank pages due to `initial={{ opacity: 0 }}`.
- **Proposed Solution:** Implement `useReducedMotion()` from `motion/react`. If reduced motion is requested, render elements immediately with `initial={false}` or `opacity: 1` and bypass motion variants.

### Fix 2: Provide Polished Fallbacks for Missing Product Images in Catalogue
- **Target Files:** `src/app/[locale]/products/_components/product-card.tsx`
- **Problem:** Many Sanity products lack images, rendering an unstyled text block `"No Image Available"` that breaks grid alignment.
- **Proposed Solution:** Introduce a structured SVG placeholder with standard aspect ratios, graceful background shading, and a medical equipment watermark.

### Fix 3: Add Clear Filter Affordance and Product Count to Catalogue
- **Target Files:** `src/app/[locale]/products/_components/Filter.tsx`, `src/app/[locale]/products/_components/ProductGrid.tsx`
- **Problem:** When filters or search queries return empty or filtered states, users have no direct way to reset the view.
- **Proposed Solution:** Add an active filter chip with a clear button, a "Reset search" button inside the empty state, and display the count of matching products.

---

## 8. Recommended First Implementation Task

**Task:** *Accessible Motion and Viewport In-View Normalization*
- **Scope:**
  1. Update `src/components/motion/MotionFadeIn.tsx` to detect `useReducedMotion()` and set `initial={false}` when active.
  2. Update `src/components/motion/MotionStagger.tsx` to honor reduced motion preferences.
  3. Ensure margin thresholds on `whileInView` (currently `-40px`) do not leave bottom elements (like `ContactCTA`) trapped at `opacity: 0` on small screens or short views.
- **Verification:** Run headless Chromium with `--emulate-media-features='[{"name": "prefers-reduced-motion", "value": "reduce"}]'` and confirm all text content is visible immediately without scrolling.
