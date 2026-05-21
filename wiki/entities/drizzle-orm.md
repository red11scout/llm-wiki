---
title: Drizzle ORM
kind: entity
summary: TypeScript-native ORM library used across multiple BlueAlly apps for type-safe database access, and in the personal Four Cups project.
tags: [orm, typescript, database, infrastructure]
sources: 2
updated: 2026-05-21
---

Drizzle ORM is a TypeScript-native ORM library that provides type-safe database access. It is used as the primary data-access layer in numerous BlueAlly applications, and also appears in [[fourcups]], a personal project by the same author.

## Usage in BlueAlly

Drizzle ORM is paired with [[neon]] (serverless Postgres) throughout the [[blueally-pipeline]], including in [[ai-executive-readout]], [[aiworkflow]], [[blueally-portal]], and other apps.

## Usage outside BlueAlly

- [[fourcups]] — personal/religious Next.js application using Drizzle ORM with [[neon]]

## Related

- [[neon]]
- [[blueally-pipeline]]
- [[fourcups]]
