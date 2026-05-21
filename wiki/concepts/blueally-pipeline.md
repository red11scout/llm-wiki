---
title: BlueAlly Pipeline
kind: concept
summary: BlueAlly's multi-step AI delivery pipeline, progressing from workshop analysis through aiworkflow to AI Architecture Studio artifact generation.
tags: [blueally, pipeline, delivery]
sources: 2
updated: 2026-05-21
---

The BlueAlly Pipeline is the end-to-end AI delivery workflow BlueAlly uses to take a client engagement from raw workshop analysis through to deployable artifacts. It is a multi-step process anchored by two pipeline apps and a workshop delivery practice.

## Pipeline steps

1. **Workshop / analysis** — BlueAlly conducts client workshops (e.g. the [[a-e-global-media]] AI capacity workshop) and captures use-case findings. Custom deliverables such as standalone HTML executive presentations may be produced at this stage.
2. **[[aiworkflow]]** — Step 2 app that processes workshop findings and produces structured JSON output.
3. **[[ai-architecture-studio]]** — Step 3 app that ingests the aiworkflow JSON and generates architecture diagrams, agentic workflows, PRDs, and financial models.

## Ecosystem boundaries

Not all BlueAlly client work runs through the full pipeline. External client deliverables — such as the standalone HTML presentation built for [[a-e-global-media]] — sit adjacent to the core SaaS ecosystem and represent the workshop delivery practice independently of the step 2/3 apps.

## Related

- [[aiworkflow]] — Step 2 pipeline app
- [[ai-architecture-studio]] — Step 3 pipeline app
- [[a-e-global-media]] — Client whose workshop deliverable illustrates the workshop delivery practice
- [[gofasterwithai]] — Domain hosting the deployed pipeline apps
