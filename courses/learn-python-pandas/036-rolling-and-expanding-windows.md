---
sourceid: learn-python-pandas-rolling-and-expanding-windows
lessonname: Rolling and Expanding Windows
position: 36
level: beginner
goal: Use Pandas to understand and apply rolling and expanding windows in a practical data-analysis task, then verify the result.
contentdescription: Explain Rolling and Expanding Windows through a progressive workflow: introduce the purpose and core API, inspect the starting data, walk through the transformation, interpret the output, and finish with a small practice challenge. Highlight the behavior, trade-offs, and common mistakes appropriate to the intermediate level.
codedescription: "Always generate a runnable multi-file Python example with at least two files: main.py as the entrypoint and a separate data.csv containing dated observations in data.csv that reveal ordering and time-based behavior. In main.py, parse the date column, order the observations, apply the relevant time-based operation, and verify the resulting index or values. Keep main.py concise and easy to review, read data.csv with a relative path, print a deterministic result, and include a short assertion or self-check. Return both files in the CodePractice files array; never embed the CSV data inside Python and never collapse the example to one file."
concepts:
  - Rolling and Expanding Windows
  - pandas
  - DataFrame
  - data analysis
  - CSV input
  - multi-file Python
  - reproducible results
avoid: Avoid single-file examples, inline CSV strings, oversized datasets, absolute paths, network access, notebooks, hidden state, non-deterministic output, deprecated Pandas APIs, unexplained method chains, and unrelated libraries. Do not omit main.py or data.csv.
---

# Rolling and Expanding Windows

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Use Pandas to understand and apply rolling and expanding windows in a practical data-analysis task, then verify the result.

## Content direction

Explain Rolling and Expanding Windows through a progressive workflow: introduce the purpose and core API, inspect the starting data, walk through the transformation, interpret the output, and finish with a small practice challenge. Highlight the behavior, trade-offs, and common mistakes appropriate to the intermediate level.

## Code direction

Always generate a runnable multi-file Python example with at least two files: main.py as the entrypoint and a separate data.csv containing dated observations in data.csv that reveal ordering and time-based behavior. In main.py, parse the date column, order the observations, apply the relevant time-based operation, and verify the resulting index or values. Keep main.py concise and easy to review, read data.csv with a relative path, print a deterministic result, and include a short assertion or self-check. Return both files in the CodePractice files array; never embed the CSV data inside Python and never collapse the example to one file.
