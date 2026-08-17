---
sourceid: codecore-developer-basics-designing-small-in-memory-data-models
lessonname: Designing Small In-Memory Data Models
position: 6
level: intermediate
goal: Design a small in-memory model that keeps records, indexes, and derived values clear without overengineering.
contentdescription: Week 2 topic: Data structure selection from access patterns. Build on the previous lesson, 'Lookup, Ordering, and Mutation Trade-Offs', and deepen the same weekly topic. Use the running example of records that need list ordering, id-based lookup, and membership checks. Prepare for 'Lists as Ordered Workflows'. Emphasize interview reasoning (Justify data structure choices from access patterns and trade-offs.) and daily coding value (Represent business records so future operations stay simple and efficient.).
codedescription: Build a small model with a records list, a by_id dictionary, and an active_ids set. Show how each part supports a different operation. Keep the code short, plain Python, with English comments only.
concepts:
  - in-memory model
  - records
  - indexes
  - normalization
  - derived data
avoid: Avoid database schema depth or enterprise architecture. Avoid mixing too many future concepts into one example.
---

# Designing Small In-Memory Data Models

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Design a small in-memory model that keeps records, indexes, and derived values clear without overengineering.

## Content direction

Week 2 topic: Data structure selection from access patterns. Build on the previous lesson, 'Lookup, Ordering, and Mutation Trade-Offs', and deepen the same weekly topic. Use the running example of records that need list ordering, id-based lookup, and membership checks. Prepare for 'Lists as Ordered Workflows'. Emphasize interview reasoning (Justify data structure choices from access patterns and trade-offs.) and daily coding value (Represent business records so future operations stay simple and efficient.).

## Code direction

Build a small model with a records list, a by_id dictionary, and an active_ids set. Show how each part supports a different operation. Keep the code short, plain Python, with English comments only.
