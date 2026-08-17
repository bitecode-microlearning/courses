---
sourceid: mongodb-choosing-the-document-model-decide-when-to-use-mongodb-or-a-relational-database
lessonname: Decide when to use MongoDB or a relational database
position: 8
level: beginner
goal: Choose a database for a realistic workload and defend the decision using explicit technical criteria.
contentdescription: Compare product catalogs, financial ledgers, content systems, reporting warehouses, and mixed workloads. Evaluate aggregate locality, relationship complexity, constraints, transaction scope, schema change, query variability, and team expertise. Include hybrid and relational-first outcomes.
codedescription: "Use init.js for a compact workload-requirements collection and main.js to filter and score candidate workloads. The code supports the decision exercise; it must not pretend a score replaces architecture judgment."
concepts:
  - technology selection
  - workload fit
  - transaction scope
  - referential integrity
  - schema evolution
  - polyglot persistence
avoid: Avoid vendor advocacy, false either-or choices, universal benchmarks, and choosing from data size alone
---

# Decide when to use MongoDB or a relational database

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Choose a database for a realistic workload and defend the decision using explicit technical criteria.

## Content direction

Compare product catalogs, financial ledgers, content systems, reporting warehouses, and mixed workloads. Evaluate aggregate locality, relationship complexity, constraints, transaction scope, schema change, query variability, and team expertise. Include hybrid and relational-first outcomes.

## Code direction

Use init.js for a compact workload-requirements collection and main.js to filter and score candidate workloads. The code supports the decision exercise; it must not pretend a score replaces architecture judgment.
