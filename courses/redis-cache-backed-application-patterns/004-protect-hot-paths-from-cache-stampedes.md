---
sourceid: redis-cache-backed-application-patterns-protect-hot-paths-from-cache-stampedes
lessonname: Protect hot paths from cache stampedes
position: 4
level: intermediate
goal: The learner can explain a cache stampede, use a bounded request-coalescing guard, and identify the guard's ownership and failure limitations.
contentdescription: Use a popular homepage key expiring under load to show how concurrent misses can overwhelm the origin. Introduce request coalescing with SET NX EX, bounded ownership, retry or stale-response choices, and metrics for contention. Be explicit that a simple Redis guard is not a universal distributed-lock solution. Include a failure-mode challenge for a worker that stops before releasing ownership.
codedescription: "Return a structured CodePractice payload with exactly one self-contained file named lesson.redis, which is also the entrypoint. Create a hot cache key and a bounded refresh guard, then execute SET with NX and EX, GET, TTL, SET for refreshed data, and DEL for an owner-completed cleanup. Use ECHO \"message\" commands to label acquisition, contention observation, refresh, and release. Use deterministic core Redis commands only and do not claim the guard proves safe distributed locking. Do not include raw comments, module-only commands, waits, external services, or intentional errors."
concepts:
  - cache stampede
  - request coalescing
  - SET NX EX
  - bounded ownership
  - contention
  - stale response
  - origin protection
  - lock limitations
avoid: Avoid presenting a simple guard as a universally safe distributed lock, unbounded waits, missing expiry, destructive production keys, vendor-only modules, or server administration.
---

# Protect hot paths from cache stampedes

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

The learner can explain a cache stampede, use a bounded request-coalescing guard, and identify the guard's ownership and failure limitations.

## Content direction

Use a popular homepage key expiring under load to show how concurrent misses can overwhelm the origin. Introduce request coalescing with SET NX EX, bounded ownership, retry or stale-response choices, and metrics for contention. Be explicit that a simple Redis guard is not a universal distributed-lock solution. Include a failure-mode challenge for a worker that stops before releasing ownership.

## Code direction

Return a structured CodePractice payload with exactly one self-contained file named lesson.redis, which is also the entrypoint. Create a hot cache key and a bounded refresh guard, then execute SET with NX and EX, GET, TTL, SET for refreshed data, and DEL for an owner-completed cleanup. Use ECHO "message" commands to label acquisition, contention observation, refresh, and release. Use deterministic core Redis commands only and do not claim the guard proves safe distributed locking. Do not include raw comments, module-only commands, waits, external services, or intentional errors.
