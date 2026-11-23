// "What you keep": pay after tax, prices and rent, and the non-wage dimensions.
// Figures come from gains.json (scripts/build-gains.mjs, parsed from the written report).
import raw from './gains.json';
import type { L10n } from './study';

export const gains = raw as {
  index: { name: string; v: number; beforePremium: boolean }[];
  europe: { name: string; rent: number; rentKind: 'asking' | 'newlease' | 'sitting' | 'median'; premium: number | null; left100: number; left67: number; currency: 'EUR' | 'CHF' }[];
  canada: { name: string; net: number; rent: number; paid: boolean; left: number; share: number }[];
  family: { id: string; values: string[] }[];
  daily: { id: string; values: string[] }[];
  after: {
    name: string;
    country: 'FR' | 'BE' | 'LU' | 'CH' | 'CA';
    currency: 'EUR' | 'CHF' | 'CAD';
    net: number;
    ratio: number;
    premium: number | null;
    rent: number;
    rentKind: 'asking' | 'newlease' | 'sitting' | 'median';
    left: number;
    share: number;
    left67: number | null;
    ppp: number | null;
    territory: string | null;
    main: boolean;
    caveats: string[];
  }[];
  zurichRatio: number | null;
  /** Euros per purchasing-power dollar in France (OECD, private consumption). */
  eurPerUsdPpp: number;
};

/** English names for the places named in French in the report. */
const en: Record<string, string> = {
  Normandie: 'Normandy',
  Bretagne: 'Brittany',
  Corse: 'Corsica',
  'Bruxelles-Capitale': 'Brussels',
  Wallonie: 'Wallonia',
  'Région lémanique': 'Lake Geneva region',
  'Nouveau-Brunswick': 'New Brunswick',
  'Colombie-Britannique': 'British Columbia',
  'Nouvelle-Écosse': 'Nova Scotia',
  'Île-du-Prince-Édouard': 'Prince Edward Island',
  'Terre-Neuve-et-Labrador': 'Newfoundland and Labrador',
  'Bruxelles (Région)': 'Brussels (region)',
  'Wallonie ; complexe de Liège': 'Liège area',
  'Complexe de Charleroi': 'Charleroi area',
  'Luxembourg (pays)': 'Luxembourg (country)',
  'Luxembourg-Ville': 'Luxembourg City',
  Genève: 'Geneva',
  'Vaud, 3 pièces, bail récent': 'Vaud, 3 rooms, recent lease',
  Québec: 'Québec City',
  'Grand Sudbury': 'Greater Sudbury',
  "Vaud (3 pièces, bail d'un an ou moins)": 'Vaud, 3 rooms, lease under a year',
  'Liège (complexe résidentiel urbain)': 'Liège area',
  'Charleroi (complexe résidentiel urbain)': 'Charleroi area',
};
const frFix: Record<string, string> = {
  'Wallonie ; complexe de Liège': 'Liège (agglomération)',
  'Complexe de Charleroi': 'Charleroi (agglomération)',
  'Liège (complexe résidentiel urbain)': 'Liège (agglomération)',
  'Charleroi (complexe résidentiel urbain)': 'Charleroi (agglomération)',
};

export const caveatLabel: Record<string, L10n> = {
  regionalMedian: { en: 'regional median wage', fr: 'salaire médian régional' },
  nationalMedian: { en: 'national median wage: upper bound', fr: 'salaire médian national : borne haute' },
  updatedMedian: { en: '2023 regional median, updated', fr: 'médiane régionale 2023, actualisée' },
  interpolated: { en: '2022 wages', fr: 'salaires 2022' },
  unverifiedMedian: { en: 'median not checked at source', fr: 'médiane non vérifiée à la source' },
  otherConcept: { en: 'different wage definition', fr: 'autre définition du salaire' },
  secondaryTax: { en: 'tax rate from a secondary source', fr: "taux d'impôt de source secondaire" },
  estimatedRent: { en: 'rent estimated', fr: 'loyer estimé' },
  allSizesRent: { en: 'median rent of all home sizes', fr: 'loyer médian toutes tailles de logement' },
  northPrices: { en: 'higher northern prices not counted', fr: 'prix plus élevés du Nord non comptés' },
};
/** `city` distinguishes Québec the city (rent tables) from Québec the province (pay index). */
export function placeName(name: string, lang: 'en' | 'fr', city = false): string {
  if (name === 'Québec') return city ? (lang === 'fr' ? 'Québec (ville)' : 'Québec City') : 'Québec';
  return lang === 'fr' ? (frFix[name] ?? name) : (en[name] ?? name);
}

export const rentLabel: Record<'asking' | 'newlease' | 'sitting' | 'median', L10n> = {
  median: { en: 'median rent, press-reported', fr: 'loyer médian, repris de la presse' },
  asking: { en: 'asking rent', fr: "loyer d'annonce" },
  newlease: { en: 'new leases', fr: 'nouveaux baux' },
  sitting: { en: 'sitting tenants', fr: 'locataires en place' },
};

export const beyond: Record<string, L10n> = {
  childcare: {
    en: 'Net cost of full-time childcare for two children aged 2 and 3, % of an average wage',
    fr: "Coût net de la garde à temps plein de deux enfants de 2 et 3 ans, en % d'un salaire moyen",
  },
  under3: { en: 'Children under 3 in formal childcare, %', fr: 'Enfants de moins de 3 ans en accueil formel, %' },
  maternity: { en: 'Maternity leave: weeks / share of pay replaced', fr: 'Congé de maternité : semaines / part du salaire remplacée' },
  motherLeave: { en: 'All paid leave open to the mother, in full-pay weeks', fr: 'Total des congés payés ouverts à la mère, en semaines à taux plein' },
  fatherLeave: { en: 'All paid leave open to the father, in full-pay weeks', fr: 'Total des congés payés ouverts au père, en semaines à taux plein' },
  hours: { en: 'Usual weekly hours, full-time workers, 2025', fr: 'Heures hebdomadaires habituelles à temps plein, 2025' },
  satisfaction: { en: 'Life satisfaction, national survey, 0 to 10', fr: 'Satisfaction de vie, enquête nationale, de 0 à 10' },
};

/** Report values are written in French ("59,7", "T2 2025", "n.d."). */
export function cell(v: string, lang: 'en' | 'fr'): string {
  if (lang === 'fr') return v;
  return v
    .replace(/(\d),(\d)/g, '$1.$2')
    .replace(' %', '%')
    .replace('régime fédéral', 'federal plan')
    .replace('T2 ', 'Q2 ')
    .replace('n.d.', 'n/a')
    .replace('−', '−');
}

export const profiles: { title: L10n; text: L10n }[] = [
  {
    title: { en: 'Young graduate, single', fr: 'Jeune diplômé du supérieur, seul' },
    text: {
      en: 'The profile for which moving is best supported by research. Compare what is left after an entry rent, not salaries: small flats cost more per square metre (35.3 € in Paris against 17.2 in Rennes). In Canada, mid-sized Québec cities leave more after rent than Toronto or Vancouver.',
      fr: "Le profil pour lequel partir est le mieux étayé par la recherche. Comparez ce qui reste après un loyer d'entrée, pas les salaires : les petits logements coûtent plus cher au mètre carré (35,3 € à Paris contre 17,2 à Rennes). Au Canada, les villes moyennes du Québec laissent davantage après loyer que Toronto ou Vancouver.",
    },
  },
  {
    title: { en: 'Mid-career, no degree', fr: 'Milieu de carrière, sans diplôme' },
    text: {
      en: 'Flat-rate charges and rent weigh most. At two-thirds of the average wage, an asking rent takes 87% of net pay in Paris, 42 to 44% in Lyon, Marseille or Brussels, and 32% in Wallonia or Brest. Leave expensive metropolitan areas aside, and look at the occupation before the territory.',
      fr: "Les charges forfaitaires et le loyer pèsent le plus. Aux deux tiers du salaire moyen, un loyer d'annonce absorbe 87 % du net à Paris, 42 à 44 % à Lyon, Marseille ou Bruxelles, et 32 % en Wallonie ou à Brest. Écartez les métropoles chères, et regardez le métier avant le territoire.",
    },
  },
  {
    title: { en: 'Couple with young children', fr: 'Couple avec jeunes enfants' },
    text: {
      en: 'Cost childcare, health premiums and a family-sized rent before comparing salaries. Net childcare takes 7% of an average wage in Luxembourg, 11% in France and 17% in Switzerland, where premiums for a family of four add 16,000 to 17,700 CHF a year. Outside Québec, French-language schools score well below English-language ones in reading: 69 points lower in Ontario.',
      fr: "Chiffrez la garde, les primes maladie et le loyer d'un logement familial avant de comparer les salaires. La garde nette prend 7 % d'un salaire moyen au Luxembourg, 11 % en France et 17 % en Suisse, où les primes d'une famille de quatre ajoutent 16 000 à 17 700 CHF par an. Hors Québec, les écoles de langue française obtiennent des résultats de lecture nettement inférieurs à ceux des écoles anglophones : 69 points de moins en Ontario.",
    },
  },
  {
    title: { en: 'Aged 50 or more', fr: '50 ans ou plus' },
    text: {
      en: 'Moving gives up a housing advantage: in Vaud, a lease of twenty years or more costs 1,092 CHF against 1,673 for a recent one. Move only with a signed job: 43 to 44% of unemployed people aged 55 to 64 have been searching for a year or more in France, Belgium and Switzerland. Pension rights and their portability are not covered here.',
      fr: "Déménager fait perdre un avantage de logement : dans le canton de Vaud, un bail de vingt ans ou plus coûte 1 092 CHF contre 1 673 pour un bail récent. Ne partez qu'avec un emploi signé : 43 à 44 % des chômeurs de 55 à 64 ans cherchent depuis un an ou plus en France, en Belgique et en Suisse. Les droits à retraite et leur portabilité ne sont pas couverts ici.",
    },
  },
  {
    title: { en: 'Newcomer with a foreign diploma', fr: "Nouvel arrivant diplômé à l'étranger" },
    text: {
      en: 'No resident average applies to you. You pay the asking rent, with no seniority. Among graduates born outside the EU, 35% are over-qualified for their job in Belgium, 31% in France, 26% in Switzerland and 14% in Luxembourg. In small francophone communities in Canada, rental markets are tight: 0.7% of dwellings vacant in Hawkesbury, 0.8% in Edmundston.',
      fr: "Aucune moyenne de résidents ne s'applique à vous. Vous payez le loyer demandé, sans ancienneté. Parmi les diplômés nés hors de l'Union, 35 % sont déclassés en Belgique, 31 % en France, 26 % en Suisse et 14 % au Luxembourg. Dans les petites communautés francophones du Canada, le marché locatif est tendu : 0,7 % de logements vacants à Hawkesbury, 0,8 % à Edmundston.",
    },
  },
];

export const fragile: L10n[] = [
  {
    en: 'French cities outside Paris use the national median wage, because no regional median is published. What is left there is an upper bound.',
    fr: "Les villes françaises hors Paris utilisent le salaire médian national, faute de médiane régionale publiée. Ce qui y reste est une borne haute.",
  },
  {
    en: 'Belgian and Luxembourg figures rest on 2022 median wages, carried to net pay between two official points. Luxembourg’s median was read in a summary, not at the source.',
    fr: "Les chiffres belges et luxembourgeois reposent sur des salaires médians de 2022, convertis en net entre deux points officiels. La médiane luxembourgeoise a été lue dans un résumé, pas à la source.",
  },
  {
    en: 'For Neuchâtel, Fribourg and Sion, the rent is that of sitting tenants: a newcomer pays more. In Geneva, a new tenant pays 18% more for the same size of flat.',
    fr: "Pour Neuchâtel, Fribourg et Sion, le loyer est celui des locataires en place : un arrivant paie davantage. À Genève, un nouveau locataire paie 18 % de plus pour un logement de même taille.",
  },
  {
    en: 'The Swiss health premium is the average adult premium across all insurance models, with no premium reduction deducted. Refundable tax credits in Canada are not counted.',
    fr: "La prime maladie suisse est la prime adulte moyenne tous modèles d'assurance confondus, sans réduction de prime. Les crédits d'impôt remboursables au Canada ne sont pas comptés.",
  },
  {
    en: 'Amounts are in national currency and are not adjusted for prices: compare cities within a country. The first chart of this page still rests on average wages and one tax schedule per federal country.',
    fr: "Les montants sont en monnaie nationale et ne sont pas corrigés des prix : comparez les villes à l'intérieur d'un pays. Le premier graphique de cette page repose encore sur des salaires moyens et un seul barème fiscal par pays fédéral.",
  },
];
