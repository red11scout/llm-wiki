---
title: Workflow Compass
kind: entity
summary: Archived BlueAlly workflow management tool with Claude SDK integration and Neon persistence; predecessor to aiworkflow, last committed 2026-02-12.
tags: [blueally, archived, workflow, pipeline-predecessor]
sources: 2
updated: 2026-05-21
---

Workflow Compass is an archived BlueAlly workflow management application that provided workflow orchestration capabilities with [[anthropic-sdk]] (Claude SDK) integration, [[framer-motion]] animations, and [[neon]] database persistence. It was never deployed to production and was last committed on 2026-02-12.

## Technical stack

- **Framework**: [[react]] + [[vite]]
- **Back end**: [[express]]
- **Styling**: [[tailwindcss]]
- **Database ORM**: [[drizzle-orm]] on [[neon]]
- **AI layer**: [[anthropic-sdk]]
- **Animations**: [[framer-motion]]

## Repository

- **Directory**: `/Users/drewgodwin/workflow/`
- **GitHub**: https://github.com/red11scout/workflow
- **Status**: archived, not deployed
- **Last commit**: 2026-02-12

## Ecosystem role

Workflow Compass is the direct predecessor to [[aiworkflow]], BlueAlly's current step-2 pipeline app. It explored workflow management patterns — including Claude SDK-driven orchestration and Neon persistence — that were later refined and expanded into aiworkflow's 10-step guided analysis workflow. Within the broader BlueAlly lineage, it follows [[cognoresearcher]] and precedes [[aiworkflow]].

See [[workflow-source]] for the full project inventory.

## Related

- [[aiworkflow]] — Current successor; 10-step guided workflow platform
- [[cognoresearcher]] — Earlier BlueAlly assessment platform in the same lineage
- [[ai-catalyst]] — Parallel archived predecessor focused on multi-agent pipeline patterns
- [[blueally-pipeline]] — Overall BlueAlly delivery pipeline context
- [[workflow-source]] — Source inventory page
