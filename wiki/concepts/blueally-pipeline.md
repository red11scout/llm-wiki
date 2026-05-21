---
title: BlueAlly Pipeline
kind: concept
summary: BlueAlly's multi-step AI delivery pipeline, progressing from top-of-funnel marketing through workshop analysis, aiworkflow, AI Architecture Studio artifact generation, executive readout, infrastructure sizing, investment intelligence, and educational support.
tags: [blueally, pipeline, architecture]
sources: 12
updated: 2026-05-21
---

The BlueAlly Pipeline is the end-to-end multi-step delivery system BlueAlly uses to take enterprises from initial AI interest through to fully costed, architecturally specified, and executive-ready AI programmes. Each step produces structured output consumed by the next.

## Pipeline steps

1. **Top-of-funnel** — [[aiwebsiteblueally]] (and its Next.js rewrite [[aiwebsiteblueally-next]]) captures inbound interest.
2. **Assessment** — [[researchapp]] (`discover.movefasterwithai.com`) runs a discovery survey and emits structured assessment JSON.
3. **Analysis workflow** — [[aiworkflow]] imports that JSON and runs a 10-step guided analysis, producing structured output.
4. **Architecture generation** — [[ai-architecture-studio]] consumes aiworkflow output to generate architecture diagrams, agentic workflows, PRDs, and financial models.
5. **Investment intelligence** — [[atlas]] provides token usage projections, Private AI infrastructure Bills of Materials, and ROI analysis, complementing the technical outputs from AI Architecture Studio with financial business-case modeling.
6. **Executive readout** — [[ai-executive-readout]] generates polished executive-level reports from pipeline outputs.
7. **Infrastructure sizing** — [[ai-infra-sizing]] right-sizes enterprise AI infrastructure using a deterministic calculation engine and Claude as an advisor layer.
8. **Executive education** — [[ai-visual-intelligence-library]] and [[ai-executive-briefing]] support AI literacy and executive communication throughout the engagement.

## Presentation toolkit

The [[blueally-presentation-toolkit]] (AI Executive Briefing, [[blueally-workshop-experience]], [[blueally-presenting]], [[ai-systems-presentation]]) provides web-native presentation infrastructure used at multiple pipeline stages.

## Historical note

[[ai-catalyst]] was the predecessor workshop analysis platform (8-agent pipeline, 4-dimension survey) before being superseded by aiworkflow.

## Related

- [[aiworkflow]] — Step 2 analysis app
- [[ai-architecture-studio]] — Step 3 architecture generation
- [[atlas]] — Investment intelligence and ROI analysis layer
- [[researchapp]] — Step 1 assessment
- [[ai-executive-readout]] — Executive report generation
- [[ai-infra-sizing]] — Infrastructure sizing
- [[blueally-presentation-toolkit]] — Presentation tools
- [[ai-visual-intelligence-library]] — Executive education
