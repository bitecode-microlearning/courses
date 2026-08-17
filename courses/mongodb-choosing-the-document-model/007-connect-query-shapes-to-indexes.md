---
sourceid: mongodb-choosing-the-document-model-connect-query-shapes-to-indexes
lessonname: Connect query shapes to indexes
position: 7
level: beginner
goal: Explain how common query shapes guide index design and why flexible documents do not remove indexing decisions.
contentdescription: Introduce indexes through the catalog queries already used in the course. Compare compound index order with a relational index, cover selectivity and write cost, and use explain output conceptually to verify the choice.
codedescription: Use init.js for the dataset and index definition, and main.js for the indexed query plus a compact explain check. Keep the example deterministic and focused on one query shape.
concepts:
  - query shape
  - compound index
  - selectivity
  - sort support
  - explain
  - read-write tradeoff
avoid: Avoid index-every-field advice, tuning theater, unexplained plans, server administration, and setup code in main.js
---

# Connect query shapes to indexes

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Explain how common query shapes guide index design and why flexible documents do not remove indexing decisions.

## Content direction

Introduce indexes through the catalog queries already used in the course. Compare compound index order with a relational index, cover selectivity and write cost, and use explain output conceptually to verify the choice.

## Code direction

Use init.js for the dataset and index definition, and main.js for the indexed query plus a compact explain check. Keep the example deterministic and focused on one query shape.
