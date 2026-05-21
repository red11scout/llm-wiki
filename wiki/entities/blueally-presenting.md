---
title: BlueAlly Presenting
kind: entity
summary: Deployed BlueAlly AI-powered knowledge graph presentation platform; a Turborepo monorepo with Tiptap, Anthropic SDK, and Neon replacing PowerPoint with connected, reusable content nodes; last committed 2026-04-03.
tags: [blueally, presentation, knowledge-graph, turborepo, deployed]
sources: 1
updated: 2026-05-21
---

BlueAlly Presenting is a deployed, AI-powered presentation platform at `blueally-presenting.vercel.app` (target: `presenting.gofasterwithai.com`). It replaces PowerPoint by modelling all presentation content as a [[knowledge-graph-presentation]] — a graph of connected nodes and edges — rather than isolated slide decks. The project is built as a [[turborepo]] monorepo and represents the next evolution of the [[blueally-presentation-toolkit]].

## Technical stack

| Layer | Technology |
|---|---|
| Framework | Next.js + [[react]] |
| Styling | [[tailwindcss]] |
| Database ORM | [[drizzle-orm]] |
| Database | [[neon]] (serverless Postgres) |
| AI integration | [[anthropic-sdk]] |
| Rich text editor | [[tiptap]] |
| Monorepo tooling | [[turborepo]] |
| Deployment | [[vercel]] |

## Key features

- **Knowledge graph data model**: 20 seeded nodes and 15 edges out of the box, managed via a graph API for node/edge operations.
- **Admin dashboard**: content management interface for authoring and connecting presentation nodes using [[tiptap]].
- **AI integration**: [[anthropic-sdk]] wired in for AI-assisted content operations.
- **Lazy DB initialization**: Proxy-based lazy Neon initialization for Vercel build compatibility.
- **Phase roadmap**: Phase 1 complete; 9 remaining phases planned.

## Repository

- **GitHub**: https://github.com/red11scout/blueally-presenting
- **Last commit**: 2026-04-03

## Ecosystem role

BlueAlly Presenting sits within the [[blueally-presentation-toolkit]] alongside [[ai-executive-briefing]], [[blueally-workshop-experience]], and [[blueally-presenting-workshop]]. Its [[knowledge-graph-presentation]] approach deliberately moves beyond the simpler animated HTML presentations in the toolkit, enabling content to be connected and reused across multiple presentation contexts.

## Related

- [[blueally-presenting-source]] — source inventory for this project
- [[knowledge-graph-presentation]] — the core architectural concept
- [[tiptap]] — rich text editor used for node authoring
- [[blueally-presentation-toolkit]] — the broader toolkit
- [[gofasterwithai]] — the branded domain hosting deployed BlueAlly apps
- [[turborepo]] — monorepo build system shared with [[atlas]]
