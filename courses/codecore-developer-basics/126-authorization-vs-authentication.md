---
sourceid: codecore-developer-basics-authorization-vs-authentication
lessonname: Authorization vs Authentication
position: 126
level: intermediate
goal: Distinguish who the caller is from what the caller is allowed to do.
contentdescription: Week 42 topic: API design and access control basics. Build on the previous lesson, 'Authentication Basics: API Keys and Tokens', explaining the concept through the running example: a small API for domain records or lesson progress. Prepare for 'HTTP Requests with Python'. Emphasize both interview reasoning (Explain REST basics, API keys/tokens, and auth vs authorization.) and daily coding value (Use credentials responsibly and reason about access failures.).
codedescription: Model a simple permission check after a caller has been identified. Keep the code short, plain Python, with English comments only.
concepts:
  - authorization
  - authentication
  - permissions
  - identity
  - access control
avoid: Avoid merging auth concepts into one vague term. Avoid toy fruit/shopping-cart examples, avoid clever one-liners, avoid large frameworks, avoid introducing future concepts too early.
---

# Authorization vs Authentication

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Distinguish who the caller is from what the caller is allowed to do.

## Content direction

Week 42 topic: API design and access control basics. Build on the previous lesson, 'Authentication Basics: API Keys and Tokens', explaining the concept through the running example: a small API for domain records or lesson progress. Prepare for 'HTTP Requests with Python'. Emphasize both interview reasoning (Explain REST basics, API keys/tokens, and auth vs authorization.) and daily coding value (Use credentials responsibly and reason about access failures.).

## Code direction

Model a simple permission check after a caller has been identified. Keep the code short, plain Python, with English comments only.
