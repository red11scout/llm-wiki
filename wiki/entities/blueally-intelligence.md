---
title: BlueAlly Intelligence
kind: entity
summary: Archived BlueAlly M&A intelligence and portfolio analytics platform powered by Claude and Neon; not deployed, last committed 2026-02-13.
tags: [blueally, archived, m-and-a, intelligence, portfolio-analytics]
sources: 1
updated: 2026-05-21
---

---
title: BlueAlly Intelligence
kind: entity
summary: Archived BlueAlly M&A intelligence and portfolio analytics platform powered by Claude and Neon; not deployed, last committed 2026-02-13.
tags: [blueally, archived, m-and-a, intelligence, portfolio-analytics]
sources: 1
updated: 2026-05-21
---

BlueAlly Intelligence was an internal BlueAlly platform designed to provide AI-powered analysis of mergers and acquisitions (M&A) opportunities alongside portfolio-level analytics. It was never deployed to production and is now archived. Its GitHub repository (`red11scout/dealfinder`) shares a codebase origin with a project called `dealfinder`, suggesting the tool grew out of or alongside a deal-discovery use case.

## Stack

| Layer | Technology |
|-------|------------|
| Front-end | [[react]], [[vite]], [[tailwindcss]] |
| State management | [[zustand]] |
| Back-end | [[express]] |
| Database | [[neon]] (via [[drizzle-orm]]) |
| AI | [[anthropic-sdk]] |

## Ecosystem role

BlueAlly Intelligence was an exploratory internal tool investigating M&A intelligence as a potential BlueAlly service line. It was **not** integrated into the core [[blueally-pipeline]] (the assessment-to-architecture flow from [[researchapp]] through [[aiworkflow]] to [[ai-architecture-studio]]). Its archived status and last-commit date of 2026-02-13 place it in the same early-exploration era as [[ai-catalyst]] (archived 2026-02-14).

## Status

- **Deployed**: no
- **Status**: archived
- **Last commit**: 2026-02-13
- **GitHub**: https://github.com/red11scout/dealfinder

## Related

- [[blueally-intelligence-source]] — source inventory page
- [[ai-catalyst]] — another archived BlueAlly tool from the same period
- [[blueally-pipeline]] — core pipeline this tool was not part of
- [[anthropic-sdk]] — shared AI integration layer
- [[neon]] — shared database platform
- [[drizzle-orm]] — shared ORM
- [[zustand]] — shared state management library
