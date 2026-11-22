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

Figures are never typed by hand. Four scripts rebuild them from the research material
(`npm run data` runs them all):

```
node scripts/build-data.mjs    # src/data/generated.json  (regions, profiles, IRCC communities)
node scripts/build-cities.mjs  # src/data/cities.json     (cities: local unemployment, rent, education)
node scripts/build-gains.mjs   # src/data/gains.json      (pay after tax, prices and rent)
node scripts/build-refs.mjs    # src/data/references.json (every source linked in the reports)
```

They read `research/notes/` and `research/reports/`. `research/` holds the working material:
research notes, the two written reports (French) and the style mock-ups. It is not published.

- `src/data/study.ts`: indicators shown in the profile picker.
- `src/data/method.ts`: indicator ranking and reading notes (Method page).
- `src/data/findings.ts`: the six headline findings (home page).
- `src/i18n/ui.ts`: interface strings, EN and FR.

## Not done yet

- The full written report is in French only and is not published on the site.
- Deployment and DNS for the subdomain.
- Open Graph image for LinkedIn previews.
