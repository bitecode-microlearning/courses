---
sourceid: codecore-developer-basics-shallow-copy-vs-deep-copy
lessonname: Shallow Copy vs Deep Copy
position: 98
level: intermediate
goal: Understand the difference between copying a container and copying nested objects inside it.
contentdescription: Week 33 topic: Python semantics that cause bugs. Build on the previous lesson, 'Mutable Default Arguments', explaining the concept through the running example: lists and dictionaries of domain records. Prepare for 'Identity vs Equality'. Emphasize both interview reasoning (Explain mutable defaults, copy depth, and identity vs equality.) and daily coding value (Avoid confusing shared state and comparison bugs.).
codedescription: Copy a list of dictionaries and show when modifying a nested record affects both copies. Keep the code short, plain Python, with English comments only.
concepts:
  - shallow copy
  - deep copy
  - nested objects
  - mutation
avoid: Avoid recommending deepcopy as the default answer. Avoid toy fruit/shopping-cart examples, avoid clever one-liners, avoid large frameworks, avoid introducing future concepts too early.
---

# Shallow Copy vs Deep Copy

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Understand the difference between copying a container and copying nested objects inside it.

## Content direction

Week 33 topic: Python semantics that cause bugs. Build on the previous lesson, 'Mutable Default Arguments', explaining the concept through the running example: lists and dictionaries of domain records. Prepare for 'Identity vs Equality'. Emphasize both interview reasoning (Explain mutable defaults, copy depth, and identity vs equality.) and daily coding value (Avoid confusing shared state and comparison bugs.).

## Code direction

Copy a list of dictionaries and show when modifying a nested record affects both copies. Keep the code short, plain Python, with English comments only.
