---
sourceid: mongodb-application-design-patterns-design-atomic-boundaries-and-transactions
lessonname: Design atomic boundaries and transactions
position: 4
level: intermediate
goal: Choose between single-document atomicity, idempotent workflows, and multi-document transactions.
contentdescription: Compare a self-contained order update with inventory changes across documents. Explain transaction cost, retries, failure boundaries, and when a relational transaction model is the cleaner fit.
codedescription: "Use init.js for orders and inventory. main.js should demonstrate a safe conditional single-document update and verification; discuss rather than require unsupported infrastructure transaction setup."
concepts:
  - atomic boundary
  - conditional update
  - optimistic concurrency
  - transaction
  - retry
  - idempotency
avoid: Avoid cross-document consistency hand-waving, long-running transactions, unsupported commands, and setup code in main.js.
---

# Design atomic boundaries and transactions

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Choose between single-document atomicity, idempotent workflows, and multi-document transactions.

## Content direction

Compare a self-contained order update with inventory changes across documents. Explain transaction cost, retries, failure boundaries, and when a relational transaction model is the cleaner fit.

## Code direction

Use init.js for orders and inventory. main.js should demonstrate a safe conditional single-document update and verification; discuss rather than require unsupported infrastructure transaction setup.
