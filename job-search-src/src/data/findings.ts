import type { L10n } from './study';

export interface Finding {
  figure: string;
  title: L10n;
  text: L10n;
  source: L10n;
}

// Headline findings, taken from the written report. Each figure is official or
// computed from official figures; the source line says which.
export const findings: Finding[] = [
  {
    figure: '9 → 46 %',
    title: { en: 'Long searches vary fivefold', fr: 'Les recherches longues varient de un à cinq' },
    text: {
      en: 'The share of the unemployed who have been searching for a year or more runs from about 9% in Québec and 12% in Brittany to 37% in Wallonia and the Lake Geneva region, and 46% in Brussels.',
      fr: "La part des chômeurs qui cherchent depuis un an ou plus va d'environ 9 % au Québec et 12 % en Bretagne à 37 % en Wallonie et en Région lémanique, et 46 % à Bruxelles.",
    },
    source: { en: 'Eurostat 2025; Statistics Canada, computed, Nov 2025–Oct 2026', fr: 'Eurostat 2025 ; Statistique Canada, calcul, nov. 2025–oct. 2026' },
  },
  {
    figure: '× 8',
    title: { en: 'Profile outweighs place', fr: 'Le profil pèse plus que le lieu' },
    text: {
      en: 'In France, a young person without a diploma faces an unemployment rate eight times that of a graduate aged 55–64. Between French regions, the overall rate only moves from 5.6% to 8.8%.',
      fr: "En France, un jeune sans diplôme a un taux de chômage huit fois supérieur à celui d'un diplômé du supérieur de 55-64 ans. Entre régions françaises, le taux d'ensemble ne varie que de 5,6 % à 8,8 %.",
    },
    source: { en: 'Eurostat, lfst_r_lfu3rt, 2025', fr: 'Eurostat, lfst_r_lfu3rt, 2025' },
  },
  {
    figure: '24.5 %',
    title: { en: 'After 50, the exit is the problem', fr: 'Après 50 ans, le problème est la sortie' },
    text: {
      en: 'In France, 24.5% of registered jobseekers aged 50 and over found work within six months, against 47.6% of those under 26. Unemployment rates for older workers look low almost everywhere, which hides this.',
      fr: "En France, 24,5 % des demandeurs d'emploi inscrits de 50 ans et plus ont accédé à l'emploi en six mois, contre 47,6 % des moins de 26 ans. Le taux de chômage des seniors paraît bas presque partout, ce qui le masque.",
    },
    source: { en: 'France Travail, note 26.011, registrants of Q2 2025', fr: 'France Travail, note n° 26.011, inscrits du T2 2025' },
  },
  {
    figure: '44.5 %',
    title: { en: 'Open markets look easier than they are', fr: "Les bassins ouverts paraissent plus accessibles qu'ils ne le sont" },
    text: {
      en: 'In Luxembourg, 44.5% of jobs are held by cross-border workers, who appear in no local unemployment count. Vacancies declared to the public agency cover about a quarter of actual hires.',
      fr: "Au Luxembourg, 44,5 % des emplois sont occupés par des frontaliers, qui ne figurent dans aucun décompte local du chômage. Les postes déclarés à l'agence publique couvrent environ un quart des recrutements réels.",
    },
    source: { en: 'IGSS, 31 July 2026; ADEM annual report 2025', fr: 'IGSS, 31 juillet 2026 ; ADEM, rapport annuel 2025' },
  },
  {
    figure: '29',
    title: { en: 'Welcome is not the same as work', fr: "L'accueil n'est pas l'emploi" },
    text: {
      en: 'Twenty-nine Canadian communities outside Québec take part in federal programmes to attract and welcome francophones. Being listed does not mean jobs are easy to get, or that work is in French: French is the main language at work only in northern New Brunswick.',
      fr: "Vingt-neuf communautés canadiennes hors Québec participent à des programmes fédéraux pour attirer et accueillir des francophones. Y figurer ne signifie pas que l'emploi y est facile, ni que l'on y travaille en français : le français n'est la langue principale au travail que dans le nord du Nouveau-Brunswick.",
    },
    source: { en: 'IRCC, 2026; 2021 Census', fr: 'IRCC, 2026 ; Recensement de 2021' },
  },
  {
    figure: '≈ 5 %',
    title: { en: 'Moving is rarely the first lever', fr: 'Déménager est rarement le premier levier' },
    text: {
      en: 'Being in the wrong place explains only about 5% of unemployment in the reference study. Changing occupation or widening the search radius usually pays more than changing region. The gain from moving is best established for young graduates.',
      fr: "Être au mauvais endroit n'explique qu'environ 5 % du chômage dans l'étude de référence. Changer de métier ou élargir son rayon de recherche rapporte en général davantage que changer de région. Le gain d'un départ est le mieux établi pour les jeunes diplômés.",
    },
    source: { en: 'Marinescu and Rathelot, 2018 (US data)', fr: 'Marinescu et Rathelot, 2018 (données américaines)' },
  },
];
