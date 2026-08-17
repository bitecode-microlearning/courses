---
sourceid: codecore-developer-basics-sliding-window-for-aggregations
lessonname: Sliding Window for Aggregations
position: 53
level: intermediate
goal: Maintain a rolling aggregation without recalculating the whole window each time.
contentdescription: Week 18 topic: Core interview patterns: sliding windows. Build on the previous lesson, 'Sliding Window Basics', explaining the concept through the running example: daily totals, rolling risk values, event counts, response times, or lesson streaks. Prepare for 'Sliding Window Trade-Offs'. Emphasize both interview reasoning (Know when a sliding window avoids repeated work.) and daily coding value (Compute rolling metrics or detect local patterns efficiently.).
codedescription: Update a rolling count or total by adding the new item and removing the old item. Keep the code short, plain Python, with English comments only.
concepts:
  - rolling aggregation
  - add remove
  - window state
  - efficiency
avoid: Avoid nested loops after introducing the rolling update. Avoid toy fruit/shopping-cart examples, avoid clever one-liners, avoid large frameworks, avoid introducing future concepts too early.
---

# Sliding Window for Aggregations

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Maintain a rolling aggregation without recalculating the whole window each time.

## Content direction

Week 18 topic: Core interview patterns: sliding windows. Build on the previous lesson, 'Sliding Window Basics', explaining the concept through the running example: daily totals, rolling risk values, event counts, response times, or lesson streaks. Prepare for 'Sliding Window Trade-Offs'. Emphasize both interview reasoning (Know when a sliding window avoids repeated work.) and daily coding value (Compute rolling metrics or detect local patterns efficiently.).

## Code direction

Update a rolling count or total by adding the new item and removing the old item. Keep the code short, plain Python, with English comments only.
