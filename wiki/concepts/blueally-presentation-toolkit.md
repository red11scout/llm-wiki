---
title: BlueAlly Presentation Toolkit
kind: concept
summary: BlueAlly's suite of web-native presentation tools replacing PowerPoint, including AI Executive Briefing, blueally-workshop-experience, blueally-presenting, blueally-presenting-workshop, and AI Systems Presentation.
tags: [blueally, presentation, toolkit]
sources: 2
updated: 2026-05-21
---

The BlueAlly Presentation Toolkit is the collection of web-native tools BlueAlly uses to deliver executive and workshop presentations without PowerPoint. Each tool in the toolkit serves a distinct delivery context, ranging from animated executive briefings to interactive workshop environments to a fully connected knowledge graph platform.

## Members of the toolkit

| App | Description |
|---|---|
| [[ai-executive-briefing]] | Interactive animated executive AI strategy presentation built with Next.js and Framer Motion |
| [[ai-systems-presentation]] | Web-native animated presentation on AI systems architecture |
| [[blueally-workshop-experience]] | Workshop presentation application |
| [[blueally-presenting]] | AI-powered [[knowledge-graph-presentation]] platform; the next evolution beyond animated HTML |
| [[blueally-presenting-workshop]] | Modern AI Systems Workshop platform with 49 slides, presenter mode, and Claude-powered editing |

## Evolution

Early toolkit members ([[ai-executive-briefing]], [[ai-systems-presentation]]) use Framer Motion animated HTML as the primary presentation mechanism. [[blueally-presenting]] represents the strategic next step: a [[knowledge-graph-presentation]] data model where content nodes and edges are reusable across presentations, powered by [[tiptap]] and [[anthropic-sdk]] within a [[turborepo]] monorepo.

## Related

- [[blueally-pipeline]] — the broader delivery pipeline the toolkit feeds into
- [[knowledge-graph-presentation]] — architectural concept underlying BlueAlly Presenting
- [[framer-motion]] — animation library used by the earlier toolkit members
