---
sourceid: redis-foundations-for-fast-systems-sort-and-rank-with-sorted-sets
lessonname: Sort and rank with sorted sets
position: 6
level: beginner
goal: The learner can model ranked values with sorted sets, read ranges in either direction, and interpret scores and ranks.
contentdescription: Use a product-performance or leaderboard scenario to teach sorted sets as member-score pairs. Explain ZADD, ZRANGE, ZREVRANGE, WITHSCORES, ZSCORE, ZRANK, and ZREVRANK. Show that scores determine order, ranks are zero-based, and updating a member's score changes its position. Connect sorted sets to SQL ORDER BY while clarifying that the structure is designed in advance. End with a small challenge.
codedescription: "Return a structured CodePractice payload with exactly one self-contained file named lesson.redis, which is also the entrypoint. lesson.redis must create a small sorted set, then execute ZADD, ZRANGE WITHSCORES, ZREVRANGE WITHSCORES, ZSCORE, ZRANK, and ZREVRANK. Update one existing member with ZADD and query the ranking again. Use ECHO \"message\" commands for headings and explanations. Do not include raw comments or lines beginning with #, //, or --. Do not use module-only commands or commands that intentionally produce errors."
concepts:
  - sorted sets
  - members and scores
  - ascending and descending ranges
  - ranks
  - score updates
  - leaderboard and ordered-query patterns
  - SQL ORDER BY comparison
avoid: Avoid presenting sorted sets as arbitrary multi-column sorting, covering advanced floating-point edge cases, DBA operations, large datasets, destructive production statements, secrets, external services, or placing setup code in lesson.sql.
---

# Sort and rank with sorted sets

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

The learner can model ranked values with sorted sets, read ranges in either direction, and interpret scores and ranks.

## Content direction

Use a product-performance or leaderboard scenario to teach sorted sets as member-score pairs. Explain ZADD, ZRANGE, ZREVRANGE, WITHSCORES, ZSCORE, ZRANK, and ZREVRANK. Show that scores determine order, ranks are zero-based, and updating a member's score changes its position. Connect sorted sets to SQL ORDER BY while clarifying that the structure is designed in advance. End with a small challenge.

## Code direction

Return a structured CodePractice payload with exactly one self-contained file named lesson.redis, which is also the entrypoint. lesson.redis must create a small sorted set, then execute ZADD, ZRANGE WITHSCORES, ZREVRANGE WITHSCORES, ZSCORE, ZRANK, and ZREVRANK. Update one existing member with ZADD and query the ranking again. Use ECHO "message" commands for headings and explanations. Do not include raw comments or lines beginning with #, //, or --. Do not use module-only commands or commands that intentionally produce errors.
