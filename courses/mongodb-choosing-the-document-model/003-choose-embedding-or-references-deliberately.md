---
sourceid: mongodb-choosing-the-document-model-choose-embedding-or-references-deliberately
lessonname: Choose embedding or references deliberately
position: 3
level: beginner
goal: Choose embedding, references, or a hybrid model from relationship cardinality, ownership, change rate, and read patterns.
contentdescription: Compare product snapshots embedded in orders with live product records referenced by ID. Explain one-to-few, one-to-many, many-to-many, duplication, stale copies, and the relational alternative.
codedescription: Use init.js for customers, products, and orders. In main.js, query an embedded snapshot and a referenced identifier, making the different consistency expectations visible.
concepts:
  - embedding
  - references
  - cardinality
  - snapshots
  - duplication
  - consistency
  - hybrid modeling
avoid: Avoid treating lookup as a default join replacement, ignoring update frequency, or creating unbounded embedded collections.
---

# Choose embedding or references deliberately

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Choose embedding, references, or a hybrid model from relationship cardinality, ownership, change rate, and read patterns.

## Content direction

Compare product snapshots embedded in orders with live product records referenced by ID. Explain one-to-few, one-to-many, many-to-many, duplication, stale copies, and the relational alternative.

## Code direction

Use init.js for customers, products, and orders. In main.js, query an embedded snapshot and a referenced identifier, making the different consistency expectations visible.
