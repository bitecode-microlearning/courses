---
sourceid: codecore-developer-basics-validating-external-input-at-system-boundaries
lessonname: Validating External Input at System Boundaries
position: 73
level: intermediate
goal: Validate data at the point where it enters the system before deeper logic trusts it.
contentdescription: Week 25 topic: Input boundaries and defensive design. Build on the previous lesson, 'Using finally for Cleanup', explaining the concept through the running example: incoming API data, CSV rows, form submissions, or message payloads. Prepare for 'Defensive Programming without Overengineering'. Emphasize both interview reasoning (Discuss validation boundaries and failure modes.) and daily coding value (Protect internal logic from bad external input.).
codedescription: Write a validate_record function that checks required fields and returns clean data or errors. Keep the code short, plain Python, with English comments only.
concepts:
  - input boundary
  - validation
  - clean data
  - trust boundary
avoid: Avoid validating the same field in every downstream function. Avoid toy fruit/shopping-cart examples, avoid clever one-liners, avoid large frameworks, avoid introducing future concepts too early.
---

# Validating External Input at System Boundaries

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Validate data at the point where it enters the system before deeper logic trusts it.

## Content direction

Week 25 topic: Input boundaries and defensive design. Build on the previous lesson, 'Using finally for Cleanup', explaining the concept through the running example: incoming API data, CSV rows, form submissions, or message payloads. Prepare for 'Defensive Programming without Overengineering'. Emphasize both interview reasoning (Discuss validation boundaries and failure modes.) and daily coding value (Protect internal logic from bad external input.).

## Code direction

Write a validate_record function that checks required fields and returns clean data or errors. Keep the code short, plain Python, with English comments only.
