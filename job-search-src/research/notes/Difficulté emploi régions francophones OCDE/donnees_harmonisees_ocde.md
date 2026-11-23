# Données internationalement harmonisées sur la difficulté à trouver un emploi — France, Belgique, Luxembourg, Suisse, Canada (niveau national puis régional TL2/NUTS2/provinces)

> Note de méthode générale (à lire avant d'utiliser les chiffres)
> - Extraction : 22 novembre 2026. Les chiffres Eurostat, OCDE et Statistique Canada ont été **tirés directement des API officielles** (Eurostat dissemination API, OECD SDMX API `sdmx.oecd.org`, Statistique Canada WDS / fichiers CSV de tableaux). Les URL données sont celles des tables ; les valeurs sont celles renvoyées par l'API le 22/11/2026.
> - « **(publié)** » = valeur lue telle quelle dans la source. « **(calcul)** » = calcul de ma part à partir de valeurs publiées, formule et intrants indiqués.
> - Drapeaux Eurostat conservés : (d) définition différente, (b) rupture de série, (u) faible fiabilité, (p) provisoire. **La France porte un drapeau (d) sur presque toutes les séries EFT et une rupture (b) en 2024 dans les séries annuelles/régionales.**
> - Dernier point disponible : Eurostat mensuel = **septembre 2026** (octobre 2026 pas encore diffusé pour FR/BE/LU au 22/11/2026) ; Suisse = trimestriel (**T2 2026**, la série « mensuelle » Eurostat s'arrête à juin 2026) ; Canada = **octobre 2026** ; Eurostat trimestriel EFT = **T2 2026** ; emplois vacants Eurostat = **T2 2026** (FR : T3 2026 provisoire ; CH : T4 2025) ; Canada emplois vacants = **août 2026** ; annuel et régional = **2025**.
> - Limite de la session : le quota de recherches web (partagé entre agents) a été épuisé en cours de travail ; plusieurs points « littérature / rapports » n'ont pu être vérifiés que par téléchargement direct de documents connus. Tout ce qui n'a pas pu être vérifié figure dans les rubriques « Gaps ».

---

## 1. Taux de chômage harmonisés (BIT), chômage des jeunes, taux d'emploi 15–64 ans ; tendance 2023–2026

### Takeaway
Fin 2026, le classement harmonisé du chômage est net : Suisse (≈5,1–5,2 %) < Belgique (6,0 %) < Canada (6,7 %) < Luxembourg (7,3 %) < France (8,5 %), et les cinq marchés se sont dégradés depuis 2023 (de +0,4 point en Belgique à +2,4 points au Luxembourg). Le taux d'emploi 15–64 ans raconte une hiérarchie différente (Suisse ≈80 %, Canada ≈74 %, France ≈69 %, Luxembourg ≈68,5 %, Belgique ≈67 %), ce qui interdit de résumer la « difficulté » par le seul taux de chômage.

### Cited Findings

**Tableau 1.1 — Taux de chômage harmonisé, désaisonnalisé, % de la population active (publié)**

| Pays | Janv. 2023 | Déc. 2023 | Déc. 2024 | Déc. 2025 | Juin 2026 | Dernier point | Source |
|---|---|---|---|---|---|---|---|
| France (15–74) | 7,1 | 7,7 | 7,3 | 8,0 | 8,3 | **8,5 (sept. 2026)** | Eurostat une_rt_m |
| Belgique (15–74) | 5,6 | 5,6 | 6,0 | 6,4 | 6,3 | **6,0 (sept. 2026)** | Eurostat une_rt_m |
| Luxembourg (15–74) | 4,9 | 5,7 | 6,5 | 6,9 | 7,1 | **7,3 (sept. 2026)** | Eurostat une_rt_m |
| Suisse (15–74) | 4,0 | 4,1 | 4,5 | 5,1 | 5,1 | **5,2 (T2 2026, trimestriel CVS)** ; 5,1 (juin 2026) | Eurostat une_rt_m / une_rt_q |
| UE-27 | 6,1 | 6,1 | 5,9 | 6,0 | 6,2 | 6,2 (sept. 2026) | Eurostat une_rt_m |
| Canada (15+) | 5,1 | 5,7 (oct. 2023) | 6,6 (oct. 2024) | 6,9 (oct. 2025) | 6,5 | **6,7 (oct. 2026)** | StatCan 14-10-0287 ; OCDE DF_IALFS_UNE_M |

- Séries mensuelles FR/BE/LU/CH — [Eurostat une_rt_m](https://ec.europa.eu/eurostat/databrowser/view/une_rt_m/default/table?lang=en) (API : [lien](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/une_rt_m?format=JSON&geo=FR&geo=BE&geo=LU&geo=CH&geo=EU27_2020&s_adj=SA&age=TOTAL&age=Y_LT25&sex=T&unit=PC_ACT&sinceTimePeriod=2023-01)), mise à jour du 20/11/2026.
- Série trimestrielle (CH T2 2026 = 5,2 ; FR 8,3 ; BE 6,2 ; LU 7,1 ; UE 6,1) — [Eurostat une_rt_q](https://ec.europa.eu/eurostat/databrowser/view/une_rt_q/default/table?lang=en).
- Canada : 6,7 % en octobre 2026 (6,4 % en juillet–août, 6,5 % en septembre) ; moyenne des 12 mois 2025 = 6,9 % (calcul sur la série mensuelle CVS) — [StatCan tableau 14-10-0287-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410028701) ; même valeur dans la base harmonisée OCDE — [OCDE, Monthly unemployment rates](https://sdmx.oecd.org/public/rest/data/OECD.SDD.TPS,DSD_LFS@DF_IALFS_UNE_M,1.0/all?startPeriod=2026-01&dimensionAtObservation=AllDimensions&format=csvfilewithlabels).
- La base OCDE harmonisée reprend exactement Eurostat pour FR/BE/LU (sept. 2026 : 8,5 / 6,0 / 7,3) et donne pour la Suisse uniquement du trimestriel (T1 2026 : 5,07 ; T2 2026 : 5,03, 15 ans et plus) — [OCDE DF_IALFS_UNE_M](https://sdmx.oecd.org/public/rest/data/OECD.SDD.TPS,DSD_LFS@DF_IALFS_UNE_M,1.0/all?startPeriod=2026-01&dimensionAtObservation=AllDimensions&format=csvfilewithlabels).
- Moyennes annuelles Eurostat (15–74) : France 7,4 (2023) → 7,4 (2024) → 7,7 (2025) ; Belgique 5,5 → 5,7 → 6,2 ; Luxembourg 5,2 → 6,4 → 6,5 ; Suisse 4,1 → 4,4 → 4,9 ; UE 6,1 → 6,0 → 6,0 — [Eurostat une_rt_a](https://ec.europa.eu/eurostat/databrowser/view/une_rt_a/default/table?lang=en).
- L'OCDE (Perspectives de l'emploi 2026) : taux de chômage OCDE 4,9 % en mai 2026 ; médiane OCDE passée de 5,4 % (mai 2025) à 5,7 % (mai 2026) ; France 8,2 % en mai 2026 avec une hausse annuelle de 0,6 point « parmi les plus fortes de l'OCDE » ; Canada 6,6 % en mai 2026 contre 5,2 % en mai 2023 — [OCDE EO 2026, note France](https://www.oecd.org/en/publications/oecd-employment-outlook-2026_9c4f5c3e-en/france_cec18f90-en.html) ; [OCDE EO 2026, note Canada](https://www.oecd.org/en/publications/oecd-employment-outlook-2026_9c4f5c3e-en/canada_63e26c6c-en.html).

**Tableau 1.2 — Chômage des jeunes (15–24 ans), % (publié)**

| Pays | 2023 (annuel) | 2025 (annuel) | Dernier point CVS | Source |
|---|---|---|---|---|
| France | 17,3 | 19,8 | **21,9 (sept. 2026)** | Eurostat une_rt_a / une_rt_m |
| Belgique | 16,1 | 17,4 | **18,0 (sept. 2026)** | idem |
| Luxembourg | 18,8 | 19,4 | **22,0 (sept. 2026)** (série très volatile) | idem |
| Suisse | 7,9 | 8,8 | **9,2 (T2 2026)** | Eurostat une_rt_q |
| UE-27 | 14,6 | 15,2 | 15,5 (sept. 2026) | idem |
| Canada | 10,1 (janv. 2023) ; 11,4 (oct. 2023) | 13,9 (moyenne 2025, calcul) | **13,7 (oct. 2026)** | StatCan 14-10-0287 |

- Sources : [Eurostat une_rt_a](https://ec.europa.eu/eurostat/databrowser/view/une_rt_a/default/table?lang=en), [une_rt_m](https://ec.europa.eu/eurostat/databrowser/view/une_rt_m/default/table?lang=en), [une_rt_q](https://ec.europa.eu/eurostat/databrowser/view/une_rt_q/default/table?lang=en), [StatCan 14-10-0287-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410028701).

**Tableau 1.3 — Taux d'emploi 15–64 ans, % (publié)**

| Pays | 2023 | 2024 | 2025 | T2 2026 (CVS) | Source |
|---|---|---|---|---|---|
| France | 68,4 | 68,8 | 69,3 | 69,1 | Eurostat lfsi_emp_a / lfsi_emp_q |
| Belgique | 66,6 | 66,7 | 67,4 | 67,3 | idem |
| Luxembourg | 70,3 | 69,7 | 69,2 | 68,5 | idem |
| Suisse | 80,7 | 80,4 | 79,9 | 79,6 | idem |
| UE-27 | 70,4 | 70,7 | 71,0 | 71,2 | idem |
| Canada | 76,2 (janv. 2023) ; 75,6 (oct. 2023) | 74,2 (oct. 2024) | 74,2 (moyenne 2025, calcul) | **74,4 (oct. 2026)** | StatCan 14-10-0287 |

- Sources : [Eurostat lfsi_emp_a](https://ec.europa.eu/eurostat/databrowser/view/lfsi_emp_a/default/table?lang=en), [lfsi_emp_q](https://ec.europa.eu/eurostat/databrowser/view/lfsi_emp_q/default/table?lang=en), [StatCan 14-10-0287-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410028701).
- OCDE EO 2026 : taux d'emploi moyen OCDE 72,1 % et taux d'activité 76,7 % au T1 2026 (records) ; France : taux d'emploi passé de 68,7 % (T1 2024) à 69,4 % (T1 2026), « principalement dû aux travailleurs âgés » ; Canada : 74,3 % au T1 2026 — [note France](https://www.oecd.org/en/publications/oecd-employment-outlook-2026_9c4f5c3e-en/france_cec18f90-en.html), [note Canada](https://www.oecd.org/en/publications/oecd-employment-outlook-2026_9c4f5c3e-en/canada_63e26c6c-en.html).

**Comparabilité du taux de chômage (points documentés)**
- Statistique Canada publie un taux « R3 – comparable au taux des États-Unis » inférieur d'environ 1 point au taux officiel R4 : moyenne 2025 R3 = 5,8 % contre R4 = 6,8 % ; octobre 2026 (non désaisonnalisé) R3 = 5,2 % contre R4 = 6,2 % — [StatCan tableau 14-10-0077-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410007701).
- Les séries canadiennes mensuelles par province ne couvrent que les 10 provinces (les territoires ne figurent pas dans le tableau 14-10-0287) — [StatCan 14-10-0287-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410028701).

### Inferences
- Dégradation 2023 → fin 2026 (points de taux de chômage, calcul sur le tableau 1.1, janv. 2023 → dernier point) : Luxembourg +2,4 ; Canada +1,6 ; France +1,4 ; Suisse ≈ +1,2 ; Belgique +0,4. Le « refroidissement » est donc général ; il est le plus marqué au Luxembourg et au Canada, et il se poursuit en France et au Luxembourg en 2026 alors que le Canada (pic 6,9 % en 2025) et la Belgique (pic 6,4 % fin 2025) se stabilisent.
- Le taux d'emploi recule en Suisse (−1,1 pt 2023 → T2 2026), au Luxembourg (−1,8 pt) et au Canada (≈ −1,8 pt entre janv. 2023 et oct. 2026), alors qu'il progresse encore en France (+0,7 pt) et en Belgique (+0,7 pt) : en France la hausse du chômage coexiste avec une hausse de l'activité (seniors), ce qui nuance la lecture « plus difficile de trouver un emploi ».
- Tranche d'âge : Eurostat = 15–74 ans, Canada/OCDE = 15 ans et plus. L'écart est de l'ordre de 0,1 point (l'OCDE régionale donne pour le Canada 7,0 % en 15–64 ans en 2025 contre 6,9 % en 15+), donc négligeable pour un classement.
- Le concept canadien officiel (R4) compte comme recherche d'emploi des démarches « passives » exclues du concept américain (d'où R3). Mon appréciation — à confirmer — est que R4 est le concept le plus proche de l'EFT européenne (qui admet la consultation d'offres parmi les méthodes de recherche) ; **je recommande d'utiliser R4 = taux officiel dans le tableau comparatif et de citer R3 comme borne basse**.
- Luxembourg : échantillon EFT très petit → séries jeunes et trimestrielles très bruitées (p. ex. chômage des jeunes 16,4 % → 26,4 % d'un trimestre à l'autre en 2024) ; n'utiliser que des moyennes annuelles.

### Gaps
- Octobre 2026 n'était pas encore diffusé par Eurostat pour FR/BE/LU au 22/11/2026 ; la Suisse n'a pas de vrai mensuel harmonisé (le taux SECO mensuel est un taux de chômeurs inscrits, non comparable — voir notes nationales).
- Moyennes annuelles canadiennes officielles 2023 et 2024 non extraites (seuls des points mensuels et la moyenne 2025 calculée figurent ici).
- Je n'ai pas pu vérifier en ligne le détail des méthodes de recherche « actives » retenues par le règlement EFT actuel par rapport au concept canadien (quota de recherche épuisé).

---

## 2. Chômage de longue durée, chômage par tranche de durée, et taux mensuels de sortie du chômage (méthode Shimer 2012 / Elsby–Hobijn–Şahin 2013)

### Takeaway
En 2025, la part des chômeurs depuis 12 mois ou plus est de 13,5 % au Canada contre 22,8 % en France, 30,9 % au Luxembourg, 31,9 % en Belgique et 33,4 % en Suisse (OCDE), et la part depuis 6 mois ou plus va de 24,8 % (Canada) à 52,0 % (Suisse). Le taux mensuel de sortie du chômage calculé par la méthode EHS en régime permanent est de l'ordre de 0,23–0,38 au Canada contre 0,11–0,22 dans les quatre pays européens ; l'ordre Canada > France > (Belgique ≈ Luxembourg ≈ Suisse) est robuste, mais le classement entre les trois derniers ne l'est pas, et la Suisse ressort comme le pays européen où l'on retrouve le plus vite un emploi dès qu'on utilise les transitions longitudinales Eurostat (≈31 % par trimestre contre 26 % en France et 24 % en Belgique).

### Cited Findings

**Tableau 2.1 — Répartition des chômeurs par durée, 2025, % du chômage total (publié, OCDE « Incidence of unemployment by duration », tous âges, deux sexes)**

| Durée | France | Belgique | Luxembourg | Suisse | Canada |
|---|---|---|---|---|---|
| < 1 mois | 19,7 | 11,3 | 15,5 | 12,4 | 31,5 |
| 1 à < 3 mois | 23,3 | 23,4 | 17,3 | 17,9 | 26,7 |
| 3 à < 6 mois | 17,0 | 16,9 | 17,2 | 17,7 | 16,9 |
| 6 à < 12 mois | 17,2 | 16,5 | 19,2 | 18,6 | 11,4 |
| 12 mois et plus | **22,8** | **31,9** | **30,9** | **33,4** | **13,5** |
| *6 mois et plus (calcul : somme des deux dernières lignes)* | 40,0 | 48,4 | 50,0 | 52,0 | 24,8 |
| Rappel 12 mois et plus en 2023 | 24,5 | 40,0 | 33,0 | 35,8 | 8,3 |
| Rappel 12 mois et plus en 2024 | 23,1 | 36,4 | 25,8 | 34,6 | 10,2 |

- Source : [OCDE, DSD_DUR@DF_DUR_I](https://sdmx.oecd.org/public/rest/data/OECD.ELS.SAE,DSD_DUR@DF_DUR_I,1.0/all?startPeriod=2023&dimensionAtObservation=AllDimensions&format=csvfilewithlabels) (valeurs exactes 2025 : FRA 19,709 / 23,257 / 17,027 / 17,19 / 22,818 ; BEL 11,311 / 23,394 / 16,892 / 16,499 / 31,904 ; LUX 15,477 / 17,261 / 17,217 / 19,179 / 30,865 ; CHE 12,383 / 17,895 / 17,692 / 18,589 / 33,441 ; CAN 31,517 / 26,744 / 16,93 / 11,355 / 13,454).
- Effectifs Eurostat 2025 (milliers, 15–74 ans) — France : total 2 451,2 ; < 1 mois 479,0 ; 1–2 mois 566,1 ; 3–5 mois 415,4 ; 6–11 mois 419,6 ; 12–17 mois 221,9 ; 18–23 mois 110,5 ; 24–47 mois 141,1 ; 48 mois+ 91,0. Belgique : 339,3 ; 38,1 ; 78,7 ; 56,8 ; 55,5 ; 37,1 ; 12,6 ; 31,9 ; 25,8. Suisse : 248,5 ; 32,1 ; 48,2 ; 44,7 ; 45,9 ; 23,0 ; 14,9 ; 17,8 ; 18,3. Luxembourg : total 22,8 ; < 1 mois 3,5 (u) ; 1–2 mois 3,9 (u) ; 3–5 mois 4,0 ; 6–11 mois 4,3 ; 12–17 mois 2,6 (u) ; au-delà non publiable — [Eurostat lfsa_ugad](https://ec.europa.eu/eurostat/databrowser/view/lfsa_ugad/default/table?lang=en).
- Part du chômage de longue durée Eurostat (12 mois+, % des chômeurs, 15–74) : 2025 : France 23,0 ; Belgique 31,6 ; Luxembourg 30,6 ; Suisse 29,7 ; UE 31,5. T2 2026 (CVS) : France 24,6 ; Belgique 29,7 ; Luxembourg 29,2 ; Suisse 32,3 ; UE 30,8 — [Eurostat une_ltu_a](https://ec.europa.eu/eurostat/databrowser/view/une_ltu_a/default/table?lang=en), [une_ltu_q](https://ec.europa.eu/eurostat/databrowser/view/une_ltu_q/default/table?lang=en).
- Taux de chômage de longue durée (% de la population active) : 2025 : France 1,8 ; Belgique 2,0 ; Luxembourg 2,0 ; Suisse 1,5 ; UE 1,9. T2 2026 : France 2,1 ; Belgique 1,8 ; Luxembourg 2,1 ; Suisse 1,7. Nombre de chômeurs de longue durée en France : 528 000 (T1 2025) → 657 000 (T2 2026) — [Eurostat une_ltu_q](https://ec.europa.eu/eurostat/databrowser/view/une_ltu_q/default/table?lang=en).
- Canada, équivalent national : taux R1 (chômeurs depuis 1 an ou plus, % de la population active) = 0,9 % en moyenne 2025 ; R2 (3 mois ou plus) = 2,7 % — [StatCan 14-10-0077-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410007701).
- Canada, octobre 2026 (CVS) : 1 507,7 milliers de chômeurs, dont 483,3 depuis 1–4 semaines, 371,5 depuis 5–13 semaines, 226,9 depuis 14–26 semaines, 357,7 depuis 27 semaines ou plus (23,7 % ; 14,4 % en octobre 2019, 16,3 % en octobre 2023, 21,6 % en octobre 2024), 189,6 depuis 52 semaines ou plus (88,8 en octobre 2019 ; 103,6 en octobre 2023) — [StatCan tableau 14-10-0342-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410034201).

**Estimations publiées des taux de sortie/retour à l'emploi (littérature, vérifiées dans les PDF)**
- Elsby, Hobijn et Şahin, « Unemployment Dynamics in the OECD », *Review of Economics and Statistics* 95(2), 2013, p. 530-548 (référence confirmée) — [EconPapers](https://econpapers.repec.org/RePEc:tpr:restat:v:95:y:2013:i:2:p:530-548). Version document de travail NBER n° 14617 (déc. 2008), tableau 2, moyennes d'échantillon (taux de chômage u, taux mensuel de sortie f, taux mensuel d'entrée s) : **Canada (depuis 1976) u 8,6 %, f 25,8 %, s 2,3 % ; France (depuis 1975) u 9,1 %, f 7,8 %, s 0,8 %** ; Australie 22,3 % ; Allemagne 6,0 % ; Irlande 5,8 % ; Italie 4,1 % ; Japon 19,3 % ; Nouvelle-Zélande 27,9 % ; Norvège 38,3 % ; Portugal 6,5 % ; Espagne 6,2 % ; Suède 28,9 % ; Royaume-Uni 13,3 % ; États-Unis 57,5 % — [NBER WP 14617](https://www.nber.org/papers/w14617.pdf). **La Belgique, le Luxembourg et la Suisse ne font pas partie des 14 pays de cet article.**
- Formules de l'article (éq. 6 à 9) : probabilité mensuelle de sortie F_t = 1 − (u_{t+1} − u^{<1}_{t+1}) / u_t ; taux de sortie f^{<1}_t = −ln(1 − F_t) ; généralisation F^{<d}_t = 1 − (u_{t+d} − u^{<d}_{t+d}) / u_t et f^{<d}_t = −ln(1 − F^{<d}_t)/d pour d = 1, 3, 6, 12 mois, les f^{<d} étant ensuite combinés (et l'égalité f^{<1} = f^{<3} = f^{<6} = f^{<12} testée : absence de dépendance à la durée) — [NBER WP 14617](https://www.nber.org/papers/w14617.pdf).
- Hobijn et Şahin, « Job-Finding and Separation Rates in the OECD », Federal Reserve Bank of New York Staff Report n° 298 (2007), tableau 1, taux mensuel moyen de retour à l'emploi estimé (écart-type) sur 27 pays : **Belgique 3,45 % (0,71), 1983–2004 ; Canada 28,90 % (1,86), 1976–2004 ; France 6,69 % (0,97), 1975–2004 ; Luxembourg 8,51 % (1,37), 1983–2004 ; Suisse 13,35 % (0,93), 1991–2004** ; États-Unis 56,30 % ; Allemagne 6,98 % ; taux mensuels de séparation (tableau 2) : Belgique 0,92 %, Canada 1,78 %, France 1,14 %, Luxembourg 0,82 %, Suisse 1,19 % — [FRBNY Staff Report 298](https://www.newyorkfed.org/medialibrary/media/research/staff_reports/sr298.pdf).
- Transitions longitudinales Eurostat (EFT, probabilités trimestrielles chômage → emploi, moyenne annuelle, « statistiques en développement »), 15–74 ans : **2025 : Suisse 31 %, France 26 %, Belgique 24 %, UE-27 23 %** (2023 : 35 / 26 / 22 / 23). Selon la durée du chômage, 2025 : chômeurs de moins d'un an : Suisse 36 %, France 32 %, Belgique 32 %, UE 30 % ; chômeurs d'un an ou plus : Suisse 20 %, France 11 %, Belgique 11 %, UE 9 %. Jeunes 15–24 ans : Suisse 40 %, Belgique 31 %, France 29 %, UE 29 % ; 55–74 ans : Suisse 25 %, Belgique 21 %, France 18 %, UE 15 % — [Eurostat lfsi_long_e01](https://ec.europa.eu/eurostat/databrowser/view/lfsi_long_e01/default/table?lang=en).
- Transitions trimestrielles CVS, T2 2026 (% des chômeurs du trimestre précédent) — vers l'emploi : Suisse 30,2 ; Belgique 28,2 ; France 25,5 ; UE 23,2 ; Luxembourg 20,3 (très bruité : 17,9 à 32,7 sur 2025) ; restés au chômage : France 54,2 ; Suisse 56,0 ; Belgique 52,2 ; Luxembourg 58,5 ; vers l'inactivité : France 20,4 ; Belgique 19,6 ; Suisse 13,7 ; Luxembourg 21,2. Risque trimestriel emploi → chômage (% des personnes en emploi) : France 1,9 ; Belgique 1,3 ; Suisse 1,2 ; UE 1,2 — [Eurostat lfsi_long_q](https://ec.europa.eu/eurostat/databrowser/view/lfsi_long_q/default/table?lang=en).

**Tableau 2.2 — Taux mensuels de sortie du chômage : MES CALCULS (méthode EHS en régime permanent), intrants = tableau 2.1 (OCDE 2025)**

Formule appliquée : en régime permanent (u_{t+d} = u_t), F^{<d} = part des chômeurs de durée < d mois = s^{<d} ; donc f^{<d} = −ln(1 − s^{<d}) / d.

| | s<1 = F<1 (%) | f<1 | f<3 | f<6 | f<12 | Durée attendue 1/f<1 (mois) | Rappel 2023 : f<1 / f<12 |
|---|---|---|---|---|---|---|---|
| Canada | 31,5 | **0,379** | 0,291 | 0,232 | 0,167 | 2,6 | 0,476 / 0,207 |
| France | 19,7 | **0,220** | 0,187 | 0,153 | 0,123 | 4,6 | 0,225 / 0,117 |
| Luxembourg | 15,5 | 0,168 | 0,132 | 0,115 | 0,098 | 5,9 | 0,195 / 0,092 |
| Suisse | 12,4 | 0,132 | 0,120 | 0,109 | 0,091 | 7,6 | 0,160 / 0,086 |
| Belgique | 11,3 | 0,120 | 0,142 | 0,121 | 0,095 | 8,3 | 0,145 / 0,076 |

- Exemple de calcul (France 2025) : s<1 = 0,19709 → f<1 = −ln(0,80291) = 0,220 ; s<3 = 0,19709 + 0,23257 = 0,42966 → f<3 = −ln(0,57034)/3 = 0,187 ; s<6 = 0,59993 → f<6 = −ln(0,40007)/6 = 0,153 ; s<12 = 0,77183 → f<12 = −ln(0,22817)/12 = 0,123. Intrants : [OCDE DF_DUR_I](https://sdmx.oecd.org/public/rest/data/OECD.ELS.SAE,DSD_DUR@DF_DUR_I,1.0/all?startPeriod=2023&dimensionAtObservation=AllDimensions&format=csvfilewithlabels).
- **Calcul complémentaire** — conversion des probabilités trimestrielles Eurostat chômage → emploi en taux mensuel de retour à l'emploi, p_m = 1 − (1 − p_q)^{1/3} : 2025 : Suisse 11,6 % ; France 9,5 % ; Belgique 8,7 % ; UE 8,3 % ; Luxembourg ≈ 8,9 % (moyenne de 4 trimestres bruités, 24,5 %). T2 2026 : Suisse 11,3 % ; Belgique 10,5 % ; France 9,3 % ; UE 8,4 % ; Luxembourg 7,3 %. Intrants : [Eurostat lfsi_long_e01](https://ec.europa.eu/eurostat/databrowser/view/lfsi_long_e01/default/table?lang=en), [lfsi_long_q](https://ec.europa.eu/eurostat/databrowser/view/lfsi_long_q/default/table?lang=en).
- **Calcul de cohérence** — taux mensuel de sortie *toutes destinations* déduit de la part « restés au chômage » d'un trimestre à l'autre (moyenne des 4 trimestres 2025), f = −ln(UU)/3 : France UU 51,5 % → 0,221 ; Belgique 52,3 % → 0,216 ; Suisse 53,8 % → 0,207 ; UE 52,1 % → 0,217. Intrants : [Eurostat lfsi_long_q](https://ec.europa.eu/eurostat/databrowser/view/lfsi_long_q/default/table?lang=en).

**Tableau 2.3 — Taux de sortie SANS hypothèse de régime permanent : MES CALCULS avec la formule exacte d'Elsby-Hobijn-Şahin (éq. 6 et 8)**

Formules : Canada (données mensuelles) F_t = 1 − (u_{t+1} − u^{<1}_{t+1}) / u_t, puis f = −ln(1 − F). Europe (données trimestrielles, pas de mensuel) : F^{<3}_t = 1 − (u_{t+1} − u^{<3}_{t+1}) / u_t où t est un trimestre et u^{<3} = chômeurs de moins de 3 mois (« moins d'un mois » + « 1–2 mois »), puis taux mensuel f = −ln(1 − F^{<3}) / 3.

| Territoire | Période | F moyen | Taux mensuel f (calcul) | Rappel : valeur en régime permanent (tableau 2.2) |
|---|---|---|---|---|
| Canada | 12 transitions mensuelles nov. 2025 → oct. 2026 (CVS) | 0,303 par mois | **0,361** | f<1 = 0,379 |
| Québec | idem | 0,353 par mois | **0,435** | 0,474 (section 5) |
| Ontario | idem | 0,274 par mois | **0,320** | 0,331 |
| Nouveau-Brunswick | idem | 0,292 par mois | **0,345** | 0,383 |
| France | 4 transitions trimestrielles T2 2025 → T2 2026 (brut) | 0,403 par trimestre | **0,172** | f<3 = 0,187 |
| Belgique | idem | 0,328 par trimestre | **0,133** | f<3 = 0,142 |
| Suisse | idem | 0,296 par trimestre | **0,117** | f<3 = 0,120 |
| Luxembourg | 4 dernières transitions disponibles (T1 2025 → T1 2026 ; T2 2026 non publiable) | 0,291 par trimestre | 0,115 (très fragile) | f<3 = 0,132 |
| UE-27 | T2 2025 → T2 2026 | 0,334 par trimestre | 0,135 | — |

- Exemple Canada, octobre 2026 : u(sept.) = 1 474,9 ; u(oct.) = 1 507,7 ; chômeurs depuis 1–4 semaines en octobre = 483,3 → F = 1 − (1 507,7 − 483,3)/1 474,9 = 0,305 ; f = −ln(0,695) = 0,364. Valeurs mensuelles de F sur la période : entre 0,268 (déc. 2025) et 0,340 (janv. 2026). Intrants : [StatCan 14-10-0342-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410034201) (milliers, désaisonnalisé, 15 ans et plus).
- Exemple France, T1 → T2 2026 : u(T1) = 2 639,5 ; u(T2) = 2 569,7 ; u^{<3}(T2) = 413,3 + 543,5 = 956,8 → F^{<3} = 1 − (2 569,7 − 956,8)/2 639,5 = 0,389 ; f = −ln(0,611)/3 = 0,164. Série de F^{<3} : 0,411 (T2 2025) ; 0,423 ; 0,432 ; 0,370 ; 0,389 (T2 2026). Belgique : 0,379 ; 0,344 ; 0,324 ; 0,321 ; 0,324. Suisse : 0,296 ; 0,286 ; 0,335 ; 0,274 ; 0,290. Intrants : [Eurostat lfsq_ugad](https://ec.europa.eu/eurostat/databrowser/view/lfsq_ugad/default/table?lang=en) (milliers, non désaisonnalisé, 15–74 ans).
- Réserves propres à ce calcul : (a) la tranche canadienne « 1 à 4 semaines » approxime « moins d'un mois » alors que les semaines de référence de l'enquête sont espacées de 4 ou 5 semaines ; (b) les données européennes ne sont pas désaisonnalisées (d'où la moyenne sur quatre trimestres consécutifs) et la mesure trimestrielle manque les épisodes commencés et terminés dans le trimestre, ce qui **sous-estime** f par rapport à une mesure mensuelle — la comparaison Canada (mensuel) / Europe (trimestriel) surestime donc l'écart ; pour comparer à fréquence égale, utiliser f<3 du tableau 2.2 pour les cinq pays (Canada 0,291 ; France 0,187 ; Belgique 0,142 ; Luxembourg 0,132 ; Suisse 0,120).

### Inferences
- La correction de régime permanent change peu les résultats (écart de 5 à 10 % : France 0,172 contre 0,187 ; Canada 0,361 contre 0,379), et toujours dans le sens attendu quand le chômage augmente ; le classement est inchangé.
- **Ce qui est robuste** : (i) le Canada a un taux de sortie du chômage environ deux fois plus élevé que les pays européens du panel, aujourd'hui comme dans les estimations historiques (25,8–28,9 % par mois contre 6,7–7,8 % en France) ; (ii) ce taux canadien s'est nettement dégradé : f<1 calculé passe de 0,476 (2023) à 0,379 (2025) et la part du chômage de 12 mois+ de 8,3 % à 13,5 %, la part de 27 semaines+ de 14,4 % (oct. 2019) à 23,7 % (oct. 2026) ; (iii) la France a aujourd'hui un taux de sortie nettement supérieur aux estimations historiques (0,12–0,22 contre 0,07–0,08), ce qui reflète un chômage plus « tournant » (contrats courts) plutôt qu'un accès plus rapide à l'emploi stable.
- **Ce qui n'est pas robuste** : le classement Belgique / Luxembourg / Suisse et le niveau relatif de la Suisse. La méthode par stocks de durée classe la Suisse parmi les plus lents (f ≈ 0,09–0,13) alors que les transitions longitudinales la classent première en Europe (31 % par trimestre). Les deux mesures ne mesurent pas la même chose : (a) la durée déclarée dans l'EFT est une durée de recherche (minimum de la durée de recherche et du temps écoulé depuis le dernier emploi) qui ne se « remet pas à zéro » lors d'un passage par l'inactivité, alors que les flux enregistrent tout changement de statut ; (b) les sorties incluent l'inactivité (20 % par trimestre en France et en Belgique, 14–15 % en Suisse) ; (c) le calcul en régime permanent est biaisé quand le chômage monte (cas de 2024–2026 : les entrées récentes sont surreprésentées, ce qui surestime f). Le calcul de cohérence (≈ 0,21–0,22 par mois pour FR, BE, CH) montre que les flux de sortie bruts sont très proches entre ces trois pays : la différence porte sur la *destination* (emploi : Suisse > France > Belgique) et sur l'existence d'un noyau de longue durée.
- Pour un tableau comparatif défendable, je recommande de présenter côte à côte : (1) la part de chômage ≥ 12 mois (publiée, harmonisée, 5 pays) ; (2) la probabilité trimestrielle chômage → emploi Eurostat (publiée, 4 pays européens) ; (3) f<1 et f<12 calculés (5 pays) comme fourchette, en précisant que f<1 est un taux de sortie toutes destinations et non un taux de retour à l'emploi.
- Les tests d'EHS rejettent l'absence de dépendance à la durée dans la plupart des pays européens ; l'écart entre f<1 et f<12 dans le tableau 2.2 (rapport ≈ 1,8 en France, 2,3 au Canada, 1,3 en Belgique) en est l'expression : la chance de sortie décroît avec l'ancienneté au chômage partout, et la « difficulté » moyenne masque une forte hétérogénéité.

### Gaps
- Pas d'équivalent canadien publié et extrait ici des transitions chômage → emploi (flux bruts de l'Enquête sur la population active) : non récupéré (quota de recherche épuisé) ; le Canada n'entre donc dans la comparaison que par la méthode des stocks de durée.
- Je n'ai pas trouvé de mise à jour récente publiée des estimations EHS pour ces cinq pays (chapitres des Perspectives de l'emploi de l'OCDE, BCE, Banque de France, Banque du Canada) ; recherche interrompue par le quota.
- Les valeurs EHS citées proviennent de la version NBER 2008 ; les valeurs du tableau de la version publiée en 2013 peuvent différer légèrement (échantillon prolongé) — non vérifié. La référence de publication de Hobijn-Şahin en revue (*Economics Letters*, 2009) n'a pas été revérifiée en ligne ; seule la version Staff Report est citée.
- Luxembourg : effectifs par tranche de durée marqués (u) ; toute valeur luxembourgeoise de ce chapitre est fragile.

---

## 3. Durée moyenne / médiane du chômage

### Takeaway
L'OCDE ne publie une durée moyenne du chômage que pour deux des cinq pays : Canada 4,5 mois et Suisse 16,0 mois en 2025 ; il n'existe pas de série harmonisée de durée moyenne ou médiane pour la France, la Belgique et le Luxembourg, pour lesquels il faut passer par la distribution par tranches.

### Cited Findings
- Durée moyenne du chômage (mois), OCDE « Average duration of unemployment », tous âges : **Canada 3,86 (2022) ; 3,52 (2023) ; 4,03 (2024) ; 4,52 (2025)** ; **Suisse 18,39 (2022) ; 18,14 (2023) ; 17,22 (2024) ; 16,0 (2025)**. Canada par âge en 2025 : 15–24 ans 3,48 ; 25–54 ans 4,85 ; 55 ans et plus 5,23. Aucune valeur pour la France, la Belgique ou le Luxembourg dans ce jeu de données — [OCDE DSD_DUR@DF_AVD_DUR](https://sdmx.oecd.org/public/rest/data/OECD.ELS.SAE,DSD_DUR@DF_AVD_DUR,1.0/all?startPeriod=2022&dimensionAtObservation=AllDimensions&format=csvfilewithlabels).
- Canada, source nationale : durée moyenne du chômage (sans plafonnement) 22,8 semaines en octobre 2026 (CVS) contre 16,6 en octobre 2019, 19,2 en octobre 2023, 22,1 en octobre 2024 ; moyenne des 12 mois nov. 2025–oct. 2026 (non désaisonnalisée, calcul) : 22,6 semaines pour le Canada, 17,4 pour le Québec, 25,5 pour l'Ontario, 20,1 pour le Nouveau-Brunswick — [StatCan 14-10-0342-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410034201).

### Inferences
- Durée attendue implicite en régime permanent (calcul, 1/f<1 du tableau 2.2) : Canada 2,6 mois ; France 4,6 ; Luxembourg 5,9 ; Suisse 7,6 ; Belgique 8,3. Cette « durée attendue d'un épisode entrant » est par construction bien plus courte que la durée moyenne des épisodes en cours (biais de longueur) : pour la Suisse 7,6 mois contre 16,0 mois publiés ; pour le Canada 2,6 contre 4,5. Ne jamais mélanger les deux notions dans un même tableau.
- La durée moyenne suisse (16 mois) et la part de longue durée suisse (33 %) contrastent avec son faible taux de chômage : en Suisse, on entre rarement au chômage BIT, mais le stock comprend un noyau durable.

### Gaps
- Aucune durée médiane harmonisée trouvée pour les cinq pays. Pour FR/BE/LU, seule une médiane approchée par interpolation dans les tranches de durée serait possible (non calculée ici car trop dépendante de l'hypothèse de répartition intra-tranche).

---

## 4. Taux d'emplois vacants et tension (emplois vacants par chômeur, v/u)

### Takeaway
Les taux d'emplois vacants les plus récents sont : Belgique 3,3 % (T2 2026), Canada 2,8 % (août 2026), France 2,4–2,5 % (T2–T3 2026), Suisse 1,6 % (T4 2025), Luxembourg 1,3 % (T2 2026), tous en net repli depuis 2022. Le ratio v/u que je calcule va de ≈0,19 en France à ≈0,40 en Belgique (Canada ≈0,35, Suisse ≈0,34, Luxembourg ≈0,28), mais il n'est pas comparable en niveau : la France exclut l'emploi public, le Luxembourg utilise une source administrative (offres déclarées à l'ADEM) rapportée à des chômeurs résidents alors que ≈43–44 % de l'emploi intérieur est occupé par des non-résidents.

### Cited Findings

**Tableau 4.1 — Taux d'emplois vacants (publié), ensemble de l'économie hors agriculture (NACE Rév. 2.1 B à T pour Eurostat), toutes tailles**

| Pays | 2022 | 2023 | 2024 | 2025 | T1 2026 | T2 2026 | T3 2026 | Source |
|---|---|---|---|---|---|---|---|---|
| Belgique | 4,8 | 4,6 | 4,3 | 3,8 | 3,4 | **3,3** | n.d. | Eurostat jvs_a_r21 / jvs_q_r21 (CVS) |
| France (d) | 3,3 | 3,1 | 2,6 | 2,4 | 2,3 | 2,4 | **2,5 (p)** | idem |
| France, établissements de 10 salariés ou plus | 2,5 | 2,3 | 2,0 | 1,8 | 1,8 | 1,7 | 1,7 (p) | idem |
| Luxembourg | 2,5 | 1,9 | 1,4 | 1,3 | 1,3 | **1,3** | n.d. | idem |
| Suisse | 2,3 | 2,1 | 1,8 | 1,6 | n.d. | n.d. | n.d. (dernier : **1,6 au T4 2025**) | idem |
| UE-27 | 3,0 | 2,8 | 2,4 | 2,1 | 2,0 | 2,0 | 1,9 | idem |
| Canada | 5,4 (moyenne 2022, calcul) | — | — | 2,8 (moyenne 2025, calcul) | — | 2,8 (moyenne avr.–juin, calcul) | **2,8 (août 2026)** | StatCan 14-10-0432 (CVS) |

- Sources : [Eurostat jvs_a_r21](https://ec.europa.eu/eurostat/databrowser/view/jvs_a_r21/default/table?lang=en) ; [Eurostat jvs_q_r21](https://ec.europa.eu/eurostat/databrowser/view/jvs_q_r21/default/table?lang=en) (mise à jour 19/11/2026 ; l'ancienne table [jvs_q_nace2](https://ec.europa.eu/eurostat/databrowser/view/jvs_q_nace2/default/table?lang=en) s'arrête au T4 2025) ; [StatCan tableau 14-10-0432-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410043201).
- Nombres d'emplois vacants (non désaisonnalisés, B–T, toutes tailles) : T2 2026 : France 490 695 ; Belgique 133 881 ; Luxembourg 6 900. T4 2025 : Suisse 86 034 (93 551 au T1 2025). T3 2026 : France 449 213 (p). Postes occupés T2 2026 : France 19 520 521 ; Belgique 3 978 339 ; Luxembourg 498 653 ; Suisse (T4 2025) 5 544 106 — [Eurostat jvs_q_r21](https://ec.europa.eu/eurostat/databrowser/view/jvs_q_r21/default/table?lang=en).
- Canada : 507 220 postes vacants en août 2026 (CVS), 17 589 650 salariés, taux 2,8 % ; moyenne 2022 : 938 280 ; 2023 : 736 610 ; 2024 : 570 815 ; 2025 : 500 115 (moyennes calculées sur 12 mois). Québec : 119 425 postes vacants, taux 3,0 % en août 2026 (moyenne 2022 : 233 205, taux 5,8 % ; moyenne 2025 : 114 703, taux 2,9 %). Ontario 2,5 % ; Nouveau-Brunswick 2,5 % ; Colombie-Britannique 3,1 % ; Alberta 3,1 % en août 2026 — [StatCan 14-10-0432-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410043201) ; série non désaisonnalisée : [StatCan 14-10-0371-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410037101).

**Couverture et sources (métadonnées nationales Eurostat, vérifiées)**
- **France** : enquêtes ACEMO (Dares). Champ : sections B à N et P à S ; « la section O (administration publique) n'est pas couverte » ; dans les sections P et Q, seules les activités concurrentielles sont couvertes (pas les emplois publics). Taille : unités de 10 salariés ou plus de 2003T2 à 2011T1, **unités de 1 salarié ou plus depuis 2011T2** (les moins de 10 salariés proviennent de l'enquête annuelle ACEMO-TPE). La restriction historique « 10 salariés et plus » n'est donc plus vraie pour le total, mais la série « 10+ » reste publiée séparément — [Eurostat, métadonnées JVS France](https://ec.europa.eu/eurostat/cache/metadata/EN/jvs_esqrs_fr.htm).
- **Luxembourg** : statistique « entièrement compilée à partir de registres administratifs » : offres d'emploi déclarées à l'ADEM pour les postes vacants, IGSS (sécurité sociale) pour les postes occupés ; NACE A à S ; entreprises d'au moins une personne employée — [Eurostat, métadonnées JVS Luxembourg](https://ec.europa.eu/eurostat/cache/metadata/EN/jvs_esqrs_lu.htm).
- **Suisse** : enquête trimestrielle auprès des entreprises (statistique de l'emploi), échantillon 18 000 entreprises / 66 000 établissements, sections B à S, toutes tailles ; la Suisse est bien présente dans la base Eurostat JVS (dernier point T4 2025) — [Eurostat, métadonnées JVS Suisse](https://ec.europa.eu/eurostat/cache/metadata/EN/jvs_esqrs_ch.htm).
- **Belgique** : enquête web trimestrielle de Statbel auprès des entreprises, calée sur les flux Dimona (ONSS) ; toutes les activités NACE sauf agriculture, ménages employeurs et organismes extraterritoriaux ; entreprises de 1 salarié ou plus ; l'enquête couvre les postes vacants « formels et informels (publiés ou non par les offices régionaux de l'emploi) » — [Eurostat, métadonnées JVS Belgique](https://ec.europa.eu/eurostat/cache/metadata/EN/jvs_esqrs_be.htm).
- Définition commune Eurostat d'un emploi vacant : poste rémunéré nouvellement créé, inoccupé ou sur le point de se libérer, pour lequel l'employeur entreprend des démarches actives pour trouver un candidat extérieur à l'entreprise — [Eurostat, métadonnées JVS Belgique](https://ec.europa.eu/eurostat/cache/metadata/EN/jvs_esqrs_be.htm).
- La base infra-annuelle de l'OCDE (« registered unemployment and job vacancies ») ne contient pour ces pays que des séries **administratives** : offres non satisfaites en Suisse (44 199 en sept. 2026 ; 34 535 en moyenne au T4 2025) et au Luxembourg (6 715 en juillet 2026), nouvelles offres en France (229 100 en août 2026, brut) ; aucune série de postes vacants pour la Belgique ni pour le Canada — [OCDE DSD_OLAB@DF_OIALAB_INDIC](https://sdmx.oecd.org/public/rest/data/OECD.SDD.TPS,DSD_OLAB@DF_OIALAB_INDIC,1.1/all?startPeriod=2025-01&dimensionAtObservation=AllDimensions&format=csvfilewithlabels).

**Tableau 4.2 — Tension v/u : MES CALCULS (postes vacants / chômeurs BIT)**

Formule : v/u = nombre de postes vacants (enquête entreprises, toutes tailles) / nombre de chômeurs BIT (EFT). Intrants Eurostat : jvs_q_r21 (postes vacants non désaisonnalisés, B–T) et lfsq_ugad / lfsa_ugad (chômeurs 15–74 ans, non désaisonnalisés) ; Canada : 14-10-0432 (CVS) et 14-10-0287 (CVS).

| Pays | Moyenne 2025 : v (moyenne des 4 trimestres) / u (milliers) = v/u | Dernier trimestre commun : v / u = v/u |
|---|---|---|
| Belgique | 159 863 / 339,3 = **0,47** | T2 2026 : 133 881 / 332,0 = **0,40** |
| Suisse | 90 466 / 248,5 = **0,36** | T4 2025 : 86 034 / 255,9 = **0,34** |
| Canada | 500 115 / 1 542,1 = **0,32** | août 2026 : 507 220 / 1 459,5 = **0,35** |
| Luxembourg | 6 576 / 22,8 = **0,29** (non interprétable, voir ci-dessous) | T2 2026 : 6 900 / 24,7 = **0,28** |
| France | 480 808 / 2 451,2 = **0,20** | T2 2026 : 490 695 / 2 569,7 = **0,19** |
| France, champ 10 salariés et plus | 293 089 / 2 451,2 = 0,12 | — |
| Québec | 114 703 / 276,9 = **0,41** | août 2026 : 119 425 / 272,7 = **0,44** |
| Ontario | 174 881 / 684,8 = 0,26 | — |
| Nouveau-Brunswick | 9 234 / 31,0 = 0,30 | — |

- Intrants : [Eurostat jvs_q_r21](https://ec.europa.eu/eurostat/databrowser/view/jvs_q_r21/default/table?lang=en), [Eurostat lfsq_ugad](https://ec.europa.eu/eurostat/databrowser/view/lfsq_ugad/default/table?lang=en), [Eurostat lfsa_ugad](https://ec.europa.eu/eurostat/databrowser/view/lfsa_ugad/default/table?lang=en), [StatCan 14-10-0432-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410043201), [StatCan 14-10-0287-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410028701).

**Comparaisons publiées de la tension**
- OCDE, Perspectives de l'emploi 2026, chap. 1, graphique 1.5 (27 pays) : la tension (postes vacants par chômeur) était plus élevée au T1 2026 qu'un an plus tôt dans cinq pays seulement (Estonie, Pologne, Portugal, Slovénie, Espagne) ; elle est « proche ou en dessous » de son niveau d'avant-Covid dans la plupart des pays, mais reste supérieure à la majeure partie de la décennie pré-pandémique. Note du graphique : « les définitions des postes vacants ne sont pas pleinement harmonisées entre pays, ce qui limite la comparabilité internationale » ; les statistiques de la Norvège, de la Suisse et du Royaume-Uni ne vont que jusqu'au T4 2025 — [OCDE EO 2026, chapitre 1](https://www.oecd.org/en/publications/oecd-employment-outlook-2026_7e710f54-en/full-report/from-resilience-to-risk-employment-and-wages-under-pressure_b599ad83.html).
- OCDE, note pays Canada : « au T1 2026, le nombre de postes vacants par chômeur s'établissait à 0,3, en dessous de son niveau pré-pandémique de 0,5 au T4 2019 et très en dessous de son pic de 0,9 au T2 2022 » — cohérent avec mon calcul (0,32–0,35) — [OCDE EO 2026, note Canada](https://www.oecd.org/en/publications/oecd-employment-outlook-2026_9c4f5c3e-en/canada_63e26c6c-en.html).
- Indeed Hiring Lab (indice d'offres en ligne, base 100 au 1er février 2020, CVS, total des offres) : **France 90,9 au 13 nov. 2026** (pic 188,3 le 21 mars 2023 ; 130,3 au 1er janv. 2025 ; 103,4 au 1er janv. 2026) ; **Canada 109,2 au 13 nov. 2026** (pic 175,2 le 23 mai 2022 ; 103,7 au 1er janv. 2025 ; 98,2 au 1er juin 2026) — fichiers [FR](https://raw.githubusercontent.com/hiring-lab/job_postings_tracker/master/FR/aggregate_job_postings_FR.csv) et [CA](https://raw.githubusercontent.com/hiring-lab/job_postings_tracker/master/CA/aggregate_job_postings_CA.csv). Pays couverts par le dépôt : AU, CA, DE, ES, FR, GB, IE, IT, NL, US et zone euro (EA) ; **la Belgique, la Suisse et le Luxembourg ne sont pas couverts** (les fichiers BE/CH/LU renvoient une erreur 404) — [dépôt GitHub Indeed Hiring Lab](https://github.com/hiring-lab/job_postings_tracker).

### Inferences
- **Niveau de v/u non comparable entre pays ; seules les évolutions le sont à peu près.** Biais identifiés : (1) France : exclusion de l'administration publique et des emplois publics de l'enseignement et de la santé → numérateur sous-estimé par rapport à BE/LU/CH qui couvrent ces secteurs ; (2) Luxembourg : numérateur administratif (offres déclarées à l'ADEM, sous-déclaration possible) et dénominateur limité aux chômeurs résidents alors que les postes sont pourvus pour moitié environ par des frontaliers → le ratio n'a pas de sens comme mesure de concurrence par poste ; (3) Suisse : même problème de dénominateur à moindre échelle (≈9 % d'emploi net non résident, beaucoup plus à Genève, Bâle, Tessin) ; (4) Canada : enquête mensuelle auprès des employeurs avec sa propre définition et son propre champ.
- En évolution, le message est sans ambiguïté et commun aux cinq pays : division par ≈1,3 à 2 du taux d'emplois vacants entre 2022 et 2025–2026 (Belgique 4,8 → 3,3 ; France 3,3 → 2,4 ; Luxembourg 2,5 → 1,3 ; Suisse 2,3 → 1,6 ; Canada 5,4 → 2,8) et hausse simultanée du chômage : la tension a baissé partout, le plus fortement au Canada (v/u de 0,9 au pic à ≈0,3) et au Luxembourg.
- Le Québec apparaît plus tendu que l'ensemble du Canada (v/u ≈0,41–0,44 contre 0,32–0,35) et que l'Ontario (0,26), à source identique : c'est la comparaison infranationale la plus solide du chapitre, car la source est la même.
- La divergence Indeed France (91, sous le niveau de février 2020) / Canada (109) fin 2026 suggère une demande de travail en ligne plus déprimée en France ; attention, l'indice mesure les offres publiées sur une plateforme dont la part de marché évolue différemment selon les pays.

### Gaps
- Champ exact de l'enquête canadienne sur les postes vacants (secteurs exclus, traitement des administrations publiques) non revérifié en ligne ; à reprendre dans la note nationale Canada.
- Valeurs par pays du graphique 1.5 de l'OCDE EO 2026 pour la France, la Belgique, le Luxembourg et la Suisse non récupérées (données de graphique non présentes dans le texte ; pas de note pays OCDE 2026 pour la Belgique, le Luxembourg et la Suisse). Les définitions nationales retenues par l'OCDE sont renvoyées à la note du graphique 1.7 des Perspectives 2025, non consultée.
- Suisse : postes vacants 2026 absents de la base Eurostat au 22/11/2026 (à prendre dans la statistique de l'emploi de l'OFS, note nationale).
- Aucun taux d'emplois vacants harmonisé au niveau régional pour les cinq pays (voir section 5).

---

## 5. Indicateurs régionaux harmonisés (NUTS 1/2, TL2 OCDE, provinces canadiennes)

### Takeaway
Au niveau régional, quatre indicateurs existent de façon harmonisée pour les quatre pays européens (taux de chômage, part et taux de chômage de longue durée, taux d'emploi, sous-utilisation de la main-d'œuvre) ; pour le Canada, seuls le taux de chômage et le taux d'emploi sont harmonisés par l'OCDE, le reste devant être reconstruit à partir de Statistique Canada. En 2025, l'éventail francophone va du Québec (chômage 5,6 %, 9 % de chômage de longue durée) à Bruxelles (12,6 %, 46 %), avec la Région lémanique (7,8 %, 37 %) et la Wallonie (7,8 %, 37 %) étonnamment proches, et la Bretagne et les Pays de la Loire comme meilleures régions françaises.

### Cited Findings

**Tableau 5.1 — Régions européennes, 2025 (publié, Eurostat ; France = NUTS 1, c'est-à-dire les régions actuelles ; Belgique = NUTS 1 et provinces wallonnes NUTS 2 ; Suisse = Grandes Régions NUTS 2)**

| Territoire | Chômage 15–74 (%) | Chômage 15–24 (%) | Part du chômage ≥ 12 mois (% des chômeurs) | Taux de chômage ≥ 12 mois (% pop. active) | Taux d'emploi 15–64 (%) | Sous-utilisation « slack » (% pop. active élargie) |
|---|---|---|---|---|---|---|
| **France** | 7,7 | 19,8 | 23,0 | 1,8 | 69,3 | 15,0 |
| Île-de-France | 8,8 | 21,2 | 26,7 | 2,4 | 69,8 | 15,3 |
| Centre-Val de Loire | 6,1 | 18,0 | 17,8 | 1,1 | 71,6 | 11,8 |
| Bourgogne-Franche-Comté | 7,5 | 19,3 | 19,0 | 1,4 | 68,4 | 15,1 |
| Normandie | 7,4 | 19,7 | 23,0 | 1,7 | 69,8 | 14,1 |
| Hauts-de-France | 8,5 | 23,2 | 25,6 | 2,2 | 66,9 | 17,1 |
| Grand Est | 6,6 | 17,2 | 25,4 | 1,7 | 69,0 | 13,5 |
| Pays de la Loire | 6,6 | 16,1 | 12,1 | 0,8 | 72,0 | 14,0 |
| Bretagne | 5,6 | 16,4 | 11,8 | 0,7 | 71,4 | 12,0 |
| Nouvelle-Aquitaine | 7,2 | 18,1 | 17,3 | 1,2 | 71,7 | 14,2 |
| Occitanie | 7,6 | 20,4 | 20,6 | 1,6 | 69,0 | 15,1 |
| Auvergne-Rhône-Alpes | 7,0 | 17,3 | 17,1 | 1,2 | 71,9 | 13,4 |
| Provence-Alpes-Côte d'Azur | 7,3 | 22,6 | 23,7 | 1,7 | 68,0 | 14,5 |
| Corse | 7,3 (u) | n.d. | n.d. | n.d. | 63,8 (u) | 12,0 (u) |
| Régions ultrapériphériques (FRY) | 16,6 | 36,5 | 47,9 | 8,0 | 50,5 | 32,8 |
| **Belgique** | 6,2 | 17,4 | 31,6 | 2,0 | 67,4 | 12,6 |
| Bruxelles-Capitale | 12,6 | 30,5 | 46,4 | 5,8 | 58,6 | 20,4 |
| Flandre | 4,3 | 13,5 | 19,1 | 0,8 | 71,9 | 9,8 |
| **Wallonie** | 7,8 | 22,2 | 37,0 | 2,9 | 62,4 | 15,6 |
| – Brabant wallon | 6,7 | 19,7 (u) | 30,1 (u) | 2,0 (u) | 67,7 | 14,5 |
| – Hainaut | 9,0 | 23,6 | 39,3 | 3,5 | 59,7 | 16,9 |
| – Liège | 7,2 | 22,8 | 34,8 | 2,5 | 60,9 | 14,7 |
| – Luxembourg (B) | 6,7 | 15,3 (u) | 26,8 (u) | 1,8 (u) | 67,9 | 14,2 |
| – Namur | 7,7 | 24,7 | 44,8 | 3,5 | 65,1 | 15,9 |
| **Luxembourg** | 6,5 | 19,4 | 30,7 | 2,0 | 69,2 | 14,1 |
| **Suisse** | 4,9 | 8,8 | 29,7 | 1,5 | 79,9 | 13,3 |
| Région lémanique | 7,8 | 14,7 | 36,9 | 2,9 | 73,0 | 18,0 |
| Espace Mittelland | 4,6 | 8,5 | 27,4 | 1,3 | 81,6 | 12,5 |
| Suisse du Nord-Ouest | 4,6 | 7,5 | 25,6 | 1,2 | 80,8 | 13,0 |
| Zurich | 4,5 | 8,2 | 26,3 | 1,2 | 82,2 | 12,5 |
| Suisse orientale | 3,3 | 5,4 (u) | 26,5 | 0,9 | 83,1 | 10,4 |
| Suisse centrale | 3,0 | 4,5 (u) | 23,4 (u) | 0,7 (u) | 83,6 | 9,9 |
| Tessin | 6,6 | 14,9 (u) | 34,6 (u) | 2,3 (u) | 71,5 | 19,4 |

- Sources : chômage — [Eurostat lfst_r_lfu3rt](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfu3rt/default/table?lang=en) ; longue durée — [Eurostat lfst_r_lfu2ltu](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfu2ltu/default/table?lang=en) ; emploi — [Eurostat lfst_r_lfe2emprt](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfe2emprt/default/table?lang=en) ; sous-utilisation — [Eurostat lfst_r_sla_ga](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_sla_ga/default/table?lang=en). Toutes les valeurs françaises portent le drapeau (d) et les séries françaises 2024 une rupture (b).
- Évolutions 2023 → 2025 notables : chômage de la Région lémanique 6,7 → 7,8 % ; Bruxelles 10,6 → 12,6 % ; Île-de-France 7,6 → 8,8 % ; Wallonie 8,2 → 7,8 % avec une part de longue durée en forte baisse (47,7 → 37,0 % ; Hainaut 57,0 → 39,3 %) ; Bretagne : part de longue durée 20,5 → 11,8 % — [Eurostat lfst_r_lfu3rt](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfu3rt/default/table?lang=en), [lfst_r_lfu2ltu](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfu2ltu/default/table?lang=en).

**Tableau 5.2 — Provinces canadiennes (Statistique Canada ; colonnes OCDE TL2 = publié harmonisé)**

| Province | Chômage 15+ moy. 2025 (calcul sur mensuel CVS) | Chômage 15+ oct. 2026 (publié) | Chômage 15–24 moy. 2025 (calcul) | Taux d'emploi 15–64 moy. 2025 (calcul) | Part chômage ≥ 52 sem. (calcul, moy. nov. 2025–oct. 2026) | Part ≥ 27 sem. (idem) | Taux de postes vacants août 2026 (publié) | OCDE TL2 2025 : chômage 15–64 / emploi 15–64 (publié) |
|---|---|---|---|---|---|---|---|---|
| **Canada** | 6,9 | 6,7 | 13,9 | 74,2 | 13,2 | 23,3 | 2,8 | 7,0 / 72,9 |
| Terre-Neuve-et-Labrador | 10,2 | 8,7 | 16,9 | 68,3 | 10,1 | 19,7 | 2,1 (E) | 10,1 / 67,1 |
| Île-du-Prince-Édouard | 8,0 | 7,4 | 11,1 | 74,9 | 6,8 | 14,5 | n.p. | 8,0 / 73,6 |
| Nouvelle-Écosse | 6,6 | 6,2 | 13,0 | 72,6 | 10,0 | 20,8 | 3,0 | 6,7 / 70,1 |
| Nouveau-Brunswick | 7,1 | 7,4 | 14,9 | 72,5 | 10,2 | 19,5 | 2,5 | 7,2 / 70,3 |
| **Québec** | **5,6** | **5,7** | **9,7** | **77,4** | **9,2** | **16,7** | **3,0** | **5,6 / 77,0** |
| Ontario | 7,7 | 7,3 | 16,1 | 72,4 | 16,0 | 27,2 | 2,5 | 7,9 / 71,9 |
| Manitoba | 5,8 | 5,0 | 12,0 | 75,1 | 12,9 | 23,6 | 3,2 | 5,9 / 71,0 |
| Saskatchewan | 5,2 | 5,9 | 11,9 | 76,4 | 12,8 | 22,3 | 3,0 | 5,4 / 71,6 |
| Alberta | 7,2 | 7,3 | 15,6 | 74,6 | 12,6 | 22,9 | 3,1 | 7,4 / 73,1 |
| Colombie-Britannique | 6,2 | 6,3 | 13,5 | 74,5 | 12,4 | 22,3 | 3,1 | 6,3 / 73,4 |

- Sources : taux de chômage et d'emploi — [StatCan 14-10-0287-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410028701) ; durées — [StatCan 14-10-0342-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410034201) (formule : part ≥ 52 semaines = moyenne sur 12 mois des chômeurs de 52 semaines ou plus / moyenne sur 12 mois du chômage total, données non désaisonnalisées ; exemple Québec : 24,9 / 271,4 = 9,2 % ; Canada : 197,3 / 1 490,4 = 13,2 %, à comparer aux 13,5 % publiés par l'OCDE pour 2025) ; postes vacants — [StatCan 14-10-0432-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410043201) ; OCDE TL2 — [OCDE, Labour indicators rates – Regions](https://sdmx.oecd.org/public/rest/data/OECD.CFE.EDS,DSD_REG_LAB@DF_RATES,2.4/all?startPeriod=2024&dimensionAtObservation=AllDimensions&format=csvfilewithlabels).
- Taux de sortie mensuel f<1 par province (calcul, même formule qu'au tableau 2.2 avec « 1 à 4 semaines » comme tranche < 1 mois, en proportion des chômeurs de durée connue, moyenne nov. 2025–oct. 2026) : Québec 0,474 (37,7 % des chômeurs depuis 4 semaines ou moins) ; Canada 0,379 ; Ontario 0,331 ; Nouveau-Brunswick 0,383 ; Colombie-Britannique 0,402 ; Alberta 0,384 — intrants [StatCan 14-10-0342-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410034201).
- Taux supplémentaires provinciaux publiés (moyenne 2025, non désaisonnalisés) : R1 (chômage ≥ 1 an, % pop. active) Québec 0,5 ; Canada 0,9 ; Ontario 1,2 ; Nouveau-Brunswick 0,6 — [StatCan 14-10-0077-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410007701).
- Base régionale OCDE (TL2), 2025, mêmes territoires européens : taux de chômage 15–64 / taux d'emploi 15–64 : Wallonie 7,9 / 61,4 ; Bruxelles 12,7 / 56,8 ; Flandre 4,3 / 71,1 ; Luxembourg 6,5 / 68,0 ; Région lémanique 7,9 / 70,4 ; Espace Mittelland 4,7 / 80,1 ; Tessin 6,8 / 70,4 ; Île-de-France 8,9 / 67,9 ; Bretagne 5,7 / 70,4 ; Hauts-de-France 8,5 / 66,1 ; France 7,7 / 67,7 ; Suisse 5,0 / 78,3 ; Belgique 6,2 / 66,4 — [OCDE DSD_REG_LAB@DF_RATES](https://sdmx.oecd.org/public/rest/data/OECD.CFE.EDS,DSD_REG_LAB@DF_RATES,2.4/all?startPeriod=2024&dimensionAtObservation=AllDimensions&format=csvfilewithlabels). Dans cette base, le TL2 français correspond aux 13 régions métropolitaines actuelles plus les DROM (Guadeloupe 17,1 % de chômage, Martinique 13,7 %, Guyane 17,2 %, La Réunion 16,5 %).
- OCDE EO 2026 (thème régional) : au Canada, l'écart de taux d'emploi entre régions des quintiles supérieur et inférieur est de 17,4 points (moyenne OCDE 11,4), « parmi les plus élevés » ; en France métropolitaine il est de 8,6 points ; en 2022 le chômage départemental allait de 6,9 % (Cantal) à 16,8 % (Pyrénées-Orientales) ; au Canada en 2021 de 3,3 % (Nicolet-Yamaska) à 29 % (Division n° 9 de Terre-Neuve) — [note France](https://www.oecd.org/en/publications/oecd-employment-outlook-2026_9c4f5c3e-en/france_cec18f90-en.html), [note Canada](https://www.oecd.org/en/publications/oecd-employment-outlook-2026_9c4f5c3e-en/canada_63e26c6c-en.html).

**Tableau 5.3 — Disponibilité des indicateurs au niveau régional**

| Indicateur | FR (NUTS 1/2) | BE (NUTS 1/2) | LU | CH (NUTS 2) | CA (provinces) | Harmonisé sur les 5 ? |
|---|---|---|---|---|---|---|
| Taux de chômage BIT | oui (Eurostat, OCDE) | oui | oui | oui | oui (OCDE TL2, StatCan) | **oui** |
| Taux d'emploi 15–64 | oui | oui | oui | oui | oui | **oui** (voir réserve sur la base OCDE) |
| Part / taux de chômage ≥ 12 mois | oui | oui | oui | oui (drapeaux u) | reconstruit (StatCan : 52 semaines+) | quasi (source différente au Canada) |
| Tranches fines de durée (< 1 mois, etc.) | non (national seulement) | non | national | non | oui (StatCan) | non |
| Sous-utilisation composite | oui (slack) | oui | oui | oui | R8 par province (concept différent) | non |
| Postes vacants / tension | non harmonisé | non harmonisé | national | non harmonisé | oui (StatCan, provinces et territoires) | **non** |
| Transitions chômage → emploi | non | non | national | non | non extrait | non |
| Navetteurs transfrontaliers sortants | oui | oui | oui | oui | sans objet | UE/AELE seulement |

- Postes vacants régionaux : Eurostat ne diffuse au niveau régional que des tables historiques (2008–2015) ou des ventilations expérimentales fondées sur les offres en ligne (« statistics under development », NUTS 1, 2019–2024) — [catalogue Eurostat, table jvs_a_isco3_r1](https://ec.europa.eu/eurostat/databrowser/view/jvs_a_isco3_r1/default/table?lang=en) ; table trimestrielle par profession et région : [jvs_q_isco_r21](https://ec.europa.eu/eurostat/databrowser/view/jvs_q_isco_r21/default/table?lang=en).

### Inferences
- **Réserve importante sur la base régionale OCDE** : ses taux d'emploi 15–64 ans sont systématiquement inférieurs de 1 à 2,6 points à ceux d'Eurostat et de Statistique Canada pour les mêmes territoires et la même année (France 67,7 contre 69,3 ; Suisse 78,3 contre 79,9 ; Région lémanique 70,4 contre 73,0 ; Canada 72,9 contre 74,2), alors que les taux de chômage concordent. L'explication probable est un dénominateur de population différent (estimations démographiques plutôt que population de l'enquête). Pour un tableau unique, utiliser les taux de chômage OCDE/Eurostat indifféremment, mais **ne pas mélanger** les taux d'emploi OCDE-régional et Eurostat/StatCan.
- Classement des territoires francophones par taux de chômage 2025 (sources harmonisées) : Québec 5,6 < Bretagne 5,6 < Centre-Val de Loire 6,1 < Luxembourg 6,5 ≈ Grand Est 6,6 ≈ Pays de la Loire 6,6 < Auvergne-Rhône-Alpes 7,0 < Nouveau-Brunswick 7,1 < … < Wallonie 7,8 = Région lémanique 7,8 < Hauts-de-France 8,5 < Île-de-France 8,8 < Bruxelles 12,6 < DROM 16,6. La Région lémanique, souvent perçue comme un marché « facile », a un chômage BIT supérieur à la moyenne française hors Île-de-France et Hauts-de-France et une part de longue durée (36,9 %) proche de celle de la Wallonie.
- Sur la dimension « durée », la hiérarchie est différente : le Québec (9 % de longue durée, f<1 ≈ 0,47) et les régions de l'Ouest français (12 %) sont les territoires où le chômage est le plus court ; Bruxelles (46 %), Namur (45 %), le Hainaut (39 %), la Région lémanique (37 %) et le Tessin (35 %) ceux où il est le plus long.
- L'Espace Mittelland (cantons de Berne, Fribourg, Soleure, Neuchâtel, Jura) est majoritairement germanophone : ses bons indicateurs (4,6 % ; emploi 81,6 %) ne peuvent pas être attribués aux cantons francophones qu'il contient ; seule une source nationale cantonale permet de trancher.
- Les données régionales EFT sont des moyennes annuelles sur petits échantillons : écarts de moins de 1 point entre régions ou variations annuelles de la part de longue durée (p. ex. Liège 46,9 → 34,8 % en un an) ne doivent pas être sur-interprétés.

### Gaps
- Territoires canadiens (Yukon, Territoires du Nord-Ouest, Nunavut) : absents du tableau mensuel de l'EPA et de la base régionale OCDE consultée ; seuls des taux de postes vacants sont disponibles (Yukon 4,1 % en août 2026, Nunavut 2,3 %, qualité faible) — [StatCan 14-10-0432-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410043201).
- Corse : la plupart des indicateurs sont non publiables ou marqués (u).
- Pas de niveau « ancienne région » (NUTS 2 français : Alsace, Lorraine, Rhône-Alpes, etc.) dans le tableau 5.1 faute de place ; les tables Eurostat citées les contiennent.
- R8 provincial extrait seulement pour le Québec (7,0 % en 2025), l'Ontario (10,3 %), le Nouveau-Brunswick (9,7 %) et le Canada (9,1 %).

---

## 6. Sous-utilisation de la main-d'œuvre (« labour market slack », R8 canadien)

### Takeaway
L'indicateur composite Eurostat (chômeurs + temps partiel subi + halo, en % de la population active élargie) atteint au T2 2026 16,0 % au Luxembourg, 15,4 % en France, 13,9 % en Suisse et 13,5 % en Belgique, contre 11,8 % dans l'UE ; la Suisse, dont le chômage est le plus bas, a un « slack » proche de celui de la Belgique à cause d'un sous-emploi à temps partiel élevé. Le R8 canadien (9,1 % en 2025) repose sur une construction différente et n'est pas directement comparable.

### Cited Findings

| Pays | Slack total 2023 | 2024 | 2025 | T2 2026 (CVS) | dont chômage | dont temps partiel sous-employé | dont en recherche mais non disponibles | dont disponibles mais sans recherche |
|---|---|---|---|---|---|---|---|---|
| France | 14,8 | 14,7 | 15,0 | **15,4** | 8,3 | 3,8 | 1,6 | 2,0 |
| Belgique | 10,8 | 11,2 | 12,6 | **13,5** | 6,2 | 4,3 | 1,1 | 2,1 |
| Luxembourg | 12,9 | 13,9 | 14,1 | **16,0** | 6,6 | 3,0 | 2,9 | 3,5 |
| Suisse | 12,5 | 12,8 | 13,3 | **13,9** | 5,2 | 4,6 | 1,3 | 3,2 |
| UE-27 | 12,0 | 11,8 | 11,8 | 11,8 | 5,9 | 2,4 | 0,9 | 2,6 |

- Composantes = T2 2026, en % de la population active élargie (15–74 ans) — [Eurostat lfsi_sla_q](https://ec.europa.eu/eurostat/databrowser/view/lfsi_sla_q/default/table?lang=en) ; annuel — [Eurostat lfsi_sla_a](https://ec.europa.eu/eurostat/databrowser/view/lfsi_sla_a/default/table?lang=en).
- Canada, taux supplémentaires (non désaisonnalisés) : **R8 = 9,1 % en moyenne 2025**, 8,9 % en moyenne nov. 2025–oct. 2026, 8,1 % en octobre 2026 ; décomposition 2025 : R4 officiel 6,8 ; R5 (+ chercheurs découragés) 7,0 ; R6 (+ personnes en attente : rappel, réponses, emploi à date future) 7,4 ; R7 (+ temps partiel involontaire en équivalent temps plein) 8,2. Québec : R8 7,0 % (2025) ; Ontario 10,3 % ; Nouveau-Brunswick 9,7 % — [StatCan 14-10-0077-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410007701).

### Inferences
- Non-comparabilité Eurostat / R8 : (i) le dénominateur européen est la population active élargie (actifs + halo), le R8 a sa propre base ; (ii) le temps partiel involontaire entre dans le R8 en équivalents temps plein (« portion »), alors qu'Eurostat compte chaque personne à temps partiel sous-employée pour une unité ; (iii) le halo européen (disponibles sans recherche, en recherche non disponibles) est plus large que « découragés + groupe en attente ». Le R8 est donc mécaniquement plus bas à situation identique. On peut comparer les *écarts à l'indicateur de chômage* : +7,1 points en France (15,4 contre 8,3), +7,3 en Belgique, +9,4 au Luxembourg, +8,7 en Suisse, contre seulement +2,3 au Canada (R8 − R4).
- La Suisse est le cas où le chômage BIT sous-estime le plus la sous-utilisation : 4,6 % de la population active élargie est à temps partiel sous-employée, niveau le plus élevé du panel.

### Gaps
- Pas d'indicateur composite strictement harmonisé incluant le Canada ; une reconstruction « à l'européenne » à partir des microdonnées de l'EPA n'a pas été trouvée.

---

## 7. Dimension « outsiders » : immigrés (emploi, chômage, déclassement) et discrimination à l'embauche

### Takeaway
L'écart de chômage entre personnes nées à l'étranger et natifs est maximal en Belgique (10,2 % contre 5,1 % en 2025), en France (11,9 % contre 7,1 %) et en Suisse (7,6 % contre 3,5 %, soit un rapport de 2,2), et minimal au Canada (8,2 % contre 6,3 %), seul pays du panel où le taux d'emploi des immigrés égale celui des natifs. Les méta-analyses de tests de correspondance placent la France au premier rang de la discrimination à l'embauche parmi neuf pays (ratio supérieur de 34 à 43 % à celui des États-Unis), le Canada et la Belgique dans le groupe intermédiaire ; la Suisse et le Luxembourg n'y figurent pas.

### Cited Findings

**Tableau 7.1 — Taux d'emploi et de chômage selon le lieu de naissance, 2025 (publié, OCDE, base des Perspectives des migrations internationales ; 15–64 ans)**

| Pays | Taux d'emploi nés à l'étranger | Taux d'emploi natifs | Écart (calcul) | Chômage nés à l'étranger | Chômage natifs | Rapport (calcul) | Chômage nés à l'étranger en 2022 |
|---|---|---|---|---|---|---|---|
| France | 62,8 | 70,5 | −7,7 | 11,9 | 7,1 | 1,68 | 11,5 |
| Belgique | 63,3 | 68,6 | −5,3 | 10,2 | 5,1 | 1,99 | 9,5 |
| Luxembourg | 74,1 | 63,7 | +10,4 | 7,6 | 4,8 | 1,59 | 4,9 |
| Suisse | 76,4 | 82,0 | −5,6 | 7,6 | 3,5 | 2,17 | 7,0 |
| Canada | 74,4 | 74,1 | +0,2 | 8,2 | 6,3 | 1,29 | 5,9 |

- Source : [OCDE, Labour market outcomes of immigrants – employment, unemployment and participation rates by sex (DSD_MIG@DF_MIG_NUP_SEX)](https://sdmx.oecd.org/public/rest/data/OECD.ELS.IMD,DSD_MIG@DF_MIG_NUP_SEX,1.0/all?startPeriod=2022&dimensionAtObservation=AllDimensions&format=csvfilewithlabels). Évolution du chômage des natifs 2022 → 2025 : Canada 5,0 → 6,3 ; France 6,8 → 7,1 ; Belgique 4,6 → 5,1 ; Suisse 3,1 → 3,5 ; Luxembourg 4,1 → 4,8.

**Tableau 7.2 — Taux de déclassement (surqualification) des diplômés du supérieur en emploi, 20–64 ans, 2025 (publié, Eurostat)**

| Pays | Natifs | Nés à l'étranger (total) | dont nés dans un autre pays de l'UE | dont nés hors UE |
|---|---|---|---|---|
| France (d) | 19,4 | 28,2 | 18,8 | 30,7 |
| Belgique | 17,6 | 28,0 | 21,5 | 35,0 |
| Luxembourg | 5,7 (u) | 7,3 | 4,7 | 13,9 |
| Suisse | 15,5 | 19,4 | 16,3 | 25,8 |
| UE-27 | 19,6 | 33,0 | 26,8 | 35,7 |

- Source : [Eurostat lfsa_eoqgac](https://ec.europa.eu/eurostat/databrowser/view/lfsa_eoqgac/default/table?lang=en).
- OCDE/Commission européenne, *Les indicateurs de l'intégration des immigrés 2023 : Trouver ses marques* (indicateur 3.12) : le taux de déclassement est la part des diplômés du supérieur occupant un emploi peu ou moyennement qualifié (CITP 4 à 9) ; environ un tiers des immigrés très diplômés de l'OCDE et de l'UE sont déclassés, soit 12 points de plus que les natifs dans l'UE ; dans l'UE, 47 % des immigrés diplômés du supérieur sont soit déclassés soit sans emploi, contre 30 % des natifs ; les diplômés à l'étranger sont deux fois plus souvent déclassés que les natifs, les seules exceptions étant les pays baltes et le Luxembourg ; un diplôme du pays d'accueil réduit l'écart de déclassement de 75 % dans l'UE, « et encore davantage en Amérique du Nord, dans les pays germanophones, en France, en Suède et au Royaume-Uni » — [OCDE/CE, Settling In 2023, chapitre 3](https://www.oecd.org/en/publications/2023/06/indicators-of-immigrant-integration-2023_70d202c4/full-report/component-8.html).

**Discrimination à l'embauche (méta-analyses, références vérifiées dans les PDF)**
- Quillian, Heath, Pager, Midtbøen, Fleischmann et Hexel (2019), « Do Some Countries Discriminate More than Others? Evidence from 97 Field Experiments of Racial Discrimination in Hiring », *Sociological Science* 6, p. 467-496 : 97 expériences, 200 012 candidatures, **neuf pays : Belgique (3 études, 5 989 candidatures), Canada (7 études, 28 733), France (21 études, 37 810), Allemagne (5), Grande-Bretagne (10), Pays-Bas (10), Norvège (4), Suède (7), États-Unis (30). La Suisse et le Luxembourg ne sont pas inclus.** Le ratio de discrimination est (rappels natifs blancs / candidatures) / (rappels minorité / candidatures) — [Sociological Science](https://sociologicalscience.com/download/vol-6/june/SocSci_v6_467to496.pdf).
- Résultats (tableau 3, coefficients du logarithme du ratio, référence = États-Unis) : modèle 1 : **France 0,29** (« ratio de discrimination supérieur de 33,6 % à celui des États-Unis ») ; Suède 0,19 ; Grande-Bretagne 0,12 ; **Canada 0,10** ; **Belgique 0,03** ; Norvège −0,01 ; Pays-Bas −0,06 ; Allemagne −0,09. Modèle 2 (contrôles de base) : France 0,36 (ratio supérieur de 43 %, significatif à p < 0,001) ; Suède 0,27 (≈ +30 %, p < 0,1) ; Canada 0,10 ; Belgique 0,04 ; « viennent ensuite le Canada, la Grande-Bretagne, la Belgique, les Pays-Bas, la Norvège et les États-Unis ; les différences entre ces pays ne sont pas statistiquement significatives ». Résumé : dans les pays à forte discrimination, les natifs blancs reçoivent près de deux fois plus de rappels que les non-blancs ; dans les pays à faible discrimination, environ 25 % de plus — [Sociological Science](https://sociologicalscience.com/download/vol-6/june/SocSci_v6_467to496.pdf).
- Lippens, Vermeiren et Baert (2023), « The state of hiring discrimination: A meta-analysis of (almost) all recent correspondence experiments », *European Economic Review* 151, 104315 (version document de travail IZA DP 14966) : expériences publiées de 2005 à 2020 ; ratios poolés de réponses positives : candidats d'origine arabe/maghrébine/moyen-orientale **0,54** (IC [0,48 ; 0,60], soit ≈46 % de réponses positives en moins) ; origine est-asiatique 0,57 ; africaine/afro-américaine/noire 0,64 (≈36 % en moins) ; handicap 0,56 ; âge 0,60 ; pas de discrimination globale selon le sexe. Le registre comprend 26 expériences belges (13,3 %), 19 françaises (9,7 %), 7 suisses (3,6 %) et des expériences canadiennes. Les auteurs relèvent une baisse significative de la discrimination ethnique à l'embauche en Europe sur la période, et une discrimination selon l'âge plus forte en Europe (surtout Belgique, France, Royaume-Uni : ratio 0,52) qu'aux États-Unis (0,69) — [IZA DP 14966](https://docs.iza.org/dp14966.pdf).

### Inferences
- Deux lectures opposées coexistent pour un candidat « outsider » : au Canada, l'accès à l'emploi des immigrés est à parité avec les natifs (mais leur chômage a augmenté plus vite : 5,9 → 8,2 % entre 2022 et 2025, contre 5,0 → 6,3 % pour les natifs, signe que le refroidissement canadien pèse d'abord sur les nouveaux arrivants) ; en France et en Belgique, la pénalité à l'entrée est forte et documentée par les tests de correspondance.
- Le Luxembourg est atypique : immigrés plus souvent en emploi que les natifs (74 % contre 64 %) et déclassement très faible, ce qui reflète une immigration de travail qualifiée et européenne ; mais le chômage des nés à l'étranger y a le plus augmenté (4,9 → 7,6 %).
- La Suisse combine un haut niveau d'emploi des immigrés (76 %) et le plus fort rapport relatif de chômage (2,2) : le risque de chômage y est concentré sur les étrangers.
- Le Canada n'est pas dans la table Eurostat de déclassement ; l'affirmation de *Settling In* selon laquelle le diplôme du pays d'accueil efface l'essentiel de l'écart en Amérique du Nord suggère que le déclassement canadien touche surtout les diplômés à l'étranger — point directement pertinent pour un candidat formé en France.
- Limite des méta-analyses : la position de la Belgique dans Quillian et al. repose sur 3 études seulement ; les études couvrent des périodes et des groupes cibles différents selon les pays ; elles mesurent le rappel et non l'embauche finale.

### Gaps
- Valeurs par pays de *Settling In 2023* pour les immigrés récents (moins de 5 ans de résidence) et pour le déclassement au Canada : présentes uniquement dans les graphiques, non récupérées. Pas d'édition plus récente de *Settling In* identifiée (recherche interrompue).
- Texte et tableaux des *Perspectives des migrations internationales* 2025/2026 non consultés ; seules les séries de la base de données OCDE correspondante (jusqu'en 2025) sont rapportées.
- Je n'ai pas pu vérifier la formule exacte « 70–94 % de candidatures en plus » attribuée à Quillian et al. par des sources secondaires ; je ne la reprends pas.
- Les chiffres de Lippens et al. proviennent de la version IZA (déc. 2021) ; la version publiée peut différer marginalement.

---

## 8. Ouverture transfrontalière : quels territoires sont des « bassins ouverts » ?

### Takeaway
Le Luxembourg est un bassin ouvert au sens fort : en 2025, 43 % de l'emploi intérieur (44 % de l'emploi salarié) est occupé en solde net par des non-résidents, si bien que tout ratio rapportant des postes luxembourgeois à des chômeurs résidents est invalide ; la Suisse l'est modérément au niveau national (9 % net) mais fortement dans ses cantons frontaliers. Côté résidence, 29,5 % des actifs occupés de la province belge de Luxembourg, 13,9 % de ceux de Lorraine, 10,7 % de ceux de Franche-Comté et 7,5 % de ceux d'Alsace travaillent à l'étranger : pour ces territoires, le taux de chômage résident reflète en partie le marché du travail du pays voisin.

### Cited Findings

**Tableau 8.1 — Emploi intérieur (lieu de travail) et emploi national (résidents), comptes nationaux 2025, milliers (publié) ; solde net de non-résidents (calcul)**

| Pays | Emploi intérieur | Emploi national (résidents) | Solde net de travailleurs non résidents (calcul : (intérieur − national) / intérieur) | Idem, salariés |
|---|---|---|---|---|
| Luxembourg | 521,9 | 299,1 | **+42,7 %** | +44,0 % (490,8 contre 275,1) |
| Suisse | 5 365,3 | 4 885,9 | **+8,9 %** | +9,8 % (4 910,6 contre 4 431,8) |
| Belgique | 5 126,5 | 5 207,1 | −1,6 % | −1,9 % |
| France | 30 638 | 31 224 | −1,9 % (≈ −586 000) | −2,0 % |

- Source : [Eurostat nama_10_pe](https://ec.europa.eu/eurostat/databrowser/view/nama_10_pe/default/table?lang=en) (concept intérieur EMP_DC, concept national EMP_NC ; 2025 provisoire pour LU/BE/FR).

**Tableau 8.2 — Résidents travaillant dans un autre pays, par région de résidence, 2025, 15–64 ans (publié, milliers ; part = calcul)**

| Région de résidence | Travaillent à l'étranger | Part de l'emploi résident (calcul) |
|---|---|---|
| Province de Luxembourg (BE34) | 38,2 | **29,5 %** |
| Lorraine (FRF3) | 130,0 | **13,9 %** |
| Franche-Comté (FRC2) | 49,9 | **10,7 %** |
| Grand Est (FRF) | 196,5 | 8,5 % |
| Alsace (FRF1) | 64,9 | 7,5 % |
| Wallonie (BE3) | 74,0 | 5,1 % |
| Bourgogne-Franche-Comté (FRC) | 50,4 | 4,6 % |
| Rhône-Alpes (FRK2) | 132,7 | 4,4 % |
| Province de Liège (BE33) | 17,4 | 4,0 % |
| Auvergne-Rhône-Alpes (FRK) | 132,7 | 3,7 % |
| Nord-Pas-de-Calais (FRE1) | 52,2 | 3,1 % |
| Provence-Alpes-Côte d'Azur (FRL) | 54,9 | 2,6 % (calcul : 54,9 / 2 089,5) |
| Luxembourg (pays) | 8,7 | 2,7 % |
| France entière | 543,1 | 1,9 % |
| Région lémanique (CH01) | 6,7 | 0,8 % |

- Source : [Eurostat lfst_r_lfe2ecomm](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfe2ecomm/default/table?lang=en). Formule : travailleurs à l'étranger / (étranger + même région + autre région du pays). Exemple Lorraine : 130,0 / (130,0 + 746,5 + 60,9) = 13,9 %. Valeurs françaises (d).
- Mobilité interprovinciale au Canada : 292 535 migrants interprovinciaux en 2025/2026 (343 079 en 2022/2023 ; 331 951 en 2023/2024 ; 299 741 en 2024/2025) ; Québec : 31 890 sortants vers d'autres provinces et 24 806 entrants en 2025/2026 (solde négatif chaque année depuis 2022/2023) — [StatCan tableau 17-10-0022-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1710002201) (somme des flux origine-destination, calcul).

### Inferences
- Proposition de règle pour le tableau comparatif : **(a) Luxembourg** : ne pas présenter de ratio v/u ni de « postes par chômeur » sur base résidente ; présenter le taux d'emplois vacants (1,3 %) et le chômage résident séparément, et rappeler que le bassin de recrutement est la Grande Région. **(b) Territoires de résidence frontaliers (province de Luxembourg, Lorraine, Franche-Comté, Alsace, Haute-Savoie/Ain à l'intérieur de Rhône-Alpes)** : leur taux de chômage résident intègre les débouchés luxembourgeois et suisses ; un candidat qui s'y installe accède de fait à deux marchés. **(c) Suisse** : au niveau national l'effet est limité (9 % net) ; au niveau de la Région lémanique, de la Suisse du Nord-Ouest et du Tessin, la demande de travail locale est en partie satisfaite par des frontaliers non comptés dans le chômage suisse, ce qui rend le chômage résident (7,8 % en Région lémanique, 6,6 % au Tessin) *plus* élevé que ne le laisserait attendre la tension locale.
- Le solde net luxembourgeois (43–44 %) minore la part brute des frontaliers entrants, puisque des résidents luxembourgeois travaillent aussi hors du concept intérieur ; la part brute relève des sources nationales.
- Le Canada est un marché fermé vers l'extérieur mais ouvert en interne : ≈0,29 million de migrants interprovinciaux par an, soit de l'ordre de 0,7 % de la population (ordre de grandeur, population ≈41–42 millions non sourcée ici) ; les provinces ne sont pas des bassins ouverts au sens luxembourgeois, et le ratio provincial v/u reste interprétable.

### Gaps
- Parts de frontaliers dans l'emploi des cantons de Genève, Bâle-Ville et du Tessin : non obtenues (la statistique des frontaliers n'est pas exposée dans l'API PX-Web de l'OFS interrogée — seule une table de scénarios 2025-2055 y figure — et le quota de recherche était épuisé) ; à prendre dans la statistique des frontaliers de l'OFS (note nationale Suisse). De même, la part brute de frontaliers dans l'emploi salarié luxembourgeois (STATEC) n'a pas été vérifiée.
- Eurostat ne publie pas les navetteurs *entrants* par région de travail dans la table utilisée ; on ne peut donc pas calculer de façon harmonisée la part de non-résidents dans l'emploi d'une région suisse.
- Navettage interprovincial canadien (travailleurs résidant dans une province et travaillant dans une autre) non recherché.

---

## 9. Institutions : protection de l'emploi, contrats temporaires, rotation, indemnisation

### Takeaway
Les indicateurs OCDE de protection de l'emploi opposent nettement le Canada (0,95 pour les licenciements individuels de CDI ; 0,28 pour la réglementation des contrats temporaires) et la Suisse (1,57 ; 1,20) à la France (2,45 ; 2,68), à la Belgique (2,56 ; 1,61) et au Luxembourg (2,50 ; 2,81), ce qui est cohérent avec l'ordre des taux de sortie du chômage. La France a la plus forte part de salariés en contrat temporaire (15,3 % au T2 2026) et, avec la Suisse, la plus forte rotation mesurée par les entrées récentes en emploi (4,4–4,5 % de l'emploi par trimestre).

### Cited Findings

**Tableau 9.1 — Indicateurs OCDE de rigueur de la protection de l'emploi, échelle 0–6, version 4, valeur 2025 (publié)**

| Pays | Licenciements individuels (CDI) | Licenciements individuels et collectifs (CDI) | Licenciements collectifs (composante) | Contrats temporaires |
|---|---|---|---|---|
| France | 2,45 | 2,68 | 3,25 | 2,68 |
| Belgique | 2,56 | 2,59 | 2,66 | 1,61 |
| Luxembourg | 2,50 | 2,54 | 2,66 | 2,81 |
| Suisse | 1,57 | 1,61 | 1,69 | 1,20 |
| Canada | 0,95 | 1,02 | 1,19 | 0,28 (0,23 en 2024) |

- Source : [OCDE, Strictness of employment protection (DSD_EPL@DF_EPL)](https://sdmx.oecd.org/public/rest/data/OECD.ELS.JAI,DSD_EPL@DF_EPL,1.0/all?startPeriod=2018&dimensionAtObservation=AllDimensions&format=csvfilewithlabels). L'API renvoie des valeurs datées 2024 et 2025 alors que le libellé de la version indique « 2013–2019 » : valeurs identiques entre 2024 et 2025 sauf le Canada pour les contrats temporaires.

**Tableau 9.2 — Contrats temporaires et rotation (publié, Eurostat, 15–64 ans sauf mention)**

| Indicateur | France | Belgique | Luxembourg | Suisse | UE-27 | Source |
|---|---|---|---|---|---|---|
| Salariés en contrat temporaire, % des salariés, 2025 | 15,2 | 11,0 | 9,2 | 13,0 | 12,6 | lfsa_etpgan |
| Idem, T2 2026 | 15,3 | 12,1 | 9,2 | 13,2 | 12,7 | lfsq_etpga |
| Personnes ayant commencé leur emploi dans les 3 derniers mois, % de l'emploi, T2 2026 (CVS, 15–74) | 4,4 | 4,0 | 3,9 | 4,5 | 3,7 | lfsi_sta_q |
| Personnes dans leur emploi depuis 12 mois ou moins, % de l'emploi, 2025 | 15,6 | 13,7 | 14,1 | 17,3 | 13,7 | lfsa_enewasn |
| Idem, 2023 | 17,4 | 13,1 | 13,4 | 19,2 | 15,1 | lfsa_enewasn |

- Sources : [Eurostat lfsa_etpgan](https://ec.europa.eu/eurostat/databrowser/view/lfsa_etpgan/default/table?lang=en), [lfsq_etpga](https://ec.europa.eu/eurostat/databrowser/view/lfsq_etpga/default/table?lang=en), [lfsi_sta_q](https://ec.europa.eu/eurostat/databrowser/view/lfsi_sta_q/default/table?lang=en), [lfsa_enewasn](https://ec.europa.eu/eurostat/databrowser/view/lfsa_enewasn/default/table?lang=en).
- Hobijn et Şahin (2007) estimaient des taux mensuels de séparation de 1,78 % au Canada, 1,19 % en Suisse, 1,14 % en France, 0,92 % en Belgique et 0,82 % au Luxembourg (échantillons 1992/1996–2004/2006) — [FRBNY Staff Report 298](https://www.newyorkfed.org/medialibrary/media/research/staff_reports/sr298.pdf).
- LinkedIn (indicateur privé de « taux d'embauche », indice) : France 0,85 en mars 2026, −14,0 % sur un an ; « offres par candidat » en France −11,2 % sur un an, candidatures par candidat −17,0 % ; pays du tableau EMEA–Amérique latine : Émirats, Irlande, Brésil, Royaume-Uni, Allemagne, France, Suède, Pays-Bas, Israël, Italie, Espagne, Mexique (ni la Belgique, ni la Suisse, ni le Luxembourg) — [LinkedIn Economic Graph, EMEA-LATAM Monthly Insights, avril 2026](https://economicgraph.linkedin.com/content/dam/me/economicgraph/en-us/PDF/emeal-monthly-insights-april-2026.pdf).

### Inferences
- Lecture conjointe avec la section 2 : faible protection (Canada, Suisse) ↔ entrées et sorties du chômage plus fréquentes et retour à l'emploi plus rapide ; forte protection des CDI combinée à un usage intensif des contrats courts (France) ↔ taux de sortie apparent élevé mais vers des emplois courts, et risque trimestriel emploi → chômage le plus élevé du panel européen (1,9 % contre 1,2–1,3 %, section 2). « Trouver *un* emploi » est donc relativement rapide en France ; « trouver un emploi stable » ne l'est pas — distinction à expliciter dans le rapport.
- La baisse de la part des « nouveaux embauchés depuis 12 mois ou moins » entre 2023 et 2025 en France (17,4 → 15,6 %) et en Suisse (19,2 → 17,3 %) est une mesure harmonisée directe du ralentissement des embauches ; la Belgique et le Luxembourg ne montrent pas ce recul.
- L'indice de protection des CDI ne distingue presque pas France, Belgique et Luxembourg (2,45–2,56) : les différences de taux de sortie entre ces trois pays viennent d'ailleurs (contrats courts en France, indemnisation, structure du chômage).

### Gaps
- **Part des contrats à durée déterminée dans les embauches (France : CDD dans les déclarations d'embauche) : non obtenue** ; aucun indicateur harmonisé « part des contrats temporaires dans les nouvelles embauches » n'a été extrait. Le croisement Eurostat « embauchés récents × type de contrat » n'a pas été trouvé dans les tables consultées.
- **Durées maximales d'indemnisation du chômage et taux de remplacement nets OCDE : non vérifiés dans cette session** (quota de recherche épuisé ; la base OCDE « Net replacement rates in unemployment », DSD_TAXBEN_NRR@DF_NRR, existe mais n'a pas été extraite). À titre purement indicatif et **de mémoire, à confirmer par les notes nationales** : Canada, 14 à 45 semaines selon le taux de chômage régional ; Luxembourg, 12 mois en règle générale ; Suisse, 400 indemnités journalières en règle générale (davantage pour les 55 ans et plus) ; France, 18 mois au maximum avant 55 ans depuis 2025 ; Belgique, passage d'une indemnisation sans limite de durée à une limitation à deux ans à partir de 2026. Ces éléments ne doivent pas être cités sans vérification.
- Indicateurs LinkedIn pour le Canada (taux d'embauche, candidats par offre) : un communiqué LinkedIn de janvier 2026 mentionnerait une couverture États-Unis, Canada, Brésil, Australie, Inde, Singapour, France, Allemagne, Pays-Bas, Royaume-Uni, mais je n'ai pas pu consulter le document ni obtenir de valeurs par pays.

---

## 10. Contexte de qualité de l'emploi : salaires en parité de pouvoir d'achat, temps partiel subi, emploi temporaire

### Takeaway
Classer les pays par facilité d'accès à l'emploi sans la qualité serait trompeur : le salaire annuel moyen en parité de pouvoir d'achat va de 60 500 USD en France et 67 900 au Canada à 80 000 en Belgique, 92 300 en Suisse et 98 500 au Luxembourg (2025). Le Canada, où l'on retrouve le plus vite un emploi, a des salaires PPA inférieurs de 15 % à ceux de la Belgique et une part de temps partiel involontaire (21 % du temps partiel) aussi élevée qu'en France.

### Cited Findings

**Tableau 10.1 — Indicateurs de qualité, 2025 (publié)**

| Indicateur | France | Belgique | Luxembourg | Suisse | Canada | Source |
|---|---|---|---|---|---|---|
| Salaire annuel moyen par salarié en équivalent temps plein, USD PPA, prix constants 2025 | 60 483 | 80 009 | 98 530 | 92 285 | 67 901 | OCDE AV_AN_WAGE |
| Idem, 2022 (pour l'évolution réelle) | 61 044 | 76 346 | 93 762 | 90 813 | 67 334 | OCDE AV_AN_WAGE |
| Salaire annuel moyen, monnaie nationale courante | 44 304 EUR | 61 747 EUR | 86 017 EUR | 98 334 CHF | 85 588 CAD | OCDE AV_AN_WAGE |
| Temps partiel involontaire, % de l'emploi à temps partiel (15–64), OCDE | 20,4 | 18,9 | 10,2 | 6,7 | 21,0 | OCDE DF_INVPT_I |
| Temps partiel involontaire, % de l'emploi total (15–64), OCDE | 3,4 | 4,8 | 1,8 | 2,7 | 3,5 | OCDE DF_INVPT_I |
| Temps partiel involontaire, % du temps partiel, Eurostat (15–64) | 21,2 | 18,7 | 9,8 | 6,7 | — | Eurostat lfsa_eppgai |
| Salariés en contrat temporaire, % des salariés (15–64) | 15,2 | 11,0 | 9,2 | 13,0 | n.d. (harmonisé) | Eurostat lfsa_etpgan |

- Sources : [OCDE, Average annual wages](https://sdmx.oecd.org/public/rest/data/OECD.ELS.SAE,DSD_EARNINGS@AV_AN_WAGE,1.0/all?startPeriod=2022&dimensionAtObservation=AllDimensions&format=csvfilewithlabels) ; [OCDE, Incidence of involuntary part time employment](https://sdmx.oecd.org/public/rest/data/OECD.ELS.SAE,DSD_INVPT_EMP@DF_INVPT_I,1.1/all?startPeriod=2023&dimensionAtObservation=AllDimensions&format=csvfilewithlabels) ; [Eurostat lfsa_eppgai](https://ec.europa.eu/eurostat/databrowser/view/lfsa_eppgai/default/table?lang=en) ; [Eurostat lfsa_etpgan](https://ec.europa.eu/eurostat/databrowser/view/lfsa_etpgan/default/table?lang=en).
- Évolution du temps partiel involontaire en % du temps partiel (OCDE, 15–64) 2023 → 2025 : Canada 17,8 → 21,0 ; France 23,3 → 20,4 ; Belgique 18,0 → 18,9 ; Luxembourg 10,6 → 10,2 ; Suisse 6,7 → 6,7 — [OCDE DF_INVPT_I](https://sdmx.oecd.org/public/rest/data/OECD.ELS.SAE,DSD_INVPT_EMP@DF_INVPT_I,1.1/all?startPeriod=2023&dimensionAtObservation=AllDimensions&format=csvfilewithlabels).
- OCDE EO 2026, Canada : salaires réels +1,5 % sur un an au T1 2026 (moyenne OCDE +1,7 %), revenus à leur niveau du T1 2021 ; projection −0,7 % en 2026 puis +0,4 % en 2027 — [note Canada](https://www.oecd.org/en/publications/oecd-employment-outlook-2026_9c4f5c3e-en/canada_63e26c6c-en.html).

### Inferences
- Évolution réelle 2022 → 2025 du salaire moyen PPA (calcul sur le tableau) : France −0,9 % ; Canada +0,8 % ; Suisse +1,6 % ; Belgique +4,8 % (indexation automatique) ; Luxembourg +5,1 % (indexation). Le pays où le chômage monte le plus (Luxembourg) est aussi celui où les salaires réels ont le mieux résisté ; la France cumule hausse du chômage et stagnation des salaires réels.
- Le salaire moyen PPA de l'OCDE est un salaire par équivalent temps plein issu des comptes nationaux (masse salariale / emploi salarié, corrigé du temps partiel) : il ne s'agit pas d'un salaire médian, il inclut les frontaliers au Luxembourg et en Suisse (concept intérieur), et la PPA utilisée est celle de la consommation privée nationale — elle ne reflète pas le coût de la vie d'un frontalier résidant en France ou en Belgique.
- La Suisse est le seul pays du panel où temps partiel subi (6,7 % du temps partiel) et salaires élevés se combinent ; mais son sous-emploi déclaré (section 6 : 4,6 % de la population active élargie souhaite travailler davantage) est le plus élevé — les deux indicateurs mesurent des choses différentes (motif du temps partiel contre souhait d'heures supplémentaires).

### Gaps
- Salaires **médians** harmonisés récents non extraits (la base OCDE des déciles de gains n'a pas été consultée) ; seuls des salaires moyens sont fournis.
- Part de l'emploi temporaire harmonisée pour le Canada non extraite (existe à l'OCDE ; la table de Statistique Canada sur la permanence de l'emploi relève de la note nationale).

---

## 11. Classements et comparaisons existants de la difficulté à trouver un emploi ; méthodes

### Takeaway
Il n'existe pas, à ma connaissance et dans la limite de cette recherche, de classement international publié de la « difficulté à trouver un emploi » couvrant ensemble les cinq pays et leurs régions ; les briques disponibles sont (i) les estimations académiques de taux de retour à l'emploi (Elsby-Hobijn-Şahin ; Hobijn-Şahin), (ii) les indicateurs de tension de l'OCDE, (iii) les transitions longitudinales d'Eurostat, (iv) des indicateurs privés (Indeed, LinkedIn) à couverture partielle — aucun ne couvre le Luxembourg, la Suisse et la Belgique simultanément avec le Canada, sauf l'article de Hobijn et Şahin (données arrêtées en 2004).

### Cited Findings

**Tableau 11.1 — Sources comparatives et couverture des cinq pays**

| Source | Mesure | FR | BE | LU | CH | CA | Dernière période |
|---|---|---|---|---|---|---|---|
| Hobijn et Şahin (2007), FRBNY SR 298 | taux mensuel de retour à l'emploi (estimation sur distribution des durées) | 6,69 % | 3,45 % | 8,51 % | 13,35 % | 28,90 % | échantillons jusqu'en 2004 |
| Elsby, Hobijn, Şahin (2013), *REStat* | taux mensuel de sortie du chômage | 7,8 % | — | — | — | 25,8 % | version NBER 2008 |
| OCDE « Unemployment by duration » | parts par durée (permet le calcul EHS) | oui | oui | oui | oui | oui | 2025 |
| Eurostat lfsi_long_e01 / lfsi_long_q | probabilité trimestrielle chômage → emploi | 26 % | 24 % | (trimestriel bruité) | 31 % | — | 2025 / T2 2026 |
| OCDE EO 2026, graphique 1.5 | postes vacants par chômeur, 27 pays | oui (valeur non relevée) | oui (non relevée) | n.v. | oui (jusqu'au T4 2025) | 0,3 au T1 2026 | T1 2026 |
| Indeed Hiring Lab | indice d'offres en ligne | 90,9 | non couvert | non couvert | non couvert | 109,2 | 13 nov. 2026 |
| LinkedIn Economic Graph (EMEA) | taux d'embauche, offres par candidat | oui | non (tableau consulté) | non | non | non (tableau consulté) | mars 2026 |

- Sources : [FRBNY Staff Report 298](https://www.newyorkfed.org/medialibrary/media/research/staff_reports/sr298.pdf) ; [NBER WP 14617](https://www.nber.org/papers/w14617.pdf) ; [OCDE DF_DUR_I](https://sdmx.oecd.org/public/rest/data/OECD.ELS.SAE,DSD_DUR@DF_DUR_I,1.0/all?startPeriod=2023&dimensionAtObservation=AllDimensions&format=csvfilewithlabels) ; [Eurostat lfsi_long_e01](https://ec.europa.eu/eurostat/databrowser/view/lfsi_long_e01/default/table?lang=en) ; [OCDE EO 2026, chapitre 1](https://www.oecd.org/en/publications/oecd-employment-outlook-2026_7e710f54-en/full-report/from-resilience-to-risk-employment-and-wages-under-pressure_b599ad83.html) ; [Indeed Hiring Lab, GitHub](https://github.com/hiring-lab/job_postings_tracker) ; [LinkedIn EMEA-LATAM Insights, avril 2026](https://economicgraph.linkedin.com/content/dam/me/economicgraph/en-us/PDF/emeal-monthly-insights-april-2026.pdf).
- Méthode Hobijn-Şahin : estimation par méthode des moments généralisés d'un taux de retour à l'emploi moyen (avec dépendance à la durée) à partir de la distribution moyenne des durées de chômage publiée par l'OCDE ; pour les pays à faible taux, la part des chômeurs de moins d'un mois est une bonne approximation (France : part 6 %, estimation 6,6 %) — [FRBNY Staff Report 298](https://www.newyorkfed.org/medialibrary/media/research/staff_reports/sr298.pdf).
- Méthode LinkedIn : le taux d'embauche est le nombre de membres ayant ajouté un nouvel employeur à leur profil le mois du début de l'emploi, rapporté au nombre de membres du pays, en indice ; la « tension » est le ratio offres par candidat (nombre d'offres auxquelles les membres postulent / nombre de candidats) — [LinkedIn EMEA-LATAM Insights, avril 2026](https://economicgraph.linkedin.com/content/dam/me/economicgraph/en-us/PDF/emeal-monthly-insights-april-2026.pdf).
- Constat OCDE utile au cadrage : « les chances de trouver un emploi dépendent fortement du lieu de résidence » ; dans plus de la moitié des pays de l'OCDE, les taux d'emploi entre petites régions varient de plus de 20 points ; les recompositions sectorielles régionales passent surtout par les flux d'entrée et de sortie de l'emploi, la mobilité entre régions ne jouant qu'un rôle mineur — [OCDE EO 2026, note France](https://www.oecd.org/en/publications/oecd-employment-outlook-2026_9c4f5c3e-en/france_cec18f90-en.html).

**Tableau 11.2 — Synthèse : ce qui est comparable et ce qui ne l'est pas**

| Indicateur | Comparable 5 pays en niveau ? | Principales ruptures de comparabilité |
|---|---|---|
| Taux de chômage BIT | **Oui** (± 0,1–1 pt) | âge 15–74 contre 15+ ; critère de recherche canadien (R3 contre R4) ; petit échantillon LU ; CH trimestriel ; France (d) |
| Taux d'emploi 15–64 | **Oui** entre Eurostat et StatCan ; **non** avec la base régionale OCDE (écart de 1–2,6 pts) | dénominateurs de population |
| Part du chômage ≥ 12 mois | **Oui**, avec prudence | durée de recherche (UE) contre durée du chômage en semaines (Canada) ; durée non remise à zéro lors de passages par l'inactivité |
| Tranches de durée < 1 mois | Fragile | erreurs de déclaration, arrondis, très petits effectifs (LU, CH régions) |
| Taux de sortie EHS (calcul) | Ordre de grandeur seulement | régime permanent non vérifié en 2024–2026 ; sorties vers l'inactivité incluses |
| Probabilité chômage → emploi (longitudinal) | Oui pour FR, BE, CH ; LU bruité ; **Canada absent** | statistique « en développement » ; attrition des panels |
| Taux d'emplois vacants | **Non en niveau** ; oui en évolution | France sans secteur public ; Luxembourg administratif ; définitions et champs nationaux |
| v/u | **Non en niveau** | idem + dénominateur résident dans les bassins ouverts (LU, cantons frontaliers) |
| Slack / R8 | Oui entre FR, BE, LU, CH ; **non** avec le Canada | constructions différentes |
| Écarts immigrés/natifs | Oui (OCDE) | composition de l'immigration très différente (LU, CA) |
| Ratios de discrimination | Partiel (FR, BE, CA ; pas CH ni LU dans Quillian et al.) | nombre d'études inégal ; périodes et groupes différents |
| Salaires PPA | Oui (moyenne), pas la médiane | concept intérieur (frontaliers) ; PPA nationale |

- Ce tableau est une synthèse de ma part à partir des sources citées dans les sections 1 à 10.

### Inferences
- Proposition de tableau comparatif unique « défendable » (toutes valeurs sourcées ci-dessus) : pour chaque pays/territoire — (1) taux de chômage BIT, dernier point et variation depuis 2023 ; (2) part du chômage ≥ 12 mois, 2025 ; (3) probabilité trimestrielle chômage → emploi (Europe) et f<1/f<12 calculés (5 pays) ; (4) taux d'emplois vacants et son évolution depuis 2022 (pas v/u en niveau) ; (5) slack (Europe) / R8 (Canada) dans deux colonnes distinctes ; (6) rapport de chômage nés à l'étranger / natifs ; (7) salaire moyen PPA ; (8) drapeau « bassin ouvert ». Tout indicateur composite unique serait indéfendable compte tenu des ruptures de la colonne de droite.
- Sur l'axe « vitesse de retour à l'emploi », l'ordre Canada (Québec en tête) > Suisse > France > Belgique est soutenu par au moins deux sources indépendantes pour chaque paire, sauf la paire Suisse/France où les stocks de durée et les flux divergent (voir section 2) ; le Luxembourg n'est pas classable de façon fiable.
- Sur l'axe « risque de ne pas trouver durablement », l'ordre est presque inversé pour la Suisse : part de longue durée et durée moyenne les plus élevées du panel.

### Gaps
- **Cadre OCDE de la qualité de l'emploi (dimension « sécurité sur le marché du travail » : risque de chômage × durée attendue, pondéré par l'assurance chômage) : valeurs par pays non obtenues** (le jeu de données OCDE correspondant a renvoyé une erreur et le quota de recherche était épuisé). C'est pourtant l'indicateur publié le plus proche de la question posée ; à récupérer.
- Eurofound, Gallup, et les séries LinkedIn « candidats par offre » par pays (dont Canada) : non consultés. L'évaluation par la Réserve fédérale de New York des indicateurs de tension LinkedIn (octobre 2026) a été repérée mais non lue.
- Valeurs du graphique 1.5 de l'OCDE EO 2026 pour la France, la Belgique et la Suisse non relevées ; présence du Luxembourg parmi les 27 pays non vérifiée.
- Aucune recherche systématique de comparaisons académiques récentes (post-2020) des taux de retour à l'emploi incluant Suisse, Belgique et Luxembourg n'a pu être menée.
