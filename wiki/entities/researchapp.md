---
title: ResearchApp
kind: entity
summary: Upstream BlueAlly data source at discover.movefasterwithai.com (smart-report-ai) that generates assessment JSON consumed by AI Workflow as step 1 input into the BlueAlly pipeline.
tags: [blueally-pipeline, assessment, upstream]
sources: 2
updated: 2026-05-21
---

ResearchApp (also identified as smart-report-ai) is an upstream BlueAlly data source hosted at discover.movefasterwithai.com. It generates structured assessment JSON that is imported by [[aiworkflow]] as the starting payload for the 10-step guided analysis workflow, making it the effective entry point of the analytical portion of the [[blueally-pipeline]].

## Ecosystem role

ResearchApp feeds directly into [[aiworkflow]] (step 2 of the pipeline). The assessment JSON it produces represents the raw client data — survey responses, organizational signals — that aiworkflow then analyzes across themes, functions, friction, use cases, benefits, workflows, readiness, matrix, and dashboard stages.

## Integration details

- Hosted at: discover.movefasterwithai.com
- Also known as: smart-report-ai
- Output format: JSON (consumed by [[aiworkflow]] via Upload step)
- Originally also integrated by [[ai-catalyst]] (predecessor to aiworkflow)

## Related

- [[aiworkflow]] — primary downstream consumer
- [[ai-catalyst]] — legacy downstream consumer
- [[blueally-pipeline]] — pipeline context
- [[cognition-two]] — peer upstream data source (integrated by AI Catalyst)
