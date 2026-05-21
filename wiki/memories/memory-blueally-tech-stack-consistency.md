---
title: BlueAlly Ecosystem Has a Highly Consistent Core Tech Stack
kind: concept
summary: Across ~30 BlueAlly projects, the stack converges on Next.js + Neon + Drizzle ORM + Tailwind + Framer Motion + Anthropic SDK with Vercel deployment.
tags: [memory, blueally, tech-stack, nextjs, neon, architecture, patterns]
sources: 0
updated: 2026-05-21
---

Nearly every active [[blueally-pipeline]] application uses [[nextjs]], [[neon]], [[drizzle-orm]], [[tailwindcss]], [[framer-motion]], and [[anthropic-sdk]] with [[vercel]] hosting. This consistency is strong enough that deviation (e.g., [[researchapp]] using Express/Vite, [[cognition-two]] on [[replit]]) reliably signals an older/archived project. New projects default to this stack, making [[researchapp-v2]] (Next.js rewrite of Express/Vite researchapp) a canonical modernization example. [[turborepo]] is reserved for the most complex multi-package platforms: [[atlas]], [[blueally-presenting]], and [[compass]].