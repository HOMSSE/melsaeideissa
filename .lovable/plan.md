## Goal
In the epilogue section after Advansys (background tech-name constellation: WinCC OA, AVEVA, Foxboro, Triconex, CFSP, SIL 3, IEC 61511, Dashboard, Alarm Management, Safety, Quality, Maximo), animate the words so one or two at a time briefly light up in a brand accent color, then fade back to their default faint tone while the next word(s) light up. Creates a subtle "living" constellation without becoming distracting.

## Approach — `src/pages/IndexThreeHats.tsx` only

1. **Default state stays as-is** — words remain the current faint white/low-opacity tone so overall calm background is preserved.

2. **Rotating highlight cycle**:
   - At any moment, 1–2 words are "lit" in one of the three brand colors: Methanex blue `#1d369e`, Schneider green (current site green), Advansys cyan `#22d3ee`.
   - Each lit word: fades in over ~600ms, holds ~1.2s, fades out over ~600ms.
   - Next word(s) begin lighting slightly before the previous fade completes, so the effect is continuous but gentle.
   - Full cycle across all words takes ~25–35s, then loops. Colors rotate through the three brand accents so no single color dominates.

3. **Implementation**:
   - Add a per-word CSS custom property `--lit-color` and an `animation-delay` staggered per index.
   - Single shared keyframe animates `color` and `text-shadow` (soft glow in the lit color) from default → lit → default.
   - Pure CSS, no JS state, no re-renders. Respects `prefers-reduced-motion` by disabling the animation and keeping the static faint state.

4. **Guardrails**:
   - Font size, position, opacity baseline, drift animation, and word list unchanged.
   - Glow kept subtle (low blur, low opacity) so text elsewhere in the epilogue remains the focal point.
   - No changes to any other section, route, or file.

## Verification
- Build passes.
- Scrolling into the epilogue: background words gently pulse through brand colors one/two at a time, rest stay faint, overall feel remains calm and professional.
- `prefers-reduced-motion` disables the color cycle.