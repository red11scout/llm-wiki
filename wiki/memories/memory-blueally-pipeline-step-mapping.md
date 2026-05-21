---
title: BlueAlly Pipeline Has Mapped Step Assignments with Some Ambiguity at Step 1
kind: concept
summary: The BlueAlly 3-step pipeline maps researchapp/smart-report-ai to step 1, aiworkflow to step 2, and AI Architecture Studio to step 3, with step 1 having two competing tools.
tags: [memory, blueally, pipeline, architecture, step-mapping, researchapp, aiworkflow]
sources: 0
updated: 2026-05-21
---

The [[blueally-pipeline]] has explicit step numbering: [[researchapp]] and [[smart-report-ai]] both occupy step 1 (assessment/intake), [[aiworkflow]] is step 2 (10-step guided analysis), and [[ai-architecture-studio]] is step 3 (artifact generation — diagrams, PRDs, financial models). Having two tools at step 1 ([[researchapp]] original + [[researchapp-v2]] rewrite, plus [[smart-report-ai]] as a parallel approach) suggests step 1 is the most actively iterated part of the pipeline. Downstream from step 3, [[ai-executive-readout]], [[ai-infra-sizing]], [[atlas]], and [[blueally-microsites]] serve as output/delivery layers.