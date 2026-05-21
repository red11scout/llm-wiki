---
title: BlueAlly Pipeline
kind: concept
summary: BlueAlly's multi-step AI delivery pipeline, progressing from top-of-funnel marketing through workshop analysis, aiworkflow, AI Architecture Studio artifact generation, executive readout, infrastructure sizing, investment intelligence, and educational support.
tags: [blueally, pipeline, architecture, delivery]
sources: 14
updated: 2026-05-21
---

The BlueAlly Pipeline is the end-to-end delivery system BlueAlly uses to take enterprise clients from initial AI opportunity discovery through structured analysis, solution selection, architecture design, executive reporting, and ongoing education. Each stage is a distinct deployed application that passes structured data to the next.

## Pipeline stages

1. **Top-of-funnel marketing** — [[aiwebsiteblueally]] / [[aiwebsiteblueally-next]]: entry point; planned replacement underway.
2. **Assessment & discovery** — [[researchapp]] (`discover.movefasterwithai.com`): generates assessment JSON as step-1 input.
3. **Guided analysis** — [[aiworkflow]]: step-2 app that runs a 10-step workflow on imported assessment JSON, producing structured output.
4. **Solution selection** — [[blueally-ai-solution-navigator]]: decision-support tool that bridges opportunity identification to technical architecture, using Claude to guide enterprises toward the right AI solutions.
5. **Architecture generation** — [[ai-architecture-studio]]: step-3 app that ingests aiworkflow JSON and generates architecture diagrams, agentic workflows, PRDs, and financial models.
6. **Executive readout** — [[ai-executive-readout]]: generates polished executive-level AI readout reports.
7. **Infrastructure sizing** — [[ai-infra-sizing]]: right-sizes enterprise AI infrastructure using deterministic calculation with Claude as advisor.
8. **Investment intelligence** — [[atlas]]: provides token usage projections, Private AI BoMs, and ROI analysis.
9. **Executive education** — [[ai-visual-intelligence-library]]: interactive platform for AI literacy with animated explainers and a Claude-grounded Ask drawer.

## Supporting tools

- [[blueally-ai-app]] — Field-CTO partner tool for framing AI use cases and generating consulting briefs.
- [[blueally-presentation-toolkit]] — Suite of web-native presentation tools used to deliver findings to clients.

## Predecessor

[[ai-catalyst]] was the original workshop analysis platform (8-agent pipeline, 4-dimension survey) before being superseded by [[aiworkflow]].

## Related

- [[consulting-brief]] — Primary output artifact of BlueAlly AI App
- [[multi-agent-pipeline]] — Architectural pattern pioneered in AI Catalyst
- [[ai-literacy]] — Foundational concept supported by the educational layer
- [[gofasterwithai]] — Branded domain hosting key pipeline apps
