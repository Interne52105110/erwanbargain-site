# emploi.erwanbargain.com

Bilingual site (English by default, French under `/fr/`) for the study on finding work
in French-speaking Europe and Canada. Built with Astro 5, static output, self-hosted fonts.

## Run

```
npm install
npm run dev
```

Astro 5 is pinned because Astro 7 needs Node 22.23.4 or later.

**Windows path length.** `npm install` fails silently in a deeply nested folder (paths over
260 characters): Astro then stops with "Named export 'walk' not found". Keep the project in a
short path such as `D:\emploi`.

## Data

Figures are never typed by hand. Two scripts rebuild them from the research material:

```
node scripts/build-data.mjs   # src/data/generated.json  (values, territories, IRCC communities)
node scripts/build-refs.mjs   # src/data/references.json (every source linked in the report)
```

Both read `research/notes/` and `research/reports/` by default; pass another path as first argument.

`research/` holds the working material: the eight research notes, the written report (French)
and the three style mock-ups. It is not part of the published site.

- `src/data/study.ts`: indicators shown in the profile picker.
- `src/data/method.ts`: indicator ranking and reading notes (Method page).
- `src/data/findings.ts`: the six headline findings (home page).
- `src/i18n/ui.ts`: interface strings, EN and FR.

## Not done yet

- The full written report is in French only and is not published on the site.
- Deployment and DNS for the subdomain.
- Open Graph image for LinkedIn previews.
