---
sourceid: codecore-developer-basics-locks-and-safe-coordination
lessonname: Locks and Safe Coordination
position: 145
level: intermediate
goal: Use locks to protect critical sections when shared state must be updated.
contentdescription: Week 49 topic: Thread coordination and safety. Build on the previous lesson, 'Race Conditions and Shared State', explaining the concept through the running example: concurrent job processing with shared counters, queues, or results. Prepare for 'Designing Thread-Safe Workflows'. Emphasize both interview reasoning (Explain locks, thread-safe workflows, and common risks.) and daily coding value (Design threaded code that is predictable enough to maintain.).
codedescription: Protect a shared summary update with a lock and keep the locked section small. Keep the code short, plain Python, with English comments only.
concepts:
  - lock
  - critical section
  - coordination
  - shared state
avoid: Avoid locking huge sections that remove concurrency benefits. Avoid toy fruit/shopping-cart examples, avoid clever one-liners, avoid large frameworks, avoid introducing future concepts too early.
---

# Locks and Safe Coordination

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Use locks to protect critical sections when shared state must be updated.

## Content direction

Week 49 topic: Thread coordination and safety. Build on the previous lesson, 'Race Conditions and Shared State', explaining the concept through the running example: concurrent job processing with shared counters, queues, or results. Prepare for 'Designing Thread-Safe Workflows'. Emphasize both interview reasoning (Explain locks, thread-safe workflows, and common risks.) and daily coding value (Design threaded code that is predictable enough to maintain.).

## Code direction

Protect a shared summary update with a lock and keep the locked section small. Keep the code short, plain Python, with English comments only.
