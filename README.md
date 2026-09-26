# Aryan Mishra — Portfolio

A single-page, dark, minimal portfolio built with **Next.js 14 (App Router)**, **TypeScript**,
**Tailwind CSS**, and **Framer Motion**. Black-and-white, restrained, with one small themed
animation per featured project (banking ledger, campus map route, perfume bottle sheen,
lightning strike).

## 1. Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## 2. Where everything lives

- **All text content — name, bio, skills, projects, experience, achievements, contact
  links** — is in one file: `lib/data.ts`. Start there for any content change; you should
  rarely need to touch a component just to edit copy.
- **Sections** are in `components/` (`Hero.tsx`, `About.tsx`, `Skills.tsx`,
  `FeaturedProjects.tsx`, `OtherProjects.tsx`, `Experience.tsx`, `Achievements.tsx`,
  `Contact.tsx`, `Footer.tsx`).
- **The four animated project scenes** are in `components/scenes/` — one file per project
  (`BankingScene.tsx`, `MapsScene.tsx`, `LuxenraScene.tsx`, `BlitzschlagScene.tsx`), all
  hand-drawn inline SVG animated with Framer Motion, no images required.
- **Global styles, fonts, and color tokens** are in `app/globals.css` and
  `tailwind.config.ts`.

## 3. Things you should personalize before shipping this

The site works out of the box with resume content, but a few things are intentionally left
as placeholders — search the codebase for **"placeholder"** to find them all, or check this
list:

1. **Profile photo.** `lib/data.ts` → `profile.avatarPlaceholder` currently points at a
   simple monogram at `public/images/avatar-placeholder.svg`. Drop a real photo into
   `public/images/`, then update that path (e.g. `/images/avatar.jpg`).
2. **Project screenshots.** Each entry in `featuredProjects` (in `lib/data.ts`) has a
   `screenshotNote` telling you the suggested filename. The current build deliberately uses
   generative SVG scenes instead of screenshots so it works with zero images — adding real
   screenshots is optional, not required.
3. **Two placeholder work-experience entries** at the bottom of the `experience` array in
   `lib/data.ts` (marked `placeholder: true`, shown slightly faded with an "edit me" tag on
   the live site). Replace or delete them.
4. **GitHub links for Luxenra and Blitzschlag.** These were provided as
   `github.com/aryanm9026/luxenra-frontend` and `github.com/aryanm9026/blitz26-app`. Both
   returned 404 when this site was built (likely private repos, or the names have changed)
   — double check them in `lib/data.ts` before publishing, or make the repos public.
5. **Phone number.** Your resume's phone number was not placed anywhere on the public site.
   If you want it visible, add it in `components/Contact.tsx`.

## 4. Wire up the contact form (Formspree)

The contact form posts to [Formspree](https://formspree.io) so no backend is needed.

1. Create a free account at formspree.io and create a new form.
2. Copy the form ID from the endpoint they give you
   (`https://formspree.io/f/XXXXXXX` → the ID is `XXXXXXX`).
3. Copy `.env.local.example` to `.env.local` and paste the ID in:
   ```
   NEXT_PUBLIC_FORMSPREE_ID=XXXXXXX
   ```
4. Restart `npm run dev`. Until this is set, the form shows a notice and the button falls
   back to opening a `mailto:` link instead, so the site is never broken.

Alternative if you'd rather not use Formspree: swap the `fetch` call in
`components/Contact.tsx` for [EmailJS](https://www.emailjs.com/), or point the form at a
serverless function / API route that sends mail via your own provider.

## 5. Deploy

The fastest path (also what the resume's own stack already uses):

```bash
npm install -g vercel
vercel
```

Or push this repo to GitHub and import it at https://vercel.com/new — it will detect
Next.js automatically. Remember to add `NEXT_PUBLIC_FORMSPREE_ID` as an environment
variable in the Vercel project settings too, not just locally.

## 6. Customizing the look

- Colors live as CSS/Tailwind tokens in `tailwind.config.ts` (`ink`, `paper`, `bone`,
  `graphite`, `flare`) and are intentionally grayscale plus one warm off-white accent
  (`flare`) used sparingly. Change those hex values to retheme the whole site at once.
- Fonts are **Space Grotesk** (display/body) and **JetBrains Mono** (labels, tags, numbers),
  loaded via Google Fonts in `app/globals.css`.
- The four project animations run once, the first time each section scrolls into view
  (not on every scroll), and are skipped entirely for visitors with "reduce motion" enabled
  at the OS level.

## Tech stack

Next.js 14 · React 18 · TypeScript · Tailwind CSS · Framer Motion
