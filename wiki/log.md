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
