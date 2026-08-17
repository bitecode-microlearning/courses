---
sourceid: mongodb-application-design-patterns-enforce-useful-schema-validation
lessonname: Enforce useful schema validation
position: 3
level: intermediate
goal: Use validation to protect important invariants while preserving intentional document flexibility.
contentdescription: "Define which fields must be stable and which may vary. Compare MongoDB JSON Schema validation with relational types, constraints, and foreign keys; explain application validation versus database enforcement."
codedescription: Use init.js to establish a compact validated collection and main.js to inspect valid records and the intended invariant. Do not include an intentionally failing learner command.
concepts:
  - JSON Schema validation
  - invariants
  - required fields
  - types
  - application validation
  - relational constraints
avoid: Avoid rejecting all variation, relying only on client validation, intentional runtime errors, and setup code in main.js.
---

# Enforce useful schema validation

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Use validation to protect important invariants while preserving intentional document flexibility.

## Content direction

Define which fields must be stable and which may vary. Compare MongoDB JSON Schema validation with relational types, constraints, and foreign keys; explain application validation versus database enforcement.

## Code direction

Use init.js to establish a compact validated collection and main.js to inspect valid records and the intended invariant. Do not include an intentionally failing learner command.
