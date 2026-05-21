---
title: AI Architecture Studio
kind: entity
summary: Deployed BlueAlly pipeline app (step 3) that ingests aiworkflow JSON and generates architecture diagrams, agentic workflows, PRDs, and financial models.
tags: [blueally-pipeline, deployed, architecture, product]
sources: 1
updated: 2026-05-21
---

---
title: AI Architecture Studio
kind: entity
summary: Deployed BlueAlly pipeline app (step 3) that ingests aiworkflow JSON and generates architecture diagrams, agentic workflows, PRDs, and financial models.
tags: [blueally-pipeline, deployed, architecture, product]
sources: 1
updated: 2026-05-21
---

AI Architecture Studio is a deployed web application occupying step 3 of the [[blueally-pipeline]]. It consumes JSON output produced by [[aiworkflow]] and transforms it into a suite of technical artifacts: system architecture diagrams, agentic workflow designs, data governance views, product requirement documents (PRDs), and financial models. It is accessible at `builder.gofasterwithai.com` (hosted via [[gofasterwithai]]) and maintained at `https://github.com/red11scout/ai-architecture-studio`.

## Technical Stack

| Layer | Technology |
|---|---|
| Framework | Next.js + React |
| Styling | TailwindCSS |
| ORM | Drizzle ORM |
| Database | [[neon]] (serverless Postgres) |
| AI | [[claude-sonnet]] (PRD generation only) |
| Diagrams | [[react-flow]] + Dagre (3-layer rendering) |
| Calculations | [[hyperformula]] (deterministic) |
| Export | ExcelJS (6-sheet workbook) |

## Features

- **18 routes** covering all major artifact views
- **5 DB tables** for persisting use-case data
- **Per-use-case tabs**: Architecture, Workflow, Data & Governance, Financial, PRD, Roadmap
- **ExcelJS export** with 6 sheets for downstream sharing
- **3-layer diagram rendering** via [[react-flow]] with Dagre layout
- **Deterministic financial calculations** via [[hyperformula]]
- **PRD generation** via [[claude-sonnet]]

## Ecosystem Role

As step 3 of the [[blueally-pipeline]], AI Architecture Studio bridges workshop analysis (produced upstream by [[aiworkflow]]) and actionable technical delivery. Workshop JSON flows in; stakeholder-ready blueprints flow out. This makes it a core translation layer between business use-case prioritization and engineering execution.

## Deployment

- **Status**: Deployed
- **Last commit**: 2026-05-20
- **Vercel URL**: `ai-architecture-studio.vercel.app`
- **Target domain**: `builder.gofasterwithai.com`
- **Source**: `raw/notes/projects/ai-architecture-studio.md` (see [[ai-architecture-studio-source]])

## Related

- [[aiworkflow]]
- [[blueally-pipeline]]
- [[gofasterwithai]]
- [[neon]]
- [[react-flow]]
- [[hyperformula]]
- [[claude-sonnet]]
- [[ai-architecture-studio-source]]
