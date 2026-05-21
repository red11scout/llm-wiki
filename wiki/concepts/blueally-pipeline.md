---
title: BlueAlly Pipeline
kind: concept
summary: BlueAlly's multi-step AI delivery pipeline, progressing from workshop analysis through aiworkflow to AI Architecture Studio artifact generation, executive readout output, infrastructure sizing, and educational support via the AI Visual Intelligence Library.
tags: [blueally-ip, pipeline, architecture]
sources: 2
updated: 2026-05-21
---

The BlueAlly Pipeline is the end-to-end delivery system through which BlueAlly takes a client from initial AI use-case discovery through to polished executive artifacts and infrastructure recommendations. It is a multi-step, multi-tool flow where each app produces structured output consumed by the next.

## Pipeline stages

1. **Workshop analysis** — [[ai-catalyst]] (archived predecessor) → [[aiworkflow]] (current): ingests survey and research data, produces structured use-case JSON.
2. **Artifact generation** — [[ai-architecture-studio]]: consumes aiworkflow JSON, produces architecture diagrams, agentic workflow maps, PRDs, and financial models.
3. **Executive readout** — [[ai-executive-readout]]: generates polished executive-level reports from pipeline outputs.
4. **Infrastructure sizing** — [[ai-infra-sizing]]: right-sizes enterprise AI infrastructure using deterministic calculation with Claude as an advisor layer.
5. **Executive communication** — [[blueally-presentation-toolkit]]: web-native presentations and workshop experiences for delivering pipeline findings to clients.
6. **Education & literacy** — [[ai-visual-intelligence-library]]: provides foundational [[ai-literacy]] content so executives can interpret and act on pipeline outputs.

## Upstream data sources (AI Catalyst era)

- [[cognition-two]] — use-case cognition data
- [[researchapp]] — research data

## Hosting

Deployed apps are served under the [[gofasterwithai]] domain via [[vercel]].

## Related

- [[aiworkflow]] — current step-2 pipeline app
- [[ai-architecture-studio]] — step-3 artifact generator
- [[ai-executive-readout]] — downstream executive report generator
- [[ai-infra-sizing]] — infrastructure sizing tool
- [[blueally-presentation-toolkit]] — presentation layer
- [[ai-visual-intelligence-library]] — educational layer
- [[multi-agent-pipeline]] — architectural pattern used in the pipeline
