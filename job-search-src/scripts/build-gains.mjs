// Builds src/data/gains.json from the tables of the written report on the gains of moving.
// Figures are parsed from the report, never typed here.
//
// Usage: node scripts/build-gains.mjs

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const report = readFileSync(join(here, '../research/reports/Gains de mobilité territoires francophones.md'), 'utf8').split(/\r?\n/);
const cells = (l) => l.split('|').slice(1, -1).map((c) => c.trim());
const int = (s) => {
  const m = String(s ?? '').replace(/[   ]/g, '').match(/-?\d+/);
  return m ? Number(m[0]) : null;
};
const table = (headerStart) => {
  const k = report.findIndex((l) => l.startsWith(headerStart));
  if (k < 0) throw new Error(`table not found: ${headerStart}`);
  const rows = [];
  for (let j = k + 2; j < report.length && report[j].startsWith('|'); j++) rows.push(cells(report[j]));
  return rows;
};

// 1. Average wage after tax and prices, France = 100 (computed in the report).
const index = table('| Territoire | Salaire brut annuel moyen 2022')
  .map((c) => ({ name: c[0], v: int(c[2]), beforePremium: /avant prime/.test(c[2]) }))
  .filter((r) => r.v != null);

// 2. What is left each month after tax, health premium (Switzerland) and rent: Europe.
const rentKind = (s) => (/en place/.test(s) ? 'sitting' : /nouveau bail|bail récent/.test(s) ? 'newlease' : /annonce/.test(s) ? 'asking' : 'asking');
const europe = table('| Ville ou territoire | Loyer retenu').map((c) => ({
  name: c[0],
  rent: int(c[1]),
  rentKind: rentKind(c[0] + ' ' + c[1]),
  premium: int(c[2]),
  left100: int(c[3]),
  left67: int(c[4]),
  currency: int(c[2]) != null ? 'CHF' : 'EUR',
}));

// 3. Same for Canada: provincial median net pay minus the asking rent of a one-bedroom.
const canada = [];
for (const c of table('| Ville | Net médian provincial mensuel')) {
  // Some rows hold two cities ("Saguenay ; Trois-Rivières | 4 212 | 834 ; 873 (payé) | 3 378 ; 3 339 | 20 % ; 21 % | n.d.").
  const names = c[0].split(' ; ');
  const part = (s, k) => (s.includes(' ; ') ? s.split(' ; ')[k] : s);
  names.forEach((name, k) =>
    canada.push({ name, net: int(c[1]), rent: int(part(c[2], k)), paid: /payé/.test(c[2]), left: int(part(c[3], k)), share: int(part(c[4], k)) }),
  );
}

// 4. Beyond pay: national indicators read from official sources (rows tagged [O] in the report).
const pickRows = (rows, specs) =>
  specs.map(({ id, re }) => {
    const r = rows.find((c) => re.test(c[0]));
    if (!r) throw new Error(`row not found: ${id}`);
    return { id, values: r.slice(1) };
  });
// The family table is the first one with this header; the daily-life table adds Québec and Ontario columns.
const family = pickRows(table('| Indicateur | France | Belgique | Luxembourg | Suisse | Canada |'), [
  { id: 'childcare', re: /^Coût net de la garde/ },
  { id: 'under3', re: /^Enfants de moins de 3 ans/ },
  { id: 'maternity', re: /^Congé de maternité/ },
  { id: 'motherLeave', re: /^Total des congés payés ouverts à la mère/ },
  { id: 'fatherLeave', re: /^Total ouvert au père/ },
]);
const daily = pickRows(table('| Indicateur | France | Belgique | Luxembourg | Suisse | Canada | Québec | Ontario |'), [
  { id: 'hours', re: /^Heures hebdomadaires/ },
  { id: 'satisfaction', re: /^Satisfaction de vie/ },
]);

const out = { index, europe, canada, family, daily };
writeFileSync(join(here, '../src/data/gains.json'), JSON.stringify(out, null, 1));
console.log(`index ${index.length} · europe ${europe.length} · canada ${canada.length} · family ${family.length} · daily ${daily.length}`);
