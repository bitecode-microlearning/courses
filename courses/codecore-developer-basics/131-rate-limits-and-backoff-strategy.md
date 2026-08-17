---
sourceid: codecore-developer-basics-rate-limits-and-backoff-strategy
lessonname: Rate Limits and Backoff Strategy
position: 131
level: intermediate
goal: Respect rate limits and slow down retries when a service asks the client to wait.
contentdescription: Week 44 topic: Resilient external calls. Build on the previous lesson, 'Retry and Timeout Basics', explaining the concept through the running example: fetching or sending domain records to an external system. Prepare for 'Idempotency and Safe Retry Design'. Emphasize both interview reasoning (Discuss reliability basics around external dependencies.) and daily coding value (Make calls that fail safely and do not accidentally duplicate work.).
codedescription: Handle a 429-like response by waiting or scheduling a later retry with backoff. Keep the code short, plain Python, with English comments only.
concepts:
  - rate limit
  - 429
  - backoff
  - retry delay
  - client behavior
avoid: Avoid hammering the service after failures. Avoid toy fruit/shopping-cart examples, avoid clever one-liners, avoid large frameworks, avoid introducing future concepts too early.
---

# Rate Limits and Backoff Strategy

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Respect rate limits and slow down retries when a service asks the client to wait.

## Content direction

Week 44 topic: Resilient external calls. Build on the previous lesson, 'Retry and Timeout Basics', explaining the concept through the running example: fetching or sending domain records to an external system. Prepare for 'Idempotency and Safe Retry Design'. Emphasize both interview reasoning (Discuss reliability basics around external dependencies.) and daily coding value (Make calls that fail safely and do not accidentally duplicate work.).

## Code direction

Handle a 429-like response by waiting or scheduling a later retry with backoff. Keep the code short, plain Python, with English comments only.
