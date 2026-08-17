---
sourceid: clickhouse-query-foundations-filter-event-records
lessonname: Filter event records
position: 2
level: beginner
goal: The learner can filter event records in ClickHouse, explain the result, and verify it against a small dataset.
contentdescription: Use a compact columnar BI analytics scenario to teach filter event records. Explain the business question, the relevant ClickHouse SQL concept, how to read the result, one common mistake, and a small modification challenge. Keep the dataset intentionally small and the focus on SQL development or BI analysis.
codedescription: Return a structured CodePractice payload with entrypoint lesson.sql and exactly two files in this order: init.sql and lesson.sql. init.sql must contain only the small, deterministic setup data needed by the lesson. lesson.sql must contain only the learner-facing ClickHouse SQL query or commands for: Filter event records. The two files must be self-contained together. Never place setup statements in lesson.sql. Never use backup, restore, server administration, tuning, infrastructure configuration, or large-data examples. The email renderer must show only lesson.sql because it is the entrypoint.
concepts:
  - ClickHouse SQL
  - Filter event records
  - result verification
  - small business dataset
  - SQL developer and BI workflow
avoid: Avoid DBA operations, backup and restore, installation, server configuration, SQL tuning, large datasets, unexplained vendor features, destructive production statements, secrets, external services, and placing setup code in lesson.sql.
---

# Filter event records

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

The learner can filter event records in ClickHouse, explain the result, and verify it against a small dataset.

## Content direction

Use a compact columnar BI analytics scenario to teach filter event records. Explain the business question, the relevant ClickHouse SQL concept, how to read the result, one common mistake, and a small modification challenge. Keep the dataset intentionally small and the focus on SQL development or BI analysis.

## Code direction

Return a structured CodePractice payload with entrypoint lesson.sql and exactly two files in this order: init.sql and lesson.sql. init.sql must contain only the small, deterministic setup data needed by the lesson. lesson.sql must contain only the learner-facing ClickHouse SQL query or commands for: Filter event records. The two files must be self-contained together. Never place setup statements in lesson.sql. Never use backup, restore, server administration, tuning, infrastructure configuration, or large-data examples. The email renderer must show only lesson.sql because it is the entrypoint.
