---
title: Anthropic SDK
kind: entity
summary: Anthropic's official SDK for programmatic access to Claude models; used across multiple BlueAlly apps as the AI integration layer, including the BlueAlly AI Website (Next.js).
tags: [ai, anthropic, sdk, claude]
sources: 5
updated: 2026-05-21
---

The Anthropic SDK is Anthropic's official library for programmatic access to Claude language models. Across the BlueAlly ecosystem it is the standard AI integration layer, wiring Claude capabilities into pipeline apps, readout tools, education platforms, and the marketing website.

## BlueAlly apps using the Anthropic SDK

- [[ai-architecture-studio]] — uses Claude for PRD generation
- [[ai-executive-readout]] — uses Claude SDK for readout report generation
- [[ai-infra-sizing]] — uses Claude as an advisor-only layer alongside deterministic calculations
- [[ai-visual-intelligence-library]] — powers the Claude-grounded Ask drawer
- [[aiwebsiteblueally-next]] — Claude SDK integrated into the Next.js marketing website rewrite

## Related

- [[claude-sonnet]] — specific Claude model used in AI Architecture Studio for PRD generation
- [[blueally-pipeline]] — pipeline of apps relying on this SDK
