---
title: BlueAlly Microsites
kind: entity
summary: Deployed BlueAlly multi-tenant client delivery portal at portal.gofasterwithai.com; password-protected landing pages linking clients to all their generated pipeline artifacts; last committed 2026-05-12.
tags: [blueally, client-delivery, multi-tenant, microsite, portal, deployed]
sources: 1
updated: 2026-05-21
---

---
title: BlueAlly Microsites
kind: entity
summary: Deployed BlueAlly multi-tenant client delivery portal at portal.gofasterwithai.com; password-protected landing pages linking clients to all their generated pipeline artifacts; last committed 2026-05-12.
tags: [blueally, client-delivery, multi-tenant, microsite, portal, deployed]
sources: 1
updated: 2026-05-21
---

BlueAlly Microsites is a deployed multi-tenant microsite platform that serves as the **final presentation layer** of the [[blueally-pipeline]]. Each client receives a dedicated, password-protected landing page that aggregates links to all artifacts generated on their behalf across the BlueAlly platform: assessment reports, workshop analyses, architecture diagrams, and PDFs.

## Deployment

- **URL**: blueally-microsites.vercel.app (target production domain: portal.[[gofasterwithai]].com)
- **Host**: [[vercel]]
- **GitHub**: https://github.com/red11scout/blueally-microsites
- **Last commit**: 2026-05-12
- **Status**: deployed

## Stack

Built on Next.js, [[react]], [[tailwindcss]], [[drizzle-orm]], [[neon]], [[anthropic-sdk]], and [[framer-motion]]. Authentication uses Edge middleware with [[jose]] JWT, issuing 7-day sessions per client.

## Design and UX

Each client landing page presents 6 resource boxes linking to their artifacts. A `SubLinksDialog` component handles tools that expose multiple links. The platform is styled with the [[glass-monolith-theme]] visual identity and uses [[framer-motion]] stagger animations for page load.

## Client configuration

Unlike other BlueAlly apps, client configuration is stored in TypeScript config files rather than a database. Per-client passwords are stored in environment variables. [[neon]] is present in the stack but is not used for client config storage.

## Ecosystem role

BlueAlly Microsites is the client-facing endpoint of the [[blueally-pipeline]]. Clients who have gone through the assessment ([[researchapp]]), analysis ([[aiworkflow]]), architecture generation ([[ai-architecture-studio]]), and readout ([[ai-executive-readout]]) phases access all their outputs through this portal. It complements the planned authenticated portal ([[blueally-customer-portal]]), which tracks the 8-part transformation framework journey.

## Related

- [[blueally-microsites-source]] — raw project inventory
- [[blueally-pipeline]] — upstream pipeline whose artifacts are surfaced here
- [[blueally-customer-portal]] — planned authenticated portal tracking transformation journeys
- [[gofasterwithai]] — branded domain
- [[jose]] — JWT library used for Edge session auth
- [[glass-monolith-theme]] — UI theme
