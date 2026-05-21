---
title: BlueAlly Portal
kind: entity
summary: Active BlueAlly AI Workshop Portal built with Next.js and Neon, providing authenticated workshop participants access to session materials and outputs; last committed 2026-04-24.
tags: [blueally, workshop, portal, next-js, neon]
sources: 1
updated: 2026-05-21
---

---
title: BlueAlly Portal
kind: entity
summary: Active BlueAlly AI Workshop Portal built with Next.js and Neon, providing authenticated workshop participants access to session materials and outputs; last committed 2026-04-24.
tags: [blueally, workshop, portal, next-js, neon]
sources: 1
updated: 2026-05-21
---

BlueAlly Portal is an active Next.js-based AI Workshop Portal platform that gives authenticated workshop participants a dedicated interface to access their session materials and outputs. It sits in the [[blueally-pipeline]] as the workshop access point, distinct from — but complementary to — the [[blueally-microsites]] client delivery portal which serves finished pipeline artifacts to clients.

## Technical stack

- **Framework**: Next.js with [[react]]
- **Styling**: [[tailwindcss]]
- **ORM**: [[drizzle-orm]]
- **Database**: [[neon]] (serverless Postgres)
- **Animations**: [[framer-motion]]

## Deployment status

Not yet deployed as of the inventory date (2026-04-24 last commit). No GitHub repository is associated; the project lives at a local filesystem path. Status is listed as **active**.

## Ecosystem role

BlueAlly Portal functions as the workshop-participant access point within the [[blueally-pipeline]]. Where [[blueally-microsites]] provides password-protected landing pages linking clients to all generated pipeline artifacts, BlueAlly Portal focuses on authenticated workshop participants and their in-session materials. Together they form the participant- and client-facing delivery layer of the BlueAlly ecosystem.

## Related

- [[blueally-portal-source]] — Raw project inventory source for this entity
- [[blueally-microsites]] — Sibling client delivery portal at portal.gofasterwithai.com
- [[blueally-pipeline]] — The multi-step delivery pipeline this portal supports
- [[neon]] — Database platform used for participant data
- [[framer-motion]] — Animation library used for polished interaction patterns
- [[drizzle-orm]] — ORM used for type-safe database access
