---
title: ChrisBot
kind: entity
summary: Archived BlueAlly conversational AI chatbot built with Claude SDK and Neon for persistent message storage; not deployed, last committed 2026-02-25.
tags: [archived, claude-sdk, chatbot, blueally]
sources: 1
updated: 2026-05-21
---

---
title: ChrisBot
kind: entity
summary: Archived BlueAlly conversational AI chatbot built with Claude SDK and Neon for persistent message storage; not deployed, last committed 2026-02-25.
tags: [archived, claude-sdk, chatbot, blueally]
sources: 1
updated: 2026-05-21
---

ChrisBot is an archived conversational AI chatbot application built by BlueAlly, using the [[anthropic-sdk]] (Claude SDK) for AI responses and [[neon]] for persistent message storage. It was not deployed to production and serves as an early exploration of Claude SDK chatbot patterns.

## Overview

- **GitHub**: https://github.com/red11scout/chrisbot
- **Deployed**: not deployed
- **Status**: archived
- **Last commit**: 2026-02-25

## Stack

[[react]] · [[vite]] · [[express]] · [[tailwindcss]] · [[drizzle-orm]] · [[neon]] · [[anthropic-sdk]]

## Ecosystem role

ChrisBot is a standalone archived project outside the core [[blueally-pipeline]]. It predates several production BlueAlly apps and is understood to have informed the Claude SDK chatbot patterns used in later tools. It sits in the same archival cohort as [[blueally-intelligence]] and [[ai-catalyst]] as an early-stage exploration vehicle.

As an early exercise in [[claude-sdk-enablement]], ChrisBot demonstrates the pattern of pairing Claude with a Neon-backed persistence layer — a stack combination later standardised across multiple BlueAlly production apps.

## Related

- [[chrisbot-source]]
- [[anthropic-sdk]]
- [[neon]]
- [[claude-sdk-enablement]]
- [[blueally-enablement-notebooks]]
- [[blueally-intelligence]]
- [[ai-catalyst]]
