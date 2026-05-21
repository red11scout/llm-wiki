---
title: BlueAlly AI Website (Next.js)
kind: entity
summary: Active Next.js rewrite of the BlueAlly AI marketing website, adding Payload CMS, Neon, and Claude SDK; planned production replacement for the Replit-hosted site, last committed 2026-03-03.
tags: [blueally, marketing, next-js, cms, active]
sources: 1
updated: 2026-05-21
---

---
title: BlueAlly AI Website (Next.js)
kind: entity
summary: Active Next.js rewrite of the BlueAlly AI marketing website, adding Payload CMS, Neon, and Claude SDK; planned production replacement for the Replit-hosted site, last committed 2026-03-03.
tags: [blueally, marketing, next-js, cms, active]
sources: 1
updated: 2026-05-21
---

BlueAlly AI Website (Next.js) is an active rewrite of BlueAlly's primary marketing website, migrating from a Replit-hosted prototype to a production-grade [[vercel]]-deployed Next.js application. It introduces [[payload-cms]] for structured content management, [[neon]] for database persistence, and [[anthropic-sdk]] (Claude SDK) for AI-powered features — while maintaining the site's top-of-funnel role driving prospects into the [[blueally-pipeline]].

## Key details

- **GitHub**: https://github.com/red11scout/blueally-ai-website
- **Deployed**: aiwebsiteblueally-next.vercel.app
- **Status**: active
- **Last commit**: 2026-03-03

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js / React |
| Styling | [[tailwindcss]] |
| Animation | [[framer-motion]] |
| CMS | [[payload-cms]] |
| ORM | [[drizzle-orm]] |
| Database | [[neon]] |
| AI | [[anthropic-sdk]] |
| Hosting | [[vercel]] |

## Ecosystem role

This project is the planned production successor to [[aiwebsiteblueally]], the current Replit-hosted marketing site. Once promoted, it will be the primary top-of-funnel touchpoint for [[blueally]] AI services, managing brand content via [[payload-cms]] and funneling prospects into the broader [[blueally-pipeline]].

## Related

- [[aiwebsiteblueally-next-source]] — project inventory source
- [[aiwebsiteblueally]] — Replit-hosted predecessor
- [[payload-cms]] — headless CMS powering content management
- [[blueally-pipeline]] — downstream pipeline fed by marketing traffic
- [[vercel]] — deployment platform
- [[neon]] — serverless Postgres database layer
- [[anthropic-sdk]] — Claude SDK integration
- [[drizzle-orm]] — type-safe ORM
