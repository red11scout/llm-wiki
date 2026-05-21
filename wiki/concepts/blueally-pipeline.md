---
title: BlueAlly Pipeline
kind: concept
summary: BlueAlly's multi-step AI delivery pipeline, progressing from workshop analysis through aiworkflow to AI Architecture Studio artifact generation.
tags: [blueally, pipeline, architecture]
sources: 4
updated: 2026-05-21
---

The BlueAlly Pipeline is the end-to-end AI delivery workflow BlueAlly uses to take a client from initial workshop analysis through to deployable technical and financial artifacts. It is distinct from BlueAlly's [[blueally-presentation-toolkit]], which handles executive communication rather than artifact generation.

## Stages

1. **Workshop analysis** — [[ai-catalyst]] (archived) was the original 8-agent pipeline platform for ingesting survey and research data. It consumed inputs from [[cognition-two]] and [[researchapp]].
2. **Structured output** — [[aiworkflow]] (successor to AI Catalyst) produces structured JSON output that encodes use-case analysis.
3. **Artifact generation** — [[ai-architecture-studio]] ingests the aiworkflow JSON and generates architecture diagrams (via [[react-flow]]), agentic workflows, PRDs (via [[claude-sonnet]]), and financial models (via [[hyperformula]] on [[neon]]).

## Hosting

Deployed apps in the pipeline are hosted under [[gofasterwithai]] (gofasterwithai.com). For example, AI Architecture Studio runs at builder.gofasterwithai.com.

## Related

- [[ai-catalyst]]
- [[aiworkflow]]
- [[ai-architecture-studio]]
- [[blueally-presentation-toolkit]]
- [[multi-agent-pipeline]]
- [[gofasterwithai]]
