# Dynamic Portal

Dynamic Portal is a React + TypeScript university website for DBS Global University. It presents the institution through a modern, animated multi-page experience covering the homepage, about section, academic programs, admissions, placements, campus life, and contact information.

## Overview

This project is built as a client-side single-page application with route-based pages and a strong visual focus. The interface uses motion-driven sections, school/program showcases, campus imagery, placement highlights, and university information structured for prospective students and visitors.

## Main Features

- Multi-page routing for:
  - Home
  - About
  - Programs
  - Admissions
  - Placements
  - Academics
  - Campus Life
  - Contact
- Animated landing sections using Framer Motion
- Program and school showcase for 9 schools and 30+ offerings
- Placement and recruiter highlights
- Campus facilities and student-life sections
- Responsive UI built with Tailwind CSS
- Reusable component structure with shared layout and UI primitives

## Tech Stack

- React 18
- TypeScript
- Vite
- React Router DOM
- Tailwind CSS
- Framer Motion
- TanStack Query
- Radix UI
- Vitest

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The app runs through Vite and is configured for local development on port `8080`.

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Run tests

```bash
npm run test
```

For watch mode:

```bash
npm run test:watch
```

## Project Structure

```text
src/
  components/     Reusable layout, section, and UI components
  assets/         Local images and static design assets
  pages/          Route-level pages
  test/           Test setup and example tests
  App.tsx         App routes and shared providers
  main.tsx        Application entry point
```

## Routes

The app currently defines these routes:

- `/`
- `/about`
- `/programs`
- `/admissions`
- `/placements`
- `/academics`
- `/campus-life`
- `/contact`

Unknown routes fall back to a `NotFound` page.

## Notes for Development

- The app uses `@/` path aliases that resolve to `src/`.
- Many sections rely on external university-hosted images and media URLs.
- Styling is driven primarily by Tailwind utility classes and shared UI components.
- Motion and scroll-based effects are used extensively across major pages.

## Suggested Next Improvements

- Add a fuller testing setup for page content and navigation flows
- Document deployment steps once hosting is finalized
- Add environment/config notes if external APIs or CMS data are introduced later
- Replace placeholder metadata or remaining hardcoded content as the project evolves

## Scripts

```bash
npm run dev
npm run build
npm run build:dev
npm run lint
npm run preview
npm run test
npm run test:watch
```
