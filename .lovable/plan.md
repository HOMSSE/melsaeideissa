## Problem
In the Advansys ("System Integrator") section of v11, the left text column — "As System Integrator", "Senior Application Design Engineer", and the narrative paragraph — overlaps the detailed dashboards blueprint background. The background detail competes with the text, making it hard to read. The right-hand "Products & platforms" card already has a blurred, semi-transparent backing; the left text column does not.

## Goal
Make the left text column clearly readable without hiding or ruining the blueprint background.

## Proposed approach
Add a subtle readability layer to the left text column only, tuned so the blueprint still shows through:

1. Wrap the left text column content in a compact card/panel.
2. Give it a very dark, low-opacity background (`rgba(2,3,10,0.55)` or similar) plus `backdrop-blur-md`.
3. Add a thin accent border on the left using the section's `h.accent` color.
4. Keep generous padding so text has breathing room.
5. Slightly increase text contrast: use `text-white/95` for headings and `text-white/85` for body copy in that column.
6. Add a subtle text shadow to the large heading for extra legibility over busy background areas.
7. Do NOT change the background image opacity or the global section background, so the beautiful blueprint remains intact.

## Scope
- File: `src/pages/IndexThreeHats.tsx`
- Change only the left text column markup/styling inside the `{hats.map(...)}` hat sections.
- No changes to data, other sections, routes, or assets.

## Verification
- Build the project.
- Scroll to the Advansys section and confirm the text is crisp while the dashboards blueprint is still visible behind it.
- Quickly check the Methanex and Schneider sections to ensure the same treatment looks consistent there too.