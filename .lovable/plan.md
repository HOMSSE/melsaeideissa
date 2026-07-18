## Goal
Replace the Lovable heart icon shown in Google search results with a custom "ME" monogram favicon, and confirm nothing else is left at Lovable defaults.

## Audit of current state (verified)
- ✅ `<title>` — real: "Mohamed Eissa | Senior Control Systems Engineer — DCS, SIS, SCADA Expert"
- ✅ `<meta name="description">` — real, keyword-rich
- ✅ Canonical, OG, Twitter, JSON-LD Person/WebSite — all set to your data
- ❌ **Favicon**: `index.html` still references `/favicon.ico`, which is the default Lovable heart file in `public/`. This is what Google is showing next to your search result.
- ❌ **Apple touch icon**: also points at the same default `/favicon.ico`.
- ⚠️ Minor: `og:image` points to `https://melsaeideissa.com/og-image.jpg` — worth confirming that file is actually served on the custom domain (it lives in `public/og-image.jpg` from the SEO pass, so it should be).

## Plan

1. **Generate the favicon** — a gold "ME" monogram on a deep navy background, matching site palette (#0a1420 bg, #f5b642 gold), premium quality, 1024×1024, saved to `public/favicon-source.png`. Simple, legible at 16×16 (Google's search result size).

2. **Produce the icon files** via ImageMagick in the sandbox:
   - `public/favicon.ico` (multi-size: 16, 32, 48) — overwrites the Lovable default
   - `public/favicon.png` (32×32)
   - `public/apple-touch-icon.png` (180×180)

3. **Update `index.html`** favicon block:
   ```html
   <link rel="icon" type="image/x-icon" href="/favicon.ico" />
   <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
   <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
   ```

4. **Tell you what to do after deploy** — Google caches favicons for weeks. After publishing you'll want to (a) confirm `https://melsaeideissa.com/favicon.ico` returns the new icon, and (b) request re-indexing of the homepage in Google Search Console. The icon in search results will refresh on Google's next crawl (typically days, sometimes weeks — not instant).

## Nothing else needs updating
Title, description, OG, Twitter, JSON-LD, robots.txt, sitemap.xml, and canonical URL are all real and customized. Only the favicon is still Lovable-default.