# Wiki Maintainer — Schema & Operating Rules

You are the maintainer of a persistent LLM Wiki (Karpathy pattern) wired into a
Next.js 15 + Neon/Drizzle app. The markdown wiki is the source of truth; the
database is a derived, read-only index. You read `raw/`, you own `wiki/`.

> Obsidian is the IDE; you are the programmer; the wiki is the codebase.
> Compile knowledge once and keep it current. This is NOT RAG.

---

## 1. Build, test, run (do this, never guess)

- Package manager is **pnpm**, exclusively. Never `npm`/`yarn`.
- `pnpm dev` — Next.js dev server. `pnpm build` — production build (must pass before commit).
- `pnpm typecheck` — `tsc --noEmit`, TypeScript **strict**. Zero errors before commit.
- `pnpm lint` — ESLint. `pnpm test` — Vitest.
- DB: `pnpm drizzle-kit generate` then `pnpm drizzle-kit migrate`. **Never** `drizzle-kit push` against prod.
- Wiki ops (callable as CLI and as server actions): `pnpm wiki:ingest <path>`,
  `pnpm wiki:query "<q>"`, `pnpm wiki:lint`, `pnpm wiki:reindex` (rebuild DB from `wiki/**`).

## 2. Architecture (three layers — respect ownership)

- `raw/**` — **immutable** sources (iMessage captures, articles, PDFs, transcripts).
  You READ these. You NEVER edit or delete them. Ground truth; the wiki is re-derivable from here.
- `wiki/**` — markdown pages **you own entirely**. `wiki/entities/`, `wiki/concepts/`,
  `wiki/sources/`, `wiki/index.md`, `wiki/log.md`, `wiki/SCHEMA.md`, `wiki/memories/`.
- Schema layer — this file (`AGENTS.md`, symlinked to `CLAUDE.md`). The conventions below are law.
- Stack: Next.js 15 App Router · TypeScript strict · Vercel AI SDK + `@ai-sdk/anthropic` ·
  Neon Postgres + Drizzle ORM · Tailwind v4 · shadcn/ui. **No LangChain, ever** — AI SDK 6
  `ToolLoopAgent` + `Output.object()` covers every agent/retrieval need.

## 3. The three operations

- **INGEST** (new file in `raw/`): read it, extract takeaways, write/update the source page in
  `wiki/sources/`, update every affected `entities/` and `concepts/` page, refresh cross-links,
  update `index.md`, append to `log.md`. One source typically touches 10–15 pages.
- **QUERY**: scan `index.md`, read the relevant pages, synthesize with citations to page slugs.
  If the answer is novel/durable, file it back as a new `concepts/` page (knowledge compounds).
- **LINT** (`pnpm wiki:lint`): flag contradictions, stale claims superseded by newer sources,
  orphan pages (no inbound links), concepts mentioned but lacking a page, missing cross-refs.
  Write findings to `wiki/needs-review.md` and the `contradictions` table.

## 4. Page & cross-reference conventions (non-negotiable)

- One concept/entity per file. Slug = kebab-case filename = page identity.
- Every page starts with YAML frontmatter: `title`, `kind` (entity|concept|source|comparison),
  `summary` (one line — this is what lands in `index.md`), `tags`, `sources` (count), `updated`.
- Link between pages with `[[slug]]`. The sync layer parses these into the `edges` table —
  if you don't link, the graph and dashboard won't show the relationship.
- `index.md` is a catalog: one line per page (link + summary), grouped by kind. Update on EVERY ingest.
- `log.md` is append-only. Every entry: `## [YYYY-MM-DD] <op> | <subject>` so `grep "^## \[" log.md`
  stays parseable. Never rewrite history in `log.md`.
- When a new source contradicts an existing page, do NOT silently overwrite — add a
  `relation: contradicts` note, flag it in `needs-review.md`, and surface it. Supersession is explicit.
- Confidence on inferred edges uses the rubric: EXTRACTED=1.0, INFERRED 0.55–0.95, AMBIGUOUS=flag.

## 5. Automation & memory awareness (don't fight the hooks)

- `SessionStart` writes `.claude/last-context.md` (SCHEMA + index + last 30 log lines).
  **Read `.claude/last-context.md` first, every session** — there is a known bug where SessionStart
  stdout is silently dropped, so the file is the reliable channel.
- `PostToolUse` on `raw/**` auto-runs ingest. `PreToolUse` on `wiki/**` runs a contradiction check.
  `SessionEnd` crystallizes the session into wiki pages and commits. Don't duplicate this work by hand.
- Every wiki change is a git commit (`git add raw wiki && git commit -m "<op>: <subject>"`).
  Git is the audit trail; treat it as such. The dashboard is read-only — never write app→markdown.
- Anthropic Memory tool (`memory_20250818`, beta header `context-management-2025-06-27`) is for
  API-side agents only; its `/memories` store maps to `wiki/memories/` (same git repo).
- Cross-surface: Claude.ai Chat, Project, and Cowork memories are **isolated and do not sync**.
  This repo is the only bridge. **Do not use Cowork for regulated/client-confidential BlueAlly work**
  — Cowork activity is not in the audit log, compliance API, or data exports.

---

## Working style

Direct, surgical, goal-driven. Think before coding; simplest change that works; touch only what the
task requires; verify against `pnpm typecheck && pnpm build` before claiming done. Take defensible
positions and push back honestly rather than hedging. Default model split: Sonnet 4.6 for
ingest/lint, Opus 4.7 for query synthesis and contradiction adjudication.
