// City-level figures: the finest local level each country publishes.
// Built by scripts/build-cities.mjs from the research notes.
import raw from './cities.json';
import type { L10n } from './study';

export type UnempKind = 'ze' | 'cma' | 'sae' | 'terr' | 'canton' | 'prov' | 'country';
export type RentKind = 'asking2' | 'asking' | 'newlease' | 'paid2' | 'sitting' | 'paid';

export interface City {
  id: string;
  name: L10n;
  territory: string;
  country: 'FR' | 'BE' | 'LU' | 'CH' | 'CA';
  unemp: { v: number; kind: UnempKind; period: string; lo?: number; hi?: number };
  rent?: { v: number; unit: string; per: 'm2' | 'month'; kind: RentKind; period: string; computed: boolean; press?: boolean };
  vacancy?: { v: number; period: string };
  share?: { v: number; basis: 'net' | 'gross'; asking: boolean };
  /** Census unemployment rate by education: a different measure from `unemp`. */
  edu?: { low: number; mid: number; high: number; basis: 'ca21' | 'fr23' | 'eu21' };
}

export const eduBasis: Record<'ca21' | 'fr23' | 'eu21', L10n> = {
  ca21: { en: '2021 census, ages 25–54', fr: 'recensement 2021, 25–54 ans' },
  fr23: { en: '2023 census, ages 15–64', fr: 'recensement 2023, 15–64 ans' },
  eu21: { en: '2021 census, ages 15–64', fr: 'recensement 2021, 15–64 ans' },
};

export const cities = raw as City[];

export const unempKind: Record<UnempKind, L10n> = {
  ze: { en: 'employment zone', fr: "zone d'emploi" },
  cma: { en: 'metro area', fr: 'région métropolitaine' },
  sae: { en: 'model estimate', fr: 'estimation modélisée' },
  terr: { en: 'whole territory', fr: 'territoire entier' },
  canton: { en: 'registered', fr: 'chômage inscrit' },
  prov: { en: 'province', fr: 'province' },
  country: { en: 'whole country', fr: 'pays entier' },
};

export const rentKind: Record<RentKind, L10n> = {
  asking2: { en: 'asking, 2-bedroom', fr: 'demandé, 2 chambres' },
  asking: { en: 'asking, per m²', fr: 'demandé, au m²' },
  newlease: { en: 'new leases', fr: 'nouveaux baux' },
  paid2: { en: 'paid, 2-bedroom', fr: 'payé, 2 chambres' },
  sitting: { en: 'sitting tenants', fr: 'locataires en place' },
  paid: { en: 'median rent', fr: 'loyer médian' },
};

export function fmtRent(c: City, lang: 'en' | 'fr'): string | null {
  if (!c.rent) return null;
  const nf = new Intl.NumberFormat(lang, { maximumFractionDigits: c.rent.per === 'm2' ? 1 : 0, minimumFractionDigits: c.rent.per === 'm2' ? 1 : 0 });
  const v = nf.format(c.rent.v);
  if (c.rent.per === 'm2') return `${v} ${c.rent.unit}`;
  return lang === 'fr' ? `${v} ${c.rent.unit}` : `${c.rent.unit === '€' ? '€' : c.rent.unit + ' '}${v}`;
}

/** What each country's local figure is, and why they do not compare across borders. */
export const countryNote: Record<City['country'], L10n> = {
  FR: {
    en: 'Employment zones: INSEE localised unemployment rates, second quarter of 2026. They compare with one another, and sit slightly above or below the regional survey figures. Rents are asking rents per square metre, charges included (national rent map, third quarter of 2025).',
    fr: "Zones d'emploi : taux de chômage localisés de l'Insee, deuxième trimestre 2026. Ils se comparent entre eux et diffèrent légèrement des chiffres d'enquête régionaux. Les loyers sont des loyers d'annonce au mètre carré, charges comprises (carte nationale des loyers, troisième trimestre 2025).",
  },
  CA: {
    en: 'Metropolitan areas: Labour Force Survey, three-month average to October 2026. Smaller communities: Statistics Canada’s model-based small-area estimates for August 2026, shown with their 95% range, which is wide. The three territorial capitals have no figure of their own, so the territory-wide rate is shown. Rents are for a two-bedroom: the asking rent where it is published (second quarter of 2026), otherwise the average rent paid (October 2025).',
    fr: "Régions métropolitaines : Enquête sur la population active, moyenne de trois mois à octobre 2026. Petites communautés : estimations sur petits domaines de Statistique Canada, modélisées, pour août 2026, avec leur intervalle à 95 %, qui est large. Les trois capitales territoriales n'ont pas de chiffre propre : le taux du territoire entier est affiché. Les loyers portent sur un logement de deux chambres : loyer demandé quand il est publié (deuxième trimestre 2026), sinon loyer moyen payé (octobre 2025).",
  },
  CH: {
    en: 'Cantons: registered unemployment (SECO, October 2026). It counts people registered with an employment office and runs at about half the survey-based rate, so it does not compare with the other countries. Rents are those paid by sitting tenants (2024), well below what a newcomer is asked.',
    fr: "Cantons : chômage inscrit (SECO, octobre 2026). Il compte les personnes inscrites auprès d'un office de placement et vaut environ la moitié du taux d'enquête : il ne se compare donc pas aux autres pays. Les loyers sont ceux des locataires en place (2024), nettement inférieurs à ce qui est demandé à un nouvel arrivant.",
  },
  BE: {
    en: 'Provinces: survey-based unemployment rate, 2025. Rents: for Brussels, the median of new leases in the Region (2024); for Liège and Charleroi, medians for the wider urban area as reported in the press (2024), not checked at the source.',
    fr: "Provinces : taux de chômage d'enquête, 2025. Loyers : pour Bruxelles, la médiane des nouveaux baux de la Région (2024) ; pour Liège et Charleroi, des médianes de l'agglomération élargie reprises de la presse (2024), non vérifiées à la source.",
  },
  LU: {
    en: 'Luxembourg is a single labour market: the national rate is shown. The rent is the median asking rent per square metre in Luxembourg City (2025).',
    fr: "Le Luxembourg forme un seul marché du travail : le taux national est affiché. Le loyer est le loyer d'annonce médian au mètre carré à Luxembourg-Ville (2025).",
  },
};
