---
sourceid: codecore-developer-basics-i-o-bound-vs-cpu-bound-work
lessonname: I/O-Bound vs CPU-Bound Work
position: 140
level: intermediate
goal: Classify tasks by whether they mostly wait on external systems or compute on the CPU.
contentdescription: Week 47 topic: Concurrency decision making. Build on the previous lesson, 'Concurrency vs Parallelism', explaining the concept through the running example: API calls, file reads, CPU-heavy calculations, or batch processing. Prepare for 'Choosing Threads, Processes, or Async'. Emphasize both interview reasoning (Explain concurrency vs parallelism and I/O-bound vs CPU-bound work.) and daily coding value (Choose a concurrency model based on workload type.).
codedescription: Categorize API fetching, file reading, JSON parsing, and heavy calculation examples. Keep the code short, plain Python, with English comments only.
concepts:
  - I/O-bound
  - CPU-bound
  - workload type
  - waiting
  - compute
avoid: Avoid choosing tools before classifying the workload. Avoid toy fruit/shopping-cart examples, avoid clever one-liners, avoid large frameworks, avoid introducing future concepts too early.
---

# I/O-Bound vs CPU-Bound Work

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Classify tasks by whether they mostly wait on external systems or compute on the CPU.

## Content direction

Week 47 topic: Concurrency decision making. Build on the previous lesson, 'Concurrency vs Parallelism', explaining the concept through the running example: API calls, file reads, CPU-heavy calculations, or batch processing. Prepare for 'Choosing Threads, Processes, or Async'. Emphasize both interview reasoning (Explain concurrency vs parallelism and I/O-bound vs CPU-bound work.) and daily coding value (Choose a concurrency model based on workload type.).

## Code direction

Categorize API fetching, file reading, JSON parsing, and heavy calculation examples. Keep the code short, plain Python, with English comments only.
