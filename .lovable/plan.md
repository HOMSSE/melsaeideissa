## Three targeted tweaks to `src/pages/IndexThreeHats.tsx`

### 1. Recolor the Innovation Award section
Currently uses amber/orange (`#f5b642` border, background, glow, kicker text) which clashes with the site's cool cyan/teal/green palette.

Change to the site's existing accent palette (Advansys cyan `#22d3ee`, since the award is from Advansys):
- Border → `rgba(34,211,238,0.35)`
- Background → `linear-gradient(135deg, rgba(34,211,238,0.10), rgba(0,0,0,0.4))`
- Image glow → `0 0 50px rgba(34,211,238,0.35)`
- Kicker text ("Innovation Award · 2025") → `#22d3ee`

Everything else in the section (typography, layout, image) stays the same.

### 2. Move hero text further left so it doesn't overlap the blueprint
Today the hero uses `mx-auto max-w-5xl`, which centers the text column and lets it collide with the right-side blueprint on wide screens.

Change the hero inner container to `mr-auto max-w-2xl` and tighten paragraph width. Result: headline + paragraph + role pills all sit in the left ~40% of the viewport, leaving the blueprint clear on the right. No change to font sizes or copy.

### 3. Confine the Advansys blueprint to the right side (like Methanex & Schneider)
The dashboards blueprint is wider than the refinery/datacenter images, so at `h-[130vh] w-auto` it spills across the whole viewport. The radial mask is image-relative, not viewport-relative, so it doesn't clip it.

Wrap each blueprint `<img>` in a viewport-anchored container:
```tsx
<div className="absolute right-0 top-0 h-full w-[62vw] overflow-hidden">
  <img ... />
</div>
```
This clips any blueprint to the right ~62% of the viewport regardless of the source image's aspect ratio, giving all three hats the same "background on the right" behavior. The existing radial mask and `mix-blend-mode: screen` are preserved so edges still dissolve softly.

## Guardrails
- No other sections, routes, files, or copy touched.
- Word constellation, aurora, hat stepper, section content unchanged.
- Build should stay green.
