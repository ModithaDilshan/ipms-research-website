# IPMS Research Project Website

A standalone static website for the **Intelligent Project Management System for Undergraduate Students** research project (`R26-IT-095`).

## Run locally

Double-click `run_website.bat`, or run the following command from this folder:

```powershell
python -m http.server 8088
```

Then open `http://127.0.0.1:8088`.

The site is buildless and can also be hosted on GitHub Pages. It uses only HTML, CSS, and JavaScript; Google Fonts gracefully fall back to system fonts when offline.

The Results section summarises all four components using Section 6.3 of `R26-IT-095_DRAFT.pdf`. Its figures have different evaluation contexts: in particular, Proposal Assessment has no verified final selected-model score, and Risk accuracy is from synthetic data. Reconcile the website with any final approved report before publishing.

## Structure

- `index.html` — research content and accessible page structure
- `styles.css` — responsive light/dark visual system
- `script.js` — navigation, theme, reveals, counters, and active-section state
- `assets/` — favicon and the remaining team portraits in `assets/team/`
- `lekamge.png`, `rashmika.jpeg`, `scan_image_1505800097-Mr__Samantha.jpg.jpeg` — replacement portraits used by the team and supervisor cards; include these files when publishing the site
- `R26-IT-095/` — the 17 downloadable project files across nine milestone categories. Research papers and final-stage files each have individual download links.
- `documents/` — optional supporting local material

The Checklist 1 download is an early project README, not an approved account/configuration guide. Its older architecture and sample-login statements should not be treated as current implementation evidence. Files named `*_DRAFT.pdf` are displayed as drafts.

## Before public deployment

1. Confirm the official spelling and preferred display format of all names.
2. Confirm that each member approves public use of their supplied photograph, email address, and profile links.
3. Confirm whether the supplied draft reports should remain publicly downloadable; replace them when approved final versions are available.
4. Add an official group contact address only after the team approves it.
