---
sourceid: redis-cache-backed-application-patterns-model-ephemeral-workflow-state
lessonname: Model ephemeral workflow state
position: 5
level: intermediate
goal: The learner can model short-lived workflow state with lists, sets, and sorted sets while keeping durable business state elsewhere.
contentdescription: Use an image-processing workflow to separate durable job records from fast ephemeral state: a pending list, an active-worker set, a scheduled-retry sorted set, and expiring progress metadata. Explain ordering, uniqueness, retry timestamps, cleanup, and why Redis workflow state needs an explicit recovery story. Include a structure-selection challenge.
codedescription: "Return a structured CodePractice payload with exactly one self-contained file named lesson.redis, which is also the entrypoint. Create a pending list, active-worker set, retry sorted set, and progress hash using RPUSH, LRANGE, SADD, SMEMBERS, ZADD, ZRANGE WITHSCORES, HSET, EXPIRE, and HGETALL. Use ECHO \"message\" commands to connect each structure to its workflow responsibility. Use core Redis commands only; do not include blocking commands, waits, raw comments, module-only commands, external services, or intentional errors."
concepts:
  - ephemeral workflow state
  - lists
  - sets
  - sorted sets
  - retries
  - progress metadata
  - recovery boundary
  - durable business state
avoid: Avoid implying Redis automatically provides durable workflow recovery, using blocking or timing-dependent demonstrations, vendor-only modules, secrets, or infrastructure operations.
---

# Model ephemeral workflow state

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

The learner can model short-lived workflow state with lists, sets, and sorted sets while keeping durable business state elsewhere.

## Content direction

Use an image-processing workflow to separate durable job records from fast ephemeral state: a pending list, an active-worker set, a scheduled-retry sorted set, and expiring progress metadata. Explain ordering, uniqueness, retry timestamps, cleanup, and why Redis workflow state needs an explicit recovery story. Include a structure-selection challenge.

## Code direction

Return a structured CodePractice payload with exactly one self-contained file named lesson.redis, which is also the entrypoint. Create a pending list, active-worker set, retry sorted set, and progress hash using RPUSH, LRANGE, SADD, SMEMBERS, ZADD, ZRANGE WITHSCORES, HSET, EXPIRE, and HGETALL. Use ECHO "message" commands to connect each structure to its workflow responsibility. Use core Redis commands only; do not include blocking commands, waits, raw comments, module-only commands, external services, or intentional errors.
