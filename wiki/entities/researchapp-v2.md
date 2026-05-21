---
title: ResearchApp v2
kind: entity
summary: Active Next.js rewrite of BlueAlly's AI Strategic Assessment Platform, modernising from Express/Vite to Next.js App Router with Zustand; planned replacement for researchapp at step 1 of the BlueAlly pipeline; last committed 2026-02-16.
tags: [blueally, pipeline, assessment, nextjs, active]
sources: 1
updated: 2026-05-21
---

---
title: ResearchApp v2
kind: entity
summary: Active Next.js rewrite of BlueAlly's AI Strategic Assessment Platform, modernising from Express/Vite to Next.js App Router with Zustand; planned replacement for researchapp at step 1 of the BlueAlly pipeline; last committed 2026-02-16.
tags: [blueally, pipeline, assessment, nextjs, active]
sources: 1
updated: 2026-05-21
---

ResearchApp v2 is BlueAlly's active Next.js rewrite of the AI Strategic Assessment Platform, succeeding the original [[researchapp]] (which runs on Express and Vite). It preserves all assessment capabilities and the structured JSON export that feeds step 2 of the [[blueally-pipeline]], while modernising the architecture for [[vercel]] deployment and improved developer experience.

## Status

- **Deployed**: researchapp-v2.vercel.app
- **GitHub**: https://github.com/red11scout/researchapp-v2
- **Status**: active
- **Last commit**: 2026-02-16
- **Database**: [[neon]]

## Stack

[[nextjs]] · [[react]] · [[tailwindcss]] · [[drizzle-orm]] · [[anthropic-sdk]] · [[framer-motion]] · [[zustand]]

## Architecture

The original [[researchapp]] used an Express/Vite architecture. ResearchApp v2 migrates to Next.js App Router, adding [[zustand]] for client-side state management and aligning with the conventions shared by most other BlueAlly ecosystem apps. This removes the need for a separate Express server and makes the assessment entry point deployable directly on [[vercel]].

## Pipeline role

ResearchApp v2 is intended to eventually replace [[researchapp]] as step 1 of the [[blueally-pipeline]] at `discover.movefasterwithai.com`. It generates assessment JSON that is consumed by [[aiworkflow]] (step 2), which in turn feeds [[ai-architecture-studio]] (step 3).

## Related

- [[researchapp]] — direct predecessor; currently live at step 1 of the pipeline
- [[aiworkflow]] — step-2 consumer of the JSON this app exports
- [[cognoresearcher]] — earlier archived assessment platform in the same lineage
- [[blueally-pipeline]] — the multi-step delivery pipeline this app enters
- [[researchapp-v2-source]] — source inventory page for this project
