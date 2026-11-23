import { meta, type L10n } from './study';

/** Where each indicator stands in this study. */
export type Status = 'site' | 'report' | 'context' | 'excluded';

export interface Row {
  indicator: L10n;
  measures: L10n;
  limit: L10n;
  status: Status;
}

// Ranking drawn from the literature review (job-search and matching models,
// OECD and ILO practice). The order is the study's synthesis, not a published standard.
export const ranking: Row[] = [
  {
    indicator: { en: 'Job-finding rate', fr: "Taux de sortie du chômage vers l'emploi" },
    measures: {
      en: 'The share of unemployed people who find work in a given month. The most direct measure of what a jobseeker faces.',
      fr: "La part des chômeurs qui trouvent un emploi dans le mois. La mesure la plus directe de ce que vit un chercheur d'emploi.",
    },
    limit: {
      en: 'Not published by region and profile. National estimates are computed from unemployment by duration; regional ones need survey microdata.',
      fr: "Non publié par région et par profil. Les estimations nationales se calculent à partir du chômage par durée ; au niveau régional, il faut les microdonnées d'enquête.",
    },
    status: 'report',
  },
  {
    indicator: { en: 'Long-term share of unemployment', fr: 'Part du chômage de longue durée' },
    measures: {
      en: 'The share of the unemployed searching for a year or more. The best published proxy for slow exits.',
      fr: "La part des chômeurs en recherche depuis un an ou plus. Le meilleur indicateur publié de sorties lentes.",
    },
    limit: {
      en: 'Rises with a delay after a downturn, and depends on who becomes unemployed, not only on how fast they leave.',
      fr: "Monte avec retard après un retournement, et dépend de qui entre au chômage, pas seulement de la vitesse de sortie.",
    },
    status: 'site',
  },
  {
    indicator: { en: 'Unemployment rate by age and education', fr: 'Taux de chômage par âge et diplôme' },
    measures: {
      en: 'The only indicator published for every territory by profile. It combines the risk of losing a job and the difficulty of finding one.',
      fr: "Le seul indicateur publié pour tous les territoires par profil. Il mêle le risque de perdre son emploi et la difficulté d'en retrouver un.",
    },
    limit: {
      en: 'A poor proxy for job finding on its own: gaps between local markets come largely from job loss, not from slower hiring.',
      fr: "Mauvais indicateur de l'accès à l'emploi s'il est pris seul : les écarts entre marchés locaux viennent en grande partie des pertes d'emploi, pas d'embauches plus lentes.",
    },
    status: 'site',
  },
  {
    indicator: { en: 'Broad labour underutilisation', fr: "Sous-utilisation élargie de la main-d'œuvre" },
    measures: {
      en: 'Adds involuntary part-timers and people who want work but are not counted as searching.',
      fr: 'Ajoute les temps partiels subis et les personnes qui veulent travailler sans être comptées en recherche.',
    },
    limit: {
      en: 'The European and Canadian measures are built differently and cannot be compared in level.',
      fr: 'Les mesures européenne et canadienne sont construites différemment et ne se comparent pas en niveau.',
    },
    status: 'site',
  },
  {
    indicator: { en: 'Gap for newcomers', fr: 'Écart pour les nouveaux arrivants' },
    measures: {
      en: 'Employment and unemployment of the foreign-born against natives, over-qualification, and correspondence tests on hiring.',
      fr: "Emploi et chômage des personnes nées à l'étranger par rapport aux natifs, déclassement, et tests de correspondance à l'embauche.",
    },
    limit: {
      en: 'No study isolates French speakers moving between French-speaking countries.',
      fr: 'Aucune étude ne porte sur les francophones qui passent d’un pays francophone à un autre.',
    },
    status: 'report',
  },
  {
    indicator: { en: 'Unemployed per vacancy', fr: 'Chômeurs par poste vacant' },
    measures: {
      en: 'How many unemployed residents there are for each open position.',
      fr: "Le nombre de chômeurs résidents pour chaque poste ouvert.",
    },
    limit: {
      en: 'Vacancy definitions differ by country, employed jobseekers are ignored, and the ratio breaks down wherever commuters and outside applicants compete.',
      fr: "Les définitions du poste vacant diffèrent selon les pays, les candidats déjà en poste sont ignorés, et le ratio ne tient plus dès que frontaliers et candidats extérieurs postulent.",
    },
    status: 'context',
  },
  {
    indicator: { en: 'Recruitment difficulties reported by employers', fr: 'Difficultés de recrutement déclarées par les employeurs' },
    measures: {
      en: 'Surveys and shortage lists: where employers say they struggle to hire.',
      fr: 'Enquêtes et listes de métiers en tension : là où les employeurs disent peiner à recruter.',
    },
    limit: {
      en: 'Each country has its own survey; levels are not comparable, and a shortage for employers is not an easy hire for every applicant.',
      fr: "Chaque pays a sa propre enquête ; les niveaux ne se comparent pas, et une pénurie pour l'employeur n'est pas une embauche facile pour tout candidat.",
    },
    status: 'context',
  },
  {
    indicator: { en: 'Applicants per online ad', fr: 'Candidats par offre en ligne' },
    measures: {
      en: 'The counter shown on job platforms.',
      fr: "Le compteur affiché par les plateformes d'emploi.",
    },
    limit: {
      en: 'For ads that send applicants to an external site, LinkedIn counts clicks on “apply”, not completed applications. Coverage varies by occupation and town size.',
      fr: "Pour les offres renvoyant vers un site externe, LinkedIn compte les clics sur « postuler », pas les candidatures abouties. La couverture varie selon le métier et la taille de la ville.",
    },
    status: 'excluded',
  },
];

export const statusLabel: Record<Status, L10n> = {
  site: { en: 'On this site', fr: 'Sur ce site' },
  report: { en: 'In the report', fr: 'Dans le rapport' },
  context: { en: 'Context only', fr: 'Contexte seulement' },
  excluded: { en: 'Not used', fr: 'Non retenu' },
};

export const caveats: L10n[] = [
  {
    en: 'Unemployment is measured at the place of residence. In Luxembourg, Geneva, Brussels and Île-de-France, a large share of jobs goes to people who live elsewhere, so resident figures understate the competition.',
    fr: "Le chômage est mesuré au lieu de résidence. Au Luxembourg, à Genève, à Bruxelles et en Île-de-France, une grande part des emplois revient à des personnes qui vivent ailleurs ; les chiffres des résidents sous-estiment donc la concurrence.",
  },
  {
    en: 'Survey rates and administrative counts are different things. Registered unemployment (France Travail, SECO, ADEM, Forem, Actiris) follows national rules and cannot be compared across countries.',
    fr: "Taux d'enquête et comptages administratifs sont deux choses différentes. Le chômage inscrit (France Travail, SECO, ADEM, Forem, Actiris) suit des règles nationales et ne se compare pas entre pays.",
  },
  {
    en: 'All French figures from Eurostat for 2025 carry a “definition differs” flag. They are shown as published.',
    fr: "Tous les chiffres français d'Eurostat pour 2025 portent la mention « définition différente ». Ils sont affichés tels que publiés.",
  },
  {
    en: 'In Canada the education groups do not match the European ones exactly. “Higher education” covers any postsecondary credential, including trades and college.',
    fr: "Au Canada, les groupes de diplôme ne correspondent pas exactement aux groupes européens. « Enseignement supérieur » y couvre tout diplôme postsecondaire, y compris métiers et collège.",
  },
  {
    en: 'The 25–54 band is not published by region and education in Europe. It is rebuilt here from the 25–34, 35–44 and 45–54 cells and marked as computed.',
    fr: "La tranche 25–54 ans n'est pas publiée par région et diplôme en Europe. Elle est reconstituée ici à partir des tranches 25–34, 35–44 et 45–54 et marquée comme calculée.",
  },
  {
    en: 'Occupation often matters more than age or diploma level. Official outlook tools score prospects by occupation; this study does not yet.',
    fr: "Le métier compte souvent plus que l'âge ou le niveau de diplôme. Les outils officiels de perspectives notent par métier ; cette étude ne le fait pas encore.",
  },
];

caveats.push({
  en: `Surveys publish no unemployment rate when too few people of a given age and education were interviewed in a territory. Those cells, marked ~, are estimated: the territory's own published rates (overall, by age, by education) are combined with the national pattern by age and education (EU-27 pattern for Luxembourg). Tested on the ${meta.modelCheck.cells} cells that are published, the method is off by ${meta.modelCheck.medianGap} point at the median and by less than ${meta.modelCheck.p90Gap} points nine times out of ten. An estimate cannot see what is specific to a territory beyond its overall rates.`,
  fr: `Les enquêtes ne publient pas de taux de chômage quand trop peu de personnes d'un âge et d'un diplôme donnés ont été interrogées dans un territoire. Ces cases, marquées ~, sont estimées : les taux publiés du territoire (ensemble, par âge, par diplôme) sont combinés à la structure nationale par âge et diplôme (structure de l'UE-27 pour le Luxembourg). Testée sur les ${meta.modelCheck.cells} cases publiées, la méthode s'écarte de ${String(meta.modelCheck.medianGap).replace('.', ',')} point en valeur médiane et de moins de ${String(meta.modelCheck.p90Gap).replace('.', ',')} points neuf fois sur dix. Une estimation ne voit pas ce qui est propre à un territoire au-delà de ses taux d'ensemble.`,
});
caveats.push({
  en: 'The share of searches lasting a year or more is not published for Corsica, Yukon, the Northwest Territories and Nunavut. On the home page their job score rests on unemployment alone. For the three territories, what is left after rent is on the favourable side: the wage is the median employment income of people working full time all year, the rent for Whitehorse and Iqaluit is a median of all home sizes read in the press coverage of the CMHC Northern Housing Report, and higher northern prices are not counted.',
  fr: "La part des recherches d'un an ou plus n'est pas publiée pour la Corse, le Yukon, les Territoires du Nord-Ouest et le Nunavut. Sur la page d'accueil, leur note d'emploi repose sur le chômage seul. Pour les trois territoires, le reste après loyer est favorable : le salaire est le revenu d'emploi médian des personnes à temps plein toute l'année, le loyer de Whitehorse et d'Iqaluit est une médiane toutes tailles de logement lue dans la presse sur le rapport de la SCHL sur le logement dans le Nord, et les prix plus élevés du Nord ne sont pas comptés.",
});
caveats.push({
  en: 'For Yukon, the Northwest Territories and Nunavut, no survey publishes unemployment by education. The profile shown there is modelled: the 2021 Census pattern by age and education, shifted by one constant per territory so that the overall rate matches the 2025 survey rate. Cells resting on fewer than 250 people are left out. Whether the pattern has stayed the same since 2021 has not been tested.',
  fr: "Pour le Yukon, les Territoires du Nord-Ouest et le Nunavut, aucune enquête ne publie le chômage par diplôme. Le profil affiché y est modélisé : la structure par âge et diplôme du Recensement de 2021, décalée d'une constante par territoire pour que le taux d'ensemble égale celui de l'enquête de 2025. Les cases reposant sur moins de 250 personnes sont écartées. La stabilité de cette structure depuis 2021 n'a pas été testée.",
});

caveats.push({
  en: 'The two reports and the data of this site went through an independent review in November 2026. About 45 headline figures were confirmed against the original sources, every computed table was recomputed, and 12 errors were found and corrected. The review did not cover everything: the parts it left out are listed in the review note.',
  fr: "Les deux rapports et les données de ce site ont fait l'objet d'un contrôle indépendant en novembre 2026. Environ 45 chiffres principaux ont été confirmés sur les sources d'origine, tous les tableaux calculés ont été recalculés, et 12 erreurs ont été relevées et corrigées. Le contrôle n'a pas tout couvert : les parties qu'il a laissées de côté sont listées dans la note de contrôle.",
});

caveats.push({
  en: 'The home page ranks territories by the objective you choose. Its "overall" score is a simple rule made for that page: it weighs money (what is left after rent) and job (unemployment for your profile and the share of long searches) equally. On each criterion territories are ranked from best to worst, and the score is the average of those positions. Other weights would give another order. Amounts are compared in euros at French prices, using OECD purchasing power parities.',
  fr: "La page d'accueil classe les territoires selon l'objectif que vous choisissez. Sa note de synthèse est une règle simple, propre à cette page : elle pèse à parts égales l'argent (ce qui reste après le loyer) et l'emploi (le chômage pour votre profil et la part des recherches longues). Sur chaque critère, les territoires sont classés du meilleur au moins bon, et la note est la moyenne de ces positions. D'autres pondérations donneraient un autre ordre. Les montants sont comparés en euros à prix français, avec les parités de pouvoir d'achat de l'OCDE.",
});

export const grades: { mark: string; text: L10n }[] = [
  { mark: '6.3', text: { en: 'Published by the statistical office.', fr: "Publié par l'office statistique." } },
  { mark: '6.3 · computed', text: { en: 'Computed here from published figures, with the method stated.', fr: 'Calculé ici à partir de chiffres publiés, avec la méthode indiquée.' } },
  { mark: '6.3*', text: { en: 'Published with a low-reliability flag: small sample.', fr: 'Publié avec une mention de fiabilité faible : petit échantillon.' } },
  { mark: '6.3 · 2023–2025', text: { en: 'The 2025 figure is withheld; the average of the published years is shown.', fr: 'Le chiffre 2025 est masqué ; la moyenne des années publiées est affichée.' } },
  { mark: '6.3~', text: { en: 'Modelled, not published: used only for the three Canadian territories.', fr: 'Modélisé, non publié : utilisé seulement pour les trois territoires canadiens.' } },
  { mark: '–', text: { en: 'Not published. The site falls back to the closest broader profile and says so.', fr: 'Non publié. Le site se replie sur le profil plus large le plus proche et le signale.' } },
];
