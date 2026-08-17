---
sourceid: codecore-developer-basics-data-sharing-between-processes
lessonname: Data Sharing between Processes
position: 150
level: intermediate
goal: Understand that process data must be copied, serialized, or explicitly shared.
contentdescription: Week 50 topic: Multiprocessing for CPU work. Build on the previous lesson, 'ProcessPoolExecutor for CPU Workloads', explaining the concept through the running example: CPU-heavy scoring, parsing, simulation, or batch calculations. Prepare for 'Async Programming Mental Model'. Emphasize both interview reasoning (Explain processes, process pools, and serialization overhead.) and daily coding value (Use process pools when CPU work dominates and data transfer is reasonable.).
codedescription: Pass small immutable inputs to workers and return small results instead of sharing large mutable state. Keep the code short, plain Python, with English comments only.
concepts:
  - process data sharing
  - serialization
  - pickling
  - overhead
avoid: Avoid assuming processes can freely share Python objects like threads. Avoid toy fruit/shopping-cart examples, avoid clever one-liners, avoid large frameworks, avoid introducing future concepts too early.
---

# Data Sharing between Processes

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Understand that process data must be copied, serialized, or explicitly shared.

## Content direction

Week 50 topic: Multiprocessing for CPU work. Build on the previous lesson, 'ProcessPoolExecutor for CPU Workloads', explaining the concept through the running example: CPU-heavy scoring, parsing, simulation, or batch calculations. Prepare for 'Async Programming Mental Model'. Emphasize both interview reasoning (Explain processes, process pools, and serialization overhead.) and daily coding value (Use process pools when CPU work dominates and data transfer is reasonable.).

## Code direction

Pass small immutable inputs to workers and return small results instead of sharing large mutable state. Keep the code short, plain Python, with English comments only.
