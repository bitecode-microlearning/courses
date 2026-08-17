---
sourceid: redis-foundations-for-fast-systems-build-simple-aggregates
lessonname: Build simple aggregates
position: 9
level: beginner
goal: The learner can model running totals and grouped metrics with core Redis structures and explain which aggregation work belongs in Redis versus an analytics system.
contentdescription: Use a real-time revenue snapshot to teach deliberately maintained aggregates. Store totals in strings or hash fields with INCRBY and HINCRBY, and use sorted-set scores for grouped values that need ranking. Show how to read totals and compare groups. Explain that core Redis does not provide general GROUP BY and that broader historical analysis may belong in SQL or a BI warehouse. Include an update-and-verify challenge.
codedescription: "Return a structured CodePractice payload with exactly one self-contained file named lesson.redis, which is also the entrypoint. lesson.redis must create small aggregate keys, update them with INCRBY, HINCRBY, and ZINCRBY, then execute GET, HMGET, HGETALL, and ZREVRANGE WITHSCORES to verify totals and grouped values. Use integer values to keep arithmetic clear. Use ECHO \"message\" commands for headings and explanations. Do not include raw comments, module-only commands, or commands that intentionally produce errors."
concepts:
  - precomputed aggregates
  - running totals
  - INCRBY
  - HINCRBY
  - ZINCRBY
  - grouped metrics
  - Redis versus SQL analytics
  - result verification
avoid: Avoid claiming core Redis supports arbitrary GROUP BY or full historical analytics, using floating-point examples, DBA operations, large datasets, destructive production statements, secrets, external services, or placing setup code in lesson.sql.
---

# Build simple aggregates

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

The learner can model running totals and grouped metrics with core Redis structures and explain which aggregation work belongs in Redis versus an analytics system.

## Content direction

Use a real-time revenue snapshot to teach deliberately maintained aggregates. Store totals in strings or hash fields with INCRBY and HINCRBY, and use sorted-set scores for grouped values that need ranking. Show how to read totals and compare groups. Explain that core Redis does not provide general GROUP BY and that broader historical analysis may belong in SQL or a BI warehouse. Include an update-and-verify challenge.

## Code direction

Return a structured CodePractice payload with exactly one self-contained file named lesson.redis, which is also the entrypoint. lesson.redis must create small aggregate keys, update them with INCRBY, HINCRBY, and ZINCRBY, then execute GET, HMGET, HGETALL, and ZREVRANGE WITHSCORES to verify totals and grouped values. Use integer values to keep arithmetic clear. Use ECHO "message" commands for headings and explanations. Do not include raw comments, module-only commands, or commands that intentionally produce errors.
