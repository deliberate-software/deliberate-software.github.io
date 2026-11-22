# deliberate.software

The Deliberate Software website: a Jekyll site hosted on GitHub Pages. One page about the company, with a link to Puli at getpuli.com, plus Privacy, Trademarks, Acknowledgements, and a 404. Puli's own site is a separate repository (puli-site), at getpuli.com.

## Run it locally

```sh
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000. The Gemfile uses Jekyll 3.10, the version GitHub Pages builds with. GitHub Pages ignores the Gemfile, so it only affects the local preview.

## Project layout

| Path | What it is |
| --- | --- |
| `index.html` | The home page: who we are, Puli, what we promise, and how to reach us. |
| `_includes/lockup.html` | The logo: "Deliberate Software" over "Made on purpose", in Instrument Sans, as in getpuli.com's footer. Large at the head of the home page, small everywhere else. There is no mark. |
| `_includes/nav.html` | The small lockup at the top of every page but the home page. |
| `_includes/footer.html` | The lockup, links, copyright, and a trademark line pointing to Trademarks. |
| `privacy.html` | The site's privacy policy. Update it, and its date, if the site ever collects anything. |
| `trademarks.html` | Every trademark the site names. Add a name when a page starts using it. |
| `acknowledgements.html` | The fonts' licenses, read from `assets/fonts/OFL-*.txt`. |
| `assets/fonts/` | Self-hosted Newsreader and Instrument Sans (variable WOFF2, Latin and Latin Extended), with their OFL licenses. |
| `assets/css/site.css` | All styles. Light and dark mode follow the visitor's system setting. |
| `assets/images/og-image.png` | The link-preview image: the lockup on warm paper. |

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
