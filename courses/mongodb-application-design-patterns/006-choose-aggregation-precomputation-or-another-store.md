---
sourceid: mongodb-application-design-patterns-choose-aggregation-precomputation-or-another-store
lessonname: Choose aggregation, precomputation, or another store
position: 6
level: intermediate
goal: Select an analytical strategy based on freshness, complexity, latency, and workload isolation.
contentdescription: Compare on-demand aggregation, stored summaries, relational reporting, and dedicated analytical systems. Keep MongoDB in scope without forcing operational documents to serve every reporting need.
codedescription: Use init.js for a small event dataset and main.js for a concise aggregation whose limitations motivate the design discussion.
concepts:
  - aggregation
  - materialized summary
  - freshness
  - workload isolation
  - operational analytics
  - system boundary
avoid: Avoid BI-only positioning, treating aggregation pipelines as a warehouse replacement, and setup code in main.js.
---

# Choose aggregation, precomputation, or another store

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Select an analytical strategy based on freshness, complexity, latency, and workload isolation.

## Content direction

Compare on-demand aggregation, stored summaries, relational reporting, and dedicated analytical systems. Keep MongoDB in scope without forcing operational documents to serve every reporting need.

## Code direction

Use init.js for a small event dataset and main.js for a concise aggregation whose limitations motivate the design discussion.
