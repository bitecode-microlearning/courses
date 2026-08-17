---
sourceid: cassandra-data-analysis-workflows-design-a-table-for-a-query
lessonname: Design a table for a query
position: 1
level: intermediate
goal: The learner can design a table for a query in Cassandra, explain the result, and verify it against a small dataset.
contentdescription: Use a compact query-first application data scenario to teach design a table for a query. Explain the business question, the relevant Cassandra Query Language concept, how to read the result, one common mistake, and a small modification challenge. Keep the dataset intentionally small and the focus on SQL development or BI analysis.
codedescription: Return a structured CodePractice payload with entrypoint lesson.sql and exactly two files in this order: init.sql and lesson.sql. init.sql must contain only the small, deterministic setup data needed by the lesson. lesson.sql must contain only the learner-facing Cassandra Query Language query or commands for: Design a table for a query. The two files must be self-contained together. Never place setup statements in lesson.sql. Never use backup, restore, server administration, tuning, infrastructure configuration, or large-data examples. The email renderer must show only lesson.sql because it is the entrypoint.
concepts:
  - Cassandra Query Language
  - Design a table for a query
  - result verification
  - small business dataset
  - SQL developer and BI workflow
avoid: Avoid DBA operations, backup and restore, installation, server configuration, SQL tuning, large datasets, unexplained vendor features, destructive production statements, secrets, external services, and placing setup code in lesson.sql.
---

# Design a table for a query

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

The learner can design a table for a query in Cassandra, explain the result, and verify it against a small dataset.

## Content direction

Use a compact query-first application data scenario to teach design a table for a query. Explain the business question, the relevant Cassandra Query Language concept, how to read the result, one common mistake, and a small modification challenge. Keep the dataset intentionally small and the focus on SQL development or BI analysis.

## Code direction

Return a structured CodePractice payload with entrypoint lesson.sql and exactly two files in this order: init.sql and lesson.sql. init.sql must contain only the small, deterministic setup data needed by the lesson. lesson.sql must contain only the learner-facing Cassandra Query Language query or commands for: Design a table for a query. The two files must be self-contained together. Never place setup statements in lesson.sql. Never use backup, restore, server administration, tuning, infrastructure configuration, or large-data examples. The email renderer must show only lesson.sql because it is the entrypoint.
