# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static React + Vite landing page (single-page, no router) for **LeneBolos**, a homemade cake catalog based in Vila Velha/ES, Brazil. Content and UI strings are in Portuguese (pt-BR). Deployed to Vercel (see `.vercel/`).

## Commands

```bash
npm install        # install deps
npm run dev        # Vite dev server
npm run build      # production build -> dist/
npm run preview    # serve the built dist/ locally
```

There is no test, lint, or typecheck script — the project is plain JS/JSX with no TypeScript and no test framework configured.

## Architecture

- `src/main.jsx` mounts `<App />` into `#root` (see `index.html`).
- `src/App.jsx` is a flat layout: `Header`, `main` containing `Hero` / `Catalog` / `About`, then `Footer`, with `WhatsAppButton` as a fixed-position floating CTA.
- Each component in `src/components/` owns its `.css` sibling (e.g. `Catalog.jsx` + `Catalog.css`). There is no CSS module / styled-component / utility framework — plain CSS imported per component, plus globals in `src/index.css`.
- All "calls to action" funnel to WhatsApp via `https://wa.me/<number>?text=<encoded-message>` opened in a new tab. The number `5527999753620` (and the display form `(27) 99975-3620`) is **hardcoded and duplicated** across `Hero.jsx`, `Catalog.jsx`, `Footer.jsx`, and `WhatsAppButton.jsx` — if it changes, update all four.

## Catalog data

The cake catalog is a hardcoded `cakes` array at the top of `src/components/Catalog.jsx`. There is no backend or CMS. Conventions:

- `id` is the canonical identifier; `image` (optional, falls back to `id`) selects the file at `/public/bolos/<image>.jpeg`. Variants that share a photo (e.g. zero-açúcar versions) reuse the regular cake's image by setting `image` to that cake's id.
- `ativo: false` hides a cake from the rendered grid without deleting the entry (filter is applied in render).
- Dietary badges are driven by booleans: `glutenFree`, `zeroAcucar`, `semLactose` — each renders a corresponding `.badge-*` chip with its own inline SVG.
- `prices` is an object keyed by size code (`M`, `G`), values are numbers in BRL. The card renders one row per size; cakes sold in a single size (e.g. Torta) just omit the other key. Values are formatted by `formatBRL` as `R$ X,YZ` (comma decimal).

## Assets

Images and the logo live in `public/` and are referenced with root-absolute paths (`/hero.jpeg`, `/logo.png`, `/bolos/<id>.jpeg`). Don't import them through the JS module graph — Vite serves `public/` as-is.
