// Builds src/data/generated.json from the research extractions.
// No figure is typed by hand here: values come from the CSV extractions
// (Eurostat lfst_r_lfu3rt, Statistics Canada 14-10-0020-01) and from the
// tables of the research notes, parsed as text.
//
// Usage: node scripts/build-data.mjs [path-to-research-notes-folder]

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const notes = resolve(process.argv[2] ?? join(here, '../research/notes/Difficulté emploi régions francophones OCDE'));
const read = (f) => readFileSync(join(notes, f), 'utf8');
const num = (s) => {
  const m = String(s ?? '').replace(',', '.').match(/-?\d+(\.\d+)?/);
  return m ? Number(m[0]) : null;
};
const csv = (text) => {
  const [head, ...rows] = text.trim().split(/\r?\n/).map((l) => l.split(','));
  return rows.map((r) => Object.fromEntries(head.map((h, k) => [h, r[k] ?? ''])));
};

// ---------- territories ----------
const nuts = { en: 'Region', fr: 'Région' };
const prov = { en: 'Province', fr: 'Province' };
const terr = { en: 'Territory', fr: 'Territoire' };
const T = [
  ['FR1', 'FR', 'Île-de-France', 'Île-de-France', nuts, { open: true }],
  ['FRB', 'FR', 'Centre-Val de Loire', 'Centre-Val de Loire', nuts],
  ['FRC', 'FR', 'Bourgogne-Franche-Comté', 'Bourgogne-Franche-Comté', nuts],
  ['FRD', 'FR', 'Normandy', 'Normandie', nuts],
  ['FRE', 'FR', 'Hauts-de-France', 'Hauts-de-France', nuts],
  ['FRF', 'FR', 'Grand Est', 'Grand Est', nuts],
  ['FRG', 'FR', 'Pays de la Loire', 'Pays de la Loire', nuts],
  ['FRH', 'FR', 'Brittany', 'Bretagne', nuts],
  ['FRI', 'FR', 'Nouvelle-Aquitaine', 'Nouvelle-Aquitaine', nuts],
  ['FRJ', 'FR', 'Occitanie', 'Occitanie', nuts],
  ['FRK', 'FR', 'Auvergne-Rhône-Alpes', 'Auvergne-Rhône-Alpes', nuts],
  ['FRL', 'FR', "Provence-Alpes-Côte d'Azur", "Provence-Alpes-Côte d'Azur", nuts],
  ['FRM', 'FR', 'Corsica', 'Corse', nuts],
  ['BE3', 'BE', 'Wallonia', 'Wallonie', nuts],
  ['BE1', 'BE', 'Brussels', 'Bruxelles', nuts, { open: true }],
  ['LU00', 'LU', 'Luxembourg', 'Luxembourg', { en: 'Country', fr: 'Pays' }, { open: true }],
  ['CH01', 'CH', 'Lake Geneva region (Geneva, Vaud, Valais)', 'Région lémanique (Genève, Vaud, Valais)', nuts, { open: true }],
  ['CH02', 'CH', 'Espace Mittelland (mostly German-speaking)', 'Espace Mittelland (majorité germanophone)', nuts, { mixed: true }],
  ['CA-QC', 'CA', 'Québec', 'Québec', prov],
  ['CA-NB', 'CA', 'New Brunswick', 'Nouveau-Brunswick', prov, { prog: true }],
  ['CA-ON', 'CA', 'Ontario', 'Ontario', prov, { prog: true }],
  ['CA-MB', 'CA', 'Manitoba', 'Manitoba', prov, { prog: true }],
  ['CA-SK', 'CA', 'Saskatchewan', 'Saskatchewan', prov, { prog: true }],
  ['CA-AB', 'CA', 'Alberta', 'Alberta', prov, { prog: true }],
  ['CA-BC', 'CA', 'British Columbia', 'Colombie-Britannique', prov, { prog: true }],
  ['CA-NS', 'CA', 'Nova Scotia', 'Nouvelle-Écosse', prov, { prog: true }],
  ['CA-PE', 'CA', 'Prince Edward Island', 'Île-du-Prince-Édouard', prov, { prog: true }],
  ['CA-NL', 'CA', 'Newfoundland and Labrador', 'Terre-Neuve-et-Labrador', prov, { prog: true }],
  ['CA-YT', 'CA', 'Yukon (Whitehorse)', 'Yukon (Whitehorse)', terr, { prog: true }],
  ['CA-NT', 'CA', 'Northwest Territories (Yellowknife)', 'Territoires du Nord-Ouest (Yellowknife)', terr, { prog: true }],
  ['CA-NU', 'CA', 'Nunavut (Iqaluit)', 'Nunavut (Iqaluit)', terr, { prog: true }],
];
const territories = T.map(([id, country, en, fr, level, extra]) => ({ id, country, name: { en, fr }, level, ...(extra ?? {}) }));
const ids = new Set(territories.map((t) => t.id));

const strip = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[*–-]/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
const provByName = Object.fromEntries(
  territories.filter((t) => t.country === 'CA').map((t) => [strip(t.name.fr), t.id]),
);
const euByName = {
  'ile de france': 'FR1', 'centre val de loire': 'FRB', 'bourgogne franche comte': 'FRC', normandie: 'FRD',
  'hauts de france': 'FRE', 'grand est': 'FRF', 'pays de la loire': 'FRG', bretagne: 'FRH', 'nouvelle aquitaine': 'FRI',
  occitanie: 'FRJ', 'auvergne rhone alpes': 'FRK', "provence alpes cote d'azur": 'FRL', corse: 'FRM',
  'bruxelles capitale': 'BE1', wallonie: 'BE3', luxembourg: 'LU00', 'region lemanique': 'CH01', 'espace mittelland': 'CH02',
};

const values = [];
const push = (t, i, a, e, v, p, s, q) => v != null && ids.has(t) && values.push({ t, i, a, e, v, p, s, q });

// ---------- unemployment by age × education: Europe ----------
const ageEu = { 'Y15-24': '15-24', 'Y25-54_calc': '25-54', 'Y55-64': '55-64', 'Y15-74': 'all' };
const eduEu = { tous: 'all', faible: 'low', moyen: 'mid', eleve: 'high' };
for (const r of csv(read('donnees_age_diplome_eurostat_lfu3rt_grille.csv'))) {
  const a = ageEu[r.age];
  if (!a) continue;
  for (const [col, e] of Object.entries(eduEu)) {
    const v25 = num(r[`${col}_2025`]);
    const flag = r[`${col}_drapeau`];
    const derived = r.age.endsWith('_calc');
    if (v25 != null) {
      const q = /u/.test(flag.replace('calc', '')) ? 'u' : derived ? 'calc' : 'ok';
      push(r.geo, 'unemp', a, e, v25, '2025', 'eurostat-lfu3rt', q);
    } else {
      const avg = num(r[`${col}_moy2023_2025_calc`]);
      if (avg != null && Number(r[`${col}_n_annees`]) >= 2) push(r.geo, 'unemp', a, e, avg, '2023–2025', 'eurostat-lfu3rt', 'avg');
    }
  }
}

// ---------- unemployment by age × education: Canada ----------
const ageCa = { '15-24': '15-24', '25-54': '25-54', '55-64': '55-64', '15+': 'all' };
const eduCa = { tous: 'all', faible: 'low', moyen: 'mid', eleve_large: 'high' };
const noteQ = { publie: 'ok', calc_somme: 'calc', calc_residuel: 'u' };
for (const r of csv(read('donnees_age_diplome_statcan_1410002001_grille.csv'))) {
  const t = provByName[strip(r.province)];
  const a = ageCa[r.age];
  if (!t || !a) continue;
  for (const [col, e] of Object.entries(eduCa)) {
    const v25 = num(r[`tc_${col}_2025`]);
    const q = noteQ[r[`tc_${col}_note`]];
    if (v25 != null && q) push(t, 'unemp', a, e, v25, '2025', 'statcan-1410002001', q);
    else {
      const avg = num(r[`tc_${col}_2023_2025_calc`]);
      if (avg != null && Number(r[`tc_${col}_n`]) >= 2) push(t, 'unemp', a, e, avg, '2023–2025', 'statcan-1410002001', 'avg');
    }
  }
}

// ---------- long-term share and slack, all profiles (tables in the harmonised notes) ----------
const harm = read('donnees_harmonisees_ocde.md').split(/\r?\n/);
const cells = (line) => line.split('|').slice(1, -1).map((c) => c.trim());
const start51 = harm.findIndex((l) => l.includes('Tableau 5.1'));
for (let k = start51; k < harm.length && !harm[k].startsWith('- Sources'); k++) {
  if (!harm[k].startsWith('|')) continue;
  const c = cells(harm[k]);
  const t = euByName[strip(c[0])];
  // "Luxembourg (B)" is the Belgian province, not the country.
  if (!t || /\(B\)/.test(c[0])) continue;
  const lowRel = (s) => (/\(u\)/.test(s) ? 'u' : 'ok');
  push(t, 'ltu', 'all', 'all', num(c[3]), '2025', 'eurostat-lfu2ltu', lowRel(c[3]));
  push(t, 'slack', 'all', 'all', num(c[6]), '2025', 'eurostat-sla', lowRel(c[6]));
}
const startProv = harm.findIndex((l) => l.startsWith('| Province |'));
for (let k = startProv; k < harm.length && harm[k].startsWith('|'); k++) {
  const c = cells(harm[k]);
  const t = provByName[strip(c[0])];
  if (t) push(t, 'ltu', 'all', 'all', num(c[5]), 'Nov 2025–Oct 2026', 'statcan-1410034201', 'calc');
}

// ---------- IRCC communities ----------
const ca = read('canada_francophone.md').split(/\r?\n/);
const communities = ca
  // Only the 12-column mapping table; shorter tables list the same communities.
  .filter((l) => /^\| (PICF|CFA)/.test(l) && cells(l).length >= 12)
  .map((l) => {
    const c = cells(l);
    return {
      programmes: [...(c[0].includes('PICF') ? ['FCIP'] : []), ...(c[0].includes('CFA') ? ['WFC'] : [])],
      name: c[1].replace(/\s*\(annoncée comme.*?\)/, ''),
      province: c[2],
      region: c[4].replace(/^RÉ\s+/, ''),
      unemp: num(c[5]),
      uv: num(c[6]),
      vacancyRate: num(c[7]),
      frenchAtWork: num(c[10]),
    };
  });

// The three territories. The Labour Force Survey publishes only their overall rate
// (annual average 2025). No survey gives unemployment by education there, so the profile
// is MODELLED: the 2021 Census pattern by age and education, shifted on the logit scale by
// one constant per territory so that the overall rate equals the 2025 survey rate.
const gains = resolve(join(here, '../research/notes/Gains de mobilité territoires francophones'));
const profiles = readFileSync(join(gains, 'profils_territoires_villes.csv'), 'utf8')
  .replace(/^\uFEFF/, '')
  .trim()
  .split(/\r?\n/)
  .slice(1)
  .map((l) => {
    const c = l.split(',');
    return { place: c[0], level: c[1], age: c[3], edu: c[4], ind: c[5], v: parseFloat(c[6]), period: c[7], def: c[8], src: c[9], flag: c[11] ?? '' };
  });
const logit = (p) => Math.log(p / (100 - p));
const invLogit = (x) => 100 / (1 + Math.exp(-x));
const terrId = { Yukon: 'CA-YT', 'Territoires du Nord-Ouest': 'CA-NT', Nunavut: 'CA-NU' };
const ageCensus = { '15-24': '15-24', '25-54': '25-54', '55-64': '55-64', '15+': 'all' };
const eduCensus = { aucun_diplome: 'low', secondaire: 'mid', postsecondaire_tous: 'high', tous: 'all' };
for (const [place, id] of Object.entries(terrId)) {
  const rows = profiles.filter((r) => r.place === place && r.ind === 'unemployment_rate');
  const survey = rows.find((r) => r.def === 'LFS_annual_average' && r.age === '15+' && r.edu === 'tous' && !r.flag && /0464/.test(r.src));
  const census = rows.filter((r) => /^census_2021/.test(r.def));
  const overall = census.find((r) => r.age === '15+' && r.edu === 'tous');
  if (!survey || !overall) throw new Error(`territory inputs missing for ${place}`);
  const shift = logit(survey.v) - logit(overall.v);
  push(id, 'unemp', 'all', 'all', survey.v, survey.period, 'statcan-1410046401', 'ok');
  // The survey also publishes the 25–54 rate for all education levels: use it rather than the model.
  const prime = rows.find((r) => r.def === 'LFS_annual_average' && r.age === '25-54' && r.edu === 'tous' && !r.flag && r.v > 0);
  if (prime) push(id, 'unemp', '25-54', 'all', prime.v, prime.period, 'statcan-1410044601', 'ok');
  for (const r of census) {
    const a = ageCensus[r.age];
    const e = eduCensus[r.edu];
    if (!a || !e || (a === 'all' && e === 'all')) continue;
    if (prime && a === '25-54' && e === 'all') continue;
    // Cells resting on fewer than 250 people, or suppressed, are not shown.
    if (!(r.v > 0) || r.flag) continue;
    push(id, 'unemp', a, e, +invLogit(logit(r.v) + shift).toFixed(1), '2025', 'model-territories', 'model');
  }
}

const sources = {
  'eurostat-lfu3rt': {
    label: 'Eurostat, lfst_r_lfu3rt',
    url: 'https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfu3rt/default/table?lang=en',
  },
  'eurostat-lfu2ltu': {
    label: 'Eurostat, lfst_r_lfu2ltu',
    url: 'https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfu2ltu/default/table?lang=en',
  },
  'eurostat-sla': {
    label: 'Eurostat, lfst_r_sla_ga',
    url: 'https://ec.europa.eu/eurostat/databrowser/view/lfst_r_sla_ga/default/table?lang=en',
  },
  'statcan-1410002001': {
    label: 'Statistics Canada, table 14-10-0020-01',
    url: 'https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410002001',
  },
  'statcan-1410046401': {
    label: 'Statistics Canada, table 14-10-0464-01',
    url: 'https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410046401',
  },
  'statcan-1410044601': {
    label: 'Statistics Canada, table 14-10-0446-01',
    url: 'https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410044601',
  },
  'model-territories': {
    label: 'Statistics Canada, tables 98-10-0400-01 and 14-10-0464-01',
    url: 'https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=9810040001',
  },
  'statcan-1410034201': {
    label: 'Statistics Canada, table 14-10-0342-01',
    url: 'https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410034201',
  },
};

const out = { meta: { sample: false, retrieved: '2026-11-22' }, territories, values, communities, sources };
writeFileSync(join(here, '../src/data/generated.json'), JSON.stringify(out, null, 1));

const count = (i) => values.filter((v) => v.i === i).length;
console.log(`territories ${territories.length} · unemp ${count('unemp')} · ltu ${count('ltu')} · slack ${count('slack')} · communities ${communities.length}`);
for (const t of territories) {
  const n = values.filter((v) => v.t === t.id && v.i === 'unemp').length;
  if (n < 16) console.log(`  ${t.id}: ${n}/16 unemployment cells`);
}
