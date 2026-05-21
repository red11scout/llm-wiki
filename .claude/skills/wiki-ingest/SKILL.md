---
name: wiki-ingest
description: >
  Claude MUST use this skill whenever a new file appears in raw/ or the user asks to ingest a source.
  This skill reads a raw source file, extracts entities and concepts using AI, writes wiki pages,
  updates the index and log, and commits to git. One source typically touches 10-15 pages.
---

## When to trigger

- A new file is written to `raw/**`
- The user says "ingest", "process", "add to wiki", or mentions a new source
- The PostToolUse hook fires on a `raw/` write (auto-triggers this)

## How to use

```bash
pnpm wiki:ingest <path-to-raw-file>
```

Or from server actions: `ingestAction(filePath)`

## What it does

1. Reads the raw source file
2. Calls Claude Sonnet to extract structured page updates (source page, entities, concepts, contradictions)
3. Writes new/updated pages to `wiki/sources/`, `wiki/entities/`, `wiki/concepts/`
4. Runs `syncWikiToDb` for each touched page
5. Rebuilds `wiki/index.md`
6. Appends to `wiki/log.md`
7. Commits: `git add raw wiki && git commit -m "ingest: <subject>"`
8. Marks the raw source as ingested in the database
