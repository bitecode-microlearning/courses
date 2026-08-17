---
sourceid: mongodb-application-design-patterns-integrate-mongodb-with-relational-systems
lessonname: Integrate MongoDB with relational systems
position: 7
level: intermediate
goal: Define clear ownership and synchronization boundaries in a system that uses both MongoDB and a relational database.
contentdescription: Model a product experience in MongoDB while payments remain relational. Explain system of record, identifiers, events, eventual consistency, reconciliation, and why dual writes are dangerous.
codedescription: Use init.js for compact integration-event documents and main.js for an idempotent read that identifies events requiring reconciliation.
concepts:
  - polyglot persistence
  - system of record
  - event
  - eventual consistency
  - reconciliation
  - dual-write hazard
avoid: Avoid distributed transactions by assumption, unclear ownership, secrets, external services, and setup code in main.js
---

# Integrate MongoDB with relational systems

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Define clear ownership and synchronization boundaries in a system that uses both MongoDB and a relational database.

## Content direction

Model a product experience in MongoDB while payments remain relational. Explain system of record, identifiers, events, eventual consistency, reconciliation, and why dual writes are dangerous.

## Code direction

Use init.js for compact integration-event documents and main.js for an idempotent read that identifies events requiring reconciliation.
