---
sourceid: codecore-developer-basics-race-conditions-and-shared-state
lessonname: Race Conditions and Shared State
position: 144
level: intermediate
goal: Recognize race conditions when multiple threads read and write shared state.
contentdescription: Week 48 topic: Threading basics. Build on the previous lesson, 'ThreadPoolExecutor for I/O Workloads', explaining the concept through the running example: calling multiple endpoints, reading multiple files, or processing independent jobs. Prepare for 'Locks and Safe Coordination'. Emphasize both interview reasoning (Explain thread pools and race conditions.) and daily coding value (Fetch or process multiple I/O tasks safely.).
codedescription: Show a shared counter or shared results list issue and explain why coordination matters. Keep the code short, plain Python, with English comments only.
concepts:
  - race condition
  - shared state
  - interleaving
  - thread safety
avoid: Avoid nondeterministic demos that are too complex to understand. Avoid toy fruit/shopping-cart examples, avoid clever one-liners, avoid large frameworks, avoid introducing future concepts too early.
---

# Race Conditions and Shared State

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Recognize race conditions when multiple threads read and write shared state.

## Content direction

Week 48 topic: Threading basics. Build on the previous lesson, 'ThreadPoolExecutor for I/O Workloads', explaining the concept through the running example: calling multiple endpoints, reading multiple files, or processing independent jobs. Prepare for 'Locks and Safe Coordination'. Emphasize both interview reasoning (Explain thread pools and race conditions.) and daily coding value (Fetch or process multiple I/O tasks safely.).

## Code direction

Show a shared counter or shared results list issue and explain why coordination matters. Keep the code short, plain Python, with English comments only.
