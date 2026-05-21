---
title: Turborepo
kind: entity
summary: High-performance monorepo build system by Vercel used in Atlas and BlueAlly Presenting for managing multi-package BlueAlly platform codebases.
tags: [build-tooling, monorepo, vercel]
sources: 2
updated: 2026-05-21
---

Turborepo is a high-performance monorepo build system created by Vercel. It manages multi-package repositories with intelligent task caching and parallelism, making it well-suited for large platform codebases.

## Usage in BlueAlly

Turborepo is used in two BlueAlly platforms:

- **[[atlas]]** — BlueAlly's AI Investment Intelligence Platform; the first recorded use of Turborepo in the ecosystem.
- **[[blueally-presenting]]** — BlueAlly's AI-powered knowledge graph presentation platform; added in the 2026-04-03 commit window.

Both platforms share Turborepo as their monorepo tooling layer, reflecting BlueAlly's pattern of adopting it for complex, multi-package applications.

## Related

- [[atlas]] — first known BlueAlly Turborepo consumer
- [[blueally-presenting]] — second known BlueAlly Turborepo consumer
- [[vercel]] — creator of Turborepo and deployment platform for both apps
- [[atlas-source]] — source inventory for Atlas
- [[blueally-presenting-source]] — source inventory for BlueAlly Presenting
