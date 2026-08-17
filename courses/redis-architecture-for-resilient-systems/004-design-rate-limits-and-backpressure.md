---
sourceid: redis-architecture-for-resilient-systems-design-rate-limits-and-backpressure
lessonname: Design rate limits and backpressure
position: 4
level: advanced
goal: The learner can model bounded traffic controls and explain how rate limiting, concurrency limits, and backpressure protect downstream services.
contentdescription: Use an expensive recommendation endpoint to separate client fairness from dependency protection. Model a fixed-window counter and an in-flight guard, then discuss thresholds, expiry, rejection versus degradation, retry guidance, key cardinality, and metrics. Explain where more advanced algorithms may be needed without relying on module-only commands.
codedescription: "Return a structured CodePractice payload with exactly one self-contained file named lesson.redis, which is also the entrypoint. Create a request-window counter and an in-flight counter using SET EX, INCR, TTL, GET, DECR, and EXISTS, then verify the control state. Use ECHO \"message\" commands to label admission, threshold observation, completion, and expiry policy. Keep counters valid and deterministic. Do not include raw comments, module-only commands, waits, external services, or intentional errors."
concepts:
  - rate limiting
  - fixed window
  - backpressure
  - concurrency guard
  - dependency protection
  - admission control
  - TTL
  - observability
avoid: Avoid claiming one limiter algorithm fits every workload, allowing unbounded key cardinality, producing negative counters, vendor-only modules, or server tuning.
---

# Design rate limits and backpressure

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

The learner can model bounded traffic controls and explain how rate limiting, concurrency limits, and backpressure protect downstream services.

## Content direction

Use an expensive recommendation endpoint to separate client fairness from dependency protection. Model a fixed-window counter and an in-flight guard, then discuss thresholds, expiry, rejection versus degradation, retry guidance, key cardinality, and metrics. Explain where more advanced algorithms may be needed without relying on module-only commands.

## Code direction

Return a structured CodePractice payload with exactly one self-contained file named lesson.redis, which is also the entrypoint. Create a request-window counter and an in-flight counter using SET EX, INCR, TTL, GET, DECR, and EXISTS, then verify the control state. Use ECHO "message" commands to label admission, threshold observation, completion, and expiry policy. Keep counters valid and deterministic. Do not include raw comments, module-only commands, waits, external services, or intentional errors.
