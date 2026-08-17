---
sourceid: example-practical-api-course-design-a-response
lessonname: Design a Clear API Response
position: 2
level: beginner
goal: Choose an appropriate status code and a small, consistent JSON response for a successful endpoint.
contentdescription: Compare a successful lookup with a missing-resource response and explain why consistency helps API consumers.
codedescription: Show compact 200 and 404 JSON examples using the same error shape throughout the lesson.
concepts:
  - status codes
  - JSON
  - response design
  - error response
avoid: Avoid exhaustive status-code lists, API versioning strategies, and framework-specific middleware.
---

# Design a Clear API Response

Show one successful response and one predictable error response. Prefer a small example that a beginner can reason about over a production-scale schema.

This second file demonstrates the naming convention: the numeric prefix and `position` agree, while `sourceid` provides permanent identity.
