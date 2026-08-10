# Make the site fully readable by AI crawlers and simple fetchers

## What's happening now

Claude is right. The site is a single-page React app: the file served at
`melsaeideissa.com` contains a rich `<head>` (title, description, Person /
FAQ / WebSite structured data) but an **empty body** — all visible content is
built by JavaScript in the browser.

So:
- Google (which runs JavaScript) sees the full page — SEO is fine.
- Claude, ChatGPT browsing, LinkedIn/Slack previews, and plain fetchers see
  only the head metadata and the `llms.txt` summary. That's why Claude got
  "some things but not the entire content".

This is worth fixing — AI assistants are increasingly how people look someone
up.

## The fix: pre-render the page at build time

Add a build step that renders the React page to real HTML once, at build
time, and bakes that HTML into the shipped `index.html`. The result:

- Anyone fetching the URL — Claude, ChatGPT, curl, previews — gets the entire
  page text: hero, the three roles, skills, certifications, trainings,
  recommendations, award.
- The site still behaves exactly the same in a browser (React takes over on
  load; all scroll effects, colour morphing and animations are untouched).
- Faster first paint as a bonus.

Nothing about the design, layout or content changes.

## Also: enrich the plain-text summary

Expand `public/llms.txt` from a 4-line blurb into a complete text version of
the profile (roles, responsibilities, tech stack, certifications, trainings,
recommendations, award). Some AI tools read this file preferentially, and it
costs nothing to serve.

## Technical details

1. Add `react-dom/server` pre-render script (`scripts/prerender.mjs`) run
   after `vite build`: renders `<App>` at route `/` with
   `renderToString`, injects the markup into `dist/index.html` inside
   `<div id="root">`.
2. Switch `src/main.tsx` to `hydrateRoot` when `#root` already has markup,
   falling back to `createRoot` otherwise.
3. Wire it into `package.json`: `"build": "vite build && node scripts/prerender.mjs"`.
   The GitHub Pages workflow needs no change (it calls `npm run build`).
4. Browser-only code is already inside `useEffect` (scroll listeners,
   `window`, `document`), so it is safe under server rendering. Any remaining
   direct `window` access found during implementation gets a guard.
5. Rewrite `public/llms.txt` as a full text mirror of `src/data/profile.ts`.
6. Verify by building and grepping `dist/index.html` for body content, then
   fetching the rendered page to confirm the visible design is unchanged.

## Out of scope

Full server-side rendering per route (TanStack Start migration) — unnecessary
here since the site is a single static page; pre-rendering achieves the same
result for crawlers.
