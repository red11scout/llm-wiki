---
title: Drizzle ORM
kind: entity
summary: TypeScript-native ORM library used across multiple BlueAlly apps for type-safe database access.
tags: [orm, typescript, database, infrastructure]
sources: 2
updated: 2026-05-21
---

Drizzle ORM is a TypeScript-native, SQL-first ORM that provides type-safe database access. It is the standard database access layer across the BlueAlly ecosystem, most frequently paired with [[neon]] as the Postgres backend.

## Usage in BlueAlly apps

- [[ai-executive-readout]] — Type-safe access to readout report data
- [[ai-infra-sizing]] — Database access for infrastructure sizing
- [[atlas]] — ORM layer in the investment intelligence monorepo
- [[aiwebsiteblueally-next]] — Database access on the Next.js marketing site rewrite
- [[blueally-portal]] — Type-safe access to workshop participant session data

## Related

- [[neon]] — Serverless Postgres platform most commonly used with Drizzle ORM in BlueAlly
- [[blueally-pipeline]] — The broader pipeline whose apps depend on Drizzle ORM
