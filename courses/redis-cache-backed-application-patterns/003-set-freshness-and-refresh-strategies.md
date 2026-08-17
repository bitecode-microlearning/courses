---
sourceid: redis-cache-backed-application-patterns-set-freshness-and-refresh-strategies
lessonname: Set freshness and refresh strategies
position: 3
level: intermediate
goal: The learner can choose TTL and refresh behavior from business freshness requirements and verify the resulting key lifecycle.
contentdescription: Use catalog price and feature-flag examples to compare short TTL, longer TTL, explicit invalidation, and refresh-ahead decisions. Explain freshness budgets, stale data impact, synchronized expiry risk, and why TTL is a product decision rather than a random number. Show how soft-freshness metadata can coexist with Redis expiration and include a scenario-selection challenge.
codedescription: "Return a structured CodePractice payload with exactly one self-contained file named lesson.redis, which is also the entrypoint. Create cache entries with SET EX and hashes containing refreshed_at and refresh_after fields, then execute TTL, HGETALL, EXPIRE, PERSIST, and TTL to inspect and modify lifecycle behavior deterministically. Use expirations long enough for reliable execution and ECHO \"message\" commands for explanations. Do not include waits, raw comments, module-only commands, external services, or intentional errors."
concepts:
  - freshness budget
  - TTL
  - explicit invalidation
  - refresh-ahead
  - soft expiration
  - synchronized expiry
  - SET EX
  - EXPIRE
  - PERSIST
avoid: Avoid timing-dependent sleeps, one-size-fits-all TTL advice, promises of perfect freshness, eviction-policy administration, vendor-only modules, or infrastructure tuning.
---

# Set freshness and refresh strategies

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

The learner can choose TTL and refresh behavior from business freshness requirements and verify the resulting key lifecycle.

## Content direction

Use catalog price and feature-flag examples to compare short TTL, longer TTL, explicit invalidation, and refresh-ahead decisions. Explain freshness budgets, stale data impact, synchronized expiry risk, and why TTL is a product decision rather than a random number. Show how soft-freshness metadata can coexist with Redis expiration and include a scenario-selection challenge.

## Code direction

Return a structured CodePractice payload with exactly one self-contained file named lesson.redis, which is also the entrypoint. Create cache entries with SET EX and hashes containing refreshed_at and refresh_after fields, then execute TTL, HGETALL, EXPIRE, PERSIST, and TTL to inspect and modify lifecycle behavior deterministically. Use expirations long enough for reliable execution and ECHO "message" commands for explanations. Do not include waits, raw comments, module-only commands, external services, or intentional errors.
