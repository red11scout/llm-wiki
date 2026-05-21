---
title: BlueAlly Customer Portal
kind: entity
summary: Planned authenticated multi-tenant customer portal for the BlueAlly ecosystem, tracking each organisation's 8-part AI transformation framework journey; not yet deployed.
tags: [blueally, portal, multi-tenant, framework-journey, in-progress]
sources: 1
updated: 2026-05-21
---

---
title: BlueAlly Customer Portal
kind: entity
summary: Planned authenticated multi-tenant customer portal for the BlueAlly ecosystem, tracking each organisation's 8-part AI transformation framework journey; not yet deployed.
tags: [blueally, portal, multi-tenant, framework-journey, in-progress]
sources: 1
updated: 2026-05-21
---

BlueAlly Customer Portal is a planned, as-yet-undeployed web application that gives BlueAlly customers an authenticated view of their AI transformation journey. The portal is built around an **8-part framework journey** (see [[blueally-framework-journey]]) and a multi-tenant data model that keeps each customer organisation's steps and artifacts isolated.

## Status

As of 2026-05-21 the project exists on local filesystem only — no GitHub remote, no deployment, and no recorded last-commit date. Its status is described as *unknown*.

## Stack

| Layer | Technology |
|---|---|
| Front-end | [[react]] + [[vite]] |
| Styling | [[tailwindcss]] |
| Animation | [[framer-motion]] |
| Back-end | [[express]] |
| ORM | [[drizzle-orm]] |
| Database | [[neon]] (serverless Postgres) |
| Auth | [[clerk]] (scaffolded, not yet wired) |
| AI | [[anthropic-sdk]] |

## Features

- **Framework journey tracking** — 8 discrete steps per organisation, with artifact storage
- **Multi-tenant architecture** — organisations, framework steps, and artifacts as separate data models
- **Sales rep contact widget** — embedded support touchpoint
- **Activity log** — per-organisation event history
- **Email campaign tables** — campaign tracking across 5 pages: `PortalHome`, `JourneyStep`, `Reports`, `Team`, and `Settings`

## Ecosystem Role

The portal sits downstream in the [[blueally-pipeline]] as the customer-facing accountability and visibility layer. It is planned to merge into the main website (see [[aiwebsiteblueally-next]]) under a `/portal/` route in a future phase.

## Related

- [[blueally-customer-portal-source]] — raw project inventory
- [[blueally-framework-journey]] — the 8-part framework being tracked
- [[blueally-pipeline]] — broader delivery pipeline context
- [[aiwebsiteblueally-next]] — planned merge target
- [[clerk]] — authentication provider
- [[neon]] — database platform
- [[drizzle-orm]] — ORM layer
- [[anthropic-sdk]] — AI integration
