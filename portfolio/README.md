# Michelle Appiah — Portfolio

A single-page portfolio site built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS** — colorful, professional, and set up for grad school applications: real photos, a stats/highlights strip, and clearly marked spots to drop in project and work-sample links as you get them.

## Before you deploy — 2 things to fill in

1. **LinkedIn URL** — open `components/siteConfig.ts` and replace the placeholder `linkedin` value with your real profile link.
2. **Project & experience links** — same file, in the `projectLinks` and `experienceLinks` objects. Paste in GitHub repos, live demos, video walkthroughs, or work samples as strings, e.g.:
   ```ts
   export const projectLinks: Record<string, string> = {
     smartHomeAutomation: "https://github.com/MichelleAppiah17/smart-home-automation",
     bookInventory: "https://your-live-demo.vercel.app",
   };
   ```
   Until filled in, the site shows a dashed "Add link" chip instead of a broken link — nothing looks empty or broken either way.

## Run it locally

You need [Node.js](https://nodejs.org) 18.18 or newer installed.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Project structure

```
app/
  layout.tsx          # fonts + global metadata
  page.tsx             # assembles all sections
  globals.css          # color theme + typewriter caret + base styles
components/
  siteConfig.ts        # contact info + all external/project/work-sample links
  LinkSlot.tsx          # renders a real link or a "add link" placeholder
  Nav.tsx               # fixed navigation with GitHub/LinkedIn/email
  Hero.tsx              # intro with typewriter-effect headline + photo
  TypewriterText.tsx    # reusable typing animation (respects reduced-motion)
  SparkleField.tsx      # animated sparkle particles behind the hero
  Highlights.tsx        # stat strip: students taught, nomination, etc.
  Summary.tsx           # about paragraph + secondary photo
  Experience.tsx        # roles, each with an optional work-sample link slot
  Projects.tsx          # projects, each with an optional project link slot
  Expertise.tsx         # core expertise + skills grid
  Organizations.tsx     # leadership roles + community involvement
  Education.tsx         # education + research
  Awards.tsx             # awards
  Footer.tsx             # contact section
public/images/          # your photos, already compressed for the web
```

## Push it to GitHub

```bash
git init
git add .
git commit -m "Initial commit: portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

## Deploy it (free, via Vercel)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. **Add New → Project** → select your repo.
3. Leave settings as default (Vercel auto-detects Next.js) → **Deploy**.
4. You'll get a live URL like `https://your-repo-name.vercel.app` within a minute. Every push to `main` after that redeploys automatically.

## Customizing the palette

Colors live in `tailwind.config.ts` under `theme.extend.colors` (`plum`, `rose`, `gold`, `cream`). Adjust hex values there to shift the theme.
"# MichTech" 
