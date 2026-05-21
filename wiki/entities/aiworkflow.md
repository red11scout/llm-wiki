---
title: aiworkflow
kind: entity
summary: BlueAlly's step-2 pipeline app that imports assessment JSON from researchapp and runs a 10-step guided analysis workflow, producing structured output consumed by AI Architecture Studio; last committed 2026-05-13.
tags: [blueally, pipeline, workflow, deployed]
sources: 2
updated: 2026-05-21
---

aiworkflow is BlueAlly's step-2 pipeline application. It imports assessment JSON produced by [[researchapp]] (or [[researchapp-v2]]), runs a 10-step guided analysis workflow, and emits structured output consumed by [[ai-architecture-studio]]. It is the production successor to the archived [[workflow]] (Workflow Compass) prototype and the [[ai-catalyst]] platform.

## Overview

| Field | Value |
|---|---|
| Deployed | Yes |
| Last commit | 2026-05-13 |
| Pipeline step | 2 |

## Stack

[[shadcn-ui]] provides 20 UI components. Consumes JSON from step 1 and emits structured output to step 3.

## Pipeline Position

aiworkflow sits at step 2 of the [[blueally-pipeline]]:

1. **Step 1** — [[researchapp]] or [[smart-report-ai]] generate assessment JSON
2. **Step 2** — aiworkflow runs 10-step guided analysis on that JSON ← this app
3. **Step 3** — [[ai-architecture-studio]] consumes aiworkflow output to generate diagrams, PRDs, and financial models

## Lineage

aiworkflow is the direct production successor to [[workflow]] (Workflow Compass), which explored workflow orchestration patterns with [[anthropic-sdk]], [[neon]], and [[framer-motion]] before being archived in February 2026. [[ai-catalyst]] is a parallel predecessor that contributed the multi-agent pipeline pattern. [[cognoresearcher]] is an earlier strategic assessment prototype in the same lineage.

## Related

- [[workflow]] — Archived direct predecessor (Workflow Compass)
- [[ai-catalyst]] — Archived parallel predecessor; 8-agent pipeline
- [[researchapp]] — Step-1 source of assessment JSON
- [[ai-architecture-studio]] — Step-3 consumer of aiworkflow output
- [[blueally-pipeline]] — Full pipeline context
- [[aiworkflow-source]] — Source inventory page
