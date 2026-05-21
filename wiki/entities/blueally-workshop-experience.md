---
title: BlueAlly Workshop Experience
kind: entity
summary: Deployed BlueAlly interactive animated presentation platform for live AI workshops; 28 slides across 7 sections with a 3-layer animation system and no database; last committed 2026-03-28.
tags: [blueally, presentation-toolkit, workshop-delivery, next-js, framer-motion]
sources: 2
updated: 2026-05-21
---

BlueAlly Workshop Experience is a deployed, web-native interactive animated HTML presentation platform built to replace PowerPoint for live client-facing AI workshops. It ships 28 slides across 7 sections, powered by 12 slide type renderers and a 3-layer animation system. All content lives in TypeScript files — there is no database. [[zustand]] manages presentation state and [[framer-motion]] handles the entire animation pipeline. It runs on port 3055 via the `experience-dev` launch config and is deployed at blueally-workshop-experience.vercel.app via [[vercel]].

## Stack

- **Framework**: Next.js + [[react]]
- **Styling**: [[tailwindcss]]
- **Animation**: [[framer-motion]] (3-layer animation system)
- **State**: [[zustand]]
- **Database**: none
- **Deployment**: [[vercel]] (blueally-workshop-experience.vercel.app)

## Slide structure

28 slides across 7 sections, rendered through 12 distinct slide type renderers. All slide content is authored directly in TypeScript source files, keeping the platform fully static and zero-dependency on a database or CMS.

## Ecosystem role

Workshop delivery platform within the BlueAlly ecosystem. Used for live, client-facing AI workshop presentations — providing a polished web-native alternative to PowerPoint with rich animations and interactive elements. Part of the [[blueally-presentation-toolkit]] alongside [[ai-executive-briefing]], [[blueally-presenting]], and [[blueally-presenting-workshop]].

## Related

- [[blueally-presentation-toolkit]]
- [[blueally-presenting-workshop]]
- [[blueally-presenting]]
- [[ai-executive-briefing]]
- [[ai-systems-presentation]]
- [[blueally-workshop-experience-source]]
