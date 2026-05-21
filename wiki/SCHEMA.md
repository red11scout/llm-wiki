# SCHEMA — Wiki Page & Cross-Reference Conventions

This file is the contract for how every wiki page is structured. It is imported verbatim as the
system prompt for ingest, query, and lint. Follow it exactly. When these rules conflict with your
instinct, the rules win.

---

## 1. Page kinds

Every page is exactly one kind, and lives in the matching directory:

| kind         | directory         | what it is                                                        |
|--------------|-------------------|-------------------------------------------------------------------|
| `entity`     | `wiki/entities/`  | a specific named thing: a person, company, product, project, place |
| `concept`    | `wiki/concepts/`  | an idea, pattern, method, framework, or topic                     |
| `source`     | `wiki/sources/`   | one ingested source, summarized — the bridge from `raw/` to the wiki |
| `comparison` | `wiki/concepts/`  | a page whose job is to contrast two or more entities/concepts     |

One thing per page. Do not bundle two entities into one file. If a page is trying to be about two
things, split it and link them.

---

## 2. Slugs and identity

- The filename (minus `.md`) is the slug, and the slug **is** the page's identity.
- Slugs are `kebab-case`, lowercase, ASCII, no spaces: `value-readiness-matrix`, `a-e-global-media`.
- Slugs are stable. Renaming a page means updating every `[[old-slug]]` that points to it — do the
  rename, then grep for inbound links and fix them in the same pass.
- Never reuse a slug for a different subject.

---

## 3. Frontmatter (required on every page)

Every page begins with YAML frontmatter. No exceptions. The sync layer reads these fields into the
`wiki_pages` table; `summary` is what appears in `index.md`.

```yaml
---
title: Value-Readiness Matrix
kind: concept            # entity | concept | source | comparison
summary: BlueAlly's 2-axis use-case prioritization framework with 5.5/5.5 quadrant cuts.
tags: [bluely-ip, assessment, prioritization]
sources: 3               # how many raw sources contributed to this page
updated: 2026-05-21
---
```

Rules:
- `summary` is exactly one line, plain prose, no trailing period required, ≤ 160 chars. It must make
  sense out of context because it is read in the index.
- `tags` are kebab-case, reused across pages (don't invent `prioritisation` if `prioritization` exists).
- `sources` is an integer; increment it when a new source contributes.
- `updated` is ISO date; set it on every edit.

---

## 4. Page body

After the frontmatter, write the page as clean markdown:

- Open with a one-paragraph definition/orientation — what this is, in plain language.
- Use `##` sections. Keep them tight; this is reference material, not an essay.
- State claims plainly. Where a claim comes from a specific source, link the source page:
  `... feeds the eight-week engagement (see [[ae-global-media-workshop-source]]).`
- End with a `## Related` section listing the most important `[[links]]` if they aren't already
  woven into the prose.

---

## 5. Cross-references (`[[slug]]`) — this is how the graph exists

- Link to another page with `[[slug]]`, e.g. `[[mativ-holdings]]`, `[[epoch-framework]]`.
- The sync layer parses every `[[slug]]` into an `edges` row. **If you don't link it, the graph and
  the dashboard will not show the relationship.** Linking is not optional decoration; it is data entry.
- Link the first meaningful mention of any entity/concept that has its own page. Don't link the same
  slug ten times in one page — once near its first mention is enough.
- If you mention something important that does **not** yet have a page, create a stub page for it
  (frontmatter + one-line body + `needsReview: surfaced in <slug>`) and link it. Lint will catch
  unstubbed mentions, but it's cheaper to stub as you go.

### Edge relations and confidence

When you assert a typed relationship beyond a plain reference, name it and rate it. Relations in use:
`references` (default for a plain `[[link]]`), `contains`, `derived_from`, `supersedes`,
`contradicts`. Confidence rubric:

| confidence  | score      | meaning                                              |
|-------------|------------|------------------------------------------------------|
| `EXTRACTED` | 1.0        | stated directly in a source — not your inference     |
| `INFERRED`  | 0.55–0.95  | your reasoned inference (0.95 near-certain → 0.55 speculative) |
| `AMBIGUOUS` | —          | flag for human review; do not assert as fact         |

Default a plain `[[link]]` to `references / EXTRACTED`. Only downgrade when you are genuinely inferring.

---

## 6. `index.md` — the catalog

`index.md` is a flat catalog of every page, grouped by kind, one line each: a link plus the page's
`summary`. Update it on **every** ingest. Format:

```markdown
# Index

## Entities
- [[a-e-global-media]] — Media company; subject of a two-morning NYC AI use-case workshop.
- [[mativ-holdings]] — Manufacturing client; yield-AI portal engagement.

## Concepts
- [[value-readiness-matrix]] — BlueAlly's 2-axis use-case prioritization framework.

## Sources
- [[ae-global-media-workshop-source]] — Notes from the A+E workshop, May 2026.
```

The index is the navigation layer that lets queries work without embeddings at moderate scale
(hundreds of pages). Keep it accurate; a stale index is worse than none.

---

## 7. `log.md` — append-only history

Every operation appends one entry. Never rewrite or delete entries. Each entry header is exactly:

```markdown
## [YYYY-MM-DD] <op> | <subject>
```

where `<op>` is `ingest`, `query`, `lint`, or `crystallize`. This keeps the log greppable:
`grep "^## \[" log.md | tail -5`. Under the header, a few bullets: sources touched, pages created or
updated, contradictions raised. Example:

```markdown
## [2026-05-21] ingest | A+E Global Media workshop notes
- source: raw/imessage/2026-05-21/a1b2c3.md
- created: [[ae-global-media-workshop-source]]
- updated: [[a-e-global-media]], [[value-readiness-matrix]], [[epoch-framework]]
- contradiction: none
```

---

## 8. Contradictions and supersession (never overwrite silently)

When a new source conflicts with an existing page:
1. Do **not** quietly change the old claim.
2. Add a `relation: contradicts` edge between the two pages (or `supersedes` if the new source is
   clearly authoritative and dated later).
3. Record it in `needs-review.md` with both claims stated plainly.
4. Note it in the `log.md` entry.
5. Only resolve (rewrite the page, drop the older claim) after a human confirms — or when supersession
   is unambiguous (same author, explicit correction, newer date).

Stale-but-uncontradicted claims are a lint concern, not an ingest concern — flag, don't delete.

---

## 9. `raw/` is immutable

You read from `raw/**`. You never edit or delete anything there. The entire wiki must be
re-derivable from `raw/` by re-running ingest — that is the guarantee that makes the source layer
trustworthy. If a raw source is wrong, that fact gets recorded in the wiki, not by editing the source.
