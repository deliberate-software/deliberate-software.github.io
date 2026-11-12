# Guide audit, Nov 10, 2026

> **Nov 11:** the guide was rewritten from the ground up, basics only, from Puli as of d9ea895. The page-by-page list below is what that rewrite worked from; it isn't a to-do list any more. What's still open is under "For the app, not the guide".

The Handler's Guide and the site, checked against Puli as STORIES.md, Lessons.json, and the source describe it on Nov 10, 2026. Numbers in parentheses are STORIES.md lines. This file isn't published (it's excluded in `_config.yml`).

## The big changes

1. **Lessons.** There are now seven lessons: Tasks, Today, and Progress (all released Nov 7), plus Colors, Type, The Graph, and Suggestions (Oct 24).
   - Filters and Groups are no longer lessons. Their parts moved:
     - The due filter, Group by, and the cabinet rows go to Tasks.
     - Progress's dropdowns go to Progress.
     - The Graph's dropdowns go to The Graph.
   - Colors and Fonts are now two lessons, Colors and Type.
   - Suggested Tags is now Suggestions, and it suggests tasks too.
   - Job Search journals get Tasks, Progress, the Graph, and Today free (2425–2468).
2. **The Tasks view is paid.** Without the Tasks lesson, tasks still work in notes, but due dates and priorities show as written, with no pill, label, or red. There's also no Tasks view and no ↗ (6955–6985).
3. **Stages and Progress are paid** (the Progress lesson). A project's stage is set in Progress, not from its page (9616).
4. **Pricing.**
   - The plans are Yearly ($29 a year) and Lifetime ($129 once, a launch price; $99 for subscribers).
   - Free lessons last a month, not 14 days.
   - The buttons say "Foster Puli Free for a Month", "$29 for a Year of Lessons", and "Give Puli a Forever Home" (2502–2540).
5. **Aliases are retired.** Opening an old journal rewrites each alias to the page's own tag (3256–3270).
6. **Names are unique.** A taken name shows NAME TAKEN in the tag rail. Renaming to a taken name asks to merge (3272–3301).
   - Merging rewrites every tag in notes and Abouts, and can't be undone (5136–5147).
   - The home page's "Undo for everything" is no longer true.
7. **Notes never open in the context pane.** A note's page is gone; clicking a note on a page opens it in the editor (5366–5381).
8. **Pages changed.**
   - A page has no close button. Its ⋮ sits beside the name and holds Edit, Change Type, Merge Into, Nest Under (projects only), Archive or Restore, and Delete.
   - Under the title, a page shows its tag, which you can edit there.
   - The sections are now About, Lately, Open tasks, Part of / Projects, Mentioned with, and Notes (4628–4639).
9. **Tab no longer moves between panes.** Use ⌥⌘← and ⌥⌘→ (Previous Pane and Next Pane), or Return (10414; commit d520a18).
10. **Settings has seven tabs:** General, Themes, Typography, Tags, Calendar, Privacy, and iCloud (9045). "Settings › Journal" is gone everywhere.
11. **New, with no page yet:**
    - Today and meetings.
    - Lately.
    - The menu bar.
    - The What's next widget.
    - Siri and Shortcuts, Services, and Spotlight.
    - Manage Journals.
    - Archiving tags.
    - Tables.
    - Importing from Apple Notes, Bear, Agenda, and Obsidian.
    - Reordering tasks.
    - The day's line ("All clear. Call a friend.").

## Proposed pages

- **New: Today and meetings.**
  - Today in the context pane (⇧⌘D) and stepping through days.
  - Its sections: Schedule, Due, Today's note, and Other notes.
  - Today's note title, and Settings › Calendar.
  - A meeting's page: attendees, Take Notes, Join Meeting, Agenda, and Lately.
  - It's the Today lesson. Lately needs Apple Intelligence.
- **New: Puli outside the window.** The menu bar, the What's next widget, Siri and Shortcuts, Services, and Spotlight. These look free (no lesson check in MenuBar.swift, Siri*.swift, PuliServices.swift, or PuliWidget), but meetings in them need calendar access.
- **New or folded into Journals: Managing journals.** The Journals window (⇧⌘J), Rename, Archive, Bring Down, Delete from All Devices, Remove from This Mac, and Export.
- **Replace Filters and Groups.** Fold their content into Tasks, Progress (Projects and stages), and The graph.
- **Split Colors and fonts** into Colors and Type, or keep one page covering both lessons.
- **Lately:** a section of Fetching Context, plus a mention on Today.
- **Archiving tags, Nest Under, Top Level, Merge Into, and unique names:** a "Tidying your tags" section on People, groups, and projects.
- **Settings reference, tab by tab:** optional. It would hold Show people as (First name, First name and last initial, Full name), which no page mentions (9088–9121).

---

## Page by page

### Home page (`index.html`)
- **Lessons list:**
  - "Colors and fonts" is now Colors and Type.
  - "Filters and groups…" is gone.
  - "Suggested tags" is now Suggestions.
  - Tasks, Today, and Progress are missing.
- **Free list:**
  - "Tasks, due dates, priorities, and every promise" misleads now that the pills and the Tasks view are paid.
  - "Undo for everything" is false, because merging can't be undone.
  - The job search template doesn't say its journals get four lessons free.
- **FAQ:** "try them free for two weeks" should be a month. No page gives prices.
- **Job search:** "on a Kanban board". That's Progress, a lesson that's free in Job Search journals.

### How lessons work (`puli/lessons.html`)
- **Plan names:** "Ongoing Lessons" and "A Lifetime of Learning" are now Yearly and Lifetime.
- **Free trial:** 14 days is now a month.
- **Missing:**
  - Prices: $29 a year; $129 once, as a launch price; $99 for subscribers.
  - That Yearly renews.
  - The reminder two days before free lessons end.
  - Restore Purchases.
  - Free lessons in Job Search journals.
  - Try It in a Sample.
  - What happens when lessons end: features leave and come back as you left them (2403, 2328).
  - A list of the lessons.

### Guide index (`puli/guide/index.html`)
- **Lessons list:** add Tasks, Today, and Progress. Split Colors and Type. Drop Filters and Groups. Rename Suggested tags.
- **Projects and stages** is under Using Puli, but it's now the Progress lesson.

### Getting Started
- **Now wrong:**
  - "Import a Folder" is now **Import Notes**. It opens "Where are your notes?" with five sources (111, 946).
  - "The welcome window has no Quit button. Closing it quits Puli": closing it now leaves Puli running, and clicking the Dock icon shows it again (195–199).
  - "Puli opens the journal you had open when you last quit": it also reopens one you closed. It opens on Notes, with Today in the context pane (34–36).
  - "You can change it later in Settings": Back up to iCloud is now in Settings › iCloud (461).
  - The template blurbs come from the template files. Work's is now "For anyone who works with people, organizations, and projects." (Templates/work.json).
- **Missing:**
  - The naming screen's switches, Require Touch ID and Show in Spotlight and Siri, both off (545).
  - Help › Try a Sample Journal… (236).
  - "Making the sample… 120 of 180" (224).
  - Samples come with their own calendars (263–287).
  - The toolbar: ‹ ›, sort, New Note, Search, Focus, and the context pane's ‹ › (1526).

### Introducing Puli
- "rename Diane, or give her an alias": aliases are gone (3256).

### Writing notes
- **Now wrong:**
  - "⌘-click it on a page in the context pane": a plain click opens the note in the editor (5366).
  - The whole note's-page paragraph, and "choose Edit from the ⋮ across from its date": gone (commit cc2e109).
  - Line 56, "A note's page in the context pane…": gone.
- **Missing:**
  - **Tables:**
    - GitHub syntax and colon alignment.
    - Shown as written while the cursor is in one.
    - Format › Table.
    - Tab and ⇧Tab move between cells, and Tab in the last cell adds a row.
    - Return adds a row, or ends the table (8868–8935).
  - **Pasting formatted text** from Google Docs, Word, the web, or Mail arrives as Markdown. Checklists become tasks. Paste and Match Style is ⌥⇧⌘V (8417–8444).
  - **The full Format menu** (8218–8264):
    - Strikethrough ⇧⌘X.
    - Title, Heading, Subheading, and Body ⌥⌘1/2/3/0.
    - Bulleted List ⇧⌘8, Numbered List ⇧⌘7, and Task ⌃⌘T.
    - Indent and Outdent ⌥⌘] and ⌥⌘[.
    - Quote ⌘', Code Block ⌥⌘C, Divider, Link ⌘K, and Attach Image or PDF… ⇧⌘A.
    - Clear Formatting, and Task Progress ›.
    - Line commands act on every line the selection touches. Format works in an About.
  - **Links:** ⌘K with nothing selected gives `[]()`. `<https://…>` and `mailto:` links work too (8481–8556).
  - **Images:**
    - Duplicate names become "Whiteboard 2.png".
    - Pasted screenshots get a dated name.
    - An image written mid-line moves onto its own line.
    - A paperclip shows in the list of notes and on pages.
    - Search finds attachments by file name.
    - An attachment is deleted when its last note is deleted for good (8946–9038).
  - **Find:** `<` and `>` and wrapping, ⇧⌘G, and ⌘E Use Selection for Find. Find is dimmed outside the editor (10792–10830).
  - **Printing:** the title comes from the first line, pages are numbered "1 of 3", and Print is dimmed in the views and the Trash (5622–5655).

### People, groups, and projects (`tags.html`)
- **Now wrong:**
  - "in bold, without its sigil, in its kind's color … people blue, groups green, projects amber": tags are now pills. People are blue, orgs plum, and projects green. Amber is Puli's accent, never a kind's (3313–3322, 9567).
  - "↩, or a click, writes the tag. ⇥ writes it with a space after it": all three write it with a space (3728–3746).
  - The **Aliases** section: gone (3256).
  - "Merging Dee into Diane … gives Diane the alias @Dee": merging rewrites the tags, asks first, and can't be undone (5136).
  - "When two people share a name, each suggestion shows its tag": names are unique now, and a taken one shows NAME TAKEN (3272–3301).
  - "Saving the note creates anyone and anything it tags": not when the name is taken (3295).
  - "Suggested tags": now Suggestions.
- **Missing:**
  - NAME TAKEN: "Use John Smith", "Another John Smith…", and then telling them apart, as in "John Smith (Acme)" (3290–3301).
  - Renaming to a taken name asks to merge. Names need only be unique among siblings (3274–3286).
  - Clicking a pill selects it whole. ⌫ removes it, and ← → step inside (3347–3381).
  - A tag's right-click menu: Show…, Tag as…, Another…, and Not a Tag (4132–4150). Right-click any word to tag it, free (4158–4207).
  - Archiving tags: the page shows "Archived" and Restore. Autocomplete skips archived tags, and the Tags view has Show › Archived (10921–10969).
  - Nest Under, Top Level, and Merge Into from the cabinet or the ⋮ (9858–9945). "Board SAME AS?" for un-nested names (9813).
  - A deleted entity's tags read as plain text. Saving one again brings it back (3243).
  - Settings › Tags › Show people as (9089).

### Suggestions (`suggested-tags.html`)
- **Now wrong:**
  - The title and "Suggested Tags is a lesson": it's now **Suggestions**, "Puli spots the tags and tasks you didn't." (2707).
  - "by alias": gone.
  - "under 'Suggested'": the label is now "SUGGESTIONS", first in the rail (4232).
  - "suggests Dana as a new person and Acme as a new org": only new people are suggested, never new orgs or projects (4061–4093).
  - "On a Mac that can run Apple Intelligence, Puli also suggests names your journal doesn't know": macOS's name finder suggests new people on any Mac as you type. The on-device model only adds ones it missed (4059–4081).
  - "On a Mac that can't run the on-device model … only the names your journal already knows": wrong, for the same reason (4126).
  - "'Dana · New person 1'": now "Dana NEW PERSON? 1" (4064).
  - "makes it 'Lunch with @Priya', and adds @Priya to her aliases": it now writes @Priya-Natarajan, with no alias (3908).
- **Missing:**
  - **Suggested tasks** (4210–4372):
    - Lines starting with a verb, or under Actions, Tasks, or Todos.
    - A dotted underline on the line, and ☐ … NEW in the rail.
    - Make a Task or Not a Task.
    - "NEW TASK?", struck through, when the model has doubts.
    - Make a Task on selected text.
  - Accept All ⌘↩ and Ignore All ⇧⌘↩, at the rail's bottom right. Accept All is dimmed while one needs a choice (3938–3998). Undo for each.
  - Two-word new names ("Dana Whitfield"), and particles like "von" (4049–4072).
  - One pill for a new tag plus its mentions, "Acme NEW 2" (3960).

### Fetching Context (`context.html`)
- **Now wrong:**
  - "Click its close button … It won't come back": there's no close button. A journal opens on Today in the pane (4409–4425, 4616).
  - "Click a name … in a note shown in the pane": notes never open in the pane.
  - "What's on a page" order: it's now the name (large, with ⋮), then the kind and tag beneath ("Person · @priya"), About, Lately, Open tasks, Part of / Projects, Mentioned with, and Notes (4628–4639).
    - Mentioned with starts closed, one line per kind (4642–4660).
    - The header stays put while the notes scroll (4718).
  - **A note's page:** the whole section is gone (5369–5381).
  - "Choose Edit from the ⋮ beside its close button": the ⋮ is beside the name, with Edit, Change Type, Merge Into, Nest Under, Archive or Restore, and Delete (4993).
  - Edit also changes the tag, rewriting every note and About. A taken name asks to merge (4998–5035).
  - "Kind: click the kind … Convert to Project…": it's now Change Type › Project… in the ⋮ (5104).
  - "Merge Into… aliases … no notes change … Undo Merge": merging asks first, rewrites the tags, and can't be undone (5136).
  - "A note's page has Edit and Delete Note": gone.
  - "A page's close button hides the pane too": there's no close button.
  - The stage on a project's page is shown, but not set there (9616).
- **Missing:**
  - **Lately**, not covered at all (4724–4893):
    - Up to five points from the last two months, from the on-device model.
    - "Summarizing…".
    - "3 sources" narrows Notes.
    - Hidden on Macs without Apple Intelligence.
  - **A meeting's page** (6766–6943).
  - **Moving around:**
    - ‹ and › for the pane (5156–5193).
    - Pages open from tags in Progress, the Tasks view, and the Tags view (5182).
    - Keys: ⌥⌘← and ⌥⌘→, ↑ ↓ through a page, ← → to fold sections, Return to open, and ⌘[ and ⌘] (5195–5364).
  - **Open tasks:**
    - A row shows only its due date (8030–8069).
    - ↗ opens Tasks filtered to the page, and only with the Tasks lesson.
    - Without the Tasks lesson, tasks show in note order (6985).
  - **Archived pages:** "Archived" with Restore, or "Archived with Puli" (10929).
  - **Nested project pages:** Part of and Projects (9829–9851).
  - **Own window:** there's a toolbar button for it, and it stays open in Focus (5698–5741).

### Tasks and promises
- **Now wrong:**
  - Date pills, ⚠ in red, and priority labels need the Tasks lesson. Without it they show as written (6969–6974).
  - "With the Groups lesson … group by Owner" and "The Filters and Groups lessons add two more": both come with Tasks.
  - "With Filters, the cabinet also shows Past due and Today": these come with Tasks. The rows are In progress, Past due, and **Due today**, and they always show, even at 0 (6462, 10570).
  - "Click anywhere else on a task to see its note in the context pane": a click only selects the task now (7257).
  - "↑ ↓ … the context pane follows": it stays as it was (9481).
  - "↩ shows its note in the context pane": Return opens the note in the editor, at the task (9461).
  - "⋮ … Start or Stop, Open, Open in Editor, Delete Task": Open is now Edit (7006; TasksView.swift:36).
  - "Puli puts the day's tasks in a note titled 'Tasks'": they now go under "## Tasks" in today's note. Its title comes from Settings › General › Today's note title (7536–7559, 9214).
  - Priority from a stage needs the Progress lesson (2371).
- **Missing:**
  - The Tasks view is a lesson, free in Job Search journals.
  - Reordering by hand: a grab bar on each row, or ⌘⌥↑ and ⌘⌥↓, among tasks that tie (6248–6289).
  - The day's line, "All clear. Call a friend.", and "That's everything for today." (7477–7505).
  - Done shows a Done column, sorted newest first (7220).
  - A narrow window drops Priority, then Due, then Done, and shows them in gray under the task (7286).
  - Stage priorities are shown lighter, and the menu offers "Stage's (P1)" (6189–6240).
  - New date words: by yesterday, by last month, by next week, and by last week. Weeks follow Settings › General › Weeks start on (5964–5973, 9150).
  - #Today, @Tomorrow, and dates in backticks aren't due dates (6007–6024).
  - "Add a task" and editing in place both autocomplete tags (7031, 7592).
  - Format › Task ⌃⌘T, and right-click › Make a Task (3635–3666).

### Groups (`groups.html`)
- The page is no longer a lesson. Group by comes with Tasks, so fold it into Tasks and promises.
- "Stage, once a kind has stages" also needs the Progress lesson.
- **Missing:**
  - ↑ ↓ skip collapsed groups (7451).
  - A task under two groups is stopped on in each (7464).

### Filters (`filters.html`)
- The page is no longer a lesson. Split it:
  - The due filter, the cabinet rows, and the cabinet's With open tasks go to Tasks.
  - Progress's dropdowns go to Projects and stages.
  - The Graph's dropdowns go to The graph.
- The cabinet rows are In progress, Past due, and **Due today**, always shown.
- Opening Tasks from the cabinet or View › Tasks resets the view to Open and All (10590).
- This week, Next week, and Last week follow Weeks start on (9193).
- The Graph's Show menu starts at "All kinds". The empty message is "No people, orgs, or projects match." (11240–11270).

### Projects and stages (`stages.html`)
- **Now wrong:**
  - "Choose Journal, then Tags" should be Settings › Tags.
  - Never says that stages, Progress, and priority from a stage are the Progress lesson, free in Job Search journals. Without the lesson, a page says just "Project" (2393–2398).
  - "Click it and choose a stage": stages are set in Progress only (9616).
  - "The Filters lesson adds dropdowns to Progress": they come with Progress.
  - "4 open tasks · P1": without the Tasks lesson, it's "4 open tasks", with no link (6960).
- **Missing:**
  - Nest Under, Top Level, and Merge Into replace dragging (9853–9944).
  - Nesting is up to four levels, and Roles don't nest (9734–9770).
  - Columns scroll sideways when narrow (9960).
  - ⇧-clicking two names scopes Progress to both (10480).
  - Archiving a project removes it and its projects from Progress (10935).
  - When lessons end, stages are kept for later (2403).

### The graph (`graph.html`)
- "With the Filters lesson, you can also show only some kinds": Show, Tasks, and Active come with The Graph itself (11252).
- **Missing:**
  - Free in Job Search journals.
  - ⇧-clicking two names (10480).
  - Archived tags leave the Graph (10924).
  - Search matches an About too (10712).

### Colors and fonts (`colors-and-fonts.html`)
- **Two lessons now:** Colors and Type.
- **Settings:**
  - "Settings › Journal shows only Tags and Privacy": without the lessons, the tabs are General, Tags, Calendar, Privacy, and iCloud (2225).
  - "Choose Journal, then Theme": it's now the Themes and Typography tabs.
- **Themes:** there are now ten: Cream, Paper, Mist, Slate, Sepia, Sage, Copper, Midnight, Plum, and Citrus. Blue, Green, Rose, and Lavender are gone, and their journals fall back to Cream (2236–2268).
- **Type:** there are now ten pairings: Mixed, Book, Classic, Modern, System, Round, Airy, Elegant, Sans, and Writer. Serif is gone, and its journals fall back to Mixed (2274–2296).
- **Tag colors:** people blue, orgs plum, and projects green, in every theme (2262).
- **Missing:**
  - Line spacing (Tight, Normal, Roomy) and the Focus column (Narrow, Normal, Wide), part of Type (2299–2326).
  - When lessons end, the journal reverts to Cream and Mixed and keeps your choices for later (2328–2346).

### Finding your notes (`finding.html`)
- **Now wrong:**
  - Sort by "Most recent, Most mentioned, or Name": the choices are now Most recent, Least recent, Most mentioned, Least mentioned, A to Z, and Z to A (10392).
  - "Untagged and Pinned show when they hold notes": Untagged, Pinned, and Attached always show (10606).
  - "A check mark beside Relay": the row now shows a band with an ✕ (10566).
  - "⇧⇥ from the list of notes": now ⌥⌘←. Tab doesn't move between panes (10426).
  - "↑ ↓ … narrowing to each name": landing on a name shows its page and scopes nothing. Space scopes (10428).
  - "⇥ … gives the keys to the view": Return does (10441).
  - "by one of its aliases … 'Alias atl-v1'": gone. It matches by name, or by "In its note" (10712).
  - "Merge Into … aliases … no notes change … ⌘Z": merging rewrites notes and can't be undone (10900).
  - "Graph is there once Puli knows the graph": Tasks and Progress now need lessons too.
  - The "Filters and groups" section: both lessons are gone.
- **Missing:**
  - ⇧-click or Space scopes to two names (10480).
  - Clicking a name opens its newest note (10467).
  - A name's right-click menu (9912).
  - Archiving, and the Tags view's Show › Archived (10921).
  - Search shrinks to a button in narrow windows (10660).

### Journals (`journals.html`)
- **Now wrong:**
  - "File › Import…": it opens the welcome window at "Where are your notes?" (967).
  - "Close Journal … the welcome window shows … next time you see the welcome window": Puli stays open with no window, and the journal reopens next launch (1601–1607).
  - Backup is now in **Settings › iCloud** (461).
  - Turning backup off now always removes the journal from your other devices. The checkbox is gone, and the wording says "devices", not "Macs" (484, 583).
  - "File › Delete Journal…" is gone. Delete… is now in a journal's ⋮ in the Journals window:
    - **Delete from All Devices**, **Remove from This Mac**, or Cancel (716–740).
    - An open journal is closed first.
  - "Settings has two tabs … General … Journal": it now has seven (9045). Each says "These settings are for this journal." (9067).
  - Privacy now holds Touch ID, Lock after, and Show in Spotlight and Siri. Backup moved to iCloud (9068).
  - General is missing Today's note title (9052).
  - "What syncs" is incomplete. It also covers the Trash's schedule, Progress and Graph choices, Show people as, renames, and archiving (511, 776, 788).
  - "Require Touch ID and Lock after stay each Mac's own" conflicts with "a copy on another Mac asks too". STORIES conflicts too (514 vs 371, 453). Ask Alan which is right.
- **Missing:**
  - **Manage Journals** (⇧⌘J) (664–804):
    - On this Mac, In iCloud, and Archived.
    - Each card shows its template, note count, sync state, and when it was last opened.
    - Bring Down.
    - The ⋮: Open/Close, Rename…, Archive, Back up to iCloud, Export…, and Delete….
    - Keys.
  - **Show in Spotlight and Siri:** the switch, its confirmation, and a warning that the index isn't encrypted (408–447).
  - A notice when another device deletes or removes a journal (821–840).

### Importing notes (`importing.html`)
- **Now wrong:**
  - The flow is now:
    - Import Notes.
    - "Where are your notes?", with Apple Notes, Bear, Agenda, Obsidian, or A Folder.
    - "Import into", with A New Journal or one you have.
    - Then naming (944–985).
  - "File › Import…" opens the same screen, with the open journal chosen (967, 980).
  - The naming screen also has Require Touch ID and Show in Spotlight and Siri.
  - You can import into an existing journal, not only a new one (1106–1159).
  - An exported folder also brings pinned notes, themes, choices, and the Trash (1466).
- **Missing:**
  - **Apple Notes:** permission, picking folders, locked notes skipped, folders as nested tags, pictures and PDFs, Stop, and re-importing only new notes (1268–1416).
  - **Bear:** export settings, multi-word tags, attachments, and dates (1161–1196).
  - **Agenda:** headings, checklists, people, projects, and dates (1198–1266).
  - **Obsidian:** vaults and `![[embeds]]` (953–964, 1079).
  - **Into an existing journal:** its kinds, name clashes, "120 already imported, 4 new.", and Stop and resume (1106–1159).

### Make it yours (`yours.html`)
- **Now wrong:**
  - "⇧⇥ from the list of notes", "⇥, or ↩, gives the keys to the view", "↩ or ⇥ puts the cursor in the editor", and "⇧⇥ goes back to the cabinet": Tab no longer moves between panes. Use ⌥⌘← and ⌥⌘→, or Return (10390–10414).
  - "Each one shows as you reach it": a name shows its page but scopes nothing. Space scopes (10392).
  - "The note's column widens with it": the column only applies in Focus (2140). Minor.
- **Missing:**
  - Previous Pane and Next Pane, and the outline on the pane that has the keys (5315–5350).
  - Escape in the editor does nothing now (10419).
  - Drawers hide in order as the window narrows (1754–1794).
  - The context pane's width can be dragged, up to 30% (9390).

### Keyboard shortcuts (`shortcuts.html`)
- **Wrong:**
  - Remove ⇥ from "↩ or ⇥", "⇧⇥ Go to the cabinet" (now ⌥⌘←), and "⇥ or ↩ Give the keys".
  - "⌘-click a note on a page to edit it": a plain click does it now.
  - Tasks: "↩ Show the task's note in the context pane" now opens it in the editor.
  - Tags: ↩, ⇥, and a click all add a space now.
- **Missing:**
  - Manage Journals ⇧⌘J.
  - Today ⇧⌘D.
  - Previous Pane and Next Pane ⌥⌘← ⌥⌘→.
  - Find Previous ⇧⌘G.
  - Use Selection for Find ⌘E.
  - All the Format keys (see Writing notes).
  - Paste and Match Style ⌥⇧⌘V.
  - Table Tab, ⇧Tab, and ↩.
  - Move a task ⌘⌥↑ and ⌘⌥↓.
  - Accept All ⌘↩ and Ignore All ⇧⌘↩.
  - Space to scope in the cabinet.
  - Page keys in the context pane.

## For the app, not the guide
Open, found while rewriting the guide on Nov 11 (Puli at d9ea895):
- **A page's Open tasks show without the Tasks lesson.** Alan said a page should have no Open tasks before Tasks is learned. The code shows them and gates only the ↗ (ContextPane.swift:722, 870), and STORIES says "Open tasks · 2" with no ↗ (in "No Tasks view without Tasks", near line 6985). The guide follows Alan: open tasks on a page are on the Tasks lesson's page.
- **Sidebar** (decided Nov 11): the guide now says sidebar, as the View menu does. Puli's help, its cabinet rows' wording, and STORIES still say "the cabinet" in places.
- **Handler's Guide** (decided Nov 11): the site now calls it the Handler's Guide. Puli's Tricks still says "Stuck? The Owner's Guide walks through every lesson."; Alan is updating the app.
- **Today "Requires Apple Intelligence."** (Lessons.swift:161; STORIES 2461). Alan agrees only Lately, on a meeting's page, needs it, and Lately is free. Apple Intelligence is used in Lately.swift, SuggestedTasks.swift, and NewNames.swift. The deployment target is macOS 26.0.
- **School template's description** says a task "is in your Tasks view" (Templates/school.json). Alan: it shouldn't say that. School journals don't get the Tasks lesson (freeInJobSearch is only Job Search), so only the description needs to change.
- **Help menu**: Alan is tearing it out and redoing it.
- **macOS** (decided Nov 11): Puli stays on macOS 26 or later, on any Mac, Intel included. The home page FAQ now says "Any Mac running macOS 26 or later." The project sets no ARCHS, so it should build for Intel; try it on an Intel Mac before release. Today's "Requires Apple Intelligence." in Puli's Tricks would turn Intel buyers away; only Lately needs it.
- **Lesson names** (decided Nov 11): the docs now say Themes, Typography, and Graph. Lessons.json still says Colors, Type, and The Graph; Alan is updating the app. The guide pages moved to /puli/guide/themes/ and /puli/guide/typography/.

Resolved in Puli as of Nov 11 (checked by hand):
- a866a9a: Format › Code is ⇧⌘C and View › Graph is ⌃⌘G, so ⌘E and ⇧⌘G no longer clash. Help › Navigation's Return text is fixed. Touch ID and Lock after now follow the journal. The stale STORIES lines are brought up to date.
- 8197d2a: lesson gating for Puli's menu, the widget, Siri, Services, and Spotlight.
