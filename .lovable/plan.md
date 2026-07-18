## Goal
Bring the more advanced motion/effect stack from `dumyati-digital-spark` into v11's epilogue (everything after Advansys), while staying in the v11 palette: Methanex blue `#0080c7`, Schneider green `#3dcd58`, Advansys cyan `#22d3ee` on deep navy. No changes to the three hat sections or other versions.

## What the reference project actually does
- Full-viewport `bg-gradient-hero` (3-color linear) sized `bg-[length:400%_400%]` animated via a `gradient-shift` keyframe (8s loop) — the slow, smooth color drift.
- A layered `bg-gradient-mesh` (three overlapping radial gradients) as the base wash.
- Small `rounded-full` orbs positioned across the section, each running `animate-float` (3s ease-in-out) with staggered `delay-500/700/1000` — organic parallax feel.
- A `glow-pulse` opacity keyframe (2s) on halos behind icons.
- Glass cards: `bg-gradient-glass` + `backdrop-blur` + `border-white/20`, hover lifts scale + border tint.
- Headings use `bg-gradient-to-r ... bg-clip-text text-transparent` for a shimmering multi-color title.
- Entrance: `fade-in`, `scale-in`, `slide-up` with staggered `animationDelay`.

The current epilogue only has aurora blobs + conic sweep + cursor spotlight. It's missing the animated mesh + floating orbs + glass card language + gradient-clip headings that make the reference feel "alive".

## Approach — `src/pages/IndexThreeHats.tsx` only

1. **Layer stack for the epilogue background** (behind existing content):
   - **Layer A — animated gradient hero**: single full-height div with a 3-stop linear gradient (`#0080c7 → #3dcd58 → #22d3ee`) at `bg-[length:400%_400%]`, `opacity ~0.18`, `mix-blend-screen`, animated via a new `gradient-shift` keyframe on a 14s loop (slower than reference for professionalism).
   - **Layer B — mesh wash**: three big radial gradients (one per brand color) at ~20% opacity, blurred, static — the "rich color base".
   - **Layer C — floating orbs**: 6–8 small blurred `rounded-full` divs in the three brand colors, `animate-float` with staggered delays (`0/500/700/1000/1500ms`) — organic movement.
   - **Layer D — keep** the existing conic sweep and cursor spotlight (they're already good), just tune opacity so the new layers can breathe.
   - **Layer E — keep** the tech-name constellation drifting on top.

2. **Epilogue section headings** ("What the three hats compound into", Innovation Award, Stack, Projects, Certs, Recommendations, Contact):
   - Apply `bg-gradient-to-r from-[#0080c7] via-[#3dcd58] to-[#22d3ee] bg-clip-text text-transparent` to the main heading of each — the multi-color shimmer.
   - Add a `bg-[length:200%_auto]` + `gradient-shift` animation (20s loop) so the gradient slowly slides across the letters. Slow enough to be comfortable.

3. **Glass card upgrade** for epilogue cards (award, stack, projects, certs, recommendations, contact):
   - Swap the current `bg-white/[0.03]` for a subtle `bg-gradient-to-br from-white/[0.06] to-white/[0.02]` + `backdrop-blur-md` + `border border-white/10`.
   - Hover: `border-[#22d3ee]/40`, slight `scale-[1.02]`, and a soft `shadow-[0_20px_60px_-20px_rgba(34,211,238,0.35)]` glow.
   - Icons/accents get a small halo div behind them with `animate-pulse` (already available) so they gently breathe.

4. **Entrance animations** (opt-in, not overkill):
   - Apply `animate-fade-in` / `animate-scale-in` (already in project) to epilogue section headers with a small stagger.

5. **CSS keyframes** added inline (styled-jsx style inside the file, same pattern already used):
   ```css
   @keyframes gradient-shift {
     0%, 100% { background-position: 0% 50%; }
     50%      { background-position: 100% 50%; }
   }
   @keyframes float-orb {
     0%, 100% { transform: translateY(0) translateX(0); }
     50%      { transform: translateY(-14px) translateX(6px); }
   }
   ```

6. **Accessibility & performance**:
   - Wrap all new motion in `@media (prefers-reduced-motion: reduce)` guards — freeze gradient-shift, orb float, and gradient-clip animation; keep the static color layers so it still looks rich.
   - Orbs use `pointer-events-none`, `will-change: transform`, and are limited to ~8 elements.
   - No new dependencies.

## Out of scope
- Three hat sections (Methanex/Schneider/Advansys) and their backgrounds — untouched.
- No routing / data / copy changes.
- No changes to other versions (v1–v10, Editorial, Shader, etc.).

## Verification
- Build passes.
- Scroll past Advansys: background shows a slow multi-color drift (mesh + animated gradient), a few soft orbs float, headings shimmer subtly with the three brand colors, cards feel like glass with a cyan hover glow.
- Reduced-motion users see the same colorful backdrop, static.
