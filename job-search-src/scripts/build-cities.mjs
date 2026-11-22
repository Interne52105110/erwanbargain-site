// Builds src/data/cities.json: the finest local level available per country
// (French employment zones, Canadian metropolitan areas and small-area estimates,
// Swiss cantons, Belgian provinces), with housing indicators where the research has them.
// Values are parsed from the research notes, never typed here. The assignment of each
// place to a region or province is ours.
//
// Usage: node scripts/build-cities.mjs

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const notes = join(here, '../research/notes');
const A = join(notes, 'Difficulté emploi régions francophones OCDE');
const B = join(notes, 'Gains de mobilité territoires francophones');
const lines = (dir, f) => readFileSync(join(dir, f), 'utf8').split(/\r?\n/);
const cells = (l) => l.split('|').slice(1, -1).map((c) => c.trim());
const num = (s) => {
  const m = String(s ?? '').replace(',', '.').match(/-?\d+(\.\d+)?/);
  return m ? Number(m[0]) : null;
};
const key = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\(.*$/, '').replace(/[’']/g, ' ').replace(/[^a-zA-Z]+/g, ' ').trim().toLowerCase();

const cities = [];
const add = (c) => {
  if (c.unemp?.v == null) return;
  if (cities.some((x) => x.id === c.id)) return;
  cities.push(c);
};

// ---------- France: employment zones (INSEE localised rates, Q2 2026) ----------
const zeRegion = {
  FR1: ['Paris', 'Roissy', 'Versailles-Saint-Quentin', 'Saclay'],
  FRK: ['Lyon', 'Grenoble', 'Annecy', 'Le Genevois français', 'Le Mont Blanc', 'Saint-Flour'],
  FRH: ['Rennes', 'Vitré', 'Quimper', 'Brest', 'Lorient', 'Vannes', 'Saint-Brieuc', 'Carhaix-Plouguer', 'Lamballe-Armor'],
  FRG: ['Nantes', 'Les Herbiers-Montaigu', 'Ancenis', 'Le Mans', 'Angers'],
  FRD: ['Rouen', 'Le Havre', 'Caen'],
  FRE: ['Lille', 'Roubaix-Tourcoing', 'Valenciennes', 'Maubeuge', 'Calais', 'Lens', 'Arras'],
  FRL: ['Marseille', 'Nice', 'Avignon'],
  FRJ: ['Montpellier', 'Perpignan', 'Agde-Pézenas', 'Alès-Le Vigan', 'Toulouse'],
  FRI: ['Bordeaux'],
  FRF: ['Strasbourg', 'Mulhouse', 'Saint-Louis', 'Thionville', 'Forbach', 'Metz'],
  FRC: ['Pontarlier', 'Montbéliard', 'Dijon'],
  FRB: ['Orléans'],
  FRM: ['Ajaccio', 'Bastia'],
};
const zeOf = Object.fromEntries(Object.entries(zeRegion).flatMap(([r, zs]) => zs.map((z) => [key(z), r])));
const fr = lines(A, 'france_regions.md');
const zeStart = fr.findIndex((l) => l.startsWith('| Zone d\'emploi | T2 2026'));
const unknownZe = [];
for (let k = zeStart + 2; k < fr.length && fr[k].startsWith('|'); k++) {
  const c = cells(fr[k]);
  for (const [name, val] of [[c[0], c[1]], [c[3], c[4]]]) {
    // "Ajaccio / Bastia | 5,9 / 7,0" holds two zones in one cell.
    const names = name.split(' / ');
    const vals = val.split(' / ');
    names.forEach((n, j) => {
      const clean = n.replace(/\s*\(.*\)/, '');
      const territory = zeOf[key(clean)];
      if (!territory) return unknownZe.push(clean);
      add({ id: 'fr-' + key(clean).replace(/ /g, '-'), name: { en: clean, fr: clean }, territory, country: 'FR', unemp: { v: num(vals[j]), kind: 'ze', period: 'Q2 2026' } });
    });
  }
}

// ---------- Canada ----------
const ca = lines(A, 'canada_francophone.md');
const provId = { 'N.-B.': 'CA-NB', 'Ont.': 'CA-ON', 'Man.': 'CA-MB', 'C.-B.': 'CA-BC', 'Alb.': 'CA-AB', 'Î.-P.-É.': 'CA-PE', 'N.-É.': 'CA-NS', 'Sask.': 'CA-SK', 'T.-N.-L.': 'CA-NL', Nt: 'CA-NU', 'T.N.-O.': 'CA-NT', Yn: 'CA-YT' };
const cmaProv = { montreal: 'CA-QC', quebec: 'CA-QC', gatineau: 'CA-QC', sherbrooke: 'CA-QC', saguenay: 'CA-QC', 'trois rivieres': 'CA-QC', drummondville: 'CA-QC', moncton: 'CA-NB', sudbury: 'CA-ON', hamilton: 'CA-ON', london: 'CA-ON', toronto: 'CA-ON', calgary: 'CA-AB', kelowna: 'CA-BC', nanaimo: 'CA-BC', vancouver: 'CA-BC' };
const cmaName = { quebec: { en: 'Québec City', fr: 'Québec (ville)' }, sudbury: { en: 'Greater Sudbury', fr: 'Grand Sudbury' }, montreal: { en: 'Montréal', fr: 'Montréal' }, 'trois rivieres': { en: 'Trois-Rivières', fr: 'Trois-Rivières' } };
// Metropolitan areas: Labour Force Survey, three-month average to October 2026, seasonally adjusted.
for (const l of ca.filter((x) => /^\| RMR (de|du|d')/.test(x))) {
  const c = cells(l);
  let n = c[0].replace(/^RMR (de |du |d')/, '').replace(/\s*\(.*\)/, '').trim();
  if (/Ottawa-Gatineau/.test(n)) n = 'Gatineau';
  if (/Grand Sudbury/.test(n)) n = 'Sudbury';
  const k = key(n);
  if (!cmaProv[k]) continue;
  add({ id: 'ca-' + k.replace(/ /g, '-'), name: cmaName[k] ?? { en: n, fr: n }, territory: cmaProv[k], country: 'CA', unemp: { v: num(c[1]), kind: 'cma', period: 'Aug–Oct 2026' } });
}
// Programme communities: small-area model estimates (August 2026) or, failing that, the territory rate.
for (const l of ca.filter((x) => /^\| (PICF|CFA)/.test(x) && cells(x).length >= 12)) {
  const c = cells(l);
  const territory = provId[c[2]];
  const sae = c[8].match(/estimation petits domaines août 2026 \((.+?)\) : ([\d,]+) % \[IC 95 % ([\d,]+)–([\d,]+)\]/);
  if (sae) {
    const raw = sae[1].split(',')[0].replace(/ \/ .*/, '').replace(/\s*\(.*\)/, '');
    // Small-area zones named after the programme community they stand for.
    const place = { Tracadie: 'Acadian Peninsula (Tracadie)', Inverness: 'Chéticamp area (Inverness)', Algoma: 'Superior East (Algoma North)', 'Central Prince': 'Évangéline region (Central Prince)', Kapuskasing: 'Northern Corridor (Kapuskasing)' }[raw] ?? raw;
    if (cmaProv[key(place)] || /Sudbury/.test(place)) continue; // metropolitan figure already kept
    add({ id: 'ca-' + key(place).replace(/ /g, '-'), name: { en: place, fr: place }, territory, country: 'CA', unemp: { v: num(sae[2]), lo: num(sae[3]), hi: num(sae[4]), kind: 'sae', period: 'Aug 2026' } });
  } else if (['CA-NT', 'CA-YT', 'CA-NU'].includes(territory)) {
    add({ id: 'ca-' + key(c[1]).replace(/ /g, '-'), name: { en: c[1], fr: c[1] }, territory, country: 'CA', unemp: { v: num(c[5]), kind: 'terr', period: 'Apr–Jun 2026' } });
  }
}

// ---------- Switzerland: cantons, registered unemployment (SECO, October 2026) ----------
const ch = lines(A, 'suisse_romande.md');
const cantons = { geneve: ['CH01', 'Geneva', 'Genève'], vaud: ['CH01', 'Vaud', 'Vaud'], valais: ['CH01', 'Valais', 'Valais'], neuchatel: ['CH02', 'Neuchâtel', 'Neuchâtel'], jura: ['CH02', 'Jura', 'Jura'], fribourg: ['CH02', 'Fribourg', 'Fribourg'], berne: ['CH02', 'Bern', 'Berne'] };
const chStart = ch.findIndex((l) => l.includes('Tableau 1 — Chômage inscrit par canton'));
for (let k = chStart; k < chStart + 20; k++) {
  if (!ch[k]?.startsWith('|')) continue;
  const c = cells(ch[k]);
  const hit = cantons[key(c[0])];
  if (hit) add({ id: 'ch-' + key(c[0]), name: { en: `${hit[1]} (canton)`, fr: `${hit[2]} (canton)` }, territory: hit[0], country: 'CH', unemp: { v: num(c[2]), kind: 'canton', period: 'Oct 2026' } });
}

// ---------- Belgium: provinces, ILO rate 2025; Brussels is its own region ----------
const harm = lines(A, 'donnees_harmonisees_ocde.md');
const provinces = { 'brabant wallon': ['Walloon Brabant', 'Brabant wallon'], hainaut: ['Hainaut (Charleroi, Mons)', 'Hainaut (Charleroi, Mons)'], liege: ['Liège (province)', 'Liège (province)'], namur: ['Namur (province)', 'Namur (province)'] };
const t51 = harm.findIndex((l) => l.includes('Tableau 5.1'));
for (let k = t51; k < harm.length && !harm[k].startsWith('- Sources'); k++) {
  if (!harm[k].startsWith('|')) continue;
  const c = cells(harm[k]);
  const raw = c[0].replace(/^[–-]\s*/, '');
  if (/\(B\)/.test(raw)) add({ id: 'be-luxembourg', name: { en: 'Luxembourg (Belgian province)', fr: 'Luxembourg (province belge)' }, territory: 'BE3', country: 'BE', unemp: { v: num(c[1]), kind: 'prov', period: '2025' } });
  else if (provinces[key(raw)] && c[0].startsWith('–')) add({ id: 'be-' + key(raw).replace(/ /g, '-'), name: { en: provinces[key(raw)][0], fr: provinces[key(raw)][1] }, territory: 'BE3', country: 'BE', unemp: { v: num(c[1]), kind: 'prov', period: '2025' } });
  else if (key(raw) === 'bruxelles capitale') add({ id: 'be-bruxelles', name: { en: 'Brussels', fr: 'Bruxelles' }, territory: 'BE1', country: 'BE', unemp: { v: num(c[1]), kind: 'prov', period: '2025' } });
  else if (key(raw) === 'luxembourg' && !/\(B\)/.test(raw)) add({ id: 'lu-ville', name: { en: 'Luxembourg City', fr: 'Luxembourg-Ville' }, territory: 'LU00', country: 'LU', unemp: { v: num(c[1]), kind: 'country', period: '2025' } });
}

// ---------- Housing (research block in logement.md) ----------
const hl = lines(B, 'logement.md');
const hs = hl.findIndex((l) => l.startsWith('territoire_ou_ville,indicateur'));
const housing = [];
for (let k = hs + 1; k < hl.length && !hl[k].startsWith('```'); k++) {
  const [place, ind, val, unit, period, source, status] = hl[k].split(',');
  if (val && num(val) != null) housing.push({ place, k: key(place), ind, v: num(val), unit, period, source, status });
}
const alias = { 'be-hainaut': 'charleroi', 'be-liege': 'liege', 'be-namur': 'namur', 'be-bruxelles': 'bruxelles', 'lu-ville': 'luxembourg ville', 'ca-sudbury': 'grand sudbury', 'ca-quebec': 'quebec', 'ch-geneve': 'geneve', 'ch-vaud': 'vaud', 'ch-neuchatel': 'neuchatel', 'ch-fribourg': 'fribourg', 'ch-jura': 'jura', 'ch-berne': 'berne', 'ch-valais': 'valais' };
const unitLabel = { 'EUR/m2/mois': '€/m²', 'CAD/mois': 'CAD', 'CHF/mois': 'CHF', 'EUR/mois': '€' };
const pick = (rows, tests) => {
  for (const t of tests) {
    const r = rows.find((x) => t.re.test(x.ind));
    if (r) return { v: r.v, unit: unitLabel[r.unit] ?? r.unit, per: r.unit.startsWith('EUR/m2') ? 'm2' : 'month', kind: t.kind, period: r.period, computed: /calcul/.test(r.status) };
  }
  return null;
};
for (const c of cities) {
  const k = alias[c.id] ?? key(c.name.fr);
  // "Quebec (province)" is the province, not the city.
  const rows = housing.filter((r) => r.k === k && !/province\)$/.test(r.place));
  if (!rows.length) continue;
  const rent = pick(rows, [
    { re: /^loyer demande 2 chambres/, kind: 'asking2' },
    { re: /^loyer annonce appartement cc/, kind: 'asking' },
    { re: /^loyer annonce median appartement/, kind: 'asking' },
    { re: /^loyer median nouveau bail$/, kind: 'newlease' },
    { re: /^loyer moyen 2 chambres/, kind: 'paid2' },
    { re: /^loyer net moyen en place$/, kind: 'sitting' },
    { re: /^loyer median$/, kind: 'paid' },
  ]);
  const vac = rows.find((r) => /^taux inoccupation/.test(r.ind) || r.ind === 'logements vacants');
  const shareRow =
    rows.find((r) => / \/ (salaire|revenu emploi)/.test(r.ind) && /demande|annonce|nouveau bail|52 m2/.test(r.ind) && !/\(province\)/.test(r.ind)) ??
    rows.find((r) => / \/ (salaire|revenu emploi)/.test(r.ind) && !/\(province\)/.test(r.ind));
  if (rent) c.rent = rent;
  if (vac) c.vacancy = { v: vac.v, period: vac.period };
  if (shareRow) c.share = { v: shareRow.v, basis: /brut/.test(shareRow.ind) ? 'gross' : 'net', asking: /demande|annonce|nouveau bail|52 m2/.test(shareRow.ind) };
}

cities.sort((a, b) => a.territory.localeCompare(b.territory) || a.unemp.v - b.unemp.v);
writeFileSync(join(here, '../src/data/cities.json'), JSON.stringify(cities, null, 1));
const by = (f) => cities.reduce((o, c) => ((o[f(c)] = (o[f(c)] ?? 0) + 1), o), {});
console.log(`cities ${cities.length}`, by((c) => c.country), by((c) => c.unemp.kind));
console.log(`with rent ${cities.filter((c) => c.rent).length} · vacancy ${cities.filter((c) => c.vacancy).length} · share ${cities.filter((c) => c.share).length}`);
if (unknownZe.length) console.log('employment zones without a region:', unknownZe.join(', '));
