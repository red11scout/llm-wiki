---
title: CognoResearcher
kind: entity
summary: Archived BlueAlly AI Strategic Assessment Platform combining cognitive analysis with research capabilities; predecessor to researchapp and aiworkflow, last committed 2026-02-19.
tags: [blueally, archived, assessment, research, pipeline]
sources: 1
updated: 2026-05-21
---

---
title: CognoResearcher
kind: entity
summary: Archived BlueAlly AI Strategic Assessment Platform combining cognitive analysis with research capabilities; predecessor to researchapp and aiworkflow, last committed 2026-02-19.
tags: [blueally, archived, assessment, research, pipeline]
sources: 1
updated: 2026-05-21
---

CognoResearcher is an archived BlueAlly platform that attempted to unify cognitive analysis with strategic research capabilities in a single AI-powered tool. It is hosted at [GitHub](https://github.com/red11scout/cognoresesearcher) but was never deployed to production. Its capabilities were eventually split and absorbed into [[researchapp]] (step-1 assessment) and [[aiworkflow]] (step-2 guided analysis) in the [[blueally-pipeline]].

## Technical details

- **Stack**: [[react]], [[vite]], [[express]], [[tailwindcss]], [[drizzle-orm]], [[neon]], [[anthropic-sdk]], [[framer-motion]]
- **Database**: [[neon]] (serverless Postgres)
- **Status**: archived, never deployed
- **Last commit**: 2026-02-19

## Ecosystem role

CognoResearcher sits in the early-generation wave of BlueAlly assessment tools alongside [[cognition-two]] (last committed 2026-02-10) and [[ai-catalyst]] (last committed 2026-02-14). It shares the same Express/Vite/Drizzle/Claude stack as those contemporaneous tools. The experiment of combining cognitive analysis with research in one platform informed the eventual separation of concerns into a discrete upstream research step ([[researchapp]]) and a downstream analysis workflow ([[aiworkflow]]).

## Related

- [[cognoresearcher-source]] — raw project inventory
- [[blueally-pipeline]] — pipeline whose early assessment stage this tool prefigured
- [[researchapp]] — absorbed the research capabilities
- [[aiworkflow]] — absorbed the cognitive analysis capabilities
- [[cognition-two]] — earlier multi-agent predecessor on the same architectural lineage
- [[ai-catalyst]] — contemporaneous archived assessment platform
- [[multi-agent-pipeline]] — architectural pattern explored in this generation of tools
