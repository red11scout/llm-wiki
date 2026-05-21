---
title: BlueAlly Customer Portal
kind: entity
summary: Planned authenticated multi-tenant customer portal for the BlueAlly ecosystem, tracking each organisation's 8-part AI transformation framework journey; not yet deployed.
tags: [blueally, portal, multi-tenant, auth, planned]
sources: 2
updated: 2026-05-21
---

BlueAlly Customer Portal is a planned authenticated multi-tenant portal that will track each client organisation's progress through the [[blueally-framework-journey]], BlueAlly's 8-part AI transformation framework. It is distinct from [[blueally-microsites]], which is already deployed and serves as a simpler password-protected artifact delivery portal.

## Status

Not yet deployed. [[clerk]] has been scaffolded in for multi-tenant auth but is not yet fully wired up.

## Stack

[[react]], [[tailwindcss]], [[drizzle-orm]], [[neon]], [[framer-motion]], [[clerk]] (auth, scaffolded).

## Distinction from BlueAlly Microsites

[[blueally-microsites]] is the currently deployed client delivery portal (portal.[[gofasterwithai]].com), providing password-protected landing pages with 6 resource boxes linking to generated artifacts — it uses TypeScript config files rather than a database for client config. BlueAlly Customer Portal will be a more fully featured authenticated product tracking the structured 8-part framework journey over time.

## Ecosystem role

Will become the durable home for a client's ongoing AI transformation journey within the [[blueally-pipeline]], complementing the artifact-delivery role fulfilled today by [[blueally-microsites]].

## Related

- [[blueally-customer-portal-source]] — raw project inventory
- [[blueally-framework-journey]] — the 8-part framework this portal tracks
- [[blueally-microsites]] — the currently deployed artifact delivery portal
- [[blueally-pipeline]] — the broader pipeline this portal is part of
- [[clerk]] — auth platform scaffolded in
