---
title: BlueAlly Pipeline
kind: concept
summary: BlueAlly's multi-step AI delivery pipeline, progressing from workshop analysis through aiworkflow to AI Architecture Studio artifact generation.
tags: [blueally-ip, pipeline, architecture]
sources: 4
updated: 2026-05-21
---

The BlueAlly Pipeline is the end-to-end delivery system BlueAlly uses to take an AI use-case workshop through structured analysis and into deployable artifacts. It currently has at least three documented steps, with historical roots in the [[ai-catalyst]] platform.

## Pipeline steps

| Step | App | Role |
|---|---|---|
| 0 (historical) | [[ai-catalyst]] | Archived predecessor; pioneered multi-agent pipeline and reconciled use case data model |
| 2 | [[aiworkflow]] | Produces structured JSON from workshop analysis |
| 3 | [[ai-architecture-studio]] | Consumes aiworkflow JSON; generates diagrams, PRDs, financial models |

## Architectural lineage

[[ai-catalyst]] pioneered the [[multi-agent-pipeline]] pattern — an 8-agent directed graph with sequential and parallel stages — that directly influenced aiworkflow's design. The reconciled use case data model that AI Catalyst established (combining [[researchapp]] and [[cognition-two]] data) carried forward into the current pipeline.

## Client deliverables

The pipeline has been applied for clients including [[a-e-global-media]], producing static HTML executive microsites as workshop artifacts (see [[ae-ai-workshop-source]], [[aegm-workshop-source]]).

## Related

- [[ai-catalyst]] — Historical step 0; now archived
- [[aiworkflow]] — Step 2
- [[ai-architecture-studio]] — Step 3
- [[multi-agent-pipeline]] — Core architectural concept
- [[a-e-global-media]] — Client example
