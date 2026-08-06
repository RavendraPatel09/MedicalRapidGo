# MediCycle

**The Future of Safe Medicine Exchange**

MediCycle is a marketplace platform that connects buyers and sellers of medicines — including discounted, near-expiry stock — through dedicated Buyer, Seller, and Admin web apps, backed by shared packages in a Turborepo monorepo.

## Apps

- **`apps/buyer`** — Marketplace browsing, medicine details, nearby sellers, cart, orders, in-app chat/negotiation, and auth flows. Includes a 3D "floating medicines" hero built with React Three Fiber + GSAP.
- **`apps/seller`** — Seller dashboard for listing/adding medicines and negotiating offers with buyers via chat.
- **`apps/admin`** — Admin dashboard for platform oversight.

## Packages

- **`packages/types`** — Shared TypeScript types (User, Medicine, Order, ChatMessage, Review, Notification, etc.)
- **`packages/ui`** — Shared UI components
- **`packages/theme`** — Shared Tailwind theme/design tokens
- **`packages/store`** — Shared state management
- **`packages/utils`** — Shared utility functions

## Tech Stack

- React 18 + TypeScript + Vite
- Tailwind CSS
- React Router
- React Three Fiber / Three.js + GSAP (3D/animated UI)
- Turborepo (monorepo build orchestration)
- npm workspaces

## Getting Started

\```bash
npm install
npm run dev     # runs all apps in dev mode via Turborepo
npm run build   # builds all apps and packages
npm run lint
\```

## Project Structure

\```
MedicalRapidGo/
├── apps/
│   ├── buyer/
│   ├── seller/
│   └── admin/
├── packages/
│   ├── types/
│   ├── ui/
│   ├── theme/
│   ├── store/
│   └── utils/
└── turbo.json
\```
