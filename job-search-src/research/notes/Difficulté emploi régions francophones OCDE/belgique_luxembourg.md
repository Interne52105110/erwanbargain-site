# Difficulté à trouver un emploi côté demandeur : Belgique francophone (Wallonie, Bruxelles) et Grand-Duché de Luxembourg — état des données au 22 novembre 2026

Notes de méthode valables pour tout le document :
- Les tableaux Eurostat ont été interrogés directement par l'API (extractions du 22/11/2026 ; tables mises à jour entre le 10/09/2026 et le 20/11/2026). Les fichiers open data de l'ADEM (mise à jour du 20/11/2026, données d'octobre 2026) ont été téléchargés et agrégés par mes soins.
- Le site statbel.fgov.be était protégé par un captcha lors de la collecte : les pages Statbel n'ont pas pu être lues directement. Les chiffres Statbel proviennent donc (a) des vues be.STAT (API publique de Statbel), (b) des fiches IWEPS, (c) de la presse reprenant les communiqués. C'est signalé à chaque fois.
- « Calcul propre » = ratio calculé par moi à partir de deux chiffres sourcés ; « estimation » = ordre de grandeur reposant sur une hypothèse explicitée. Ni l'un ni l'autre ne sont des chiffres officiels.
- Étiquetage : [officiel] = chiffre publié par un organisme statistique ou une administration et lu à la source (ou dans un fichier de données de cette source) ; « reprise presse » ou « résumé de recherche » = chiffre officiel connu seulement par une source secondaire ; [non vérifié] = à confirmer avant citation. Sauf mention contraire, les chiffres Eurostat, ADEM, IGSS, STATEC, IWEPS, ONEM et be.STAT sont [officiel].
- Les rapports annuels 2024 et 2025 de l'ADEM, la présentation tripartite de l'ADEM, le rapport LUXTALENT et le tableau de bord IGSS ont été lus par extraction automatique du texte des PDF : les chiffres tirés de graphiques ou de tableaux à police non standard sont signalés comme à vérifier.
- La collecte s'est faite en deux temps (budget d'appels limité) : quelques points (taux de sortie vers l'emploi du Forem et d'Actiris, note STATEC BIT/ADEM, effectifs régionaux d'emplois vacants Statbel, part actuelle des navetteurs à Bruxelles) n'ont pas pu être obtenus et figurent en « Gaps ».

---

## 1. Belgique — Chômage BIT, taux d'emploi, chômage de longue durée et sous-emploi par région et par province

### Takeaway
En 2025 (dernière année complète), le taux de chômage BIT est de 7,8 % en Wallonie, 12,6 % à Bruxelles et 4,3 % en Flandre (15-74 ans) ; au 2e trimestre 2026 il est de 8,0 % / 12,7 % / 4,0 % (15-64 ans). L'écart régional est encore plus net sur le chômage de longue durée (37 % des chômeurs en Wallonie, 46 % à Bruxelles, 19 % en Flandre) et sur le « halo » (sous-emploi élargi : 15,6 % / 20,4 % / 9,8 %).

### Cited Findings

**Tableau 1 — Indicateurs EFT annuels 2025 par région et province (Eurostat, NUTS 1/2)**

| Territoire | Taux de chômage BIT 15-74 (%) | Chômeurs BIT (milliers) | Taux d'emploi 20-64 (%) | Part du chômage ≥ 12 mois (% des chômeurs) | Taux de chômage de longue durée (% pop. active) | Labour market slack (% pop. active élargie, 15-74) |
|---|---|---|---|---|---|---|
| Belgique | 6,2 | 339,3 | 72,8 | 31,6 | 2,0 | 12,6 |
| Bruxelles-Capitale | 12,6 | 73,7 | 63,9 | 46,4 | 5,8 | 20,4 |
| Flandre | 4,3 | 139,9 | 77,3 | 19,1 | 0,8 | 9,8 |
| Wallonie | 7,8 | 125,7 | 67,9 | 37,0 | 2,9 | 15,6 |
| — Brabant wallon | 6,7 | 13,0 | 74,2 | 30,1 (u) | 2,0 (u) | 14,5 |
| — Hainaut | 9,0 | 51,5 | 65,3 | 39,3 | 3,5 | 16,9 |
| — Liège | 7,2 | 33,9 | 66,0 | 34,8 | 2,5 | 14,7 |
| — Luxembourg (BE) | 6,7 | 9,4 | 73,0 | 26,8 (u) | 1,8 (u) | 14,2 |
| — Namur | 7,7 | 17,8 | 71,1 | 44,8 | 3,5 | 15,9 |
| (pour mémoire) Grand-Duché de Luxembourg | 6,5 | 22,8 | 73,6 | 30,7 | 2,0 | 14,1 |

(u) = fiabilité faible selon Eurostat. Valeurs 2024 pour comparaison : chômage Wallonie 7,4 %, Bruxelles 11,8 %, Flandre 3,8 %, Belgique 5,7 % ; part longue durée Wallonie 43,5 %, Bruxelles 49,1 %, Flandre 20,9 %.

- Taux de chômage BIT 15-74 ans, 2025 et 2024, par NUTS 2 — [Eurostat lfst_r_lfu3rt](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfu3rt/default/table?lang=fr)
- Nombre de chômeurs BIT 15-74 ans par NUTS 2, 2025 — [Eurostat lfst_r_lfu3pers](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfu3pers/default/table?lang=fr)
- Taux d'emploi 20-64 ans par NUTS 2, 2025 — [Eurostat lfst_r_lfe2emprt](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfe2emprt/default/table?lang=fr)
- Chômage de longue durée (≥ 12 mois) : effectifs, part des chômeurs (PC_UNE), taux (PC_ACT), 2025 — [Eurostat lfst_r_lfu2ltu](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfu2ltu/default/table?lang=fr)
- Labour market slack 2025 (chômeurs + temps partiels sous-employés + personnes cherchant mais non disponibles + disponibles ne cherchant pas, en % de la population active élargie) ; en effectifs : Belgique 711 900, Bruxelles 124 800, Flandre 327 100, Wallonie 260 000, Hainaut 100 300, Liège 71 900 — [Eurostat lfst_r_sla_ga](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_sla_ga/default/table?lang=fr)
- Chômage de longue durée parmi les diplômés du supérieur en 2025 : 34,7 % des chômeurs diplômés du supérieur en Wallonie et 34,5 % à Bruxelles sont au chômage depuis ≥ 12 mois, contre 14,2 % en Flandre (25,9 % en Belgique) — [Eurostat lfst_r_lfu2ltu](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfu2ltu/default/table?lang=fr)
- Durée du chômage BIT en Belgique, 2025 (milliers, total 339,3) : < 1 mois 38,1 ; 1-2 mois 78,7 ; 3-5 mois 56,8 ; 6-11 mois 55,5 ; 12-17 mois 37,1 ; 18-23 mois 12,6 ; 24-47 mois 31,9 ; ≥ 48 mois 25,8 — [Eurostat lfsa_ugad](https://ec.europa.eu/eurostat/databrowser/view/lfsa_ugad/default/table?lang=fr)

**Tableau 2 — Derniers trimestres (Statbel, EFT, 15-64 ans, non désaisonnalisé)**

| | T3 2025 | T4 2025 | T1 2026 | T2 2026 |
|---|---|---|---|---|
| Taux de chômage Bruxelles | 13,1 % | 11,7 % | 13,4 % | 12,7 % |
| Taux de chômage Wallonie | 7,9 % | 8,3 % | 7,5 % | 8,0 % |
| Taux de chômage Flandre | 4,5 % | 4,6 % | 4,4 % | 4,0 % |
| Taux de chômage Belgique | 6,5 % | 6,5 % | 6,3 % | 6,1 % |
| Taux d'emploi 15-64 Bruxelles | 59,6 % | 58,9 % | 58,3 % | 59,4 % |
| Taux d'emploi 15-64 Wallonie | 63,2 % | 62,1 % | 62,1 % | 62,0 % |
| Taux d'emploi 15-64 Flandre | 71,4 % | 71,8 % | 71,5 % | 71,7 % |
| Taux d'emploi 15-64 Belgique | 67,5 % | 67,3 % | 67,0 % | 67,2 % |

- Taux trimestriels par région, T3 2025 à T2 2026 (dernier trimestre publié au 22/11/2026) — [Statbel be.STAT, EFT par trimestre et région](https://bestat.statbel.fgov.be/bestat/api/views/7d30d7ff-ab74-4047-b2af-2a0bff250647/result/HTML)
- Au T2 2026, taux d'emploi des 20-64 ans : Belgique 72,8 %, Flandre 77,3 %, Wallonie 67,6 %, Bruxelles 64,7 % (reprise presse du communiqué Statbel) — [Business AM](https://fr.businessam.be/?p=279169)
- Au T2 2026, par niveau d'éducation (Belgique, 15-64) : taux de chômage 15,5 % (bas), 6,9 % (moyen), 3,7 % (haut) ; taux d'emploi 33,1 % / 64,5 % / 85,4 % — [Statbel be.STAT](https://bestat.statbel.fgov.be/bestat/api/views/5531caaf-7570-4204-8592-0bdceb9bd9ca/result/HTML)
- Belgique, séries harmonisées désaisonnalisées : taux de chômage 6,2 % au T2 2026 (342 000 chômeurs), 6,0 % en septembre 2026 (329 000) ; chômage des 15-24 ans 19,6 % au T2 2026 — [Eurostat une_rt_q](https://ec.europa.eu/eurostat/databrowser/view/une_rt_q/default/table?lang=fr) ; [Eurostat une_rt_m](https://ec.europa.eu/eurostat/databrowser/view/une_rt_m/default/table?lang=fr)
- Wallonie 2025, par âge (15-64 ans, EFT) : 22,2 % pour les 15-24 ans (13,5 % en Flandre), 6,8 % pour les 25-49 ans, 5,7 % pour les 50-64 ans ; intervalle de confiance à 95 % du taux wallon (7,9 %) : 7,3 %–8,4 % — [IWEPS, fiche L014, septembre 2026](https://www.iweps.be/wp-content/uploads/2026/09/L014-TX.CHOM_.BIT-092026_Full1.pdf)
- Le taux BIT wallon (7,9 % en 2025) est environ deux fois plus faible que le taux de chômage administratif (15,6 % en 2025), en raison de critères plus stricts d'inoccupation et de recherche active — [IWEPS, fiche L014](https://www.iweps.be/wp-content/uploads/2026/09/L014-TX.CHOM_.BIT-092026_Full1.pdf)
- Transitions trimestrielles (EFT longitudinale, désaisonnalisé) : part des chômeurs BIT d'un trimestre qui sont en emploi le trimestre suivant — Belgique 24,4 % (T3 2025), 21,5 % (T4 2025), 22,6 % (T1 2026), 28,2 % (T2 2026) ; UE-27 23,2 % (T2 2026) ; France 25,5 % (T2 2026). Part restant au chômage en Belgique : 52,2 % ; passant en inactivité : 19,6 % (T2 2026) — [Eurostat lfsi_long_q](https://ec.europa.eu/eurostat/databrowser/view/lfsi_long_q/default/table?lang=fr)
- Sous-emploi élargi national au T2 2026 (désaisonnalisé) : 13,5 % de la population active élargie en Belgique — [Eurostat lfsi_sla_q](https://ec.europa.eu/eurostat/databrowser/view/lfsi_sla_q/default/table?lang=fr)

**Tableau 2 bis — Transitions annuelles des chômeurs BIT (Statbel, EFT longitudinale, 15-74 ans) : situation un an plus tard** [officiel, repris par la presse ; communiqués Statbel non consultables directement]

| Période | En emploi | Toujours au chômage | Inactifs | Toujours au chômage : Flandre | Wallonie | Bruxelles |
|---|---|---|---|---|---|---|
| T2 2023 → T2 2024 | 36,2 % (≈ 103 000 sur 284 000) | 36,0 % | 27,8 % | 27,3 % | 34,9 % | 51,6 % |
| T3 2023 → T3 2024 | 28,5 % | 44,5 % | 27,1 % | 38,4 % | 45,9 % | 52,7 % |
| T1 2024 → T1 2025 | n.d. | « près de la moitié » (titre du communiqué) | n.d. | n.d. | n.d. | n.d. |

- Transitions T2 2023 → T2 2024 (publiées le 12 septembre 2024) ; la ventilation régionale n'est donnée que pour la part restée au chômage — [Forum for the Future, reprise du communiqué Statbel](https://blog.forumforthefuture.be/fr/article/36-des-chomeurs-au-deuxieme-trimestre-2023-sont-au-travail-un-an-plus-tard/24312)
- Transitions T3 2023 → T3 2024 — [Business AM, 14/12/2024](https://fr.businessam.be/?p=131409)
- Entre 2023 et 2024 (moyenne annuelle) : un tiers des chômeurs ont trouvé un emploi, près de 120 000 (40 %) cherchaient toujours, 28 % sont devenus inactifs — [DH, 25/03/2025](https://www.dhnet.be/actu/belgique/2025/03/25/un-chomeur-sur-trois-a-trouve-un-emploi-entre-2023-et-2024-en-belgique-BY7744OT2ZABVKZSUSX6NXSMSQ/)
- Transitions T1 2024 → T1 2025 : « almost half of the unemployed in the first quarter of 2024 are still unemployed a year later » (titre seul ; détail non récupéré) — [Statbel, communiqué](https://statbel.fgov.be/en/news/almost-half-unemployed-first-quarter-2024-are-still-unemployed-year-later)

### Inferences
- Meilleur proxy disponible du « taux de retour à l'emploi » en Belgique francophone : la part des chômeurs BIT encore au chômage un an plus tard, seule transition ventilée par région. Elle est systématiquement plus élevée à Bruxelles (≈ 52 %) et en Wallonie (35-46 %) qu'en Flandre (27-38 %). Les transitions vers l'emploi (29-36 % en un an au niveau national) ne sont pas publiées par région dans les sources accessibles.
- Les deux régions francophones cumulent un taux de chômage BIT 2 à 3 fois supérieur à celui de la Flandre et une part de chômage de longue durée environ double : la difficulté côté demandeur est structurelle (durée) autant que conjoncturelle.
- La forte baisse de la part du chômage de longue durée entre 2024 et 2025 en Wallonie (43,5 % → 37,0 %) et dans le Hainaut (49,5 % → 39,3 %) précède la réforme de 2026 ; elle peut refléter un afflux d'entrées récentes (le chômage total monte) autant qu'une amélioration. À interpréter avec prudence (échantillons provinciaux réduits).
- Le taux de transition chômage → emploi (≈ 22-28 % par trimestre) n'existe qu'au niveau national : il n'y a pas de taux régional publié par Eurostat.

### Gaps
- Chiffres provinciaux infra-annuels : Statbel publie un tableau be.STAT par province et trimestre, mais la vue récupérée ne donnait que les régions ; les provinces ne sont donc documentées ici qu'en moyenne annuelle 2025.
- Les résultats EFT du T3 2026 n'étaient pas publiés (ou pas accessibles) au 22/11/2026.
- Page Statbel « Transitions sur le marché du travail » (transitions par région éventuelles) non consultable (captcha).

---

## 2. Belgique — Emplois vacants et taux de vacance par région ; chômeurs par poste vacant ; biais lieu de travail / lieu de résidence

### Takeaway
L'enquête trimestrielle de Statbel (Job Vacancy Survey) donne 133 881 emplois vacants en Belgique au T2 2026 (taux 3,26 %, neuvième baisse trimestrielle consécutive), avec des taux de 3,65 % en Flandre, 2,73 % en Wallonie et 2,66 % à Bruxelles. Rapporté aux chômeurs BIT, on obtient en 2025 environ 3,7 chômeurs par poste vacant en Wallonie, ~3,5 à Bruxelles et ~1,3 en Flandre (calculs propres) — mais les postes sont comptés au lieu de travail et environ un emploi bruxellois sur deux est occupé par un navetteur.

### Cited Findings
- T2 2026 : 133 881 emplois salariés vacants en Belgique, contre 140 462 au T1 2026 (−4,7 %) ; taux de vacance 3,26 % (3,42 % au T1) ; niveau le plus bas depuis le T4 2020 (115 557) ; neuvième recul trimestriel consécutif — [Brussels Times](https://www.brusselstimes.com/2313191/lowest-number-of-job-openings-recorded-in-the-second-quarter-of-this-year-since-2020) ; [Business AM](https://fr.businessam.be/les-offres-demploi-en-belgique-reculent-de-47-pour-cent/)
- T2 2026, taux de vacance par région : Flandre 3,65 %, Wallonie 2,73 %, Bruxelles 2,66 % (les effectifs régionaux ne sont pas repris par la presse) — [Brussels Times](https://www.brusselstimes.com/2313191/lowest-number-of-job-openings-recorded-in-the-second-quarter-of-this-year-since-2020)
- T2 2026 : taux de vacance 5,33 % dans les petites entreprises contre 2,96 % dans les moyennes et grandes ; 15,27 % pour les postes intérimaires ; 6,45 % dans l'horeca — [Business AM](https://fr.businessam.be/les-offres-demploi-en-belgique-reculent-de-47-pour-cent/)
- T2 2025 (communiqué Statbel, version indexée) : 65,21 % des emplois vacants en Région flamande, 22,08 % en Région wallonne, 12,71 % à Bruxelles ; taux de vacance 4,29 % (Flandre), 3,36 % (Bruxelles), 3,36 % (Wallonie) — [Statbel, Job vacancy](https://statbel.fgov.be/en/themes/work-training/labour-market/job-vacancy) (page non consultable directement lors de la collecte : chiffres repris du résumé de recherche)
- Série Eurostat (sections B à S, toutes tailles, non désaisonnalisé), Belgique : 171 946 (T4 2024), 170 382 (T1 2025), 163 562 (T2 2025), 159 613 (T3 2025), 145 896 (T4 2025) ; taux 4,1 % → 3,5 %. La table Eurostat s'arrête au T4 2025 (intitulé « 2001-2025 ») — [Eurostat jvs_q_nace2](https://ec.europa.eu/eurostat/databrowser/view/jvs_q_nace2/default/table?lang=fr)
- Wallonie, moyenne 2025 : 33 909 emplois vacants, taux 3,3 % (3,6 % en 2024) ; 29 901 postes fixes vacants (2,9 %) et 4 008 postes intérimaires (16,2 %) ; secteurs comptant le plus de postes vacants : santé humaine et action sociale (5 463), commerce (4 119), administration publique (3 746) — [IWEPS, fiche L001, juin 2026](https://www.iweps.be/wp-content/uploads/2026/06/L001-TX.VAC-062026_Full1.pdf)
- Comparaison régionale 2025 des taux de vacance selon l'IWEPS : 3,2 % en Wallonie, 3,3 % à Bruxelles, 4,3 % en Flandre (la même fiche affiche 3,3 % pour la Wallonie en titre : incohérence interne d'un dixième de point) — [IWEPS, fiche L001](https://www.iweps.be/wp-content/uploads/2026/06/L001-TX.VAC-062026_Full1.pdf)
- Série wallonne du taux de vacance : 2,1 % (2015), 2,8 % (2017), 2,4 % (2020), 3,5 % (2021), 3,8 % (2022), 3,6 % (2023), 3,6 % (2024), 3,3 % (2025) — [IWEPS, fiche L001](https://www.iweps.be/wp-content/uploads/2026/06/L001-TX.VAC-062026_Full1.pdf)
- Méthodologie : enquête trimestrielle auprès d'environ 11 000 entreprises ayant au moins un salarié, sections B à S de la NACE (agriculture exclue), panel rotatif stratifié par taille et secteur ; les entreprises répartissent postes occupés et vacants « selon la région de travail » ; date de référence = milieu du trimestre ; définition européenne du poste vacant (poste rémunéré nouvellement créé, non pourvu ou bientôt vacant, pour lequel l'employeur cherche activement un candidat hors de l'entreprise) ; aucune information sur la durée de vacance — [IWEPS, fiche L001](https://www.iweps.be/wp-content/uploads/2026/06/L001-TX.VAC-062026_Full1.pdf)
- Navetteurs : en 2022, 49,5 % des emplois situés à Bruxelles étaient occupés par des habitants d'une autre région (50,6 % en 2021), d'après Actiris/view.brussels — [DH, 17/04/2023](https://www.dhnet.be/regions/bruxelles/bruxelles-mobilite/2023/04/17/il-ny-a-jamais-eu-autant-de-navetteurs-flamands-et-wallons-a-bruxelles-infographie-OHJRZXUG5BFQZNWHOISXKKQVMI/)
- Navette sortante 2025 (EFT, 15-64 ans, milliers de résidents en emploi) : Bruxellois travaillant dans leur région 412,3 ; dans une autre région belge 85,0 ; à l'étranger 8,0. Wallons : 1 021,1 dans leur région ; 365,1 dans une autre région (dont Brabant wallon 89,9 et Hainaut 136,1) ; 74,0 à l'étranger (dont province de Luxembourg 38,2) — [Eurostat lfst_r_lfe2ecomm](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfe2ecomm/default/table?lang=fr)
- Offres connues des services publics de l'emploi (autre source, non comparable à l'enquête) : le Forem a diffusé 405 035 offres en 2025 (−24 % sur 2024 ; 59 % en intérim, 27,3 % en CDI) et 206 757 au 1er semestre 2026 (+6 % sur un an) — [Forem, bilan 2025](https://www.leforem.be/a-propos/espace-presse/communiques-presse/situation-demande-emploi-wallonie-bilan-2025.html) ; [Forem, juin 2026](https://www.leforem.be/a-propos/espace-presse/communiques-presse/situation-demande-emploi-wallonie-juin-2026.html)
- Bruxelles : entre octobre 2024 et septembre 2025, le nombre d'offres listées sur Actiris (y compris celles partagées par VDAB, Forem et Jobat) était inférieur de 39 % à la même période un an plus tôt (résumé de recherche d'une dépêche Belga, article non ouvert) — [Belga News Agency](https://www.belganewsagency.eu/brussels-job-vacancies-down-39-per-cent)

**Tableau 3 — Chômeurs par emploi vacant (calculs propres)**

| Territoire | Chômeurs BIT 2025 (Eurostat) | Emplois vacants | Ratio | Statut |
|---|---|---|---|---|
| Belgique | 339 300 | 159 863 (moyenne des 4 trimestres 2025, Eurostat) | 2,1 | calcul propre |
| Wallonie | 125 700 | 33 909 (moyenne 2025, IWEPS/Statbel) | 3,7 | calcul propre |
| Bruxelles | 73 700 | ≈ 20 800 (12,71 % × 163 562, T2 2025) | ≈ 3,5 | estimation |
| Flandre | 139 900 | ≈ 106 700 (65,21 % × 163 562, T2 2025) | ≈ 1,3 | estimation |
| Wallonie, inscrits Forem | 257 551 DEI (moyenne 2025) | 33 909 | 7,6 | calcul propre |

### Inferences
- Estimation T2 2026 (hypothèse : effectifs régionaux T2 2025 ajustés par le rapport des taux de vacance, puis calés sur le total national de 133 881) : ≈ 29 000 postes vacants en Wallonie, ≈ 16 000 à Bruxelles, ≈ 89 000 en Flandre. Avec des effectifs de chômeurs BIT proches de 2025 (taux T2 2026 quasi identiques), le ratio serait d'environ 4,4 en Wallonie, 4,6 à Bruxelles et 1,5 en Flandre. Ordres de grandeur, non officiels.
- Le ratio bruxellois sous-estime la concurrence réelle : les postes vacants sont localisés au lieu de travail, alors qu'environ la moitié des emplois bruxellois sont occupés par des navetteurs. Le chômeur bruxellois est donc en concurrence, pour les postes situés à Bruxelles, avec les actifs de Flandre et de Wallonie ; à l'inverse, 18 % des Bruxellois en emploi travaillent hors de Bruxelles (93 000 sur 505 300, calcul propre sur Eurostat 2025).
- Le ratio wallon avec les inscrits Forem (7,6) est gonflé par la catégorie des « librement inscrits », propre à la Wallonie ; il ne doit pas être comparé aux ratios BIT.

### Gaps
- Effectifs régionaux d'emplois vacants au T2 2026 et série trimestrielle régionale complète : publiés par Statbel (tableau du communiqué et be.STAT) mais non récupérables (captcha). À télécharger manuellement sur https://statbel.fgov.be/fr/themes/emploi-formation/marche-du-travail/emplois-vacants.
- Aucun chiffre postérieur à 2022 trouvé pour la part des emplois bruxellois occupés par des navetteurs (view.brussels publie des tableaux « population active occupée et emploi intérieur » à vérifier).
- Pas de taux de vacance par province.

---

## 3. Belgique — Demandeurs d'emploi inscrits, sorties vers l'emploi, durée d'inoccupation (Forem, Actiris) et réforme fédérale de 2026

### Takeaway
Fin septembre 2026 la Wallonie compte 261 858 demandeurs d'emploi inoccupés (taux de demande d'emploi ≈ 16 %), dont la moitié inoccupés depuis deux ans ou plus ; Bruxelles compte 102 550 chercheurs d'emploi (taux administratif 16,5 %). La limitation des allocations à deux ans (fins de droit depuis le 1er janvier 2026) a fait chuter le nombre de chômeurs indemnisés sans réduire le nombre d'inscrits : les personnes basculent vers les catégories « CPAS / inscrits obligatoires » et « librement inscrits », ce qui rend les séries administratives 2026 non comparables aux années antérieures.

### Cited Findings

**Wallonie (Forem)**
- Fin septembre 2026 : 261 858 chercheurs d'emploi inoccupés, −2,8 % sur un an, +0,3 % sur un mois ; 63 388 demandeurs d'allocations de chômage ou d'insertion (24,2 %), 20 807 jeunes en stage d'insertion, 61 416 inscrits obligatoirement, principalement à la demande des CPAS (23,5 %), 44,4 % librement inscrits ; évolution annuelle par âge : < 25 ans +1,8 %, 25-29 ans +5,6 %, 30-39 ans −3,7 %, 40-49 ans −3,6 %, 50 ans et plus −10,6 % — [DH/Belga, 28/10/2026](https://www.dhnet.be/dernieres-depeches/2026/10/28/baisse-annuelle-de-la-demande-demploi-en-wallonie-sauf-chez-les-jeunes-W3VBDRKC7BHN3A4VVV3EGKE36M/)
- Fin juin 2026 : 264 770 DEI (+6,6 % sur un an) ; taux de demande d'emploi 16 % de la population active ; durée d'inoccupation : 17 % depuis moins de 6 mois, 50 % depuis 2 ans et plus ; 39 % ont au plus un diplôme du secondaire du 2e degré ; 18 % ont moins de 25 ans, 24 % ont 50 ans et plus ; catégories : allocations 73 491 (−37,6 % sur un an), inscrits obligatoirement 42 164 (+49,9 %), stage d'insertion 14 204 (−42,3 %), librement inscrits 134 911 (+73,4 %) — [Forem, communiqué juin 2026](https://www.leforem.be/a-propos/espace-presse/communiques-presse/situation-demande-emploi-wallonie-juin-2026.html)
- Fin mars 2026 : 270 120 DEI, +11,5 % sur un an (résumé de recherche du communiqué) — [Forem, communiqué mars 2026](https://www.leforem.be/a-propos/espace-presse/communiques-presse/situation-demande-emploi-wallonie-mars-2026.html)
- Moyenne 2025 : 257 551 DEI (+9,6 % sur 2024), soit 15,6 % de la population active ; 21 % inoccupés depuis moins de 6 mois, 48 % depuis 2 ans et plus ; hausse 2025 par durée : < 1 an +3,7 %, 1-2 ans +9,7 %, ≥ 2 ans +14,2 % ; demandeurs d'allocations 120 530 (46,8 %), stage d'insertion 29 927, inscrits obligatoirement 28 226, librement inscrits 78 868 — [Forem, bilan 2025](https://www.leforem.be/a-propos/espace-presse/communiques-presse/situation-demande-emploi-wallonie-bilan-2025.html)
- Le Forem avertit que les chiffres « doivent être interprétés avec prudence » : depuis janvier 2022 les librement inscrits ne sortent plus automatiquement après trois mois ; depuis 2025 l'obligation de disponibilité est étendue jusqu'à 65 ans ; la réforme fédérale raccourcit les droits (maximum deux ans d'allocations de chômage, un an d'allocations d'insertion) et déplace les personnes d'une catégorie à l'autre — [Forem, communiqué juin 2026](https://www.leforem.be/a-propos/espace-presse/communiques-presse/situation-demande-emploi-wallonie-juin-2026.html)
- Liste 2026 des métiers en pénurie (publiée le 1er juillet 2026) : 144 métiers ; la distinction « métiers en pénurie / fonctions critiques » est remplacée par un indice de criticité global ; 69 nouveaux métiers ; construction 38 métiers, industrie technologique 19, santé et action sociale 19 (liste 2025 : 146 fonctions, dont 82 métiers en pénurie et 64 fonctions critiques) — [Forem, communiqué métiers en pénurie 2026](https://www.leforem.be/a-propos/communiques-presse/metiers-en-penurie-2026.html)
- Insertion après formation Forem (stagiaires sortis en 2024) : 63,8 % ont travaillé au moins un jour dans les 6 mois et 75 % dans les 12 mois ; taux le plus faible en informatique et télécoms (53 %) (résumé de recherche du document) — [Forem, analyse insertion des stagiaires 2024](https://www.leforem.be/documents/chiffres-et-analyses/analyses/analyse-insertion-stagiaires-2024.pdf)

**Bruxelles (Actiris)**
- Fin octobre 2026 : 102 550 chercheurs d'emploi inscrits, taux de chômage administratif 16,5 %, +6,6 % sur un an, +2 352 personnes (+2,3 %) sur un mois ; < 25 ans +15,9 % (+1 844), 25-49 ans +6,6 %, 50 ans et plus +2,1 % ; flux d'octobre : 10 835 entrées (7 105 réinscriptions, 3 730 nouvelles inscriptions) pour 8 483 sorties — [BX1, 06/11/2026](https://bx1.be/?p=839536) (la dépêche DH du 05/11/2026 titre sur octobre mais écrit « fin septembre » dans le corps du texte : [DH](https://www.dhnet.be/dernieres-depeches/2026/11/05/le-chomage-en-hausse-en-region-bruxelles-capitale-en-octobre-DH3T6EYBENDK5HJVX7MDO5SYNQ/))
- Sur un an, le nombre de chercheurs d'emploi bruxellois indemnisés a baissé de 56,5 % (−28 937) ; 37 564 inscrits sont usagers d'un CPAS (36,6 % du total, +97,3 % sur un an) ; Actiris indique que « la limitation temporelle des allocations n'entraîne pas une diminution du nombre total d'inscrits » — [DH, 05/11/2026](https://www.dhnet.be/dernieres-depeches/2026/11/05/le-chomage-en-hausse-en-region-bruxelles-capitale-en-octobre-DH3T6EYBENDK5HJVX7MDO5SYNQ/)

**Réforme fédérale (limitation des allocations dans le temps)**
- Base légale : loi du 18 juillet 2025 ; fins de droit par vagues : 1er janvier 2026 (vague 1, chômeurs depuis 20 ans et plus), 1er mars 2026 (vague 2, 8 à 20 ans), 1er avril 2026 (vague 3, moins de 8 ans), puis 1er juillet 2026 et, pour le groupe transitoire ayant moins de cinq ans de passé professionnel, entre le 1er juillet 2026 et le 1er juillet 2027 ; les nouvelles demandes introduites après le 28/02/2026 sont limitées d'emblée — [ONEM, réforme de l'assurance chômage](https://www.onem.be/index.php/reforme-de-la-reglementation-du-chomage) ; [ONEM, allocations avant le 1er mars 2026](https://www.onem.be/index.php/citoyens/chomage-complet/reforme-de-la-reglementation-du-chomage/jai-beneficie-dallocations-de-chomage-avant-le-1er-mars-2026.-mes-allocations-vont-elles-etre-limitees-dans-le-temps-)
- Monitoring ONEM au 31 mars 2026 : 198 198 chômeurs soumis à une limitation de leur droit ; 37 295 sorties pour fin de droit et 33 789 sorties volontaires avant l'échéance (résumé de recherche du document, non ouvert) — [ONEM, monitoring mars 2026](https://www.onem.be/file/cc73d96153bbd5448a56f19d925d05b1379c7f21/91c0ceb859f0b0a98bc971b7d1b5050d0bf6c6ed/monitoringfr202603-kerncijfers.pdf)
- Janvier-juillet 2026 (SPP Intégration sociale) : près de 119 000 personnes exclues, dont 53 500 en Wallonie, 33 000 en Flandre, 32 000 à Bruxelles et 500 en Communauté germanophone ; un peu moins de 47 000 (39,3 %) ont obtenu un revenu d'intégration : 44,6 % en Wallonie, 40,8 % à Bruxelles, 29,1 % en Flandre ; passage vers la mutuelle : près de 20 % en Flandre, environ 7 % en Wallonie et à Bruxelles ; retour à l'emploi au premier trimestre : 10,5 % en Flandre, 9,0 % en Wallonie, 7,5 % à Bruxelles — [La Libre, 03/09/2026](https://www.lalibre.be/belgique/2026/09/03/en-flandre-les-exclus-du-chomage-sont-plus-nombreux-quen-wallonie-ou-a-bruxelles-a-basculer-sur-la-mutuelle-VW3UVXHCRVABJPDPXFKZ7OFWYY/)
- Bilan à un an (octobre 2026) : 133 000 personnes exclues, dont la moitié perçoivent une aide du CPAS ; environ 170 000 chômeurs indemnisés en juillet 2026 contre environ 300 000 début 2025 ; environ 210 000 bénéficiaires du revenu d'intégration en avril contre environ 170 000 début 2025 (les deux courbes se sont croisées) ; économie attendue de près de 2 milliards d'euros — [RTBF, 15/10/2026](https://www.rtbf.be/article/11800770)
- Arrêt de la Cour constitutionnelle du 10 septembre 2026 : réouverture temporaire du droit pour les trois premières vagues (6 mois supplémentaires pour la vague 1, 4 pour la vague 2, 3 pour la vague 3) ; 87 744 personnes théoriquement concernées (données au 30 juin), dont 7 220 en maladie, pension ou décédées, 39 481 au revenu d'intégration et 41 043 pouvant à nouveau percevoir des allocations — [ONEM, réforme : chiffres](https://www.onem.be/index.php/statistiques/reforme-de-la-reglementation-du-chomage-chiffres)
- Actiris : 12,7 % des Bruxellois risquant de perdre leurs allocations ont trouvé un emploi en 2025 (résumé de recherche d'un article BX1, non ouvert) — [BX1](https://bx1.be/?p=791696)

**Listes de pénurie (côté employeur)**
- Bruxelles : la liste 2026 d'Actiris/view.brussels compte 103 fonctions critiques (éditions antérieures : 108, 112, 113 ; un article de février 2026 évoque 106) ; méthode : analyse statistique des offres (indice de tension inférieur à 1,5) complétée par la consultation des secteurs ; l'analyste financier sort de la liste, l'assistant juridique y entre (résumé de recherche, articles non ouverts) [non vérifié à la source] — [BX1](https://bx1.be/categories/news/actiris-liste-les-103-metiers-definis-comme-fonctions-critiques-a-bruxelles/) ; [Bruxelles Formation, rapport fonctions critiques 2024](https://www.bruxellesformation.brussels/wp-content/uploads/2025/11/Fonctions-critiques-2024.pdf)
- Wallonie : 144 métiers en pénurie en 2026 (voir ci-dessus) [officiel] — [Forem](https://www.leforem.be/a-propos/communiques-presse/metiers-en-penurie-2026.html)
- Insertion après formation à Bruxelles : taux de sortie vers l'emploi de 62,7 % à l'issue d'une formation professionnalisante (rapport annuel 2024 de Bruxelles Formation ; résumé de recherche) [non vérifié à la source] — [Bruxelles Formation, rapport annuel 2024](https://www.bruxellesformation.brussels/wp-content/uploads/2025/07/BF-Rapport_Annuel-2024.pdf)
- Le Forem a publié en août 2025 une étude « Insertion au travail des jeunes chercheurs d'emploi inscrits pour la première fois au Forem en 2024 » (titre repéré ; chiffres non récupérés) — [Forem, analyses](https://www.leforem.be/chiffres-et-analyses/analyses.html)

### Inferences
- En 2026, le nombre d'inscrits (Forem, Actiris) reste un indicateur de volume utilisable, mais sa ventilation par statut et le « taux de chômage administratif » ne sont plus comparables dans le temps : chute mécanique des indemnisés (−38 % en Wallonie en juin, −56,5 % à Bruxelles en octobre) compensée par les inscriptions via CPAS et les inscriptions libres. Pour une comparaison internationale, seul le chômage BIT (section 1) est robuste.
- L'arrêt de la Cour constitutionnelle (septembre 2026) va créer un nouveau mouvement en sens inverse fin 2026 (environ 41 000 réouvertures de droit possibles), d'où une rupture supplémentaire dans les séries de chômeurs indemnisés.
- Les taux de retour à l'emploi des exclus (7,5 % à 10,5 % en un trimestre) sont nettement inférieurs au taux de transition trimestriel moyen chômage → emploi de l'EFT (22-28 %), ce qui confirme que la population visée est très éloignée de l'emploi.

### Gaps
- Taux de sortie vers l'emploi des demandeurs d'emploi wallons (indicateur Forem) et durée moyenne d'inoccupation : non trouvés dans les communiqués consultés ; le Forem publie la répartition par tranches de durée mais pas de durée moyenne dans ses communiqués. Les données d'octobre 2026 du Forem n'étaient pas publiées au 22/11/2026.
- Actiris/view.brussels : taux de sortie vers l'emploi général, nombre d'offres reçues en 2025-2026 et durée d'inscription non trouvés (site non exploré en détail, quota de recherche épuisé).
- Indicateurs IWEPS de chômage administratif par province (fiche L007) non consultés.
- Ventilation ONEM des fins de droit par vague et par région : disponible en fichiers tableur sur la page ONEM, non téléchargée.

---

## 4. Belgique — Exigences linguistiques comme barrière (Bruxelles, Communauté germanophone)

### Takeaway
À Bruxelles, la connaissance du néerlandais est la barrière linguistique la mieux documentée : selon l'OCDE (2023), deux offres sur cinq reçues par Actiris exigent explicitement français et néerlandais, alors que 19 % seulement des chercheurs d'emploi belges francophones maîtrisent le néerlandais à un niveau avancé. Les chiffres disponibles sont toutefois anciens ou hétérogènes ; aucune statistique Actiris 2025-2026 n'a été trouvée.

### Cited Findings
- OCDE, « Promouvoir les talents à Bruxelles » (2023) : 2 offres sur 5 reçues par Actiris exigent explicitement des compétences en français et en néerlandais ; 17 % des offres publiées en ligne exigent un certain niveau de néerlandais en plus du français ; 19 % des chercheurs d'emploi belges francophones maîtrisent le néerlandais à un niveau avancé ; les exigences varient fortement selon les domaines professionnels — [OCDE, rapport complet](https://www.oecd.org/fr/publications/promouvoir-les-talents-a-bruxelles-belgique_c1f728f8-fr/full-report/component-9)
- Donnée Actiris plus ancienne (offres reçues en 2017, 34 808 offres) : 52 % exigeaient des connaissances linguistiques et, dans 80 % de ces cas, le néerlandais (chiffre issu d'un résumé de recherche ; l'article source exact n'a pas été ouvert, candidat probable ci-contre) — [RTBF, « le néerlandais est un passeport pour l'emploi à Bruxelles »](https://www.rtbf.be/article/une-evidence-le-neerlandais-est-un-passeport-pour-l-emploi-a-bruxelles-9903568)
- Un test linguistique obligatoire pour les demandeurs d'emploi bruxellois est annoncé en 2026 (titre d'article, contenu non vérifié) — [RTBF](https://www.rtbf.be/article/un-test-linguistique-bientot-obligatoire-pour-les-demandeurs-d-emploi-a-bruxelles-11685177)
- Communauté germanophone : le service public de l'emploi compétent est l'Arbeitsamt der Deutschsprachigen Gemeinschaft (ADG), qui couvre neuf communes autour d'Eupen et Saint-Vith et travaille en allemand — [Frontaliers Grand Est](https://frontaliers-grandest.eu/de/startseite/arbeitsuchende/finden-einen-job-in-belgien/gut-zu-wissen/der-arbeitsmarkt-in-belgien)
- Environ 500 personnes de la Communauté germanophone ont été exclues du chômage entre janvier et juillet 2026, dont 47,9 % ont obtenu un revenu d'intégration — [La Libre, 03/09/2026](https://www.lalibre.be/belgique/2026/09/03/en-flandre-les-exclus-du-chomage-sont-plus-nombreux-quen-wallonie-ou-a-bruxelles-a-basculer-sur-la-mutuelle-VW3UVXHCRVABJPDPXFKZ7OFWYY/)

### Inferences
- L'écart entre la part des offres exigeant le bilinguisme (≈ 40 % des offres Actiris) et la part des chercheurs d'emploi francophones réellement bilingues (≈ 19 %) suggère qu'une large fraction des postes vacants bruxellois est de fait inaccessible aux chômeurs francophones unilingues, ce qui aggrave le ratio chômeurs/postes calculé en section 2.

### Gaps
- Pas de chiffre Actiris/view.brussels récent (2024-2026) sur la part des offres exigeant le néerlandais ou l'anglais.
- Communauté germanophone : taux de chômage 2026 de l'ADG, exigences d'allemand dans les offres et effet de la proximité du Luxembourg et de l'Allemagne non documentés (un chiffre de 2 392 chômeurs complets « fin mars », non daté, a été vu sur brf.be mais n'est pas exploitable).
- Aucune donnée trouvée sur les exigences linguistiques dans les offres wallonnes.

---

## 5. Belgique — Difficulté des « outsiders » : écart d'emploi selon le pays de naissance, monitoring socio-économique, tests de correspondance

### Takeaway
En 2025, le taux d'emploi (20-64 ans) des personnes nées hors UE est de 60,7 % en Belgique contre 75,0 % pour les natifs (écart de 14,3 points) ; il tombe à 57,5 % en Wallonie et 55,9 % à Bruxelles. Le niveau belge est le plus bas des pays voisins comparés, même si l'écart natifs/non-UE est du même ordre qu'en France, en Allemagne et aux Pays-Bas.

### Cited Findings

**Tableau 4 — Taux d'emploi des 20-64 ans selon le pays de naissance, 2025 (%)**

| Territoire | Natifs | Nés dans un autre pays de l'UE | Nés hors UE-27 | Écart natifs − nés hors UE (points) |
|---|---|---|---|---|
| Belgique | 75,0 | 74,3 | 60,7 | 14,3 |
| Bruxelles | 63,8 | 76,3 | 55,9 | 7,9 |
| Flandre | 79,0 | 76,5 | 65,6 | 13,4 |
| Wallonie | 69,5 | 69,0 | 57,5 | 12,0 |
| Luxembourg (pays) | 69,7 | 79,8 | 70,1 | −0,4 |
| UE-27 | 77,2 | 77,5 | 68,6 | 8,6 |
| France | 77,2 | 72,6 | 63,1 | 14,1 |
| Allemagne | 84,0 | 81,6 | 69,0 | 15,0 |
| Pays-Bas | 85,9 | 82,0 | 69,8 | 16,1 |

- Taux d'emploi par pays de naissance et région NUTS 2, 2025 (2024 : nés hors UE 59,4 % en Belgique, 56,4 % à Bruxelles, 64,5 % en Flandre, 53,9 % en Wallonie) — [Eurostat lfst_r_lfe2emprc](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfe2emprc/default/table?lang=fr)
- Taux d'emploi par pays de naissance, comparaison nationale 2025 — [Eurostat lfsa_ergacob](https://ec.europa.eu/eurostat/databrowser/view/lfsa_ergacob/default/table?lang=fr)
- Taux de chômage des 20-64 ans par pays de naissance, 2025 : Belgique 4,6 % (natifs), 7,0 % (nés UE), 12,6 % (nés hors UE) ; UE-27 5,1 % / 6,5 % / 10,5 % — [Eurostat lfsa_urgacob](https://ec.europa.eu/eurostat/databrowser/view/lfsa_urgacob/default/table?lang=fr)
- Monitoring socio-économique (SPF Emploi et Unia) : la dernière édition identifiée est la 5e (2022) ; elle conclut que la position des personnes d'origine étrangère s'est améliorée mais qu'à niveau de qualification égal elles trouvent moins facilement un emploi — [SPF Emploi, Monitoring socioéconomique 2022](https://emploi.belgique.be/fr/publications/monitoring-socioeconomique-2022-marche-du-travail-et-origine)
- Tests de correspondance — méta-analyse de Lippens, Vermeiren et Baert (Université de Gand, IZA DP 14966, décembre 2021) portant sur un registre quasi exhaustif d'expériences publiées de 2005 à 2020 (143 expériences sur l'origine ethnique ou nationale) : les candidats d'origine arabe, maghrébine ou moyen-orientale ont en moyenne environ 46 % de chances en moins de recevoir une réponse positive (ratio poolé ≈ 0,54) ; la discrimination ethnique à l'embauche a diminué en Europe sur la période ; la discrimination selon l'âge est plus marquée en Europe (essentiellement Belgique, France, Royaume-Uni) qu'aux États-Unis — [IZA DP 14966](https://docs.iza.org/dp14966.pdf)
- Test de correspondance en Flandre (752 candidatures fictives de jeunes sortant de l'école, Baert et co-auteurs) : la discrimination envers les candidats au nom turc diminue lorsque le métier est en pénurie (résumé de recherche de l'article) — [Baert et al., « Is there less discrimination in occupations where recruitment is difficult? »](https://typeset.io/pdf/is-there-less-discrimination-in-occupations-where-27xbfntl93.pdf)

### Inferences
- L'affirmation « la Belgique est parmi les pires de l'OCDE » est exacte pour le niveau du taux d'emploi des personnes nées hors UE (60,7 %, soit 8 points sous la moyenne UE), moins pour l'écart avec les natifs, comparable à celui des voisins.
- L'écart est faible à Bruxelles (7,9 points) uniquement parce que le taux d'emploi des natifs bruxellois est lui-même très bas (63,8 %).
- Le chiffre de −46 % est une moyenne internationale et non une estimation propre à la Belgique francophone ; il n'existe pas, dans les sources consultées, de test de correspondance récent spécifique à la Wallonie.

### Gaps
- Existence d'une édition 2024 ou 2025 du Monitoring socio-économique non confirmée ; ses taux d'emploi par origine (et non par pays de naissance) et par région n'ont donc pas pu être relevés.
- Tests de correspondance propres à Bruxelles (tests de situation régionaux) et résultats chiffrés par région non trouvés.
- Comparaison OCDE (hors Europe) non effectuée : seules les données Eurostat ont été extraites.

---

## 6. Belgique — Flux frontaliers (Luxembourg, France, Allemagne)

### Takeaway
Au 30 juin 2025, 62 172 résidents wallons travaillent dans un pays voisin, dont 47 602 au Grand-Duché de Luxembourg (77 %), et 34 363 frontaliers viennent travailler en Wallonie, à 97 % depuis la France. Le chiffre exploratoire de « ~50 000 Wallons au Luxembourg » est donc légèrement surestimé selon la source belge (INAMI).

### Cited Findings

**Tableau 5 — Travailleurs frontaliers au 30 juin 2025 (INAMI)**

| | Luxembourg | France | Allemagne | Pays-Bas | Total |
|---|---|---|---|---|---|
| Sortants résidant en Wallonie | 47 602 | 7 399 | 6 310 | 861 | 62 172 |
| Sortants résidant en Flandre | 837 | 888 | 388 | 20 499 | 22 612 |
| Sortants résidant à Bruxelles | 162 | 295 | 84 | 175 | 716 |
| Sortants, Belgique | 48 601 | 8 582 | 6 782 | 21 535 | 85 500 |
| Entrants travaillant en Wallonie | 355 | 33 419 | 490 | 99 | 34 363 |
| Entrants travaillant en Flandre | 40 | 6 068 | 400 | 10 167 | 16 675 |
| Entrants travaillant à Bruxelles | 53 | 481 | 25 | 270 | 829 |
| Entrants, Belgique | 448 | 39 968 | 915 | 10 536 | 51 867 |

- Tableau complet ; les sortants wallons représentent 7 % des salariés résidant en Wallonie et 72,7 % des frontaliers sortants belges ; le flux entrant en Wallonie équivaut à 55 % du flux sortant — [IWEPS, fiche L019, septembre 2026](https://www.iweps.be/wp-content/uploads/2017/01/L019-TRAV.FRONT_.PAYS-092026_Full1.pdf)
- Limites de la source : données INAMI non exhaustives, localisation selon le bureau d'inscription, sous-estimation probable des sortants vers l'Allemagne (assurés privés), frontaliers français travaillant en Flandre parfois comptés à Mouscron — [IWEPS, fiche L019](https://www.iweps.be/wp-content/uploads/2017/01/L019-TRAV.FRONT_.PAYS-092026_Full1.pdf)
- Mesure EFT (2025, 15-64 ans) : 74 000 résidents wallons travaillent à l'étranger, dont 38 200 habitants de la province de Luxembourg, 17 400 de Liège et 14 800 du Hainaut — [Eurostat lfst_r_lfe2ecomm](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfe2ecomm/default/table?lang=fr)
- Vu du Luxembourg (comptes nationaux STATEC) : en 2023, 22,7 % des 225 840 frontaliers salariés entrants résidaient en Belgique (26,6 % en 2005) — [STATEC, Regards n°01, mars 2026](https://statistiques.public.lu/dam-assets/catalogue-publications/regards/2026/regards-frontaliers-120326-03.pdf)

### Inferences
- 22,7 % × 225 840 ≈ 51 300 frontaliers résidant en Belgique selon le STATEC (2023), contre 48 601 selon l'INAMI (mi-2025) : l'écart de 5 % tient aux sources (sécurité sociale luxembourgeoise contre organismes assureurs belges) et aux dates.
- Dans la province de Luxembourg, 38 200 résidents travaillent à l'étranger pour 74 300 travaillant dans la région wallonne (Eurostat 2025) : environ un actif occupé sur trois dépend d'un emploi étranger, ce qui relativise le taux de chômage provincial (6,7 %) comme mesure de la demande locale de travail.

### Gaps
- Frontaliers par province wallonne de résidence et par pays (détail INAMI par arrondissement) non relevé.
- Données INAMI au 30 juin 2026 non publiées dans la fiche IWEPS (prochaine mise à jour annoncée pour juin 2027).

---

## 7. Luxembourg — Chômage BIT contre chômage enregistré ADEM ; demandeurs d'emploi inscrits et durée d'inscription

### Takeaway
Deux taux coexistent : le taux harmonisé BIT d'Eurostat (7,1 % au T2 2026, 7,3 % en septembre 2026, environ 26 000 chômeurs) et le taux « ADEM/STATEC » fondé sur les inscrits résidents disponibles (6,4 % en octobre 2026, 20 435 personnes). Fin octobre 2026, 38,8 % des demandeurs d'emploi résidents disponibles sont inscrits depuis 12 mois ou plus.

### Cited Findings
- Taux de chômage harmonisé (EFT, désaisonnalisé, 15-74 ans) : 6,0 % au T3 2025, 7,2 % au T4 2025, 7,2 % au T1 2026, 7,1 % au T2 2026 (25 000 chômeurs) ; mensuel : 7,1 % en juillet 2026, 7,3 % en août et en septembre 2026 (26 000 chômeurs) ; jeunes de 15-24 ans : 19,5 % au T2 2026 — [Eurostat une_rt_q](https://ec.europa.eu/eurostat/databrowser/view/une_rt_q/default/table?lang=fr) ; [Eurostat une_rt_m](https://ec.europa.eu/eurostat/databrowser/view/une_rt_m/default/table?lang=fr)
- Moyenne annuelle 2025 (EFT) : taux de chômage 6,5 % (6,4 % en 2024), 22 800 chômeurs, taux d'emploi 20-64 ans 73,6 % (74,2 % en 2024), part du chômage ≥ 12 mois 30,7 % (25,4 % en 2024), soit 7 000 personnes — [Eurostat lfst_r_lfu3rt](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfu3rt/default/table?lang=fr) ; [Eurostat lfst_r_lfu2ltu](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfu2ltu/default/table?lang=fr)
- Octobre 2026 (ADEM, publié le 20/11/2026) : 20 435 demandeurs d'emploi résidents disponibles (+9,2 % sur un an) ; taux de chômage désaisonnalisé calculé par le STATEC « stable à 6,4 % » ; 3 256 nouvelles inscriptions de résidents ; 4 489 résidents en mesure pour l'emploi (+2,1 %) ; 4 471 demandeurs non-résidents (+24,9 %), dont 2 017 inscrits spontanément sans droit à une aide (+49,5 %) ; diplômés du supérieur +12,9 % sur un an, moins qualifiés +5,9 %, 16-29 ans +15,3 %, 45-64 ans +6,8 % — [Gouvernement.lu, évolution du chômage en octobre 2026](https://gouvernement.lu/fr/actualites/toutes_actualites/communiques/2026/11-novembre/20-chomage-octobre.html)
- Septembre 2026 : 20 269 résidents disponibles (+7,1 %), taux 6,5 % ; 9 583 résidents bénéficiaires de l'indemnité de chômage complet (−7,1 % sur un an), soit moins de la moitié des inscrits disponibles ; définition du taux : rapport entre les demandeurs d'emploi résidents disponibles (inscrits, ni en emploi, ni en mesure, ni en congé de maladie ou de maternité à la date du relevé) et la population active résidente — [ADEM, communiqué de presse septembre 2026](https://gouvernement.lu/dam-assets/images-documents/actualites/2026/10-octobre/20-adem-chomage/communiqu-de-presse-sept-2026-chiffres-cls-adem.pdf)
- Série mensuelle 2026 des résidents disponibles (open data ADEM, valeurs révisées) : 21 255 (janvier, record), 21 038 (février), 20 444 (mars), 20 116 (avril), 19 650 (mai), 19 619 (juin), 19 943 (juillet), 20 136 (août), 20 262 (septembre), 20 435 (octobre) ; pour comparaison 18 720 en octobre 2025, 18 293 en octobre 2024, 16 927 en octobre 2023, 14 669 en octobre 2022, 15 036 en octobre 2019 — [data.public.lu, Chiffres-clés de l'ADEM](https://data.public.lu/fr/datasets/chiffres-cles-de-ladem/)

**Tableau 6 — Profil des 20 435 demandeurs d'emploi résidents disponibles au 31 octobre 2026 (open data ADEM, agrégation propre)**

| Critère | Répartition |
|---|---|
| Durée d'inscription | < 4 mois 33,9 % (6 930) ; 4-6 mois 12,2 % (2 488) ; 7-11 mois 15,1 % (3 080) ; 12 mois et plus 38,8 % (7 937) |
| Durée d'inactivité | < 4 mois 39,5 % ; 4-6 mois 14,0 % ; 7-11 mois 16,6 % ; 12 mois et plus 29,8 % (6 093) |
| Diplôme | secondaire inférieur 35,6 % ; secondaire supérieur 31,2 % ; supérieur 33,2 % (6 791, contre 6 014 un an plus tôt) |
| Âge | < 30 ans 20,9 % (4 263) ; 30-44 ans 38,5 % ; 45 ans et plus 40,7 % |
| Statut spécifique | aucun 83,2 % ; capacité de travail réduite 8,5 % ; salarié handicapé 6,9 % ; les deux 1,4 % |
| Nationalité | Luxembourg 36,2 % ; hors UE-27 23,1 % (4 715) ; Portugal 19,1 % ; France 6,8 % ; Italie 4,1 % ; Belgique 2,2 % ; Allemagne 1,4 % ; autres UE 7,1 % |

- Source des fichiers (de-dispo-profils.csv, de-age-duree.csv, de-nationalite.csv, mis à jour le 20/11/2026) — [data.public.lu, Chiffres-clés de l'ADEM](https://data.public.lu/fr/datasets/chiffres-cles-de-ladem/)
- Part des inscrits depuis 12 mois ou plus aux mois d'octobre : 41,6 % (2019), 41,6 % (2022), 37,1 % (2023), 38,9 % (2024), 39,9 % (2025), 38,8 % (2026) ; en effectifs 6 262 (2019) → 7 937 (2026) — [data.public.lu, Chiffres-clés de l'ADEM](https://data.public.lu/fr/datasets/chiffres-cles-de-ladem/)
- Mai 2026 : taux BIT de 6,9 % contre 5,9 % un an plus tôt, taux ADEM de 6,2 % (note de la Chambre des salariés de juillet 2026, vue en résumé de recherche seulement) — [CSL, Econews 3/2026](https://www.lesfrontaliers.lu/wp-content/uploads/2026/08/Econews-3-2026-2.pdf)
- Sous-emploi élargi (labour market slack, désaisonnalisé) : 16,0 % de la population active élargie au T2 2026 (14,8 % au T1), contre 13,5 % en Belgique ; composantes T2 2026 : chômage 6,6 %, temps partiel sous-employé 3,0 %, cherchant mais non disponibles 2,9 %, disponibles ne cherchant pas 3,5 % — [Eurostat lfsi_sla_q](https://ec.europa.eu/eurostat/databrowser/view/lfsi_sla_q/default/table?lang=fr)
- Rapport annuel ADEM 2025 [officiel] : les chômeurs de longue durée (inscrits depuis 12 mois ou plus) représentent en moyenne 40 % des demandeurs d'emploi résidents disponibles en 2025, un point de plus que le minimum de 39 % de 2023 et 2024 ; la part des demandeurs dont l'inactivité dépasse 12 mois est de 29 % ; les demandeurs ayant un statut spécifique (salarié handicapé, capacité de travail réduite) représentent un tiers des chômeurs de longue durée ; 26 125 personnes ont bénéficié de l'indemnité de chômage complet en 2025 (25 367 en 2024), pour une durée moyenne d'indemnisation de 6,2 mois (6,4 en 2024) ; 42 417 nouvelles inscriptions et 37 794 dossiers clôturés en 2025 — [ADEM, rapport annuel 2025](https://adem.public.lu/dam-assets/fr/publications/adem/2026/ra-adem-2025/ra-adem-2025.pdf)
- Prévisions STATEC (projections d'octobre 2026) : taux de chômage 6,3 % en 2026 et 6,3 % en 2027 — [ADEM, présentation au comité de suivi tripartite du 20/10/2026](https://gouvernement.lu/dam-assets/images-documents/actualites/2026/10-octobre/20-reunion-tripartite/docs/20261020-runion-comit-de-suivi-tripartite-adem-vf.pdf)

### Inferences
- Le chiffre exploratoire « 7,1 % mi-2026 » est exact pour le taux BIT/Eurostat du T2 2026 ; le « ~6 % ADEM » correspond en réalité à 6,2-6,5 % en 2026 (6,4 % en juin et octobre, 6,5 % en août-septembre).
- Pourquoi les deux taux diffèrent (raisonnement à partir des définitions, non d'une note officielle) : (a) le taux ADEM ne compte que les inscrits résidents « disponibles » et exclut les 4 489 résidents en mesure pour l'emploi ainsi que les chômeurs non inscrits — l'inscription est peu incitative pour qui n'a pas droit à l'indemnité (jeunes diplômés, nouveaux arrivants, conjoints), et moins de la moitié des inscrits sont indemnisés ; (b) le taux BIT vient d'une enquête par sondage auprès des ménages (recherche active dans les 4 semaines, disponibilité sous 2 semaines), avec une forte volatilité trimestrielle sur un petit pays (6,0 % puis 7,2 % entre T3 et T4 2025). L'écart d'environ 0,7-0,9 point représente quelque 5 000 à 6 000 personnes (26 000 chômeurs BIT contre 20 400 inscrits disponibles).
- Si l'on ajoute aux inscrits disponibles les résidents en mesure (20 435 + 4 489 = 24 924), on retrouve à peu près le niveau du chômage BIT : les deux sources sont cohérentes en ordre de grandeur.

### Gaps
- Note méthodologique officielle du STATEC expliquant l'écart BIT/ADEM : non trouvée (quota de recherche épuisé).
- Durée moyenne ou médiane d'inscription à l'ADEM : non publiée dans les chiffres-clés (seulement des tranches).
- Le communiqué ADEM d'octobre 2026 en PDF (tableau détaillé) n'a pas été ouvert ; les valeurs proviennent de la page gouvernement.lu et de l'open data.

---

## 8. Luxembourg — Postes vacants : flux et stock ADEM, taux de vacance Eurostat, méthodologie réelle, obligation de déclaration

### Takeaway
La statistique luxembourgeoise des emplois vacants transmise à Eurostat est « entièrement compilée à partir de registres administratifs » (postes déclarés à l'ADEM, postes occupés de l'IGSS) : ce n'est pas une enquête, ce qui confirme le soupçon initial. Fin octobre 2026 le stock est de 6 793 postes (3 236 déclarés dans le mois), soit 3,0 demandeurs d'emploi résidents disponibles par poste ; le taux de vacance Eurostat (1,2 % au T4 2025) est le reflet de cette source partielle et n'est pas comparable aux taux d'enquête des autres pays.

### Cited Findings
- Métadonnées nationales Eurostat : « The job vacancy statistics in Luxembourg are entirely compiled via administrative records » ; sources : ADEM pour les postes vacants, IGSS pour les postes occupés ; couverture : sections A à S de la NACE, entreprises d'au moins un salarié, tout le territoire ; données mensuelles agrégées en trimestres ; aucune estimation du taux de couverture ni correction pour les postes non déclarés n'est mentionnée ; seule sous-couverture signalée : les entreprises sans code NACE — [Eurostat, rapport qualité JVS Luxembourg](https://ec.europa.eu/eurostat/cache/metadata/EN/jvs_esqrs_lu.htm)
- Série Eurostat (sections B à S, non désaisonnalisé) : postes vacants 6 127 (T4 2024), 6 726 (T1 2025), 6 938 (T2 2025), 6 515 (T3 2025), 6 101 (T4 2025) ; postes occupés 494 168 au T4 2025 ; taux de vacance 1,2 % / 1,4 % / 1,4 % / 1,3 % / 1,2 % (Belgique : 3,5 % au T4 2025). Dernier point disponible : T4 2025 — [Eurostat jvs_q_nace2](https://ec.europa.eu/eurostat/databrowser/view/jvs_q_nace2/default/table?lang=fr)
- Octobre 2026 : 3 236 nouveaux postes vacants déclarés à l'ADEM (+3,0 % sur un an) ; stock de 6 793 postes au 31 octobre (−5,9 % sur un an) — [Gouvernement.lu, octobre 2026](https://gouvernement.lu/fr/actualites/toutes_actualites/communiques/2026/11-novembre/20-chomage-octobre.html)
- Septembre 2026 : 3 300 postes déclarés (−1,5 %), stock de 6 632 (−0,5 %) — [ADEM, communiqué septembre 2026](https://gouvernement.lu/dam-assets/images-documents/actualites/2026/10-octobre/20-adem-chomage/communiqu-de-presse-sept-2026-chiffres-cls-adem.pdf)

**Tableau 7 — ADEM : stock de postes vacants en fin de mois (toutes natures : emploi, intérim, mesure) et ratio demandeurs résidents disponibles / poste (open data, calculs propres)**

| Mois | DE résidents disponibles | Postes déclarés dans le mois | Stock fin de mois | DE par poste |
|---|---|---|---|---|
| Octobre 2019 | 15 036 | 3 193 | 7 240 | 2,1 |
| Octobre 2022 | 14 669 | 3 284 | 13 033 | 1,1 |
| Octobre 2024 | 18 293 | 3 170 | 6 698 | 2,7 |
| Octobre 2025 | 18 720 | 3 141 | 7 218 | 2,6 |
| Janvier 2026 | 21 255 | 3 383 | 5 977 | 3,6 |
| Avril 2026 | 20 116 | 3 052 | 7 448 | 2,7 |
| Juillet 2026 | 19 943 | 3 754 | 7 183 | 2,8 |
| Août 2026 | 20 136 | 2 768 | 6 715 | 3,0 |
| Septembre 2026 | 20 262 | 3 300 | 6 632 | 3,1 |
| Octobre 2026 | 20 435 | 3 236 | 6 793 | 3,0 |

- Fichiers offres-series.csv et de-age-duree.csv (mise à jour du 20/11/2026) — [data.public.lu, Chiffres-clés de l'ADEM](https://data.public.lu/fr/datasets/chiffres-cles-de-ladem/)
- Postes « emploi » (hors intérim et mesures) déclarés par an : 31 928 (2019), 26 101 (2020), 34 803 (2021), 38 632 (2022), 33 792 (2023), 32 240 (2024), 32 571 (2025), 29 571 (janvier-octobre 2026) ; stock moyen : 6 387 (2019), 10 730 (2022), 8 455 (2023), 6 500 (2024), 6 066 (2025), 6 358 (2026) — [data.public.lu, Chiffres-clés de l'ADEM](https://data.public.lu/fr/datasets/chiffres-cles-de-ladem/)
- Obligation légale : tout employeur qui souhaite embaucher « doit introduire une déclaration de poste vacant auprès de l'ADEM », « avant toute publication dans la presse ou par tout autre moyen de communication » ; références citées par la page : Code du travail (la version lue mentionne « Livre V, Titre VI, Chapitre II » ; les sources secondaires citent l'article L. 622-4 — référence exacte à vérifier sur Legilux) et loi modifiée du 18 janvier 2012 portant création de l'ADEM ; pour l'embauche d'un ressortissant de pays tiers, test du marché du travail : l'ADEM dispose de 7 jours ouvrables pour vérifier la disponibilité de demandeurs inscrits (certificat sous 5 jours ouvrables pour les métiers en très forte pénurie) — [Guichet.lu, déclaration de poste vacant](https://guichet.public.lu/fr/entreprises/ressources-humaines/recrutement/recherche-candidat/vacance-poste-adem.html)
- Sanctions : amende d'ordre de 251 à 2 500 euros selon un site juridique commercial (non vérifié sur Legilux) — [Pixie.lu](https://www.pixie.lu/corpus/rh/75-0072/la-declaration-des-postes-vacants-a-l-adem-est-elle-obligatoire/)
- Respect de l'obligation : la Chambre de commerce note dans un avis que « bon nombre d'employeurs semblent réticents à déclarer les postes vacants » (sans pourcentage ; avis vu en résumé de recherche) — [Chambre de commerce, avis](https://www.cc.lu/fileadmin/user_upload/tx_ccavis/3866_3759_ADEM_PL_3759ZCH.pdf)
- **Taux de déclaration officiel [officiel, ADEM]** : « selon l'article L. 622-5 du Code du travail, chaque poste vacant doit être déclaré à l'ADEM. Dans les faits, ce chiffre avoisine les 25 %, relativement stable depuis des années » (rapport postes déclarés / recrutements réels de l'IGSS) ; l'ADEM précise que ce taux est à interpréter avec prudence (recrutements sans vacance réelle, par exemple lors d'un changement de forme juridique ; employeurs déclarant un seul poste pour plusieurs embauches) et que le secteur public (sections O et P), non soumis à l'obligation, est exclu du calcul — [ADEM, rapport annuel 2025](https://adem.public.lu/dam-assets/fr/publications/adem/2026/ra-adem-2025/ra-adem-2025.pdf) ; [ADEM, rapport annuel 2024](https://adem.public.lu/dam-assets/fr/publications/adem/2025/ra-adem-2024/ra-adem-2024.pdf)
- Taux de déclaration par secteur en 2024 (postes déclarés / recrutements réels) : information et communication 34 %, activités spécialisées, scientifiques et techniques 34 %, services administratifs et de soutien 28 %, activités financières et d'assurance 27 %, santé et action sociale 25 %, industrie 24 %, transports 21 %, horeca 21 %, construction 17 %, commerce 13 %, autres 16 % [officiel] — [ADEM, rapport annuel 2024](https://adem.public.lu/dam-assets/fr/publications/adem/2025/ra-adem-2024/ra-adem-2024.pdf)
- Total des postes déclarés à l'ADEM par an (toutes natures) : 40 464 (2018), 39 008 (2019), 33 264 (2020), 42 745 (2021), 46 926 (2022), 39 022 (2023), 36 707 (2024) ; en 2025 : 32 571 emplois + 2 240 intérim + 2 173 mesures ; stock fin décembre 2025 : 5 472 postes pour 21 090 demandeurs résidents disponibles (5 935 pour 19 532 fin 2024) ; environ la moitié des annonces fait l'objet d'une parution publique (46 % en décembre 2024) [officiel] — [ADEM, rapport annuel 2025](https://adem.public.lu/dam-assets/fr/publications/adem/2026/ra-adem-2025/ra-adem-2025.pdf) ; [ADEM, rapport annuel 2024](https://adem.public.lu/dam-assets/fr/publications/adem/2025/ra-adem-2024/ra-adem-2024.pdf)
- Offres sans assignation possible (aucun demandeur inscrit ne possède les compétences demandées ; offres non publiques uniquement) : 25 % en 2024, 24 % en 2025 ; les employeurs ne font un retour que sur 41 % des assignations [officiel] — [ADEM, rapport annuel 2025](https://adem.public.lu/dam-assets/fr/publications/adem/2026/ra-adem-2025/ra-adem-2025.pdf)
- Recrutements de juin 2024 à juin 2025 : 143 200 (141 580 un an plus tôt), « un niveau inférieur à ceux observés sur la période 2021-2023 » ; l'ADEM juge que la légère progression « ne permet pas de conclure à une véritable reprise du marché du travail » [officiel] — [ADEM, rapport annuel 2025](https://adem.public.lu/dam-assets/fr/publications/adem/2026/ra-adem-2025/ra-adem-2025.pdf)
- Recrutements observés par la sécurité sociale (IGSS, emploi salarié non intérimaire) : 143 490 recrutements et 136 450 fins de contrat entre janvier 2025 et janvier 2026 (141 790 et 137 480 l'année précédente ; pic de 154 180 recrutements en 2022-2023) — [ADEM, présentation tripartite du 20/10/2026](https://gouvernement.lu/dam-assets/images-documents/actualites/2026/10-octobre/20-reunion-tripartite/docs/20261020-runion-comit-de-suivi-tripartite-adem-vf.pdf)

### Inferences
- Vérification du chiffre exploratoire « ~3,5 chômeurs résidents par poste vacant (23 000-25 000 chômeurs, ~6 700 postes, Eurostat) » : confirmé en ordre de grandeur. Moyenne 2025 : 22 800 chômeurs BIT / 6 570 postes (moyenne des quatre trimestres Eurostat) = 3,5. En 2026 : environ 25 000-26 000 chômeurs BIT pour 6 600-6 800 postes ADEM = 3,7 à 3,9. Avec la mesure ADEM stricte (résidents disponibles / stock) : 3,0 en octobre 2026. Au sens large (résidents disponibles + résidents en mesure + non-résidents inscrits = 29 395) : 4,3.
- Taux de déclaration : mon calcul propre (32 571 postes « emploi » déclarés en 2025 pour 143 490 recrutements salariés non intérimaires, soit environ 23 %) recoupe le chiffre officiel de l'ADEM (« avoisine les 25 % »). Environ trois recrutements sur quatre ne donnent donc pas lieu à une déclaration de poste vacant, malgré l'obligation légale ; dans la finance et les activités spécialisées (où se situent les postes comptables) le taux n'est que de 27 à 34 %.
- Ordre de grandeur corrigé (calcul propre, hypothèse forte : sous-déclaration uniforme) : si le stock ADEM ne représentait qu'un quart des postes réellement ouverts, le ratio « demandeurs résidents disponibles par poste » serait d'environ 0,75 au lieu de 3,0. Ce calcul illustre surtout que le ratio publié n'est pas interprétable en niveau ; seule son évolution (1,1 en 2022, 2,6 en 2025, 3,0 en 2026) est informative.
- Conséquence pour l'étude comparative : le taux de vacance luxembourgeois (1,2-1,4 %) est un plancher administratif ; le ratio chômeurs/poste vacant du Luxembourg est donc surestimé par rapport aux pays à enquête (Belgique, France), et ne doit pas être présenté sur la même échelle sans avertissement.

### Gaps
- Le taux de déclaration par secteur pour 2025 n'a pas été retrouvé dans le rapport annuel 2025 (seul le chiffre global d'environ 25 % y figure ; le tableau sectoriel est celui du rapport 2024).
- Texte exact de l'article du Code du travail (L. 622-5 selon l'ADEM, L. 622-4 selon des sources secondaires) et barème des sanctions non vérifiés sur Legilux.
- Série Eurostat 2026 des emplois vacants : absente au 22/11/2026 (table arrêtée au T4 2025).

---

## 9. Luxembourg — Frontaliers, part de l'emploi, embauches, population étrangère et bassin « effectif » de candidats (Grande Région)

### Takeaway
Au 31 juillet 2026, 237 928 des 534 195 emplois du Luxembourg (44,5 %) sont occupés par des frontaliers ; la proportion atteint 49,4 % parmi les salariés du statut unique (secteur privé), ce qui valide « près de la moitié » pour l'emploi salarié privé mais pas pour l'emploi total. Les frontaliers résidant en France captent à eux seuls 55 % des emplois créés entre 2025 et 2026, et le bassin de chômeurs de la Grande Région (≈ 325 000 chômeurs BIT) est quatorze fois plus grand que le chômage résident luxembourgeois.

### Cited Findings

**Tableau 8 — Emploi au Luxembourg au 31 juillet 2026 (IGSS/CCSS, publié le 19/11/2026)**

| Catégorie | Total | Dont frontaliers | Part des frontaliers (calcul propre) |
|---|---|---|---|
| Salariés du statut unique (y compris 6 161 intérimaires) | 460 281 | 227 528 | 49,4 % |
| Fonctionnaires | 41 636 | 3 352 | 8,1 % |
| Non-salariés | 32 278 | 7 048 | 21,8 % |
| Emploi total | 534 195 | 237 928 | 44,5 % |
| Salariés + fonctionnaires | 501 917 | 230 880 | 46,0 % |

- Tableau de bord de l'emploi au 31 juillet 2026 ; variation annuelle de l'emploi total +1,6 % (frontaliers +2,1 %) ; un an plus tôt : 525 713 emplois dont 233 000 frontaliers — [IGSS, tableau de bord emploi, juillet 2026](https://igss.gouvernement.lu/dam-assets/publications/tableau-de-bord-emploi/2026/emploi-202607.pdf)
- Septembre 2026 (STATEC, désaisonnalisé) : emploi intérieur 531 053, emploi national (résidents) 302 936 ; croissance annuelle de l'emploi intérieur +1,42 % (+1,33 % en septembre 2025, +0,87 % en septembre 2024, +3,24 % en septembre 2022) — [ADEM, présentation tripartite du 20/10/2026](https://gouvernement.lu/dam-assets/images-documents/actualites/2026/10-octobre/20-reunion-tripartite/docs/20261020-runion-comit-de-suivi-tripartite-adem-vf.pdf)
- Répartition par pays de résidence (comptes nationaux, 2023) : 225 840 frontaliers salariés entrants, dont 54,2 % résident en France, 23,0 % en Allemagne, 22,7 % en Belgique (2005 : 117 754 frontaliers, 51,7 % / 21,7 % / 26,6 %) ; croissance annuelle moyenne de 3,7 % entre 2005 et 2023, limitée à 2,2 % en 2023 ; les rémunérations versées aux non-résidents représentent 39,8 % de la masse salariale totale (Suisse 7,1 %) ; salaire annuel moyen des frontaliers : 58 276 € (France), 70 676 € (Belgique), 69 726 € (Allemagne) — [STATEC, Regards n°01, mars 2026](https://statistiques.public.lu/dam-assets/catalogue-publications/regards/2026/regards-frontaliers-120326-03.pdf)
- 2026 (IGSS via l'Observatoire territorial transfrontalier) : 131 300 personnes résidant en France travaillent au Luxembourg (126 600 en 2025, +3,7 %), soit 24,5 % de l'emploi total (535 770 emplois, +1,6 %) ; ils occupent 55 % des emplois créés entre 2025 et 2026 ; frontaliers d'Allemagne stables, de Belgique +0,8 % ; emploi des nationaux luxembourgeois +2 %, des étrangers +0,5 % — [Paperjam, 22/11/2026](https://paperjam.lu/article/55-des-nouveaux-emplois-occupes-par-des-frontaliers-de-france)
- Juin 2026 (STATEC, Conjoncture Flash) : emploi des frontaliers +2,4 % sur un an contre +1,5 % pour les résidents ; les frontaliers de France représentent 90 % de la hausse du nombre de frontaliers entre décembre 2025 et avril 2026 ; dans la santé et l'action sociale, les non-résidents représentent près des deux tiers des créations nettes d'emploi salarié sur un an — [Paperjam](https://paperjam.lu/article/2-4-contre-1-5-lemploi-progresse-plus-vite-chez-les-frontaliers)
- Nouveaux entrants sur le marché du travail (LISER, projet LUXTALENT, données IGSS 2002-2024) : en 2024, près de 90 % des nouveaux entrants âgés d'au moins 20 ans sont nés hors du Luxembourg ; la part des ressortissants de pays non européens parmi les nouveaux entrants atteint 38,3 % en 2024 ; les ressortissants des trois pays frontaliers représentaient 73,1 % des nouveaux entrants étrangers en 2002 et 45,6 % en 2024 (Français : 40,5 % → 30,9 %) — [LISER / ministère de l'Économie, rapport LUXTALENT, mars 2026](https://gouvernement.lu/dam-assets/publications/rapport-etude-analyse/meco/luxtalent-rapport-final-20260320.pdf)
- Population : 690 959 habitants au 1er janvier 2026 (+1,3 %), dont 322 050 étrangers (46,6 %, contre 47,0 % en 2025) ; Portugais 12,8 % de la population, Français 7,1 %, Italiens 3,7 %, Belges 2,6 %, Allemands 1,8 % ; solde migratoire 2025 : +7 844 (24 985 arrivées, 17 141 départs) — [Chronicle.lu, 05/05/2026 (données STATEC)](https://chronicle.lu/category/surveys-reports/61042-luxembourgs-population-reaches-690-959-fertility-rate-hits-record-low)
- Demandeurs d'emploi non-résidents inscrits à l'ADEM : 4 471 fin octobre 2026 (+24,9 %), dont 2 017 inscrits spontanément sans droit à une aide (+49,5 % sur un an) — [Gouvernement.lu, octobre 2026](https://gouvernement.lu/fr/actualites/toutes_actualites/communiques/2026/11-novembre/20-chomage-octobre.html)

**Tableau 9 — Chômeurs BIT dans la Grande Région, 2025 (Eurostat, 15-74 ans)**

| Territoire | Chômeurs (milliers) | Taux de chômage (%) |
|---|---|---|
| Luxembourg | 22,8 | 6,5 |
| Lorraine (FRF3) | 80,1 (d) | 7,8 |
| Wallonie (BE3) | 125,7 | 7,8 |
| Sarre (DEC) | 20,6 (u) | 4,1 |
| Rhénanie-Palatinat (DEB) | 75,3 | 3,4 |
| Total Grande Région | 324,5 | — |

- Effectifs et taux régionaux 2025 ((d) = définition différente, (u) = fiabilité faible) — [Eurostat lfst_r_lfu3pers](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfu3pers/default/table?lang=fr) ; [Eurostat lfst_r_lfu3rt](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfu3rt/default/table?lang=fr)

### Inferences
- « Les frontaliers occupent près de la moitié des emplois » : vrai pour les salariés du statut unique (49,4 %), approximatif pour l'ensemble des salariés (46,0 %), exagéré pour l'emploi total (44,5 %). Formulation rigoureuse : « 44,5 % de l'emploi total et 49,4 % de l'emploi salarié du secteur privé au 31 juillet 2026 (IGSS) ».
- Bassin effectif (calcul propre) : le total de 324 500 chômeurs BIT de la Grande Région rapporté au stock ADEM (≈ 6 800 postes) donne ≈ 48 chômeurs par poste déclaré. C'est une borne supérieure théorique (tous ne sont ni mobiles, ni qualifiés, ni linguistiquement aptes, et les postes non déclarés manquent au dénominateur), mais elle illustre que le ratio « résidents » (3,0) ne décrit pas la concurrence réelle. S'y ajoutent les candidats en emploi (frontaliers changeant d'employeur) et les candidats internationaux : 38,3 % des nouveaux entrants sont des ressortissants non européens.
- L'argument de l'auteur (« le monde entier postule au Luxembourg ») est cohérent avec trois faits mesurés : 90 % des nouveaux entrants nés hors du pays, 55 % des emplois nets créés captés par des résidents français, et une hausse de 49,5 % en un an des non-résidents s'inscrivant spontanément à l'ADEM. Il n'existe cependant aucune mesure directe du nombre de candidatures par offre (voir section 10).

### Gaps
- Aucun rapport 2025 ou 2026 de l'Observatoire interrégional du marché de l'emploi (IBA-OIE) n'a été trouvé ; le dernier chiffre global vu (≈ 258 000 frontaliers dans la Grande Région en 2021) est daté. Le tableau 9 est une reconstitution propre à partir d'Eurostat, pas un chiffre OIE.
- Part des embauches (flux bruts) allant respectivement aux frontaliers, aux résidents déjà présents et aux nouveaux immigrés : non publiée sous cette forme ; seuls les soldes nets (55 % pour les frontaliers de France) et la part des nés à l'étranger parmi les nouveaux entrants (≈ 90 %) sont disponibles.
- STATNEWS « emploi salarié » du T2 2026 (répartition par pays de résidence la plus récente) non ouvert ; le chiffre de 237 200 frontaliers de « Luxembourg en chiffres 2026 » n'a pas été vérifié à la source.

---

## 10. Luxembourg — Sélectivité du recrutement, candidats par offre, langues exigées, ralentissement 2023-2026 et chômage des diplômés

### Takeaway
Aucune statistique publique ne mesure le nombre de candidats par offre au Luxembourg ; les seuls ratios disponibles (ADEM, par métier) montrent paradoxalement un marché tendu côté employeur dans la comptabilité (1,5 demandeur résident par poste) parce qu'ils ignorent frontaliers et candidats internationaux. Les faits établis sont le ralentissement de l'emploi (≈ +3,5 % par an avant 2020, +1,0 % en 2024, +1,1 % en 2025), la montée du chômage des diplômés du supérieur (33 % des inscrits à l'ADEM contre 19 % en 2018) et la généralisation des exigences multilingues.

### Cited Findings

**Ralentissement**
- Croissance annuelle de l'emploi intérieur : 3,6 % (2019), 1,8 % (2020), 2,9 % (2021), 3,3 % (2022), 1,9 % (2023), 1,0 % (2024), 1,1 % (2025), prévision STATEC 1,7 % (2026) et 1,9 % (2027), contre une moyenne de long terme d'environ 3 % ; UE-27 : 0,5 % en 2025, 0,3 % prévu en 2026 ; l'ADEM attribue l'essoufflement 2023-2024 à la hausse des taux, à la crise de la construction et au ralentissement du secteur financier — [ADEM, présentation tripartite du 20/10/2026](https://gouvernement.lu/dam-assets/images-documents/actualites/2026/10-octobre/20-reunion-tripartite/docs/20261020-runion-comit-de-suivi-tripartite-adem-vf.pdf)
- Évolution de l'emploi salarié entre le T2 2025 et le T2 2026 par secteur : administration publique +5,4 %, santé et action sociale +4,1 %, activités financières et d'assurance +0,5 %, activités spécialisées, scientifiques et techniques +0,4 %, information et communication 0,0 %, commerce −0,2 %, industrie −0,3 %, horeca −0,4 %, construction −0,4 % (lecture d'un graphique extrait automatiquement : à vérifier sur le document) — [ADEM, présentation tripartite du 20/10/2026](https://gouvernement.lu/dam-assets/images-documents/actualites/2026/10-octobre/20-reunion-tripartite/docs/20261020-runion-comit-de-suivi-tripartite-adem-vf.pdf)
- Le stock de postes vacants ADEM est passé d'un pic d'environ 13 000 (octobre 2022) à 6 793 (octobre 2026), pendant que le nombre de demandeurs résidents disponibles passait de 14 669 à 20 435 — [data.public.lu, Chiffres-clés de l'ADEM](https://data.public.lu/fr/datasets/chiffres-cles-de-ladem/)
- En juin 2026 le STATEC relie la hausse du chômage (6,4 %) à « la faiblesse relative de l'emploi national » ; les postes déclarés à l'ADEM ont reculé de près de 7 % au T2 2026 après +4 % au T1 — [Paperjam](https://paperjam.lu/article/2-4-contre-1-5-lemploi-progresse-plus-vite-chez-les-frontaliers)

**Diplômés et jeunes**
- Les diplômés du supérieur représentent 33,2 % des demandeurs d'emploi résidents disponibles en octobre 2026 (6 791 personnes, +12,9 % sur un an) ; les moins de 30 ans sont 4 263 (+15,3 %) — [data.public.lu, Chiffres-clés de l'ADEM](https://data.public.lu/fr/datasets/chiffres-cles-de-ladem/) ; [Gouvernement.lu, octobre 2026](https://gouvernement.lu/fr/actualites/toutes_actualites/communiques/2026/11-novembre/20-chomage-octobre.html)
- En 2025, le nombre de diplômés du supérieur inscrits à l'ADEM a augmenté de 13 %, portant leur part à 31 % contre 19 % en 2018 ; la Chambre des salariés estime en juillet 2026 que les perspectives d'emploi des diplômés du supérieur « semblent se détériorer » (résumés de recherche d'articles Paperjam, non ouverts) — [Paperjam, « le nombre de chômeurs inscrits dépasse 21 000 »](https://paperjam.lu/article/le-nombre-de-chomeurs-inscrits-au-luxembourg-depasse-21-000-un-record)
- Taux de chômage BIT des diplômés du supérieur (25-64 ans, moyenne annuelle) : 3,6 % (2023), 4,5 % (2024), 5,1 % (2025) au Luxembourg, contre 2,7 % / 2,9 % / 3,5 % en Belgique ; ensemble des 25-64 ans au Luxembourg : 4,1 % / 5,1 % / 5,6 % — [Eurostat lfsa_urgaed](https://ec.europa.eu/eurostat/databrowser/view/lfsa_urgaed/default/table?lang=fr)
- Trimestriel (25-64 ans, supérieur) : 5,4 % (T2 2025), 4,0 % (T3 2025), 5,8 % (T4 2025), 6,0 % (T1 2026), 5,4 % (T2 2026) — [Eurostat lfsq_urgaed](https://ec.europa.eu/eurostat/databrowser/view/lfsq_urgaed/default/table?lang=fr)
- Métiers recherchés en hausse sur un an en septembre 2026 : informatique (+108 demandeurs, +18 %), nettoyage (+101, +6 %), secrétariat et assistance (+93, +4 %), banque (+82, +27 %) ; la comptabilité-gestion et le droit progressent aussi — [ADEM, présentation tripartite du 20/10/2026](https://gouvernement.lu/dam-assets/images-documents/actualites/2026/10-octobre/20-reunion-tripartite/docs/20261020-runion-comit-de-suivi-tripartite-adem-vf.pdf) ; [ADEM, communiqué septembre 2026](https://gouvernement.lu/dam-assets/images-documents/actualites/2026/10-octobre/20-adem-chomage/communiqu-de-presse-sept-2026-chiffres-cls-adem.pdf)

**Tableau 10 — ADEM, 31 octobre 2026 : demandeurs d'emploi résidents disponibles et postes vacants par domaine ROME (open data, calculs propres)**

| Domaine ROME | DE résidents disponibles | Stock de postes | Postes déclarés en octobre | DE par poste |
|---|---|---|---|---|
| M12 Comptabilité et gestion | 815 | 534 | 272 | 1,5 |
| M18 Systèmes d'information | 740 | 513 | 227 | 1,4 |
| C13 Finance | 165 | 137 | 79 | 1,2 |
| C12 Banque | 369 | 192 | 95 | 1,9 |
| K19 Droit | 294 | 154 | 69 | 1,9 |
| M14 Organisation et études | 397 | 164 | 81 | 2,4 |
| M15 Ressources humaines | 205 | 82 | 53 | 2,5 |
| M17 Marketing et stratégie commerciale | 401 | 88 | 34 | 4,6 |
| M16 Secrétariat et assistance | 2 180 | 363 | 246 | 6,0 |
| K22 Nettoyage | 1 782 | 194 | 71 | 9,2 |
| D15 Grande distribution | 584 | 46 | 11 | 12,7 |
| Ensemble | 20 435 | 6 793 | 3 236 | 3,0 |

- Fichiers de-metier.csv et offres-details.csv ; pour la comptabilité-gestion (M12) le ratio est passé de 1,2 (718 / 583) en octobre 2025 à 1,5 en octobre 2026 ; pour la banque (C12) de 1,1 (303 / 265) à 1,9 ; métier M1203 « Comptabilité » : stock de 210 postes fin octobre 2026 et 1 020 postes déclarés de janvier à octobre 2026 — [data.public.lu, Chiffres-clés de l'ADEM](https://data.public.lu/fr/datasets/chiffres-cles-de-ladem/)
- L'ADEM classe la comptabilité (M1203), le conseil juridique, le développement informatique et les soins infirmiers parmi les professions où « des difficultés considérables à trouver des candidats adéquats persistent », en comptant les offres pour lesquelles aucun candidat inscrit n'a pu être assigné (janvier-septembre 2026) — [ADEM, présentation tripartite du 20/10/2026](https://gouvernement.lu/dam-assets/images-documents/actualites/2026/10-octobre/20-reunion-tripartite/docs/20261020-runion-comit-de-suivi-tripartite-adem-vf.pdf)

**Liste de pénurie et adéquation offre/demande (ADEM)**
- Liste 2026 des « métiers très en pénurie » (publiée le 27 mars 2026, fondée sur les données 2025) : 20 métiers, contre 22 en 2025 (24 en 2024 et 30 en 2023 selon Frontaliers Grand Est) ; sortent de la liste : comptables (M1203), contrôleurs de gestion (M1204), conseil en organisation et management d'entreprise (M1402), mécaniciens aéronautiques, agents de circulation ferroviaire ; ces professions « restent sous tension » mais le déséquilibre entre candidats et postes « ne suffit plus pour respecter les critères » ; entrent : couvreurs (F1610), qualité industrielle (H1502), maintenance d'équipements industriels (I1304) ; critères : postes déclarés, demandeurs inscrits pour le même métier, postes sans candidat adéquat [officiel] — [Gouvernement.lu, 27/03/2026](https://gouvernement.lu/fr/actualites/toutes_actualites/communiques/2026/03-mars/27-adem-metiers-penurie.html)
- En 2025, les « demandes de métier » des nouveaux inscrits correspondent à 86 % du total des postes déclarés (83 % en 2024), soit un écart de 5 671 entre postes déclarés et demandes, respectivement le niveau le plus haut et le plus bas de la période observée ; l'ADEM en conclut que la pénurie de main-d'œuvre est « en nette réduction depuis 2022 » mais reste concentrée dans l'informatique, la santé et l'action sociale, la comptabilité, le secteur financier et l'ingénierie [officiel] — [ADEM, rapport annuel 2025](https://adem.public.lu/dam-assets/fr/publications/adem/2026/ra-adem-2025/ra-adem-2025.pdf)
- Exigences des postes déclarés en 2025 : 60 % précisent un diplôme (19 % un bachelor, 15 % un master ou un doctorat) ; 69 % exigent une expérience professionnelle (dont 70 % une expérience de 1 à 4 ans) [officiel] — [ADEM, rapport annuel 2025](https://adem.public.lu/dam-assets/fr/publications/adem/2026/ra-adem-2025/ra-adem-2025.pdf)

**Langues**
- Source la plus récente et la plus complète [officiel, ADEM, postes déclarés en 2025] : le français est exigé obligatoirement dans 76 % des postes (41 % à un niveau expérimenté C) ; l'anglais dans 51 % (33 % au niveau C) ; 44 % des postes exigent une seule langue (niveau B ou C), 27 % deux langues, 17 % trois langues, 5 % quatre langues. Côté demandeurs inscrits en 2025 : 63 % déclarent maîtriser le français (niveau B ou C), 49 % l'anglais, 30 % l'allemand, 24 % le luxembourgeois ; l'ADEM y voit « une pénurie de connaissances de la langue anglaise » — [ADEM, rapport annuel 2025](https://adem.public.lu/dam-assets/fr/publications/adem/2026/ra-adem-2025/ra-adem-2025.pdf)
- Étude de l'Université du Luxembourg (I. Pigeron-Piroth et F. Fehlen, « Les langues dans les offres d'emploi au Luxembourg 1984-2019 ») : 8 340 offres du Luxemburger Wort, dont 510 pour 2019 ; en 2019 le français est explicitement demandé dans 76,3 % des annonces ; le luxembourgeois passe de 50,3 % des annonces en 2014 à 67,3 % en 2019 ; limite : ce quotidien publie peu d'offres des secteurs les plus demandeurs d'anglais (finance), d'où une sous-représentation probable de l'anglais (chiffres repris de résumés de presse ; le PDF n'a pas pu être ouvert) — [ORBilu, Université du Luxembourg](https://orbilu.uni.lu/handle/10993/46761) ; [Paperjam](https://paperjam.lu/article/luxembourgeois-progresse-dans-)
- Offres déclarées à l'ADEM : près des trois quarts mentionnaient le français comme exigence obligatoire en 2022 ; en 2024, environ 55 % des offres demandent trois langues et près de 15 % en exigent quatre (résumés de recherche d'articles Paperjam, non ouverts ; un chiffre de « 97 % » pour le français et de « 94 % » pour l'anglais circule mais porte sur des sous-ensembles sectoriels non identifiés) — [Paperjam, « français, barrière importante »](https://paperjam.lu/article/francais-barriere-importante-a) ; [Paperjam, « maîtrise des langues, point sensible »](https://paperjam.lu/article/maitrise-langues-point-sensibl)
- Un article de novembre 2026 titre que le français est la langue la plus exigée dans les offres d'emploi (71,4 % des annonces en français dans le sud du pays) ; source et méthode non vérifiées (accès refusé) — [Les Frontaliers](https://www.lesfrontaliers.lu/emploi/le-francais-est-la-langue-la-plus-exigee-dans-les-offres-demploi-au-luxembourg/)

### Inferences
- Le relevé manuel LinkedIn de l'auteur (7 annonces de comptabilité sur 24 dépassant 100 candidats) et le ratio ADEM (1,5 demandeur résident par poste de comptabilité-gestion) ne se contredisent pas : ils mesurent deux populations différentes. Le ratio ADEM ne compte que les chômeurs résidents inscrits ; les candidatures réelles proviennent aussi des frontaliers, des salariés en poste et de candidats à l'étranger. L'écart entre les deux est précisément l'indice du « bassin effectif » élargi — mais il n'est quantifié par aucune source publique.
- Le fait que l'ADEM signale la comptabilité comme profession en difficulté de recrutement alors que des annonces reçoivent plus de 100 candidatures suggère un problème d'appariement (exigences linguistiques, expérience locale, normes comptables luxembourgeoises) plutôt qu'un manque de candidats. C'est une hypothèse, non un résultat établi.
- La dégradation relative est nette même dans les ratios ADEM : dans la comptabilité-gestion, la banque et l'informatique, le nombre de demandeurs par poste a augmenté de 25 à 70 % en un an.

### Gaps
- Nombre de candidatures par offre, délai de pourvoi, taux de sélection : aucune donnée ADEM, STATEC, LISER ou Chambre de commerce trouvée. Les enquêtes de recruteurs privés (cabinets, jobboards) n'ont pas été recherchées faute de quota.
- Étude LISER spécifique sur les langues dans les offres : non trouvée ; la référence scientifique est l'étude de l'Université du Luxembourg, limitée à un seul journal et arrêtée en 2019.
- Le fichier ADEM « Luxembourg skill vacancy microdata » (mis à jour le 20/07/2026) pourrait contenir les langues exigées par offre ; il n'a pas été exploité.

---

## 11. Luxembourg — Taux de retour à l'emploi, sorties de l'ADEM, durée d'inscription

### Takeaway
L'ADEM publie dans son rapport annuel un « taux de sortie vers l'emploi » : 51 % des dossiers clôturés en 2024 correspondaient à une personne affiliée auprès d'un employeur luxembourgeois trois mois plus tard, contre 56-60 % de 2018 à 2023 (valeur 2025 à vérifier). Les flux montrent environ 2 500 à 2 700 clôtures de dossiers de résidents par mois pour un stock de 20 000 (≈ 13 % par mois, tous motifs confondus), et l'EFT indique qu'environ un chômeur BIT sur cinq est en emploi le trimestre suivant (20,3 % au T2 2026, sous la moyenne européenne de 23,2 %).

### Cited Findings
- **Taux de sortie vers l'emploi [officiel, ADEM]** : 58 % (2018), 59 % (2019), 57 % (2020), 60 % (2021), 59 % (2022), 56 % (2023), 51 % (2024). Définition : une clôture de dossier compte comme sortie vers l'emploi si la personne est affiliée auprès d'un employeur au Luxembourg (données du Centre commun de la sécurité sociale) trois mois après la clôture ; sont donc exclus les emplois hors Luxembourg et les CDD ou missions d'intérim terminés avant trois mois. Les sorties se font principalement vers l'horeca, les services administratifs et de soutien (nettoyage) et le commerce — [ADEM, rapport annuel 2024](https://adem.public.lu/dam-assets/fr/publications/adem/2025/ra-adem-2024/ra-adem-2024.pdf)
- Valeur 2025 du même indicateur : le rapport annuel 2025 reprend la série 2019-2024 ci-dessus et y ajoute 2025 ; l'extraction automatique du tableau donne « 58 » pour 2025, mais la lecture est incertaine (problème d'encodage de police) [non vérifié — à relire dans le PDF, section 1.5 « Sorties », p. 44] — [ADEM, rapport annuel 2025](https://adem.public.lu/dam-assets/fr/publications/adem/2026/ra-adem-2025/ra-adem-2025.pdf)
- Dossiers clôturés par an [officiel] : résidents 29 486 (2019), 25 941 (2020), 30 518 (2021), 28 989 (2022), 28 399 (2023), 30 934 (2024), 29 606 (2025) ; non-résidents 5 068 (2019) → 6 494 (2024) → 8 188 (2025) ; total 37 428 (2024) et 37 794 (2025), pour 42 417 nouvelles inscriptions en 2025 — [ADEM, rapport annuel 2025](https://adem.public.lu/dam-assets/fr/publications/adem/2026/ra-adem-2025/ra-adem-2025.pdf)
- Durée moyenne d'indemnisation du chômage complet : 5,95 mois (2023), 6,4 mois (2024), 6,2 mois (2025) [officiel] — [ADEM, rapport annuel 2025](https://adem.public.lu/dam-assets/fr/publications/adem/2026/ra-adem-2025/ra-adem-2025.pdf)
- Flux mensuels de dossiers de résidents (ouvertures / clôtures) : octobre 2026 : 3 256 / 2 643 ; septembre 2026 : 3 432 / 2 894 ; août 2026 : 2 549 / 2 708 ; totaux annuels : 30 918 / 28 397 (2023), 31 917 / 30 438 (2024), 32 889 / 32 508 (2025), 27 680 / 27 463 (janvier-octobre 2026) — [data.public.lu, Chiffres-clés de l'ADEM (de-flux.csv)](https://data.public.lu/fr/datasets/chiffres-cles-de-ladem/)
- Transitions trimestrielles EFT (désaisonnalisé) : part des chômeurs BIT en emploi le trimestre suivant au Luxembourg : 24,5 % (T3 2025), 17,9 % (T4 2025), 29,8 % (T1 2026), 20,3 % (T2 2026) ; restant au chômage : 58,5 % au T2 2026 (UE-27 : 52,8 %) ; passant en inactivité : 21,2 % — [Eurostat lfsi_long_q](https://ec.europa.eu/eurostat/databrowser/view/lfsi_long_q/default/table?lang=fr)
- Fins d'indemnisation en 2025 (réponse du ministre du Travail Marc Spautz à une question parlementaire) : 14 637 fins de droit à l'indemnité ; trois mois plus tard, 7 017 personnes n'étaient plus inscrites à l'ADEM et 7 620 l'étaient encore ; parmi les 7 017 sortis, 1 885 (27 %) n'avaient ni emploi d'au moins 20 jours, ni mesure, ni formation, ni autre prestation enregistrée (1 226 en 2022) ; parmi les 7 620 encore inscrits, près de 60 % avaient travaillé au moins 20 jours sur la période — [Paperjam, 22/11/2026](https://paperjam.lu/article/pres-de-1-900-sortants-de-ladem-sans-relais-recense)
- Durée du chômage BIT en 2025 (milliers, total 22,8) : < 1 mois 3,5 (u) ; 1-2 mois 3,9 (u) ; 3-5 mois 4,0 ; 6-11 mois 4,3 ; 12-17 mois 2,6 (u) ; au-delà : non publié (effectifs trop faibles) — [Eurostat lfsa_ugad](https://ec.europa.eu/eurostat/databrowser/view/lfsa_ugad/default/table?lang=fr)
- Répartition des inscrits par durée d'inscription au 31/10/2026 : voir tableau 6 (38,8 % inscrits depuis 12 mois et plus ; 29,8 % inactifs depuis 12 mois et plus) — [data.public.lu, Chiffres-clés de l'ADEM](https://data.public.lu/fr/datasets/chiffres-cles-de-ladem/)

### Inferences
- Taux de clôture mensuel (calcul propre) : 32 508 clôtures en 2025 / 12 = 2 709 par mois pour un stock moyen d'environ 19 500, soit ≈ 13,9 % par mois ; en octobre 2026 : 2 643 / 20 262 = 13,0 %. À l'état stationnaire cela correspondrait à une durée moyenne d'inscription d'environ 7 à 8 mois, mais ce chiffre mélange reprises d'emploi, entrées en mesure, radiations, départs du pays et fins de droit : ce n'est pas un taux de retour à l'emploi.
- La comparaison d'une moyenne sur quatre trimestres des transitions EFT (≈ 23 % au Luxembourg, ≈ 24 % en Belgique, ≈ 23 % dans l'UE) ne montre pas de handicap luxembourgeois net ; la série est trop volatile (17,9 % à 29,8 %) pour conclure sur un seul trimestre.

- Le recul du taux de sortie vers l'emploi de 59-60 % (2021-2022) à 51 % (2024) est l'indicateur officiel le plus direct d'une dégradation côté demandeur au Luxembourg : à nombre de clôtures comparable, la part de celles qui débouchent sur un emploi durable de trois mois a perdu 8 à 9 points. Rapporté au stock, cela donne un taux mensuel de sortie vers l'emploi d'environ 7 % en 2024 (30 934 clôtures de résidents × 51 % / 12 ≈ 1 315 par mois pour ≈ 18 500 inscrits disponibles ; calcul propre, ordre de grandeur).
- Les totaux annuels de clôtures de résidents diffèrent entre le rapport annuel (29 606 en 2025) et la somme des flux mensuels de l'open data (32 508) : les périmètres ne sont pas identiques (révisions, réouvertures), ce qui n'affecte pas l'ordre de grandeur.

### Gaps
- Valeur 2025 du taux de sortie vers l'emploi à confirmer visuellement dans le PDF du rapport annuel 2025.
- Taux de sortie vers l'emploi par cohorte d'inscrits (à 3, 6, 12 mois), par diplôme ou par nationalité : non publié.
- Durée moyenne ou médiane d'inscription : non publiée (seule la durée moyenne d'indemnisation l'est).
- Motifs de clôture des dossiers : non ventilés dans l'open data.

---

## 12. Luxembourg — Nouveaux arrivants, conjoints accompagnants, ressortissants non-UE

### Takeaway
Aucune étude publiée portant spécifiquement sur la difficulté des conjoints accompagnants à trouver un emploi au Luxembourg n'a été trouvée. Les données disponibles montrent un tableau contrasté : le taux d'emploi des personnes nées hors UE (70,1 %) y est supérieur à celui des natifs, mais leur taux de chômage (12,2 %) est près de trois fois plus élevé, et la rotation est forte — 30 % des nouveaux entrants étrangers quittent le marché du travail luxembourgeois dans l'année, 50 % dans les cinq ans.

### Cited Findings
- Taux d'emploi 20-64 ans par pays de naissance, 2025 : natifs 69,7 %, nés dans un autre pays de l'UE 79,8 %, nés hors UE 70,1 % (69,3 % en 2024) — [Eurostat lfst_r_lfe2emprc](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfe2emprc/default/table?lang=fr)
- Taux de chômage 20-64 ans par pays de naissance, 2025 : natifs 4,4 %, nés UE 4,9 %, nés hors UE 12,2 % (UE-27 : 5,1 % / 6,5 % / 10,5 %) — [Eurostat lfsa_urgacob](https://ec.europa.eu/eurostat/databrowser/view/lfsa_urgacob/default/table?lang=fr)
- Les ressortissants de pays hors UE-27 représentent 23,1 % des demandeurs d'emploi résidents disponibles fin octobre 2026 (4 715 personnes) ; les Portugais 19,1 %, les Français 6,8 % — [data.public.lu, Chiffres-clés de l'ADEM](https://data.public.lu/fr/datasets/chiffres-cles-de-ladem/)
- LISER (LUXTALENT, données IGSS) : environ 30 % des nouveaux entrants quittent le Luxembourg dans l'année suivant leur arrivée et 50 % dans les cinq ans ; seuls trois travailleurs sur dix arrivés en 2002 ont encore un lien avec la sécurité sociale luxembourgeoise en 2025 ; les immigrés résidents ont des trajectoires plus stables que les non-résidents ; les entrées d'immigrés se concentrent dans les secteurs à forte intensité de compétences (activités spécialisées, scientifiques et techniques et finance-assurance : 40 % des nouvelles entrées en 2024) ; davantage d'immigrés finissent par s'installer dans les pays frontaliers que de frontaliers ne s'installent au Luxembourg — [LISER / ministère de l'Économie, rapport LUXTALENT, mars 2026](https://gouvernement.lu/dam-assets/publications/rapport-etude-analyse/meco/luxtalent-rapport-final-20260320.pdf)
- 30 % des immigrés arrivés en 2015 et encore présents sur le marché du travail en 2025 vivaient dans un pays limitrophe en 2024 (LISER, cité par la presse) — [Paperjam, 22/11/2026](https://paperjam.lu/article/55-des-nouveaux-emplois-occupes-par-des-frontaliers-de-france)
- Conjoints et membres de famille : depuis la loi du 7 août 2023 (en vigueur le 1er septembre 2023), les membres de famille de ressortissants de pays tiers titulaires d'un titre de séjour « membre de famille » (regroupement familial) ont librement accès au marché de l'emploi dès leur arrivée, sans autorisation de travail ; la validité des titres de séjour pour recherche d'emploi ou création d'entreprise passe de neuf à douze mois [officiel] — [ADEM, rapport annuel 2024](https://adem.public.lu/dam-assets/fr/publications/adem/2025/ra-adem-2024/ra-adem-2024.pdf)
- Embauche d'un ressortissant de pays tiers : soumise au test du marché du travail de l'ADEM (certificat requis ; délais de 5 à 7 jours ouvrables, jusqu'à 15 jours supplémentaires si des candidats inscrits peuvent convenir) — [Guichet.lu](https://guichet.public.lu/fr/entreprises/ressources-humaines/recrutement/recherche-candidat/vacance-poste-adem.html)

### Inferences
- Le taux d'emploi élevé des nés hors UE reflète un effet de sélection (on immigre au Luxembourg avec un contrat) ; le taux de chômage de 12,2 % concerne ceux qui n'ont pas ou plus ce contrat — profil qui correspond aux conjoints accompagnants et aux personnes arrivées sans emploi. Cette lecture est une hypothèse cohérente avec les données, non un résultat publié.
- Le taux de départ (30 % dans l'année) est mesuré sur des personnes ayant eu un premier emploi : les arrivants qui n'en trouvent jamais n'apparaissent pas dans les données IGSS, de sorte que l'échec de recherche d'emploi des nouveaux venus est structurellement invisible dans les statistiques administratives.

### Gaps
- Aucune étude trouvée sur l'emploi des conjoints accompagnants (trailing spouses) ; les enquêtes d'expatriés (type InterNations) et les travaux LISER/Université du Luxembourg sur ce thème n'ont pas pu être recherchés (quota épuisé).
- Taux de chômage par nationalité au sens strict (et non par pays de naissance) et par durée de résidence : non publiés.
- La seconde partie du rapport LUXTALENT (au-delà du résumé exécutif de la partie 1) n'a pas été dépouillée ; elle pourrait contenir des éléments sur les obstacles perçus par les talents étrangers.

---

## 13. Vérification des chiffres exploratoires et inventaire de ce qui est publié ou non

### Takeaway
Les ordres de grandeur exploratoires sont pour l'essentiel confirmés, avec trois corrections : le taux ADEM est de 6,4-6,5 % (et non ~6 %), les Wallons travaillant au Luxembourg sont 47 600 (et non ~50 000), et « près de la moitié des emplois » n'est exact que pour l'emploi salarié privé. Le point méthodologique majeur est confirmé : les emplois vacants luxembourgeois d'Eurostat sont des déclarations administratives à l'ADEM, non une enquête.

### Cited Findings

**Tableau 11 — Vérification des chiffres préalables**

| Affirmation exploratoire | Verdict | Valeur vérifiée | Source |
|---|---|---|---|
| ~3,5 chômeurs résidents par poste vacant au Luxembourg | Confirmé (2025) ; 3,0 à 3,9 en 2026 selon la définition | 22 800 / 6 570 = 3,5 (2025) ; 20 435 / 6 793 = 3,0 (ADEM, oct. 2026) | [Eurostat jvs_q_nace2](https://ec.europa.eu/eurostat/databrowser/view/jvs_q_nace2/default/table?lang=fr) ; [ADEM open data](https://data.public.lu/fr/datasets/chiffres-cles-de-ladem/) |
| 23 000-25 000 chômeurs, ~6 700 postes | Confirmé | 25 000 chômeurs BIT (T2 2026), 26 000 (sept. 2026) ; stock ADEM 6 632 (sept.), 6 793 (oct.) | [Eurostat une_rt_m](https://ec.europa.eu/eurostat/databrowser/view/une_rt_m/default/table?lang=fr) ; [Gouvernement.lu](https://gouvernement.lu/fr/actualites/toutes_actualites/communiques/2026/11-novembre/20-chomage-octobre.html) |
| Chômage 7,1 % mi-2026 | Confirmé (taux BIT, T2 2026) | 7,1 % au T2 2026 ; 7,3 % en septembre 2026 | [Eurostat une_rt_q](https://ec.europa.eu/eurostat/databrowser/view/une_rt_q/default/table?lang=fr) |
| Taux ADEM ~6 % | À corriger | 6,4 % (octobre 2026) ; 6,5 % (août-septembre 2026) | [Gouvernement.lu](https://gouvernement.lu/fr/actualites/toutes_actualites/communiques/2026/11-novembre/20-chomage-octobre.html) |
| Frontaliers = « près de la moitié » des emplois | À nuancer | 44,5 % de l'emploi total ; 49,4 % des salariés du statut unique (31/07/2026) | [IGSS](https://igss.gouvernement.lu/dam-assets/publications/tableau-de-bord-emploi/2026/emploi-202607.pdf) |
| Emplois vacants luxembourgeois issus de l'ADEM et non d'une enquête | Confirmé | « entirely compiled via administrative records » | [Eurostat, métadonnées JVS Luxembourg](https://ec.europa.eu/eurostat/cache/metadata/EN/jvs_esqrs_lu.htm) |
| ~50 000 Wallons travaillant au Luxembourg | Légèrement surestimé | 47 602 (INAMI, 30/06/2025) | [IWEPS, fiche L019](https://www.iweps.be/wp-content/uploads/2017/01/L019-TRAV.FRONT_.PAYS-092026_Full1.pdf) |
| Plus de la moitié des emplois bruxellois occupés par des navetteurs | À nuancer | 49,5 % en 2022 (50,6 % en 2021) | [DH](https://www.dhnet.be/regions/bruxelles/bruxelles-mobilite/2023/04/17/il-ny-a-jamais-eu-autant-de-navetteurs-flamands-et-wallons-a-bruxelles-infographie-OHJRZXUG5BFQZNWHOISXKKQVMI/) |
| Réforme belge limitant le chômage à 2 ans à partir de janvier 2026 | Confirmé | Loi du 18 juillet 2025 ; premières fins de droit le 1er janvier 2026 ; ~133 000 exclus en un an | [ONEM](https://www.onem.be/index.php/reforme-de-la-reglementation-du-chomage) ; [RTBF](https://www.rtbf.be/article/11800770) |

**Tableau 12 — Inventaire : ce qui est publié**

| Indicateur | Belgique francophone | Luxembourg |
|---|---|---|
| Chômage BIT, emploi, longue durée | Oui : annuel par région et province (Eurostat), trimestriel par région (Statbel, T2 2026) | Oui : mensuel et trimestriel (Eurostat, septembre 2026) |
| Sous-emploi élargi (slack) | Oui : annuel par province (2025) | Oui : trimestriel (T2 2026) |
| Emplois vacants par enquête | Oui : trimestriel par région (Statbel JVS, T2 2026) | Non : source administrative ADEM uniquement |
| Offres déposées au service public de l'emploi | Oui : Forem (semestriel), Actiris (partiel) | Oui : flux et stock mensuels, détail par métier, secteur et commune (open data, octobre 2026) |
| Demandeurs d'emploi inscrits | Oui : mensuel (Forem septembre 2026, Actiris octobre 2026) | Oui : mensuel, open data détaillé (octobre 2026) |
| Durée d'inoccupation ou d'inscription | Tranches seulement (Forem) | Tranches seulement (ADEM) |
| Transition chômage → emploi (EFT) | Trimestrielle nationale (Eurostat) ; annuelle Statbel, part « toujours au chômage » par région | Oui (national, trimestriel) |
| Taux de sortie vers l'emploi du service public de l'emploi | Non trouvé pour l'ensemble des inscrits (Forem, Actiris) ; seulement après formation | Oui : rapport annuel ADEM (51 % en 2024) |
| Taux de déclaration des postes vacants | Sans objet (enquête) | Oui : ≈ 25 % des recrutements (ADEM), par secteur |
| Exigences linguistiques des offres | Partiel et ancien (Actiris, OCDE 2023) | Oui : rapport annuel ADEM 2025 (français 76 %, anglais 51 %) |
| Listes de pénurie | Forem 2026 : 144 métiers ; Actiris 2026 : 103 fonctions critiques | ADEM 2026 : 20 métiers très en pénurie (comptables retirés) |
| Frontaliers | Oui : annuel par région et pays (INAMI, 30/06/2025) | Oui : mensuel (IGSS, juillet 2026) |
| Emploi selon le pays de naissance | Oui : annuel par région (2025) | Oui : annuel (2025) |

- Sources de l'inventaire : tables Eurostat citées dans les sections 1 à 12 — [Eurostat, base de données](https://ec.europa.eu/eurostat/fr/data/database) ; open data ADEM — [data.public.lu](https://data.public.lu/fr/datasets/chiffres-cles-de-ladem/) ; tableaux de bord IGSS — [IGSS](https://igss.gouvernement.lu/dam-assets/publications/tableau-de-bord-emploi/2026/emploi-202607.pdf)

### Inferences
- Pour la comparaison internationale, les seuls indicateurs strictement comparables entre Wallonie, Bruxelles, Luxembourg et les autres régions francophones de l'OCDE sont ceux de l'EFT (chômage BIT, longue durée, slack, emploi par pays de naissance). Les ratios chômeurs/postes vacants ne le sont pas : enquête au lieu de travail en Belgique, déclarations administratives partielles au Luxembourg.
- Les indicateurs côté demandeur les plus directement pertinents (candidatures par offre, taux de réponse, délai de retour à l'emploi par cohorte) ne sont publiés dans aucun des deux pays ; l'étude devra soit les approcher par des proxys (transitions EFT, ratios par métier), soit s'appuyer sur des relevés originaux comme l'échantillon LinkedIn de l'auteur, en les présentant comme tels.

### Gaps
- Non publié (constaté) : nombre de candidats par offre (Belgique et Luxembourg) ; durée de vacance des postes (Belgique, explicitement absente de l'enquête Statbel) ; taux de vacance par province belge ; taux de transition chômage → emploi par région belge (seule la part « toujours au chômage » est ventilée) ; durée moyenne d'inscription (Forem, Actiris, ADEM).
- Publié mais non récupéré dans cette collecte : effectifs régionaux d'emplois vacants Statbel au T2 2026 (captcha) ; taux de sortie vers l'emploi de l'ensemble des inscrits du Forem et d'Actiris (une note view.brussels sur les « taux de sortie positive et vers l'emploi à 12 mois » existe mais son lien renvoie une erreur 404) ; étude Forem d'août 2025 sur l'insertion des jeunes inscrits en 2024 ; transitions annuelles Statbel postérieures au T1 2025 et leur détail régional ; part des navetteurs dans l'emploi bruxellois après 2022 ; chômage administratif par province (IWEPS) ; rapports IBA-OIE récents ; Monitoring socio-économique postérieur à 2022 ; note STATEC sur l'écart BIT/ADEM ; fichiers ONEM par vague et région ; liste nominative des 20 métiers très en pénurie de l'ADEM.
- À vérifier visuellement avant citation : taux de sortie vers l'emploi ADEM 2025 (« 58 % » lu par extraction automatique) ; valeurs sectorielles de croissance de l'emploi tirées du graphique de la présentation tripartite.
- Données attendues prochainement : Forem octobre 2026 ; EFT Statbel T3 2026 ; emplois vacants Statbel T3 2026 ; ADEM novembre 2026 (publication autour du 20 décembre 2026).
