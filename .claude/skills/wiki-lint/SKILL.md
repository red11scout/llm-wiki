---
name: wiki-lint
description: >
  Claude MUST use this skill to check wiki health. Run it periodically or when the user asks
  about contradictions, stale pages, orphans, or missing cross-references. Writes findings
  to needs-review.md and the contradictions table.
---

## When to trigger

- The user says "lint", "check wiki health", "find contradictions", "audit"
- Periodically (nightly cron runs this automatically)
- After a large batch of ingests

## How to use

```bash
pnpm wiki:lint
```

Or from server actions: `lintAction()`

## What it does

1. Checks for unresolved contradictions in the database
2. Finds stale pages (not updated in 90+ days)
3. Identifies orphan pages (no inbound links)
4. Scans for [[slug]] references to pages that don't exist
5. Writes all findings to `wiki/needs-review.md`
6. Inserts contradiction rows into the database
7. Appends to `wiki/log.md`
