---
title: Deterministic Scoring
kind: concept
summary: An AI design pattern that applies fixed, rule-based scoring criteria to produce consistent, auditable results rather than relying solely on probabilistic LLM output.
tags: [ai-design-pattern, scoring, architecture]
sources: 2
updated: 2026-05-21
---

Deterministic scoring is an AI design pattern in which the core scoring or calculation logic is implemented as fixed, rule-based code — producing consistent, auditable, reproducible results — while an LLM (typically Claude via the [[anthropic-sdk]]) is used only in a supplementary advisory or prose-generation role. The pattern deliberately constrains AI to where probabilistic output is acceptable (narrative, advice, encouragement) and excludes it from where exactness is required (math, rankings, financial figures).

## Rationale

Pure LLM scoring is non-deterministic: identical inputs may yield different numeric outputs across calls. For domains like financial modeling, infrastructure sizing, or performance rankings, auditability and consistency are required. Deterministic scoring satisfies this by keeping math in code and delegating only prose or insight generation to the model.

## Examples in the BlueAlly ecosystem and beyond

- **[[blueally-workbench]]** — deterministic scoring engine for Amazon SKU decisions; AI advises on selection but does not compute scores.
- **[[ai-infra-sizing]]** — deterministic calculation engine right-sizes infrastructure; Claude serves as an advisor-only layer.
- **[[ai-architecture-studio]]** — [[hyperformula]] handles financial model calculations deterministically.
- **[[godwin-family-tracker]]** — all scoring math for the 6-category, 90-point daily system lives in `shared/scoring.ts`; Claude generates prose encouragement only. (Personal project, non-BlueAlly.)

## Related

- [[anthropic-sdk]] — the supplementary AI layer in deterministic-scoring implementations
- [[hyperformula]] — spreadsheet engine used for deterministic financial calculations in AI Architecture Studio
- [[forensic-ai-opportunity-analysis]] — related discipline where financial rigor matters
- [[private-ai-investment-modeling]] — another domain where deterministic calculation is paired with AI advisory
