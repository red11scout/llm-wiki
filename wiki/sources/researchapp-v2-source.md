---
title: ResearchApp v2 — Project Inventory
kind: source
summary: Project inventory for ResearchApp v2, a Next.js rewrite of the AI Strategic Assessment Platform replacing the Express/Vite architecture; active, last committed 2026-02-16.
tags: [blueally, pipeline, assessment, nextjs, active]
sources: 1
updated: 2026-05-21
---

---
title: ResearchApp v2 — Project Inventory
kind: source
summary: Project inventory for ResearchApp v2, a Next.js rewrite of the AI Strategic Assessment Platform replacing the Express/Vite architecture; active, last committed 2026-02-16.
tags: [blueally, pipeline, assessment, nextjs, active]
sources: 1
updated: 2026-05-21
---

ResearchApp v2 is the Next.js rewrite of BlueAlly's AI Strategic Assessment Platform ([[researchapp]]), migrating from the original Express/Vite stack to Next.js App Router with [[zustand]] for state management. It is an active project last committed 2026-02-16.

## Key facts

- **Directory**: `/Users/drewgodwin/researchapp-v2/`
- **GitHub**: https://github.com/red11scout/researchapp-v2
- **Deployed**: researchapp-v2.vercel.app
- **Status**: active
- **Last commit**: 2026-02-16
- **Database**: [[neon]]

## Stack

[[nextjs]], [[react]], [[tailwindcss]], [[drizzle-orm]], [[anthropic-sdk]], [[framer-motion]], [[zustand]]

## Ecosystem role

Intended as the eventual replacement for [[researchapp]] at `discover.movefasterwithai.com` — step 1 of the [[blueally-pipeline]]. Maintains the same assessment capabilities and JSON export flow into [[aiworkflow]], while modernising the architecture for better performance and developer experience on [[vercel]].

## Architecture change

The original [[researchapp]] was built on an Express/Vite architecture. ResearchApp v2 migrates that foundation to Next.js App Router, aligning it with the rest of the BlueAlly ecosystem's stack and enabling deployment on Vercel without a separate Express server.

## Related

- [[researchapp]] — the predecessor this project is designed to replace
- [[researchapp-v2]] — entity page for this project
- [[blueally-pipeline]] — multi-step delivery pipeline where this tool serves as step 1
- [[aiworkflow]] — step-2 pipeline app that consumes the JSON output produced here
