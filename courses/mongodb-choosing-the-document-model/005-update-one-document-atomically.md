---
sourceid: mongodb-choosing-the-document-model-update-one-document-atomically
lessonname: Update one document atomically
position: 5
level: beginner
goal: Use an atomic document update and explain why aggregate boundaries affect consistency.
contentdescription: Update a cart quantity or workflow state in one document. Explain single-document atomicity, compare it with a relational transaction spanning rows, and show why a well-chosen document boundary reduces coordination.
codedescription: Use init.js for a small cart dataset and main.js for a targeted update with a verification read. Keep the operation safe and deterministic.
concepts:
  - single-document atomicity
  - update operators
  - aggregate consistency
  - verification
  - transaction boundary
avoid: Avoid implying all MongoDB operations are globally atomic, blind overwrites, destructive production examples, and setup code in main.js.
---

# Update one document atomically

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Use an atomic document update and explain why aggregate boundaries affect consistency.

## Content direction

Update a cart quantity or workflow state in one document. Explain single-document atomicity, compare it with a relational transaction spanning rows, and show why a well-chosen document boundary reduces coordination.

## Code direction

Use init.js for a small cart dataset and main.js for a targeted update with a verification read. Keep the operation safe and deterministic.
