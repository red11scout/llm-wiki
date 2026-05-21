---
title: BlueAlly Pipeline
kind: concept
summary: BlueAlly's multi-step AI delivery pipeline, progressing from workshop analysis through aiworkflow to AI Architecture Studio artifact generation, executive readout output, and infrastructure sizing.
tags: [blueally, pipeline, architecture, delivery]
sources: 7
updated: 2026-05-21
---

The BlueAlly Pipeline is the end-to-end AI delivery workflow BlueAlly uses to take enterprise clients from initial AI opportunity discovery through to concrete, deployed artifacts. It is composed of a sequence of specialized tools, each consuming outputs from the prior step.

## Pipeline stages

1. **Workshop & discovery** — [[ai-catalyst]] (archived predecessor) / [[aiworkflow]] captures use-case data and produces structured JSON
2. **Architecture generation** — [[ai-architecture-studio]] ingests the aiworkflow JSON and generates architecture diagrams, agentic workflows, PRDs, and financial models
3. **Executive readout** — [[ai-executive-readout]] takes pipeline outputs and produces polished executive-level reports
4. **Infrastructure sizing** — [[ai-infra-sizing]] translates identified AI deployments into concrete hardware and cloud infrastructure sizing recommendations

## Supporting tools

- [[blueally-presentation-toolkit]] — web-native presentation layer used at workshop and readout stages
- [[a-e-global-media]] — example client engagement delivered through the pipeline

## Design patterns

A recurring pattern across pipeline tools is the use of a **deterministic engine paired with an LLM advisor layer**: [[ai-architecture-studio]] uses [[hyperformula]] for financial calculations while [[ai-infra-sizing]] uses its own deterministic sizing engine — in both cases Claude (via [[anthropic-sdk]]) provides advisory narrative rather than owning quantitative outputs.

## Related

- [[aiworkflow]]
- [[ai-catalyst]]
- [[ai-architecture-studio]]
- [[ai-executive-readout]]
- [[ai-infra-sizing]]
- [[blueally-presentation-toolkit]]
- [[multi-agent-pipeline]]
