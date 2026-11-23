# Santé, famille, éducation et conditions de vie quotidienne — territoires francophones d'Europe et du Canada

Note de données rédigée le 22 novembre 2026. Chaque chiffre est étiqueté : **[officiel]** (lu tel quel dans la table citée), **[calculé]** (formule indiquée) ou **[non vérifié]** (source secondaire ou non recoupée). « n.d. » = cellule manquante. Codes territoires : FR1 Île-de-France, FRB Centre-Val de Loire, FRC Bourgogne-Franche-Comté, FRD Normandie, FRE Hauts-de-France, FRF Grand Est, FRG Pays de la Loire, FRH Bretagne, FRI Nouvelle-Aquitaine, FRJ Occitanie, FRK Auvergne-Rhône-Alpes, FRL Provence-Alpes-Côte d'Azur, FRM Corse ; BE1 Bruxelles, BE3 Wallonie ; LU00 Luxembourg ; CH01 Région lémanique (GE, VD, VS), CH02 Espace Mittelland (BE, FR, SO, NE, JU) ; provinces et territoires canadiens codés ISO 3166-2 (CA-QC, CA-NB, CA-ON, CA-MB, CA-SK, CA-AB, CA-BC, CA-NS, CA-PE, CA-NL, CA-YT, CA-NT, CA-NU) ; références nationales FR, BE, LU, CH, CA.

Fichier compagnon (même dossier) : `sante_famille_education_indicateurs.csv` (423 lignes, mêmes colonnes que le bloc CSV ci-dessous).

## 1. Indicateurs disponibles pour la plupart des territoires (bloc CSV harmonisé) et comparabilité Europe–Canada

### Takeaway
Six familles d'indicateurs existent pour presque tous les territoires : espérance de vie, médecins pour 1 000 habitants, diplômés du supérieur chez les 25-34 ans, taux d'homicides, exposition aux PM2,5 et satisfaction à l'égard de la vie (cette dernière seulement au niveau national en Europe). Les définitions européennes (Eurostat) et canadiennes (Statistique Canada) ne coïncident jamais exactement : les ruptures sont listées ci-dessous et doivent accompagner tout classement.

### Cited Findings

Clés de sources du bloc CSV (URL exactes des requêtes ; la liste `geo` complète est `geo=FR&geo=BE&geo=LU&geo=CH&geo=FR1&geo=FRB&geo=FRC&geo=FRD&geo=FRE&geo=FRF&geo=FRG&geo=FRH&geo=FRI&geo=FRJ&geo=FRK&geo=FRL&geo=FRM&geo=BE1&geo=BE3&geo=LU00&geo=CH01&geo=CH02`, abrégée `<GEO>`) :

- `ESTAT_demo_r_mlifexp` — espérance de vie à la naissance, NUTS 2, 2024 — [Eurostat demo_r_mlifexp](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/demo_r_mlifexp?format=JSON&lang=EN&sinceTimePeriod=2018&sex=T&age=Y_LT1&unit=YR&geo=FR1) (ajouter `<GEO>`)
- `ESTAT_demo_r_minfind` — mortalité infantile, 2024 — [Eurostat demo_r_minfind](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/demo_r_minfind?format=JSON&lang=EN&sinceTimePeriod=2018&unit=RT&geo=FR1)
- `ESTAT_edat_lfse_16` — sorties précoces 18-24 ans, 2025 — [Eurostat edat_lfse_16](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/edat_lfse_16?format=JSON&lang=EN&sinceTimePeriod=2018&sex=T&age=Y18-24&unit=PC&geo=FR1)
- `ESTAT_edat_lfse_04` — niveau de diplôme des 25-34 ans (ED5-8 et ED0-2), 2025 — [Eurostat edat_lfse_04](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/edat_lfse_04?format=JSON&lang=EN&sinceTimePeriod=2018&sex=T&age=Y25-34&isced11=ED5-8&unit=PC&geo=FR1)
- `ESTAT_crim_gen_reg` — infractions enregistrées par la police, NUTS, 2024 (LU : 2022) — [Eurostat crim_gen_reg](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/crim_gen_reg?format=JSON&lang=EN&sinceTimePeriod=2018&iccs=ICCS0101&unit=P_HTHAB&geo=FR1)
- `ESTAT_ilc_pw01` — satisfaction à l'égard de la vie (moyenne 0-10, 16 ans et plus), pays, 2025 (CH : 2024) — [Eurostat ilc_pw01](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/ilc_pw01?format=JSON&lang=EN&sinceTimePeriod=2018&life_sat=LIFE&statinfo=AVG&isced11=TOTAL&sex=T&age=Y_GE16&unit=RTG&geo=FR&geo=BE&geo=LU&geo=CH)
- `ESTAT_demo_r_frate2` — indice conjoncturel de fécondité, 2024 — [Eurostat demo_r_frate2](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/demo_r_frate2?format=JSON&lang=EN&sinceTimePeriod=2018&age=TOTAL&unit=NR&geo=FR1)
- `ESTAT_lfst_r_lfe2ehour` — heures hebdomadaires habituelles, emploi principal, 20-64 ans, 2025 — [Eurostat lfst_r_lfe2ehour](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/lfst_r_lfe2ehour?format=JSON&lang=EN&sinceTimePeriod=2018&sex=T&age=Y20-64&unit=HR&geo=FR1)
- `ESTAT_lfsa_ewhun2` — heures habituelles des personnes à temps plein, pays, 2025 — [Eurostat lfsa_ewhun2](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/lfsa_ewhun2?format=JSON&lang=EN&sinceTimePeriod=2018&nace_r2=TOTAL&wstatus=EMP&worktime=FT&age=Y20-64&sex=T&unit=HR&geo=FR&geo=BE&geo=LU&geo=CH)
- `STATCAN_13-10-0114` — tables de mortalité complètes, moyenne triennale 2022-2024, Canada et 9 provinces — [Statistique Canada 13-10-0114-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1310011401) ; fichier [13100114-eng.zip](https://www150.statcan.gc.ca/n1/tbl/csv/13100114-eng.zip)
- `STATCAN_13-10-0140` — tables de mortalité abrégées, Île-du-Prince-Édouard et territoires, 2022-2024 — [13-10-0140-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1310014001) ; [13100140-eng.zip](https://www150.statcan.gc.ca/n1/tbl/csv/13100140-eng.zip)
- `STATCAN_13-10-0713` — mortalité infantile, 2024 — [13-10-0713-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1310071301) ; [13100713-eng.zip](https://www150.statcan.gc.ca/n1/tbl/csv/13100713-eng.zip)
- `STATCAN_37-10-0130` — niveau de scolarité par groupe d'âge, 2025 — [37-10-0130-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3710013001) ; [37100130-eng.zip](https://www150.statcan.gc.ca/n1/tbl/csv/37100130-eng.zip)
- `STATCAN_35-10-0068` — victimes d'homicide et taux, 2025 — [35-10-0068-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3510006801) ; [35100068-eng.zip](https://www150.statcan.gc.ca/n1/tbl/csv/35100068-eng.zip)
- `STATCAN_35-10-0026` — Indice de gravité de la criminalité (IGC), 2025 — [35-10-0026-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3510002601) ; [35100026-eng.zip](https://www150.statcan.gc.ca/n1/tbl/csv/35100026-eng.zip)
- `STATCAN_13-10-0843` — satisfaction à l'égard de la vie (Enquête sociale canadienne, note moyenne 0-10), 2e trimestre 2025 — [13-10-0843-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1310084301) ; [13100843-eng.zip](https://www150.statcan.gc.ca/n1/tbl/csv/13100843-eng.zip)
- `STATCAN_13-10-0418` — indice synthétique de fécondité, 2025 — [13-10-0418-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1310041801) ; [13100418-eng.zip](https://www150.statcan.gc.ca/n1/tbl/csv/13100418-eng.zip)
- `STATCAN_14-10-0043` — heures habituelles, emploi principal, 15 ans et plus, 2025 — [14-10-0043-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410004301) ; [14100043-eng.zip](https://www150.statcan.gc.ca/n1/tbl/csv/14100043-eng.zip)
- `OCDE_REG_HEALTH_DF_CARE` — médecins actifs et infirmiers en exercice pour 1 000 habitants, régions TL2 (seule source qui couvre à la fois les régions européennes et les provinces canadiennes) — [OCDE SDMX DSD_REG_HEALTH@DF_CARE](https://sdmx.oecd.org/public/rest/data/OECD.CFE.EDS,DSD_REG_HEALTH@DF_CARE,2.5/all?startPeriod=2018&dimensionAtObservation=AllDimensions&format=csvfilewithlabels)
- `OCDE_ENV_DF_AIR_POLL` — exposition moyenne de la population aux PM2,5 (µg/m³), pays et régions TL2, dernière année disponible 2020 — [OCDE SDMX DSD_AIR_POL@DF_AIR_POLL](https://sdmx.oecd.org/public/rest/data/OECD.ENV.EPI,DSD_AIR_POL@DF_AIR_POLL,/all?startPeriod=2018&dimensionAtObservation=AllDimensions&format=csvfilewithlabels)

Bloc CSV (territoire, indicateur, valeur, unité, année, source, statut) :

```csv
territoire,indicateur,valeur,unite,annee,source,statut
FR,esperance_vie_naissance,83.0,annees,2024,ESTAT_demo_r_mlifexp,officiel
FR1,esperance_vie_naissance,84.6,annees,2024,ESTAT_demo_r_mlifexp,officiel
FRB,esperance_vie_naissance,82.6,annees,2024,ESTAT_demo_r_mlifexp,officiel
FRC,esperance_vie_naissance,82.4,annees,2024,ESTAT_demo_r_mlifexp,officiel
FRD,esperance_vie_naissance,82.1,annees,2024,ESTAT_demo_r_mlifexp,officiel
FRE,esperance_vie_naissance,81.4,annees,2024,ESTAT_demo_r_mlifexp,officiel
FRF,esperance_vie_naissance,82.1,annees,2024,ESTAT_demo_r_mlifexp,officiel
FRG,esperance_vie_naissance,83.5,annees,2024,ESTAT_demo_r_mlifexp,officiel
FRH,esperance_vie_naissance,82.5,annees,2024,ESTAT_demo_r_mlifexp,officiel
FRI,esperance_vie_naissance,83.1,annees,2024,ESTAT_demo_r_mlifexp,officiel
FRJ,esperance_vie_naissance,83.3,annees,2024,ESTAT_demo_r_mlifexp,officiel
FRK,esperance_vie_naissance,83.9,annees,2024,ESTAT_demo_r_mlifexp,officiel
FRL,esperance_vie_naissance,83.8,annees,2024,ESTAT_demo_r_mlifexp,officiel
FRM,esperance_vie_naissance,84.0,annees,2024,ESTAT_demo_r_mlifexp,officiel
BE,esperance_vie_naissance,82.4,annees,2024,ESTAT_demo_r_mlifexp,officiel
BE1,esperance_vie_naissance,82.1,annees,2024,ESTAT_demo_r_mlifexp,officiel
BE3,esperance_vie_naissance,80.7,annees,2024,ESTAT_demo_r_mlifexp,officiel
LU,esperance_vie_naissance,83.2,annees,2024,ESTAT_demo_r_mlifexp,officiel
LU00,esperance_vie_naissance,83.2,annees,2024,ESTAT_demo_r_mlifexp,officiel
CH,esperance_vie_naissance,84.2,annees,2024,ESTAT_demo_r_mlifexp,officiel
CH01,esperance_vie_naissance,84.6,annees,2024,ESTAT_demo_r_mlifexp,officiel
CH02,esperance_vie_naissance,83.8,annees,2024,ESTAT_demo_r_mlifexp,officiel
CA,esperance_vie_naissance,81.65,annees,2022/2024,STATCAN_13-10-0114,officiel
CA-QC,esperance_vie_naissance,82.39,annees,2022/2024,STATCAN_13-10-0114,officiel
CA-NB,esperance_vie_naissance,80.12,annees,2022/2024,STATCAN_13-10-0114,officiel
CA-ON,esperance_vie_naissance,82.27,annees,2022/2024,STATCAN_13-10-0114,officiel
CA-MB,esperance_vie_naissance,78.90,annees,2022/2024,STATCAN_13-10-0114,officiel
CA-SK,esperance_vie_naissance,79.02,annees,2022/2024,STATCAN_13-10-0114,officiel
CA-AB,esperance_vie_naissance,80.81,annees,2022/2024,STATCAN_13-10-0114,officiel
CA-BC,esperance_vie_naissance,81.98,annees,2022/2024,STATCAN_13-10-0114,officiel
CA-NS,esperance_vie_naissance,80.30,annees,2022/2024,STATCAN_13-10-0114,officiel
CA-NL,esperance_vie_naissance,79.17,annees,2022/2024,STATCAN_13-10-0114,officiel
CA-PE,esperance_vie_naissance,81.16,annees,2022/2024,STATCAN_13-10-0140,officiel
CA-YT,esperance_vie_naissance,NA,annees,,STATCAN_13-10-0140,manquant
CA-NT,esperance_vie_naissance,76.29,annees,2022/2024,STATCAN_13-10-0140,officiel
CA-NU,esperance_vie_naissance,70.84,annees,2022/2024,STATCAN_13-10-0140,officiel
FR,mortalite_infantile,4.1,pour 1000 naissances vivantes,2024,ESTAT_demo_r_minfind,officiel
FR1,mortalite_infantile,4.1,pour 1000 naissances vivantes,2024,ESTAT_demo_r_minfind,officiel
FRB,mortalite_infantile,4.1,pour 1000 naissances vivantes,2024,ESTAT_demo_r_minfind,officiel
FRC,mortalite_infantile,4.4,pour 1000 naissances vivantes,2024,ESTAT_demo_r_minfind,officiel
FRD,mortalite_infantile,4.1,pour 1000 naissances vivantes,2024,ESTAT_demo_r_minfind,officiel
FRE,mortalite_infantile,3.6,pour 1000 naissances vivantes,2024,ESTAT_demo_r_minfind,officiel
FRF,mortalite_infantile,4.9,pour 1000 naissances vivantes,2024,ESTAT_demo_r_minfind,officiel
FRG,mortalite_infantile,3.5,pour 1000 naissances vivantes,2024,ESTAT_demo_r_minfind,officiel
FRH,mortalite_infantile,4.2,pour 1000 naissances vivantes,2024,ESTAT_demo_r_minfind,officiel
FRI,mortalite_infantile,3.4,pour 1000 naissances vivantes,2024,ESTAT_demo_r_minfind,officiel
FRJ,mortalite_infantile,3.3,pour 1000 naissances vivantes,2024,ESTAT_demo_r_minfind,officiel
FRK,mortalite_infantile,3.4,pour 1000 naissances vivantes,2024,ESTAT_demo_r_minfind,officiel
FRL,mortalite_infantile,3.7,pour 1000 naissances vivantes,2024,ESTAT_demo_r_minfind,officiel
FRM,mortalite_infantile,2.8,pour 1000 naissances vivantes,2024,ESTAT_demo_r_minfind,officiel
BE,mortalite_infantile,3.5,pour 1000 naissances vivantes,2024,ESTAT_demo_r_minfind,officiel
BE1,mortalite_infantile,3.2,pour 1000 naissances vivantes,2024,ESTAT_demo_r_minfind,officiel
BE3,mortalite_infantile,3.9,pour 1000 naissances vivantes,2024,ESTAT_demo_r_minfind,officiel
LU,mortalite_infantile,5.3,pour 1000 naissances vivantes,2024,ESTAT_demo_r_minfind,officiel
LU00,mortalite_infantile,5.3,pour 1000 naissances vivantes,2024,ESTAT_demo_r_minfind,officiel
CH,mortalite_infantile,3.3,pour 1000 naissances vivantes,2024,ESTAT_demo_r_minfind,officiel
CH01,mortalite_infantile,3.1,pour 1000 naissances vivantes,2024,ESTAT_demo_r_minfind,officiel
CH02,mortalite_infantile,3.5,pour 1000 naissances vivantes,2024,ESTAT_demo_r_minfind,officiel
CA,mortalite_infantile,4.5,pour 1000 naissances vivantes,2024,STATCAN_13-10-0713,officiel
CA-QC,mortalite_infantile,4.9,pour 1000 naissances vivantes,2024,STATCAN_13-10-0713,officiel
CA-NB,mortalite_infantile,6.0,pour 1000 naissances vivantes,2024,STATCAN_13-10-0713,officiel
CA-ON,mortalite_infantile,4.3,pour 1000 naissances vivantes,2024,STATCAN_13-10-0713,officiel
CA-MB,mortalite_infantile,7.4,pour 1000 naissances vivantes,2024,STATCAN_13-10-0713,officiel
CA-SK,mortalite_infantile,6.3,pour 1000 naissances vivantes,2024,STATCAN_13-10-0713,officiel
CA-AB,mortalite_infantile,4.4,pour 1000 naissances vivantes,2024,STATCAN_13-10-0713,officiel
CA-BC,mortalite_infantile,3.3,pour 1000 naissances vivantes,2024,STATCAN_13-10-0713,officiel
CA-NS,mortalite_infantile,2.9,pour 1000 naissances vivantes,2024,STATCAN_13-10-0713,officiel
CA-PE,mortalite_infantile,3.0,pour 1000 naissances vivantes,2024,STATCAN_13-10-0713,officiel
CA-NL,mortalite_infantile,2.9,pour 1000 naissances vivantes,2024,STATCAN_13-10-0713,officiel
CA-YT,mortalite_infantile,4.4,pour 1000 naissances vivantes,2024,STATCAN_13-10-0713,officiel
CA-NT,mortalite_infantile,8.4,pour 1000 naissances vivantes,2024,STATCAN_13-10-0713,officiel
CA-NU,mortalite_infantile,21.2,pour 1000 naissances vivantes,2024,STATCAN_13-10-0713,officiel
FR,medecins_pour_1000,3.44,pour 1000 hab.,2025,OCDE_REG_HEALTH_DF_CARE,officiel
FR1,medecins_pour_1000,3.87,pour 1000 hab.,2025,OCDE_REG_HEALTH_DF_CARE,officiel
FRB,medecins_pour_1000,2.6,pour 1000 hab.,2025,OCDE_REG_HEALTH_DF_CARE,officiel
FRC,medecins_pour_1000,3.08,pour 1000 hab.,2025,OCDE_REG_HEALTH_DF_CARE,officiel
FRD,medecins_pour_1000,3.03,pour 1000 hab.,2025,OCDE_REG_HEALTH_DF_CARE,officiel
FRE,medecins_pour_1000,3.06,pour 1000 hab.,2025,OCDE_REG_HEALTH_DF_CARE,officiel
FRF,medecins_pour_1000,3.29,pour 1000 hab.,2025,OCDE_REG_HEALTH_DF_CARE,officiel
FRG,medecins_pour_1000,3.0,pour 1000 hab.,2025,OCDE_REG_HEALTH_DF_CARE,officiel
FRH,medecins_pour_1000,3.49,pour 1000 hab.,2025,OCDE_REG_HEALTH_DF_CARE,officiel
FRI,medecins_pour_1000,3.54,pour 1000 hab.,2025,OCDE_REG_HEALTH_DF_CARE,officiel
FRJ,medecins_pour_1000,3.49,pour 1000 hab.,2025,OCDE_REG_HEALTH_DF_CARE,officiel
FRK,medecins_pour_1000,3.49,pour 1000 hab.,2025,OCDE_REG_HEALTH_DF_CARE,officiel
FRL,medecins_pour_1000,4.08,pour 1000 hab.,2025,OCDE_REG_HEALTH_DF_CARE,officiel
FRM,medecins_pour_1000,3.35,pour 1000 hab.,2025,OCDE_REG_HEALTH_DF_CARE,officiel
BE,medecins_pour_1000,3.02,pour 1000 hab.,2023,OCDE_REG_HEALTH_DF_CARE,officiel
BE1,medecins_pour_1000,4.44,pour 1000 hab.,2023,OCDE_REG_HEALTH_DF_CARE,officiel
BE3,medecins_pour_1000,3.14,pour 1000 hab.,2023,OCDE_REG_HEALTH_DF_CARE,officiel
LU,medecins_pour_1000,NA,pour 1000 hab.,,OCDE_REG_HEALTH_DF_CARE,manquant
LU00,medecins_pour_1000,NA,pour 1000 hab.,,OCDE_REG_HEALTH_DF_CARE,manquant
CH,medecins_pour_1000,4.73,pour 1000 hab.,2024,OCDE_REG_HEALTH_DF_CARE,officiel
CH01,medecins_pour_1000,5.19,pour 1000 hab.,2024,OCDE_REG_HEALTH_DF_CARE,officiel
CH02,medecins_pour_1000,4.29,pour 1000 hab.,2024,OCDE_REG_HEALTH_DF_CARE,officiel
CA,medecins_pour_1000,2.41,pour 1000 hab.,2024,OCDE_REG_HEALTH_DF_CARE,officiel
CA-QC,medecins_pour_1000,2.62,pour 1000 hab.,2024,OCDE_REG_HEALTH_DF_CARE,officiel
CA-NB,medecins_pour_1000,2.58,pour 1000 hab.,2024,OCDE_REG_HEALTH_DF_CARE,officiel
CA-ON,medecins_pour_1000,2.21,pour 1000 hab.,2024,OCDE_REG_HEALTH_DF_CARE,officiel
CA-MB,medecins_pour_1000,2.25,pour 1000 hab.,2024,OCDE_REG_HEALTH_DF_CARE,officiel
CA-SK,medecins_pour_1000,2.17,pour 1000 hab.,2024,OCDE_REG_HEALTH_DF_CARE,officiel
CA-AB,medecins_pour_1000,2.39,pour 1000 hab.,2024,OCDE_REG_HEALTH_DF_CARE,officiel
CA-BC,medecins_pour_1000,2.73,pour 1000 hab.,2024,OCDE_REG_HEALTH_DF_CARE,officiel
CA-NS,medecins_pour_1000,2.67,pour 1000 hab.,2024,OCDE_REG_HEALTH_DF_CARE,officiel
CA-PE,medecins_pour_1000,2.1,pour 1000 hab.,2024,OCDE_REG_HEALTH_DF_CARE,officiel
CA-NL,medecins_pour_1000,2.6,pour 1000 hab.,2024,OCDE_REG_HEALTH_DF_CARE,officiel
CA-YT,medecins_pour_1000,1.89,pour 1000 hab.,2024,OCDE_REG_HEALTH_DF_CARE,officiel
CA-NT,medecins_pour_1000,1.13,pour 1000 hab.,2024,OCDE_REG_HEALTH_DF_CARE,officiel
CA-NU,medecins_pour_1000,0.56,pour 1000 hab.,2024,OCDE_REG_HEALTH_DF_CARE,officiel
FR,infirmiers_pour_1000,10.97,pour 1000 hab.,2021,OCDE_REG_HEALTH_DF_CARE,officiel
FR1,infirmiers_pour_1000,9.78,pour 1000 hab.,2021,OCDE_REG_HEALTH_DF_CARE,officiel
FRB,infirmiers_pour_1000,9.24,pour 1000 hab.,2021,OCDE_REG_HEALTH_DF_CARE,officiel
FRC,infirmiers_pour_1000,11.25,pour 1000 hab.,2021,OCDE_REG_HEALTH_DF_CARE,officiel
FRD,infirmiers_pour_1000,10.79,pour 1000 hab.,2021,OCDE_REG_HEALTH_DF_CARE,officiel
FRE,infirmiers_pour_1000,10.89,pour 1000 hab.,2021,OCDE_REG_HEALTH_DF_CARE,officiel
FRF,infirmiers_pour_1000,11.39,pour 1000 hab.,2021,OCDE_REG_HEALTH_DF_CARE,officiel
FRG,infirmiers_pour_1000,9.17,pour 1000 hab.,2021,OCDE_REG_HEALTH_DF_CARE,officiel
FRH,infirmiers_pour_1000,11.64,pour 1000 hab.,2021,OCDE_REG_HEALTH_DF_CARE,officiel
FRI,infirmiers_pour_1000,11.55,pour 1000 hab.,2021,OCDE_REG_HEALTH_DF_CARE,officiel
FRJ,infirmiers_pour_1000,12.21,pour 1000 hab.,2021,OCDE_REG_HEALTH_DF_CARE,officiel
FRK,infirmiers_pour_1000,11.66,pour 1000 hab.,2021,OCDE_REG_HEALTH_DF_CARE,officiel
FRL,infirmiers_pour_1000,12.73,pour 1000 hab.,2021,OCDE_REG_HEALTH_DF_CARE,officiel
FRM,infirmiers_pour_1000,12.63,pour 1000 hab.,2021,OCDE_REG_HEALTH_DF_CARE,officiel
BE,infirmiers_pour_1000,11.42,pour 1000 hab.,2023,OCDE_REG_HEALTH_DF_CARE,officiel
BE1,infirmiers_pour_1000,10.62,pour 1000 hab.,2023,OCDE_REG_HEALTH_DF_CARE,officiel
BE3,infirmiers_pour_1000,10.47,pour 1000 hab.,2023,OCDE_REG_HEALTH_DF_CARE,officiel
LU,infirmiers_pour_1000,NA,pour 1000 hab.,,OCDE_REG_HEALTH_DF_CARE,manquant
LU00,infirmiers_pour_1000,NA,pour 1000 hab.,,OCDE_REG_HEALTH_DF_CARE,manquant
CH,infirmiers_pour_1000,19.02,pour 1000 hab.,2024,OCDE_REG_HEALTH_DF_CARE,officiel
CH01,infirmiers_pour_1000,18.36,pour 1000 hab.,2024,OCDE_REG_HEALTH_DF_CARE,officiel
CH02,infirmiers_pour_1000,19.06,pour 1000 hab.,2024,OCDE_REG_HEALTH_DF_CARE,officiel
CA,infirmiers_pour_1000,9.93,pour 1000 hab.,2021,OCDE_REG_HEALTH_DF_CARE,officiel
CA-QC,infirmiers_pour_1000,10.47,pour 1000 hab.,2021,OCDE_REG_HEALTH_DF_CARE,officiel
CA-NB,infirmiers_pour_1000,12.36,pour 1000 hab.,2021,OCDE_REG_HEALTH_DF_CARE,officiel
CA-ON,infirmiers_pour_1000,9.53,pour 1000 hab.,2021,OCDE_REG_HEALTH_DF_CARE,officiel
CA-MB,infirmiers_pour_1000,NA,pour 1000 hab.,,OCDE_REG_HEALTH_DF_CARE,manquant
CA-SK,infirmiers_pour_1000,11.97,pour 1000 hab.,2021,OCDE_REG_HEALTH_DF_CARE,officiel
CA-AB,infirmiers_pour_1000,10.7,pour 1000 hab.,2021,OCDE_REG_HEALTH_DF_CARE,officiel
CA-BC,infirmiers_pour_1000,9.63,pour 1000 hab.,2021,OCDE_REG_HEALTH_DF_CARE,officiel
CA-NS,infirmiers_pour_1000,13.07,pour 1000 hab.,2021,OCDE_REG_HEALTH_DF_CARE,officiel
CA-PE,infirmiers_pour_1000,NA,pour 1000 hab.,,OCDE_REG_HEALTH_DF_CARE,manquant
CA-NL,infirmiers_pour_1000,14.57,pour 1000 hab.,2021,OCDE_REG_HEALTH_DF_CARE,officiel
CA-YT,infirmiers_pour_1000,11.64,pour 1000 hab.,2021,OCDE_REG_HEALTH_DF_CARE,officiel
CA-NT,infirmiers_pour_1000,NA,pour 1000 hab.,,OCDE_REG_HEALTH_DF_CARE,manquant
CA-NU,infirmiers_pour_1000,NA,pour 1000 hab.,,OCDE_REG_HEALTH_DF_CARE,manquant
FR,sorties_precoces_18_24,7.2,%,2025,ESTAT_edat_lfse_16,officiel
FR1,sorties_precoces_18_24,5.0,%,2025,ESTAT_edat_lfse_16,officiel
FRB,sorties_precoces_18_24,6.6,%,2025,ESTAT_edat_lfse_16,officiel
FRC,sorties_precoces_18_24,6.1,%,2025,ESTAT_edat_lfse_16,officiel
FRD,sorties_precoces_18_24,12.1,%,2025,ESTAT_edat_lfse_16,officiel
FRE,sorties_precoces_18_24,7.6,%,2025,ESTAT_edat_lfse_16,officiel
FRF,sorties_precoces_18_24,7.9,%,2025,ESTAT_edat_lfse_16,officiel
FRG,sorties_precoces_18_24,7.5,%,2025,ESTAT_edat_lfse_16,officiel
FRH,sorties_precoces_18_24,4.7,%,2025,ESTAT_edat_lfse_16,officiel
FRI,sorties_precoces_18_24,8.2,%,2025,ESTAT_edat_lfse_16,officiel
FRJ,sorties_precoces_18_24,6.4,%,2025,ESTAT_edat_lfse_16,officiel
FRK,sorties_precoces_18_24,5.4,%,2025,ESTAT_edat_lfse_16,officiel
FRL,sorties_precoces_18_24,9.2,%,2025,ESTAT_edat_lfse_16,officiel
FRM,sorties_precoces_18_24,21.5,%,2023,ESTAT_edat_lfse_16,officiel
BE,sorties_precoces_18_24,7.3,%,2025,ESTAT_edat_lfse_16,officiel
BE1,sorties_precoces_18_24,8.8,%,2025,ESTAT_edat_lfse_16,officiel
BE3,sorties_precoces_18_24,9.8,%,2025,ESTAT_edat_lfse_16,officiel
LU,sorties_precoces_18_24,5.2,%,2025,ESTAT_edat_lfse_16,officiel
LU00,sorties_precoces_18_24,5.2,%,2025,ESTAT_edat_lfse_16,officiel
CH,sorties_precoces_18_24,5.5,%,2025,ESTAT_edat_lfse_16,officiel
CH01,sorties_precoces_18_24,6.9,%,2025,ESTAT_edat_lfse_16,officiel
CH02,sorties_precoces_18_24,5.4,%,2025,ESTAT_edat_lfse_16,officiel
FR,diplomes_superieur_25_34,55.8,%,2025,ESTAT_edat_lfse_04,officiel
FR1,diplomes_superieur_25_34,72.7,%,2025,ESTAT_edat_lfse_04,officiel
FRB,diplomes_superieur_25_34,51.6,%,2025,ESTAT_edat_lfse_04,officiel
FRC,diplomes_superieur_25_34,44.0,%,2025,ESTAT_edat_lfse_04,officiel
FRD,diplomes_superieur_25_34,49.1,%,2025,ESTAT_edat_lfse_04,officiel
FRE,diplomes_superieur_25_34,49.4,%,2025,ESTAT_edat_lfse_04,officiel
FRF,diplomes_superieur_25_34,48.0,%,2025,ESTAT_edat_lfse_04,officiel
FRG,diplomes_superieur_25_34,54.9,%,2025,ESTAT_edat_lfse_04,officiel
FRH,diplomes_superieur_25_34,48.9,%,2025,ESTAT_edat_lfse_04,officiel
FRI,diplomes_superieur_25_34,51.6,%,2025,ESTAT_edat_lfse_04,officiel
FRJ,diplomes_superieur_25_34,52.9,%,2025,ESTAT_edat_lfse_04,officiel
FRK,diplomes_superieur_25_34,58.5,%,2025,ESTAT_edat_lfse_04,officiel
FRL,diplomes_superieur_25_34,52.3,%,2025,ESTAT_edat_lfse_04,officiel
FRM,diplomes_superieur_25_34,28.7,%,2025,ESTAT_edat_lfse_04,officiel
BE,diplomes_superieur_25_34,52.7,%,2025,ESTAT_edat_lfse_04,officiel
BE1,diplomes_superieur_25_34,63.5,%,2025,ESTAT_edat_lfse_04,officiel
BE3,diplomes_superieur_25_34,46.3,%,2025,ESTAT_edat_lfse_04,officiel
LU,diplomes_superieur_25_34,65.2,%,2025,ESTAT_edat_lfse_04,officiel
LU00,diplomes_superieur_25_34,65.2,%,2025,ESTAT_edat_lfse_04,officiel
CH,diplomes_superieur_25_34,50.6,%,2025,ESTAT_edat_lfse_04,officiel
CH01,diplomes_superieur_25_34,51.5,%,2025,ESTAT_edat_lfse_04,officiel
CH02,diplomes_superieur_25_34,45.4,%,2025,ESTAT_edat_lfse_04,officiel
FR,sans_diplome_secondaire_sup_25_34,10.1,%,2025,ESTAT_edat_lfse_04,officiel
FR1,sans_diplome_secondaire_sup_25_34,6.9,%,2025,ESTAT_edat_lfse_04,officiel
FRB,sans_diplome_secondaire_sup_25_34,8.6,%,2025,ESTAT_edat_lfse_04,officiel
FRC,sans_diplome_secondaire_sup_25_34,13.5,%,2025,ESTAT_edat_lfse_04,officiel
FRD,sans_diplome_secondaire_sup_25_34,11.0,%,2025,ESTAT_edat_lfse_04,officiel
FRE,sans_diplome_secondaire_sup_25_34,11.4,%,2025,ESTAT_edat_lfse_04,officiel
FRF,sans_diplome_secondaire_sup_25_34,11.5,%,2025,ESTAT_edat_lfse_04,officiel
FRG,sans_diplome_secondaire_sup_25_34,11.4,%,2025,ESTAT_edat_lfse_04,officiel
FRH,sans_diplome_secondaire_sup_25_34,7.2,%,2025,ESTAT_edat_lfse_04,officiel
FRI,sans_diplome_secondaire_sup_25_34,10.1,%,2025,ESTAT_edat_lfse_04,officiel
FRJ,sans_diplome_secondaire_sup_25_34,10.2,%,2025,ESTAT_edat_lfse_04,officiel
FRK,sans_diplome_secondaire_sup_25_34,7.9,%,2025,ESTAT_edat_lfse_04,officiel
FRL,sans_diplome_secondaire_sup_25_34,10.6,%,2025,ESTAT_edat_lfse_04,officiel
FRM,sans_diplome_secondaire_sup_25_34,18.3,%,2023,ESTAT_edat_lfse_04,officiel
BE,sans_diplome_secondaire_sup_25_34,11.0,%,2025,ESTAT_edat_lfse_04,officiel
BE1,sans_diplome_secondaire_sup_25_34,10.5,%,2025,ESTAT_edat_lfse_04,officiel
BE3,sans_diplome_secondaire_sup_25_34,16.1,%,2025,ESTAT_edat_lfse_04,officiel
LU,sans_diplome_secondaire_sup_25_34,7.7,%,2025,ESTAT_edat_lfse_04,officiel
LU00,sans_diplome_secondaire_sup_25_34,7.7,%,2025,ESTAT_edat_lfse_04,officiel
CH,sans_diplome_secondaire_sup_25_34,9.4,%,2025,ESTAT_edat_lfse_04,officiel
CH01,sans_diplome_secondaire_sup_25_34,13.8,%,2025,ESTAT_edat_lfse_04,officiel
CH02,sans_diplome_secondaire_sup_25_34,9.5,%,2025,ESTAT_edat_lfse_04,officiel
CA,diplomes_superieur_25_34,68,%,2025,STATCAN_37-10-0130,officiel
CA-QC,diplomes_superieur_25_34,60,%,2025,STATCAN_37-10-0130,officiel
CA-NB,diplomes_superieur_25_34,69,%,2025,STATCAN_37-10-0130,officiel
CA-ON,diplomes_superieur_25_34,75,%,2025,STATCAN_37-10-0130,officiel
CA-MB,diplomes_superieur_25_34,59,%,2025,STATCAN_37-10-0130,officiel
CA-SK,diplomes_superieur_25_34,54,%,2025,STATCAN_37-10-0130,officiel
CA-AB,diplomes_superieur_25_34,61,%,2025,STATCAN_37-10-0130,officiel
CA-BC,diplomes_superieur_25_34,68,%,2025,STATCAN_37-10-0130,officiel
CA-NS,diplomes_superieur_25_34,70,%,2025,STATCAN_37-10-0130,officiel
CA-PE,diplomes_superieur_25_34,67,%,2025,STATCAN_37-10-0130,officiel
CA-NL,diplomes_superieur_25_34,62,%,2025,STATCAN_37-10-0130,officiel
CA-YT,diplomes_superieur_25_34,68,%,2025,STATCAN_37-10-0130,officiel
CA-NT,diplomes_superieur_25_34,54,%,2025,STATCAN_37-10-0130,officiel
CA-NU,diplomes_superieur_25_34,23,%,2025,STATCAN_37-10-0130,officiel
CA,sans_diplome_secondaire_sup_25_34,5,%,2025,STATCAN_37-10-0130,officiel
CA-QC,sans_diplome_secondaire_sup_25_34,8,%,2025,STATCAN_37-10-0130,officiel
CA-NB,sans_diplome_secondaire_sup_25_34,3,%,2025,STATCAN_37-10-0130,officiel
CA-ON,sans_diplome_secondaire_sup_25_34,3,%,2025,STATCAN_37-10-0130,officiel
CA-MB,sans_diplome_secondaire_sup_25_34,6,%,2025,STATCAN_37-10-0130,officiel
CA-SK,sans_diplome_secondaire_sup_25_34,5,%,2025,STATCAN_37-10-0130,officiel
CA-AB,sans_diplome_secondaire_sup_25_34,5,%,2025,STATCAN_37-10-0130,officiel
CA-BC,sans_diplome_secondaire_sup_25_34,3,%,2025,STATCAN_37-10-0130,officiel
CA-NS,sans_diplome_secondaire_sup_25_34,4,%,2025,STATCAN_37-10-0130,officiel
CA-PE,sans_diplome_secondaire_sup_25_34,4,%,2025,STATCAN_37-10-0130,officiel
CA-NL,sans_diplome_secondaire_sup_25_34,4,%,2025,STATCAN_37-10-0130,officiel
CA-YT,sans_diplome_secondaire_sup_25_34,4,%,2025,STATCAN_37-10-0130,officiel
CA-NT,sans_diplome_secondaire_sup_25_34,14,%,2025,STATCAN_37-10-0130,officiel
CA-NU,sans_diplome_secondaire_sup_25_34,44,%,2025,STATCAN_37-10-0130,officiel
FR,taux_homicides,1.19,pour 100000 hab.,2024,ESTAT_crim_gen_reg,officiel
FR1,taux_homicides,1.06,pour 100000 hab.,2024,ESTAT_crim_gen_reg,officiel
FRB,taux_homicides,0.73,pour 100000 hab.,2024,ESTAT_crim_gen_reg,officiel
FRC,taux_homicides,0.96,pour 100000 hab.,2024,ESTAT_crim_gen_reg,officiel
FRD,taux_homicides,0.96,pour 100000 hab.,2024,ESTAT_crim_gen_reg,officiel
FRE,taux_homicides,0.75,pour 100000 hab.,2024,ESTAT_crim_gen_reg,officiel
FRF,taux_homicides,0.83,pour 100000 hab.,2024,ESTAT_crim_gen_reg,officiel
FRG,taux_homicides,1.12,pour 100000 hab.,2024,ESTAT_crim_gen_reg,officiel
FRH,taux_homicides,0.55,pour 100000 hab.,2024,ESTAT_crim_gen_reg,officiel
FRI,taux_homicides,0.84,pour 100000 hab.,2024,ESTAT_crim_gen_reg,officiel
FRJ,taux_homicides,1.05,pour 100000 hab.,2024,ESTAT_crim_gen_reg,officiel
FRK,taux_homicides,1.03,pour 100000 hab.,2024,ESTAT_crim_gen_reg,officiel
FRL,taux_homicides,2.0,pour 100000 hab.,2024,ESTAT_crim_gen_reg,officiel
FRM,taux_homicides,4.18,pour 100000 hab.,2024,ESTAT_crim_gen_reg,officiel
BE,taux_homicides,1.4,pour 100000 hab.,2024,ESTAT_crim_gen_reg,officiel
BE1,taux_homicides,2.69,pour 100000 hab.,2024,ESTAT_crim_gen_reg,officiel
BE3,taux_homicides,1.97,pour 100000 hab.,2024,ESTAT_crim_gen_reg,officiel
LU,taux_homicides,1.39,pour 100000 hab.,2022,ESTAT_crim_gen_reg,officiel
LU00,taux_homicides,1.39,pour 100000 hab.,2022,ESTAT_crim_gen_reg,officiel
CH,taux_homicides,0.5,pour 100000 hab.,2024,ESTAT_crim_gen_reg,officiel
CH01,taux_homicides,0.69,pour 100000 hab.,2024,ESTAT_crim_gen_reg,officiel
CH02,taux_homicides,0.41,pour 100000 hab.,2024,ESTAT_crim_gen_reg,officiel
CA,taux_homicides,1.61,pour 100000 hab.,2025,STATCAN_35-10-0068,officiel
CA-QC,taux_homicides,0.97,pour 100000 hab.,2025,STATCAN_35-10-0068,officiel
CA-NB,taux_homicides,1.72,pour 100000 hab.,2025,STATCAN_35-10-0068,officiel
CA-ON,taux_homicides,1.27,pour 100000 hab.,2025,STATCAN_35-10-0068,officiel
CA-MB,taux_homicides,3.64,pour 100000 hab.,2025,STATCAN_35-10-0068,officiel
CA-SK,taux_homicides,5.21,pour 100000 hab.,2025,STATCAN_35-10-0068,officiel
CA-AB,taux_homicides,1.77,pour 100000 hab.,2025,STATCAN_35-10-0068,officiel
CA-BC,taux_homicides,1.81,pour 100000 hab.,2025,STATCAN_35-10-0068,officiel
CA-NS,taux_homicides,1.74,pour 100000 hab.,2025,STATCAN_35-10-0068,officiel
CA-PE,taux_homicides,1.64,pour 100000 hab.,2025,STATCAN_35-10-0068,officiel
CA-NL,taux_homicides,2.18,pour 100000 hab.,2025,STATCAN_35-10-0068,officiel
CA-YT,taux_homicides,6.21,pour 100000 hab.,2025,STATCAN_35-10-0068,officiel
CA-NT,taux_homicides,10.88,pour 100000 hab.,2025,STATCAN_35-10-0068,officiel
CA-NU,taux_homicides,16.73,pour 100000 hab.,2025,STATCAN_35-10-0068,officiel
CA,indice_gravite_criminalite,75.01,indice (Canada 2006=100),2025,STATCAN_35-10-0026,officiel
CA-QC,indice_gravite_criminalite,61.55,indice (Canada 2006=100),2025,STATCAN_35-10-0026,officiel
CA-NB,indice_gravite_criminalite,90.36,indice (Canada 2006=100),2025,STATCAN_35-10-0026,officiel
CA-ON,indice_gravite_criminalite,57.17,indice (Canada 2006=100),2025,STATCAN_35-10-0026,officiel
CA-MB,indice_gravite_criminalite,130.04,indice (Canada 2006=100),2025,STATCAN_35-10-0026,officiel
CA-SK,indice_gravite_criminalite,146.64,indice (Canada 2006=100),2025,STATCAN_35-10-0026,officiel
CA-AB,indice_gravite_criminalite,90.62,indice (Canada 2006=100),2025,STATCAN_35-10-0026,officiel
CA-BC,indice_gravite_criminalite,92.37,indice (Canada 2006=100),2025,STATCAN_35-10-0026,officiel
CA-NS,indice_gravite_criminalite,72.96,indice (Canada 2006=100),2025,STATCAN_35-10-0026,officiel
CA-PE,indice_gravite_criminalite,68.40,indice (Canada 2006=100),2025,STATCAN_35-10-0026,officiel
CA-NL,indice_gravite_criminalite,88.74,indice (Canada 2006=100),2025,STATCAN_35-10-0026,officiel
CA-YT,indice_gravite_criminalite,195.42,indice (Canada 2006=100),2025,STATCAN_35-10-0026,officiel
CA-NT,indice_gravite_criminalite,485.88,indice (Canada 2006=100),2025,STATCAN_35-10-0026,officiel
CA-NU,indice_gravite_criminalite,461.22,indice (Canada 2006=100),2025,STATCAN_35-10-0026,officiel
FR,pm25_exposition_moyenne,9.5,microgrammes/m3,2020,OCDE_ENV_DF_AIR_POLL,officiel
FR1,pm25_exposition_moyenne,11.1,microgrammes/m3,2020,OCDE_ENV_DF_AIR_POLL,officiel
FRB,pm25_exposition_moyenne,8.7,microgrammes/m3,2020,OCDE_ENV_DF_AIR_POLL,officiel
FRC,pm25_exposition_moyenne,8.3,microgrammes/m3,2020,OCDE_ENV_DF_AIR_POLL,officiel
FRD,pm25_exposition_moyenne,9.1,microgrammes/m3,2020,OCDE_ENV_DF_AIR_POLL,officiel
FRE,pm25_exposition_moyenne,10.4,microgrammes/m3,2020,OCDE_ENV_DF_AIR_POLL,officiel
FRF,pm25_exposition_moyenne,9.1,microgrammes/m3,2020,OCDE_ENV_DF_AIR_POLL,officiel
FRG,pm25_exposition_moyenne,8.0,microgrammes/m3,2020,OCDE_ENV_DF_AIR_POLL,officiel
FRH,pm25_exposition_moyenne,7.6,microgrammes/m3,2020,OCDE_ENV_DF_AIR_POLL,officiel
FRI,pm25_exposition_moyenne,8.4,microgrammes/m3,2020,OCDE_ENV_DF_AIR_POLL,officiel
FRJ,pm25_exposition_moyenne,8.9,microgrammes/m3,2020,OCDE_ENV_DF_AIR_POLL,officiel
FRK,pm25_exposition_moyenne,9.3,microgrammes/m3,2020,OCDE_ENV_DF_AIR_POLL,officiel
FRL,pm25_exposition_moyenne,11.2,microgrammes/m3,2020,OCDE_ENV_DF_AIR_POLL,officiel
FRM,pm25_exposition_moyenne,9.5,microgrammes/m3,2020,OCDE_ENV_DF_AIR_POLL,officiel
BE,pm25_exposition_moyenne,11.1,microgrammes/m3,2020,OCDE_ENV_DF_AIR_POLL,officiel
BE1,pm25_exposition_moyenne,12.2,microgrammes/m3,2020,OCDE_ENV_DF_AIR_POLL,officiel
BE3,pm25_exposition_moyenne,10.2,microgrammes/m3,2020,OCDE_ENV_DF_AIR_POLL,officiel
LU,pm25_exposition_moyenne,8.7,microgrammes/m3,2020,OCDE_ENV_DF_AIR_POLL,officiel
LU00,pm25_exposition_moyenne,8.7,microgrammes/m3,2020,OCDE_ENV_DF_AIR_POLL,officiel
CH,pm25_exposition_moyenne,9.0,microgrammes/m3,2020,OCDE_ENV_DF_AIR_POLL,officiel
CH01,pm25_exposition_moyenne,9.1,microgrammes/m3,2020,OCDE_ENV_DF_AIR_POLL,officiel
CH02,pm25_exposition_moyenne,8.1,microgrammes/m3,2020,OCDE_ENV_DF_AIR_POLL,officiel
CA,pm25_exposition_moyenne,6.3,microgrammes/m3,2020,OCDE_ENV_DF_AIR_POLL,officiel
CA-QC,pm25_exposition_moyenne,7.5,microgrammes/m3,2020,OCDE_ENV_DF_AIR_POLL,officiel
CA-NB,pm25_exposition_moyenne,4.8,microgrammes/m3,2020,OCDE_ENV_DF_AIR_POLL,officiel
CA-ON,pm25_exposition_moyenne,6.6,microgrammes/m3,2020,OCDE_ENV_DF_AIR_POLL,officiel
CA-MB,pm25_exposition_moyenne,4.4,microgrammes/m3,2020,OCDE_ENV_DF_AIR_POLL,officiel
CA-SK,pm25_exposition_moyenne,5.6,microgrammes/m3,2020,OCDE_ENV_DF_AIR_POLL,officiel
CA-AB,pm25_exposition_moyenne,6.1,microgrammes/m3,2020,OCDE_ENV_DF_AIR_POLL,officiel
CA-BC,pm25_exposition_moyenne,5.4,microgrammes/m3,2020,OCDE_ENV_DF_AIR_POLL,officiel
CA-NS,pm25_exposition_moyenne,4.8,microgrammes/m3,2020,OCDE_ENV_DF_AIR_POLL,officiel
CA-PE,pm25_exposition_moyenne,3.9,microgrammes/m3,2020,OCDE_ENV_DF_AIR_POLL,officiel
CA-NL,pm25_exposition_moyenne,4.0,microgrammes/m3,2020,OCDE_ENV_DF_AIR_POLL,officiel
CA-YT,pm25_exposition_moyenne,4.0,microgrammes/m3,2020,OCDE_ENV_DF_AIR_POLL,officiel
CA-NT,pm25_exposition_moyenne,5.6,microgrammes/m3,2020,OCDE_ENV_DF_AIR_POLL,officiel
CA-NU,pm25_exposition_moyenne,3.0,microgrammes/m3,2020,OCDE_ENV_DF_AIR_POLL,officiel
FR,satisfaction_vie_0_10,7.1,note moyenne 0-10 (subjectif),2025,ESTAT_ilc_pw01,officiel
BE,satisfaction_vie_0_10,7.6,note moyenne 0-10 (subjectif),2025,ESTAT_ilc_pw01,officiel
LU,satisfaction_vie_0_10,7.4,note moyenne 0-10 (subjectif),2025,ESTAT_ilc_pw01,officiel
CH,satisfaction_vie_0_10,7.7,note moyenne 0-10 (subjectif),2024,ESTAT_ilc_pw01,officiel
CA,satisfaction_vie_0_10,7.0,note moyenne 0-10 (subjectif),2025-04,STATCAN_13-10-0843,officiel
CA-QC,satisfaction_vie_0_10,7.5,note moyenne 0-10 (subjectif),2025-04,STATCAN_13-10-0843,officiel
CA-NB,satisfaction_vie_0_10,7.3,note moyenne 0-10 (subjectif),2025-04,STATCAN_13-10-0843,officiel
CA-ON,satisfaction_vie_0_10,6.8,note moyenne 0-10 (subjectif),2025-04,STATCAN_13-10-0843,officiel
CA-MB,satisfaction_vie_0_10,7.0,note moyenne 0-10 (subjectif),2025-04,STATCAN_13-10-0843,officiel
CA-SK,satisfaction_vie_0_10,6.8,note moyenne 0-10 (subjectif),2025-04,STATCAN_13-10-0843,officiel
CA-AB,satisfaction_vie_0_10,6.6,note moyenne 0-10 (subjectif),2025-04,STATCAN_13-10-0843,officiel
CA-BC,satisfaction_vie_0_10,6.8,note moyenne 0-10 (subjectif),2025-04,STATCAN_13-10-0843,officiel
CA-NS,satisfaction_vie_0_10,7.0,note moyenne 0-10 (subjectif),2025-04,STATCAN_13-10-0843,officiel
CA-PE,satisfaction_vie_0_10,7.3,note moyenne 0-10 (subjectif),2025-04,STATCAN_13-10-0843,officiel
CA-NL,satisfaction_vie_0_10,7.2,note moyenne 0-10 (subjectif),2025-04,STATCAN_13-10-0843,officiel
FR,indice_conjoncturel_fecondite,1.61,enfants par femme,2024,ESTAT_demo_r_frate2,officiel
FR1,indice_conjoncturel_fecondite,1.68,enfants par femme,2024,ESTAT_demo_r_frate2,officiel
FRB,indice_conjoncturel_fecondite,1.66,enfants par femme,2024,ESTAT_demo_r_frate2,officiel
FRC,indice_conjoncturel_fecondite,1.52,enfants par femme,2024,ESTAT_demo_r_frate2,officiel
FRD,indice_conjoncturel_fecondite,1.61,enfants par femme,2024,ESTAT_demo_r_frate2,officiel
FRE,indice_conjoncturel_fecondite,1.64,enfants par femme,2024,ESTAT_demo_r_frate2,officiel
FRF,indice_conjoncturel_fecondite,1.45,enfants par femme,2024,ESTAT_demo_r_frate2,officiel
FRG,indice_conjoncturel_fecondite,1.6,enfants par femme,2024,ESTAT_demo_r_frate2,officiel
FRH,indice_conjoncturel_fecondite,1.53,enfants par femme,2024,ESTAT_demo_r_frate2,officiel
FRI,indice_conjoncturel_fecondite,1.45,enfants par femme,2024,ESTAT_demo_r_frate2,officiel
FRJ,indice_conjoncturel_fecondite,1.46,enfants par femme,2024,ESTAT_demo_r_frate2,officiel
FRK,indice_conjoncturel_fecondite,1.58,enfants par femme,2024,ESTAT_demo_r_frate2,officiel
FRL,indice_conjoncturel_fecondite,1.66,enfants par femme,2024,ESTAT_demo_r_frate2,officiel
FRM,indice_conjoncturel_fecondite,1.21,enfants par femme,2024,ESTAT_demo_r_frate2,officiel
BE,indice_conjoncturel_fecondite,1.44,enfants par femme,2024,ESTAT_demo_r_frate2,officiel
BE1,indice_conjoncturel_fecondite,1.35,enfants par femme,2024,ESTAT_demo_r_frate2,officiel
BE3,indice_conjoncturel_fecondite,1.44,enfants par femme,2024,ESTAT_demo_r_frate2,officiel
LU,indice_conjoncturel_fecondite,1.25,enfants par femme,2024,ESTAT_demo_r_frate2,officiel
LU00,indice_conjoncturel_fecondite,1.25,enfants par femme,2024,ESTAT_demo_r_frate2,officiel
CH,indice_conjoncturel_fecondite,1.29,enfants par femme,2024,ESTAT_demo_r_frate2,officiel
CH01,indice_conjoncturel_fecondite,1.25,enfants par femme,2024,ESTAT_demo_r_frate2,officiel
CH02,indice_conjoncturel_fecondite,1.3,enfants par femme,2024,ESTAT_demo_r_frate2,officiel
CA,indice_conjoncturel_fecondite,1.26,enfants par femme,2025,STATCAN_13-10-0418,officiel
CA-QC,indice_conjoncturel_fecondite,1.36,enfants par femme,2025,STATCAN_13-10-0418,officiel
CA-NB,indice_conjoncturel_fecondite,1.21,enfants par femme,2025,STATCAN_13-10-0418,officiel
CA-ON,indice_conjoncturel_fecondite,1.23,enfants par femme,2025,STATCAN_13-10-0418,officiel
CA-MB,indice_conjoncturel_fecondite,1.50,enfants par femme,2025,STATCAN_13-10-0418,officiel
CA-SK,indice_conjoncturel_fecondite,1.58,enfants par femme,2025,STATCAN_13-10-0418,officiel
CA-AB,indice_conjoncturel_fecondite,1.42,enfants par femme,2025,STATCAN_13-10-0418,officiel
CA-BC,indice_conjoncturel_fecondite,1.04,enfants par femme,2025,STATCAN_13-10-0418,officiel
CA-NS,indice_conjoncturel_fecondite,1.07,enfants par femme,2025,STATCAN_13-10-0418,officiel
CA-PE,indice_conjoncturel_fecondite,1.18,enfants par femme,2025,STATCAN_13-10-0418,officiel
CA-NL,indice_conjoncturel_fecondite,1.08,enfants par femme,2025,STATCAN_13-10-0418,officiel
CA-YT,indice_conjoncturel_fecondite,1.02,enfants par femme,2025,STATCAN_13-10-0418,officiel
CA-NT,indice_conjoncturel_fecondite,1.28,enfants par femme,2025,STATCAN_13-10-0418,officiel
CA-NU,indice_conjoncturel_fecondite,2.40,enfants par femme,2025,STATCAN_13-10-0418,officiel
FR,heures_hebdo_habituelles_tous_emplois,37.2,heures (emploi principal; temps plein et partiel),2025,ESTAT_lfst_r_lfe2ehour,officiel
FR1,heures_hebdo_habituelles_tous_emplois,37.8,heures (emploi principal; temps plein et partiel),2025,ESTAT_lfst_r_lfe2ehour,officiel
FRB,heures_hebdo_habituelles_tous_emplois,37.9,heures (emploi principal; temps plein et partiel),2025,ESTAT_lfst_r_lfe2ehour,officiel
FRC,heures_hebdo_habituelles_tous_emplois,37.1,heures (emploi principal; temps plein et partiel),2025,ESTAT_lfst_r_lfe2ehour,officiel
FRD,heures_hebdo_habituelles_tous_emplois,37.4,heures (emploi principal; temps plein et partiel),2025,ESTAT_lfst_r_lfe2ehour,officiel
FRE,heures_hebdo_habituelles_tous_emplois,36.7,heures (emploi principal; temps plein et partiel),2025,ESTAT_lfst_r_lfe2ehour,officiel
FRF,heures_hebdo_habituelles_tous_emplois,36.5,heures (emploi principal; temps plein et partiel),2025,ESTAT_lfst_r_lfe2ehour,officiel
FRG,heures_hebdo_habituelles_tous_emplois,37.6,heures (emploi principal; temps plein et partiel),2025,ESTAT_lfst_r_lfe2ehour,officiel
FRH,heures_hebdo_habituelles_tous_emplois,37.5,heures (emploi principal; temps plein et partiel),2025,ESTAT_lfst_r_lfe2ehour,officiel
FRI,heures_hebdo_habituelles_tous_emplois,37.0,heures (emploi principal; temps plein et partiel),2025,ESTAT_lfst_r_lfe2ehour,officiel
FRJ,heures_hebdo_habituelles_tous_emplois,36.7,heures (emploi principal; temps plein et partiel),2025,ESTAT_lfst_r_lfe2ehour,officiel
FRK,heures_hebdo_habituelles_tous_emplois,37.1,heures (emploi principal; temps plein et partiel),2025,ESTAT_lfst_r_lfe2ehour,officiel
FRL,heures_hebdo_habituelles_tous_emplois,37.1,heures (emploi principal; temps plein et partiel),2025,ESTAT_lfst_r_lfe2ehour,officiel
FRM,heures_hebdo_habituelles_tous_emplois,37.1,heures (emploi principal; temps plein et partiel),2025,ESTAT_lfst_r_lfe2ehour,officiel
BE,heures_hebdo_habituelles_tous_emplois,36.5,heures (emploi principal; temps plein et partiel),2025,ESTAT_lfst_r_lfe2ehour,officiel
BE1,heures_hebdo_habituelles_tous_emplois,36.6,heures (emploi principal; temps plein et partiel),2025,ESTAT_lfst_r_lfe2ehour,officiel
BE3,heures_hebdo_habituelles_tous_emplois,35.8,heures (emploi principal; temps plein et partiel),2025,ESTAT_lfst_r_lfe2ehour,officiel
LU,heures_hebdo_habituelles_tous_emplois,38.0,heures (emploi principal; temps plein et partiel),2025,ESTAT_lfst_r_lfe2ehour,officiel
LU00,heures_hebdo_habituelles_tous_emplois,38.0,heures (emploi principal; temps plein et partiel),2025,ESTAT_lfst_r_lfe2ehour,officiel
CH,heures_hebdo_habituelles_tous_emplois,35.8,heures (emploi principal; temps plein et partiel),2025,ESTAT_lfst_r_lfe2ehour,officiel
CH01,heures_hebdo_habituelles_tous_emplois,36.1,heures (emploi principal; temps plein et partiel),2025,ESTAT_lfst_r_lfe2ehour,officiel
CH02,heures_hebdo_habituelles_tous_emplois,35.5,heures (emploi principal; temps plein et partiel),2025,ESTAT_lfst_r_lfe2ehour,officiel
CA,heures_hebdo_habituelles_tous_emplois,35.5,heures (emploi principal; temps plein et partiel),2025,STATCAN_14-10-0043,officiel
CA-QC,heures_hebdo_habituelles_tous_emplois,34.5,heures (emploi principal; temps plein et partiel),2025,STATCAN_14-10-0043,officiel
CA-NB,heures_hebdo_habituelles_tous_emplois,36.7,heures (emploi principal; temps plein et partiel),2025,STATCAN_14-10-0043,officiel
CA-ON,heures_hebdo_habituelles_tous_emplois,35.5,heures (emploi principal; temps plein et partiel),2025,STATCAN_14-10-0043,officiel
CA-MB,heures_hebdo_habituelles_tous_emplois,35.8,heures (emploi principal; temps plein et partiel),2025,STATCAN_14-10-0043,officiel
CA-SK,heures_hebdo_habituelles_tous_emplois,36.6,heures (emploi principal; temps plein et partiel),2025,STATCAN_14-10-0043,officiel
CA-AB,heures_hebdo_habituelles_tous_emplois,36.6,heures (emploi principal; temps plein et partiel),2025,STATCAN_14-10-0043,officiel
CA-BC,heures_hebdo_habituelles_tous_emplois,35.1,heures (emploi principal; temps plein et partiel),2025,STATCAN_14-10-0043,officiel
CA-NS,heures_hebdo_habituelles_tous_emplois,36.1,heures (emploi principal; temps plein et partiel),2025,STATCAN_14-10-0043,officiel
CA-PE,heures_hebdo_habituelles_tous_emplois,37.3,heures (emploi principal; temps plein et partiel),2025,STATCAN_14-10-0043,officiel
CA-NL,heures_hebdo_habituelles_tous_emplois,37.6,heures (emploi principal; temps plein et partiel),2025,STATCAN_14-10-0043,officiel
FR,heures_hebdo_habituelles_temps_plein,39.9,heures (emploi principal; temps plein),2025,ESTAT_lfsa_ewhun2,officiel
BE,heures_hebdo_habituelles_temps_plein,40.3,heures (emploi principal; temps plein),2025,ESTAT_lfsa_ewhun2,officiel
LU,heures_hebdo_habituelles_temps_plein,40.8,heures (emploi principal; temps plein),2025,ESTAT_lfsa_ewhun2,officiel
CH,heures_hebdo_habituelles_temps_plein,43.3,heures (emploi principal; temps plein),2025,ESTAT_lfsa_ewhun2,officiel
CA,heures_hebdo_habituelles_temps_plein,39.7,heures (emploi principal; temps plein),2025,STATCAN_14-10-0043,officiel
CA-QC,heures_hebdo_habituelles_temps_plein,38.6,heures (emploi principal; temps plein),2025,STATCAN_14-10-0043,officiel
CA-NB,heures_hebdo_habituelles_temps_plein,40.1,heures (emploi principal; temps plein),2025,STATCAN_14-10-0043,officiel
CA-ON,heures_hebdo_habituelles_temps_plein,39.7,heures (emploi principal; temps plein),2025,STATCAN_14-10-0043,officiel
CA-MB,heures_hebdo_habituelles_temps_plein,39.9,heures (emploi principal; temps plein),2025,STATCAN_14-10-0043,officiel
CA-SK,heures_hebdo_habituelles_temps_plein,40.8,heures (emploi principal; temps plein),2025,STATCAN_14-10-0043,officiel
CA-AB,heures_hebdo_habituelles_temps_plein,40.9,heures (emploi principal; temps plein),2025,STATCAN_14-10-0043,officiel
CA-BC,heures_hebdo_habituelles_temps_plein,39.7,heures (emploi principal; temps plein),2025,STATCAN_14-10-0043,officiel
CA-NS,heures_hebdo_habituelles_temps_plein,40.0,heures (emploi principal; temps plein),2025,STATCAN_14-10-0043,officiel
CA-PE,heures_hebdo_habituelles_temps_plein,40.6,heures (emploi principal; temps plein),2025,STATCAN_14-10-0043,officiel
CA-NL,heures_hebdo_habituelles_temps_plein,41.4,heures (emploi principal; temps plein),2025,STATCAN_14-10-0043,officiel
```

Ruptures de comparabilité à signaler systématiquement :

- **Espérance de vie** : Europe = année 2024 (Eurostat) ; Canada = moyenne de trois ans 2022-2024 (encore marquée par la surmortalité de 2022), tables abrégées pour l'Île-du-Prince-Édouard et les territoires ; Yukon non publié (« .. ») — [Eurostat demo_r_mlifexp](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/demo_r_mlifexp?format=JSON&lang=EN&sinceTimePeriod=2018&sex=T&age=Y_LT1&unit=YR&geo=FR1) ; [Statistique Canada 13-10-0114-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1310011401) ; [13-10-0140-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1310014001)
- **Médecins** : la série régionale OCDE (« active physicians ») donne France 3,44 ‰ (2025), Belgique 3,02 ‰ (2023), Suisse 4,73 ‰ (2024), Canada 2,41 ‰ (2024) ; la série nationale OCDE « praticiens » donne France 3,94, Belgique 3,34, Luxembourg 4,09, Suisse 4,66, Canada 2,70 (2024) ; Eurostat hlth_rs_physreg donne France 3,94, Belgique 3,38, Suisse 4,68 (2024). Les écarts tiennent au concept (en exercice / professionnellement actifs / autorisés à exercer, internes et résidents inclus ou non) : un même pays varie de 0,3 à 0,5 point selon la source — [OCDE DF_CARE](https://sdmx.oecd.org/public/rest/data/OECD.CFE.EDS,DSD_REG_HEALTH@DF_CARE,2.5/all?startPeriod=2018&dimensionAtObservation=AllDimensions&format=csvfilewithlabels) ; [OCDE DF_PHYS](https://sdmx.oecd.org/public/rest/data/OECD.ELS.HD,DSD_HEALTH_EMP_REAC@DF_PHYS,1.1/FRA+BEL+LUX+CHE+CAN........?startPeriod=2021&dimensionAtObservation=AllDimensions&format=csvfilewithlabels) ; [Eurostat hlth_rs_physreg](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/hlth_rs_physreg?format=JSON&lang=EN&sinceTimePeriod=2015&unit=NR&geo=FR10)
- **Éducation** : l'indicateur européen « sorties précoces 18-24 ans » (edat_lfse_16) n'a pas d'équivalent canadien publié par province ; l'indicateur commun retenu est la part des 25-34 ans sans diplôme du second cycle du secondaire et la part diplômée du supérieur (CITE 2011 des deux côtés). Les valeurs canadiennes sont arrondies à l'unité et incluent dans le « tertiaire » le cycle court collégial (22 % des 25-34 ans au Canada) — [Statistique Canada 37-10-0130-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3710013001)
- **Sécurité** : seul le taux d'homicides est comparable (et encore : petits effectifs, 15 homicides en Corse, 3 à l'Île-du-Prince-Édouard) ; l'Indice de gravité de la criminalité n'existe qu'au Canada et les taux européens de vols/cambriolages (crim_gen_reg) n'ont pas d'équivalent harmonisé canadien — [Eurostat crim_gen_reg](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/crim_gen_reg?format=JSON&lang=EN&sinceTimePeriod=2018&iccs=ICCS0101&unit=P_HTHAB&geo=FR1) ; [Statistique Canada 35-10-0026-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3510002601)
- **PM2,5** : même source (OCDE, estimations satellitaires) pour tous les territoires, mais millésime 2020, année de confinement — [OCDE DF_AIR_POLL](https://sdmx.oecd.org/public/rest/data/OECD.ENV.EPI,DSD_AIR_POL@DF_AIR_POLL,/all?startPeriod=2018&dimensionAtObservation=AllDimensions&format=csvfilewithlabels)
- **Satisfaction à l'égard de la vie (indicateur subjectif)** : Europe = EU-SILC, 16 ans et plus, moyenne 0-10, par pays seulement ; Canada = Enquête sociale canadienne, 15 ans et plus, moyenne 0-10 par province, un trimestre (T2 2025). Questions proches, enquêtes et modes de collecte différents — [Eurostat ilc_pw01](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/ilc_pw01?format=JSON&lang=EN&sinceTimePeriod=2018&life_sat=LIFE&statinfo=AVG&isced11=TOTAL&sex=T&age=Y_GE16&unit=RTG&geo=FR&geo=BE&geo=LU&geo=CH) ; [Statistique Canada 13-10-0843-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1310084301)

### Inferences
- Pour un classement transatlantique, n'utiliser que l'espérance de vie, le taux d'homicides, les PM2,5, la part de diplômés du supérieur et la densité médicale OCDE régionale ; les autres indicateurs ne se comparent qu'à l'intérieur de chaque continent.

### Gaps
- Satisfaction à l'égard de la vie par région européenne (base OCDE Regional Well-Being, sondage Gallup) : le jeu de données n'est pas exposé dans l'API SDMX de l'OCDE (aucun flux « regional well-being » dans le catalogue https://sdmx.oecd.org/public/rest/dataflow/all/all/latest) ; cellule manquante pour les 18 régions européennes.
- Médecins et infirmiers au Luxembourg : absents de la série régionale OCDE (valeur nationale OCDE « praticiens » 2024 : 4,09 médecins et 14,72 infirmiers pour 1 000 hab.) ; infirmiers : valeur nulle (donc manquante) pour le Manitoba et l'Île-du-Prince-Édouard, série arrêtée en 2021 pour la France et le Canada.
- Espérance de vie au Yukon : non publiée par Statistique Canada pour 2021-2023 et 2022-2024.

## 2. Santé — résultats (espérance de vie, années en bonne santé, mortalité infantile, mortalité évitable)

### Takeaway
L'espérance de vie est plus élevée en Suisse romande (84,6 ans en Région lémanique), en Île-de-France (84,6) et en Corse (84,0) que partout au Canada (maximum : Québec 82,4, Ontario 82,3) ; la Wallonie (80,7), les Hauts-de-France (81,4) et les Prairies/Atlantique (Manitoba 78,9, Saskatchewan 79,0, Terre-Neuve-et-Labrador 79,2) ferment la marche, loin devant le Nunavut (70,8). La mortalité infantile est du même ordre partout (3 à 5 ‰) sauf au Luxembourg (5,3), dans les Prairies (6-7) et dans les territoires.

### Cited Findings

Espérance de vie à la naissance (années ; ensemble / hommes / femmes) et mortalité infantile (décès avant 1 an pour 1 000 naissances vivantes). Europe : 2024 **[officiel]**. Canada : espérance de vie 2022-2024, mortalité infantile 2024 **[officiel]**.

| Territoire | EV ensemble | EV hommes | EV femmes | Mortalité infantile |
|---|---|---|---|---|
| FR France | 83,0 | 80,2 | 85,8 | 4,1 |
| FR1 Île-de-France | 84,6 | 82,1 | 87,0 | 4,1 |
| FRB Centre-Val de Loire | 82,6 | 79,8 | 85,3 | 4,1 |
| FRC Bourgogne-Franche-Comté | 82,4 | 79,2 | 85,6 | 4,4 |
| FRD Normandie | 82,1 | 78,9 | 85,2 | 4,1 |
| FRE Hauts-de-France | 81,4 | 78,4 | 84,3 | 3,6 |
| FRF Grand Est | 82,1 | 79,4 | 84,8 | 4,9 |
| FRG Pays de la Loire | 83,5 | 80,5 | 86,4 | 3,5 |
| FRH Bretagne | 82,5 | 79,5 | 85,4 | 4,2 |
| FRI Nouvelle-Aquitaine | 83,1 | 80,2 | 85,9 | 3,4 |
| FRJ Occitanie | 83,3 | 80,6 | 86,0 | 3,3 |
| FRK Auvergne-Rhône-Alpes | 83,9 | 81,2 | 86,5 | 3,4 |
| FRL Provence-Alpes-Côte d'Azur | 83,8 | 80,9 | 86,5 | 3,7 |
| FRM Corse | 84,0 | 81,6 | 86,4 | 2,8 |
| BE Belgique | 82,4 | 80,3 | 84,4 | 3,5 |
| BE1 Bruxelles | 82,1 | 79,7 | 84,3 | 3,2 |
| BE3 Wallonie | 80,7 | 78,3 | 83,0 | 3,9 |
| LU / LU00 Luxembourg | 83,2 | 81,0 | 85,5 | 5,3 |
| CH Suisse | 84,2 | 82,4 | 85,9 | 3,3 |
| CH01 Région lémanique | 84,6 | 82,7 | 86,4 | 3,1 |
| CH02 Espace Mittelland | 83,8 | 81,9 | 85,7 | 3,5 |
| CA Canada | 81,65 | 79,47 | 83,86 | 4,5 |
| CA-QC Québec | 82,39 | 80,60 | 84,14 | 4,9 |
| CA-NB Nouveau-Brunswick | 80,12 | 78,07 | 82,24 | 6,0 |
| CA-ON Ontario | 82,27 | 80,06 | 84,47 | 4,3 |
| CA-MB Manitoba | 78,90 | 76,49 | 81,45 | 7,4 |
| CA-SK Saskatchewan | 79,02 | 76,74 | 81,47 | 6,3 |
| CA-AB Alberta | 80,81 | 78,52 | 83,20 | 4,4 |
| CA-BC Colombie-Britannique | 81,98 | 79,38 | 84,69 | 3,3 |
| CA-NS Nouvelle-Écosse | 80,30 | 78,13 | 82,53 | 2,9 |
| CA-PE Île-du-Prince-Édouard | 81,16 | 79,01 | 83,20 | 3,0 |
| CA-NL Terre-Neuve-et-Labrador | 79,17 | 77,14 | 81,22 | 2,9 |
| CA-YT Yukon | n.d. | n.d. | n.d. | 4,4 |
| CA-NT Territoires du Nord-Ouest | 76,29 | 73,86 | 79,11 | 8,4 |
| CA-NU Nunavut | 70,84 | 69,50 | 72,17 | 21,2 |

- Sources du tableau — [Eurostat demo_r_mlifexp](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/demo_r_mlifexp?format=JSON&lang=EN&sinceTimePeriod=2018&sex=T&sex=M&sex=F&age=Y_LT1&unit=YR&geo=FR1) ; [Eurostat demo_r_minfind](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/demo_r_minfind?format=JSON&lang=EN&sinceTimePeriod=2018&unit=RT&geo=FR1) ; [Statistique Canada 13-10-0114-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1310011401) ; [13-10-0140-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1310014001) ; [13-10-0713-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1310071301)
- La mortalité infantile des petites provinces est très volatile : Nouvelle-Écosse 4,7 ‰ en 2023 puis 2,9 ‰ en 2024 ; Terre-Neuve-et-Labrador 6,9 puis 2,9 ; Île-du-Prince-Édouard 6,8 puis 3,0 **[officiel]** — [Statistique Canada 13-10-0713-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1310071301)
- Années de vie en bonne santé à la naissance (sans limitation d'activité, EU-SILC), 2024, pays seulement **[officiel]** : France 63,6 (H 63,5 ; F 63,7) ; Belgique 63,9 (H 64,0 ; F 63,9) ; Luxembourg 60,2 (2022 ; H 60,7 ; F 59,4) ; Suisse 58,0 (H 59,4 ; F 56,5) ; UE-27 65,2 — [Eurostat hlth_hlye](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/hlth_hlye?format=JSON&lang=EN&sinceTimePeriod=2018&hlth_hle=HLY_Y0&sex=T&sex=M&sex=F&unit=YR&geo=FR&geo=BE&geo=LU&geo=CH&geo=EU27_2020)
- Mortalité évitable en Europe (taux standardisé pour 100 000 habitants de moins de 75 ans, 2023 ; total / évitable par prévention / évitable par traitement) **[officiel]** : France 186,0 / 127,2 / 58,8 ; Belgique 195,8 / 136,9 / 58,8 ; Luxembourg 157,6 / 105,9 / 51,7 ; Suisse 142,6 / 99,6 / 42,9 ; UE-27 237,7 / 150,9 / 86,8 — [Eurostat hlth_cd_apr](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/hlth_cd_apr?format=JSON&lang=EN&sinceTimePeriod=2018&mortalit=TOTAL&mortalit=PRVT&mortalit=TRT&sex=T&icd10=TOTAL&unit=RT&geo=FR&geo=BE&geo=LU&geo=CH&geo=EU27_2020)
- Mortalité potentiellement évitable au Canada (taux normalisé selon l'âge pour 100 000, 2021 ; évitable / causes évitables par prévention / causes traitables) **[officiel]** : Canada 204,0 / 144,0 / 60,0 ; Québec 170,7 / 118,3 / 52,4 ; Ontario 200,1 / 139,5 / 60,5 ; Nouveau-Brunswick 210,4 / 143,7 / 66,7 ; Manitoba 237,6 / 166,6 / 71,0 ; Saskatchewan 301,2 / 222,6 / 78,6 ; Alberta 253,7 / 186,4 / 67,2 ; Colombie-Britannique 187,6 / 135,8 / 51,7 ; Nouvelle-Écosse 229,8 / 155,2 / 74,6 ; Île-du-Prince-Édouard 181,3 / 122,5 / 58,7 ; Terre-Neuve-et-Labrador 240,5 / 150,1 / 90,5 ; territoires (ensemble) 376,1 / 285,9 / 90,3 — [Statistique Canada 13-10-0744-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1310074401) ; [13100744-eng.zip](https://www150.statcan.gc.ca/n1/tbl/csv/13100744-eng.zip)

### Inferences
- L'écart d'espérance de vie entre la Région lémanique et le Québec (2,2 ans) ou le Nouveau-Brunswick (4,5 ans) est du même ordre que l'écart interne à la France métropolitaine (3,2 ans entre Île-de-France et Hauts-de-France) **[calculé : différences des valeurs du tableau]**.
- Le Québec est la province canadienne à la mortalité évitable la plus basse et à l'espérance de vie la plus haute ; c'est aussi la plus proche des niveaux européens.

### Gaps
- Mortalité évitable : les taux européens (population type européenne 2013, liste OCDE/Eurostat) et canadiens (population type canadienne 2011, liste ICIS/Statistique Canada, millésime 2021 en pleine pandémie) ne sont pas comparables en niveau ; pas de série régionale européenne extraite.
- Années de vie en bonne santé : pas de série régionale, et pas d'équivalent canadien harmonisé (Statistique Canada publie une « espérance de vie ajustée en fonction de la santé » fondée sur un autre concept, non extraite).

## 3. Santé — accès aux soins (médecins, infirmiers, médecin de famille, besoins non satisfaits, attentes)

### Takeaway
La densité médicale est nettement plus forte en Europe francophone (3 à 5 médecins pour 1 000 habitants ; 5,2 en Région lémanique, 4,4 à Bruxelles, 3,9 en Île-de-France) qu'au Canada (2,1 à 2,7 selon la province ; 2,6 au Québec, 2,2 en Ontario). Au Canada, 17 % des adultes n'ont pas de prestataire de soins habituel (26 % au Québec, 38 % à l'Île-du-Prince-Édouard, 12 % en Ontario en 2024), alors que les besoins médicaux non satisfaits déclarés en Europe restent sous 4 %.

### Cited Findings

Densité de professionnels (pour 1 000 habitants). Colonne A : médecins actifs, série régionale OCDE (France 2025, Belgique 2023, Suisse 2024, Canada 2024) **[officiel]**. Colonne B : médecins, Eurostat hlth_rs_physreg 2024, **[calculé]** = somme des effectifs NUTS 2 / population au 1er janvier 2024 (demo_r_d2jan) × 1 000. Colonne C : infirmiers en exercice, série régionale OCDE (France 2021, Belgique 2023, Suisse 2024, Canada 2021) **[officiel]**.

| Territoire | A. Médecins (OCDE rég.) | B. Médecins (Eurostat, calculé) | C. Infirmiers (OCDE rég.) |
|---|---|---|---|
| FR France | 3,44 | 3,94 | 10,97 |
| FR1 Île-de-France | 3,87 | 4,48 | 9,78 |
| FRB Centre-Val de Loire | 2,60 | 3,02 | 9,24 |
| FRC Bourgogne-Franche-Comté | 3,08 | 3,69 | 11,25 |
| FRD Normandie | 3,03 | 3,61 | 10,79 |
| FRE Hauts-de-France | 3,06 | 3,58 | 10,89 |
| FRF Grand Est | 3,29 | 3,88 | 11,39 |
| FRG Pays de la Loire | 3,00 | 3,47 | 9,17 |
| FRH Bretagne | 3,49 | 4,00 | 11,64 |
| FRI Nouvelle-Aquitaine | 3,54 | 3,96 | 11,55 |
| FRJ Occitanie | 3,49 | 3,89 | 12,21 |
| FRK Auvergne-Rhône-Alpes | 3,49 | 4,00 | 11,66 |
| FRL Provence-Alpes-Côte d'Azur | 4,08 | 4,54 | 12,73 |
| FRM Corse | 3,35 | 3,43 | 12,63 |
| BE Belgique | 3,02 | 3,38 | 11,42 |
| BE1 Bruxelles | 4,44 | 5,19 | 10,62 |
| BE3 Wallonie | 3,14 | 3,56 | 10,47 |
| LU Luxembourg | n.d. (national OCDE 2024 : 4,09) | 3,01 (2017) | n.d. (national OCDE 2024 : 14,72) |
| CH Suisse | 4,73 | 4,68 | 19,02 |
| CH01 Région lémanique | 5,19 | 5,15 | 18,36 |
| CH02 Espace Mittelland | 4,29 | 4,23 | 19,06 |
| CA Canada | 2,41 | — | 9,93 |
| CA-QC Québec | 2,62 | — | 10,47 |
| CA-NB Nouveau-Brunswick | 2,58 | — | 12,36 |
| CA-ON Ontario | 2,21 | — | 9,53 |
| CA-MB Manitoba | 2,25 | — | n.d. |
| CA-SK Saskatchewan | 2,17 | — | 11,97 |
| CA-AB Alberta | 2,39 | — | 10,70 |
| CA-BC Colombie-Britannique | 2,73 | — | 9,63 |
| CA-NS Nouvelle-Écosse | 2,67 | — | 13,07 |
| CA-PE Île-du-Prince-Édouard | 2,10 | — | n.d. |
| CA-NL Terre-Neuve-et-Labrador | 2,60 | — | 14,57 |
| CA-YT Yukon | 1,89 | — | 11,64 |
| CA-NT Territoires du Nord-Ouest | 1,13 | — | n.d. |
| CA-NU Nunavut | 0,56 | — | n.d. |

- Sources du tableau — [OCDE DSD_REG_HEALTH@DF_CARE](https://sdmx.oecd.org/public/rest/data/OECD.CFE.EDS,DSD_REG_HEALTH@DF_CARE,2.5/all?startPeriod=2018&dimensionAtObservation=AllDimensions&format=csvfilewithlabels) ; [Eurostat hlth_rs_physreg (effectifs)](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/hlth_rs_physreg?format=JSON&lang=EN&sinceTimePeriod=2015&unit=NR&geo=FR10) ; [Eurostat demo_r_d2jan](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/demo_r_d2jan?format=JSON&lang=EN&sinceTimePeriod=2015&sex=T&age=TOTAL&unit=NR&geo=FR10)
- Séries nationales OCDE 2024, médecins en exercice pour 1 000 hab. **[officiel]** : France 3,94 ; Belgique 3,34 ; Luxembourg 4,09 ; Suisse 4,66 ; Canada 2,70. Infirmiers en exercice : France 8,86 (2023) ; Belgique 11,43 (2023) ; Luxembourg 14,72 ; Suisse 19,02 (dont 12,15 infirmiers diplômés et 6,87 infirmiers « associés ») ; Canada 10,17 — [OCDE DF_PHYS](https://sdmx.oecd.org/public/rest/data/OECD.ELS.HD,DSD_HEALTH_EMP_REAC@DF_PHYS,1.1/FRA+BEL+LUX+CHE+CAN........?startPeriod=2021&dimensionAtObservation=AllDimensions&format=csvfilewithlabels) ; [OCDE DF_NURSE](https://sdmx.oecd.org/public/rest/data/OECD.ELS.HD,DSD_HEALTH_REAC_EMP@DF_NURSE,1.1/FRA+BEL+LUX+CHE+CAN........?startPeriod=2021&dimensionAtObservation=AllDimensions&format=csvfilewithlabels)
- Lits d'hôpital pour 1 000 hab. (série régionale OCDE) **[officiel]** : France 5,72 (2020) ; Belgique 5,23 (2025), Bruxelles 6,19, Wallonie 5,25 ; Luxembourg 4,19 (2020) ; Suisse 4,20 (2024), Région lémanique 4,22, Espace Mittelland 3,78 ; Canada 2,46 (2020), Québec 2,34, Ontario 2,24, Nouveau-Brunswick 3,46 — [OCDE DSD_REG_HEALTH@DF_CARE](https://sdmx.oecd.org/public/rest/data/OECD.CFE.EDS,DSD_REG_HEALTH@DF_CARE,2.5/all?startPeriod=2018&dimensionAtObservation=AllDimensions&format=csvfilewithlabels)
- Besoins d'examen ou de traitement médical non satisfaits (16 ans et plus, % ; motifs coût, distance ou liste d'attente), 2025 **[officiel]** : France 3,7 (dont coût 1,9 ; liste d'attente 1,4) ; Belgique 0,9 (coût 0,8 ; attente 0,1) ; Luxembourg 1,1 (coût 0,3 ; attente 0,9) ; Suisse 1,4 (2024 ; coût 1,2 ; attente 0,2) ; UE-27 2,4 — [Eurostat hlth_silc_08](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/hlth_silc_08?format=JSON&lang=EN&sinceTimePeriod=2018&reason=TXP_TFAR_WLIST&reason=WLIST&reason=TXP&quant_inc=TOTAL&sex=T&age=Y_GE16&unit=PC&geo=FR&geo=BE&geo=LU&geo=CH&geo=EU27_2020)
- Canada — part des adultes (18 ans et plus) ayant un prestataire de soins de santé habituel, ESCC 2024 **[officiel]** ; part sans prestataire habituel **[calculé : 100 − valeur]** : Canada (hors territoires) 82,6 % (sans : 17,4 %) ; Québec 74,1 (25,9) ; Nouveau-Brunswick 81,6 (18,4) ; Ontario 88,5 (11,5) ; Manitoba 85,0 (15,0) ; Saskatchewan 82,6 (17,4) ; Alberta 83,8 (16,2) ; Colombie-Britannique 79,9 (20,1) ; Nouvelle-Écosse 78,1 (21,9) ; Île-du-Prince-Édouard 61,7 (38,3) ; Terre-Neuve-et-Labrador 74,8 (25,2). La valeur 2025 n'est pas publiée (« .. ») — [Statistique Canada 13-10-0905-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1310090501) ; [13100905-eng.zip](https://www150.statcan.gc.ca/n1/tbl/csv/13100905-eng.zip)
- Même indicateur en 2022 (12 ans et plus, ancienne série) **[officiel]** : Canada 86,0 % ; Québec 78,7 ; Ontario 90,2 ; Nouveau-Brunswick 89,3 ; Île-du-Prince-Édouard 75,9 ; Colombie-Britannique 83,4 — la dégradation 2022-2024 est générale, mais les deux séries diffèrent par l'âge couvert — [Statistique Canada 13-10-0096-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1310009601)
- Canada — besoin non satisfait de soins de santé mentale, adultes, 2025 **[officiel]** : Canada 12,7 % ; Québec 10,9 ; Nouveau-Brunswick 10,3 ; Ontario 13,2 ; Manitoba 10,9 ; Saskatchewan 10,3 ; Alberta 13,2 ; Colombie-Britannique 14,1 ; Nouvelle-Écosse 15,4 ; Île-du-Prince-Édouard 11,5 ; Terre-Neuve-et-Labrador 14,6 — [Statistique Canada 13-10-0905-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1310090501)
- Santé perçue « très bonne ou excellente », adultes, 2025 **[officiel]** : Canada 53,0 % ; Québec 56,6 ; Ontario 53,0 ; Nouveau-Brunswick 48,2 ; Nouvelle-Écosse 45,3 — [Statistique Canada 13-10-0905-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1310090501)
- Québec — la part de la population ayant un médecin de famille est passée de 82 % en 2019 à 72 % en 2024 selon l'Institut de la statistique du Québec, cité par la presse **[non vérifié : source secondaire]** — [CTV News](https://www.ctvnews.ca/montreal/article/new-study-shows-fewer-quebecers-have-access-to-family-doctors/) ; environ 2,1 millions de Québécois n'étaient pas inscrits auprès d'un médecin de famille en 2022-2023 **[non vérifié : institut privé]** — [C.D. Howe Institute](https://cdhowe.org/?p=132966) ; en mai 2026, les médecins de famille déclaraient avoir inscrit 500 000 nouveaux patients (dont environ 220 000 patients vulnérables selon le gouvernement) **[non vérifié : dépêche de presse]** — [CTV News / La Presse canadienne](https://www.ctvnews.ca/montreal/article/quebec-family-doctors-say-they-have-registered-500000-more-patients/). Les personnes sans médecin passent par le Guichet d'accès à la première ligne (GAP) — [Québec.ca](https://www.quebec.ca/en/health/finding-a-resource/primary-care-access-point)
- Canada — selon l'ICIS, 97 384 médecins en 2023, soit 243 pour 100 000 habitants (2,43 ‰, cohérent avec la série régionale OCDE : 2,41 ‰ en 2024) ; 7 % des médecins exercent en milieu rural **[non vérifié directement : la page ICIS renvoie une erreur 403 aux requêtes automatiques, chiffres lus dans un extrait de recherche]** — [ICIS, A profile of physicians in Canada](https://www.cihi.ca/en/a-profile-of-physicians-in-canada). Pour 2024, un rapport de Doctors Manitoba citant l'ICIS donne 241 médecins pour 100 000 habitants au Canada et 225 au Manitoba (dont 112 médecins de famille, moyenne canadienne 119) **[non vérifié : source secondaire]** — [Doctors Manitoba, Physician Resources Report, oct. 2025](https://assets.doctorsmanitoba.ca/documents/Physician-Resources-Report-Oct-2025.pdf)

### Inferences
- Le Québec combine la densité médicale la plus élevée des grandes provinces et la plus forte part d'adultes sans prestataire habituel : l'obstacle est l'inscription auprès d'un médecin de famille, pas le nombre de médecins.
- Les « besoins non satisfaits » européens (EU-SILC) et le « prestataire habituel » canadien (ESCC) ne mesurent pas la même chose ; ils ne s'additionnent ni ne se comparent directement.

### Gaps
- Temps d'attente (ICIS : urgences, spécialistes, interventions prioritaires) : non extraits ; le flux OCDE « Waiting times » (https://sdmx.oecd.org/public/rest/dataflow/OECD.ELS.HD/DSD_HEALTH_PROC@DF_WAITING/1.2) existe mais n'a pas été interrogé faute de budget.
- France : indicateur d'accessibilité potentielle localisée (APL, DREES) par région et part de la population sans médecin traitant : non extraits.
- Ontario : nombre de personnes sans médecin de famille (chiffres de l'Ontario College of Family Physicians) non retrouvé dans une source consultée ; seule la part ESCC (11,5 % des adultes sans prestataire habituel en 2024) est disponible.
- Offre de services de santé en français hors Québec : aucune statistique harmonisée trouvée dans cette session.
- Besoins non satisfaits (hlth_silc_08) : disponibles par pays seulement, pas par région ; pas d'équivalent canadien de même définition.

## 4. Santé — coût des soins pour la personne (reste à charge, primes obligatoires, couverture des nouveaux arrivants)

### Takeaway
Les paiements directs des ménages pèsent deux fois plus en Suisse et en Belgique (21-22 % de la dépense de santé) qu'en France et au Luxembourg (8-10 %) ; le Canada est intermédiaire (15 %) mais a la plus forte part d'assurance privée volontaire (14,5 %), signe que médicaments et soins dentaires relèvent largement de régimes d'employeur. En Suisse s'ajoute une prime obligatoire par personne, indépendante du revenu : 393 CHF par mois en moyenne en 2026 (412 CHF en 2027), et environ 730 CHF par mois pour un adulte à Genève. Au Canada, le point de vigilance du nouvel arrivant est le délai de carence éventuel avant l'ouverture de la couverture provinciale.

### Cited Findings
- Structure du financement des dépenses courantes de santé, 2025 (estimations provisoires OCDE ; Belgique : 2024 pour le reste à charge) **[officiel]** — régimes publics et assurance obligatoire / assurance et régimes volontaires / paiements directs des ménages : France 83,2 % / 6,5 % / 10,3 % ; Belgique 73,5 % / 4,8 % / 21,8 % ; Luxembourg 86,1 % / 4,3 % / 8,4 % ; Suisse 69,2 % / 8,5 % / 20,8 % ; Canada 70,4 % / 14,5 % / 15,1 % — [OCDE SDMX DSD_SHA@DF_SHA](https://sdmx.oecd.org/public/rest/data/OECD.ELS.HD,DSD_SHA@DF_SHA,1.1/FRA+BEL+LUX+CHE+CAN.A...HF3+HF1+HF2+_T.._T.._T...?startPeriod=2022&dimensionAtObservation=AllDimensions&format=csvfilewithlabels)
- Paiements directs des ménages par habitant, 2025, en dollars US à parité de pouvoir d'achat **[officiel]** : France 784 ; Belgique 1 763 (2024) ; Luxembourg 717 ; Suisse 2 213 ; Canada 1 135. Dépense courante de santé totale par habitant : France 7 593 ; Belgique 8 287 ; Luxembourg 8 487 ; Suisse 10 634 ; Canada 7 506 — [OCDE SDMX DSD_SHA@DF_SHA](https://sdmx.oecd.org/public/rest/data/OECD.ELS.HD,DSD_SHA@DF_SHA,1.1/FRA+BEL+LUX+CHE+CAN.A...HF3+HF1+HF2+_T.._T.._T...?startPeriod=2022&dimensionAtObservation=AllDimensions&format=csvfilewithlabels)
- Dépense courante de santé en % du PIB, 2025 **[officiel]** : France 11,5 ; Belgique 11,2 ; Luxembourg 5,9 ; Suisse 11,6 ; Canada 11,5 — même source.
- Suisse — prime mensuelle moyenne de l'assurance obligatoire des soins (LAMal), tous assurés : 393,30 CHF en 2026 (+4,4 %), 465,30 CHF pour les adultes **[officiel, lu dans un extrait de recherche]** — [OFSP, communiqué primes 2026](https://www.bag.admin.ch/fr/newnsb/d2okh_kUK_OFhmMDfpyiy). Pour 2027 : 412 CHF (+19,70 CHF, +5,0 %) ; adultes 487,60 CHF (+22,80 ; +4,9 %) ; jeunes adultes 338,80 CHF (+15,40) ; enfants 128,10 CHF (+5,70) ; la prime individuelle dépend du lieu de domicile, de l'âge, de la franchise choisie, de l'assureur et du modèle d'assurance **[officiel]** — [OFSP, communiqué primes 2027](https://www.bag.admin.ch/fr/newnsb/BfuGvedj0OOX)
- Suisse — primes moyennes cantonales 2026 fixées par ordonnance du DFI (prime annuelle en CHF, couverture accidents incluse ; adulte / jeune adulte / enfant) **[officiel]** : Genève 8 760 / 6 528 / 2 076 ; Vaud région 1 : 8 388 / 6 120 / 2 040, région 2 : 7 872 / 5 772 / 1 932 ; Valais région 1 : 7 092 / 5 064 / 1 680, région 2 : 6 072 / 4 536 / 1 392 ; Neuchâtel 8 244 / 6 024 / 1 884 ; Jura 8 028 / 5 760 / 1 824 ; Fribourg région 1 : 7 332 / 5 352 / 1 752, région 2 : 6 756 / 4 968 / 1 596 ; Berne région 1 : 8 004 / 5 688 / 1 872, région 2 : 7 236 / 5 280 / 1 692, région 3 : 6 720 / 4 860 / 1 560 ; Soleure 7 224 / 5 220 / 1 668. Pour comparaison : Zoug 5 016 (minimum), Tessin région 1 : 8 976 — [DFI, annexe « Montants des primes moyennes 2026 »](https://www.bsv.admin.ch/dam/fr/sd-web/juMQ1SfoExDq/FR%20Anhang%20(Art.%203)%20Durchschnittspr%C3%A4mien%202026.pdf)
- Équivalents mensuels par adulte **[calculé : prime annuelle / 12]** : Genève 730 CHF ; Vaud 699 (région 1) et 656 (région 2) ; Neuchâtel 687 ; Jura 669 ; Berne 667 / 603 / 560 ; Fribourg 611 / 563 ; Valais 591 / 506 — même source. Ces moyennes servent au calcul des prestations complémentaires et sont plus élevées que la « prime moyenne » du communiqué de l'OFSP (465 CHF par adulte), qui tient compte des franchises à option et des modèles alternatifs.
- Évolution 2027 par canton **[officiel, lu dans des extraits de recherche]** : Vaud +3,5 % (+15,20 CHF par mois) ; Valais +5,6 %, prime adulte inférieure de 27 CHF à la moyenne suisse — [État de Vaud](https://www.vd.ch/actualites/actualite/news/26662-les-primes-dassurance-maladie-vont-augmenter-de-35-en-moyenne-en-2027) ; [État du Valais](https://www.vs.ch/web/communication/w/primes-d-assurance)
- Canada — délai de carence avant l'ouverture de la couverture provinciale, d'après une compilation privée datée du 19 février 2026 **[non vérifié ; sources secondaires contradictoires]** : aucun délai en Ontario, au Manitoba et en Nouvelle-Écosse ; trois mois en Colombie-Britannique, en Alberta, au Québec, en Saskatchewan et au Nouveau-Brunswick ; « de zéro à trois mois » ailleurs sans détail — [WelcomeAide](https://welcomeaide.com/en/blog/health-insurance-waiting-period-interim-coverage-2026). Une autre page du même site indique au contraire « aucun délai » en Alberta, et un autre guide indique encore trois mois en Ontario — [recherche du 22 nov. 2026, sources listées : WelcomeAide](https://welcomeaide.com/blog/newcomer-health-insurance-canada-provincial-guide-2026) ; [UP Immigration](https://www.upimmigration.ca/blog/canada-healthcare-newcomers-waiting-period-private-insurance). Ces listes ne doivent pas être reprises sans vérification sur les sites des régimes provinciaux.
- Québec — délai de carence pouvant aller jusqu'à trois mois ; les personnes couvertes par le régime de sécurité sociale d'un pays ayant une entente avec le Québec (France, Belgique, Luxembourg cités) peuvent s'inscrire à la RAMQ sans délai de carence sur présentation d'une attestation (attestation de droits de la Sécurité sociale française, attestation INAMI pour la Belgique) **[non vérifié : cabinet privé ; la page officielle de la RAMQ sur les ententes n'a pas été ouverte]** — [SiLaw, 22 juin 2026](https://silaws.com/2026/06/22/quebec-ramq-newcomers-2026-fr/) ; page officielle à consulter : [RAMQ, ententes de sécurité sociale](https://www.ramq.gouv.qc.ca/en/citizens/health-insurance/social-security-agreements-other-countries)
- Canada — Régime canadien de soins dentaires (RCSD) : ouvert aux résidents admissibles de tous âges ; conditions : pas d'accès à une assurance dentaire, revenu familial net rajusté inférieur à 90 000 $, résidence fiscale au Canada ; plus de 6,5 millions de personnes pouvaient recevoir des soins en avril 2026 ; renouvellement annuel (période 2026-2027 ouverte le 2 juin 2026) **[officiel, lu dans des extraits de recherche]** — [Santé Canada, avril 2026](https://www.canada.ca/en/health-canada/news/2026/04/more-than-65-million-canadians-can-now-receive-services-under-the-canadian-dental-care-plan.html) ; [Canada.ca, Canadian Dental Care Plan](https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html)

### Inferences
- Pour une famille de deux adultes et deux enfants, la prime LAMal moyenne 2026 représente 21 672 CHF par an à Genève et 20 856 CHF dans la région 1 du canton de Vaud **[calculé : 2 × prime adulte + 2 × prime enfant]**, avant réduction individuelle de primes et avant franchise et quote-part : c'est le premier poste « hors salaire » à déduire d'un salaire suisse.
- La part élevée des régimes « publics ou obligatoires » en France (83 %) inclut les complémentaires d'entreprise obligatoires, classées par l'OCDE dans l'assurance obligatoire ; le reste à charge final français (10 %) est donc net de la complémentaire, dont la cotisation n'apparaît pas dans cet indicateur.
- Au Canada, les 14,5 % d'assurance volontaire et les 15 % de paiements directs correspondent pour l'essentiel aux médicaments hors hôpital, aux soins dentaires et à l'optique : un emploi sans assurance collective d'employeur vaut sensiblement moins qu'un emploi qui en comporte une.



### Gaps
- Délais de carence officiels province par province (Ontario, Colombie-Britannique, Alberta, Manitoba, Saskatchewan, Nouveau-Brunswick, Nouvelle-Écosse, Île-du-Prince-Édouard, Terre-Neuve-et-Labrador, territoires) : non vérifiés sur les sites des régimes provinciaux ; la page fédérale https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants/new-life-canada/health-care/card.html renvoie une erreur 404.
- Système de franchise suisse (franchise ordinaire et franchises à option, quote-part) et réductions individuelles de primes par canton : montants non vérifiés dans cette session (voir https://www.bag.admin.ch/fr/primes-et-couts-reponses-aux-questions-frequentes).
- Cotisations et restes à charge institutionnels : cotisation maladie CNS au Luxembourg, cotisation aux mutualités et ticket modérateur en Belgique, prix moyen d'une complémentaire santé en France, couverture des médicaments par province (régime public d'assurance médicaments du Québec, accords d'assurance-médicaments fédéraux-provinciaux) : non extraits.
- Le rapport OCDE « Panorama de la santé 2025 » n'a pas été ouvert (pages OCDE en 403) ; les parts de financement proviennent de la base OCDE sous-jacente (flux DSD_SHA@DF_SHA), dont les valeurs 2025 sont provisoires.

## 5. Famille — garde d'enfants (coût net pour les parents, disponibilité, taux d'accueil des moins de 3 ans)

### Takeaway
Après aides, la garde à temps plein de deux jeunes enfants coûte à un couple biactif environ 7 % d'un salaire moyen au Luxembourg, 10 % au Canada (cas type), 11 % en France, 13 % en Belgique et 17 % en Suisse, où le tarif brut atteint 62 % d'un salaire moyen. Au Canada, le tarif réglementé est de 9,65 $ par jour au Québec et de 10 $ au Manitoba, en Saskatchewan, à Terre-Neuve-et-Labrador, à l'Île-du-Prince-Édouard et au Nunavut, mais de 15 $ en Alberta, 22 $ au maximum en Ontario, 16 à 19 $ au Nouveau-Brunswick, et il reste libre en Colombie-Britannique et en Nouvelle-Écosse ; partout, la contrainte principale est la disponibilité des places.

### Cited Findings
- Coût net de la garde à temps plein en structure collective pour un couple avec deux enfants de 2 et 3 ans, un parent à 100 % et l'autre à 67 % du salaire moyen (modèle impôts-prestations de l'OCDE ; valeurs arrondies au point) **[officiel]** — en % du salaire moyen : France 11 (2026) ; Belgique 13 (2025) ; Luxembourg 7 (2025) ; Suisse 17 (2025) ; Canada 10 (2026). En % du revenu disponible du ménage : France 8 ; Belgique 10 ; Luxembourg 5 ; Suisse 13 ; Canada 7 — [OCDE SDMX DSD_TAXBEN_NCC@DF_NCC](https://sdmx.oecd.org/public/rest/data/OECD.ELS.JAI,DSD_TAXBEN_NCC@DF_NCC,1.1/FRA+BEL+LUX+CHE+CAN...........?startPeriod=2022&dimensionAtObservation=AllDimensions&format=csvfilewithlabels)
- Décomposition du même cas type, en % du salaire moyen (frais bruts / aides à la garde / allègements fiscaux) **[officiel]** : France 23 / −8 / −4 ; Belgique 19 / −3 / −3 ; Luxembourg 39 / −29 / −3 ; Suisse 62 / −38 / −7 ; Canada 15 / 0 / −4 (autres prestations −1) — même source.
- Couple à deux salaires moyens (100 % + 100 %), coût net en % du salaire moyen **[officiel]** : France 14 ; Belgique 16 ; Luxembourg 8 ; Suisse 24 ; Canada 9. Couple à deux fois 67 % : France 8 ; Belgique 9 ; Luxembourg 3 ; Suisse 13 ; Canada 7 — même source.
- Parent seul avec deux enfants de 2 et 3 ans, à 67 % du salaire moyen, coût net en % du salaire moyen **[officiel]** : France 3 ; Belgique 4 ; Luxembourg 0 ; Suisse 5 ; Canada −1 (les aides dépassent les frais). À 100 % du salaire moyen : France 5 ; Belgique 7 ; Luxembourg 2 ; Suisse 10 ; Canada 3 — même source.
- Part des enfants de moins de 3 ans en accueil formel (EU-SILC), 2025 (Suisse : 2024) **[officiel]** pour les tranches horaires, total **[calculé : 1-29 h + 30 h et plus]** : France 59,7 % (16,1 + 43,6) ; Belgique 48,0 % (14,7 + 33,3) ; Luxembourg 56,4 % (11,5 + 44,9) ; Suisse 36,8 % (29,2 + 7,6) ; UE-27 40,5 % (14,4 + 26,1) — [Eurostat ilc_caindformal](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/ilc_caindformal?format=JSON&lang=EN&sinceTimePeriod=2018&age=Y_LT3&unit=PC&geo=FR&geo=BE&geo=LU&geo=CH&geo=EU27_2020)
- Canada, tarifs 2026 par province (étude du Centre canadien de politiques alternatives publiée le 19 août 2026) **[non vérifié : institut de recherche, résumé lu]** : tarif fixe ou maximal de 10 $ par jour à Terre-Neuve-et-Labrador, à l'Île-du-Prince-Édouard, au Manitoba, en Saskatchewan et au Nunavut ; 9,65 $ au Québec (régime antérieur au programme pancanadien) ; 15 $ en Alberta ; maximum de 22 $ en Ontario (19 $ en moyenne après subventions) ; tarifs variables selon l'âge et la région au Nouveau-Brunswick ; tarifs de marché en Colombie-Britannique, en Nouvelle-Écosse, au Yukon et dans les Territoires du Nord-Ouest — [CCPA, The $10-a-day divide: child care fees in Canada in 2026](https://www.policyalternatives.ca/news-research/the-10-a-day-divide-child-care-fees-in-canada-in-2026/)
- Tarif médian par jour selon la ville, 2026 (poupons / âge préscolaire) **[non vérifié : même étude]** : Montréal, Gatineau, Laval, Longueuil, Québec 9,65 $ / 9,65 $ ; villes ontariennes étudiées (dont Toronto) 22 $ / 22 $ ; Moncton, Saint John, Fredericton 19 $ / 16 $ ; Winnipeg, Regina, Saskatoon, St. John's, Charlottetown, Iqaluit 10 $ / 10 $ ; Calgary, Edmonton, Lethbridge 15 $ / 15 $ ; Halifax 23 $ / 22 $ ; Kelowna 28 $ / 24 $ ; Richmond (C.-B.) 52 $ / 42 $ — même source.
- Disponibilité **[non vérifié : même étude]** : « les listes d'attente abondent », les places pour poupons sont « généralement très difficiles à trouver » ; en Colombie-Britannique, environ 12 400 places à temps plein (hors âge scolaire) sont à 10 $ par jour, soit 12 % de ces places (T3 2025), de 45 % des places préscolaires à Vancouver à 3 % dans la vallée du Fraser — même source.
- Les accords fédéraux-provinciaux du programme pancanadien arrivaient à échéance le 31 mars 2026 ; le gouvernement fédéral a indiqué que le programme se poursuivrait, et un rapport de 2025 prévoyait que l'objectif de 10 $ ne serait pas atteint à cette date dans cinq provinces **[non vérifié : presse]** — [Global News](https://globalnews.ca/news/11281067/canada-child-care-policy-deadline) ; page fédérale de suivi : [Canada.ca, Toward $10-a-day](https://www.canada.ca/en/employment-social-development/campaigns/child-care.html)
- Comparabilité du modèle OCDE : pour les pays fédéraux, le modèle impôts-prestations retient les règles d'une seule région (Ontario pour le Canada, canton de Zurich pour la Suisse) **[non vérifié dans cette session : à confirmer dans la méthodologie TaxBEN]** ; la valeur « Canada » ne décrit donc ni le Québec ni les provinces à tarif libre, et la valeur « Suisse » ne décrit pas Genève ou Vaud — [OCDE, flux DSD_TAXBEN_NCC@DF_NCC](https://sdmx.oecd.org/public/rest/data/OECD.ELS.JAI,DSD_TAXBEN_NCC@DF_NCC,1.1/FRA+BEL+LUX+CHE+CAN...........?startPeriod=2022&dimensionAtObservation=AllDimensions&format=csvfilewithlabels)

### Inferences
- Équivalent mensuel par enfant à temps plein **[calculé : tarif journalier × 260 jours / 12]** : Québec 209 $ ; provinces à 10 $ : 217 $ ; Alberta 325 $ (le tarif mensuel officiel cité par la presse est de 326,25 $) ; Ontario 477 $ au plafond ; Halifax 477 à 498 $ ; Richmond (C.-B.) 910 à 1 127 $.
- Au Luxembourg et en Suisse, le tarif brut est élevé et ce sont les aides (chèque-service accueil, subventions cantonales et communales) qui ramènent le coût net à un niveau bas : le coût réel dépend donc fortement du revenu et de l'éligibilité, ce qui pénalise les ménages à deux salaires élevés en Suisse (24 % d'un salaire moyen pour deux salaires moyens).
- La France a le taux d'accueil formel des moins de 3 ans le plus élevé du groupe (60 %) et la Suisse le plus bas (37 %, majoritairement à temps partiel), ce qui recoupe la hiérarchie des coûts nets.



### Gaps
- Taux de fréquentation des services de garde des moins de 3 ans par province canadienne (Enquête sur les modes d'apprentissage et de garde des jeunes enfants de Statistique Canada) : non extrait ; l'indicateur EU-SILC n'existe pas au Canada et n'est pas régionalisé en Europe.
- Listes d'attente publiées (guichet unique québécois, communes suisses, ONE en Belgique) : non extraites.
- Barèmes nationaux détaillés non vérifiés dans cette session : chèque-service accueil et heures gratuites au Luxembourg, crèches PSU et complément de mode de garde en France, tarification ONE proportionnelle au revenu en Belgique, coûts par canton en Suisse.
- Tarif québécois : 9,65 $ par jour d'après l'étude CCPA ; le montant officiel 2026 de la contribution réduite n'a pas été vérifié sur Québec.ca.

## 6. Famille — prestations, congés parentaux, dépenses publiques, fécondité

### Takeaway
Le congé de maternité est payé à 100 % du salaire pendant 20 semaines au Luxembourg et 16 semaines en France, à 77 % en moyenne pendant 15 semaines en Belgique, à 56 % pendant 14 semaines en Suisse et à 36 % en moyenne pendant 16 semaines dans le régime fédéral canadien (hors Québec, dont le régime propre a un plafond assurable de 103 000 $ contre 68 900 $ pour l'assurance-emploi en 2026). L'effort public pour les familles atteint 3,2 % du PIB au Luxembourg, 2,8 % en Belgique et 2,6 % en France, contre 1,7 % en Suisse et 1,6 % au Canada. La fécondité est plus élevée en France (1,61) que dans les autres pays (Belgique 1,44, Suisse 1,29, Canada 1,26, Luxembourg 1,25 ; Québec 1,36).

### Cited Findings
- Dépenses publiques en faveur des familles, en % du PIB (base SOCX de l'OCDE, hors avantages fiscaux ; total / prestations en espèces / services en nature) **[officiel]** : France 2,63 / 1,25 / 1,38 (2022) ; Belgique 2,80 / 1,65 / 1,15 (2021) ; Luxembourg 3,19 / 2,15 / 1,04 (2021) ; Suisse 1,68 / 1,24 / 0,43 (2021) ; Canada 1,57 / 1,21 / 0,36 (2022) — [OCDE SDMX DSD_SOCX_AGG@DF_PUB_FAM](https://sdmx.oecd.org/public/rest/data/OECD.ELS.SPD,DSD_SOCX_AGG@DF_PUB_FAM,1.0/FRA+BEL+LUX+CHE+CAN.......?startPeriod=2018&dimensionAtObservation=AllDimensions&format=csvfilewithlabels)
- Détail par programme, % du PIB (allocations familiales / congés de maternité et parentaux / accueil et éducation des jeunes enfants) **[officiel]** : France 0,91 / 0,20 / 1,26 ; Belgique 1,37 / 0,23 / 0,82 ; Luxembourg 1,30 / 0,64 / 0,77 ; Suisse 0,97 / 0,18 / 0,42 ; Canada 0,94 / 0,27 / 0,36 (mêmes années) — même source.
- Indice conjoncturel de fécondité (enfants par femme) — Europe 2024, Canada 2025 **[officiel]** : France 1,61 ; Île-de-France 1,68 ; Centre-Val de Loire 1,66 ; Bourgogne-Franche-Comté 1,52 ; Normandie 1,61 ; Hauts-de-France 1,64 ; Grand Est 1,45 ; Pays de la Loire 1,60 ; Bretagne 1,53 ; Nouvelle-Aquitaine 1,45 ; Occitanie 1,46 ; Auvergne-Rhône-Alpes 1,58 ; Provence-Alpes-Côte d'Azur 1,66 ; Corse 1,21 ; Belgique 1,44 ; Bruxelles 1,35 ; Wallonie 1,44 ; Luxembourg 1,25 ; Suisse 1,29 ; Région lémanique 1,25 ; Espace Mittelland 1,30 ; Canada 1,26 ; Québec 1,36 ; Nouveau-Brunswick 1,21 ; Ontario 1,23 ; Manitoba 1,50 ; Saskatchewan 1,58 ; Alberta 1,42 ; Colombie-Britannique 1,04 ; Nouvelle-Écosse 1,07 ; Île-du-Prince-Édouard 1,18 ; Terre-Neuve-et-Labrador 1,08 ; Yukon 1,02 ; Territoires du Nord-Ouest 1,28 ; Nunavut 2,40 — [Eurostat demo_r_frate2](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/demo_r_frate2?format=JSON&lang=EN&sinceTimePeriod=2018&age=TOTAL&unit=NR&geo=FR1) ; [Statistique Canada 13-10-0418-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1310041801)
Congés payés liés à la naissance, droits en vigueur en avril 2026 (base de données OCDE sur la famille, indicateur PF2.1, mise à jour de novembre 2026) **[officiel]**. « Taux » = taux moyen de remplacement pour un salaire moyen ; « ETP » = semaines équivalentes à taux plein.

| Pays | Maternité : semaines / taux % / ETP | Congé parental payé ouvert à la mère : semaines / taux % / ETP | Total mère : semaines / taux % / ETP | Paternité : semaines / taux % / ETP | Congé parental réservé au père : semaines / taux % / ETP | Total père : semaines / ETP |
|---|---|---|---|---|---|---|
| France | 16,0 / 100,0 / 16,0 | 26,0 / 15,2 / 4,0 | 42,0 / 47,5 / 20,0 | 4,2 / 100,0 / 4,2 | 26,0 / 15,2 / 4,0 | 30,2 / 8,1 |
| Belgique | 15,0 / 77,0 / 11,6 | 17,3 / 20,5 / 3,6 | 32,3 / 46,7 / 15,1 | 4,0 / 69,6 / 2,8 | 17,3 / 20,5 / 3,6 | 21,3 / 6,3 |
| Luxembourg | 20,0 / 100,0 / 20,0 | 26,0 / 69,4 / 18,1 | 46,0 / 82,7 / 38,1 | 2,0 / 100,0 / 2,0 | 26,0 / 69,4 / 18,1 | 28,0 / 20,1 |
| Suisse | 14,0 / 56,3 / 7,9 | 0 / 0 / 0 | 14,0 / 56,3 / 7,9 | 2,0 / 56,3 / 1,1 | 0 / 0 / 0 | 2,0 / 1,1 |
| Canada (ligne unique OCDE ; vraisemblablement l'assurance-emploi fédérale, le RQAP québécois n'y figure pas — interprétation non vérifiée) | 16,0 / 35,8 / 5,7 | 35,0 / 40,5 / 14,2 | 51,0 / 39,0 / 19,9 | 0 / 0 / 0 | 5,0 / 40,5 / 2,0 | 5,0 / 2,0 |
| Moyenne OCDE | 18,5 | 36,6 | 55,0 | 2,6 | 10,9 | 13,5 |

- Source du tableau et notes : au Canada, la semaine de carence est comptée dans le congé de maternité ; pour le Luxembourg, l'option « 6 mois » la mieux rémunérée est retenue ; pour la France, cas d'un premier enfant — [OCDE, Family Database PF2.1 Parental leave systems (PDF)](https://webfs.oecd.org/Els-com/Family_Database/PF2_1_Parental_leave_systems.pdf)
- Canada, assurance-emploi 2026 **[officiel, lu dans des extraits de recherche]** : maximum de la rémunération assurable 68 900 $ (65 700 $ en 2025) ; prestation hebdomadaire maximale 729 $, et 437 $ pour les prestations parentales prolongées ; durées maximales : 15 semaines de maternité, 35 semaines de prestations parentales standards ou 61 semaines prolongées — [Canada.ca, maximum de la rémunération assurable 2026](https://www.canada.ca/fr/emploi-developpement-social/programmes/assurance-emploi/ae-liste/assurance-emploi-employeurs/reduction-taux-cotisation/maximum-remuneration-assurable-2026.html) ; [Canada.ca, guide des prestations parentales](https://www.canada.ca/fr/emploi-developpement-social/programmes/assurance-emploi/ae-liste/rapports/guide/ch-13/prestations-parentales-speciales.html). Le plafond de 729 $ correspond à 55 % de la rémunération assurable **[calculé : 68 900 × 0,55 / 52 = 728,75]**.
- Québec, Régime québécois d'assurance parentale (RQAP) **[officiel]** : revenu maximal assurable de 103 000 $ en 2026 (98 000 $ en 2025), ajusté chaque 1er janvier — [Québec.ca, montant des prestations RQAP](https://www.quebec.ca/famille-et-soutien-aux-personnes/grossesse-parentalite/aide-financiere-prestations/regime-quebecois-assurance-parentale/grossesse-naissance/montant-prestations) ; taux de cotisation salarié 0,494 % **[lu dans un extrait de recherche]** — [Revenu Québec](https://www.revenuquebec.ca/fr/entreprises/retenues-et-cotisations/calculer-les-retenues-a-la-source-et-vos-cotisations-demployeur/regime-quebecois-dassurance-parentale/maximum-de-revenus-assurables-et-taux-de-cotisation/)

### Inferences
- Le plafond assurable du RQAP dépasse de 49 % celui de l'assurance-emploi **[calculé : 103 000 / 68 900 = 1,495]** : pour un salaire supérieur à 68 900 $, un congé parental est nettement mieux indemnisé au Québec que dans les autres provinces, indépendamment des taux.
- En semaines équivalentes à taux plein pour la mère, le Luxembourg (38,1) est loin devant la France (20,0) et le Canada fédéral (19,9), la Belgique (15,1) et la Suisse (7,9) : le régime canadien est long mais faiblement rémunéré, le régime suisse court.
- La hiérarchie des dépenses publiques en faveur des familles (Luxembourg, Belgique, France devant Suisse et Canada) recoupe celle du coût net de la garde, sauf pour le Canada où la baisse des tarifs est postérieure aux données de dépenses (2022).



### Gaps
- RQAP : nombre de semaines et taux de remplacement (régime de base et régime particulier, prestations de paternité exclusives) non confirmés sur une page officielle dans cette session — la page Québec.ca consultée ne contient que le plafond assurable.
- Allocations familiales pour une famille de deux enfants (allocations familiales françaises, allocations belges régionalisées, allocation familiale luxembourgeoise, allocations cantonales suisses, Allocation canadienne pour enfants et Allocation famille du Québec) : montants non extraits ; seul l'effort global en % du PIB est documenté.
- Part des ménages avec enfants par région : non extraite.
- Les dépenses SOCX datent de 2021-2022 et excluent les avantages fiscaux (quotient familial français, par exemple).

## 7. Éducation — résultats scolaires (PISA), sorties précoces, diplômés du supérieur

### Takeaway
Aux tests PISA 2022, le Québec (514 en mathématiques) et la Suisse (508) devancent le Canada (497), la Belgique (489) et la France (474) ; en compréhension de l'écrit et en sciences, toutes les grandes provinces canadiennes dépassent la France, la Belgique et la Suisse. Mais les écoles de langue française hors Québec obtiennent en lecture des scores nettement inférieurs à ceux des écoles anglophones de la même province (Ontario 446 contre 515, Nouveau-Brunswick 447 contre 478). PISA 2025 (publié le 8 septembre 2026) confirme la baisse générale : Canada 510 en sciences, 490 en lecture, 485 en mathématiques. La part de diplômés du supérieur chez les 25-34 ans est plus élevée au Canada (68 % ; Ontario 75 %, Québec 60 %) que dans les territoires européens, sauf l'Île-de-France (73 %), le Luxembourg (65 %) et Bruxelles (64 %).

### Cited Findings

Niveau de diplôme des jeunes adultes. Europe : Eurostat 2025 (Corse : 2023 pour deux séries, faible échantillon) **[officiel]**. Canada : Enquête sur la population active 2025, valeurs arrondies à l'unité **[officiel]**.

| Territoire | Sorties précoces 18-24 ans (%) | 25-34 ans sans diplôme du secondaire supérieur (%) | 25-34 ans diplômés du supérieur (%) |
|---|---|---|---|
| FR France | 7,2 | 10,1 | 55,8 |
| FR1 Île-de-France | 5,0 | 6,9 | 72,7 |
| FRB Centre-Val de Loire | 6,6 | 8,6 | 51,6 |
| FRC Bourgogne-Franche-Comté | 6,1 | 13,5 | 44,0 |
| FRD Normandie | 12,1 | 11,0 | 49,1 |
| FRE Hauts-de-France | 7,6 | 11,4 | 49,4 |
| FRF Grand Est | 7,9 | 11,5 | 48,0 |
| FRG Pays de la Loire | 7,5 | 11,4 | 54,9 |
| FRH Bretagne | 4,7 | 7,2 | 48,9 |
| FRI Nouvelle-Aquitaine | 8,2 | 10,1 | 51,6 |
| FRJ Occitanie | 6,4 | 10,2 | 52,9 |
| FRK Auvergne-Rhône-Alpes | 5,4 | 7,9 | 58,5 |
| FRL Provence-Alpes-Côte d'Azur | 9,2 | 10,6 | 52,3 |
| FRM Corse | 21,5 (2023) | 18,3 (2023) | 28,7 |
| BE Belgique | 7,3 | 11,0 | 52,7 |
| BE1 Bruxelles | 8,8 | 10,5 | 63,5 |
| BE3 Wallonie | 9,8 | 16,1 | 46,3 |
| LU / LU00 Luxembourg | 5,2 | 7,7 | 65,2 |
| CH Suisse | 5,5 | 9,4 | 50,6 |
| CH01 Région lémanique | 6,9 | 13,8 | 51,5 |
| CH02 Espace Mittelland | 5,4 | 9,5 | 45,4 |
| UE-27 | 9,1 | — | 44,8 |
| CA Canada | n.d. | 5 | 68 |
| CA-QC Québec | n.d. | 8 | 60 |
| CA-NB Nouveau-Brunswick | n.d. | 3 | 69 |
| CA-ON Ontario | n.d. | 3 | 75 |
| CA-MB Manitoba | n.d. | 6 | 59 |
| CA-SK Saskatchewan | n.d. | 5 | 54 |
| CA-AB Alberta | n.d. | 5 | 61 |
| CA-BC Colombie-Britannique | n.d. | 3 | 68 |
| CA-NS Nouvelle-Écosse | n.d. | 4 | 70 |
| CA-PE Île-du-Prince-Édouard | n.d. | 4 | 67 |
| CA-NL Terre-Neuve-et-Labrador | n.d. | 4 | 62 |
| CA-YT Yukon | n.d. | 4 | 68 |
| CA-NT Territoires du Nord-Ouest | n.d. | 14 | 54 |
| CA-NU Nunavut | n.d. | 44 | 23 |

- Sources du tableau — [Eurostat edat_lfse_16](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/edat_lfse_16?format=JSON&lang=EN&sinceTimePeriod=2018&sex=T&age=Y18-24&unit=PC&geo=FR1) ; [Eurostat edat_lfse_04](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/edat_lfse_04?format=JSON&lang=EN&sinceTimePeriod=2018&sex=T&age=Y25-34&isced11=ED5-8&unit=PC&geo=FR1) ; [Statistique Canada 37-10-0130-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3710013001)
- Composition du « tertiaire » canadien chez les 25-34 ans en 2025 (cycle court / baccalauréat / maîtrise ou doctorat) **[officiel]** : Canada 22 / 30 / 15 ; Québec 20 / 24 / 16 ; Ontario 24 / 33 / 18 ; Nouveau-Brunswick 34 / 25 / 9 ; Manitoba 22 / 27 / 9 ; Colombie-Britannique 20 / 34 / 14. Part de niveau universitaire (baccalauréat ou plus) **[calculé : somme des deux derniers]** : Canada 45 % ; Québec 40 % ; Ontario 51 % ; Nouveau-Brunswick 34 % — [Statistique Canada 37-10-0130-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3710013001)
PISA 2022, scores moyens des élèves de 15 ans **[officiel]** (le Luxembourg n'a pas participé à PISA 2022 ; * = valeur des systèmes scolaires anglophones, seule disponible pour la province) :

| Pays ou province | Mathématiques | Compréhension de l'écrit | Sciences |
|---|---|---|---|
| Moyenne OCDE | 472 | 476 | 485 |
| France | 474 | 474 | 487 |
| Belgique (ensemble des communautés) | 489 | 479 | 491 |
| Suisse | 508 | 483 | 503 |
| Luxembourg | n.d. | n.d. | n.d. |
| Canada | 497 | 507 | 515 |
| Québec | 514 | 501 | 512 |
| Nouveau-Brunswick | 468 | 469 | 483 |
| Ontario | 495 | 512 | 517 |
| Manitoba | 470 | 486 | 492 |
| Saskatchewan | 468 | 484 | 494 |
| Alberta | 504 | 525 | 534 |
| Colombie-Britannique | 496 | 511 | 519 |
| Nouvelle-Écosse | 470 | 489 | 492 |
| Île-du-Prince-Édouard | 478 | 496* | 496* |
| Terre-Neuve-et-Labrador | 459* | 478* | 491* |

- Source du tableau : tableaux « Average scores and confidence intervals » (mathématiques, lecture, sciences) et tableaux par langue du système scolaire — [CMEC, Measuring Up: Canadian Results of the OECD PISA 2022 Study](https://www.cmec.ca/Publications/Lists/Publications/Attachments/438/PISA-2022_Canadian_Report_EN.pdf)

PISA 2022 selon la langue du système scolaire (systèmes francophones / systèmes anglophones) **[officiel]** :

| Province | Mathématiques F / A | Lecture F / A | Sciences F / A |
|---|---|---|---|
| Canada | 511 / 493 | 494 / 511 | 508 / 517 |
| Québec | 515 / 500 | 500 / 506 | 512 / 514 |
| Nouveau-Brunswick | 478 / 463 | 447 / 478 | 461 / 492 |
| Ontario | 473 / 496 | 446 / 515 | 479 / 519 |
| Manitoba | 474 / 470 | 438 / 487 | 471 / 493 |
| Saskatchewan | 487 / 468 | 461 / 484 | 479 / 494 |
| Alberta | 498 / 504 | 471 / 525 | 497 / 534 |
| Colombie-Britannique | 494 / 496 | 482 / 511 | 487 / 519 |
| Nouvelle-Écosse | 476 / 470 | 446 / 491 | 476 / 493 |

- Source : tableaux « Average scores by language of the school system » (B.1.7 et équivalents lecture et sciences) ; Terre-Neuve-et-Labrador et l'Île-du-Prince-Édouard n'ont pas suréchantillonné les élèves par langue — [CMEC, rapport PISA 2022](https://www.cmec.ca/Publications/Lists/Publications/Attachments/438/PISA-2022_Canadian_Report_EN.pdf)
- PISA 2025, Canada **[officiel]** : 510 points en sciences (28 points au-dessus de la moyenne OCDE, soit une moyenne OCDE de 482 **[calculé]**) ; 490 en lecture (OCDE 461) ; 485 en mathématiques (OCDE 463) ; baisse de 17 points en lecture et de 12 points en mathématiques depuis 2022 ; sept provinces au-dessus de la moyenne OCDE en sciences ; Québec, Ontario, Alberta et Colombie-Britannique au niveau de la moyenne canadienne, les six autres provinces en dessous ; systèmes de langue anglaise 512 en sciences contre 504 pour les systèmes de langue française ; les systèmes de langue majoritaire devancent de 31 points les systèmes de langue minoritaire — [CMEC, Faits saillants PISA 2025](https://cmec.ca/docs/pisa2025/PISA_2025_Highlights_FR.pdf)
- PISA 2025, France : 483 en sciences, 458 en mathématiques, 456 en compréhension de l'écrit **[non vérifié : source secondaire ; la note du ministère mentionne une baisse de 16 points en lecture, ce qui donnerait 458 à partir de 474 — attribution des deux derniers scores à confirmer]** — [Digischool](https://www.digischool.fr/articles/education/classement-pisa-2025/) ; notes officielles : [DEPP, note d'information 26.40](https://www.education.gouv.fr/sites/default/files/document/depp-ni-2026-40pisa-mathspdf-520231.pdf)
- PISA 2025, Fédération Wallonie-Bruxelles **[officiel, synthèse ULiège du 8 septembre 2026]** : performances « à la hauteur de la moyenne internationale de l'OCDE » en sciences, en mathématiques et en lecture ; score en sciences identique à ceux de l'OCDE, de la France et de la Communauté germanophone ; Communauté flamande significativement au-dessus. Évolution sur vingt ans environ : FWB −4 points en sciences (2006-2025), −31 en mathématiques (2003-2025), −12 en lecture (2000-2025) ; France −8, −51, −49 ; Flandre −33, −64, −68 — [ULiège aSPe, synthèse PISA 2025](https://orbi.uliege.be/bitstream/2268/349304/2/pisa2025_synthese_et_slides_08092026.pdf)
- PISA 2025, Luxembourg : le pays a participé (6 078 élèves, 49 établissements) ; scores non extraits — [Ministère de l'Éducation nationale du Luxembourg, présentation PISA 2025](https://men.public.lu/dam-assets/fr/actualites/articles/communiques-conference-presse/2026/09/pisa-2025-presentation-resultats.pdf)

### Inferences
- Pour une famille francophone, le choix de province engage la qualité mesurée de l'école en français : au Québec, le système francophone est au niveau ou au-dessus du système anglophone ; en Ontario, en Alberta ou au Manitoba, l'écart en lecture atteint 49 à 68 points au détriment des écoles de langue française, alors qu'en mathématiques les écarts sont faibles ou favorables aux francophones au Nouveau-Brunswick.
- Le score belge de 2022 mêle Flandre et Fédération Wallonie-Bruxelles ; la synthèse ULiège 2025 indique que la FWB est au niveau de la moyenne OCDE et de la France, donc en dessous de la moyenne belge.
- La part de « diplômés du supérieur » flatte le Canada : en ne retenant que le niveau universitaire, 45 % des 25-34 ans canadiens (40 % au Québec) sont diplômés, contre 55,8 % de diplômés du supérieur tous cycles en France — les deux mesures ne sont pas strictement comparables.



### Gaps
- PISA 2022 de la Fédération Wallonie-Bruxelles (scores séparés) et PISA 2025 chiffrés pour la FWB, la Suisse, la Belgique et le Luxembourg : non extraits (les documents sont des diaporamas ou des pages OCDE inaccessibles en 403).
- PISA 2025 par province canadienne : les faits saillants du CMEC ne donnent que des positions relatives ; les scores provinciaux sont dans le rapport complet, non consulté.
- Cantons francophones suisses : aucun résultat PISA par canton trouvé ; non recherché au-delà.
- Sorties précoces 18-24 ans : pas de série provinciale canadienne harmonisée.

## 8. Éducation — coût du post-secondaire, école en français hors Québec, formation des adultes et francisation

### Takeaway
Les droits d'inscription universitaires des résidents sont de 178 € (licence) et 255 € (master) en France et de 1 194 € en Fédération Wallonie-Bruxelles à partir de 2026-2027 (835 € auparavant). Au Québec, les étudiants français et belges francophones paient le tarif des Canadiens non-résidents du Québec (sans supplément) au premier cycle et le tarif québécois aux deuxième et troisième cycles. Hors Québec, environ 181 000 élèves sont scolarisés dans des écoles de langue française en 2024-2025, dont 115 000 en Ontario et 31 000 au Nouveau-Brunswick.

### Cited Findings
- France, droits d'inscription 2026-2027 dans les établissements publics **[officiel]** : licence 178 € ; master 255 € ; doctorat 398 € ; diplôme d'ingénieur 2 620 € (cursus commencé après le 1er septembre 2018) ; ces tarifs nationaux s'appliquent aux étudiants français, de l'UE, de l'EEE, de Suisse et aux résidents du Québec. Droits différenciés pour les étudiants extracommunautaires : 2 902 € en licence, 3 950 € en master et en cycle d'ingénieur ; les doctorants conservent le tarif national ; à partir de 2026-2027, les exonérations décidées par les établissements sont plafonnées à 30 % des étudiants soumis aux droits différenciés — [etudiant.gouv.fr, droits d'inscription](https://www.etudiant.gouv.fr/droits-d-inscription-1489)
- Fédération Wallonie-Bruxelles **[non vérifié : lu dans des extraits de recherche]** : minerval plein de 1 194 € à partir de 2026-2027 (réforme adoptée le 5 juin 2026 ; 835 € auparavant, montant gelé depuis 2011), montants réduits ou exonération selon le revenu du ménage, gratuité pour les boursiers ; droits spécifiques pour les étudiants hors UE de 4 175 € en 2025-2026, soit 5 369 € au total en 2026-2027 selon un document budgétaire de l'UMONS — [student.be](https://www.student.be/fr/student-life/augmentation-du-minerval-montants-prix-en-2026-et-aides/) ; [UCLouvain, réforme du minerval progressif](https://www.uclouvain.be/fr/reforme-du-minerval-progressif) ; [UMONS, budget 2026-2027](https://web.umons.ac.be/app/uploads/2026/02/Budget-annuel-2026-27-version-16-02.pdf)
- Québec, étudiants français (page mise à jour le 9 juillet 2026) **[officiel]** : au collégial, tarif des résidents du Québec ; au premier cycle universitaire, à temps plein, tarif des Canadiens non-résidents du Québec sans montant supplémentaire (« tarif CNRQ préférentiel ») ; aux deuxième et troisième cycles, tarif québécois ; les résidents permanents de Saint-Pierre-et-Miquelon ont le tarif québécois dès le premier cycle. Étudiants belges francophones : mêmes règles à l'université. Conditions : passeport français ou belge valide, permis d'études, certificat d'acceptation du Québec ; les binationaux canadiens ne sont pas concernés ; les Belges doivent justifier de leur appartenance à la Communauté française — [Québec.ca, exemption des droits de scolarité selon les ententes](https://www.quebec.ca/education/etudier-quebec/aide-financiere-etudiants-internationaux/exemption-droits-scolarite-ententes)
- L'entente Québec-France sur la mobilité étudiante universitaire a été renouvelée et signée en avril 2024 **[officiel, lu dans un extrait de recherche]** — [Québec.ca, communiqué](https://www.quebec.ca/nouvelles/actualites/details/21e-rencontre-alternee-des-premiers-ministres-francais-et-quebecois-renouvellement-et-signature-de-lentente-en-matiere-de-mobilite-etudiante-au-niveau-universitaire-entre-le-quebec-et-la-france-55057). Pour les autres programmes d'exemption (selon le programme ou la région), « aucune nouvelle exemption des droits de scolarité supplémentaires ne sera accordée à partir de la session d'automne 2026 » **[lu dans un extrait de recherche ; portée exacte à vérifier]** — [Québec.ca](https://www.quebec.ca/education/etudier-quebec/aide-financiere-etudiants-internationaux/exemption-droits-scolarite-supplementaires-selon-programme-region)
- Suisse **[non vérifié : guides secondaires contradictoires]** : environ 500 à 1 000 CHF par semestre dans les universités cantonales ; EPFL 730 ou 780 CHF par semestre selon les sources ; un projet fédéral de 2025 prévoyait de doubler les taxes des étudiants suisses et de les quadrupler pour les étudiants étrangers dans les écoles polytechniques (adoption non vérifiée) — [Le Temps, mars 2025 (copie UNIL)](https://people.unil.ch/mariusbrulhart/files/2025/03/letemps-taxes-uni-2503.pdf) ; pages officielles non ouvertes : [EPFL, finance de cours](https://www.epfl.ch/education/studies/finance-cours-autres-frais/) ; [UNIGE, conditions d'inscription 2026-27](https://www.unige.ch/immatriculations/conditions)
- École en français hors Québec — effectifs des programmes d'enseignement dans la langue officielle de la minorité, écoles publiques primaires et secondaires, 2024-2025 **[officiel]** : Canada 263 661, dont Québec 82 809 (écoles de langue anglaise) ; hors Québec 180 852 **[calculé : 263 661 − 82 809]** : Ontario 114 789 ; Nouveau-Brunswick 31 293 ; Alberta 10 539 ; Nouvelle-Écosse 6 846 ; Manitoba 6 576 ; Colombie-Britannique 6 060 ; Saskatchewan 2 340 ; Île-du-Prince-Édouard 1 251 ; Terre-Neuve-et-Labrador 393 ; Yukon 393 ; Territoires du Nord-Ouest 255 ; Nunavut 114 — [Statistique Canada 37-10-0009-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3710000901) ; [37100009-eng.zip](https://www150.statcan.gc.ca/n1/tbl/csv/37100009-eng.zip)
- Programmes d'immersion française (élèves de la majorité anglophone), 2024-2025 **[officiel]** : Canada 470 793 ; Ontario 271 257 ; Colombie-Britannique 51 858 ; Alberta 44 319 ; Manitoba 28 830 ; Nouveau-Brunswick 23 967 ; Saskatchewan 17 103 ; Nouvelle-Écosse 16 041 ; Terre-Neuve-et-Labrador 10 497 ; Île-du-Prince-Édouard 4 956 ; Territoires du Nord-Ouest 1 047 ; Yukon 915 — même source.

### Inferences
- Pour un jeune Français ou Belge francophone, le Québec est la seule destination canadienne où le coût des études est abaissé par un accord : tarif québécois en maîtrise et au doctorat, tarif « canadien » au baccalauréat ; ailleurs au Canada, il paierait les droits des étudiants internationaux tant qu'il n'est pas résident permanent (règle générale non vérifiée ici).
- L'école de langue française existe dans toutes les provinces et tous les territoires, mais sa taille varie de 114 élèves (Nunavut) à 114 789 (Ontario) : l'offre réelle (nombre d'écoles, distance, secondaire complet) est très inégale hors Ontario et Nouveau-Brunswick.



### Gaps
- Droits de scolarité 2026-2027 en dollars au Québec (tarif québécois, tarif des Canadiens non-résidents, tarif international) et droits moyens par province (Statistique Canada, tableau 37-10-0045) : non extraits.
- Taxes d'études exactes à l'UNIGE, à l'UNIL et à l'EPFL (résidents et étrangers) et frais de l'Université du Luxembourg : non vérifiés sur les sites officiels.
- Aide financière aux études (bourses sur critères sociaux en France, allocations d'études FWB, AideS au Luxembourg, bourses cantonales suisses, Aide financière aux études du Québec, prêts et bourses canadiens) : non recherchée.
- Droit constitutionnel à l'instruction dans la langue de la minorité (article 23 de la Charte canadienne des droits et libertés) et nombre d'écoles de langue française par province : non sourcés dans cette session (texte de la Charte : https://laws-lois.justice.gc.ca/fra/const/page-12.html, à confirmer).
- Formation des adultes et cours de langue pour nouveaux arrivants (Francisation Québec, cours de langue financés par le gouvernement fédéral, offres luxembourgeoise, belge, française et suisse) : non recherchés faute de budget.

## 9. Vie quotidienne — sécurité, environnement, temps de travail et congés, navettes, satisfaction à l'égard de la vie

### Takeaway
Les taux d'homicides sont bas et proches en Europe francophone et dans l'est du Canada (0,4 à 2 pour 100 000 ; Québec 1,0, Ontario 1,3, Suisse 0,5), avec trois exceptions : Corse (4,2), Bruxelles (2,7) et surtout Prairies et territoires (Manitoba 3,6, Saskatchewan 5,2, Nunavut 16,7). L'air est partout plus propre au Canada (3 à 7,5 µg/m³ de PM2,5) qu'en Europe francophone (7,6 à 12,2). Un salarié à temps plein travaille habituellement environ 39-40 heures par semaine en France, en Belgique et au Canada, 41 au Luxembourg et 43 en Suisse.

### Cited Findings

Sécurité. Europe : infractions enregistrées par la police pour 100 000 habitants, 2024 (Luxembourg : 2022, cambriolages 2021) **[officiel]**. Canada : taux d'homicides 2025, Indice de gravité de la criminalité (IGC) et IGC avec violence 2025 **[officiel]**.

| Territoire | Homicides /100 000 | Vols avec violence /100 000 | Cambriolages de logements /100 000 | IGC (Canada) | IGC violent (Canada) |
|---|---|---|---|---|---|
| FR France | 1,19 | 82,8 | 295,5 | — | — |
| FR1 Île-de-France | 1,06 | 158,2 | 288,2 | — | — |
| FRB Centre-Val de Loire | 0,73 | 41,7 | 341,9 | — | — |
| FRC Bourgogne-Franche-Comté | 0,96 | 31,9 | 226,7 | — | — |
| FRD Normandie | 0,96 | 45,4 | 230,9 | — | — |
| FRE Hauts-de-France | 0,75 | 66,1 | 265,2 | — | — |
| FRF Grand Est | 0,83 | 39,1 | 238,4 | — | — |
| FRG Pays de la Loire | 1,12 | 49,9 | 291,0 | — | — |
| FRH Bretagne | 0,55 | 38,0 | 248,8 | — | — |
| FRI Nouvelle-Aquitaine | 0,84 | 47,5 | 323,0 | — | — |
| FRJ Occitanie | 1,05 | 66,1 | 348,8 | — | — |
| FRK Auvergne-Rhône-Alpes | 1,03 | 79,6 | 363,4 | — | — |
| FRL Provence-Alpes-Côte d'Azur | 2,00 | 114,6 | 361,5 | — | — |
| FRM Corse | 4,18 | 20,6 | 63,0 | — | — |
| BE Belgique | 1,40 | 116,3 | 311,5 | — | — |
| BE1 Bruxelles | 2,69 | 443,0 | 458,3 | — | — |
| BE3 Wallonie | 1,97 | 125,8 | 409,6 | — | — |
| LU / LU00 Luxembourg | 1,39 (2022) | 101,0 (2022) | 180,7 (2021) | — | — |
| CH Suisse | 0,50 | 23,6 | 307,7 | — | — |
| CH01 Région lémanique | 0,69 | 36,3 | 405,0 | — | — |
| CH02 Espace Mittelland | 0,41 | 21,8 | 300,0 | — | — |
| CA Canada | 1,61 | n.d. | n.d. | 75,0 | 97,2 |
| CA-QC Québec | 0,97 | n.d. | n.d. | 61,6 | 98,0 |
| CA-NB Nouveau-Brunswick | 1,72 | n.d. | n.d. | 90,4 | 108,6 |
| CA-ON Ontario | 1,27 | n.d. | n.d. | 57,2 | 74,9 |
| CA-MB Manitoba | 3,64 | n.d. | n.d. | 130,0 | 194,6 |
| CA-SK Saskatchewan | 5,21 | n.d. | n.d. | 146,6 | 194,3 |
| CA-AB Alberta | 1,77 | n.d. | n.d. | 90,6 | 102,0 |
| CA-BC Colombie-Britannique | 1,81 | n.d. | n.d. | 92,4 | 98,0 |
| CA-NS Nouvelle-Écosse | 1,74 | n.d. | n.d. | 73,0 | 89,8 |
| CA-PE Île-du-Prince-Édouard | 1,64 | n.d. | n.d. | 68,4 | 71,6 |
| CA-NL Terre-Neuve-et-Labrador | 2,18 | n.d. | n.d. | 88,7 | 100,2 |
| CA-YT Yukon | 6,21 | n.d. | n.d. | 195,4 | 236,0 |
| CA-NT Territoires du Nord-Ouest | 10,88 | n.d. | n.d. | 485,9 | 556,3 |
| CA-NU Nunavut | 16,73 | n.d. | n.d. | 461,2 | 719,0 |

- Sources du tableau — [Eurostat crim_gen_reg](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/crim_gen_reg?format=JSON&lang=EN&sinceTimePeriod=2018&iccs=ICCS0101&iccs=ICCS0401&iccs=ICCS05012&unit=P_HTHAB&geo=FR1) ; [Statistique Canada 35-10-0068-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3510006801) ; [Statistique Canada 35-10-0026-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3510002601)
- Effectifs d'homicides derrière les taux (petits nombres) **[officiel]** : Corse 15, Bruxelles 34, Wallonie 73, Région lémanique 12, Espace Mittelland 8, Luxembourg 9 (2022), Île-de-France 133 (2024) ; Québec 88, Ontario 207, Nouveau-Brunswick 15, Manitoba 55, Île-du-Prince-Édouard 3, Yukon 3, Nunavut 7 (2025). Le taux du Manitoba était de 6,37 en 2024 (95 victimes) — mêmes sources.
- IGC 2025 des principales régions métropolitaines **[officiel]** : Montréal 61,3 ; Québec 55,0 ; Sherbrooke 50,3 ; Saguenay 49,3 ; Trois-Rivières 56,0 ; Ottawa-Gatineau 52,8 (partie québécoise 60,6 ; partie ontarienne 50,6) ; Toronto 55,0 ; Grand Sudbury 64,9 ; Moncton 105,6 ; Saint John 70,0 ; Fredericton 80,5 ; Halifax 68,6 ; St. John's 79,2 ; Winnipeg 113,4 ; Regina 87,4 ; Saskatoon 98,9 ; Calgary 61,7 ; Edmonton 95,6 ; Vancouver 83,5 ; Victoria 74,6 — [Statistique Canada 35-10-0026-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3510002601)
- Taux d'homicides harmonisé par l'OCDE (régions TL2), pour recoupement **[officiel]** : France 1,2 (2023), Provence-Alpes-Côte d'Azur 2,1, Corse 3,1 ; Bruxelles 2,7 et Wallonie 2,0 (2024) ; Région lémanique 0,7 et Espace Mittelland 0,4 (2024) ; Québec 1,0, Ontario 1,3, Manitoba 3,6, Saskatchewan 5,2 (2025) — [OCDE SDMX DSD_REG_SOC@DF_SAFETY](https://sdmx.oecd.org/public/rest/data/OECD.CFE.EDS,DSD_REG_SOC@DF_SAFETY,2.4/all?startPeriod=2018&dimensionAtObservation=AllDimensions&format=csvfilewithlabels)

Environnement — exposition moyenne de la population aux particules fines PM2,5 (µg/m³), 2020 **[officiel]** ; entre parenthèses, part de la population exposée à plus de 10 µg/m³ :

- France 9,5 (38 %) ; Île-de-France 11,1 (90 %) ; Centre-Val de Loire 8,7 (7 %) ; Bourgogne-Franche-Comté 8,3 (3 %) ; Normandie 9,1 (13 %) ; Hauts-de-France 10,4 (64 %) ; Grand Est 9,1 (21 %) ; Pays de la Loire 8,0 (0 %) ; Bretagne 7,6 (0 %) ; Nouvelle-Aquitaine 8,4 (6 %) ; Occitanie 8,9 (19 %) ; Auvergne-Rhône-Alpes 9,3 (35 %) ; Provence-Alpes-Côte d'Azur 11,2 (76 %) ; Corse 9,5 (36 %) — [OCDE SDMX DSD_AIR_POL@DF_AIR_POLL](https://sdmx.oecd.org/public/rest/data/OECD.ENV.EPI,DSD_AIR_POL@DF_AIR_POLL,/all?startPeriod=2018&dimensionAtObservation=AllDimensions&format=csvfilewithlabels)
- Belgique 11,1 (87 %) ; Bruxelles 12,2 (100 %) ; Wallonie 10,2 (64 %) ; Luxembourg 8,7 (0 %) ; Suisse 9,0 (20 %) ; Région lémanique 9,1 (30 %) ; Espace Mittelland 8,1 (0 %) — même source.
- Canada 6,3 (0 %) ; Québec 7,5 ; Nouveau-Brunswick 4,8 ; Ontario 6,6 ; Manitoba 4,4 ; Saskatchewan 5,6 ; Alberta 6,1 ; Colombie-Britannique 5,4 ; Nouvelle-Écosse 4,8 ; Île-du-Prince-Édouard 3,9 ; Terre-Neuve-et-Labrador 4,0 ; Yukon 4,0 ; Territoires du Nord-Ouest 5,6 ; Nunavut 3,0 (0 % au-dessus de 10 µg/m³ dans toutes les provinces et territoires) — même source. Valeur guide annuelle de l'OMS (2021) : 5 µg/m³ **[non vérifié dans cette session]**.

Temps de travail — heures hebdomadaires habituelles dans l'emploi principal, 2025 **[officiel]** :

- Personnes en emploi à temps plein (Europe : 20-64 ans ; Canada : 15 ans et plus) : France 39,9 ; Belgique 40,3 ; Luxembourg 40,8 ; Suisse 43,3 ; UE-27 40,3 ; Canada 39,7 ; Québec 38,6 ; Nouveau-Brunswick 40,1 ; Ontario 39,7 ; Manitoba 39,9 ; Saskatchewan 40,8 ; Alberta 40,9 ; Colombie-Britannique 39,7 ; Nouvelle-Écosse 40,0 ; Île-du-Prince-Édouard 40,6 ; Terre-Neuve-et-Labrador 41,4 — [Eurostat lfsa_ewhun2](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/lfsa_ewhun2?format=JSON&lang=EN&sinceTimePeriod=2018&nace_r2=TOTAL&wstatus=EMP&wstatus=SAL&worktime=FT&worktime=TOTAL&age=Y20-64&sex=T&unit=HR&geo=FR&geo=BE&geo=LU&geo=CH&geo=EU27_2020) ; [Statistique Canada 14-10-0043-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410004301)
- Salariés à temps plein seulement (Europe) : France 38,9 ; Belgique 38,9 ; Luxembourg 40,5 ; Suisse 42,6 ; UE-27 39,5 — [Eurostat lfsa_ewhun2](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/lfsa_ewhun2?format=JSON&lang=EN&sinceTimePeriod=2018&nace_r2=TOTAL&wstatus=EMP&wstatus=SAL&worktime=FT&worktime=TOTAL&age=Y20-64&sex=T&unit=HR&geo=FR&geo=BE&geo=LU&geo=CH&geo=EU27_2020)
- Ensemble des personnes en emploi, temps plein et partiel confondus (régions : voir bloc CSV) : France 37,2 ; Île-de-France 37,8 ; Belgique 36,5 ; Bruxelles 36,6 ; Wallonie 35,8 ; Luxembourg 38,0 ; Suisse 35,8 ; Région lémanique 36,1 ; Espace Mittelland 35,5 ; Canada 35,5 ; Québec 34,5 ; Ontario 35,5 ; Nouveau-Brunswick 36,7 — [Eurostat lfst_r_lfe2ehour](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/lfst_r_lfe2ehour?format=JSON&lang=EN&sinceTimePeriod=2018&sex=T&age=Y20-64&unit=HR&geo=FR1) ; [Statistique Canada 14-10-0043-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410004301)

Congés payés légaux et jours fériés :

- Minimum légal de congés payés et jours fériés légaux en Europe **[lu dans des extraits de recherche ; sources officielles pour le Luxembourg, la Belgique et la Suisse]** : France 5 semaines (25 jours ouvrés) et 11 jours fériés ; Belgique 20 jours (temps plein, semaine de 5 jours) et 10 jours fériés légaux ; Luxembourg 26 jours ouvrables et 11 jours fériés légaux ; Suisse 20 jours (4 semaines), le 1er août étant le seul jour férié fédéral, les cantons pouvant fixer au plus 8 autres jours fériés assimilés au dimanche — [Guichet.lu, congé annuel](https://guichet.public.lu/fr/entreprises/ressources-humaines/conges/annuel/conge-annuel.html) ; [SPF Emploi (Belgique)](https://emploi.belgique.be/fr/themes/international/detachement/conditions-de-travail-respecter-en-cas-de-detachement-en-3) ; [ch.ch, vacances et jours fériés](https://ch.ch/fr/travail/horaires--absences--vacances/vacances-et-jours-feries) ; [Statista, jours fériés et congés payés en Europe](https://fr.statista.com/statistiques/1387161/jours-feries-et-conges-payes-europe-par-pays)
- Canada **[non vérifié : guides privés pour employeurs]** : presque toutes les provinces et tous les territoires garantissent 2 semaines de congés payés par an ; la Saskatchewan en garantit 3 dès l'embauche ; secteur de compétence fédérale : 2 semaines, portées à 4 avec l'ancienneté ; Alberta : 2 semaines, 3 après cinq ans. Jours fériés légaux en 2026 : Québec 8, Ontario 9, Saskatchewan 10 ; de 6 (Nouvelle-Écosse, Terre-Neuve-et-Labrador, Île-du-Prince-Édouard) à 10 (secteur fédéral, Colombie-Britannique, Saskatchewan, territoires) — [Employment Hero, vacation entitlement by province](https://employmenthero.com/en-ca/resources/vacation-entitlement-by-province/) ; [Employment Hero, statutory holidays by province](https://employmenthero.com/en-ca/resources/statutory-holidays-by-province/) ; [CIC News, janvier 2026](https://www.cicnews.com/2026/01/planning-your-2026-holidays-what-you-should-know-about-vacation-entitlement-and-statutory-holidays-in-canada-0164071.html)
- Total « congés légaux + jours fériés » d'un salarié débutant **[calculé à partir des deux points précédents]** : Luxembourg 37 jours ; France 36 ; Belgique 30 ; Suisse 21 à 29 selon le canton ; Saskatchewan 25 (15 + 10) ; Ontario 19 (10 + 9) ; Québec 18 (10 + 8). L'écart France-Québec (18 jours) représente environ 7 % d'une année de 260 jours ouvrés **[calculé : 18 / 260]**.

Satisfaction à l'égard de la vie — **indicateur subjectif**, à ne pas mêler aux indicateurs objectifs :

- Note moyenne de 0 à 10, Europe (EU-SILC, 16 ans et plus), 2025 **[officiel]** : France 7,1 ; Belgique 7,6 ; Luxembourg 7,4 ; Suisse 7,7 (2024) ; UE-27 7,2 — [Eurostat ilc_pw01](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/ilc_pw01?format=JSON&lang=EN&sinceTimePeriod=2018&life_sat=LIFE&statinfo=AVG&isced11=TOTAL&sex=T&age=Y_GE16&unit=RTG&geo=FR&geo=BE&geo=LU&geo=CH&geo=EU27_2020)
- Note moyenne de 0 à 10, Canada (Enquête sociale canadienne), 2e trimestre 2025 **[officiel]** : Canada (hors territoires) 7,0 ; Québec 7,5 ; Nouveau-Brunswick 7,3 ; Ontario 6,8 ; Manitoba 7,0 ; Saskatchewan 6,8 ; Alberta 6,6 ; Colombie-Britannique 6,8 ; Nouvelle-Écosse 7,0 ; Île-du-Prince-Édouard 7,3 ; Terre-Neuve-et-Labrador 7,2. Sur les quatre trimestres T3 2024-T2 2025, le Québec se situe entre 7,5 et 7,6 et l'Ontario entre 6,7 et 6,9 — [Statistique Canada 13-10-0843-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1310084301)
- Part des adultes « satisfaits ou très satisfaits » de leur vie (ESCC 2025) **[officiel]** : Canada 83,7 % ; Québec 88,5 ; Nouveau-Brunswick 85,9 ; Ontario 81,5 ; Manitoba 84,8 ; Saskatchewan 84,0 ; Alberta 82,5 ; Colombie-Britannique 83,2 ; Nouvelle-Écosse 80,7 ; Île-du-Prince-Édouard 85,0 ; Terre-Neuve-et-Labrador 86,1 — [Statistique Canada 13-10-0905-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1310090501)

### Inferences
- Le Québec est la seule province canadienne dont la satisfaction moyenne (7,5) atteint les niveaux belge et suisse ; l'Ontario et l'Ouest (6,6 à 6,8) sont sous le niveau français (7,1) — sous réserve des différences d'enquête.
- À salaire horaire égal, un temps plein suisse représente environ 3,4 heures hebdomadaires de plus qu'un temps plein français et 4,7 de plus qu'un temps plein québécois **[calculé : 43,3 − 39,9 ; 43,3 − 38,6]** ; la comparaison Europe-Canada mêle toutefois deux tranches d'âge (20-64 ans contre 15 ans et plus).

### Gaps
- Temps de trajet domicile-travail : aucune série harmonisée extraite (module Eurostat 2019 sur l'organisation du travail et Recensement canadien de 2021 non interrogés).
- Rigueur climatique des communautés nordiques canadiennes : non recherchée ; le flux OCDE « Cooling and heating degree days - Regions » (DSD_REG_CLIM@DF_DEGREE_DAYS) permettrait une mesure harmonisée.
- PM2,5 : dernier millésime OCDE 2020 ; données régionales de l'Agence européenne pour l'environnement et indicateurs canadiens de qualité de l'air plus récents non extraits ; la valeur guide de l'OMS n'a pas été vérifiée dans cette session.
- Satisfaction à l'égard de la vie par région européenne (OCDE Regional Well-Being) : non disponible via l'API.
- Congés et jours fériés canadiens : à confirmer sur les sites des normes du travail de chaque province (CNESST au Québec, ministère du Travail de l'Ontario, etc.) ; conventions collectives et usages d'entreprise non pris en compte, alors qu'ils dépassent souvent les minimums.
- Criminalité enregistrée hors homicides : aucune mesure commune Europe-Canada (l'IGC pondère les infractions par leur gravité ; Eurostat publie des taux par infraction).
