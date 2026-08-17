---
sourceid: firebird-query-foundations-join-customers-and-orders
lessonname: Join customers and orders
position: 6
level: beginner
goal: The learner can join customers and orders in Firebird, explain the result, and verify it against a small dataset.
contentdescription: Teach explicit INNER and LEFT JOIN syntax with customers and orders. Explain that ANSI joins transfer well among Firebird, PostgreSQL, MySQL/MariaDB, SQLite, and SQL Server, while generated keys, procedural extensions, optimizer hints, and some advanced join features do not. Compare Firebird's compact relational feature set with the broader extension ecosystems of larger platforms without making unsupported performance claims. Include one common mistake and a modification challenge.
codedescription: Return a structured CodePractice payload with entrypoint lesson.sql and exactly two files in this order: init.sql and lesson.sql. init.sql must contain only the small, deterministic setup data needed by the lesson. lesson.sql must contain only the learner-facing Firebird SQL query or commands for: Join customers and orders. The two files must be self-contained together. Never place setup statements in lesson.sql. Never use backup, restore, server administration, tuning, infrastructure configuration, or large-data examples. The email renderer must show only lesson.sql because it is the entrypoint.
concepts:
  - Firebird SQL
  - Join customers and orders
  - result verification
  - small business dataset
  - SQL developer and BI workflow
  - ANSI joins
  - migration boundaries
avoid: Avoid DBA operations, backup and restore, installation, server configuration, SQL tuning, large datasets, unexplained vendor features, destructive production statements, secrets, external services, and placing setup code in lesson.sql.
---

# Join customers and orders

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

The learner can join customers and orders in Firebird, explain the result, and verify it against a small dataset.

## Content direction

Teach explicit INNER and LEFT JOIN syntax with customers and orders. Explain that ANSI joins transfer well among Firebird, PostgreSQL, MySQL/MariaDB, SQLite, and SQL Server, while generated keys, procedural extensions, optimizer hints, and some advanced join features do not. Compare Firebird's compact relational feature set with the broader extension ecosystems of larger platforms without making unsupported performance claims. Include one common mistake and a modification challenge.

## Code direction

Return a structured CodePractice payload with entrypoint lesson.sql and exactly two files in this order: init.sql and lesson.sql. init.sql must contain only the small, deterministic setup data needed by the lesson. lesson.sql must contain only the learner-facing Firebird SQL query or commands for: Join customers and orders. The two files must be self-contained together. Never place setup statements in lesson.sql. Never use backup, restore, server administration, tuning, infrastructure configuration, or large-data examples. The email renderer must show only lesson.sql because it is the entrypoint.
