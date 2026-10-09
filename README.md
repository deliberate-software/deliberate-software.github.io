# deliberate.software

The Deliberate Software website: a Jekyll site hosted on GitHub Pages, with the waitlist handled by Kit.

## Run it locally

```sh
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000. The `github-pages` gem matches the Jekyll version GitHub uses, so what you see locally is what ships.

## Project layout

| Path | What it is |
| --- | --- |
| `_apps/*.md` | One file per app. Front matter holds the name, platform, status and Kit tag. The home page is built around Graphite; Journey is parked with `published: false`. |
| `_includes/app-card.html` | The app card from the two-app layout. Unused while the site focuses on Graphite. |
| `_includes/marks/` | The logos: `enso.html` (company), `journey.html`, `graphite.html`. |
| `_includes/extras/` | Optional per-app extras (Journey's example reflection, Graphite's graph). |
| `_includes/waitlist.html` | The Kit signup form: one email field, tagged for Graphite with a hidden `tags[]` input. |
| `_data/principles.yml` | The three principles. |
| `privacy.html` | The plain-language privacy page. Update it whenever what the site or list collects changes. |
| `assets/fonts/` | Self-hosted Newsreader and Instrument Sans (variable WOFF2, Latin and Latin Extended), with their OFL licenses. |
| `assets/css/site.css` | All styles. Light and dark mode follow the visitor's system setting. |
| `assets/js/marks.js` | Replays a logo's animation on hover (logos otherwise rest in their finished state); opens the phone menu. |
| `confirm.html` | Where Kit sends people right after they sign up, asking them to confirm their email. |
| `thanks.html` | Where Kit sends people after they click the confirmation link. |

### Adding an app

1. Add `_apps/<name>.md`, copying an existing one. Set `order` to place it.
2. Add its logo as `_includes/marks/<name>.html` and set `mark: <name>`. Give the logo the `js-mark` class if it animates on hover.
3. Create a Kit tag for it and put the tag's ID in `kit_tag_id`.

The home page is currently written for Graphite alone, so a new app needs its own section in `index.html` and its own Kit tag in the waitlist form.

## Kit setup

1. **Create a form.** In Kit, go to Grow → Landing Pages & Forms → Create new → Form → Inline. The site supplies its own design, so the template doesn't matter.
2. **Copy the form's action URL.** Click **Save & Publish** first. Then click **Embed** at the top right of the form builder and choose the **HTML** tab. In that code, find `action="…"` on the `<form>` tag and paste the URL into `kit.form_action` in `_config.yml`.

   If you don't see Embed, use the form's ID instead. It's the number in the browser's address bar while you're editing the form (for example `…/forms/designers/1234567/edit`). Then set `kit.form_action` to `https://app.kit.com/forms/1234567/subscriptions`, with your number in place of `1234567`.
3. **Turn on confirmation.** In the form's settings, under Incentive, keep "Send incentive email" on. Kit then emails new subscribers a link to confirm their address. In the same Incentive settings, set the page people land on after they click that link to a redirect URL: `https://deliberate.software/thanks/`.
4. **Send people to the confirm page.** In the form's settings, under "After subscribing," choose "Redirect to an external page" and enter `https://deliberate.software/confirm/`.
5. **Create one tag per app.** Go to **Grow → Subscribers**. In the right sidebar, below the charts, find the Tags section (the **All Tags** dropdown) and click the **+** next to it. Name the tag, for example "Journey waitlist," and save. Repeat for "Graphite waitlist."

   To find a tag's ID, click the tag in that sidebar. The page shows only that tag's subscribers, and the address bar ends with something like `?tag=1234567`. That number is the ID. Put each ID in that app's `kit_tag_id` in `_apps/`.
6. **Test it.** Sign up with your own address, confirm, and check in Kit that the subscriber has the right tags. If tags don't apply, compare the form's field names with the HTML on the form's Embed → HTML tab and match them.

## Publish on GitHub Pages

1. Create a repository in your organization and push this folder to it.
2. In the repository, go to Settings → Pages. Under "Build and deployment," choose "Deploy from a branch," select `main` and `/ (root)`, and save.
3. Under "Custom domain," enter `deliberate.software` (the `CNAME` file already contains it). Turn on "Enforce HTTPS" once it becomes available.
4. At your domain registrar, add DNS records:
   - `A` records for `@` pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `AAAA` records for `@` pointing to `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - A `CNAME` record for `www` pointing to `<your-org>.github.io`

   DNS changes can take a few hours to take effect. GitHub's "Managing a custom domain for your GitHub Pages site" guide has the current values if these ever change.
5. Optionally, verify the domain for your organization (organization Settings → Pages) so no one else can claim it on GitHub.

## Before launch

- Replace the Kit placeholders: `kit.form_action` and each app's `kit_tag_id`.
- Add a short privacy note if you'd like one; you're collecting email addresses.
