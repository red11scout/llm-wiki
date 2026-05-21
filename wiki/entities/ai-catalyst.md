---
title: AI Catalyst
kind: entity
summary: Archived BlueAlly AI Use Case Workshop Platform with an 8-agent pipeline and 4-dimension survey system; predecessor to aiworkflow, last committed 2026-02-14.
tags: [blueally-ip, pipeline, multi-agent, workshop, archived]
sources: 1
updated: 2026-05-21
---

---
title: AI Catalyst
kind: entity
summary: Archived BlueAlly AI Use Case Workshop Platform with an 8-agent pipeline and 4-dimension survey system; predecessor to aiworkflow, last committed 2026-02-14.
tags: [blueally-ip, pipeline, multi-agent, workshop, archived]
sources: 1
updated: 2026-05-21
---

AI Catalyst is an archived BlueAlly application that served as the workshop analysis platform before being superseded by [[aiworkflow]]. It combined data from [[researchapp]] and [[cognition-two]] into a unified AI use case workflow, pioneering the multi-agent pipeline architecture and reconciled use case data model that underpin the current [[blueally-pipeline]] ecosystem.

## Status

- **Deployed**: not deployed
- **Status**: archived
- **Last commit**: 2026-02-14
- **GitHub**: none

## Stack

React, Vite, Express, TailwindCSS, [[drizzle-orm]], [[neon]], Anthropic SDK.

## Key features

- **8-agent pipeline**: Import Reconciliation → Survey Gen → Challenge + Validate (parallel) → Prioritize → Workflow + Lineage (parallel) → Synthesis
- **9 pages** with **8-step stepper navigation**
- **4-dimension survey system**
- All 14 development phases completed; compiles clean at time of archival

## Data sources

AI Catalyst ingests and reconciles data from two upstream BlueAlly apps:
- [[researchapp]] — upstream research data source
- [[cognition-two]] — upstream cognition/use-case data source

## Ecosystem role

AI Catalyst is the direct predecessor to [[aiworkflow]] (step 2 of the [[blueally-pipeline]]). Its multi-agent pipeline design and reconciled use case data model were foundational to the current pipeline architecture. It is now archived and no longer deployed.

## Related

- [[aiworkflow]] — Successor platform that supersedes AI Catalyst
- [[blueally-pipeline]] — The broader pipeline AI Catalyst helped define
- [[ai-catalyst-source]] — Source inventory for this project
- [[researchapp]] — Upstream data source
- [[cognition-two]] — Upstream data source
- [[drizzle-orm]] — ORM library in the stack
- [[neon]] — Database platform used
