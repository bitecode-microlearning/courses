---
sourceid: switch-to-typescript-generics-constraints-keyof-and-indexed-access-types
lessonname: "Generics, Constraints, keyof, and Indexed Access Types"
position: 4
level: intermediate
goal: Create reusable APIs that preserve relationships between input and output types.
contentdescription: Move beyond generic containers and use type parameters to encode correlations. Cover generic functions, interfaces and classes, inference of type arguments, defaults, constraints, keyof, typeof in type positions, indexed access types, generic parameter dependencies, and variance considerations. Analyze when a generic is meaningful and when a concrete union is more honest.
codedescription: Implement a type-safe property selector, object projection utility, repository interface, and event subscription API where event names determine payload types. Add constraints that reject invalid keys and incompatible entity identifiers.
concepts:
  - generics
  - type parameters
  - generic inference
  - constraints
  - keyof
  - indexed access types
  - generic defaults
  - correlated types
  - variance
avoid: "Adding unused generic parameters; returning unrelated generic types through assertions; using object or Function as constraints; making APIs generic when callers gain no additional type safety"
---

# Generics, Constraints, keyof, and Indexed Access Types

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Create reusable APIs that preserve relationships between input and output types.

## Content direction

Move beyond generic containers and use type parameters to encode correlations. Cover generic functions, interfaces and classes, inference of type arguments, defaults, constraints, keyof, typeof in type positions, indexed access types, generic parameter dependencies, and variance considerations. Analyze when a generic is meaningful and when a concrete union is more honest.

## Code direction

Implement a type-safe property selector, object projection utility, repository interface, and event subscription API where event names determine payload types. Add constraints that reject invalid keys and incompatible entity identifiers.
