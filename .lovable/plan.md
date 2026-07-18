
## Goal
The sections after Advansys (epilogue: "The three hats compound", Innovation Award, Stack, Projects, Certs, Recommendations, Contact) currently sit on a near-black canvas that feels too dark and disconnected from the rest of v11. Make it feel like a natural continuation of the site — same family of colors, but calmer than the hat sections. No busy imagery, no rainbow.

## Approach — in `src/pages/IndexThreeHats.tsx` only

1. **Lift the base tone** of the epilogue background from near-black to a soft deep navy (e.g. `#0b1220` → `#0e1524`), so it reads as "night sky" rather than "void".

2. **Add a very soft three-brand aurora** (already present as a whisper) and rebalance it:
   - Methanex blue, Schneider green, Advansys cyan as three large, low-opacity radial glows at ~8–12% opacity.
   - Positioned top-left / bottom-right / center so they never crowd the text.
   - Slower drift so it feels ambient, not animated.

3. **Keep the tech-name constellation** but reduce its density and slow it further so it becomes texture, not content.

4. **Tint the epilogue typography subtly** so the palette carries into the words without becoming colorful:
   - Section eyebrow labels ("Innovation Award", "Technology Stack", "Selected Projects", "Certifications", "Recommendations", "Contact") use a soft cyan/teal accent instead of white.
   - Key phrase highlights inside the "three hats compound" paragraph (the words *Operator*, *Vendor*, *Integrator*) tinted in Methanex blue / Schneider green / Advansys cyan respectively — one accent word each, rest stays white.
   - Card borders shift from pure white/10 to a faint cyan/10 so cards feel warmer.

5. **Soften card surfaces** to match: `bg-white/[0.03]` with `backdrop-blur-sm` and a 1px cyan-tinted border, so cards float on the aurora instead of sitting on black.

6. **Add a gentle top gradient divider** between the Advansys section and the epilogue so the transition reads as a sunrise-into-night-sky rather than a hard cut.

## Out of scope
- No changes to the three hat sections (Methanex/Schneider/Advansys).
- No new assets, no new routes, no changes to data or copy.
- Other v-versions untouched.

## Verification
- Build passes.
- Scroll from Advansys into the epilogue: transition feels continuous, background reads deep-navy with faint colored glow, text is crisp, three accent words carry the brand palette.
