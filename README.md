# BiteCode Courses

This repository is the canonical, community-editable source for BiteCode course briefs. The BiteCode D1 database remains the runtime representation; accepted changes are validated and synchronized into the existing `courses` and `lessons` tables without replacing their integer IDs or resetting runtime metrics.

Each `courses/<course-sourceid>/course.yml` contains course metadata. Ordered lesson Markdown files contain YAML front matter plus the editorial brief. Stable `sourceid` values identify content even when files are renamed.

Start a new course by copying [`courses/_course_template_`](courses/_course_template_). Its annotated course and lesson files explain every field. Rename the copied folder and replace every example value; underscore-prefixed folders are ignored by validation and synchronization.

## Work locally

```sh
npm test
npm run validate
```

Production maintainers can refresh the initial migration snapshot with `npm run export:production`. This requires authenticated Wrangler access to `bitecode-sitedb-prod` and intentionally rewrites the generated `courses/` tree. Community contributors should edit individual files instead.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the pull-request workflow. Course content is licensed under CC BY-NC-SA 4.0; application code and tooling in this repository are provided under MIT.

Learn from the community. Give something back when you can.

## Attribution

The initial catalog import is not a contribution and has no default contributor. After the repository is pushed, maintainers record its initial commit as the contribution baseline. Only eligible commits, merged pull requests, and reviews after that baseline count. See [`config/contribution-policy.json`](config/contribution-policy.json).
