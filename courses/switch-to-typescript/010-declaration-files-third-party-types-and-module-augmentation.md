---
sourceid: switch-to-typescript-declaration-files-third-party-types-and-module-augmentation
lessonname: Declaration Files, Third-Party Types, and Module Augmentation
position: 10
level: intermediate
goal: Understand and author type declarations for JavaScript libraries and external modules.
contentdescription: Read and write .d.ts files, ambient declarations, declare module blocks, global declarations, namespace patterns, callable and constructable library shapes, export assignment, and module augmentation. Explain how declaration discovery works through package metadata and typeRoots. Cover safe patching of incomplete third-party types and the compatibility risks of ambient changes.
codedescription: Add types to an untyped JavaScript utility package, model a hybrid callable object API, augment an existing module with a project-specific method, and compile a consumer project against the generated declarations.
concepts:
  - declaration files
  - ambient declarations
  - declare module
  - global augmentation
  - module augmentation
  - namespace patterns
  - callable objects
  - declaration discovery
avoid: "Placing implementation code in .d.ts files; declaring overly broad modules as any; leaking globals; augmenting the wrong module specifier; publishing declarations that do not match runtime behavior"
---

# Declaration Files, Third-Party Types, and Module Augmentation

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Understand and author type declarations for JavaScript libraries and external modules.

## Content direction

Read and write .d.ts files, ambient declarations, declare module blocks, global declarations, namespace patterns, callable and constructable library shapes, export assignment, and module augmentation. Explain how declaration discovery works through package metadata and typeRoots. Cover safe patching of incomplete third-party types and the compatibility risks of ambient changes.

## Code direction

Add types to an untyped JavaScript utility package, model a hybrid callable object API, augment an existing module with a project-specific method, and compile a consumer project against the generated declarations.
