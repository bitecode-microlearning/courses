import fs from "node:fs";
import path from "node:path";

export const LEVELS = new Set(["beginner", "intermediate", "advanced"]);
export const COURSE_FIELDS = ["name", "description", "notificationtemplateid", "targetaudience", "learninggoal", "avoid", "coursetype", "ispublic", "shortermgoal", "longdescription", "tags", "technologyid", "imagekey", "level"];
export const LESSON_FIELDS = ["lessonname", "level", "goal", "contentdescription", "codedescription", "concepts", "avoid"];

export function slugify(value) {
  return String(value || "content").normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 80) || "content";
}

export function uniqueSlug(base, used) {
  let result = base;
  let suffix = 2;
  while (used.has(result)) result = `${base}-${suffix++}`;
  used.add(result);
  return result;
}

function scalar(value) {
  if (value === null || value === undefined) return "null";
  if (typeof value === "boolean" || typeof value === "number") return String(value);
  const text = String(value);
  if (!text.includes("\n") && /^[a-zA-Z0-9_./@+-]+(?: [a-zA-Z0-9_./@+,'()&:-]+)*$/.test(text) && !/^(true|false|null|yes|no|on|off)$/i.test(text)) return text;
  if (!text.includes("\n")) return JSON.stringify(text);
  const lines = text.replace(/\r/g, "").trim().split("\n");
  return `|\n${lines.map((line) => `  ${line}`).join("\n")}`;
}

export function toYaml(record, order = Object.keys(record)) {
  const lines = [];
  for (const key of order) {
    const value = record[key];
    if (Array.isArray(value)) {
      lines.push(`${key}:`);
      if (!value.length) lines.push("  []");
      else for (const item of value) lines.push(`  - ${scalar(item)}`);
    } else lines.push(`${key}: ${scalar(value)}`);
  }
  return `${lines.join("\n")}\n`;
}

export function splitFrontMatter(markdown) {
  const match = markdown.replace(/^\uFEFF/, "").match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) throw new Error("Lesson must start with YAML front matter delimited by ---.");
  return { yaml: match[1], body: match[2].trim() };
}

export function parseSimpleYaml(input) {
  const out = {};
  const lines = input.replace(/\r/g, "").split("\n");
  let i = 0;
  while (i < lines.length) {
    const line = lines[i++];
    if (!line.trim() || line.trimStart().startsWith("#")) continue;
    const match = line.match(/^([a-zA-Z][a-zA-Z0-9_]*):(?:\s*(.*))?$/);
    if (!match) throw new Error(`Malformed YAML at: ${line}`);
    const [, key, raw = ""] = match;
    if (raw === "|" || raw === ">") {
      const parts = [];
      while (i < lines.length && (/^\s+/.test(lines[i]) || lines[i] === "")) parts.push(lines[i++].replace(/^  /, ""));
      out[key] = raw === ">" ? parts.join(" ").replace(/\s+/g, " ").trim() : parts.join("\n").trim();
    } else if (raw === "") {
      const list = [];
      while (i < lines.length && /^\s+-\s+/.test(lines[i])) list.push(parseScalar(lines[i++].replace(/^\s+-\s+/, "")));
      out[key] = list;
    } else out[key] = parseScalar(raw);
  }
  return out;
}

function parseScalar(raw) {
  if (raw === "null" || raw === "~") return null;
  if (raw === "true") return true;
  if (raw === "false") return false;
  if (raw === "[]") return [];
  if (/^-?\d+$/.test(raw)) return Number(raw);
  if (raw.startsWith('"')) return JSON.parse(raw);
  return raw;
}

export function validateCourse(course) {
  const required = ["sourceid", "name", "description", "targetaudience", "learninggoal", "coursetype", "ispublic", "longdescription", "tags", "level"];
  const errors = required.filter((key) => course[key] === undefined || course[key] === null || course[key] === "").map((key) => `missing ${key}`);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(course.sourceid || "")) errors.push("invalid sourceid");
  if (!LEVELS.has(course.level)) errors.push("invalid level");
  if (typeof course.ispublic !== "boolean") errors.push("ispublic must be boolean");
  if (!Array.isArray(course.tags)) errors.push("tags must be an array");
  return errors;
}

export function validateLesson(lesson) {
  const required = ["sourceid", "lessonname", "level", "goal", "contentdescription", "codedescription", "concepts", "avoid", "position"];
  const errors = required.filter((key) => lesson[key] === undefined || lesson[key] === null || lesson[key] === "").map((key) => `missing ${key}`);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(lesson.sourceid || "")) errors.push("invalid sourceid");
  if (!LEVELS.has(lesson.level)) errors.push("invalid level");
  if (!Array.isArray(lesson.concepts)) errors.push("concepts must be an array");
  if (!Number.isInteger(lesson.position) || lesson.position < 1) errors.push("position must be a positive integer");
  return errors;
}

export function walkCourses(root) {
  const result = [];
  const courseRoot = path.join(root, "courses");
  if (!fs.existsSync(courseRoot)) throw new Error(`Course directory does not exist: ${courseRoot}`);
  for (const dirent of fs.readdirSync(courseRoot, { withFileTypes: true })) {
    // Underscore-prefixed folders are documentation/templates and never syncable content.
    if (!dirent.isDirectory() || dirent.name.startsWith("_")) continue;
    const dir = path.join(courseRoot, dirent.name);
    const course = parseSimpleYaml(fs.readFileSync(path.join(dir, "course.yml"), "utf8"));
    const lessons = fs.readdirSync(dir).filter((name) => name.endsWith(".md")).sort().map((name) => {
      const parsed = splitFrontMatter(fs.readFileSync(path.join(dir, name), "utf8"));
      return { path: path.join(dir, name), metadata: parseSimpleYaml(parsed.yaml), body: parsed.body };
    });
    result.push({ dir, course, lessons });
  }
  return result;
}
