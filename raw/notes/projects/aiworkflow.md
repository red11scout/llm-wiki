---
type: project-inventory
captured: 2026-05-21
source: local filesystem survey
---

# AI Workflow

- **Directory**: /Users/drewgodwin/aiworkflow/
- **GitHub**: https://github.com/red11scout/aiworkflow
- **Deployed**: not deployed
- **Stack**: react, vite, express, tailwindcss, drizzle-orm, neon, anthropic-sdk
- **Database**: Neon
- **Status**: active
- **Last commit**: 2026-05-13

## Description

BlueAlly AI Workflow Orchestration platform that imports JSON from discover.movefasterwithai.com and runs a 10-step guided analysis workflow: Upload, Themes, Functions, Friction, Use Cases, Benefits, Workflows, Readiness, Matrix, and Dashboard. Features 56 TypeScript files, 12 pages, 20 shadcn/ui components, and 4 layout components. Uses section-based updates via PUT API and automatic X-Owner-Token header management.

## Ecosystem role

Core ecosystem app at step 2 of the BlueAlly pipeline. Takes assessment JSON from researchapp/smart-report-ai (discover.movefasterwithai.com) and runs interactive 10-step analysis, producing shareable reports and structured output that feeds into ai-architecture-studio for technical artifact generation.
