---
title: AI Workflow
kind: entity
summary: BlueAlly's step-2 pipeline app that imports assessment JSON from researchapp and runs a 10-step guided analysis workflow, producing structured output consumed by AI Architecture Studio; last committed 2026-05-13.
tags: [blueally-pipeline, workflow-orchestration, active]
sources: 2
updated: 2026-05-21
---

AI Workflow is BlueAlly's core step-2 pipeline application — an orchestration platform that imports assessment JSON from [[researchapp]] (served at discover.movefasterwithai.com) and guides users through a 10-step interactive analysis workflow, ultimately producing shareable reports and structured JSON output consumed by [[ai-architecture-studio]].

## Pipeline position

AI Workflow sits between the upstream assessment layer ([[researchapp]]) and the downstream technical artifact generation layer ([[ai-architecture-studio]]) within the [[blueally-pipeline]]. It is the successor to [[ai-catalyst]] as the primary workshop analysis engine.

## 10-step workflow

1. **Upload** — ingest JSON from discover.movefasterwithai.com
2. **Themes** — identify key organizational themes
3. **Functions** — map business functions
4. **Friction** — surface friction points
5. **Use Cases** — enumerate AI use cases
6. **Benefits** — quantify anticipated benefits
7. **Workflows** — define target workflows
8. **Readiness** — assess organizational readiness
9. **Matrix** — prioritize use cases across dimensions
10. **Dashboard** — present shareable output

## Technical profile

- **Stack**: React, Vite, Express, [[tailwindcss]], [[drizzle-orm]], [[neon]], [[anthropic-sdk]]
- **UI components**: 20 [[shadcn-ui]] components, 4 layout components
- **Scale**: 56 TypeScript files, 12 pages
- **API pattern**: section-based updates via PUT API with automatic X-Owner-Token header management
- **Deployed**: not deployed as a public endpoint
- **Status**: active
- **Last commit**: 2026-05-13
- **GitHub**: https://github.com/red11scout/aiworkflow

## Related

- [[aiworkflow-source]] — project inventory source
- [[blueally-pipeline]] — pipeline context
- [[researchapp]] — upstream data provider
- [[ai-architecture-studio]] — downstream consumer
- [[ai-catalyst]] — predecessor application
- [[neon]], [[drizzle-orm]], [[anthropic-sdk]], [[tailwindcss]], [[shadcn-ui]]
