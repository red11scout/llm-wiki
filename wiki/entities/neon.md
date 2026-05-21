---
title: Neon
kind: entity
summary: Serverless Postgres database platform used as the database layer across multiple BlueAlly apps.
tags: [database, postgres, serverless, infrastructure]
sources: 2
updated: 2026-05-21
---

Neon is a serverless Postgres database platform used as the primary database layer across the BlueAlly ecosystem. It is valued for its branching capabilities, scale-to-zero behaviour, and compatibility with standard Postgres tooling.

## Usage in BlueAlly apps

- [[ai-executive-readout]] — Database layer for readout report generation
- [[ai-infra-sizing]] — Backing store for infrastructure sizing calculations
- [[atlas]] — Data persistence for the AI Investment Intelligence Platform
- [[aiwebsiteblueally-next]] — Database for the Next.js marketing site rewrite
- [[blueally-intelligence]] — Used in the archived M&A intelligence platform
- [[blueally-portal]] — Database for authenticated workshop participant sessions

## Related

- [[drizzle-orm]] — TypeScript ORM most commonly paired with Neon across BlueAlly apps
- [[blueally-pipeline]] — The broader pipeline whose apps depend on Neon
