# Accredian Enterprise - Landing Page Clone

This is my submission for the Full Stack Developer Intern assignment. The task was to recreate the Accredian Enterprise landing page (https://enterprise.accredian.com/) using Next.js, so I rebuilt it section by section instead of copying the actual code/design 1:1.

**Live link:** [add your Vercel link here]
**GitHub:** [add your repo link here]

---

## What I used

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- lucide-react for icons
- Deployed on Vercel

---

## How to run it locally

```bash
git clone <your-repo-url>
cd accredian-enterprise-clone
npm install
npm run dev
```

Then open localhost:3000.

---

## How I approached this

First I opened the actual Accredian Enterprise site and just went through it section by section - Hero, Stats, Clients, the "Accredian Edge" features part, the CAT Framework thing, How It Works, FAQs, Testimonials, and the footer. Instead of trying to match it pixel by pixel, I noted down what each section was actually doing (like, is it a grid of cards, is it a stats strip, etc.) and rebuilt that structure with my own content.

I initially made the mistake of putting each section as its own route folder inside `app/` (like `app/hero/page.tsx`, `app/stats/page.tsx`) because that's how App Router routing works by default. Realized partway through that this is wrong for a single-page site since it turns every section into a separate URL instead of one scrollable page. Fixed it by moving all sections into `components/sections/` as regular components and importing them all into one `app/page.tsx`, with each one wrapped in a `<section id="...">` so the navbar links can scroll to them.

For the content itself I didn't copy the actual text from Accredian's site, I rewrote everything in my own words based on what each section was communicating.

Some specific stuff:
- **Navbar** - has an active-link highlight that updates based on which section is in view while scrolling (used `IntersectionObserver` for this, not just click-based highlighting, since that felt more accurate to how these sites usually behave)
- **CAT Framework section** - the wavy line connecting the three steps (Concept/Application/Tools) is a custom SVG path, not something doable with plain CSS
- **Images/avatars** - didn't pull actual photos or the IIT/IIM logos from their site since those aren't mine to use. Used DiceBear for generated avatars and stock images from Unsplash instead
- **Lead capture form** (bonus) - submits to a Next.js API route at `/api/leads`, validated with Zod

---

## Where I used AI

Being upfront about this since it was part of the assignment.

**Claude** - I used it mostly for:
- Talking through how to break each section into components before actually coding it
- Writing the Tailwind responsive classes for each section (breakpoints, grid layouts) - this saved a lot of time honestly, doing 8 sections responsive by hand would've taken way longer
- Helping me figure out the SVG path/Bezier curve math for the CAT framework wavy connector, that one I would not have figured out on my own quickly
- Catching the routing mistake I made above (sections as routes instead of components) and explaining why it breaks the navbar scroll behavior
- Reviewing my API route code for the lead form and pointing out validation gaps

**GitHub Copilot** - mostly just autocomplete while I was writing component code, typing out the `.map()` renders for things like testimonials/features arrays, and TypeScript interfaces. Standard day to day coding speed-up, not really "building" anything on its own.

**What I actually did myself:**
- All the content/text in every section
- Fixed the routing structure issue after understanding why it was wrong
- Tested and adjusted the responsive design manually at different screen sizes (a lot of the first AI-generated Tailwind wasn't quite right on mobile and needed tweaking)
- Decided the final folder structure and how components should be split up
- Wrote this README

---

## What I'd improve with more time

- Right now the lead form doesn't persist anywhere permanent, I'd hook it up to an actual database like Supabase
- Add some scroll animations, the real site has more motion/polish than what I built in the time I had
- Go through accessibility more properly (keyboard nav, ARIA labels etc), I only did the basics
- Add proper SEO meta tags per section

This was a good exercise in reading a live site and rebuilding its structure/logic rather than just copying markup, and also in catching my own mistakes (like the routing thing) before they became a bigger problem.
