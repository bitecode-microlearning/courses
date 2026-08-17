---
sourceid: switch-to-typescript-inference-unions-literals-narrowing-unknown-and-never
lessonname: "Inference, Unions, Literals, Narrowing, unknown, and never"
position: 2
level: intermediate
goal: Model variable state precisely and use control-flow analysis to safely refine broad types.
contentdescription: Study local and contextual type inference, widening and non-widening literal types, const assertions, union and intersection types, discriminated unions, nullable values, unknown, never, and exhaustive checking. Explore how TypeScript performs control-flow analysis through typeof, instanceof, equality checks, property checks, truthiness checks, user-defined type predicates, and assertion functions.
codedescription: Model a state machine with a discriminated union, implement exhaustive switch handling using never, parse unknown input with reusable type guards, and compare unsafe any-based code with a fully narrowed implementation.
concepts:
  - type inference
  - literal widening
  - union types
  - intersection types
  - discriminated unions
  - control-flow analysis
  - type guards
  - unknown
  - never
  - exhaustive checks
avoid: "Using any to bypass narrowing; broad string fields instead of literal discriminants; unsafe type assertions; truthiness checks that accidentally reject valid zero or empty-string values"
---

# Inference, Unions, Literals, Narrowing, unknown, and never

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Model variable state precisely and use control-flow analysis to safely refine broad types.

## Content direction

Study local and contextual type inference, widening and non-widening literal types, const assertions, union and intersection types, discriminated unions, nullable values, unknown, never, and exhaustive checking. Explore how TypeScript performs control-flow analysis through typeof, instanceof, equality checks, property checks, truthiness checks, user-defined type predicates, and assertion functions.

## Code direction

Model a state machine with a discriminated union, implement exhaustive switch handling using never, parse unknown input with reusable type guards, and compare unsafe any-based code with a fully narrowed implementation.
