// Builds src/data/references.json: every source linked in the written reports,
// deduplicated by URL and split into official statistics and research.
//
// Usage: node scripts/build-refs.mjs [path-to-reports-folder]

import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
// Every report in research/reports: job-search difficulty, then the gains of moving.
const dir = resolve(process.argv[2] ?? join(here, '../research/reports'));
const text = readdirSync(dir)
  .filter((f) => f.endsWith('.md'))
  .sort()
  .map((f) => readFileSync(join(dir, f), 'utf8'))
  .join('\n');

const official = [
  'ec.europa.eu', 'statcan.gc.ca', 'insee.fr', 'travail-emploi.gouv.fr', 'francetravail', 'bfs.admin.ch', 'seco.admin.ch',
  'admin.ch', 'adem.public.lu', 'igss.gouvernement.lu', 'gouvernement.lu', 'data.public.lu', 'iweps.be', 'onem.be',
  'leforem.be', 'canada.ca', 'quebec.ca', 'statistique.quebec.ca', 'sdmx.oecd.org', 'ge.ch/statistique', 'statistique.ge.ch',
  'vd.ch', 'unedic.org', 'ilo.org', 'cereq.fr', 'fonction-publique.gouv.fr',
];
const publisher = (host) =>
  [
    ['migrant-integration.ec.europa.eu', 'European Commission'], ['ec.europa.eu', 'Eurostat'], ['statcan.gc.ca', 'Statistics Canada'], ['insee.fr', 'Insee'], ['travail-emploi.gouv.fr', 'DARES'],
    ['francetravail', 'France Travail'], ['bfs.admin.ch', 'FSO (Switzerland)'], ['seco.admin.ch', 'SECO'], ['admin.ch', 'Swiss Confederation'],
    ['adem.public.lu', 'ADEM'], ['igss.gouvernement.lu', 'IGSS'], ['gouvernement.lu', 'Luxembourg government'], ['data.public.lu', 'ADEM open data'],
    ['iweps.be', 'IWEPS'], ['onem.be', 'ONEM'], ['leforem.be', 'Le Forem'], ['canada.ca', 'IRCC'], ['quebec.ca', 'Québec government'],
    ['sdmx.oecd.org', 'OECD data'], ['oecd.org', 'OECD'], ['statistique.ge.ch', 'OCSTAT (Geneva)'], ['ge.ch', 'Canton of Geneva'],
    ['vd.ch', 'Canton of Vaud'], ['unedic.org', 'Unédic'], ['ilo.org', 'ILO'], ['cereq.fr', 'Céreq'],
  ].find(([d]) => host.includes(d))?.[1] ?? null;

const seen = new Map();
for (const m of text.matchAll(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g)) {
  const [, label, url] = m;
  if (seen.has(url)) continue;
  const host = new URL(url).hostname.replace(/^www\d*\./, '');
  const kind = official.some((d) => url.includes(d)) ? 'official' : 'research';
  seen.set(url, { label: label.replace(/\s+/g, ' ').trim(), url, host, publisher: publisher(host), kind });
}
const refs = [...seen.values()].sort((a, b) => (a.publisher ?? a.host).localeCompare(b.publisher ?? b.host) || a.label.localeCompare(b.label));
writeFileSync(join(here, '../src/data/references.json'), JSON.stringify(refs, null, 1));
console.log(`references ${refs.length} · official ${refs.filter((r) => r.kind === 'official').length} · research ${refs.filter((r) => r.kind === 'research').length}`);
