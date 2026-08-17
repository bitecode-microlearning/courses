---
sourceid: redis-foundations-for-fast-systems-count-matching-records
lessonname: Count matching records
position: 8
level: beginner
goal: The learner can count records represented by sets, sorted-set ranges, and stored counters, then choose the count that matches the business definition.
contentdescription: Use a compact operations dashboard to compare several meanings of count. Teach SCARD for set membership, ZCARD for total ranked members, ZCOUNT for score ranges, and GET for a maintained counter. Explain that these counts answer different questions and that the data model must match the metric definition. Include result verification, one common counting mistake, and a small challenge.
codedescription: "Return a structured CodePractice payload with exactly one self-contained file named lesson.redis, which is also the entrypoint. lesson.redis must create a small set, sorted set, and numeric counter, then execute SCARD, ZCARD, ZCOUNT, GET, and appropriate verification reads. Use ECHO \"message\" commands before the commands whose real results they describe. Do not print expected values instead of executing commands. Do not include raw comments or lines beginning with #, //, or --. Do not use module-only commands or commands that intentionally produce errors."
concepts:
  - SCARD
  - ZCARD
  - ZCOUNT
  - maintained counters
  - metric definitions
  - total versus range counts
  - result verification
avoid: Avoid scanning a large keyspace, claiming every count is automatically maintained, DBA operations, installation, destructive production statements, secrets, external services, or placing setup code in lesson.sql.
---

# Count matching records

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

The learner can count records represented by sets, sorted-set ranges, and stored counters, then choose the count that matches the business definition.

## Content direction

Use a compact operations dashboard to compare several meanings of count. Teach SCARD for set membership, ZCARD for total ranked members, ZCOUNT for score ranges, and GET for a maintained counter. Explain that these counts answer different questions and that the data model must match the metric definition. Include result verification, one common counting mistake, and a small challenge.

## Code direction

Return a structured CodePractice payload with exactly one self-contained file named lesson.redis, which is also the entrypoint. lesson.redis must create a small set, sorted set, and numeric counter, then execute SCARD, ZCARD, ZCOUNT, GET, and appropriate verification reads. Use ECHO "message" commands before the commands whose real results they describe. Do not print expected values instead of executing commands. Do not include raw comments or lines beginning with #, //, or --. Do not use module-only commands or commands that intentionally produce errors.
