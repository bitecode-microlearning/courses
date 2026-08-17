---
sourceid: mongodb-architecture-and-scale-tradeoffs-defend-a-resilient-polyglot-architecture
lessonname: Defend a resilient polyglot architecture
position: 8
level: advanced
goal: Create and defend a production architecture that uses MongoDB only where its tradeoffs improve the system.
contentdescription: Cap the path with a multi-tenant commerce case. Require database boundaries, systems of record, document models, indexes, consistency and durability choices, failure recovery, scaling triggers, observability, and explicit reasons to retain relational storage.
codedescription: Use init.js for architecture evidence documents and main.js for a verification query that checks the proposed boundaries and risk controls.
concepts:
  - architecture decision record
  - polyglot persistence
  - system of record
  - consistency
  - resilience
  - scaling trigger
  - observability
avoid: Avoid technology monoculture, vague boxes-and-arrows, unsupported guarantees, administration walkthroughs, and setup code in main.js
---

# Defend a resilient polyglot architecture

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Create and defend a production architecture that uses MongoDB only where its tradeoffs improve the system.

## Content direction

Cap the path with a multi-tenant commerce case. Require database boundaries, systems of record, document models, indexes, consistency and durability choices, failure recovery, scaling triggers, observability, and explicit reasons to retain relational storage.

## Code direction

Use init.js for architecture evidence documents and main.js for a verification query that checks the proposed boundaries and risk controls.
