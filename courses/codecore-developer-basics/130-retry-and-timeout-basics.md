---
sourceid: codecore-developer-basics-retry-and-timeout-basics
lessonname: Retry and Timeout Basics
position: 130
level: intermediate
goal: Use timeouts and retries so external calls do not hang forever or fail too easily.
contentdescription: Week 44 topic: Resilient external calls. Build on the previous lesson, 'Pagination in API Data Collection', explaining the concept through the running example: fetching or sending domain records to an external system. Prepare for 'Rate Limits and Backoff Strategy'. Emphasize both interview reasoning (Discuss reliability basics around external dependencies.) and daily coding value (Make calls that fail safely and do not accidentally duplicate work.).
codedescription: Wrap a mock API call with timeout configuration and limited retry attempts. Keep the code short, plain Python, with English comments only.
concepts:
  - timeout
  - retry
  - transient failure
  - external dependency
avoid: Avoid infinite retries. Avoid toy fruit/shopping-cart examples, avoid clever one-liners, avoid large frameworks, avoid introducing future concepts too early.
---

# Retry and Timeout Basics

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Use timeouts and retries so external calls do not hang forever or fail too easily.

## Content direction

Week 44 topic: Resilient external calls. Build on the previous lesson, 'Pagination in API Data Collection', explaining the concept through the running example: fetching or sending domain records to an external system. Prepare for 'Rate Limits and Backoff Strategy'. Emphasize both interview reasoning (Discuss reliability basics around external dependencies.) and daily coding value (Make calls that fail safely and do not accidentally duplicate work.).

## Code direction

Wrap a mock API call with timeout configuration and limited retry attempts. Keep the code short, plain Python, with English comments only.
