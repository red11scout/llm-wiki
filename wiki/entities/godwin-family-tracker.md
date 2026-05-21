---
title: Godwin Family Tracker
kind: entity
summary: Personal daily task-scoring app for the 6 Godwin children, with deterministic 1–5 scoring across 3 dimensions, WebSocket live updates, PIN auth, and Claude-generated encouragement; not deployed, last committed 2026-02-24.
tags: [personal, family, deterministic-scoring, websocket]
sources: 1
updated: 2026-05-21
---

---
title: Godwin Family Tracker
kind: entity
summary: Personal daily task-scoring app for the 6 Godwin children, with deterministic 1–5 scoring across 3 dimensions, WebSocket live updates, PIN auth, and Claude-generated encouragement; not deployed, last committed 2026-02-24.
tags: [personal, family, deterministic-scoring, websocket]
sources: 1
updated: 2026-05-21
---

Godwin Family Tracker is a personal daily task-scoring application designed to be displayed on the living room TV. It tracks performance for the 6 Godwin children — Scout, Pace, Arch, Bryce, Knox, and Wylder — across 6 scoring categories organized into 3 dimensions (completion, attitude, timeliness), each rated on a 1–5 scale, for a maximum of 90 points per day. It is not part of the [[blueally-pipeline]] and has not been publicly deployed.

See [[godwin-family-tracker-source]] for the raw project inventory.

## Scoring model

All scoring arithmetic is deterministic, implemented in `shared/scoring.ts`. The [[anthropic-sdk]] (Claude) is used solely for generating prose encouragement messages — a deliberate application of the [[deterministic-scoring]] pattern where AI supplements but does not replace rule-based calculation.

Daily rankings are awarded as Gold, Silver, or Bronze tiers based on accumulated point totals.

## Features

- **6 scoring categories** across 3 dimensions: completion, attitude, timeliness
- **1–5 scale** per category; 90-point daily maximum
- **WebSocket live updates** — scores refresh in real time on the TV display
- **PIN authentication** — access control for score entry
- **Gold / Silver / Bronze tier rankings** — daily leaderboard for the children
- **AI-generated encouragement** — Claude produces prose motivational messages from deterministic score data

## Stack

[[react]], [[vite]], [[express]], [[tailwindcss]], [[drizzle-orm]], [[neon]], [[anthropic-sdk]]

This stack mirrors the React + Vite + Express + Drizzle + Neon combination used in early-generation BlueAlly tools (e.g., [[blueally-intelligence]], [[cognoresearcher]]), reflecting a consistent personal technology baseline across projects.

## Metadata

- **GitHub**: https://github.com/red11scout/godwinfamilyapp
- **Deployed**: not deployed
- **Last commit**: 2026-02-24
- **Status**: active

## Related

- [[godwin-family-tracker-source]] — raw project inventory
- [[fourcups]] — another personal (non-BlueAlly) project by the same author using an overlapping stack
- [[deterministic-scoring]] — pattern used for all scoring math
- [[anthropic-sdk]] — used for AI encouragement generation only
