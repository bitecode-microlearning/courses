---
sourceid: postgresql-applied-analytics-patterns-model-an-analytics-mart
lessonname: Model an analytics mart
position: 1
level: advanced
goal: The learner can model an analytics mart in PostgreSQL, explain the result, and verify it against a small dataset.
contentdescription: Use a compact analytical application data scenario to teach model an analytics mart. Explain the business question, the relevant PostgreSQL SQL concept, how to read the result, one common mistake, and a small modification challenge. Keep the dataset intentionally small and the focus on SQL development or BI analysis.
codedescription: Return a structured CodePractice payload with entrypoint lesson.sql and exactly two files in this order: init.sql and lesson.sql. init.sql must contain only the small, deterministic setup data needed by the lesson. lesson.sql must contain only the learner-facing PostgreSQL SQL query or commands for: Model an analytics mart. The two files must be self-contained together. Never place setup statements in lesson.sql. Never use backup, restore, server administration, tuning, infrastructure configuration, or large-data examples. The email renderer must show only lesson.sql because it is the entrypoint.
concepts:
  - PostgreSQL SQL
  - Model an analytics mart
  - result verification
  - small business dataset
  - SQL developer and BI workflow
avoid: Avoid DBA operations, backup and restore, installation, server configuration, SQL tuning, large datasets, unexplained vendor features, destructive production statements, secrets, external services, and placing setup code in lesson.sql.
---

# Model an analytics mart

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

The learner can model an analytics mart in PostgreSQL, explain the result, and verify it against a small dataset.

## Content direction

Use a compact analytical application data scenario to teach model an analytics mart. Explain the business question, the relevant PostgreSQL SQL concept, how to read the result, one common mistake, and a small modification challenge. Keep the dataset intentionally small and the focus on SQL development or BI analysis.

## Code direction

Return a structured CodePractice payload with entrypoint lesson.sql and exactly two files in this order: init.sql and lesson.sql. init.sql must contain only the small, deterministic setup data needed by the lesson. lesson.sql must contain only the learner-facing PostgreSQL SQL query or commands for: Model an analytics mart. The two files must be self-contained together. Never place setup statements in lesson.sql. Never use backup, restore, server administration, tuning, infrastructure configuration, or large-data examples. The email renderer must show only lesson.sql because it is the entrypoint.
