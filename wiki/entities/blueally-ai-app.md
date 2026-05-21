---
title: BlueAlly AI App
kind: entity
summary: Deployed BlueAlly field-CTO partner tool that helps executives frame AI use cases and generate structured consulting briefs using Claude; last committed 2026-05-07.
tags: [blueally, executive-tool, consulting-brief, claude, pipeline]
sources: 1
updated: 2026-05-21
---

---
title: BlueAlly AI App
kind: entity
summary: Deployed BlueAlly field-CTO partner tool that helps executives frame AI use cases and generate structured consulting briefs using Claude; last committed 2026-05-07.
tags: [blueally, executive-tool, consulting-brief, claude, pipeline]
sources: 1
updated: 2026-05-21
---

BlueAlly AI App is an active, deployed web application that acts as a field-CTO partner for executives. Users describe a business challenge and the platform uses Claude (via the [[anthropic-sdk]]) to produce structured, actionable [[consulting-brief]]s suitable for executive review and project initiation. It lives at `blueally-ai-app.vercel.app` and was last committed 2026-05-07.

## Role in the BlueAlly ecosystem

The app serves as a lightweight entry point into the [[blueally-pipeline]], positioned upstream of the full assessment and workshop flow. Executives who want to quickly frame an AI opportunity before committing to a deeper engagement use this tool first; the consulting briefs it generates can flow forward into [[researchapp]] (step 1 of the pipeline) and subsequently into [[aiworkflow]] (step 2).

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js + React |
| Styling | [[tailwindcss]] |
| ORM | [[drizzle-orm]] |
| Database | [[neon]] (serverless Postgres) |
| AI layer | [[anthropic-sdk]] (Claude) |
| Deployment | [[vercel]] |

## Key details

- **GitHub**: https://github.com/red11scout/blueally-ai-app
- **Deployed URL**: blueally-ai-app.vercel.app
- **Status**: active
- **Last commit**: 2026-05-07

## Related

- [[blueally-ai-app-source]] — raw project inventory source
- [[blueally-pipeline]] — the multi-step pipeline this app feeds
- [[researchapp]] — downstream full-assessment tool
- [[aiworkflow]] — step-2 analysis workflow
- [[consulting-brief]] — primary output artifact
- [[anthropic-sdk]] — AI integration layer
- [[neon]] — database
- [[drizzle-orm]] — ORM
- [[vercel]] — deployment platform
