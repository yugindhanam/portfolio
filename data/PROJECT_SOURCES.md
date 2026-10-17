# GitHub project import

Imported on 2026-09-17 from the public repositories returned by
https://api.github.com/users/yugindhanam/repos?per_page=100&sort=updated.

`github-projects.json` contains 11 substantive repositories. Each entry records
the source files used for its summary and details. Descriptions were checked
against READMEs, application code, and dependency manifests rather than inferred
from repository names. No remote source code or credentials are imported.

- The existing Swiggy card is replaced by the verified `swiggy_clone` entry.
- The three existing food-surplus, LiveKit, and Unity project descriptions remain
  in `lib/data.js`: no matching public repositories were found for those entries.
- `yugindhanam` contains only the GitHub profile README and is not a project.
- `swiggy_using-next_js` is empty (GitHub tree API returned 409) and is omitted.
- `value-addes-course` is explicitly presented as coursework.
- MotionForge is described as a team hackathon prototype, without clinical claims.
- Public demos for MotionForge, Aram Yoga, and Swiggy responded successfully.
- The portfolio repository's configured Vercel homepage redirects to login, so
  its card includes only the repository link.

This is a checked-in content snapshot, not a runtime GitHub API dependency.
The project count is derived from the imported entries plus the three retained
projects. The project renderer supports category icons and repeating artwork
styles without a fixed four-project limit.
