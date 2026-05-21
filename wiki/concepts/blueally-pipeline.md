---
title: BlueAlly Pipeline
kind: concept
summary: BlueAlly's multi-step AI delivery pipeline, progressing from top-of-funnel marketing through workshop analysis, aiworkflow, AI Architecture Studio artifact generation, executive readout, infrastructure sizing, and educational support.
tags: [blueally-ip, pipeline, delivery]
sources: 3
updated: 2026-05-21
---

The BlueAlly Pipeline is the end-to-end AI delivery system BlueAlly uses to take enterprise clients from initial engagement through fully realized AI strategy artifacts. Each step is a discrete application or platform, with structured data flowing downstream from one to the next.

## Pipeline steps

1. **Top-of-funnel** — [[aiwebsiteblueally]] / [[aiwebsiteblueally-next]] (marketing and intake)
2. **Assessment** — [[researchapp]] at discover.movefasterwithai.com (generates assessment JSON)
3. **Workflow analysis** — [[aiworkflow]] (10-step guided analysis; imports assessment JSON, produces structured output)
4. **Artifact generation** — [[ai-architecture-studio]] (consumes aiworkflow JSON; generates architecture diagrams, agentic workflows, PRDs, financial models)
5. **Executive readout** — [[ai-executive-readout]] (polished executive-level reports)
6. **Infrastructure sizing** — [[ai-infra-sizing]] (enterprise AI infrastructure right-sizing)
7. **Education & enablement** — [[ai-visual-intelligence-library]] (AI literacy platform)

## Presentation layer

The [[blueally-presentation-toolkit]] (including [[ai-executive-briefing]], [[blueally-workshop-experience]], [[blueally-presenting]], and [[ai-systems-presentation]]) supports client-facing delivery at multiple pipeline stages.

## Key data flows

- [[researchapp]] → JSON → [[aiworkflow]] → structured output → [[ai-architecture-studio]]
- [[ai-architecture-studio]] → artifacts → [[ai-executive-readout]]

## Historical note

[[ai-catalyst]] was the predecessor to [[aiworkflow]] at step 2, featuring an 8-agent pipeline and 4-dimension survey system; archived as of 2026-02-14.

## Related

- [[multi-agent-pipeline]]
- [[aiworkflow-source]], [[ai-architecture-studio-source]], [[ai-catalyst-source]]
