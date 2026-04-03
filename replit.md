# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### Anvesan Website (`artifacts/anvesan`)
- **Type**: React + Vite static frontend
- **Preview path**: `/` (root)
- **Purpose**: Premium landing page for Anvesan stablecoin research & strategic advisory think tank
- **Stack**: React, Vite, TailwindCSS v4, Framer Motion, shadcn/ui, next-themes
- **Theme**: Light mode default with fully functional dark mode toggle
- **Fonts**: Playfair Display (headings), Inter (body)
- **Color palette**: Cream/white (#FAF9F7) background, dark navy foreground, slate blue accents
- **Sections**: Hero, Mission, Research Focus, Featured Research, What We Offer, Contact, Footer
- **Key files**:
  - `src/pages/Home.tsx` — main landing page with all sections
  - `src/components/Layout.tsx` — sticky nav, dark mode toggle, footer
  - `src/components/ThemeProvider.tsx` — custom theme context
  - `src/index.css` — CSS variables for light/dark themes, Google Fonts import

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally
- `pnpm --filter @workspace/anvesan run dev` — run Anvesan website locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
