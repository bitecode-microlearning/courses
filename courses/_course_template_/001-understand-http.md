---
# Stable lesson identity. It remains unchanged even if this file is renamed.
sourceid: example-practical-api-course-understand-http

# Learner-facing lesson name and explicit order within the course.
lessonname: Understand an HTTP Exchange
position: 1
level: beginner

# What the learner should understand or accomplish.
goal: Identify the method, URL, headers, status, and body in a simple HTTP exchange.

# Guidance for the explanation generated and delivered by BiteCode.
contentdescription: Use one complete request and response to explain the role of each HTTP part in plain language.

# Guidance for the practical code or command example.
codedescription: Use a small curl request and a JSON response without requiring a framework or account.

# Concepts are a YAML list even though the legacy database stores them as text.
concepts:
  - HTTP request
  - HTTP response
  - method
  - status code
  - JSON body

# Explicit scope guard for lesson generation.
avoid: Avoid HTTP/2 framing, proxy configuration, authentication, and deployment concerns.
---

# Understand an HTTP Exchange

An API conversation has two sides: a client sends a request, and a server returns a response.

## Example

```http
GET /api/books/42 HTTP/1.1
Accept: application/json
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{"id":42,"title":"The Example Book"}
```

Explain what the method, path, status code, headers, and JSON body communicate. Keep the Markdown body useful to human reviewers; the YAML front matter remains the structured synchronization contract.
