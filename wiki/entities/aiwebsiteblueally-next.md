---
title: BlueAlly AI Website Next.js Rewrite (aiwebsiteblueally-next)
kind: entity
summary: Active Next.js rewrite of the BlueAlly AI marketing website, adding Payload CMS, Neon, and Claude SDK; planned production replacement for the Replit-hosted site, last committed 2026-03-03.
tags: [blueally, marketing, nextjs, payload-cms, neon, claude-sdk, pipeline]
sources: 2
updated: 2026-05-21
---

`aiwebsiteblueally-next` is the active rewrite of the BlueAlly AI marketing website, replacing the current [[replit]]-hosted [[aiwebsiteblueally]]. It is being built with [[nextjs]] and deployed to [[vercel]], with [[payload-cms]] for structured content management, [[neon]] for persistence, and the [[anthropic-sdk]] for AI features.

## Motivation for rewrite

The original [[aiwebsiteblueally]] has no database, no CMS, and no auth — all content is static and form state is ephemeral. The rewrite addresses these gaps by adding:

- **[[payload-cms]]** — headless TypeScript-native CMS for managing industry reports and marketing content without code changes.
- **[[neon]]** — serverless Postgres for persistent form submissions and lead capture.
- **[[anthropic-sdk]]** — continued Claude integration, likely retaining the SSE chat widget (see [[sse-streaming]]).

## Technical profile

| Field | Value |
|---|---|
| Stack | [[nextjs]], [[react]], [[payload-cms]], [[neon]], [[anthropic-sdk]] |
| Hosting | [[vercel]] (planned) |
| Last commit | 2026-03-03 |

## Ecosystem role

Will replace [[aiwebsiteblueally]] as the top-of-funnel entry point of the [[blueally-pipeline]], routing prospects to [[researchapp]] for step-1 custom AI assessments.

## Related

- [[aiwebsiteblueally]] — current production site being replaced
- [[blueally-pipeline]] — pipeline this site heads
- [[researchapp]] — downstream step-1 assessment tool
- [[payload-cms]] — CMS layer added in the rewrite
- [[neon]] — database layer added in the rewrite
- [[vercel]] — target hosting platform
- [[aiwebsiteblueally-next-source]] — source inventory page
