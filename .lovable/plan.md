
## Goal
Surface Mohamed's official Methanex experience letter inside the Methanex (End User) section of v11, without cluttering the hero narrative.

## Approach
Hybrid: **extracted text as primary**, **original scans as proof**.

## What to build

### 1. New "Experience Letter" card in the Methanex section
- Placed after the existing Methanex narrative block, styled like the Innovation Award card (rounded border, cyan-tinted gradient, subtle glow).
- Collapsed by default. Header shows:
  - Small "Official Letter" eyebrow label
  - Title: "Experience Letter — The Egyptian Methanex Methanol Company"
  - Signed by: "Yassine Mahmoud, HR Manager"
  - A "Read letter" toggle button (chevron)
- Expands inline with a smooth height transition to reveal the full text.

### 2. Extracted letter content
Text organized into short, scannable paragraphs matching the two uploaded pages:
- Role & systems worked on (Foxboro IA DCS, Triconex ESD, Bently Nevada 3500 MMS)
- Engineering: DCS/SIS logic modifications, Wonderware, MOC lifecycle, policies & procedures
- Project supervision: DCS upgrade, Emerson 6200 positioners — installation, testing, commissioning
- Maintenance: preventive/corrective on Bently Nevada 3500, Triconex, Foxboro; RC compliance
- Day-to-day support: troubleshooting, event/upset reviews, LOPA sessions, FAT for DCS upgrades, alarm rationalization, cybersecurity support
- CMMS Maximo work orders + Meridian document management + MOC
- Turnarounds/shutdowns, incident investigations, RCA, permits, interlock bypasses, high-risk job risk assessments

### 3. "View original" affordance
Below the extracted text:
- Two thumbnail tiles of the scanned pages (page 1, page 2)
- Click opens a lightbox (existing shadcn `Dialog`) with the full-resolution scan, arrow keys to navigate between the two pages
- Uploaded scans registered as Lovable Assets (not committed as raw binaries)

### 4. Accessibility & SEO
- Text lives in the DOM (indexable), not inside an image
- Semantic `<article>` with `<h3>` for the letter title
- Alt text on the scanned image thumbnails ("Methanex experience letter, page 1/2, signed by HR Manager")

## Files touched
- `src/pages/IndexThreeHats.tsx` — add the letter card + lightbox
- `src/data/profile.ts` — add `methanexLetter` object (paragraphs array, signatory, scan asset refs)
- `src/assets/methanex-letter-page1.jpg.asset.json` + `page2` — created via `lovable-assets` from `/mnt/user-uploads/`

## Out of scope
- No redesign of the Methanex section layout
- No changes to other hat sections
- No download button (the scans open in a lightbox; a download link can be added later if needed)
