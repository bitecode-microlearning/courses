---
sourceid: mongodb-application-design-patterns-evolve-document-shapes-safely
lessonname: Evolve document shapes safely
position: 2
level: intermediate
goal: Plan additive schema evolution and make mixed document versions safe for readers and writers.
contentdescription: Introduce schema-on-read versus uncontrolled shape, version fields, defaults, backfills, tolerant readers, and staged deployment. Compare with relational migrations and explain the operational tradeoff.
codedescription: Use init.js for two document versions and main.js for a query that normalizes both shapes into one application-facing result.
concepts:
  - schema evolution
  - schema version
  - tolerant reader
  - additive change
  - backfill
  - defaults
avoid: Avoid calling MongoDB schemaless, big-bang migrations, silent data loss, and setup code in main.js.
---

# Evolve document shapes safely

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Plan additive schema evolution and make mixed document versions safe for readers and writers.

## Content direction

Introduce schema-on-read versus uncontrolled shape, version fields, defaults, backfills, tolerant readers, and staged deployment. Compare with relational migrations and explain the operational tradeoff.

## Code direction

Use init.js for two document versions and main.js for a query that normalizes both shapes into one application-facing result.
