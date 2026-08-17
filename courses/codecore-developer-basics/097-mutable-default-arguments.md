---
sourceid: codecore-developer-basics-mutable-default-arguments
lessonname: Mutable Default Arguments
position: 97
level: intermediate
goal: Understand why mutable default arguments can accidentally share state between calls.
contentdescription: Week 33 topic: Python semantics that cause bugs. Build on the previous lesson, 'Using any(), all(), zip(), and enumerate()', explaining the concept through the running example: lists and dictionaries of domain records. Prepare for 'Shallow Copy vs Deep Copy'. Emphasize both interview reasoning (Explain mutable defaults, copy depth, and identity vs equality.) and daily coding value (Avoid confusing shared state and comparison bugs.).
codedescription: Show a function with a default list bug, then fix it using None and initialization inside. Keep the code short, plain Python, with English comments only.
concepts:
  - mutable defaults
  - shared state
  - function defaults
  - None pattern
avoid: Avoid presenting this as trivia only. Avoid toy fruit/shopping-cart examples, avoid clever one-liners, avoid large frameworks, avoid introducing future concepts too early.
---

# Mutable Default Arguments

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Understand why mutable default arguments can accidentally share state between calls.

## Content direction

Week 33 topic: Python semantics that cause bugs. Build on the previous lesson, 'Using any(), all(), zip(), and enumerate()', explaining the concept through the running example: lists and dictionaries of domain records. Prepare for 'Shallow Copy vs Deep Copy'. Emphasize both interview reasoning (Explain mutable defaults, copy depth, and identity vs equality.) and daily coding value (Avoid confusing shared state and comparison bugs.).

## Code direction

Show a function with a default list bug, then fix it using None and initialization inside. Keep the code short, plain Python, with English comments only.
