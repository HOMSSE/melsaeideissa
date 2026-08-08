# Cleanup: Remove Experimental Site Versions

## Goal
Remove all the experimental portfolio versions that were built for testing, keeping only the current live version (v11 — "Three Hats"). Clean up the router and imports so the project only serves the final site.

## Current State
- `src/App.tsx` imports and routes 11 different page components.
- The live route (`/`) already points to `IndexThreeHats`.
- `src/components/StyleToggle.tsx` already returns `null`, so the version switcher is hidden.
- Only `IndexThreeHats.tsx` is actively used; the other 10 page files are dormant.

## Proposed Cleanup

### 1. Remove unused routes from `src/App.tsx`
- Keep only the root route `/` pointing to `IndexThreeHats`.
- Remove the `/original`, `/editorial`, `/shader`, `/scroll3d`, `/terminal`, `/physics`, `/cube`, `/chroma`, `/spark`, `/controlroom`, and `/threehats` alias routes.
- Remove all imports for the unused page components.
- Keep `NotFound` for the catch-all `*` route.
- Keep `StyleToggle` imported (it already renders nothing, and removing it is optional).

### 2. Delete unused page files
Delete the following dormant components from `src/pages/`:
- `Index.tsx`
- `IndexEditorial.tsx`
- `IndexShader.tsx`
- `IndexScroll3D.tsx`
- `IndexTerminal.tsx`
- `IndexPhysics.tsx`
- `IndexCube.tsx`
- `IndexChroma.tsx`
- `IndexSpark.tsx`
- `IndexControlRoom.tsx`

### 3. Verify build still passes
Run the build/typecheck to confirm no broken imports or routes remain.

## Revert Safety
Yes, the files can be recovered if needed. Lovable keeps a full version history of every change. If we delete the files now, they remain in the project's history and can be restored by reverting to an earlier state. Two ways to do that:
- Click the **revert** button on the AI message that performed the cleanup.
- Use the **History** tab at the top of the chat and pick the version before the cleanup.

If you prefer an even safer approach, we can keep the unused files in the repo and only remove their routes/imports. That leaves the files physically present but inaccessible. Let me know which you prefer.
