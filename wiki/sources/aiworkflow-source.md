---
title: AI Workflow Project Inventory
kind: source
summary: Project inventory for AI Workflow, BlueAlly's step-2 pipeline app that runs a 10-step guided analysis workflow on imported assessment JSON, last committed 2026-05-13.
tags: [blueally-pipeline, workflow-orchestration, project-inventory]
sources: 1
updated: 2026-05-21
---

---
title: AI Workflow Project Inventory
kind: source
summary: Project inventory for AI Workflow, BlueAlly's step-2 pipeline app that runs a 10-step guided analysis workflow on imported assessment JSON, last committed 2026-05-13.
tags: [blueally-pipeline, workflow-orchestration, project-inventory]
sources: 1
updated: 2026-05-21
---

Raw project inventory captured via local filesystem survey on 2026-05-21.

## Provenance

- **File**: raw/notes/projects/aiworkflow.md
- **Captured**: 2026-05-21
- **Source method**: local filesystem survey
- **Directory**: /Users/drewgodwin/aiworkflow/
- **GitHub**: https://github.com/red11scout/aiworkflow

## Key facts extracted

- Upstream data source: [[researchapp]] via discover.movefasterwithai.com (smart-report-ai)
- Downstream consumer: [[ai-architecture-studio]]
- Stack: React, Vite, Express, [[tailwindcss]], [[drizzle-orm]], [[neon]], [[anthropic-sdk]]
- Status: active; not deployed as a public endpoint
- Last commit: 2026-05-13
- 10-step workflow: Upload → Themes → Functions → Friction → Use Cases → Benefits → Workflows → Readiness → Matrix → Dashboard
- 56 TypeScript files, 12 pages, 20 [[shadcn-ui]] components, 4 layout components
- Uses section-based updates via PUT API and automatic X-Owner-Token header management
- Produces shareable reports and structured JSON output consumed by [[ai-architecture-studio]]

## Pages created/updated from this source

- Created: [[aiworkflow-source]]
- Updated: [[aiworkflow]], [[blueally-pipeline]], [[researchapp]]
