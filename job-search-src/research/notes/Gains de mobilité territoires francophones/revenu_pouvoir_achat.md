# Revenu, salaire net, pouvoir d'achat et patrimoine — territoires francophones d'Europe et du Canada

Note de données arrêtée au 22 novembre 2026. Statut de chaque chiffre : **O** = officiel (extrait par API ou lu dans la source), **C** = calculé par nous (formule indiquée), **NV** = non vérifié à la source primaire (résumé de moteur de recherche ou source secondaire). Aucune valeur n'est interpolée ; les cases manquantes sont notées « nd ». Monnaies d'origine conservées ; les conversions utilisent uniquement les PPA de l'OCDE (dépense de consommation finale des ménages, E011, 1 USD = 0,744 EUR France, 0,779 EUR Belgique, 0,894 EUR Luxembourg, 1,14 CHF, 1,23 CAD en 2022 ; 0,717 ; 0,752 ; 0,845 ; 1,06 ; 1,24 en 2024), requête : https://sdmx.oecd.org/public/rest/data/OECD.SDD.TPS,DSD_PPP@DF_PPP_PPP,1.1/all?startPeriod=2022

Codes : régions françaises FR1, FRB…FRM ; BE1, BE3 (BE2 Flandre en référence) ; LU00 ; CH01, CH02 ; provinces canadiennes CA-QC, CA-NB, CA-ON, CA-MB, CA-SK, CA-AB, CA-BC, CA-NS, CA-PE, CA-NL, territoires CA-YT, CA-NT, CA-NU ; nationaux FR, BE, LU, CH, CA.

## Ce qui est comparable et ce qui ne l'est pas

### Takeaway
Trois blocs sont réellement harmonisés : l'enquête européenne sur la structure des salaires 2022 (France, Belgique, Luxembourg, Suisse), Taxing Wages de l'OCDE (cinq pays, mais un seul barème infranational par pays fédéral) et les PPA OCDE/Eurostat. Tout le reste (Insee, OFS, Statistique Canada) mesure des objets différents : moyenne ou médiane, brut ou net, entreprises de 10 salariés et plus ou tous employeurs.

### Cited Findings
- Les salaires régionaux Eurostat (SES 2022, NUTS 1) sont des **moyennes** brutes, entreprises de 10 salariés ou plus, sections B à S hors administration publique ; la Suisse n'y figure qu'en un seul bloc (CH0) (O) — [Eurostat earn_ses22_rann](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/earn_ses22_rann?format=JSON&lang=EN)
- Les salaires suisses de l'OFS (ESS) sont des **médianes** mensuelles brutes standardisées, par grande région seulement dans les tableaux interrogés (O) — [OFS px-x-0304010000_204](https://www.pxweb.bfs.admin.ch/pxweb/fr/px-x-0304010000_204/px-x-0304010000_204/px-x-0304010000_204.px/)
- Les salaires canadiens (Enquête sur la population active) couvrent tous les salariés, tous secteurs, en médiane et moyenne horaire ou hebdomadaire, sans ventilation par diplôme dans les tableaux de salaires (O) — [Statistique Canada 14-10-0064-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410006401)
- Les salaires Insee par région sont **nets** de cotisations (avant impôt sur le revenu), en équivalent temps plein, secteur privé (O) — [Insee, Emploi, chômage, revenus du travail 2026](https://www.insee.fr/fr/statistiques/8733103)
- Le taux de pauvreté européen (60 % de la médiane nationale) et la mesure canadienne du panier de consommation (seuil absolu régionalisé) ne sont pas comparables (O) — [Eurostat ilc_li41](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/ilc_li41?format=JSON&lang=EN&sinceTimePeriod=2023) ; [Statistique Canada 11-10-0135-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1110013501)
- Le patrimoine net canadien de Statistique Canada inclut les régimes de retraite d'employeur ; la série OCDE pour le Canada (428 300 CAD en 2023) est plus basse que celle de Statistique Canada (519 700 CAD) pour la même enquête (O) — [OCDE Wealth Distribution Database](https://sdmx.oecd.org/public/rest/data/OECD.WISE.INE,DSD_WEALTH@DF_WEALTH,1.0/all?startPeriod=2016) ; [Statistique Canada 11-10-0016-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1110001601)

### Inferences
- Un classement fin entre régions françaises de province (écarts de 1 à 3 %) n'a pas de sens : les écarts sont inférieurs aux différences de champ.
- Les comparaisons Europe–Canada de salaires sont les plus fragiles : champ (tous employeurs contre 10 salariés et plus), unité (hebdomadaire × 52 contre annuel avec primes).

### Gaps
- Aucune source harmonisée ne donne de médiane régionale de salaire pour les régions françaises et belges.

## 1. Salaires bruts par territoire

### Takeaway
En 2022, le salaire brut annuel moyen va de 35 152 EUR en Corse à 51 701 EUR en Île-de-France, 50 648 EUR en Wallonie, 59 438 EUR à Bruxelles, 74 542 EUR au Luxembourg et 96 147 CHF en Suisse. En Suisse, les deux grandes régions francophones sont au niveau national (médiane 2024 : 6 998 et 6 964 CHF par mois contre 7 024). Au Canada, la médiane horaire à temps plein 2025 va de 28,21 CAD (Île-du-Prince-Édouard) à 35,00 CAD (Colombie-Britannique), Québec 33,00.

### Cited Findings
Salaire brut annuel moyen et salaire horaire brut moyen, SES 2022 (O) — [earn_ses22_rann](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/earn_ses22_rann?format=JSON&lang=EN) ; [earn_ses22_rhr](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/earn_ses22_rhr?format=JSON&lang=EN) ; national : [earn_ses22_27](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/earn_ses22_27?format=JSON&lang=EN&geo=FR&geo=BE&geo=LU&geo=CH&nace_r2=B-S_X_O&sex=T&age=TOTAL)

| Code | Annuel moyen (monnaie nationale) | Horaire moyen EUR | Horaire moyen SPA |
|---|---|---|---|
| FR (national) | 40 679 EUR | nd | nd |
| FR1 | 51 701 | 25,31 | 23,31 |
| FRB | 36 012 | 18,13 | 16,69 |
| FRC | 35 889 | 17,39 | 16,01 |
| FRD | 35 783 | 17,90 | 16,48 |
| FRE | 35 924 | 18,01 | 16,59 |
| FRF | 37 313 | 18,10 | 16,67 |
| FRG | 35 602 | 17,91 | 16,49 |
| FRH | 35 902 | 17,96 | 16,54 |
| FRI | 35 734 | 17,92 | 16,50 |
| FRJ | 36 622 | 18,41 | 16,95 |
| FRK | 39 379 | 19,45 | 17,91 |
| FRL | 39 798 | 19,54 | 17,99 |
| FRM | 35 152 | 17,32 | 15,94 |
| BE (national) | 53 642 EUR | nd | nd |
| BE1 | 59 438 | 29,70 | 26,54 |
| BE3 | 50 648 | 25,80 | 23,06 |
| BE2 (réf.) | 53 486 | 26,80 | 23,95 |
| LU00 | 74 542 | 30,58 | 23,42 |
| CH (CH0) | 96 147 CHF (95 698 EUR) | 44,55 (44,76 CHF) | 28,31 |

- France, salaire net moyen en équivalent temps plein, secteur privé, 2024 : 2 730 EUR par mois (médiane 2 190 ; D1 1 490 ; D9 4 330). Écart régional à la moyenne nationale : FR1 +27,3 % ; FRK −3,6 ; FRL −6,0 ; FRJ −9,6 ; FRF −10,2 ; FRE −10,5 ; FRG −10,8 ; FRD −11,0 ; FRB −11,2 ; FRI −11,8 ; FRH −12,4 ; FRC −12,6 ; FRM −15,7 (O). Secteur public : FR1 +7,2 ; FRM +2,4 ; autres régions entre −5,0 et −0,2 (O) — [Insee, disparités territoriales](https://www.insee.fr/fr/statistiques/8733103) ; [Insee, salaires du privé](https://www.insee.fr/fr/statistiques/8733089)
- Suisse, salaire mensuel brut médian (ESS), 2024 : Suisse 7 024 CHF (P10 4 635 ; P90 12 526) ; Région lémanique 6 998 (P10 4 585 ; P90 12 636) ; Espace Mittelland 6 964 (P10 4 737 ; P90 11 734) ; Zurich 7 502 ; Tessin 5 708. En 2022 : 6 788 ; 6 849 ; 6 752 (O) — [OFS, tableau 204](https://www.pxweb.bfs.admin.ch/pxweb/fr/px-x-0304010000_204/px-x-0304010000_204/px-x-0304010000_204.px/) (API : https://www.pxweb.bfs.admin.ch/api/v1/fr/px-x-0304010000_204/px-x-0304010000_204.px)
- Canton de Vaud : la publication cantonale donne un salaire horaire de 40,40 CHF pour la Région lémanique contre 40,50 pour la Suisse (NV, lu dans un résumé) — [Statistique Vaud, Numerus 06-2026](https://www.vd.ch/fileadmin/user_upload/organisation/dfin/statvd/Publications/Numerus/Numerus-06-2026_Salaires.pdf)
- Canada, salariés à temps plein, 2025, CAD (O) — [Statistique Canada 14-10-0064-01](https://www150.statcan.gc.ca/n1/tbl/csv/14100064-eng.zip)

| Code | Horaire médian 15+ | 15-24 | 25-54 | 55+ | Hebdo médian 15+ | Hebdo moyen 15+ |
|---|---|---|---|---|---|---|
| CA | 33,65 | 22,00 | 35,90 | 32,97 | 1 320,00 | 1 510,24 |
| CA-QC | 33,00 | 23,05 | 35,00 | 31,00 | 1 254,40 | 1 415,83 |
| CA-NB | 28,85 | 21,00 | 31,00 | 27,14 | 1 148,63 | 1 292,04 |
| CA-ON | 34,62 | 22,00 | 36,92 | 33,65 | 1 349,60 | 1 570,24 |
| CA-MB | 28,74 | 20,00 | 30,00 | 30,00 | 1 134,00 | 1 300,02 |
| CA-SK | 31,25 | 21,00 | 34,00 | 32,00 | 1 254,80 | 1 409,99 |
| CA-AB | 34,97 | 22,00 | 36,92 | 35,90 | 1 399,64 | 1 599,56 |
| CA-BC | 35,00 | 24,00 | 37,02 | 35,00 | 1 383,60 | 1 572,71 |
| CA-NS | 29,80 | 20,00 | 31,67 | 29,00 | 1 192,13 | 1 341,53 |
| CA-PE | 28,21 | 20,00 | 30,00 | 28,47 | 1 133,25 | 1 236,58 |
| CA-NL | 30,07 | 20,60 | 33,00 | 28,00 | 1 248,00 | 1 445,99 |

- Canada, revenu d'emploi médian 2024 (personnes ayant un revenu d'emploi, toutes durées de travail), CAD, 25-34 / 25-54 / 55-64 ans : CA 49 400 / 58 600 / 52 700 ; QC 50 400 / 59 000 / 49 800 ; NB 46 100 / 53 000 / 44 300 ; ON 49 800 / 59 500 / 55 000 ; MB 44 500 / 52 300 / 51 500 ; SK 46 300 / 56 300 / 52 600 ; AB 49 000 / 59 000 / 58 500 ; BC 50 200 / 58 700 / 52 900 ; NS 45 300 / 54 400 / 45 000 ; PE 47 000 / 50 200 / 41 700 ; NL 42 400 / 55 800 / 42 900 ; YT 50 100 / 71 800 / 76 000 ; NT 71 900 / 84 800 / 80 100 ; NU 34 000 / 76 800 / 56 400 (O) — [Statistique Canada 11-10-0239-01](https://www150.statcan.gc.ca/n1/tbl/csv/11100239-eng.zip)
- Belgique, Statbel : salaire brut mensuel moyen à temps plein 2022 d'environ 4 076 EUR, médiane 3 728 EUR ; Bruxelles 4 748 EUR (+16 %) (NV, presse) — [DH, 25 septembre 2024](https://www.dhnet.be/conso/argent/2024/09/25/voici-combien-gagnait-en-moyenne-un-travailleur-temps-plein-en-belgique-en-2022-FZRRARN5FVCJ7I7TPYKKJCHGEI/). Médianes régionales 2018 : Wallonie 3 146 ; Flandre 3 360 ; Bruxelles 3 811 EUR (NV) — [IWEPS, fiche L030](https://www.iweps.be/wp-content/uploads/2024/06/L030-SALAIRE-062024_Full1.pdf)

### Inferences
- Bruxelles et l'Île-de-France sont des lieux de travail : leurs salaires élevés sont en partie gagnés par des navetteurs qui résident ailleurs (les sources ci-dessus sont au lieu de travail, sauf l'enquête canadienne, au lieu de résidence).
- En Suisse, il n'y a pas de prime salariale régionale pour la partie francophone : l'écart à la médiane nationale est inférieur à 1 %.

### Gaps
- Médianes cantonales Genève et Vaud (publiées par les offices cantonaux, non extraites) ; médianes régionales Statbel 2023 ou 2024 ; chiffres STATEC propres ; salaires des trois territoires canadiens (absents du tableau 14-10-0064).

## 2. Salaires par diplôme et par âge

### Takeaway
L'avantage du diplôme du supérieur sur le second cycle du secondaire est partout de l'ordre de +45 à +80 % (tous actifs) ; il est le plus fort en France et le plus faible au Canada. En niveau, un diplômé du supérieur gagne en médiane 21,46 EUR de l'heure en France, 33,02 en Belgique, 35,65 au Luxembourg et 51,50 CHF en Suisse (2022).

### Cited Findings
- Gains relatifs, second cycle du secondaire = 100, 25-64 ans, tous actifs occupés (temps plein seul entre parenthèses) (O) — [OCDE, Regards sur l'éducation, DF_LSO_EARN_REL_UPPER](https://sdmx.oecd.org/public/rest/data/OECD.EDU.IMEP,DSD_EAG_LSO_EA@DF_LSO_EARN_REL_UPPER,1.0/all?startPeriod=2019)

| Pays (année) | Inférieur au 2e cycle | Tertiaire | Tertiaire 25-34 ans | Tertiaire 55-64 ans | Cycle court / licence / master+ |
|---|---|---|---|---|---|
| FR (2022) | 69,2 (88,1) | 179,8 (156,8) | 158,5 | 225,8 | 142,9 / 158,8 / 228,8 |
| BE (2023) | 73,2 (84,0) | 151,3 (136,9) | 138,5 | 180,4 | nd / 134,7 / 168,7 |
| LU (2024) | 74,8 (76,1) | 154,6 (150,1) | 133,8 | 169,2 | 126,5 / 143,0 / 163,2 |
| CH (2024) | 81,6 (82,9) | 152,5 (147,7) | 133,5 | 164,0 | nd / 136,4 / 171,8 |
| CA (2023) | 84,5 (89,8) | 145,0 (140,7) | 140,9 | 153,9 | 119,8 / 151,3 / 181,4 |

- Salaire horaire brut **médian** par diplôme et âge, SES 2022, monnaie nationale (SPA entre parenthèses) (O) — [earn_ses_pub2i](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/earn_ses_pub2i?format=JSON&lang=EN&geo=FR&geo=BE&geo=LU&geo=CH&sinceTimePeriod=2022) ; [earn_ses_pub2a](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/earn_ses_pub2a?format=JSON&lang=EN&geo=FR&geo=BE&geo=LU&geo=CH&sinceTimePeriod=2022)

| Profil | FR (EUR) | BE (EUR) | LU (EUR) | CH (CHF) |
|---|---|---|---|---|
| Ensemble | 16,81 (15,48) | 23,84 (21,30) | 23,99 (18,37) | 37,82 (23,92) |
| CITE 0-2 | 13,22 (12,17) | 19,29 (17,24) | 17,12 (13,11) | 29,23 (18,49) |
| CITE 3-4 | 15,05 (13,86) | 21,00 (18,76) | 21,18 (16,22) | 35,38 (22,38) |
| CITE 5-8 | 21,46 (19,76) | 33,02 (29,50) | 35,65 (27,30) | 51,50 (32,57) |
| Moins de 30 ans | 13,83 (12,73) | 16,84 (15,05) | 19,20 (14,70) | 30,74 (19,44) |
| 30-49 ans | 17,40 (16,02) | 23,34 (20,85) | 26,01 (19,92) | 39,43 (24,94) |
| 50 ans et plus | 18,03 (16,60) | 28,01 (25,03) | 26,33 (20,16) | 41,23 (26,08) |

- Salaire mensuel brut **moyen**, SES 2022, entreprises de 10 salariés et plus, EUR (O) : ensemble FR 3 072 ; BE 4 039 ; LU 5 282 ; CH 7 975. CITE 0-2 : 2 269 ; 3 018 ; 3 292 ; 5 688. CITE 3-4 : 2 480 ; 3 380 ; 4 435 ; 6 916. CITE 5-8 : 3 868 ; 4 968 ; 7 070 ; 10 816. Moins de 30 ans : 2 161 ; 2 850 ; 3 681 ; 5 874. 30-49 ans : 3 143 ; 3 956 ; 5 451 ; 8 130. 50 ans et plus : 3 576 ; 4 847 ; 6 155 ; 8 923 — [earn_ses22_23](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/earn_ses22_23?format=JSON&lang=EN&geo=FR&geo=BE&geo=LU&geo=CH&nace_r2=B-S_X_O&sex=T) ; [earn_ses22_20](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/earn_ses22_20?format=JSON&lang=EN&geo=FR&geo=BE&geo=LU&geo=CH&nace_r2=B-S_X_O&sex=T)
- Suisse, médiane mensuelle brute 2024 par formation, CHF (Suisse / Région lémanique / Espace Mittelland) (O) : sans formation professionnelle complète 5 183 / 5 159 / 5 212 ; formation acquise en entreprise 5 556 / 5 553 / 5 687 ; apprentissage (CFC) 6 390 / 6 331 / 6 406 ; maturité 6 631 / 6 776 / 6 737 ; formation professionnelle supérieure 8 562 / 8 483 / 8 462 ; haute école spécialisée 9 288 / 8 465 / 9 150 ; université ou EPF 10 533 / 10 402 / 10 340 — [OFS, tableau 202](https://www.pxweb.bfs.admin.ch/pxweb/fr/px-x-0304010000_202/px-x-0304010000_202/px-x-0304010000_202.px/)
- Suisse, médiane 2024 par âge, CHF (Suisse / Région lémanique / Espace Mittelland) (O) : 29 ans et moins 5 570 / 5 544 / 5 560 ; 30-49 ans 7 288 / 7 237 / 7 193 ; 50 ans et plus 7 806 / 7 976 / 7 723 — [OFS, tableau 205](https://www.pxweb.bfs.admin.ch/pxweb/fr/px-x-0304010000_205/px-x-0304010000_205/px-x-0304010000_205.px/)
- France, salaire net moyen EQTP du privé 2024 par âge, EUR par mois (O) : moins de 25 ans 1 620 ; 25-39 ans 2 550 ; 40-49 ans 3 010 ; 50-54 ans 3 170 ; 55 ans et plus 3 270. Par catégorie : cadres 4 630 ; professions intermédiaires 2 630 ; employés 1 940 ; ouvriers 2 050 — [Insee](https://www.insee.fr/fr/statistiques/8733089)
- Canada par âge et province : voir tableau de la section 1 (O).

### Inferences
- Le profil par âge est plus pentu en Belgique (50 ans et plus : +66 % sur les moins de 30 ans en médiane horaire) qu'en France (+30 %), au Luxembourg (+37 %) ou en Suisse (+34 %) (C, rapports des médianes ci-dessus).
- Pour un non-diplômé, l'écart Suisse–France en SPA est de +52 % (18,49 contre 12,17) ; pour un diplômé du supérieur de +65 % (32,57 contre 19,76) (C).

### Gaps
- Salaires par diplôme par province canadienne : aucun tableau de salaires de l'Enquête sur la population active par niveau d'études n'a été trouvé dans la liste des tableaux ; le recensement de 2021 (tableaux 98-10-0407 et 98-10-0411, revenus 2020) existe mais n'a pas été extrait.
- Salaires Insee par diplôme : absents de la fiche consultée. Détail régional par diplôme en France et en Belgique : non trouvé.
- La mesure exacte (moyenne ou médiane) des gains relatifs OCDE n'est pas précisée dans le flux de données.

## 3. Du brut au net : Taxing Wages et primes maladie suisses

### Takeaway
À 100 % du salaire moyen, un célibataire garde 82 % de son brut en Suisse, 74 % au Canada, 72 % en France, 68 % au Luxembourg et 60 % en Belgique (2025). Le chiffre suisse est flatté : la prime d'assurance maladie obligatoire, hors coin fiscal, coûte en 2026 de 5 233 CHF (Valais) à 7 025 CHF (Genève) par adulte et par an, soit 6 à 9 % du salaire net moyen.

### Cited Findings
OCDE, Taxing Wages 2026, année 2025 (O) — https://sdmx.oecd.org/public/rest/data/OECD.CTP.TPS,DSD_TAX_WAGES_COMP@DF_TW_COMP,2.1/all?startPeriod=2024

| Indicateur 2025 | FR | BE | LU | CH | CA |
|---|---|---|---|---|---|
| Salaire moyen brut (monnaie nationale) | 45 964 | 62 348 | 77 844 | 100 715 | 92 401 |
| Coin fiscal, célibataire 67 % SM (% coût du travail) | 41,2 | 45,7 | 32,3 | 20,1 | 29,9 |
| Coin fiscal, célibataire 100 % | 47,2 | 52,5 | 40,2 | 23,0 | 32,1 |
| Coin fiscal, célibataire 167 % | 54,1 | 58,6 | 46,4 | 27,4 | 35,5 |
| Coin fiscal, couple un revenu 100 %, 2 enfants | 39,1 | 36,9 | 20,7 | 10,8 | 22,1 |
| Net en % du brut, célibataire 67 % | 76,3 | 68,5 | 76,9 | 85,0 | 77,9 |
| Net en % du brut, célibataire 100 % | 72,0 | 60,5 | 68,0 | 81,9 | 74,4 |
| Net en % du brut, célibataire 167 % | 66,2 | 52,6 | 60,9 | 77,1 | 68,9 |
| Net en % du brut, couple un revenu 100 %, 2 enfants (prestations incluses) | 83,1 | 80,3 | 90,1 | 94,9 | 85,4 |
| Net célibataire 100 % (monnaie nationale) | 33 104 | 37 691 | 52 940 | 82 536 | 68 738 |
| Net célibataire 100 % (USD PPA) | 48 450 | 52 914 | 63 385 | 87 303 | 60 811 |
| Net couple un revenu, 2 enfants (USD PPA) | 55 895 | 70 312 | 84 014 | 101 066 | 69 797 |

- « Net en % du brut » = 100 − taux moyen net d'impôt sur le revenu et de cotisations salariales, prestations familiales en espèces déduites (C à partir de la mesure NPATR de l'OCDE).
- Primes moyennes mensuelles de l'assurance obligatoire des soins, CHF, 2026 → 2027 (O), adultes de 26 ans et plus : Suisse 464,8 → 487,6 ; Genève 585,4 → 610,6 ; Vaud 526,6 → 543,5 ; Valais 436,1 → 460,9 ; Berne 470,7 → 494,4 ; Fribourg 442,6 → 465,5 ; Neuchâtel 530,8 → 558,8 ; Jura 520,5 → 551,0 ; Soleure 466,7 → 493,5 ; Zurich 451,3 → 477,0. Jeunes adultes 19-25 ans : Suisse 323,4 → 338,8 ; Genève 435,8 → 453,0 ; Vaud 371,1 → 382,1. Enfants : Suisse 122,4 → 128,1 ; Genève 151,3 → 157,7 ; Vaud 141,9 → 146,3. Toutes classes d'âge : Suisse 392,4 → 412,0 (+5,0 %) ; Genève 487,2 → 508,6 ; Vaud 439,3 → 454,5 ; Valais 369,6 → 390,2 ; Fribourg 366,6 → 385,6 ; Neuchâtel 444,9 → 468,9 ; Jura 433,9 → 462,3 — [OFSP, communiqué du 29 septembre 2026](https://www.bag.admin.ch/fr/newnsb/BfuGvedj0OOX) ; tableaux : https://cms.news.admin.ch/fileservice/sdweb-docs-prod-nsbcch-files/files/2026/09/29/f21880a8-516b-414a-8044-15f6e1c84c18.pdf et https://cms.news.admin.ch/fileservice/sdweb-docs-prod-nsbcch-files/files/2026/09/29/b8752eb8-9587-4fc9-b347-8b705f3ecc73.pdf
- Prime adulte 2026 annualisée et rapportée au net du célibataire au salaire moyen 2025 (82 536 CHF) (C, prime × 12 / 82 536 ; décalage d'un an entre numérateur et dénominateur) : Suisse 5 578 CHF = 6,8 % ; Genève 7 025 = 8,5 % ; Vaud 6 319 = 7,7 % ; Valais 5 233 = 6,3 % ; Berne 5 648 = 6,8 % ; Fribourg 5 311 = 6,4 % ; Neuchâtel 6 370 = 7,7 % ; Jura 6 246 = 7,6 %.
- Les calculs de l'OCDE pour la Suisse reposent sur le régime fiscal de la ville de Zurich (NV, article de 2009) — [Swissinfo](https://www.swissinfo.ch/eng/tax-rates-lower-than-in-comparable-countries/7393668). Pour le Canada, le barème provincial retenu par l'OCDE est celui de l'Ontario (NV : méthodologie connue, note pays 2025 non lue) — [OCDE, note pays Canada](https://www.oecd.org/en/publications/taxing-wages-2025-country-notes_d1a67ac1-en/canada_11724d71-en.html)
- Québec : la Chaire en fiscalité (19 novembre 2026) conclut que le fardeau fiscal net des ménages québécois est plus lourd qu'avec les paramètres des provinces situées à l'ouest, moins lourd qu'avec ceux des provinces de l'Atlantique, et que le surcroît se concentre sur les quintiles supérieurs ; aucun chiffre n'est donné dans la page (O, qualitatif) — [CFFP, Regard 2026-21](https://cffp.recherche.usherbrooke.ca/regard-sur-le-fardeau-fiscal/). Le Québec reste la province où le poids de la fiscalité dans le PIB est le plus élevé (NV) — [CFFP, Bilan de la fiscalité 2026](https://cffp.recherche.usherbrooke.ca/bilan-de-la-fiscalite-au-quebec-edition-2026/)
- Impôt moyen sur le revenu payé par les familles économiques et personnes seules, 2024, CAD : Québec 18 700 ; Ontario 22 000 ; Canada 20 100 (O) — [Statistique Canada 11-10-0190-01](https://www150.statcan.gc.ca/n1/tbl/csv/11100190-eng.zip)

### Inferences
- Après prime maladie, le net suisse du célibataire au salaire moyen tombe d'environ 82 % à 75-76 % du brut (C : (82 536 − 5 578) / 100 715 = 76,4 % ; Genève 75,0 %), soit un niveau proche du Canada.
- Les ratios Taxing Wages surestiment probablement le net à Genève et dans le canton de Vaud (fiscalité cantonale différente de Zurich) et le net au Québec (barème ontarien) ; l'ampleur n'a pas été chiffrée.

### Gaps
- Écart d'impôt chiffré Québec–Ontario pour un célibataire au salaire moyen ; écart Genève–Vaud–Zurich (statistique de la charge fiscale de l'Administration fédérale des contributions) : non obtenus.
- Franchise et quote-part suisses, assurance complémentaire canadienne et belge : hors champ.

## 4. Revenu disponible des ménages par habitant, en parité de pouvoir d'achat

### Takeaway
En standard de pouvoir d'achat, le revenu disponible par habitant est de 30 100 au Luxembourg, 26 500 en Île-de-France, 21 400 à Bruxelles, 21 700 en Wallonie et entre 19 200 (Hauts-de-France) et 23 200 (Provence-Alpes-Côte d'Azur) dans les autres régions françaises (2023). En dollars PPA, les provinces canadiennes (31 000 à 37 000 en 2024) sont au niveau des régions françaises de province.

### Cited Findings
- Eurostat, comptes régionaux des ménages, revenu disponible net (B6N), SPA par habitant (EUR par habitant entre parenthèses), 2023 ; France provisoire (O) — [nama_10r_2hhinc](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/nama_10r_2hhinc?format=JSON&lang=EN&na_item=B6N&direct=BAL&unit=PPS_EU27_2020_HAB&unit=EUR_HAB&sinceTimePeriod=2022) : FR 21 800 (24 400) ; FR1 26 500 (29 600) ; FRB 21 000 (23 500) ; FRC 20 500 (22 900) ; FRD 20 700 (23 100) ; FRE 19 200 (21 400) ; FRF 20 400 (22 800) ; FRG 20 900 (23 300) ; FRH 21 100 (23 600) ; FRI 21 200 (23 700) ; FRJ 20 600 (23 000) ; FRK 21 800 (24 400) ; FRL 23 200 (25 900) ; FRM 21 600 (24 200) ; BE 23 800 (27 800) ; BE1 21 400 (25 000) ; BE2 25 400 (29 700) ; BE3 21 700 (25 300) ; LU00 30 100 (39 700) ; UE 21 000. En 2024 (provisoire) : BE 24 400 ; BE1 21 800 ; BE3 22 300 ; LU00 31 500. La Suisse est absente du tableau.
- OCDE, base régionale, revenu disponible net des ménages par habitant, USD PPA courants (O) — https://sdmx.oecd.org/public/rest/data/OECD.CFE.EDS,DSD_REG_ECO@DF_INC,2.4/all?startPeriod=2020 : 2023 (provisoire) FR 33 873 ; FR1 41 188 ; FRB 32 624 ; FRC 31 857 ; FRD 32 101 ; FRE 29 736 ; FRF 31 678 ; FRG 32 416 ; FRH 32 776 ; FRI 32 909 ; FRJ 31 934 ; FRK 33 900 ; FRL 35 972 ; FRM 33 603. 2024 : BE 37 863 ; BE1 33 735 ; BE3 34 535 ; LU00 48 778 ; CA 33 564 ; CA-QC 30 966 ; CA-NB 30 714 ; CA-ON 33 464 ; CA-MB 29 897 ; CA-SK 33 172 ; CA-AB 37 318 ; CA-BC 36 546 ; CA-NS 31 005 ; CA-PE 31 273 ; CA-NL 33 359 ; CA-YT 43 938 ; CA-NT 46 154 ; CA-NU 29 152.
- Suisse dans la base OCDE : CH01 26 882 et CH02 27 272 USD PPA (2021) contre 64 051 pour la Suisse entière : incohérence interne, valeurs **non utilisables** (O pour l'extraction, anomalie signalée).
- Canada, revenu médian après impôt 2024, CAD, ensemble des familles économiques et personnes seules / familles / personnes seules (O) — [Statistique Canada 11-10-0190-01](https://www150.statcan.gc.ca/n1/tbl/csv/11100190-eng.zip) : CA 75 500 / 108 900 / 41 000 ; QC 68 800 / 103 200 / 40 600 ; NB 65 100 / 92 800 / 35 700 ; ON 79 500 / 113 900 / 41 000 ; MB 72 000 / 99 600 / 39 400 ; SK 75 500 / 105 900 / 42 800 ; AB 85 300 / 115 900 / 44 900 ; BC 75 800 / 113 000 / 42 600 ; NS 64 200 / 92 000 / 36 300 ; PE 65 900 / 94 800 / 36 700 ; NL 68 000 / 96 600 / 33 700 ; YT 89 300 / 123 500 / 57 000 ; NT 116 100 / 170 900 / 71 400 ; NU 109 600 / 135 300 / 97 500.

### Inferences
- Bruxelles a les salaires au lieu de travail les plus élevés de Belgique mais le revenu par habitant le plus bas : l'écart tient aux navetteurs et au faible taux d'emploi des résidents.
- Le revenu par habitant (comptes nationaux) inclut loyers imputés, transferts et revenus du patrimoine ; il ne dit rien du salaire d'un profil donné.

### Gaps
- Revenu disponible régional suisse comparable : non disponible (Eurostat) ou incohérent (OCDE).

## 5. Niveaux de prix

### Takeaway
En 2025, la consommation des ménages coûte 5 % de plus en Belgique qu'en France, 19 % de plus au Luxembourg et 55 % de plus en Suisse ; le Canada est environ 17 % au-dessus de la France (2024). Des écarts de prix régionaux officiels n'existent que pour la France (région parisienne +7 % sur le reste du pays, Corse +7 % sur la province hors loyers) et, sous forme de seuils de panier, pour le Canada.

### Cited Findings
- Indices de niveau de prix 2025, UE27 = 100 (O) — [Eurostat prc_ppp_ind_1](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/prc_ppp_ind_1?format=JSON&lang=EN&geo=FR&geo=BE&geo=LU&geo=CH&sinceTimePeriod=2024) : dépense de consommation des ménages FR 110,3 ; BE 116,2 ; LU 131,5 ; CH 171,3. Consommation individuelle effective FR 106,4 ; BE 118,1 ; LU 148,0 ; CH 181,0. Logement, eau, énergie FR 120,7 ; BE 134,7 ; LU 181,9 ; CH 213,1. PIB FR 106,5 ; BE 113,1 ; LU 130,8 ; CH 156,1.
- OCDE, niveaux de prix 2024, dépense de consommation des ménages (O) — https://sdmx.oecd.org/public/rest/data/OECD.SDD.TPS,DSD_PPP@DF_PPP_CPL,1.1/all?startPeriod=2022 : base États-Unis = 100 : FR 77,6 ; BE 81,4 ; LU 91,5 ; CH 121 ; CA 90,6. Base UE27 = 100 : FR 111 ; BE 117 ; LU 131 ; CH 173 ; CA 130. Logement (UE27 = 100) : FR 123 ; BE 134 ; LU 179 ; CH 215 ; CA 150.
- OCDE, niveaux de prix comparés mensuels, septembre 2026, France = 100 : BE 108 ; CA 109 ; LU 120 ; CH 159 (O) — https://sdmx.oecd.org/public/rest/data/OECD.SDD.TPS,DSD_PPP_M@DF_PP_CPL_M,1.0/all?startPeriod=2026-05
- France : en 2022, le niveau général des prix en région parisienne dépasse de 7 % celui du reste de la France métropolitaine (champ hors Corse) (NV, lu en résumé) — [Insee Première n° 1959](https://www.insee.fr/fr/statistiques/7649921). Corse : prix hors loyers supérieurs de 7 % à ceux de la province (NV) — [Insee Flash Corse](https://www.insee.fr/fr/statistiques/7635831)
- Canada, indices interurbains de prix à la consommation : la dernière année du tableau est 2019 (moyenne des villes = 100) : Montréal 93 ; Toronto 107 ; Vancouver 104 ; Calgary 101 ; Edmonton 100 ; Winnipeg 93 ; Halifax 98 ; Saint John 92 ; Regina 101 ; St. John's 96 ; Charlottetown 95 ; Ottawa 101 ; Whitehorse 102 ; Yellowknife 112 (O) — [Statistique Canada 18-10-0003-01](https://www150.statcan.gc.ca/n1/tbl/csv/18100003-eng.zip)
- Canada, seuils de la mesure du panier de consommation 2025 (base 2023, famille de deux adultes et deux enfants), CAD (O) — [Statistique Canada 11-10-0066-01](https://www150.statcan.gc.ca/n1/tbl/csv/11100066-eng.zip) : Montréal 50 287 ; Québec 49 394 ; Québec rural 47 831 ; Moncton 55 159 ; Saint John 51 631 ; Toronto 62 880 ; Ottawa 58 803 ; Winnipeg 55 813 ; Regina 55 765 ; Calgary 59 153 ; Edmonton 58 876 ; Vancouver 64 351 ; Halifax 54 855 ; Charlottetown 54 975 ; St. John's 53 849 ; Yukon rural 65 200 à 67 075.

### Inferences
- Le panier de référence coûte 20 % de moins à Montréal qu'à Toronto (C : 50 287 / 62 880 = 0,80) ; c'est un panier de ménage modeste incluant le logement, pas un indice général.
- Belgique, Luxembourg, Suisse : aucun indice officiel régional de niveau de prix n'a été trouvé (NV : recherche non exhaustive) ; les écarts internes passent surtout par le logement, traité par d'autres notes.

### Gaps
- Études suisses (UBS, Comparis, Credit Suisse sur le revenu librement disponible par canton) et étude belge sur les prix régionaux : non consultées.
- Niveau de prix par province canadienne postérieur à 2019 : non publié dans le tableau interrogé.

## 6. Salaire net réel par territoire (nos calculs)

### Takeaway
Corrigé de l'impôt, des cotisations et des prix, le salaire moyen 2022 vaut, France = 100 : régions françaises de province 91 à 100, Île-de-France 116, Wallonie 101, Bruxelles 113, Luxembourg 141, Suisse francophone 173 à 176 (avant prime maladie), Québec 102, Ontario 111, Nouveau-Brunswick 93. La prime maladie suisse retire environ 8 points de net ; l'avantage suisse reste supérieur à 50 %.

### Cited Findings
**Formule (C).** Net réel = B × (1 − t(B / SM)) / PPA × 1 / P, avec B = salaire brut annuel moyen du territoire (Europe : SES 2022, [earn_ses22_rann](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/earn_ses22_rann?format=JSON&lang=EN) ; régions suisses : 96 147 CHF × médiane régionale 2022 / médiane suisse 2022 ; Canada : salaire hebdomadaire moyen à temps plein 2022 × 52, [14-10-0064-01](https://www150.statcan.gc.ca/n1/tbl/csv/14100064-eng.zip)) ; t = taux moyen net d'impôt et de cotisations du célibataire sans enfant, interpolé linéairement entre les points 67 %, 100 % et 167 % du salaire moyen SM de Taxing Wages 2022 (https://sdmx.oecd.org/public/rest/data/OECD.CTP.TPS,DSD_TAX_WAGES_COMP@DF_TW_COMP,2.1/all?startPeriod=2022&endPeriod=2023) ; PPA = parité de consommation des ménages 2022 ; P = correction de prix régionale, appliquée seulement en France (1,07 pour l'Île-de-France et la Corse par rapport à la province, la province étant ramenée à 0,987 de la moyenne nationale sous l'hypothèse non vérifiée d'un poids de 19 % de l'Île-de-France).
Entrées Taxing Wages 2022 (SM ; taux à 67 / 100 / 167 %) : FR 41 867 EUR ; 23,53 / 27,77 / 33,56. BE 55 038 ; 32,36 / 40,24 / 48,03. LU 68 578 ; 22,30 / 31,63 / 39,41. CH 96 180 CHF ; 14,95 / 18,05 / 22,93. CA 82 300 CAD ; 22,47 / 25,63 / 31,35 (O).

| Code | Brut annuel moyen 2022 | Brut / SM | Taux retenu % | Net (monnaie nationale) | Net USD PPA | Indice FR = 100 | Avec prix régionaux FR |
|---|---|---|---|---|---|---|---|
| FR | 40 679 | 0,97 | 27,4 | 29 532 | 39 693 | 100 | 100 |
| FR1 | 51 701 | 1,23 | 29,8 | 36 294 | 48 783 | 123 | 116 |
| FRB | 36 012 | 0,86 | 26,0 | 26 660 | 35 833 | 90 | 91 |
| FRC | 35 889 | 0,86 | 25,9 | 26 582 | 35 729 | 90 | 91 |
| FRD | 35 783 | 0,85 | 25,9 | 26 515 | 35 639 | 90 | 91 |
| FRE | 35 924 | 0,86 | 25,9 | 26 604 | 35 758 | 90 | 91 |
| FRF | 37 313 | 0,89 | 26,4 | 27 474 | 36 927 | 93 | 94 |
| FRG | 35 602 | 0,85 | 25,8 | 26 401 | 35 485 | 89 | 91 |
| FRH | 35 902 | 0,86 | 25,9 | 26 590 | 35 740 | 90 | 91 |
| FRI | 35 734 | 0,85 | 25,9 | 26 484 | 35 597 | 90 | 91 |
| FRJ | 36 622 | 0,87 | 26,2 | 27 043 | 36 348 | 92 | 93 |
| FRK | 39 379 | 0,94 | 27,0 | 28 745 | 38 636 | 97 | 99 |
| FRL | 39 798 | 0,95 | 27,1 | 29 000 | 38 978 | 98 | 100 |
| FRM | 35 152 | 0,84 | 25,7 | 26 116 | 35 102 | 88 | 84 |
| BE | 53 642 | 0,97 | 39,6 | 32 380 | 41 566 | 105 | 105 |
| BE1 | 59 438 | 1,08 | 41,2 | 34 966 | 44 886 | 113 | 113 |
| BE3 | 50 648 | 0,92 | 38,3 | 31 231 | 40 091 | 101 | 101 |
| LU00 | 74 542 | 1,09 | 32,6 | 50 209 | 56 163 | 141 | 141 |
| CH | 96 147 CHF | 1,00 | 18,0 | 78 797 | 69 121 | 174 | 174 |
| CH01 | 97 011 CHF | 1,01 | 18,1 | 79 441 | 69 685 | 176 | 176 |
| CH02 | 95 637 CHF | 0,99 | 18,0 | 78 427 | 68 796 | 173 | 173 |
| CA | 69 354 CAD | 0,84 | 24,1 | 52 622 | 42 782 | 108 | 108 |
| CA-QC | 65 187 | 0,79 | 23,6 | 49 777 | 40 469 | 102 | 102 |
| CA-NB | 59 186 | 0,72 | 22,9 | 45 608 | 37 080 | 93 | 93 |
| CA-ON | 71 575 | 0,87 | 24,4 | 54 122 | 44 001 | 111 | 111 |
| CA-MB | 61 122 | 0,74 | 23,2 | 46 962 | 38 180 | 96 | 96 |
| CA-SK | 67 754 | 0,82 | 23,9 | 51 534 | 41 898 | 106 | 106 |
| CA-AB | 75 177 | 0,91 | 24,8 | 56 530 | 45 960 | 116 | 116 |
| CA-BC | 71 400 | 0,87 | 24,4 | 54 004 | 43 906 | 111 | 111 |
| CA-NS | 59 442 | 0,72 | 23,0 | 45 787 | 37 225 | 94 | 94 |
| CA-PE | 58 172 | 0,71 | 22,8 | 44 895 | 36 500 | 92 | 92 |
| CA-NL | 66 621 | 0,81 | 23,8 | 50 760 | 41 268 | 104 | 104 |

Territoires canadiens (Yukon, Territoires du Nord-Ouest, Nunavut) : nd (absents du tableau de salaires).

**Médianes les plus récentes, Suisse et Canada (C).** Brut = médiane mensuelle ESS 2024 × 12 (Suisse) ou médiane hebdomadaire à temps plein 2025 × 52 (Canada) ; barème Taxing Wages 2025 ; PPA 2024 (dernière disponible).

| Code | Brut médian annuel | Taux retenu % | Net (monnaie nationale) | Net USD PPA | Net après prime maladie adulte 2026 (USD PPA) |
|---|---|---|---|---|---|
| CH | 84 288 CHF | 16,6 | 70 316 | 66 336 | 61 074 |
| CH01 | 83 976 | 16,6 | 70 080 | 66 113 | 59 486 (prime Genève) ; 60 152 (prime Vaud) |
| CH02 | 83 568 | 16,5 | 69 771 | 65 822 | 60 493 (prime Berne) ; 59 813 (prime Neuchâtel) |
| CA | 68 640 CAD | 22,9 | 52 921 | 42 678 | sans objet |
| CA-QC | 65 229 | 22,5 | 50 544 | 40 761 | |
| CA-NB | 59 729 | 22,1 | 46 508 | 37 507 | |
| CA-ON | 70 179 | 23,1 | 53 984 | 43 536 | |
| CA-MB | 58 968 | 22,1 | 45 916 | 37 029 | |
| CA-SK | 65 250 | 22,5 | 50 559 | 40 773 | |
| CA-AB | 72 781 | 23,4 | 55 770 | 44 976 | |
| CA-BC | 71 947 | 23,3 | 55 199 | 44 516 | |
| CA-NS | 61 991 | 22,1 | 48 264 | 38 923 | |
| CA-PE | 58 929 | 22,1 | 45 886 | 37 005 | |
| CA-NL | 64 896 | 22,5 | 50 311 | 40 573 | |

**Par diplôme et âge, niveau national, 2022 (C).** Brut annuel du profil = moyenne annuelle nationale × salaire mensuel moyen du profil / salaire mensuel moyen d'ensemble ; même barème et même PPA. Net en USD PPA :

| Profil | FR | BE | LU | CH |
|---|---|---|---|---|
| CITE 0-2 | 30 636 | 34 087 | 40 270 | 50 919 |
| CITE 3-4 | 33 106 | 36 973 | 49 593 | 60 854 |
| CITE 5-8 | 48 397 | 48 656 | 70 406 | 90 773 |
| Moins de 30 ans | 29 347 | 32 660 | 43 712 | 52 448 |
| 30-49 ans | 40 449 | 41 034 | 57 612 | 70 342 |
| 50 ans et plus | 45 252 | 47 751 | 63 419 | 76 519 |

Suisse 2024 par formation (C, médiane × 12, barème 2025, PPA 2024), net USD PPA avant prime maladie : sans formation 49 899 ; CFC 60 864 ; maturité 62 956 ; formation professionnelle supérieure 79 241 ; haute école spécialisée 85 297 ; université ou EPF 95 442 ; 29 ans et moins 53 625 ; 30-49 ans 68 584 ; 50 ans et plus 72 944.

### Inferences
- Pour un diplômé du supérieur, la Belgique n'offre aucun gain net réel sur la France (48 656 contre 48 397) : la progressivité belge efface l'écart de brut. Le gain belge existe pour les peu diplômés (+11 %) et les jeunes (+11 %).
- Le Luxembourg rapporte +31 % (CITE 0-2) à +50 % (CITE 3-4) de plus que la France ; la Suisse +66 % à +88 % avant prime maladie.
- Au Canada, l'écart Québec–Ontario est de 8 % en moyenne 2022 et de 6 % en médiane 2025 avant prise en compte des prix, plus bas au Québec.

### Gaps
- Les résultats régionaux sont fondés sur des **moyennes** (seule statistique régionale harmonisée), pas sur des médianes ; les médianes régionales françaises et belges manquent.
- Fiscalité infranationale non modélisée (Zurich pour toute la Suisse, Ontario pour tout le Canada) ; prix régionaux non corrigés hors de France ; Canada non restreint aux entreprises de 10 salariés et plus ; salaire moyen OCDE du Canada (82 300 CAD) supérieur à la moyenne de l'enquête sur la population active (69 354 CAD), signe d'un écart de champ.
- Canada par diplôme : non calculable faute de niveaux.

## 7. Travailleurs frontaliers

### Takeaway
Un résident du nord de la Lorraine employé à temps plein au Luxembourg gagne en moyenne 65 % de plus que son voisin employé en France (47 720 contre 28 990 EUR par an). En Suisse, le salaire brut médian des frontaliers est de 6 314 CHF par mois (6 565 en Région lémanique), inférieur à celui des Suisses mais sans commune mesure avec les salaires français.

### Cited Findings
- Luxembourg : rémunération annuelle moyenne à temps plein 47 720 EUR (frontaliers) contre 28 990 EUR (non-frontaliers), rapport 1,65 ; revenus déclarés, nets de cotisations, années 2019-2020. Par diplôme : sans diplôme 1,49 ; CAP-BEP 1,54 ; bac 1,53 ; bac+2 1,67 ; bac+3/4 1,71 ; bac+5 1,48. Par catégorie : ouvriers qualifiés +48 % ; employés +92 % ; cadres +55 %. Par secteur : industrie 1,40 ; finance 1,94 ; santé et action sociale 2,03 (O) — [Insee Analyses Grand Est n° 205, 24 novembre 2025](https://www.insee.fr/fr/statistiques/8669660)
- Suisse, salaire mensuel brut médian 2024 selon le statut, CHF (O) — [OFS, tableau 203](https://www.pxweb.bfs.admin.ch/pxweb/fr/px-x-0304010000_203/px-x-0304010000_203/px-x-0304010000_203.px/) : frontaliers (permis G) Suisse 6 314 ; Région lémanique 6 565 ; Espace Mittelland 6 194. Suisses 7 480 ; 7 632 ; 7 348. Étrangers 6 235 ; 6 370 ; 5 967. Permis B 5 834 ; 5 897 ; 5 358.
- Haut-Rhin : un salarié gagnerait 2,6 fois plus en travaillant dans les cantons de Bâle qu'en France ; rapport de 1,7 pour le Luxembourg (NV, période 2019-2020 ou 2022 à confirmer) — [Insee Flash Grand Est, novembre 2025](https://loterr.univ-lorraine.fr/wp-content/uploads/2025/11/Insee_Flash_Grand_Est_Novembre_2025.pdf)
- Hauts-de-France vers la Belgique : salaire horaire net moyen des frontaliers 18,8 EUR contre 15,2 EUR pour les salariés résidents, soit +23,8 %, en partie par effet de structure (NV, année non vérifiée) — [Insee](https://www.insee.fr/fr/statistiques/6533190)

### Inferences
- Le frontalier cumule un salaire du pays d'emploi et des prix du pays de résidence : en appliquant la formule de la section 6 au frontalier médian de la Région lémanique (78 780 CHF bruts, net 66 127 CHF au barème Taxing Wages), on obtient 62 384 USD PPA aux prix suisses ; aux prix français (rapport des niveaux de prix Suisse / France de 1,55, section 5), le pouvoir d'achat serait d'environ 55 % plus élevé (C, ordre de grandeur ; fiscalité réelle du frontalier non modélisée).
- Le gain luxembourgeois est plus fort au milieu de l'échelle des diplômes (bac+2 à bac+4) qu'aux deux extrêmes.

### Gaps
- Estimation officielle nette (après impôt, assurance maladie et transport) de l'avantage frontalier vers la Suisse ; frontaliers belges vers le Luxembourg (STATEC, « Regards » 2026 non lu : https://statistiques.public.lu/dam-assets/catalogue-publications/regards/2026/regards-frontaliers-120326-03.pdf).

## 8. Pauvreté et bas salaires

### Takeaway
Le risque de pauvreté monétaire est maximal à Bruxelles (23,3 %) et en Corse (23,6 %), minimal en Bretagne (10,6 %) ; au Canada, le Québec a le taux de pauvreté le plus bas des provinces (7,0 %). La France et la Suisse ont deux fois moins de bas salaires que la Belgique ou le Luxembourg.

### Cited Findings
- Taux de risque de pauvreté (60 % de la médiane nationale), enquête 2025, % (O) — [Eurostat ilc_li41](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/ilc_li41?format=JSON&lang=EN&sinceTimePeriod=2023) : FR 16,3 ; FR1 16,9 ; FRB 11,0 ; FRC 15,7 ; FRD 13,0 ; FRE 19,5 ; FRF 15,4 ; FRG 11,5 ; FRH 10,6 ; FRI 14,8 ; FRJ 19,6 ; FRK 14,6 ; FRL 16,1 ; FRM 23,6 ; BE 10,9 ; BE1 23,3 ; BE2 7,2 ; BE3 13,4 ; LU00 14,8 (rupture de série). Suisse, enquête 2024 : CH 16,2 ; CH01 19,0 ; CH02 16,1.
- Pauvreté en emploi, 18-64 ans, 2025, % : FR 8,7 ; BE 4,1 ; LU 9,6 (rupture) ; CH 8,6 (2024) ; UE 8,3 (O) — [Eurostat ilc_iw01](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/ilc_iw01?format=JSON&lang=EN&geo=FR&geo=BE&geo=LU&geo=CH&sinceTimePeriod=2024&sex=T&wstatus=EMP)
- Part des bas salaires (moins des deux tiers du salaire horaire médian national), 2022, % : FR 9,7 ; BE 15,9 ; LU 14,0 ; CH 9,6 ; UE 14,7 (O) — [Eurostat earn_ses_pub1s](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/earn_ses_pub1s?format=JSON&lang=EN&geo=FR&geo=BE&geo=LU&geo=CH&sinceTimePeriod=2022)
- Rapport interdécile D9/D1 des salaires bruts : FR 2,82 (2024) ; BE 2,67 (2024) ; CA 3,34 (2025) (O) — https://sdmx.oecd.org/public/rest/data/OECD.ELS.SAE,DSD_EARNINGS@DEC_I,1.0/all?startPeriod=2021
- Canada, taux de pauvreté selon la mesure du panier de consommation (base 2023), 2024, %, ensemble / 18-64 ans (O) — [Statistique Canada 11-10-0135-01](https://www150.statcan.gc.ca/n1/tbl/csv/11100135-eng.zip) : CA 11,0 / 12,6 ; QC 7,0 / 8,8 ; NB 9,9 / 11,4 ; ON 12,5 / 14,0 ; MB 12,3 / 13,3 ; SK 11,6 / 12,4 ; AB 11,0 / 12,0 ; BC 13,0 / 14,8 ; NS 10,9 / 12,9 ; PE 10,0 / 11,6 ; NL 10,4 / 12,8 ; YT 11,8 / 13,0 ; NT 10,0 / 8,6 ; NU 31,7 / 28,3. Mesure de faible revenu après impôt (50 % de la médiane), ensemble : CA 12,5 ; QC 11,6 ; ON 12,7 ; NB 15,6.

### Inferences
- Les taux régionaux européens utilisent un seuil national : ils mesurent la position dans la distribution du pays, pas un niveau de vie comparable entre pays.

### Gaps
- Bas salaires et pauvreté en emploi par région : non publiés dans les tableaux interrogés ; bas salaires au Canada : non extraits.

## 9. Patrimoine et propriété du logement

### Takeaway
Le patrimoine net médian par ménage est de 125 700 EUR en France, 242 400 EUR en Belgique, 717 700 EUR au Luxembourg et 428 300 CAD au Canada dans la base harmonisée de l'OCDE ; au Canada, il varie de 286 200 CAD (Nouveau-Brunswick) à 773 500 CAD (Colombie-Britannique), Québec 371 000. Aucune donnée suisse comparable n'a été obtenue.

### Cited Findings
- OCDE, base sur la distribution du patrimoine (source européenne : enquête HFCS de l'Eurosystème), patrimoine net médian / moyen par ménage (O) — https://sdmx.oecd.org/public/rest/data/OECD.WISE.INE,DSD_WEALTH@DF_WEALTH,1.0/all?startPeriod=2016 : France 2020 : 125 673 / 277 088 EUR ; Belgique 2020 : 242 427 / 407 997 EUR ; Luxembourg 2021 : 717 660 / 1 269 668 EUR ; Canada 2023 : 428 300 / 874 100 CAD. Part des 10 % les plus riches : FR 49,9 % ; BE 45,9 % ; LU 47,9 % ; CA 47,1 %. Suisse absente.
- Canada, Enquête sur la sécurité financière 2023, valeur nette médiane, CAD, toutes unités familiales / moins de 35 ans (O) — [Statistique Canada 11-10-0016-01](https://www150.statcan.gc.ca/n1/tbl/csv/11100016-eng.zip) : CA 519 700 / 159 100 ; QC 371 000 / 155 300 ; NB 286 200 / 81 500 ; ON 665 600 / 169 700 ; MB 386 300 / 133 800 ; SK 394 600 / 184 400 ; AB 457 100 / 154 600 ; BC 773 500 / 204 000 ; NS 354 600 / 123 900 ; PE 399 800 / 211 200 ; NL 333 500 / 87 000.
- Part de la population vivant dans un logement dont le ménage est propriétaire, 2025, % : FR 61,4 ; BE 70,9 ; LU 64,1 (rupture) ; CH 42,0 (2024) ; UE 68,5 (O) — [Eurostat ilc_lvho02](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/ilc_lvho02?format=JSON&lang=EN&geo=FR&geo=BE&geo=LU&geo=CH&sinceTimePeriod=2024)

### Inferences
- Les médianes de patrimoine reflètent surtout la propriété immobilière et les prix du logement ; un nouvel arrivant n'en hérite pas.

### Gaps
- Patrimoine médian suisse (statistique fiscale de la fortune, OFS ou BNS) ; patrimoine par région en France, Belgique ; taux de propriétaires par région et par province ; vague HFCS postérieure à 2021 : non vérifiés.

## 10. Salaires minimums

### Takeaway
Au second semestre 2026, le salaire minimum mensuel brut est de 1 867 EUR en France, 2 234 EUR en Belgique et 2 771 EUR au Luxembourg (3 326 EUR pour un salarié qualifié) ; Genève impose 24,59 CHF de l'heure. Au Canada, les minimums vont de 15,00 CAD (Alberta) à 18,25 CAD (Colombie-Britannique), Québec 16,60.

### Cited Findings
- Salaire minimum mensuel brut, 2026-S1 → 2026-S2 : FR 1 823 → 1 867 EUR ; BE 2 112 → 2 234 EUR ; LU 2 704 → 2 771 EUR ; en SPA (estimation Eurostat), S2 : FR 1 692 ; BE 1 922 ; LU 2 108 (O) — [Eurostat earn_mw_cur](https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/earn_mw_cur?format=JSON&lang=EN&geo=FR&geo=BE&geo=LU&sinceTimePeriod=2026-S1)
- France : SMIC porté à 12,31 EUR de l'heure et 1 867,02 EUR par mois au 1er juin 2026 (+2,41 %), après 12,02 EUR au 1er janvier 2026 (NV, lu en résumé) — [info.gouv.fr](https://www.info.gouv.fr/public/index.php/actualite/le-smic-revalorise-le-1er-juin-2026)
- Luxembourg : salaire social minimum non qualifié 2 771,33 EUR par mois (16,0192 EUR de l'heure) et qualifié 3 325,59 EUR depuis le 1er juin 2026 (NV, lu en résumé) — [Guichet.lu](https://guichet.public.lu/content/guichet/fr/entreprises/ressources-humaines/remuneration/paiement-remunerations/salaire.html)
- Belgique : revenu minimum mensuel moyen garanti de 2 111,89 EUR au 1er janvier 2026 (NV, source secondaire, cohérent avec Eurostat) — [Moovijob](https://www.moovijob.com/blog/article/2026-comparaison-des-salaires-minimums-du-luxembourg-et-pays-frontaliers)
- Suisse, minimums cantonaux horaires 2026 : Genève 24,59 CHF (O) — [République et canton de Genève](https://www.ge.ch/actualite/salaire-minimum-genevois-2026-etablira-2459-fr-heure-1-10-2025) ; Neuchâtel 21,35 ; Jura 21,40 ; Bâle-Ville 22,20 ; Tessin 20,00 à 20,50 (NV) — [Frontaliers Grand Est](https://frontaliers-grandest.eu/accueil/salaries/france-suisse/droit-du-travail/contrat-de-travail-en-suisse/salaire-minimum-en-vigueur/). Pas de minimum légal dans le canton de Vaud ni au niveau fédéral (NV).
- Canada, taux général horaire au 1er octobre 2026, CAD : Ontario 17,95 ; Manitoba 16,40 ; Saskatchewan 15,70 ; Île-du-Prince-Édouard 17,30 (O, cabinet d'avocats) — [Gowling WLG, 25 septembre 2026](https://gowlingwlg.com/en/insights-resources/articles/2026/minimum-wage-increases) ; Nouvelle-Écosse 17,00 ; Québec 16,60 (depuis le 1er mai 2026) ; Colombie-Britannique 18,25 (depuis le 1er juin 2026) ; Alberta 15,00 (inchangé depuis 2018) ; fédéral 18,15 ou 18,10 selon les sources (NV) — [CTV News](https://www.ctvnews.ca/business/article/minimum-wage-will-rise-in-these-five-provinces/)
- Salaire minimum en proportion du salaire moyen Taxing Wages 2025 (C, minimum mensuel S2 2026 × 12 / salaire moyen 2025) : FR 48,7 % ; BE 43,0 % ; LU 42,7 %.

### Inferences
- Le minimum genevois représente 51 100 CHF par an pour 40 heures hebdomadaires (C : 24,59 × 40 × 52), soit 61 % de la médiane suisse 2024 (C : 51 147 / 84 288).

### Gaps
- Nouveau-Brunswick, Terre-Neuve-et-Labrador, Yukon, Territoires du Nord-Ouest, Nunavut : taux 2026 non trouvés. Valeur réelle des minimums canadiens et suisses en PPA : non calculée (pas de base horaire commune).

## Bloc CSV (indicateurs principaux)

```csv
territory_code,indicator,profile,value,unit,year,source_key,status
FR,gross_mean_annual,all,40679,EUR,2022,ES_SES22_27,O
FR1,gross_mean_annual,all,51701,EUR,2022,ES_SES22_RANN,O
FRB,gross_mean_annual,all,36012,EUR,2022,ES_SES22_RANN,O
FRC,gross_mean_annual,all,35889,EUR,2022,ES_SES22_RANN,O
FRD,gross_mean_annual,all,35783,EUR,2022,ES_SES22_RANN,O
FRE,gross_mean_annual,all,35924,EUR,2022,ES_SES22_RANN,O
FRF,gross_mean_annual,all,37313,EUR,2022,ES_SES22_RANN,O
FRG,gross_mean_annual,all,35602,EUR,2022,ES_SES22_RANN,O
FRH,gross_mean_annual,all,35902,EUR,2022,ES_SES22_RANN,O
FRI,gross_mean_annual,all,35734,EUR,2022,ES_SES22_RANN,O
FRJ,gross_mean_annual,all,36622,EUR,2022,ES_SES22_RANN,O
FRK,gross_mean_annual,all,39379,EUR,2022,ES_SES22_RANN,O
FRL,gross_mean_annual,all,39798,EUR,2022,ES_SES22_RANN,O
FRM,gross_mean_annual,all,35152,EUR,2022,ES_SES22_RANN,O
BE,gross_mean_annual,all,53642,EUR,2022,ES_SES22_27,O
BE1,gross_mean_annual,all,59438,EUR,2022,ES_SES22_RANN,O
BE3,gross_mean_annual,all,50648,EUR,2022,ES_SES22_RANN,O
LU00,gross_mean_annual,all,74542,EUR,2022,ES_SES22_RANN,O
CH,gross_mean_annual,all,96147,CHF,2022,ES_SES22_RANN,O
CH01,gross_mean_annual,all,97011,CHF,2022,ES_SES22_RANN+OFS_ESS_204,C
CH02,gross_mean_annual,all,95637,CHF,2022,ES_SES22_RANN+OFS_ESS_204,C
CA,gross_mean_annual,fulltime,69354,CAD,2022,SC_14100064,C
CA-QC,gross_mean_annual,fulltime,65187,CAD,2022,SC_14100064,C
CA-NB,gross_mean_annual,fulltime,59186,CAD,2022,SC_14100064,C
CA-ON,gross_mean_annual,fulltime,71575,CAD,2022,SC_14100064,C
CA-MB,gross_mean_annual,fulltime,61122,CAD,2022,SC_14100064,C
CA-SK,gross_mean_annual,fulltime,67754,CAD,2022,SC_14100064,C
CA-AB,gross_mean_annual,fulltime,75177,CAD,2022,SC_14100064,C
CA-BC,gross_mean_annual,fulltime,71400,CAD,2022,SC_14100064,C
CA-NS,gross_mean_annual,fulltime,59442,CAD,2022,SC_14100064,C
CA-PE,gross_mean_annual,fulltime,58172,CAD,2022,SC_14100064,C
CA-NL,gross_mean_annual,fulltime,66621,CAD,2022,SC_14100064,C
FR,real_net_mean_annual,single_no_child,39693,USD_PPP,2022,CALC_A,C
FR1,real_net_mean_annual,single_no_child,48783,USD_PPP,2022,CALC_A,C
FRB,real_net_mean_annual,single_no_child,35833,USD_PPP,2022,CALC_A,C
FRC,real_net_mean_annual,single_no_child,35729,USD_PPP,2022,CALC_A,C
FRD,real_net_mean_annual,single_no_child,35639,USD_PPP,2022,CALC_A,C
FRE,real_net_mean_annual,single_no_child,35758,USD_PPP,2022,CALC_A,C
FRF,real_net_mean_annual,single_no_child,36927,USD_PPP,2022,CALC_A,C
FRG,real_net_mean_annual,single_no_child,35485,USD_PPP,2022,CALC_A,C
FRH,real_net_mean_annual,single_no_child,35740,USD_PPP,2022,CALC_A,C
FRI,real_net_mean_annual,single_no_child,35597,USD_PPP,2022,CALC_A,C
FRJ,real_net_mean_annual,single_no_child,36348,USD_PPP,2022,CALC_A,C
FRK,real_net_mean_annual,single_no_child,38636,USD_PPP,2022,CALC_A,C
FRL,real_net_mean_annual,single_no_child,38978,USD_PPP,2022,CALC_A,C
FRM,real_net_mean_annual,single_no_child,35102,USD_PPP,2022,CALC_A,C
BE,real_net_mean_annual,single_no_child,41566,USD_PPP,2022,CALC_A,C
BE1,real_net_mean_annual,single_no_child,44886,USD_PPP,2022,CALC_A,C
BE3,real_net_mean_annual,single_no_child,40091,USD_PPP,2022,CALC_A,C
LU00,real_net_mean_annual,single_no_child,56163,USD_PPP,2022,CALC_A,C
CH,real_net_mean_annual,single_no_child_before_health_premium,69121,USD_PPP,2022,CALC_A,C
CH01,real_net_mean_annual,single_no_child_before_health_premium,69685,USD_PPP,2022,CALC_A,C
CH02,real_net_mean_annual,single_no_child_before_health_premium,68796,USD_PPP,2022,CALC_A,C
CA,real_net_mean_annual,single_no_child,42782,USD_PPP,2022,CALC_A,C
CA-QC,real_net_mean_annual,single_no_child,40469,USD_PPP,2022,CALC_A,C
CA-NB,real_net_mean_annual,single_no_child,37080,USD_PPP,2022,CALC_A,C
CA-ON,real_net_mean_annual,single_no_child,44001,USD_PPP,2022,CALC_A,C
CA-MB,real_net_mean_annual,single_no_child,38180,USD_PPP,2022,CALC_A,C
CA-SK,real_net_mean_annual,single_no_child,41898,USD_PPP,2022,CALC_A,C
CA-AB,real_net_mean_annual,single_no_child,45960,USD_PPP,2022,CALC_A,C
CA-BC,real_net_mean_annual,single_no_child,43906,USD_PPP,2022,CALC_A,C
CA-NS,real_net_mean_annual,single_no_child,37225,USD_PPP,2022,CALC_A,C
CA-PE,real_net_mean_annual,single_no_child,36500,USD_PPP,2022,CALC_A,C
CA-NL,real_net_mean_annual,single_no_child,41268,USD_PPP,2022,CALC_A,C
FR1,real_net_mean_annual_regional_prices,single_no_child,46198,USD_PPP,2022,CALC_A+INSEE_IP1959,C
FRM,real_net_mean_annual_regional_prices,single_no_child,33242,USD_PPP,2022,CALC_A+INSEE_FLASH_CORSE,C
CH,real_net_median_annual,single_no_child_before_health_premium,66336,USD_PPP,2024,CALC_B,C
CH01,real_net_median_annual,single_no_child_before_health_premium,66113,USD_PPP,2024,CALC_B,C
CH02,real_net_median_annual,single_no_child_before_health_premium,65822,USD_PPP,2024,CALC_B,C
CH,real_net_median_annual,single_after_adult_health_premium_2026,61074,USD_PPP,2024,CALC_B+OFSP_PRIMES,C
CH-GE,real_net_median_annual,single_after_adult_health_premium_2026,59486,USD_PPP,2024,CALC_B+OFSP_PRIMES,C
CH-VD,real_net_median_annual,single_after_adult_health_premium_2026,60152,USD_PPP,2024,CALC_B+OFSP_PRIMES,C
CA,real_net_median_annual,single_no_child,42678,USD_PPP,2025,CALC_B,C
CA-QC,real_net_median_annual,single_no_child,40761,USD_PPP,2025,CALC_B,C
CA-NB,real_net_median_annual,single_no_child,37507,USD_PPP,2025,CALC_B,C
CA-ON,real_net_median_annual,single_no_child,43536,USD_PPP,2025,CALC_B,C
CA-MB,real_net_median_annual,single_no_child,37029,USD_PPP,2025,CALC_B,C
CA-SK,real_net_median_annual,single_no_child,40773,USD_PPP,2025,CALC_B,C
CA-AB,real_net_median_annual,single_no_child,44976,USD_PPP,2025,CALC_B,C
CA-BC,real_net_median_annual,single_no_child,44516,USD_PPP,2025,CALC_B,C
CA-NS,real_net_median_annual,single_no_child,38923,USD_PPP,2025,CALC_B,C
CA-PE,real_net_median_annual,single_no_child,37005,USD_PPP,2025,CALC_B,C
CA-NL,real_net_median_annual,single_no_child,40573,USD_PPP,2025,CALC_B,C
FR1,gross_mean_hourly,all,23.31,PPS,2022,ES_SES22_RHR,O
FRB,gross_mean_hourly,all,16.69,PPS,2022,ES_SES22_RHR,O
FRC,gross_mean_hourly,all,16.01,PPS,2022,ES_SES22_RHR,O
FRD,gross_mean_hourly,all,16.48,PPS,2022,ES_SES22_RHR,O
FRE,gross_mean_hourly,all,16.59,PPS,2022,ES_SES22_RHR,O
FRF,gross_mean_hourly,all,16.67,PPS,2022,ES_SES22_RHR,O
FRG,gross_mean_hourly,all,16.49,PPS,2022,ES_SES22_RHR,O
FRH,gross_mean_hourly,all,16.54,PPS,2022,ES_SES22_RHR,O
FRI,gross_mean_hourly,all,16.50,PPS,2022,ES_SES22_RHR,O
FRJ,gross_mean_hourly,all,16.95,PPS,2022,ES_SES22_RHR,O
FRK,gross_mean_hourly,all,17.91,PPS,2022,ES_SES22_RHR,O
FRL,gross_mean_hourly,all,17.99,PPS,2022,ES_SES22_RHR,O
FRM,gross_mean_hourly,all,15.94,PPS,2022,ES_SES22_RHR,O
BE1,gross_mean_hourly,all,26.54,PPS,2022,ES_SES22_RHR,O
BE3,gross_mean_hourly,all,23.06,PPS,2022,ES_SES22_RHR,O
LU00,gross_mean_hourly,all,23.42,PPS,2022,ES_SES22_RHR,O
CH,gross_mean_hourly,all,28.31,PPS,2022,ES_SES22_RHR,O
FR,gross_median_hourly,ISCED0-2,12.17,PPS,2022,ES_SES_PUB2I,O
FR,gross_median_hourly,ISCED3-4,13.86,PPS,2022,ES_SES_PUB2I,O
FR,gross_median_hourly,ISCED5-8,19.76,PPS,2022,ES_SES_PUB2I,O
FR,gross_median_hourly,age_lt30,12.73,PPS,2022,ES_SES_PUB2A,O
FR,gross_median_hourly,age_30-49,16.02,PPS,2022,ES_SES_PUB2A,O
FR,gross_median_hourly,age_50plus,16.60,PPS,2022,ES_SES_PUB2A,O
BE,gross_median_hourly,ISCED0-2,17.24,PPS,2022,ES_SES_PUB2I,O
BE,gross_median_hourly,ISCED3-4,18.76,PPS,2022,ES_SES_PUB2I,O
BE,gross_median_hourly,ISCED5-8,29.50,PPS,2022,ES_SES_PUB2I,O
BE,gross_median_hourly,age_lt30,15.05,PPS,2022,ES_SES_PUB2A,O
BE,gross_median_hourly,age_30-49,20.85,PPS,2022,ES_SES_PUB2A,O
BE,gross_median_hourly,age_50plus,25.03,PPS,2022,ES_SES_PUB2A,O
LU,gross_median_hourly,ISCED0-2,13.11,PPS,2022,ES_SES_PUB2I,O
LU,gross_median_hourly,ISCED3-4,16.22,PPS,2022,ES_SES_PUB2I,O
LU,gross_median_hourly,ISCED5-8,27.30,PPS,2022,ES_SES_PUB2I,O
LU,gross_median_hourly,age_lt30,14.70,PPS,2022,ES_SES_PUB2A,O
LU,gross_median_hourly,age_30-49,19.92,PPS,2022,ES_SES_PUB2A,O
LU,gross_median_hourly,age_50plus,20.16,PPS,2022,ES_SES_PUB2A,O
CH,gross_median_hourly,ISCED0-2,18.49,PPS,2022,ES_SES_PUB2I,O
CH,gross_median_hourly,ISCED3-4,22.38,PPS,2022,ES_SES_PUB2I,O
CH,gross_median_hourly,ISCED5-8,32.57,PPS,2022,ES_SES_PUB2I,O
CH,gross_median_hourly,age_lt30,19.44,PPS,2022,ES_SES_PUB2A,O
CH,gross_median_hourly,age_30-49,24.94,PPS,2022,ES_SES_PUB2A,O
CH,gross_median_hourly,age_50plus,26.08,PPS,2022,ES_SES_PUB2A,O
FR,real_net_mean_annual,ISCED0-2,30636,USD_PPP,2022,CALC_EDU,C
FR,real_net_mean_annual,ISCED3-4,33106,USD_PPP,2022,CALC_EDU,C
FR,real_net_mean_annual,ISCED5-8,48397,USD_PPP,2022,CALC_EDU,C
BE,real_net_mean_annual,ISCED0-2,34087,USD_PPP,2022,CALC_EDU,C
BE,real_net_mean_annual,ISCED3-4,36973,USD_PPP,2022,CALC_EDU,C
BE,real_net_mean_annual,ISCED5-8,48656,USD_PPP,2022,CALC_EDU,C
LU,real_net_mean_annual,ISCED0-2,40270,USD_PPP,2022,CALC_EDU,C
LU,real_net_mean_annual,ISCED3-4,49593,USD_PPP,2022,CALC_EDU,C
LU,real_net_mean_annual,ISCED5-8,70406,USD_PPP,2022,CALC_EDU,C
CH,real_net_mean_annual,ISCED0-2,50919,USD_PPP,2022,CALC_EDU,C
CH,real_net_mean_annual,ISCED3-4,60854,USD_PPP,2022,CALC_EDU,C
CH,real_net_mean_annual,ISCED5-8,90773,USD_PPP,2022,CALC_EDU,C
CH,gross_median_monthly,all,7024,CHF,2024,OFS_ESS_204,O
CH01,gross_median_monthly,all,6998,CHF,2024,OFS_ESS_204,O
CH02,gross_median_monthly,all,6964,CHF,2024,OFS_ESS_204,O
CH,gross_median_monthly,age_le29,5570,CHF,2024,OFS_ESS_205,O
CH01,gross_median_monthly,age_le29,5544,CHF,2024,OFS_ESS_205,O
CH02,gross_median_monthly,age_le29,5560,CHF,2024,OFS_ESS_205,O
CH,gross_median_monthly,age_30-49,7288,CHF,2024,OFS_ESS_205,O
CH01,gross_median_monthly,age_30-49,7237,CHF,2024,OFS_ESS_205,O
CH02,gross_median_monthly,age_30-49,7193,CHF,2024,OFS_ESS_205,O
CH,gross_median_monthly,age_ge50,7806,CHF,2024,OFS_ESS_205,O
CH01,gross_median_monthly,age_ge50,7976,CHF,2024,OFS_ESS_205,O
CH02,gross_median_monthly,age_ge50,7723,CHF,2024,OFS_ESS_205,O
CH,gross_median_monthly,no_vocational_qualification,5183,CHF,2024,OFS_ESS_202,O
CH01,gross_median_monthly,no_vocational_qualification,5159,CHF,2024,OFS_ESS_202,O
CH02,gross_median_monthly,no_vocational_qualification,5212,CHF,2024,OFS_ESS_202,O
CH,gross_median_monthly,apprenticeship_CFC,6390,CHF,2024,OFS_ESS_202,O
CH01,gross_median_monthly,apprenticeship_CFC,6331,CHF,2024,OFS_ESS_202,O
CH02,gross_median_monthly,apprenticeship_CFC,6406,CHF,2024,OFS_ESS_202,O
CH,gross_median_monthly,university_EPF,10533,CHF,2024,OFS_ESS_202,O
CH01,gross_median_monthly,university_EPF,10402,CHF,2024,OFS_ESS_202,O
CH02,gross_median_monthly,university_EPF,10340,CHF,2024,OFS_ESS_202,O
CH01,gross_median_monthly,cross_border_permit_G,6565,CHF,2024,OFS_ESS_203,O
CH02,gross_median_monthly,cross_border_permit_G,6194,CHF,2024,OFS_ESS_203,O
CA,gross_median_hourly_fulltime,age_15plus,33.65,CAD,2025,SC_14100064,O
CA-QC,gross_median_hourly_fulltime,age_15plus,33.00,CAD,2025,SC_14100064,O
CA-NB,gross_median_hourly_fulltime,age_15plus,28.85,CAD,2025,SC_14100064,O
CA-ON,gross_median_hourly_fulltime,age_15plus,34.62,CAD,2025,SC_14100064,O
CA-MB,gross_median_hourly_fulltime,age_15plus,28.74,CAD,2025,SC_14100064,O
CA-SK,gross_median_hourly_fulltime,age_15plus,31.25,CAD,2025,SC_14100064,O
CA-AB,gross_median_hourly_fulltime,age_15plus,34.97,CAD,2025,SC_14100064,O
CA-BC,gross_median_hourly_fulltime,age_15plus,35.00,CAD,2025,SC_14100064,O
CA-NS,gross_median_hourly_fulltime,age_15plus,29.80,CAD,2025,SC_14100064,O
CA-PE,gross_median_hourly_fulltime,age_15plus,28.21,CAD,2025,SC_14100064,O
CA-NL,gross_median_hourly_fulltime,age_15plus,30.07,CAD,2025,SC_14100064,O
CA,gross_median_hourly_fulltime,age_15-24,22.00,CAD,2025,SC_14100064,O
CA-QC,gross_median_hourly_fulltime,age_15-24,23.05,CAD,2025,SC_14100064,O
CA-NB,gross_median_hourly_fulltime,age_15-24,21.00,CAD,2025,SC_14100064,O
CA-ON,gross_median_hourly_fulltime,age_15-24,22.00,CAD,2025,SC_14100064,O
CA-MB,gross_median_hourly_fulltime,age_15-24,20.00,CAD,2025,SC_14100064,O
CA-SK,gross_median_hourly_fulltime,age_15-24,21.00,CAD,2025,SC_14100064,O
CA-AB,gross_median_hourly_fulltime,age_15-24,22.00,CAD,2025,SC_14100064,O
CA-BC,gross_median_hourly_fulltime,age_15-24,24.00,CAD,2025,SC_14100064,O
CA-NS,gross_median_hourly_fulltime,age_15-24,20.00,CAD,2025,SC_14100064,O
CA-PE,gross_median_hourly_fulltime,age_15-24,20.00,CAD,2025,SC_14100064,O
CA-NL,gross_median_hourly_fulltime,age_15-24,20.60,CAD,2025,SC_14100064,O
CA,gross_median_hourly_fulltime,age_25-54,35.90,CAD,2025,SC_14100064,O
CA-QC,gross_median_hourly_fulltime,age_25-54,35.00,CAD,2025,SC_14100064,O
CA-NB,gross_median_hourly_fulltime,age_25-54,31.00,CAD,2025,SC_14100064,O
CA-ON,gross_median_hourly_fulltime,age_25-54,36.92,CAD,2025,SC_14100064,O
CA-MB,gross_median_hourly_fulltime,age_25-54,30.00,CAD,2025,SC_14100064,O
CA-SK,gross_median_hourly_fulltime,age_25-54,34.00,CAD,2025,SC_14100064,O
CA-AB,gross_median_hourly_fulltime,age_25-54,36.92,CAD,2025,SC_14100064,O
CA-BC,gross_median_hourly_fulltime,age_25-54,37.02,CAD,2025,SC_14100064,O
CA-NS,gross_median_hourly_fulltime,age_25-54,31.67,CAD,2025,SC_14100064,O
CA-PE,gross_median_hourly_fulltime,age_25-54,30.00,CAD,2025,SC_14100064,O
CA-NL,gross_median_hourly_fulltime,age_25-54,33.00,CAD,2025,SC_14100064,O
CA,gross_median_hourly_fulltime,age_55plus,32.97,CAD,2025,SC_14100064,O
CA-QC,gross_median_hourly_fulltime,age_55plus,31.00,CAD,2025,SC_14100064,O
CA-NB,gross_median_hourly_fulltime,age_55plus,27.14,CAD,2025,SC_14100064,O
CA-ON,gross_median_hourly_fulltime,age_55plus,33.65,CAD,2025,SC_14100064,O
CA-MB,gross_median_hourly_fulltime,age_55plus,30.00,CAD,2025,SC_14100064,O
CA-SK,gross_median_hourly_fulltime,age_55plus,32.00,CAD,2025,SC_14100064,O
CA-AB,gross_median_hourly_fulltime,age_55plus,35.90,CAD,2025,SC_14100064,O
CA-BC,gross_median_hourly_fulltime,age_55plus,35.00,CAD,2025,SC_14100064,O
CA-NS,gross_median_hourly_fulltime,age_55plus,29.00,CAD,2025,SC_14100064,O
CA-PE,gross_median_hourly_fulltime,age_55plus,28.47,CAD,2025,SC_14100064,O
CA-NL,gross_median_hourly_fulltime,age_55plus,28.00,CAD,2025,SC_14100064,O
FR,net_pct_of_gross,single_67pct_AW,76.3,percent,2025,OECD_TW,C
FR,net_pct_of_gross,single_100pct_AW,72.0,percent,2025,OECD_TW,C
FR,net_pct_of_gross,single_167pct_AW,66.2,percent,2025,OECD_TW,C
FR,net_pct_of_gross,one_earner_couple_2_children_100pct_AW,83.1,percent,2025,OECD_TW,C
BE,net_pct_of_gross,single_67pct_AW,68.5,percent,2025,OECD_TW,C
BE,net_pct_of_gross,single_100pct_AW,60.5,percent,2025,OECD_TW,C
BE,net_pct_of_gross,single_167pct_AW,52.6,percent,2025,OECD_TW,C
BE,net_pct_of_gross,one_earner_couple_2_children_100pct_AW,80.3,percent,2025,OECD_TW,C
LU,net_pct_of_gross,single_67pct_AW,76.9,percent,2025,OECD_TW,C
LU,net_pct_of_gross,single_100pct_AW,68.0,percent,2025,OECD_TW,C
LU,net_pct_of_gross,single_167pct_AW,60.9,percent,2025,OECD_TW,C
LU,net_pct_of_gross,one_earner_couple_2_children_100pct_AW,90.1,percent,2025,OECD_TW,C
CH,net_pct_of_gross,single_67pct_AW,85.0,percent,2025,OECD_TW,C
CH,net_pct_of_gross,single_100pct_AW,81.9,percent,2025,OECD_TW,C
CH,net_pct_of_gross,single_167pct_AW,77.1,percent,2025,OECD_TW,C
CH,net_pct_of_gross,one_earner_couple_2_children_100pct_AW,94.9,percent,2025,OECD_TW,C
CA,net_pct_of_gross,single_67pct_AW,77.9,percent,2025,OECD_TW,C
CA,net_pct_of_gross,single_100pct_AW,74.4,percent,2025,OECD_TW,C
CA,net_pct_of_gross,single_167pct_AW,68.9,percent,2025,OECD_TW,C
CA,net_pct_of_gross,one_earner_couple_2_children_100pct_AW,85.4,percent,2025,OECD_TW,C
FR,tax_wedge,single_100pct_AW,47.2,percent_labour_cost,2025,OECD_TW,O
BE,tax_wedge,single_100pct_AW,52.5,percent_labour_cost,2025,OECD_TW,O
LU,tax_wedge,single_100pct_AW,40.2,percent_labour_cost,2025,OECD_TW,O
CH,tax_wedge,single_100pct_AW,23.0,percent_labour_cost,2025,OECD_TW,O
CA,tax_wedge,single_100pct_AW,32.1,percent_labour_cost,2025,OECD_TW,O
CH,health_premium_monthly,adult_26plus,464.8,CHF,2026,OFSP_PRIMES,O
CH-GE,health_premium_monthly,adult_26plus,585.4,CHF,2026,OFSP_PRIMES,O
CH-VD,health_premium_monthly,adult_26plus,526.6,CHF,2026,OFSP_PRIMES,O
CH-VS,health_premium_monthly,adult_26plus,436.1,CHF,2026,OFSP_PRIMES,O
CH-BE,health_premium_monthly,adult_26plus,470.7,CHF,2026,OFSP_PRIMES,O
CH-FR,health_premium_monthly,adult_26plus,442.6,CHF,2026,OFSP_PRIMES,O
CH-NE,health_premium_monthly,adult_26plus,530.8,CHF,2026,OFSP_PRIMES,O
CH-JU,health_premium_monthly,adult_26plus,520.5,CHF,2026,OFSP_PRIMES,O
CH,health_premium_monthly,adult_26plus,487.6,CHF,2027,OFSP_PRIMES,O
CH-GE,health_premium_monthly,adult_26plus,610.6,CHF,2027,OFSP_PRIMES,O
CH-VD,health_premium_monthly,adult_26plus,543.5,CHF,2027,OFSP_PRIMES,O
CH-VS,health_premium_monthly,adult_26plus,460.9,CHF,2027,OFSP_PRIMES,O
CH-BE,health_premium_monthly,adult_26plus,494.4,CHF,2027,OFSP_PRIMES,O
CH-FR,health_premium_monthly,adult_26plus,465.5,CHF,2027,OFSP_PRIMES,O
CH-NE,health_premium_monthly,adult_26plus,558.8,CHF,2027,OFSP_PRIMES,O
CH-JU,health_premium_monthly,adult_26plus,551.0,CHF,2027,OFSP_PRIMES,O
CH-GE,health_premium_monthly,young_adult_19-25,435.8,CHF,2026,OFSP_PRIMES,O
CH-VD,health_premium_monthly,young_adult_19-25,371.1,CHF,2026,OFSP_PRIMES,O
FR,price_level_household_consumption,EU27=100,110.3,index,2025,ES_PPP1,O
BE,price_level_household_consumption,EU27=100,116.2,index,2025,ES_PPP1,O
LU,price_level_household_consumption,EU27=100,131.5,index,2025,ES_PPP1,O
CH,price_level_household_consumption,EU27=100,171.3,index,2025,ES_PPP1,O
CA,price_level_household_consumption,EU27=100,130,index,2024,OECD_CPL,O
FR,price_level_household_consumption,USA=100,77.6,index,2024,OECD_CPL,O
BE,price_level_household_consumption,USA=100,81.4,index,2024,OECD_CPL,O
LU,price_level_household_consumption,USA=100,91.5,index,2024,OECD_CPL,O
CH,price_level_household_consumption,USA=100,121,index,2024,OECD_CPL,O
CA,price_level_household_consumption,USA=100,90.6,index,2024,OECD_CPL,O
FR1,regional_price_level,rest_of_metropolitan_France=100,107,index,2022,INSEE_IP1959,NV
FRM,regional_price_level,province_excl_rents=100,107,index,2022,INSEE_FLASH_CORSE,NV
FR,disposable_income_per_capita,all,21800,PPS,2023,ES_HHINC,O
FR1,disposable_income_per_capita,all,26500,PPS,2023,ES_HHINC,O
FRB,disposable_income_per_capita,all,21000,PPS,2023,ES_HHINC,O
FRC,disposable_income_per_capita,all,20500,PPS,2023,ES_HHINC,O
FRD,disposable_income_per_capita,all,20700,PPS,2023,ES_HHINC,O
FRE,disposable_income_per_capita,all,19200,PPS,2023,ES_HHINC,O
FRF,disposable_income_per_capita,all,20400,PPS,2023,ES_HHINC,O
FRG,disposable_income_per_capita,all,20900,PPS,2023,ES_HHINC,O
FRH,disposable_income_per_capita,all,21100,PPS,2023,ES_HHINC,O
FRI,disposable_income_per_capita,all,21200,PPS,2023,ES_HHINC,O
FRJ,disposable_income_per_capita,all,20600,PPS,2023,ES_HHINC,O
FRK,disposable_income_per_capita,all,21800,PPS,2023,ES_HHINC,O
FRL,disposable_income_per_capita,all,23200,PPS,2023,ES_HHINC,O
FRM,disposable_income_per_capita,all,21600,PPS,2023,ES_HHINC,O
BE,disposable_income_per_capita,all,23800,PPS,2023,ES_HHINC,O
BE1,disposable_income_per_capita,all,21400,PPS,2023,ES_HHINC,O
BE3,disposable_income_per_capita,all,21700,PPS,2023,ES_HHINC,O
LU00,disposable_income_per_capita,all,30100,PPS,2023,ES_HHINC,O
FR,disposable_income_per_capita,all,33873,USD_PPP,2023,OECD_REG,O
FR1,disposable_income_per_capita,all,41188,USD_PPP,2023,OECD_REG,O
FRB,disposable_income_per_capita,all,32624,USD_PPP,2023,OECD_REG,O
FRC,disposable_income_per_capita,all,31857,USD_PPP,2023,OECD_REG,O
FRD,disposable_income_per_capita,all,32101,USD_PPP,2023,OECD_REG,O
FRE,disposable_income_per_capita,all,29736,USD_PPP,2023,OECD_REG,O
FRF,disposable_income_per_capita,all,31678,USD_PPP,2023,OECD_REG,O
FRG,disposable_income_per_capita,all,32416,USD_PPP,2023,OECD_REG,O
FRH,disposable_income_per_capita,all,32776,USD_PPP,2023,OECD_REG,O
FRI,disposable_income_per_capita,all,32909,USD_PPP,2023,OECD_REG,O
FRJ,disposable_income_per_capita,all,31934,USD_PPP,2023,OECD_REG,O
FRK,disposable_income_per_capita,all,33900,USD_PPP,2023,OECD_REG,O
FRL,disposable_income_per_capita,all,35972,USD_PPP,2023,OECD_REG,O
FRM,disposable_income_per_capita,all,33603,USD_PPP,2023,OECD_REG,O
BE,disposable_income_per_capita,all,37863,USD_PPP,2024,OECD_REG,O
BE1,disposable_income_per_capita,all,33735,USD_PPP,2024,OECD_REG,O
BE3,disposable_income_per_capita,all,34535,USD_PPP,2024,OECD_REG,O
LU00,disposable_income_per_capita,all,48778,USD_PPP,2024,OECD_REG,O
CA,disposable_income_per_capita,all,33564,USD_PPP,2024,OECD_REG,O
CA-QC,disposable_income_per_capita,all,30966,USD_PPP,2024,OECD_REG,O
CA-NB,disposable_income_per_capita,all,30714,USD_PPP,2024,OECD_REG,O
CA-ON,disposable_income_per_capita,all,33464,USD_PPP,2024,OECD_REG,O
CA-MB,disposable_income_per_capita,all,29897,USD_PPP,2024,OECD_REG,O
CA-SK,disposable_income_per_capita,all,33172,USD_PPP,2024,OECD_REG,O
CA-AB,disposable_income_per_capita,all,37318,USD_PPP,2024,OECD_REG,O
CA-BC,disposable_income_per_capita,all,36546,USD_PPP,2024,OECD_REG,O
CA-NS,disposable_income_per_capita,all,31005,USD_PPP,2024,OECD_REG,O
CA-PE,disposable_income_per_capita,all,31273,USD_PPP,2024,OECD_REG,O
CA-NL,disposable_income_per_capita,all,33359,USD_PPP,2024,OECD_REG,O
CA-YT,disposable_income_per_capita,all,43938,USD_PPP,2024,OECD_REG,O
CA-NT,disposable_income_per_capita,all,46154,USD_PPP,2024,OECD_REG,O
CA-NU,disposable_income_per_capita,all,29152,USD_PPP,2024,OECD_REG,O
CA,median_after_tax_income,families_and_unattached,75500,CAD,2024,SC_11100190,O
CA-QC,median_after_tax_income,families_and_unattached,68800,CAD,2024,SC_11100190,O
CA-NB,median_after_tax_income,families_and_unattached,65100,CAD,2024,SC_11100190,O
CA-ON,median_after_tax_income,families_and_unattached,79500,CAD,2024,SC_11100190,O
CA-MB,median_after_tax_income,families_and_unattached,72000,CAD,2024,SC_11100190,O
CA-SK,median_after_tax_income,families_and_unattached,75500,CAD,2024,SC_11100190,O
CA-AB,median_after_tax_income,families_and_unattached,85300,CAD,2024,SC_11100190,O
CA-BC,median_after_tax_income,families_and_unattached,75800,CAD,2024,SC_11100190,O
CA-NS,median_after_tax_income,families_and_unattached,64200,CAD,2024,SC_11100190,O
CA-PE,median_after_tax_income,families_and_unattached,65900,CAD,2024,SC_11100190,O
CA-NL,median_after_tax_income,families_and_unattached,68000,CAD,2024,SC_11100190,O
CA-YT,median_after_tax_income,families_and_unattached,89300,CAD,2024,SC_11100190,O
CA-NT,median_after_tax_income,families_and_unattached,116100,CAD,2024,SC_11100190,O
CA-NU,median_after_tax_income,families_and_unattached,109600,CAD,2024,SC_11100190,O
FR,at_risk_of_poverty_rate,all,16.3,percent,2025,ES_LI41,O
FR1,at_risk_of_poverty_rate,all,16.9,percent,2025,ES_LI41,O
FRB,at_risk_of_poverty_rate,all,11.0,percent,2025,ES_LI41,O
FRC,at_risk_of_poverty_rate,all,15.7,percent,2025,ES_LI41,O
FRD,at_risk_of_poverty_rate,all,13.0,percent,2025,ES_LI41,O
FRE,at_risk_of_poverty_rate,all,19.5,percent,2025,ES_LI41,O
FRF,at_risk_of_poverty_rate,all,15.4,percent,2025,ES_LI41,O
FRG,at_risk_of_poverty_rate,all,11.5,percent,2025,ES_LI41,O
FRH,at_risk_of_poverty_rate,all,10.6,percent,2025,ES_LI41,O
FRI,at_risk_of_poverty_rate,all,14.8,percent,2025,ES_LI41,O
FRJ,at_risk_of_poverty_rate,all,19.6,percent,2025,ES_LI41,O
FRK,at_risk_of_poverty_rate,all,14.6,percent,2025,ES_LI41,O
FRL,at_risk_of_poverty_rate,all,16.1,percent,2025,ES_LI41,O
FRM,at_risk_of_poverty_rate,all,23.6,percent,2025,ES_LI41,O
BE,at_risk_of_poverty_rate,all,10.9,percent,2025,ES_LI41,O
BE1,at_risk_of_poverty_rate,all,23.3,percent,2025,ES_LI41,O
BE3,at_risk_of_poverty_rate,all,13.4,percent,2025,ES_LI41,O
LU00,at_risk_of_poverty_rate,all,14.8,percent,2025,ES_LI41,O
CH,at_risk_of_poverty_rate,all,16.2,percent,2024,ES_LI41,O
CH01,at_risk_of_poverty_rate,all,19.0,percent,2024,ES_LI41,O
CH02,at_risk_of_poverty_rate,all,16.1,percent,2024,ES_LI41,O
CA,mbm_poverty_rate,all,11.0,percent,2024,SC_11100135,O
CA-QC,mbm_poverty_rate,all,7.0,percent,2024,SC_11100135,O
CA-NB,mbm_poverty_rate,all,9.9,percent,2024,SC_11100135,O
CA-ON,mbm_poverty_rate,all,12.5,percent,2024,SC_11100135,O
CA-MB,mbm_poverty_rate,all,12.3,percent,2024,SC_11100135,O
CA-SK,mbm_poverty_rate,all,11.6,percent,2024,SC_11100135,O
CA-AB,mbm_poverty_rate,all,11.0,percent,2024,SC_11100135,O
CA-BC,mbm_poverty_rate,all,13.0,percent,2024,SC_11100135,O
CA-NS,mbm_poverty_rate,all,10.9,percent,2024,SC_11100135,O
CA-PE,mbm_poverty_rate,all,10.0,percent,2024,SC_11100135,O
CA-NL,mbm_poverty_rate,all,10.4,percent,2024,SC_11100135,O
CA-YT,mbm_poverty_rate,all,11.8,percent,2024,SC_11100135,O
CA-NT,mbm_poverty_rate,all,10.0,percent,2024,SC_11100135,O
CA-NU,mbm_poverty_rate,all,31.7,percent,2024,SC_11100135,O
FR,median_net_wealth_household,all,125673,EUR,2020,OECD_WDD,O
BE,median_net_wealth_household,all,242427,EUR,2020,OECD_WDD,O
LU,median_net_wealth_household,all,717660,EUR,2021,OECD_WDD,O
CA,median_net_wealth_household,all_oecd_definition,428300,CAD,2023,OECD_WDD,O
CA,median_net_worth,all_family_units,519700,CAD,2023,SC_11100016,O
CA-QC,median_net_worth,all_family_units,371000,CAD,2023,SC_11100016,O
CA-NB,median_net_worth,all_family_units,286200,CAD,2023,SC_11100016,O
CA-ON,median_net_worth,all_family_units,665600,CAD,2023,SC_11100016,O
CA-MB,median_net_worth,all_family_units,386300,CAD,2023,SC_11100016,O
CA-SK,median_net_worth,all_family_units,394600,CAD,2023,SC_11100016,O
CA-AB,median_net_worth,all_family_units,457100,CAD,2023,SC_11100016,O
CA-BC,median_net_worth,all_family_units,773500,CAD,2023,SC_11100016,O
CA-NS,median_net_worth,all_family_units,354600,CAD,2023,SC_11100016,O
CA-PE,median_net_worth,all_family_units,399800,CAD,2023,SC_11100016,O
CA-NL,median_net_worth,all_family_units,333500,CAD,2023,SC_11100016,O
CA-QC,median_net_worth,under_35,155300,CAD,2023,SC_11100016,O
CA-ON,median_net_worth,under_35,169700,CAD,2023,SC_11100016,O
CA-NB,median_net_worth,under_35,81500,CAD,2023,SC_11100016,O
FR,home_ownership_population_share,all,61.4,percent,2025,ES_LVHO02,O
BE,home_ownership_population_share,all,70.9,percent,2025,ES_LVHO02,O
LU,home_ownership_population_share,all,64.1,percent,2025,ES_LVHO02,O
CH,home_ownership_population_share,all,42.0,percent,2024,ES_LVHO02,O
FR,minimum_wage_monthly,all,1867,EUR,2026-S2,ES_MW,O
BE,minimum_wage_monthly,all,2234,EUR,2026-S2,ES_MW,O
LU,minimum_wage_monthly,unqualified,2771,EUR,2026-S2,ES_MW,O
LU,minimum_wage_monthly,qualified,3325.59,EUR,2026-06,LU_GUICHET,NV
FR,minimum_wage_hourly,all,12.31,EUR,2026-06,FR_INFOGOUV,NV
CH-GE,minimum_wage_hourly,all,24.59,CHF,2026,GE_SALMIN,O
CH-NE,minimum_wage_hourly,all,21.35,CHF,2026,FRONTALIERS_GE,NV
CH-JU,minimum_wage_hourly,all,21.40,CHF,2026,FRONTALIERS_GE,NV
CA-ON,minimum_wage_hourly,general,17.95,CAD,2026-10,GOWLING,O
CA-MB,minimum_wage_hourly,general,16.40,CAD,2026-10,GOWLING,O
CA-SK,minimum_wage_hourly,general,15.70,CAD,2026-10,GOWLING,O
CA-PE,minimum_wage_hourly,general,17.30,CAD,2026-10,GOWLING,O
CA-NS,minimum_wage_hourly,general,17.00,CAD,2026-10,CTV,NV
CA-QC,minimum_wage_hourly,general,16.60,CAD,2026-05,CTV,NV
CA-BC,minimum_wage_hourly,general,18.25,CAD,2026-06,CTV,NV
CA-AB,minimum_wage_hourly,general,15.00,CAD,2026,CTV,NV
FR,relative_earnings_tertiary,25-64_upper_secondary=100,179.8,index,2022,OECD_EAG,O
BE,relative_earnings_tertiary,25-64_upper_secondary=100,151.3,index,2023,OECD_EAG,O
LU,relative_earnings_tertiary,25-64_upper_secondary=100,154.6,index,2024,OECD_EAG,O
CH,relative_earnings_tertiary,25-64_upper_secondary=100,152.5,index,2024,OECD_EAG,O
CA,relative_earnings_tertiary,25-64_upper_secondary=100,145.0,index,2023,OECD_EAG,O
FR,relative_earnings_below_upper_secondary,25-64_upper_secondary=100,69.2,index,2022,OECD_EAG,O
BE,relative_earnings_below_upper_secondary,25-64_upper_secondary=100,73.2,index,2023,OECD_EAG,O
LU,relative_earnings_below_upper_secondary,25-64_upper_secondary=100,74.8,index,2024,OECD_EAG,O
CH,relative_earnings_below_upper_secondary,25-64_upper_secondary=100,81.6,index,2024,OECD_EAG,O
CA,relative_earnings_below_upper_secondary,25-64_upper_secondary=100,84.5,index,2023,OECD_EAG,O
```

Clés de source : ES_* = Eurostat, https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/{code}?format=JSON&lang=EN avec {code} = earn_ses22_rann, earn_ses22_rhr, earn_ses22_27, earn_ses_pub2i, earn_ses_pub2a, nama_10r_2hhinc, ilc_li41, ilc_lvho02, earn_mw_cur, prc_ppp_ind_1. OECD_TW = https://sdmx.oecd.org/public/rest/data/OECD.CTP.TPS,DSD_TAX_WAGES_COMP@DF_TW_COMP,2.1/all?startPeriod=2024 ; OECD_EAG = https://sdmx.oecd.org/public/rest/data/OECD.EDU.IMEP,DSD_EAG_LSO_EA@DF_LSO_EARN_REL_UPPER,1.0/all?startPeriod=2019 ; OECD_REG = https://sdmx.oecd.org/public/rest/data/OECD.CFE.EDS,DSD_REG_ECO@DF_INC,2.4/all?startPeriod=2020 ; OECD_CPL = https://sdmx.oecd.org/public/rest/data/OECD.SDD.TPS,DSD_PPP@DF_PPP_CPL,1.1/all?startPeriod=2022 ; OECD_WDD = https://sdmx.oecd.org/public/rest/data/OECD.WISE.INE,DSD_WEALTH@DF_WEALTH,1.0/all?startPeriod=2016. SC_{n} = https://www150.statcan.gc.ca/n1/tbl/csv/{n}-eng.zip. OFS_ESS_{n} = https://www.pxweb.bfs.admin.ch/api/v1/fr/px-x-0304010000_{n}/px-x-0304010000_{n}.px. OFSP_PRIMES = https://www.bag.admin.ch/fr/newnsb/BfuGvedj0OOX. INSEE_IP1959 = https://www.insee.fr/fr/statistiques/7649921 ; INSEE_FLASH_CORSE = https://www.insee.fr/fr/statistiques/7635831. GE_SALMIN = https://www.ge.ch/actualite/salaire-minimum-genevois-2026-etablira-2459-fr-heure-1-10-2025 ; FRONTALIERS_GE = https://frontaliers-grandest.eu/accueil/salaries/france-suisse/droit-du-travail/contrat-de-travail-en-suisse/salaire-minimum-en-vigueur/ ; LU_GUICHET = https://guichet.public.lu/content/guichet/fr/entreprises/ressources-humaines/remuneration/paiement-remunerations/salaire.html ; FR_INFOGOUV = https://www.info.gouv.fr/public/index.php/actualite/le-smic-revalorise-le-1er-juin-2026 ; GOWLING = https://gowlingwlg.com/en/insights-resources/articles/2026/minimum-wage-increases ; CTV = https://www.ctvnews.ca/business/article/minimum-wage-will-rise-in-these-five-provinces/. CALC_A, CALC_B, CALC_EDU = nos calculs, formule en section 6.
