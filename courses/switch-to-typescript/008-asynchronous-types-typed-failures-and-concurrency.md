---
sourceid: switch-to-typescript-asynchronous-types-typed-failures-and-concurrency
lessonname: Asynchronous Types, Typed Failures, and Concurrency
position: 8
level: intermediate
goal: Represent asynchronous workflows and failure modes without losing type information.
contentdescription: Cover Promise typing, async return inference, Awaited, Promise combinators, async iterables, cancellation with AbortSignal, and the unknown type of caught errors. Compare exceptions with explicit Result-style return types. Model success and failure as discriminated unions and preserve error information across asynchronous layers.
codedescription: Implement a concurrent data loader with cancellation, retry policy, Promise.allSettled handling, a typed Result abstraction, and exhaustive error processing. Add a concurrency-limited task runner with generic result preservation.
concepts:
  - Promise
  - async and await
  - Awaited
  - Promise combinators
  - async iterables
  - AbortSignal
  - unknown errors
  - Result types
  - concurrency control
avoid: "Typing rejected Promise values as if TypeScript enforced them; swallowing caught errors; returning mixed undefined and exceptions; launching unbounded concurrent work; forgetting cancellation and partial-failure behavior"
---

# Asynchronous Types, Typed Failures, and Concurrency

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Represent asynchronous workflows and failure modes without losing type information.

## Content direction

Cover Promise typing, async return inference, Awaited, Promise combinators, async iterables, cancellation with AbortSignal, and the unknown type of caught errors. Compare exceptions with explicit Result-style return types. Model success and failure as discriminated unions and preserve error information across asynchronous layers.

## Code direction

Implement a concurrent data loader with cancellation, retry policy, Promise.allSettled handling, a typed Result abstraction, and exhaustive error processing. Add a concurrency-limited task runner with generic result preservation.
