---
sourceid: codecore-developer-basics-logging-levels-and-useful-context
lessonname: Logging Levels and Useful Context
position: 116
level: intermediate
goal: Choose appropriate log levels and include useful context without leaking private data.
contentdescription: Week 39 topic: Logging and operational debugging. Build on the previous lesson, 'Logging Instead of Printing', explaining the concept through the running example: a batch import or API collection workflow. Prepare for 'Debugging Data Pipelines'. Emphasize both interview reasoning (Explain logging levels and context-rich messages.) and daily coding value (Debug data pipelines without relying on scattered print calls.).
codedescription: Log start, skipped rows, recoverable errors, and final summary with record counts. Keep the code short, plain Python, with English comments only.
concepts:
  - debug
  - info
  - warning
  - error
  - context
  - observability
avoid: Avoid logging every record at info level. Avoid toy fruit/shopping-cart examples, avoid clever one-liners, avoid large frameworks, avoid introducing future concepts too early.
---

# Logging Levels and Useful Context

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Choose appropriate log levels and include useful context without leaking private data.

## Content direction

Week 39 topic: Logging and operational debugging. Build on the previous lesson, 'Logging Instead of Printing', explaining the concept through the running example: a batch import or API collection workflow. Prepare for 'Debugging Data Pipelines'. Emphasize both interview reasoning (Explain logging levels and context-rich messages.) and daily coding value (Debug data pipelines without relying on scattered print calls.).

## Code direction

Log start, skipped rows, recoverable errors, and final summary with record counts. Keep the code short, plain Python, with English comments only.
