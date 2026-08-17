import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { parseSimpleYaml, splitFrontMatter, toYaml, validateCourse, validateLesson, walkCourses } from "../scripts/lib.mjs";

test("course YAML preserves arrays, booleans, nulls, and compatibility spelling", () => {
  const source = { sourceid: "python-basics", name: "Python Basics", description: "Learn Python", targetaudience: "Beginners", learninggoal: "Write Python", coursetype: "course", ispublic: true, longdescription: "A practical course", tags: ["python", "beginner"], notificationtemplateid: null, shortermgoal: "Write code", level: "beginner" };
  const parsed = parseSimpleYaml(toYaml(source));
  assert.deepEqual(parsed.tags, source.tags); assert.equal(parsed.ispublic, true); assert.equal(parsed.notificationtemplateid, null); assert.equal(parsed.shortermgoal, "Write code"); assert.deepEqual(validateCourse(parsed), []);
});

test("lesson Markdown extracts body and validates ordered metadata", () => {
  const parsed = splitFrontMatter(`---\nsourceid: python-variables\nlessonname: Variables\nposition: 1\nlevel: beginner\ngoal: Learn variables\ncontentdescription: Explain variables\ncodedescription: Show assignment\nconcepts:\n  - variables\navoid: Avoid internals\n---\n# Variables`);
  const metadata = parseSimpleYaml(parsed.yaml); assert.equal(parsed.body, "# Variables"); assert.deepEqual(validateLesson(metadata), []);
});

test("invalid levels and booleans are rejected before sync", () => {
  assert.ok(validateCourse({ sourceid: "bad", name: "Bad", description: "Bad", targetaudience: "Anyone", learninggoal: "None", coursetype: "course", ispublic: 1, longdescription: "Bad", tags: [], level: "expert" }).length >= 2);
});

test("underscore-prefixed template folders are excluded from sync discovery", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "bitecode-courses-"));
  fs.mkdirSync(path.join(root, "courses", "_course_template_"), { recursive: true });
  fs.writeFileSync(path.join(root, "courses", "_course_template_", "course.yml"), "this is intentionally ignored");
  assert.deepEqual(walkCourses(root), []);
  fs.rmSync(root, { recursive: true, force: true });
});

test("initial catalog commit is excluded and has no default contributor", () => {
  const config = JSON.parse(fs.readFileSync(new URL("../config/contribution-policy.json", import.meta.url), "utf8"));
  assert.equal("defaultContributor" in config, false);
  assert.equal(config.baseline.mode, "configured_commit_sha");
  assert.equal(config.baseline.includeBaselineCommit, false);
  assert.equal(config.acceptedActivity.mergedPullRequests, true);
  assert.equal(config.acceptedActivity.directCommitsAfterBaseline, true);
});
