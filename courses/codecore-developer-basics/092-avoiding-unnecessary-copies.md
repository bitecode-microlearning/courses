---
sourceid: codecore-developer-basics-avoiding-unnecessary-copies
lessonname: Avoiding Unnecessary Copies
position: 92
level: intermediate
goal: Recognize when slicing, list comprehensions, and transformations create copies.
contentdescription: Week 31 topic: Memory-friendly processing. Build on the previous lesson, 'Memory-Friendly Data Processing', explaining the concept through the running example: large files, API collections, or record batches in the learner's domain. Prepare for 'Streaming Data Transformation'. Emphasize both interview reasoning (Explain when lists are fine and when streaming is safer.) and daily coding value (Handle larger inputs without accidental memory spikes.).
codedescription: Refactor a chain that builds multiple intermediate lists into a generator-based flow. Keep the code short, plain Python, with English comments only.
concepts:
  - copies
  - intermediate lists
  - slicing
  - generators
  - memory
avoid: Avoid optimizing away copies that make small code clearer without need. Avoid toy fruit/shopping-cart examples, avoid clever one-liners, avoid large frameworks, avoid introducing future concepts too early.
---

# Avoiding Unnecessary Copies

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Recognize when slicing, list comprehensions, and transformations create copies.

## Content direction

Week 31 topic: Memory-friendly processing. Build on the previous lesson, 'Memory-Friendly Data Processing', explaining the concept through the running example: large files, API collections, or record batches in the learner's domain. Prepare for 'Streaming Data Transformation'. Emphasize both interview reasoning (Explain when lists are fine and when streaming is safer.) and daily coding value (Handle larger inputs without accidental memory spikes.).

## Code direction

Refactor a chain that builds multiple intermediate lists into a generator-based flow. Keep the code short, plain Python, with English comments only.
