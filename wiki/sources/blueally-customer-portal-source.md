---
title: BlueAlly Customer Portal — Project Inventory
kind: source
summary: Project inventory for BlueAlly Customer Portal, a planned authenticated multi-tenant portal tracking customer AI transformation journeys through an 8-part framework; not yet deployed, last status unknown.
tags: [blueally, portal, multi-tenant, framework-journey, project-inventory]
sources: 1
updated: 2026-05-21
---

---
title: BlueAlly Customer Portal — Project Inventory
kind: source
summary: Project inventory for BlueAlly Customer Portal, a planned authenticated multi-tenant portal tracking customer AI transformation journeys through an 8-part framework; not yet deployed, last status unknown.
tags: [blueally, portal, multi-tenant, framework-journey, project-inventory]
sources: 1
updated: 2026-05-21
---

Raw inventory captured from local filesystem survey on 2026-05-21.

## Key Facts

| Field | Value |
|---|---|
| Directory | `/Users/drewgodwin/blueally-customer-portal/` |
| GitHub | None |
| Deployed | Not deployed |
| Status | Unknown |
| Last commit | Unknown |

## Stack

[[react-flow]] is not used here; the front-end is built on [[react]] with [[vite]] as the bundler and [[tailwindcss]] for styling. Animations are handled by [[framer-motion]]. The back end is [[express]], with [[drizzle-orm]] for type-safe database access against a [[neon]] Postgres instance. Authentication scaffolding is provided by [[clerk]] (not yet wired up). AI integration is through the [[anthropic-sdk]].

## Described Functionality

- **8-part framework journey tracking** per customer organisation (see [[blueally-framework-journey]])
- **Multi-tenant architecture** — organisations, framework steps, and artifacts as first-class data models
- **Clerk auth scaffolding** — present but not yet connected
- **Sales rep contact widget**
- **Activity log**
- **Email campaign tables**
- Five pages: `PortalHome`, `JourneyStep`, `Reports`, `Team`, and `Settings`

## Ecosystem Role

The portal is a planned authenticated customer-facing layer within the [[blueally-pipeline]]. It gives customers visibility into their AI transformation journey progress and associated artifacts. The current plan calls for it to be merged into the main website (see [[aiwebsiteblueally-next]]) under a `/portal/` route in a future phase.

## Related

- [[blueally-customer-portal]] — entity page for this project
- [[blueally-framework-journey]] — the 8-part framework the portal tracks
- [[clerk]] — auth provider scaffolded into the portal
- [[neon]] — database layer
- [[drizzle-orm]] — ORM used for database access
- [[anthropic-sdk]] — AI integration layer
- [[aiwebsiteblueally-next]] — planned merge target
