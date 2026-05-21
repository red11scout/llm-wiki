---
type: project-inventory
captured: 2026-05-21
source: local filesystem survey
---

# AI Architecture Studio

- **Directory**: /Users/drewgodwin/ai-architecture-studio/
- **GitHub**: https://github.com/red11scout/ai-architecture-studio
- **Deployed**: ai-architecture-studio.vercel.app (target: builder.gofasterwithai.com)
- **Stack**: next, react, tailwindcss, drizzle-orm, neon, anthropic-sdk
- **Database**: Neon
- **Status**: deployed
- **Last commit**: 2026-05-20

## Description

AI Solution Builder that ingests JSON output from aiworkflow and generates architecture diagrams, agentic workflows, data governance views, PRDs, and financial models. Uses React Flow with Dagre for 3-layer diagram rendering, HyperFormula for deterministic calculations, and Claude Sonnet for PRD generation only. Features 18 routes, 5 DB tables, ExcelJS export with 6 sheets, and per-use-case tabs for Architecture, Workflow, Data & Governance, Financial, PRD, and Roadmap.

## Ecosystem role

Core ecosystem app at step 3 of the BlueAlly pipeline. Takes aiworkflow JSON output and generates technical architecture artifacts. Deployed at builder.gofasterwithai.com, it transforms workshop analysis into actionable technical blueprints including system architecture diagrams, agentic workflow designs, and product requirement documents.
