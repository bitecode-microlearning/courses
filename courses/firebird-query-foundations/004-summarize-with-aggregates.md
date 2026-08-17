---
sourceid: firebird-query-foundations-summarize-with-aggregates
lessonname: Summarize with aggregates
position: 4
level: beginner
goal: The learner can summarize with aggregates in Firebird, explain the result, and verify it against a small dataset.
contentdescription: Teach COUNT, SUM, AVG, MIN, and MAX with a compact Firebird dataset. Compare the highly portable aggregate pattern with common cross-DBMS differences in numeric types, integer division, rounding, date functions, string aggregation, and treatment of NULL. Explain why checking result types matters when moving analytical SQL between Firebird and another DBMS. Include one common mistake and a modification challenge.
codedescription: Return a structured CodePractice payload with entrypoint lesson.sql and exactly two files in this order: init.sql and lesson.sql. init.sql must contain only the small, deterministic setup data needed by the lesson. lesson.sql must contain only the learner-facing Firebird SQL query or commands for: Summarize with aggregates. The two files must be self-contained together. Never place setup statements in lesson.sql. Never use backup, restore, server administration, tuning, infrastructure configuration, or large-data examples. The email renderer must show only lesson.sql because it is the entrypoint.
concepts:
  - Firebird SQL
  - Summarize with aggregates
  - result verification
  - small business dataset
  - SQL developer and BI workflow
  - aggregate portability
  - result types
avoid: Avoid DBA operations, backup and restore, installation, server configuration, SQL tuning, large datasets, unexplained vendor features, destructive production statements, secrets, external services, and placing setup code in lesson.sql.
---

# Summarize with aggregates

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

The learner can summarize with aggregates in Firebird, explain the result, and verify it against a small dataset.

## Content direction

Teach COUNT, SUM, AVG, MIN, and MAX with a compact Firebird dataset. Compare the highly portable aggregate pattern with common cross-DBMS differences in numeric types, integer division, rounding, date functions, string aggregation, and treatment of NULL. Explain why checking result types matters when moving analytical SQL between Firebird and another DBMS. Include one common mistake and a modification challenge.

## Code direction

Return a structured CodePractice payload with entrypoint lesson.sql and exactly two files in this order: init.sql and lesson.sql. init.sql must contain only the small, deterministic setup data needed by the lesson. lesson.sql must contain only the learner-facing Firebird SQL query or commands for: Summarize with aggregates. The two files must be self-contained together. Never place setup statements in lesson.sql. Never use backup, restore, server administration, tuning, infrastructure configuration, or large-data examples. The email renderer must show only lesson.sql because it is the entrypoint.
