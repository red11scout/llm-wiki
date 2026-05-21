---
type: project-inventory
captured: 2026-05-21
source: local filesystem survey
---

# BlueAlly Microsites

- **Directory**: /Users/drewgodwin/blueally-microsites/
- **GitHub**: https://github.com/red11scout/blueally-microsites
- **Deployed**: blueally-microsites.vercel.app (target: portal.gofasterwithai.com)
- **Stack**: next, react, tailwindcss, drizzle-orm, neon, anthropic-sdk, framer-motion
- **Database**: Neon
- **Status**: deployed
- **Last commit**: 2026-05-12

## Description

Multi-tenant microsite platform where each client gets a password-protected landing page with 6 resource boxes linking to their assessment artifacts. Uses Edge middleware with jose JWT for 7-day sessions and per-client passwords stored in environment variables. Features a Glass Monolith theme with Framer Motion stagger animations and a SubLinksDialog for tools with multiple links. No database for client config — uses TypeScript config files per client.

## Ecosystem role

Client delivery portal at portal.gofasterwithai.com. The final presentation layer of the BlueAlly ecosystem, providing password-protected landing pages where clients access all their generated artifacts: assessment reports, workshop analyses, architecture diagrams, and PDFs from across the platform.
