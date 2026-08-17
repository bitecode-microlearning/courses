---
sourceid: mongodb-architecture-and-scale-tradeoffs-migrate-from-relational-data-without-copying-tables
lessonname: Migrate from relational data without copying tables
position: 7
level: advanced
goal: Plan an incremental relational-to-document migration that preserves correctness and earns the document-model benefit.
contentdescription: Start from target access patterns, define aggregate boundaries, map identifiers, backfill safely, validate parity, cut over reads and writes, reconcile drift, and retain rollback options. Explain when migration should be rejected.
codedescription: Use init.js for migration-checkpoint documents and main.js for a parity query that detects missing or mismatched aggregates.
concepts:
  - incremental migration
  - aggregate redesign
  - backfill
  - parity check
  - cutover
  - reconciliation
  - rollback
avoid: Avoid big-bang migration, table-for-collection copying, irreversible cutover, dual-write assumptions, and setup code in main.js
---

# Migrate from relational data without copying tables

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Plan an incremental relational-to-document migration that preserves correctness and earns the document-model benefit.

## Content direction

Start from target access patterns, define aggregate boundaries, map identifiers, backfill safely, validate parity, cut over reads and writes, reconcile drift, and retain rollback options. Explain when migration should be rejected.

## Code direction

Use init.js for migration-checkpoint documents and main.js for a parity query that detects missing or mismatched aggregates.
