---
title: BlueAlly Presentation Toolkit
kind: concept
summary: BlueAlly's suite of web-native presentation tools replacing PowerPoint, including AI Executive Briefing, blueally-workshop-experience, blueally-presenting, and AI Systems Presentation.
tags: [blueally, presentation, web-native]
sources: 5
updated: 2026-05-21
---

The BlueAlly Presentation Toolkit is the collection of web-native presentation applications that BlueAlly has built and deployed as replacements for traditional static slide decks (e.g., PowerPoint). Each tool in the toolkit uses [[framer-motion]] for animations and [[zustand]] for state management, and is deployed via [[vercel]].

## Members

| App | Purpose |
|---|---|
| [[ai-executive-briefing]] | Interactive executive AI strategy presentation, built with Next.js and Framer Motion |
| [[blueally-workshop-experience]] | Web-native workshop presentation application |
| [[blueally-presenting]] | General-purpose web-native presentation utility |
| [[ai-systems-presentation]] | Animated presentation on AI systems architecture; reusable template for technical topics |

## Shared patterns

All toolkit members share a consistent front-end approach: Next.js + React for structure, [[framer-motion]] for transitions and animations, and [[zustand]] for client-side navigation state. None require a database layer for the presentation experience itself.

## Ecosystem role

The toolkit represents BlueAlly's deliberate platform shift away from static slide decks toward interactive, web-delivered presentations. Individual toolkit apps are reused and adapted across client engagements (e.g., [[a-e-global-media]]) and internal tooling demonstrations.

## Related

- [[ai-executive-briefing]]
- [[blueally-workshop-experience]]
- [[blueally-presenting]]
- [[ai-systems-presentation]]
- [[framer-motion]]
- [[zustand]]
- [[vercel]]
- [[blueally-pipeline]]
