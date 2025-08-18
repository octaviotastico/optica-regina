# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Project overview
- Tech stack: React + TypeScript + Vite frontend. Tailwind CSS v4 via @tailwindcss/vite. ESLint with typescript-eslint and React Hooks/Refresh plugins.
- Purpose: Marketing/landing site rendered as a single-page app with animated sections and anchor-based navigation.
- Entry: src/main.tsx mounts App; src/App.tsx composes page sections.

Common commands
- Install dependencies (uses npm with package-lock.json)
  - npm ci  (CI or clean install)
  - npm install  (local development)
- Start dev server
  - npm run dev
  - Vite serves the app; hot reload enabled. Default: http://localhost:5173
- Build for production
  - npm run build
  - Runs TypeScript project build (tsc -b) then vite build. Output goes to dist/
- Preview production build locally
  - npm run preview
- Lint
  - npm run lint  (ESLint across the repo)
  - Lint a specific file: npx eslint src/components/commons/Header.tsx
  - Auto-fix (where safe): npx eslint . --fix
- Type-check only (no emit)
  - npx tsc -p tsconfig.app.json --noEmit

Notes on testing
- There is no test framework configured in package.json (no jest/vitest scripts). Add one if tests are needed before expecting test commands to work.

High-level architecture and structure
- Build and tooling
  - Vite config (vite.config.ts):
    - Plugins: @vitejs/plugin-react (React Fast Refresh), @tailwindcss/vite (Tailwind v4 integration)
    - Path alias: "@" → ./src (see resolve.alias). Use imports like import { cn } from "@/lib/utils"
  - TypeScript configs:
    - tsconfig.json sets baseUrl and paths for @/*; references split between tsconfig.app.json and tsconfig.node.json
    - tsconfig.app.json: strict, bundler module resolution, React JSX, noEmit; includes src/
    - tsconfig.node.json: strict settings for node-side tooling (vite config), noEmit; includes vite.config.ts
  - ESLint (eslint.config.js):
    - Extends @eslint/js recommended, typescript-eslint recommended, react-hooks latest, react-refresh vite rules
    - Targets **/*.ts,tsx with browser globals; dist/ ignored
- Runtime app layout (src/)
  - main.tsx: React StrictMode root; renders <App/>
  - App.tsx: top-level composition of sections in order, wrapped by a fixed Header and a ScrollToTopButton
  - components/
    - commons/: header and shared pieces
      - Header.tsx: Fixed header that transitions style on scroll (framer-motion + AnimatePresence). Handles smooth scrolling to section anchors. The offset uses a hardcoded headerHeight (100) — adjust if header size changes
      - ProductCard.tsx: Animated card using framer-motion, lucide-react icons, and UI primitives
      - ScrollToTopButton.tsx: Back-to-top utility
    - sections/: feature sections that make up the landing page (Introduction, HighlightedCategories, AboutUs, Services, Testimonials, TryIn3D, VisitUs, Contact). Each is visually driven, using Tailwind utility classes and framer-motion animations
    - ui/: low-level UI building blocks (button, card, carousel, collapsible, separator). These are generic, reusable components abstracted from styling libraries (e.g., shadcn-like patterns)
  - lib/
    - utils.ts: cn helper combining clsx and tailwind-merge
    - animations.ts: common motion variants used across components
  - assets/: static assets like images (e.g., react.svg); additional images referenced relatively in sections
  - index.css: Tailwind entry; global styles
- State, navigation, and animation
  - Minimal global state. Header manages local UI state (scrolled) via window scroll listener
  - Navigation relies on anchor IDs (e.g., #inicio, #categories). Header performs programmatic smooth scrolling with an offset for the fixed header
  - Animations are handled via framer-motion variants; components commonly use initial/animate/whileInView patterns for subtle transitions

Conventions and tips specific to this repo
- Imports should prefer the @ alias for anything under src/ to keep paths stable when files move
- When adding new sections, ensure section containers include stable id attributes to integrate with Header smooth-scroll links
- If you change header height or padding, review the 100px offset constant in Header.tsx so smooth scrolling aligns accurately
- Tailwind v4 is integrated through the Vite plugin; utility classes are used extensively. Use the cn helper when composing dynamic class names

External dependencies of note
- framer-motion for animations, lucide-react for icons, embla-carousel-react for carousels, Radix UI primitives, and three/@react-three/* for future/optional 3D interactions

