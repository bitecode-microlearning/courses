---
sourceid: codecore-developer-basics-designing-clear-error-messages
lessonname: Designing Clear Error Messages
position: 69
level: intermediate
goal: Write error messages that tell the user what failed, where, and what to fix.
contentdescription: Week 23 topic: Exception handling fundamentals. Build on the previous lesson, 'Recoverable vs Non-Recoverable Errors', explaining the concept through the running example: file parsing, record validation, and external input conversion. Prepare for 'Custom Exceptions for Domain Errors'. Emphasize both interview reasoning (Explain try/except and clear error communication.) and daily coding value (Make small programs fail clearly and recover when appropriate.).
codedescription: Create row-level validation messages with field name, bad value, and expected format. Keep the code short, plain Python, with English comments only.
concepts:
  - error messages
  - context
  - diagnostics
  - user guidance
avoid: Avoid vague messages like something went wrong. Avoid toy fruit/shopping-cart examples, avoid clever one-liners, avoid large frameworks, avoid introducing future concepts too early.
---

# Designing Clear Error Messages

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Write error messages that tell the user what failed, where, and what to fix.

## Content direction

Week 23 topic: Exception handling fundamentals. Build on the previous lesson, 'Recoverable vs Non-Recoverable Errors', explaining the concept through the running example: file parsing, record validation, and external input conversion. Prepare for 'Custom Exceptions for Domain Errors'. Emphasize both interview reasoning (Explain try/except and clear error communication.) and daily coding value (Make small programs fail clearly and recover when appropriate.).

## Code direction

Create row-level validation messages with field name, bad value, and expected format. Keep the code short, plain Python, with English comments only.
