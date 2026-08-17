---
sourceid: redis-foundations-for-fast-systems-update-counters-and-numeric-fields
lessonname: Update counters and numeric fields
position: 4
level: beginner
goal: The learner can update counters and numeric hash fields atomically and verify the new values.
contentdescription: Use a real-time campaign dashboard to teach counters as a natural Redis workload. Explain INCR, INCRBY, DECR, and HINCRBY, including why atomic server-side updates are safer than read-modify-write logic in an application. Show integer counters and numeric fields in hashes, interpret returned values, mention numeric-value requirements without intentionally triggering errors, and include a small challenge.
codedescription: "Return a structured CodePractice payload with exactly one self-contained file named lesson.redis, which is also the entrypoint. lesson.redis must create valid numeric string and hash fields, then execute INCR, INCRBY, DECR, HINCRBY, GET, HMGET, and HGETALL to update and verify them. Use ECHO \"message\" commands for headings and concise explanations. Execute every relevant command for real results. Do not include raw comments or lines beginning with #, //, or --. Do not use module-only commands or commands that intentionally produce errors."
concepts:
  - atomic counters
  - INCR
  - INCRBY
  - DECR
  - HINCRBY
  - numeric strings and hash fields
  - read-modify-write risk
  - result verification
avoid: Avoid concurrency claims beyond atomic individual commands, floating-point complexity, DBA operations, installation, large datasets, destructive production statements, secrets, external services, or placing setup code in lesson.sql.
---

# Update counters and numeric fields

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

The learner can update counters and numeric hash fields atomically and verify the new values.

## Content direction

Use a real-time campaign dashboard to teach counters as a natural Redis workload. Explain INCR, INCRBY, DECR, and HINCRBY, including why atomic server-side updates are safer than read-modify-write logic in an application. Show integer counters and numeric fields in hashes, interpret returned values, mention numeric-value requirements without intentionally triggering errors, and include a small challenge.

## Code direction

Return a structured CodePractice payload with exactly one self-contained file named lesson.redis, which is also the entrypoint. lesson.redis must create valid numeric string and hash fields, then execute INCR, INCRBY, DECR, HINCRBY, GET, HMGET, and HGETALL to update and verify them. Use ECHO "message" commands for headings and concise explanations. Execute every relevant command for real results. Do not include raw comments or lines beginning with #, //, or --. Do not use module-only commands or commands that intentionally produce errors.
