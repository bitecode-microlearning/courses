---
sourceid: mongodb-architecture-and-scale-tradeoffs-select-a-shard-key-and-expose-hotspots
lessonname: Select a shard key and expose hotspots
position: 4
level: advanced
goal: Evaluate shard-key candidates for distribution, query targeting, cardinality, monotonic growth, and operational risk.
contentdescription: Compare tenant, time, hashed, and compound candidates. Explain scatter-gather queries, jumbo ranges, hot tenants, resharding cost, and why relational partitioning has related but different tradeoffs.
codedescription: Use init.js for sample request-distribution documents and main.js for an aggregation that reveals skew in a candidate key. Keep actual sharding commands out of the learner exercise.
concepts:
  - shard key
  - cardinality
  - frequency
  - monotonicity
  - query targeting
  - hotspot
  - skew
avoid: Avoid random shard-key selection, even-distribution-only reasoning, cluster administration, and setup code in main.js.
---

# Select a shard key and expose hotspots

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Evaluate shard-key candidates for distribution, query targeting, cardinality, monotonic growth, and operational risk.

## Content direction

Compare tenant, time, hashed, and compound candidates. Explain scatter-gather queries, jumbo ranges, hot tenants, resharding cost, and why relational partitioning has related but different tradeoffs.

## Code direction

Use init.js for sample request-distribution documents and main.js for an aggregation that reveals skew in a candidate key. Keep actual sharding commands out of the learner exercise.
