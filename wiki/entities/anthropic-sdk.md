---
title: Anthropic SDK
kind: entity
summary: Anthropic's official SDK for programmatic access to Claude models; used across multiple BlueAlly apps as the AI integration layer, including Atlas, AI Executive Readout, AI Infrastructure Sizing, BlueAlly AI App, BlueAlly AI Solution Navigator, BlueAlly AI Website (Next.js), and BlueAlly Customer Portal.
tags: [anthropic, claude, sdk, ai-integration, infrastructure]
sources: 8
updated: 2026-05-21
---

The Anthropic SDK is the official client library for accessing Claude models programmatically. BlueAlly uses it as the standard AI integration layer across the portfolio, always calling Claude for advisory, generation, or grounding tasks rather than exposing raw HTTP calls.

## BlueAlly Apps Using Anthropic SDK

- [[atlas]] — token usage projections and ROI analysis
- [[ai-executive-readout]] — executive readout report generation
- [[ai-infra-sizing]] — Claude as advisor-only layer for infrastructure sizing
- [[blueally-ai-app]] — consulting brief generation via Claude
- [[blueally-ai-solution-navigator]] — AI solution selection backed by Claude intelligence
- [[aiwebsiteblueally-next]] — Next.js marketing website rewrite
- [[blueally-customer-portal]] — planned multi-tenant customer portal (not yet deployed)

## Related

- [[claude-sonnet]] — specific Claude model variant used in AI Architecture Studio for PRD generation
- [[blueally-pipeline]] — pipeline where Claude-powered apps operate
