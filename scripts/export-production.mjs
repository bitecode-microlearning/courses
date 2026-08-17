import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { slugify, uniqueSlug, toYaml, COURSE_FIELDS, LESSON_FIELDS } from "./lib.mjs";

const root = path.resolve(import.meta.dirname, "..");
const website = path.resolve(root, "..", "website");
function query(sql) {
  const wrangler = path.join(website, "node_modules", "wrangler", "bin", "wrangler.js");
  const output = execFileSync(process.execPath, [wrangler, "d1", "execute", "bitecode-sitedb-prod", "--remote", "--config", "worker/wrangler.jsonc", "--env", "production", "--command", sql, "--json"], { cwd: website, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
  const parsed = JSON.parse(output);
  if (!parsed[0]?.success) throw new Error("Production D1 query failed.");
  return parsed[0].results;
}

const courses = query("SELECT id,name,description,notificationtemplateid,targetaudience,learninggoal,avoid,coursetype,ispublic,shortermgoal,longdescription,tags,technologyid,imagekey,level FROM courses ORDER BY id");
const lessons = query("SELECT id,lessonname,level,courseid,goal,contentdescription,codedescription,concepts,avoid FROM lessons ORDER BY courseid,id");
const technologies = query("SELECT id,name,slug FROM technologies ORDER BY id");
const templates = query("SELECT id FROM notificationtemplate ORDER BY id");
const target = path.join(root, "courses");
fs.rmSync(target, { recursive: true, force: true });
fs.mkdirSync(target, { recursive: true });
const usedCourses = new Set();
const manifest = { exportedAt: new Date().toISOString(), database: "bitecode-sitedb-prod", courses: [], lessons: [] };

for (const row of courses) {
  const sourceid = uniqueSlug(slugify(row.name), usedCourses);
  const dir = path.join(target, sourceid);
  fs.mkdirSync(dir, { recursive: true });
  const tags = (() => { try { const value = JSON.parse(row.tags || "[]"); return Array.isArray(value) ? value.map(String) : []; } catch { return String(row.tags || "").split(",").map((v) => v.trim()).filter(Boolean); } })();
  const course = { sourceid, name: row.name || "Untitled course", description: row.description || "Legacy BiteCode course.", notificationtemplateid: row.notificationtemplateid, targetaudience: row.targetaudience || "BiteCode learners", learninggoal: row.learninggoal || row.shortermgoal || "Build practical skills through short lessons.", avoid: row.avoid || "Avoid unnecessary complexity.", coursetype: row.coursetype || "course", ispublic: Boolean(row.ispublic), shortermgoal: row.shortermgoal || row.learninggoal || "Complete the course lessons.", longdescription: row.longdescription || row.description || "Legacy BiteCode course.", tags, technologyid: row.technologyid, imagekey: row.imagekey, level: ["beginner", "intermediate", "advanced"].includes(row.level) ? row.level : "beginner" };
  fs.writeFileSync(path.join(dir, "course.yml"), toYaml(course, ["sourceid", ...COURSE_FIELDS]));
  manifest.courses.push({ legacyCourseId: row.id, sourceid, path: `courses/${sourceid}/course.yml` });
  const usedLessons = new Set();
  const rows = lessons.filter((lesson) => lesson.courseid === row.id);
  rows.forEach((lesson, index) => {
    const lessonBase = slugify(lesson.lessonname || `lesson-${index + 1}`);
    const lessonLocalSlug = uniqueSlug(lessonBase, usedLessons);
    const lessonSourceid = `${sourceid}-${lessonLocalSlug}`;
    const concepts = String(lesson.concepts || "").split(/[,;\n]+/).map((value) => value.trim()).filter(Boolean);
    const metadata = { sourceid: lessonSourceid, lessonname: lesson.lessonname || `Lesson ${index + 1}`, position: index + 1, level: ["beginner", "intermediate", "advanced"].includes(lesson.level) ? lesson.level : course.level, goal: lesson.goal || "Understand and apply the lesson topic.", contentdescription: lesson.contentdescription || "Explain the topic with a focused practical example.", codedescription: lesson.codedescription || "Provide a concise practical example.", concepts: concepts.length ? concepts : [lessonLocalSlug.replace(/-/g, " ")], avoid: lesson.avoid || "Avoid unrelated advanced material." };
    const filename = `${String(index + 1).padStart(3, "0")}-${lessonLocalSlug}.md`;
    const body = `# ${metadata.lessonname}\n\n> This repository stores the canonical lesson brief used by BiteCode to generate learner-facing lesson content.\n\n## Goal\n\n${metadata.goal}\n\n## Content direction\n\n${metadata.contentdescription}\n\n## Code direction\n\n${metadata.codedescription}`;
    fs.writeFileSync(path.join(dir, filename), `---\n${toYaml(metadata, ["sourceid", "lessonname", "position", ...LESSON_FIELDS.filter((field) => field !== "lessonname")])}---\n\n${body}\n`);
    manifest.lessons.push({ legacyLessonId: lesson.id, legacyCourseId: row.id, sourceid: lessonSourceid, courseSourceid: sourceid, path: `courses/${sourceid}/${filename}` });
  });
}
fs.mkdirSync(path.join(root, "migration"), { recursive: true });
fs.writeFileSync(path.join(root, "migration", "legacy-id-map.json"), `${JSON.stringify(manifest, null, 2)}\n`);
fs.writeFileSync(path.join(root, "migration", "technologies.json"), `${JSON.stringify(technologies, null, 2)}\n`);
fs.writeFileSync(path.join(root, "migration", "notification-templates.json"), `${JSON.stringify(templates, null, 2)}\n`);
console.log(`Exported ${courses.length} courses and ${lessons.length} lessons.`);
