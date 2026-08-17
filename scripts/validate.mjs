import fs from "node:fs";
import path from "node:path";
import { walkCourses, validateCourse, validateLesson } from "./lib.mjs";
const root = path.resolve(import.meta.dirname, "..");
const errors = [];
const courseIds = new Set();
const lessonIds = new Set();
for (const item of walkCourses(root)) {
  for (const error of validateCourse(item.course)) errors.push(`${item.dir}: ${error}`);
  if (courseIds.has(item.course.sourceid)) errors.push(`${item.dir}: duplicate course sourceid`);
  courseIds.add(item.course.sourceid);
  for (const lesson of item.lessons) {
    for (const error of validateLesson(lesson.metadata)) errors.push(`${lesson.path}: ${error}`);
    if (lessonIds.has(lesson.metadata.sourceid)) errors.push(`${lesson.path}: duplicate lesson sourceid`);
    lessonIds.add(lesson.metadata.sourceid);
  }
}
if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log(`Validated ${courseIds.size} courses and ${lessonIds.size} lessons.`);
