---
title: BlueAlly Presenting Workshop
kind: entity
summary: Deployed BlueAlly Modern AI Systems Workshop platform with 49 slides across 8 sections, presenter mode, and Claude-powered editing; deployed at blueally-workshop.vercel.app, last committed 2026-04-06.
tags: [blueally, workshop, presentation, deployed]
sources: 1
updated: 2026-05-21
---

---
title: BlueAlly Presenting Workshop
kind: entity
summary: Deployed BlueAlly Modern AI Systems Workshop platform with 49 slides across 8 sections, presenter mode, and Claude-powered editing; deployed at blueally-workshop.vercel.app, last committed 2026-04-06.
tags: [blueally, workshop, presentation, deployed]
sources: 1
updated: 2026-05-21
---

BlueAlly Presenting Workshop is a deployed workshop delivery application built by BlueAlly for live AI workshop sessions. It presents 49 slides across 8 sections with a dedicated presenter mode and Claude-powered content editing capabilities, combining database-backed content management with polished [[framer-motion]] animations.

## Technical stack

- **Framework**: Next.js + [[react]]
- **Styling**: [[tailwindcss]]
- **Database ORM**: [[drizzle-orm]] backed by [[neon]] (serverless Postgres)
- **AI layer**: [[anthropic-sdk]] for Claude-powered slide editing
- **Animations**: [[framer-motion]]
- **Deployment**: [[vercel]] at blueally-workshop.vercel.app
- **Last commit**: 2026-04-06

## Key capabilities

- **49-slide deck across 8 sections** — structured content covering BlueAlly's Modern AI Systems curriculum
- **Presenter mode** — dedicated live-delivery interface for workshop facilitators
- **Claude-powered editing** — AI-assisted content management for in-session or pre-session slide updates via [[anthropic-sdk]]
- **Database-backed content** — slides stored in [[neon]], enabling dynamic updates without redeployment

## Ecosystem role

BlueAlly Presenting Workshop is a workshop delivery tool within the [[blueally-pipeline]]. It is used for live AI workshop sessions and complements [[blueally-workshop-experience]] with a more content-management-oriented approach. Both tools sit alongside [[ai-executive-briefing]] and [[blueally-presenting]] in the broader [[blueally-presentation-toolkit]].

See [[blueally-presenting-workshop-source]] for the original project inventory.

## Related
- [[blueally-workshop-experience]]
- [[blueally-presentation-toolkit]]
- [[blueally-presenting]]
- [[ai-executive-briefing]]
- [[blueally-pipeline]]
- [[framer-motion]]
- [[neon]]
- [[drizzle-orm]]
- [[anthropic-sdk]]
- [[vercel]]
