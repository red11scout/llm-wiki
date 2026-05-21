---
title: BlueAlly Workshop Experience — Project Inventory
kind: source
summary: Project inventory for BlueAlly Workshop Experience, a deployed Next.js interactive animated presentation platform for live AI workshops with 28 slides across 7 sections; last committed 2026-03-28.
tags: [blueally, presentation-toolkit, workshop-delivery, next-js, framer-motion]
sources: 1
updated: 2026-05-21
---

---
title: BlueAlly Workshop Experience — Project Inventory
kind: source
summary: Project inventory for BlueAlly Workshop Experience, a deployed Next.js interactive animated presentation platform for live AI workshops with 28 slides across 7 sections; last committed 2026-03-28.
tags: [blueally, presentation-toolkit, workshop-delivery, next-js, framer-motion]
sources: 1
updated: 2026-05-21
---

Local filesystem survey of the BlueAlly Workshop Experience project, captured 2026-05-21.

## Key facts

- **Directory**: `/Users/drewgodwin/blueally-workshop-experience/`
- **Deployed**: blueally-workshop-experience.vercel.app (via [[vercel]])
- **Stack**: Next.js, [[react]], [[tailwindcss]], [[framer-motion]], [[zustand]]
- **Database**: none
- **Status**: deployed
- **Last commit**: 2026-03-28

## Description

[[blueally-workshop-experience]] is an interactive animated HTML presentation platform replacing PowerPoint for live AI workshops. Features 28 slides across 7 sections with 12 slide type renderers and a 3-layer animation system. All content lives in TypeScript files with no database — [[zustand]] manages presentation state and [[framer-motion]] handles the animation pipeline. Runs on port 3055 via the `experience-dev` launch config.

## Ecosystem role

Workshop delivery platform in the BlueAlly ecosystem used for live client-facing AI workshop presentations. Part of the [[blueally-presentation-toolkit]] alongside [[blueally-presenting]] and [[blueally-presenting-workshop]].

## Related

- [[blueally-workshop-experience]]
- [[blueally-presentation-toolkit]]
- [[blueally-presenting-workshop]]
- [[blueally-presenting]]
- [[ai-executive-briefing]]
