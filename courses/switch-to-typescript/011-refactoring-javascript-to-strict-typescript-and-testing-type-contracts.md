---
sourceid: switch-to-typescript-refactoring-javascript-to-strict-typescript-and-testing-type-contracts
lessonname: Refactoring JavaScript to Strict TypeScript and Testing Type Contracts
position: 11
level: intermediate
goal: Migrate an existing JavaScript codebase incrementally while proving both runtime behavior and compile-time contracts.
contentdescription: Design a migration strategy using allowJs, checkJs, JSDoc, incremental strictness, boundary typing, and error prioritization. Separate runtime tests from compile-time type tests. Use negative type tests with expected errors, assert unreachable states, and prevent public API regressions. Discuss linting, build pipelines, noEmit checks, and avoiding declaration drift.
codedescription: Migrate a loosely typed JavaScript service to TypeScript in stages. Replace implicit any, introduce domain types, validate external data, add runtime unit tests, and add compile-time tests that lock down accepted and rejected API usage.
concepts:
  - JavaScript migration
  - allowJs
  - checkJs
  - JSDoc types
  - incremental strictness
  - compile-time tests
  - negative type tests
  - API compatibility
  - CI type checking
avoid: "Converting files mechanically without improving boundaries; replacing every error with any; mixing behavioral and type-level assertions; enabling all strict options without a migration plan; accepting emitted JavaScript after type-check failures"
---

# Refactoring JavaScript to Strict TypeScript and Testing Type Contracts

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Migrate an existing JavaScript codebase incrementally while proving both runtime behavior and compile-time contracts.

## Content direction

Design a migration strategy using allowJs, checkJs, JSDoc, incremental strictness, boundary typing, and error prioritization. Separate runtime tests from compile-time type tests. Use negative type tests with expected errors, assert unreachable states, and prevent public API regressions. Discuss linting, build pipelines, noEmit checks, and avoiding declaration drift.

## Code direction

Migrate a loosely typed JavaScript service to TypeScript in stages. Replace implicit any, introduce domain types, validate external data, add runtime unit tests, and add compile-time tests that lock down accepted and rejected API usage.
