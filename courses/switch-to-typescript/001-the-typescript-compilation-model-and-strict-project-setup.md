---
sourceid: switch-to-typescript-the-typescript-compilation-model-and-strict-project-setup
lessonname: The TypeScript Compilation Model and Strict Project Setup
position: 1
level: intermediate
goal: Understand what TypeScript checks, what it emits, and how compiler configuration changes the guarantees of a codebase.
contentdescription: Examine TypeScript as a static analysis layer over JavaScript. Trace the pipeline from .ts source through type checking to emitted JavaScript and source maps. Configure a strict tsconfig.json and analyze target, module, lib, moduleResolution, noEmit, isolatedModules, declaration, sourceMap, strictNullChecks, noUncheckedIndexedAccess, exactOptionalPropertyTypes, and useUnknownInCatchVariables. Discuss type erasure and the boundary between compile-time guarantees and runtime behavior.
codedescription: Create a small multi-file project, compile it under progressively stricter compiler settings, inspect the emitted JavaScript, and fix errors revealed by strictNullChecks, noUncheckedIndexedAccess, and exactOptionalPropertyTypes.
concepts:
  - type erasure
  - static analysis
  - JavaScript emission
  - tsconfig.json
  - strict mode
  - compiler target
  - module configuration
  - source maps
  - incremental compilation
avoid: "Treating TypeScript as a runtime; enabling strict flags without understanding their impact; assuming successful compilation proves runtime correctness; relying on default compiler configuration"
---

# The TypeScript Compilation Model and Strict Project Setup

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Understand what TypeScript checks, what it emits, and how compiler configuration changes the guarantees of a codebase.

## Content direction

Examine TypeScript as a static analysis layer over JavaScript. Trace the pipeline from .ts source through type checking to emitted JavaScript and source maps. Configure a strict tsconfig.json and analyze target, module, lib, moduleResolution, noEmit, isolatedModules, declaration, sourceMap, strictNullChecks, noUncheckedIndexedAccess, exactOptionalPropertyTypes, and useUnknownInCatchVariables. Discuss type erasure and the boundary between compile-time guarantees and runtime behavior.

## Code direction

Create a small multi-file project, compile it under progressively stricter compiler settings, inspect the emitted JavaScript, and fix errors revealed by strictNullChecks, noUncheckedIndexedAccess, and exactOptionalPropertyTypes.
