---
title: BlueAlly Pipeline
kind: concept
summary: BlueAlly's multi-step AI delivery pipeline, progressing from top-of-funnel marketing through workshop analysis, aiworkflow, AI Architecture Studio artifact generation, executive readout, infrastructure sizing, investment intelligence, educational support, customer portal, and client delivery via BlueAlly Microsites.
tags: [blueally, pipeline, architecture]
sources: 2
updated: 2026-05-21
---

The BlueAlly Pipeline is the end-to-end sequence of tools, platforms, and deliverables that BlueAlly uses to take an enterprise client from initial AI awareness through to deployed, quantified AI strategy artifacts. Each step produces structured output consumed by the next.

## Pipeline steps

1. **Assessment / Discovery** — [[researchapp]] (live) or its in-development successor [[researchapp-v2]] at `discover.movefasterwithai.com`. Produces structured assessment JSON.
2. **Guided Analysis** — [[aiworkflow]] imports the assessment JSON and runs a 10-step guided analysis workflow, producing structured output.
3. **Artifact Generation** — [[ai-architecture-studio]] ingests aiworkflow JSON and generates architecture diagrams, agentic workflows, PRDs, and financial models.
4. **Executive Readout** — [[ai-executive-readout]] generates polished executive-level AI readout reports from the artifacts.
5. **Infrastructure Sizing** — [[ai-infra-sizing]] right-sizes enterprise AI infrastructure using deterministic calculation.
6. **Investment Intelligence** — [[atlas]] provides token usage projections, Private AI Bills of Materials, and ROI analysis.
7. **Educational Support** — [[ai-visual-intelligence-library]] and related tools provide AI literacy support.
8. **Customer Portal** — [[blueally-customer-portal]] (planned) tracks each organisation's progress through the [[blueally-framework-journey]].
9. **Client Delivery** — [[blueally-microsites]] provides a password-protected multi-tenant portal linking clients to all generated artifacts.

## Top-of-funnel

[[aiwebsiteblueally]] (currently live) and its planned Next.js replacement [[aiwebsiteblueally-next]] serve as the marketing entry point into the pipeline.

## Presentation toolkit

The [[blueally-presentation-toolkit]] — including [[ai-executive-briefing]], [[blueally-workshop-experience]], [[blueally-presenting]], and related tools — supports the workshop and delivery phases of the pipeline.

## Related

- [[researchapp]] — current step-1 assessment tool
- [[researchapp-v2]] — active Next.js rewrite of step 1
- [[aiworkflow]] — step-2 guided analysis
- [[ai-architecture-studio]] — step-3 artifact generation
- [[blueally-microsites]] — step-9 client delivery portal
- [[gofasterwithai]] — branded domain hosting several pipeline apps
