---
title: Sheepdog Society
kind: entity
summary: Deployed personal/church Next.js website for Acts 2028 Sheepdog Society with Clerk admin auth and Neon member database; last committed 2026-05-16.
tags: [personal, church, nextjs, clerk, neon, deployed]
sources: 1
updated: 2026-05-21
---

---
title: Sheepdog Society
kind: entity
summary: Deployed personal/church Next.js website for Acts 2028 Sheepdog Society with Clerk admin auth and Neon member database; last committed 2026-05-16.
tags: [personal, church, nextjs, clerk, neon, deployed]
sources: 1
updated: 2026-05-21
---

Sheepdog Society is a fully public website for the Acts 2028 Sheepdog Society, deployed at sheepdogsociety.vercel.app. It is a personal/church project — not part of the [[blueally-pipeline]] — built by the same author as the BlueAlly ecosystem.

## Architecture

- **Framework**: [[nextjs]] with [[react]] and [[tailwindcss]]
- **ORM / Database**: [[drizzle-orm]] backed by [[neon]] (serverless Postgres)
- **Authentication**: [[clerk]] for admin-only auth on an otherwise fully public site
- **Hosting**: [[vercel]]
- **Architecture locked**: 2026-04-29
- **Last commit**: 2026-05-16

## Member model

The member community area has been decommissioned. Members continue to exist as database rows in [[neon]] for the purposes of group assignment and opt-in email/SMS communications only. No interactive member-facing UI is actively served.

## Ecosystem position

This is a personal/church project that shares the [[nextjs]] + [[tailwindcss]] + [[drizzle-orm]] stack common to many BlueAlly tools, but uses [[clerk]] for authentication rather than the token-based patterns (e.g. [[jose]]) found in BlueAlly apps. Alongside [[blueally-customer-portal]], it is one of two projects in the broader codebase portfolio where Clerk has been adopted as the auth layer.

## Related

- [[sheepdogsociety-source]] — Project inventory source
- [[clerk]] — Authentication platform
- [[neon]] — Database
- [[nextjs]], [[tailwindcss]], [[drizzle-orm]] — Stack shared with BlueAlly tools
- [[fourcups]] — Another personal (non-BlueAlly) project by the same author
- [[blueally-customer-portal]] — Other project using Clerk for auth
