---
title: BlueAlly AI Solution Navigator
kind: entity
summary: Deployed BlueAlly decision-support tool that guides enterprises through AI solution selection using a structured process backed by Claude intelligence; last committed 2026-05-07.
tags: [blueally, decision-support, ai-solution-selection, next-js, vercel]
sources: 1
updated: 2026-05-21
---

---
title: BlueAlly AI Solution Navigator
kind: entity
summary: Deployed BlueAlly decision-support tool that guides enterprises through AI solution selection using a structured process backed by Claude intelligence; last committed 2026-05-07.
tags: [blueally, decision-support, ai-solution-selection, next-js, vercel]
sources: 1
updated: 2026-05-21
---

BlueAlly AI Solution Navigator is a deployed web application that guides enterprise users through a structured decision-making process to identify the right AI solutions for their specific business needs and technical constraints. It uses [[anthropic-sdk]] (Claude) as the intelligence layer and sits in the [[blueally-pipeline]] between opportunity identification and technical architecture design.

## Deployment

- **URL**: blueally-ai-solution-navigator.vercel.app
- **Hosting**: [[vercel]]
- **GitHub**: https://github.com/red11scout/blueally-ai-solution-navigator
- **Last commit**: 2026-05-07
- **Status**: deployed

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js + React |
| Styling | [[tailwindcss]] |
| ORM | [[drizzle-orm]] |
| Database | [[neon]] |
| AI | [[anthropic-sdk]] |
| Hosting | [[vercel]] |

## Ecosystem role

Within the [[blueally-pipeline]], the Solution Navigator occupies the decision-support layer between use-case identification (via [[researchapp]] → [[aiworkflow]]) and technical architecture generation (via [[ai-architecture-studio]]). It helps enterprises navigate the AI solution landscape once opportunities have been identified, bridging the gap between opportunity and architecture.

See [[blueally-ai-solution-navigator-source]] for the full project inventory.

## Related

- [[blueally-pipeline]] — The multi-step delivery pipeline this tool is part of
- [[aiworkflow]] — Upstream step-2 pipeline app
- [[ai-architecture-studio]] — Downstream step-3 pipeline app
- [[blueally-ai-app]] — Companion field-CTO tool for framing AI use cases
- [[anthropic-sdk]] — AI integration layer
- [[neon]] — Database platform
- [[drizzle-orm]] — ORM layer
- [[vercel]] — Deployment platform
