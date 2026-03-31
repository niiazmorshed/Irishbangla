# IrishBangla — Emerald Visa & Tours (Vite + React)

Marketing + information website for **Emerald Visa & Tours**, with formal navigation, breadcrumbs, country-based Ireland visa guidance, and dedicated information pages.

## Tech stack

- **React** (Vite)
- **React Router**
- **Firebase Firestore** (tracking page)
- **Framer Motion / GSAP** (animations)
- **react-select / react-icons**

## Key features

- **Formal navigation**: fixed navbar + breadcrumb bar across the site.
- **Information dropdown**: topic pages under `/information/:topic` with a formal layout (hero, sidebar, cards, tables, disclaimer).
- **Global footer**: footer is rendered on every page via a shared layout component.
- **Visa Search (Ireland)**:
  - “I am from” supports a curated country list
  - destination is fixed to **Ireland**
  - results page shows **country + category** requirements (fee, processing time, documents, waivers, embassy handling, notes + disclaimer)

## Routes

- `/` Home (Hero + Visa Search + sections)
- `/information/:topic` Information topic pages
- `/visa-details` Visa guide results page (reads selection from navigation state)
- `/track/:trackingId` Visa tracking (Firestore-backed)
- `/book-trip` Booking form
- `/ireland-travel-process` Travel/Visa info page
- `/ireland-weather` Weather editorial page
- `/sustainable-ireland` Sustainability editorial page

## Project structure (important files)

- `src/App.jsx`: route definitions
- `src/components/Layout.jsx`: global `Navbar` + `Outlet` + `Footer`
- `src/components/Breadcrumbs.jsx`: breadcrumb navbar (formal navigation)
- `src/components/VisaSearchCard.jsx`: country + category selection
- `src/pages/VisaDetails.jsx`: renders visa requirements based on selection
- `src/data/irelandVisaGuide.js`: visa country table + category requirements
- `src/data/informationTopics.js`: Information pages content (topics)
- `src/firebase.js`: Firestore initialization used by tracking page

## Getting started (Windows / PowerShell)

### Prerequisites

- **Node.js 18+** (recommended: Node 20+)
- npm (comes with Node)

### Install

```bash
cd irishbangla
npm install
```

### Run (development)

```bash
cd irishbangla
npm run dev
```

Vite will print the local dev URL in the terminal.

### Build (production)

```bash
cd irishbangla
npm run build
```

### Preview production build

```bash
cd irishbangla
npm run preview
```

### Lint

```bash
cd irishbangla
npm run lint
```

## Content updates

### Update “Information” pages

Edit:
- `src/data/informationTopics.js`

Each topic has:
- `slug`, `title`, `lead`, `sections`, `sources`

### Update visa guide data (countries & categories)

Edit:
- `src/data/irelandVisaGuide.js`

This controls:
- **country table** (visa required, waiver, embassy handling)
- **visa categories** (type, duration, processing time, fees, documents, notes)

## Notes / disclaimers

- The information shown is **general guidance** and may change according to Irish government policy and official sources. Each guide page includes a disclaimer.

## Firebase (Tracker page)

The tracking route `/track/:trackingId` reads from Firestore.

Configuration is currently in `src/firebase.js`. If you need to use a different Firebase project, update the config values there.
