---
title: Atlas
kind: entity
summary: BlueAlly's AI Investment Intelligence Platform providing token usage projections, Private AI infrastructure Bills of Materials, and ROI analysis; deployed at atlas.vercel.app.
tags: [blueally, private-ai, financial-modeling, investment, infrastructure]
sources: 2
updated: 2026-05-21
---

Atlas is BlueAlly's AI Investment Intelligence Platform. It provides enterprises with token usage projections, Private AI infrastructure Bills of Materials (BoMs), and ROI analysis to support AI investment decisions. It is deployed as a Turborepo monorepo at atlas.vercel.app.

## Technical stack

- **Build system**: [[turborepo]] monorepo
- **Deployment**: [[vercel]]

## Ecosystem role

Atlas is one of three financial and infrastructure planning tools in the [[blueally-pipeline]]:

- **Atlas** — token usage projections, Private AI BoMs, and ROI analysis
- [[ai-infra-sizing]] — deterministic right-sizing engine with Claude advisor layer
- [[blueally-private-ai-investment-planner]] — financial implication modeling for private AI deployments (hardware, cloud, operational costs) with Claude advisory

Together they address the [[private-ai-investment-modeling]] domain for enterprises evaluating on-premises or private cloud AI.

## Related

- [[atlas-source]] — raw project inventory
- [[blueally-private-ai-investment-planner]] — companion financial planning tool
- [[ai-infra-sizing]] — companion right-sizing platform
- [[private-ai-investment-modeling]] — concept page for the modeling approach
- [[blueally-pipeline]] — overall delivery pipeline
