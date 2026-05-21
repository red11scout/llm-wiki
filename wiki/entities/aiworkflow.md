---
title: aiworkflow
kind: entity
summary: BlueAlly's step-2 pipeline app that imports assessment JSON from researchapp and runs a 10-step guided analysis workflow, producing structured output consumed by AI Architecture Studio; last committed 2026-05-13.
tags: [blueally, pipeline, workflow, active]
sources: 2
updated: 2026-05-21
---

aiworkflow is BlueAlly's step-2 pipeline application. It imports assessment JSON produced by [[researchapp]] (step 1) and guides users through a 10-step analysis workflow, producing structured output that is consumed downstream by [[ai-architecture-studio]] (step 3). It was last committed on 2026-05-13.

## Role in the BlueAlly pipeline

aiworkflow occupies the critical middle layer of the [[blueally-pipeline]], bridging raw assessment data from [[researchapp]] (or [[researchapp-v2]]) and the artifact-generation stage in [[ai-architecture-studio]]. Its 10-step guided analysis workflow is the direct evolution of patterns first explored in [[workflow]] (Workflow Compass) and earlier platforms including [[cognoresearcher]] and [[ai-catalyst]].

## Predecessor lineage

| Platform | Status | Role |
|---|---|---|
| [[cognition-two]] | archived | Earliest multi-agent pipeline prototype |
| [[ai-catalyst]] | archived | 8-agent pipeline and 4-dimension survey |
| [[cognoresearcher]] | archived | Combined cognitive analysis + research |
| [[workflow]] | archived | Workflow orchestration patterns, Claude SDK |
| **aiworkflow** | **active** | **10-step guided analysis workflow** |

## Technical stack

- **UI components**: [[shadcn-ui]] (20 components)
- **AI layer**: [[anthropic-sdk]]
- **Database**: [[neon]]

See [[aiworkflow-source]] for the full project inventory.

## Related

- [[researchapp]] — Step-1 source of assessment JSON
- [[researchapp-v2]] — Active Next.js rewrite of step 1
- [[ai-architecture-studio]] — Step-3 downstream consumer
- [[blueally-pipeline]] — Full pipeline overview
- [[workflow]] — Direct predecessor
- [[aiworkflow-source]] — Source inventory page
