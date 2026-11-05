# How to update the status page

This is for Gursahib and for coding agents. When Gursahib says "update the HTML", "mark week N done", "milestone reached" or similar, follow these steps.

## The rule: edit `status.js`, not `index.html`

`index.html` is the page design plus the fixed 16-week plan (the `STAGES` and `WEEKS` arrays near the bottom of the file). `status.js` holds everything that changes: the dates, the current week, the week badges, the milestones, the "Current work" lists, what I need from Neil, and the update history. The page redraws itself from `status.js`.

Only edit `index.html` when the **plan itself** changes, for example when a week's content is rescoped. Then edit that week's entry in the `WEEKS` array, not the HTML markup. Then also log the change in the knowledge base (`../IT53891-knowledge-base/logs/decision-log.md`).

## Routine update checklist

1. `lastUpdated`: set to today (YYYY-MM-DD).
2. `currentWeek`: the week now being worked on (1–16; use 17 when finished).
3. `weeks`: mark finished weeks `"done"` and the current week `"in-progress"`. Use `"delayed"` for a week running late. Weeks not listed show as upcoming. Week cards are collapsed by default; the current week and any in-progress or delayed weeks open automatically. Done weeks show in solid colour on the timeline bar, and upcoming weeks are faded.
4. `milestones`: when one is reached, set `status: "done"` and `date`. Add a short `note` if useful.
5. `done` / `now` / `next`: 2–5 short bullets each. Move finished items from `now` to `done`, and drop old `done` items once they are more than about two weeks old.
6. `needs`: what is waiting on Neil or Kevin (`who: "Neil"` / `"Kevin"`). Remove items once they are received. An empty list hides the box.
7. `overall` (`on-track` / `at-risk` / `behind` / `complete`) and a one-sentence `overallNote`. Be honest about slippage.
8. `log`: add a new entry **at the top** (date, title, 1–3 sentences) for anything significant: a milestone, a review meeting, or a change of dates.
9. If the official start date changes, edit `schedule.startDate` (a Monday). All dates on the page follow it.
10. Check the file still parses: `node -e "require('vm').runInNewContext(require('fs').readFileSync('status.js','utf8'),{window:{}})"`
11. Commit and push (see below).

## Writing style

- The readers are **Neil Leonard** (partner, not technical) and **Professor Kevin O'Neil**. Write plain language, in the first person, addressing Neil as "you", in the same voice as the rest of the page.
- Say what was done and what it means for Neil, not how it works technically ("The view map is finished and matches what we see at Sun Rivers", not "Viewshed raster computed with r=5 km").
- Use real names, not "the intern" or "the partner".

## Never put on this page (the repository is public)

- Sienna Ridge figures (budget lines, prices, lease rates), lot values or model outputs for Neil's parcel, drone images, parcel boundaries, or anything Neil shared privately.
- Personal phone numbers, emails or bank details.
- Results, screenshots or maps, unless Neil has agreed they can be public.

This follows the project's OCAP and confidentiality commitments (`../IT53891-knowledge-base/14-data-governance-and-ip.md`). If in doubt, describe progress without the numbers.

## Publishing

```bash
cd mitacs-project
git add -A
git commit -m "Status: week N update"
git push
```

The remote is `https://github.com/singhgursahib0007/mitacs-project.git`, pushed over HTTPS with the `gh` login for singhgursahib0007 (the Mac's default SSH key belongs to a different account and is refused). The the live page is served by GitHub Pages from the `main` branch root. It refreshes about a minute after each push. Neil and Kevin keep the same link.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page design (light theme, maroon accent `#800020`) plus the plan content in the `STAGES` / `WEEKS` arrays |
| `status.js` | All changing data. **Edit this** |
| `UPDATING.md` | This guide |
| `README.md` | What the repository is |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are |
