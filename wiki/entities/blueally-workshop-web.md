---
title: BlueAlly Workshop Web
kind: entity
summary: Deployed BlueAlly workshop management hub providing scheduling, content management, and participant interaction with Next.js, Neon, and Framer Motion; last committed 2026-03-16.
tags: [blueally, workshop, next-js, neon, framer-motion, drizzle-orm]
sources: 1
updated: 2026-05-21
---

---
title: BlueAlly Workshop Web
kind: entity
summary: Deployed BlueAlly workshop management hub providing scheduling, content management, and participant interaction with Next.js, Neon, and Framer Motion; last committed 2026-03-16.
tags: [blueally, workshop, next-js, neon, framer-motion, drizzle-orm]
sources: 1
updated: 2026-05-21
---

BlueAlly Workshop Web (also referred to as the BlueAlly Workshop Hub) is a deployed web-based workshop management platform built with Next.js, [[react]], [[tailwindcss]], [[drizzle-orm]], [[neon]], and [[framer-motion]]. It provides workshop scheduling, content management, and participant interaction capabilities, backed by Neon for database persistence and Framer Motion for animations.

## Repository & deployment

- **GitHub**: https://github.com/red11scout/blueally-workshop-hub
- **Deployed URL**: blueally-workshop-web.vercel.app (hosted on [[vercel]])
- **Last commit**: 2026-03-16
- **Status**: Deployed

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js / [[react]] |
| Styling | [[tailwindcss]] |
| ORM | [[drizzle-orm]] |
| Database | [[neon]] (serverless Postgres) |
| Animation | [[framer-motion]] |

## Ecosystem role

BlueAlly Workshop Web fills the **workshop management and logistics** role in the [[blueally-pipeline]]. While [[blueally-workshop-experience]] and [[blueally-presenting-workshop]] focus on slide-based content delivery during live sessions, BlueAlly Workshop Web handles the operational layer: scheduling workshops, managing content, and supporting participant interaction. [[blueally-portal]] provides the authenticated participant-facing access to session materials.

## Related

- [[blueally-workshop-web-source]] — Source inventory for this app
- [[blueally-workshop-experience]] — Presentation-focused companion (28 slides, 7 sections, no database)
- [[blueally-presenting-workshop]] — Presenter-mode workshop delivery tool (49 slides, 8 sections)
- [[blueally-portal]] — Auth-gated workshop participant portal (Next.js / Neon)
- [[blueally-pipeline]] — The broader BlueAlly delivery pipeline
- [[vercel]] — Deployment platform
