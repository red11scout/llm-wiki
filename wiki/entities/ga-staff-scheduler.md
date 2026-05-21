---
title: GA Staff Scheduler
kind: entity
summary: Deployed external-client staff scheduling app built with Next.js, Claude SDK for AI-powered schedule optimization, Neon, and Framer Motion; last committed 2026-03-31.
tags: [external-client, scheduling, deployed, ai-powered]
sources: 1
updated: 2026-05-21
---

---
title: GA Staff Scheduler
kind: entity
summary: Deployed external-client staff scheduling app built with Next.js, Claude SDK for AI-powered schedule optimization, Neon, and Framer Motion; last committed 2026-03-31.
tags: [external-client, scheduling, deployed, ai-powered]
sources: 1
updated: 2026-05-21
---

GA Staff Scheduler is a deployed staff scheduling application built for an external client, hosted at ga-staff-scheduler.vercel.app. It uses the [[anthropic-sdk]] (Claude) to provide intelligent schedule optimisation, [[neon]] for persistent data storage, and [[framer-motion]] for smooth UI interactions. It is a standalone tool, not connected to the [[blueally-pipeline]] AI assessment ecosystem.

## Technical stack

| Layer | Technology |
|---|---|
| Framework | Next.js / [[react]] |
| Styling | [[tailwindcss]] |
| ORM | [[drizzle-orm]] |
| Database | [[neon]] (serverless Postgres) |
| AI integration | [[anthropic-sdk]] (Claude) |
| Animation | [[framer-motion]] |
| Deployment | [[vercel]] |

## Ecosystem role

An external-client engagement that sits outside the core [[blueally-pipeline]]. It demonstrates the team's capacity to deliver domain-specific, AI-powered vertical tools — applying the same technology stack used in BlueAlly products to a standalone workforce-management problem. The AI layer handles [[ai-powered-scheduling]] — generating or optimising shift assignments with Claude rather than relying solely on deterministic rules.

## Related

- [[ga-staff-scheduler-source]] — raw project inventory source
- [[ai-powered-scheduling]] — scheduling optimisation concept operationalised here
- [[blueally-pipeline]] — the separate BlueAlly product ecosystem
- [[neon]] — shared database platform
- [[drizzle-orm]] — shared ORM layer
- [[framer-motion]] — shared animation library
- [[anthropic-sdk]] — AI integration layer
- [[vercel]] — deployment platform
