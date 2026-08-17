# Instructions for course-generation agents

This repository is the canonical, community-editable source for BiteCode course briefs. Follow these instructions whenever you create or modify files in this repository.

## Start here

1. Read `README.md`, `CONTRIBUTING.md`, and this file.
2. For a new course, copy `courses/_course_template_/` and use its annotated files as the structural example.
3. Inspect one or two existing courses for the same technology and difficulty. Reuse established terminology and code-file contracts where applicable, but do not copy lesson text mechanically.
4. Check `migration/technologies.json` before selecting `technologyid`.
5. Run `npm test` and `npm run validate` before declaring the work complete.

Do not edit generated migration inventories merely to make new content appear legacy. In particular, do not add new content to `migration/legacy-id-map.json`; synchronization creates mappings for genuinely new source IDs.

The initial catalog import has no contributor and does not count as contribution activity. Do not add an `author` or `contributor` field independently to course or lesson front matter. Verified contributors come from eligible GitHub history after the configured baseline commit in `config/contribution-policy.json`. Never attribute the initial dump to its committer, and never create contributor, badge, ranking, or impact records from the baseline commit.

## Repository shape

Every real course has this form:

```text
courses/<course-sourceid>/
  course.yml
  001-first-lesson.md
  002-second-lesson.md
  ...
```

Folders whose names begin with `_` are documentation or templates. They are excluded from validation and synchronization and must not contain a course intended for publication.

The course directory name should equal the course `sourceid`. Lesson filenames use a zero-padded, three-digit position followed by a concise slug. The YAML `position` and filename prefix must agree.

## Identity and ordering

- Use lowercase kebab-case source IDs matching `^[a-z0-9]+(?:-[a-z0-9]+)*$`.
- Make every course `sourceid` globally unique.
- Make every lesson `sourceid` globally unique. Prefixing it with the course source ID is recommended.
- Treat `sourceid` as permanent after first synchronization. Renaming or moving a file must not change it.
- Do not use `courses.id` or `lessons.id` as public identities or embed them in source IDs.
- Lesson order is explicit. Use consecutive `position` values beginning at 1 and matching filename prefixes.
- Never reorder existing lessons casually: delivery, progress, and certificates depend on stable runtime relationships.

## Course metadata

`course.yml` must conform to `schemas/course.schema.json` and support the existing BiteCode fields:

- `sourceid`: stable repository identity.
- `name`: concise learner-facing title.
- `description`: one- or two-sentence catalog summary.
- `notificationtemplateid`: existing template ID or `null`; never invent an ID.
- `targetaudience`: specific prior knowledge and learner context.
- `learninggoal`: measurable end-of-course capability.
- `avoid`: explicit scope boundaries.
- `coursetype`: match an established BiteCode type, normally `classic`, unless the task specifies another existing type.
- `ispublic`: YAML boolean, normally `false` for new content until review.
- `shortermgoal`: keep this exact historical spelling for database compatibility.
- `longdescription`: useful Markdown-capable overview of outcomes and progression.
- `tags`: natural YAML array of concise, relevant tags.
- `technologyid`: an existing numeric ID from `migration/technologies.json`, or `null` for genuinely technology-neutral material.
- `imagekey`: existing R2 key or `null`; never fabricate an asset path.
- `level`: exactly `beginner`, `intermediate`, or `advanced`.

Never add or modify runtime fields such as `likes`, `views`, database IDs, learner counts, progress, or certificate data.

## Lesson format

Every lesson is Markdown with YAML front matter conforming to `schemas/lesson.schema.json`:

```md
---
sourceid: course-sourceid-specific-topic
lessonname: Specific Learner-Facing Title
position: 1
level: beginner
goal: A measurable outcome for this lesson.
contentdescription: Clear guidance for the explanation and learning flow.
codedescription: Exact guidance for a small, runnable example.
concepts:
  - first concept
  - second concept
avoid: Concrete exclusions that keep the lesson focused.
---

# Specific Learner-Facing Title

Human-readable editorial content follows here.
```

Write every metadata field deliberately. Do not use empty filler such as "learn the topic," "provide an example," or "avoid complexity" when a specific outcome, example, or exclusion can be stated.

The Markdown body should help a contributor understand and improve the lesson. It should agree with the metadata, include a focused explanation or example where useful, and not claim to be a generated learner email. Front matter is the synchronization contract; the body is editable source content.

## Curriculum design

- Define the audience, prerequisite knowledge, and final capability before listing lessons.
- Build a coherent progression: mental model, guided fundamentals, application, failure cases, and an integrated outcome where appropriate.
- Keep each lesson focused on one primary learning step that fits a short BiteCode session.
- Use observable verbs in goals: identify, explain, implement, compare, debug, query, refactor, or validate.
- Introduce a concept before depending on it. Avoid unexplained jumps in complexity.
- Do not repeat essentially the same goal across lessons.
- Make examples deterministic, small, offline-safe, and free of secrets or paid/external-service requirements.
- Prefer realistic developer tasks over toy syntax tours, while respecting the stated learner level.
- Include relevant failure handling and self-checks, but do not turn beginner lessons into production infrastructure guides.
- Keep `avoid` useful: name likely distractions, unsafe operations, or concepts reserved for later lessons.

## CodePractice contracts

When an existing course family establishes an entrypoint or multi-file convention, preserve it consistently across all lessons in the new course.

- General code examples must state the entrypoint and exact required files in `codedescription` when multiple files are needed.
- Generated examples must be runnable together, deterministic, and use relative paths.
- Do not require unavailable packages or network services. Match packages and runtimes already supported by BiteCode/OneCompiler.
- Keep setup data separate from learner-facing code when the technology requires setup.

For SQL and database courses:

- Target SQL developers, BI users, analysts, report authors, or application developers—not DBA operations.
- Use exactly two files unless an established technology contract says otherwise: `init.sql` followed by `lesson.sql`.
- `init.sql` contains only deterministic schema/setup/sample data required by the lesson.
- `lesson.sql` is the learner-facing entrypoint and contains only the query or commands being taught.
- The two files must be self-contained together; email rendering must show only `lesson.sql`.
- Avoid backup/restore, installation, server configuration, infrastructure, capacity planning, tuning, destructive production statements, secrets, and large datasets.

For MongoDB courses:

- Use `init.js` for deterministic setup and `main.js` as the learner-facing entrypoint.
- Keep setup out of `main.js`; email rendering should show only `main.js`.
- Make the two files self-contained together and keep examples local and deterministic.

## Editing existing content

- Preserve `sourceid` values and existing compatibility fields.
- Do not regenerate an entire course when the requested change is narrow.
- Do not rewrite historical content solely for style consistency.
- If removing a lesson, understand that synchronization deactivates its source mapping rather than hard-deleting runtime data.
- Do not update `migration/legacy-id-map.json`, `migration/technologies.json`, or `migration/notification-templates.json` unless explicitly refreshing the production export.
- Do not run `npm run export:production` during normal course authoring; it replaces the generated course tree with a production snapshot.

## Quality checklist

Before finishing, verify:

- The course folder, course source ID, lesson source IDs, filenames, and positions are consistent.
- All source IDs are unique and stable kebab-case.
- Course and lesson levels use allowed values.
- YAML booleans, arrays, integers, and `null` values use their natural types rather than quoted lookalikes.
- Every required legacy field is present; no runtime-only field was introduced.
- Tags and concepts are YAML arrays.
- Technology and notification-template references are real or `null`.
- Goals are measurable, lessons form a coherent sequence, and content avoids unnecessary duplication.
- Code examples have a precise runnable contract and respect any database or MongoDB file conventions.
- No learner data, credentials, private information, generated emails, or external copyrighted course text was added.
- `npm test` passes.
- `npm run validate` passes and reports the expected catalog counts plus any newly added real course and lesson files.

Do not declare completion with validation failures or by weakening schemas/validation to accept malformed content. Fix the course files instead.
