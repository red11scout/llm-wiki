---
title: AI Catalyst — Project Inventory
kind: source
summary: Project inventory for AI Catalyst, an archived BlueAlly workshop analysis platform superseded by aiworkflow, featuring an 8-agent pipeline and 4-dimension survey system, last committed 2026-02-14.
tags: [blueally-ip, pipeline, multi-agent, workshop, archived]
sources: 1
updated: 2026-05-21
---

---
title: AI Catalyst — Project Inventory
kind: source
summary: Project inventory for AI Catalyst, an archived BlueAlly workshop analysis platform superseded by aiworkflow, featuring an 8-agent pipeline and 4-dimension survey system, last committed 2026-02-14.
tags: [blueally-ip, pipeline, multi-agent, workshop, archived]
sources: 1
updated: 2026-05-21
---

Project inventory captured from a local filesystem survey on 2026-05-21, describing the [[ai-catalyst]] app as it existed at last commit 2026-02-14.

## Project metadata

| Field | Value |
|---|---|
| Directory | `/Users/drewgodwin/ai-catalyst/` |
| GitHub | none |
| Deployed | not deployed |
| Status | archived |
| Last commit | 2026-02-14 |

## Stack

[[react-flow]] (React), Vite, Express, TailwindCSS, [[drizzle-orm]], [[neon]], Anthropic SDK.

## Description

[[ai-catalyst]] is a BlueAlly AI Use Case Workshop Platform that combines data from [[researchapp]] and [[cognition-two]]. It features:

- **8 agents** running in a pipeline: Import Reconciliation → Survey Gen → Challenge + Validate (parallel) → Prioritize → Workflow + Lineage (parallel) → Synthesis
- **9 pages** with **8-step stepper navigation**
- **4-dimension survey system**

All 14 phases completed and compiles clean at time of archival.

## Ecosystem role

AI Catalyst is the earlier generation of the workshop analysis platform. It has been superseded by [[aiworkflow]], but pioneered the multi-agent pipeline architecture and the reconciled use case data model that influenced the current [[blueally-pipeline]] ecosystem design.

## Related

- [[ai-catalyst]] — Entity page for this application
- [[aiworkflow]] — The successor platform that supersedes AI Catalyst
- [[blueally-pipeline]] — The broader pipeline ecosystem AI Catalyst influenced
- [[researchapp]] — Upstream data source integrated by AI Catalyst
- [[cognition-two]] — Upstream data source integrated by AI Catalyst
- [[drizzle-orm]] — ORM library used in the stack
