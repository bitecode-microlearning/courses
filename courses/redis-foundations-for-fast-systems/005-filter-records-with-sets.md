---
sourceid: redis-foundations-for-fast-systems-filter-records-with-sets
lessonname: Filter records with sets
position: 5
level: beginner
goal: The learner can build simple secondary indexes with sets, filter identifiers using set operations, and retrieve the matching records.
contentdescription: Use a small customer-segmentation scenario to show that core Redis filtering is modeled explicitly rather than expressed as an arbitrary WHERE clause. Store customer records in hashes and maintain sets of identifiers for region and plan. Teach SMEMBERS, SISMEMBER, SINTER, SUNION, and SDIFF, then retrieve matching hashes. Explain index consistency and the difference between members and full records. Include one common mistake and a modification challenge.
codedescription: "Return a structured CodePractice payload with exactly one self-contained file named lesson.redis, which is also the entrypoint. lesson.redis must create small customer hashes and set-based indexes, then execute SMEMBERS, SISMEMBER, SINTER, SUNION, SDIFF, and valid HGETALL commands for matching identifiers. Use ECHO \"message\" commands before the real commands they describe. Do not print expected values instead of executing commands. Do not include raw comments or lines beginning with #, //, or --. Do not use module-only commands or commands that intentionally produce errors."
concepts:
  - sets as secondary indexes
  - identifiers versus records
  - SMEMBERS
  - SISMEMBER
  - SINTER
  - SUNION
  - SDIFF
  - index consistency
  - SQL WHERE comparison
avoid: Avoid claiming core sets support arbitrary field predicates, using module-only search commands, DBA operations, large datasets, destructive production statements, secrets, external services, or placing setup code in lesson.sql.
---

# Filter records with sets

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

The learner can build simple secondary indexes with sets, filter identifiers using set operations, and retrieve the matching records.

## Content direction

Use a small customer-segmentation scenario to show that core Redis filtering is modeled explicitly rather than expressed as an arbitrary WHERE clause. Store customer records in hashes and maintain sets of identifiers for region and plan. Teach SMEMBERS, SISMEMBER, SINTER, SUNION, and SDIFF, then retrieve matching hashes. Explain index consistency and the difference between members and full records. Include one common mistake and a modification challenge.

## Code direction

Return a structured CodePractice payload with exactly one self-contained file named lesson.redis, which is also the entrypoint. lesson.redis must create small customer hashes and set-based indexes, then execute SMEMBERS, SISMEMBER, SINTER, SUNION, SDIFF, and valid HGETALL commands for matching identifiers. Use ECHO "message" commands before the real commands they describe. Do not print expected values instead of executing commands. Do not include raw comments or lines beginning with #, //, or --. Do not use module-only commands or commands that intentionally produce errors.
