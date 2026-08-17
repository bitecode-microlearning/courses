---
sourceid: switch-to-typescript-classes-interfaces-nominal-techniques-and-encapsulation
lessonname: "Classes, Interfaces, Nominal Techniques, and Encapsulation"
position: 6
level: intermediate
goal: Use TypeScript class features deliberately while understanding its structural compatibility model.
contentdescription: "Review interfaces, implements, extends, abstract classes, parameter properties, access modifiers, readonly fields, static members, accessors, and ECMAScript private fields. Contrast TypeScript private with #private runtime privacy. Explain structural typing, accidental compatibility, protected and private member effects, declaration merging, and nominal typing techniques using branded or opaque types."
codedescription: Build a small domain model with an abstract base service, dependency interfaces, immutable value objects, branded identifiers, and both compile-time and runtime-private state. Demonstrate which structurally similar classes are assignable and why.
concepts:
  - interfaces
  - classes
  - abstract classes
  - access modifiers
  - ECMAScript private fields
  - structural typing
  - declaration merging
  - branded types
  - dependency inversion
avoid: "Assuming implements adds runtime checks; using inheritance only for code reuse; confusing private with #private; creating deep class hierarchies; using plain strings for semantically distinct identifiers"
---

# Classes, Interfaces, Nominal Techniques, and Encapsulation

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Use TypeScript class features deliberately while understanding its structural compatibility model.

## Content direction

Review interfaces, implements, extends, abstract classes, parameter properties, access modifiers, readonly fields, static members, accessors, and ECMAScript private fields. Contrast TypeScript private with #private runtime privacy. Explain structural typing, accidental compatibility, protected and private member effects, declaration merging, and nominal typing techniques using branded or opaque types.

## Code direction

Build a small domain model with an abstract base service, dependency interfaces, immutable value objects, branded identifiers, and both compile-time and runtime-private state. Demonstrate which structurally similar classes are assignable and why.
