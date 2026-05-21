---
title: BlueAlly Framework Journey
kind: concept
summary: BlueAlly's 8-part structured framework for tracking a customer organisation's AI transformation progress; the core data model of the BlueAlly Customer Portal.
tags: [blueally, framework, ai-transformation, journey]
sources: 1
updated: 2026-05-21
---

---
title: BlueAlly Framework Journey
kind: concept
summary: BlueAlly's 8-part structured framework for tracking a customer organisation's AI transformation progress; the core data model of the BlueAlly Customer Portal.
tags: [blueally, framework, ai-transformation, journey]
sources: 1
updated: 2026-05-21
needsReview: surfaced in blueally-customer-portal-source
---

The BlueAlly Framework Journey is the 8-part structural model that organises a customer organisation's end-to-end AI transformation into discrete, trackable steps. Each step can have associated artifacts. As of the first source mention, the detailed content of the 8 parts has not been documented — this page is a stub surfaced during ingest of [[blueally-customer-portal-source]].

## Known Context

- It is the **core data model** of the [[blueally-customer-portal]], where each customer organisation has one journey instance.
- Steps and artifacts are stored in a multi-tenant [[neon]] database accessed via [[drizzle-orm]].
- The journey is presented step-by-step via the `JourneyStep` page of the portal.

## Related

- [[blueally-customer-portal]] — application that surfaces and tracks this journey
- [[blueally-pipeline]] — the broader delivery pipeline the framework journey maps onto
- [[blueally-customer-portal-source]] — source where this concept was first surfaced
