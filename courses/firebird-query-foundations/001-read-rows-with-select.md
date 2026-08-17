---
sourceid: firebird-query-foundations-read-rows-with-select
lessonname: Read rows with SELECT
position: 1
level: beginner
goal: The learner can read rows with select in Firebird, explain the result, and verify it against a small dataset.
contentdescription: Use a compact embedded business reporting scenario to teach SELECT in Firebird. Separate portable relational SQL from Firebird details, then compare the same basic query with PostgreSQL, MySQL/MariaDB, SQLite, and SQL Server. Explain that ordinary projection and aliases transfer well, while identifier quoting, types, functions, and later row-limiting syntax can differ. Include one common mistake and a small modification challenge.
codedescription: Return a structured CodePractice payload with entrypoint lesson.sql and exactly two files in this order: init.sql and lesson.sql. init.sql must contain only the small, deterministic setup data needed by the lesson. lesson.sql must contain only the learner-facing Firebird SQL query or commands for: Read rows with SELECT. The two files must be self-contained together. Never place setup statements in lesson.sql. Never use backup, restore, server administration, tuning, infrastructure configuration, or large-data examples. The email renderer must show only lesson.sql because it is the entrypoint.
concepts:
  - Firebird SQL
  - Read rows with SELECT
  - result verification
  - small business dataset
  - SQL developer and BI workflow
  - portable SQL
  - DBMS dialect differences
avoid: Avoid DBA operations, backup and restore, installation, server configuration, SQL tuning, large datasets, unexplained vendor features, destructive production statements, secrets, external services, and placing setup code in lesson.sql.
---

# Read rows with SELECT

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

The learner can read rows with select in Firebird, explain the result, and verify it against a small dataset.

## Content direction

Use a compact embedded business reporting scenario to teach SELECT in Firebird. Separate portable relational SQL from Firebird details, then compare the same basic query with PostgreSQL, MySQL/MariaDB, SQLite, and SQL Server. Explain that ordinary projection and aliases transfer well, while identifier quoting, types, functions, and later row-limiting syntax can differ. Include one common mistake and a small modification challenge.

## Code direction

Return a structured CodePractice payload with entrypoint lesson.sql and exactly two files in this order: init.sql and lesson.sql. init.sql must contain only the small, deterministic setup data needed by the lesson. lesson.sql must contain only the learner-facing Firebird SQL query or commands for: Read rows with SELECT. The two files must be self-contained together. Never place setup statements in lesson.sql. Never use backup, restore, server administration, tuning, infrastructure configuration, or large-data examples. The email renderer must show only lesson.sql because it is the entrypoint.
