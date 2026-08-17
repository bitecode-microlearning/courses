---
sourceid: codecore-developer-basics-concurrency-vs-parallelism
lessonname: Concurrency vs Parallelism
position: 139
level: intermediate
goal: Distinguish doing multiple tasks in overlapping time from truly executing CPU work in parallel.
contentdescription: Week 47 topic: Concurrency decision making. Build on the previous lesson, 'Building Reliable Command-Line Tools', explaining the concept through the running example: API calls, file reads, CPU-heavy calculations, or batch processing. Prepare for 'I/O-Bound vs CPU-Bound Work'. Emphasize both interview reasoning (Explain concurrency vs parallelism and I/O-bound vs CPU-bound work.) and daily coding value (Choose a concurrency model based on workload type.).
codedescription: Use a timeline-style code comment to compare waiting on API calls with CPU-heavy calculation. Keep the code short, plain Python, with English comments only.
concepts:
  - concurrency
  - parallelism
  - waiting
  - execution
  - mental model
avoid: Avoid claiming threads always make code faster. Avoid toy fruit/shopping-cart examples, avoid clever one-liners, avoid large frameworks, avoid introducing future concepts too early.
---

# Concurrency vs Parallelism

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Distinguish doing multiple tasks in overlapping time from truly executing CPU work in parallel.

## Content direction

Week 47 topic: Concurrency decision making. Build on the previous lesson, 'Building Reliable Command-Line Tools', explaining the concept through the running example: API calls, file reads, CPU-heavy calculations, or batch processing. Prepare for 'I/O-Bound vs CPU-Bound Work'. Emphasize both interview reasoning (Explain concurrency vs parallelism and I/O-bound vs CPU-bound work.) and daily coding value (Choose a concurrency model based on workload type.).

## Code direction

Use a timeline-style code comment to compare waiting on API calls with CPU-heavy calculation. Keep the code short, plain Python, with English comments only.
