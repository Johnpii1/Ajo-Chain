# AjoChain

AjoChain is a professional frontend foundation for a community savings platform inspired by traditional Ajo rotating savings circles. The project is currently focused on a polished web experience, clear product positioning, and a contributor-friendly roadmap that can be turned into GitHub issues.

## Project vision

Many savings groups still rely on chat messages, spreadsheets, and manual reminders. AjoChain aims to provide a transparent workspace where trusted members can organize contributions, follow payout schedules, and understand group activity at a glance.

Future phases may explore Stellar and Soroban integrations for stronger payment transparency, but the current priority is to build a dependable web experience first.

## Current scope

- Professional responsive landing page built with React, TypeScript, Vite, and Tailwind CSS.
- Product sections for features, roadmap, and contributor issue ideas.
- Mock savings dashboard card for communicating the intended user experience.
- Documentation that helps contributors understand the project and pick focused tasks.

## Tech stack

- React
- TypeScript
- Vite
- Tailwind CSS

## Getting started

```bash
npm install
npm run dev
```

Open the local Vite URL shown in your terminal. The app is also configured to run on `0.0.0.0`, which is useful in containerized development environments.

## Available scripts

```bash
npm run dev
npm run build
npm run preview
```

- `npm run dev` starts the development server.
- `npm run build` type-checks the project and creates a production build in `dist`.
- `npm run preview` serves the production build locally.

## Roadmap

### Phase 1: Professional web foundation

- Responsive marketing site.
- Clear product positioning.
- Contributor-ready README.
- Roadmap and starter issue ideas.

### Phase 2: Core savings dashboard

- Group creation flow.
- Member list and role display.
- Contribution amount and cycle settings.
- Payout schedule view.
- Contribution history table.

### Phase 3: Contributor workflows

- GitHub issue templates.
- Pull request template.
- Labels for `good first issue`, `frontend`, `documentation`, and `roadmap`.
- Mock data structure for dashboard work.
- Reusable component documentation.

### Phase 4: Product readiness

- Authentication flow mockups.
- Group invitation experience.
- Notification and reminder preferences.
- Accessibility pass across core screens.
- Empty, loading, and error states.

### Phase 5: Blockchain exploration

- Stellar wallet connection research.
- Soroban smart contract prototype.
- On-chain contribution record concept.
- Security and privacy review before production use.

## Suggested starter issues

You can manually create GitHub issues from the list below and assign them to contributors:

1. Build a reusable dashboard stat card component.
2. Create a group creation form UI.
3. Add a mock contribution history table.
4. Add empty states for groups with no activity.
5. Create GitHub issue templates for bugs, features, and documentation tasks.
6. Add a pull request template with testing instructions.
7. Improve mobile spacing and test the landing page across screen sizes.
8. Add mock data files for groups, members, contributions, and payouts.

## Contributing

Contributions should be small, focused, and connected to a roadmap phase. Before opening a pull request:

1. Create or claim an issue.
2. Keep the change limited to the issue scope.
3. Run `npm run build`.
4. Include screenshots for visible UI changes when possible.
5. Explain what changed and how it was tested.

## Deployment

This project is configured as a Vite app. For Vercel, use:

- Build command: `npm run build`
- Output directory: `dist`

The included `vercel.json` rewrites all routes to `index.html` so direct visits and refreshes do not return a 404.
