---
title: Clerk
kind: entity
summary: Authentication and user-management platform used in Sheepdog Society for admin auth and scaffolded into BlueAlly Customer Portal for multi-tenant auth; not yet fully wired in the portal.
tags: [auth, platform, saas]
sources: 3
updated: 2026-05-21
---

Clerk is a hosted authentication and user-management platform providing drop-in auth components, session management, and multi-tenant organization support for Next.js and other frameworks.

## Usage in this portfolio

- **[[sheepdogsociety]]** — Used for admin-only authentication on an otherwise fully public church/personal site; the most complete Clerk integration in the portfolio as of 2026-05-16.
- **[[blueally-customer-portal]]** — Scaffolded in as the planned multi-tenant auth layer for the BlueAlly portal; not yet fully wired up as of the first source mention.

In both cases Clerk was chosen instead of the token-based authentication patterns (e.g. [[jose]] Edge middleware) used in other BlueAlly tools such as [[blueally-microsites]].

## Related

- [[sheepdogsociety]] — Deployed project with active Clerk admin auth
- [[blueally-customer-portal]] — Planned multi-tenant portal with Clerk scaffolded
- [[jose]] — JWT library used for token-based auth in other BlueAlly apps
- [[neon]] — Database layer paired with Clerk in both projects
- [[nextjs]] — Framework context for Clerk integration
