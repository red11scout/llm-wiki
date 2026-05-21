---
title: BlueAlly Pipeline
kind: concept
summary: BlueAlly's multi-step AI delivery pipeline, progressing from top-of-funnel marketing through workshop analysis, aiworkflow, AI Architecture Studio artifact generation, executive readout, infrastructure sizing, investment intelligence, educational support, customer portal, and client delivery via BlueAlly Microsites.
tags: [blueally-pipeline, architecture, consulting]
sources: 2
updated: 2026-05-21
---

The BlueAlly Pipeline is the end-to-end multi-step AI delivery process that takes a prospective enterprise client from initial discovery through structured assessment, analysis, technical artifact generation, executive reporting, and ongoing enablement. Each step is operationalized by one or more deployed applications.

## Pipeline steps

| Step | App(s) | Role |
|---|---|---|
| Top-of-funnel | [[aiwebsiteblueally]], [[aiwebsiteblueally-next]] | Marketing entry point |
| Step 1 — Assessment | [[researchapp]], [[smart-report-ai]], [[researchapp-v2]] | AI strategic assessment; generates JSON output |
| Step 2 — Analysis | [[aiworkflow]] | 10-step guided analysis on assessment JSON |
| Step 3 — Artifacts | [[ai-architecture-studio]] | Architecture diagrams, PRDs, financial models |
| Executive reporting | [[ai-executive-readout]] | Polished executive-level AI readout reports |
| Infrastructure sizing | [[ai-infra-sizing]] | Right-sizes enterprise AI infrastructure |
| Investment intelligence | [[atlas]], [[compass]] | Token projections, BoMs, ROI, forensic opportunity analysis |
| Education | [[ai-visual-intelligence-library]] | Interactive executive AI concept education |
| Customer portal | [[blueally-customer-portal]] | Tracks 8-part [[blueally-framework-journey]] |
| Client delivery | [[blueally-microsites]] | Password-protected multi-tenant artifact portal |

> **Step-1 note**: [[researchapp]] and [[smart-report-ai]] both co-occupy step 1 and are both deployed at discover.movefasterwithai.com; their exact relationship is flagged for human review.

## Key data flows

- Step-1 apps ([[researchapp]] / [[smart-report-ai]]) → assessment JSON → [[aiworkflow]]
- [[aiworkflow]] → structured output → [[ai-architecture-studio]]
- [[ai-architecture-studio]] → artifacts → [[ai-executive-readout]], [[blueally-microsites]]

## Related

- [[blueally-framework-journey]] — 8-part transformation framework tracked by the customer portal
- [[multi-agent-pipeline]] — Architectural pattern used within several pipeline apps
- [[deterministic-scoring]] — Scoring pattern used in pipeline assessment tools
- [[consulting-brief]] — Key output artifact of [[blueally-ai-app]], adjacent to the pipeline
