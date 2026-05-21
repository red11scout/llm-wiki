---
title: Claude Mem
kind: entity
summary: BlueAlly developer infrastructure tool; a memory compression MCP server for Claude Code that persists context across sessions using Express, SQLite, and esbuild; last committed 2026-02-10.
tags: [blueally-dev-infra, mcp, claude-code, memory]
sources: 1
updated: 2026-05-21
---

---
title: Claude Mem
kind: entity
summary: BlueAlly developer infrastructure tool; a memory compression MCP server for Claude Code that persists context across sessions using Express, SQLite, and esbuild; last committed 2026-02-10.
tags: [blueally-dev-infra, mcp, claude-code, memory]
sources: 1
updated: 2026-05-21
---

Claude Mem is a memory compression system for [[claude-code]] that persists context across conversation sessions. It runs as an [[mcp-server]] — one of 9 configured MCP servers in the BlueAlly Claude Code development environment — using [[express]] as its HTTP layer, SQLite for local storage, and [[esbuild]] for bundling.

## Purpose

Claude Code operates session-by-session and does not natively retain memory between conversations. Claude Mem bridges that gap by providing structured memory management: it stores, compresses, and recalls context so that the development environment remains coherent across sessions on all [[blueally-pipeline]] projects.

## Technical details

| Attribute | Value |
|---|---|
| Repository | https://github.com/thedotmack/claude-mem |
| Local directory | `/Users/drewgodwin/claude-mem/` |
| Stack | [[express]], [[esbuild]], SQLite |
| Deployment | Not deployed — local dev infrastructure |
| Status | Active |
| Last commit | 2026-02-10 |

## Ecosystem role

Pure developer infrastructure. Not a client-facing product and not part of the BlueAlly client delivery pipeline. It supports developer productivity across all BlueAlly projects by giving [[claude-code]] durable session memory.

## Related

- [[claude-mem-source]]
- [[claude-code]]
- [[mcp-server]]
- [[express]]
- [[esbuild]]
- [[blueally-pipeline]]
