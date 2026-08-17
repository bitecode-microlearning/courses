---
sourceid: mongodb-architecture-and-scale-tradeoffs-choose-write-durability-and-idempotency
lessonname: Choose write durability and idempotency
position: 3
level: advanced
goal: Balance write concern, acknowledgement, retries, and idempotency for critical and noncritical writes.
contentdescription: Compare acknowledged durability levels and failure windows. Show how retryable operations and idempotency keys prevent duplicate business effects, and contrast with relational commit expectations.
codedescription: Use init.js for request records and main.js for an idempotent upsert with a verification query. Do not require replica-set administration.
concepts:
  - write concern
  - acknowledgement
  - durability
  - retry
  - idempotency key
  - upsert
  - failure window
avoid: Avoid equating acknowledgement with business completion, non-idempotent retries, topology administration, and setup code in main.js.
---

# Choose write durability and idempotency

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Balance write concern, acknowledgement, retries, and idempotency for critical and noncritical writes.

## Content direction

Compare acknowledged durability levels and failure windows. Show how retryable operations and idempotency keys prevent duplicate business effects, and contrast with relational commit expectations.

## Code direction

Use init.js for request records and main.js for an idempotent upsert with a verification query. Do not require replica-set administration.
