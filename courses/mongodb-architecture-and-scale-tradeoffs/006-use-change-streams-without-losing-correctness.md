---
sourceid: mongodb-architecture-and-scale-tradeoffs-use-change-streams-without-losing-correctness
lessonname: Use change streams without losing correctness
position: 6
level: advanced
goal: Design event consumers for duplicates, resumes, ordering boundaries, and reconciliation.
contentdescription: Explain change streams as a database change feed, not a complete business-event model. Cover resume tokens, at-least-once handling, idempotent consumers, ordering scope, backfills, and the transactional outbox comparison.
codedescription: Use init.js for captured event documents and main.js for an idempotent consumer-state query. Keep external brokers and cluster setup out of the executable example.
concepts:
  - change stream
  - resume token
  - at-least-once delivery
  - ordering
  - idempotent consumer
  - reconciliation
  - outbox
avoid: Avoid exactly-once claims, treating every data mutation as a domain event, external service dependencies, and setup code in main.js.
---

# Use change streams without losing correctness

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Design event consumers for duplicates, resumes, ordering boundaries, and reconciliation.

## Content direction

Explain change streams as a database change feed, not a complete business-event model. Cover resume tokens, at-least-once handling, idempotent consumers, ordering scope, backfills, and the transactional outbox comparison.

## Code direction

Use init.js for captured event documents and main.js for an idempotent consumer-state query. Keep external brokers and cluster setup out of the executable example.
