---
sourceid: codecore-developer-basics-idempotency-and-safe-retry-design
lessonname: Idempotency and Safe Retry Design
position: 132
level: intermediate
goal: Understand why retrying a write operation can create duplicates unless the operation is idempotent.
contentdescription: Week 44 topic: Resilient external calls. Build on the previous lesson, 'Rate Limits and Backoff Strategy', explaining the concept through the running example: fetching or sending domain records to an external system. Prepare for 'Load Balancers beyond Traffic Distribution'. Emphasize both interview reasoning (Discuss reliability basics around external dependencies.) and daily coding value (Make calls that fail safely and do not accidentally duplicate work.).
codedescription: Use an idempotency key or unique request id when sending a create-like operation. Keep the code short, plain Python, with English comments only.
concepts:
  - idempotency
  - safe retry
  - duplicate prevention
  - request id
avoid: Avoid retrying writes blindly. Avoid toy fruit/shopping-cart examples, avoid clever one-liners, avoid large frameworks, avoid introducing future concepts too early.
---

# Idempotency and Safe Retry Design

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Understand why retrying a write operation can create duplicates unless the operation is idempotent.

## Content direction

Week 44 topic: Resilient external calls. Build on the previous lesson, 'Rate Limits and Backoff Strategy', explaining the concept through the running example: fetching or sending domain records to an external system. Prepare for 'Load Balancers beyond Traffic Distribution'. Emphasize both interview reasoning (Discuss reliability basics around external dependencies.) and daily coding value (Make calls that fail safely and do not accidentally duplicate work.).

## Code direction

Use an idempotency key or unique request id when sending a create-like operation. Keep the code short, plain Python, with English comments only.
