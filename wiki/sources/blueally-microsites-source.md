---
title: BlueAlly Microsites — Project Inventory
kind: source
summary: Project inventory for BlueAlly Microsites, a deployed multi-tenant client delivery portal at portal.gofasterwithai.com providing password-protected landing pages linking clients to all their generated artifacts; last committed 2026-05-12.
tags: [blueally, client-delivery, multi-tenant, microsite, portal]
sources: 1
updated: 2026-05-21
---

---
title: BlueAlly Microsites — Project Inventory
kind: source
summary: Project inventory for BlueAlly Microsites, a deployed multi-tenant client delivery portal at portal.gofasterwithai.com providing password-protected landing pages linking clients to all their generated artifacts; last committed 2026-05-12.
tags: [blueally, client-delivery, multi-tenant, microsite, portal]
sources: 1
updated: 2026-05-21
---

Raw capture of the BlueAlly Microsites project from a local filesystem survey taken 2026-05-21.

## Key facts

- **Directory**: `/Users/drewgodwin/blueally-microsites/`
- **GitHub**: https://github.com/red11scout/blueally-microsites
- **Deployed**: blueally-microsites.vercel.app → target domain: portal.gofasterwithai.com
- **Last commit**: 2026-05-12
- **Status**: deployed

## Stack

[[next-js]], [[react]], [[tailwindcss]], [[drizzle-orm]], [[neon]], [[anthropic-sdk]], [[framer-motion]]; Edge middleware with [[jose]] JWT for authentication.

## What it is

[[blueally-microsites]] is a multi-tenant microsite platform. Each client receives a password-protected landing page featuring 6 resource boxes that link out to their generated assessment artifacts. Authentication is handled via Edge middleware using [[jose]] JWT, issuing 7-day sessions. Per-client passwords are stored in environment variables — there is no database for client configuration; TypeScript config files are used per client instead.

The UI is styled with a "Glass Monolith" theme and uses [[framer-motion]] stagger animations. A `SubLinksDialog` component handles tools that surface multiple links from a single entry point.

## Ecosystem role

Serves as the final presentation layer of the [[blueally-pipeline]], acting as the client-facing delivery portal where clients access all artifacts generated across the platform: assessment reports, workshop analyses, architecture diagrams, and PDFs. Lives at portal.[[gofasterwithai]].com.

## Related

- [[blueally-microsites]] — entity page for the platform itself
- [[blueally-pipeline]] — the upstream pipeline whose artifacts this portal surfaces
- [[gofasterwithai]] — branded domain hosting the portal
- [[jose]] — JWT library underpinning session authentication
- [[glass-monolith-theme]] — visual design theme used by the platform
