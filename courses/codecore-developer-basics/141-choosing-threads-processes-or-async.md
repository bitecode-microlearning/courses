---
sourceid: codecore-developer-basics-choosing-threads-processes-or-async
lessonname: Choosing Threads, Processes, or Async
position: 141
level: intermediate
goal: Choose a concurrency approach based on the workload and code complexity.
contentdescription: Week 47 topic: Concurrency decision making. Build on the previous lesson, 'I/O-Bound vs CPU-Bound Work', explaining the concept through the running example: API calls, file reads, CPU-heavy calculations, or batch processing. Prepare for 'Threading Basics'. Emphasize both interview reasoning (Explain concurrency vs parallelism and I/O-bound vs CPU-bound work.) and daily coding value (Choose a concurrency model based on workload type.).
codedescription: Create a decision table for threads, processes, and async for the same domain tasks. Keep the code short, plain Python, with English comments only.
concepts:
  - threads
  - processes
  - async
  - decision making
  - trade-offs
avoid: Avoid presenting one model as universally best. Avoid toy fruit/shopping-cart examples, avoid clever one-liners, avoid large frameworks, avoid introducing future concepts too early.
---

# Choosing Threads, Processes, or Async

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Choose a concurrency approach based on the workload and code complexity.

## Content direction

Week 47 topic: Concurrency decision making. Build on the previous lesson, 'I/O-Bound vs CPU-Bound Work', explaining the concept through the running example: API calls, file reads, CPU-heavy calculations, or batch processing. Prepare for 'Threading Basics'. Emphasize both interview reasoning (Explain concurrency vs parallelism and I/O-bound vs CPU-bound work.) and daily coding value (Choose a concurrency model based on workload type.).

## Code direction

Create a decision table for threads, processes, and async for the same domain tasks. Keep the code short, plain Python, with English comments only.
