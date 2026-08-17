---
sourceid: switch-to-typescript-precise-function-and-object-type-design
lessonname: Precise Function and Object Type Design
position: 3
level: intermediate
goal: Design stable function contracts and object models that express mutability, optionality, and valid call patterns.
contentdescription: Define function types, call signatures, construct signatures, optional and default parameters, rest parameters, overload signatures, generic callbacks, this parameters, void behavior, and function variance under strictFunctionTypes. Compare type aliases and interfaces for object shapes. Cover readonly properties, optional properties, index signatures, excess property checks, freshness, satisfies, and the difference between assignment compatibility and exact object validation.
codedescription: Build a typed command dispatcher with overloaded entry points, readonly configuration, constrained metadata, and callback registration. Use satisfies to validate configuration while preserving literal inference.
concepts:
  - function types
  - overloads
  - callbacks
  - parameter variance
  - this parameters
  - object types
  - readonly
  - optional properties
  - index signatures
  - excess property checks
  - satisfies
avoid: "Overusing overloads when unions are clearer; confusing void with undefined; adding unrestricted string index signatures; mutating readonly data through aliases; using type assertions instead of satisfies"
---

# Precise Function and Object Type Design

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Design stable function contracts and object models that express mutability, optionality, and valid call patterns.

## Content direction

Define function types, call signatures, construct signatures, optional and default parameters, rest parameters, overload signatures, generic callbacks, this parameters, void behavior, and function variance under strictFunctionTypes. Compare type aliases and interfaces for object shapes. Cover readonly properties, optional properties, index signatures, excess property checks, freshness, satisfies, and the difference between assignment compatibility and exact object validation.

## Code direction

Build a typed command dispatcher with overloaded entry points, readonly configuration, constrained metadata, and callback registration. Use satisfies to validate configuration while preserving literal inference.
