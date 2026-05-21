---
type: project-inventory
captured: 2026-05-21
source: local filesystem survey
---

# Claude Mem

- **Directory**: /Users/drewgodwin/claude-mem/
- **GitHub**: https://github.com/thedotmack/claude-mem
- **Deployed**: not deployed
- **Stack**: express, esbuild
- **Database**: sqlite
- **Status**: active
- **Last commit**: 2026-02-10

## Description

Memory compression system for Claude Code that persists context across sessions. Runs as an MCP server using Express with SQLite for local storage and esbuild for bundling. Provides structured memory management enabling Claude Code to retain and recall information between conversation sessions.

## Ecosystem role

Developer infrastructure. Runs as one of 9 configured MCP servers in the Claude Code development environment, providing persistent session memory that supports productivity across all BlueAlly projects.
