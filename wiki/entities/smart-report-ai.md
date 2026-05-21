---
title: SmartReportAI
kind: entity
summary: Deployed BlueAlly AI assessment report generator co-occupying step 1 of the pipeline with researchapp; dual-deployed on Vercel and Replit, last committed 2026-03-25.
tags: [blueally-pipeline, assessment, deployed]
sources: 1
updated: 2026-05-21
---

---
title: SmartReportAI
kind: entity
summary: Deployed BlueAlly AI assessment report generator co-occupying step 1 of the pipeline with researchapp; dual-deployed on Vercel and Replit, last committed 2026-03-25.
tags: [blueally-pipeline, assessment, deployed]
sources: 1
updated: 2026-05-21
---

SmartReportAI is a deployed BlueAlly AI assessment report generator that produces structured AI strategic assessment reports from client data using Claude-powered analysis via the [[anthropic-sdk]]. It co-occupies the step-1 position in the [[blueally-pipeline]] alongside [[researchapp]], with both tools deployed at discover.movefasterwithai.com on [[replit]] and additionally at smart-report-ai-weld.vercel.app on [[vercel]].

## Technical stack

| Layer | Technology |
|---|---|
| Front-end | [[react]], [[vite]], [[tailwindcss]], [[framer-motion]] |
| Back-end | [[express]] |
| Database | [[neon]] via [[drizzle-orm]] |
| AI layer | [[anthropic-sdk]] (Claude) |
| Bundler | [[esbuild]] (API bundling for deployment) |
| Hosting | [[vercel]] + [[replit]] (dual deployment) |

## Deployment

SmartReportAI is dual-deployed on both [[vercel]] (smart-report-ai-weld.vercel.app) and [[replit]] (discover.movefasterwithai.com). The dual deployment is described as ensuring high availability for this critical pipeline entry point — the same domain also serves [[researchapp]].

## Ecosystem role

SmartReportAI sits at step 1 of the [[blueally-pipeline]], generating the assessment JSON output that flows into [[aiworkflow]] for deeper guided analysis and subsequently into [[ai-architecture-studio]] for technical artifact generation (architecture diagrams, PRDs, financial models). It shares the step-1 position with [[researchapp]] (the original Express/Vite implementation) and [[researchapp-v2]] (the active Next.js rewrite).

## Provenance

- **GitHub**: https://github.com/red11scout/smart-report-ai
- **Last commit**: 2026-03-25
- **Status**: Deployed

See [[smart-report-ai-source]] for the raw project inventory.

## Related

- [[researchapp]] — Co-occupant of step-1 pipeline position (original Express/Vite build)
- [[researchapp-v2]] — Active Next.js rewrite of step-1 assessment platform
- [[aiworkflow]] — Step-2 pipeline consumer of SmartReportAI JSON output
- [[ai-architecture-studio]] — Step-3 pipeline consumer of aiworkflow output
- [[blueally-pipeline]] — The multi-step delivery pipeline this tool anchors
- [[esbuild]] — Used here for API bundling, also used in [[claude-mem]]
