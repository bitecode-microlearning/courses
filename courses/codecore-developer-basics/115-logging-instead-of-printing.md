---
sourceid: codecore-developer-basics-logging-instead-of-printing
lessonname: Logging Instead of Printing
position: 115
level: intermediate
goal: Use logging when messages need levels, timestamps, destinations, or later filtering.
contentdescription: Week 39 topic: Logging and operational debugging. Build on the previous lesson, 'Writing Small Regression Tests', explaining the concept through the running example: a batch import or API collection workflow. Prepare for 'Logging Levels and Useful Context'. Emphasize both interview reasoning (Explain logging levels and context-rich messages.) and daily coding value (Debug data pipelines without relying on scattered print calls.).
codedescription: Replace print statements in the pipeline with logger calls. Keep the code short, plain Python, with English comments only.
concepts:
  - logging
  - print vs logging
  - logger
  - diagnostics
avoid: Avoid logging sensitive data. Avoid toy fruit/shopping-cart examples, avoid clever one-liners, avoid large frameworks, avoid introducing future concepts too early.
---

# Logging Instead of Printing

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Use logging when messages need levels, timestamps, destinations, or later filtering.

## Content direction

Week 39 topic: Logging and operational debugging. Build on the previous lesson, 'Writing Small Regression Tests', explaining the concept through the running example: a batch import or API collection workflow. Prepare for 'Logging Levels and Useful Context'. Emphasize both interview reasoning (Explain logging levels and context-rich messages.) and daily coding value (Debug data pipelines without relying on scattered print calls.).

## Code direction

Replace print statements in the pipeline with logger calls. Keep the code short, plain Python, with English comments only.
