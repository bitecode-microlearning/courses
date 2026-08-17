---
sourceid: questdb-data-analysis-workflows-compare-time-windows
lessonname: Compare time windows
position: 4
level: intermediate
goal: The learner can compare time windows in QuestDB, explain the result, and verify it against a small dataset.
contentdescription: Use a compact time-series analytics scenario to teach compare time windows. Explain the business question, the relevant QuestDB SQL concept, how to read the result, one common mistake, and a small modification challenge. Keep the dataset intentionally small and the focus on SQL development or BI analysis.
codedescription: Return a structured CodePractice payload with entrypoint lesson.sql and exactly two files in this order: init.sql and lesson.sql. init.sql must contain only the small, deterministic setup data needed by the lesson. lesson.sql must contain only the learner-facing QuestDB SQL query or commands for: Compare time windows. The two files must be self-contained together. Never place setup statements in lesson.sql. Never use backup, restore, server administration, tuning, infrastructure configuration, or large-data examples. The email renderer must show only lesson.sql because it is the entrypoint.
concepts:
  - QuestDB SQL
  - Compare time windows
  - result verification
  - small business dataset
  - SQL developer and BI workflow
avoid: Avoid DBA operations, backup and restore, installation, server configuration, SQL tuning, large datasets, unexplained vendor features, destructive production statements, secrets, external services, and placing setup code in lesson.sql.
---

# Compare time windows

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

The learner can compare time windows in QuestDB, explain the result, and verify it against a small dataset.

## Content direction

Use a compact time-series analytics scenario to teach compare time windows. Explain the business question, the relevant QuestDB SQL concept, how to read the result, one common mistake, and a small modification challenge. Keep the dataset intentionally small and the focus on SQL development or BI analysis.

## Code direction

Return a structured CodePractice payload with entrypoint lesson.sql and exactly two files in this order: init.sql and lesson.sql. init.sql must contain only the small, deterministic setup data needed by the lesson. lesson.sql must contain only the learner-facing QuestDB SQL query or commands for: Compare time windows. The two files must be self-contained together. Never place setup statements in lesson.sql. Never use backup, restore, server administration, tuning, infrastructure configuration, or large-data examples. The email renderer must show only lesson.sql because it is the entrypoint.
