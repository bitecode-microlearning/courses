---
sourceid: switch-to-typescript-runtime-validation-at-trust-boundaries
lessonname: Runtime Validation at Trust Boundaries
position: 9
level: intermediate
goal: Safely convert untrusted runtime data into trusted domain types.
contentdescription: Establish that interfaces and type aliases disappear at runtime. Identify trust boundaries such as HTTP responses, environment variables, local storage, message queues, and JSON parsing. Build composable validators, type predicates, assertion functions, parsers that return structured errors, and boundary-specific data transfer object mappings. Discuss schema-first and type-first validation strategies without coupling domain types directly to external payloads.
codedescription: Fetch an unknown JSON payload, validate nested structures, collect path-aware validation errors, map a transport DTO into a domain object, and reject malformed environment configuration before application startup.
concepts:
  - runtime validation
  - trust boundaries
  - unknown
  - type predicates
  - assertion functions
  - parsing
  - DTOs
  - domain mapping
  - structured validation errors
avoid: "Casting JSON with as; trusting generated client types without validating external data; reusing transport DTOs as domain models; silently defaulting invalid configuration; validating only top-level properties"
---

# Runtime Validation at Trust Boundaries

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Safely convert untrusted runtime data into trusted domain types.

## Content direction

Establish that interfaces and type aliases disappear at runtime. Identify trust boundaries such as HTTP responses, environment variables, local storage, message queues, and JSON parsing. Build composable validators, type predicates, assertion functions, parsers that return structured errors, and boundary-specific data transfer object mappings. Discuss schema-first and type-first validation strategies without coupling domain types directly to external payloads.

## Code direction

Fetch an unknown JSON payload, validate nested structures, collect path-aware validation errors, map a transport DTO into a domain object, and reject malformed environment configuration before application startup.
