---
title: ResearchApp Project Inventory
kind: source
summary: Project inventory for ResearchApp, BlueAlly's original Express/Vite AI Strategic Assessment Platform at discover.movefasterwithai.com; step-1 pipeline entry point, last committed 2026-02-23.
tags: [blueally, pipeline, assessment, express, vite]
sources: 1
updated: 2026-05-21
---

---
title: ResearchApp Project Inventory
kind: source
summary: Project inventory for ResearchApp, BlueAlly's original Express/Vite AI Strategic Assessment Platform at discover.movefasterwithai.com; step-1 pipeline entry point, last committed 2026-02-23.
tags: [blueally, pipeline, assessment, express, vite]
sources: 1
updated: 2026-05-21
---

ResearchApp is BlueAlly's original AI Strategic Assessment Platform, deployed at discover.movefasterwithai.com and serving as step 1 of the [[blueally-pipeline]]. It generates assessment JSON that flows downstream into [[aiworkflow]] (step 2) and then into [[ai-architecture-studio]] (step 3).

## Provenance

- **Captured**: 2026-05-21
- **Source**: local filesystem survey
- **Directory**: /Users/drewgodwin/researchapp/
- **GitHub**: https://github.com/red11scout/researchapp
- **Deployed URL**: discover.movefasterwithai.com
- **Last commit**: 2026-02-23
- **Status**: Deployed

## Stack

| Layer | Technology |
|---|---|
| Front-end framework | [[react]] + [[vite]] |
| Styling | [[tailwindcss]] |
| Back-end | [[express]] |
| ORM | [[drizzle-orm]] |
| Database | [[neon]] |
| AI | [[anthropic-sdk]] |
| Animation | [[framer-motion]] |

## Key capabilities

- AI-powered strategic assessment: use case discovery, financial modeling, and multi-agent analysis
- Enriched use case fields — all optional for backward compatibility with older JSON consumers
- Retry loops with read-back verification for save reliability
- Framer Motion animations for the assessment UI

## Ecosystem role

ResearchApp is the origin point of the [[blueally-pipeline]] concept — the original tool from which the full multi-step pipeline was developed. Its exported JSON is the canonical input format consumed by [[aiworkflow]], which in turn feeds [[ai-architecture-studio]]. It is slated for replacement by [[researchapp-v2]], a Next.js App Router rewrite.

## Related

- [[researchapp]] — Entity page for this project
- [[researchapp-v2]] — Active Next.js rewrite planned as its replacement
- [[aiworkflow]] — Step-2 downstream consumer of researchapp's JSON
- [[ai-architecture-studio]] — Step-3 downstream consumer
- [[blueally-pipeline]] — The overarching pipeline this app initiates
