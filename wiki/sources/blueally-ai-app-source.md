---
title: BlueAlly AI App — Project Inventory
kind: source
summary: Project inventory for BlueAlly AI App, a field-CTO partner tool for executives to frame AI use cases and generate consulting briefs using Claude; last committed 2026-05-07.
tags: [blueally, project-inventory, consulting-brief, claude, executive-tool]
sources: 1
updated: 2026-05-21
---

---
title: BlueAlly AI App — Project Inventory
kind: source
summary: Project inventory for BlueAlly AI App, a field-CTO partner tool for executives to frame AI use cases and generate consulting briefs using Claude; last committed 2026-05-07.
tags: [blueally, project-inventory, consulting-brief, claude, executive-tool]
sources: 1
updated: 2026-05-21
---

Raw capture of the BlueAlly AI App project, surveyed from the local filesystem on 2026-05-21. This source documents the app's stack, deployment, and role within the BlueAlly ecosystem.

## Key facts

- **Directory**: `/Users/drewgodwin/blueally-ai-app/`
- **GitHub**: https://github.com/red11scout/blueally-ai-app
- **Deployed**: blueally-ai-app.vercel.app (via [[vercel]])
- **Last commit**: 2026-05-07
- **Status**: active

## Stack

| Layer | Technology |
|---|---|
| Front-end framework | Next.js + [[react]] |
| Styling | [[tailwindcss]] |
| ORM | [[drizzle-orm]] |
| Database | [[neon]] (serverless Postgres) |
| AI layer | [[anthropic-sdk]] (Claude) |

## Description

A field-CTO partner for executives that helps frame AI use cases and generate consulting briefs. Users describe their business challenge and the platform uses Claude to produce structured, actionable AI consulting briefs suitable for executive review and project initiation.

## Ecosystem role

Entry-point tool in the [[blueally-pipeline]] for executives who want to quickly frame an AI opportunity before committing to a full assessment. Generates [[consulting-brief]]s that can feed into the broader discovery and workshop pipeline — upstream of [[researchapp]] and [[aiworkflow]].

## Related

- [[blueally-ai-app]] — entity page for this tool
- [[blueally-pipeline]] — the broader delivery pipeline this app feeds into
- [[researchapp]] — next step downstream for full assessments
- [[anthropic-sdk]] — AI integration layer
- [[neon]] — database platform
- [[drizzle-orm]] — ORM used
- [[tailwindcss]] — styling framework
- [[vercel]] — deployment platform
