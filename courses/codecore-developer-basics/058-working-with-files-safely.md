---
sourceid: codecore-developer-basics-working-with-files-safely
lessonname: Working with Files Safely
position: 58
level: intermediate
goal: "Open, read, and close files safely using the right mode and encoding."
contentdescription: Week 20 topic: Files and local data. Build on the previous lesson, 'Understanding Call Stack Behavior', explaining the concept through the running example: local exports such as transactions.csv, events.log, lessons.json, or tickets.txt. Prepare for 'Reading Large Files Line by Line'. Emphasize both interview reasoning (Show safe file handling and explain line-by-line processing.) and daily coding value (Read and write files without leaking resources or loading too much data.).
codedescription: Read a small domain file with a with statement and explain why it closes automatically. Keep the code short, plain Python, with English comments only.
concepts:
  - files
  - open
  - encoding
  - with statement
  - resource safety
avoid: Avoid manual close patterns as the preferred approach. Avoid toy fruit/shopping-cart examples, avoid clever one-liners, avoid large frameworks, avoid introducing future concepts too early.
---

# Working with Files Safely

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Open, read, and close files safely using the right mode and encoding.

## Content direction

Week 20 topic: Files and local data. Build on the previous lesson, 'Understanding Call Stack Behavior', explaining the concept through the running example: local exports such as transactions.csv, events.log, lessons.json, or tickets.txt. Prepare for 'Reading Large Files Line by Line'. Emphasize both interview reasoning (Show safe file handling and explain line-by-line processing.) and daily coding value (Read and write files without leaking resources or loading too much data.).

## Code direction

Read a small domain file with a with statement and explain why it closes automatically. Keep the code short, plain Python, with English comments only.
