---
title: CognitionTwo
kind: entity
summary: Deployed BlueAlly multi-agent cognitive analysis platform on Replit; earliest-generation implementation of the multi-agent pipeline pattern, predecessor to AI Catalyst; last committed 2026-02-10.
tags: [blueally, multi-agent, cognitive-analysis, replit, deployed]
sources: 1
updated: 2026-05-21
needsReview: former summary described this as a data source; new source clarifies it is a full platform whose architecture (not data) fed AI Catalyst
---

CognitionTwo (`cognitive-analyis-with-claude.replit.app`) is the earliest-generation multi-agent analysis platform in the BlueAlly ecosystem. It pioneered the [[multi-agent-pipeline]] architectural pattern that was later carried forward by [[ai-catalyst]] and ultimately [[aiworkflow]].

## Architecture

The platform fields four agents:

- **Document Agent** — ingests and parses source documents
- **Strategy Agent** — produces strategic analysis (runs in parallel with Financial)
- **Financial Agent** — produces financial analysis (runs in parallel with Strategy)
- **Orchestrator Agent** — coordinates and synthesizes parallel agent outputs

This parallel Strategy + Financial agent pattern, coordinated by an Orchestrator, established the multi-agent design vocabulary reused in [[ai-catalyst]].

## Stack

[[react]], [[vite]], [[express]], [[tailwindcss]], [[drizzle-orm]], [[neon]], [[anthropic-sdk]], [[framer-motion]].

Notable implementation detail: [[drizzle-orm]] is used with `.returning()` on inserts for insert verification — a pattern seen in other BlueAlly apps.

## Ecosystem Role

CognitionTwo sits at the origin of the [[blueally-pipeline]] multi-agent lineage:

1. **CognitionTwo** — pioneered the agent architecture (this project)
2. [[ai-catalyst]] — combined CognitionTwo's architecture with [[researchapp]] data; added 8-agent pipeline and 4-dimension survey; last committed 2026-02-14
3. [[aiworkflow]] — current step-2 pipeline app, superseding AI Catalyst; last committed 2026-05-13

CognitionTwo remains deployed on Replit as a reference implementation.

## Deployment

- **URL**: cognitive-analyis-with-claude.replit.app
- **Host**: Replit
- **Status**: Deployed
- **Last commit**: 2026-02-10
- **GitHub**: https://github.com/red11scout/cognitiontwo

## Related

- [[cognitiontwo-source]] — Source inventory page
- [[multi-agent-pipeline]] — Architectural pattern introduced here
- [[ai-catalyst]] — Direct successor
- [[aiworkflow]] — Current generation successor
- [[blueally-pipeline]] — Full pipeline context
- [[researchapp]] — Data source integrated in AI Catalyst
