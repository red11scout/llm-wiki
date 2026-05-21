---
title: Atlas
kind: entity
summary: BlueAlly's AI Investment Intelligence Platform providing token usage projections, Private AI infrastructure Bills of Materials, and ROI analysis; deployed at atlas.vercel.app.
tags: [blueally, financial-modeling, infrastructure, investment-analysis, active]
sources: 1
updated: 2026-05-21
---

---
title: Atlas
kind: entity
summary: BlueAlly's AI Investment Intelligence Platform providing token usage projections, Private AI infrastructure Bills of Materials, and ROI analysis; deployed at atlas.vercel.app.
tags: [blueally, financial-modeling, infrastructure, investment-analysis, active]
sources: 1
updated: 2026-05-21
---

Atlas is BlueAlly's AI Investment Intelligence Platform, deployed at atlas.vercel.app. It provides enterprises with token usage projections, Private AI infrastructure Bills of Materials (BoMs), and ROI analysis to support business-case development for AI infrastructure investments. It is built as a [[turborepo]] monorepo and integrates the [[anthropic-sdk]] for intelligent financial modeling and infrastructure cost planning.

## Role in the BlueAlly ecosystem

Atlas serves as the financial planning layer of the [[blueally-pipeline]]. Where [[ai-architecture-studio]] produces technical architecture outputs (diagrams, PRDs, agentic workflows), Atlas provides the complementary investment analysis and infrastructure cost modeling — together they enable enterprises to move from technical design to funded business case.

Atlas is also conceptually related to [[ai-infra-sizing]], which right-sizes AI infrastructure using a deterministic calculation engine; Atlas extends that concern into investment justification and ROI territory.

## Technical stack

| Layer | Technology |
|---|---|
| Framework | Next.js / React |
| Styling | [[tailwindcss]] |
| ORM | [[drizzle-orm]] |
| Database | [[neon]] (serverless Postgres) |
| AI integration | [[anthropic-sdk]] |
| Monorepo tooling | [[turborepo]] |
| Deployment | [[vercel]] (atlas.vercel.app) |

## Key capabilities

- **Token usage projections** — forecasts AI token consumption for capacity and cost planning
- **Private AI infrastructure BoMs** — structured Bills of Materials for on-premise or private-cloud AI deployments
- **ROI analysis** — investment return modeling to support enterprise business cases

## Metadata

- **GitHub**: https://github.com/red11scout/atlas
- **Status**: active
- **Last commit**: 2026-05-06

## Related

- [[atlas-source]] — Source inventory page for Atlas
- [[ai-architecture-studio]] — Complementary technical architecture output tool
- [[ai-infra-sizing]] — Related infrastructure right-sizing platform
- [[blueally-pipeline]] — Pipeline context
- [[turborepo]] — Monorepo tooling
- [[neon]] — Shared database platform
- [[drizzle-orm]] — Shared ORM
- [[anthropic-sdk]] — AI integration layer
