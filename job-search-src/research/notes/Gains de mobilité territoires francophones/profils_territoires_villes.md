# Profils âge × diplôme pour les territoires canadiens, leurs capitales et les villes des territoires francophones d'Europe et du Canada

Note de recherche du 22 novembre 2026. Conventions : TC = taux de chômage, TE = taux d'emploi, en %. Chaque chiffre porte un statut : **publié** (lu tel quel dans la source), **calculé** (formule indiquée, à partir d'effectifs publiés), **modélisé** (méthode indiquée). Un astérisque (*) signale un dénominateur inférieur à 250 personnes (effectifs du recensement canadien arrondis aléatoirement : taux fragile). « n.d. » = cellule absente ou supprimée. Fichier compagnon complet (2692 lignes) : `profils_territoires_villes.csv`, dans le même dossier que cette note.

Extraction : les données Statistique Canada ont été interrogées cellule par cellule par le service web de données (`https://www150.statcan.gc.ca/t1/wds/rest/getDataFromCubePidCoordAndLatestNPeriods`), celles de l'Insee par l'API ouverte Melodi (`https://api.insee.fr/melodi/data/...`), celles d'Eurostat par l'API de diffusion. Sites inaccessibles depuis cet environnement le jour de la recherche : statsnwt.ca (erreur 504), yukon.ca (contrôle anti-robot, non contourné), statbel.fgov.be (captcha, non contourné).

## 1. Territoires du Nord-Ouest, Yukon, Nunavut : ventilations publiées (EPA et bureaux territoriaux)

### Takeaway
L'Enquête sur la population active (EPA) ne publie, pour les trois territoires, aucune ventilation par diplôme : seulement le total 15+, les 25+ (moyennes mobiles de trois mois), les 25-54 ans et l'identité autochtone (annuel). Le tableau 14-10-0020-01 (diplôme × âge) ne couvre que le Canada et les dix provinces. La seule source publique croisant diplôme × âge × activité pour les territoires ET leurs capitales est le Recensement de 2021 (section 2) ; le Bureau de la statistique des TNO publie en plus un tableau annuel EPA par scolarité (LFS101), que je n'ai pas pu ouvrir.

### Cited Findings

**Structure des tableaux EPA (vérifiée dans les métadonnées du service web de Statistique Canada le 22 novembre 2026)**
- Tableau 14-10-0020-01 « Taux de chômage, taux d'activité et taux d'emploi selon le niveau de scolarité atteint, données annuelles » : la dimension Géographie compte 11 membres (Canada + 10 provinces), aucun territoire ; âges 15+, 15-24, 25+, 25-44, 45+, 25-54, 55+, 55-64, 65+ ; dernière année 2025 — [StatCan 14-10-0020-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=1410002001)
- Tableau 14-10-0292-01 « Caractéristiques de la population active selon le territoire, moyennes mobiles de trois mois, désaisonnalisées et non désaisonnalisées » : 3 territoires, genre, deux groupes d'âge seulement (15 ans et plus ; 25 ans et plus), dernière période octobre 2026 ; pas de diplôme — [StatCan 14-10-0292-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=1410029201)
- Tableau 14-10-0464-01 « Caractéristiques de la population active selon la province, le territoire et la région économique, données annuelles » : total 15+ seulement, dernière année 2025 — [StatCan 14-10-0464-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=1410046401)
- Tableau 14-10-0446-01 « Caractéristiques de la population active selon le groupe autochtone détaillé, territoires, données annuelles » : âges 15+ et 25-54, genre, identité (ensemble, Autochtones, Premières Nations, Métis, Inuit, non-Autochtones), dernière année 2025 ; pas de diplôme — [StatCan 14-10-0446-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=1410044601)
- Tableau 14-10-0480-01 « Estimations sur petits domaines des caractéristiques de la population active pour les régions infraprovinciales, données mensuelles non désaisonnalisées » (novembre 2021 à août 2026) : 659 aires dont Whitehorse (AR), Yellowknife (AR), Iqaluit (aire autonome de main-d'œuvre) ; indicateurs emploi, TC, TE avec erreur-type et intervalle à 95 % ; aucune dimension âge ni diplôme. Pour les trois aires territoriales, les douze dernières valeurs mensuelles (septembre 2025 à août 2026) sont vides dans le service web — [StatCan 14-10-0480-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=1410048001)

**Valeurs EPA pour les territoires (toutes lues dans les tableaux ci-dessus)**

| Territoire | Source | Période | Population | Indicateur | Valeur | Statut |
|---|---|---|---|---|---|---|
| Yukon | 14-10-0464-01 | 2023 (moyenne annuelle) | 15+ | unemployment_rate | 3,5 | publié |
| Yukon | 14-10-0464-01 | 2024 (moyenne annuelle) | 15+ | unemployment_rate | 4,3 | publié |
| Yukon | 14-10-0464-01 | 2025 (moyenne annuelle) | 15+ | unemployment_rate | 4,2 | publié |
| Yukon | 14-10-0292-01 | août-oct. 2026 (moy. mobile 3 mois, non désaisonnalisée) | 15+ | unemployment_rate | 5,2 | publié |
| Yukon | 14-10-0292-01 | août-oct. 2026 (moy. mobile 3 mois, non désaisonnalisée) | 25+ | unemployment_rate | 3,9 | publié |
| Yukon | 14-10-0446-01 | 2025 (moyenne annuelle) | 15+, ensemble | unemployment_rate | 4,2 | publié |
| Yukon | 14-10-0446-01 | 2025 (moyenne annuelle) | 15+, Autochtones | unemployment_rate | 7,5 | publié |
| Yukon | 14-10-0446-01 | 2025 (moyenne annuelle) | 15+, non-Autochtones | unemployment_rate | 3,3 | publié |
| Yukon | 14-10-0446-01 | 2025 (moyenne annuelle) | 25-54, ensemble | unemployment_rate | 3,1 | publié |
| Yukon | 14-10-0446-01 | 2025 (moyenne annuelle) | 25-54, Autochtones | unemployment_rate | supprimé (F/x) | publié |
| Yukon | 14-10-0446-01 | 2025 (moyenne annuelle) | 25-54, non-Autochtones | unemployment_rate | 2,4 | publié |
| Yukon | 14-10-0464-01 | 2023 (moyenne annuelle) | 15+ | employment_rate | 71,4 | publié |
| Yukon | 14-10-0464-01 | 2024 (moyenne annuelle) | 15+ | employment_rate | 73,0 | publié |
| Yukon | 14-10-0464-01 | 2025 (moyenne annuelle) | 15+ | employment_rate | 72,8 | publié |
| Yukon | 14-10-0292-01 | août-oct. 2026 (moy. mobile 3 mois, non désaisonnalisée) | 15+ | employment_rate | 69,9 | publié |
| Yukon | 14-10-0292-01 | août-oct. 2026 (moy. mobile 3 mois, non désaisonnalisée) | 25+ | employment_rate | 73,4 | publié |
| Yukon | 14-10-0446-01 | 2025 (moyenne annuelle) | 15+, ensemble | employment_rate | 72,8 | publié |
| Yukon | 14-10-0446-01 | 2025 (moyenne annuelle) | 15+, Autochtones | employment_rate | 62,7 | publié |
| Yukon | 14-10-0446-01 | 2025 (moyenne annuelle) | 15+, non-Autochtones | employment_rate | 74,8 | publié |
| Yukon | 14-10-0446-01 | 2025 (moyenne annuelle) | 25-54, ensemble | employment_rate | 90,0 | publié |
| Yukon | 14-10-0446-01 | 2025 (moyenne annuelle) | 25-54, Autochtones | employment_rate | 77,4 | publié |
| Yukon | 14-10-0446-01 | 2025 (moyenne annuelle) | 25-54, non-Autochtones | employment_rate | 92,2 | publié |
| Yukon | 14-10-0292-01 | août-oct. 2026 | 15-24 (résidu 15+ − 25+ : chômeurs 0.5 k / actifs 3.1 k) | unemployment_rate | 16,1 | calculé, très imprécis |
| Yukon | 14-10-0292-01 | août-oct. 2026 | 15-24 (résidu : emploi 2.6 k / population 5.4 k) | employment_rate | 48,1 | calculé, très imprécis |
| Territoires du Nord-Ouest | 14-10-0464-01 | 2023 (moyenne annuelle) | 15+ | unemployment_rate | 6,0 | publié |
| Territoires du Nord-Ouest | 14-10-0464-01 | 2024 (moyenne annuelle) | 15+ | unemployment_rate | 5,8 | publié |
| Territoires du Nord-Ouest | 14-10-0464-01 | 2025 (moyenne annuelle) | 15+ | unemployment_rate | 5,0 | publié |
| Territoires du Nord-Ouest | 14-10-0292-01 | août-oct. 2026 (moy. mobile 3 mois, non désaisonnalisée) | 15+ | unemployment_rate | 5,1 | publié |
| Territoires du Nord-Ouest | 14-10-0292-01 | août-oct. 2026 (moy. mobile 3 mois, non désaisonnalisée) | 25+ | unemployment_rate | 3,6 | publié |
| Territoires du Nord-Ouest | 14-10-0446-01 | 2025 (moyenne annuelle) | 15+, ensemble | unemployment_rate | 5,0 | publié |
| Territoires du Nord-Ouest | 14-10-0446-01 | 2025 (moyenne annuelle) | 15+, Autochtones | unemployment_rate | 9,2 | publié |
| Territoires du Nord-Ouest | 14-10-0446-01 | 2025 (moyenne annuelle) | 15+, non-Autochtones | unemployment_rate | 2,6 | publié |
| Territoires du Nord-Ouest | 14-10-0446-01 | 2025 (moyenne annuelle) | 25-54, ensemble | unemployment_rate | 3,6 | publié |
| Territoires du Nord-Ouest | 14-10-0446-01 | 2025 (moyenne annuelle) | 25-54, Autochtones | unemployment_rate | 7,3 | publié |
| Territoires du Nord-Ouest | 14-10-0446-01 | 2025 (moyenne annuelle) | 25-54, non-Autochtones | unemployment_rate | 2,7 | publié |
| Territoires du Nord-Ouest | 14-10-0464-01 | 2023 (moyenne annuelle) | 15+ | employment_rate | 69,9 | publié |
| Territoires du Nord-Ouest | 14-10-0464-01 | 2024 (moyenne annuelle) | 15+ | employment_rate | 66,6 | publié |
| Territoires du Nord-Ouest | 14-10-0464-01 | 2025 (moyenne annuelle) | 15+ | employment_rate | 65,5 | publié |
| Territoires du Nord-Ouest | 14-10-0292-01 | août-oct. 2026 (moy. mobile 3 mois, non désaisonnalisée) | 15+ | employment_rate | 68,1 | publié |
| Territoires du Nord-Ouest | 14-10-0292-01 | août-oct. 2026 (moy. mobile 3 mois, non désaisonnalisée) | 25+ | employment_rate | 71,9 | publié |
| Territoires du Nord-Ouest | 14-10-0446-01 | 2025 (moyenne annuelle) | 15+, ensemble | employment_rate | 65,5 | publié |
| Territoires du Nord-Ouest | 14-10-0446-01 | 2025 (moyenne annuelle) | 15+, Autochtones | employment_rate | 50,6 | publié |
| Territoires du Nord-Ouest | 14-10-0446-01 | 2025 (moyenne annuelle) | 15+, non-Autochtones | employment_rate | 77,7 | publié |
| Territoires du Nord-Ouest | 14-10-0446-01 | 2025 (moyenne annuelle) | 25-54, ensemble | employment_rate | 82,1 | publié |
| Territoires du Nord-Ouest | 14-10-0446-01 | 2025 (moyenne annuelle) | 25-54, Autochtones | employment_rate | 66,2 | publié |
| Territoires du Nord-Ouest | 14-10-0446-01 | 2025 (moyenne annuelle) | 25-54, non-Autochtones | employment_rate | 90,8 | publié |
| Territoires du Nord-Ouest | 14-10-0292-01 | août-oct. 2026 | 15-24 (résidu 15+ − 25+ : chômeurs 0.5 k / actifs 3.2 k) | unemployment_rate | 15,6 | calculé, très imprécis |
| Territoires du Nord-Ouest | 14-10-0292-01 | août-oct. 2026 | 15-24 (résidu : emploi 2.8 k / population 5.8 k) | employment_rate | 48,3 | calculé, très imprécis |
| Nunavut | 14-10-0464-01 | 2023 (moyenne annuelle) | 15+ | unemployment_rate | 13,2 | publié |
| Nunavut | 14-10-0464-01 | 2024 (moyenne annuelle) | 15+ | unemployment_rate | 8,3 | publié |
| Nunavut | 14-10-0464-01 | 2025 (moyenne annuelle) | 15+ | unemployment_rate | 10,3 | publié |
| Nunavut | 14-10-0292-01 | août-oct. 2026 (moy. mobile 3 mois, non désaisonnalisée) | 15+ | unemployment_rate | 12,2 | publié |
| Nunavut | 14-10-0292-01 | août-oct. 2026 (moy. mobile 3 mois, non désaisonnalisée) | 25+ | unemployment_rate | 8,8 | publié |
| Nunavut | 14-10-0446-01 | 2025 (moyenne annuelle) | 15+, ensemble | unemployment_rate | 10,6 | publié |
| Nunavut | 14-10-0446-01 | 2025 (moyenne annuelle) | 15+, Autochtones | unemployment_rate | 13,2 | publié |
| Nunavut | 14-10-0446-01 | 2025 (moyenne annuelle) | 15+, non-Autochtones | unemployment_rate | supprimé (F/x) | publié |
| Nunavut | 14-10-0446-01 | 2025 (moyenne annuelle) | 25-54, ensemble | unemployment_rate | 10,0 | publié |
| Nunavut | 14-10-0446-01 | 2025 (moyenne annuelle) | 25-54, Autochtones | unemployment_rate | 13,7 | publié |
| Nunavut | 14-10-0446-01 | 2025 (moyenne annuelle) | 25-54, non-Autochtones | unemployment_rate | supprimé (F/x) | publié |
| Nunavut | 14-10-0464-01 | 2023 (moyenne annuelle) | 15+ | employment_rate | 53,7 | publié |
| Nunavut | 14-10-0464-01 | 2024 (moyenne annuelle) | 15+ | employment_rate | 54,4 | publié |
| Nunavut | 14-10-0464-01 | 2025 (moyenne annuelle) | 15+ | employment_rate | 53,6 | publié |
| Nunavut | 14-10-0292-01 | août-oct. 2026 (moy. mobile 3 mois, non désaisonnalisée) | 15+ | employment_rate | 54,4 | publié |
| Nunavut | 14-10-0292-01 | août-oct. 2026 (moy. mobile 3 mois, non désaisonnalisée) | 25+ | employment_rate | 61,3 | publié |
| Nunavut | 14-10-0446-01 | 2025 (moyenne annuelle) | 15+, ensemble | employment_rate | 53,7 | publié |
| Nunavut | 14-10-0446-01 | 2025 (moyenne annuelle) | 15+, Autochtones | employment_rate | 45,2 | publié |
| Nunavut | 14-10-0446-01 | 2025 (moyenne annuelle) | 15+, non-Autochtones | employment_rate | 86,8 | publié |
| Nunavut | 14-10-0446-01 | 2025 (moyenne annuelle) | 25-54, ensemble | employment_rate | 64,3 | publié |
| Nunavut | 14-10-0446-01 | 2025 (moyenne annuelle) | 25-54, Autochtones | employment_rate | 54,3 | publié |
| Nunavut | 14-10-0446-01 | 2025 (moyenne annuelle) | 25-54, non-Autochtones | employment_rate | 94,7 | publié |
| Nunavut | 14-10-0292-01 | août-oct. 2026 | 15-24 (résidu 15+ − 25+ : chômeurs 0.8 k / actifs 3.0 k) | unemployment_rate | 26,7 | calculé, très imprécis |
| Nunavut | 14-10-0292-01 | août-oct. 2026 | 15-24 (résidu : emploi 2.1 k / population 6.6 k) | employment_rate | 31,8 | calculé, très imprécis |

| Aire (14-10-0480-01) | TC moyen sept. 2025-août 2026 | Erreur-type moyenne | TE moyen | Erreur-type moyenne | Statut |
|---|---|---|---|---|---|
| Whitehorse CA | valeurs vides | — | valeurs vides | — | membre présent dans le tableau mais sans valeur (12 derniers mois) |
| Yellowknife CA | valeurs vides | — | valeurs vides | — | membre présent dans le tableau mais sans valeur (12 derniers mois) |
| Iqaluit SLA | valeurs vides | — | valeurs vides | — | membre présent dans le tableau mais sans valeur (12 derniers mois) |
| Bathurst CA | 8,3 | 0,9 | 51,0 | 2,3 | calculé (moyenne simple de 12 estimations mensuelles publiées) |
| Edmundston CA | 6,5 | 0,9 | 54,3 | 2,4 | calculé (moyenne simple de 12 estimations mensuelles publiées) |
| Hawkesbury (Ont.) CA | 7,0 | 1,0 | 52,4 | 2,5 | calculé (moyenne simple de 12 estimations mensuelles publiées) |
| Cornwall CA | 5,9 | 0,9 | 57,0 | 2,3 | calculé (moyenne simple de 12 estimations mensuelles publiées) |
| Timmins CA | 6,5 | 0,9 | 62,8 | 2,3 | calculé (moyenne simple de 12 estimations mensuelles publiées) |
| Prince George CA | 6,8 | 0,9 | 62,7 | 2,3 | calculé (moyenne simple de 12 estimations mensuelles publiées) |

- Écart entre deux tableaux EPA pour le Nunavut en 2025 : TC 10,3 % et TE 53,6 % dans 14-10-0464-01, contre TC 10,6 % et TE 53,7 % dans 14-10-0446-01 (en 2024 : 8,3 % / 54,4 % contre 8,3 % / 54,2 %). Les deux séries ne sont donc pas strictement identiques (pondération ou univers différents) ; je n'ai pas trouvé d'explication publiée — [14-10-0464-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=1410046401) ; [14-10-0446-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=1410044601)
- Les cellules « supprimé » du tableau 14-10-0446-01 (par exemple TC des 25-54 ans autochtones au Yukon, TC des non-Autochtones au Nunavut) reviennent sans valeur : effectifs trop faibles pour être publiés — [14-10-0446-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=1410044601)

**Bureau de la statistique des TNO (site statsnwt.ca inaccessible : informations issues d'extraits de moteur de recherche, documents non ouverts)**
- La page « Labour Force Activity » propose le tableau LFS101 « Labour force activity by sex, age, ethnicity, geography, education, 2001-2025 » : c'est la ventilation annuelle EPA par scolarité, âge, identité et géographie (Yellowknife / reste) recherchée — [statsnwt.ca, Labour Force Activity](https://www.statsnwt.ca/labour-income/labour-force-activity/)
- Rapport annuel EPA 2024 des TNO : le taux d'emploi allait de 39,0 % pour les personnes sans diplôme d'études secondaires à 85,2 % pour les titulaires d'un grade universitaire (EPA, 15 ans et plus, 2024) — [2024 Annual LFS, NWT Bureau of Statistics](https://www.statsnwt.ca/labour-income/labour-force-activity/2024%20Annual%20LFS.pdf)
- Rapport annuel EPA 2025 (publié le 9 janvier 2026) : population active des TNO en baisse de 200 personnes, à 24 100 ; concorde avec la valeur 24,1 milliers du tableau 14-10-0446-01 — [2025 Annual LFS, NWT Bureau of Statistics](https://www.statsnwt.ca/labour-income/labour-force-activity/2025%20Annual%20LFS.pdf)
- Enquête communautaire des TNO 2024 (NWT Community Survey) : taux d'emploi des TNO 67,8 %, de 28,8 % (Nahanni Butte) à 80,4 % (Norman Wells) selon la collectivité — [2024 NWT Community Survey, Labour Force](https://www.statsnwt.ca/recent_surveys/2024NWTCommSurvey/2024_Labour%20Force.pdf)
- Même enquête, volet éducation : 27,4 % des 15 ans et plus ont le diplôme secondaire comme plus haut niveau ; 38 % des Autochtones de 25 ans et plus n'ont pas de diplôme secondaire, contre 4 % des non-Autochtones — [2024 NWT Community Survey, Education](https://www.statsnwt.ca/recent_surveys/2024NWTCommSurvey/2024%20NWT%20Community%20Survey%20Education_Final.pdf)
- Le Bureau publie aussi une fiche « Census Labour and Education » (Recensement 2021) et des affiches par collectivité, dont Yellowknife — [Census 2021 Labour and Education](https://www.statsnwt.ca/census/2021/Census_Labour%20and%20Education.pdf) ; [affiche Yellowknife 2024](https://www.statsnwt.ca/community-data/CommunityPosters/2024%20Community%20Survey%20Posters%20(Yellowknife).pdf)

**Bureau de la statistique du Yukon (yukon.ca protégé par un contrôle anti-robot : informations issues d'extraits de moteur de recherche)**
- « Yukon Employment Annual Review, 2025 » (12 pages, page modifiée le 4 février 2026) : TC annuel 2025 de 4,2 %, le plus bas du Canada ; la revue 2024 donnait 4,3 % (+0,8 point par rapport à 3,5 % en 2023). D'après les extraits, la revue contient des ventilations Autochtones / non-Autochtones et Whitehorse / reste du Yukon, non récupérées — [Yukon Employment Annual Review 2025](https://yukon.ca/en/yukon-employment-annual-review-2025) ; [données historiques 2016-2025](https://yukon.ca/sites/default/files/2026-01/fin-yukon-employment-historical-data-2016-2025.pdf)

**Nunavut**
- Aucune publication du Bureau de la statistique du Nunavut ventilée par diplôme ou propre à Iqaluit n'a été trouvée. Le Guichet-Emplois confirme la hausse de 2,0 points du TC du Nunavut en 2025, à 10,3 %, le plus élevé du Canada — [Guichet-Emplois, portrait des territoires](https://www.jobbank.gc.ca/trend-analysis/job-market-reports/nunavut/environmental-scan)

### Inferences
- Pour afficher un profil « âge × diplôme » récent dans les territoires, il n'existe que deux voies : (a) le tableau LFS101 du Bureau des TNO (à télécharger à la main ; EPA, donc cohérent avec le reste de l'étude, mais limité aux TNO) ; (b) le profil du Recensement 2021, recalé sur le niveau EPA le plus récent (section 5).
- L'identité autochtone structure plus fortement les écarts que l'âge : en 2025, TE des 25-54 ans de 66,2 % (Autochtones) contre 90,8 % (non-Autochtones) aux TNO, 54,3 % contre 94,7 % au Nunavut. Le diplôme et l'identité étant corrélés, un profil par diplôme capte une partie de cet écart.
- Le calcul « 15-24 ans = 15+ moins 25+ » à partir du tableau 14-10-0292-01 est possible mais très imprécis (effectifs publiés en milliers à une décimale : 0,5 millier de chômeurs sur 3,1 milliers d'actifs au Yukon) ; à présenter comme ordre de grandeur seulement.

### Gaps
- Tableau LFS101 des TNO (scolarité × âge × Yellowknife/reste, 2001-2025) : non ouvert (statsnwt.ca en erreur 504 à trois reprises). À télécharger manuellement : c'est la seule source EPA par diplôme dans les territoires.
- Revue annuelle de l'emploi du Yukon 2025 : chiffres Whitehorse / reste du Yukon, par âge et identité non récupérés (site protégé) ; aucun indice qu'elle contienne une ventilation par diplôme.
- Nunavut et Iqaluit : aucune ventilation EPA par diplôme ou par collectivité trouvée ; valeurs de petits domaines vides dans 14-10-0480-01.
- Tableau 14-10-0393-01 cité dans la demande : non vérifié (il n'apparaît pas dans la liste des tableaux « territoires » actifs que j'ai filtrée ; à confirmer).
- Erreurs-types des estimations territoriales (14-10-0292-01) : non renvoyées par le service web pour les séries non désaisonnalisées.

## 2. Recensement de 2021 : profil diplôme × âge sous le niveau provincial (22 villes, 3 territoires, 5 provinces)

### Takeaway
Le tableau 98-10-0400-01 croise situation d'activité × plus haut certificat × âge × genre pour toutes les subdivisions de recensement (municipalités), y compris Whitehorse, Yellowknife et Iqaluit, et publie directement les taux. Il confirme un gradient très marqué dans le Nord : chez les 25-54 ans, le TC va de 22,1 % (aucun diplôme) à 1,5 % (baccalauréat ou plus) à Yellowknife, de 22,1 % à 1,7 % à Iqaluit, de 13,5 % à 2,9 % à Whitehorse. Réserve : semaine de référence du 2 au 8 mai 2021, en pleine pandémie.

### Cited Findings

**Tableaux confirmés (titres et dimensions lus dans les métadonnées du service web)**
- 98-10-0400-01 « Situation d'activité selon le plus haut niveau de scolarité : Canada, provinces et territoires, divisions de recensement et subdivisions de recensement » : 5 468 géographies, genre (3), âge (15 groupes, dont 15-24, 25-54, 55-64), plus haut certificat (16 niveaux), situation d'activité (8 postes, dont TC et TE publiés), statistiques (effectif et bornes d'intervalle à 95 %) ; diffusé le 21 juin 2023. C'est LE tableau à utiliser au niveau municipal — [StatCan 98-10-0400-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=9810040001) ; [DOI](https://doi.org/10.25318/9810040001-fra)
- 98-10-0451-01 « Situation d'activité selon le plus haut niveau de scolarité, l'identité autochtone, l'âge et le genre : RMR et AR avec parties » : 174 géographies (dont Whitehorse AR et Yellowknife AR, mais pas Iqaluit qui n'est pas une AR), mêmes dimensions plus l'identité autochtone (9 postes) ; diffusé le 29 juin 2023. À utiliser si l'on veut l'aire métropolitaine plutôt que la municipalité, ou l'identité autochtone — [StatCan 98-10-0451-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=9810045101)
- 98-10-0445-01 : situation d'activité selon le principal domaine d'études, le plus haut niveau de scolarité, le lieu des études, l'âge et le genre (RMR/AR) — utile pour le domaine d'études, pas nécessaire ici — [StatCan 98-10-0445-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=9810044501)
- 98-10-0449-01 : groupe de base de la profession selon la situation d'activité, le plus haut niveau de scolarité, l'âge et le genre (RMR/AR) — [StatCan 98-10-0449-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=9810044901)
- 98-10-0446-01 : situation d'activité selon la minorité visible, le statut d'immigrant, le plus haut niveau de scolarité, l'âge et le genre (RMR/AR) — [StatCan 98-10-0446-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=9810044601)
- Contrôle de cohérence : le tableau donne pour le Canada, 15 ans et plus, un TC de 10,3 % et un TE de 57,1 % (30 335 915 personnes de 15 ans et plus) — [StatCan 98-10-0400-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=9810040001)

**Valeurs extraites (toutes publiées dans 98-10-0400-01, sauf la colonne « postsec. tous (calc.) » = somme des effectifs « postsecondaire inférieur au baccalauréat » et « baccalauréat ou plus », taux = chômeurs / actifs ou personnes occupées / population).** Niveaux : aucun diplôme = « aucun certificat, diplôme ou grade » ; secondaire = diplôme d'études secondaires ou équivalent ; postsec. < bac = certificat ou diplôme postsecondaire inférieur au baccalauréat (métiers, collège, cégep, certificat universitaire inférieur) ; bac+ = baccalauréat ou grade supérieur. Les villes sont les subdivisions de recensement (municipalités), pas les régions métropolitaines. Sept cellules de petites villes (Hawkesbury notamment) sont absentes du service web et notées n.d.


**Yukon** (territoire) — population 15+ : 32780 ; population active 15+ : 23520

| Âge | TC tous | TC aucun dipl. | TC secondaire | TC postsec. < bac | TC bac+ | TC postsec. tous (calc.) | TE tous | TE aucun dipl. | TE secondaire | TE postsec. < bac | TE bac+ | TE postsec. tous (calc.) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15+ | 6,8 | 15,7 | 8,9 | 6,5 | 3,1 | 4,8 | 66,8 | 38,7 | 63,1 | 71,8 | 79,8 | 75,5 |
| 15-24 | 12,5 | 18,1 | 14,3 | 4,4 | 5,7* | 4,7 | 56,2 | 31,3 | 64,1 | 86,4 | 86,5* | 86,4 |
| 25-54 | 5,6 | 15,9 | 7,6 | 5,6 | 2,8 | 4,2 | 83,6 | 56,3 | 76,2 | 87,1 | 91,3 | 89,3 |
| 55-64 | 7,2 | 12,8 | 6,7 | 8,5 | 3,5 | 6,6 | 65,3 | 50,6 | 65,1 | 67,1 | 70,8 | 68,6 |

**Whitehorse** (ville (SDR), SDR 6001009) — population 15+ : 22785 ; population active 15+ : 16900

| Âge | TC tous | TC aucun dipl. | TC secondaire | TC postsec. < bac | TC bac+ | TC postsec. tous (calc.) | TE tous | TE aucun dipl. | TE secondaire | TE postsec. < bac | TE bac+ | TE postsec. tous (calc.) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15+ | 5,6 | 12,9 | 7,8 | 5,0 | 2,9 | 3,9 | 70,0 | 39,5 | 66,1 | 74,7 | 81,1 | 77,8 |
| 15-24 | 10,0 | 13,4 | 12,6 | 3,2 | 7,4* | 4,1 | 59,5 | 33,2 | 67,0 | 89,3 | 82,8* | 87,9 |
| 25-54 | 4,7 | 13,5 | 6,5 | 4,5 | 2,9 | 3,6 | 86,2 | 61,1 | 78,7 | 89,7 | 91,4 | 90,6 |
| 55-64 | 5,1 | 9,5* | 4,9 | 6,4 | 2,1 | 4,6 | 67,3 | 49,4 | 69,6 | 68,9 | 70,1 | 69,4 |

**Territoires du Nord-Ouest** (territoire) — population 15+ : 31910 ; population active 15+ : 22555

| Âge | TC tous | TC aucun dipl. | TC secondaire | TC postsec. < bac | TC bac+ | TC postsec. tous (calc.) | TE tous | TE aucun dipl. | TE secondaire | TE postsec. < bac | TE bac+ | TE postsec. tous (calc.) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15+ | 8,6 | 21,0 | 10,5 | 6,3 | 2,0 | 4,3 | 64,6 | 36,5 | 65,6 | 74,0 | 84,4 | 78,6 |
| 15-24 | 16,0 | 19,1 | 17,0 | 9,2 | 6,8* | 8,3 | 48,0 | 30,4 | 57,7 | 74,7 | 75,9 | 75,2 |
| 25-54 | 7,5 | 23,4 | 8,7 | 5,4 | 1,9 | 3,7 | 76,8 | 45,3 | 73,8 | 85,4 | 91,8 | 88,5 |
| 55-64 | 7,2 | 15,9 | 5,3 | 7,2 | 1,7 | 5,1 | 67,2 | 46,1 | 72,6 | 70,2 | 79,5 | 73,6 |

**Yellowknife** (ville (SDR), SDR 6106023) — population 15+ : 15790 ; population active 15+ : 12475

| Âge | TC tous | TC aucun dipl. | TC secondaire | TC postsec. < bac | TC bac+ | TC postsec. tous (calc.) | TE tous | TE aucun dipl. | TE secondaire | TE postsec. < bac | TE bac+ | TE postsec. tous (calc.) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15+ | 5,7 | 18,6 | 8,8 | 3,7 | 1,6 | 2,5 | 74,4 | 44,0 | 70,8 | 81,2 | 85,3 | 83,4 |
| 15-24 | 12,9 | 14,8 | 15,9 | 4,3* | 0,0* | n.d. | 57,0 | 37,7 | 63,0 | 84,6 | 75,6* | n.d. |
| 25-54 | 4,1 | 22,1 | 5,7 | 2,7 | 1,5 | 2,0 | 85,9 | 54,6 | 79,7 | 91,2 | 92,6 | 92,0 |
| 55-64 | 5,0 | 16,7* | 4,5 | 5,3 | 2,5 | 3,8 | 73,7 | 55,4 | 77,0 | 71,6 | 79,2 | 75,4 |

**Nunavut** (territoire) — population 15+ : 24535 ; population active 15+ : 14380

| Âge | TC tous | TC aucun dipl. | TC secondaire | TC postsec. < bac | TC bac+ | TC postsec. tous (calc.) | TE tous | TE aucun dipl. | TE secondaire | TE postsec. < bac | TE bac+ | TE postsec. tous (calc.) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15+ | 16,9 | 27,8 | 16,2 | 11,9 | 2,1 | 8,0 | 48,7 | 29,6 | 57,5 | 69,2 | 90,2 | 76,7 |
| 15-24 | 27,7 | 35,2 | 20,3 | 20,4* | 28,6* | 21,4 | 28,5 | 18,6 | 47,8 | 60,0 | 66,7* | 60,8 |
| 25-54 | 16,0 | 27,9 | 15,5 | 12,1 | 1,9 | 7,8 | 57,5 | 37,0 | 62,9 | 72,2 | 92,7 | 80,0 |
| 55-64 | 10,0 | 16,7 | 6,4* | 9,6 | 2,7 | 7,0 | 58,5 | 38,4 | 69,4 | 70,6 | 88,0 | 76,5 |

**Iqaluit** (ville (SDR), SDR 6204003) — population 15+ : 5560 ; population active 15+ : 4220

| Âge | TC tous | TC aucun dipl. | TC secondaire | TC postsec. < bac | TC bac+ | TC postsec. tous (calc.) | TE tous | TE aucun dipl. | TE secondaire | TE postsec. < bac | TE bac+ | TE postsec. tous (calc.) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15+ | 7,3 | 22,3 | 8,5 | 5,2 | 2,1 | 3,6 | 70,4 | 34,7 | 71,5 | 80,3 | 92,1 | 86,3 |
| 15-24 | 18,7 | 25,0* | 17,1* | 13,3* | 0,0* | n.d. | 41,1 | 24,5 | 61,4 | 57,1* | 75,0* | n.d. |
| 25-54 | 6,0 | 22,1 | 6,5 | 4,4 | 1,7 | 2,9 | 78,5 | 43,8 | 75,7 | 83,3 | 93,5 | 88,8 |
| 55-64 | 5,7 | 14,3* | 9,5* | 6,4* | 0,0* | n.d. | 76,8 | 38,7* | 80,0* | 81,1 | 88,6* | n.d. |

**Canada** (pays) — population 15+ : 30335915 ; population active 15+ : 19310340

| Âge | TC tous | TC aucun dipl. | TC secondaire | TC postsec. < bac | TC bac+ | TC postsec. tous (calc.) | TE tous | TE aucun dipl. | TE secondaire | TE postsec. < bac | TE bac+ | TE postsec. tous (calc.) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15+ | 10,3 | 16,8 | 14,3 | 9,0 | 6,7 | 7,9 | 57,1 | 30,2 | 50,9 | 63,6 | 72,1 | 67,6 |
| 15-24 | 19,5 | 20,3 | 22,2 | 13,9 | 17,8 | 15,4 | 48,5 | 26,9 | 52,9 | 71,2 | 65,9 | 69,2 |
| 25-54 | 8,3 | 15,6 | 11,8 | 8,0 | 5,8 | 6,8 | 78,5 | 54,6 | 70,3 | 81,7 | 85,6 | 83,7 |
| 55-64 | 9,6 | 14,3 | 10,8 | 9,2 | 6,7 | 8,2 | 59,8 | 45,6 | 56,2 | 62,9 | 68,3 | 65,0 |

**Ontario** (province) — population 15+ : 11782820 ; population active 15+ : 7399200

| Âge | TC tous | TC aucun dipl. | TC secondaire | TC postsec. < bac | TC bac+ | TC postsec. tous (calc.) | TE tous | TE aucun dipl. | TE secondaire | TE postsec. < bac | TE bac+ | TE postsec. tous (calc.) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15+ | 12,2 | 19,0 | 17,7 | 11,2 | 7,9 | 9,4 | 55,1 | 26,6 | 47,5 | 61,1 | 71,1 | 66,3 |
| 15-24 | 25,3 | 24,8 | 29,3 | 19,2 | 21,2 | 20,2 | 42,9 | 22,2 | 45,2 | 66,3 | 62,4 | 64,3 |
| 25-54 | 9,9 | 17,7 | 14,2 | 10,3 | 6,8 | 8,3 | 76,0 | 50,6 | 66,3 | 78,3 | 84,1 | 81,6 |
| 55-64 | 10,6 | 15,0 | 12,5 | 10,4 | 7,5 | 9,1 | 59,1 | 43,5 | 54,4 | 62,5 | 68,0 | 64,9 |

**Grand Sudbury** (ville (SDR), SDR 3553005) — population 15+ : 137430 ; population active 15+ : 84005

| Âge | TC tous | TC aucun dipl. | TC secondaire | TC postsec. < bac | TC bac+ | TC postsec. tous (calc.) | TE tous | TE aucun dipl. | TE secondaire | TE postsec. < bac | TE bac+ | TE postsec. tous (calc.) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15+ | 10,4 | 21,9 | 14,6 | 8,5 | 5,0 | 7,2 | 54,8 | 23,8 | 49,8 | 63,6 | 72,4 | 66,7 |
| 15-24 | 19,8 | 26,4 | 21,8 | 12,5 | 14,9 | 13,3 | 53,9 | 30,1 | 58,8 | 77,9 | 71,8 | 75,7 |
| 25-54 | 8,1 | 20,7 | 12,6 | 7,6 | 4,0 | 6,1 | 78,3 | 45,5 | 67,5 | 82,3 | 89,5 | 85,1 |
| 55-64 | 9,0 | 13,6 | 10,5 | 8,9 | 4,1 | 7,6 | 54,4 | 38,7 | 51,6 | 57,8 | 63,3 | 59,3 |

**Timmins** (ville (SDR), SDR 3556027) — population 15+ : 33660 ; population active 15+ : 21005

| Âge | TC tous | TC aucun dipl. | TC secondaire | TC postsec. < bac | TC bac+ | TC postsec. tous (calc.) | TE tous | TE aucun dipl. | TE secondaire | TE postsec. < bac | TE bac+ | TE postsec. tous (calc.) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15+ | 8,6 | 13,4 | 11,9 | 6,2 | 5,3 | 5,9 | 57,0 | 29,7 | 57,2 | 66,7 | 75,9 | 69,1 |
| 15-24 | 16,5 | 18,4 | 17,1 | 15,5 | 9,8 | 14,1 | 54,7 | 30,9 | 64,5 | 74,4 | 75,0 | 74,6 |
| 25-54 | 6,9 | 11,9 | 10,7 | 5,0 | 4,2 | 4,7 | 78,5 | 51,0 | 71,3 | 85,1 | 90,6 | 86,7 |
| 55-64 | 7,0 | 7,8 | 7,8 | 6,5 | 6,3 | 6,5 | 55,2 | 44,5 | 56,2 | 58,3 | 62,7 | 59,2 |

**Hawkesbury** (ville (SDR), SDR 3502008) — population 15+ : 8630 ; population active 15+ : 4165

| Âge | TC tous | TC aucun dipl. | TC secondaire | TC postsec. < bac | TC bac+ | TC postsec. tous (calc.) | TE tous | TE aucun dipl. | TE secondaire | TE postsec. < bac | TE bac+ | TE postsec. tous (calc.) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15+ | 11,5 | 23,4 | 10,7 | 9,8 | 4,2 | 8,5 | 42,7 | 20,1 | 46,8 | 54,5 | 59,7 | 55,7 |
| 15-24 | 11,1 | 11,5* | 12,8* | 10,0* | 0,0* | n.d. | 52,7 | 31,9 | 63,1 | 79,2* | 100,0* | n.d. |
| 25-54 | 11,0 | 25,5* | 9,8 | 11,0 | 5,4 | 9,3 | 64,9 | 31,8 | 66,7 | 69,9 | 92,1 | 75,6 |
| 55-64 | 11,2 | 23,8* | 8,6 | 5,4 | 0,0* | n.d. | 49,4 | 33,0 | 48,1 | 65,7 | 50,0* | n.d. |

**Cornwall** (ville (SDR), SDR 3501012) — population 15+ : 38835 ; population active 15+ : 20310

| Âge | TC tous | TC aucun dipl. | TC secondaire | TC postsec. < bac | TC bac+ | TC postsec. tous (calc.) | TE tous | TE aucun dipl. | TE secondaire | TE postsec. < bac | TE bac+ | TE postsec. tous (calc.) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15+ | 12,4 | 18,1 | 14,4 | 10,0 | 8,6 | 9,6 | 45,8 | 24,3 | 45,1 | 56,0 | 61,1 | 57,3 |
| 15-24 | 18,2 | 23,8 | 18,1 | 15,1 | 15,9* | 15,3 | 51,0 | 28,4 | 58,8 | 73,8 | 80,9* | 75,5 |
| 25-54 | 11,4 | 19,1 | 12,9 | 10,1 | 7,9 | 9,4 | 67,6 | 38,8 | 63,1 | 76,9 | 81,7 | 78,3 |
| 55-64 | 10,6 | 13,3 | 13,5 | 7,8 | 5,7 | 7,4 | 50,9 | 35,9 | 50,7 | 57,4 | 55,1 | 57,0 |

**Hamilton** (ville (SDR), SDR 3525005) — population 15+ : 469795 ; population active 15+ : 290990

| Âge | TC tous | TC aucun dipl. | TC secondaire | TC postsec. < bac | TC bac+ | TC postsec. tous (calc.) | TE tous | TE aucun dipl. | TE secondaire | TE postsec. < bac | TE bac+ | TE postsec. tous (calc.) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15+ | 12,3 | 20,0 | 17,2 | 11,0 | 7,6 | 9,3 | 54,3 | 25,4 | 48,6 | 61,6 | 71,6 | 66,2 |
| 15-24 | 24,1 | 25,9 | 27,3 | 18,3 | 18,9 | 18,6 | 44,9 | 24,0 | 48,2 | 68,2 | 64,6 | 66,5 |
| 25-54 | 10,2 | 18,9 | 14,3 | 10,1 | 6,5 | 8,2 | 74,5 | 46,1 | 65,7 | 78,0 | 84,1 | 81,1 |
| 55-64 | 10,7 | 15,7 | 11,9 | 10,1 | 7,9 | 9,2 | 57,3 | 39,1 | 54,3 | 62,0 | 67,0 | 63,8 |

**London** (ville (SDR), SDR 3539036) — population 15+ : 347330 ; population active 15+ : 214465

| Âge | TC tous | TC aucun dipl. | TC secondaire | TC postsec. < bac | TC bac+ | TC postsec. tous (calc.) | TE tous | TE aucun dipl. | TE secondaire | TE postsec. < bac | TE bac+ | TE postsec. tous (calc.) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15+ | 13,3 | 22,3 | 18,9 | 12,1 | 8,3 | 10,1 | 53,6 | 24,6 | 46,1 | 60,6 | 68,2 | 64,4 |
| 15-24 | 26,0 | 31,3 | 29,1 | 19,8 | 20,4 | 20,1 | 43,3 | 20,4 | 45,7 | 67,6 | 62,2 | 64,9 |
| 25-54 | 10,9 | 20,6 | 15,6 | 11,0 | 7,3 | 9,0 | 73,4 | 43,0 | 64,1 | 77,4 | 81,6 | 79,7 |
| 55-64 | 10,6 | 13,9 | 13,1 | 11,1 | 6,7 | 9,1 | 57,0 | 38,2 | 52,3 | 60,7 | 66,3 | 63,1 |

**Alberta** (province) — population 15+ : 3375130 ; population active 15+ : 2295380

| Âge | TC tous | TC aucun dipl. | TC secondaire | TC postsec. < bac | TC bac+ | TC postsec. tous (calc.) | TE tous | TE aucun dipl. | TE secondaire | TE postsec. < bac | TE bac+ | TE postsec. tous (calc.) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15+ | 11,5 | 20,5 | 14,8 | 9,8 | 7,5 | 8,7 | 60,2 | 32,7 | 56,8 | 66,2 | 73,5 | 69,5 |
| 15-24 | 22,4 | 29,4 | 23,1 | 15,3 | 18,0 | 16,3 | 46,0 | 21,0 | 55,2 | 72,7 | 68,3 | 70,9 |
| 25-54 | 9,5 | 18,2 | 12,2 | 8,9 | 6,7 | 7,8 | 77,7 | 55,1 | 71,9 | 80,9 | 84,5 | 82,8 |
| 55-64 | 11,2 | 17,0 | 11,4 | 10,6 | 8,9 | 10,0 | 61,7 | 48,4 | 59,4 | 64,7 | 68,0 | 66,0 |

**Calgary** (ville (SDR), SDR 4806016) — population 15+ : 1056230 ; population active 15+ : 730055

| Âge | TC tous | TC aucun dipl. | TC secondaire | TC postsec. < bac | TC bac+ | TC postsec. tous (calc.) | TE tous | TE aucun dipl. | TE secondaire | TE postsec. < bac | TE bac+ | TE postsec. tous (calc.) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15+ | 12,5 | 23,1 | 17,2 | 11,4 | 8,7 | 9,8 | 60,5 | 29,1 | 54,2 | 64,9 | 73,0 | 69,6 |
| 15-24 | 25,6 | 36,9 | 27,1 | 17,4 | 19,1 | 18,2 | 42,0 | 14,2 | 49,1 | 68,9 | 66,8 | 67,9 |
| 25-54 | 10,1 | 18,9 | 13,7 | 10,3 | 7,6 | 8,6 | 78,0 | 56,0 | 70,9 | 79,5 | 83,5 | 82,0 |
| 55-64 | 12,7 | 19,3 | 13,1 | 12,3 | 11,1 | 11,7 | 61,0 | 46,9 | 57,9 | 63,5 | 65,8 | 64,7 |

**Colombie-Britannique** (province) — population 15+ : 4200425 ; population active 15+ : 2657275

| Âge | TC tous | TC aucun dipl. | TC secondaire | TC postsec. < bac | TC bac+ | TC postsec. tous (calc.) | TE tous | TE aucun dipl. | TE secondaire | TE postsec. < bac | TE bac+ | TE postsec. tous (calc.) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15+ | 8,4 | 14,7 | 11,0 | 7,4 | 5,8 | 6,5 | 57,9 | 31,1 | 53,3 | 62,2 | 71,1 | 66,6 |
| 15-24 | 15,1 | 16,8 | 16,4 | 9,9 | 14,5 | 11,8 | 51,7 | 26,8 | 57,5 | 76,3 | 69,1 | 73,2 |
| 25-54 | 7,0 | 13,7 | 9,0 | 6,8 | 5,2 | 5,9 | 79,4 | 58,3 | 73,2 | 82,0 | 85,0 | 83,7 |
| 55-64 | 8,2 | 13,9 | 9,4 | 7,7 | 5,6 | 6,8 | 60,9 | 46,4 | 56,3 | 63,9 | 69,2 | 66,2 |

**Kelowna** (ville (SDR), SDR 5935010) — population 15+ : 122175 ; population active 15+ : 79955

| Âge | TC tous | TC aucun dipl. | TC secondaire | TC postsec. < bac | TC bac+ | TC postsec. tous (calc.) | TE tous | TE aucun dipl. | TE secondaire | TE postsec. < bac | TE bac+ | TE postsec. tous (calc.) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15+ | 7,9 | 13,8 | 10,6 | 6,7 | 5,4 | 6,1 | 60,2 | 33,8 | 56,8 | 64,0 | 71,8 | 67,4 |
| 15-24 | 14,1 | 17,0 | 15,3 | 10,1 | 11,2 | 10,5 | 61,8 | 34,6 | 67,7 | 78,1 | 77,9 | 78,0 |
| 25-54 | 6,5 | 11,7 | 8,8 | 5,7 | 5,1 | 5,4 | 82,2 | 62,2 | 76,0 | 84,8 | 86,9 | 85,9 |
| 55-64 | 7,2 | 13,2 | 7,6 | 7,4 | 4,1 | 6,2 | 63,2 | 53,7 | 59,5 | 65,0 | 69,3 | 66,5 |

**Nanaimo** (ville (SDR), SDR 5921007) — population 15+ : 82905 ; population active 15+ : 49975

| Âge | TC tous | TC aucun dipl. | TC secondaire | TC postsec. < bac | TC bac+ | TC postsec. tous (calc.) | TE tous | TE aucun dipl. | TE secondaire | TE postsec. < bac | TE bac+ | TE postsec. tous (calc.) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15+ | 8,4 | 15,6 | 10,2 | 7,4 | 5,5 | 6,5 | 55,2 | 32,4 | 53,0 | 57,8 | 67,6 | 61,9 |
| 15-24 | 13,9 | 18,2 | 15,4 | 6,2 | 9,4 | 7,3 | 57,6 | 33,7 | 64,2 | 83,4 | 77,0 | 81,1 |
| 25-54 | 7,2 | 16,7 | 8,7 | 7,0 | 4,7 | 5,9 | 78,8 | 53,7 | 73,0 | 82,0 | 86,5 | 84,1 |
| 55-64 | 7,3 | 9,7 | 6,2 | 7,5 | 7,3 | 7,5 | 58,9 | 45,8 | 56,9 | 60,9 | 64,5 | 62,2 |

**Prince George** (ville (SDR), SDR 5953023) — population 15+ : 62285 ; population active 15+ : 41275

| Âge | TC tous | TC aucun dipl. | TC secondaire | TC postsec. < bac | TC bac+ | TC postsec. tous (calc.) | TE tous | TE aucun dipl. | TE secondaire | TE postsec. < bac | TE bac+ | TE postsec. tous (calc.) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15+ | 9,4 | 21,5 | 11,3 | 7,2 | 4,4 | 6,1 | 60,0 | 30,4 | 59,1 | 67,1 | 77,5 | 71,0 |
| 15-24 | 15,6 | 25,9 | 15,9 | 8,1 | 9,1 | 8,4 | 58,1 | 27,3 | 67,7 | 83,4 | 78,3 | 82,0 |
| 25-54 | 8,0 | 22,0 | 10,1 | 6,7 | 3,8 | 5,4 | 78,2 | 50,2 | 72,6 | 83,7 | 88,5 | 85,8 |
| 55-64 | 8,5 | 13,6 | 9,3 | 7,6 | 5,9 | 7,1 | 59,1 | 40,3 | 56,3 | 64,0 | 72,9 | 66,5 |

**Nouveau-Brunswick** (province) — population 15+ : 648245 ; population active 15+ : 389465

| Âge | TC tous | TC aucun dipl. | TC secondaire | TC postsec. < bac | TC bac+ | TC postsec. tous (calc.) | TE tous | TE aucun dipl. | TE secondaire | TE postsec. < bac | TE bac+ | TE postsec. tous (calc.) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15+ | 10,3 | 19,5 | 13,6 | 8,6 | 5,0 | 7,2 | 53,9 | 26,2 | 52,0 | 61,4 | 71,6 | 65,2 |
| 15-24 | 17,5 | 14,4 | 21,0 | 12,2 | 17,7 | 13,9 | 53,4 | 33,0 | 58,3 | 75,4 | 67,0 | 72,7 |
| 25-54 | 8,0 | 21,0 | 11,2 | 7,1 | 3,9 | 5,8 | 78,7 | 50,3 | 70,1 | 82,9 | 89,4 | 85,6 |
| 55-64 | 11,0 | 20,0 | 11,1 | 10,0 | 4,4 | 8,2 | 56,2 | 41,5 | 56,1 | 59,8 | 65,9 | 61,7 |

**Moncton** (ville (SDR), SDR 1307022) — population 15+ : 65515 ; population active 15+ : 42570

| Âge | TC tous | TC aucun dipl. | TC secondaire | TC postsec. < bac | TC bac+ | TC postsec. tous (calc.) | TE tous | TE aucun dipl. | TE secondaire | TE postsec. < bac | TE bac+ | TE postsec. tous (calc.) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15+ | 9,1 | 15,5 | 13,1 | 7,7 | 5,4 | 6,6 | 59,0 | 29,7 | 54,3 | 64,8 | 74,6 | 69,2 |
| 15-24 | 16,1 | 15,1 | 20,3 | 9,4 | 14,8 | 11,0 | 55,7 | 31,1 | 59,5 | 80,1 | 68,0 | 76,1 |
| 25-54 | 7,4 | 17,6 | 10,7 | 6,7 | 4,7 | 5,7 | 80,4 | 53,9 | 70,9 | 84,0 | 88,6 | 86,2 |
| 55-64 | 8,4 | 10,6 | 9,1 | 9,7 | 4,3 | 7,5 | 59,5 | 45,7 | 62,9 | 57,2 | 67,8 | 61,1 |

**Bathurst** (ville (SDR), SDR 1315011) — population 15+ : 10305 ; population active 15+ : 5185

| Âge | TC tous | TC aucun dipl. | TC secondaire | TC postsec. < bac | TC bac+ | TC postsec. tous (calc.) | TE tous | TE aucun dipl. | TE secondaire | TE postsec. < bac | TE bac+ | TE postsec. tous (calc.) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15+ | 12,1 | 21,0 | 14,5 | 11,6 | 4,5 | 8,9 | 44,3 | 20,5 | 44,3 | 50,5 | 64,8 | 55,3 |
| 15-24 | 21,8 | 16,1* | 27,1 | 14,8* | 25,0* | 17,9 | 47,6 | 35,6 | 44,7 | 80,0* | 60,0* | 73,3 |
| 25-54 | 10,2 | 29,3* | 11,8 | 10,9 | 2,9 | 7,6 | 73,1 | 41,4 | 64,5 | 75,9 | 91,7 | 82,1 |
| 55-64 | 10,4 | 12,1* | 12,2 | 11,8 | 0,0* | n.d. | 51,7 | 34,9 | 57,9 | 56,3 | 51,9 | n.d. |

**Edmundston** (ville (SDR), SDR 1313027) — population 15+ : 13395 ; population active 15+ : 7405

| Âge | TC tous | TC aucun dipl. | TC secondaire | TC postsec. < bac | TC bac+ | TC postsec. tous (calc.) | TE tous | TE aucun dipl. | TE secondaire | TE postsec. < bac | TE bac+ | TE postsec. tous (calc.) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15+ | 7,9 | 11,5 | 12,2 | 6,8 | 3,3 | 5,5 | 51,0 | 28,6 | 45,8 | 58,5 | 67,6 | 61,6 |
| 15-24 | 15,2 | 10,1 | 22,2 | 11,4* | 0,0* | n.d. | 60,5 | 63,0 | 54,4 | 65,2* | 75,0* | n.d. |
| 25-54 | 5,6 | 7,8 | 7,2 | 5,5 | 3,2 | 4,6 | 82,5 | 63,5 | 75,9 | 84,5 | 90,4 | 86,8 |
| 55-64 | 8,0 | 14,7* | 10,7 | 5,7 | 4,0 | 5,3 | 54,6 | 37,2 | 54,4 | 58,4 | 60,0 | 58,8 |

**Québec (province)** (province) — population 15+ : 6918725 ; population active 15+ : 4435465

| Âge | TC tous | TC aucun dipl. | TC secondaire | TC postsec. < bac | TC bac+ | TC postsec. tous (calc.) | TE tous | TE aucun dipl. | TE secondaire | TE postsec. < bac | TE bac+ | TE postsec. tous (calc.) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15+ | 7,6 | 12,7 | 10,5 | 6,7 | 4,8 | 5,9 | 59,3 | 34,8 | 49,9 | 67,3 | 74,1 | 69,9 |
| 15-24 | 11,9 | 13,0 | 12,6 | 10,7 | 10,8 | 10,7 | 57,6 | 39,4 | 61,1 | 72,2 | 71,4 | 72,0 |
| 25-54 | 5,8 | 11,1 | 8,7 | 5,3 | 4,0 | 4,7 | 83,2 | 61,0 | 75,6 | 86,4 | 89,0 | 87,5 |
| 55-64 | 7,9 | 11,5 | 8,8 | 7,4 | 5,5 | 6,8 | 60,5 | 47,9 | 57,5 | 63,4 | 68,8 | 65,1 |

**Montréal** (ville (SDR), SDR 2466023) — population 15+ : 1453295 ; population active 15+ : 959135

| Âge | TC tous | TC aucun dipl. | TC secondaire | TC postsec. < bac | TC bac+ | TC postsec. tous (calc.) | TE tous | TE aucun dipl. | TE secondaire | TE postsec. < bac | TE bac+ | TE postsec. tous (calc.) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15+ | 10,3 | 18,3 | 15,2 | 10,7 | 6,8 | 8,4 | 59,2 | 27,1 | 47,6 | 64,7 | 74,9 | 70,4 |
| 15-24 | 17,2 | 21,1 | 18,9 | 16,0 | 13,4 | 15,1 | 48,4 | 22,3 | 48,8 | 62,5 | 66,9 | 63,9 |
| 25-54 | 8,7 | 17,0 | 13,7 | 9,4 | 6,2 | 7,4 | 78,0 | 51,7 | 67,0 | 79,3 | 84,7 | 82,6 |
| 55-64 | 10,3 | 16,6 | 12,7 | 10,2 | 6,9 | 8,5 | 60,1 | 40,8 | 54,2 | 63,1 | 71,7 | 67,3 |

**Québec (ville)** (ville (SDR), SDR 2423027) — population 15+ : 452695 ; population active 15+ : 293655

| Âge | TC tous | TC aucun dipl. | TC secondaire | TC postsec. < bac | TC bac+ | TC postsec. tous (calc.) | TE tous | TE aucun dipl. | TE secondaire | TE postsec. < bac | TE bac+ | TE postsec. tous (calc.) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15+ | 7,1 | 13,3 | 11,9 | 6,9 | 3,8 | 5,5 | 60,2 | 34,8 | 45,9 | 66,6 | 72,8 | 69,3 |
| 15-24 | 12,1 | 11,3 | 14,4 | 11,5 | 8,7 | 10,8 | 63,3 | 46,0 | 64,2 | 75,0 | 77,1 | 75,5 |
| 25-54 | 4,9 | 11,5 | 9,1 | 5,2 | 2,8 | 4,0 | 86,4 | 59,4 | 76,7 | 87,7 | 92,0 | 89,8 |
| 55-64 | 7,4 | 13,5 | 8,6 | 7,1 | 4,9 | 6,3 | 60,6 | 46,0 | 55,8 | 63,2 | 66,5 | 64,4 |

**Gatineau** (ville (SDR), SDR 2481017) — population 15+ : 233135 ; population active 15+ : 155310

| Âge | TC tous | TC aucun dipl. | TC secondaire | TC postsec. < bac | TC bac+ | TC postsec. tous (calc.) | TE tous | TE aucun dipl. | TE secondaire | TE postsec. < bac | TE bac+ | TE postsec. tous (calc.) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15+ | 9,3 | 16,3 | 14,1 | 8,4 | 4,9 | 6,7 | 60,5 | 35,7 | 51,3 | 66,4 | 76,3 | 71,0 |
| 15-24 | 17,7 | 18,7 | 20,3 | 15,1 | 12,3 | 14,3 | 55,5 | 36,8 | 59,8 | 70,8 | 75,7 | 72,1 |
| 25-54 | 6,7 | 13,0 | 10,7 | 6,6 | 4,1 | 5,3 | 82,9 | 59,2 | 75,4 | 84,7 | 90,5 | 87,7 |
| 55-64 | 9,7 | 16,3 | 10,6 | 9,5 | 5,9 | 8,0 | 54,0 | 41,5 | 49,6 | 56,4 | 63,5 | 59,2 |

**Sherbrooke** (ville (SDR), SDR 2443027) — population 15+ : 139990 ; population active 15+ : 89165

| Âge | TC tous | TC aucun dipl. | TC secondaire | TC postsec. < bac | TC bac+ | TC postsec. tous (calc.) | TE tous | TE aucun dipl. | TE secondaire | TE postsec. < bac | TE bac+ | TE postsec. tous (calc.) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15+ | 6,1 | 12,2 | 7,8 | 5,6 | 3,6 | 4,8 | 59,8 | 34,2 | 52,0 | 66,5 | 72,4 | 68,9 |
| 15-24 | 9,9 | 12,9 | 8,7 | 9,7 | 9,0 | 9,5 | 62,9 | 43,4 | 71,4 | 70,2 | 69,6 | 70,1 |
| 25-54 | 4,1 | 10,8 | 5,9 | 3,9 | 2,6 | 3,3 | 84,3 | 55,9 | 76,5 | 88,3 | 89,8 | 88,9 |
| 55-64 | 6,2 | 8,0 | 6,9 | 5,6 | 5,7 | 5,6 | 59,7 | 45,5 | 57,1 | 63,4 | 64,3 | 63,7 |

**Saguenay** (ville (SDR), SDR 2494068) — population 15+ : 119590 ; population active 15+ : 71660

| Âge | TC tous | TC aucun dipl. | TC secondaire | TC postsec. < bac | TC bac+ | TC postsec. tous (calc.) | TE tous | TE aucun dipl. | TE secondaire | TE postsec. < bac | TE bac+ | TE postsec. tous (calc.) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15+ | 5,5 | 11,3 | 7,8 | 4,8 | 2,8 | 4,2 | 56,6 | 33,8 | 44,1 | 64,0 | 72,1 | 66,2 |
| 15-24 | 7,2 | 8,6 | 7,5 | 5,8 | 6,5 | 5,9 | 67,6 | 52,9 | 72,1 | 78,6 | 71,6 | 77,2 |
| 25-54 | 3,2 | 10,4 | 3,3 | 3,2 | 1,7 | 2,7 | 86,3 | 57,6 | 78,1 | 89,1 | 93,3 | 90,5 |
| 55-64 | 7,6 | 11,1 | 9,9 | 6,8 | 5,5 | 6,5 | 55,3 | 43,1 | 51,4 | 57,5 | 64,0 | 58,9 |

**Trois-Rivières** (ville (SDR), SDR 2437067) — population 15+ : 114125 ; population active 15+ : 67075

| Âge | TC tous | TC aucun dipl. | TC secondaire | TC postsec. < bac | TC bac+ | TC postsec. tous (calc.) | TE tous | TE aucun dipl. | TE secondaire | TE postsec. < bac | TE bac+ | TE postsec. tous (calc.) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15+ | 6,6 | 13,8 | 8,8 | 5,8 | 3,4 | 5,0 | 54,9 | 31,1 | 45,9 | 62,7 | 69,1 | 64,8 |
| 15-24 | 8,8 | 12,3 | 8,0 | 8,2 | 5,3 | 7,6 | 65,1 | 45,4 | 72,0 | 76,2 | 75,4 | 76,1 |
| 25-54 | 4,3 | 12,1 | 7,0 | 3,9 | 2,0 | 3,2 | 83,0 | 51,3 | 74,2 | 87,6 | 91,6 | 89,1 |
| 55-64 | 7,4 | 12,2 | 8,0 | 6,4 | 7,0 | 6,6 | 55,2 | 39,1 | 53,9 | 58,9 | 58,8 | 58,9 |

- Semaine de référence du recensement : du dimanche 2 au samedi 8 mai 2021 ; les variables d'activité proviennent du questionnaire détaillé (échantillon de 25 % des ménages), avec la définition EPA du chômage. Référence : Guide de référence sur le travail, Recensement de 2021 (URL citée de mémoire, non rouverte dans cette session) — [Guide de référence sur le travail 98-500-X2021012](https://www12.statcan.gc.ca/census-recensement/2021/ref/98-500/012/98-500-x2021012-fra.cfm)

### Inferences
- Le niveau des taux de 2021 est gonflé par la pandémie (Canada : 10,3 % au recensement de mai 2021, contre 6,8 % en moyenne EPA 2025 ; Ontario 12,2 %). Le site ne devrait pas afficher ces niveaux comme « actuels », mais s'en servir comme profil relatif (gradient par diplôme et par âge), puis les recaler (section 5).
- Les capitales territoriales ont des taux globaux bien meilleurs que leur territoire (Iqaluit : TC 7,3 % contre 16,9 % au Nunavut ; Yellowknife 5,7 % contre 8,6 % ; Whitehorse 5,6 % contre 6,8 %), mais le chômage des non-diplômés y reste presque aussi élevé (25-54 ans : 22,1 % à Iqaluit contre 27,9 % au Nunavut ; 22,1 % à Yellowknife contre 23,4 % aux TNO). L'avantage des capitales tient donc surtout à leur composition (plus de diplômés), pas à de meilleurs taux à diplôme égal.
- Chez les 15-24 ans, les cellules « baccalauréat ou plus » et parfois « postsecondaire » reposent sur quelques dizaines de personnes dans les capitales (Yellowknife : 165 actifs ; Iqaluit : 15) : les taux de 0,0 % ou 28,6 % n'ont pas de sens statistique. Le site devrait fusionner ces cellules (par exemple « postsecondaire, tous niveaux ») ou afficher « effectif insuffisant ».
- Correspondance avec les trois niveaux du site : bas = aucun diplôme ; moyen = diplôme secondaire ; élevé = postsecondaire. Attention : la catégorie canadienne « postsecondaire inférieur au baccalauréat » inclut les certificats de métiers, que la classification internationale range plutôt au niveau moyen ; le fichier CSV fournit donc les quatre niveaux d'origine plus l'agrégat « postsecondaire_tous » calculé, pour laisser le choix.

### Gaps
- Extraction faite au niveau municipal (subdivision de recensement) ; les valeurs par région métropolitaine ou agglomération (tableau 98-10-0451-01 : Montréal RMR, Ottawa-Gatineau partie Québec, Grand Sudbury RMR, etc.) n'ont pas été extraites, faute de budget. Même méthode d'interrogation, même format.
- Bornes d'intervalle de confiance (disponibles dans le tableau) non extraites.
- Prochain recensement : mai 2026 ; les tableaux d'activité par diplôme ne seront diffusés qu'en 2027-2028 (calendrier non vérifié).

## 3. France : chômage au sens du recensement par diplôme et par âge, communes et intercommunalités

### Takeaway
Le recensement de la population 2023 (dernier millésime, enquêtes 2021 à 2025) donne pour chaque commune et intercommunalité les effectifs d'actifs occupés et de chômeurs par diplôme (15-64 ans, 7 niveaux) et par âge (15-24, 25-54, 55-64), mais pas le croisement âge × diplôme. Les taux ci-dessous sont calculés à partir de ces effectifs publiés ; ils sont nettement plus élevés que les taux au sens du BIT (France : 11,4 % au recensement).

### Cited Findings
- Source : jeu de données Melodi `DS_RP_EMPLOI_LR_PRINC` « Population active et chômage – Principaux indicateurs (dossier complet) », période 2012-2023, dimensions SEX, AGE (15-24, 25-54, 55-64, 15-64, 15+), EDUC (7 niveaux, pour les 15-64 ans uniquement), EMPSTA_ENQ (1 = actifs ayant un emploi, 2 = chômeurs, 1T2 = actifs, _T = population). Exemple de requête : `https://api.insee.fr/melodi/data/DS_RP_EMPLOI_LR_PRINC?GEO=COM-75056&TIME_PERIOD=2023` ; géographie renvoyée au 1er janvier 2026 — [Insee, catalogue Melodi](https://api.insee.fr/melodi/catalog/all) ; [exemple Paris](https://api.insee.fr/melodi/data/DS_RP_EMPLOI_LR_PRINC?GEO=COM-75056&TIME_PERIOD=2023)
- Ces données sont celles du « dossier complet » par commune (tableaux EMP T1, T2, T4 et graphique du taux de chômage par diplôme) ; la page HTML du dossier complet renvoyait une erreur 500 le jour de la recherche — [Insee, dossier complet Paris](https://www.insee.fr/fr/statistiques/2011101?geo=COM-75056)
- Formules : TC = chômeurs (EMPSTA_ENQ = 2) / actifs (1T2) ; TE = actifs occupés (1) / population (_T). Regroupement en trois niveaux : low = aucun diplôme ou CEP + brevet ; medium = CAP-BEP + baccalauréat ; high = bac+2 et plus (somme des effectifs).


**Niveau : pays** — TC = taux de chômage au sens du recensement (chômeurs / actifs) ; TE = actifs occupés / population ; RP 2023

| Lieu | TC 15-64 | Aucun dipl./CEP | Brevet | CAP-BEP | Bac | Bac+2 | Bac+3/4 | Bac+5+ | TC low | TC medium | TC high | TC 15-24 | TC 25-54 | TC 55-64 | TE 15-64 | TE 15-24 | TE 25-54 | TE 55-64 | TE low | TE medium | TE high |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| France (FRANCE-F) | 11,4 | 22,8 | 18,9 | 13,1 | 12,5 | 7,6 | 7,5 | 6,3 | 21,7 | 12,8 | 7,1 | 22,5 | 10,2 | 9,3 | 66,9 | 33,5 | 81,3 | 56,2 | 38,4 | 66,9 | 82,4 |

**Niveau : commune** — TC = taux de chômage au sens du recensement (chômeurs / actifs) ; TE = actifs occupés / population ; RP 2023

| Lieu | TC 15-64 | Aucun dipl./CEP | Brevet | CAP-BEP | Bac | Bac+2 | Bac+3/4 | Bac+5+ | TC low | TC medium | TC high | TC 15-24 | TC 25-54 | TC 55-64 | TE 15-64 | TE 15-24 | TE 25-54 | TE 55-64 | TE low | TE medium | TE high |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Paris (COM-75056) | 10,5 | 19,8 | 18,9 | 16,9 | 16,7 | 11,4 | 10,7 | 6,7 | 19,6 | 16,8 | 8,0 | 17,9 | 9,6 | 10,2 | 70,5 | 31,7 | 83,3 | 68,9 | 41,4 | 54,5 | 81,1 |
| Lyon (COM-69123) | 11,1 | 22,7 | 21,3 | 16,6 | 17,3 | 9,2 | 9,8 | 6,5 | 22,3 | 17,0 | 7,8 | 18,3 | 10,0 | 9,1 | 66,9 | 33,5 | 82,7 | 64,2 | 36,8 | 51,5 | 80,7 |
| Marseille (COM-13055) | 13,5 | 25,2 | 18,8 | 17,3 | 14,9 | 9,3 | 9,1 | 7,0 | 23,7 | 16,0 | 8,2 | 24,1 | 12,7 | 10,1 | 59,0 | 25,8 | 71,5 | 54,3 | 34,1 | 56,4 | 76,3 |
| Lille (COM-59350) | 15,7 | 32,8 | 30,7 | 24,0 | 24,4 | 14,3 | 11,9 | 6,9 | 32,3 | 24,3 | 9,5 | 24,0 | 14,0 | 12,2 | 57,2 | 26,8 | 76,4 | 56,7 | 33,4 | 40,6 | 73,7 |
| Toulouse (COM-31555) | 14,3 | 30,1 | 25,3 | 20,0 | 20,8 | 12,1 | 12,1 | 7,5 | 28,8 | 20,5 | 9,7 | 23,6 | 12,8 | 10,2 | 62,4 | 31,2 | 78,0 | 62,6 | 34,1 | 49,6 | 76,3 |
| Bordeaux (COM-33063) | 11,8 | 25,7 | 23,9 | 16,8 | 17,7 | 10,8 | 9,1 | 7,0 | 25,2 | 17,4 | 8,3 | 20,2 | 10,6 | 8,9 | 65,5 | 32,2 | 81,2 | 63,6 | 35,1 | 52,2 | 78,4 |
| Nantes (COM-44109) | 13,1 | 31,2 | 26,8 | 19,2 | 18,8 | 10,5 | 10,0 | 6,8 | 30,0 | 18,9 | 8,5 | 20,6 | 12,1 | 9,5 | 65,0 | 33,2 | 80,0 | 60,1 | 33,2 | 52,2 | 79,9 |
| Rennes (COM-35238) | 13,8 | 29,2 | 25,4 | 18,9 | 21,0 | 10,7 | 10,5 | 7,7 | 28,1 | 20,3 | 9,1 | 22,0 | 12,3 | 8,9 | 59,6 | 30,1 | 78,0 | 58,7 | 32,0 | 45,3 | 75,4 |
| Strasbourg (COM-67482) | 15,5 | 28,2 | 27,8 | 19,4 | 21,2 | 12,3 | 11,3 | 8,3 | 28,1 | 20,4 | 9,9 | 25,3 | 14,1 | 11,5 | 58,3 | 27,7 | 73,8 | 57,3 | 34,8 | 49,0 | 74,7 |
| Montpellier (COM-34172) | 18,3 | 32,4 | 26,7 | 23,7 | 25,6 | 15,4 | 14,5 | 10,0 | 30,8 | 24,9 | 12,5 | 28,8 | 16,5 | 13,3 | 55,4 | 26,7 | 71,4 | 56,4 | 32,0 | 45,4 | 69,8 |
| Brest (COM-29019) | 13,5 | 31,4 | 25,2 | 17,2 | 15,8 | 9,1 | 9,6 | 6,9 | 29,2 | 16,4 | 8,3 | 21,2 | 12,1 | 10,1 | 60,5 | 33,3 | 77,4 | 50,7 | 31,5 | 54,9 | 76,1 |
| Quimper (COM-29232) | 12,7 | 24,8 | 24,9 | 16,3 | 14,8 | 9,0 | 7,4 | 7,3 | 24,8 | 15,5 | 8,0 | 22,1 | 11,6 | 9,6 | 65,2 | 36,4 | 80,1 | 54,1 | 32,9 | 61,9 | 81,3 |

**Niveau : EPCI** — TC = taux de chômage au sens du recensement (chômeurs / actifs) ; TE = actifs occupés / population ; RP 2023

| Lieu | TC 15-64 | Aucun dipl./CEP | Brevet | CAP-BEP | Bac | Bac+2 | Bac+3/4 | Bac+5+ | TC low | TC medium | TC high | TC 15-24 | TC 25-54 | TC 55-64 | TE 15-64 | TE 15-24 | TE 25-54 | TE 55-64 | TE low | TE medium | TE high |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Paris (EPCI-200054781) | 11,7 | 19,6 | 19,8 | 15,3 | 15,8 | 10,4 | 10,3 | 6,8 | 19,7 | 15,6 | 8,3 | 21,7 | 10,7 | 10,1 | 67,9 | 29,9 | 80,4 | 65,4 | 43,5 | 60,4 | 80,9 |
| Lyon (EPCI-200046977) | 11,7 | 23,3 | 21,4 | 15,4 | 15,3 | 8,6 | 9,0 | 6,5 | 22,8 | 15,4 | 7,6 | 20,6 | 10,6 | 9,0 | 65,9 | 32,7 | 80,4 | 61,2 | 37,0 | 58,4 | 81,1 |
| Marseille (EPCI-200054807) | 11,6 | 22,4 | 17,3 | 14,7 | 13,2 | 8,1 | 7,8 | 6,2 | 21,0 | 13,9 | 7,2 | 22,9 | 10,6 | 9,2 | 63,8 | 29,4 | 77,3 | 56,4 | 36,4 | 61,9 | 79,8 |
| Lille (EPCI-200093201) | 13,8 | 28,7 | 25,2 | 18,1 | 17,0 | 9,7 | 8,6 | 6,1 | 27,8 | 17,5 | 7,8 | 26,0 | 12,2 | 10,9 | 62,4 | 27,8 | 78,5 | 54,8 | 34,0 | 57,1 | 80,1 |
| Toulouse (EPCI-243100518) | 12,6 | 28,0 | 23,1 | 16,4 | 17,6 | 10,0 | 10,3 | 6,7 | 26,5 | 17,2 | 8,5 | 22,7 | 11,3 | 8,9 | 65,6 | 32,2 | 80,4 | 63,1 | 34,6 | 56,5 | 79,3 |
| Bordeaux (EPCI-243300316) | 11,2 | 23,2 | 20,5 | 13,6 | 14,8 | 8,6 | 8,3 | 6,6 | 22,4 | 14,3 | 7,6 | 21,3 | 10,0 | 8,1 | 67,2 | 32,7 | 82,3 | 61,9 | 37,2 | 60,9 | 80,7 |
| Nantes (EPCI-244400404) | 10,8 | 26,4 | 21,8 | 13,9 | 14,1 | 7,7 | 8,1 | 6,1 | 25,0 | 14,0 | 7,1 | 19,0 | 9,9 | 7,7 | 68,4 | 34,6 | 83,3 | 59,7 | 33,5 | 60,9 | 83,0 |
| Rennes (EPCI-243500139) | 10,9 | 24,6 | 20,6 | 13,3 | 15,0 | 7,7 | 8,5 | 6,7 | 23,3 | 14,3 | 7,5 | 20,0 | 9,8 | 6,6 | 65,3 | 31,6 | 82,2 | 60,5 | 31,8 | 57,0 | 80,0 |
| Strasbourg (EPCI-246700488) | 13,4 | 25,8 | 24,6 | 15,4 | 17,2 | 9,6 | 9,7 | 7,4 | 25,5 | 16,4 | 8,6 | 23,5 | 12,2 | 9,6 | 62,9 | 30,3 | 77,6 | 58,1 | 36,9 | 57,0 | 78,4 |
| Montpellier (EPCI-243400017) | 14,8 | 27,7 | 23,4 | 18,3 | 20,2 | 12,1 | 11,6 | 8,3 | 26,4 | 19,4 | 10,2 | 26,8 | 13,3 | 10,6 | 61,2 | 28,2 | 76,5 | 59,6 | 33,6 | 53,8 | 75,3 |
| Brest (EPCI-242900314) | 11,6 | 28,7 | 22,9 | 15,0 | 13,8 | 7,6 | 8,3 | 6,1 | 26,6 | 14,3 | 7,2 | 20,9 | 10,3 | 8,6 | 63,2 | 32,5 | 80,7 | 52,1 | 30,3 | 58,1 | 78,9 |
| Quimper (EPCI-200068120) | 10,7 | 21,4 | 20,9 | 12,8 | 12,2 | 7,6 | 6,4 | 6,8 | 21,2 | 12,5 | 7,0 | 21,8 | 9,5 | 8,2 | 68,0 | 35,1 | 83,4 | 54,9 | 33,1 | 66,7 | 83,3 |

- Les tableaux détaillés du recensement présents dans le catalogue Melodi (ACT1 : population active selon l'âge détaillé ; ACT2A/ACT2B : statut, temps de travail, âge ; ACT3 ; ACT4-ACT5 ; FOR2 : diplômes et formation) ne comportent, d'après leurs intitulés, aucun croisement type d'activité × diplôme × âge — [Insee, catalogue Melodi](https://api.insee.fr/melodi/catalog/all)

### Inferences
- Différence avec le chômage BIT : au recensement, est chômeur celui qui se déclare tel (ou qui déclare chercher un emploi), sans les critères BIT de recherche active dans les quatre semaines et de disponibilité dans les deux semaines ; la question est posée dans un bulletin auto-administré, sur cinq enquêtes annuelles cumulées. Le résultat est structurellement plus élevé : 11,4 % pour la France au RP 2023 (calculé ci-dessus), contre environ 7,3 % au sens du BIT en 2023 (enquête Emploi ; chiffre cité de mémoire, non revérifié ici). L'écart est maximal chez les jeunes (22,5 % au recensement pour les 15-24 ans) et les peu diplômés. Le site doit donc soit étiqueter ces taux « au sens du recensement », soit n'en retenir que le profil relatif et le recaler sur le taux BIT régional (Eurostat lfst_r_lfu3rt) ou sur le taux localisé par zone d'emploi.
- La commune-centre surestime le chômage de l'agglomération (étudiants, parc social concentré) : Lille 15,7 % contre 13,8 % pour la Métropole européenne de Lille ; Nantes 13,1 % contre 10,8 % ; Rennes 13,8 % contre 10,9 % ; Montpellier 18,3 % contre 14,8 %. Pour un candidat à l'installation, l'intercommunalité (ou la zone d'emploi) est le bon périmètre.
- Le gradient par diplôme est très stable d'une ville à l'autre : partout le TC des bac+5 se situe entre 6,1 % et 10,0 %, celui des non-diplômés entre 19,6 % et 32,8 %. Paris se distingue par un gradient plus plat (19,8 % pour les non-diplômés, 6,7 % pour les bac+5).
- Le croisement âge × diplôme local n'étant pas publié, il faut soit l'estimer par la méthode à deux marges (section 5 : profil national ou régional âge × diplôme, ajusté sur la marge locale par âge et la marge locale par diplôme), soit le calculer à partir des fichiers détail du recensement (individus localisés au canton-ou-ville : variables type d'activité, diplôme, âge), piste non vérifiée dans cette session.

### Gaps
- Zones d'emploi : non extraites (codes de zones d'emploi 2020 non vérifiés) ; l'API accepte en principe le même format de requête avec un autre préfixe géographique.
- Croisement âge × diplôme × activité au niveau communal : non publié en tableau ; fichiers détail non examinés.
- Définition officielle Insee du « chômeur au sens du recensement » et taux BIT 2023 : cités de mémoire, à sourcer avant publication.
- Taux de chômage localisés trimestriels par zone d'emploi (définition BIT, sans ventilation par âge ou diplôme) : non récupérés.

## 4. Suisse, Belgique, Luxembourg : villes et sous-régions

### Takeaway
Aucune source harmonisée ne croise chômage × diplôme sous le niveau NUTS 2 dans ces trois pays. Le recensement européen de 2021 (Eurostat cens_21ae_r2) donne l'activité × âge × niveau d'éducation par région NUTS 2 (Bruxelles-Capitale, provinces de Liège, du Hainaut, de Namur ; Région lémanique, Espace Mittelland ; Luxembourg entier) ; au niveau des villes, seul le chômage inscrit est disponible (par âge, pas par diplôme rapporté à une population active).

### Cited Findings
- Eurostat `cens_21ae_r2` « Population par groupes de statut d'activité, groupes d'âge, niveau d'éducation atteint et région NUTS 2 » (recensements 2021, mis à jour le 21 mai 2025) : effectifs par statut (occupés, chômeurs, inactifs), âge quinquennal, CITE 0 à 8. Tous les autres tableaux d'activité du recensement 2021 d'Eurostat sont aussi au niveau NUTS 2 ; les tableaux NUTS 3 ne portent que sur la démographie, la nationalité, les ménages et les logements — [Eurostat cens_21ae_r2](https://ec.europa.eu/eurostat/databrowser/view/cens_21ae_r2/default/table?lang=fr) ; [arborescence Eurostat](https://ec.europa.eu/eurostat/api/dissemination/catalogue/toc/txt?lang=en)
- Valeurs calculées à partir des effectifs publiés (low = CITE 0-2, medium = CITE 3-4, high = CITE 5-8) :


**Belgique** — recensement 2021 (Eurostat cens_21ae_r2), TC = chômeurs / (occupés + chômeurs), TE = occupés / population

| Âge | TC tous | TC low | TC medium | TC high | TE tous | TE low | TE medium | TE high |
|---|---|---|---|---|---|---|---|---|
| 15-64 | 8,7 | 18,8 | 8,3 | 4,2 | 66,5 | 45,3 | 69,3 | 85,3 |
| 15-24 | 15,3 | 26,1 | 13,0 | 7,0 | 31,1 | 17,8 | 39,4 | 57,0 |
| 25-54 | 7,6 | 18,4 | 7,2 | 3,6 | 79,4 | 62,0 | 81,7 | 90,5 |
| 55-64 | 9,6 | 16,1 | 9,4 | 5,8 | 58,8 | 44,2 | 61,4 | 75,2 |

**Région de Bruxelles-Capitale (BE10)** — recensement 2021 (Eurostat cens_21ae_r2), TC = chômeurs / (occupés + chômeurs), TE = occupés / population

| Âge | TC tous | TC low | TC medium | TC high | TE tous | TE low | TE medium | TE high |
|---|---|---|---|---|---|---|---|---|
| 15-64 | 16,3 | 30,0 | 19,9 | 10,9 | 55,4 | 38,5 | 52,2 | 75,0 |
| 15-24 | 22,6 | 33,1 | 21,0 | 15,8 | 21,3 | 13,7 | 27,5 | 43,5 |
| 25-54 | 15,1 | 28,6 | 19,4 | 10,4 | 64,7 | 50,2 | 62,1 | 77,9 |
| 55-64 | 19,1 | 34,2 | 21,4 | 12,7 | 53,5 | 37,1 | 55,8 | 70,1 |

**Province de Liège (BE33)** — recensement 2021 (Eurostat cens_21ae_r2), TC = chômeurs / (occupés + chômeurs), TE = occupés / population

| Âge | TC tous | TC low | TC medium | TC high | TE tous | TE low | TE medium | TE high |
|---|---|---|---|---|---|---|---|---|
| 15-64 | 12,9 | 24,2 | 12,3 | 5,5 | 61,9 | 43,0 | 65,0 | 84,1 |
| 15-24 | 21,1 | 31,4 | 17,1 | 11,2 | 30,4 | 19,2 | 39,6 | 58,1 |
| 25-54 | 11,5 | 23,6 | 11,0 | 4,8 | 74,0 | 56,8 | 76,0 | 89,0 |
| 55-64 | 14,0 | 21,9 | 14,2 | 7,2 | 54,6 | 41,0 | 57,9 | 72,8 |

**Province de Hainaut (BE32 ; contient Charleroi)** — recensement 2021 (Eurostat cens_21ae_r2), TC = chômeurs / (occupés + chômeurs), TE = occupés / population

| Âge | TC tous | TC low | TC medium | TC high | TE tous | TE low | TE medium | TE high |
|---|---|---|---|---|---|---|---|---|
| 15-64 | 14,0 | 25,6 | 13,4 | 5,1 | 58,7 | 40,0 | 63,2 | 84,0 |
| 15-24 | 27,5 | 39,9 | 22,6 | 13,6 | 26,0 | 15,4 | 36,4 | 55,8 |
| 25-54 | 12,3 | 24,5 | 12,0 | 4,4 | 71,9 | 54,9 | 73,8 | 89,7 |
| 55-64 | 13,2 | 20,8 | 12,5 | 6,5 | 50,1 | 37,1 | 55,3 | 70,4 |

**Province de Namur (BE35)** — recensement 2021 (Eurostat cens_21ae_r2), TC = chômeurs / (occupés + chômeurs), TE = occupés / population

| Âge | TC tous | TC low | TC medium | TC high | TE tous | TE low | TE medium | TE high |
|---|---|---|---|---|---|---|---|---|
| 15-64 | 11,0 | 21,0 | 11,4 | 4,6 | 64,1 | 43,6 | 66,5 | 85,1 |
| 15-24 | 23,6 | 32,6 | 21,4 | 13,3 | 27,7 | 16,8 | 35,7 | 53,9 |
| 25-54 | 9,2 | 19,5 | 9,6 | 3,8 | 78,4 | 61,7 | 79,3 | 90,8 |
| 55-64 | 11,3 | 18,5 | 11,2 | 5,8 | 55,9 | 41,5 | 59,5 | 72,6 |

**Luxembourg (LU00 ; pays entier)** — recensement 2021 (Eurostat cens_21ae_r2), TC = chômeurs / (occupés + chômeurs), TE = occupés / population

| Âge | TC tous | TC low | TC medium | TC high | TE tous | TE low | TE medium | TE high |
|---|---|---|---|---|---|---|---|---|
| 15-64 | 4,1 | 6,4 | 4,0 | 3,1 | 63,8 | 51,5 | 60,9 | 74,9 |
| 15-24 | 7,3 | 12,7 | 6,3 | 4,8 | 25,0 | 15,7 | 27,1 | 38,6 |
| 25-54 | 3,7 | 5,5 | 3,6 | 3,0 | 78,8 | 73,7 | 80,4 | 79,7 |
| 55-64 | 4,8 | 7,3 | 4,6 | 3,1 | 44,4 | 36,4 | 40,7 | 59,7 |

**Suisse** — recensement 2021 (Eurostat cens_21ae_r2), TC = chômeurs / (occupés + chômeurs), TE = occupés / population

| Âge | TC tous | TC low | TC medium | TC high | TE tous | TE low | TE medium | TE high |
|---|---|---|---|---|---|---|---|---|
| 15-64 | 4,9 | 9,2 | 4,9 | 3,6 | 75,6 | 52,0 | 76,2 | 86,4 |
| 15-24 | 7,6 | 9,9 | 6,6 | 6,6 | 45,1 | 29,1 | 57,3 | 59,4 |
| 25-54 | 4,7 | 9,6 | 4,7 | 3,6 | 84,6 | 69,0 | 84,4 | 89,2 |
| 55-64 | 4,5 | 7,7 | 4,7 | 3,0 | 70,5 | 54,7 | 69,3 | 79,7 |

**Région lémanique (CH01 : Genève; Vaud; Valais)** — recensement 2021 (Eurostat cens_21ae_r2), TC = chômeurs / (occupés + chômeurs), TE = occupés / population

| Âge | TC tous | TC low | TC medium | TC high | TE tous | TE low | TE medium | TE high |
|---|---|---|---|---|---|---|---|---|
| 15-64 | 8,1 | 12,9 | 8,2 | 6,2 | 68,7 | 48,4 | 68,7 | 81,5 |
| 15-24 | 14,1 | 18,2 | 12,3 | 12,5 | 30,5 | 19,1 | 40,1 | 42,4 |
| 25-54 | 7,8 | 13,6 | 7,6 | 6,2 | 80,0 | 65,7 | 80,0 | 85,5 |
| 55-64 | 6,8 | 7,7 | 7,9 | 5,0 | 64,3 | 55,6 | 62,2 | 73,4 |

**Espace Mittelland (CH02 : Berne; Fribourg; Soleure; Neuchâtel; Jura)** — recensement 2021 (Eurostat cens_21ae_r2), TC = chômeurs / (occupés + chômeurs), TE = occupés / population

| Âge | TC tous | TC low | TC medium | TC high | TE tous | TE low | TE medium | TE high |
|---|---|---|---|---|---|---|---|---|
| 15-64 | 4,1 | 9,0 | 4,1 | 2,5 | 77,4 | 52,8 | 79,0 | 88,5 |
| 15-24 | 6,1 | 9,6 | 4,8 | 3,8 | 49,1 | 32,1 | 61,6 | 65,6 |
| 25-54 | 3,9 | 8,9 | 3,9 | 2,6 | 86,4 | 69,9 | 86,6 | 91,1 |
| 55-64 | 4,0 | 8,8 | 4,3 | 1,9 | 71,8 | 53,2 | 71,8 | 82,0 |

- Belgique : le recensement 2021 est fondé sur les registres ; le « chômeur » y est un demandeur d'emploi inscrit, d'où un TC plus élevé que dans l'enquête sur les forces de travail (8,6 % pour la Belgique et 16,2 % pour Bruxelles-Capitale, tous âges, dans cens_21ae_r2). Statbel publie le taux de chômage des 15-64 ans par région, province et arrondissement dans « Indicators on population, households and housing, according to the place of residence, based on the CENSUSES 2011 and 2021 », et des cartes communales ; aucun tableau communal chômage × niveau d'instruction n'a été trouvé (page protégée par captcha, non ouverte) — [Statbel, Census, marché du travail](https://statbel.fgov.be/en/themes/census/labour-market/situation-labour-market-employment-and-unemployment) ; [métadonnées Eurostat du recensement belge](https://ec.europa.eu/eurostat/cache/metadata/EN/cens_21_esmscs21_be.htm)
- Suisse, canton de Vaud (Statistique Vaud, source SECO/PLASTA, chômage inscrit) : tableaux « Chômeurs selon le niveau de formation et le sexe, Vaud, depuis 2015 » (T03.03.01, effectifs seulement, pas de taux), « Demandeurs d'emploi, chômeurs et taux de chômage par commune » et « Demandeurs d'emploi selon l'âge, par commune » — [Statistique Vaud, chômage et places vacantes](https://www.vd.ch/etat-droit-finances/statistique/statistiques-par-domaine/03-vie-active-remuneration-du-travail/chomage-et-places-vacantes)
- Lausanne, octobre 2026 (chômage inscrit) : 7 654 demandeurs d'emploi dont 4 936 chômeurs, taux de chômage d'environ 6 % (valeur lue arrondie à l'unité) ; demandeurs d'emploi par âge : 121 de moins de 20 ans, 1 624 de 20-29 ans, 2 507 de 30-39 ans, 1 818 de 40-49 ans, 1 190 de 50-59 ans — [DE_Chomeurs_Taux_com.xlsx](https://www.vd.ch/fileadmin/user_upload/organisation/dfin/statvd/Dom_03/Tableaux/DE_Chomeurs_Taux_com.xlsx) ; [DE_Age_com.xlsx](https://www.vd.ch/fileadmin/user_upload/organisation/dfin/statvd/Dom_03/Tableaux/DE_Age_com.xlsx)
- Vaud : taux de chômage (inscrit) de 4,5 % en 2025 ; Statistique Vaud calcule ses taux par sous-population en prenant la population active du relevé structurel cumulé sur trois ans — c'est la méthode à reproduire pour un taux par niveau de formation (extrait de moteur de recherche, document non ouvert) — [Numerus 07-2026, Statistique Vaud](https://www.vd.ch/fileadmin/user_upload/organisation/dfin/statvd/Publications/Numerus/Numerus-07-2026_chomage.pdf)
- Vaud : tableaux « Taux de sans-emploi au sens du BIT, Vaud et Suisse, depuis 2000 » (T03.03.04) et « selon le sexe, depuis 2010 » (T03.03.08) : le taux BIT cantonal existe, sans ventilation par formation — [Statistique Vaud](https://www.vd.ch/etat-droit-finances/statistique/statistiques-par-domaine/03-vie-active-remuneration-du-travail/chomage-et-places-vacantes)
- Luxembourg : au recensement 2021, 2,0 % des résidents étaient au chômage (3,2 % en 2011) — il s'agit d'une part de la population, pas d'un taux de chômage ; le STATEC publie des fiches par canton (dont le canton de Luxembourg) et une publication sur les niveaux d'éducation, sans croisement chômage × diplôme par commune repéré (extraits de moteur de recherche) — [STATEC, fiche canton de Luxembourg](https://statistiques.public.lu/dam-assets/catalogue-publications/rp-2021/rp-canton-luxembourg/canton-de-luxembourg-luxembourg.pdf) ; [STATEC, niveaux d'éducation](https://statistiques.public.lu/en/recensement/niveaux-education-population-luxembourg.html)

### Inferences
- Pour Bruxelles, la région NUTS 2 est la ville (19 communes) : le tableau Eurostat répond directement à la question. Pour Liège, Charleroi et Namur, la province est le niveau le plus fin avec diplôme ; l'arrondissement ou la commune demandent une estimation synthétique à partir du taux global local (Statbel, IWEPS).
- Pour le Luxembourg, le pays entier étant une seule région NUTS 2, Luxembourg-Ville ne peut être distinguée que par modélisation ; vu la taille du pays et les navettes, afficher le profil national avec la mention « pays entier » est défendable.
- Pour la Suisse, les cantons (Genève, Vaud, Neuchâtel, Jura, Fribourg, Valais) sont regroupés en deux grandes régions NUTS 2 ; un taux cantonal par formation exigerait de rapporter les chômeurs inscrits par formation (SECO) à la population active par formation du relevé structurel (OFS), deux sources de définitions différentes.
- Les trois définitions coexistent et ne sont pas comparables entre elles : inscrit (SECO, Statbel-registres, ADEM), recensement, BIT. Le site doit porter la définition dans chaque étiquette.

### Gaps
- SECO / amstat.ch : chômeurs inscrits par canton × classe d'âge × niveau de formation non consultés (portail applicatif) ; chiffres par canton pour Genève, Neuchâtel, Jura, Fribourg, Valais manquants.
- OFS, relevé structurel : aucun tableau cantonal « sans-emploi BIT × formation » repéré ; à chercher dans STAT-TAB.
- Vaud T03.03.01 : seules les colonnes 2015-2016 ont été lues (18 566 chômeurs en moyenne en 2015, dont 4 978 de degré tertiaire) ; années récentes non extraites.
- Belgique : chiffres IWEPS et view.brussels par commune non consultés ; fichiers Statbel par arrondissement non ouverts (captcha).
- Luxembourg : tableaux LUSTAT du recensement 2021 par commune non consultés.
- Suisse : les valeurs du recensement 2021 sont bien présentes dans cens_21ae_r2 (Suisse 15-64 ans : TC 4,9 % ; Région lémanique 8,1 % ; Espace Mittelland 4,1 %), mais la définition nationale du chômage utilisée dans ce relevé (relevé structurel par échantillon) et sa précision régionale ne sont pas vérifiées.

## 5. Méthode d'estimation quand rien n'est publié, et ce que le site peut afficher

### Takeaway
Testée sur les 22 villes canadiennes où le recensement donne la « vérité » locale, l'estimation synthétique la plus simple (profil provincial âge × diplôme multiplié par le rapport des taux globaux) se trompe en moyenne de 1,2 point de chômage par cellule (jusqu'à 2,6), et sous-estime fortement le chômage des non-diplômés dans les capitales (jusqu'à 10 points à Iqaluit). Ajuster en plus sur les marges locales par âge et par diplôme ramène l'erreur à 0,6 point en moyenne (1,2 au maximum). Le site peut donc afficher des taux « modélisés à partir du profil provincial », à condition de les étiqueter et de ne pas descendre sous une taille minimale de cellule.

### Cited Findings

**Ce que fait Statistique Canada**
- Statistique Canada produit des estimations mensuelles sur petits domaines de l'emploi et du taux de chômage pour les régions métropolitaines, les agglomérations de recensement et les « aires autonomes de main-d'œuvre », par un modèle de Fay-Herriot au niveau des aires combiné à l'estimateur direct de l'EPA ; variables auxiliaires : prestataires d'assurance-emploi et projections de population ; calcul indépendant chaque mois avec le module petits domaines du logiciel G-EST ; diffusion moins rapide que les estimations directes (document : Verret, Walker, Bocci et Beaumont, septembre 2024 ; page non accessible en lecture directe, contenu repris d'un résumé de moteur de recherche) — [Small Area Estimation Methodology Using Labour Force Survey Data, 75-005-M2024003](https://www150.statcan.gc.ca/n1/pub/75-005-m/75-005-m2024003-eng.htm)
- Ces estimations ne comportent ni âge ni diplôme (dimensions vérifiées : géographie, indicateur, statistique). Précision observée sur douze mois (septembre 2025 à août 2026) pour de petites agglomérations : erreur-type d'environ 0,9 point sur le TC et 2,3 points sur le TE (voir le second tableau de la section 1) — [StatCan 14-10-0480-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=1410048001)
- Travaux de référence de Statistique Canada sur le sujet : « Development of a small area estimation system at Statistics Canada » (Techniques d'enquête, 2019) et « Small area estimation using Fay-Herriot area level model with sampling variance smoothing and modeling » (Techniques d'enquête, 2021) — [Techniques d'enquête 2019](https://www150.statcan.gc.ca/n1/pub/12-001-x/2019001/article/00009/06-eng.htm) ; [Techniques d'enquête 2021](https://www150.statcan.gc.ca/pub/12-001-x/2021002/article/00007/04-eng.htm)

**Test de l'hypothèse synthétique sur le Recensement 2021 (calculs faits pour cette note à partir du tableau 98-10-0400-01)** — [StatCan 98-10-0400-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=9810040001)

Pour chaque ville v de province ou territoire P, et chaque cellule (âge a parmi 15-24, 25-54, 55-64 ; diplôme d parmi les quatre niveaux), on compare le taux local publié u(v,a,d) à quatre estimations qui n'utilisent pas ce taux :
- M0, profil brut : u(P,a,d).
- M1, ratio (estimation synthétique simple) : u(P,a,d) × u(v) / u(P), avec les taux globaux 15 ans et plus.
- M2, décalage logit : logit u(P,a,d) + logit u(v) − logit u(P) ; même information que M1, mais borné entre 0 et 100.
- M3, deux marges (approximation multiplicative de la méthode préservant la structure) : u(P,a,d) × [u(v,a)/u(P,a)] × [u(v,d)/u(P,d)] / [u(v)/u(P)], qui utilise la marge locale par âge et la marge locale par diplôme.
EAM = erreur absolue moyenne en points de pourcentage, pondérée par la population active de chaque cellule locale.

| Ville | Référence | TC local 15+ | TC réf. 15+ | EAM M0 profil brut | EAM M1 ratio | EAM M2 logit | EAM M3 deux marges | Écart M1 bac+ 25-54 (pp) | Écart M1 aucun dipl. 25-54 (pp) | EAM taux d'emploi M2 |
|---|---|---|---|---|---|---|---|---|---|---|
| Whitehorse | Yukon | 5,6 | 6,8 | 1,1 | 0,5 | 0,4 | 0,3 | -0,6 | -0,4 | 1,0 |
| Yellowknife | Territoires du Nord-Ouest | 5,7 | 8,6 | 1,7 | 1,2 | 1,1 | 0,8 | -0,2 | -6,6 | 2,8 |
| Iqaluit | Nunavut | 7,3 | 16,9 | 4,9 | 1,8 | 1,6 | 0,5 | -0,9 | -10,0 | 5,9 |
| Grand Sudbury | Ontario | 10,4 | 12,2 | 3,0 | 1,6 | 1,7 | 0,6 | +1,8 | -5,6 | 5,3 |
| Timmins | Ontario | 8,6 | 12,2 | 5,0 | 1,6 | 1,6 | 1,1 | +0,6 | +0,6 | 5,4 |
| Hawkesbury | Ontario | 11,5 | 12,2 | 2,8 | 2,6 | 2,6 | 1,0 | +1,0 | -8,8 | 8,7 |
| Cornwall | Ontario | 12,4 | 12,2 | 1,9 | 2,1 | 2,1 | 1,1 | -1,0 | -1,1 | 6,7 |
| Hamilton | Ontario | 12,3 | 12,2 | 0,5 | 0,6 | 0,6 | 0,3 | +0,4 | -1,1 | 1,1 |
| London | Ontario | 13,3 | 12,2 | 0,9 | 0,7 | 0,7 | 0,4 | +0,1 | -1,3 | 1,3 |
| Calgary | Alberta | 12,5 | 11,5 | 1,6 | 0,7 | 0,7 | 0,4 | -0,3 | +0,9 | 2,2 |
| Kelowna | Colombie-Britannique | 7,9 | 8,4 | 0,7 | 0,5 | 0,5 | 0,5 | -0,2 | +1,2 | 2,1 |
| Nanaimo | Colombie-Britannique | 8,4 | 8,4 | 0,9 | 0,9 | 0,9 | 0,8 | +0,5 | -3,0 | 3,3 |
| Prince George | Colombie-Britannique | 9,4 | 8,4 | 1,4 | 1,7 | 1,7 | 0,6 | +2,0 | -6,7 | 3,1 |
| Moncton | Nouveau-Brunswick | 9,1 | 10,3 | 1,0 | 1,1 | 1,1 | 0,7 | -1,3 | +1,0 | 3,0 |
| Bathurst | Nouveau-Brunswick | 12,1 | 10,3 | 2,3 | 1,7 | 1,7 | 1,2 | +1,7 | -4,6 | 4,4 |
| Edmundston | Nouveau-Brunswick | 7,9 | 10,3 | 2,5 | 1,4 | 1,4 | 1,1 | -0,2 | +8,3 | 5,5 |
| Montréal | Québec (province) | 10,3 | 7,6 | 3,6 | 1,3 | 1,3 | 0,4 | -0,8 | -2,0 | 6,5 |
| Québec (ville) | Québec (province) | 7,1 | 7,6 | 0,7 | 0,8 | 0,8 | 0,5 | +0,9 | -1,1 | 2,0 |
| Gatineau | Québec (province) | 9,3 | 7,6 | 1,8 | 0,9 | 0,9 | 0,4 | +0,8 | +0,6 | 3,2 |
| Sherbrooke | Québec (province) | 6,1 | 7,6 | 1,6 | 0,8 | 0,8 | 0,4 | +0,6 | -1,9 | 2,3 |
| Saguenay | Québec (province) | 5,5 | 7,6 | 2,4 | 1,4 | 1,4 | 0,6 | +1,2 | -2,4 | 5,2 |
| Trois-Rivières | Québec (province) | 6,6 | 7,6 | 1,7 | 1,1 | 1,1 | 0,5 | +1,5 | -2,5 | 4,6 |

Résumé (erreur absolue moyenne pondérée par la population active locale, 12 cellules âge × diplôme, cellules de moins de 250 actifs exclues) :
- M0 profil provincial brut : EAM moyenne 2,0 pp, médiane 1,7 pp, maximum 5,0 pp (22 villes)
- M1 ratio : EAM moyenne 1,2 pp, médiane 1,1 pp, maximum 2,6 pp (22 villes)
- M2 logit : EAM moyenne 1,2 pp, médiane 1,1 pp, maximum 2,6 pp (22 villes)
- M3 deux marges : EAM moyenne 0,6 pp, médiane 0,5 pp, maximum 1,2 pp (22 villes)
- taux d'emploi M2 logit : EAM moyenne 3,9 pp, médiane 3,3 pp, maximum 8,7 pp (22 villes)

**Profil modélisé 2025 pour les territoires et leurs capitales** — sources : [98-10-0400-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=9810040001) et [14-10-0464-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=1410046401)

Méthode (statut : modélisé) : pour chaque cellule, logit(taux 2025) = logit(taux du Recensement 2021 dans le lieu, publié) + [logit(taux EPA annuel 2025 du territoire) − logit(taux du Recensement 2021 du territoire, 15 ans et plus)]. Le même décalage territorial est appliqué à la capitale. Hypothèses : le gradient par diplôme et par âge de mai 2021 est resté stable ; la capitale a évolué comme son territoire ; l'écart de niveau entre recensement et EPA est le même pour toutes les cellules.


**Yukon** — taux MODÉLISÉS 2025 (décalage logit appliqué : chômage -0.509, emploi +0.285 ; recensement 2021 Yukon 15+ : TC 6,8 %, TE 66,8 % ; EPA 2025 : TC 4,2 %, TE 72,8 %)

| Âge | TC aucun dipl. | TC secondaire | TC postsec. < bac | TC bac+ | TE aucun dipl. | TE secondaire | TE postsec. < bac | TE bac+ |
|---|---|---|---|---|---|---|---|---|
| 15-24 | 11,7 | 9,1 | 2,7 | 3,5* | 37,7 | 70,4 | 89,4 | 89,5* |
| 25-54 | 10,2 | 4,7 | 3,4 | 1,7 | 63,2 | 81,0 | 90,0 | 93,3 |
| 55-64 | 8,1 | 4,1 | 5,3 | 2,1 | 57,7 | 71,3 | 73,1 | 76,3 |

**Whitehorse** — taux MODÉLISÉS 2025 (décalage logit appliqué : chômage -0.509, emploi +0.285 ; recensement 2021 Yukon 15+ : TC 6,8 %, TE 66,8 % ; EPA 2025 : TC 4,2 %, TE 72,8 %)

| Âge | TC aucun dipl. | TC secondaire | TC postsec. < bac | TC bac+ | TE aucun dipl. | TE secondaire | TE postsec. < bac | TE bac+ |
|---|---|---|---|---|---|---|---|---|
| 15-24 | 8,5 | 8,0 | 1,9 | 4,6* | 39,8 | 73,0 | 91,7 | 86,5* |
| 25-54 | 8,6 | 4,0 | 2,8 | 1,8 | 67,6 | 83,1 | 92,1 | 93,4 |
| 55-64 | 5,9* | 3,0 | 3,9 | 1,3 | 56,5 | 75,3 | 74,7 | 75,7 |

**Territoires du Nord-Ouest** — taux MODÉLISÉS 2025 (décalage logit appliqué : chômage -0.581, emploi +0.040 ; recensement 2021 Territoires du Nord-Ouest 15+ : TC 8,6 %, TE 64,6 % ; EPA 2025 : TC 5,0 %, TE 65,5 %)

| Âge | TC aucun dipl. | TC secondaire | TC postsec. < bac | TC bac+ | TE aucun dipl. | TE secondaire | TE postsec. < bac | TE bac+ |
|---|---|---|---|---|---|---|---|---|
| 15-24 | 11,7 | 10,3 | 5,4 | 3,9* | 31,2 | 58,7 | 75,4 | 76,6 |
| 25-54 | 14,6 | 5,1 | 3,1 | 1,1 | 46,3 | 74,6 | 85,9 | 92,1 |
| 55-64 | 9,6 | 3,0 | 4,2 | 1,0 | 47,1 | 73,4 | 71,0 | 80,1 |

**Yellowknife** — taux MODÉLISÉS 2025 (décalage logit appliqué : chômage -0.581, emploi +0.040 ; recensement 2021 Territoires du Nord-Ouest 15+ : TC 8,6 %, TE 64,6 % ; EPA 2025 : TC 5,0 %, TE 65,5 %)

| Âge | TC aucun dipl. | TC secondaire | TC postsec. < bac | TC bac+ | TE aucun dipl. | TE secondaire | TE postsec. < bac | TE bac+ |
|---|---|---|---|---|---|---|---|---|
| 15-24 | 8,9 | 9,6 | 2,5* | 0,0* | 38,6 | 63,9 | 85,1 | 76,3* |
| 25-54 | 13,7 | 3,3 | 1,5 | 0,8 | 55,6 | 80,3 | 91,5 | 92,9 |
| 55-64 | 10,1* | 2,6 | 3,0 | 1,4 | 56,4 | 77,7 | 72,4 | 79,8 |

**Nunavut** — taux MODÉLISÉS 2025 (décalage logit appliqué : chômage -0.572, emploi +0.196 ; recensement 2021 Nunavut 15+ : TC 16,9 %, TE 48,7 % ; EPA 2025 : TC 10,3 %, TE 53,6 %)

| Âge | TC aucun dipl. | TC secondaire | TC postsec. < bac | TC bac+ | TE aucun dipl. | TE secondaire | TE postsec. < bac | TE bac+ |
|---|---|---|---|---|---|---|---|---|
| 15-24 | 23,5 | 12,6 | 12,6* | 18,4* | 21,8 | 52,7 | 64,6 | 70,9* |
| 25-54 | 17,9 | 9,4 | 7,2 | 1,1 | 41,7 | 67,4 | 76,0 | 93,9 |
| 55-64 | 10,2 | 3,7* | 5,7 | 1,5 | 43,1 | 73,4 | 74,5 | 89,9 |

**Iqaluit** — taux MODÉLISÉS 2025 (décalage logit appliqué : chômage -0.572, emploi +0.196 ; recensement 2021 Nunavut 15+ : TC 16,9 %, TE 48,7 % ; EPA 2025 : TC 10,3 %, TE 53,6 %)

| Âge | TC aucun dipl. | TC secondaire | TC postsec. < bac | TC bac+ | TE aucun dipl. | TE secondaire | TE postsec. < bac | TE bac+ |
|---|---|---|---|---|---|---|---|---|
| 15-24 | 15,8* | 10,4* | 8,0* | 0,0* | 28,3 | 65,9 | 61,8* | 78,5* |
| 25-54 | 13,8 | 3,8 | 2,5 | 1,0 | 48,7 | 79,1 | 85,9 | 94,6 |
| 55-64 | 8,6* | 5,6* | 3,7* | 0,0* | 43,4* | 83,0* | 83,9 | 90,4* |

**Bloc CSV pour le site** — extrait de 480 lignes : recensement 2021 pour les trois territoires et leurs capitales (trois tranches d'âge), toutes les lignes EPA et petits domaines, toutes les lignes modélisées, et les taux de chômage par âge et par niveau regroupé des douze communes françaises. Le fichier compagnon `profils_territoires_villes.csv` contient l'ensemble (2692 lignes : 31 lieux canadiens, 25 lieux français, 9 régions Eurostat ; taux de chômage et taux d'emploi). Colonnes : place, level, country, age_band, education, indicator, value, period, definition, source_key, status, flag.

```csv
place,level,country,age_band,education,indicator,value,period,definition,source_key,status,flag
Yukon,territoire,Canada,15-24,tous,unemployment_rate,12.5,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yukon,territoire,Canada,15-24,aucun_diplome,unemployment_rate,18.1,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yukon,territoire,Canada,15-24,secondaire,unemployment_rate,14.3,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yukon,territoire,Canada,15-24,postsec_inf_bac,unemployment_rate,4.4,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yukon,territoire,Canada,15-24,bac_ou_plus,unemployment_rate,5.7,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,petit_effectif_denominateur<250_arrondi_aleatoire
Yukon,territoire,Canada,15-24,tous,employment_rate,56.2,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yukon,territoire,Canada,15-24,aucun_diplome,employment_rate,31.3,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yukon,territoire,Canada,15-24,secondaire,employment_rate,64.1,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yukon,territoire,Canada,15-24,postsec_inf_bac,employment_rate,86.4,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yukon,territoire,Canada,15-24,bac_ou_plus,employment_rate,86.5,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,petit_effectif_denominateur<250_arrondi_aleatoire
Yukon,territoire,Canada,25-54,tous,unemployment_rate,5.6,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yukon,territoire,Canada,25-54,aucun_diplome,unemployment_rate,15.9,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yukon,territoire,Canada,25-54,secondaire,unemployment_rate,7.6,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yukon,territoire,Canada,25-54,postsec_inf_bac,unemployment_rate,5.6,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yukon,territoire,Canada,25-54,bac_ou_plus,unemployment_rate,2.8,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yukon,territoire,Canada,25-54,tous,employment_rate,83.6,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yukon,territoire,Canada,25-54,aucun_diplome,employment_rate,56.3,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yukon,territoire,Canada,25-54,secondaire,employment_rate,76.2,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yukon,territoire,Canada,25-54,postsec_inf_bac,employment_rate,87.1,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yukon,territoire,Canada,25-54,bac_ou_plus,employment_rate,91.3,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yukon,territoire,Canada,55-64,tous,unemployment_rate,7.2,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yukon,territoire,Canada,55-64,aucun_diplome,unemployment_rate,12.8,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yukon,territoire,Canada,55-64,secondaire,unemployment_rate,6.7,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yukon,territoire,Canada,55-64,postsec_inf_bac,unemployment_rate,8.5,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yukon,territoire,Canada,55-64,bac_ou_plus,unemployment_rate,3.5,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yukon,territoire,Canada,55-64,tous,employment_rate,65.3,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yukon,territoire,Canada,55-64,aucun_diplome,employment_rate,50.6,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yukon,territoire,Canada,55-64,secondaire,employment_rate,65.1,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yukon,territoire,Canada,55-64,postsec_inf_bac,employment_rate,67.1,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yukon,territoire,Canada,55-64,bac_ou_plus,employment_rate,70.8,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Whitehorse,ville (SDR),Canada,15-24,tous,unemployment_rate,10.0,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Whitehorse,ville (SDR),Canada,15-24,aucun_diplome,unemployment_rate,13.4,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Whitehorse,ville (SDR),Canada,15-24,secondaire,unemployment_rate,12.6,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Whitehorse,ville (SDR),Canada,15-24,postsec_inf_bac,unemployment_rate,3.2,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Whitehorse,ville (SDR),Canada,15-24,bac_ou_plus,unemployment_rate,7.4,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,petit_effectif_denominateur<250_arrondi_aleatoire
Whitehorse,ville (SDR),Canada,15-24,tous,employment_rate,59.5,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Whitehorse,ville (SDR),Canada,15-24,aucun_diplome,employment_rate,33.2,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Whitehorse,ville (SDR),Canada,15-24,secondaire,employment_rate,67.0,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Whitehorse,ville (SDR),Canada,15-24,postsec_inf_bac,employment_rate,89.3,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Whitehorse,ville (SDR),Canada,15-24,bac_ou_plus,employment_rate,82.8,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,petit_effectif_denominateur<250_arrondi_aleatoire
Whitehorse,ville (SDR),Canada,25-54,tous,unemployment_rate,4.7,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Whitehorse,ville (SDR),Canada,25-54,aucun_diplome,unemployment_rate,13.5,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Whitehorse,ville (SDR),Canada,25-54,secondaire,unemployment_rate,6.5,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Whitehorse,ville (SDR),Canada,25-54,postsec_inf_bac,unemployment_rate,4.5,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Whitehorse,ville (SDR),Canada,25-54,bac_ou_plus,unemployment_rate,2.9,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Whitehorse,ville (SDR),Canada,25-54,tous,employment_rate,86.2,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Whitehorse,ville (SDR),Canada,25-54,aucun_diplome,employment_rate,61.1,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Whitehorse,ville (SDR),Canada,25-54,secondaire,employment_rate,78.7,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Whitehorse,ville (SDR),Canada,25-54,postsec_inf_bac,employment_rate,89.7,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Whitehorse,ville (SDR),Canada,25-54,bac_ou_plus,employment_rate,91.4,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Whitehorse,ville (SDR),Canada,55-64,tous,unemployment_rate,5.1,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Whitehorse,ville (SDR),Canada,55-64,aucun_diplome,unemployment_rate,9.5,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,petit_effectif_denominateur<250_arrondi_aleatoire
Whitehorse,ville (SDR),Canada,55-64,secondaire,unemployment_rate,4.9,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Whitehorse,ville (SDR),Canada,55-64,postsec_inf_bac,unemployment_rate,6.4,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Whitehorse,ville (SDR),Canada,55-64,bac_ou_plus,unemployment_rate,2.1,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Whitehorse,ville (SDR),Canada,55-64,tous,employment_rate,67.3,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Whitehorse,ville (SDR),Canada,55-64,aucun_diplome,employment_rate,49.4,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Whitehorse,ville (SDR),Canada,55-64,secondaire,employment_rate,69.6,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Whitehorse,ville (SDR),Canada,55-64,postsec_inf_bac,employment_rate,68.9,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Whitehorse,ville (SDR),Canada,55-64,bac_ou_plus,employment_rate,70.1,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Territoires du Nord-Ouest,territoire,Canada,15-24,tous,unemployment_rate,16.0,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Territoires du Nord-Ouest,territoire,Canada,15-24,aucun_diplome,unemployment_rate,19.1,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Territoires du Nord-Ouest,territoire,Canada,15-24,secondaire,unemployment_rate,17.0,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Territoires du Nord-Ouest,territoire,Canada,15-24,postsec_inf_bac,unemployment_rate,9.2,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Territoires du Nord-Ouest,territoire,Canada,15-24,bac_ou_plus,unemployment_rate,6.8,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,petit_effectif_denominateur<250_arrondi_aleatoire
Territoires du Nord-Ouest,territoire,Canada,15-24,tous,employment_rate,48.0,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Territoires du Nord-Ouest,territoire,Canada,15-24,aucun_diplome,employment_rate,30.4,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Territoires du Nord-Ouest,territoire,Canada,15-24,secondaire,employment_rate,57.7,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Territoires du Nord-Ouest,territoire,Canada,15-24,postsec_inf_bac,employment_rate,74.7,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Territoires du Nord-Ouest,territoire,Canada,15-24,bac_ou_plus,employment_rate,75.9,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Territoires du Nord-Ouest,territoire,Canada,25-54,tous,unemployment_rate,7.5,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Territoires du Nord-Ouest,territoire,Canada,25-54,aucun_diplome,unemployment_rate,23.4,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Territoires du Nord-Ouest,territoire,Canada,25-54,secondaire,unemployment_rate,8.7,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Territoires du Nord-Ouest,territoire,Canada,25-54,postsec_inf_bac,unemployment_rate,5.4,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Territoires du Nord-Ouest,territoire,Canada,25-54,bac_ou_plus,unemployment_rate,1.9,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Territoires du Nord-Ouest,territoire,Canada,25-54,tous,employment_rate,76.8,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Territoires du Nord-Ouest,territoire,Canada,25-54,aucun_diplome,employment_rate,45.3,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Territoires du Nord-Ouest,territoire,Canada,25-54,secondaire,employment_rate,73.8,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Territoires du Nord-Ouest,territoire,Canada,25-54,postsec_inf_bac,employment_rate,85.4,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Territoires du Nord-Ouest,territoire,Canada,25-54,bac_ou_plus,employment_rate,91.8,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Territoires du Nord-Ouest,territoire,Canada,55-64,tous,unemployment_rate,7.2,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Territoires du Nord-Ouest,territoire,Canada,55-64,aucun_diplome,unemployment_rate,15.9,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Territoires du Nord-Ouest,territoire,Canada,55-64,secondaire,unemployment_rate,5.3,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Territoires du Nord-Ouest,territoire,Canada,55-64,postsec_inf_bac,unemployment_rate,7.2,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Territoires du Nord-Ouest,territoire,Canada,55-64,bac_ou_plus,unemployment_rate,1.7,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Territoires du Nord-Ouest,territoire,Canada,55-64,tous,employment_rate,67.2,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Territoires du Nord-Ouest,territoire,Canada,55-64,aucun_diplome,employment_rate,46.1,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Territoires du Nord-Ouest,territoire,Canada,55-64,secondaire,employment_rate,72.6,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Territoires du Nord-Ouest,territoire,Canada,55-64,postsec_inf_bac,employment_rate,70.2,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Territoires du Nord-Ouest,territoire,Canada,55-64,bac_ou_plus,employment_rate,79.5,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yellowknife,ville (SDR),Canada,15-24,tous,unemployment_rate,12.9,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yellowknife,ville (SDR),Canada,15-24,aucun_diplome,unemployment_rate,14.8,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yellowknife,ville (SDR),Canada,15-24,secondaire,unemployment_rate,15.9,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yellowknife,ville (SDR),Canada,15-24,postsec_inf_bac,unemployment_rate,4.3,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,petit_effectif_denominateur<250_arrondi_aleatoire
Yellowknife,ville (SDR),Canada,15-24,bac_ou_plus,unemployment_rate,0.0,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,petit_effectif_denominateur<250_arrondi_aleatoire
Yellowknife,ville (SDR),Canada,15-24,tous,employment_rate,57.0,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yellowknife,ville (SDR),Canada,15-24,aucun_diplome,employment_rate,37.7,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yellowknife,ville (SDR),Canada,15-24,secondaire,employment_rate,63.0,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yellowknife,ville (SDR),Canada,15-24,postsec_inf_bac,employment_rate,84.6,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yellowknife,ville (SDR),Canada,15-24,bac_ou_plus,employment_rate,75.6,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,petit_effectif_denominateur<250_arrondi_aleatoire
Yellowknife,ville (SDR),Canada,25-54,tous,unemployment_rate,4.1,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yellowknife,ville (SDR),Canada,25-54,aucun_diplome,unemployment_rate,22.1,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yellowknife,ville (SDR),Canada,25-54,secondaire,unemployment_rate,5.7,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yellowknife,ville (SDR),Canada,25-54,postsec_inf_bac,unemployment_rate,2.7,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yellowknife,ville (SDR),Canada,25-54,bac_ou_plus,unemployment_rate,1.5,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yellowknife,ville (SDR),Canada,25-54,tous,employment_rate,85.9,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yellowknife,ville (SDR),Canada,25-54,aucun_diplome,employment_rate,54.6,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yellowknife,ville (SDR),Canada,25-54,secondaire,employment_rate,79.7,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yellowknife,ville (SDR),Canada,25-54,postsec_inf_bac,employment_rate,91.2,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yellowknife,ville (SDR),Canada,25-54,bac_ou_plus,employment_rate,92.6,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yellowknife,ville (SDR),Canada,55-64,tous,unemployment_rate,5.0,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yellowknife,ville (SDR),Canada,55-64,aucun_diplome,unemployment_rate,16.7,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,petit_effectif_denominateur<250_arrondi_aleatoire
Yellowknife,ville (SDR),Canada,55-64,secondaire,unemployment_rate,4.5,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yellowknife,ville (SDR),Canada,55-64,postsec_inf_bac,unemployment_rate,5.3,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yellowknife,ville (SDR),Canada,55-64,bac_ou_plus,unemployment_rate,2.5,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yellowknife,ville (SDR),Canada,55-64,tous,employment_rate,73.7,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yellowknife,ville (SDR),Canada,55-64,aucun_diplome,employment_rate,55.4,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yellowknife,ville (SDR),Canada,55-64,secondaire,employment_rate,77.0,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yellowknife,ville (SDR),Canada,55-64,postsec_inf_bac,employment_rate,71.6,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Yellowknife,ville (SDR),Canada,55-64,bac_ou_plus,employment_rate,79.2,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Nunavut,territoire,Canada,15-24,tous,unemployment_rate,27.7,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Nunavut,territoire,Canada,15-24,aucun_diplome,unemployment_rate,35.2,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Nunavut,territoire,Canada,15-24,secondaire,unemployment_rate,20.3,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Nunavut,territoire,Canada,15-24,postsec_inf_bac,unemployment_rate,20.4,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,petit_effectif_denominateur<250_arrondi_aleatoire
Nunavut,territoire,Canada,15-24,bac_ou_plus,unemployment_rate,28.6,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,petit_effectif_denominateur<250_arrondi_aleatoire
Nunavut,territoire,Canada,15-24,tous,employment_rate,28.5,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Nunavut,territoire,Canada,15-24,aucun_diplome,employment_rate,18.6,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Nunavut,territoire,Canada,15-24,secondaire,employment_rate,47.8,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Nunavut,territoire,Canada,15-24,postsec_inf_bac,employment_rate,60.0,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Nunavut,territoire,Canada,15-24,bac_ou_plus,employment_rate,66.7,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,petit_effectif_denominateur<250_arrondi_aleatoire
Nunavut,territoire,Canada,25-54,tous,unemployment_rate,16.0,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Nunavut,territoire,Canada,25-54,aucun_diplome,unemployment_rate,27.9,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Nunavut,territoire,Canada,25-54,secondaire,unemployment_rate,15.5,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Nunavut,territoire,Canada,25-54,postsec_inf_bac,unemployment_rate,12.1,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Nunavut,territoire,Canada,25-54,bac_ou_plus,unemployment_rate,1.9,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Nunavut,territoire,Canada,25-54,tous,employment_rate,57.5,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Nunavut,territoire,Canada,25-54,aucun_diplome,employment_rate,37.0,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Nunavut,territoire,Canada,25-54,secondaire,employment_rate,62.9,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Nunavut,territoire,Canada,25-54,postsec_inf_bac,employment_rate,72.2,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Nunavut,territoire,Canada,25-54,bac_ou_plus,employment_rate,92.7,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Nunavut,territoire,Canada,55-64,tous,unemployment_rate,10.0,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Nunavut,territoire,Canada,55-64,aucun_diplome,unemployment_rate,16.7,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Nunavut,territoire,Canada,55-64,secondaire,unemployment_rate,6.4,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,petit_effectif_denominateur<250_arrondi_aleatoire
Nunavut,territoire,Canada,55-64,postsec_inf_bac,unemployment_rate,9.6,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Nunavut,territoire,Canada,55-64,bac_ou_plus,unemployment_rate,2.7,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Nunavut,territoire,Canada,55-64,tous,employment_rate,58.5,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Nunavut,territoire,Canada,55-64,aucun_diplome,employment_rate,38.4,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Nunavut,territoire,Canada,55-64,secondaire,employment_rate,69.4,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Nunavut,territoire,Canada,55-64,postsec_inf_bac,employment_rate,70.6,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Nunavut,territoire,Canada,55-64,bac_ou_plus,employment_rate,88.0,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Iqaluit,ville (SDR),Canada,15-24,tous,unemployment_rate,18.7,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Iqaluit,ville (SDR),Canada,15-24,aucun_diplome,unemployment_rate,25.0,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,petit_effectif_denominateur<250_arrondi_aleatoire
Iqaluit,ville (SDR),Canada,15-24,secondaire,unemployment_rate,17.1,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,petit_effectif_denominateur<250_arrondi_aleatoire
Iqaluit,ville (SDR),Canada,15-24,postsec_inf_bac,unemployment_rate,13.3,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,petit_effectif_denominateur<250_arrondi_aleatoire
Iqaluit,ville (SDR),Canada,15-24,bac_ou_plus,unemployment_rate,0.0,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,petit_effectif_denominateur<250_arrondi_aleatoire
Iqaluit,ville (SDR),Canada,15-24,tous,employment_rate,41.1,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Iqaluit,ville (SDR),Canada,15-24,aucun_diplome,employment_rate,24.5,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Iqaluit,ville (SDR),Canada,15-24,secondaire,employment_rate,61.4,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Iqaluit,ville (SDR),Canada,15-24,postsec_inf_bac,employment_rate,57.1,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,petit_effectif_denominateur<250_arrondi_aleatoire
Iqaluit,ville (SDR),Canada,15-24,bac_ou_plus,employment_rate,75.0,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,petit_effectif_denominateur<250_arrondi_aleatoire
Iqaluit,ville (SDR),Canada,25-54,tous,unemployment_rate,6.0,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Iqaluit,ville (SDR),Canada,25-54,aucun_diplome,unemployment_rate,22.1,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Iqaluit,ville (SDR),Canada,25-54,secondaire,unemployment_rate,6.5,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Iqaluit,ville (SDR),Canada,25-54,postsec_inf_bac,unemployment_rate,4.4,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Iqaluit,ville (SDR),Canada,25-54,bac_ou_plus,unemployment_rate,1.7,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Iqaluit,ville (SDR),Canada,25-54,tous,employment_rate,78.5,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Iqaluit,ville (SDR),Canada,25-54,aucun_diplome,employment_rate,43.8,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Iqaluit,ville (SDR),Canada,25-54,secondaire,employment_rate,75.7,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Iqaluit,ville (SDR),Canada,25-54,postsec_inf_bac,employment_rate,83.3,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Iqaluit,ville (SDR),Canada,25-54,bac_ou_plus,employment_rate,93.5,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Iqaluit,ville (SDR),Canada,55-64,tous,unemployment_rate,5.7,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Iqaluit,ville (SDR),Canada,55-64,aucun_diplome,unemployment_rate,14.3,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,petit_effectif_denominateur<250_arrondi_aleatoire
Iqaluit,ville (SDR),Canada,55-64,secondaire,unemployment_rate,9.5,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,petit_effectif_denominateur<250_arrondi_aleatoire
Iqaluit,ville (SDR),Canada,55-64,postsec_inf_bac,unemployment_rate,6.4,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,petit_effectif_denominateur<250_arrondi_aleatoire
Iqaluit,ville (SDR),Canada,55-64,bac_ou_plus,unemployment_rate,0.0,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,petit_effectif_denominateur<250_arrondi_aleatoire
Iqaluit,ville (SDR),Canada,55-64,tous,employment_rate,76.8,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Iqaluit,ville (SDR),Canada,55-64,aucun_diplome,employment_rate,38.7,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,petit_effectif_denominateur<250_arrondi_aleatoire
Iqaluit,ville (SDR),Canada,55-64,secondaire,employment_rate,80.0,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,petit_effectif_denominateur<250_arrondi_aleatoire
Iqaluit,ville (SDR),Canada,55-64,postsec_inf_bac,employment_rate,81.1,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,
Iqaluit,ville (SDR),Canada,55-64,bac_ou_plus,employment_rate,88.6,2021-05,census_2021_ref_week_2-8_May_2021,StatCan_98-10-0400-01,publié,petit_effectif_denominateur<250_arrondi_aleatoire
Yukon,territoire,Canada,15-24,aucun_diplome,unemployment_rate,11.7,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Yukon,territoire,Canada,15-24,secondaire,unemployment_rate,9.1,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Yukon,territoire,Canada,15-24,postsec_inf_bac,unemployment_rate,2.7,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Yukon,territoire,Canada,15-24,bac_ou_plus,unemployment_rate,3.5,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,petit_effectif_denominateur<250_arrondi_aleatoire
Yukon,territoire,Canada,15-24,aucun_diplome,employment_rate,37.7,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Yukon,territoire,Canada,15-24,secondaire,employment_rate,70.4,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Yukon,territoire,Canada,15-24,postsec_inf_bac,employment_rate,89.4,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Yukon,territoire,Canada,15-24,bac_ou_plus,employment_rate,89.5,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,petit_effectif_denominateur<250_arrondi_aleatoire
Yukon,territoire,Canada,25-54,aucun_diplome,unemployment_rate,10.2,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Yukon,territoire,Canada,25-54,secondaire,unemployment_rate,4.7,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Yukon,territoire,Canada,25-54,postsec_inf_bac,unemployment_rate,3.4,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Yukon,territoire,Canada,25-54,bac_ou_plus,unemployment_rate,1.7,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Yukon,territoire,Canada,25-54,aucun_diplome,employment_rate,63.2,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Yukon,territoire,Canada,25-54,secondaire,employment_rate,81.0,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Yukon,territoire,Canada,25-54,postsec_inf_bac,employment_rate,90.0,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Yukon,territoire,Canada,25-54,bac_ou_plus,employment_rate,93.3,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Yukon,territoire,Canada,55-64,aucun_diplome,unemployment_rate,8.1,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Yukon,territoire,Canada,55-64,secondaire,unemployment_rate,4.1,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Yukon,territoire,Canada,55-64,postsec_inf_bac,unemployment_rate,5.3,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Yukon,territoire,Canada,55-64,bac_ou_plus,unemployment_rate,2.1,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Yukon,territoire,Canada,55-64,aucun_diplome,employment_rate,57.7,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Yukon,territoire,Canada,55-64,secondaire,employment_rate,71.3,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Yukon,territoire,Canada,55-64,postsec_inf_bac,employment_rate,73.1,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Yukon,territoire,Canada,55-64,bac_ou_plus,employment_rate,76.3,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Whitehorse,ville (SDR),Canada,15-24,aucun_diplome,unemployment_rate,8.5,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Whitehorse,ville (SDR),Canada,15-24,secondaire,unemployment_rate,8.0,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Whitehorse,ville (SDR),Canada,15-24,postsec_inf_bac,unemployment_rate,1.9,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Whitehorse,ville (SDR),Canada,15-24,bac_ou_plus,unemployment_rate,4.6,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,petit_effectif_denominateur<250_arrondi_aleatoire
Whitehorse,ville (SDR),Canada,15-24,aucun_diplome,employment_rate,39.8,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Whitehorse,ville (SDR),Canada,15-24,secondaire,employment_rate,73.0,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Whitehorse,ville (SDR),Canada,15-24,postsec_inf_bac,employment_rate,91.7,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Whitehorse,ville (SDR),Canada,15-24,bac_ou_plus,employment_rate,86.5,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,petit_effectif_denominateur<250_arrondi_aleatoire
Whitehorse,ville (SDR),Canada,25-54,aucun_diplome,unemployment_rate,8.6,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Whitehorse,ville (SDR),Canada,25-54,secondaire,unemployment_rate,4.0,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Whitehorse,ville (SDR),Canada,25-54,postsec_inf_bac,unemployment_rate,2.8,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Whitehorse,ville (SDR),Canada,25-54,bac_ou_plus,unemployment_rate,1.8,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Whitehorse,ville (SDR),Canada,25-54,aucun_diplome,employment_rate,67.6,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Whitehorse,ville (SDR),Canada,25-54,secondaire,employment_rate,83.1,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Whitehorse,ville (SDR),Canada,25-54,postsec_inf_bac,employment_rate,92.1,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Whitehorse,ville (SDR),Canada,25-54,bac_ou_plus,employment_rate,93.4,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Whitehorse,ville (SDR),Canada,55-64,aucun_diplome,unemployment_rate,5.9,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,petit_effectif_denominateur<250_arrondi_aleatoire
Whitehorse,ville (SDR),Canada,55-64,secondaire,unemployment_rate,3.0,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Whitehorse,ville (SDR),Canada,55-64,postsec_inf_bac,unemployment_rate,3.9,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Whitehorse,ville (SDR),Canada,55-64,bac_ou_plus,unemployment_rate,1.3,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Whitehorse,ville (SDR),Canada,55-64,aucun_diplome,employment_rate,56.5,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Whitehorse,ville (SDR),Canada,55-64,secondaire,employment_rate,75.3,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Whitehorse,ville (SDR),Canada,55-64,postsec_inf_bac,employment_rate,74.7,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Whitehorse,ville (SDR),Canada,55-64,bac_ou_plus,employment_rate,75.7,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Territoires du Nord-Ouest,territoire,Canada,15-24,aucun_diplome,unemployment_rate,11.7,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Territoires du Nord-Ouest,territoire,Canada,15-24,secondaire,unemployment_rate,10.3,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Territoires du Nord-Ouest,territoire,Canada,15-24,postsec_inf_bac,unemployment_rate,5.4,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Territoires du Nord-Ouest,territoire,Canada,15-24,bac_ou_plus,unemployment_rate,3.9,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,petit_effectif_denominateur<250_arrondi_aleatoire
Territoires du Nord-Ouest,territoire,Canada,15-24,aucun_diplome,employment_rate,31.2,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Territoires du Nord-Ouest,territoire,Canada,15-24,secondaire,employment_rate,58.7,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Territoires du Nord-Ouest,territoire,Canada,15-24,postsec_inf_bac,employment_rate,75.4,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Territoires du Nord-Ouest,territoire,Canada,15-24,bac_ou_plus,employment_rate,76.6,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Territoires du Nord-Ouest,territoire,Canada,25-54,aucun_diplome,unemployment_rate,14.6,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Territoires du Nord-Ouest,territoire,Canada,25-54,secondaire,unemployment_rate,5.1,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Territoires du Nord-Ouest,territoire,Canada,25-54,postsec_inf_bac,unemployment_rate,3.1,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Territoires du Nord-Ouest,territoire,Canada,25-54,bac_ou_plus,unemployment_rate,1.1,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Territoires du Nord-Ouest,territoire,Canada,25-54,aucun_diplome,employment_rate,46.3,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Territoires du Nord-Ouest,territoire,Canada,25-54,secondaire,employment_rate,74.6,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Territoires du Nord-Ouest,territoire,Canada,25-54,postsec_inf_bac,employment_rate,85.9,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Territoires du Nord-Ouest,territoire,Canada,25-54,bac_ou_plus,employment_rate,92.1,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Territoires du Nord-Ouest,territoire,Canada,55-64,aucun_diplome,unemployment_rate,9.6,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Territoires du Nord-Ouest,territoire,Canada,55-64,secondaire,unemployment_rate,3.0,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Territoires du Nord-Ouest,territoire,Canada,55-64,postsec_inf_bac,unemployment_rate,4.2,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Territoires du Nord-Ouest,territoire,Canada,55-64,bac_ou_plus,unemployment_rate,1.0,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Territoires du Nord-Ouest,territoire,Canada,55-64,aucun_diplome,employment_rate,47.1,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Territoires du Nord-Ouest,territoire,Canada,55-64,secondaire,employment_rate,73.4,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Territoires du Nord-Ouest,territoire,Canada,55-64,postsec_inf_bac,employment_rate,71.0,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Territoires du Nord-Ouest,territoire,Canada,55-64,bac_ou_plus,employment_rate,80.1,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Yellowknife,ville (SDR),Canada,15-24,aucun_diplome,unemployment_rate,8.9,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Yellowknife,ville (SDR),Canada,15-24,secondaire,unemployment_rate,9.6,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Yellowknife,ville (SDR),Canada,15-24,postsec_inf_bac,unemployment_rate,2.5,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,petit_effectif_denominateur<250_arrondi_aleatoire
Yellowknife,ville (SDR),Canada,15-24,bac_ou_plus,unemployment_rate,0.0,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,petit_effectif_denominateur<250_arrondi_aleatoire
Yellowknife,ville (SDR),Canada,15-24,aucun_diplome,employment_rate,38.6,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Yellowknife,ville (SDR),Canada,15-24,secondaire,employment_rate,63.9,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Yellowknife,ville (SDR),Canada,15-24,postsec_inf_bac,employment_rate,85.1,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Yellowknife,ville (SDR),Canada,15-24,bac_ou_plus,employment_rate,76.3,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,petit_effectif_denominateur<250_arrondi_aleatoire
Yellowknife,ville (SDR),Canada,25-54,aucun_diplome,unemployment_rate,13.7,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Yellowknife,ville (SDR),Canada,25-54,secondaire,unemployment_rate,3.3,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Yellowknife,ville (SDR),Canada,25-54,postsec_inf_bac,unemployment_rate,1.5,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Yellowknife,ville (SDR),Canada,25-54,bac_ou_plus,unemployment_rate,0.8,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Yellowknife,ville (SDR),Canada,25-54,aucun_diplome,employment_rate,55.6,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Yellowknife,ville (SDR),Canada,25-54,secondaire,employment_rate,80.3,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Yellowknife,ville (SDR),Canada,25-54,postsec_inf_bac,employment_rate,91.5,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Yellowknife,ville (SDR),Canada,25-54,bac_ou_plus,employment_rate,92.9,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Yellowknife,ville (SDR),Canada,55-64,aucun_diplome,unemployment_rate,10.1,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,petit_effectif_denominateur<250_arrondi_aleatoire
Yellowknife,ville (SDR),Canada,55-64,secondaire,unemployment_rate,2.6,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Yellowknife,ville (SDR),Canada,55-64,postsec_inf_bac,unemployment_rate,3.0,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Yellowknife,ville (SDR),Canada,55-64,bac_ou_plus,unemployment_rate,1.4,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Yellowknife,ville (SDR),Canada,55-64,aucun_diplome,employment_rate,56.4,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Yellowknife,ville (SDR),Canada,55-64,secondaire,employment_rate,77.7,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Yellowknife,ville (SDR),Canada,55-64,postsec_inf_bac,employment_rate,72.4,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Yellowknife,ville (SDR),Canada,55-64,bac_ou_plus,employment_rate,79.8,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Nunavut,territoire,Canada,15-24,aucun_diplome,unemployment_rate,23.5,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Nunavut,territoire,Canada,15-24,secondaire,unemployment_rate,12.6,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Nunavut,territoire,Canada,15-24,postsec_inf_bac,unemployment_rate,12.6,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,petit_effectif_denominateur<250_arrondi_aleatoire
Nunavut,territoire,Canada,15-24,bac_ou_plus,unemployment_rate,18.4,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,petit_effectif_denominateur<250_arrondi_aleatoire
Nunavut,territoire,Canada,15-24,aucun_diplome,employment_rate,21.8,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Nunavut,territoire,Canada,15-24,secondaire,employment_rate,52.7,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Nunavut,territoire,Canada,15-24,postsec_inf_bac,employment_rate,64.6,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Nunavut,territoire,Canada,15-24,bac_ou_plus,employment_rate,70.9,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,petit_effectif_denominateur<250_arrondi_aleatoire
Nunavut,territoire,Canada,25-54,aucun_diplome,unemployment_rate,17.9,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Nunavut,territoire,Canada,25-54,secondaire,unemployment_rate,9.4,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Nunavut,territoire,Canada,25-54,postsec_inf_bac,unemployment_rate,7.2,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Nunavut,territoire,Canada,25-54,bac_ou_plus,unemployment_rate,1.1,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Nunavut,territoire,Canada,25-54,aucun_diplome,employment_rate,41.7,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Nunavut,territoire,Canada,25-54,secondaire,employment_rate,67.4,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Nunavut,territoire,Canada,25-54,postsec_inf_bac,employment_rate,76.0,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Nunavut,territoire,Canada,25-54,bac_ou_plus,employment_rate,93.9,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Nunavut,territoire,Canada,55-64,aucun_diplome,unemployment_rate,10.2,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Nunavut,territoire,Canada,55-64,secondaire,unemployment_rate,3.7,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,petit_effectif_denominateur<250_arrondi_aleatoire
Nunavut,territoire,Canada,55-64,postsec_inf_bac,unemployment_rate,5.7,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Nunavut,territoire,Canada,55-64,bac_ou_plus,unemployment_rate,1.5,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Nunavut,territoire,Canada,55-64,aucun_diplome,employment_rate,43.1,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Nunavut,territoire,Canada,55-64,secondaire,employment_rate,73.4,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Nunavut,territoire,Canada,55-64,postsec_inf_bac,employment_rate,74.5,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Nunavut,territoire,Canada,55-64,bac_ou_plus,employment_rate,89.9,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Iqaluit,ville (SDR),Canada,15-24,aucun_diplome,unemployment_rate,15.8,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,petit_effectif_denominateur<250_arrondi_aleatoire
Iqaluit,ville (SDR),Canada,15-24,secondaire,unemployment_rate,10.4,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,petit_effectif_denominateur<250_arrondi_aleatoire
Iqaluit,ville (SDR),Canada,15-24,postsec_inf_bac,unemployment_rate,8.0,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,petit_effectif_denominateur<250_arrondi_aleatoire
Iqaluit,ville (SDR),Canada,15-24,bac_ou_plus,unemployment_rate,0.0,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,petit_effectif_denominateur<250_arrondi_aleatoire
Iqaluit,ville (SDR),Canada,15-24,aucun_diplome,employment_rate,28.3,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Iqaluit,ville (SDR),Canada,15-24,secondaire,employment_rate,65.9,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Iqaluit,ville (SDR),Canada,15-24,postsec_inf_bac,employment_rate,61.8,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,petit_effectif_denominateur<250_arrondi_aleatoire
Iqaluit,ville (SDR),Canada,15-24,bac_ou_plus,employment_rate,78.5,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,petit_effectif_denominateur<250_arrondi_aleatoire
Iqaluit,ville (SDR),Canada,25-54,aucun_diplome,unemployment_rate,13.8,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Iqaluit,ville (SDR),Canada,25-54,secondaire,unemployment_rate,3.8,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Iqaluit,ville (SDR),Canada,25-54,postsec_inf_bac,unemployment_rate,2.5,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Iqaluit,ville (SDR),Canada,25-54,bac_ou_plus,unemployment_rate,1.0,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Iqaluit,ville (SDR),Canada,25-54,aucun_diplome,employment_rate,48.7,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Iqaluit,ville (SDR),Canada,25-54,secondaire,employment_rate,79.1,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Iqaluit,ville (SDR),Canada,25-54,postsec_inf_bac,employment_rate,85.9,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Iqaluit,ville (SDR),Canada,25-54,bac_ou_plus,employment_rate,94.6,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Iqaluit,ville (SDR),Canada,55-64,aucun_diplome,unemployment_rate,8.6,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,petit_effectif_denominateur<250_arrondi_aleatoire
Iqaluit,ville (SDR),Canada,55-64,secondaire,unemployment_rate,5.6,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,petit_effectif_denominateur<250_arrondi_aleatoire
Iqaluit,ville (SDR),Canada,55-64,postsec_inf_bac,unemployment_rate,3.7,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,petit_effectif_denominateur<250_arrondi_aleatoire
Iqaluit,ville (SDR),Canada,55-64,bac_ou_plus,unemployment_rate,0.0,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,petit_effectif_denominateur<250_arrondi_aleatoire
Iqaluit,ville (SDR),Canada,55-64,aucun_diplome,employment_rate,43.4,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,petit_effectif_denominateur<250_arrondi_aleatoire
Iqaluit,ville (SDR),Canada,55-64,secondaire,employment_rate,83.0,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,petit_effectif_denominateur<250_arrondi_aleatoire
Iqaluit,ville (SDR),Canada,55-64,postsec_inf_bac,employment_rate,83.9,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,
Iqaluit,ville (SDR),Canada,55-64,bac_ou_plus,employment_rate,90.4,2025,model_logit_shift_census2021_profile_to_LFS2025_territory_rate,MODEL_98-10-0400-01_x_14-10-0464-01,modélisé,petit_effectif_denominateur<250_arrondi_aleatoire
Yukon,territoire,Canada,15+,tous,unemployment_rate,4.2,2025,LFS_annual_average,StatCan_14-10-0464-01,publié,
Yukon,territoire,Canada,15+,tous,unemployment_rate,5.2,2026-08/2026-10,LFS_3MMA_unadjusted,StatCan_14-10-0292-01,publié,
Yukon,territoire,Canada,25+,tous,unemployment_rate,3.9,2026-08/2026-10,LFS_3MMA_unadjusted,StatCan_14-10-0292-01,publié,
Yukon,territoire,Canada,15+,tous,unemployment_rate,4.2,2025,LFS_annual_average,StatCan_14-10-0446-01,publié,
Yukon,territoire,Canada,15+,tous,unemployment_rate,7.5,2025,LFS_annual_average,StatCan_14-10-0446-01,publié,identite=Autochtones
Yukon,territoire,Canada,15+,tous,unemployment_rate,3.3,2025,LFS_annual_average,StatCan_14-10-0446-01,publié,identite=non-Autochtones
Yukon,territoire,Canada,25-54,tous,unemployment_rate,3.1,2025,LFS_annual_average,StatCan_14-10-0446-01,publié,
Yukon,territoire,Canada,25-54,tous,unemployment_rate,,2025,LFS_annual_average,StatCan_14-10-0446-01,publié,identite=Autochtones;supprime_confidentialite_ou_fiabilite
Yukon,territoire,Canada,25-54,tous,unemployment_rate,2.4,2025,LFS_annual_average,StatCan_14-10-0446-01,publié,identite=non-Autochtones
Yukon,territoire,Canada,15+,tous,employment_rate,72.8,2025,LFS_annual_average,StatCan_14-10-0464-01,publié,
Yukon,territoire,Canada,15+,tous,employment_rate,69.9,2026-08/2026-10,LFS_3MMA_unadjusted,StatCan_14-10-0292-01,publié,
Yukon,territoire,Canada,25+,tous,employment_rate,73.4,2026-08/2026-10,LFS_3MMA_unadjusted,StatCan_14-10-0292-01,publié,
Yukon,territoire,Canada,15+,tous,employment_rate,72.8,2025,LFS_annual_average,StatCan_14-10-0446-01,publié,
Yukon,territoire,Canada,15+,tous,employment_rate,62.7,2025,LFS_annual_average,StatCan_14-10-0446-01,publié,identite=Autochtones
Yukon,territoire,Canada,15+,tous,employment_rate,74.8,2025,LFS_annual_average,StatCan_14-10-0446-01,publié,identite=non-Autochtones
Yukon,territoire,Canada,25-54,tous,employment_rate,90.0,2025,LFS_annual_average,StatCan_14-10-0446-01,publié,
Yukon,territoire,Canada,25-54,tous,employment_rate,77.4,2025,LFS_annual_average,StatCan_14-10-0446-01,publié,identite=Autochtones
Yukon,territoire,Canada,25-54,tous,employment_rate,92.2,2025,LFS_annual_average,StatCan_14-10-0446-01,publié,identite=non-Autochtones
Yukon,territoire,Canada,15-24,tous,unemployment_rate,16.1,2026-08/2026-10,LFS_3MMA_unadjusted,StatCan_14-10-0292-01,calculé ((chômeurs 15+ − chômeurs 25+)/(actifs 15+ − actifs 25+)),tres_imprecis_effectifs_arrondis_a_100
Yukon,territoire,Canada,15-24,tous,employment_rate,48.1,2026-08/2026-10,LFS_3MMA_unadjusted,StatCan_14-10-0292-01,calculé ((emploi 15+ − emploi 25+)/(population 15+ − population 25+)),tres_imprecis_effectifs_arrondis_a_100
Territoires du Nord-Ouest,territoire,Canada,15+,tous,unemployment_rate,5.0,2025,LFS_annual_average,StatCan_14-10-0464-01,publié,
Territoires du Nord-Ouest,territoire,Canada,15+,tous,unemployment_rate,5.1,2026-08/2026-10,LFS_3MMA_unadjusted,StatCan_14-10-0292-01,publié,
Territoires du Nord-Ouest,territoire,Canada,25+,tous,unemployment_rate,3.6,2026-08/2026-10,LFS_3MMA_unadjusted,StatCan_14-10-0292-01,publié,
Territoires du Nord-Ouest,territoire,Canada,15+,tous,unemployment_rate,5.0,2025,LFS_annual_average,StatCan_14-10-0446-01,publié,
Territoires du Nord-Ouest,territoire,Canada,15+,tous,unemployment_rate,9.2,2025,LFS_annual_average,StatCan_14-10-0446-01,publié,identite=Autochtones
Territoires du Nord-Ouest,territoire,Canada,15+,tous,unemployment_rate,2.6,2025,LFS_annual_average,StatCan_14-10-0446-01,publié,identite=non-Autochtones
Territoires du Nord-Ouest,territoire,Canada,25-54,tous,unemployment_rate,3.6,2025,LFS_annual_average,StatCan_14-10-0446-01,publié,
Territoires du Nord-Ouest,territoire,Canada,25-54,tous,unemployment_rate,7.3,2025,LFS_annual_average,StatCan_14-10-0446-01,publié,identite=Autochtones
Territoires du Nord-Ouest,territoire,Canada,25-54,tous,unemployment_rate,2.7,2025,LFS_annual_average,StatCan_14-10-0446-01,publié,identite=non-Autochtones
Territoires du Nord-Ouest,territoire,Canada,15+,tous,employment_rate,65.5,2025,LFS_annual_average,StatCan_14-10-0464-01,publié,
Territoires du Nord-Ouest,territoire,Canada,15+,tous,employment_rate,68.1,2026-08/2026-10,LFS_3MMA_unadjusted,StatCan_14-10-0292-01,publié,
Territoires du Nord-Ouest,territoire,Canada,25+,tous,employment_rate,71.9,2026-08/2026-10,LFS_3MMA_unadjusted,StatCan_14-10-0292-01,publié,
Territoires du Nord-Ouest,territoire,Canada,15+,tous,employment_rate,65.5,2025,LFS_annual_average,StatCan_14-10-0446-01,publié,
Territoires du Nord-Ouest,territoire,Canada,15+,tous,employment_rate,50.6,2025,LFS_annual_average,StatCan_14-10-0446-01,publié,identite=Autochtones
Territoires du Nord-Ouest,territoire,Canada,15+,tous,employment_rate,77.7,2025,LFS_annual_average,StatCan_14-10-0446-01,publié,identite=non-Autochtones
Territoires du Nord-Ouest,territoire,Canada,25-54,tous,employment_rate,82.1,2025,LFS_annual_average,StatCan_14-10-0446-01,publié,
Territoires du Nord-Ouest,territoire,Canada,25-54,tous,employment_rate,66.2,2025,LFS_annual_average,StatCan_14-10-0446-01,publié,identite=Autochtones
Territoires du Nord-Ouest,territoire,Canada,25-54,tous,employment_rate,90.8,2025,LFS_annual_average,StatCan_14-10-0446-01,publié,identite=non-Autochtones
Territoires du Nord-Ouest,territoire,Canada,15-24,tous,unemployment_rate,15.6,2026-08/2026-10,LFS_3MMA_unadjusted,StatCan_14-10-0292-01,calculé ((chômeurs 15+ − chômeurs 25+)/(actifs 15+ − actifs 25+)),tres_imprecis_effectifs_arrondis_a_100
Territoires du Nord-Ouest,territoire,Canada,15-24,tous,employment_rate,48.3,2026-08/2026-10,LFS_3MMA_unadjusted,StatCan_14-10-0292-01,calculé ((emploi 15+ − emploi 25+)/(population 15+ − population 25+)),tres_imprecis_effectifs_arrondis_a_100
Nunavut,territoire,Canada,15+,tous,unemployment_rate,10.3,2025,LFS_annual_average,StatCan_14-10-0464-01,publié,
Nunavut,territoire,Canada,15+,tous,unemployment_rate,12.2,2026-08/2026-10,LFS_3MMA_unadjusted,StatCan_14-10-0292-01,publié,
Nunavut,territoire,Canada,25+,tous,unemployment_rate,8.8,2026-08/2026-10,LFS_3MMA_unadjusted,StatCan_14-10-0292-01,publié,
Nunavut,territoire,Canada,15+,tous,unemployment_rate,10.6,2025,LFS_annual_average,StatCan_14-10-0446-01,publié,
Nunavut,territoire,Canada,15+,tous,unemployment_rate,13.2,2025,LFS_annual_average,StatCan_14-10-0446-01,publié,identite=Autochtones
Nunavut,territoire,Canada,15+,tous,unemployment_rate,,2025,LFS_annual_average,StatCan_14-10-0446-01,publié,identite=non-Autochtones;supprime_confidentialite_ou_fiabilite
Nunavut,territoire,Canada,25-54,tous,unemployment_rate,10.0,2025,LFS_annual_average,StatCan_14-10-0446-01,publié,
Nunavut,territoire,Canada,25-54,tous,unemployment_rate,13.7,2025,LFS_annual_average,StatCan_14-10-0446-01,publié,identite=Autochtones
Nunavut,territoire,Canada,25-54,tous,unemployment_rate,,2025,LFS_annual_average,StatCan_14-10-0446-01,publié,identite=non-Autochtones;supprime_confidentialite_ou_fiabilite
Nunavut,territoire,Canada,15+,tous,employment_rate,53.6,2025,LFS_annual_average,StatCan_14-10-0464-01,publié,
Nunavut,territoire,Canada,15+,tous,employment_rate,54.4,2026-08/2026-10,LFS_3MMA_unadjusted,StatCan_14-10-0292-01,publié,
Nunavut,territoire,Canada,25+,tous,employment_rate,61.3,2026-08/2026-10,LFS_3MMA_unadjusted,StatCan_14-10-0292-01,publié,
Nunavut,territoire,Canada,15+,tous,employment_rate,53.7,2025,LFS_annual_average,StatCan_14-10-0446-01,publié,
Nunavut,territoire,Canada,15+,tous,employment_rate,45.2,2025,LFS_annual_average,StatCan_14-10-0446-01,publié,identite=Autochtones
Nunavut,territoire,Canada,15+,tous,employment_rate,86.8,2025,LFS_annual_average,StatCan_14-10-0446-01,publié,identite=non-Autochtones
Nunavut,territoire,Canada,25-54,tous,employment_rate,64.3,2025,LFS_annual_average,StatCan_14-10-0446-01,publié,
Nunavut,territoire,Canada,25-54,tous,employment_rate,54.3,2025,LFS_annual_average,StatCan_14-10-0446-01,publié,identite=Autochtones
Nunavut,territoire,Canada,25-54,tous,employment_rate,94.7,2025,LFS_annual_average,StatCan_14-10-0446-01,publié,identite=non-Autochtones
Nunavut,territoire,Canada,15-24,tous,unemployment_rate,26.7,2026-08/2026-10,LFS_3MMA_unadjusted,StatCan_14-10-0292-01,calculé ((chômeurs 15+ − chômeurs 25+)/(actifs 15+ − actifs 25+)),tres_imprecis_effectifs_arrondis_a_100
Nunavut,territoire,Canada,15-24,tous,employment_rate,31.8,2026-08/2026-10,LFS_3MMA_unadjusted,StatCan_14-10-0292-01,calculé ((emploi 15+ − emploi 25+)/(population 15+ − population 25+)),tres_imprecis_effectifs_arrondis_a_100
Bathurst (AR),ville (agglomération de recensement),Canada,15+,tous,unemployment_rate,8.3,2025-09/2026-08,LFS_small_area_estimate_Fay-Herriot_monthly_unadjusted,StatCan_14-10-0480-01,calculé (moyenne simple de 12 estimations mensuelles publiées),
Bathurst (AR),ville (agglomération de recensement),Canada,15+,tous,employment_rate,51.0,2025-09/2026-08,LFS_small_area_estimate_Fay-Herriot_monthly_unadjusted,StatCan_14-10-0480-01,calculé (moyenne simple de 12 estimations mensuelles publiées),
Edmundston (AR),ville (agglomération de recensement),Canada,15+,tous,unemployment_rate,6.5,2025-09/2026-08,LFS_small_area_estimate_Fay-Herriot_monthly_unadjusted,StatCan_14-10-0480-01,calculé (moyenne simple de 12 estimations mensuelles publiées),
Edmundston (AR),ville (agglomération de recensement),Canada,15+,tous,employment_rate,54.3,2025-09/2026-08,LFS_small_area_estimate_Fay-Herriot_monthly_unadjusted,StatCan_14-10-0480-01,calculé (moyenne simple de 12 estimations mensuelles publiées),
Hawkesbury (Ont.) (AR),ville (agglomération de recensement),Canada,15+,tous,unemployment_rate,7.0,2025-09/2026-08,LFS_small_area_estimate_Fay-Herriot_monthly_unadjusted,StatCan_14-10-0480-01,calculé (moyenne simple de 12 estimations mensuelles publiées),
Hawkesbury (Ont.) (AR),ville (agglomération de recensement),Canada,15+,tous,employment_rate,52.4,2025-09/2026-08,LFS_small_area_estimate_Fay-Herriot_monthly_unadjusted,StatCan_14-10-0480-01,calculé (moyenne simple de 12 estimations mensuelles publiées),
Cornwall (AR),ville (agglomération de recensement),Canada,15+,tous,unemployment_rate,5.9,2025-09/2026-08,LFS_small_area_estimate_Fay-Herriot_monthly_unadjusted,StatCan_14-10-0480-01,calculé (moyenne simple de 12 estimations mensuelles publiées),
Cornwall (AR),ville (agglomération de recensement),Canada,15+,tous,employment_rate,57.0,2025-09/2026-08,LFS_small_area_estimate_Fay-Herriot_monthly_unadjusted,StatCan_14-10-0480-01,calculé (moyenne simple de 12 estimations mensuelles publiées),
Timmins (AR),ville (agglomération de recensement),Canada,15+,tous,unemployment_rate,6.5,2025-09/2026-08,LFS_small_area_estimate_Fay-Herriot_monthly_unadjusted,StatCan_14-10-0480-01,calculé (moyenne simple de 12 estimations mensuelles publiées),
Timmins (AR),ville (agglomération de recensement),Canada,15+,tous,employment_rate,62.8,2025-09/2026-08,LFS_small_area_estimate_Fay-Herriot_monthly_unadjusted,StatCan_14-10-0480-01,calculé (moyenne simple de 12 estimations mensuelles publiées),
Prince George (AR),ville (agglomération de recensement),Canada,15+,tous,unemployment_rate,6.8,2025-09/2026-08,LFS_small_area_estimate_Fay-Herriot_monthly_unadjusted,StatCan_14-10-0480-01,calculé (moyenne simple de 12 estimations mensuelles publiées),
Prince George (AR),ville (agglomération de recensement),Canada,15+,tous,employment_rate,62.7,2025-09/2026-08,LFS_small_area_estimate_Fay-Herriot_monthly_unadjusted,StatCan_14-10-0480-01,calculé (moyenne simple de 12 estimations mensuelles publiées),
Paris (COM-75056),ville (commune),France,15-24,tous,unemployment_rate,17.9,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Paris (COM-75056),ville (commune),France,25-54,tous,unemployment_rate,9.6,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Paris (COM-75056),ville (commune),France,55-64,tous,unemployment_rate,10.2,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Paris (COM-75056),ville (commune),France,15-64,tous,unemployment_rate,10.5,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Paris (COM-75056),ville (commune),France,15-64,low (aucun diplôme; CEP; brevet),unemployment_rate,19.6,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Paris (COM-75056),ville (commune),France,15-64,medium (CAP-BEP; bac),unemployment_rate,16.8,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Paris (COM-75056),ville (commune),France,15-64,high (bac+2 ou plus),unemployment_rate,8.0,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Lyon (COM-69123),ville (commune),France,15-24,tous,unemployment_rate,18.3,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Lyon (COM-69123),ville (commune),France,25-54,tous,unemployment_rate,10.0,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Lyon (COM-69123),ville (commune),France,55-64,tous,unemployment_rate,9.1,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Lyon (COM-69123),ville (commune),France,15-64,tous,unemployment_rate,11.1,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Lyon (COM-69123),ville (commune),France,15-64,low (aucun diplôme; CEP; brevet),unemployment_rate,22.3,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Lyon (COM-69123),ville (commune),France,15-64,medium (CAP-BEP; bac),unemployment_rate,17.0,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Lyon (COM-69123),ville (commune),France,15-64,high (bac+2 ou plus),unemployment_rate,7.8,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Marseille (COM-13055),ville (commune),France,15-24,tous,unemployment_rate,24.1,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Marseille (COM-13055),ville (commune),France,25-54,tous,unemployment_rate,12.7,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Marseille (COM-13055),ville (commune),France,55-64,tous,unemployment_rate,10.1,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Marseille (COM-13055),ville (commune),France,15-64,tous,unemployment_rate,13.5,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Marseille (COM-13055),ville (commune),France,15-64,low (aucun diplôme; CEP; brevet),unemployment_rate,23.7,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Marseille (COM-13055),ville (commune),France,15-64,medium (CAP-BEP; bac),unemployment_rate,16.0,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Marseille (COM-13055),ville (commune),France,15-64,high (bac+2 ou plus),unemployment_rate,8.2,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Lille (COM-59350),ville (commune),France,15-24,tous,unemployment_rate,24.0,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Lille (COM-59350),ville (commune),France,25-54,tous,unemployment_rate,14.0,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Lille (COM-59350),ville (commune),France,55-64,tous,unemployment_rate,12.2,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Lille (COM-59350),ville (commune),France,15-64,tous,unemployment_rate,15.7,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Lille (COM-59350),ville (commune),France,15-64,low (aucun diplôme; CEP; brevet),unemployment_rate,32.3,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Lille (COM-59350),ville (commune),France,15-64,medium (CAP-BEP; bac),unemployment_rate,24.3,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Lille (COM-59350),ville (commune),France,15-64,high (bac+2 ou plus),unemployment_rate,9.5,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Toulouse (COM-31555),ville (commune),France,15-24,tous,unemployment_rate,23.6,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Toulouse (COM-31555),ville (commune),France,25-54,tous,unemployment_rate,12.8,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Toulouse (COM-31555),ville (commune),France,55-64,tous,unemployment_rate,10.2,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Toulouse (COM-31555),ville (commune),France,15-64,tous,unemployment_rate,14.3,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Toulouse (COM-31555),ville (commune),France,15-64,low (aucun diplôme; CEP; brevet),unemployment_rate,28.8,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Toulouse (COM-31555),ville (commune),France,15-64,medium (CAP-BEP; bac),unemployment_rate,20.5,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Toulouse (COM-31555),ville (commune),France,15-64,high (bac+2 ou plus),unemployment_rate,9.7,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Bordeaux (COM-33063),ville (commune),France,15-24,tous,unemployment_rate,20.2,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Bordeaux (COM-33063),ville (commune),France,25-54,tous,unemployment_rate,10.6,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Bordeaux (COM-33063),ville (commune),France,55-64,tous,unemployment_rate,8.9,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Bordeaux (COM-33063),ville (commune),France,15-64,tous,unemployment_rate,11.8,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Bordeaux (COM-33063),ville (commune),France,15-64,low (aucun diplôme; CEP; brevet),unemployment_rate,25.2,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Bordeaux (COM-33063),ville (commune),France,15-64,medium (CAP-BEP; bac),unemployment_rate,17.4,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Bordeaux (COM-33063),ville (commune),France,15-64,high (bac+2 ou plus),unemployment_rate,8.3,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Nantes (COM-44109),ville (commune),France,15-24,tous,unemployment_rate,20.6,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Nantes (COM-44109),ville (commune),France,25-54,tous,unemployment_rate,12.1,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Nantes (COM-44109),ville (commune),France,55-64,tous,unemployment_rate,9.5,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Nantes (COM-44109),ville (commune),France,15-64,tous,unemployment_rate,13.1,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Nantes (COM-44109),ville (commune),France,15-64,low (aucun diplôme; CEP; brevet),unemployment_rate,30.0,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Nantes (COM-44109),ville (commune),France,15-64,medium (CAP-BEP; bac),unemployment_rate,18.9,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Nantes (COM-44109),ville (commune),France,15-64,high (bac+2 ou plus),unemployment_rate,8.5,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Rennes (COM-35238),ville (commune),France,15-24,tous,unemployment_rate,22.0,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Rennes (COM-35238),ville (commune),France,25-54,tous,unemployment_rate,12.3,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Rennes (COM-35238),ville (commune),France,55-64,tous,unemployment_rate,8.9,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Rennes (COM-35238),ville (commune),France,15-64,tous,unemployment_rate,13.8,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Rennes (COM-35238),ville (commune),France,15-64,low (aucun diplôme; CEP; brevet),unemployment_rate,28.1,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Rennes (COM-35238),ville (commune),France,15-64,medium (CAP-BEP; bac),unemployment_rate,20.3,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Rennes (COM-35238),ville (commune),France,15-64,high (bac+2 ou plus),unemployment_rate,9.1,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Strasbourg (COM-67482),ville (commune),France,15-24,tous,unemployment_rate,25.3,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Strasbourg (COM-67482),ville (commune),France,25-54,tous,unemployment_rate,14.1,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Strasbourg (COM-67482),ville (commune),France,55-64,tous,unemployment_rate,11.5,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Strasbourg (COM-67482),ville (commune),France,15-64,tous,unemployment_rate,15.5,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Strasbourg (COM-67482),ville (commune),France,15-64,low (aucun diplôme; CEP; brevet),unemployment_rate,28.1,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Strasbourg (COM-67482),ville (commune),France,15-64,medium (CAP-BEP; bac),unemployment_rate,20.4,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Strasbourg (COM-67482),ville (commune),France,15-64,high (bac+2 ou plus),unemployment_rate,9.9,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Montpellier (COM-34172),ville (commune),France,15-24,tous,unemployment_rate,28.8,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Montpellier (COM-34172),ville (commune),France,25-54,tous,unemployment_rate,16.5,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Montpellier (COM-34172),ville (commune),France,55-64,tous,unemployment_rate,13.3,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Montpellier (COM-34172),ville (commune),France,15-64,tous,unemployment_rate,18.3,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Montpellier (COM-34172),ville (commune),France,15-64,low (aucun diplôme; CEP; brevet),unemployment_rate,30.8,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Montpellier (COM-34172),ville (commune),France,15-64,medium (CAP-BEP; bac),unemployment_rate,24.9,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Montpellier (COM-34172),ville (commune),France,15-64,high (bac+2 ou plus),unemployment_rate,12.5,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Brest (COM-29019),ville (commune),France,15-24,tous,unemployment_rate,21.2,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Brest (COM-29019),ville (commune),France,25-54,tous,unemployment_rate,12.1,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Brest (COM-29019),ville (commune),France,55-64,tous,unemployment_rate,10.1,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Brest (COM-29019),ville (commune),France,15-64,tous,unemployment_rate,13.5,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Brest (COM-29019),ville (commune),France,15-64,low (aucun diplôme; CEP; brevet),unemployment_rate,29.2,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Brest (COM-29019),ville (commune),France,15-64,medium (CAP-BEP; bac),unemployment_rate,16.4,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Brest (COM-29019),ville (commune),France,15-64,high (bac+2 ou plus),unemployment_rate,8.3,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Quimper (COM-29232),ville (commune),France,15-24,tous,unemployment_rate,22.1,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Quimper (COM-29232),ville (commune),France,25-54,tous,unemployment_rate,11.6,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Quimper (COM-29232),ville (commune),France,55-64,tous,unemployment_rate,9.6,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Quimper (COM-29232),ville (commune),France,15-64,tous,unemployment_rate,12.7,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Quimper (COM-29232),ville (commune),France,15-64,low (aucun diplôme; CEP; brevet),unemployment_rate,24.8,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Quimper (COM-29232),ville (commune),France,15-64,medium (CAP-BEP; bac),unemployment_rate,15.5,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
Quimper (COM-29232),ville (commune),France,15-64,high (bac+2 ou plus),unemployment_rate,8.0,2023,RP2023_chomage_au_sens_du_recensement_declaratif,INSEE_RP2023_DS_RP_EMPLOI_LR_PRINC,calculé (chômeurs/actifs ; effectifs publiés),
```

### Inferences
- Cadre théorique (références bibliographiques classiques, non rouvertes dans cette session) : l'estimation synthétique suppose que les petites aires partagent les taux par cellule d'une aire plus grande ; la méthode d'estimation préservant la structure (Purcell et Kish, 1980, International Statistical Review 48, p. 3-18) conserve la structure d'association d'une source ancienne ou plus large (ici le croisement âge × diplôme provincial ou du recensement) et la cale sur des marges locales récentes par ajustement proportionnel itératif ; le modèle de Fay et Herriot (1979, Journal of the American Statistical Association 74, p. 269-277) combine une estimation directe bruitée et une prédiction par régression sur des variables auxiliaires, pondérées par leurs variances ; l'ouvrage de référence est Rao et Molina, Small Area Estimation, 2e édition, Wiley, 2015. La standardisation indirecte (appliquer les taux par cellule de la population de référence à la structure locale, puis corriger par le rapport observé / attendu) est exactement la variante M1 lorsque la structure locale par cellule est connue.
- Pourquoi M1 échoue pour les non-diplômés des capitales : le bon taux global d'Iqaluit ou de Yellowknife vient de la composition (beaucoup de diplômés), et non de meilleurs taux à diplôme égal ; multiplier tout le profil par le rapport des taux globaux attribue à tort cet avantage à chaque cellule. La standardisation indirecte complète (rapport observé / attendu calculé avec la structure locale par diplôme) ou M3 corrigent ce biais ; il faut donc toujours utiliser la composition locale par diplôme quand elle est connue (elle l'est partout : recensements canadien, français, belge, luxembourgeois, relevé structurel suisse).
- Erreur à annoncer : avec le seul taux global local (M1/M2), environ ±1 point en moyenne sur le TC d'une cellule, ±2,5 points dans les cas défavorables, et bien davantage pour les non-diplômés des petites villes (écarts de −10 à +8 points observés à Iqaluit, Hawkesbury, Edmundston) ; avec les marges locales par âge et par diplôme (M3), environ ±0,5 point, ±1,2 au pire. Le taux d'emploi se transpose moins bien que le taux de chômage (erreur moyenne de 3,9 points avec M2, jusqu'à 8,7).
- Recommandation d'affichage, par ordre de préférence : (1) publié EPA quand il existe (provinces ; TNO via LFS101) ; (2) « profil du Recensement 2021 recalé sur l'EPA 2025 » pour les territoires, capitales et villes canadiennes (tableaux ci-dessus pour les territoires ; même formule avec le TC de la RMR/AR ou de la province pour les autres villes) ; (3) pour les villes françaises, « modélisé : profil âge × diplôme national ou régional, ajusté sur les marges locales du recensement 2023 », en précisant « au sens du recensement » ou après recalage sur le taux BIT régional ; (4) pour la Belgique, la Suisse et le Luxembourg, le profil NUTS 2 (EFT ou recensement 2021) avec la mention « région, non la ville », éventuellement recalé sur le taux global local, étiqueté « modélisé à partir du profil régional ».
- Règles de prudence : ne rien afficher (ou fusionner des niveaux) quand la cellule locale compte moins de 250 actifs ; arrondir les taux modélisés à l'unité ou au demi-point ; afficher la période (mai 2021 pour le profil, 2025 pour le niveau) ; libellé type : « estimation modélisée à partir du profil du Recensement de 2021 et du taux de chômage EPA 2025 du territoire — marge d'erreur de l'ordre de 1 à 2 points, davantage pour les jeunes et les non-diplômés ».
- Les taux modélisés 2025 des 15-24 ans très diplômés (par exemple 0,0 % à Yellowknife et Iqaluit, 18,4 % au Nunavut) héritent du bruit des petites cellules du recensement et ne doivent pas être affichés tels quels.

### Gaps
- Le test synthétique porte sur un seul point dans le temps (mai 2021, pandémie) ; la stabilité temporelle du gradient (2016 contre 2021, ou recensement contre EPA provinciale 2025) n'a pas été testée.
- Pas de test équivalent pour la France (pas de « vérité » locale âge × diplôme sans les fichiers détail) ni pour la Belgique, la Suisse, le Luxembourg.
- Le document méthodologique 75-005-M2024003 n'a pas pu être lu directement (accès refusé) : équations, lissage des variances et gains de précision chiffrés non vérifiés.
- Un véritable modèle de Fay-Herriot par cellule âge × diplôme demanderait des estimations directes EPA par cellule et leurs variances (microdonnées ou totalisation personnalisée de Statistique Canada), non disponibles publiquement pour les territoires.
- Les références Purcell et Kish (1980), Fay et Herriot (1979) et Rao et Molina (2015) sont citées de mémoire, sans lien vérifié.
