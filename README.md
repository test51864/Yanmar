# Yanmar Distributor Portal 2.0

Assessment-ready React portal and pilot API for YDG/YDP distributor activation.

## What is included

- Searchable distributor context with automatic market, CTA, currency and content personalization
- Internal competitor search with seeded assessment catalog and optional Brave Search API
- Server-side HTML/PDF extraction with Playwright fallback
- Evidence review, multi-competitor comparison, TCO and HTML/CSV/print export
- 60 complete website copy modules: 20 Europe, 20 Middle East and 20 Africa
- Demo login with admin and distributor roles
- Printable Admin Evidence Center mapped to the assessment rubric
- PostgreSQL/Prisma schema, Docker Compose and Render blueprint
- One-time review import for legacy `yanmarDistributorPortal*` localStorage data

## Local assessment mode

```bash
npm install
npm run dev
```

Open the Vite URL. The application remains usable without PostgreSQL or Brave Search: login, personalization, seed product search, comparison, copy, assets, activation and evidence all have local assessment fallbacks.

### Start without PowerShell

Double-click `start-portal.cmd` or run this from Command Prompt:

```cmd
node start-portal.mjs
```

The script starts `npm install` and `npm run dev` through Node with `shell: false`, so it does not invoke PowerShell. If Windows policy blocks `node.exe` or `npm.cmd`, use Docker/Render or ask IT to allow those executables.

Demo accounts:

```text
admin@yanmar.demo / Ardi2026!
distributor@yanmar.demo / Demo2026!
```

## Pilot mode

Copy `.env.example` to `.env`, replace the session secret and add a Brave Search API key.

```bash
docker compose up --build
npm run prisma:migrate
```

The production container serves the built React app, API and existing `/assets` library on port `8787`.

## Verification

```bash
npm test
npm run build
```

Tests cover market mapping, Saudi/Poland/Africa behavior, Americas source markets, exact copy-module counts and local specification extraction.

## Claim governance

Seed competitor values are visibly marked as demonstration data. Technical claims, TCO assumptions, local availability, warranty and service terms require evidence review before external publication.
