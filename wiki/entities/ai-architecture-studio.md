---
title: AI Architecture Studio
kind: entity
summary: Deployed BlueAlly pipeline app (step 3) that ingests aiworkflow JSON and generates architecture diagrams, agentic workflows, PRDs, and financial models.
tags: [blueally, pipeline, architecture, deployed, active]
sources: 2
updated: 2026-05-21
---

AI Architecture Studio is a deployed BlueAlly pipeline application (step 3) hosted on [[gofasterwithai]] at `builder.gofasterwithai.com`. It consumes structured JSON output from [[aiworkflow]] and generates architecture diagrams, agentic workflows, Product Requirements Documents (PRDs), and financial models for enterprise AI programmes.

## Technical stack

- **Diagrams**: [[react-flow]] with Dagre layout for 3-layer architecture rendering
- **PRD generation**: [[claude-sonnet]] (Anthropic LLM)
- **Financial calculations**: [[hyperformula]] (deterministic spreadsheet engine)
- **Database**: [[neon]] (serverless Postgres)

## Role in the BlueAlly ecosystem

AI Architecture Studio sits at step 3 of the [[blueally-pipeline]], transforming the analysis output from [[aiworkflow]] into concrete technical and financial artefacts. Its technical outputs are complemented by [[atlas]], which provides the investment intelligence, infrastructure Bills of Materials, and ROI analysis needed to build full business cases.

## Related

- [[ai-architecture-studio-source]] — Source inventory page
- [[aiworkflow]] — Upstream step-2 analysis app whose JSON this tool consumes
- [[atlas]] — Downstream investment intelligence platform that complements these outputs
- [[blueally-pipeline]] — Pipeline context
- [[react-flow]] — Diagram rendering library
- [[claude-sonnet]] — LLM used for PRD generation
- [[hyperformula]] — Financial calculation engine
- [[neon]] — Database layer
- [[gofasterwithai]] — Hosting domain
