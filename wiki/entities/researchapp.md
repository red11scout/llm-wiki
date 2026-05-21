---
title: ResearchApp
kind: entity
summary: Upstream BlueAlly data source at discover.movefasterwithai.com (smart-report-ai) that generates assessment JSON consumed by AI Workflow as step 1 input into the BlueAlly pipeline; a Next.js rewrite (researchapp-v2) is in active development as its planned replacement.
tags: [blueally, pipeline, assessment, active]
sources: 2
updated: 2026-05-21
---

ResearchApp is BlueAlly's live step-1 pipeline tool, deployed at `discover.movefasterwithai.com` (also known as `smart-report-ai`). It generates structured assessment JSON that is imported by [[aiworkflow]] (step 2) and ultimately feeds [[ai-architecture-studio]] (step 3). A full Next.js rewrite, [[researchapp-v2]], is in active development and is intended to eventually replace this app at the same URL.

## Pipeline role

ResearchApp is the entry point of the [[blueally-pipeline]]. Clients complete an AI strategic assessment here; the resulting JSON export is the primary input consumed by [[aiworkflow]] in the next stage.

## Successor

[[researchapp-v2]] is an active Next.js App Router rewrite of this platform. It maintains the same assessment capabilities and JSON export contract while modernising the architecture from Express/Vite to [[nextjs]] + [[zustand]], enabling direct [[vercel]] deployment. Until researchapp-v2 is promoted to production, this original app remains the live step-1 tool.

## Lineage

Earlier-generation assessment platforms in the same lineage include [[cognoresearcher]] (archived, last committed 2026-02-19) and, further back, the multi-agent survey pipeline in [[ai-catalyst]] (archived, last committed 2026-02-14).

## Related

- [[researchapp-v2]] — active Next.js rewrite; planned production replacement
- [[aiworkflow]] — step-2 consumer of the JSON this app produces
- [[blueally-pipeline]] — the full multi-step delivery pipeline
- [[cognoresearcher]] — archived predecessor platform
- [[ai-catalyst]] — earlier archived platform with 4-dimension survey system
