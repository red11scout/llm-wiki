---
title: BlueAlly Pipeline
kind: concept
summary: BlueAlly's multi-step AI delivery pipeline, progressing from top-of-funnel marketing through workshop analysis, aiworkflow, AI Architecture Studio artifact generation, executive readout, infrastructure sizing, investment intelligence, educational support, customer portal, and client delivery via BlueAlly Microsites.
tags: [blueally, pipeline, architecture]
sources: 2
updated: 2026-05-21
---

The BlueAlly Pipeline is the end-to-end delivery system through which BlueAlly takes a prospective enterprise client from first awareness through to a complete AI transformation engagement. Each step is a distinct deployed application, with structured data (primarily JSON) flowing downstream between steps.

## Pipeline stages

| Step | App | Role |
|---|---|---|
| 0 — Top of funnel | [[aiwebsiteblueally]] | Marketing website; 14-section homepage, 14 industry reports, Claude chat widget via [[sse-streaming]] |
| 1 — Assessment | [[researchapp]] | Generates assessment JSON from a custom client discovery process |
| 2 — Analysis | [[aiworkflow]] | Imports assessment JSON; runs 10-step guided analysis workflow |
| 3 — Artifact generation | [[ai-architecture-studio]] | Consumes aiworkflow JSON; produces architecture diagrams, agentic workflow maps, PRDs, and financial models |
| 4 — Executive readout | [[ai-executive-readout]] | Generates polished executive-level readout reports |
| 5 — Infrastructure sizing | [[ai-infra-sizing]] | Right-sizes enterprise AI infrastructure |
| 6 — Investment intelligence | [[atlas]] | Token usage projections, Private AI BoMs, and ROI analysis |
| 7 — Education | [[ai-visual-intelligence-library]] | Interactive executive education on AI concepts |
| 8 — Customer portal | [[blueally-customer-portal]] | Tracks 8-part AI transformation journey (planned) |
| 9 — Client delivery | [[blueally-microsites]] | Multi-tenant password-protected portal linking clients to all artifacts |

## Top-of-funnel detail

[[aiwebsiteblueally]] (currently hosted on [[replit]]) serves as the entry gate. Its 14 industry-report pages include CTAs linking directly to [[researchapp]], bridging marketing content to the custom assessment flow. This site is being replaced by [[aiwebsiteblueally-next]] on [[vercel]] with [[payload-cms]] for content management.

## Supporting tools

Several tools operate alongside the pipeline rather than in a strict sequence:

- [[compass]] — forensic AI opportunity research for CFOs
- [[blueally-ai-app]] — field-CTO use-case framing and consulting brief generation
- [[blueally-ai-solution-navigator]] — AI solution selection decision support
- [[blueally-private-ai-investment-planner]] — private AI infrastructure financial modeling
- [[blueally-portal]] — authenticated workshop participant access

## Related

- [[blueally-framework-journey]] — the 8-part transformation model tracked by the customer portal
- [[multi-agent-pipeline]] — architectural pattern used within several pipeline steps
- [[deterministic-scoring]] — scoring approach used in multiple steps for auditability
