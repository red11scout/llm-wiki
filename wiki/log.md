# Log

Append-only history of every operation. Never rewrite or delete entries.
Each header is exactly `## [YYYY-MM-DD] <op> | <subject>` (op = ingest | query | lint | crystallize).
Greppable: `grep "^## \[" log.md | tail -5`. See SCHEMA.md §7.

## [2026-05-21] init | Wiki bootstrapped
- created: SCHEMA.md, index.md, log.md, needs-review.md
- raw/ and wiki/ scaffolded; DB index empty until first ingest

## [2026-05-21] ingest | AI Architecture Studio — Project Inventory
- source: raw/notes/projects/ai-architecture-studio.md
- created: [[ai-architecture-studio-source]], [[ai-architecture-studio]], [[blueally-pipeline]], [[aiworkflow]], [[gofasterwithai]], [[neon]], [[react-flow]], [[hyperformula]], [[claude-sonnet]]
- updated: none
- contradictions: 0

## [2026-05-21] ingest | A+E Global Media AI Workshop — Project Inventory
- source: raw/notes/projects/ae-ai-workshop.md
- created: [[ae-ai-workshop-source]], [[a-e-global-media]]
- updated: [[blueally-pipeline]]
- contradictions: 1

## [2026-05-21] ingest | A+E Global Media AI Workshop Microsite — Project Inventory
- source: raw/notes/projects/aegm-workshop.md
- created: [[aegm-workshop-source]]
- updated: [[a-e-global-media]]
- contradictions: 1

## [2026-05-21] ingest | AI Catalyst — Project Inventory
- source: raw/notes/projects/ai-catalyst.md
- created: [[ai-catalyst-source]], [[ai-catalyst]], [[drizzle-orm]], [[researchapp]], [[cognition-two]], [[multi-agent-pipeline]]
- updated: [[aiworkflow]], [[blueally-pipeline]]
- contradictions: 0
