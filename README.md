<div align="center">

# PRIONEX – Company Portfolio

React + Vite + Tailwind CSS

</div>

## Prerequisites

- Node.js 18+ (recommended) and npm

## Install

```powershell
cd c:\Users\SAM\Desktop\company\comp-site\website
npm install
```

## Run (development)

```powershell
npm run dev
```

Then open the URL printed by Vite, e.g. http://localhost:5173 or http://localhost:5174

## Build (production)

```powershell
npm run build
```

The built files will be in `dist/`.

## Preview local build

```powershell
npm run preview
```

## Tech stack

- React 19
- Vite 7
- Tailwind CSS (via PostCSS adapter `@tailwindcss/postcss`)
- ESLint

## Tailwind setup notes

- Tailwind is configured in `tailwind.config.cjs` with content paths:
  - `index.html`, and `src/**/*.{js,jsx,ts,tsx,html}`
- PostCSS loads Tailwind via `@tailwindcss/postcss` in `postcss.config.cjs`.
- The main stylesheet `src/index.css` contains the directives:
  - `@tailwind base; @tailwind components; @tailwind utilities;`

If your editor flags `@tailwind` or `@apply` as unknown at-rules, that is only a linting warning; Vite/PostCSS will process them correctly.

## Troubleshooting

- Port 5173 already in use: Vite will auto-pick the next port (e.g., 5174). Use the URL it prints.
- npx tailwindcss fails: You can rely on Vite + PostCSS (no CLI needed). Optional standalone build is available via `npm run build:css`.
- PostCSS plugin error: Ensure `@tailwindcss/postcss` is installed and referenced in `postcss.config.cjs`.

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE).
