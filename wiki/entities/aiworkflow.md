---
title: aiworkflow
kind: entity
summary: Upstream BlueAlly pipeline app (step 2) that produces structured JSON output consumed by AI Architecture Studio; successor to AI Catalyst.
tags: [blueally-ip, pipeline]
sources: 2
updated: 2026-05-21
---

aiworkflow is the step-2 application in the [[blueally-pipeline]]. It produces structured JSON output that is consumed downstream by [[ai-architecture-studio]]. It is the direct successor to [[ai-catalyst]], inheriting and refining the multi-agent pipeline architecture and reconciled use case data model that AI Catalyst pioneered.

## Ecosystem role

- **Predecessor**: [[ai-catalyst]] — the earlier-generation workshop analysis platform that aiworkflow supersedes
- **Downstream consumer**: [[ai-architecture-studio]] — ingests aiworkflow JSON to generate architecture diagrams, PRDs, and financial models
- **Pipeline position**: step 2 of the [[blueally-pipeline]]

## Related

- [[blueally-pipeline]] — The broader multi-step delivery pipeline
- [[ai-architecture-studio]] — Step 3; consumes aiworkflow output
- [[ai-catalyst]] — Predecessor platform superseded by aiworkflow
- [[multi-agent-pipeline]] — Architectural pattern pioneered by AI Catalyst and carried forward
- [[ai-architecture-studio-source]] — Source inventory for the downstream consumer
