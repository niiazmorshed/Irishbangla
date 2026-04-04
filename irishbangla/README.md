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

### Internal admin (not linked publicly)

- **Visa tracker admin console** URL is defined in `src/constants/adminRoute.js` (default path: `/ops/evt7-visa-track-console`). It is **not** linked from the navbar or footer.
- **No public signup**: create user accounts only in [Firebase Authentication](https://console.firebase.google.com/) (Email/Password). The app only exposes **sign-in**.
- After sign-in, the app checks **allowlisted emails** (`VITE_ADMIN_ALLOWED_EMAILS` in `.env`, see `.env.example`). Default includes `fineanswer2025@gmail.com`.
- **Server-side protection**: deploy Firestore rules so only those accounts can write `visaTrackers`. A starter file is `firestore.rules` — update the email list there to match your admins, then publish rules in the Firebase console (or Firebase CLI).

## Project structure (important files)

- `src/App.jsx`: route definitions
- `src/components/Layout.jsx`: global `Navbar` + `Outlet` + `Footer`
- `src/components/Breadcrumbs.jsx`: breadcrumb navbar (formal navigation)
- `src/components/VisaSearchCard.jsx`: country + category selection
- `src/pages/VisaDetails.jsx`: renders visa requirements based on selection
- `src/data/irelandVisaGuide.js`: visa country table + category requirements
- `src/data/informationTopics.js`: Information pages content (topics)
- `src/firebase.js`: Firebase App + Firestore + Auth
- `src/constants/adminRoute.js`: hidden admin console path
- `src/contexts/AuthContext.jsx`: auth state + sign-in (allowlist enforced after Firebase auth)
- `src/pages/AdminTrackerConsole.jsx`: load/save `visaTrackers` documents
- `firestore.rules`: example rules (public read for trackers, restricted writes)

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

### Enable Email/Password sign-in

In Firebase Console → **Authentication** → **Sign-in method**, enable **Email/Password**. Add each admin user manually (Users tab).

### Firestore rules

1. Edit `firestore.rules` so the `request.auth.token.email in [ ... ]` list matches every admin email you create.
2. In Firebase Console → **Firestore** → **Rules**, paste and **Publish** (or use `firebase deploy --only firestore:rules` if you use the Firebase CLI).

Keep the client env `VITE_ADMIN_ALLOWED_EMAILS` in sync with the rules list so unauthorised Firebase users get signed out immediately after login.

**If admin “Save” fails with `permission-denied`:** the rules in your **Firebase project** are still the old ones (often “deny all writes”). The `firestore.rules` file in Git does nothing until you **Publish** those rules in the console, or run `firebase deploy --only firestore:rules` from the `irishbangla` folder (requires Firebase CLI login and selecting project `irishbangla-e9edd`). Also confirm the email you sign in with is **exactly** listed in the rules array.
