## Plan: Simpler background after Advansys section in v11

**File:** `src/pages/IndexThreeHats.tsx`

### Changes

1. **Track when we're past the three-hat story**
   - Add a `pastHats` boolean state.
   - In the existing scroll listener, set `pastHats = true` when the top of the Convergence section reaches ~60% of the viewport (i.e. user has entered the epilogue).

2. **Fade out the blueprint layer**
   - The fixed `<img>` blueprints already fade between hats. Add a wrapper opacity that drops to `0` when `pastHats` is true, so no illustration bleeds into Convergence / Award / Stack / Projects / Certs / Recommendations.

3. **Neutralize the background gradient**
   - The root `div` currently uses `hat.bg` (which changes per active hat). When `pastHats` is true, swap to a single calm gradient:
     `radial-gradient(1200px 800px at 50% 0%, #0d1220 0%, #070a12 60%, #04060c 100%)`
   - Keep the 1500ms transition so the switch feels intentional, not abrupt.

4. **Dim the side stepper past the hats**
   - When `pastHats` is true, reduce the stepper's opacity (e.g. `0.35`) so it doesn't compete with the quieter epilogue. It stays available for navigation back up.

### Not changing
- Card styling, typography, section content, award styling, logos, colors under each hat.
- Data files, other v-pages, SEO.

### Verification
- Scroll through /threehats: blueprints and per-hat color should morph normally through the three hat sections, then background should settle into a neutral dark canvas from Convergence onward. Scrolling back up should smoothly restore the hat backgrounds.
