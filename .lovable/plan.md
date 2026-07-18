# Replace Innovation Award Image Across the Site

## Current State
- The active award image is `src/assets/innovation-award.jpg` (2.2 MB, beige-wall photo, award off-center).
- A CDN asset pointer exists at `src/assets/innovation-award.jpg.asset.json`.
- Most pages import the CDN pointer (`IndexThreeHats`, `IndexSpark`, `IndexControlRoom`), but two legacy pages import the local JPG directly (`Index`, `IndexEditorial`).
- The uploaded replacement is `/mnt/user-uploads/جائزة_الإبداع.jpeg` — a cleaner, centered product-style shot of the same trophy on a neutral light background.

## Plan

1. **Upload the replacement image to Lovable assets**
   - Source: `/mnt/user-uploads/جائزة_الإبداع.jpeg`
   - Target filename: `innovation-award-2025.jpg`
   - Output: new `src/assets/innovation-award.jpg.asset.json` with the fresh CDN URL.

2. **Align all page imports to use the CDN asset pointer**
   - Update `src/pages/Index.tsx` to import `innovation-award.jpg.asset.json` instead of the local JPG.
   - Update `src/pages/IndexEditorial.tsx` to import `innovation-award.jpg.asset.json` instead of the local JPG.
   - Existing imports in `IndexThreeHats`, `IndexSpark`, and `IndexControlRoom` already use the asset pointer and will pick up the new URL automatically.

3. **Remove the old local binary**
   - Delete `src/assets/innovation-award.jpg` so the site no longer falls back to the old photo.

4. **Verify**
   - Run `bun run build` to confirm all imports resolve.
   - Check the Innovation Award section in the live preview to confirm the new image renders clearly.

## Scope
- Only the Innovation Award image and its references are changed.
- No layout, text, colors, or other sections will be modified unless the new image's aspect ratio forces a minor sizing tweak.
