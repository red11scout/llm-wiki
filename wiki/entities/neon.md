---
title: Neon
kind: entity
summary: Serverless Postgres database platform used as the database layer in AI Architecture Studio, AI Executive Readout, AI Infrastructure Sizing, and BlueAlly AI Website (Next.js).
tags: [database, postgres, serverless]
sources: 5
updated: 2026-05-21
---

Neon is a serverless Postgres database platform used as the persistence layer across multiple BlueAlly applications. Its serverless model pairs naturally with Vercel-deployed Next.js apps and is accessed via [[drizzle-orm]] for type-safe queries throughout the ecosystem.

## BlueAlly apps using Neon

- [[ai-architecture-studio]] — architecture diagram and PRD generation pipeline app
- [[ai-executive-readout]] — executive AI readout report generator
- [[ai-infra-sizing]] — enterprise AI infrastructure right-sizing platform
- [[aiwebsiteblueally-next]] — Next.js rewrite of the BlueAlly AI marketing website

## Related

- [[drizzle-orm]] — ORM used with Neon across BlueAlly apps
- [[vercel]] — deployment platform co-located with Neon in the BlueAlly stack
