---
sourceid: mongodb-choosing-the-document-model-store-an-application-aggregate-as-one-document
lessonname: Store an application aggregate as one document
position: 2
level: beginner
goal: Recognize an aggregate boundary and model data that is read and changed together as one document.
contentdescription: Model an order with line items and delivery details. Contrast a single aggregate read with normalized joins, and discuss document growth, duplication, ownership, and the rule that embedded data should share a lifecycle.
codedescription: Use init.js for deterministic sample orders and main.js for a query that returns one complete order aggregate. Show nested objects and arrays, then invite the learner to identify data that should not be embedded.
concepts:
  - aggregate boundary
  - embedding
  - ownership
  - lifecycle
  - read locality
  - bounded document growth
avoid: Avoid unbounded arrays, embedding shared mutable entities, universal denormalization claims, administration topics, and setup code in main.js.
---

# Store an application aggregate as one document

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Recognize an aggregate boundary and model data that is read and changed together as one document.

## Content direction

Model an order with line items and delivery details. Contrast a single aggregate read with normalized joins, and discuss document growth, duplication, ownership, and the rule that embedded data should share a lifecycle.

## Code direction

Use init.js for deterministic sample orders and main.js for a query that returns one complete order aggregate. Show nested objects and arrays, then invite the learner to identify data that should not be embedded.
