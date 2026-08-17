---
sourceid: switch-to-typescript-mapped-types-conditional-types-infer-and-type-level-transformations
lessonname: Mapped Types, Conditional Types, infer, and Type-Level Transformations
position: 5
level: intermediate
goal: Transform existing types systematically and understand the limits of TypeScript metaprogramming.
contentdescription: Explore mapped types, mapping modifiers, key remapping with as, template literal types, conditional types, distributive conditionals, infer, recursive types, and built-in utility types. Derive read models, update payloads, event names, and function result types from canonical domain types. Discuss compiler complexity, readability, instantiation depth, and when explicit types are preferable.
codedescription: Create DeepReadonly, NullableKeys, EventHandlers, AsyncReturnType, and an API route-to-handler mapping. Test each transformation with valid and intentionally invalid assignments.
concepts:
  - mapped types
  - mapping modifiers
  - key remapping
  - conditional types
  - distributivity
  - infer
  - template literal types
  - recursive types
  - utility types
avoid: "Writing unreadable type puzzles; accidental distributivity over unions; unbounded recursive types; duplicating built-in utility types without a reason; optimizing for cleverness instead of maintainability"
---

# Mapped Types, Conditional Types, infer, and Type-Level Transformations

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Transform existing types systematically and understand the limits of TypeScript metaprogramming.

## Content direction

Explore mapped types, mapping modifiers, key remapping with as, template literal types, conditional types, distributive conditionals, infer, recursive types, and built-in utility types. Derive read models, update payloads, event names, and function result types from canonical domain types. Discuss compiler complexity, readability, instantiation depth, and when explicit types are preferable.

## Code direction

Create DeepReadonly, NullableKeys, EventHandlers, AsyncReturnType, and an API route-to-handler mapping. Test each transformation with valid and intentionally invalid assignments.
