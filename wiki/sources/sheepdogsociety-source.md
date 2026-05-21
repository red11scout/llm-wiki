---
title: Sheepdog Society — Project Inventory
kind: source
summary: Project inventory for Sheepdog Society, a deployed personal/church Next.js site for Acts 2028 with Clerk auth and Neon; last committed 2026-05-16.
tags: [personal, church, nextjs, clerk, neon, drizzle-orm, deployed]
sources: 1
updated: 2026-05-21
---

---
title: Sheepdog Society — Project Inventory
kind: source
summary: Project inventory for Sheepdog Society, a deployed personal/church Next.js site for Acts 2028 with Clerk auth and Neon; last committed 2026-05-16.
tags: [personal, church, nextjs, clerk, neon, drizzle-orm, deployed]
sources: 1
updated: 2026-05-21
---

Raw source: `raw/notes/projects/sheepdogsociety.md`, captured 2026-05-21 via local filesystem survey.

## Summary

[[sheepdogsociety]] is the website for the Acts 2028 Sheepdog Society — a personal/church project deployed at sheepdogsociety.vercel.app. It is a fully public site with admin-only authentication provided by [[clerk]]. The member community area has been decommissioned; members persist as database rows in [[neon]] for group assignment and opt-in email/SMS communications only. The architecture was locked as of 2026-04-29, with the last commit on 2026-05-16.

## Key facts

- **GitHub**: https://github.com/red11scout/sheepdogsociety
- **Deployed**: sheepdogsociety.vercel.app (via [[vercel]])
- **Stack**: [[nextjs]], [[react]], [[tailwindcss]], [[drizzle-orm]], [[clerk]]
- **Database**: [[neon]]
- **Status**: deployed; architecture locked 2026-04-29
- **Last commit**: 2026-05-16
- **Ecosystem**: personal/church — not part of the [[blueally-pipeline]]

## Notes

Uses the same [[nextjs]] + [[tailwindcss]] + [[drizzle-orm]] stack as many BlueAlly tools, but diverges by using [[clerk]] for authentication rather than the token-based auth patterns (e.g. [[jose]]) used in BlueAlly applications. This makes it the second project — alongside [[blueally-customer-portal]] — where Clerk is the chosen auth layer.

## Related

- [[sheepdogsociety]] — Entity page for the site
- [[clerk]] — Auth platform used here and scaffolded into BlueAlly Customer Portal
- [[neon]] — Database layer
- [[nextjs]], [[tailwindcss]], [[drizzle-orm]] — Shared stack with BlueAlly apps
