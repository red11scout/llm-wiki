---
title: AI Infrastructure Sizing — Project Inventory
kind: source
summary: Project inventory for AI Infrastructure Sizing, a deployed BlueAlly platform for enterprise AI infrastructure right-sizing using deterministic calculation and Claude as an advisor layer, last committed 2026-04-07.
tags: [blueally, infrastructure, sizing, project-inventory]
sources: 1
updated: 2026-05-21
---

---
title: AI Infrastructure Sizing — Project Inventory
kind: source
summary: Project inventory for AI Infrastructure Sizing, a deployed BlueAlly platform for enterprise AI infrastructure right-sizing using deterministic calculation and Claude as an advisor layer, last committed 2026-04-07.
tags: [blueally, infrastructure, sizing, project-inventory]
sources: 1
updated: 2026-05-21
---

Raw inventory captured from a local filesystem survey of `/Users/drewgodwin/ai-infra-sizing/` on 2026-05-21.

## Key facts

- **GitHub**: https://github.com/red11scout/ai-infra-sizing
- **Deployed**: ai-infra-sizing.vercel.app (hosted on [[vercel]])
- **Last commit**: 2026-04-07
- **Status**: deployed

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js + React |
| Styling | Tailwind CSS |
| ORM | [[drizzle-orm]] |
| Database | [[neon]] (serverless Postgres) |
| AI | [[anthropic-sdk]] (Claude as advisor layer) |
| State | [[zustand]] |

## Description

[[ai-infra-sizing]] is a BlueAlly platform that helps enterprises right-size their AI infrastructure deployments. It pairs a deterministic calculation engine (for quantitative modeling) with Claude as an advisor-only layer that generates recommendations on top of those calculations. Zustand manages client-side state for sizing configurations.

## Ecosystem role

Specialized tool within the [[blueally-pipeline]] focused on infrastructure planning. Complements the assessment and architecture tools by providing concrete hardware and cloud infrastructure sizing recommendations for AI deployments identified through the discovery pipeline. Sits downstream of [[ai-architecture-studio]] in the broader delivery workflow.

## Related

- [[ai-infra-sizing]]
- [[blueally-pipeline]]
- [[vercel]]
- [[neon]]
- [[drizzle-orm]]
- [[zustand]]
- [[anthropic-sdk]]
