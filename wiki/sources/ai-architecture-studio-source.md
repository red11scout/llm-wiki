---
title: AI Architecture Studio — Project Inventory
kind: source
summary: Project inventory for AI Architecture Studio, a deployed BlueAlly pipeline app that transforms aiworkflow JSON into architecture diagrams, PRDs, and financial models.
tags: [blueally-pipeline, project-inventory, architecture, deployed]
sources: 1
updated: 2026-05-21
---

---
title: AI Architecture Studio — Project Inventory
kind: source
summary: Project inventory for AI Architecture Studio, a deployed BlueAlly pipeline app that transforms aiworkflow JSON into architecture diagrams, PRDs, and financial models.
tags: [blueally-pipeline, project-inventory, architecture, deployed]
sources: 1
updated: 2026-05-21
---

Raw file: `raw/notes/projects/ai-architecture-studio.md`
Captured: 2026-05-21 via local filesystem survey.

This source is a project inventory note for [[ai-architecture-studio]], describing its technical stack, deployment status, ecosystem role, and feature surface. It establishes the app as step 3 of the [[blueally-pipeline]] and details its integration with [[aiworkflow]] upstream.

## Key claims (EXTRACTED)

- Directory: `/Users/drewgodwin/ai-architecture-studio/`
- GitHub: `https://github.com/red11scout/ai-architecture-studio`
- Deployed at `ai-architecture-studio.vercel.app`; target domain `builder.gofasterwithai.com`
- Stack: Next.js, React, TailwindCSS, Drizzle ORM, Neon, Anthropic SDK
- Database: [[neon]] (serverless Postgres)
- Status: deployed; last commit 2026-05-20
- 18 routes, 5 DB tables, ExcelJS export with 6 sheets
- Per-use-case tabs: Architecture, Workflow, Data & Governance, Financial, PRD, Roadmap
- Uses [[react-flow]] with Dagre for 3-layer diagram rendering
- Uses [[hyperformula]] for deterministic calculations
- Uses [[claude-sonnet]] for PRD generation only
- Ingests JSON output from [[aiworkflow]]; produces architecture diagrams, agentic workflows, data governance views, PRDs, and financial models
- Positioned as step 3 of the [[blueally-pipeline]]

## Related

- [[ai-architecture-studio]]
- [[aiworkflow]]
- [[blueally-pipeline]]
- [[gofasterwithai]]
