---
sourceid: clickhouse-applied-analytics-patterns-deliver-an-auditable-kpi-query
lessonname: Deliver an auditable KPI query
position: 6
level: advanced
goal: The learner can deliver an auditable kpi query in ClickHouse, explain the result, and verify it against a small dataset.
contentdescription: Use a compact columnar BI analytics scenario to teach deliver an auditable kpi query. Explain the business question, the relevant ClickHouse SQL concept, how to read the result, one common mistake, and a small modification challenge. Keep the dataset intentionally small and the focus on SQL development or BI analysis.
codedescription: Return a structured CodePractice payload with entrypoint lesson.sql and exactly two files in this order: init.sql and lesson.sql. init.sql must contain only the small, deterministic setup data needed by the lesson. lesson.sql must contain only the learner-facing ClickHouse SQL query or commands for: Deliver an auditable KPI query. The two files must be self-contained together. Never place setup statements in lesson.sql. Never use backup, restore, server administration, tuning, infrastructure configuration, or large-data examples. The email renderer must show only lesson.sql because it is the entrypoint.
concepts:
  - ClickHouse SQL
  - Deliver an auditable KPI query
  - result verification
  - small business dataset
  - SQL developer and BI workflow
avoid: Avoid DBA operations, backup and restore, installation, server configuration, SQL tuning, large datasets, unexplained vendor features, destructive production statements, secrets, external services, and placing setup code in lesson.sql.
---

# Deliver an auditable KPI query

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

The learner can deliver an auditable kpi query in ClickHouse, explain the result, and verify it against a small dataset.

## Content direction

Use a compact columnar BI analytics scenario to teach deliver an auditable kpi query. Explain the business question, the relevant ClickHouse SQL concept, how to read the result, one common mistake, and a small modification challenge. Keep the dataset intentionally small and the focus on SQL development or BI analysis.

## Code direction

Return a structured CodePractice payload with entrypoint lesson.sql and exactly two files in this order: init.sql and lesson.sql. init.sql must contain only the small, deterministic setup data needed by the lesson. lesson.sql must contain only the learner-facing ClickHouse SQL query or commands for: Deliver an auditable KPI query. The two files must be self-contained together. Never place setup statements in lesson.sql. Never use backup, restore, server administration, tuning, infrastructure configuration, or large-data examples. The email renderer must show only lesson.sql because it is the entrypoint.
