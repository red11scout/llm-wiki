---
title: BlueAlly AI Website (aiwebsiteblueally)
kind: entity
summary: Current Replit-hosted BlueAlly AI marketing website with a 14-section home page, 14 industry reports, and a Claude SSE chat widget; top-of-funnel entry point into the BlueAlly pipeline, planned for replacement by aiwebsiteblueally-next.
tags: [blueally, marketing, nextjs, replit, pipeline]
sources: 2
updated: 2026-05-21
---

BlueAlly AI Website (`aiwebsiteblueally`) is the current production marketing website for BlueAlly AI services, hosted on [[replit]] at `newest-ai-website.replit.app`. It is the top-of-funnel entry point into the [[blueally-pipeline]], funnelling prospects toward the custom assessment workflow.

## Key capabilities

- **14-section home page** showcasing the full range of BlueAlly AI services.
- **14 natively rendered industry reports** providing generic AI use-case content for different verticals, each with CTAs directing prospects to `discover.movefasterwithai.com` (see [[researchapp]]).
- **AI chat widget** powered by [[anthropic-sdk]] with Claude token streaming delivered via [[sse-streaming]] (Server-Sent Events); no database — form and chat state are ephemeral and in-memory.

## Technical profile

| Field | Value |
|---|---|
| Stack | [[nextjs]], [[react]], [[tailwindcss]], [[framer-motion]] |
| Database | none |
| Auth | none |
| CMS | none |
| Hosting | [[replit]] |
| Last commit | 2026-03-03 |
| GitHub | https://github.com/red11scout/aiwebsiteblueally |

## Ecosystem role

The site sits at the very top of the [[blueally-pipeline]], generating lead traffic and routing prospects into the custom AI assessment flow at [[researchapp]] (step 1). It is being fully rewritten and migrated to [[aiwebsiteblueally-next]] (Next.js + Vercel + Payload CMS).

## Related

- [[aiwebsiteblueally-next]] — active Next.js rewrite; planned production replacement
- [[researchapp]] — downstream pipeline step reached via industry-report CTAs
- [[blueally-pipeline]] — full pipeline this site heads
- [[replit]] — current hosting platform
- [[sse-streaming]] — streaming pattern for the chat widget
- [[anthropic-sdk]] — powers the chat widget
- [[aiwebsiteblueally-source]] — source inventory page
