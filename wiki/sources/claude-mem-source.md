---
title: Claude Mem — Project Inventory
kind: source
summary: Project inventory for Claude Mem, a memory compression MCP server for Claude Code using Express, SQLite, and esbuild to persist context across sessions; last committed 2026-02-10.
tags: [blueally-dev-infra, mcp, claude-code, memory]
sources: 1
updated: 2026-05-21
---

---
title: Claude Mem — Project Inventory
kind: source
summary: Project inventory for Claude Mem, a memory compression MCP server for Claude Code using Express, SQLite, and esbuild to persist context across sessions; last committed 2026-02-10.
tags: [blueally-dev-infra, mcp, claude-code, memory]
sources: 1
updated: 2026-05-21
---

Raw source: `raw/notes/projects/claude-mem.md`, captured 2026-05-21 via local filesystem survey.

## Key facts extracted

- **Repository**: https://github.com/thedotmack/claude-mem
- **Directory**: `/Users/drewgodwin/claude-mem/`
- **Deployment status**: not deployed (local developer infrastructure)
- **Stack**: [[express]], esbuild, SQLite
- **Last commit**: 2026-02-10
- **Status**: active

## Summary

[[claude-mem]] is a memory compression system for [[claude-code]] that persists context across sessions. It runs as an [[mcp-server]] using [[express]] with SQLite for local storage and [[esbuild]] for bundling. It is one of 9 configured MCP servers in the Claude Code development environment, providing persistent session memory that supports productivity across all BlueAlly projects.

## Ecosystem role

Developer infrastructure only — not a client-facing product. Supports the [[blueally-pipeline]] indirectly by giving the Claude Code environment durable memory across development sessions.

## Related

- [[claude-mem]]
- [[claude-code]]
- [[mcp-server]]
- [[esbuild]]
- [[express]]
