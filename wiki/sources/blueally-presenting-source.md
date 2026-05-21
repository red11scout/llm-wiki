---
title: BlueAlly Presenting — Project Inventory
kind: source
summary: Project inventory for BlueAlly Presenting, a deployed AI-powered knowledge graph presentation platform built as a Turborepo monorepo with Tiptap and Anthropic SDK; last committed 2026-04-03.
tags: [blueally, presentation, knowledge-graph, turborepo, tiptap]
sources: 1
updated: 2026-05-21
---

---
title: BlueAlly Presenting — Project Inventory
kind: source
summary: Project inventory for BlueAlly Presenting, a deployed AI-powered knowledge graph presentation platform built as a Turborepo monorepo with Tiptap and Anthropic SDK; last committed 2026-04-03.
tags: [blueally, presentation, knowledge-graph, turborepo, tiptap]
sources: 1
updated: 2026-05-21
---

Raw capture of the local filesystem survey for the [[blueally-presenting]] repository, taken 2026-05-21.

## Key facts

- **Directory**: `/Users/drewgodwin/blueally-presenting/`
- **GitHub**: https://github.com/red11scout/blueally-presenting
- **Deployed**: blueally-presenting.vercel.app (target: presenting.[[gofasterwithai]])
- **Stack**: [[nextjs]], [[react]], [[tailwindcss]], [[drizzle-orm]], [[neon]], [[anthropic-sdk]], [[tiptap]], [[turborepo]]
- **Database**: [[neon]]
- **Status**: deployed
- **Last commit**: 2026-04-03

## Description

AI-powered [[knowledge-graph-presentation]] platform replacing PowerPoint. Built as a [[turborepo]] monorepo with a [[tiptap]] rich text editor, knowledge graph data model (20 seeded nodes + 15 edges), and [[anthropic-sdk]] integration. Features an admin dashboard for content management, a graph API for node/edge operations, and lazy DB initialization via Proxy for Vercel build compatibility. Phase 1 complete with 9 remaining phases planned.

## Ecosystem role

Acts as the presentation platform at `presenting.gofasterwithai.com`. The [[knowledge-graph-presentation]] approach allows content to be connected and reused across presentations rather than trapped in individual slide decks, representing the next evolution of the [[blueally-presentation-toolkit]] beyond simpler animated HTML presentations.

## Related

- [[blueally-presenting]] — the entity page for this platform
- [[blueally-presentation-toolkit]] — the broader suite this platform belongs to
- [[knowledge-graph-presentation]] — the architectural concept underlying the platform
- [[tiptap]] — the rich text editor integrated into this platform
