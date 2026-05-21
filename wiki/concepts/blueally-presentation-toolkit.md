---
title: BlueAlly Presentation Toolkit
kind: concept
summary: BlueAlly's suite of web-native presentation tools replacing PowerPoint, including AI Executive Briefing, BlueAlly Workshop Experience, blueally-presenting, blueally-presenting-workshop, and AI Systems Presentation.
tags: [blueally, presentation-toolkit, workshop-delivery]
sources: 3
updated: 2026-05-21
---

The BlueAlly Presentation Toolkit is the collection of web-native presentation and workshop delivery applications that BlueAlly uses in place of PowerPoint. Each tool targets a distinct delivery context — from asynchronous executive strategy briefings to live interactive workshop sessions — but they share a common design language: Next.js or React front-ends, [[framer-motion]] animations, and content authored in TypeScript or structured data files rather than slide-deck formats.

## Member tools

| Tool | Slides / Content | Primary use |
|------|-----------------|-------------|
| [[ai-executive-briefing]] | Interactive animated web presentation | Async executive AI strategy delivery |
| [[blueally-workshop-experience]] | 28 slides across 7 sections, 3-layer animation system | Live client-facing AI workshop presentations |
| [[blueally-presenting]] | Knowledge graph platform (Turborepo monorepo) | Reusable connected-node content authoring |
| [[blueally-presenting-workshop]] | 49 slides across 8 sections, presenter mode | Live workshop delivery with Claude-powered editing |
| [[ai-systems-presentation]] | Animated web presentation | AI systems architecture education |

## Shared patterns

- All tools are deployed on [[vercel]].
- [[framer-motion]] is the animation library of record across the toolkit.
- [[zustand]] provides client-side state where needed.
- None of the purely presentational tools require a database; [[blueally-presenting]] uses [[neon]] for its knowledge graph persistence layer.

## Related

- [[blueally-pipeline]]
- [[ai-executive-briefing]]
- [[blueally-workshop-experience]]
- [[blueally-presenting]]
- [[blueally-presenting-workshop]]
- [[ai-systems-presentation]]
