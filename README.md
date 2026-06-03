# Antonio's Italian Market — Website

A fast, SEO-focused marketing site for **Antonio's Italian Market & Deli** (Juno Beach, FL),
including **Izzy's Bakery**. Built with [Astro](https://astro.build) + Tailwind CSS, deploys
to Vercel with zero configuration.

- Static site (no server needed) — fast and cheap to host.
- Every business fact lives in **one file** (`src/data/business.ts`) so the name, address,
  and phone are identical on every page and in the structured data.
- Photography is stubbed with labeled placeholders that are drop-in swappable later.

---

## 1. Run it locally

You need [Node.js 18.20.8 or newer](https://nodejs.org) (Node 20+ recommended).

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:4321
```

Build and preview the production version:

```bash
npm run build    # outputs static files to ./dist
npm run preview  # serves ./dist locally to check the build
```

---

## 2. Before you go live — fill in the placeholders

Search the project for `{{` to find every value that still needs a real one. They are:

| Placeholder | Where | What to enter |
|---|---|---|
| `{{CONTACT_EMAIL}}` | `src/data/business.ts` | A professional email (e.g. `hello@antoniositalianmarket.net`) — not a personal AOL/Gmail. |
| `{{GETSAUCE_ORDER_URL}}` | `src/data/business.ts` | The GetSauce online-ordering link. Powers every "Order Online" button. |
| `{{IZZYS_PHONE_OR_SAME}}` | `src/data/business.ts` (`izzys`) | Izzy's phone, or leave Antonio's number if it's shared. |
| `{{CONFIRM_HOURS}}` | `src/data/business.ts` | Confirm the hours against the Google Business Profile, then delete the note. |
| `{{WEB3FORMS_KEY}}` | `src/components/CateringForm.astro` | Free access key from [web3forms.com](https://web3forms.com) so the catering form emails you. |

Also worth a look:

- **Phone number** — `phoneDisplay` and `phoneHref` in `business.ts` must always match.
  (The old site's tel: link dialed the wrong number; this keeps them locked together.)
- **Map pin / geo** — adjust `geo.latitude` / `geo.longitude` in `business.ts` if you want
  the schema coordinates exact.
- **Social links** — update `business.social.instagram` (add Facebook if you have one).

---

## 3. Add real photos (when ready)

Every image currently renders as a labeled gray placeholder showing its **suggested filename**
and **alt text**. To swap in a real photo:

1. Drop the file into `public/images/` using the filename shown on the placeholder
   (e.g. `public/images/hero-deli-counter.jpg`).
2. In the page/component, replace the `<ImagePlaceholder ... />` with a normal image:
   ```astro
   <img src="/images/hero-deli-counter.jpg"
        alt="Antonio's deli counter with fresh meats and cheeses"
        width="1200" height="900" loading="lazy" />
   ```
   Keep the same `alt` text — it's already written for SEO and accessibility.

A social-share image at `public/images/og-default.jpg` (1200×630) is referenced by the SEO
tags; add one so links look good when shared.

---

## 4. Push to GitHub

```bash
git init
git add .
git commit -m "Initial site for Antonio's Italian Market"
git branch -M main
git remote add origin https://github.com/<your-username>/antonios-italian-market.git
git push -u origin main
```

---

## 5. Deploy to Vercel (zero config)

**Option A — dashboard (easiest):**
1. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo.
2. Vercel auto-detects Astro. Leave the defaults (build `astro build`, output `dist`).
3. Click **Deploy**. Every future `git push` redeploys automatically.

**Option B — CLI:**
```bash
npm i -g vercel
vercel            # follow the prompts
vercel --prod     # promote to production
```

**Custom domain:** in the Vercel project → **Settings → Domains**, add
`antoniositalianmarket.net` and `www.antoniositalianmarket.net`, then point the domain's DNS
at Vercel as instructed. The site's `site` URL is already set to
`https://www.antoniositalianmarket.net` in `astro.config.mjs` (update it there if the canonical
domain changes).

---

## 6. Editing content

| You want to change… | Edit this file |
|---|---|
| Name, address, phone, hours, email, order link, socials | `src/data/business.ts` |
| Menu items & prices (deli, subs, catering, prepared, bakery) | `src/data/menu.ts` |
| Navigation links | `src/data/nav.ts` |
| A page's words / layout | the matching file in `src/pages/` |
| Colors, fonts, global styles | `tailwind.config.mjs` + `src/styles/global.css` |

---

## Project structure

```
src/
  data/        business.ts (single source of truth), menu.ts, nav.ts
  layouts/     Base.astro (head, SEO, header, footer, skip-link)
  components/  Seo, Header, Footer, Hero, PageHeader, SectionCTA,
               MenuList, CateringForm, MapEmbed, ImagePlaceholder
  pages/       file-based routing (each file = one URL)
    bakery/    index, cakes, pastries-and-desserts
  styles/      global.css
public/        robots.txt, favicon.svg, images/
```

## What's built in for SEO

- Unique `<title>` + meta description and one `<h1>` per page; locality-aware copy
  (Juno Beach, North Palm Beach, Palm Beach Gardens, Jupiter).
- Canonical URLs, Open Graph + Twitter tags via the `<Seo>` component.
- JSON-LD `LocalBusiness` sitewide and a separate `Bakery` schema on the Izzy's pages,
  all sourced from `business.ts`.
- Auto-generated `sitemap.xml` (via `@astrojs/sitemap`) and a crawl-friendly `robots.txt`.
- Semantic landmarks, descriptive alt text, AA-minded contrast, dynamic copyright year.
