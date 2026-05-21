---
title: BlueAlly Pipeline
kind: concept
summary: BlueAlly's multi-step AI delivery pipeline, progressing from top-of-funnel marketing through workshop analysis, aiworkflow, AI Architecture Studio artifact generation, executive readout, infrastructure sizing, and educational support.
tags: [blueally-ip, pipeline, architecture]
sources: 10
updated: 2026-05-21
---

The BlueAlly Pipeline is the end-to-end delivery system for BlueAlly's AI services, spanning from top-of-funnel prospect acquisition through structured workshop analysis, architecture generation, and executive reporting. Each stage is a discrete deployed application feeding the next.

## Pipeline stages

1. **Top-of-funnel**: [[aiwebsiteblueally-next]] (Next.js marketing site, replacing [[aiwebsiteblueally]]) drives prospects into the pipeline.
2. **Workshop analysis**: [[ai-catalyst]] (archived) → [[aiworkflow]] (active) — structured use-case analysis producing JSON output.
3. **Artifact generation**: [[ai-architecture-studio]] — ingests aiworkflow JSON, generates architecture diagrams, agentic workflows, PRDs, and financial models.
4. **Executive output**: [[ai-executive-readout]] — polished executive-level AI readout reports.
5. **Infrastructure sizing**: [[ai-infra-sizing]] — right-sizes enterprise AI infrastructure.
6. **Education & enablement**: [[ai-visual-intelligence-library]] — interactive AI concept education for executives.

## Supporting tools

- [[blueally-presentation-toolkit]] — web-native presentation suite (AI Executive Briefing, blueally-workshop-experience, blueally-presenting, AI Systems Presentation) used to communicate pipeline outputs.
- [[gofasterwithai]] — branded deployment domain for pipeline apps.

## Related

- [[multi-agent-pipeline]] — architectural pattern used within pipeline stages
- [[ai-literacy]] — capability the pipeline builds in client organizations
