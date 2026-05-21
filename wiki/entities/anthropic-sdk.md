---
title: Anthropic SDK
kind: entity
summary: Anthropic's official SDK for programmatic access to Claude models; used across multiple BlueAlly apps as the AI integration layer.
tags: [anthropic, sdk, llm, claude]
sources: 1
updated: 2026-05-21
---

---
title: Anthropic SDK
kind: entity
summary: Anthropic's official SDK for programmatic access to Claude models; used across multiple BlueAlly apps as the AI integration layer.
tags: [anthropic, sdk, llm, claude]
sources: 1
updated: 2026-05-21
needsReview: surfaced in ai-infra-sizing-source
---

The Anthropic SDK is the official client library for programmatic access to Anthropic's Claude family of models. Within the BlueAlly ecosystem it appears as the AI integration layer in multiple deployed applications.

## Known BlueAlly usage

- [[ai-infra-sizing]] — Claude used as an advisor-only layer on top of a deterministic calculation engine
- [[ai-executive-readout]] — listed in stack as Claude SDK for report generation

## Related

- [[claude-sonnet]]
- [[ai-infra-sizing]]
- [[ai-executive-readout]]
