---
sourceid: learn-python-pandas-outer-inner-left-right-joins
lessonname: "Outer, Inner, Left, Right Joins"
position: 52
level: beginner
goal: Use Pandas to understand and apply outer, inner, left, right joins in a practical data-analysis task, then verify the result.
contentdescription: Explain Outer, Inner, Left, Right Joins through a progressive workflow: introduce the purpose and core API, inspect the starting data, walk through the transformation, interpret the output, and finish with a small practice challenge. Highlight the behavior, trade-offs, and common mistakes appropriate to the advanced level.
codedescription: "Always generate a runnable multi-file Python example with at least two files: main.py as the entrypoint and a separate data.csv containing related customer and order records stored together in data.csv with a source column. In main.py, split the fixture into related tables when needed, combine them with the lesson's join strategy, and validate matched and unmatched rows. Keep main.py concise and easy to review, read data.csv with a relative path, print a deterministic result, and include a short assertion or self-check. Return both files in the CodePractice files array; never embed the CSV data inside Python and never collapse the example to one file."
concepts:
  - Outer
  - Inner
  - Left
  - Right Joins
  - pandas
  - DataFrame
  - data analysis
  - CSV input
  - multi-file Python
  - reproducible results
avoid: Avoid single-file examples, inline CSV strings, oversized datasets, absolute paths, network access, notebooks, hidden state, non-deterministic output, deprecated Pandas APIs, unexplained method chains, and unrelated libraries. Do not omit main.py or data.csv.
---

# Outer, Inner, Left, Right Joins

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Use Pandas to understand and apply outer, inner, left, right joins in a practical data-analysis task, then verify the result.

## Content direction

Explain Outer, Inner, Left, Right Joins through a progressive workflow: introduce the purpose and core API, inspect the starting data, walk through the transformation, interpret the output, and finish with a small practice challenge. Highlight the behavior, trade-offs, and common mistakes appropriate to the advanced level.

## Code direction

Always generate a runnable multi-file Python example with at least two files: main.py as the entrypoint and a separate data.csv containing related customer and order records stored together in data.csv with a source column. In main.py, split the fixture into related tables when needed, combine them with the lesson's join strategy, and validate matched and unmatched rows. Keep main.py concise and easy to review, read data.csv with a relative path, print a deterministic result, and include a short assertion or self-check. Return both files in the CodePractice files array; never embed the CSV data inside Python and never collapse the example to one file.
