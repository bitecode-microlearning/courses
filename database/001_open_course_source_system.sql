PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS course_sources (
  id INTEGER PRIMARY KEY AUTOINCREMENT, courseid INTEGER NOT NULL REFERENCES courses(id) ON DELETE RESTRICT,
  sourceid TEXT NOT NULL, repository TEXT NOT NULL, branch TEXT NOT NULL DEFAULT 'main', path TEXT NOT NULL,
  commitsha TEXT, lastsyncedat TEXT, active INTEGER NOT NULL DEFAULT 1 CHECK(active IN (0,1)),
  UNIQUE(repository, sourceid), UNIQUE(repository, path)
);
CREATE INDEX IF NOT EXISTS idx_course_sources_course ON course_sources(courseid);

CREATE TABLE IF NOT EXISTS lesson_sources (
  id INTEGER PRIMARY KEY AUTOINCREMENT, lessonid INTEGER NOT NULL REFERENCES lessons(id) ON DELETE RESTRICT,
  course_sourceid INTEGER NOT NULL REFERENCES course_sources(id) ON DELETE RESTRICT, sourceid TEXT NOT NULL,
  repository TEXT NOT NULL, branch TEXT NOT NULL DEFAULT 'main', path TEXT NOT NULL, position INTEGER NOT NULL,
  commitsha TEXT, lastsyncedat TEXT, active INTEGER NOT NULL DEFAULT 1 CHECK(active IN (0,1)),
  UNIQUE(repository, sourceid), UNIQUE(repository, path)
);
CREATE INDEX IF NOT EXISTS idx_lesson_sources_lesson ON lesson_sources(lessonid);

CREATE TABLE IF NOT EXISTS content_sync_runs (
  id INTEGER PRIMARY KEY AUTOINCREMENT, repository TEXT NOT NULL, branch TEXT NOT NULL, commitsha TEXT,
  startedat TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP, completedat TEXT, status TEXT NOT NULL,
  coursesprocessed INTEGER NOT NULL DEFAULT 0, lessonsprocessed INTEGER NOT NULL DEFAULT 0,
  contributorsprocessed INTEGER NOT NULL DEFAULT 0, warnings TEXT NOT NULL DEFAULT '[]', errors TEXT NOT NULL DEFAULT '[]'
);

CREATE TABLE IF NOT EXISTS contributors (
  id INTEGER PRIMARY KEY AUTOINCREMENT, githubid INTEGER UNIQUE, githubusername TEXT NOT NULL COLLATE NOCASE UNIQUE,
  displayname TEXT, avatarurl TEXT, profileurl TEXT NOT NULL, bitecodeuserid INTEGER REFERENCES users(id) ON DELETE SET NULL,
  firstcontributionat TEXT, lastcontributionat TEXT, isbot INTEGER NOT NULL DEFAULT 0 CHECK(isbot IN (0,1))
);
CREATE TABLE IF NOT EXISTS contributions (
  id INTEGER PRIMARY KEY AUTOINCREMENT, contributorid INTEGER NOT NULL REFERENCES contributors(id) ON DELETE CASCADE,
  courseid INTEGER REFERENCES courses(id) ON DELETE RESTRICT, lessonid INTEGER REFERENCES lessons(id) ON DELETE RESTRICT,
  repository TEXT NOT NULL, commitsha TEXT NOT NULL, contributiontype TEXT NOT NULL DEFAULT 'other', contributedat TEXT NOT NULL,
  isbootstrap INTEGER NOT NULL DEFAULT 0 CHECK(isbootstrap IN (0,1)),
  UNIQUE(repository, commitsha, contributorid, courseid, lessonid)
);
CREATE INDEX IF NOT EXISTS idx_contributions_course ON contributions(courseid);
CREATE INDEX IF NOT EXISTS idx_contributions_lesson ON contributions(lessonid);

CREATE TABLE IF NOT EXISTS contributor_badges (
  contributorid INTEGER NOT NULL REFERENCES contributors(id) ON DELETE CASCADE, badgeid TEXT NOT NULL,
  awardedat TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY(contributorid, badgeid)
);

CREATE TABLE IF NOT EXISTS content_sync_settings (
  repository TEXT PRIMARY KEY, branch TEXT NOT NULL DEFAULT 'main', enabled INTEGER NOT NULL DEFAULT 1 CHECK(enabled IN (0,1)),
  foundingcontributorlimit INTEGER NOT NULL DEFAULT 50, botusernames TEXT NOT NULL DEFAULT '["dependabot","github-actions","renovate"]',
  contributionbaselinesha TEXT
);
