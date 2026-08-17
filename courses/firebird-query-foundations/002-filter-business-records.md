---
sourceid: firebird-query-foundations-filter-business-records
lessonname: Filter business records
position: 2
level: beginner
goal: The learner can filter business records in Firebird, explain the result, and verify it against a small dataset.
contentdescription: Teach filtering through a compact Firebird reporting scenario. Contrast portable predicates such as comparisons, IN, BETWEEN, and NULL checks with portability traps in boolean values, date arithmetic, case sensitivity, and string functions across PostgreSQL, MySQL/MariaDB, SQLite, and SQL Server. Explain why explicit NULL handling and portable predicates reduce migration cost. Include one common mistake and a modification challenge.
codedescription: Return a structured CodePractice payload with entrypoint lesson.sql and exactly two files in this order: init.sql and lesson.sql. init.sql must contain only the small, deterministic setup data needed by the lesson. lesson.sql must contain only the learner-facing Firebird SQL query or commands for: Filter business records. The two files must be self-contained together. Never place setup statements in lesson.sql. Never use backup, restore, server administration, tuning, infrastructure configuration, or large-data examples. The email renderer must show only lesson.sql because it is the entrypoint.
concepts:
  - Firebird SQL
  - Filter business records
  - result verification
  - small business dataset
  - SQL developer and BI workflow
  - predicate portability
  - NULL semantics
avoid: Avoid DBA operations, backup and restore, installation, server configuration, SQL tuning, large datasets, unexplained vendor features, destructive production statements, secrets, external services, and placing setup code in lesson.sql.
---

# Filter business records

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

The learner can filter business records in Firebird, explain the result, and verify it against a small dataset.

## Content direction

Teach filtering through a compact Firebird reporting scenario. Contrast portable predicates such as comparisons, IN, BETWEEN, and NULL checks with portability traps in boolean values, date arithmetic, case sensitivity, and string functions across PostgreSQL, MySQL/MariaDB, SQLite, and SQL Server. Explain why explicit NULL handling and portable predicates reduce migration cost. Include one common mistake and a modification challenge.

## Code direction

Return a structured CodePractice payload with entrypoint lesson.sql and exactly two files in this order: init.sql and lesson.sql. init.sql must contain only the small, deterministic setup data needed by the lesson. lesson.sql must contain only the learner-facing Firebird SQL query or commands for: Filter business records. The two files must be self-contained together. Never place setup statements in lesson.sql. Never use backup, restore, server administration, tuning, infrastructure configuration, or large-data examples. The email renderer must show only lesson.sql because it is the entrypoint.
