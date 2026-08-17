---
sourceid: mongodb-architecture-and-scale-tradeoffs-prevent-hot-and-unbounded-documents
lessonname: Prevent hot and unbounded documents
position: 5
level: advanced
goal: Recognize contention and growth risks in document models and redesign them with bounded data structures.
contentdescription: Analyze global counters, ever-growing arrays, large tenant documents, and frequently rewritten aggregates. Apply bucketing, outlier, subset, and computed patterns while preserving clear ownership.
codedescription: Use init.js for growth telemetry and main.js for a query that identifies documents approaching a safe design threshold.
concepts:
  - hot document
  - unbounded array
  - contention
  - bucket pattern
  - outlier pattern
  - subset pattern
  - computed pattern
avoid: Avoid arbitrary universal size thresholds, premature fragmentation, infrastructure tuning, and setup code in main.js.
---

# Prevent hot and unbounded documents

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Recognize contention and growth risks in document models and redesign them with bounded data structures.

## Content direction

Analyze global counters, ever-growing arrays, large tenant documents, and frequently rewritten aggregates. Apply bucketing, outlier, subset, and computed patterns while preserving clear ownership.

## Code direction

Use init.js for growth telemetry and main.js for a query that identifies documents approaching a safe design threshold.
