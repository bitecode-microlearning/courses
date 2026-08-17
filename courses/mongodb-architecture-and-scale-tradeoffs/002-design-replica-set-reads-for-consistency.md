---
sourceid: mongodb-architecture-and-scale-tradeoffs-design-replica-set-reads-for-consistency
lessonname: Design replica-set reads for consistency
position: 2
level: advanced
goal: Choose read preference and read concern from freshness, latency, and failure requirements.
contentdescription: Explain primary and secondary reads, replication lag, stale results, causal expectations, failover, and why more read replicas do not automatically improve correctness.
codedescription: Use init.js for compact consistency-requirement documents and main.js to classify operations by acceptable staleness. Keep topology commands conceptual and executable lesson code portable.
concepts:
  - replica set
  - read preference
  - read concern
  - replication lag
  - failover
  - stale reads
avoid: Avoid infrastructure setup, always-read-secondary advice, zero-lag assumptions, and setup code in main.js.
---

# Design replica-set reads for consistency

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

Choose read preference and read concern from freshness, latency, and failure requirements.

## Content direction

Explain primary and secondary reads, replication lag, stale results, causal expectations, failover, and why more read replicas do not automatically improve correctness.

## Code direction

Use init.js for compact consistency-requirement documents and main.js to classify operations by acceptable staleness. Keep topology commands conceptual and executable lesson code portable.
