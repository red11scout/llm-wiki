---
title: Claude SDK Enablement
kind: concept
summary: BlueAlly's practice of training team members and clients to use the Anthropic Claude SDK through hands-on examples and structured learning materials.
tags: [claude-sdk, enablement, training, blueally]
sources: 3
updated: 2026-05-21
---

Claude SDK Enablement is BlueAlly's practice of building team fluency with the [[anthropic-sdk]] through concrete, runnable examples. Rather than abstract instruction, the approach produces small demonstration projects and internal tools that explore specific SDK capabilities, with that learning carried forward into production applications.

## Known enablement artefacts

| Project | Kind | Last commit | Notes |
|---|---|---|---|
| [[chrisbot]] | Archived chatbot | 2026-02-25 | Conversational AI with Neon persistence; early chatbot pattern exploration |
| [[blueally-enablement-notebooks]] | Archived Jupyter project | 2025-06-11 | NYC Tourist Assistant; internal Python/Claude SDK training material |

## Influence on production apps

Patterns explored in enablement artefacts — particularly the pairing of Claude SDK with a [[neon]] persistence layer first visible in ChrisBot — were carried forward into the full [[blueally-pipeline]].

## Related

- [[anthropic-sdk]]
- [[chrisbot]]
- [[blueally-enablement-notebooks]]
- [[blueally-pipeline]]
