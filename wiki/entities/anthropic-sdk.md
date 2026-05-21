---
title: Anthropic SDK
kind: entity
summary: Anthropic's official SDK for programmatic access to Claude models; used across multiple BlueAlly apps as the AI integration layer, including Atlas, AI Executive Readout, AI Infrastructure Sizing, BlueAlly AI App, and the BlueAlly AI Website (Next.js).
tags: [sdk, ai, anthropic, claude, blueally]
sources: 8
updated: 2026-05-21
---

The Anthropic SDK is Anthropic's official library for programmatic access to Claude language models. Within the BlueAlly ecosystem it is the standard AI integration layer, used across multiple deployed applications.

## Usage in BlueAlly apps

- [[atlas]] — investment intelligence and ROI analysis
- [[ai-executive-readout]] — executive report generation
- [[ai-infra-sizing]] — Claude as advisor-only layer alongside deterministic calculations
- [[blueally-ai-app]] — generates structured [[consulting-brief]]s from executive-supplied business challenges
- [[aiwebsiteblueally-next]] — AI integration in the Next.js marketing site rewrite

## Related

- [[claude-sonnet]] — specific Claude model used in [[ai-architecture-studio]] for PRD generation
- [[blueally-pipeline]] — the delivery pipeline whose apps rely on this SDK
- [[blueally-ai-app]] — newest consumer of the SDK
