/*
 * PROJECT STATUS: the only file to edit for routine updates.
 * index.html reads this and redraws the "Current work" section, the week badges,
 * the milestone chips and all calendar dates. See UPDATING.md for the rules.
 *
 * Audience: Neil Leonard (partner, non-technical) and Professor Kevin O'Neil.
 * Write in plain language, in the first person ("I"), addressing Neil as "you".
 * Never put confidential partner data here (Sienna Ridge figures, lease terms,
 * drone imagery, lot values): this file is public on GitHub.
 */
window.PROJECT_STATUS = {
  // Date of this update (YYYY-MM-DD).
  lastUpdated: "2026-11-05",

  // Calendar. Week 1 starts on startDate (a Monday). The break comes after breakAfterWeek.
  schedule: {
    startDate: "2026-11-02",
    breakAfterWeek: 8,
    breakWeeks: 1
  },

  // The week being worked on now (1-16). Set to 17 once the project is finished.
  currentWeek: 1,

  // Overall health: "on-track" | "at-risk" | "behind" | "complete"
  overall: "on-track",
  overallNote: "The project has started, and the first week's work is under way.",

  // Week status. Weeks not listed are "upcoming".
  // Values: "done" | "in-progress" | "delayed" | "upcoming"
  weeks: {
    1: "in-progress"
  },

  // Milestones. status: "upcoming" | "in-progress" | "done" | "delayed"; date = YYYY-MM-DD when done.
  milestones: {
    M1: { status: "upcoming", date: "", note: "" },
    M2: { status: "upcoming", date: "", note: "" },
    M3: { status: "upcoming", date: "", note: "" },
    M4: { status: "upcoming", date: "", note: "" }
  },

  // Short bullet lists for the "Current work" panel. Keep each to 2-5 items.
  done: [
    "Reviewed every approved project document and set up the project's working notes.",
    "Prepared this week-by-week plan to share with you and Professor O'Neil."
  ],
  now: [
    "Kickoff meeting with you to confirm the goals and the kind of community you have in mind.",
    "Collecting your drone photos of the parcel and the Sienna Ridge documents.",
    "Downloading the province's free laser-scan elevation data for the parcel and the valley."
  ],
  next: [
    "Week 2: build the 3D ground model and the map of easy, possible and no-build zones."
  ],

  // What I need from Neil (or Kevin). Leave empty [] when nothing is pending.
  needs: [
    { who: "Neil", text: "Drone photos of the ten-acre parcel (the original files)." },
    { who: "Neil", text: "Sienna Ridge documents: the plan drawing, the 110-lot operating budget, the headlease and the homeowners corporation bylaws." },
    { who: "Neil", text: "Parcel boundaries, access points from Shuswap Road, and any areas to respect or avoid." }
  ],

  // Update history, newest first. Each entry is one short, dated paragraph.
  log: [
    {
      date: "2026-11-05",
      title: "Plan shared and kickoff",
      text: "Shared this 16-week plan with Neil and Professor O'Neil, and held the kickoff meeting. From now on, this page shows the current state of the work."
    }
  ]
};
