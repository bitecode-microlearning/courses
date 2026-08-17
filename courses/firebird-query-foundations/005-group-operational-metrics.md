---
sourceid: firebird-query-foundations-group-operational-metrics
lessonname: Group operational metrics
position: 5
level: beginner
goal: The learner can group operational metrics in Firebird, explain the result, and verify it against a small dataset.
contentdescription: Teach GROUP BY and HAVING with compact operational metrics. Show which parts are portable and explain that engines can differ in how strictly they accept selected expressions that are not grouped or aggregated. Encourage explicit, standards-oriented grouping that behaves predictably in Firebird, PostgreSQL, MySQL/MariaDB, SQLite, and SQL Server. Include one common mistake and a modification challenge.
codedescription: Return a structured CodePractice payload with entrypoint lesson.sql and exactly two files in this order: init.sql and lesson.sql. init.sql must contain only the small, deterministic setup data needed by the lesson. lesson.sql must contain only the learner-facing Firebird SQL query or commands for: Group operational metrics. The two files must be self-contained together. Never place setup statements in lesson.sql. Never use backup, restore, server administration, tuning, infrastructure configuration, or large-data examples. The email renderer must show only lesson.sql because it is the entrypoint.
concepts:
  - Firebird SQL
  - Group operational metrics
  - result verification
  - small business dataset
  - SQL developer and BI workflow
  - GROUP BY portability
  - standards-oriented SQL
avoid: Avoid DBA operations, backup and restore, installation, server configuration, SQL tuning, large datasets, unexplained vendor features, destructive production statements, secrets, external services, and placing setup code in lesson.sql.
---

# Group operational metrics

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

The learner can group operational metrics in Firebird, explain the result, and verify it against a small dataset.

## Content direction

Teach GROUP BY and HAVING with compact operational metrics. Show which parts are portable and explain that engines can differ in how strictly they accept selected expressions that are not grouped or aggregated. Encourage explicit, standards-oriented grouping that behaves predictably in Firebird, PostgreSQL, MySQL/MariaDB, SQLite, and SQL Server. Include one common mistake and a modification challenge.

## Code direction

Return a structured CodePractice payload with entrypoint lesson.sql and exactly two files in this order: init.sql and lesson.sql. init.sql must contain only the small, deterministic setup data needed by the lesson. lesson.sql must contain only the learner-facing Firebird SQL query or commands for: Group operational metrics. The two files must be self-contained together. Never place setup statements in lesson.sql. Never use backup, restore, server administration, tuning, infrastructure configuration, or large-data examples. The email renderer must show only lesson.sql because it is the entrypoint.
