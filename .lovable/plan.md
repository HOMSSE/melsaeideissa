## Plan: Add LinkedIn profile link to v11

### What we will do
Add the LinkedIn profile `https://www.linkedin.com/in/mohamedeeissa` to the v11 (Three Hats) page in two places, styled to match the existing cyan/teal visual language.

### Changes

1. **Hero section — primary CTA button**
   - Add a "View LinkedIn profile" button below the hero subtitle.
   - Use the LinkedIn icon from `lucide-react` (or a simple external-link icon if LinkedIn-specific is unavailable) and the existing `#22d3ee` accent.
   - Link opens in a new tab with `target="_blank"` and `rel="noopener noreferrer"`.

2. **LinkedIn Recommendations section — subtle profile link**
   - Add a centered line under the recommendation cards: "Read the full profile and more recommendations on LinkedIn →".
   - Same accent color, opens in a new tab.

### Technical notes
- URL will be normalized to `https://www.linkedin.com/in/mohamedeeissa`.
- No backend or data changes required; pure JSX update in `src/pages/IndexThreeHats.tsx`.
- Links will be accessible with descriptive text and proper ARIA attributes.

### Files affected
- `src/pages/IndexThreeHats.tsx`