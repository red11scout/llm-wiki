---
title: AI Infrastructure Sizing
kind: entity
summary: Deployed BlueAlly platform that right-sizes enterprise AI infrastructure using a deterministic calculation engine paired with Claude as an advisor-only layer; last committed 2026-04-07.
tags: [blueally, infrastructure, sizing, deployed]
sources: 1
updated: 2026-05-21
---

---
title: AI Infrastructure Sizing
kind: entity
summary: Deployed BlueAlly platform that right-sizes enterprise AI infrastructure using a deterministic calculation engine paired with Claude as an advisor-only layer; last committed 2026-04-07.
tags: [blueally, infrastructure, sizing, deployed]
sources: 1
updated: 2026-05-21
---

AI Infrastructure Sizing is a deployed BlueAlly web application that helps enterprises right-size their AI infrastructure deployments. It combines a deterministic calculation engine for quantitative hardware and cloud modeling with Claude (via [[anthropic-sdk]]) serving strictly as an advisor layer that generates recommendations on top of those calculations — a deliberate separation of deterministic logic from AI-generated guidance (see also [[hyperformula]] for a similar deterministic-first pattern in [[ai-architecture-studio]]).

## Repository & deployment

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
| AI | [[anthropic-sdk]] (advisor layer only) |
| State | [[zustand]] (sizing configuration state) |

## Role in the BlueAlly ecosystem

AI Infrastructure Sizing is a specialized tool within the [[blueally-pipeline]], focused on infrastructure planning. It complements upstream assessment and architecture tools — particularly [[ai-architecture-studio]] — by translating identified AI deployment candidates into concrete hardware and cloud sizing recommendations. It sits downstream in the delivery workflow, consuming outputs from the discovery and architecture phases and producing actionable infrastructure plans.

## Design pattern: deterministic engine + AI advisor

A notable design decision is the strict separation between the deterministic calculation engine (which owns all quantitative outputs) and Claude (which only provides advisory narrative on top of those results). This mirrors the approach used in [[ai-architecture-studio]] with [[hyperformula]] for financial modeling, suggesting an emerging BlueAlly pattern of using LLMs as explainers rather than calculators in quantitative tools.

## Related

- [[blueally-pipeline]]
- [[ai-architecture-studio]]
- [[ai-infra-sizing-source]]
- [[vercel]]
- [[neon]]
- [[drizzle-orm]]
- [[zustand]]
- [[anthropic-sdk]]
