## Goal
Make the epilogue background (everything after Advansys — "three hats compound", Innovation Award, Stack, Projects, Certs, Recommendations, Contact) feel more alive and colorful, borrowing the smooth animated-gradient energy of the "dumyati-digital-spark" project — but strictly in v11's palette (Methanex blue, Schneider green, Advansys cyan on deep navy). Keep it professional and calm: ambient motion, not a light show.

## Approach — `src/pages/IndexThreeHats.tsx` only

1. **Animated aurora mesh** behind the epilogue
   - Replace the current static radial glows with 3 large blurred blobs (Methanex blue `#0080c7`, Schneider green `#3dcd58`, Advansys cyan `#22d3ee`) at ~15–20% opacity.
   - Animate their position and scale via CSS keyframes on 20–30s loops, offset so they drift and cross-fade continuously — the "smooth changing color" feel.
   - `filter: blur(120px)` and `mix-blend-mode: screen` so overlaps produce new hues without ever going neon.

2. **Slow conic-gradient sweep** as a second layer
   - A single full-viewport conic gradient cycling through the three brand colors at ~8% opacity, rotating on a 60s loop. Adds the subtle hue shift the reference has, without competing with content.

3. **Keep and tune the tech-name constellation**
   - Reduce opacity slightly so the aurora reads first; keep the drift.

4. **Interactive spotlight (optional, low-key)**
   - A soft cyan radial glow (~200px, 10% opacity) that follows the cursor within the epilogue only. Adds the "alive" feel of the reference. Throttled with `requestAnimationFrame`, disabled on touch/reduced-motion.

5. **Respect `prefers-reduced-motion`**
   - Freeze the blobs, conic sweep, and cursor spotlight; keep the static colored gradient so the section still looks rich.

6. **Card surfaces**
   - Keep current `bg-white/[0.03]` + cyan-tinted border, but nudge to `bg-white/[0.04]` with `backdrop-blur-md` so cards stay legible on top of the more colorful backdrop.

## Out of scope
- No changes to the three hat sections (Methanex/Schneider/Advansys) or their assets.
- No new routes, no data/copy changes, no changes to other v-versions.
- No new dependencies (pure CSS + a tiny rAF handler).

## Verification
- Build passes.
- Scroll past Advansys: background shows slow, smooth color drift in the three brand colors; text stays crisp; cursor spotlight feels subtle; reduced-motion users see a static colored gradient instead of animation.
