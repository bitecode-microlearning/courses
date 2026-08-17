---
sourceid: redis-foundations-for-fast-systems-read-values-and-records
lessonname: Read values and records
position: 3
level: beginner
goal: The learner can store and retrieve scalar values and hash records, request only needed fields, and explain missing-value results.
contentdescription: Use a small live sales dashboard scenario to compare string values with hash records. Teach SET, MSET, GET, MGET, HSET, HGET, HMGET, and HGETALL. Explain how a missing key or field is represented, why GET should only be used for string keys, and when retrieving selected fields is clearer than retrieving an entire hash. End with a small modification challenge.
codedescription: "Return a structured CodePractice payload with exactly one self-contained file named lesson.redis, which is also the entrypoint. lesson.redis must first create every key and value used by the lesson, then execute SET, MSET, GET, MGET, HSET, HGET, HMGET, and HGETALL against valid key types. Use ECHO \"message\" commands before the commands whose real results they describe. Do not print expected values instead of executing commands. Do not include raw comments or lines beginning with #, //, or --. Do not use module-only commands or commands that intentionally produce errors, such as GET against a hash key."
concepts:
  - strings and hashes
  - scalar values versus records
  - GET and MGET
  - HGET and HMGET
  - HGETALL
  - missing keys and fields
  - result verification
avoid: Avoid intentional wrong-type errors, DBA operations, installation, server configuration, large datasets, unexplained vendor features, destructive production statements, secrets, external services, or placing setup code in lesson.sql.
---

# Read values and records

> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.

## Goal

The learner can store and retrieve scalar values and hash records, request only needed fields, and explain missing-value results.

## Content direction

Use a small live sales dashboard scenario to compare string values with hash records. Teach SET, MSET, GET, MGET, HSET, HGET, HMGET, and HGETALL. Explain how a missing key or field is represented, why GET should only be used for string keys, and when retrieving selected fields is clearer than retrieving an entire hash. End with a small modification challenge.

## Code direction

Return a structured CodePractice payload with exactly one self-contained file named lesson.redis, which is also the entrypoint. lesson.redis must first create every key and value used by the lesson, then execute SET, MSET, GET, MGET, HSET, HGET, HMGET, and HGETALL against valid key types. Use ECHO "message" commands before the commands whose real results they describe. Do not print expected values instead of executing commands. Do not include raw comments or lines beginning with #, //, or --. Do not use module-only commands or commands that intentionally produce errors, such as GET against a hash key.
