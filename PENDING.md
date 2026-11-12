# Waiting on decisions

Two things are still open while Alan does market research: **where iCloud backup goes** (free, a lesson, or gone) and **the licensing model** (free with lessons, a subscription that keeps what shipped, one-time fees, or something else). Once each is settled, update every place below. This file isn't published (it's excluded in `_config.yml`).

## iCloud backup

Already done: iCloud sync came off the home page's Free list (Nov 4, 2026).

- **Home page** (`index.html`)
  - FAQ, "Where are my notes kept?": "…if you choose, synced to your iCloud account, encrypted end to end."
  - If iCloud becomes a lesson, add it to the Lessons list.
- **Puli's privacy policy** (`puli/privacy.html`): "If you back them up to iCloud…", and "To back up to iCloud" in the list of when Puli connects to the network. Update its date if it changes.
- **User's Guide**
  - `puli/guide/getting-started.html`: Naming the journal ("Beneath the name is Back up to iCloud, on at first"), and Trying a sample journal ("never backed up to iCloud").
  - `puli/guide/journals.html`: the description, and the whole "Backing up to iCloud" section. Also opening a journal from the welcome window ("any in iCloud that this Mac doesn't have yet"), the journal list's "Backed up to iCloud" and "In iCloud" labels, opening a backed-up journal on another Mac, iCloud Keychain carrying the journal's key, deleting a journal "from iCloud", and Settings › Journal › Privacy's "Back up to iCloud".
  - `puli/guide/writing.html`: images and PDFs going "with your notes" to iCloud, and PDFs over 250 MB staying on this Mac.
  - `puli/guide/importing.html`: the "Back up to iCloud" step.
  - If it becomes a lesson, mark it the way the other lesson pages are ("… is a lesson. Until Puli learns it, …"), and add it to the guide's Lessons list.
- **App Store privacy label:** check it still matches if iCloud changes.

## Licensing model

The site currently describes: Puli free forever, plus **lessons**, either "Ongoing Lessons" (a yearly subscription where you keep what was learned, with a 14-day free trial) or "A Lifetime of Learning" (a one-time fee).

- **Home page** (`index.html`)
  - Hero lede ("…It's friction-free…") and the "Made distraction-free" card that says subscriptions work like a magazine.
  - "Free, forever." section: its intro, the Free list, and the Lessons list (which features are lessons).
  - FAQ: "Is Puli really free?" (the two-week trial) and "What do I keep if I stop paying for lessons?" (National Geographic).
  - The "Why I'm building Puli" letter: "And it's free! (Lessons just teach Puli a few more tricks.)"
  - The header's "Pricing" link (`_includes/nav.html`) points at `#free`.
- **How lessons work** (`puli/lessons.html`): the whole page describes the two plans.
- **Puli's terms** (`puli/terms.html`): the Lessons section ("bought through the App Store…").
- **Puli's privacy policy** (`puli/privacy.html`): "To buy lessons. Apple handles the payment…"
- **Puli's support page** (`puli/support.html`): the Lessons section, Restore Purchases, and canceling a subscription.
- **User's Guide**
  - `puli/guide/index.html`: "from your first note to every lesson", and the Lessons section.
  - The lesson pages, which each open with "… is a lesson. Until Puli learns it, …": `colors-and-fonts.html`, `filters.html`, `groups.html`, `graph.html`, `suggested-tags.html`.
  - Pages that mention a lesson in passing: `finding.html`, `stages.html`, `tags.html`, `tasks.html`, `journals.html` (Theme shows "while you have lessons"), `shortcuts.html` (⇧⌘G Graph, "a lesson").
  - `getting-started.html`: "Every lesson is turned on in a sample, so you can try all of Puli’s premium tricks."
- **The app** (Puli's own repo): Teach Puli New Tricks, the paywall copy, and Restore Purchases.

To recheck: `grep -rniE "icloud|lesson|subscri|lifetime|one-time|trial|free" --include='*.html' . | grep -v _site`

# Screenshots to take

The guide's screenshots came out on Nov 10, 2026, since Puli had moved past them. Retake them just before release. They're in git history (before that commit) under `assets/images/puli/guide/`, for reference: 2400×1560 (1200×780 points), light and dark, Harbor Street sample, the sidebar and the list of notes closed. Pages laid out by topic (`prose--topics`) take a `<figure class="shot">` after each topic's heading; the CSS is still in `assets/css/site.css`.

# Before release

- **VoiceOver and Voice Control** aren't done yet in Puli (Nov 11, 2026). They will be free. The home page already promises both, in "Made for everyone" and in the Free list. Check they work before the site goes live, or take those out. For Voice Control, try the editor's tags and suggestion pills, the Graph's dots, and moving a card on the Progress board without dragging.
