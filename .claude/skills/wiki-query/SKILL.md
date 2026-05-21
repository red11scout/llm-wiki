---
name: wiki-query
description: >
  Claude MUST use this skill whenever the user asks a question about the wiki's knowledge base.
  This skill searches wiki pages using FTS and graph traversal, synthesizes an answer with citations,
  and optionally files durable answers as new concept pages. Uses Opus for deep synthesis.
---

## When to trigger

- The user asks a question about entities, concepts, or sources in the wiki
- The user says "query", "search wiki", "what does the wiki say about"
- Any knowledge synthesis request that should draw from wiki pages

## How to use

```bash
pnpm wiki:query "your question here"
```

Or from server actions: `queryAction(question)`

## What it does

1. Scans `wiki/index.md` for orientation
2. Uses a tool loop with: `searchPages` (FTS), `readPage`, `neighbors` (graph), `shortestPath`
3. Synthesizes an answer with [[slug]] citations
4. If the answer is novel/durable, files it as a new `wiki/concepts/` page and commits
5. Appends to `wiki/log.md`
