// "Before you move": rules and costs checked on official pages (second research round,
// November 2026). Every row here was read on a government or official-agency page, or is a
// simple computation from such figures; items known only from secondary sources are listed
// under `unconfirmed` and are not shown as facts.
import type { L10n } from './study';

type Row = { place: L10n; value: L10n };

export const health: Row[] = [
  {
    place: { en: 'Québec', fr: 'Québec' },
    value: {
      en: 'Up to 3 months after registration. No wait for people arriving from France, Belgium or Luxembourg (social security agreements), with a certificate from their home scheme. A work permit must be valid for more than 6 months.',
      fr: "Jusqu'à 3 mois après l'inscription. Aucun délai pour les personnes arrivant de France, de Belgique ou du Luxembourg (ententes de sécurité sociale), sur attestation de leur régime d'origine. Le permis de travail doit valoir plus de 6 mois.",
    },
  },
  {
    place: { en: 'Ontario', fr: 'Ontario' },
    value: {
      en: 'No waiting period since March 2020. A work permit holder needs a full-time job of at least 6 months.',
      fr: "Aucun délai depuis mars 2020. Le titulaire d'un permis de travail doit avoir un emploi à temps plein d'au moins 6 mois.",
    },
  },
  {
    place: { en: 'British Columbia', fr: 'Colombie-Britannique' },
    value: { en: 'Rest of the month of arrival plus 2 months.', fr: "Le reste du mois d'arrivée, plus 2 mois." },
  },
  {
    place: { en: 'Alberta', fr: 'Alberta' },
    value: { en: 'From arrival, if the application is made within 3 months.', fr: "Dès l'arrivée, si la demande est faite dans les 3 mois." },
  },
  {
    place: { en: 'Manitoba, New Brunswick, Nova Scotia, Newfoundland and Labrador', fr: 'Manitoba, Nouveau-Brunswick, Nouvelle-Écosse, Terre-Neuve-et-Labrador' },
    value: {
      en: 'No wait for people arriving from abroad who qualify (a work permit of 12 months is generally required).',
      fr: "Aucun délai pour les personnes admissibles arrivant de l'étranger (un permis de travail de 12 mois est généralement exigé).",
    },
  },
  {
    place: { en: 'Yukon', fr: 'Yukon' },
    value: { en: 'End of the second month after the month of arrival.', fr: "Fin du deuxième mois suivant le mois d'arrivée." },
  },
  {
    place: { en: 'France', fr: 'France' },
    value: { en: 'An employee is covered from the first day of work.', fr: 'Un salarié est couvert dès le premier jour de travail.' },
  },
  {
    place: { en: 'Switzerland', fr: 'Suisse' },
    value: {
      en: 'Three months to take out the mandatory insurance, which then applies from the day of arrival. Ordinary deductible 300 CHF; co-payment capped at 700 CHF a year for an adult.',
      fr: "Trois mois pour souscrire l'assurance obligatoire, qui s'applique alors dès le jour d'arrivée. Franchise ordinaire de 300 CHF ; quote-part plafonnée à 700 CHF par an pour un adulte.",
    },
  },
];

export const healthNote: L10n = {
  en: 'In Canada, public insurance does not cover prescription drugs outside hospital, dental or eye care for working-age adults. Québec requires drug insurance: the public plan costs up to 789 CAD a year in premium for anyone without a private plan.',
  fr: "Au Canada, l'assurance publique ne couvre ni les médicaments hors hôpital, ni les soins dentaires, ni l'optique pour les adultes en âge de travailler. Le Québec impose une assurance médicaments : le régime public coûte jusqu'à 789 CAD de prime par an à qui n'a pas d'assurance privée.",
};

/** Legal minimum after one year of employment: paid vacation days + paid public holidays. */
export const leave: { place: L10n; vacation: number; holidays: number; note?: L10n }[] = [
  { place: { en: 'Luxembourg', fr: 'Luxembourg' }, vacation: 26, holidays: 11, note: { en: 'holiday count not checked on the official page', fr: 'nombre de fériés non vérifié sur la page officielle' } },
  { place: { en: 'France', fr: 'France' }, vacation: 25, holidays: 11, note: { en: 'only 1 May is a compulsory day off', fr: 'seul le 1er mai est obligatoirement chômé' } },
  { place: { en: 'Belgium', fr: 'Belgique' }, vacation: 20, holidays: 10, note: { en: 'entitlement built on the previous year’s work', fr: "droits acquis sur le travail de l'année précédente" } },
  { place: { en: 'Switzerland (canton of Fribourg)', fr: 'Suisse (canton de Fribourg)' }, vacation: 20, holidays: 9, note: { en: 'holidays vary by canton', fr: 'fériés variables selon le canton' } },
  { place: { en: 'Saskatchewan', fr: 'Saskatchewan' }, vacation: 15, holidays: 10 },
  { place: { en: 'British Columbia', fr: 'Colombie-Britannique' }, vacation: 10, holidays: 11 },
  { place: { en: 'Northwest Territories', fr: 'Territoires du Nord-Ouest' }, vacation: 10, holidays: 11 },
  { place: { en: 'Canada, federally regulated jobs', fr: 'Canada, emplois de compétence fédérale' }, vacation: 10, holidays: 10 },
  { place: { en: 'Ontario', fr: 'Ontario' }, vacation: 10, holidays: 9, note: { en: '15 days after 5 years', fr: '15 jours après 5 ans' } },
  { place: { en: 'Alberta', fr: 'Alberta' }, vacation: 10, holidays: 9 },
  { place: { en: 'Manitoba', fr: 'Manitoba' }, vacation: 10, holidays: 9 },
  { place: { en: 'Nova Scotia', fr: 'Nouvelle-Écosse' }, vacation: 10, holidays: 6, note: { en: '15 days after 8 years', fr: '15 jours après 8 ans' } },
];

export const childcare: Row[] = [
  {
    place: { en: 'Québec', fr: 'Québec' },
    value: {
      en: '9.65 CAD a day in subsidised childcare in 2026. 30,688 children were waiting for a place in May 2025, the last figure published.',
      fr: "9,65 CAD par jour en service de garde subventionné en 2026. 30 688 enfants attendaient une place en mai 2025, dernier chiffre publié.",
    },
  },
  {
    place: { en: 'Ontario', fr: 'Ontario' },
    value: { en: 'Capped at 22 CAD a day, 19 CAD on average, in regulated childcare.', fr: 'Plafonné à 22 CAD par jour, 19 CAD en moyenne, en service réglementé.' },
  },
  {
    place: { en: 'Manitoba, Saskatchewan, Prince Edward Island, Newfoundland and Labrador, Nunavut', fr: 'Manitoba, Saskatchewan, Île-du-Prince-Édouard, Terre-Neuve-et-Labrador, Nunavut' },
    value: { en: '10 CAD a day.', fr: '10 CAD par jour.' },
  },
  { place: { en: 'Alberta', fr: 'Alberta' }, value: { en: '15 CAD a day; the federal agreement runs only to March 2027.', fr: "15 CAD par jour ; l'entente fédérale ne court que jusqu'en mars 2027." } },
  {
    place: { en: 'Luxembourg', fr: 'Luxembourg' },
    value: {
      en: '20 free hours a week for children aged 1 to 4, 46 weeks a year; free care and meals for school-age children during school weeks.',
      fr: "20 heures gratuites par semaine pour les enfants de 1 à 4 ans, 46 semaines par an ; accueil et repas gratuits pour les enfants scolarisés en période scolaire.",
    },
  },
  {
    place: { en: 'Geneva (city)', fr: 'Genève (ville)' },
    value: {
      en: 'Income-based: from 15 CHF to 265 CHF a month for each weekly day of attendance.',
      fr: 'Selon le revenu : de 15 CHF à 265 CHF par mois pour chaque jour de fréquentation hebdomadaire.',
    },
  },
];

export const costs: Row[] = [
  {
    place: { en: 'Canada, permanent residence', fr: 'Canada, résidence permanente' },
    value: {
      en: '1,590 CAD per adult (990 processing + 600 right of permanent residence) and 270 CAD per child: 3,720 CAD for a couple with two children.',
      fr: '1 590 CAD par adulte (990 de traitement + 600 de droit de résidence permanente) et 270 CAD par enfant : 3 720 CAD pour un couple avec deux enfants.',
    },
  },
  {
    place: { en: 'Canada, work permit', fr: 'Canada, permis de travail' },
    value: { en: '155 CAD, plus 100 CAD for an open permit; biometrics 85 CAD a person or 170 CAD a family.', fr: '155 CAD, plus 100 CAD pour un permis ouvert ; biométrie 85 CAD par personne ou 170 CAD par famille.' },
  },
  {
    place: { en: 'Canada, proof of funds', fr: 'Canada, preuve de fonds' },
    value: {
      en: 'Express Entry: 15,263 CAD for one person, 28,362 CAD for four. Francophone Community Immigration Pilot: 10,507 and 19,524 CAD. People already working in Canada are exempt.',
      fr: "Entrée express : 15 263 CAD pour une personne, 28 362 CAD pour quatre. Programme pilote d'immigration dans les communautés francophones : 10 507 et 19 524 CAD. Les personnes qui travaillent déjà au Canada en sont dispensées.",
    },
  },
  {
    place: { en: 'Québec, selection', fr: 'Québec, sélection' },
    value: { en: '940 CAD for the main applicant and 201 CAD per family member; 233 CAD for a temporary worker.', fr: '940 CAD pour le demandeur principal et 201 CAD par membre de la famille ; 233 CAD pour un travailleur temporaire.' },
  },
  {
    place: { en: 'France, residence permit', fr: 'France, titre de séjour' },
    value: { en: '350 € for a first permit and 250 € for a renewal (non-EU nationals).', fr: "350 € pour un premier titre et 250 € pour un renouvellement (ressortissants hors Union)." },
  },
  {
    place: { en: 'Rental deposit', fr: 'Dépôt de garantie' },
    value: {
      en: 'France: one month unfurnished, two furnished. Luxembourg: two months at most. Ontario: one month, usable only as the last month’s rent.',
      fr: "France : un mois en location vide, deux en meublé. Luxembourg : deux mois au plus. Ontario : un mois, utilisable seulement comme dernier mois de loyer.",
    },
  },
  {
    place: { en: 'Unemployment benefit', fr: 'Allocations de chômage' },
    value: {
      en: 'Can be carried for 3 months (up to 6) when moving within the EU and Switzerland. Nothing equivalent exists with Canada or Québec.',
      fr: "Exportables 3 mois (jusqu'à 6) lors d'un départ dans l'Union européenne ou en Suisse. Rien d'équivalent n'existe avec le Canada ou le Québec.",
    },
  },
];

export const pensions: L10n[] = [
  {
    en: 'Periods worked in several countries are added up to open the right to a pension, but each country pays only for the years worked there, by its own formula and at its own pension age. An agreement does not raise the amount.',
    fr: "Les périodes travaillées dans plusieurs pays s'additionnent pour ouvrir le droit à une pension, mais chaque pays ne paie que les années travaillées chez lui, selon sa formule et à son âge légal. Une entente n'augmente pas le montant.",
  },
  {
    en: 'France, Belgium, Luxembourg and Switzerland each have a social security agreement with Canada (covering Old Age Security and the Canada Pension Plan) and a separate understanding with Québec (covering the Québec Pension Plan).',
    fr: "La France, la Belgique, le Luxembourg et la Suisse ont chacun un accord de sécurité sociale avec le Canada (Sécurité de la vieillesse et Régime de pensions du Canada) et une entente distincte avec le Québec (Régime de rentes du Québec).",
  },
  {
    en: 'Canada’s Old Age Security requires 10 years of residence after age 18 and is paid in fortieths. Someone arriving at 50 and staying to 65 gets 15/40 of it: about 286 CAD a month at late-2026 rates (our computation).',
    fr: "La Sécurité de la vieillesse canadienne exige 10 ans de résidence après 18 ans et se calcule en quarantièmes. Une personne arrivée à 50 ans et restée jusqu'à 65 ans en touche 15/40 : environ 286 CAD par mois aux taux de fin 2026 (notre calcul).",
  },
  {
    en: 'Swiss occupational pension (second pillar): the mandatory part cannot be taken in cash when leaving for an EU country, but the whole balance can when leaving for Canada.',
    fr: "Prévoyance professionnelle suisse (deuxième pilier) : la part obligatoire ne peut pas être retirée en capital lors d'un départ vers un pays de l'Union, mais la totalité peut l'être lors d'un départ vers le Canada.",
  },
];

/** OECD, mandatory schemes, average earner, 2024; poverty at 66 and over, 2022. */
export const replacement = { cols: ['FR', 'BE', 'LU', 'CH', 'CA'], net: [70.0, 61.1, 87.7, 47.5, 45.1], poverty: [6.1, 7.7, 7.0, 18.8, 10.1] };

/** One-way minutes. Europe: all employed residents, 2019. Canada: commuters only, May 2025. */
export const commute = {
  europe: [
    { place: { en: 'France', fr: 'France' }, v: 26 },
    { place: { en: 'Switzerland', fr: 'Suisse' }, v: 26 },
    { place: { en: 'Belgium', fr: 'Belgique' }, v: 28 },
    { place: { en: 'Luxembourg', fr: 'Luxembourg' }, v: 29 },
  ],
  canada: [
    { place: { en: 'Québec City', fr: 'Québec (ville)' }, v: 21.2 },
    { place: { en: 'Ottawa–Gatineau', fr: 'Ottawa–Gatineau' }, v: 26.4 },
    { place: { en: 'Calgary', fr: 'Calgary' }, v: 27.7 },
    { place: { en: 'Montréal', fr: 'Montréal' }, v: 29.0 },
    { place: { en: 'Vancouver', fr: 'Vancouver' }, v: 31.1 },
    { place: { en: 'Toronto', fr: 'Toronto' }, v: 34.9 },
  ],
};

export const unconfirmed: L10n[] = [
  {
    en: 'Québec statutory leave (10 days after one year, 15 after three, 8 public holidays): known only from a search summary. The official labour-standards site blocks automated reading.',
    fr: "Congés légaux au Québec (10 jours après un an, 15 après trois ans, 8 jours fériés) : connus seulement par un résumé de moteur de recherche. Le site officiel des normes du travail bloque la lecture automatisée.",
  },
  {
    en: 'Statutory leave in New Brunswick, Prince Edward Island, Yukon and Nunavut; health-coverage rules in Saskatchewan, Prince Edward Island, the Northwest Territories and Nunavut.',
    fr: "Congés légaux au Nouveau-Brunswick, à l'Île-du-Prince-Édouard, au Yukon et au Nunavut ; règles de couverture santé en Saskatchewan, à l'Île-du-Prince-Édouard, aux Territoires du Nord-Ouest et au Nunavut.",
  },
  {
    en: 'Parent fee scales for childcare in France and in French-speaking Belgium; rental deposit rules in Québec and Switzerland; cost of an international removal.',
    fr: "Barèmes de participation des parents pour la garde en France et en Belgique francophone ; règles de dépôt de garantie au Québec et en Suisse ; coût d'un déménagement international.",
  },
  {
    en: 'Occupational and private pensions (transfer and taxation), and what a late mover’s total pension comes to: no study found.',
    fr: "Retraites professionnelles et privées (transfert et fiscalité), et le montant total de la pension d'une personne partie tard : aucune étude trouvée.",
  },
];
