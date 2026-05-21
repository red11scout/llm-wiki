---
title: AI Workflow
kind: entity
summary: BlueAlly's step-2 pipeline app that imports assessment JSON from researchapp and runs a 10-step guided analysis workflow, producing structured output consumed by AI Architecture Studio; last committed 2026-05-13.
tags: [blueally, pipeline, workflow, deployed]
sources: 2
updated: 2026-05-21
---

AI Workflow is BlueAlly's step-2 pipeline application. It imports the assessment JSON produced by [[researchapp]] and runs a structured 10-step guided analysis workflow, producing the output artifact consumed by [[ai-architecture-studio]] in step 3. It uses [[shadcn-ui]] for its 20 UI components and was last committed 2026-05-13.

## Ecosystem role

AI Workflow occupies the analytical core of the [[blueally-pipeline]], transforming raw assessment data into structured, actionable output. Its guided cognitive analysis capability traces back to [[cognoresearcher]], an archived early-generation platform that explored combining cognitive analysis with strategic research before the concerns were separated into discrete pipeline steps.

## Technical details

- **UI components**: [[shadcn-ui]] (20 components)
- **Upstream input**: assessment JSON from [[researchapp]]
- **Downstream output**: structured JSON consumed by [[ai-architecture-studio]]
- **Last committed**: 2026-05-13

## Related

- [[aiworkflow-source]] — raw project inventory
- [[blueally-pipeline]] — end-to-end pipeline context
- [[researchapp]] — step-1 upstream data source
- [[ai-architecture-studio]] — step-3 downstream consumer
- [[cognoresearcher]] — archived predecessor whose cognitive analysis capabilities were absorbed here
- [[ai-catalyst]] — contemporaneous archived assessment platform
