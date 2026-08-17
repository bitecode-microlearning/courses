---
sourceid: codecore-developer-basics-tuples-for-stable-small-records
lessonname: Tuples for Stable Small Records
position: 10
level: intermediate
goal: Use tuples for small fixed records where immutability and position-based meaning make the interface simpler.
contentdescription: Week 4 topic: Tuples, immutability, and safe function boundaries. Build on the previous lesson, 'Readable Sequence Processing Patterns', and move the learner into the next core topic. Use the running example of small fixed facts such as id-status pairs, date-amount pairs, or validation results. Prepare for 'Unpacking and Naming Structured Values'. Emphasize interview reasoning (Explain when immutable values are useful and how they reduce accidental changes.) and daily coding value (Return small structured results and protect caller-owned data from accidental mutation.).
codedescription: Return a small pair such as (valid_count, invalid_count) or (record_id, status) from a function and explain when this is still readable. Keep the code short, plain Python, with English comments only.
concepts:
  - tuples
  - immutable records
  - fixed-size data
  - return values
avoid: Avoid using tuples for complex business objects with many unclear positions.
---

# Tuples for Stable Small Records

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Use tuples for small fixed records where immutability and position-based meaning make the interface simpler.

## Content direction

Week 4 topic: Tuples, immutability, and safe function boundaries. Build on the previous lesson, 'Readable Sequence Processing Patterns', and move the learner into the next core topic. Use the running example of small fixed facts such as id-status pairs, date-amount pairs, or validation results. Prepare for 'Unpacking and Naming Structured Values'. Emphasize interview reasoning (Explain when immutable values are useful and how they reduce accidental changes.) and daily coding value (Return small structured results and protect caller-owned data from accidental mutation.).

## Code direction

Return a small pair such as (valid_count, invalid_count) or (record_id, status) from a function and explain when this is still readable. Keep the code short, plain Python, with English comments only.
