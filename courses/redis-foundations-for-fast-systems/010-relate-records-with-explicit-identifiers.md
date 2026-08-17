---
sourceid: redis-foundations-for-fast-systems-relate-records-with-explicit-identifiers
lessonname: Relate records with explicit identifiers
position: 10
level: beginner
goal: The learner can connect records through explicit identifiers, follow a multi-step lookup, and explain why Redis relationships are application-designed rather than automatic joins.
contentdescription: Use a small order-and-customer scenario. Store customers and orders in separate hashes, place the customer identifier in each order, and maintain a set of order identifiers per customer. Teach the lookup sequence from customer to order IDs to order records. Compare this with a relational join, explain denormalization and consistency tradeoffs at a beginner level, and finish with a modification challenge.
codedescription: "Return a structured CodePractice payload with exactly one self-contained file named lesson.redis, which is also the entrypoint. lesson.redis must create customer hashes, order hashes, and per-customer sets of order identifiers. It must execute HGETALL, HGET, SMEMBERS, and valid follow-up HGETALL commands that demonstrate the relationship. Use ECHO \"message\" commands to label each lookup step. Execute real commands and do not print expected values as substitutes. Do not include raw comments, module-only commands, Lua scripts, transactions, or commands that intentionally produce errors."
concepts:
  - explicit identifiers
  - namespaced keys
  - multi-step lookups
  - sets of related IDs
  - application-managed relationships
  - denormalization
  - Redis versus SQL joins
avoid: Avoid implying Redis performs automatic joins or enforces foreign keys, covering distributed consistency or DBA operations, using large datasets, destructive production statements, secrets, external services, or placing setup code in lesson.sql.
---

# Relate records with explicit identifiers

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

The learner can connect records through explicit identifiers, follow a multi-step lookup, and explain why Redis relationships are application-designed rather than automatic joins.

## Content direction

Use a small order-and-customer scenario. Store customers and orders in separate hashes, place the customer identifier in each order, and maintain a set of order identifiers per customer. Teach the lookup sequence from customer to order IDs to order records. Compare this with a relational join, explain denormalization and consistency tradeoffs at a beginner level, and finish with a modification challenge.

## Code direction

Return a structured CodePractice payload with exactly one self-contained file named lesson.redis, which is also the entrypoint. lesson.redis must create customer hashes, order hashes, and per-customer sets of order identifiers. It must execute HGETALL, HGET, SMEMBERS, and valid follow-up HGETALL commands that demonstrate the relationship. Use ECHO "message" commands to label each lookup step. Execute real commands and do not print expected values as substitutes. Do not include raw comments, module-only commands, Lua scripts, transactions, or commands that intentionally produce errors.
