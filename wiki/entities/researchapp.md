---
title: ResearchApp
kind: entity
summary: BlueAlly's original Express/Vite AI Strategic Assessment Platform deployed at discover.movefasterwithai.com; step-1 pipeline entry point generating assessment JSON consumed by aiworkflow; last committed 2026-02-23.
tags: [blueally-pipeline, assessment, deployed]
sources: 2
updated: 2026-05-21
---

ResearchApp is BlueAlly's original step-1 AI Strategic Assessment Platform, built on [[express]] and [[vite]], deployed at discover.movefasterwithai.com on [[replit]]. It generates assessment JSON that is consumed by [[aiworkflow]] for deeper guided analysis and subsequently by [[ai-architecture-studio]] for technical artifact generation.

> **Note**: [[smart-report-ai]] also co-occupies the step-1 pipeline position and is also deployed at discover.movefasterwithai.com. The exact relationship between the two apps at that URL is flagged for human review — see `needs-review.md`.

## Technical stack

- **Framework**: [[express]] (back-end), [[vite]] (front-end bundler)
- **Hosting**: [[replit]] at discover.movefasterwithai.com
- **Last commit**: 2026-02-23
- **Status**: Deployed

## Ecosystem role

ResearchApp is the step-1 entry point of the [[blueally-pipeline]], alongside [[smart-report-ai]] (also step 1) and [[researchapp-v2]] (the active Next.js rewrite planned to replace it). Its assessment JSON output flows into [[aiworkflow]] (step 2) and then into [[ai-architecture-studio]] (step 3).

## Related

- [[researchapp-v2]] — Active Next.js rewrite planned to replace this app
- [[smart-report-ai]] — Co-occupant of step-1 pipeline position at the same deployment URL
- [[aiworkflow]] — Downstream step-2 consumer of ResearchApp JSON
- [[ai-architecture-studio]] — Step-3 consumer of aiworkflow output
- [[blueally-pipeline]] — The multi-step delivery pipeline this tool anchors
- [[researchapp-source]] — Raw project inventory for this app
