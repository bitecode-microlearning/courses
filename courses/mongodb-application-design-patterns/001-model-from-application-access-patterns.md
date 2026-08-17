---
sourceid: mongodb-application-design-patterns-model-from-application-access-patterns
lessonname: Model from application access patterns
position: 1
level: intermediate
goal: Derive document boundaries from the application reads, writes, and consistency rules that matter most.
contentdescription: Begin with user journeys and query frequency, then shape a product-and-inventory model. Explain why porting every relational table into its own collection preserves joins without gaining document locality.
codedescription: Use init.js for compact requirements and sample documents. main.js must query the primary aggregate in the shape the application needs and expose one tradeoff.
concepts:
  - access-pattern-first modeling
  - aggregates
  - read and write paths
  - consistency boundary
  - relational translation trap
avoid: Avoid table-to-collection mapping by habit, speculative denormalization, unbounded documents, and setup code in main.js.
---

# Model from application access patterns

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Derive document boundaries from the application reads, writes, and consistency rules that matter most.

## Content direction

Begin with user journeys and query frequency, then shape a product-and-inventory model. Explain why porting every relational table into its own collection preserves joins without gaining document locality.

## Code direction

Use init.js for compact requirements and sample documents. main.js must query the primary aggregate in the shape the application needs and expose one tradeoff.
