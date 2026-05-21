---
title: Neon
kind: entity
summary: Serverless Postgres database platform used as the database layer across multiple BlueAlly apps, personal projects, and external-client tools by the same author.
tags: [database, postgres, serverless]
sources: 2
updated: 2026-05-21
---

Neon is a serverless Postgres database platform that serves as the consistent persistence layer across the BlueAlly ecosystem, personal projects, and external-client tools built by the same author. It is almost always accessed via [[drizzle-orm]] for type-safe queries.

## Used in

### BlueAlly ecosystem
- [[ai-executive-readout]], [[aiworkflow]], [[blueally-portal]], [[blueally-microsites]], [[blueally-presenting]], [[atlas]], [[compass]], [[concepts-blueally]], [[blueally-workshop-web]], [[blueally-private-ai-investment-planner]], [[blueally-ai-app]], [[blueally-ai-solution-navigator]], [[chrisbot]], [[aiwebsiteblueally-next]] — and more

### Personal projects
- [[fourcups]] — personal/religious Next.js app
- [[godwin-family-tracker]] — personal family task-scoring app

### External-client projects
- [[ga-staff-scheduler]] — external-client staff scheduling app

## Related

- [[drizzle-orm]] — the ORM layer used on top of Neon in virtually all cases
- [[vercel]] — deployment platform hosting most apps that use Neon
- [[express]] — back-end server layer in earlier-generation apps using Neon
