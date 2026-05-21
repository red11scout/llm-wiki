---
title: ResearchApp
kind: entity
summary: Upstream BlueAlly data source at discover.movefasterwithai.com (smart-report-ai) that generates assessment JSON consumed by AI Workflow as step 1 input into the BlueAlly pipeline.
tags: [blueally, pipeline, assessment]
sources: 2
updated: 2026-05-21
---

ResearchApp is the step-1 upstream tool in the [[blueally-pipeline]], deployed at `discover.movefasterwithai.com` (also known as `smart-report-ai`). It generates structured assessment JSON that is consumed by [[aiworkflow]] as the entry point into the guided analysis pipeline.

## Ecosystem role

ResearchApp is the first formal step in the BlueAlly pipeline, producing the assessment JSON artifact that drives all downstream stages. Its research and assessment capabilities trace conceptually back to [[cognoresearcher]], an archived earlier-generation platform that combined cognitive analysis with strategic research before those concerns were separated into discrete pipeline steps.

## Related

- [[blueally-pipeline]] — end-to-end pipeline that ResearchApp feeds as step 1
- [[aiworkflow]] — step-2 consumer of ResearchApp's assessment JSON output
- [[cognoresearcher]] — archived predecessor whose research capabilities were absorbed here
- [[ai-architecture-studio]] — step-3 downstream tool in the same pipeline
