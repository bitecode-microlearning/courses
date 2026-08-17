---
sourceid: mongodb-choosing-the-document-model-summarize-data-with-an-aggregation-pipeline
lessonname: Summarize data with an aggregation pipeline
position: 6
level: beginner
goal: Build a small aggregation pipeline and compare its staged flow with relational GROUP BY queries.
contentdescription: Use match, unwind, group, project, and sort to answer one business question. Explain how documents flow through stages and when relational analytics may remain simpler.
codedescription: Use init.js for compact orders and main.js for a short, verifiable aggregation pipeline. Each stage must have a clear purpose.
concepts:
  - aggregation pipeline
  - match
  - unwind
  - group
  - project
  - sort
  - SQL comparison
avoid: Avoid opaque long pipelines, BI-only framing, performance promises without evidence, and setup code in main.js.
---

# Summarize data with an aggregation pipeline

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Build a small aggregation pipeline and compare its staged flow with relational GROUP BY queries.

## Content direction

Use match, unwind, group, project, and sort to answer one business question. Explain how documents flow through stages and when relational analytics may remain simpler.

## Code direction

Use init.js for compact orders and main.js for a short, verifiable aggregation pipeline. Each stage must have a clear purpose.
