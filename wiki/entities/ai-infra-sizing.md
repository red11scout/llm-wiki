---
title: AI Infrastructure Sizing
kind: entity
summary: Deployed BlueAlly platform that right-sizes enterprise AI infrastructure using a deterministic calculation engine paired with Claude as an advisor-only layer; last committed 2026-04-07.
tags: [blueally, infrastructure, private-ai, financial-modeling]
sources: 2
updated: 2026-05-21
---

AI Infrastructure Sizing is a deployed BlueAlly platform that helps enterprises determine the correct scale of AI infrastructure before committing to a deployment. It uses a deterministic calculation engine as the authoritative sizing source, with Claude ([[anthropic-sdk]]) serving as an advisor-only layer that provides narrative guidance on top of the calculated outputs. Last committed 2026-04-07.

## Ecosystem role

AI Infrastructure Sizing is one of three financial and infrastructure planning tools in the [[blueally-pipeline]]:

- **AI Infrastructure Sizing** — deterministic right-sizing engine with Claude advisor layer
- [[atlas]] — token usage projections, Private AI BoMs, and ROI analysis
- [[blueally-private-ai-investment-planner]] — financial implication modeling for private AI deployments (hardware, cloud, operational costs) with Claude advisory

Together they address the [[private-ai-investment-modeling]] domain for enterprises evaluating on-premises or private cloud AI.

## Technical stack

- **Deployment**: [[vercel]]
- **AI layer**: [[anthropic-sdk]] (advisor-only)

## Related

- [[ai-infra-sizing-source]] — raw project inventory
- [[atlas]] — companion investment intelligence platform
- [[blueally-private-ai-investment-planner]] — companion financial planning tool
- [[private-ai-investment-modeling]] — concept page for the modeling approach
- [[blueally-pipeline]] — overall delivery pipeline
