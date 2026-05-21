---
title: Drizzle ORM
kind: entity
summary: TypeScript-native ORM library used in AI Catalyst, AI Executive Readout, AI Infrastructure Sizing, Atlas, BlueAlly AI App, and BlueAlly AI Website (Next.js) for type-safe database access.
tags: [orm, typescript, database, blueally]
sources: 7
updated: 2026-05-21
---

Drizzle ORM is a TypeScript-native ORM library providing type-safe database access. It is the standard ORM across the BlueAlly application stack, consistently paired with [[neon]] for serverless Postgres.

## Usage in BlueAlly apps

- [[ai-catalyst]] — workshop analysis platform database access
- [[ai-executive-readout]] — executive report data layer
- [[ai-infra-sizing]] — infrastructure sizing data layer
- [[atlas]] — investment intelligence platform data layer
- [[blueally-ai-app]] — consulting brief session persistence
- [[aiwebsiteblueally-next]] — data layer for the Next.js marketing site rewrite

## Related

- [[neon]] — serverless Postgres platform consistently paired with Drizzle across BlueAlly
- [[blueally-pipeline]] — the delivery pipeline whose apps share this ORM
