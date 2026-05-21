---
title: ResearchApp
kind: entity
summary: BlueAlly's original Express/Vite AI Strategic Assessment Platform deployed at discover.movefasterwithai.com; step-1 pipeline entry point generating assessment JSON consumed by aiworkflow; last committed 2026-02-23.
tags: [blueally, pipeline, assessment, express, vite]
sources: 2
updated: 2026-05-21
---

ResearchApp is BlueAlly's original AI Strategic Assessment Platform, deployed at discover.movefasterwithai.com. It is the entry point — step 1 — of the [[blueally-pipeline]], running AI-powered strategic assessments and exporting structured JSON that flows into [[aiworkflow]] (step 2) and ultimately [[ai-architecture-studio]] (step 3 via aiworkflow). It is the tool from which the full pipeline concept originated.

## Status

- **Deployed**: discover.movefasterwithai.com (also referenced as smart-report-ai)
- **Last commit**: 2026-02-23
- **GitHub**: https://github.com/red11scout/researchapp
- **Lifecycle**: Active but planned for replacement by [[researchapp-v2]]

## Stack

| Layer | Technology |
|---|---|
| Front-end | [[react]] + [[vite]] |
| Styling | [[tailwindcss]] |
| Back-end | [[express]] |
| ORM | [[drizzle-orm]] |
| Database | [[neon]] |
| AI | [[anthropic-sdk]] |
| Animation | [[framer-motion]] |

## Capabilities

- AI-powered use case discovery, financial modeling, and multi-agent analysis
- Enriched use case fields — all optional for backward compatibility with older JSON consumers downstream
- Retry loops with read-back verification for save reliability
- Framer Motion animations throughout the assessment UI

## Pipeline role

ResearchApp is the origin of the [[blueally-pipeline]] concept. Its exported assessment JSON is the canonical input format consumed by [[aiworkflow]], whose 10-step guided analysis produces structured output for [[ai-architecture-studio]]. The Express/Vite architecture is being modernized in [[researchapp-v2]], a Next.js App Router rewrite.

## Related

- [[researchapp-source]] — Source inventory page
- [[researchapp-v2]] — Active Next.js rewrite planned as its replacement
- [[aiworkflow]] — Step-2 downstream consumer
- [[ai-architecture-studio]] — Step-3 downstream consumer
- [[blueally-pipeline]] — The overarching pipeline this app initiates
- [[anthropic-sdk]] — AI integration layer
- [[neon]] — Database platform
