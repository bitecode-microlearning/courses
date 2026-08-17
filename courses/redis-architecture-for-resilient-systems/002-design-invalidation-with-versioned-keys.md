---
sourceid: redis-architecture-for-resilient-systems-design-invalidation-with-versioned-keys
lessonname: Design invalidation with versioned keys
position: 2
level: advanced
goal: The learner can design an invalidation strategy using versioned keys and explain its write, read, cleanup, and rollback behavior.
contentdescription: Use a configuration service to compare delete-on-write with immutable versioned values plus a current-version pointer. Explain ordering between durable writes and cache changes, partial failure, rollback, orphan cleanup, and why invalidation is a workflow rather than one command. Include a decision challenge for high-fan-out cached data.
codedescription: "Return a structured CodePractice payload with exactly one self-contained file named lesson.redis, which is also the entrypoint. Create two immutable configuration-version hashes and a current-version pointer, then execute HSET, SET, GET, HGETALL, MGET, EXPIRE on the retired version, and verification reads. Use ECHO \"message\" commands to show publish, pointer switch, rollback option, and cleanup. Use core Redis commands only; do not include raw comments, module-only commands, external services, or intentional errors."
concepts:
  - cache invalidation
  - versioned keys
  - pointer switch
  - immutable cached values
  - partial failure
  - rollback
  - cleanup
  - write ordering
avoid: Avoid presenting deletion as the only invalidation strategy, hiding durable-write ordering, using destructive production examples, vendor-only modules, or server administration.
---

# Design invalidation with versioned keys

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

The learner can design an invalidation strategy using versioned keys and explain its write, read, cleanup, and rollback behavior.

## Content direction

Use a configuration service to compare delete-on-write with immutable versioned values plus a current-version pointer. Explain ordering between durable writes and cache changes, partial failure, rollback, orphan cleanup, and why invalidation is a workflow rather than one command. Include a decision challenge for high-fan-out cached data.

## Code direction

Return a structured CodePractice payload with exactly one self-contained file named lesson.redis, which is also the entrypoint. Create two immutable configuration-version hashes and a current-version pointer, then execute HSET, SET, GET, HGETALL, MGET, EXPIRE on the retired version, and verification reads. Use ECHO "message" commands to show publish, pointer switch, rollback option, and cleanup. Use core Redis commands only; do not include raw comments, module-only commands, external services, or intentional errors.
