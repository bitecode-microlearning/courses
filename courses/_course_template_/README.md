# Course template

Copy this entire folder to create a course. Rename the copy to match the `sourceid` in `course.yml`, for example `practical-git-basics`.

Then:

1. Replace every example value in `course.yml`.
2. Rename and complete the example lessons.
3. Keep lesson filename prefixes and `position` values in the same order.
4. Add or remove lesson files as needed.
5. Run `npm run validate` from the repository root.

Never put `courses.id`, `lessons.id`, `likes`, or `views` in these files. BiteCode owns those runtime values. Once content has been synchronized, do not change a `sourceid`; files may be renamed safely while their `sourceid` remains stable.
