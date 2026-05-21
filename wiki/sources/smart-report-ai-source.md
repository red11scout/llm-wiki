---
title: SmartReportAI Source
kind: source
summary: Project inventory for SmartReportAI, a deployed BlueAlly AI assessment report generator co-occupying step 1 of the pipeline alongside researchapp; dual-deployed on Vercel and Replit, last committed 2026-03-25.
tags: [blueally-pipeline, assessment, deployed]
sources: 1
updated: 2026-05-21
---

---
title: SmartReportAI Source
kind: source
summary: Project inventory for SmartReportAI, a deployed BlueAlly AI assessment report generator co-occupying step 1 of the pipeline alongside researchapp; dual-deployed on Vercel and Replit, last committed 2026-03-25.
tags: [blueally-pipeline, assessment, deployed]
sources: 1
updated: 2026-05-21
---

Project inventory for [[smart-report-ai]], captured from a local filesystem survey on 2026-05-21.

## Source metadata

| Field | Value |
|---|---|
| File | raw/notes/projects/smart-report-ai.md |
| Captured | 2026-05-21 |
| Source | local filesystem survey |
| Type | project-inventory |

## Raw inventory summary

- **Directory**: /Users/drewgodwin/smart-report-ai/
- **GitHub**: https://github.com/red11scout/smart-report-ai
- **Deployed**: smart-report-ai-weld.vercel.app AND discover.movefasterwithai.com (Replit)
- **Stack**: [[react]], [[vite]], [[express]], [[tailwindcss]], [[drizzle-orm]], [[neon]], [[anthropic-sdk]], [[framer-motion]]
- **Database**: [[neon]]
- **Status**: deployed
- **Last commit**: 2026-03-25

## Key facts extracted

- Dual-deployed on both [[vercel]] (smart-report-ai-weld.vercel.app) and [[replit]] (discover.movefasterwithai.com)
- Co-occupies the step-1 position in the [[blueally-pipeline]] alongside [[researchapp]]
- Generates structured AI strategic assessment reports from client data using [[anthropic-sdk]] (Claude)
- API is bundled with [[esbuild]] for deployment
- Dual deployment described as ensuring high availability for the "critical entry point of the ecosystem"
- JSON output from SmartReportAI flows downstream into [[aiworkflow]], then into [[ai-architecture-studio]]

## Related

- [[smart-report-ai]] — The entity page for this project
- [[blueally-pipeline]] — Pipeline concept this project is part of
- [[researchapp]] — Co-occupant of step-1 pipeline position
- [[aiworkflow]] — Downstream consumer of step-1 assessment JSON
