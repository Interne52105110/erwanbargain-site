// Study dataset consumed by the profile picker and the territory tables.
// Figures live in generated.json, which scripts/build-data.mjs builds from the
// research extractions. Do not edit values by hand: rerun the script.
import generated from './generated.json';

export type L10n = { en: string; fr: string };
export type AgeId = '15-24' | '25-54' | '55-64' | 'all';
export type EduId = 'low' | 'mid' | 'high' | 'all';
/** ok = published; u = low reliability; calc = computed from published figures; avg = three-year average. */
export type Quality = 'ok' | 'u' | 'calc' | 'avg';

export interface Territory {
  id: string;
  country: 'FR' | 'BE' | 'LU' | 'CH' | 'CA';
  name: L10n;
  level: L10n;
  /** Commuters and outside applicants make resident-based figures understate competition. */
  open?: boolean;
  /** Region that is only partly French-speaking. */
  mixed?: boolean;
  /** Province hosting communities of the federal francophone programmes. */
  prog?: boolean;
}

export interface Indicator {
  id: string;
  label: L10n;
  unit: L10n;
  better: 'low' | 'high';
  def: L10n;
}

export interface Value { t: string; i: string; a: AgeId; e: EduId; v: number; p: string; s: string; q: Quality }

export interface Community {
  programmes: ('FCIP' | 'WFC')[];
  name: string;
  province: string;
  region: string;
  unemp: number | null;
  uv: number | null;
  vacancyRate: number | null;
  frenchAtWork: number | null;
}

export const ages: AgeId[] = ['15-24', '25-54', '55-64', 'all'];
export const edus: EduId[] = ['low', 'mid', 'high', 'all'];

export const indicators: Indicator[] = [
  {
    id: 'unemp',
    label: { en: 'Unemployment rate', fr: 'Taux de chômage' },
    unit: { en: '%', fr: '%' },
    better: 'low',
    def: {
      en: 'Share of the labour force without work, available and searching (ILO definition). Published by age and education.',
      fr: 'Part de la population active sans emploi, disponible et en recherche (définition du BIT). Publié par âge et diplôme.',
    },
  },
  {
    id: 'ltu',
    label: { en: 'Long-term share', fr: 'Part de longue durée' },
    unit: { en: '% of unemployed', fr: '% des chômeurs' },
    better: 'low',
    def: {
      en: 'Share of the unemployed who have been searching for a year or more. A high share means slow exits. All profiles together.',
      fr: "Part des chômeurs en recherche depuis un an ou plus. Une part élevée signale des sorties lentes. Tous profils confondus.",
    },
  },
  {
    id: 'slack',
    label: { en: 'Labour slack', fr: 'Sous-utilisation' },
    unit: { en: '% of extended labour force', fr: '% de la population active élargie' },
    better: 'low',
    def: {
      en: 'Unemployed, underemployed part-timers and people who want work but are not counted as searching. Europe only: the Canadian measure is built differently.',
      fr: "Chômeurs, temps partiels subis et personnes qui veulent travailler sans être comptées en recherche. Europe seulement : la mesure canadienne est construite autrement.",
    },
  },
];

export const meta = generated.meta;
export const territories = generated.territories as Territory[];
export const values = generated.values as Value[];
export const communities = generated.communities as Community[];
export const sources = generated.sources as Record<string, { label: string; url: string }>;
