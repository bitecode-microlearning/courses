---
sourceid: redis-foundations-for-fast-systems-manage-freshness-with-expiration
lessonname: Manage freshness with expiration
position: 7
level: beginner
goal: The learner can apply and inspect expiration, explain cache freshness, and distinguish a missing key from a key that has no expiration.
contentdescription: Use a dashboard-cache scenario to explain why Redis is useful for temporary and frequently refreshed data. Teach SET with EX, EXPIRE, TTL, PERSIST, and EXISTS. Explain positive TTL values and the special TTL results for missing or persistent keys. Discuss cache freshness and stale data at a conceptual level, without drifting into server administration. Include a safe modification challenge using short but non-disruptive expirations.
codedescription: "Return a structured CodePractice payload with exactly one self-contained file named lesson.redis, which is also the entrypoint. lesson.redis must create temporary and persistent keys, then execute SET with EX, EXPIRE, TTL, PERSIST, EXISTS, and GET. Keep expirations long enough that normal lesson execution is deterministic. Use ECHO \"message\" commands for headings and explain TTL result meanings before executing the relevant commands. Do not include waits, raw comments, module-only commands, or commands that intentionally produce errors."
concepts:
  - expiration
  - TTL
  - SET EX
  - EXPIRE
  - PERSIST
  - EXISTS
  - cache freshness
  - temporary versus persistent keys
  - deterministic verification
avoid: Avoid sleep or timing-dependent demonstrations, eviction-policy administration, installation, server configuration, destructive production statements, secrets, external services, or placing setup code in lesson.sql.
---

# Manage freshness with expiration

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

The learner can apply and inspect expiration, explain cache freshness, and distinguish a missing key from a key that has no expiration.

## Content direction

Use a dashboard-cache scenario to explain why Redis is useful for temporary and frequently refreshed data. Teach SET with EX, EXPIRE, TTL, PERSIST, and EXISTS. Explain positive TTL values and the special TTL results for missing or persistent keys. Discuss cache freshness and stale data at a conceptual level, without drifting into server administration. Include a safe modification challenge using short but non-disruptive expirations.

## Code direction

Return a structured CodePractice payload with exactly one self-contained file named lesson.redis, which is also the entrypoint. lesson.redis must create temporary and persistent keys, then execute SET with EX, EXPIRE, TTL, PERSIST, EXISTS, and GET. Keep expirations long enough that normal lesson execution is deterministic. Use ECHO "message" commands for headings and explain TTL result meanings before executing the relevant commands. Do not include waits, raw comments, module-only commands, or commands that intentionally produce errors.
