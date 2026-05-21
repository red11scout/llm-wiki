---
title: Knowledge Capture
kind: entity
summary: Active BlueAlly internal Next.js/Neon platform for structured knowledge organization, storage, and retrieval; not deployed, last committed 2026-04-09.
tags: [blueally, knowledge-management, internal-tool, next-js, neon]
sources: 1
updated: 2026-05-21
---

---
title: Knowledge Capture
kind: entity
summary: Active BlueAlly internal Next.js/Neon platform for structured knowledge organization, storage, and retrieval; not deployed, last committed 2026-04-09.
tags: [blueally, knowledge-management, internal-tool, next-js, neon]
sources: 1
updated: 2026-05-21
---

Knowledge Capture is an active BlueAlly internal platform for structured knowledge management, built with Next.js, [[react]], [[tailwindcss]], [[drizzle-orm]], and [[neon]]. It provides tools for organizing, storing, and retrieving domain knowledge in a systematic way. As of the first source mention it is not deployed and has no public GitHub repository; the project lives at `/Users/drewgodwin/knowledge-capture/` with a last commit date of 2026-04-09.

## Purpose

The platform supports the BlueAlly team's ability to capture and structure domain knowledge, with a potential downstream role feeding content into presentation and education platforms such as [[blueally-presenting]] and [[ai-visual-intelligence-library]].

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js + [[react]] |
| Styling | [[tailwindcss]] |
| ORM | [[drizzle-orm]] |
| Database | [[neon]] (serverless Postgres) |

## Ecosystem role

An internal knowledge management tool sitting alongside [[concepts-blueally]] (concepts.blueally.ai) within the BlueAlly ecosystem. While Concepts BlueAlly organizes and manages discrete AI concepts and their relationships, Knowledge Capture is oriented toward broader structured knowledge intake and retrieval — making it a potential content-supply layer for the [[blueally-pipeline]].

## Related

- [[knowledge-capture-source]] — Source inventory page
- [[concepts-blueally]] — Related internal concept exploration platform
- [[blueally-presenting]] — Presentation platform that may consume captured knowledge
- [[ai-visual-intelligence-library]] — Education platform that may consume captured knowledge
- [[blueally-pipeline]] — The broader BlueAlly delivery pipeline this tool supports
