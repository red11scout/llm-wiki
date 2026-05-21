---
title: BlueAlly Presentation Toolkit
kind: concept
summary: BlueAlly's suite of web-native presentation tools replacing PowerPoint, including AI Executive Briefing, blueally-workshop-experience, blueally-presenting, blueally-presenting-workshop, and AI Systems Presentation.
tags: [blueally, presentation, toolkit]
sources: 2
updated: 2026-05-21
---

The BlueAlly Presentation Toolkit is BlueAlly's family of web-native presentation and workshop delivery applications, collectively replacing traditional PowerPoint decks for executive briefings and live workshop sessions.

## Members

| App | Role |
|-----|------|
| [[ai-executive-briefing]] | Interactive animated executive AI strategy presentation |
| [[blueally-workshop-experience]] | Web-native workshop presentation application |
| [[blueally-presenting]] | Web-native general presentation utility |
| [[blueally-presenting-workshop]] | Database-backed Modern AI Systems Workshop with 49 slides, presenter mode, and Claude-powered editing |
| [[ai-systems-presentation]] | Interactive animated presentation on AI systems architecture |

## Design principles

- All tools are web-native, leveraging [[react]], [[framer-motion]], and [[tailwindcss]] instead of static slide formats.
- AI-assisted content capabilities (via [[anthropic-sdk]]) are embedded where live editing or customization is required.
- Tools are deployed on [[vercel]] and integrated into the broader [[blueally-pipeline]].

## Related
- [[blueally-pipeline]]
- [[framer-motion]]
- [[vercel]]
