# Le loyer d'entrée redessine les écarts

> **Version corrigée le 23 novembre 2026** après un contrôle indépendant (voir `notes/Compléments et vérifications étude emploi/controle_des_rapports.md`). Cinq erreurs confirmées sont corrigées dans le texte. **Les tableaux « reste après loyer » de ce rapport sont remplacés** par un nouveau calcul sur salaires médians, avec l'impôt réel de chaque canton et de chaque province et les loyers d'entrée (voir `notes/Compléments et vérifications étude emploi/medians_impots_loyers_entree.md`) : c'est ce nouveau calcul que le site publie. Restent à reprendre, signalés par le contrôle : le revenu disponible de l'Île-de-France, l'affirmation sur l'avantage suisse « supérieur à 50 % », la phrase sur Paris « dans les deux variantes », la conclusion sur Bruxelles et Genève, et les étiquettes de quatre chiffres repris de la presse.


Entre territoires francophones d'Europe et du Canada, l'écart de salaire affiché surestime presque toujours ce qu'un arrivant gagne réellement, parce que quatre coins s'intercalent entre le brut et le niveau de vie : l'impôt, les prix, la prime maladie quand elle est hors impôt, et surtout le loyer payé par un nouveau locataire, supérieur de 20 à 50 % à celui des locataires en place là où le marché est tendu. Une fois l'impôt et les prix déduits, le salaire moyen local vaut, France = 100, 84 en Corse, 91 à 100 dans les autres régions françaises de province, 116 en Île-de-France, 101 en Wallonie, 113 à Bruxelles, 141 au Luxembourg, 173 à 176 en Suisse francophone, 102 au Québec et 111 en Ontario (calcul propre, moyennes 2022) ; la prime maladie obligatoire retire ensuite environ 8 % du net suisse. Après loyer d'entrée, la hiérarchie se déforme : à Paris, un célibataire au salaire moyen garde environ 970 € par mois si on lui applique le salaire national et 1 300 € avec le salaire francilien, moins que dans toutes les autres grandes villes françaises dans les deux variantes (1 635 à 2 070 € dans la première, 1 355 à 1 590 € dans la seconde), si bien que la prime salariale parisienne est entièrement absorbée ; l'avantage suisse et luxembourgeois résiste, mais sur des loyers suisses mesurés chez les locataires en place et avec 0,31 % de logements vacants à Genève. Les autres dimensions ne suivent pas la paie : l'Europe francophone offre plus de médecins (3,0 à 5,2 pour 1 000 habitants, hors Centre-Val de Loire, contre 2,1 à 2,7 dans les provinces canadiennes), une vie plus longue et environ deux fois plus de congés légaux (minimums en partie non vérifiés) ; le Québec offre de meilleurs scores PISA, le chômage de longue durée le plus rare et une garde d'enfants à tarif réduit (tarif non vérifié à la source officielle) ; la Suisse a la paie la plus haute mais la semaine la plus longue (43,3 heures), la garde la plus chère et les congés parentaux les plus courts. La littérature ajoute qu'un déménagement entre territoires riches n'apporte pas de gain durable de bien-être subjectif : les gains sont matériels, ciblés, et dépendent du profil. Le calcul reste fragile sur trois points assumés : des salaires moyens et non médians, un seul barème fiscal par pays fédéral (Zurich, Ontario), et des bases nettes en Europe contre brutes ou reconstruites au Canada. Ce rapport ne produit aucune note composite ; chaque chiffre est daté, sourcé et étiqueté, et une section liste les chiffres trouvés dans les sources qu'il ne faut pas publier.

**Conventions de lecture.** Données arrêtées au 22 novembre 2026. **[O]** = chiffre officiel, lu tel quel dans la source citée (fichier, API ou page de l'organisme). **[C]** = chiffre calculé pour ce rapport ou par les notes de recherche à partir de valeurs publiées ; la formule et les entrées sont indiquées. **[NV]** = non vérifié sur la source primaire : chiffre de source privée ou secondaire, chiffre d'un organisme public connu seulement par une reprise de presse ou un extrait de moteur de recherche, ou valeur reconstruite ; à ne pas reprendre comme un fait établi. Un calcul fondé sur une entrée [NV] est noté **[C sur NV]**. n.d. = non disponible. Les monnaies d'origine sont conservées (EUR, CHF, CAD) ; les conversions n'utilisent que les parités de pouvoir d'achat (PPA) de l'OCDE pour la consommation des ménages (1 USD = 0,717 EUR en France, 0,752 EUR en Belgique, 0,845 EUR au Luxembourg, 1,06 CHF, 1,24 CAD en 2024) ([OCDE, PPA](https://sdmx.oecd.org/public/rest/data/OECD.SDD.TPS,DSD_PPP@DF_PPP_PPP,1.1/all?startPeriod=2022)). Codes : régions françaises de 2016, Bruxelles-Capitale, Wallonie, Luxembourg, Région lémanique (Genève, Vaud, Valais), Espace Mittelland (Berne, Fribourg, Soleure, Neuchâtel, Jura), provinces et territoires canadiens. La difficulté de trouver un emploi, documentée dans un rapport antérieur, est rappelée ici par ses chiffres clés afin que ce document se lise seul.

## Cinq dimensions forment le noyau de tous les cadres, et le salaire nominal n'en mesure aucune correctement

### Sept cadres de référence, un noyau commun

Sept cadres institutionnels ont été confrontés : la commission Stiglitz-Sen-Fitoussi (2009), « How's Life? » de l'OCDE, l'outil OCDE Regional Well-Being, les indicateurs de qualité de vie d'Eurostat (« 8+1 »), l'indice européen de progrès social régional, le Cadre de qualité de vie du Canada et les dix « nouveaux indicateurs de richesse » de l'Insee. **Cinq dimensions forment le noyau commun : santé, éducation et environnement figurent dans les sept cadres ; le niveau de vie matériel et l'emploi dans tous sauf l'indice européen de progrès social, qui écarterait le revenu par construction [NV] et ne couvre l'emploi que partiellement.** La sécurité, le logement, les liens sociaux, la gouvernance et le bien-être subjectif figurent dans cinq ou six cadres sur sept ; l'équilibre entre travail et vie privée est présent au niveau national mais n'a pas d'indicateur régional comparable ([OCDE, guide Regional Well-Being, octobre 2025](https://www.oecdregionalwellbeing.org/assets/downloads/Regional-Well-Being-User-Guide.pdf) ; [Eurostat, qualité de vie](https://ec.europa.eu/eurostat/web/quality-of-life/methodology) ; [Statistique Canada, Carrefour de la qualité de vie](https://www.statcan.gc.ca/hub-carrefour/quality-life-qualite-vie/index-fra.htm) ; [Insee, indicateurs de richesse nationale](https://www.insee.fr/fr/statistiques/4277783)). La matrice ci-dessous est une synthèse des notes de recherche, pas un tableau publié par une institution ; la liste des huit dimensions de la commission Stiglitz n'a été confirmée que par des sources secondaires, et l'exclusion du revenu par l'indice européen de progrès social est un rappel non vérifié [NV].

| Dimension | Stiglitz 2009 | OCDE How's Life | OCDE régional | Eurostat 8+1 | EU-SPI | Canada | Insee (10) |
|---|---|---|---|---|---|---|---|
| Revenu, niveau de vie | oui | oui | oui | oui | non [NV] | oui | oui |
| Emploi | oui | oui | oui | oui | partiel | oui | oui |
| Santé | oui | oui | oui | oui | oui | oui | oui |
| Éducation | oui | oui | oui | oui | oui | oui | oui |
| Environnement | oui | oui | oui | oui | oui | oui | oui |
| Logement | dans le niveau de vie | oui | oui | dans le niveau de vie | oui | oui | non |
| Sécurité physique | oui | oui | oui | oui | oui | oui | non |
| Liens sociaux | oui | oui | oui | oui | partiel | oui | non |
| Bien-être subjectif | recommandé | oui | oui | oui | non | oui | oui |
| Équilibre travail-vie | dans les activités | oui | non (pas de donnée régionale) | oui | non | oui | non |

Seul le cadre régional de l'OCDE fournit des indicateurs au niveau infranational pour les cinq pays : Eurostat et l'indice européen ne couvrent pas le Canada, le cadre canadien ne couvre que le Canada, les indicateurs de l'Insee sont nationaux. Trois critères décisifs pour le public visé n'ont aucun indicateur régional harmonisé : les prix régionaux, le loyer de marché d'un arrivant et les services aux familles. Un quatrième, l'environnement linguistique, est absent de tous les cadres alors qu'il pèse lourd : au Canada, la qualité de vie révélée par les salaires et les loyers est la plus élevée à Montréal pour les francophones, à Victoria pour les anglophones ([Albouy, Leibovici et Warman 2013](https://www.nber.org/papers/w18103)).

### Pourquoi l'écart de salaire nominal surestime le gain réel

Dans le modèle d'équilibre spatial de Rosen (1979) et Roback (1982), les écarts de salaires entre lieux sont compensés par le coût du logement et par les aménités : un salaire élevé signale en partie une vie plus chère ou moins agréable. Ces deux références ne sont connues ici que par leurs détails bibliographiques, via une revue de littérature ([Blomquist 2006](https://gattonweb.uky.edu/faculty/blomquist/CompanionUrbanEcon%202006%20QOL%20chapter%20Blomquist.pdf)). Albouy montre qu'il faut corriger des impôts, des prix hors logement et des revenus non salariaux pour obtenir des estimations plausibles, et que les écarts de salaires et de loyers entre métropoles tiennent davantage à la productivité qu'à la qualité de vie ([Albouy 2008](https://www.nber.org/papers/w14472) ; [Albouy 2016](https://www.nber.org/papers/w14981) ; résumés lus). Les preuves récentes sont plus tranchées : les coûts du logement compensent au moins entièrement les primes salariales locales ([Card, Rothstein et Yi 2025](https://www.aeaweb.org/doi/10.1257/app.20220427)), et vivre dans la zone la plus chère plutôt que la moins chère réduit la consommation réelle des moins diplômés de 18,5 % à 26,9 % selon la version du document, alors que celle des diplômés du supérieur n'en dépend pas ([Diamond et Moretti](https://www.nber.org/papers/w29533)). Ces estimations sont américaines et espagnoles ; aucune estimation de type Rosen-Roback n'a été trouvée pour les régions françaises, belges, luxembourgeoises ou suisses, et le modèle suppose une mobilité forte, hypothèse moins tenable entre pays.

Les données réunies ici confirment le mécanisme par quatre coins mesurables. L'impôt d'abord : à 100 % du salaire moyen, un célibataire garde 81,9 % de son brut en Suisse, 74,4 % au Canada, 72,0 % en France, 68,0 % au Luxembourg et 60,5 % en Belgique en 2025 [C, à partir du taux moyen net de l'OCDE] ([OCDE, Taxing Wages](https://sdmx.oecd.org/public/rest/data/OECD.CTP.TPS,DSD_TAX_WAGES_COMP@DF_TW_COMP,2.1/all?startPeriod=2024)). Les prix ensuite : la consommation des ménages coûte 5 % de plus en Belgique qu'en France, 19 % de plus au Luxembourg et 55 % de plus en Suisse en 2025 [C, rapports des indices Eurostat 116,2 ; 131,5 ; 171,3 sur 110,3] ([Eurostat prc_ppp_ind_1](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/prc_ppp_ind_1?format=JSON&lang=EN&geo=FR&geo=BE&geo=LU&geo=CH&sinceTimePeriod=2024)) ; le Canada est entre 9 % (septembre 2026) et 17 % (année 2024) au-dessus de la France selon le millésime [O pour les indices, C pour le rapport] ([OCDE, niveaux de prix](https://sdmx.oecd.org/public/rest/data/OECD.SDD.TPS,DSD_PPP@DF_PPP_CPL,1.1/all?startPeriod=2022)). La prime maladie suisse vient en troisième : elle n'est pas un prélèvement public et échappe donc au « coin fiscal ». Le logement enfin, où la moyenne des résidents ne décrit pas le prix d'entrée. S'y ajoute le temps : un temps plein suisse compte 43,3 heures habituelles par semaine contre 39,9 en France et 38,6 au Québec [O], soit 9 % et 12 % d'heures en plus [C] ; un écart de salaire annuel n'est pas un écart de salaire horaire.

### Ce que gagnent réellement ceux qui partent

Les études avant-après ne promettent pas de gain durable de bien-être à qui change de région dans un pays riche. Au Royaume-Uni, sur douze vagues de panel, le bien-être baisse avant le déménagement, revient à son niveau initial l'année du départ, puis stagne ; les déménagements liés à l'emploi rendent plus heureux que les autres ([Nowok, van Ham, Findlay et Gayle 2013](https://research-repository.st-andrews.ac.uk/bitstream/10023/6563/1/vanHam_2013_EPA_Migration_AM.pdf), manuscrit lu). En Allemagne, les transitions de logement ont un effet essentiellement transitoire ([Clark et Diaz-Serrano](https://halshs.archives-ouvertes.fr/halshs-03230851v1/file/WP_202132_.pdf), extrait lu). À l'international, les migrants deviennent en moyenne 9 % plus heureux, presque tout le gain intervenant dans les cinq premières années, et il n'y a en général pas d'amélioration pour les mouvements entre pays riches comparables (États-Unis, Canada, Australie, Nouvelle-Zélande), selon le résumé qu'en donnent deux co-auteurs du chapitre concerné du World Happiness Report 2018 ([Gallup](https://news.gallup.com/opinion/gallup/230639/migrants-happier-move.aspx)) ; le chapitre lui-même n'a pas pu être lu.

Les preuves canadiennes vont dans le même sens : la satisfaction de vie des immigrants converge vers celle des autres Canadiens plutôt que vers celle de leur pays d'origine ([Helliwell, Shiplett et Bonikowska 2020](https://www.nber.org/papers/w22601), résumé lu), et l'écart entre villes canadiennes ne dépasse pas 0,44 point sur 10, d'environ 7,8 à Toronto et Vancouver à 8,2 à Saguenay ou Trois-Rivières sur 2009-2013 ([Lu, Schellenberg, Hou et Helliwell 2015](https://www150.statcan.gc.ca/n1/pub/11-626-x/11-626-x2015046-eng.htm)). Le niveau local de satisfaction est donc une information de contexte sur ce qu'un arrivant peut attendre à terme, pas un critère de classement fin ni un effet causal du lieu. Aucune étude avant-après n'a été trouvée pour la France, la Belgique, le Luxembourg ou la Suisse, et aucune ne mesure le rendement d'une mobilité entre territoires francophones par âge et par diplôme.

Sur le plan matériel, le cadre canonique traite la mobilité comme un investissement dont le rendement est le revenu espéré net de coûts croissants avec l'âge ([Sjaastad 1962](https://www.nber.org/chapters/c13573.pdf) ; [Kennan et Walker 2011](https://www.econometricsociety.org/publications/econometrica/2011/01/01/effect-expected-income-individual-migration-decisions)). Le gain est le mieux établi pour les jeunes diplômés, dont l'expérience acquise dans une grande ville reste valorisée après le départ ([De la Roca et Puga 2017](https://econpapers.repec.org/RePEc:oup:restud:v:84:y:2017:i:1:p:106-142)), et il se calcule au niveau du ménage : après un déménagement, les gains des hommes augmentent d'environ 10 % en Allemagne et 6 % en Suède, ceux des femmes presque pas ([Jayachandran et al. 2024](https://nber.org/system/files/working_papers/w32970/w32970.pdf)).

### Un tableau de bord, pas une note : carte de comparabilité des indicateurs

L'OCDE ne publie volontairement aucun indice composite régional et laisse l'utilisateur pondérer les thèmes ([OCDE, guide, p. 7](https://www.oecdregionalwellbeing.org/assets/downloads/Regional-Well-Being-User-Guide.pdf)) ; le manuel OCDE/JRC exige cadre théorique et analyse de sensibilité avant toute agrégation ([OCDE/JRC 2008](https://doi.org/10.1787/9789264043466-en), connu par ses détails bibliographiques et un diaporama de ses auteurs). Les scores de 0 à 10 de l'outil régional sont relatifs à l'ensemble des régions de l'OCDE : un score de revenu de 4,0 pour l'Île-de-France la situe à 40 % de l'intervalle entre la région la plus pauvre et la plus riche, pas à un niveau « médiocre ». Ce rapport présente donc des valeurs en unités naturelles et dit, pour chaque indicateur, à quelle échelle il se compare.

| Dimension | Comparable entre les cinq pays | Comparable en Europe seulement (France, Belgique, Luxembourg, Suisse) | Lisible à l'intérieur d'un pays seulement |
|---|---|---|---|
| Revenu | Passage du brut au net (Taxing Wages, un barème par pays), PPA et niveaux de prix nationaux, gains relatifs par diplôme (OCDE), revenu disponible par habitant (base régionale OCDE, sauf Suisse) | Salaires de l'enquête sur la structure des salaires 2022 par région, diplôme et âge ; revenu disponible régional en standard de pouvoir d'achat (sans la Suisse) ; taux de pauvreté à 60 % de la médiane nationale | Salaires nets Insee, médianes de l'OFS, salaires de l'enquête canadienne sur la population active, mesure du panier de consommation, salaires minimums |
| Logement | Indices OCDE de prix réels, prix/revenu, prix/loyer (en évolution et en écart à la moyenne de long terme) ; pièces par personne et satisfaction (fichier régional OCDE) | Surcharge des coûts du logement, surpeuplement, statut d'occupation (EU-SILC, niveau pays) | Loyers, prix d'achat, vacance, files d'attente, ratios loyer/revenu calculés, besoins impérieux (Canada) |
| Santé | Espérance de vie, mortalité infantile, médecins pour 1 000 habitants (série régionale OCDE), structure du financement (comptes de la santé) | Années de vie en bonne santé, besoins non satisfaits, mortalité évitable | Prestataire de soins habituel (Canada), primes par canton (Suisse), délais de carence |
| Famille | Coût net de la garde (modèle OCDE, une région par pays fédéral), congés payés (base Famille de l'OCDE), dépenses publiques, fécondité | Accueil formel des moins de 3 ans | Tarifs de garde par province, régime québécois d'assurance parentale |
| Éducation | PISA, part de diplômés du supérieur chez les 25-34 ans | Sorties précoces des 18-24 ans | Droits d'inscription, école de langue française hors Québec |
| Vie quotidienne | Taux d'homicides, PM2,5, heures habituelles (tranches d'âge différentes), satisfaction de vie Gallup du fichier régional OCDE | Vols et cambriolages enregistrés, satisfaction de vie EU-SILC | Indice de gravité de la criminalité (Canada), satisfaction de vie de l'Enquête sociale canadienne, congés légaux |

## Revenu : impôt et prix déduits, le salaire moyen va de 84 en Corse à 176 sur l'arc lémanique (France = 100)

### Ce qui se compare et ce qui ne se compare pas

Trois blocs sont réellement harmonisés : l'enquête européenne sur la structure des salaires 2022 (moyennes brutes, entreprises de 10 salariés ou plus, hors administration publique, au lieu de travail), Taxing Wages de l'OCDE pour le passage au net, et les parités de pouvoir d'achat. Tout le reste mesure des objets différents : l'Insee publie des salaires nets de cotisations mais avant impôt, l'OFS des médianes brutes standardisées par grande région, Statistique Canada des salaires de tous les salariés au lieu de résidence. Aucune source harmonisée ne donne de médiane régionale pour les régions françaises et belges. Un classement fin entre régions françaises de province, dont les écarts sont de 1 à 3 %, n'a donc pas de sens, et la comparaison Europe-Canada est la plus fragile du rapport ([Eurostat earn_ses22_rann](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/earn_ses22_rann?format=JSON&lang=EN) ; [Statistique Canada 14-10-0064-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410006401) ; [Insee](https://www.insee.fr/fr/statistiques/8733103)).

### Tableau par territoire

| Territoire | Salaire brut annuel moyen 2022 (monnaie nationale) | Salaire moyen net d'impôt et corrigé des prix, France = 100 [C] | Revenu disponible des ménages par habitant, USD PPA (OCDE) [O] | Pauvreté monétaire, % [O] (Europe : seuil à 60 % de la médiane nationale, enquête 2025 ; Canada : mesure du panier de consommation, 2024) |
|---|---|---|---|---|
| Île-de-France | 51 701 EUR [O] | 116 (123 sans correction des prix régionaux) | 41 188 (2023) | 16,9 |
| Centre-Val de Loire | 36 012 [O] | 91 | 32 624 (2023) | 11,0 |
| Bourgogne-Franche-Comté | 35 889 [O] | 91 | 31 857 (2023) | 15,7 |
| Normandie | 35 783 [O] | 91 | 32 101 (2023) | 13,0 |
| Hauts-de-France | 35 924 [O] | 91 | 29 736 (2023) | 19,5 |
| Grand Est | 37 313 [O] | 94 | 31 678 (2023) | 15,4 |
| Pays de la Loire | 35 602 [O] | 91 | 32 416 (2023) | 11,5 |
| Bretagne | 35 902 [O] | 91 | 32 776 (2023) | 10,6 |
| Nouvelle-Aquitaine | 35 734 [O] | 91 | 32 909 (2023) | 14,8 |
| Occitanie | 36 622 [O] | 93 | 31 934 (2023) | 19,6 |
| Auvergne-Rhône-Alpes | 39 379 [O] | 99 | 33 900 (2023) | 14,6 |
| Provence-Alpes-Côte d'Azur | 39 798 [O] | 100 | 35 972 (2023) | 16,1 |
| Corse | 35 152 [O] | 84 (88 sans correction) | 33 603 (2023) | 23,6 |
| Bruxelles-Capitale | 59 438 [O] | 113 | 33 735 (2024) | 23,3 |
| Wallonie | 50 648 [O] | 101 | 34 535 (2024) | 13,4 |
| Luxembourg | 74 542 [O] | 141 | 48 778 (2024) | 14,8 (rupture de série) |
| Région lémanique | 97 011 CHF [C] | 176, avant prime maladie | inutilisable (voir anomalies) | 19,0 (2024) |
| Espace Mittelland | 95 637 CHF [C] | 173, avant prime maladie | inutilisable | 16,1 (2024) |
| Québec | 65 187 CAD [C] | 102 | 30 966 (2024) | 7,0 (panier) |
| Nouveau-Brunswick | 59 186 [C] | 93 | 30 714 (2024) | 9,9 |
| Ontario | 71 575 [C] | 111 | 33 464 (2024) | 12,5 |
| Manitoba | 61 122 [C] | 96 | 29 897 (2024) | 12,3 |
| Saskatchewan | 67 754 [C] | 106 | 33 172 (2024) | 11,6 |
| Alberta | 75 177 [C] | 116 | 37 318 (2024) | 11,0 |
| Colombie-Britannique | 71 400 [C] | 111 | 36 546 (2024) | 13,0 |
| Nouvelle-Écosse | 59 442 [C] | 94 | 31 005 (2024) | 10,9 |
| Île-du-Prince-Édouard | 58 172 [C] | 92 | 31 273 (2024) | 10,0 |
| Terre-Neuve-et-Labrador | 66 621 [C] | 104 | 33 359 (2024) | 10,4 |
| Yukon | n.d. | n.d. | 43 938 (2024) | 11,8 |
| Territoires du Nord-Ouest | n.d. | n.d. | 46 154 (2024) | 10,0 |
| Nunavut | n.d. | n.d. | 29 152 (2024) | 31,7 |

Sources : salaires européens [O] ([Eurostat earn_ses22_rann](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/earn_ses22_rann?format=JSON&lang=EN)) ; régions suisses [C] = moyenne suisse (96 147 CHF) × médiane régionale 2022 / médiane suisse 2022 ([OFS, tableau 204](https://www.pxweb.bfs.admin.ch/pxweb/fr/px-x-0304010000_204/px-x-0304010000_204/px-x-0304010000_204.px/)) ; Canada [C] = salaire hebdomadaire moyen à temps plein 2022 × 52 ([Statistique Canada 14-10-0064-01](https://www150.statcan.gc.ca/n1/tbl/csv/14100064-eng.zip)) ; revenu disponible ([OCDE, base régionale](https://sdmx.oecd.org/public/rest/data/OECD.CFE.EDS,DSD_REG_ECO@DF_INC,2.4/all?startPeriod=2020), valeurs françaises 2023 provisoires) ; pauvreté européenne, enquête 2025 ([Eurostat ilc_li41](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/ilc_li41?format=JSON&lang=EN&sinceTimePeriod=2023)) ; pauvreté canadienne 2024 ([Statistique Canada 11-10-0135-01](https://www150.statcan.gc.ca/n1/tbl/csv/11100135-eng.zip)). L'indice de la troisième colonne est détaillé plus bas, avec ses entrées.

**Comparabilité.** La colonne des salaires bruts se compare en Europe (même enquête), pas avec le Canada (tous employeurs, au lieu de résidence). L'indice net réel est le seul pont entre les cinq pays, au prix des hypothèses listées dans la section de calcul. Le revenu disponible par habitant se compare entre pays mais ne décrit pas un salaire : il inclut loyers imputés, transferts et revenus du patrimoine, et sa conversion repose sur une PPA nationale qui ne corrige ni la cherté de l'Île-de-France ni celle de Genève. Les taux de pauvreté ne se comparent pas entre l'Europe (seuil relatif à 60 % de la médiane nationale) et le Canada (panier de consommation régionalisé), et les taux régionaux européens mesurent une position dans la distribution du pays, pas un niveau de vie.

Trois lectures s'imposent. Bruxelles et l'Île-de-France sont des lieux de travail : Bruxelles affiche les salaires les plus élevés de Belgique mais le revenu par habitant le plus bas, parce que ces salaires sont en partie gagnés par des navetteurs et que le taux d'emploi des résidents est faible. En Suisse, il n'existe pas de prime salariale francophone : les médianes mensuelles brutes 2024 de la Région lémanique (6 998 CHF) et de l'Espace Mittelland (6 964 CHF) sont à moins de 1 % de la médiane nationale (7 024 CHF) [O]. Au Canada, en dollars PPA, le revenu disponible par habitant des provinces (30 000 à 37 000) est au niveau des régions françaises de province, loin du Luxembourg.

### Par diplôme et par âge

| Net annuel en USD PPA, 2022 [C] | France | Belgique | Luxembourg | Suisse (avant prime maladie) |
|---|---|---|---|---|
| Inférieur au second cycle du secondaire (CITE 0-2) | 30 636 | 34 087 | 40 270 | 50 919 |
| Secondaire (CITE 3-4) | 33 106 | 36 973 | 49 593 | 60 854 |
| Supérieur (CITE 5-8) | 48 397 | 48 656 | 70 406 | 90 773 |
| Moins de 30 ans | 29 347 | 32 660 | 43 712 | 52 448 |
| 30-49 ans | 40 449 | 41 034 | 57 612 | 70 342 |
| 50 ans et plus | 45 252 | 47 751 | 63 419 | 76 519 |

Calcul : brut annuel du profil = moyenne annuelle nationale × salaire mensuel moyen du profil / salaire mensuel moyen d'ensemble (enquête 2022, [Eurostat earn_ses22_23](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/earn_ses22_23?format=JSON&lang=EN&geo=FR&geo=BE&geo=LU&geo=CH&nace_r2=B-S_X_O&sex=T) et [earn_ses22_20](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/earn_ses22_20?format=JSON&lang=EN&geo=FR&geo=BE&geo=LU&geo=CH&nace_r2=B-S_X_O&sex=T)), barème du célibataire sans enfant de Taxing Wages 2022, PPA 2022. Niveau national seulement ; le détail régional par diplôme n'existe ni en France ni en Belgique.

**Pour un diplômé du supérieur, la Belgique n'offre aucun gain net réel sur la France (48 656 contre 48 397) : la progressivité de l'impôt belge efface l'écart de brut.** Le gain belge existe pour les peu diplômés et les jeunes (+11 %). Le Luxembourg rapporte de +31 % (peu diplômés) à +50 % (secondaire) de plus que la France ; la Suisse de +66 % (peu diplômés) à +88 % (supérieur), avant prime maladie. L'avantage du diplôme du supérieur sur le secondaire est le plus fort en France (indice 180, secondaire = 100) et le plus faible au Canada (145), avec la Belgique (151), la Suisse (153) et le Luxembourg (155) entre les deux [O] ([OCDE, Regards sur l'éducation](https://sdmx.oecd.org/public/rest/data/OECD.EDU.IMEP,DSD_EAG_LSO_EA@DF_LSO_EARN_REL_UPPER,1.0/all?startPeriod=2019)) ; symétriquement, un non-diplômé perd moins par rapport au secondaire au Canada (85) et en Suisse (82) qu'en France (69). Le profil par âge est le plus pentu en Belgique, où le salaire horaire médian des 50 ans et plus dépasse de 66 % celui des moins de 30 ans, contre 30 % en France, 37 % au Luxembourg et 34 % en Suisse [C] ([Eurostat earn_ses_pub2a](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/earn_ses_pub2a?format=JSON&lang=EN&geo=FR&geo=BE&geo=LU&geo=CH&sinceTimePeriod=2022)).

Au Canada, aucun tableau de salaires par diplôme et par province n'a été trouvé ; seul l'âge est disponible. Le salaire horaire médian à temps plein 2025 est de 33,00 CAD au Québec (23,05 pour les 15-24 ans, 35,00 pour les 25-54 ans, 31,00 pour les 55 ans et plus), 34,62 en Ontario (22,00 ; 36,92 ; 33,65), 28,85 au Nouveau-Brunswick (21,00 ; 31,00 ; 27,14) et 35,00 en Colombie-Britannique [O] ([Statistique Canada 14-10-0064-01](https://www150.statcan.gc.ca/n1/tbl/csv/14100064-eng.zip)). À la différence de l'Europe, les 55 ans et plus y gagnent moins que les 25-54 ans (−11 % au Québec [C]). Dans les trois territoires, absents de ce tableau, le revenu d'emploi médian des 25-54 ans atteint 71 800 CAD au Yukon, 84 800 dans les Territoires du Nord-Ouest et 76 800 au Nunavut en 2024, contre 58 600 au Canada [O] ([Statistique Canada 11-10-0239-01](https://www150.statcan.gc.ca/n1/tbl/csv/11100239-eng.zip)).

### Frontaliers, bas salaires et patrimoine

Le frontalier cumule le salaire d'un pays et les prix d'un autre. Un résident du nord de la Lorraine employé à temps plein au Luxembourg gagne en moyenne 47 720 EUR par an contre 28 990 EUR pour son voisin employé en France, soit un rapport de 1,65 (revenus nets de cotisations, 2019-2020) ; le rapport est de 1,49 sans diplôme, 1,67 à bac+2, 1,71 à bac+3 ou 4 et 1,48 à bac+5 [O] ([Insee Analyses Grand Est n° 205](https://www.insee.fr/fr/statistiques/8669660)). En Suisse, le salaire brut médian des frontaliers est de 6 565 CHF par mois en Région lémanique contre 7 632 pour les Suisses et 5 897 pour les titulaires d'un permis B en 2024 [O] ([OFS, tableau 203](https://www.pxweb.bfs.admin.ch/pxweb/fr/px-x-0304010000_203/px-x-0304010000_203/px-x-0304010000_203.px/)). Aucune estimation officielle nette (après impôt, assurance maladie et transport) de l'avantage frontalier vers la Suisse n'a été trouvée.

La part des bas salaires est deux fois plus faible en France (9,7 %) et en Suisse (9,6 %) qu'en Belgique (15,9 %) ou au Luxembourg (14,0 %) en 2022 [O] ([Eurostat earn_ses_pub1s](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/earn_ses_pub1s?format=JSON&lang=EN&geo=FR&geo=BE&geo=LU&geo=CH&sinceTimePeriod=2022)). Le salaire minimum mensuel brut est de 1 867 EUR en France, 2 234 EUR en Belgique et 2 771 EUR au Luxembourg au second semestre 2026, soit 1 692, 1 922 et 2 108 en standard de pouvoir d'achat [O] ([Eurostat earn_mw_cur](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/earn_mw_cur?format=JSON&lang=EN&geo=FR&geo=BE&geo=LU&sinceTimePeriod=2026-S1)) ; Genève impose 24,59 CHF de l'heure en 2026 [O] ([canton de Genève](https://www.ge.ch/actualite/salaire-minimum-genevois-2026-etablira-2459-fr-heure-1-10-2025)), tandis que les minimums canadiens (16,60 CAD au Québec, 17,95 en Ontario) viennent en partie de sources secondaires [NV]. Le patrimoine net médian par ménage (125 700 EUR en France, 242 400 EUR en Belgique, 717 700 EUR au Luxembourg, 428 300 CAD au Canada dans la base harmonisée de l'OCDE [O], [OCDE](https://sdmx.oecd.org/public/rest/data/OECD.WISE.INE,DSD_WEALTH@DF_WEALTH,1.0/all?startPeriod=2016)) reflète surtout la propriété immobilière : un arrivant n'en hérite pas, et la Suisse est absente de la base.

## Logement : le nouvel arrivant paie 20 à 50 % de plus que le locataire en place

### Loyer d'entrée contre loyer en place : le fait central

Les statistiques de loyers les plus citées mélangent des baux anciens et protégés. Pour un arrivant, la bonne référence est le loyer demandé. Trois mesures officielles permettent de chiffrer l'écart, chacune dans son pays.

| Lieu | Loyer en place | Loyer d'entrée | Écart | Statut |
|---|---|---|---|---|
| Canton de Vaud, 3 pièces, 2024 | 1 092 CHF (bail de 20 ans et plus) | 1 673 CHF (emménagement d'un an ou moins) | +53 % | [O] |
| Luxembourg-Ville | 25,56 EUR/m² (médiane en cours de bail) | 39,1 EUR/m² (médiane annoncée 2025) | +53 % | [C sur NV] : le loyer en cours de bail n'est connu que par un résumé ; champs et dates différents |
| Montréal, deux chambres, T2 2026 | 1 360 CAD | 1 820 CAD | +34 % | [O expérimental] pour les loyers, [C] pour l'écart |
| Sherbrooke | 960 | 1 300 | +35 % | idem |
| Grand Sudbury | 1 400 | 1 940 | +39 % | idem |
| Halifax | 1 770 | 2 400 | +36 % | idem |
| Toronto ; Vancouver ; London ; Gatineau | 2 160 ; 2 470 ; 1 560 ; 1 370 | 2 650 ; 3 030 ; 1 920 ; 1 700 | +23 % ; +23 % ; +23 % ; +24 % | idem |
| Québec (ville) | 1 230 | 1 460 | +19 % | idem |
| Winnipeg ; Saskatoon | 1 550 ; 1 470 | 1 660 ; 1 620 | +7 % ; +10 % | idem |
| Calgary ; Edmonton ; Regina | 1 930 ; 1 570 ; 1 580 | 1 890 ; 1 570 ; 1 480 | −2 % ; 0 % ; −6 % | idem |
| Nancy | 10,1 EUR/m² (locataires stables) | 11,0 EUR/m² (nouveaux locataires) | +9 % | [NV, via reprise] |

Sources : [Statistique Vaud, Numerus n° 8, novembre 2026](https://www.vd.ch/fileadmin/user_upload/organisation/dfin/statvd/Publications/Numerus/Numerus-08-2026_Loyers.pdf) ; [Observatoire de l'Habitat, loyers annoncés 2025](https://gouvernement.lu/dam-assets/images-documents/actualites/2026/09-septembre/30-observatoire-habitat/rapport-loyers-annoncs-en-2025.pdf) et [rapport d'analyse n° 24](https://gouvernement.lu/dam-assets/images-documents/actualites/2026/06-juin/05-mlog-cadastre-loyers/rapport-danalyse-24.pdf) ; [Statistique Canada 46-10-0092](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=4610009201) (séries « loyer payé » et « loyer demandé » de la même source ; la définition exacte de la série « payé » n'a pas été relue) ; [Métropole du Grand Nancy](https://mhdd.grandnancy.eu/fileadmin/MHDD/PDF/DH_infos/2026_Cahier_69_OLL.pdf).

Au Canada, l'écart se resserre : l'indice des loyers demandés (T1 2024 = 100) est tombé à 89,8 à Vancouver, 93,7 à Toronto et 99,0 à Montréal au 4e trimestre 2025, pendant que les loyers moyens payés continuent de monter [O] ([SCHL, mi-année 2026](https://www.cmhc-schl.gc.ca/observer/2026/2026-mid-year-rental-market-update)). L'écart est déjà nul ou négatif dans les Prairies. En France, la « Carte des loyers » donne par construction un loyer de nouveau locataire ; les loyers de stock des observatoires locaux n'ont pas été extraits, ce qui empêche de chiffrer l'écart ville par ville.

### Villes françaises

| Ville | Loyer d'annonce, tous appartements, EUR/m² charges comprises (T3 2025) | 1-2 pièces, EUR/m² | Loyer de 52 m², EUR/mois [C] | Part du salaire net national, à 100 % / 67 % du salaire moyen [C] | Prix médian de l'ancien, EUR/m² (T4 2025) [NV, via reprise] | Prix de 52 m² en années de salaire net [C sur NV] |
|---|---|---|---|---|---|---|
| Paris | 33,1 [C] | 35,3 | 1 721 | 63,9 % / 87,4 % | 9 600 | 15,4 |
| Nice | 20,4 [O] | 22,7 | 1 061 | 39,4 % / 53,9 % | 4 890 | 7,9 |
| Lyon | 16,6 [C] | 19,2 | 863 | 32,0 % / 43,8 % | 4 490 | 7,2 |
| Marseille | 16,2 [C] | 18,6 | 842 | 31,3 % / 42,8 % | 3 340 | 5,4 |
| Bordeaux | 16,0 [O] | 18,5 | 832 | 30,9 % / 42,2 % | 4 140 | 6,7 |
| Lille | 15,8 [O] | 18,1 | 822 | 30,5 % / 41,7 % | n.d. | n.d. |
| Strasbourg | 15,6 [O] | 18,2 | 811 | 30,1 % / 41,2 % | 3 570 | 5,7 |
| Montpellier | 15,5 [O] | 17,9 | 806 | 29,9 % / 40,9 % | 3 190 | 5,1 |
| Rennes | 14,9 [O] | 17,2 | 775 | 28,7 % / 39,3 % | 3 730 | 6,0 |
| Nantes | 14,5 [O] | 16,6 | 754 | 28,0 % / 38,3 % | 2 830 (valeur douteuse) | 4,5 |
| Toulouse | 14,0 [O] | 16,3 | 728 | 27,0 % / 37,0 % | 3 090 | 5,0 |
| Brest | 12,2 [O] | 15,3 | 634 | 23,5 % / 32,2 % | n.d. | n.d. |
| Quimper | 12,0 [O] | 13,9 | 624 | 23,1 % / 31,7 % | n.d. | n.d. |

Sources et méthode : loyers d'annonce prédits, logements non meublés, charges comprises ([ANIL et ministère du Logement, Carte des loyers 2025](https://www.data.gouv.fr/datasets/693aa2feed1bf4da603faa49/)) ; Paris, Lyon et Marseille sont des moyennes simples d'arrondissements [C] ; ce sont des indicateurs modélisés, pas des médianes observées. Salaire net du célibataire sans enfant : 2 695 EUR par mois à 100 % du salaire moyen et 1 970 EUR à 67 % en 2025 [O] ([Eurostat earn_nt_net](https://ec.europa.eu/eurostat/databrowser/view/earn_nt_net/default/table)), le même salaire national étant appliqué à toutes les villes. Prix : note de conjoncture des Notaires de France n° 71, reprise par un site tiers ([Mon Chasseur Immo](https://www.monchasseurimmo.com/actualites-immobilieres/marche-immobilier-4e-trimestre-2025-notaires-prix-volumes)). Dans les autres chefs-lieux relevés, le loyer d'annonce va de 10,4 EUR/m² à Limoges à 14,6 à Angers ; Ajaccio est à 15,2 [O].

### Bruxelles, Wallonie, Luxembourg

| Lieu | Loyer d'entrée | Part du salaire net national, 100 % / 67 % [C] | Prix d'achat |
|---|---|---|---|
| Région de Bruxelles-Capitale | 980 EUR, médiane des nouveaux baux 2024 [O ; montants lus via reprise de presse] | 32,6 % / 41,5 % | Appartement médian 275 000 EUR (1er semestre 2026) [NV, via presse], soit 7,6 années de salaire net [C sur NV] |
| Complexe urbain de Bruxelles | 920 EUR [NV, via presse] | 30,6 % / 39,0 % | Maison médiane 369 000 EUR (2024) [O] |
| Wallonie | 750 EUR, médiane des nouveaux baux 2024 [O ; idem] | 24,9 % / 31,8 % | Appartement ou maison mitoyenne 195 000 EUR (1er semestre 2026) [NV], 5,4 années [C sur NV] |
| Complexe urbain de Liège ; de Charleroi | 750 EUR ; 695 EUR [NV, via presse] | 24,9 % / 31,8 % ; 23,1 % / 29,4 % | Hainaut : 170 000 EUR [NV] |
| Arlon et Wallonie proche du Luxembourg | 12,0 EUR/m² à Arlon, 10,0 EUR/m² et 850 EUR en médiane de zone (annonces 2025) [O] | — | Terrain à bâtir : 88 EUR/m² en province de Luxembourg [O] |
| Luxembourg (pays) | 1 700 EUR, médiane annoncée 2025 ; 33,3 EUR/m² [O] | 36,5 % / 47,5 % | 7 712 EUR/m² affichés pour les appartements existants [O, lecture partielle : segment à confirmer], soit 7,2 années pour 52 m² [C] ; terrain 905 EUR/m² [O] |
| Luxembourg-Ville | 39,1 EUR/m² en médiane annoncée, soit 1 955 EUR pour 50 m² [O ; C] | 42,0 % / 54,7 % | n.d. |
| Esch-sur-Alzette | 32,2 EUR/m² (surface médiane 42 m²) [O] | — | n.d. |
| Metz ; Thionville (côté français) | 15,0 ; 16,0 EUR/m² [O] | — | Terrain 167 EUR/m² dans l'agglomération de Longwy [O] |

Sources : [IBSA, Cahier n° 16, 23 avril 2026](https://ibsa.brussels/sites/default/files/2026-04/CP_Cahier16_FR.pdf) ; [DH](https://www.dhnet.be/regions/bruxelles/bruxelles-mobilite/2026/04/23/louer-un-logement-dans-le-grand-bruxelles-coute-23-de-plus-que-dans-le-grand-liege-4FCDLGI7VZF7THIOH6JS4M6KJI/) ; [BX1](https://bx1.be/?p=831775) ; [Observatoire de l'Habitat, 30 septembre 2026](https://gouvernement.lu/dam-assets/images-documents/actualites/2026/09-septembre/30-observatoire-habitat/rapport-loyers-annoncs-en-2025.pdf) ; [Le Logement en chiffres n° 20](https://gouvernement.lu/dam-assets/images-documents/actualites/2026/09-septembre/24-logement-en-chiffres-n20/logement-en-chiffre-20.pdf). Salaires nets : Belgique 2024, 3 009 et 2 361 EUR par mois ; Luxembourg 2025, 4 656 et 3 576 EUR [O] ([Eurostat earn_nt_net](https://ec.europa.eu/eurostat/databrowser/view/earn_nt_net/default/table)). D'autres mesures bruxelloises reprises par la presse (loyer moyen de 1 321 EUR, médiane d'appartement de 1 160 EUR en 2024), de source non identifiée, ne sont pas retenues.

### Cantons romands

| Canton | Loyer net moyen en place, 2024 (CHF/mois, hors charges) [O] | Part du salaire net suisse, 100 % / 67 % [C] | Logements vacants au 1er juin 2026 [O] |
|---|---|---|---|
| Genève | 1 573 | 23,7 % / 34,0 % | 0,31 % |
| Vaud | 1 465 (Lausanne : 20,3 CHF/m² ; Nyon 22,0 ; Yverdon 17,1) | 22,0 % / 31,7 % | 0,87 % (provisoire) |
| Vaud, 3 pièces, bail d'un an ou moins | 1 673 | 25,2 % / 36,2 % | — |
| Fribourg | 1 328 | 20,0 % / 28,7 % | n.d. |
| Valais | 1 227 | 18,5 % / 26,6 % | n.d. |
| Neuchâtel | 1 091 | 16,4 % / 23,6 % | n.d. |
| Jura | n.d. | n.d. | 3,35 % |
| Suisse | 1 485 | 22,3 % / 32,1 % | 0,93 % |

Sources : Relevé structurel de l'OFS via [Statistique Vaud, Numerus n° 8](https://www.vd.ch/fileadmin/user_upload/organisation/dfin/statvd/Publications/Numerus/Numerus-08-2026_Loyers.pdf) ; [OFS, logements vacants, 10 septembre 2026](https://www.bfs.admin.ch/fr/newnsb/kgvqAd91MYZr) ; [État de Vaud](https://www.vd.ch/actualites/communiques-de-presse-de-letat-de-vaud/detail/communique/3900-logements-vacants-dans-le-canton-de-vaud-au-1er-juin-2026). Salaire net 2023 : 6 645 et 4 620 CHF par mois [O]. Ces parts sont sous-estimées deux fois pour un arrivant : le loyer est celui des locataires en place, hors charges, et le salaire net ne déduit pas la prime maladie. Aucun loyer proposé en niveau n'a été collecté pour Genève, Lausanne, Neuchâtel ou Fribourg, et aucun niveau de prix d'achat par canton ; les loyers de Berne, du Jura et de Soleure manquent.

### Villes canadiennes

| Ville (province ou territoire) | Deux chambres, loyer moyen payé, octobre 2025 (CAD) [O] | Deux chambres, loyer demandé, T2 2026 [O expérimental] | Taux d'inoccupation, octobre 2025 (%) [O] | Part du revenu d'emploi brut médian à temps plein : payé / demandé [C] |
|---|---|---|---|---|
| Montréal (QC) | 1 364 | 1 820 | 3,3 | 23,9 % / 31,9 % |
| Québec (QC) | 1 310 | 1 460 | 2,6 | 22,2 % / 24,7 % |
| Gatineau (QC) | 1 488 | 1 700 | 4,6 | 21,4 % / 24,4 % |
| Sherbrooke (QC) | 1 114 | 1 300 | 2,5 | 19,9 % / 23,2 % |
| Saguenay ; Trois-Rivières (QC) | 929 ; 1 033 | n.d. | 2,6 ; 2,7 | n.d. |
| Grand Sudbury (ON) | 1 599 | 1 940 | 1,3 | 26,1 % / 31,7 % |
| Timmins (ON) | 1 484 | n.d. | 1,9 | 24,3 % / n.d. |
| Hawkesbury ; Cornwall (ON) | 1 183 ; 1 366 | n.d. | 0,7 ; 3,6 | n.d. |
| Hamilton (ON) | 1 656 | 2 150 | 3,6 | 27,1 % / 35,1 % |
| London (ON) | 1 660 | 1 920 | 3,9 | 27,1 % / 31,4 % |
| Ottawa, partie Ontario | 1 939 | 2 360 | 3,1 | n.d. |
| Toronto (ON) | 2 056 | 2 650 | 3,0 | 33,1 % / 42,6 % |
| Moncton (NB) | 1 484 | 1 460 | 3,7 | 29,3 % / 28,9 % |
| Bathurst ; Edmundston (NB) | 979 ; 1 040 | n.d. | 3,9 (univers large) ; 0,8 | 19,4 % / n.d. ; n.d. |
| Winnipeg (MB) | 1 577 | 1 660 | 2,8 | 29,6 % / 31,1 % |
| Regina ; Saskatoon (SK) | 1 481 ; 1 553 | 1 480 ; 1 620 | 2,7 ; 3,2 | 26,2 % / 26,2 % ; 27,5 % / 28,7 % |
| Calgary (AB) | 1 936 | 1 890 | 5,0 | 31,5 % / 30,7 % |
| Edmonton (AB) | 1 603 | 1 570 | 3,9 | 26,8 % / 26,3 % |
| Kelowna (BC) | 2 118 | 2 330 | 6,3 | 35,2 % / 38,7 % |
| Vancouver (BC) | 2 367 | 3 030 | 3,7 | 39,2 % / 50,2 % |
| Halifax (NS) | 1 838 | 2 400 | 2,5 | 33,9 % / 44,2 % |
| Charlottetown (PE) | 1 306 | n.d. | 1,7 | 25,2 % / n.d. |
| St. John's (NL) | 1 394 | 1 530 | 1,6 | 24,8 % / 27,2 % |
| Yellowknife (NT) | 2 115 | n.d. | 1,3 | 27,7 % / n.d. |
| Whitehorse (YT) | 1 364 (médiane, tous logements) | n.d. | 1,9 | 18,7 % / n.d. |
| Iqaluit (NU) | 3 025 (médiane, tous logements) | n.d. | 0,3 | 37,9 % / n.d. |

Sources : SCHL, Enquête sur les logements locatifs ([Statistique Canada 34-10-0133](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3410013301), [34-10-0127](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3410012701), [34-10-0129](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3410012901)) ; loyers demandés ([46-10-0092](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=4610009201)) ; Nord ([SCHL, Rapport sur le logement dans le Nord, 29 juillet 2026](https://www.cmhc-schl.gc.ca/professionals/housing-markets-data-and-research/market-reports/housing-market/northern-housing-report)) ; revenu d'emploi brut médian des travailleurs à temps plein toute l'année 2024, par région métropolitaine quand il existe, sinon par province ([11-10-0240](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1110024001)). Les taux d'inoccupation portent sur les immeubles de 6 logements et plus, sauf mention.

**Comparabilité des quatre tableaux de villes.** Aucun niveau de loyer ne se compare d'un pays à l'autre : annonces modélisées charges comprises au mètre carré en France, médiane des nouveaux baux tous logements en Belgique, annonces au Luxembourg, loyers nets en place en Suisse, moyenne des deux-chambres en place et annonces au Canada. Les parts de salaire sont calculées sur un salaire net national en Europe et sur un revenu brut médian au Canada : elles ne se comparent ni entre les deux continents ni, strictement, entre pays européens (logement type différent). Les prix d'achat sont des médianes au mètre carré (France), des médianes par bien (Belgique), des moyennes au mètre carré (Luxembourg) et des moyennes par bien (Canada). Les taux de vacance ne se comparent pas : parc total offert en Suisse, immeubles locatifs au Canada, toute vacance, y compris hors marché, en France, où un taux régional de 7 à 10 % n'indique pas un marché détendu.

### Achat, effort et disponibilité : ce qui se compare entre pays

Seuls les indices de l'OCDE et les taux d'effort d'Eurostat se comparent en niveau. Depuis le pic du 2e trimestre 2022, les prix réels ont reculé de 16,0 % en France, 21,8 % au Luxembourg et 18,0 % au Canada, de 4,4 % en Belgique, et ont monté de 10,1 % en Suisse [C sur indices O] ; le ratio prix/revenu est revenu près de sa moyenne de long terme en France (105) mais reste à 122 en Belgique, 125 en Suisse et 138 au Canada [O] ([OCDE, prix des logements](https://sdmx.oecd.org/public/rest/data/OECD.ECO.MPD,DSD_AN_HOUSE_PRICES@DF_HOUSE_PRICES,1.0/FRA+BEL+LUX+CHE+CAN.Q.HPI_YDH+HPI_RPI+RHP+HPI_YDH_AVG+HPI_RPI_AVG.?startPeriod=2022-Q1)). **La Suisse est le seul des cinq pays où l'accès à l'achat s'est encore dégradé depuis 2022.** Parmi les locataires au prix du marché, la part de ceux qui consacrent plus de 40 % de leur revenu au logement est de 25,4 % en Belgique, 23,2 % au Luxembourg, 22,8 % en Suisse (2024) et 18,7 % en France en 2025 ; dans l'ensemble de la population, la Suisse est à 15,3 % contre 6 à 8 % ailleurs [O] ([Eurostat ilc_lvho07c](https://ec.europa.eu/eurostat/databrowser/view/ilc_lvho07c/default/table)). Au Canada, 33,2 % des ménages locataires dépassaient le seuil de 30 % au Recensement de 2021 [O] ([Statistique Canada](https://www150.statcan.gc.ca/n1/daily-quotidien/220921/dq220921b-eng.htm)) ; les deux seuils ne se comparent pas.

| Territoire | Pièces par personne (fichier OCDE, 2020 à 2023) [O] | Satisfaits de l'accessibilité financière du logement, % (Gallup 2020-2023) [O] | Ménages propriétaires, % [O] | Locataires en besoin impérieux de logement, % (Canada, 2021) [O] |
|---|---|---|---|---|
| Île-de-France | 1,5 | 43,4 | 46,8 | — |
| Centre-Val de Loire | 2,0 | 47,9 | 64,1 | — |
| Bourgogne-Franche-Comté | 2,0 | 41,5 | 63,4 | — |
| Normandie | 2,0 | 46,3 | 58,7 | — |
| Hauts-de-France | 1,9 | 53,1 | 57,4 | — |
| Grand Est | 2,0 | 46,4 | 58,7 | — |
| Pays de la Loire | 2,0 | 58,7 | 64,0 | — |
| Bretagne | 2,1 | 46,2 | 66,2 | — |
| Nouvelle-Aquitaine | 2,0 | 51,1 | 62,6 | — |
| Occitanie | 1,9 | 46,4 | 58,8 | — |
| Auvergne-Rhône-Alpes | 1,9 | 47,7 | 58,9 | — |
| Provence-Alpes-Côte d'Azur | 1,7 | 51,2 | 54,7 | — |
| Corse | 1,7 | 26,9 | 55,5 | — |
| Bruxelles-Capitale | 1,5 | 47,8 | n.d. (Belgique : 70,9 % de la population) | — |
| Wallonie | 2,3 | 61,8 | n.d. | — |
| Luxembourg | 2,0 | 45,3 | 64,1 % de la population | — |
| Région lémanique | 1,5 | 62,1 | n.d. (Suisse : 42,0 % de la population ; Vaud : près de 30 % des ménages) | — |
| Espace Mittelland | 1,8 | 60,0 | n.d. | — |
| Québec | 2,5 | 46,9 | 59,9 | 7,9 |
| Nouveau-Brunswick | 2,8 | 51,0 | 73,0 | 9,5 |
| Ontario | 2,4 | 31,0 | 68,4 | 23,0 |
| Manitoba | 2,4 | 53,4 | 67,4 | 21,0 |
| Saskatchewan | 2,6 | 58,5 | 70,7 | 17,6 |
| Alberta | 2,4 | 51,8 | 70,9 | 16,9 |
| Colombie-Britannique | 2,4 | 22,8 | 66,8 | 19,5 |
| Nouvelle-Écosse | 2,8 | 46,2 | 66,8 | 14,0 |
| Île-du-Prince-Édouard | 2,7 | 59,3 | 68,8 | 12,6 |
| Terre-Neuve-et-Labrador | 3,0 | 59,5 | 75,7 | 13,9 |
| Yukon | 2,4 | n.d. | 64,4 | n.d. |
| Territoires du Nord-Ouest | 2,3 | n.d. | 53,5 | n.d. |
| Nunavut | 1,3 | n.d. | 19,2 | n.d. |

Sources : [fichier OCDE Regional Well-Being, octobre 2025](https://www.oecdregionalwellbeing.org/assets/downloads/OECD-Regional-Well-Being-Data-File.xlsx) ; propriétaires : [Insee, recensement 2022](https://www.insee.fr/fr/statistiques/2012695), [Statistique Canada, recensement 2021](https://www150.statcan.gc.ca/n1/daily-quotidien/220921/dq220921b-eng.htm), [Eurostat ilc_lvho02](https://ec.europa.eu/eurostat/databrowser/view/ilc_lvho02/default/table) ; besoins impérieux : [Statistique Canada 46-10-0065](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=4610006501). **Comparabilité.** Les deux premières colonnes se comparent entre pays avec prudence (définition de la « pièce » variable, années de recensement différentes, petits échantillons Gallup) ; les taux de propriétaires mesurent des ménages en France et au Canada, une population pour Eurostat ; les besoins impérieux n'existent qu'au Canada.

La disponibilité est la contrainte liante en deux endroits : l'arc lémanique (0,31 % de logements vacants à Genève, 0,87 % dans le canton de Vaud) et le Nord canadien (0,3 % à Iqaluit, 1,3 % à Yellowknife, 1,9 % à Whitehorse), où le logement fourni par l'employeur représente environ les deux tiers du parc locatif d'Iqaluit [O] ([SCHL, Nord 2026](https://www.cmhc-schl.gc.ca/professionals/housing-markets-data-and-research/market-reports/housing-market/northern-housing-report)). Le marché locatif canadien s'est détendu en 2025 (3,3 % d'inoccupation dans les régions métropolitaines contre 2,4 % en 2024), sauf à Sudbury, Saint John et St. John's, et les petites villes francophones restent très tendues (0,7 % à Hawkesbury, 0,8 % à Edmundston) avec des loyers en hausse de 15,8 % à Timmins et 16,8 % à Hawkesbury en un an [C sur O]. Le logement social n'est une solution d'entrée nulle part : 62 234 ménages et 9 à 13 ans d'attente à Bruxelles, 2,9 millions de ménages en attente en France, environ 30 000 ménages pour un HLM au Québec [NV, chiffres d'organismes publics repris par la presse ou des tiers] ([BX1](https://bx1.be/?p=833944) ; [Banque des Territoires](https://www.banquedesterritoires.fr/logement-social-29-millions-de-demandeurs-et-86-milliards-deuros-necessaires-pour-affronter-les) ; [FLHLMQ](https://cdn-contenu.quebec.ca/cdn-contenu/adm/min/finances/publications-adm/Consultations_prebudgetaires/2026-2027/FLHLMQ.pdf)).

Les règles d'entrée complètent le tableau. Le dépôt de garantie est plafonné à un mois de loyer hors charges pour un logement vide en France [O] ([Service-public.gouv.fr](https://www.service-public.gouv.fr/particuliers/vosdroits/F31269)) ; il serait de deux mois au plus en Wallonie, à Bruxelles et au Luxembourg, de trois mois en Suisse, interdit au Québec, et le loyer d'entrée est libre en Ontario entre deux locataires [NV : sources officielles lues par extrait] ([Logement.lu](https://logement.public.lu/fr/proprietaire/logement-location/faq-bail-a-loyer.html) ; [Québec.ca](https://www.quebec.ca/nouvelles/actualites/details/exiger-un-depot-de-garantie-est-illegal) ; [Ontario.ca](https://www.ontario.ca/page/residential-rent-increases)). Partout, la protection porte sur les hausses en cours de bail (3,1 % de base au Québec pour 2026-2027, 1,9 % en Ontario pour 2027 [O], [Québec.ca](https://www.quebec.ca/nouvelles/actualites/details/le-calcul-de-lajustement-des-loyers-en-2026-68053)), pas sur le loyer d'entrée, sauf dans les communes françaises sous encadrement, dont la prolongation jusqu'en novembre 2028 a été votée le 19 novembre 2026 sans que la promulgation soit confirmée [NV, via presse] ([LCP](https://lcp.fr/actualites/encadrement-des-loyers-l-assemblee-prolonge-l-experimentation-du-dispositif-au-terme-d)). Au Canada, l'interdiction d'achat d'immeubles résidentiels par des non-Canadiens court jusqu'au 1er janvier 2027 [O] ([ministère des Finances](https://www.canada.ca/en/department-finance/news/2024/02/government-announces-two-year-extension-to-ban-on-foreign-ownership-of-canadian-housing.html)) ; le budget du 5 novembre 2026 propose de la porter à 2029 en exemptant le neuf, sans que rien soit adopté ([Budget 2026, annexe 3](https://budget.canada.ca/2026/report-rapport/anx3-en.html)). La location est donc le mode d'entrée par défaut.

## Ce qui reste d'un salaire après impôt, prime maladie et loyer : calcul et fragilités

Cette section est un calcul propre, à lire comme un ordre de grandeur. Elle procède en trois étapes, chacune avec ses entrées.

### Étape 1 : du brut au net réel, par territoire

**Formule [C].** Net réel = B × (1 − t(B / SM)) / PPA × 1 / P. B est le salaire brut annuel moyen du territoire (colonne 2 du tableau par territoire). t est le taux moyen net d'impôt sur le revenu et de cotisations salariales du célibataire sans enfant, interpolé linéairement entre les points 67 %, 100 % et 167 % du salaire moyen SM de Taxing Wages 2022. PPA est la parité de consommation des ménages 2022 (0,744 EUR en France, 0,779 en Belgique, 0,894 au Luxembourg, 1,14 CHF, 1,23 CAD pour 1 USD). P est une correction de prix régionale appliquée seulement en France (1,07 pour l'Île-de-France et la Corse par rapport à la province).

| Entrées Taxing Wages 2022 [O] | France | Belgique | Luxembourg | Suisse | Canada |
|---|---|---|---|---|---|
| Salaire moyen (monnaie nationale) | 41 867 | 55 038 | 68 578 | 96 180 | 82 300 |
| Taux à 67 % / 100 % / 167 % du salaire moyen | 23,53 / 27,77 / 33,56 | 32,36 / 40,24 / 48,03 | 22,30 / 31,63 / 39,41 | 14,95 / 18,05 / 22,93 | 22,47 / 25,63 / 31,35 |
| Résultat national : net en monnaie nationale ; en USD PPA ; indice [C] | 29 532 ; 39 693 ; 100 | 32 380 ; 41 566 ; 105 | 50 209 ; 56 163 ; 141 | 78 797 ; 69 121 ; 174 | 52 622 ; 42 782 ; 108 |

Source : [OCDE, Taxing Wages](https://sdmx.oecd.org/public/rest/data/OECD.CTP.TPS,DSD_TAX_WAGES_COMP@DF_TW_COMP,2.1/all?startPeriod=2022&endPeriod=2023). Les indices par territoire figurent dans le tableau de la section revenu. Avec les médianes les plus récentes (médiane mensuelle suisse 2024 × 12, médiane hebdomadaire canadienne à temps plein 2025 × 52, barème 2025, PPA 2024), le net en USD PPA est de 66 336 en Suisse, 66 113 en Région lémanique, 65 822 en Espace Mittelland, 40 761 au Québec, 43 536 en Ontario et 37 507 au Nouveau-Brunswick [C].

### Étape 2 : la prime maladie suisse

La prime de l'assurance obligatoire des soins est due par personne, indépendamment du revenu, et n'est pas comptée par l'OCDE. Les primes moyennes mensuelles 2026 des adultes de 26 ans et plus sont de 464,8 CHF en Suisse, 585,4 à Genève, 526,6 dans le canton de Vaud, 530,8 à Neuchâtel, 520,5 dans le Jura, 470,7 à Berne, 442,6 à Fribourg et 436,1 en Valais ; elles passent à 487,6 CHF en moyenne suisse en 2027 [O] ([OFSP, communiqué du 29 septembre 2026](https://www.bag.admin.ch/fr/newnsb/BfuGvedj0OOX)). Rapportée au net du célibataire au salaire moyen 2025 (82 536 CHF), la prime annuelle représente 6,8 % en Suisse (5 578 CHF), 8,5 % à Genève (7 025), 7,7 % dans le canton de Vaud et à Neuchâtel, 6,3 % en Valais [C : prime × 12 / 82 536 ; un an d'écart entre numérateur et dénominateur]. **Le net suisse tombe ainsi d'environ 82 % à 75-76 % du brut, soit le niveau canadien (74,4 %) [C : (82 536 − 5 578) / 100 715 = 76,4 % ; Genève 75,0 %].** Sur les médianes, le net après prime adulte est de 61 074 USD PPA en Suisse, 59 486 avec la prime genevoise et 60 152 avec la prime vaudoise [C] : l'avantage sur la France reste supérieur à 50 %. Cette déduction est un minimum : elle ignore la franchise et la quote-part, et les paiements directs des ménages suisses atteignent 2 213 USD PPA par habitant contre 784 en France [O] ([OCDE, comptes de la santé](https://sdmx.oecd.org/public/rest/data/OECD.ELS.HD,DSD_SHA@DF_SHA,1.1/FRA+BEL+LUX+CHE+CAN.A...HF3+HF1+HF2+_T.._T.._T...?startPeriod=2022&dimensionAtObservation=AllDimensions&format=csvfilewithlabels)).

### Étape 3 : le reste après loyer, par ville

**Formule [C].** Reste mensuel = salaire net mensuel − prime maladie (Suisse seulement) − loyer. Variante A : salaire net national du célibataire sans enfant à 100 % et à 67 % du salaire moyen (France 2025 : 2 695 et 1 970 EUR ; Belgique 2024 : 3 009 et 2 361 EUR ; Luxembourg 2025 : 4 656 et 3 576 EUR ; Suisse 2023 : 6 645 et 4 620 CHF) [O] ([Eurostat earn_nt_net](https://ec.europa.eu/eurostat/databrowser/view/earn_nt_net/default/table)). Variante B, test de sensibilité : salaire moyen net du territoire issu de l'étape 1 (2022), divisé par 12 (Île-de-France 3 024 EUR ; Auvergne-Rhône-Alpes 2 395 ; Provence-Alpes-Côte d'Azur 2 417 ; Nouvelle-Aquitaine 2 207 ; Hauts-de-France 2 217 ; Grand Est 2 290 ; Bretagne 2 216 ; Pays de la Loire 2 200 ; Occitanie 2 254 ; Bruxelles 2 914 ; Wallonie 2 603 ; Luxembourg 4 184 ; Région lémanique 6 620 CHF ; Espace Mittelland 6 536 CHF). Loyers : ceux des tableaux de villes. Conversion en USD PPA : parité 2024 de la consommation des ménages.

| Ville ou territoire | Loyer retenu (monnaie nationale par mois) | Prime maladie | Reste, variante A à 100 % | Reste, variante A à 67 % | Reste A à 100 %, USD PPA | Reste, variante B (salaire moyen régional 2022) |
|---|---|---|---|---|---|---|
| Paris | 1 721 (annonce, 52 m²) | — | 974 | 249 | 1 359 | 1 303 |
| Nice | 1 061 | — | 1 635 | 909 | 2 280 | 1 356 |
| Lyon | 863 | — | 1 832 | 1 107 | 2 556 | 1 532 |
| Marseille | 842 | — | 1 853 | 1 127 | 2 585 | 1 574 |
| Bordeaux | 832 | — | 1 864 | 1 138 | 2 599 | 1 375 |
| Lille | 822 | — | 1 874 | 1 148 | 2 614 | 1 395 |
| Strasbourg | 811 | — | 1 884 | 1 159 | 2 628 | 1 478 |
| Rennes | 775 | — | 1 921 | 1 195 | 2 679 | 1 441 |
| Nantes | 754 | — | 1 942 | 1 216 | 2 708 | 1 446 |
| Toulouse | 728 | — | 1 968 | 1 242 | 2 744 | 1 526 |
| Brest | 634 | — | 2 061 | 1 335 | 2 875 | 1 581 |
| Quimper | 624 | — | 2 072 | 1 346 | 2 889 | 1 592 |
| Bruxelles (Région) | 980 (nouveau bail médian) | — | 2 029 | 1 381 | 2 698 | 1 934 |
| Wallonie ; complexe de Liège | 750 | — | 2 259 | 1 611 | 3 004 | 1 853 |
| Complexe de Charleroi | 695 | — | 2 314 | 1 666 | 3 077 | 1 908 |
| Luxembourg (pays) | 1 700 (annonce médiane) | — | 2 956 | 1 876 | 3 499 | 2 484 |
| Luxembourg-Ville | 1 955 (annonce, 50 m²) | — | 2 701 | 1 621 | 3 197 | 2 229 |
| Genève | 1 573 (loyer net en place) | 585 | 4 487 | 2 462 | 4 233 | 4 462 |
| Vaud | 1 465 (en place) | 527 | 4 654 | 2 629 | 4 390 | 4 628 |
| Vaud, 3 pièces, bail récent | 1 673 | 527 | 4 446 | 2 421 | 4 194 | n.d. |
| Fribourg | 1 328 (en place) | 443 | 4 875 | 2 850 | 4 599 | 4 765 |
| Valais | 1 227 (en place) | 436 | 4 982 | 2 957 | 4 700 | 4 957 |
| Neuchâtel | 1 091 (en place) | 531 | 5 024 | 2 999 | 4 739 | 4 914 |

Tous les restes sont [C] ; ceux de Bruxelles, de la Wallonie et des complexes urbains reposent sur des montants de loyer lus via reprise de presse. Lecture : à Lyon, un célibataire au salaire moyen national garde 1 832 EUR par mois après impôt et loyer d'annonce d'un 52 m², et 1 107 EUR s'il gagne 67 % du salaire moyen. En France, le salaire net médian du secteur privé (2 190 EUR par mois en équivalent temps plein en 2024, avant impôt sur le revenu [O], [Insee](https://www.insee.fr/fr/statistiques/8733089)) se situe entre les deux cas-types : le cas à 67 % est plus proche du salarié médian que le cas à 100 %.

Pour le Canada, la base est différente : salaire médian à temps plein 2025 de la province (médiane hebdomadaire × 52), net du barème Taxing Wages 2025 [C], rapporté au loyer demandé d'un logement d'une chambre au 2e trimestre 2026 [O expérimental], ou au loyer payé d'octobre 2025 quand le loyer demandé n'est pas publié.

| Ville | Net médian provincial mensuel (CAD) [C] | Loyer d'une chambre, demandé T2 2026 (CAD) | Reste (CAD) [C] | Part du net [C] | Reste en USD PPA [C] |
|---|---|---|---|---|---|
| Montréal | 4 212 | 1 480 | 2 732 | 35 % | 2 203 |
| Québec | 4 212 | 1 210 | 3 002 | 29 % | 2 421 |
| Gatineau | 4 212 | 1 440 | 2 772 | 34 % | 2 235 |
| Sherbrooke | 4 212 | 1 040 | 3 172 | 25 % | 2 558 |
| Saguenay ; Trois-Rivières | 4 212 | 834 ; 873 (payé) | 3 378 ; 3 339 | 20 % ; 21 % | n.d. |
| Grand Sudbury | 4 499 | 1 630 | 2 869 | 36 % | 2 313 |
| Timmins | 4 499 | 1 274 (payé) | 3 225 | 28 % | n.d. |
| Hamilton | 4 499 | 1 720 | 2 779 | 38 % | 2 241 |
| London | 4 499 | 1 560 | 2 939 | 35 % | 2 370 |
| Ottawa | 4 499 | 1 900 | 2 599 | 42 % | 2 096 |
| Toronto | 4 499 | 2 090 | 2 409 | 46 % | 1 942 |
| Moncton | 3 876 | 1 290 | 2 586 | 33 % | 2 085 |
| Bathurst ; Edmundston | 3 876 | 763 ; 726 (payé) | 3 113 ; 3 150 | 20 % ; 19 % | n.d. |
| Winnipeg | 3 826 | 1 320 | 2 506 | 35 % | 2 021 |
| Regina ; Saskatoon | 4 213 | 1 250 ; 1 340 | 2 963 ; 2 873 | 30 % ; 32 % | 2 390 ; 2 317 |
| Calgary | 4 648 | 1 550 | 3 098 | 33 % | 2 498 |
| Edmonton | 4 648 | 1 260 | 3 388 | 27 % | 2 732 |
| Kelowna | 4 600 | 1 880 | 2 720 | 41 % | 2 193 |
| Vancouver | 4 600 | 2 280 | 2 320 | 50 % | 1 871 |
| Halifax | 4 022 | 1 880 | 2 142 | 47 % | 1 727 |
| Charlottetown | 3 824 | 1 090 (payé) | 2 734 | 29 % | n.d. |
| St. John's | 4 193 | 1 270 | 2 923 | 30 % | 2 357 |

Entrées : brut médian annuel et net [C] — Québec 65 229 et 50 544 CAD ; Ontario 70 179 et 53 984 ; Nouveau-Brunswick 59 729 et 46 508 ; Manitoba 58 968 et 45 916 ; Saskatchewan 65 250 et 50 559 ; Alberta 72 781 et 55 770 ; Colombie-Britannique 71 947 et 55 199 ; Nouvelle-Écosse 61 991 et 48 264 ; Île-du-Prince-Édouard 58 929 et 45 886 ; Terre-Neuve-et-Labrador 64 896 et 50 311 ([Statistique Canada 14-10-0064-01](https://www150.statcan.gc.ca/n1/tbl/csv/14100064-eng.zip) ; [OCDE, Taxing Wages](https://sdmx.oecd.org/public/rest/data/OECD.CTP.TPS,DSD_TAX_WAGES_COMP@DF_TW_COMP,2.1/all?startPeriod=2024)). Loyers : [Statistique Canada 46-10-0092](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=4610009201) et [34-10-0133](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3410013301). Pour Yellowknife, Whitehorse et Iqaluit, aucun net n'est calculable : seules existent les parts du brut du tableau des villes canadiennes (27,7 %, 18,7 % et 37,9 %).

### Ce que le calcul établit, et où il est fragile

Trois résultats résistent aux variantes. **Paris est la ville française où il reste le moins, dans les deux variantes** : le salaire net moyen francilien dépasse de 600 à 820 EUR par mois celui des autres régions, mais le loyer d'un 52 m² y dépasse de 660 à 1 100 EUR celui des autres grandes villes [C] ; la prime salariale est donc entièrement absorbée par le seul loyer, avant même l'écart de prix de 7 % avec le reste du pays [NV, lu en résumé] ([Insee Première n° 1959](https://www.insee.fr/fr/statistiques/7649921)). Ce résultat est cohérent, sur données françaises et pour un arrivant, avec celui de Card, Rothstein et Yi. Deuxième résultat : le Luxembourg et la Suisse conservent un avantage net après loyer, de l'ordre de 3 200 à 3 500 USD PPA par mois au Luxembourg et 4 200 à 4 700 en Suisse romande contre 2 300 à 2 900 dans les villes françaises de province. Troisième résultat : au Canada, l'ordre des villes après loyer n'est pas celui des salaires ; Sherbrooke, Québec, Edmonton et Regina laissent davantage que Toronto, Vancouver ou Halifax, où un logement d'une chambre au loyer demandé absorbe 46 à 50 % du net médian.

Le résultat est fragile sur sept points, par ordre d'importance. Premièrement, les salaires européens sont des moyennes (cas-types à 100 % et 67 % du salaire moyen), les salaires canadiens des médianes : les deux tableaux ne se comparent pas ligne à ligne, et le salaire moyen retenu par l'OCDE pour le Canada (92 401 CAD bruts, 68 738 CAD nets en 2025, soit 5 728 CAD par mois [O]) relèverait les restes canadiens de 1 100 à 1 900 CAD par mois [C] ; ce salaire moyen est lui-même très supérieur à la moyenne de l'enquête sur la population active, signe d'un écart de champ non élucidé. Deuxièmement, un seul barème fiscal par pays fédéral : celui de Zurich pour toute la Suisse et de l'Ontario pour tout le Canada selon la méthode connue de l'OCDE, non relue dans les notes pays [NV] ; le net est donc probablement surestimé à Genève, dans le canton de Vaud et au Québec, où le fardeau fiscal net est plus lourd que dans les provinces situées à l'ouest selon la Chaire en fiscalité de Sherbrooke, sans chiffre publié ([CFFP, 19 novembre 2026](https://cffp.recherche.usherbrooke.ca/regard-sur-le-fardeau-fiscal/)). Troisièmement, les loyers suisses sont ceux des locataires en place, hors charges : un arrivant paie davantage (écart de 53 % selon l'ancienneté du bail dans le canton de Vaud), ce qui réduit le reste genevois ou vaudois de plusieurs centaines de francs. Quatrièmement, les années sont désalignées (salaire net suisse 2023, prime 2026, loyer 2024 ; variante B sur des salaires 2022 et des loyers 2025, ce qui la rend utilisable pour l'ordre des villes, pas pour les niveaux). Cinquièmement, la conversion en USD PPA utilise une parité qui inclut déjà le logement ; appliquée à un reste après loyer, elle sous-estime ce reste là où le logement est relativement plus cher que le reste de la consommation (Suisse et Luxembourg, indices de prix du logement de 213 et 182 contre 171 et 132 pour l'ensemble [O]). Sixièmement, les salaires sont mesurés au lieu de travail en Europe : ceux de Bruxelles, de Paris, du Luxembourg et de Genève sont en partie gagnés par des non-résidents. Septièmement, les cotisations de santé hors Suisse (complémentaire en France, mutualité en Belgique, assurance collective au Canada) et les logements types diffèrent d'un pays à l'autre. Pour ces raisons, **les restes se lisent d'abord à l'intérieur de chaque pays ; entre pays, seuls les écarts de grande ampleur sont interprétables.**

## Santé, famille, école, vie quotidienne : des hiérarchies qui ne recoupent pas celle de la paie

### Tableau par territoire des indicateurs comparables des deux côtés de l'Atlantique

| Territoire | Espérance de vie à la naissance (Europe 2024 ; Canada 2022-2024) | Mortalité infantile, pour 1 000 naissances (2024) | Médecins actifs pour 1 000 hab. (série régionale OCDE) | Homicides pour 100 000 hab. (Europe 2024 ; Canada 2025) | PM2,5, µg/m³, 2020 | PM2,5, µg/m³, 2023 | Satisfaction de vie, 0-10 (Gallup, 2020-2023) |
|---|---|---|---|---|---|---|---|
| Île-de-France | 84,6 | 4,1 | 3,87 | 1,06 | 11,1 | 12,7 | 6,7 |
| Centre-Val de Loire | 82,6 | 4,1 | 2,60 | 0,73 | 8,7 | 8,9 | 6,4 |
| Bourgogne-Franche-Comté | 82,4 | 4,4 | 3,08 | 0,96 | 8,3 | 9,8 | 6,7 |
| Normandie | 82,1 | 4,1 | 3,03 | 0,96 | 9,1 | 9,6 | 6,6 |
| Hauts-de-France | 81,4 | 3,6 | 3,06 | 0,75 | 10,4 | 10,9 | 6,5 |
| Grand Est | 82,1 | 4,9 | 3,29 | 0,83 | 9,1 | 10,6 | 6,5 |
| Pays de la Loire | 83,5 | 3,5 | 3,00 | 1,12 | 8,0 | 9,6 | 6,3 |
| Bretagne | 82,5 | 4,2 | 3,49 | 0,55 | 7,6 | 10,3 | 6,9 |
| Nouvelle-Aquitaine | 83,1 | 3,4 | 3,54 | 0,84 | 8,4 | 9,3 | 6,8 |
| Occitanie | 83,3 | 3,3 | 3,49 | 1,05 | 8,9 | 9,2 | 6,6 |
| Auvergne-Rhône-Alpes | 83,9 | 3,4 | 3,49 | 1,03 | 9,3 | 11,2 | 6,8 |
| Provence-Alpes-Côte d'Azur | 83,8 | 3,7 | 4,08 | 2,00 | 11,2 | 11,9 | 6,7 |
| Corse | 84,0 | 2,8 | 3,35 | 4,18 | 9,5 | 10,1 | 7,2 |
| Bruxelles-Capitale | 82,1 | 3,2 | 4,44 (2023) | 2,69 | 12,2 | 12,3 | 6,7 |
| Wallonie | 80,7 | 3,9 | 3,14 (2023) | 1,97 | 10,2 | 11,3 | 6,9 |
| Luxembourg | 83,2 | 5,3 | n.d. | 1,39 (2022) | 8,7 | 10,5 | 7,2 |
| Région lémanique | 84,6 | 3,1 | 5,19 | 0,69 | 9,1 | 10,8 | 7,2 |
| Espace Mittelland | 83,8 | 3,5 | 4,29 | 0,41 | 8,1 | 11,8 | 7,2 |
| Québec | 82,4 | 4,9 | 2,62 | 0,97 | 7,5 | 12,0 | 7,3 |
| Nouveau-Brunswick | 80,1 | 6,0 | 2,58 | 1,72 | 4,8 | 7,3 | 6,9 |
| Ontario | 82,3 | 4,3 | 2,21 | 1,27 | 6,6 | 13,4 | 6,9 |
| Manitoba | 78,9 | 7,4 | 2,25 | 3,64 | 4,4 | 12,2 | 6,9 |
| Saskatchewan | 79,0 | 6,3 | 2,17 | 5,21 | 5,6 | 12,2 | 6,6 |
| Alberta | 80,8 | 4,4 | 2,39 | 1,77 | 6,1 | 14,4 | 6,8 |
| Colombie-Britannique | 82,0 | 3,3 | 2,73 | 1,81 | 5,4 | 12,7 | 6,9 |
| Nouvelle-Écosse | 80,3 | 2,9 | 2,67 | 1,74 | 4,8 | 8,2 | 7,0 |
| Île-du-Prince-Édouard | 81,2 | 3,0 | 2,10 | 1,64 | 3,9 | 8,0 | 7,8 |
| Terre-Neuve-et-Labrador | 79,2 | 2,9 | 2,60 | 2,18 | 4,0 | 6,5 | 6,9 |
| Yukon | n.d. | 4,4 | 1,89 | 6,21 | 4,0 | 4,6 | n.d. |
| Territoires du Nord-Ouest | 76,3 | 8,4 | 1,13 | 10,88 | 5,6 | 20,2 | n.d. |
| Nunavut | 70,8 | 21,2 | 0,56 | 16,73 | 3,0 | 4,9 | n.d. |

Toutes les valeurs sont [O]. Sources : [Eurostat demo_r_mlifexp](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/demo_r_mlifexp?format=JSON&lang=EN&sinceTimePeriod=2018&sex=T&age=Y_LT1&unit=YR&geo=FR1) et [demo_r_minfind](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/demo_r_minfind?format=JSON&lang=EN&sinceTimePeriod=2018&unit=RT&geo=FR1) ; [Statistique Canada 13-10-0114-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1310011401), [13-10-0140-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1310014001) et [13-10-0713-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1310071301) ; médecins : [OCDE, DSD_REG_HEALTH@DF_CARE](https://sdmx.oecd.org/public/rest/data/OECD.CFE.EDS,DSD_REG_HEALTH@DF_CARE,2.5/all?startPeriod=2018&dimensionAtObservation=AllDimensions&format=csvfilewithlabels) (France 2025, Suisse et Canada 2024) ; homicides : [Eurostat crim_gen_reg](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/crim_gen_reg?format=JSON&lang=EN&sinceTimePeriod=2018&iccs=ICCS0101&unit=P_HTHAB&geo=FR1) et [Statistique Canada 35-10-0068-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3510006801) ; PM2,5 2020 : [OCDE, DF_AIR_POLL](https://sdmx.oecd.org/public/rest/data/OECD.ENV.EPI,DSD_AIR_POL@DF_AIR_POLL,/all?startPeriod=2018&dimensionAtObservation=AllDimensions&format=csvfilewithlabels) ; PM2,5 2023 et satisfaction de vie : [fichier OCDE Regional Well-Being](https://www.oecdregionalwellbeing.org/assets/downloads/OECD-Regional-Well-Being-Data-File.xlsx).

**Comparabilité.** Ces sept colonnes sont les seules utilisables pour un classement transatlantique, avec des réserves. L'espérance de vie canadienne est une moyenne triennale encore marquée par la surmortalité de 2022. La densité médicale varie de 0,3 à 0,5 point pour un même pays selon la série (médecins « actifs », « en exercice » ou « autorisés ») : la France est à 3,44 dans la série régionale et 3,94 dans la série nationale ; le Luxembourg, absent de la série régionale, est à 4,09 dans la série nationale. Les taux d'homicides reposent sur de très petits effectifs (15 victimes en Corse, 12 en Région lémanique, 3 à l'Île-du-Prince-Édouard et au Yukon). Les deux millésimes de PM2,5 se contredisent, point traité dans la section des anomalies. La satisfaction de vie est un indicateur subjectif, sur de petits échantillons régionaux (valeur identique de 7,2 pour les deux régions suisses et le Luxembourg), à ne pas mêler aux indicateurs objectifs.

### Santé : l'Europe a les médecins, la Suisse la facture, le Canada le défaut de médecin de famille

L'espérance de vie est plus élevée en Région lémanique et en Île-de-France (84,6 ans) que partout au Canada, où le maximum est au Québec (82,4) ; la Wallonie (80,7), les Hauts-de-France (81,4), le Manitoba, la Saskatchewan et trois des quatre provinces de l'Atlantique (78,9 à 80,3) ferment la marche, loin devant le Nunavut (70,8). L'écart entre la Région lémanique et le Québec (2,2 ans) est du même ordre que l'écart interne à la France métropolitaine (3,2 ans entre Île-de-France et Hauts-de-France) [C]. Ces niveaux reflètent la composition sociale et les modes de vie passés des résidents, pas ce qu'un arrivant gagnerait en espérance de vie.

L'accès diffère plus nettement. La densité médicale est de 3,0 à 5,2 médecins pour 1 000 habitants en Europe francophone (2,6 dans le seul Centre-Val de Loire) contre 2,1 à 2,7 dans les provinces canadiennes. En Europe, les besoins médicaux non satisfaits pour raison de coût, de distance ou d'attente concernent 3,7 % des adultes en France, 1,4 % en Suisse (2024), 1,1 % au Luxembourg et 0,9 % en Belgique en 2025 [O] ([Eurostat hlth_silc_08](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/hlth_silc_08?format=JSON&lang=EN&sinceTimePeriod=2018&reason=TXP_TFAR_WLIST&reason=WLIST&reason=TXP&quant_inc=TOTAL&sex=T&age=Y_GE16&unit=PC&geo=FR&geo=BE&geo=LU&geo=CH&geo=EU27_2020)). Au Canada, l'indicateur disponible est autre : 17,4 % des adultes n'ont pas de prestataire de soins habituel en 2024, 25,9 % au Québec, 38,3 % à l'Île-du-Prince-Édouard, 25,2 % à Terre-Neuve-et-Labrador, 21,9 % en Nouvelle-Écosse, 20,1 % en Colombie-Britannique, 18,4 % au Nouveau-Brunswick et 11,5 % en Ontario [C : 100 − valeur officielle] ([Statistique Canada 13-10-0905-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1310090501)). **Le Québec combine une densité médicale supérieure à la moyenne canadienne (2,62 contre 2,41) et l'une des plus fortes parts d'adultes sans prestataire habituel : l'obstacle est l'inscription auprès d'un médecin de famille, pas le nombre de médecins.** Les deux indicateurs ne mesurent pas la même chose et ne se comparent pas ; les temps d'attente n'ont pas été extraits.

Le coût pour la personne suit un troisième ordre. Les paiements directs des ménages représentent 21,8 % de la dépense de santé en Belgique (2024) et 20,8 % en Suisse, 15,1 % au Canada, 10,3 % en France et 8,4 % au Luxembourg en 2025, soit 1 763, 2 213, 1 135, 784 et 717 USD PPA par habitant ; le Canada a en outre la plus forte part d'assurance volontaire (14,5 %), qui correspond pour l'essentiel aux médicaments hors hôpital, aux soins dentaires et à l'optique [O, valeurs 2025 provisoires] ([OCDE, comptes de la santé](https://sdmx.oecd.org/public/rest/data/OECD.ELS.HD,DSD_SHA@DF_SHA,1.1/FRA+BEL+LUX+CHE+CAN.A...HF3+HF1+HF2+_T.._T.._T...?startPeriod=2022&dimensionAtObservation=AllDimensions&format=csvfilewithlabels)). Un emploi canadien sans assurance collective d'employeur vaut donc sensiblement moins qu'un emploi qui en comporte une. Le reste à charge français est net de la complémentaire, dont la cotisation n'apparaît pas dans cet indicateur. Au niveau national seulement, les années de vie en bonne santé à la naissance sont de 63,9 en Belgique, 63,6 en France, 60,2 au Luxembourg (2022) et 58,0 en Suisse en 2024 [O] ([Eurostat hlth_hlye](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/hlth_hlye?format=JSON&lang=EN&sinceTimePeriod=2018&hlth_hle=HLY_Y0&sex=T&sex=M&sex=F&unit=YR&geo=FR&geo=BE&geo=LU&geo=CH&geo=EU27_2020)), mesure déclarative sans équivalent canadien. Pour un nouvel arrivant au Canada, le délai de carence avant l'ouverture de la couverture provinciale n'est documenté que par des compilations privées contradictoires ; il ne peut pas être publié en l'état.

### Famille : garde la moins chère et congés les plus longs au Luxembourg, l'inverse en Suisse

| Indicateur | France | Belgique | Luxembourg | Suisse | Canada |
|---|---|---|---|---|---|
| Coût net de la garde à temps plein de deux enfants de 2 et 3 ans, couple à 100 % + 67 % du salaire moyen, en % du salaire moyen [O] | 11 (2026) | 13 (2025) | 7 (2025) | 17 (2025) | 10 (2026) |
| Même cas : frais bruts, en % du salaire moyen [O] | 23 | 19 | 39 | 62 | 15 |
| Couple à deux salaires moyens, coût net [O] | 14 | 16 | 8 | 24 | 9 |
| Parent seul à 67 % du salaire moyen, coût net [O] | 3 | 4 | 0 | 5 | −1 |
| Enfants de moins de 3 ans en accueil formel, % (2025 ; Suisse 2024) [C : somme de deux tranches O] | 59,7 | 48,0 | 56,4 | 36,8 | n.d. |
| Congé de maternité : semaines / taux de remplacement moyen [O] | 16 / 100 % | 15 / 77 % | 20 / 100 % | 14 / 56 % | 16 / 36 % (régime fédéral) |
| Total des congés payés ouverts à la mère, en semaines équivalentes à taux plein [O] | 20,0 | 15,1 | 38,1 | 7,9 | 19,9 |
| Total ouvert au père, semaines équivalentes à taux plein [O] | 8,1 | 6,3 | 20,1 | 1,1 | 2,0 |
| Dépenses publiques pour les familles, % du PIB (2021 ou 2022) [O] | 2,63 | 2,80 | 3,19 | 1,68 | 1,57 |
| Indice conjoncturel de fécondité (Europe 2024 ; Canada 2025) [O] | 1,61 | 1,44 | 1,25 | 1,29 | 1,26 (Québec 1,36) |

Sources : [OCDE, coût net de la garde](https://sdmx.oecd.org/public/rest/data/OECD.ELS.JAI,DSD_TAXBEN_NCC@DF_NCC,1.1/FRA+BEL+LUX+CHE+CAN...........?startPeriod=2022&dimensionAtObservation=AllDimensions&format=csvfilewithlabels) ; [Eurostat ilc_caindformal](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/ilc_caindformal?format=JSON&lang=EN&sinceTimePeriod=2018&age=Y_LT3&unit=PC&geo=FR&geo=BE&geo=LU&geo=CH&geo=EU27_2020) ; [OCDE, base Famille, PF2.1](https://webfs.oecd.org/Els-com/Family_Database/PF2_1_Parental_leave_systems.pdf) (droits en vigueur en avril 2026) ; [OCDE, dépenses sociales](https://sdmx.oecd.org/public/rest/data/OECD.ELS.SPD,DSD_SOCX_AGG@DF_PUB_FAM,1.0/FRA+BEL+LUX+CHE+CAN.......?startPeriod=2018&dimensionAtObservation=AllDimensions&format=csvfilewithlabels) ; [Eurostat demo_r_frate2](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/demo_r_frate2?format=JSON&lang=EN&sinceTimePeriod=2018&age=TOTAL&unit=NR&geo=FR1) ; [Statistique Canada 13-10-0418-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1310041801).

**Comparabilité.** Ces indicateurs se comparent entre pays, mais au niveau national seulement, et le modèle de l'OCDE retient pour les pays fédéraux les règles d'une seule région (Ontario et canton de Zurich, selon une méthode non relue ici [NV]) : la valeur « Canada » ne décrit ni le Québec ni les provinces à tarif libre, la valeur « Suisse » ni Genève ni Vaud. La ligne canadienne des congés décrit vraisemblablement l'assurance-emploi fédérale, pas le régime québécois.

À l'intérieur du Canada, les tarifs de garde réglementés seraient de 9,65 CAD par jour au Québec, 10 CAD au Manitoba, en Saskatchewan, à Terre-Neuve-et-Labrador, à l'Île-du-Prince-Édouard et au Nunavut, 15 CAD en Alberta, 22 CAD au maximum en Ontario, 16 à 19 CAD au Nouveau-Brunswick, et de marché en Colombie-Britannique et en Nouvelle-Écosse (22 à 23 CAD à Halifax, 24 à 28 CAD à Kelowna) [NV : étude d'un institut de recherche, résumé lu] ([CCPA, août 2026](https://www.policyalternatives.ca/news-research/the-10-a-day-divide-child-care-fees-in-canada-in-2026/)) ; la même étude signale que les places, surtout pour les poupons, sont partout difficiles à trouver. Le régime québécois d'assurance parentale a un revenu maximal assurable de 103 000 CAD en 2026 [O] ([Québec.ca](https://www.quebec.ca/famille-et-soutien-aux-personnes/grossesse-parentalite/aide-financiere-prestations/regime-quebecois-assurance-parentale/grossesse-naissance/montant-prestations)) contre 68 900 CAD pour l'assurance-emploi [NV : page officielle lue par extrait], soit 49 % de plus [C] : au-delà de ce second plafond, un congé parental est mieux indemnisé au Québec, indépendamment des taux, qui n'ont pas été vérifiés.

Pour une famille, la Suisse additionne trois charges que la paie ne montre pas. La prime maladie de deux adultes et deux enfants représente 17 681 CHF par an à Genève et 16 044 CHF dans le canton de Vaud avec les primes moyennes 2026 de l'OFSP [C : (2 × prime adulte + 2 × prime enfant) × 12 ; enfants 151,3 et 141,9 CHF par mois], et 21 672 CHF à Genève avec les primes de référence de l'ordonnance fédérale [C] ([DFI, primes moyennes 2026](https://www.bsv.admin.ch/dam/fr/sd-web/juMQ1SfoExDq/FR%20Anhang%20(Art.%203)%20Durchschnittspr%C3%A4mien%202026.pdf)), avant réduction individuelle de primes, non chiffrée. Le couple à un salaire moyen et deux enfants, qui garde 94,9 % de son brut selon Taxing Wages 2025 (83,1 % en France, 80,3 % en Belgique, 90,1 % au Luxembourg, 85,4 % au Canada, prestations familiales incluses [C à partir de l'OCDE]), n'en garde plus que 77 % à Genève après primes [C : (100 715 × 0,949 − 17 681) / 100 715]. La garde nette de deux jeunes enfants coûte 17 % d'un salaire moyen, soit environ 17 100 CHF par an [C], et le congé de maternité est le plus court et le moins rémunéré du groupe.

### Éducation : l'avantage canadien à PISA ne vaut pas pour l'école en français hors Québec

| PISA 2022, élèves de 15 ans [O] | Mathématiques | Compréhension de l'écrit | Sciences |
|---|---|---|---|
| Moyenne OCDE | 472 | 476 | 485 |
| France | 474 | 474 | 487 |
| Belgique (ensemble des communautés) | 489 | 479 | 491 |
| Suisse | 508 | 483 | 503 |
| Canada | 497 | 507 | 515 |
| Québec, ensemble (systèmes francophone / anglophone) | 514 (515 / 500) | 501 (500 / 506) | 512 (512 / 514) |
| Ontario, ensemble (francophone / anglophone) | 495 (473 / 496) | 512 (446 / 515) | 517 (479 / 519) |
| Nouveau-Brunswick, ensemble (francophone / anglophone) | 468 (478 / 463) | 469 (447 / 478) | 483 (461 / 492) |
| Manitoba, ensemble (francophone / anglophone) | 470 (474 / 470) | 486 (438 / 487) | 492 (471 / 493) |
| Alberta, ensemble (francophone / anglophone) | 504 (498 / 504) | 525 (471 / 525) | 534 (497 / 534) |
| Colombie-Britannique, ensemble (francophone / anglophone) | 496 (494 / 496) | 511 (482 / 511) | 519 (487 / 519) |
| Nouvelle-Écosse, ensemble (francophone / anglophone) | 470 (476 / 470) | 489 (446 / 491) | 492 (476 / 493) |

Source : [CMEC, rapport canadien PISA 2022](https://www.cmec.ca/Publications/Lists/Publications/Attachments/438/PISA-2022_Canadian_Report_EN.pdf). Le Luxembourg n'a pas participé à PISA 2022. **Comparabilité.** PISA se compare entre pays et provinces ; il n'existe ni score séparé pour la Fédération Wallonie-Bruxelles en 2022 dans les sources lues, ni score par canton suisse.

Le Québec et la Suisse devancent la France et la Belgique en mathématiques, et toutes les grandes provinces canadiennes dépassent les trois pays européens en lecture et en sciences. **Mais hors Québec, les écoles de langue française obtiennent en lecture 23 à 69 points de moins que les écoles anglophones de la même province** (Ontario 446 contre 515, Alberta 471 contre 525, Nouveau-Brunswick 447 contre 478, Saskatchewan 461 contre 484) ; au Québec, le système francophone est au niveau du système anglophone. PISA 2025, publié en septembre 2026, confirme la baisse : le Canada est à 510 en sciences, 490 en lecture et 485 en mathématiques, les systèmes de langue majoritaire devançant de 31 points les systèmes de langue minoritaire [O] ([CMEC, faits saillants PISA 2025](https://cmec.ca/docs/pisa2025/PISA_2025_Highlights_FR.pdf)) ; la Fédération Wallonie-Bruxelles est au niveau de la moyenne OCDE et de la France en sciences selon une synthèse de l'Université de Liège ([ULiège](https://orbi.uliege.be/bitstream/2268/349304/2/pisa2025_synthese_et_slides_08092026.pdf)) ; les scores français 2025 ne sont connus que par une source secondaire [NV] et les scores suisses, belges, luxembourgeois et provinciaux 2025 n'ont pas été extraits.

| Territoire | Sorties précoces des 18-24 ans, % (2025) | 25-34 ans sans diplôme du second cycle du secondaire, % (2025) | 25-34 ans diplômés du supérieur, % (2025) |
|---|---|---|---|
| Île-de-France | 5,0 | 6,9 | 72,7 |
| Centre-Val de Loire | 6,6 | 8,6 | 51,6 |
| Bourgogne-Franche-Comté | 6,1 | 13,5 | 44,0 |
| Normandie | 12,1 | 11,0 | 49,1 |
| Hauts-de-France | 7,6 | 11,4 | 49,4 |
| Grand Est | 7,9 | 11,5 | 48,0 |
| Pays de la Loire | 7,5 | 11,4 | 54,9 |
| Bretagne | 4,7 | 7,2 | 48,9 |
| Nouvelle-Aquitaine | 8,2 | 10,1 | 51,6 |
| Occitanie | 6,4 | 10,2 | 52,9 |
| Auvergne-Rhône-Alpes | 5,4 | 7,9 | 58,5 |
| Provence-Alpes-Côte d'Azur | 9,2 | 10,6 | 52,3 |
| Corse | 21,5 (2023) | 18,3 (2023) | 28,7 |
| Bruxelles-Capitale | 8,8 | 10,5 | 63,5 |
| Wallonie | 9,8 | 16,1 | 46,3 |
| Luxembourg | 5,2 | 7,7 | 65,2 |
| Région lémanique | 6,9 | 13,8 | 51,5 |
| Espace Mittelland | 5,4 | 9,5 | 45,4 |
| Québec | n.d. | 8 | 60 |
| Nouveau-Brunswick | n.d. | 3 | 69 |
| Ontario | n.d. | 3 | 75 |
| Manitoba | n.d. | 6 | 59 |
| Saskatchewan | n.d. | 5 | 54 |
| Alberta | n.d. | 5 | 61 |
| Colombie-Britannique | n.d. | 3 | 68 |
| Nouvelle-Écosse | n.d. | 4 | 70 |
| Île-du-Prince-Édouard | n.d. | 4 | 67 |
| Terre-Neuve-et-Labrador | n.d. | 4 | 62 |
| Yukon | n.d. | 4 | 68 |
| Territoires du Nord-Ouest | n.d. | 14 | 54 |
| Nunavut | n.d. | 44 | 23 |

Toutes les valeurs sont [O] ([Eurostat edat_lfse_16](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/edat_lfse_16?format=JSON&lang=EN&sinceTimePeriod=2018&sex=T&age=Y18-24&unit=PC&geo=FR1) et [edat_lfse_04](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/edat_lfse_04?format=JSON&lang=EN&sinceTimePeriod=2018&sex=T&age=Y25-34&isced11=ED5-8&unit=PC&geo=FR1) ; [Statistique Canada 37-10-0130-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3710013001)). **Comparabilité.** Les sorties précoces n'existent qu'en Europe. La part de diplômés du supérieur se compare, mais elle flatte le Canada, dont le « tertiaire » inclut le cycle court collégial (22 % des 25-34 ans) : au seul niveau universitaire, 45 % des 25-34 ans canadiens et 40 % des Québécois sont diplômés [C]. Ces stocks décrivent l'environnement social et la concurrence sur le marché du travail, pas la qualité de l'école.

Les droits d'inscription à l'université sont de 178 EUR en licence et 255 EUR en master en France pour 2026-2027, tarif étendu aux ressortissants de l'Union européenne, de la Suisse et aux résidents du Québec, contre 2 902 et 3 950 EUR pour les étudiants extracommunautaires [O] ([etudiant.gouv.fr](https://www.etudiant.gouv.fr/droits-d-inscription-1489)). Au Québec, les étudiants français et belges francophones paient le tarif des Canadiens non-résidents du Québec au premier cycle et le tarif québécois aux cycles supérieurs [O] ([Québec.ca](https://www.quebec.ca/education/etudier-quebec/aide-financiere-etudiants-internationaux/exemption-droits-scolarite-ententes)) ; les montants en dollars n'ont pas été extraits. Le minerval de la Fédération Wallonie-Bruxelles passerait à 1 194 EUR en 2026-2027 et les taxes suisses seraient de 500 à 1 000 CHF par semestre [NV]. Hors Québec, 180 852 élèves sont scolarisés dans des écoles de langue française en 2024-2025 [C sur O], dont 114 789 en Ontario, 31 293 au Nouveau-Brunswick, 10 539 en Alberta, 6 576 au Manitoba, 393 au Yukon, 255 dans les Territoires du Nord-Ouest et 114 au Nunavut [O] ([Statistique Canada 37-10-0009-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3710000901)) : l'école en français existe partout, mais son offre réelle est très inégale.

### Vie quotidienne : 43 heures en Suisse, 18 jours de repos légal au Québec contre 36 en France

| Indicateur | France | Belgique | Luxembourg | Suisse | Canada | Québec | Ontario |
|---|---|---|---|---|---|---|---|
| Heures hebdomadaires habituelles à temps plein, 2025 [O] | 39,9 | 40,3 | 40,8 | 43,3 | 39,7 | 38,6 | 39,7 |
| Congés payés légaux + jours fériés d'un salarié débutant, en jours | 36 [C sur NV] | 30 [C sur NV] | 37 [C sur NV] | 21 à 29 selon le canton [C sur NV] | n.d. | 18 [C sur NV] | 19 [C sur NV] |
| Satisfaction de vie, enquête nationale (0-10) [O] | 7,1 (2025) | 7,6 (2025) | 7,4 (2025) | 7,7 (2024) | 7,0 (T2 2025) | 7,5 | 6,8 |
| Indice de gravité de la criminalité, 2025 (Canada 2006 = 100) [O] | — | — | — | — | 75,0 | 61,6 | 57,2 |

Sources : [Eurostat lfsa_ewhun2](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/lfsa_ewhun2?format=JSON&lang=EN&sinceTimePeriod=2018&nace_r2=TOTAL&wstatus=EMP&worktime=FT&age=Y20-64&sex=T&unit=HR&geo=FR&geo=BE&geo=LU&geo=CH) ; [Statistique Canada 14-10-0043-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410004301) ; [Eurostat ilc_pw01](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/ilc_pw01?format=JSON&lang=EN&sinceTimePeriod=2018&life_sat=LIFE&statinfo=AVG&isced11=TOTAL&sex=T&age=Y_GE16&unit=RTG&geo=FR&geo=BE&geo=LU&geo=CH) ; [Statistique Canada 13-10-0843-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1310084301) et [35-10-0026-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3510002601) ; congés : [Guichet.lu](https://guichet.public.lu/fr/entreprises/ressources-humaines/conges/annuel/conge-annuel.html), [ch.ch](https://ch.ch/fr/travail/horaires--absences--vacances/vacances-et-jours-feries), et guides privés pour le Canada ([Employment Hero](https://employmenthero.com/en-ca/resources/vacation-entitlement-by-province/)).

**Comparabilité.** Les heures se comparent avec une réserve (20-64 ans en Europe, 15 ans et plus au Canada). Les congés sont des minimums légaux lus dans des extraits ou des guides privés ; les conventions collectives, qui les dépassent souvent, ne sont pas prises en compte. Les deux mesures de satisfaction de vie viennent d'enquêtes différentes et ne se comparent pas strictement entre l'Europe et le Canada ; l'indice de gravité de la criminalité n'existe qu'au Canada.

L'écart de repos légal entre la France et le Québec, 18 jours, représente environ 7 % d'une année de 260 jours ouvrés [C sur NV]. La sécurité mesurée par les homicides est proche et bonne en Europe francophone et dans l'est du Canada (0,4 à 2 pour 100 000), avec quatre exceptions : la Corse, Bruxelles, Terre-Neuve-et-Labrador (2,18) et surtout les Prairies et les territoires. À l'échelle des villes canadiennes, l'indice de gravité 2025 va de 49 à 61 à Saguenay, Sherbrooke, Québec, Toronto, Trois-Rivières et Montréal, à 105,6 à Moncton et 113,4 à Winnipeg [O]. En Europe, les vols avec violence enregistrés atteignent 443 pour 100 000 habitants à Bruxelles et 158 en Île-de-France contre 22 à 36 dans les deux grandes régions suisses [O] ([Eurostat crim_gen_reg](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/crim_gen_reg?format=JSON&lang=EN&sinceTimePeriod=2018&iccs=ICCS0101&iccs=ICCS0401&iccs=ICCS05012&unit=P_HTHAB&geo=FR1)), sans équivalent canadien harmonisé. Le Québec est la seule province dont la satisfaction moyenne atteint les niveaux belge et suisse ; l'Ontario et l'Ouest sont sous le niveau français, sous réserve des différences d'enquête. Aucune série harmonisée de temps de trajet ni de rigueur climatique n'a été extraite.

## Cinq profils, cinq façons de peser le gain contre la difficulté de trouver un emploi

Le tableau ci-dessous met en regard, sans les agréger, ce qui reste de la paie et la difficulté de recherche d'emploi documentée dans le rapport antérieur. Il rappelle le résultat principal de ce rapport : l'écart entre profils dépasse l'écart entre territoires, et la part des chômeurs qui cherchent depuis un an ou plus varie d'un à cinq du Québec à Bruxelles.

| Territoire (ville de référence) | Salaire moyen net réel, France = 100 [C] | Loyer d'entrée en part du salaire net (cas-type du pays) [C] | Taux de chômage 2025, % | Part des chômeurs depuis 12 mois ou plus, 2025, % |
|---|---|---|---|---|
| Île-de-France (Paris) | 116 | 64 % | 8,8 [O] | 26,7 [O] |
| Bretagne (Rennes) | 91 | 29 % | 5,6 [O] | 11,8 [O] |
| Hauts-de-France (Lille) | 91 | 30 % | 8,5 [O] | 25,6 [O] |
| Wallonie | 101 | 25 % | 7,8 [O] | 37,0 [O] |
| Bruxelles-Capitale | 113 | 33 % | 12,6 [O] | 46,4 [O] |
| Luxembourg (Luxembourg-Ville) | 141 | 37 % (42 %) | 6,5 [O] | 30,7 [O] |
| Région lémanique (Genève) | 176, avant prime | 24 % sur loyer en place ; 32 % avec la prime maladie | 7,8 [O] | 36,9 [O] |
| Québec (Montréal) | 102 | 35 % (une chambre, loyer demandé, net médian) | 5,6 [O] | 9,2 [C] |
| Ontario (Toronto) | 111 | 46 % (idem) | 7,7 [C] | 16,0 [C] |
| Nouveau-Brunswick (Moncton) | 93 | 33 % (idem) | 7,1 [C] | 10,2 [C] |

Sources du rappel sur l'emploi : [Eurostat lfst_r_lfu3rt](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfu3rt/default/table?lang=fr) et [lfst_r_lfu2ltu](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfu2ltu/default/table?lang=fr) ; moyennes canadiennes calculées sur séries mensuelles ([Statistique Canada 14-10-0287-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410028701) ; [14-10-0342-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410034201)). Les parts de loyer ne se comparent pas entre pays (bases décrites plus haut). Au Luxembourg, à Genève, à Bruxelles et en Île-de-France, une grande part des emplois est occupée par des non-résidents (44,5 % de frontaliers au Luxembourg en juillet 2026 [O], [IGSS](https://igss.gouvernement.lu/dam-assets/publications/tableau-de-bord-emploi/2026/emploi-202607.pdf)) : la concurrence réelle y est plus forte que ne le suggère le taux de chômage des résidents.

### Jeune diplômé du supérieur, seul

C'est le profil pour lequel partir est le mieux justifié par la littérature et le moins bien servi par les moyennes. Le gain de paie est réel au Luxembourg et en Suisse (net des moins de 30 ans : 43 712 et 52 448 USD PPA contre 29 347 en France en 2022 [C]) et nul en Belgique pour un diplômé du supérieur. Deux postes pèsent davantage sur lui que sur les autres : les petits logements, plus chers au mètre carré (35,3 EUR à Paris, 19,2 à Lyon, 17,2 à Rennes pour un 1-2 pièces [O]), et le loyer d'entrée, qu'il paie plein. La prime maladie suisse des 19-25 ans est plus basse (323 CHF par mois en moyenne, 436 à Genève en 2026 [O]). Au Canada, le salaire horaire médian des 15-24 ans à temps plein est de 23,05 CAD au Québec et 22,00 en Ontario [O], et les villes moyennes québécoises laissent davantage après loyer que Toronto ou Vancouver. Côté non monétaire, il perd environ la moitié de ses congés légaux en allant de France au Québec et gagne un accès aux études de maîtrise au tarif québécois. En face, la difficulté d'accès à l'emploi : le taux de chômage des 15-24 ans diplômés du supérieur est de 7,1 % au Québec et 11,3 % en Ontario contre 13,4 % en France et 16,6 % en Île-de-France en 2025, et le taux d'emploi des diplômés récents est de 86,2 % en Suisse, 84,8 % au Luxembourg, 82,9 % en Belgique et 77,8 % en France [O] ([Eurostat lfst_r_lfu3rt](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfu3rt/default/table?lang=fr) ; [Eurostat edat_lfse_33](https://ec.europa.eu/eurostat/databrowser/view/edat_lfse_33/default/table?lang=fr) ; [Statistique Canada 14-10-0020-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410002001)). Lecture conseillée : comparer le reste après loyer d'entrée dans la ville visée, pas le salaire ; raisonner en expérience acquise autant qu'en revenu immédiat.

### Travailleur en milieu de carrière sans diplôme

L'écart de paie existe aussi pour lui (net des peu diplômés : 34 087 USD PPA en Belgique, 40 270 au Luxembourg, 50 919 en Suisse contre 30 636 en France [C]), et le non-diplômé perd moins par rapport au secondaire au Canada et en Suisse qu'en France. Mais les charges forfaitaires et le logement le frappent plus fort. La prime maladie suisse, indépendante du revenu, représente environ 10,5 % du net d'un salarié médian sans formation professionnelle et 13 % avec la prime genevoise [C : 5 578 et 7 025 CHF rapportés à un net d'environ 52 900 CHF]. À 67 % du salaire moyen, le loyer d'entrée absorbe 87 % du net à Paris, 48 à 55 % au Luxembourg, 42 à 44 % à Lyon, Marseille ou Bruxelles, 32 % en Wallonie et à Brest [C], et le loyer plus la prime 47 % à Genève sur un loyer de locataire en place [C]. Le travail frontalier est pour lui le levier le plus net : le rapport de rémunération entre frontaliers du Luxembourg et non-frontaliers du nord lorrain est de 1,49 sans diplôme et 1,54 avec un CAP ou un BEP [O], avec des prix français. Au Canada, la valeur de l'emploi dépend de l'assurance collective qui l'accompagne. En face : le taux de chômage des 25-54 ans peu diplômés va de 8,1 % au Québec et 8,8 % en Suisse à 14,0 % en France, 16,6 % en Wallonie, 21,0 % au Nouveau-Brunswick et environ 23 % à Bruxelles en 2025 [O et C], et la littérature américaine chiffre à 18,5-26,9 % la perte de consommation réelle des moins diplômés dans les zones les plus chères. Lecture conseillée : écarter les métropoles chères, regarder le métier avant le territoire, et ne retenir la Suisse ou le Luxembourg qu'avec un logement identifié.

### Couple avec jeunes enfants

Le calcul se fait au niveau du ménage et inclut trois lignes que la paie ne montre pas : la garde, les primes maladie de chaque membre de la famille en Suisse, et le revenu du second parent, qui progresse peu après un déménagement. Le Luxembourg cumule la garde nette la moins chère (7 % d'un salaire moyen), les congés les plus généreux (38 semaines équivalentes à taux plein pour la mère, 20 pour le père) et le net le plus élevé des trois pays de l'Union étudiés pour un couple à un salaire (90,1 % du brut), au prix d'un loyer d'annonce médian de 1 700 EUR. La France combine le taux d'accueil des moins de 3 ans le plus élevé (59,7 %) et une garde nette à 11 %. La Suisse retourne son avantage : coût net de garde de 17 % d'un salaire moyen (24 % pour deux salaires moyens), 36,8 % d'accueil formel majoritairement à temps partiel, 14 semaines de congé à 56 %, et 16 000 à 17 700 CHF de primes annuelles pour quatre [C]. Au Canada, le Québec offrirait le tarif de garde le plus bas [NV] et a le régime parental le mieux plafonné [O] ; mais un quart des adultes y est sans prestataire de soins habituel. Pour le logement, la référence est le trois-pièces ou le deux-chambres au loyer demandé : 1 820 CAD à Montréal, 2 650 à Toronto, 3 030 à Vancouver, 1 460 à Québec [O expérimental] ; 1 673 CHF pour un trois-pièces à bail récent dans le canton de Vaud [O]. Pour l'école, une famille francophone qui s'installe hors Québec choisit entre une école de langue française aux résultats de lecture nettement plus faibles et une école anglophone ; au Nouveau-Brunswick, l'écart est de 31 points, en Ontario de 69. La sécurité et l'espace jouent en faveur des régions non métropolitaines (2,3 pièces par personne en Wallonie contre 1,5 à Bruxelles, en Île-de-France et en Région lémanique). Lecture conseillée : chiffrer garde, primes et loyer du logement familial avant de comparer les salaires, et vérifier l'emploi du second parent dans la grille de difficulté.

### Travailleur de 50 ans ou plus

Les salaires des 50 ans et plus sont les plus élevés en Europe (net : 45 252 USD PPA en France, 47 751 en Belgique, 63 419 au Luxembourg, 76 519 en Suisse [C]), mais ils rémunèrent en partie une ancienneté qui ne se transporte pas ; au Canada, les 55 ans et plus gagnent moins que les 25-54 ans. Le déménagement détruit aussi une rente de logement : dans le canton de Vaud, un bail de vingt ans et plus coûte 1 092 CHF contre 1 673 pour un bail récent, et le même mécanisme joue à Montréal, Toronto ou Luxembourg. La santé pèse davantage à cet âge, et les ordres diffèrent : densité médicale maximale en Région lémanique, à Bruxelles et dans l'Espace Mittelland, reste à charge le plus bas en France et au Luxembourg, accès à un médecin de famille incertain au Québec et dans l'Atlantique. Pour un achat, la fenêtre est plus favorable qu'en 2022 en France, au Luxembourg et au Canada (prix réels en baisse de 16 à 22 %), pas en Suisse. En face, la difficulté est maximale : la part des chômeurs de 55-64 ans qui cherchent depuis un an ou plus est de 42,6 % en France, 44,2 % en Belgique et 43,9 % en Suisse en 2025 [O] ([Eurostat lfsa_upgan](https://ec.europa.eu/eurostat/databrowser/view/lfsa_upgan/default/table?lang=fr)), l'accès à l'emploi en six mois tombe à 24,5 % pour les inscrits français de 50 ans et plus [O] ([France Travail](https://www.francetravail.org/files/live/sites/peorg/files/documents/Statistiques-et-analyses/S%26I/si_26.011_acces_a_l_emploi_des_inscrits_au_4e_trim_2025.pdf)), et les tests de correspondance mesurent environ 40 % de réponses positives en moins pour les candidats âgés ([Lippens, Vermeiren et Baert](https://docs.iza.org/dp14966.pdf)). Lecture conseillée : ne partir qu'avec un emploi signé ; le gain espéré est d'abord non monétaire (soins, cadre de vie, proches), et la littérature ne promet pas de gain durable de bien-être. Les droits à retraite et leur portabilité, décisifs pour ce profil, ne sont pas couverts par les notes.

### Nouvel arrivant diplômé à l'étranger

Aucune moyenne de résidents ne s'applique à lui. Il paie le loyer d'entrée, sans rente d'ancienneté ni accès au parc social ; il ne peut pas acheter un logement existant au Canada tant qu'il n'est pas résident permanent, sauf exception réglementaire à vérifier ; il gagne moins que les résidents à diplôme égal, comme le montre le salaire médian des titulaires d'un permis B en Suisse, inférieur de 23 % à celui des Suisses en 2024 [C sur O]. Ses droits de santé dépendent d'un délai de carence provincial non vérifié et, au Québec, d'ententes de sécurité sociale avec la France, la Belgique et le Luxembourg connues ici par une source privée [NV]. Le déclassement des diplômés du supérieur nés hors de l'Union atteint 35,0 % en Belgique, 30,7 % en France, 25,8 % en Suisse et 13,9 % au Luxembourg en 2025 [O] ([Eurostat lfsa_eoqgac](https://ec.europa.eu/eurostat/databrowser/view/lfsa_eoqgac/default/table?lang=en)), et au Québec le taux de chômage des immigrants reçus depuis cinq ans ou moins est de 8,8 % contre 3,6 % pour les natifs de 25-54 ans [O] ([Statistique Canada 14-10-0472-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410047201)) : la paie des tableaux suppose un emploi au niveau du diplôme, ce qui n'est pas acquis. Dans les communautés francophones hors Québec, les marchés locatifs sont étroits et tendus (0,7 % d'inoccupation à Hawkesbury, 0,8 % à Edmundston) et, dans le Nord, une offre d'emploi n'est une possibilité réelle que si l'employeur fournit le logement. Ce que la littérature lui promet est en revanche plus favorable que pour les autres profils s'il vient d'un pays moins riche : un gain de bien-être concentré dans les cinq premières années, puis une convergence vers le niveau local, qui est élevé au Québec (7,5 sur 10 [O]). Lecture conseillée : raisonner sur le loyer demandé, le salaire d'un emploi accessible sans expérience locale, et les droits effectifs à l'arrivée (santé, école, statut), dans cet ordre.

## Douze séries trouvées dans les sources ne doivent pas être publiées telles quelles

| Chiffre ou série | Problème constaté | Décision | Source |
|---|---|---|---|
| Revenu disponible régional suisse de l'OCDE | L'API donne 26 882 (Région lémanique) et 27 272 USD PPA (Espace Mittelland) pour 2021, contre 64 051 pour la Suisse entière ; le fichier d'octobre 2025 donne 61 831 et 60 549 pour la même année. Deux sources OCDE se contredisent d'un facteur 2,3. Eurostat ne couvre pas la Suisse. | Ne pas publier ; aucun revenu disponible régional suisse comparable n'est disponible. | [API OCDE](https://sdmx.oecd.org/public/rest/data/OECD.CFE.EDS,DSD_REG_ECO@DF_INC,2.4/all?startPeriod=2020) ; [fichier OCDE](https://www.oecdregionalwellbeing.org/assets/downloads/OECD-Regional-Well-Being-Data-File.xlsx) |
| Scores de sécurité de l'outil OCDE Regional Well-Being | Le recalcul selon la méthode documentée donne 9,73 pour la Région lémanique (publié : 3,71), 9,88 pour l'Espace Mittelland (4,56), 9,67 pour le Luxembourg (5,48), alors qu'il reproduit les scores français, belges et canadiens à 0,03 près. L'écart dépasse un point pour les régions de 29 pays. Cause inconnue. | Ne publier aucun score de sécurité ; utiliser le taux d'homicides. | [guide OCDE, p. 9](https://www.oecdregionalwellbeing.org/assets/downloads/Regional-Well-Being-User-Guide.pdf) |
| Lignes nationales du fichier OCDE Regional Well-Being | La colonne « au moins secondaire » contient pour les pays la part sans secondaire supérieur (France 16,1) ; les taux d'emploi nationaux (France 65,0 ; Belgique 62,8) sont incohérents avec les régions ; les scores nationaux sont normalisés entre pays. L'en-tête d'unité du soutien social (« index 0 to 10 ») est faux : ce sont des pourcentages. | Ne pas utiliser les lignes nationales du fichier ; ne publier aucun score de 0 à 10. | idem |
| PM2,5 : « l'air est plus propre au Canada » | La série 2020 (année de confinement) place toutes les provinces sous 7,5 µg/m³ et l'Europe francophone entre 7,6 et 12,2 ; la série 2023 du fichier régional place l'Ontario (13,4), l'Alberta (14,4), le Québec (12,0) et les Territoires du Nord-Ouest (20,2) au-dessus de la plupart des régions françaises. L'hypothèse des fumées d'incendies de 2023 est plausible mais non vérifiée. | Publier les deux millésimes côte à côte ; ne pas conclure sur un ordre Europe-Canada. | [OCDE, 2020](https://sdmx.oecd.org/public/rest/data/OECD.ENV.EPI,DSD_AIR_POL@DF_AIR_POLL,/all?startPeriod=2018&dimensionAtObservation=AllDimensions&format=csvfilewithlabels) ; [fichier OCDE, 2023](https://www.oecdregionalwellbeing.org/assets/downloads/OECD-Regional-Well-Being-Data-File.xlsx) |
| Valeurs figées du fichier OCDE contre API | Revenu de l'Île-de-France 2022 : 35 629 dans le fichier, 36 742 dans l'API ; taux d'emploi du Québec 2024 : 79,1 contre 76,0 ; Yukon : 0,0 homicide dans le fichier, 6,21 en 2025. | Citer une seule source par indicateur, avec sa date d'extraction. | idem |
| Prix médian de l'ancien à Nantes (2 830 EUR/m²) | Valeur basse au regard des niveaux antérieurs, lue sur un site tiers. | Ne pas publier sans relecture de la note des notaires ; le ratio de 4,5 années en dépend. | [Mon Chasseur Immo](https://www.monchasseurimmo.com/actualites-immobilieres/marche-immobilier-4e-trimestre-2025-notaires-prix-volumes) |
| Délais de carence de l'assurance maladie par province | Compilations privées contradictoires (Alberta : trois mois ou aucun ; Ontario : aucun ou trois mois). | Ne pas publier ; vérifier sur le site de chaque régime provincial. | [WelcomeAide](https://welcomeaide.com/en/blog/health-insurance-waiting-period-interim-coverage-2026) |
| Délai d'attente du logement social en France | Environ 850 jours selon une source, 600 selon d'autres ; « environ 900 000 dossiers » en Île-de-France de source presse. | Ne publier que le nombre de ménages en attente, comme chiffre repris par la presse. | [Banque des Territoires](https://www.banquedesterritoires.fr/logement-social-29-millions-de-demandeurs-et-86-milliards-deuros-necessaires-pour-affronter-les) |
| Scores PISA 2025 de la France (456 ou 458 en lecture, 458 en mathématiques) | Source secondaire ; l'attribution des deux scores est incertaine. | Ne pas publier avant lecture des notes de la DEPP. | [DEPP](https://www.education.gouv.fr/sites/default/files/document/depp-ni-2026-40pisa-mathspdf-520231.pdf) |
| Deux « primes moyennes » suisses | La prime moyenne de l'OFSP (585 CHF par mois pour un adulte à Genève en 2026) tient compte des franchises à option et des modèles alternatifs ; la prime de référence de l'ordonnance fédérale est de 730 CHF. Les communiqués successifs donnent aussi 464,8 ou 465,3 CHF pour la moyenne adulte 2026. | Toujours nommer la série ; ce rapport retient la prime moyenne de l'OFSP et signale l'autre comme borne haute. | [OFSP](https://www.bag.admin.ch/fr/newnsb/BfuGvedj0OOX) ; [DFI](https://www.bsv.admin.ch/dam/fr/sd-web/juMQ1SfoExDq/FR%20Anhang%20(Art.%203)%20Durchschnittspr%C3%A4mien%202026.pdf) |
| Gain de « 0,47 point sur 10 » des migrants internationaux | Retrouvé seulement dans une copie non officielle du World Happiness Report 2018. | Citer le gain de 9 % rapporté par les co-auteurs, pas ce chiffre. | [Gallup](https://news.gallup.com/opinion/gallup/230639/migrants-happier-move.aspx) |
| Besoins impérieux de logement au Canada | 7,2 % selon l'Enquête canadienne sur le logement, 10,1 % selon le Recensement de 2021, écart non élucidé. | Utiliser l'enquête pour comparer les provinces, le recensement pour le niveau ; ne pas mélanger. | [Statistique Canada 46-10-0065](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=4610006501) |

D'autres réserves, moins graves, accompagnent des chiffres repris dans ce rapport. Le patrimoine net médian canadien est de 428 300 CAD dans la base de l'OCDE et de 519 700 CAD chez Statistique Canada pour la même enquête. Le Cadre de qualité de vie du Canada compte 84 ou 91 indicateurs selon la page officielle consultée. Le prix moyen luxembourgeois de 7 712 EUR/m² n'a pas pu être rattaché avec certitude au segment des appartements existants. Le loyer en cours de bail à Luxembourg-Ville (25,56 EUR/m²) et les montants en euros des loyers belges ne sont connus que par des résumés. La mortalité infantile des petites provinces est très volatile (Terre-Neuve-et-Labrador : 6,9 pour 1 000 en 2023, 2,9 en 2024). La correction de prix de 7 % pour l'Île-de-France et la Corse a été lue en résumé, et le poids de 19 % attribué à l'Île-de-France pour ramener la province à la moyenne nationale est une hypothèse non vérifiée. L'attribution des barèmes de Zurich et de l'Ontario aux calculs de l'OCDE repose sur une méthodologie connue mais non relue. Enfin, une bibliographie secondaire donne pour l'article de Roback (1982) une pagination erronée.

## Limites, lacunes et ce qu'il faudrait pour aller plus loin

Les limites tiennent d'abord à la nature des données. Tous les indicateurs décrivent des résidents moyens, alors que la question porte sur un arrivant d'un profil donné : seuls les loyers d'entrée et, partiellement, les salaires par diplôme et par âge s'en approchent. Les unités statistiques ne coïncident pas avec les aires linguistiques ni avec les bassins de vie : l'Espace Mittelland est majoritairement alémanique, la Région lémanique exclut Neuchâtel, le Jura et Fribourg, Bruxelles n'est pas entièrement francophone, et les communautés francophones canadiennes hors Québec ne sont décrites que par leur province ou par quelques villes. Les comparaisons Europe-Canada reposent sur des sources différentes pour presque tout, sauf les quelques séries de l'OCDE. Les niveaux locaux ne sont pas des effets causaux du lieu : une espérance de vie, un score PISA ou une satisfaction de vie élevés reflètent la composition de la population.

Les lacunes sont nombreuses et précises. Pour le revenu : aucune médiane régionale de salaire en France et en Belgique ; aucun salaire par diplôme et par province au Canada ; aucun salaire dans les trois territoires ; aucune parité de pouvoir d'achat régionale hors de France ; aucun chiffrage de l'écart d'impôt entre le Québec et l'Ontario ni entre Genève, Vaud et Zurich. Pour le logement : pas de loyers d'observatoires français distinguant emménagés récents et locataires stables ; pas de loyer officiel par ville wallonne ; pas de loyers proposés ni de prix d'achat en niveau en Suisse romande ; pas de prix par ville au Canada ; rien de chiffré pour la Péninsule acadienne ni pour les collectivités francophones rurales de l'Ouest ; plusieurs règles d'accès non vérifiées (garant et Visale en France, contestation du loyer initial en Suisse, taxes provinciales sur les acheteurs étrangers). Pour la santé : temps d'attente, franchise et quote-part suisses, réductions de primes par canton, coût des complémentaires, couverture des médicaments par province, services de santé en français hors Québec. Pour la famille : montants des allocations familiales, paramètres du régime québécois d'assurance parentale, taux de fréquentation et listes d'attente des services de garde par province et par canton. Pour l'éducation : PISA 2025 par province, par communauté belge et pour la Suisse, droits de scolarité en dollars, aides financières, formation des adultes et francisation. Pour la vie quotidienne : temps de trajet, climat, congés conventionnels. Les retraites, la fiscalité du patrimoine et le coût du déménagement lui-même ne sont pas traités. Enfin, la littérature mobilisée sur les gains de mobilité est américaine, britannique, allemande ou canadienne anglophone ; aucune étude ne porte sur des mobilités entre territoires francophones.

Cinq chantiers permettraient d'aller plus loin, par ordre de rendement. Le premier est de remplacer les cas-types par des médianes : microdonnées de l'enquête sur la structure des salaires et des enquêtes sur les revenus (EU-SILC, Enquête canadienne sur le revenu) pour obtenir un salaire net médian par région, âge et diplôme, avec intervalles de confiance. Le deuxième est de simuler l'impôt au bon endroit, avec les barèmes cantonaux (statistique de la charge fiscale de l'Administration fédérale des contributions) et provinciaux (travaux de la Chaire en fiscalité de Sherbrooke), au lieu d'un barème par pays. Le troisième est de constituer une série de loyers d'entrée comparable : observatoires locaux des loyers en France, baux enregistrés en Belgique, cadastre des loyers au Luxembourg, loyers proposés en Suisse, série expérimentale de Statistique Canada, pour un logement type commun et à la même date. Le quatrième est de vérifier sur les sites officiels chaque règle d'accès qui conditionne l'arrivée (couverture maladie, dépôt, droit d'acheter, droits de scolarité) et de les dater. Le cinquième est d'ajouter les dimensions absentes de tous les cadres harmonisés mais décisives pour ce public : l'environnement linguistique (part de francophones, services, école et soins en français), le climat (degrés-jours régionaux de l'OCDE) et le temps de trajet. Un outil public fondé sur ces données devrait laisser l'utilisateur choisir son profil et ses pondérations, afficher les valeurs en unités naturelles avec leur date et leur statut, et ne jamais afficher de note globale.

## Conclusion

Le résultat le plus utile de ce travail n'est pas un classement mais un ordre de lecture. Entre territoires francophones riches, la paie affichée dit peu ; ce qui départage est la succession de quatre coins dont le poids dépend du profil : l'impôt frappe davantage les hauts salaires en Belgique, les charges forfaitaires comme la prime maladie suisse frappent davantage les bas salaires et les familles, et le loyer d'entrée frappe tous les arrivants mais aucun résident installé. Il en découle que l'on ne peut pas décrire un territoire par ses moyennes de résidents sans tromper précisément le lecteur auquel on s'adresse, celui qui n'y habite pas encore. Le loyer demandé, et non le loyer moyen, devrait être la statistique de logement par défaut de toute comparaison destinée à des personnes mobiles.

La seconde leçon est que les dimensions ne s'alignent pas, et que ce désalignement est l'information. La Suisse paie le plus, travaille le plus longtemps et laisse aux familles la garde la plus chère et les congés les plus courts ; le Luxembourg paie bien et protège les parents mais se loge cher ; le Québec paie comme une région française de province, se loge à bon compte hors Montréal, annonce une garde à tarif réduit (non vérifiée à la source), retrouve vite un emploi à ses chômeurs, mais laisse un adulte sur quatre sans prestataire de soins habituel et donne environ moitié moins de congés légaux ; la France de province paie le moins et offre le plus de temps libre, le reste à charge de santé le plus bas avec le Luxembourg et des loyers d'entrée modérés ; Paris, Bruxelles, Genève, Toronto et Vancouver reprennent par le loyer ce qu'elles donnent par le salaire. Mis en regard de la difficulté de trouver un emploi, cela dessine des arbitrages propres à chaque profil plutôt qu'une destination : une expérience et un revenu pour le jeune diplômé, un métier et un logement avant un territoire pour le non-diplômé, un budget de ménage complet pour la famille, un emploi signé pour le senior, des droits effectifs à l'arrivée pour le nouvel arrivant. La mesure qui manque encore pour trancher est double et constructible : un salaire net médian par profil et par région, et un loyer d'entrée comparable d'un pays à l'autre.
