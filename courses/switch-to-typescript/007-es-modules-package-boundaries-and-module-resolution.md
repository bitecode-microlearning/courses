---
sourceid: switch-to-typescript-es-modules-package-boundaries-and-module-resolution
lessonname: ES Modules, Package Boundaries, and Module Resolution
position: 7
level: intermediate
goal: Configure and debug TypeScript modules across modern Node.js, bundler, and library environments.
contentdescription: Analyze ES module syntax, type-only imports and exports, import elision, package.json type, file extensions, package exports, NodeNext and bundler module resolution, path aliases, project references, and declaration emission. Explain the difference between TypeScript path mapping and actual runtime resolution. Discuss circular dependencies and public package entry points.
codedescription: Split a project into domain, infrastructure, and application packages. Configure project references, type-only imports, package exports, declaration output, and a public barrel while diagnosing an intentionally broken module-resolution setup.
concepts:
  - ES modules
  - CommonJS interoperability
  - import type
  - module resolution
  - NodeNext
  - bundler resolution
  - package exports
  - path aliases
  - project references
  - declaration emission
avoid: "Assuming paths rewrites runtime imports; mixing module systems accidentally; importing runtime values as types; exposing internal files as public API; creating circular dependencies through barrel files"
---

# ES Modules, Package Boundaries, and Module Resolution

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Configure and debug TypeScript modules across modern Node.js, bundler, and library environments.

## Content direction

Analyze ES module syntax, type-only imports and exports, import elision, package.json type, file extensions, package exports, NodeNext and bundler module resolution, path aliases, project references, and declaration emission. Explain the difference between TypeScript path mapping and actual runtime resolution. Discuss circular dependencies and public package entry points.

## Code direction

Split a project into domain, infrastructure, and application packages. Configure project references, type-only imports, package exports, declaration output, and a public barrel while diagnosing an intentionally broken module-resolution setup.
