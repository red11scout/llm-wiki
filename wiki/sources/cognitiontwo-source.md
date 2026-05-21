---
title: CognitionTwo — Project Inventory
kind: source
summary: Project inventory for CognitionTwo, a deployed multi-agent cognitive analysis platform on Replit that pioneered the multi-agent architecture pattern later adopted by AI Catalyst and aiworkflow; last committed 2026-02-10.
tags: [blueally, multi-agent, cognitive-analysis, replit, archived]
sources: 1
updated: 2026-05-21
---

---
title: CognitionTwo — Project Inventory
kind: source
summary: Project inventory for CognitionTwo, a deployed multi-agent cognitive analysis platform on Replit that pioneered the multi-agent architecture pattern later adopted by AI Catalyst and aiworkflow; last committed 2026-02-10.
tags: [blueally, multi-agent, cognitive-analysis, replit, archived]
sources: 1
updated: 2026-05-21
---

Project inventory captured from local filesystem survey on 2026-05-21.

## Key Facts

| Field | Value |
|---|---|
| Directory | `/Users/drewgodwin/cognitiontwo/` |
| GitHub | https://github.com/red11scout/cognitiontwo |
| Deployed URL | cognitive-analyis-with-claude.replit.app |
| Status | Deployed (Replit) |
| Last commit | 2026-02-10 |

## Stack

[[react]], [[vite]], [[express]], [[tailwindcss]], [[drizzle-orm]], [[neon]], [[anthropic-sdk]], [[framer-motion]].

## Description

[[cognition-two]] is a multi-agent cognitive analysis platform featuring four agents:
- **Document Agent** — ingests and processes source documents
- **Strategy Agent** — runs in parallel with the Financial Agent
- **Financial Agent** — runs in parallel with the Strategy Agent
- **Orchestrator Agent** — coordinates the parallel agent outputs

It uses [[drizzle-orm]] with `.returning()` on inserts for verification, BlueAlly brand colors, and [[framer-motion]] animations.

## Ecosystem Role

CognitionTwo is the earliest-generation multi-agent analysis platform in the [[blueally-pipeline]]. Its data model and agent architecture were combined with [[researchapp]] data in the [[ai-catalyst]] project. AI Catalyst was itself later superseded by [[aiworkflow]]. CognitionTwo remains deployed on Replit as a reference implementation of the [[multi-agent-pipeline]] pattern.

See [[ai-catalyst-source]] for the successor project that incorporated this architecture.

## Related

- [[cognition-two]] — Entity page for CognitionTwo
- [[multi-agent-pipeline]] — The architectural pattern pioneered here
- [[ai-catalyst]] — Direct successor project
- [[aiworkflow]] — Current pipeline successor (step 2)
- [[blueally-pipeline]] — Full pipeline context
