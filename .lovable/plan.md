
## Goal
Eliminate the overlap between the fixed left-side role stepper ("End User / Global Vendor / System Integrator") and the main content by relocating it to the top-left of the viewport in a compact horizontal format.

## Scope
Only the fixed side-stepper `<nav>` inside `src/pages/IndexThreeHats.tsx`. All other occurrences of "End User", "Global Vendor", and "System Integrator" elsewhere on the page (hero pills, hat section titles, narrative text) stay exactly as they are.

## Design
Replace the vertical left-center stepper with a horizontal "hat indicator" pill anchored top-left:

- Position: `fixed top-4 left-4 z-30` (below any future header, above content).
- Container: subtle rounded pill with dark translucent background + backdrop blur + thin border, so it reads as a floating chip rather than page text — this is what prevents visual collision with body copy underneath.
- Contents: three tiny horizontal segments (like a 3-step progress bar), each labeled with its role in small uppercase mono type.
  - Active segment: full role label visible, colored with the active hat accent, wider bar, glow.
  - Inactive segments: shorter bar, muted label (still readable but low-contrast), no glow.
- Click behavior: each segment remains an anchor link to `#hat-enduser` / `#hat-vendor` / `#hat-integrator` (unchanged).
- Responsive: shown on all sizes (currently `hidden md:flex`); on mobile it collapses to just the 3 bars + active label only, so it stays narrow.
- Fade: keeps the existing `opacity: pastHats ? 0.35 : 1` behavior so it recedes in the epilogue.

## Why this works
- Moving out of the vertical center removes the overlap entirely — nothing sits on top of paragraph text anymore.
- A bordered/blurred pill visually separates the indicator from the page, so even when it sits over the hero headline it reads as UI chrome, not stray labels.
- Horizontal layout at the top is a familiar progress-indicator pattern, so users immediately understand "3 chapters, you are on 1 of 3".

## Files to change
- `src/pages/IndexThreeHats.tsx` — replace the `<nav className="fixed left-4 top-1/2 ...">` block with the new top-left pill. No other edits.

## Verification
- Scroll the page from hero through all three hat sections and into the epilogue; confirm no overlap with body text at any scroll position and that the active segment updates correctly.
- Check the other occurrences of the three role names elsewhere on the page are visually unchanged.
