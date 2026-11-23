// Builds the two share-card pages (1200 × 630) used for link previews: research/design/card-en.html and card-fr.html.
// Counts come from the site data. Turn each page into public/og-<lang>.png with a headless browser, for example:
//   chrome --headless=new --hide-scrollbars --window-size=1200,630 --screenshot=public/og-fr.png research/design/card-fr.html
//
// Usage: node scripts/build-card.mjs

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const json = (f) => JSON.parse(readFileSync(join(here, '../src/data', f), 'utf8'));
const data = json('generated.json');
const refs = json('references.json');
const profiles = new Set(data.values.filter((v) => v.i === 'unemp').map((v) => `${v.a}|${v.e}`)).size;
const countries = new Set(data.territories.map((t) => t.country)).size;

const text = {
  en: {
    eyebrow: 'Study · November 2026',
    em: 'Where to go',
    rest: ' in <span class="nw">French-speaking</span> Europe and Canada?',
    size: 68,
    steps: ['Your profile', 'Your main objective', 'The ranking'],
    stats: [
      [data.territories.length, 'territories ranked'],
      [profiles, 'age and diploma profiles'],
      [refs.length, 'sources cited'],
    ],
    where: 'France · Belgium · Luxembourg · Switzerland · Canada',
    brand: 'job search',
  },
  fr: {
    eyebrow: 'Étude · novembre 2026',
    em: 'Où aller',
    rest: ' en Europe et au Canada francophones ?',
    size: 82,
    steps: ['Votre profil', 'Votre objectif principal', 'Le classement'],
    stats: [
      [data.territories.length, 'territoires classés'],
      [profiles, 'profils âge et diplôme'],
      [refs.length, 'sources citées'],
    ],
    where: 'France · Belgique · Luxembourg · Suisse romande · Canada',
    brand: 'emploi',
  },
};
if (countries !== 5) throw new Error(`the card names five countries, the data has ${countries}`);

const font = (pkg, file) => `../../node_modules/@fontsource-variable/${pkg}/files/${file}`;
const page = (lang) => {
  const t = text[lang];
  return `<!doctype html>
<html lang="${lang}">
<meta charset="utf-8">
<title>${t.em}${t.rest.replace(/<[^>]+>/g, '')}</title>
<style>
@font-face { font-family: Inter; src: url(${font('inter', 'inter-latin-wght-normal.woff2')}) format('woff2'); font-weight: 100 900; }
@font-face { font-family: 'Inter Tight'; src: url(${font('inter-tight', 'inter-tight-latin-wght-normal.woff2')}) format('woff2'); font-weight: 100 900; }
@font-face { font-family: 'JetBrains Mono'; src: url(${font('jetbrains-mono', 'jetbrains-mono-latin-wght-normal.woff2')}) format('woff2'); font-weight: 100 800; }
* { box-sizing: border-box; margin: 0; }
html, body { width: 1200px; height: 630px; overflow: hidden; }
body {
  --bg: #fbfbfa; --fg: #0f1114; --muted: #5d636c; --line: #e6e7e9; --accent: #2747d8;
  background: var(--bg); color: var(--fg); font-family: Inter, sans-serif;
  background-image: linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px);
  background-size: 60px 60px; background-position: -1px -1px;
  padding: 56px 72px 52px; display: flex; flex-direction: column;
}
body::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at 30% 45%, var(--bg) 35%, transparent 85%); }
body > * { position: relative; }
.top { display: flex; justify-content: space-between; align-items: baseline; }
.brand { font-size: 22px; font-weight: 600; letter-spacing: -0.01em; }
.brand span { color: var(--muted); font-weight: 400; }
.mono { font-family: 'JetBrains Mono', monospace; font-size: 17px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--accent); }
h1 { font-family: 'Inter Tight', sans-serif; font-weight: 600; font-size: ${t.size}px; line-height: 1.02; letter-spacing: -0.035em; margin-top: 54px; }
.nw { white-space: nowrap; }
h1 em { font-style: normal; color: var(--accent); }
.steps { display: flex; gap: 14px; margin-top: 36px; }
.step { display: flex; align-items: center; gap: 12px; background: #fff; border: 1px solid var(--line); border-radius: 10px; padding: 12px 18px 12px 12px; font-size: 22px; font-weight: 500; }
.step i { font-style: normal; font-family: 'JetBrains Mono', monospace; font-size: 16px; font-weight: 600; color: #fff; background: var(--accent); width: 30px; height: 30px; border-radius: 50%; display: grid; place-items: center; }
.steps { align-items: center; }
.arr { color: var(--muted); font-size: 24px; }
.bottom { margin-top: auto; display: flex; justify-content: space-between; align-items: flex-end; border-top: 1px solid var(--fg); padding-top: 20px; }
.stats { display: flex; gap: 44px; }
.stat b { display: block; font-family: 'JetBrains Mono', monospace; font-size: 38px; font-weight: 600; letter-spacing: -0.02em; line-height: 1; }
.stat span { display: block; margin-top: 8px; font-size: 17px; color: var(--muted); white-space: nowrap; }
.where { text-align: right; font-size: 17px; color: var(--muted); line-height: 1.5; white-space: nowrap; }
.where b { display: block; font-family: 'JetBrains Mono', monospace; font-weight: 500; font-size: 19px; color: var(--fg); }
</style>
<div class="top"><p class="brand">Erwan Bargain <span>/ ${t.brand}</span></p><p class="mono">${t.eyebrow}</p></div>
<h1><em>${t.em}</em>${t.rest}</h1>
<div class="steps">${t.steps.map((s, k) => `<p class="step"><i>${k + 1}</i>${s}</p>`).join('<span class="arr">→</span>')}</div>
<div class="bottom">
  <div class="stats">${t.stats.map(([n, l]) => `<p class="stat"><b>${n}</b><span>${l}</span></p>`).join('')}</div>
  <p class="where">${t.where}<b>erwanbargain.com/job-search</b></p>
</div>
</html>
`;
};
for (const lang of ['en', 'fr']) writeFileSync(join(here, `../research/design/card-${lang}.html`), page(lang));
console.log(`cards written · ${data.territories.length} territories · ${profiles} profiles · ${refs.length} sources`);
