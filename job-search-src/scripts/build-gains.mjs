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
// A rent with no label in the report is a median reported by the press (Liège and Charleroi urban areas), not an asking rent.
const rentKind = (s) => (/en place/.test(s) ? 'sitting' : /nouveau bail|bail récent/.test(s) ? 'newlease' : /annonce/.test(s) ? 'asking' : 'median');
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

// 5. Recomputed on aligned bases (second research round): median wage of each territory, tax and
// contributions under the rules of each canton or province, mandatory health premium, entry rent.
const note2 = readFileSync(join(here, '../research/notes/Compléments et vérifications étude emploi/medians_impots_loyers_entree.md'), 'utf8').split(/\r?\n/);
const csvBlocks = [];
for (let k = 0; k < note2.length; k++) {
  if (note2[k].startsWith('place;territory;currency;')) {
    const head = note2[k].split(';');
    const rows = [];
    for (let j = k + 1; j < note2.length && !note2[j].startsWith('```'); j++) {
      const c = note2[j].split(';');
      rows.push(Object.fromEntries(head.map((h, i) => [h, c[i] ?? ''])));
    }
    csvBlocks.push(rows);
  }
}
if (csvBlocks.length !== 2) throw new Error(`expected two CSV blocks in the medians note, found ${csvBlocks.length}`);
const n = (s) => (s === '' || s == null ? null : Number(s));
const countryOf = (r) =>
  r.currency === 'CHF' ? 'CH' : r.currency === 'CAD' ? 'CA' : /Bruxelles|Wallonie/.test(r.territory) ? 'BE' : r.territory === 'Luxembourg' ? 'LU' : 'FR';
// Short caveat codes derived from the researcher's status text; the page turns them into sentences.
const caveats = (r) => {
  const st = r.status;
  const out = [];
  if (/substitut régional/.test(st)) out.push('regionalMedian');
  if (/médiane NATIONALE/.test(st)) out.push('nationalMedian');
  if (/médiane régionale 2023/.test(st)) out.push('updatedMedian');
  if (/interpolation/.test(st)) out.push('interpolated');
  if (/résumé/.test(st)) out.push('unverifiedMedian');
  if (/concept de salaire différent/.test(st)) out.push('otherConcept');
  if (/source secondaire/.test(st)) out.push('secondaryTax');
  if (/sous hypothèses/.test(st)) out.push('estimatedRent');
  if (/toutes tailles/.test(st)) out.push('allSizesRent');
  if (/prix du Nord/.test(st)) out.push('northPrices');
  return out;
};
// Region or province of each city (our assignment), and the city used to represent it on the home page.
const territoryOf = {
  Paris: 'FR1', Lyon: 'FRK', Marseille: 'FRL', Nice: 'FRL', Bordeaux: 'FRI', Toulouse: 'FRJ', Lille: 'FRE', Strasbourg: 'FRF',
  Rennes: 'FRH', Nantes: 'FRG', Brest: 'FRH', Quimper: 'FRH', Orléans: 'FRB', Dijon: 'FRC', Rouen: 'FRD', Ajaccio: 'FRM',
  'Bruxelles (Région)': 'BE1', 'Liège (complexe résidentiel urbain)': 'BE3', 'Charleroi (complexe résidentiel urbain)': 'BE3', Wallonie: 'BE3',
  'Luxembourg (pays)': 'LU00', 'Luxembourg-Ville': 'LU00',
  Genève: 'CH01', Lausanne: 'CH01', "Vaud (3 pièces, bail d'un an ou moins)": 'CH01', Sion: 'CH01', Neuchâtel: 'CH02', Fribourg: 'CH02',
  Montréal: 'CA-QC', Québec: 'CA-QC', Gatineau: 'CA-QC', Sherbrooke: 'CA-QC',
  Toronto: 'CA-ON', Ottawa: 'CA-ON', 'Grand Sudbury': 'CA-ON', Hamilton: 'CA-ON', London: 'CA-ON',
  Moncton: 'CA-NB', Winnipeg: 'CA-MB', Regina: 'CA-SK', Saskatoon: 'CA-SK', Calgary: 'CA-AB', Edmonton: 'CA-AB',
  Vancouver: 'CA-BC', Kelowna: 'CA-BC', Halifax: 'CA-NS', Yellowknife: 'CA-NT',
  "St. John's": 'CA-NL', Charlottetown: 'CA-PE', Whitehorse: 'CA-YT', Iqaluit: 'CA-NU',
};
const mainCity = new Set(['Paris', 'Lyon', 'Marseille', 'Bordeaux', 'Toulouse', 'Lille', 'Strasbourg', 'Rennes', 'Nantes', 'Bruxelles (Région)', 'Liège (complexe résidentiel urbain)', 'Luxembourg-Ville', 'Genève', 'Fribourg', 'Montréal', 'Toronto', 'Moncton', 'Winnipeg', 'Regina', 'Calgary', 'Vancouver', 'Halifax', 'Yellowknife', 'Orléans', 'Dijon', 'Rouen', 'Ajaccio', "St. John's", 'Charlottetown', 'Whitehorse', 'Iqaluit']);
const two = new Map(csvBlocks[1].map((r) => [r.place, r]));
const after = csvBlocks[0]
  // Namur has no rent of its own in the research (it repeats the Walloon figure): leave it out.
  .filter((r) => n(r.left) != null && r.place !== 'Namur')
  .map((r) => ({
    name: r.place,
    country: countryOf(r),
    currency: r.currency,
    net: n(r.net_monthly),
    ratio: n(r.net_ratio),
    premium: n(r.health_premium) ? Math.round(n(r.health_premium)) : null,
    rent: n(r.entry_rent),
    // Liège and Charleroi: medians for the wider urban area reported in the press, per the independent review.
    rentKind: /complexe résidentiel/.test(r.place) ? 'median' : r.rent_type.startsWith('newlease') ? 'newlease' : r.rent_type,
    left: n(r.left),
    share: n(r.rent_share_of_net),
    left67: n(two.get(r.place)?.left),
    // Purchasing-power dollars (OECD parities for private consumption): an order of magnitude only.
    ppp: n(r.left_usd_ppp),
    territory: territoryOf[r.place] ?? null,
    main: mainCity.has(r.place),
    caveats: caveats(r),
  }));
const refZurich = csvBlocks[0].find((r) => /^Zurich/.test(r.place));

// OECD purchasing power parity for private consumption, France (euros per US dollar), as quoted in the report.
// It turns purchasing-power dollars into "euros at French prices", the single unit used for cross-country ranking.
const pppLine = report.find((l) => /1 USD = [\d,]+ EUR en France/.test(l));
const eurPerUsdPpp = pppLine ? Number(pppLine.match(/1 USD = ([\d,]+) EUR en France/)[1].replace(',', '.')) : null;
if (!eurPerUsdPpp) throw new Error('French purchasing power parity not found in the report');

const out = { index, europe, canada, family, daily, after, zurichRatio: refZurich ? n(refZurich.net_ratio) : null, eurPerUsdPpp };
writeFileSync(join(here, '../src/data/gains.json'), JSON.stringify(out, null, 1));
console.log(`index ${index.length} · europe ${europe.length} · canada ${canada.length} · family ${family.length} · daily ${daily.length} · after ${after.length}`);
