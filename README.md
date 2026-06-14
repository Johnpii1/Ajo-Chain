# AjoChain

A modern React, TypeScript, and Tailwind CSS frontend foundation for a decentralized savings circle platform built for future Stellar and Soroban integration.

## UI scope

- Professional fintech landing page
- Responsive dashboard UI
- Sidebar navigation
- Savings, groups, payouts, and contribution history cards

## Scripts

```bash
npm install
npm run dev
npm run build
```

If `npm run dev` reports that `vite` is not recognized, install the project dependencies first with `npm install`. The `vite` executable is installed locally into `node_modules/.bin` and is run through the npm scripts above.

## Vercel deployment

This project is configured as a Vite app. Vercel should use:

- Build command: `npm run build`
- Output directory: `dist`

The included `vercel.json` also rewrites all routes to `index.html` so direct visits and refreshes do not return a 404.
