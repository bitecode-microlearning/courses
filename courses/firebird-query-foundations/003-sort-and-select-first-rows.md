---
sourceid: firebird-query-foundations-sort-and-select-first-rows
lessonname: Sort and select first rows
position: 3
level: beginner
goal: The learner can sort and select first rows in Firebird, explain the result, and verify it against a small dataset.
contentdescription: Teach deterministic sorting and row limiting in Firebird. Compare SQL-standard OFFSET/FETCH with Firebird-specific FIRST/SKIP and ROWS, PostgreSQL/MySQL/SQLite LIMIT/OFFSET, and SQL Server TOP or OFFSET/FETCH. Explain that Firebird supports the standard form and that choosing it improves portability. Emphasize that every top-N query needs a deterministic ORDER BY. Include one common mistake and a modification challenge.
codedescription: Return a structured CodePractice payload with entrypoint lesson.sql and exactly two files in this order: init.sql and lesson.sql. init.sql must contain only the small, deterministic setup data needed by the lesson. lesson.sql must contain only the learner-facing Firebird SQL query or commands for: Sort and select first rows. The two files must be self-contained together. Never place setup statements in lesson.sql. Never use backup, restore, server administration, tuning, infrastructure configuration, or large-data examples. The email renderer must show only lesson.sql because it is the entrypoint.
concepts:
  - Firebird SQL
  - Sort and select first rows
  - result verification
  - small business dataset
  - SQL developer and BI workflow
  - OFFSET and FETCH
  - FIRST and SKIP
  - LIMIT and TOP comparison
avoid: Avoid DBA operations, backup and restore, installation, server configuration, SQL tuning, large datasets, unexplained vendor features, destructive production statements, secrets, external services, and placing setup code in lesson.sql.
---

# Sort and select first rows

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

The learner can sort and select first rows in Firebird, explain the result, and verify it against a small dataset.

## Content direction

Teach deterministic sorting and row limiting in Firebird. Compare SQL-standard OFFSET/FETCH with Firebird-specific FIRST/SKIP and ROWS, PostgreSQL/MySQL/SQLite LIMIT/OFFSET, and SQL Server TOP or OFFSET/FETCH. Explain that Firebird supports the standard form and that choosing it improves portability. Emphasize that every top-N query needs a deterministic ORDER BY. Include one common mistake and a modification challenge.

## Code direction

Return a structured CodePractice payload with entrypoint lesson.sql and exactly two files in this order: init.sql and lesson.sql. init.sql must contain only the small, deterministic setup data needed by the lesson. lesson.sql must contain only the learner-facing Firebird SQL query or commands for: Sort and select first rows. The two files must be self-contained together. Never place setup statements in lesson.sql. Never use backup, restore, server administration, tuning, infrastructure configuration, or large-data examples. The email renderer must show only lesson.sql because it is the entrypoint.
