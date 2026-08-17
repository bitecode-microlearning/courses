---
sourceid: redis-cache-backed-application-patterns-design-keys-and-value-shapes-for-services
lessonname: Design keys and value shapes for services
position: 2
level: intermediate
goal: The learner can design namespaced, versioned keys and choose value shapes that match a service's read and update paths.
contentdescription: Use a multi-tenant profile service to compare one oversized catch-all key with explicit tenant, entity, and version namespaces. Choose strings, hashes, sets, or sorted sets from the operations the service needs. Explain collision avoidance, bounded key scope, schema evolution, and why key design is an API contract between application code and Redis. End with a key-review challenge.
codedescription: "Return a structured CodePractice payload with exactly one self-contained file named lesson.redis, which is also the entrypoint. Create namespaced tenant profile hashes, a set index, and a version pointer with HSET, SADD, SET, TYPE, HGETALL, SMEMBERS, and GET. Use ECHO \"message\" commands to explain each access path and verify every stored structure through real command results. Use executable core Redis commands only; do not include raw comments, module-only commands, external services, or intentional errors."
concepts:
  - namespaces
  - tenant isolation
  - versioned keys
  - value-shape selection
  - hashes
  - sets
  - schema evolution
  - access-pattern contracts
avoid: Avoid unbounded catch-all keys, ambiguous identifiers, hidden tenant boundaries, arbitrary denormalization, vendor-only modules, secrets, or infrastructure configuration.
---

# Design keys and value shapes for services

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

The learner can design namespaced, versioned keys and choose value shapes that match a service's read and update paths.

## Content direction

Use a multi-tenant profile service to compare one oversized catch-all key with explicit tenant, entity, and version namespaces. Choose strings, hashes, sets, or sorted sets from the operations the service needs. Explain collision avoidance, bounded key scope, schema evolution, and why key design is an API contract between application code and Redis. End with a key-review challenge.

## Code direction

Return a structured CodePractice payload with exactly one self-contained file named lesson.redis, which is also the entrypoint. Create namespaced tenant profile hashes, a set index, and a version pointer with HSET, SADD, SET, TYPE, HGETALL, SMEMBERS, and GET. Use ECHO "message" commands to explain each access path and verify every stored structure through real command results. Use executable core Redis commands only; do not include raw comments, module-only commands, external services, or intentional errors.
