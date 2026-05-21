---
title: Neon
kind: entity
summary: Serverless Postgres database platform used as the database layer in AI Architecture Studio, AI Executive Readout, AI Infrastructure Sizing, Atlas, BlueAlly AI App, and the BlueAlly AI Website (Next.js).
tags: [database, postgres, serverless, blueally]
sources: 7
updated: 2026-05-21
---

Neon is a serverless Postgres database platform. It is the standard database choice across the deployed BlueAlly application stack, providing scalable, low-maintenance relational storage.

## Usage in BlueAlly apps

- [[ai-architecture-studio]] — stores architecture and financial model data
- [[ai-executive-readout]] — backs executive report persistence
- [[ai-infra-sizing]] — infrastructure sizing data
- [[atlas]] — investment intelligence platform data
- [[blueally-ai-app]] — stores consulting brief sessions
- [[aiwebsiteblueally-next]] — database layer for the Next.js marketing site rewrite

## Related

- [[drizzle-orm]] — TypeScript ORM used in conjunction with Neon across BlueAlly apps
- [[blueally-pipeline]] — the delivery pipeline whose apps share this database platform
