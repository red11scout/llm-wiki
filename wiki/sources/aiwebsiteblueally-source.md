---
title: BlueAlly AI Website (aiwebsiteblueally) — Project Inventory
kind: source
summary: Project inventory for BlueAlly AI Website, the current Replit-hosted marketing site with a 14-section home page, 14 industry reports, and a Claude streaming chat widget; last committed 2026-03-03.
tags: [blueally, marketing, nextjs, replit, claude-sdk, pipeline]
sources: 1
updated: 2026-05-21
---

---
title: BlueAlly AI Website (aiwebsiteblueally) — Project Inventory
kind: source
summary: Project inventory for BlueAlly AI Website, the current Replit-hosted marketing site with a 14-section home page, 14 industry reports, and a Claude streaming chat widget; last committed 2026-03-03.
tags: [blueally, marketing, nextjs, replit, claude-sdk, pipeline]
sources: 1
updated: 2026-05-21
---

Project inventory captured from a local filesystem survey on 2026-05-21.

## Source metadata

| Field | Value |
|---|---|
| Directory | `/Users/drewgodwin/aiwebsiteblueally/` |
| GitHub | https://github.com/red11scout/aiwebsiteblueally |
| Deployed | newest-ai-website.replit.app |
| Stack | Next.js, React, Tailwind CSS, Framer Motion |
| Database | none |
| Auth | none |
| CMS | none |
| Status | deployed |
| Last commit | 2026-03-03 |

## Key facts

- 14-section home page showcasing BlueAlly AI services.
- 14 natively rendered generic industry reports with CTAs leading prospects to the custom assessment pipeline at `discover.movefasterwithai.com` (see [[researchapp]]).
- AI chat widget powered by [[anthropic-sdk]] with Claude streaming via Server-Sent Events (SSE).
- No database, no auth, no CMS — form data is ephemeral and in-memory.
- Currently hosted on [[replit]]; a full migration to [[aiwebsiteblueally-next]] (Next.js + Vercel + Payload CMS) is planned.

## Ecosystem role

Top-of-funnel entry point into the [[blueally-pipeline]]. Generic industry reports serve as lead-generation content; CTAs drive prospects into the custom assessment workflow starting at [[researchapp]]. Being superseded by [[aiwebsiteblueally-next]].

## Related

- [[aiwebsiteblueally]] — the entity page for this project
- [[aiwebsiteblueally-next]] — planned production replacement
- [[researchapp]] — downstream pipeline step (step 1 assessment)
- [[blueally-pipeline]] — full pipeline context
- [[sse-streaming]] — streaming pattern used for the chat widget
