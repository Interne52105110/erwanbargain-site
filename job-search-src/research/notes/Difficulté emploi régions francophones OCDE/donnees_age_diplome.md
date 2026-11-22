# Données par âge et par niveau de diplôme — difficulté de la recherche d'emploi dans les territoires francophones de l'OCDE

*Notes de recherche — extractions réalisées le 22 novembre 2026. Année de base commune : moyennes annuelles 2025 ; mises à jour 2026 signalées lorsqu'elles existent. Fichiers CSV complets déposés à côté de ce fichier : `donnees_age_diplome_eurostat_lfu3rt_grille.csv`, `donnees_age_diplome_eurostat_lfu3rt_long.csv`, `donnees_age_diplome_statcan_1410002001_grille.csv`.*

**Conventions de lecture (valables pour tout le document)**

- Niveaux de diplôme : *faible* = CITE/ISCED 0-2 (au plus brevet / secondaire inférieur ; au Canada : sans diplôme d'études secondaires) ; *moyen* = CITE 3-4 (CAP-BEP-bac ; secondaire supérieur ; au Canada : diplôme d'études secondaires, avec ou sans études postsecondaires partielles) ; *élevé* = CITE 5-8 (supérieur).
- Eurostat : `:` ou cellule vide = valeur non publiée ; `u` = fiabilité faible ; `: (u)` = supprimée pour échantillon trop petit ; `b` = rupture de série ; `d` = définition différente. **Toutes les valeurs françaises 2025 d'Eurostat portent le drapeau `d`** ; dans les tableaux markdown ce drapeau n'est pas répété cellule par cellule (un `(u)` sur une ligne française signifie `du`) ; dans les blocs CSV les drapeaux sont reproduits tels quels.
- Statistique Canada : `(x)` = supprimé (confidentialité / échantillon) ; `..` = non disponible ; `n.c.`/`nc` = non calculable ; `n.d.` = au moins un mois supprimé.
- OCDE : `(m)` = donnée manquante ; `(u)` = fiabilité faible ; `(w)` = inclut une autre catégorie.
- **`[calc]` / `calc` = calcul du rédacteur à partir de valeurs publiées** (jamais une valeur publiée telle quelle). Tout le reste est une valeur publiée, extraite par requête API ou fichier CSV/PDF officiel.
- Régions françaises : codes NUTS 1 (= les 13 régions métropolitaines) ; BE1 = Région de Bruxelles-Capitale, BE3 = Wallonie (BE2 = Flandre, donnée à titre de référence) ; LU00 = Luxembourg ; CH01 = Région lémanique (GE, VD, VS), CH02 = Espace Mittelland (BE, FR, SO, NE, JU).

## Taux de chômage par niveau de diplôme et par tranche d'âge, par région (Eurostat lfst_r_lfu3rt, 2025)

### Takeaway
En 2025, le chômage des peu diplômés (15-74 ans) va de 9,2 % dans l'Espace Mittelland à 25,4 % à Bruxelles, contre 2,9 % à 7,6 % pour les diplômés du supérieur dans les mêmes territoires ; chez les 15-24 ans peu diplômés il atteint 51,5 % à Bruxelles, 40,2 % dans les Hauts-de-France et 39,4 % en Île-de-France, contre 8,8 % en Suisse. La grille région × 3 âges × 3 diplômes est remplie pour la France entière, la Belgique, la Wallonie, la Suisse et les grandes régions françaises, mais de nombreuses cellules sont supprimées en Corse, au Luxembourg et dans les régions moyennes (surtout 55-64 ans × diplôme).

### Cited Findings
- Source unique de cette section : Eurostat, table `lfst_r_lfu3rt` « Taux de chômage par sexe, âge, niveau d'éducation atteint et région NUTS 2 », mise à jour du 30/10/2026, sexe = total, unité = % de la population active — [Eurostat lfst_r_lfu3rt](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfu3rt/default/table?lang=fr).
- Requête API exacte de la grille (2023-2025, 23 territoires, 7 tranches d'âge, 4 niveaux) : <https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/lfst_r_lfu3rt?format=JSON&lang=EN&sex=T&geo=EU27_2020&geo=FR&geo=FR1&geo=FRB&geo=FRC&geo=FRD&geo=FRE&geo=FRF&geo=FRG&geo=FRH&geo=FRI&geo=FRJ&geo=FRK&geo=FRL&geo=FRM&geo=BE&geo=BE1&geo=BE3&geo=BE2&geo=LU00&geo=CH&geo=CH01&geo=CH02&age=Y15-24&age=Y25-34&age=Y35-44&age=Y45-54&age=Y55-64&age=Y_GE25&age=Y15-74&isced11=TOTAL&isced11=ED0-2&isced11=ED3_4&isced11=ED5-8&time=2023&time=2024&time=2025>
- Requête API des effectifs de chômeurs (table `lfst_r_lfu3pers`, utilisée uniquement pour le calcul de la tranche 25-54 ans) : <https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/lfst_r_lfu3pers?format=JSON&lang=EN&sex=T&geo=EU27_2020&geo=FR&geo=FR1&geo=FRB&geo=FRC&geo=FRD&geo=FRE&geo=FRF&geo=FRG&geo=FRH&geo=FRI&geo=FRJ&geo=FRK&geo=FRL&geo=FRM&geo=BE&geo=BE1&geo=BE3&geo=BE2&geo=LU00&geo=CH&geo=CH01&geo=CH02&age=Y15-24&age=Y25-34&age=Y35-44&age=Y45-54&age=Y55-64&age=Y_GE25&age=Y15-74&isced11=TOTAL&isced11=ED0-2&isced11=ED3_4&isced11=ED5-8&time=2023&time=2024&time=2025> — [Eurostat lfst_r_lfu3pers](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfu3pers/default/table?lang=fr)

#### Grille exploitable par machine : taux de chômage (%), territoire × âge × diplôme, 2025 et moyenne 2023-2025

Colonnes : `*_2025` = valeur publiée 2025 ; `*_drapeau` = drapeau Eurostat (`d`, `u`, `du`, vide) ou `calc`/`calc+u` ; `*_moy2023_2025_calc` = [calc] moyenne simple des taux annuels publiés 2023, 2024, 2025 (`*_n_annees` = nombre d'années disponibles ; une moyenne avec n < 3 est fragile). Lignes `Y25-54_calc` = [calc] tranche 25-54 ans reconstituée : somme des chômeurs 25-34, 35-44, 45-54 (lfst_r_lfu3pers) divisée par la somme des actifs reconstitués (chômeurs / taux publié) ; vide si l'une des trois composantes est supprimée ; contrôle : le calcul redonne à 0,1 point près les valeurs nationales 25-54 ans publiées dans `lfsa_urgaed` (France 6,6/14,0/7,1/4,8 ; Belgique 5,4/14,0/6,1/3,5 ; Suisse 4,7/8,8/4,4/4,1). Série annuelle complète 2023-2025 : fichier `donnees_age_diplome_eurostat_lfu3rt_long.csv`. — [Eurostat lfst_r_lfu3rt](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfu3rt/default/table?lang=fr)

```csv
geo,territoire,age,tous_2025,tous_drapeau,faible_2025,faible_drapeau,moyen_2025,moyen_drapeau,eleve_2025,eleve_drapeau,tous_moy2023_2025_calc,tous_n_annees,faible_moy2023_2025_calc,faible_n_annees,moyen_moy2023_2025_calc,moyen_n_annees,eleve_moy2023_2025_calc,eleve_n_annees
EU27_2020,UE-27,Y15-24,15.2,,21.2,,13.2,,12.8,,14.9,3,20.7,3,13.0,3,12.2,3
EU27_2020,UE-27,Y25-54_calc,5.4,calc,12.0,calc,5.1,calc,3.8,calc,5.4,3,11.8,3,5.1,3,3.7,3
EU27_2020,UE-27,Y55-64,4.4,,8.2,,3.8,,3.1,,4.5,3,8.3,3,3.8,3,3.0,3
EU27_2020,UE-27,Y25-34,7.2,,16.8,,6.8,,5.4,,7.1,3,16.0,3,6.8,3,5.2,3
EU27_2020,UE-27,Y35-44,5.0,,12.0,,4.9,,3.2,,5.1,3,11.8,3,4.9,3,3.2,3
EU27_2020,UE-27,Y45-54,4.4,,9.5,,3.9,,2.7,,4.5,3,9.6,3,3.9,3,2.7,3
EU27_2020,UE-27,Y_GE25,5.1,,10.5,,4.7,,3.6,,5.1,3,10.5,3,4.7,3,3.5,3
EU27_2020,UE-27,Y15-74,6.0,,12.1,,5.6,,4.0,,6.0,3,12.0,3,5.6,3,3.9,3
FR,France,Y15-24,19.8,d,33.5,d,19.9,d,13.4,d,18.6,3,32.1,3,18.5,3,12.4,3
FR,France,Y25-54_calc,6.5,calc,14.0,calc,7.1,calc,4.8,calc,6.4,3,13.3,3,7.0,3,4.6,3
FR,France,Y55-64,5.2,d,8.1,d,5.0,d,4.2,d,5.3,3,7.5,3,5.2,3,4.2,3
FR,France,Y25-34,9.1,d,22.0,d,10.1,d,7.0,d,8.7,3,20.2,3,9.9,3,6.5,3
FR,France,Y35-44,5.8,d,14.2,d,6.6,d,3.7,d,5.9,3,13.2,3,6.7,3,3.8,3
FR,France,Y45-54,5.0,d,9.6,d,5.3,d,3.5,d,4.9,3,9.6,3,5.2,3,3.4,3
FR,France,Y_GE25,6.2,d,11.8,d,6.6,d,4.7,d,6.1,3,11.1,3,6.6,3,4.5,3
FR,France,Y15-74,7.7,d,14.7,d,8.4,d,5.3,d,7.5,3,13.9,3,8.2,3,5.1,3
FR1,Ile-de-France,Y15-24,21.2,d,39.4,d,21.4,d,16.6,d,18.6,3,33.6,3,19.6,3,14.0,3
FR1,Ile-de-France,Y25-54_calc,7.9,calc,13.2,calc,10.0,calc,6.3,calc,7.3,3,12.0,3,9.5,3,5.7,3
FR1,Ile-de-France,Y55-64,5.8,d,7.9,d,6.5,d,4.6,d,5.8,3,7.5,3,5.9,3,5.1,3
FR1,Ile-de-France,Y25-34,10.7,d,26.7,d,15.1,d,8.7,d,9.7,3,21.4,3,14.1,3,7.5,3
FR1,Ile-de-France,Y35-44,7.3,d,14.1,d,9.4,d,5.3,d,6.8,3,12.7,3,9.1,3,4.9,3
FR1,Ile-de-France,Y45-54,5.6,d,8.0,d,7.2,d,4.2,d,5.4,3,7.9,3,6.4,3,4.3,3
FR1,Ile-de-France,Y_GE25,7.5,d,11.5,d,9.1,d,6.1,d,7.0,3,10.5,3,8.7,3,5.6,3
FR1,Ile-de-France,Y15-74,8.8,d,13.6,d,11.3,d,6.8,d,8.1,3,12.2,3,10.5,3,6.2,3
FRB,Centre-Val de Loire,Y15-24,18.0,d,26.9,du,17.6,d,,u,17.2,3,26.9,3,15.6,3,16.6,1
FRB,Centre-Val de Loire,Y25-54_calc,4.8,calc+u,,,,,,,4.3,3,,0,5.5,1,,0
FRB,Centre-Val de Loire,Y55-64,3.9,du,,u,,u,,u,4.7,3,,0,5.4,2,,0
FRB,Centre-Val de Loire,Y25-34,6.6,d,,u,5.9,du,6.8,du,5.8,3,,0,5.9,3,6.0,2
FRB,Centre-Val de Loire,Y35-44,3.7,du,,u,,u,,u,4.4,3,,0,5.5,2,4.0,1
FRB,Centre-Val de Loire,Y45-54,4.4,d,,u,,u,4.2,du,3.2,3,,0,4.0,1,4.2,1
FRB,Centre-Val de Loire,Y_GE25,4.6,d,7.0,du,4.1,d,4.4,d,4.4,3,6.0,3,4.5,3,3.8,3
FRB,Centre-Val de Loire,Y15-74,6.1,d,10.4,d,6.0,d,5.1,d,5.8,3,9.5,3,6.0,3,4.6,3
FRC,Bourgogne-Franche-Comte,Y15-24,19.3,d,30.0,du,22.4,d,,u,16.3,3,29.3,2,17.5,3,,0
FRC,Bourgogne-Franche-Comte,Y25-54_calc,6.1,calc,,,6.7,calc+u,,,5.7,3,,0,6.3,2,,0
FRC,Bourgogne-Franche-Comte,Y55-64,5.2,d,,u,7.0,du,,u,4.8,3,,0,6.3,3,,0
FRC,Bourgogne-Franche-Comte,Y25-34,10.0,d,28.9,du,9.8,du,6.1,du,7.8,3,28.9,1,6.9,3,6.1,3
FRC,Bourgogne-Franche-Comte,Y35-44,4.6,d,,u,6.5,du,,u,4.8,3,15.4,2,6.1,2,,0
FRC,Bourgogne-Franche-Comte,Y45-54,4.4,d,,u,4.6,du,,u,5.0,3,,0,4.8,3,4.7,2
FRC,Bourgogne-Franche-Comte,Y_GE25,5.8,d,11.7,d,6.7,d,2.9,d,5.4,3,10.2,3,5.7,3,3.5,3
FRC,Bourgogne-Franche-Comte,Y15-74,7.5,d,14.1,d,8.9,d,3.5,d,6.7,3,12.6,3,7.2,3,4.0,3
FRD,Normandie,Y15-24,19.7,d,34.7,d,18.1,d,12.5,du,17.7,3,33.8,3,15.6,3,12.5,1
FRD,Normandie,Y25-54_calc,6.0,calc,,,6.8,calc+u,,,5.8,3,,0,6.4,3,,0
FRD,Normandie,Y55-64,4.6,d,,u,3.9,du,,u,5.1,3,,0,5.6,3,,0
FRD,Normandie,Y25-34,7.6,d,,u,9.1,d,5.1,du,7.3,3,19.8,1,8.5,3,4.8,3
FRD,Normandie,Y35-44,5.9,d,24.9,du,5.6,du,,u,5.8,3,20.8,2,5.8,3,3.8,2
FRD,Normandie,Y45-54,4.6,d,,u,6.1,du,,u,4.5,3,12.1,1,5.2,3,,0
FRD,Normandie,Y_GE25,5.6,d,11.1,d,6.1,d,3.7,d,5.6,3,10.3,3,6.2,3,3.7,3
FRD,Normandie,Y15-74,7.4,d,15.4,d,7.8,d,4.4,d,7.1,3,14.6,3,7.5,3,4.2,3
FRE,Hauts-de-France,Y15-24,23.2,d,40.2,d,22.6,d,17.1,d,23.0,3,43.3,3,22.9,3,13.4,3
FRE,Hauts-de-France,Y25-54_calc,6.5,calc,13.4,calc+u,7.8,calc,,,7.4,3,15.1,3,8.1,3,5.2,2
FRE,Hauts-de-France,Y55-64,6.1,d,12.3,d,5.5,d,,u,5.4,3,8.2,3,5.8,3,,0
FRE,Hauts-de-France,Y25-34,9.5,d,20.3,d,10.2,d,7.0,d,10.4,3,21.2,3,11.2,3,7.5,3
FRE,Hauts-de-France,Y35-44,4.7,d,12.2,du,5.4,d,2.8,du,6.2,3,14.7,3,6.9,3,3.5,3
FRE,Hauts-de-France,Y45-54,5.5,d,8.7,du,8.2,d,,u,5.8,3,10.9,3,6.7,3,3.7,2
FRE,Hauts-de-France,Y_GE25,6.5,d,12.7,d,7.3,d,3.9,d,7.0,3,12.8,3,7.6,3,4.5,3
FRE,Hauts-de-France,Y15-74,8.5,d,16.7,d,9.5,d,5.1,d,9.0,3,17.0,3,9.9,3,5.3,3
FRF,Grand Est,Y15-24,17.2,d,31.6,d,16.8,d,9.7,du,18.0,3,32.5,3,17.2,3,11.5,3
FRF,Grand Est,Y25-54_calc,5.3,calc,11.8,calc+u,5.9,calc,3.5,calc+u,5.5,3,12.1,3,5.8,3,3.8,3
FRF,Grand Est,Y55-64,5.0,d,7.4,du,4.8,d,,u,5.3,3,7.0,2,5.1,3,6.7,1
FRF,Grand Est,Y25-34,6.9,d,13.3,du,8.4,d,4.8,d,7.2,3,16.0,3,8.1,3,5.0,3
FRF,Grand Est,Y35-44,4.8,d,13.6,du,5.1,d,2.7,du,5.0,3,13.8,3,4.8,3,3.3,3
FRF,Grand Est,Y45-54,4.5,d,9.5,du,4.7,d,2.9,du,4.6,3,8.5,3,5.0,3,3.0,3
FRF,Grand Est,Y_GE25,5.3,d,10.0,d,5.5,d,3.6,d,5.5,3,10.2,3,5.6,3,3.9,3
FRF,Grand Est,Y15-74,6.6,d,13.1,d,7.0,d,4.1,d,6.9,3,13.3,3,7.1,3,4.5,3
FRG,Pays de la Loire,Y15-24,16.1,d,31.5,d,13.7,d,10.3,du,15.0,3,24.7,3,14.4,3,10.2,2
FRG,Pays de la Loire,Y25-54_calc,5.6,calc,,,5.5,calc+u,4.3,calc+u,5.3,3,,0,5.8,3,4.3,1
FRG,Pays de la Loire,Y55-64,4.5,d,,u,4.5,du,,u,4.3,3,,0,4.6,3,,0
FRG,Pays de la Loire,Y25-34,7.8,d,18.7,du,7.6,d,6.5,d,6.9,3,19.0,2,6.6,3,5.7,3
FRG,Pays de la Loire,Y35-44,5.4,d,,u,6.9,d,3.0,du,5.7,3,,0,7.0,3,3.3,3
FRG,Pays de la Loire,Y45-54,4.0,d,10.9,du,2.8,du,3.3,du,3.6,3,10.9,1,4.2,3,3.3,1
FRG,Pays de la Loire,Y_GE25,5.4,d,10.3,d,5.2,d,4.3,d,5.1,3,8.7,3,5.6,3,3.8,3
FRG,Pays de la Loire,Y15-74,6.6,d,14.3,d,6.3,d,4.8,d,6.3,3,11.8,3,6.8,3,4.3,3
FRH,Bretagne,Y15-24,16.4,d,23.5,du,18.8,d,9.6,du,16.5,3,21.8,3,17.1,3,12.9,3
FRH,Bretagne,Y25-54_calc,4.5,calc,,,5.0,calc+u,,,4.4,3,,0,5.0,1,4.2,1
FRH,Bretagne,Y55-64,2.6,du,,u,,u,,u,3.2,3,,0,3.3,1,,0
FRH,Bretagne,Y25-34,8.2,d,,u,9.6,d,5.6,du,7.0,3,,0,6.7,3,5.6,3
FRH,Bretagne,Y35-44,3.2,d,,u,4.3,du,,u,3.4,3,,0,3.9,2,3.3,2
FRH,Bretagne,Y45-54,3.5,d,,u,3.0,du,3.7,du,3.5,3,,0,3.5,2,3.5,2
FRH,Bretagne,Y_GE25,4.1,d,9.3,du,4.1,d,3.3,d,4.1,3,8.1,3,3.8,3,3.7,3
FRH,Bretagne,Y15-74,5.6,d,12.5,d,6.2,d,3.8,d,5.6,3,10.8,3,5.6,3,4.5,3
FRI,Nouvelle-Aquitaine,Y15-24,18.1,d,30.5,d,18.6,d,11.8,d,17.3,3,26.8,3,18.1,3,11.0,3
FRI,Nouvelle-Aquitaine,Y25-54_calc,6.3,calc,,,6.9,calc,5.0,calc,5.8,3,11.7,2,6.5,3,3.9,3
FRI,Nouvelle-Aquitaine,Y55-64,4.8,d,,u,5.7,d,3.2,du,5.4,3,8.1,2,6.1,3,3.4,3
FRI,Nouvelle-Aquitaine,Y25-34,8.8,d,19.5,du,9.0,d,7.1,d,7.9,3,20.0,3,9.4,3,4.8,3
FRI,Nouvelle-Aquitaine,Y35-44,5.8,d,11.9,du,6.6,d,4.4,d,5.4,3,11.2,3,6.2,3,3.9,3
FRI,Nouvelle-Aquitaine,Y45-54,4.5,d,,u,5.4,d,3.5,d,4.3,3,7.4,2,4.7,3,3.1,3
FRI,Nouvelle-Aquitaine,Y_GE25,5.9,d,9.3,d,6.4,d,4.7,d,5.6,3,9.8,3,6.3,3,3.8,3
FRI,Nouvelle-Aquitaine,Y15-74,7.2,d,12.3,d,7.9,d,5.2,d,6.9,3,12.5,3,7.8,3,4.4,3
FRJ,Occitanie,Y15-24,20.4,d,36.6,d,20.9,d,13.3,d,19.8,3,35.8,3,20.4,3,13.0,3
FRJ,Occitanie,Y25-54_calc,6.1,calc,12.9,calc+u,7.5,calc,4.0,calc,6.3,3,12.9,3,7.5,3,4.4,3
FRJ,Occitanie,Y55-64,6.4,d,16.2,d,4.3,d,5.4,d,5.7,3,11.2,3,4.2,3,5.4,3
FRJ,Occitanie,Y25-34,8.8,d,21.9,du,10.5,d,6.1,d,8.6,3,19.0,3,10.0,3,6.4,3
FRJ,Occitanie,Y35-44,5.4,d,13.6,du,7.3,d,3.0,d,5.9,3,11.8,3,7.7,3,3.9,3
FRJ,Occitanie,Y45-54,4.6,d,7.4,du,5.6,d,3.3,d,4.9,3,10.7,3,5.4,3,3.0,3
FRJ,Occitanie,Y_GE25,6.0,d,13.1,d,6.6,d,4.2,d,6.1,3,11.8,3,6.6,3,4.5,3
FRJ,Occitanie,Y15-74,7.6,d,17.0,d,8.4,d,5.0,d,7.5,3,15.2,3,8.3,3,5.2,3
FRK,Auvergne-Rhone-Alpes,Y15-24,17.3,d,28.3,d,17.6,d,11.7,d,16.6,3,30.1,3,15.8,3,11.3,3
FRK,Auvergne-Rhone-Alpes,Y25-54_calc,5.9,calc,15.5,calc+u,6.0,calc,4.4,calc,5.9,3,13.9,3,6.3,3,4.2,3
FRK,Auvergne-Rhone-Alpes,Y55-64,5.3,d,6.4,du,5.0,d,5.3,d,4.8,3,6.6,3,4.9,3,4.0,3
FRK,Auvergne-Rhone-Alpes,Y25-34,7.5,d,17.2,du,8.2,d,6.1,d,8.0,3,19.3,3,9.3,3,5.8,3
FRK,Auvergne-Rhone-Alpes,Y35-44,5.7,d,19.2,d,6.5,d,3.4,d,5.3,3,13.8,3,6.2,3,3.6,3
FRK,Auvergne-Rhone-Alpes,Y45-54,4.5,d,11.8,d,3.8,d,3.5,d,4.4,3,10.5,3,4.2,3,3.1,3
FRK,Auvergne-Rhone-Alpes,Y_GE25,5.7,d,12.1,d,5.7,d,4.5,d,5.6,3,11.3,3,5.9,3,4.2,3
FRK,Auvergne-Rhone-Alpes,Y15-74,7.0,d,14.7,d,7.4,d,5.0,d,6.9,3,14.3,3,7.3,3,4.7,3
FRL,Provence-Alpes-Cote d'Azur,Y15-24,22.6,d,34.0,d,22.8,d,14.3,du,18.3,3,30.6,3,17.6,3,13.9,2
FRL,Provence-Alpes-Cote d'Azur,Y25-54_calc,6.3,calc,,,6.1,calc,5.0,calc,6.5,3,11.2,1,7.3,3,4.8,3
FRL,Provence-Alpes-Cote d'Azur,Y55-64,4.0,d,,u,4.7,du,3.3,du,4.5,3,7.5,2,4.9,3,3.5,2
FRL,Provence-Alpes-Cote d'Azur,Y25-34,8.2,d,27.7,du,8.5,d,5.4,d,9.1,3,21.6,2,10.0,3,7.1,3
FRL,Provence-Alpes-Cote d'Azur,Y35-44,5.6,d,,u,5.8,d,5.0,d,5.6,3,9.7,2,6.8,3,4.0,3
FRL,Provence-Alpes-Cote d'Azur,Y45-54,5.3,d,9.9,du,4.5,d,4.7,d,5.3,3,9.3,3,5.6,3,4.0,3
FRL,Provence-Alpes-Cote d'Azur,Y_GE25,5.7,d,9.5,d,5.8,d,4.7,d,6.0,3,9.3,3,6.6,3,4.5,3
FRL,Provence-Alpes-Cote d'Azur,Y15-74,7.3,d,12.9,d,7.8,d,5.2,d,7.1,3,11.9,3,7.9,3,4.9,3
FRM,Corse,Y15-24,,u,,u,,u,,u,46.0,1,,0,,0,,0
FRM,Corse,Y25-54_calc,,,,,,,,,,0,,0,,0,,0
FRM,Corse,Y55-64,,u,,u,,u,,u,,0,,0,,0,,0
FRM,Corse,Y25-34,,u,,u,,u,,u,,0,,0,,0,,0
FRM,Corse,Y35-44,,u,,u,,u,,u,,0,,0,,0,,0
FRM,Corse,Y45-54,,u,,u,,u,,u,,0,,0,,0,,0
FRM,Corse,Y_GE25,5.8,du,,u,,u,,u,5.5,2,,0,,0,,0
FRM,Corse,Y15-74,7.3,du,,u,10.7,du,,u,7.1,3,15.4,1,9.2,2,,0
BE,Belgique,Y15-24,17.4,,28.5,,14.1,,10.6,,17.0,3,27.2,3,14.7,3,10.2,3
BE,Belgique,Y25-54_calc,5.4,calc,14.0,calc,6.1,calc,3.5,calc,5.1,3,13.0,3,5.9,3,3.1,3
BE,Belgique,Y55-64,4.1,,6.3,,4.1,,3.5,,3.7,3,6.3,3,3.8,3,2.6,3
BE,Belgique,Y25-34,7.6,,20.5,,9.1,,5.1,,7.2,3,18.9,3,8.9,3,4.3,3
BE,Belgique,Y35-44,4.5,,12.7,,5.0,,2.8,,4.3,3,11.9,3,4.9,3,2.5,3
BE,Belgique,Y45-54,4.2,,10.7,,4.5,,2.6,,3.8,3,9.6,3,4.0,3,2.4,3
BE,Belgique,Y_GE25,5.1,,11.7,,5.6,,3.5,,4.8,3,11.0,3,5.4,3,3.0,3
BE,Belgique,Y15-74,6.2,,15.2,,6.7,,3.7,,5.8,3,13.8,3,6.5,3,3.3,3
BE1,Bruxelles-Capitale,Y15-24,30.5,,51.5,,22.9,u,,u,26.6,3,45.1,3,21.8,3,,0
BE1,Bruxelles-Capitale,Y25-54_calc,11.7,calc,22.8,calc+u,19.2,calc+u,7.3,calc+u,10.9,3,21.2,3,16.1,3,7.1,3
BE1,Bruxelles-Capitale,Y55-64,10.5,,19.7,u,9.6,u,8.1,u,9.9,3,20.9,3,10.6,2,6.9,2
BE1,Bruxelles-Capitale,Y25-34,12.8,,19.5,u,22.5,,8.8,,11.9,3,21.8,3,19.3,3,8.0,3
BE1,Bruxelles-Capitale,Y35-44,11.7,,29.5,,19.9,,6.5,,10.7,3,23.3,3,15.2,3,6.8,3
BE1,Bruxelles-Capitale,Y45-54,10.3,,18.9,u,14.7,u,6.2,u,10.0,3,18.9,3,13.1,3,6.0,3
BE1,Bruxelles-Capitale,Y_GE25,11.4,,21.7,,17.2,,7.3,,10.7,3,20.9,3,14.8,3,6.8,3
BE1,Bruxelles-Capitale,Y15-74,12.6,,25.4,,18.0,,7.6,,11.7,3,23.5,3,15.7,3,7.0,3
BE3,Wallonie,Y15-24,22.2,,34.4,,17.0,,18.2,u,22.5,3,34.7,3,19.4,3,15.7,3
BE3,Wallonie,Y25-54_calc,6.6,calc,16.6,calc,7.5,calc,3.5,calc,6.9,3,17.4,3,7.9,3,3.4,3
BE3,Wallonie,Y55-64,6.1,,6.9,u,7.5,,4.6,,5.1,3,6.8,3,6.5,3,3.4,3
BE3,Wallonie,Y25-34,9.9,,27.5,,11.8,,4.8,,10.5,3,26.3,3,12.3,3,5.1,3
BE3,Wallonie,Y35-44,5.3,,13.7,,6.1,,2.6,,5.7,3,16.1,3,6.6,3,2.5,3
BE3,Wallonie,Y45-54,4.7,,10.6,,4.7,,3.2,,4.7,3,10.8,3,4.9,3,2.8,3
BE3,Wallonie,Y_GE25,6.4,,14.0,,7.4,,3.7,,6.5,3,14.7,3,7.6,3,3.4,3
BE3,Wallonie,Y15-74,7.8,,17.7,,8.7,,4.1,,7.8,3,17.6,3,9.0,3,3.8,3
BE2,Flandre (reference),Y15-24,13.5,,22.7,,11.4,,6.8,u,13.3,3,21.7,3,11.6,3,7.5,3
BE2,Flandre (reference),Y25-54_calc,3.6,calc,9.4,calc+u,3.9,calc,2.5,calc,3.1,3,7.5,3,3.6,3,2.0,3
BE2,Flandre (reference),Y55-64,2.3,,,u,2.2,,2.3,,2.1,3,2.9,2,2.2,3,1.8,3
BE2,Flandre (reference),Y25-34,5.3,,14.3,,5.8,,4.1,,4.6,3,12.0,3,5.5,3,2.9,3
BE2,Flandre (reference),Y35-44,2.7,,6.9,u,3.0,,1.9,,2.4,3,5.7,3,2.9,3,1.5,3
BE2,Flandre (reference),Y45-54,2.9,,8.6,,3.2,,1.6,,2.3,3,5.9,3,2.5,3,1.5,3
BE2,Flandre (reference),Y_GE25,3.3,,7.5,,3.6,,2.5,,2.9,3,6.1,3,3.3,3,1.9,3
BE2,Flandre (reference),Y15-74,4.3,,11.2,,4.5,,2.7,,3.8,3,9.2,3,4.2,3,2.2,3
LU00,Luxembourg,Y15-24,19.4,,,u,,u,,u,19.9,3,29.1,2,21.2,1,,0
LU00,Luxembourg,Y25-54_calc,5.8,calc,,,,,5.2,calc+u,5.1,3,,0,,0,4.9,2
LU00,Luxembourg,Y55-64,4.5,u,,u,,u,,u,4.5,1,,0,,0,,0
LU00,Luxembourg,Y25-34,6.1,,,u,,u,5.0,u,5.9,3,,0,8.1,1,4.7,3
LU00,Luxembourg,Y35-44,5.8,,,u,,u,5.4,u,4.6,3,,0,,0,4.8,2
LU00,Luxembourg,Y45-54,5.4,,,u,,u,5.3,u,4.7,3,,0,,0,5.2,2
LU00,Luxembourg,Y_GE25,5.5,,8.4,u,5.5,,5.0,,4.9,3,6.9,3,5.1,3,4.4,3
LU00,Luxembourg,Y15-74,6.5,,10.9,,6.8,,5.4,,6.0,3,10.3,3,6.5,3,4.7,3
CH,Suisse,Y15-24,8.8,,8.8,,9.0,,7.4,u,8.3,3,9.2,3,7.7,3,8.0,3
CH,Suisse,Y25-54_calc,4.8,calc,8.8,calc,4.4,calc,4.0,calc,4.2,3,8.2,3,3.7,3,3.6,3
CH,Suisse,Y55-64,3.6,,6.2,,3.3,,3.1,,3.5,3,7.0,3,2.8,3,2.9,3
CH,Suisse,Y25-34,5.8,,13.3,,6.0,,4.5,,4.9,3,11.8,3,5.0,3,3.8,3
CH,Suisse,Y35-44,4.4,,7.8,,3.7,,4.0,,4.0,3,7.7,3,3.1,3,3.6,3
CH,Suisse,Y45-54,4.1,,7.1,,3.5,,3.6,,3.7,3,6.7,3,3.0,3,3.3,3
CH,Suisse,Y_GE25,4.3,,7.8,,4.0,,3.8,,3.9,3,7.6,3,3.4,3,3.4,3
CH,Suisse,Y15-74,4.9,,8.2,,4.8,,3.9,,4.5,3,8.2,3,4.1,3,3.5,3
CH01,Region lemanique,Y15-24,14.7,,16.9,,14.0,,12.4,u,15.3,3,16.5,3,14.7,3,13.9,3
CH01,Region lemanique,Y25-54_calc,7.4,calc,10.5,calc+u,7.4,calc+u,6.6,calc,6.5,3,9.5,3,6.1,3,5.9,3
CH01,Region lemanique,Y55-64,5.5,,7.1,u,5.2,u,5.2,u,5.7,3,8.8,3,4.8,3,4.9,3
CH01,Region lemanique,Y25-34,9.1,,14.0,u,10.5,,7.1,,7.6,3,13.4,3,7.9,3,6.3,3
CH01,Region lemanique,Y35-44,6.4,,9.4,u,4.8,u,6.5,,6.2,3,9.3,3,5.0,3,6.0,3
CH01,Region lemanique,Y45-54,6.9,,9.2,u,6.7,u,6.0,,5.7,3,7.4,3,5.2,3,5.4,3
CH01,Region lemanique,Y_GE25,6.8,,9.3,,6.7,,6.1,,6.2,3,9.0,3,5.6,3,5.6,3
CH01,Region lemanique,Y15-74,7.8,,11.1,,7.9,,6.4,,7.3,3,10.8,3,7.1,3,6.0,3
CH02,Espace Mittelland,Y15-24,8.5,,9.9,,7.5,,,u,7.6,3,9.4,3,6.3,3,,0
CH02,Espace Mittelland,Y25-54_calc,4.3,calc,10.3,calc+u,4.3,calc+u,2.9,calc+u,3.8,3,9.0,3,3.5,3,2.8,3
CH02,Espace Mittelland,Y55-64,3.6,,6.9,u,3.4,u,2.6,u,3.1,3,7.0,3,2.6,3,2.3,3
CH02,Espace Mittelland,Y25-34,5.8,,13.6,u,6.2,,4.2,u,4.7,3,11.7,3,5.0,3,3.4,3
CH02,Espace Mittelland,Y35-44,3.8,,10.2,u,3.9,u,2.2,u,3.5,3,8.2,3,3.0,3,2.8,3
CH02,Espace Mittelland,Y45-54,3.3,,8.3,u,2.7,u,2.3,u,3.1,3,8.0,3,2.3,3,2.1,3
CH02,Espace Mittelland,Y_GE25,4.0,,8.8,,3.9,,2.7,,3.5,3,7.9,3,3.1,3,2.6,3
CH02,Espace Mittelland,Y15-74,4.6,,9.2,,4.4,,2.9,,4.0,3,8.4,3,3.6,3,2.8,3
```

#### Tableau lisible — taux de chômage 2025 (%) — 15-74 ans (ensemble de la population active) — [Eurostat lfst_r_lfu3rt](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfu3rt/default/table?lang=fr)

| Territoire | Tous niveaux | Faible (CITE 0-2) | Moyen (CITE 3-4) | Élevé (CITE 5-8) |
|---|---|---|---|---|
| UE-27 (EU27_2020) | 6.0 | 12.1 | 5.6 | 4.0 |
| France (FR) | 7.7 | 14.7 | 8.4 | 5.3 |
| Île-de-France (FR1) | 8.8 | 13.6 | 11.3 | 6.8 |
| Centre-Val de Loire (FRB) | 6.1 | 10.4 | 6.0 | 5.1 |
| Bourgogne-Franche-Comté (FRC) | 7.5 | 14.1 | 8.9 | 3.5 |
| Normandie (FRD) | 7.4 | 15.4 | 7.8 | 4.4 |
| Hauts-de-France (FRE) | 8.5 | 16.7 | 9.5 | 5.1 |
| Grand Est (FRF) | 6.6 | 13.1 | 7.0 | 4.1 |
| Pays de la Loire (FRG) | 6.6 | 14.3 | 6.3 | 4.8 |
| Bretagne (FRH) | 5.6 | 12.5 | 6.2 | 3.8 |
| Nouvelle-Aquitaine (FRI) | 7.2 | 12.3 | 7.9 | 5.2 |
| Occitanie (FRJ) | 7.6 | 17.0 | 8.4 | 5.0 |
| Auvergne-Rhône-Alpes (FRK) | 7.0 | 14.7 | 7.4 | 5.0 |
| Provence-Alpes-Côte d'Azur (FRL) | 7.3 | 12.9 | 7.8 | 5.2 |
| Corse (FRM) | 7.3 (u) | : (u) | 10.7 (u) | : (u) |
| Belgique (BE) | 6.2 | 15.2 | 6.7 | 3.7 |
| Bruxelles-Capitale (BE1) | 12.6 | 25.4 | 18.0 | 7.6 |
| Wallonie (BE3) | 7.8 | 17.7 | 8.7 | 4.1 |
| Flandre (réf.) (BE2) | 4.3 | 11.2 | 4.5 | 2.7 |
| Luxembourg (LU = LU00) | 6.5 | 10.9 | 6.8 | 5.4 |
| Suisse (CH) | 4.9 | 8.2 | 4.8 | 3.9 |
| Région lémanique (CH01) | 7.8 | 11.1 | 7.9 | 6.4 |
| Espace Mittelland (CH02) | 4.6 | 9.2 | 4.4 | 2.9 |

#### Tableau lisible — taux de chômage 2025 (%) — 15-24 ans — [Eurostat lfst_r_lfu3rt](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfu3rt/default/table?lang=fr)

| Territoire | Tous niveaux | Faible (CITE 0-2) | Moyen (CITE 3-4) | Élevé (CITE 5-8) |
|---|---|---|---|---|
| UE-27 (EU27_2020) | 15.2 | 21.2 | 13.2 | 12.8 |
| France (FR) | 19.8 | 33.5 | 19.9 | 13.4 |
| Île-de-France (FR1) | 21.2 | 39.4 | 21.4 | 16.6 |
| Centre-Val de Loire (FRB) | 18.0 | 26.9 (u) | 17.6 | : (u) |
| Bourgogne-Franche-Comté (FRC) | 19.3 | 30.0 (u) | 22.4 | : (u) |
| Normandie (FRD) | 19.7 | 34.7 | 18.1 | 12.5 (u) |
| Hauts-de-France (FRE) | 23.2 | 40.2 | 22.6 | 17.1 |
| Grand Est (FRF) | 17.2 | 31.6 | 16.8 | 9.7 (u) |
| Pays de la Loire (FRG) | 16.1 | 31.5 | 13.7 | 10.3 (u) |
| Bretagne (FRH) | 16.4 | 23.5 (u) | 18.8 | 9.6 (u) |
| Nouvelle-Aquitaine (FRI) | 18.1 | 30.5 | 18.6 | 11.8 |
| Occitanie (FRJ) | 20.4 | 36.6 | 20.9 | 13.3 |
| Auvergne-Rhône-Alpes (FRK) | 17.3 | 28.3 | 17.6 | 11.7 |
| Provence-Alpes-Côte d'Azur (FRL) | 22.6 | 34.0 | 22.8 | 14.3 (u) |
| Corse (FRM) | : (u) | : (u) | : (u) | : (u) |
| Belgique (BE) | 17.4 | 28.5 | 14.1 | 10.6 |
| Bruxelles-Capitale (BE1) | 30.5 | 51.5 | 22.9 (u) | : (u) |
| Wallonie (BE3) | 22.2 | 34.4 | 17.0 | 18.2 (u) |
| Flandre (réf.) (BE2) | 13.5 | 22.7 | 11.4 | 6.8 (u) |
| Luxembourg (LU = LU00) | 19.4 | : (u) | : (u) | : (u) |
| Suisse (CH) | 8.8 | 8.8 | 9.0 | 7.4 (u) |
| Région lémanique (CH01) | 14.7 | 16.9 | 14.0 | 12.4 (u) |
| Espace Mittelland (CH02) | 8.5 | 9.9 | 7.5 | : (u) |

#### Tableau lisible — taux de chômage 2025 (%) — 25-34 ans — [Eurostat lfst_r_lfu3rt](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfu3rt/default/table?lang=fr)

| Territoire | Tous niveaux | Faible (CITE 0-2) | Moyen (CITE 3-4) | Élevé (CITE 5-8) |
|---|---|---|---|---|
| UE-27 (EU27_2020) | 7.2 | 16.8 | 6.8 | 5.4 |
| France (FR) | 9.1 | 22.0 | 10.1 | 7.0 |
| Île-de-France (FR1) | 10.7 | 26.7 | 15.1 | 8.7 |
| Centre-Val de Loire (FRB) | 6.6 | : (u) | 5.9 (u) | 6.8 (u) |
| Bourgogne-Franche-Comté (FRC) | 10.0 | 28.9 (u) | 9.8 (u) | 6.1 (u) |
| Normandie (FRD) | 7.6 | : (u) | 9.1 | 5.1 (u) |
| Hauts-de-France (FRE) | 9.5 | 20.3 | 10.2 | 7.0 |
| Grand Est (FRF) | 6.9 | 13.3 (u) | 8.4 | 4.8 |
| Pays de la Loire (FRG) | 7.8 | 18.7 (u) | 7.6 | 6.5 |
| Bretagne (FRH) | 8.2 | : (u) | 9.6 | 5.6 (u) |
| Nouvelle-Aquitaine (FRI) | 8.8 | 19.5 (u) | 9.0 | 7.1 |
| Occitanie (FRJ) | 8.8 | 21.9 (u) | 10.5 | 6.1 |
| Auvergne-Rhône-Alpes (FRK) | 7.5 | 17.2 (u) | 8.2 | 6.1 |
| Provence-Alpes-Côte d'Azur (FRL) | 8.2 | 27.7 (u) | 8.5 | 5.4 |
| Corse (FRM) | : (u) | : (u) | : (u) | : (u) |
| Belgique (BE) | 7.6 | 20.5 | 9.1 | 5.1 |
| Bruxelles-Capitale (BE1) | 12.8 | 19.5 (u) | 22.5 | 8.8 |
| Wallonie (BE3) | 9.9 | 27.5 | 11.8 | 4.8 |
| Flandre (réf.) (BE2) | 5.3 | 14.3 | 5.8 | 4.1 |
| Luxembourg (LU = LU00) | 6.1 | : (u) | : (u) | 5.0 (u) |
| Suisse (CH) | 5.8 | 13.3 | 6.0 | 4.5 |
| Région lémanique (CH01) | 9.1 | 14.0 (u) | 10.5 | 7.1 |
| Espace Mittelland (CH02) | 5.8 | 13.6 (u) | 6.2 | 4.2 (u) |

#### Tableau lisible — taux de chômage 2025 (%) — 55-64 ans — [Eurostat lfst_r_lfu3rt](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfu3rt/default/table?lang=fr)

| Territoire | Tous niveaux | Faible (CITE 0-2) | Moyen (CITE 3-4) | Élevé (CITE 5-8) |
|---|---|---|---|---|
| UE-27 (EU27_2020) | 4.4 | 8.2 | 3.8 | 3.1 |
| France (FR) | 5.2 | 8.1 | 5.0 | 4.2 |
| Île-de-France (FR1) | 5.8 | 7.9 | 6.5 | 4.6 |
| Centre-Val de Loire (FRB) | 3.9 (u) | : (u) | : (u) | : (u) |
| Bourgogne-Franche-Comté (FRC) | 5.2 | : (u) | 7.0 (u) | : (u) |
| Normandie (FRD) | 4.6 | : (u) | 3.9 (u) | : (u) |
| Hauts-de-France (FRE) | 6.1 | 12.3 | 5.5 | : (u) |
| Grand Est (FRF) | 5.0 | 7.4 (u) | 4.8 | : (u) |
| Pays de la Loire (FRG) | 4.5 | : (u) | 4.5 (u) | : (u) |
| Bretagne (FRH) | 2.6 (u) | : (u) | : (u) | : (u) |
| Nouvelle-Aquitaine (FRI) | 4.8 | : (u) | 5.7 | 3.2 (u) |
| Occitanie (FRJ) | 6.4 | 16.2 | 4.3 | 5.4 |
| Auvergne-Rhône-Alpes (FRK) | 5.3 | 6.4 (u) | 5.0 | 5.3 |
| Provence-Alpes-Côte d'Azur (FRL) | 4.0 | : (u) | 4.7 (u) | 3.3 (u) |
| Corse (FRM) | : (u) | : (u) | : (u) | : (u) |
| Belgique (BE) | 4.1 | 6.3 | 4.1 | 3.5 |
| Bruxelles-Capitale (BE1) | 10.5 | 19.7 (u) | 9.6 (u) | 8.1 (u) |
| Wallonie (BE3) | 6.1 | 6.9 (u) | 7.5 | 4.6 |
| Flandre (réf.) (BE2) | 2.3 | : (u) | 2.2 | 2.3 |
| Luxembourg (LU = LU00) | 4.5 (u) | : (u) | : (u) | : (u) |
| Suisse (CH) | 3.6 | 6.2 | 3.3 | 3.1 |
| Région lémanique (CH01) | 5.5 | 7.1 (u) | 5.2 (u) | 5.2 (u) |
| Espace Mittelland (CH02) | 3.6 | 6.9 (u) | 3.4 (u) | 2.6 (u) |

#### Tableau lisible — taux de chômage 2025 (%) — 25 ans et plus — [Eurostat lfst_r_lfu3rt](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfu3rt/default/table?lang=fr)

| Territoire | Tous niveaux | Faible (CITE 0-2) | Moyen (CITE 3-4) | Élevé (CITE 5-8) |
|---|---|---|---|---|
| UE-27 (EU27_2020) | 5.1 | 10.5 | 4.7 | 3.6 |
| France (FR) | 6.2 | 11.8 | 6.6 | 4.7 |
| Île-de-France (FR1) | 7.5 | 11.5 | 9.1 | 6.1 |
| Centre-Val de Loire (FRB) | 4.6 | 7.0 (u) | 4.1 | 4.4 |
| Bourgogne-Franche-Comté (FRC) | 5.8 | 11.7 | 6.7 | 2.9 |
| Normandie (FRD) | 5.6 | 11.1 | 6.1 | 3.7 |
| Hauts-de-France (FRE) | 6.5 | 12.7 | 7.3 | 3.9 |
| Grand Est (FRF) | 5.3 | 10.0 | 5.5 | 3.6 |
| Pays de la Loire (FRG) | 5.4 | 10.3 | 5.2 | 4.3 |
| Bretagne (FRH) | 4.1 | 9.3 (u) | 4.1 | 3.3 |
| Nouvelle-Aquitaine (FRI) | 5.9 | 9.3 | 6.4 | 4.7 |
| Occitanie (FRJ) | 6.0 | 13.1 | 6.6 | 4.2 |
| Auvergne-Rhône-Alpes (FRK) | 5.7 | 12.1 | 5.7 | 4.5 |
| Provence-Alpes-Côte d'Azur (FRL) | 5.7 | 9.5 | 5.8 | 4.7 |
| Corse (FRM) | 5.8 (u) | : (u) | : (u) | : (u) |
| Belgique (BE) | 5.1 | 11.7 | 5.6 | 3.5 |
| Bruxelles-Capitale (BE1) | 11.4 | 21.7 | 17.2 | 7.3 |
| Wallonie (BE3) | 6.4 | 14.0 | 7.4 | 3.7 |
| Flandre (réf.) (BE2) | 3.3 | 7.5 | 3.6 | 2.5 |
| Luxembourg (LU = LU00) | 5.5 | 8.4 (u) | 5.5 | 5.0 |
| Suisse (CH) | 4.3 | 7.8 | 4.0 | 3.8 |
| Région lémanique (CH01) | 6.8 | 9.3 | 6.7 | 6.1 |
| Espace Mittelland (CH02) | 4.0 | 8.8 | 3.9 | 2.7 |

- Peu diplômés, 15-74 ans, 2025 : Bruxelles 25,4 %, Wallonie 17,7 %, Occitanie 17,0 %, Hauts-de-France 16,7 %, France 14,7 %, Région lémanique 11,1 %, Luxembourg 10,9 %, Espace Mittelland 9,2 %, Suisse 8,2 % — [Eurostat lfst_r_lfu3rt](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfu3rt/default/table?lang=fr)
- Diplômés du supérieur, 15-74 ans, 2025 : Bruxelles 7,6 %, Île-de-France 6,8 %, Région lémanique 6,4 %, Luxembourg 5,4 %, France 5,3 %, Wallonie 4,1 %, Suisse 3,9 %, Bourgogne-Franche-Comté 3,5 %, Espace Mittelland 2,9 % — [Eurostat lfst_r_lfu3rt](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfu3rt/default/table?lang=fr)
- Jeunes de 15-24 ans, tous diplômes, 2025 : Bruxelles 30,5 %, Hauts-de-France 23,2 %, PACA 22,6 %, Wallonie 22,2 %, Île-de-France 21,2 %, France 19,8 %, Luxembourg 19,4 %, Région lémanique 14,7 %, Suisse 8,8 %, Espace Mittelland 8,5 % — [Eurostat lfst_r_lfu3rt](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfu3rt/default/table?lang=fr)
- Seniors de 55-64 ans, tous diplômes, 2025 : Bruxelles 10,5 %, Occitanie 6,4 %, Wallonie 6,1 %, Hauts-de-France 6,1 %, Île-de-France 5,8 %, Région lémanique 5,5 %, France 5,2 %, Luxembourg 4,5 % (u), Espace Mittelland 3,6 %, Bretagne 2,6 % (u) — [Eurostat lfst_r_lfu3rt](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfu3rt/default/table?lang=fr)
- À Bruxelles, les 25-34 ans de niveau moyen (CITE 3-4) ont un taux de chômage de 22,5 % et les 35-44 ans peu diplômés de 29,5 % ; en Wallonie les 25-34 ans peu diplômés sont à 27,5 % — [Eurostat lfst_r_lfu3rt](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfu3rt/default/table?lang=fr)

### Inferences
- [calc] Rapport « taux de chômage des peu diplômés / des diplômés du supérieur » (15-74 ans, 2025) : Wallonie 4,3 ; Belgique 4,1 ; Bruxelles 3,3 ; Espace Mittelland 3,2 ; UE-27 3,0 ; France 2,8 ; Suisse 2,1 ; Île-de-France 2,0 ; Luxembourg 2,0 ; Région lémanique 1,7. Le diplôme « protège » relativement plus en Wallonie et dans l'Espace Mittelland qu'en Région lémanique, au Luxembourg ou en Île-de-France, où même les diplômés du supérieur ont un chômage de 5 à 7 %.
- L'effet d'âge est aussi massif que l'effet de diplôme : en France, un jeune de 15-24 ans diplômé du supérieur a un taux de chômage (13,4 %) supérieur à celui d'un 45-54 ans peu diplômé (9,6 %). La Suisse fait exception par la faiblesse de l'écart entre jeunes et adultes.
- La Région lémanique se distingue du reste de la Suisse à tous les profils (7,8 % contre 4,9 % au total ; 6,4 % contre 3,9 % pour le supérieur), ce qui la rapproche des niveaux français.
- Pour un site web, la grille 3 × 3 la plus robuste combine : 15-24 ans (publié), 25-54 ans ([calc], ou à défaut « 25 ans et plus » publié) et 55-64 ans (publié), avec repli sur la moyenne 2023-2025 puis sur le niveau national lorsque la cellule régionale est supprimée.

### Gaps
- Corse : presque toutes les cellules âge × diplôme sont supprimées (`: (u)`), y compris le taux global des 15-24 ans en 2025 ; seuls le total 15-74 ans (7,3 %, du) et le niveau moyen (10,7 %, du) sont publiés ; la moyenne 2023-2025 ne comble pas ces trous.
- Luxembourg : les croisements diplôme × tranche d'âge décennale sont presque tous supprimés ; seules les tranches larges (15-74, ≥ 25 ans) sont exploitables par diplôme.
- Régions françaises de taille moyenne : les cellules « peu diplômés » et « supérieur » des tranches 35-44, 45-54 et 55-64 ans sont souvent supprimées ou de faible fiabilité.
- Eurostat ne publie pas au niveau régional la tranche 25-49/25-54 pour le chômage par diplôme ; la valeur 25-54 ans de la grille est un calcul du rédacteur (erreur d'arrondi de l'ordre de 0,1 à 0,3 point, davantage pour les petites cellules).

## Taux d'emploi par âge et par diplôme, par région (dont les 55-64 ans)

### Takeaway
Le taux d'emploi des 25-54 ans peu diplômés n'est que de 45,4 % à Bruxelles et 48,9 % en Wallonie (59,6 % en France, 68,7 % en Région lémanique, 72,6 % au Luxembourg), alors que celui des diplômés du supérieur dépasse 83 % partout. Pour les 55-64 ans, le Luxembourg (48,9 %), la Wallonie (54,7 %) et les Hauts-de-France (55,7 %) sont très en dessous de l'Espace Mittelland (76,6 %).

### Cited Findings
- Taux d'emploi par tranche d'âge et région, 2025 (table `lfst_r_lfe2emprt`, maj 30/10/2026) — [Eurostat lfst_r_lfe2emprt](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfe2emprt/default/table?lang=fr). Requête API : <https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/lfst_r_lfe2emprt?format=JSON&lang=EN&sex=T&geo=EU27_2020&geo=FR&geo=FR1&geo=FRB&geo=FRC&geo=FRD&geo=FRE&geo=FRF&geo=FRG&geo=FRH&geo=FRI&geo=FRJ&geo=FRK&geo=FRL&geo=FRM&geo=BE&geo=BE1&geo=BE3&geo=BE2&geo=LU&geo=LU00&geo=CH&geo=CH01&geo=CH02&time=2025&age=Y15-24&age=Y25-34&age=Y35-44&age=Y45-54&age=Y55-64&age=Y20-64&age=Y15-64>

#### Taux d'emploi 2025 (%) par tranche d'âge, tous diplômes

| Territoire | 15-24 ans | 25-34 ans | 35-44 ans | 45-54 ans | 55-64 ans | 20-64 ans | 15-64 ans |
|---|---|---|---|---|---|---|---|
| UE-27 (EU27_2020) | 34.5 | 79.6 | 84.1 | 83.8 | 66.4 | 76.1 | 71.0 |
| France (FR) | 34.5 | 79.7 | 84.4 | 84.4 | 61.7 | 75.4 | 69.3 |
| Île-de-France (FR1) | 29.8 | 79.3 | 83.4 | 84.9 | 70.0 | 76.5 | 69.8 |
| Centre-Val de Loire (FRB) | 37.2 | 83.0 | 89.4 | 87.3 | 63.1 | 77.9 | 71.6 |
| Bourgogne-Franche-Comté (FRC) | 36.4 | 79.9 | 85.5 | 85.2 | 58.1 | 74.7 | 68.4 |
| Normandie (FRD) | 37.3 | 83.8 | 86.7 | 84.2 | 58.9 | 75.8 | 69.8 |
| Hauts-de-France (FRE) | 35.5 | 78.0 | 84.0 | 80.4 | 55.7 | 72.6 | 66.9 |
| Grand Est (FRF) | 36.4 | 79.7 | 85.3 | 84.5 | 58.3 | 75.0 | 69.0 |
| Pays de la Loire (FRG) | 42.1 | 79.4 | 87.5 | 89.2 | 59.2 | 77.5 | 72.0 |
| Bretagne (FRH) | 38.5 | 81.4 | 89.5 | 88.9 | 62.0 | 78.3 | 71.4 |
| Nouvelle-Aquitaine (FRI) | 38.1 | 83.3 | 85.1 | 85.5 | 62.7 | 77.3 | 71.7 |
| Occitanie (FRJ) | 34.0 | 79.7 | 85.2 | 84.1 | 61.2 | 74.9 | 69.0 |
| Auvergne-Rhône-Alpes (FRK) | 39.1 | 82.8 | 85.6 | 86.4 | 62.1 | 77.1 | 71.9 |
| Provence-Alpes-Côte d'Azur (FRL) | 29.4 | 80.4 | 83.2 | 82.7 | 61.3 | 74.4 | 68.0 |
| Corse (FRM) | 26.3 (u) | 82.7 (u) | 73.9 (u) | 81.8 (u) | 61.4 (u) | 72.9 (u) | 63.8 (u) |
| Belgique (BE) | 28.4 | 78.6 | 83.8 | 81.4 | 61.5 | 72.8 | 67.4 |
| Bruxelles-Capitale (BE1) | 15.4 | 70.1 | 72.8 | 70.5 | 57.7 | 63.9 | 58.6 |
| Wallonie (BE3) | 24.8 | 73.1 | 80.4 | 77.4 | 54.7 | 67.9 | 62.4 |
| Flandre (réf.) (BE2) | 33.3 | 83.8 | 88.0 | 85.7 | 65.6 | 77.3 | 71.9 |
| Luxembourg (LU = LU00) | 26.4 | 84.4 | 85.8 | 85.3 | 48.9 | 73.6 | 69.2 |
| Suisse (CH) | 60.1 | 85.8 | 86.8 | 86.4 | 75.3 | 82.4 | 79.9 |
| Région lémanique (CH01) | 46.4 | 80.5 | 83.0 | 81.1 | 68.2 | 76.8 | 73.0 |
| Espace Mittelland (CH02) | 64.2 | 86.6 | 88.2 | 88.3 | 76.6 | 83.9 | 81.6 |

- Taux d'emploi par diplôme et région, 2025 (table `lfst_r_lfe2emprtn`, nationalité = total ; tranches disponibles : 15-64, 20-64, 25-54, 55-64) — [Eurostat lfst_r_lfe2emprtn](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfe2emprtn/default/table?lang=fr). Requête API (25-54 ans ; les autres tableaux changent `age=`) : <https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/lfst_r_lfe2emprtn?format=JSON&lang=EN&sex=T&age=Y25-54&citizen=TOTAL&geo=EU27_2020&geo=FR&geo=FR1&geo=FRB&geo=FRC&geo=FRD&geo=FRE&geo=FRF&geo=FRG&geo=FRH&geo=FRI&geo=FRJ&geo=FRK&geo=FRL&geo=FRM&geo=BE&geo=BE1&geo=BE3&geo=BE2&geo=LU&geo=LU00&geo=CH&geo=CH01&geo=CH02&time=2025&isced11=TOTAL&isced11=ED0-2&isced11=ED3_4&isced11=ED5-8>

#### Taux d'emploi 2025 (%) par diplôme — 25-54 ans — [Eurostat lfst_r_lfe2emprtn](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfe2emprtn/default/table?lang=fr)

| Territoire | Tous niveaux | Faible (CITE 0-2) | Moyen (CITE 3-4) | Élevé (CITE 5-8) |
|---|---|---|---|---|
| UE-27 (EU27_2020) | 82.7 | 63.4 | 83.2 | 90.0 |
| France (FR) | 83.0 | 59.6 | 81.7 | 89.9 |
| Île-de-France (FR1) | 82.5 | 65.0 | 77.3 | 88.1 |
| Centre-Val de Loire (FRB) | 86.7 | 69.7 | 87.6 | 89.9 |
| Bourgogne-Franche-Comté (FRC) | 83.8 | 59.4 | 84.7 | 91.6 |
| Normandie (FRD) | 84.9 | 59.5 | 83.7 | 93.3 |
| Hauts-de-France (FRE) | 80.8 | 57.2 | 78.6 | 90.1 |
| Grand Est (FRF) | 83.3 | 61.1 | 82.7 | 90.6 |
| Pays de la Loire (FRG) | 85.5 | 62.9 | 86.3 | 90.5 |
| Bretagne (FRH) | 87.2 | 63.5 | 85.7 | 91.9 |
| Nouvelle-Aquitaine (FRI) | 84.7 | 64.6 | 83.4 | 90.1 |
| Occitanie (FRJ) | 83.2 | 56.7 | 81.2 | 90.9 |
| Auvergne-Rhône-Alpes (FRK) | 84.9 | 62.6 | 83.2 | 90.4 |
| Provence-Alpes-Côte d'Azur (FRL) | 82.2 | 58.3 | 83.3 | 88.9 |
| Corse (FRM) | 79.5 (u) | 68.1 (u) | 73.1 (u) | 94.9 (u) |
| Belgique (BE) | 81.3 | 53.6 | 78.7 | 90.4 |
| Bruxelles-Capitale (BE1) | 71.1 | 45.4 | 58.4 | 83.2 |
| Wallonie (BE3) | 77.0 | 48.9 | 74.3 | 89.7 |
| Flandre (réf.) (BE2) | 85.8 | 60.4 | 83.8 | 92.7 |
| Luxembourg (LU = LU00) | 85.2 | 72.6 | 82.7 | 88.9 |
| Suisse (CH) | 86.3 | 71.6 | 86.5 | 90.2 |
| Région lémanique (CH01) | 81.5 | 68.7 | 82.1 | 86.1 |
| Espace Mittelland (CH02) | 87.7 | 70.2 | 87.8 | 92.8 |

#### Taux d'emploi 2025 (%) par diplôme — 55-64 ans — [Eurostat lfst_r_lfe2emprtn](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfe2emprtn/default/table?lang=fr)

| Territoire | Tous niveaux | Faible (CITE 0-2) | Moyen (CITE 3-4) | Élevé (CITE 5-8) |
|---|---|---|---|---|
| UE-27 (EU27_2020) | 66.4 | 50.6 | 67.0 | 80.3 |
| France (FR) | 61.7 | 46.0 | 59.6 | 76.8 |
| Île-de-France (FR1) | 70.0 | 57.9 | 66.1 | 78.8 |
| Centre-Val de Loire (FRB) | 63.1 | 50.7 | 58.7 | 81.1 |
| Bourgogne-Franche-Comté (FRC) | 58.1 | 40.3 | 56.4 | 80.2 |
| Normandie (FRD) | 58.9 | 48.8 | 56.5 | 72.5 |
| Hauts-de-France (FRE) | 55.7 | 36.2 | 57.0 | 75.4 |
| Grand Est (FRF) | 58.3 | 44.3 | 57.0 | 79.0 |
| Pays de la Loire (FRG) | 59.2 | 43.8 | 60.7 | 68.7 |
| Bretagne (FRH) | 62.0 | 40.8 | 61.0 | 74.3 |
| Nouvelle-Aquitaine (FRI) | 62.7 | 47.0 | 61.7 | 75.0 |
| Occitanie (FRJ) | 61.2 | 41.5 | 58.5 | 75.6 |
| Auvergne-Rhône-Alpes (FRK) | 62.1 | 49.4 | 58.3 | 75.9 |
| Provence-Alpes-Côte d'Azur (FRL) | 61.3 | 43.6 | 58.2 | 80.3 |
| Corse (FRM) | 61.4 (u) | 59.9 (u) | 56.4 (u) | 71.6 (u) |
| Belgique (BE) | 61.5 | 37.7 | 58.4 | 77.3 |
| Bruxelles-Capitale (BE1) | 57.7 | 32.7 | 57.9 | 72.7 |
| Wallonie (BE3) | 54.7 | 35.3 | 50.2 | 72.7 |
| Flandre (réf.) (BE2) | 65.6 | 40.5 | 62.3 | 80.2 |
| Luxembourg (LU = LU00) | 48.9 | 32.4 | 41.5 | 69.4 |
| Suisse (CH) | 75.3 | 60.6 | 74.7 | 83.4 |
| Région lémanique (CH01) | 68.2 | 56.9 | 66.3 | 77.8 |
| Espace Mittelland (CH02) | 76.6 | 63.2 | 76.2 | 85.0 |

#### Taux d'emploi 2025 (%) par diplôme — 20-64 ans — [Eurostat lfst_r_lfe2emprtn](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfe2emprtn/default/table?lang=fr)

| Territoire | Tous niveaux | Faible (CITE 0-2) | Moyen (CITE 3-4) | Élevé (CITE 5-8) |
|---|---|---|---|---|
| UE-27 (EU27_2020) | 76.1 | 58.1 | 75.1 | 86.8 |
| France (FR) | 75.4 | 53.1 | 72.0 | 85.9 |
| Île-de-France (FR1) | 76.5 | 61.0 | 68.3 | 84.5 |
| Centre-Val de Loire (FRB) | 77.9 | 59.9 | 75.0 | 86.8 |
| Bourgogne-Franche-Comté (FRC) | 74.7 | 50.4 | 73.0 | 88.0 |
| Normandie (FRD) | 75.8 | 52.4 | 73.1 | 88.4 |
| Hauts-de-France (FRE) | 72.6 | 47.6 | 70.4 | 85.5 |
| Grand Est (FRF) | 75.0 | 53.4 | 72.5 | 87.5 |
| Pays de la Loire (FRG) | 77.5 | 54.4 | 76.7 | 86.1 |
| Bretagne (FRH) | 78.3 | 52.6 | 75.4 | 86.9 |
| Nouvelle-Aquitaine (FRI) | 77.3 | 55.0 | 75.1 | 86.3 |
| Occitanie (FRJ) | 74.9 | 51.0 | 70.6 | 85.6 |
| Auvergne-Rhône-Alpes (FRK) | 77.1 | 56.5 | 72.8 | 86.1 |
| Provence-Alpes-Côte d'Azur (FRL) | 74.4 | 51.3 | 72.4 | 86.0 |
| Corse (FRM) | 72.9 (u) | 65.1 (u) | 66.6 (u) | 86.2 (u) |
| Belgique (BE) | 72.8 | 46.7 | 67.8 | 86.0 |
| Bruxelles-Capitale (BE1) | 63.9 | 39.7 | 50.2 | 79.6 |
| Wallonie (BE3) | 67.9 | 43.0 | 63.2 | 84.2 |
| Flandre (réf.) (BE2) | 77.3 | 51.9 | 72.7 | 88.3 |
| Luxembourg (LU = LU00) | 73.6 | 53.9 | 65.2 | 85.0 |
| Suisse (CH) | 82.4 | 68.2 | 81.4 | 88.2 |
| Région lémanique (CH01) | 76.8 | 65.7 | 75.2 | 83.1 |
| Espace Mittelland (CH02) | 83.9 | 67.4 | 83.3 | 90.8 |

#### Taux d'emploi 2025 (%) des 20-64 ans par nationalité — [Eurostat lfst_r_lfe2emprtn](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfe2emprtn/default/table?lang=fr)

| Territoire | Tous niveaux | Nationaux | Étrangers UE | Étrangers hors UE |
|---|---|---|---|---|
| UE-27 (EU27_2020) | 76.1 | 77.0 | 77.3 | 65.0 |
| France (FR) | 75.4 | 76.8 | 73.8 | 57.5 |
| Île-de-France (FR1) | 76.5 | 78.7 | 75.7 | 64.5 |
| Centre-Val de Loire (FRB) | 77.9 | 78.5 | 78.3 | 60.6 |
| Bourgogne-Franche-Comté (FRC) | 74.7 | 76.2 | 60.1 | 54.0 |
| Normandie (FRD) | 75.8 | 76.5 | 74.5 (u) | 55.9 |
| Hauts-de-France (FRE) | 72.6 | 73.5 | 73.8 | 56.7 |
| Grand Est (FRF) | 75.0 | 76.1 | 73.6 | 56.3 |
| Pays de la Loire (FRG) | 77.5 | 78.2 | 90.1 | 57.8 |
| Bretagne (FRH) | 78.3 | 79.1 | 67.9 | 56.3 |
| Nouvelle-Aquitaine (FRI) | 77.3 | 78.2 | 70.1 | 61.0 |
| Occitanie (FRJ) | 74.9 | 76.1 | 67.4 | 54.4 |
| Auvergne-Rhône-Alpes (FRK) | 77.1 | 78.4 | 74.6 | 58.6 |
| Provence-Alpes-Côte d'Azur (FRL) | 74.4 | 76.2 | 75.5 | 45.5 |
| Corse (FRM) | 72.9 (u) | 73.4 (u) | 83.1 (u) | 57.5 (u) |
| Belgique (BE) | 72.8 | 74.1 | 73.0 | 51.6 |
| Bruxelles-Capitale (BE1) | 63.9 | 63.2 | 73.4 | 50.4 |
| Wallonie (BE3) | 67.9 | 69.1 | 66.7 | 45.0 |
| Flandre (réf.) (BE2) | 77.3 | 78.3 | 77.2 | 56.0 |
| Luxembourg (LU = LU00) | 73.6 | 70.0 | 79.4 | 68.5 |
| Suisse (CH) | 82.4 | 84.6 | 83.6 | 65.7 |
| Région lémanique (CH01) | 76.8 | 78.2 | 80.7 | 59.4 |
| Espace Mittelland (CH02) | 83.9 | 86.0 | 84.7 | 64.5 |

#### Taux d'emploi 2025 (%) des 25-54 ans nés hors UE, par diplôme (table `lfst_r_lfe2emprc`) — [Eurostat lfst_r_lfe2emprc](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfe2emprc/default/table?lang=fr)

Requête API : <https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/lfst_r_lfe2emprc?format=JSON&lang=EN&sex=T&age=Y25-54&c_birth=NEU27_2020_FOR&geo=EU27_2020&geo=FR&geo=FR1&geo=FRB&geo=FRC&geo=FRD&geo=FRE&geo=FRF&geo=FRG&geo=FRH&geo=FRI&geo=FRJ&geo=FRK&geo=FRL&geo=FRM&geo=BE&geo=BE1&geo=BE3&geo=BE2&geo=LU&geo=LU00&geo=CH&geo=CH01&geo=CH02&time=2025&isced11=TOTAL&isced11=ED0-2&isced11=ED3_4&isced11=ED5-8>

| Territoire | Tous niveaux | Faible (CITE 0-2) | Moyen (CITE 3-4) | Élevé (CITE 5-8) |
|---|---|---|---|---|
| UE-27 (EU27_2020) | 71.6 | 62.9 | 74.5 | 77.7 |
| France (FR) | 66.4 | 52.3 | 67.6 | 76.0 |
| Île-de-France (FR1) | 72.0 | 63.4 | 70.5 | 77.6 |
| Centre-Val de Loire (FRB) | 72.2 | 64.8 | 77.6 | 73.0 |
| Bourgogne-Franche-Comté (FRC) | 59.1 | 41.4 | 76.5 | 65.9 |
| Normandie (FRD) | 67.2 | 41.8 (u) | 66.5 | 78.6 |
| Hauts-de-France (FRE) | 64.4 | 44.6 | 66.1 | 74.2 |
| Grand Est (FRF) | 66.3 | 57.8 | 65.4 | 74.3 |
| Pays de la Loire (FRG) | 68.9 | 55.3 | 68.0 | 84.0 |
| Bretagne (FRH) | 64.7 | 60.9 (u) | 56.9 | 75.8 |
| Nouvelle-Aquitaine (FRI) | 68.7 | 57.8 | 69.1 | 74.6 |
| Occitanie (FRJ) | 64.1 | 40.4 | 67.1 | 78.8 |
| Auvergne-Rhône-Alpes (FRK) | 65.5 | 54.8 | 64.5 | 71.9 |
| Provence-Alpes-Côte d'Azur (FRL) | 60.4 | 45.2 | 66.8 | 72.6 |
| Corse (FRM) | 68.9 (u) | : (u) | 61.5 (u) | : (u) |
| Belgique (BE) | 65.7 | 50.4 | 66.1 | 76.6 |
| Bruxelles-Capitale (BE1) | 61.2 | 42.4 | 57.7 | 73.8 |
| Wallonie (BE3) | 62.3 | 47.2 | 61.5 | 76.6 |
| Flandre (réf.) (BE2) | 70.4 | 56.9 | 72.7 | 78.8 |
| Luxembourg (LU = LU00) | 75.6 | 65.1 | 66.2 | 79.8 |
| Suisse (CH) | 73.8 | 68.7 | 77.7 | 76.1 |
| Région lémanique (CH01) | 67.5 | 61.7 | 70.7 | 71.4 |
| Espace Mittelland (CH02) | 71.6 | 64.8 | 77.6 | 73.7 |

- 55-64 ans peu diplômés : taux d'emploi de 32,4 % au Luxembourg, 32,7 % à Bruxelles, 35,3 % en Wallonie, 36,2 % dans les Hauts-de-France, 46,0 % en France, 56,9 % en Région lémanique, 63,2 % dans l'Espace Mittelland — [Eurostat lfst_r_lfe2emprtn](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfe2emprtn/default/table?lang=fr)
- 15-24 ans : taux d'emploi de 15,4 % à Bruxelles, 24,8 % en Wallonie, 26,4 % au Luxembourg, 34,5 % en France, 46,4 % en Région lémanique, 64,2 % dans l'Espace Mittelland — [Eurostat lfst_r_lfe2emprt](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfe2emprt/default/table?lang=fr)

### Inferences
- Le taux d'emploi complète le taux de chômage pour les seniors et les peu diplômés : au Luxembourg, le chômage des 55-64 ans est bas (4,5 %, u) mais leur taux d'emploi est le plus faible du panel (48,9 %), signe de sorties précoces d'activité plutôt que d'un marché facile.
- Pour les personnes nées hors UE, le diplôme supérieur n'apporte qu'un taux d'emploi de 71 à 80 % à 25-54 ans (France 76,0 %, Belgique 76,6 %, Bruxelles 73,8 %, Wallonie 76,6 %, Luxembourg 79,8 %, Suisse 76,1 %, Région lémanique 71,4 %), contre 83 à 90 % pour l'ensemble des diplômés du supérieur des mêmes territoires : la « prime » du diplôme est amputée d'environ 9 à 15 points.
- L'écart de taux d'emploi des 15-24 ans entre la Suisse et les autres territoires tient probablement en grande partie à l'apprentissage en entreprise (les apprentis sont comptés en emploi) ; ce n'est pas une mesure directe de la facilité de recherche d'emploi.

### Gaps
- Eurostat ne diffuse pas de taux d'emploi régional par diplôme pour les 15-24 ans ni les 25-34 ans (la table `lfst_r_lfe2emprtn` ne propose que 15-64, 20-64, 25-54, 55-64).
- Corse : valeurs toutes de faible fiabilité (du).

## Chômage de longue durée : par âge au niveau national, par diplôme au niveau régional

### Takeaway
La part des chômeurs qui cherchent depuis 12 mois ou plus croît fortement avec l'âge partout : en 2025, 9,3 % à 15-24 ans contre 42,6 % à 55-64 ans en France, 18,3 % contre 44,2 % en Belgique, 15,0 % contre 43,9 % en Suisse. Par région (15-74 ans), elle atteint 46,4 % à Bruxelles (58,8 % pour les peu diplômés), 37,0 % en Wallonie et 36,9 % en Région lémanique, contre 23,0 % en France et environ 12 % en Bretagne et Pays de la Loire.

### Cited Findings
- Part du chômage de longue durée (≥ 12 mois) dans le chômage, par âge, niveau national, 2025 (table `lfsa_upgan`, nationalité = total) — [Eurostat lfsa_upgan](https://ec.europa.eu/eurostat/databrowser/view/lfsa_upgan/default/table?lang=fr). Requête API : <https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/lfsa_upgan?format=JSON&lang=EN&sex=T&citizen=TOTAL&geo=EU27_2020&geo=FR&geo=BE&geo=LU&geo=CH&time=2025&age=Y15-24&age=Y25-49&age=Y25-54&age=Y50-64&age=Y55-64&age=Y50-74&age=Y15-74>

| Territoire | 15-24 ans | 25-49 ans | 25-54 ans | 50-64 ans | 55-64 ans | 50-74 ans | 15-74 ans |
|---|---|---|---|---|---|---|---|
| UE-27 (EU27_2020) | 15.4 | 32.5 | 33.7 | 45.3 | 48.0 | 45.1 | 31.8 |
| France (FR) | 9.3 | 24.1 | 25.2 | 39.0 | 42.6 | 39.2 | 23.1 |
| Belgique (BE) | 18.3 | 32.6 | 34.8 | 45.8 | 44.2 | 45.3 | 31.9 |
| Luxembourg (LU = LU00) | : (u) | 33.0 | 34.4 | : (u) | : (u) | : (u) | 30.9 |
| Suisse (CH) | 15.0 | 30.9 | 31.9 | 42.2 | 43.9 | 42.0 | 30.2 |

- France, enquête Emploi 2025 : taux de chômage de longue durée de 1,8 % (15-24 ans), 1,7 % (25-49 ans), 1,9 % (50 ans ou plus) ; part des chômeurs de longue durée dans le chômage : 9,3 % (15-24 ans), 24,1 % (25-49 ans), 39,1 % (50 ans ou plus), 23,1 % ensemble (566 000 personnes) — [Insee, « Évolution du chômage », Emploi, chômage, revenus du travail, 02/07/2026](https://www.insee.fr/fr/statistiques/8733053)
- Chômeurs par durée de chômage et par âge, niveau national, 2025, en milliers (table `lfsa_ugad`) — [Eurostat lfsa_ugad](https://ec.europa.eu/eurostat/databrowser/view/lfsa_ugad/default/table?lang=fr)

#### Chômeurs par durée (milliers), 15-24 ans, 2025 — [Eurostat lfsa_ugad](https://ec.europa.eu/eurostat/databrowser/view/lfsa_ugad/default/table?lang=fr)

Requête API : <https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/lfsa_ugad?format=JSON&lang=EN&sex=T&age=Y15-24&geo=EU27_2020&geo=FR&geo=BE&geo=LU&geo=CH&time=2025&duration=TOTAL&duration=M_LT1&duration=M1-2&duration=M3-5&duration=M6-11&duration=M12-17&duration=M18-23&duration=M24-47&duration=M_GE48&duration=NRP>

| Territoire | Tous niveaux | < 1 mois | 1-2 mois | 3-5 mois | 6-11 mois | 12-17 mois | 18-23 mois | 24-47 mois | 48 mois + | Non-réponse |
|---|---|---|---|---|---|---|---|---|---|---|
| UE-27 (EU27_2020) | 2961.6 | 679.3 | 798.4 | 563.0 | 427.0 | 220.1 | 79.1 | 109.8 | 41.6 | 43.2 |
| France (FR) | 678.1 | 180.4 | 211.8 | 124.5 | 95.4 | 33.7 | 16.6 | 10.2 | : (u) | : (u) |
| Belgique (BE) | 83.2 | 14.9 | 25.0 | 17.7 | 9.3 | 6.1 | : (u) | 6.4 | : (u) | : (u) |
| Luxembourg (LU = LU00) | 4.7 | : (u) | : (u) | : (u) | : (u) | : (u) | : (u) | : (u) | : (u) | : (u) |
| Suisse (CH) | 52.1 | 10.9 | 12.6 | 11.0 | 8.6 | 2.8 (u) | 2.6 (u) | 1.4 (u) | : (u) | 1.5 (u) |

#### Chômeurs par durée (milliers), 25-49 ans, 2025 — [Eurostat lfsa_ugad](https://ec.europa.eu/eurostat/databrowser/view/lfsa_ugad/default/table?lang=fr)

Requête API : <https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/lfsa_ugad?format=JSON&lang=EN&sex=T&age=Y25-49&geo=EU27_2020&geo=FR&geo=BE&geo=LU&geo=CH&time=2025&duration=TOTAL&duration=M_LT1&duration=M1-2&duration=M3-5&duration=M6-11&duration=M12-17&duration=M18-23&duration=M24-47&duration=M_GE48&duration=NRP>

| Territoire | Tous niveaux | < 1 mois | 1-2 mois | 3-5 mois | 6-11 mois | 12-17 mois | 18-23 mois | 24-47 mois | 48 mois + | Non-réponse |
|---|---|---|---|---|---|---|---|---|---|---|
| UE-27 (EU27_2020) | 7105.2 | 923.0 | 1341.4 | 1250.9 | 1238.2 | 789.2 | 351.5 | 584.6 | 560.0 | 66.4 |
| France (FR) | 1269.6 | 228.9 | 279.2 | 220.6 | 234.2 | 125.2 | 58.4 | 74.5 | 46.9 | : (u) |
| Belgique (BE) | 182.4 | 17.9 | 39.2 | 31.0 | 33.8 | 23.3 | 7.4 | 16.7 | 11.7 | : (u) |
| Luxembourg (LU = LU00) | 13.7 | : (u) | 2.2 (u) | 2.0 (u) | 3.0 (u) | : (u) | : (u) | : (u) | : (u) | : (u) |
| Suisse (CH) | 139.2 | 16.6 | 26.9 | 25.4 | 26.3 | 14.6 | 8.1 | 10.4 | 9.6 | 1.4 (u) |

#### Chômeurs par durée (milliers), 50-64 ans, 2025 — [Eurostat lfsa_ugad](https://ec.europa.eu/eurostat/databrowser/view/lfsa_ugad/default/table?lang=fr)

Requête API : <https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/lfsa_ugad?format=JSON&lang=EN&sex=T&age=Y50-64&geo=EU27_2020&geo=FR&geo=BE&geo=LU&geo=CH&time=2025&duration=TOTAL&duration=M_LT1&duration=M1-2&duration=M3-5&duration=M6-11&duration=M12-17&duration=M18-23&duration=M24-47&duration=M_GE48&duration=NRP>

| Territoire | Tous niveaux | < 1 mois | 1-2 mois | 3-5 mois | 6-11 mois | 12-17 mois | 18-23 mois | 24-47 mois | 48 mois + | Non-réponse |
|---|---|---|---|---|---|---|---|---|---|---|
| UE-27 (EU27_2020) | 3079.5 | 298.6 | 433.8 | 439.2 | 505.9 | 353.9 | 195.2 | 358.7 | 482.4 | : (u) |
| France (FR) | 477.9 | 64.7 | 72.1 | 67.2 | 86.4 | 59.6 | 33.4 | 52.9 | 40.1 | : (u) |
| Belgique (BE) | 70.3 | 4.4 (u) | 13.8 | 7.7 | 12.1 | 7.3 | 3.2 (u) | 8.6 | 13.2 | : (u) |
| Luxembourg (LU = LU00) | 4.3 | : (u) | : (u) | : (u) | : (u) | : (u) | : (u) | : (u) | : (u) | : |
| Suisse (CH) | 54.9 | 4.3 (u) | 8.4 | 8.1 | 10.5 | 5.6 | 4.1 (u) | 5.8 | 7.4 | : (u) |

#### Chômeurs par durée (milliers), 55-64 ans, 2025 — [Eurostat lfsa_ugad](https://ec.europa.eu/eurostat/databrowser/view/lfsa_ugad/default/table?lang=fr)

Requête API : <https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/lfsa_ugad?format=JSON&lang=EN&sex=T&age=Y55-64&geo=EU27_2020&geo=FR&geo=BE&geo=LU&geo=CH&time=2025&duration=TOTAL&duration=M_LT1&duration=M1-2&duration=M3-5&duration=M6-11&duration=M12-17&duration=M18-23&duration=M24-47&duration=M_GE48&duration=NRP>

| Territoire | Tous niveaux | < 1 mois | 1-2 mois | 3-5 mois | 6-11 mois | 12-17 mois | 18-23 mois | 24-47 mois | 48 mois + | Non-réponse |
|---|---|---|---|---|---|---|---|---|---|---|
| UE-27 (EU27_2020) | 1916.7 | 171.0 | 243.3 | 265.8 | 313.5 | 222.8 | 126.8 | 238.8 | 327.8 | : (u) |
| France (FR) | 294.5 | 37.1 | 37.6 | 40.6 | 53.0 | 39.1 | 23.0 | 36.0 | 26.9 | : (u) |
| Belgique (BE) | 40.7 | 2.6 (u) | 6.5 | 5.7 | 7.8 | 3.8 (u) | : (u) | 4.3 (u) | 8.5 | : (u) |
| Luxembourg (LU = LU00) | 2.0 (u) | : (u) | : (u) | : (u) | : (u) | : (u) | : (u) | : (u) | : (u) | : |
| Suisse (CH) | 35.4 | 3.1 (u) | 4.9 (u) | 4.8 (u) | 6.8 | 3.7 (u) | 2.8 (u) | 4.0 (u) | 4.7 (u) | : (u) |

- Chômage de longue durée par diplôme et région NUTS, 2025 (table `lfst_r_lfu2ltu`, maj 30/10/2026 ; tranches d'âge disponibles : 15-74, 20-64, 25-64, ≥ 25 — ni jeunes ni seniors) — [Eurostat lfst_r_lfu2ltu](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfu2ltu/default/table?lang=fr). Requête API : <https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/lfst_r_lfu2ltu?format=JSON&lang=EN&sex=T&age=Y15-74&unit=PC_UNE&geo=EU27_2020&geo=FR&geo=FR1&geo=FRB&geo=FRC&geo=FRD&geo=FRE&geo=FRF&geo=FRG&geo=FRH&geo=FRI&geo=FRJ&geo=FRK&geo=FRL&geo=FRM&geo=BE&geo=BE1&geo=BE3&geo=BE2&geo=LU&geo=LU00&geo=CH&geo=CH01&geo=CH02&time=2025&isced11=TOTAL&isced11=ED0-2&isced11=ED3_4&isced11=ED5-8>

#### Part du chômage de longue durée dans le chômage (%), 15-74 ans, 2025

| Territoire | Tous niveaux | Faible (CITE 0-2) | Moyen (CITE 3-4) | Élevé (CITE 5-8) |
|---|---|---|---|---|
| UE-27 (EU27_2020) | 31.5 | 36.4 | 31.4 | 25.6 |
| France (FR) | 23.0 | 28.7 | 21.2 | 21.6 |
| Île-de-France (FR1) | 26.7 | 32.6 | 26.0 | 24.9 |
| Centre-Val de Loire (FRB) | 17.8 | : (u) | 17.4 (u) | : (u) |
| Bourgogne-Franche-Comté (FRC) | 19.0 | 23.7 (u) | 18.3 (u) | : (u) |
| Normandie (FRD) | 23.0 | 23.9 (u) | 22.9 | 22.1 (u) |
| Hauts-de-France (FRE) | 25.6 | 29.0 | 26.2 | 21.2 |
| Grand Est (FRF) | 25.4 | 29.2 | 22.2 | 27.3 |
| Pays de la Loire (FRG) | 12.1 | : (u) | 12.6 (u) | : (u) |
| Bretagne (FRH) | 11.8 | : (u) | 11.0 (u) | : (u) |
| Nouvelle-Aquitaine (FRI) | 17.3 | 17.6 (u) | 18.1 | 16.1 |
| Occitanie (FRJ) | 20.6 | 26.7 | 16.5 | 21.9 |
| Auvergne-Rhône-Alpes (FRK) | 17.1 | 25.2 | 13.4 | 16.7 |
| Provence-Alpes-Côte d'Azur (FRL) | 23.7 | 23.9 (u) | 22.8 | 24.9 |
| Corse (FRM) | : (u) | : (u) | : (u) | : (u) |
| Belgique (BE) | 31.6 | 33.4 | 34.7 | 25.9 |
| Bruxelles-Capitale (BE1) | 46.4 | 58.8 | 49.5 | 34.5 |
| Wallonie (BE3) | 37.0 | 40.0 | 36.0 | 34.7 |
| Flandre (réf.) (BE2) | 19.1 | 12.9 (u) | 26.9 | 14.2 |
| Luxembourg (LU = LU00) | 30.7 | : (u) | : (u) | 32.4 (u) |
| Suisse (CH) | 29.7 | 33.1 | 27.5 | 30.1 |
| Région lémanique (CH01) | 36.9 | 39.5 | 34.1 | 38.1 |
| Espace Mittelland (CH02) | 27.4 | 32.1 (u) | 27.9 | 20.5 (u) |

#### Part du chômage de longue durée dans le chômage (%), 25 ans et plus, 2025

| Territoire | Tous niveaux | Faible (CITE 0-2) | Moyen (CITE 3-4) | Élevé (CITE 5-8) |
|---|---|---|---|---|
| UE-27 (EU27_2020) | 36.2 | 42.9 | 36.6 | 28.3 |
| France (FR) | 28.3 | 36.0 | 27.1 | 25.0 |
| Île-de-France (FR1) | 32.0 | 37.5 | 34.4 | 28.5 |
| Centre-Val de Loire (FRB) | 25.5 | : (u) | 28.6 (u) | : (u) |
| Bourgogne-Franche-Comté (FRC) | 25.5 | 31.2 (u) | 25.6 (u) | : (u) |
| Normandie (FRD) | 29.1 | 29.4 (u) | 29.4 | 28.4 (u) |
| Hauts-de-France (FRE) | 30.1 | 35.1 | 31.3 | 23.6 (u) |
| Grand Est (FRF) | 31.6 | 39.2 | 26.5 | 33.4 |
| Pays de la Loire (FRG) | 14.6 | : (u) | 13.9 (u) | : (u) |
| Bretagne (FRH) | 15.8 (u) | : (u) | : (u) | : (u) |
| Nouvelle-Aquitaine (FRI) | 20.5 | 21.0 (u) | 22.5 | 17.7 (u) |
| Occitanie (FRJ) | 26.4 | 33.2 | 22.7 | 26.8 |
| Auvergne-Rhône-Alpes (FRK) | 21.8 | 33.5 | 17.1 | 20.1 |
| Provence-Alpes-Côte d'Azur (FRL) | 28.8 | 30.7 (u) | 28.9 | 27.7 |
| Corse (FRM) | : (u) | : (u) | : (u) | : (u) |
| Belgique (BE) | 36.1 | 45.6 | 37.7 | 28.1 |
| Bruxelles-Capitale (BE1) | 51.0 | 68.3 | 57.7 | 35.7 |
| Wallonie (BE3) | 42.4 | 51.4 | 38.3 | 39.6 |
| Flandre (réf.) (BE2) | 20.7 | 20.2 (u) | 26.6 | 14.9 |
| Luxembourg (LU = LU00) | 34.8 | : (u) | : (u) | 34.8 (u) |
| Suisse (CH) | 33.8 | 37.3 | 35.2 | 31.0 |
| Région lémanique (CH01) | 41.2 | 44.8 | 40.8 | 40.1 |
| Espace Mittelland (CH02) | 31.7 | 37.0 (u) | 35.5 | 22.0 (u) |

#### Taux de chômage de longue durée (% de la population active), 15-74 ans, 2025

| Territoire | Tous niveaux | Faible (CITE 0-2) | Moyen (CITE 3-4) | Élevé (CITE 5-8) |
|---|---|---|---|---|
| UE-27 (EU27_2020) | 1.9 | 4.4 | 1.8 | 1.0 |
| France (FR) | 1.8 | 4.2 | 1.8 | 1.1 |
| Île-de-France (FR1) | 2.4 | 4.4 | 2.9 | 1.7 |
| Centre-Val de Loire (FRB) | 1.1 | : (u) | 1.0 (u) | : (u) |
| Bourgogne-Franche-Comté (FRC) | 1.4 | 3.3 (u) | 1.6 (u) | : (u) |
| Normandie (FRD) | 1.7 | 3.7 (u) | 1.8 | 1.0 (u) |
| Hauts-de-France (FRE) | 2.2 | 4.8 | 2.5 | 1.1 |
| Grand Est (FRF) | 1.7 | 3.8 | 1.6 | 1.1 |
| Pays de la Loire (FRG) | 0.8 | : (u) | 0.8 (u) | : (u) |
| Bretagne (FRH) | 0.7 | : (u) | 0.7 (u) | : (u) |
| Nouvelle-Aquitaine (FRI) | 1.2 | 2.2 (u) | 1.4 | 0.8 |
| Occitanie (FRJ) | 1.6 | 4.5 | 1.4 | 1.1 |
| Auvergne-Rhône-Alpes (FRK) | 1.2 | 3.7 | 1.0 | 0.8 |
| Provence-Alpes-Côte d'Azur (FRL) | 1.7 | 3.1 (u) | 1.8 | 1.3 |
| Corse (FRM) | : (u) | : (u) | : (u) | : (u) |
| Belgique (BE) | 2.0 | 5.1 | 2.3 | 1.0 |
| Bruxelles-Capitale (BE1) | 5.8 | 14.9 | 8.9 | 2.6 |
| Wallonie (BE3) | 2.9 | 7.1 | 3.1 | 1.4 |
| Flandre (réf.) (BE2) | 0.8 | 1.4 (u) | 1.2 | 0.4 |
| Luxembourg (LU = LU00) | 2.0 | : (u) | : (u) | 1.8 (u) |
| Suisse (CH) | 1.5 | 2.7 | 1.3 | 1.2 |
| Région lémanique (CH01) | 2.9 | 4.4 | 2.7 | 2.4 |
| Espace Mittelland (CH02) | 1.3 | 3.0 (u) | 1.2 | 0.6 (u) |

- OCDE, base « Education at a Glance » (collecte triennale sur la durée du chômage, année 2024), part des chômeurs au chômage depuis 12 mois ou plus par diplôme et âge ; extraction par l'API SDMX (en-tête `Accept: application/vnd.sdmx.data+csv`), qui a répondu normalement — [OCDE SDMX DF_LSO_NEAC_DISTR_DURUNEMP](https://sdmx.oecd.org/public/rest/data/OECD.EDU.IMEP,DSD_EAG_LSO_EA@DF_LSO_NEAC_DISTR_DURUNEMP,/all?startPeriod=2022)

#### OCDE — part des chômeurs depuis 12 mois ou plus (%), par diplôme, 25-64 ans, 2024 — [OCDE SDMX](https://sdmx.oecd.org/public/rest/data/OECD.EDU.IMEP,DSD_EAG_LSO_EA@DF_LSO_NEAC_DISTR_DURUNEMP,/all?startPeriod=2022)

| Pays | Année | Tous niveaux | Faible (CITE 0-2) | Moyen (CITE 3-4) | Tertiaire (CITE 5-8) |
| --- | --- | --- | --- | --- | --- |
| France | 2024 | 28.7 | 36.3 | 29.4 | 23.2 |
| Belgique | 2024 | 41.6 | 60.7 | 39.0 | 29.7 |
| Luxembourg | 2024 | 29.0 | : | : | 28.9 |
| Suisse | 2024 | 37.9 | 45.1 | 37.9 | 34.1 |
| Canada | 2024 | 10.6 | 8.1 | 12.1 | 10.1 |
| Moyenne OCDE | 2024 | 31.7 | 39.0 | 31.9 | 26.5 |

#### OCDE — part des chômeurs depuis 12 mois ou plus (%), par diplôme, 25-34 ans, 2024 — [OCDE SDMX](https://sdmx.oecd.org/public/rest/data/OECD.EDU.IMEP,DSD_EAG_LSO_EA@DF_LSO_NEAC_DISTR_DURUNEMP,/all?startPeriod=2022)

| Pays | Année | Tous niveaux | Faible (CITE 0-2) | Moyen (CITE 3-4) | Tertiaire (CITE 5-8) |
| --- | --- | --- | --- | --- | --- |
| France | 2024 | 20.2 | 28.4 | 23.0 | 14.2 |
| Belgique | 2024 | 37.7 | 62.3 | 37.5 | 20.1 |
| Luxembourg | n.d. |
| Suisse | 2024 | 28.2 | 32.5 | 28.9 | 25.8 |
| Canada | 2024 | 10.4 | 9.5 | 12.3 | 9.5 |
| Moyenne OCDE | 2024 | 25.8 | 35.4 | 27.2 | 21.0 |

#### OCDE — part des chômeurs depuis 12 mois ou plus (%), par diplôme, 55-64 ans, 2024 — [OCDE SDMX](https://sdmx.oecd.org/public/rest/data/OECD.EDU.IMEP,DSD_EAG_LSO_EA@DF_LSO_NEAC_DISTR_DURUNEMP,/all?startPeriod=2022)

| Pays | Année | Tous niveaux | Faible (CITE 0-2) | Moyen (CITE 3-4) | Tertiaire (CITE 5-8) |
| --- | --- | --- | --- | --- | --- |
| France | 2024 | 43.9 | 48.9 | 38.9 | 47.1 |
| Belgique | 2024 | 59.3 | 68.9 | 53.7 | 57.4 |
| Luxembourg | n.d. |
| Suisse | 2024 | 54.6 | 59.0 | 50.9 | 53.7 |
| Canada | 2024 | 11.4 | 4.8 | 11.9 | 12.8 |
| Moyenne OCDE | 2024 | 41.6 | : (m) | 43.2 | : (m) |

- Suisse (chômage inscrit SECO, octobre 2026) : 23 499 chômeurs de longue durée (> 1 an), +23,4 % sur un an ; dont 10 194 parmi les 50-64 ans (+21,0 %) et 220 parmi les 15-24 ans (+18,3 %) — [SECO, La situation sur le marché du travail, octobre 2026](https://cms.news.admin.ch/fileservice/sdweb-docs-prod-nsbcch-files/files/2026/11/04/87ba940a-a408-4da2-a6fb-73f8fa79c052.pdf)

### Inferences
- [calc, à partir de lfsa_ugad 2025] Part des chômeurs au chômage depuis moins de 3 mois (indicateur indirect de rotation rapide) : 15-24 ans — France 57,8 %, Belgique 48,0 %, Suisse 45,1 % ; 25-49 ans — France 40,0 %, Belgique 31,3 %, Suisse 31,3 % ; 50-64 ans — France 28,6 %, Belgique 25,9 % (composante u), Suisse 23,1 % (composante u). Luxembourg : non calculable (cellules supprimées).
- [calc] Parts de longue durée SECO en octobre 2026 : 16,7 % de l'ensemble des chômeurs inscrits (23 499 / 141 015), 26,3 % des 50-64 ans (10 194 / 38 721), 1,6 % des 15-24 ans (220 / 13 667). Ces parts sont bien plus basses que celles de l'enquête (ESPA/Eurostat : 30,2 % en 2025), car le chômage inscrit exclut les personnes arrivées en fin de droits qui ne restent pas inscrites.
- La Belgique francophone cumule taux de chômage élevés et durées longues pour les peu diplômés (Bruxelles : 14,9 % de la population active peu diplômée est au chômage depuis plus d'un an ; Wallonie 7,1 %), alors qu'en France le chômage des peu diplômés est élevé mais de durée plus courte (4,2 %).
- Pour les 55-64 ans, la durée devient le problème principal quel que soit le diplôme : selon l'OCDE (2024), 47,1 % des chômeurs diplômés du supérieur de 55-64 ans en France, 57,4 % en Belgique et 53,7 % en Suisse cherchent depuis plus d'un an.
- Le Canada apparaît à part dans la source OCDE (environ 11 % de chômeurs de 12 mois ou plus en 2024), en cohérence avec les données de l'Enquête sur la population active présentées plus bas.

### Gaps
- Aucune table Eurostat ne croise durée de chômage × âge au niveau régional ; au niveau régional seule la ventilation par diplôme existe (tranches d'âge larges), au niveau national seule la ventilation par âge (pas de croisement durée × diplôme dans `lfsa_ugad` ; le code `lfsa_ugaed` n'existe pas — erreur 404 de l'API). Le croisement durée × diplôme × âge n'a été trouvé que dans la base OCDE (pays, 2024).
- Luxembourg : parts de longue durée par âge supprimées sauf 25-49/25-54 ans ; par diplôme seule la valeur « supérieur » (32,4 %, u) est publiée.
- Régions françaises : parts par diplôme supprimées pour Centre-Val de Loire, Pays de la Loire, Bretagne et Corse (au moins deux cellules sur trois).

## Insertion des jeunes : taux d'emploi des diplômés récents (20-34 ans) et NEET, par région

### Takeaway
En 2025, 77,8 % des diplômés récents (20-34 ans, sortis depuis 1 à 3 ans, CITE 3-8) sont en emploi en France, contre 82,9 % dans l'UE et en Belgique, 84,8 % au Luxembourg et 86,2 % en Suisse ; l'Île-de-France (70,8 %), la Normandie (70,5 %) et Bruxelles (71,7 %) sont les plus bas. Les taux de NEET 15-29 ans vont de 8,1 % (Espace Mittelland) à 14,3 % (Hauts-de-France).

### Cited Findings
- Taux d'emploi des 20-34 ans non scolarisés, sortis de formation depuis 1 à 3 ans, par niveau de diplôme et région, 2025 (table `edat_lfse_33` ; équivalent national `edat_lfse_24`). La colonne « CITE 3-8 » est l'indicateur européen usuel des « diplômés récents » — [Eurostat edat_lfse_33](https://ec.europa.eu/eurostat/databrowser/view/edat_lfse_33/default/table?lang=fr). Requête API : <https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/edat_lfse_33?format=JSON&lang=EN&sex=T&age=Y20-34&duration=Y1-3&geo=EU27_2020&geo=FR&geo=FR1&geo=FRB&geo=FRC&geo=FRD&geo=FRE&geo=FRF&geo=FRG&geo=FRH&geo=FRI&geo=FRJ&geo=FRK&geo=FRL&geo=FRM&geo=BE&geo=BE1&geo=BE3&geo=BE2&geo=LU&geo=LU00&geo=CH&geo=CH01&geo=CH02&time=2025&isced11=TOTAL&isced11=ED3-8&isced11=ED3_4&isced11=ED34_44&isced11=ED35_45&isced11=ED5-8>

#### Taux d'emploi des diplômés récents (%), 2025

| Territoire | Tous niveaux | CITE 3-8 | Moyen (CITE 3-4) | CITE 3-4 général | CITE 3-4 professionnel | Élevé (CITE 5-8) |
|---|---|---|---|---|---|---|
| UE-27 (EU27_2020) | 82.1 | 82.9 | 77.2 | 66.8 | 80.1 | 86.9 |
| France (FR) | 76.8 | 77.8 | 67.4 | 52.2 | 72.9 | 82.0 |
| Île-de-France (FR1) | 70.3 | 70.8 | 52.0 (u) | : (u) | 62.5 (u) | 75.5 |
| Centre-Val de Loire (FRB) | 80.8 (u) | 80.8 (u) | : (u) | : (u) | : (u) | 88.5 (u) |
| Bourgogne-Franche-Comté (FRC) | 76.4 (u) | 81.2 (u) | : (u) | : (u) | : (u) | 85.4 (u) |
| Normandie (FRD) | 67.5 | 70.5 | : (u) | : (u) | : (u) | 72.0 (u) |
| Hauts-de-France (FRE) | 78.4 | 79.5 | 59.6 (u) | : (u) | 64.8 (u) | 88.4 |
| Grand Est (FRF) | 84.8 | 84.7 | 78.1 (u) | : (u) | : (u) | 87.1 |
| Pays de la Loire (FRG) | 87.1 | 87.1 | 83.8 (u) | : (u) | : (u) | 89.2 (u) |
| Bretagne (FRH) | 78.9 | 78.9 | : (u) | : (u) | : (u) | 89.6 (u) |
| Nouvelle-Aquitaine (FRI) | 79.4 | 80.8 | 66.7 (u) | : (u) | 69.2 (u) | 88.1 |
| Occitanie (FRJ) | 84.9 | 84.8 | 80.4 (u) | : (u) | 95.7 (u) | 86.1 |
| Auvergne-Rhône-Alpes (FRK) | 80.0 | 81.1 | 78.0 (u) | : (u) | 78.5 (u) | 82.2 |
| Provence-Alpes-Côte d'Azur (FRL) | 73.3 | 75.0 | : (u) | : | : (u) | 73.3 |
| Corse (FRM) | : (u) | : (u) | : (u) | : (u) | : (u) | : (u) |
| Belgique (BE) | 81.3 | 82.9 | 72.8 | 64.9 | 75.4 | 87.8 |
| Bruxelles-Capitale (BE1) | 67.8 | 71.7 | : (u) | : (u) | : (u) | 76.0 |
| Wallonie (BE3) | 80.4 | 83.3 | 73.8 | 56.1 (u) | 79.0 | 89.6 |
| Flandre (réf.) (BE2) | 84.8 | 85.0 | 74.7 | 81.2 (u) | 72.8 | 90.1 |
| Luxembourg (LU = LU00) | 83.0 | 84.8 | 67.9 (u) | : (u) | 70.5 (u) | 92.2 |
| Suisse (CH) | 85.9 | 86.2 | 80.2 | 65.9 | 85.2 | 91.5 |
| Région lémanique (CH01) | 77.0 | 77.5 | 67.7 | 52.2 (u) | 74.8 | 85.5 |
| Espace Mittelland (CH02) | 84.7 | 84.9 | 78.6 | 68.7 | 82.6 | 92.4 |

#### Même indicateur, 2024 (rupture de série `b` pour la France et la Belgique) — [Eurostat edat_lfse_33](https://ec.europa.eu/eurostat/databrowser/view/edat_lfse_33/default/table?lang=fr)

| Territoire | Tous niveaux | CITE 3-8 | Moyen (CITE 3-4) | CITE 3-4 général | CITE 3-4 professionnel | Élevé (CITE 5-8) |
|---|---|---|---|---|---|---|
| UE-27 (EU27_2020) | 81.3 | 82.2 | 76.2 | 62.9 | 79.9 | 86.6 |
| France (FR) | 76.3 (b) | 76.8 (b) | 65.8 (b) | 41.6 (b) | 72.9 (b) | 81.8 (b) |
| Île-de-France (FR1) | 72.2 (b) | 72.5 (b) | 43.2 (bu) | : (bu) | 60.6 (bu) | 79.3 (b) |
| Centre-Val de Loire (FRB) | 70.1 (bu) | 71.7 (bu) | : (bu) | : (bu) | : (bu) | : (bu) |
| Bourgogne-Franche-Comté (FRC) | 68.8 (bu) | 68.8 (bu) | : (bu) | : (bu) | : (bu) | : (bu) |
| Normandie (FRD) | 79.1 (b) | 78.7 (bu) | : (bu) | : (bu) | : (bu) | 87.9 (bu) |
| Hauts-de-France (FRE) | 64.2 (b) | 64.2 (b) | 52.3 (bu) | : (bu) | : (bu) | 72.4 (b) |
| Grand Est (FRF) | 80.5 (b) | 82.3 (b) | 77.0 (bu) | : (bu) | 79.0 (bu) | 84.7 (b) |
| Pays de la Loire (FRG) | 88.8 (b) | 88.8 (b) | 86.0 (bu) | : (bu) | : (bu) | 90.3 (b) |
| Bretagne (FRH) | 79.2 (b) | 81.4 (b) | : (bu) | : (bu) | : (bu) | 85.8 (bu) |
| Nouvelle-Aquitaine (FRI) | 88.3 (b) | 88.8 (b) | 81.4 (bu) | : (bu) | 83.4 (bu) | 92.9 (b) |
| Occitanie (FRJ) | 68.8 (b) | 68.5 (b) | 53.1 (bu) | : (bu) | : (bu) | 75.8 (b) |
| Auvergne-Rhône-Alpes (FRK) | 81.9 (b) | 82.0 (b) | 79.1 (bu) | : (bu) | 78.8 (bu) | 83.1 (b) |
| Provence-Alpes-Côte d'Azur (FRL) | 82.3 (b) | 82.3 (b) | : (bu) | : (bu) | : (bu) | 87.1 (b) |
| Corse (FRM) | : (bu) | : (bu) | : | : | : | : (bu) |
| Belgique (BE) | 78.7 (b) | 79.7 (b) | 65.4 (b) | 70.4 (b) | 63.9 (b) | 87.8 (b) |
| Bruxelles-Capitale (BE1) | 79.7 (b) | 79.5 (b) | 58.3 (bu) | : (bu) | : (bu) | 85.3 (b) |
| Wallonie (BE3) | 73.6 (b) | 76.9 (b) | 65.1 (b) | 65.7 (bu) | 64.9 (b) | 86.9 (b) |
| Flandre (réf.) (BE2) | 81.1 (b) | 81.1 (b) | 67.0 (b) | 72.8 (bu) | 65.4 (b) | 89.1 (b) |
| Luxembourg (LU = LU00) | 77.3 | 77.9 | 57.7 (u) | : (u) | : (u) | 86.1 |
| Suisse (CH) | 86.2 | 86.5 | 80.6 | 64.6 | 86.5 | 91.7 |
| Région lémanique (CH01) | 79.4 | 79.8 | 70.8 | 50.3 (u) | 81.3 | 86.6 |
| Espace Mittelland (CH02) | 89.1 | 89.2 | 85.1 | 77.4 | 88.2 | 93.0 |

- Taux d'emploi des 15-34 ans sortis de formation depuis 3 ans ou moins, par diplôme, niveau national, 2025 (table `edat_lfse_24`, y compris peu diplômés) — [Eurostat edat_lfse_24](https://ec.europa.eu/eurostat/databrowser/view/edat_lfse_24/default/table?lang=fr). Requête API : <https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/edat_lfse_24?format=JSON&lang=EN&sex=T&age=Y15-34&duration=Y_LE3&geo=EU27_2020&geo=FR&geo=BE&geo=LU&geo=CH&time=2025&isced11=TOTAL&isced11=ED0-2&isced11=ED3_4&isced11=ED5-8>

| Territoire | Tous niveaux | Faible (CITE 0-2) | Moyen (CITE 3-4) | Élevé (CITE 5-8) |
|---|---|---|---|---|
| UE-27 (EU27_2020) | 76.3 | 41.0 | 72.5 | 85.2 |
| France (FR) | 71.1 | : (u) | 63.9 | 80.1 |
| Belgique (BE) | 76.7 | 38.5 | 68.8 | 85.8 |
| Luxembourg (LU = LU00) | 71.8 | 41.5 (u) | 62.9 | 87.6 |
| Suisse (CH) | 80.4 | 39.0 | 76.9 | 89.8 |

- Taux de NEET (ni en emploi, ni en études, ni en formation) par région, 2025 (table `edat_lfse_22`) — [Eurostat edat_lfse_22](https://ec.europa.eu/eurostat/databrowser/view/edat_lfse_22/default/table?lang=fr). Requête API : <https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/edat_lfse_22?format=JSON&lang=EN&sex=T&geo=EU27_2020&geo=FR&geo=FR1&geo=FRB&geo=FRC&geo=FRD&geo=FRE&geo=FRF&geo=FRG&geo=FRH&geo=FRI&geo=FRJ&geo=FRK&geo=FRL&geo=FRM&geo=BE&geo=BE1&geo=BE3&geo=BE2&geo=LU&geo=LU00&geo=CH&geo=CH01&geo=CH02&time=2025&age=Y15-24&age=Y15-29&age=Y18-24>

| Territoire | 15-24 ans | 15-29 ans | 18-24 ans |
|---|---|---|---|
| UE-27 (EU27_2020) | 9.0 | 11.0 | 11.8 |
| France (FR) | 11.0 | 12.9 | 14.6 |
| Île-de-France (FR1) | 10.4 | 12.4 | 13.5 |
| Centre-Val de Loire (FRB) | 10.6 | 11.6 | 14.9 |
| Bourgogne-Franche-Comté (FRC) | 10.5 | 13.5 | 14.0 |
| Normandie (FRD) | 13.9 | 13.4 | 19.2 |
| Hauts-de-France (FRE) | 12.2 | 14.3 | 15.3 |
| Grand Est (FRF) | 11.0 | 13.1 | 14.3 |
| Pays de la Loire (FRG) | 10.1 | 13.6 | 13.7 |
| Bretagne (FRH) | 8.1 | 10.7 | 11.6 |
| Nouvelle-Aquitaine (FRI) | 10.9 | 11.6 | 15.0 |
| Occitanie (FRJ) | 10.2 | 12.0 | 13.0 |
| Auvergne-Rhône-Alpes (FRK) | 8.5 | 10.0 | 10.7 |
| Provence-Alpes-Côte d'Azur (FRL) | 11.4 | 13.3 | 15.9 |
| Corse (FRM) | : (u) | 11.2 (u) | : (u) |
| Belgique (BE) | 7.4 | 9.8 | 10.2 |
| Bruxelles-Capitale (BE1) | 9.5 | 12.8 | 12.9 |
| Wallonie (BE3) | 9.5 | 13.1 | 13.5 |
| Flandre (réf.) (BE2) | 5.6 | 7.3 | 7.7 |
| Luxembourg (LU = LU00) | 8.3 | 9.0 | 8.7 |
| Suisse (CH) | 8.6 | 8.7 | 9.8 |
| Région lémanique (CH01) | 11.1 | 12.0 | 12.0 |
| Espace Mittelland (CH02) | 8.4 | 8.1 | 9.5 |

#### Taux de NEET par diplôme (%), niveau national, 15-29 ans, 2025 (table `edat_lfse_21`) — [Eurostat edat_lfse_21](https://ec.europa.eu/eurostat/databrowser/view/edat_lfse_21/default/table?lang=fr)

Requête API : <https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/edat_lfse_21?format=JSON&lang=EN&sex=T&age=Y15-29&geo=EU27_2020&geo=FR&geo=BE&geo=LU&geo=CH&time=2025&isced11=TOTAL&isced11=ED0-2&isced11=ED3_4&isced11=ED5-8>

| Territoire | Tous niveaux | Faible (CITE 0-2) | Moyen (CITE 3-4) | Élevé (CITE 5-8) |
|---|---|---|---|---|
| UE-27 (EU27_2020) | 11.0 | 12.9 | 11.0 | 8.0 |
| France (FR) | 12.9 | 14.5 | 14.4 | 9.6 |
| Belgique (BE) | 9.8 | 11.3 | 10.6 | 6.8 |
| Luxembourg (LU = LU00) | 9.0 | 8.8 (u) | 9.7 (u) | 8.2 (u) |
| Suisse (CH) | 8.7 | 10.3 | 9.2 | 5.6 |

#### Taux de NEET par diplôme (%), niveau national, 25-29 ans, 2025 (table `edat_lfse_21`) — [Eurostat edat_lfse_21](https://ec.europa.eu/eurostat/databrowser/view/edat_lfse_21/default/table?lang=fr)

Requête API : <https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/edat_lfse_21?format=JSON&lang=EN&sex=T&age=Y25-29&geo=EU27_2020&geo=FR&geo=BE&geo=LU&geo=CH&time=2025&isced11=TOTAL&isced11=ED0-2&isced11=ED3_4&isced11=ED5-8>

| Territoire | Tous niveaux | Faible (CITE 0-2) | Moyen (CITE 3-4) | Élevé (CITE 5-8) |
|---|---|---|---|---|
| UE-27 (EU27_2020) | 14.8 | 39.7 | 14.3 | 7.8 |
| France (FR) | 17.0 | 48.9 | 20.7 | 9.5 |
| Belgique (BE) | 14.6 | 44.7 | 17.5 | 6.8 |
| Luxembourg (LU = LU00) | 9.9 | : (u) | : (u) | 7.9 (u) |
| Suisse (CH) | 9.0 | 29.5 | 8.9 | 5.1 |

- France : en 2025, le taux de chômage des actifs sortis de formation initiale depuis 1 à 4 ans est de 16,6 % (15,5 % en 2024), contre 9,6 % pour 5 à 10 ans et 5,6 % pour 11 ans ou plus — [Insee, « Évolution du chômage », 02/07/2026](https://www.insee.fr/fr/statistiques/8733053)

### Inferences
- Les valeurs régionales françaises de l'indicateur « diplômés récents » varient fortement d'une année à l'autre (Hauts-de-France 64,2 % en 2024 puis 79,5 % en 2025 ; Occitanie 68,5 % puis 84,8 % ; Nouvelle-Aquitaine 88,8 % puis 80,8 %) : l'échantillon régional est trop petit pour un classement fin ; seuls les ordres de grandeur et les niveaux nationaux sont robustes. Une moyenne sur deux ou trois ans serait nécessaire avant affichage (attention à la rupture de série 2024).
- À 25-29 ans, être peu diplômé signifie être NEET pour près d'un jeune sur deux en France (48,9 %) et en Belgique (44,7 %), contre 29,5 % en Suisse.

### Gaps
- Régions : les taux d'emploi des diplômés récents de niveau moyen (CITE 3-4) sont supprimés ou peu fiables dans la majorité des régions françaises et à Bruxelles ; Corse entièrement supprimée.
- Le NEET par diplôme n'est pas diffusé au niveau régional (`edat_lfse_22` : âge et sexe seulement).
- Luxembourg : NEET par diplôme et diplômés récents de niveau moyen de faible fiabilité (u).

## Niveau national : croisement âge × diplôme détaillé (Eurostat) et base OCDE « Regards sur l'éducation » (France, Belgique, Luxembourg, Suisse, Canada)

### Takeaway
Au niveau des pays, la grille complète âge × diplôme est disponible pour 2025 : chez les 25-34 ans, le taux de chômage des peu diplômés est de 22,0 % en France, 20,5 % en Belgique, 13,3 % en Suisse et 13,0 % au Canada, contre 7,0 %, 5,1 %, 4,5 % et 6,2 % pour les diplômés du supérieur. Le Luxembourg est le seul pays dont les cellules fines sont presque toutes supprimées. La prime salariale du supérieur (secondaire supérieur = 100) va de 145 au Canada à 180 en France.

### Cited Findings
- Taux de chômage par âge détaillé et diplôme, niveau national, 2025 (table `lfsa_urgaed`, maj 30/10/2026) — [Eurostat lfsa_urgaed](https://ec.europa.eu/eurostat/databrowser/view/lfsa_urgaed/default/table?lang=fr). Requête API (15-24 ans ; les autres tableaux changent `age=`) : <https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/lfsa_urgaed?format=JSON&lang=EN&sex=T&age=Y15-24&geo=EU27_2020&geo=FR&geo=BE&geo=LU&geo=CH&time=2025&isced11=TOTAL&isced11=ED0-2&isced11=ED3_4&isced11=ED5-8>

#### Taux de chômage 2025 (%), 15-24 ans — [Eurostat lfsa_urgaed](https://ec.europa.eu/eurostat/databrowser/view/lfsa_urgaed/default/table?lang=fr)

| Territoire | Tous niveaux | Faible (CITE 0-2) | Moyen (CITE 3-4) | Élevé (CITE 5-8) |
|---|---|---|---|---|
| UE-27 (EU27_2020) | 15.2 | 21.2 | 13.2 | 12.8 |
| France (FR) | 19.8 | 33.5 | 19.9 | 13.4 |
| Belgique (BE) | 17.4 | 28.5 | 14.1 | 10.6 |
| Luxembourg (LU = LU00) | 19.4 | : (u) | : (u) | : (u) |
| Suisse (CH) | 8.8 | 8.8 | 9.0 | 7.4 (u) |

#### Taux de chômage 2025 (%), 25-29 ans — [Eurostat lfsa_urgaed](https://ec.europa.eu/eurostat/databrowser/view/lfsa_urgaed/default/table?lang=fr)

| Territoire | Tous niveaux | Faible (CITE 0-2) | Moyen (CITE 3-4) | Élevé (CITE 5-8) |
|---|---|---|---|---|
| UE-27 (EU27_2020) | 8.4 | 18.8 | 7.6 | 6.8 |
| France (FR) | 10.8 | 26.0 | 11.8 | 8.7 |
| Belgique (BE) | 9.2 | 25.0 | 10.5 | 6.5 |
| Luxembourg (LU = LU00) | 8.0 (u) | : (u) | : (u) | 7.6 (u) |
| Suisse (CH) | 6.4 | 14.0 | 6.5 | 5.1 |

#### Taux de chômage 2025 (%), 30-34 ans — [Eurostat lfsa_urgaed](https://ec.europa.eu/eurostat/databrowser/view/lfsa_urgaed/default/table?lang=fr)

| Territoire | Tous niveaux | Faible (CITE 0-2) | Moyen (CITE 3-4) | Élevé (CITE 5-8) |
|---|---|---|---|---|
| UE-27 (EU27_2020) | 6.1 | 15.1 | 6.1 | 4.2 |
| France (FR) | 7.5 | 18.7 | 8.7 | 5.3 |
| Belgique (BE) | 6.3 | 17.2 | 7.7 | 3.8 |
| Luxembourg (LU = LU00) | 4.5 (u) | : (u) | : (u) | : (u) |
| Suisse (CH) | 5.3 | 12.7 | 5.6 | 4.0 |

#### Taux de chômage 2025 (%), 25-49 ans — [Eurostat lfsa_urgaed](https://ec.europa.eu/eurostat/databrowser/view/lfsa_urgaed/default/table?lang=fr)

| Territoire | Tous niveaux | Faible (CITE 0-2) | Moyen (CITE 3-4) | Élevé (CITE 5-8) |
|---|---|---|---|---|
| UE-27 (EU27_2020) | 5.7 | 13.0 | 5.4 | 3.9 |
| France (FR) | 6.9 | 15.9 | 7.7 | 5.0 |
| Belgique (BE) | 5.6 | 14.0 | 6.5 | 3.6 |
| Luxembourg (LU = LU00) | 5.8 | 9.8 (u) | 6.0 (u) | 5.1 |
| Suisse (CH) | 5.0 | 9.4 | 4.8 | 4.2 |

#### Taux de chômage 2025 (%), 25-54 ans — [Eurostat lfsa_urgaed](https://ec.europa.eu/eurostat/databrowser/view/lfsa_urgaed/default/table?lang=fr)

| Territoire | Tous niveaux | Faible (CITE 0-2) | Moyen (CITE 3-4) | Élevé (CITE 5-8) |
|---|---|---|---|---|
| UE-27 (EU27_2020) | 5.4 | 12.0 | 5.1 | 3.7 |
| France (FR) | 6.6 | 14.0 | 7.1 | 4.8 |
| Belgique (BE) | 5.4 | 14.0 | 6.1 | 3.5 |
| Luxembourg (LU = LU00) | 5.8 | 9.2 (u) | 5.8 | 5.2 |
| Suisse (CH) | 4.7 | 8.8 | 4.4 | 4.1 |

#### Taux de chômage 2025 (%), 50-64 ans — [Eurostat lfsa_urgaed](https://ec.europa.eu/eurostat/databrowser/view/lfsa_urgaed/default/table?lang=fr)

| Territoire | Tous niveaux | Faible (CITE 0-2) | Moyen (CITE 3-4) | Élevé (CITE 5-8) |
|---|---|---|---|---|
| UE-27 (EU27_2020) | 4.4 | 8.3 | 3.8 | 2.9 |
| France (FR) | 5.0 | 8.0 | 5.0 | 3.9 |
| Belgique (BE) | 4.3 | 9.1 | 4.2 | 3.3 |
| Luxembourg (LU = LU00) | 5.1 | : (u) | : (u) | 5.0 (u) |
| Suisse (CH) | 3.6 | 6.3 | 3.1 | 3.2 |

#### Taux de chômage 2025 (%), 55-64 ans — [Eurostat lfsa_urgaed](https://ec.europa.eu/eurostat/databrowser/view/lfsa_urgaed/default/table?lang=fr)

| Territoire | Tous niveaux | Faible (CITE 0-2) | Moyen (CITE 3-4) | Élevé (CITE 5-8) |
|---|---|---|---|---|
| UE-27 (EU27_2020) | 4.4 | 8.2 | 3.8 | 3.1 |
| France (FR) | 5.2 | 8.1 | 5.0 | 4.2 |
| Belgique (BE) | 4.1 | 6.3 | 4.1 | 3.5 |
| Luxembourg (LU = LU00) | 4.5 (u) | : (u) | : (u) | : (u) |
| Suisse (CH) | 3.6 | 6.2 | 3.3 | 3.1 |

#### Taux de chômage 2025 (%), 25-64 ans — [Eurostat lfsa_urgaed](https://ec.europa.eu/eurostat/databrowser/view/lfsa_urgaed/default/table?lang=fr)

| Territoire | Tous niveaux | Faible (CITE 0-2) | Moyen (CITE 3-4) | Élevé (CITE 5-8) |
|---|---|---|---|---|
| UE-27 (EU27_2020) | 5.2 | 10.9 | 4.8 | 3.6 |
| France (FR) | 6.3 | 12.2 | 6.6 | 4.7 |
| Belgique (BE) | 5.2 | 12.0 | 5.7 | 3.5 |
| Luxembourg (LU = LU00) | 5.6 | 8.5 (u) | 5.5 | 5.1 |
| Suisse (CH) | 4.5 | 8.1 | 4.1 | 3.9 |

- Taux d'emploi par âge détaillé et diplôme, niveau national, 2025 (table `lfsa_ergaed`) — [Eurostat lfsa_ergaed](https://ec.europa.eu/eurostat/databrowser/view/lfsa_ergaed/default/table?lang=fr). Requête API (15-24 ans) : <https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/lfsa_ergaed?format=JSON&lang=EN&sex=T&age=Y15-24&geo=EU27_2020&geo=FR&geo=BE&geo=LU&geo=CH&time=2025&isced11=TOTAL&isced11=ED0-2&isced11=ED3_4&isced11=ED5-8>

#### Taux d'emploi 2025 (%), 15-24 ans — [Eurostat lfsa_ergaed](https://ec.europa.eu/eurostat/databrowser/view/lfsa_ergaed/default/table?lang=fr)

| Territoire | Tous niveaux | Faible (CITE 0-2) | Moyen (CITE 3-4) | Élevé (CITE 5-8) |
|---|---|---|---|---|
| UE-27 (EU27_2020) | 34.5 | 18.1 | 45.7 | 62.5 |
| France (FR) | 34.5 | 10.6 | 43.5 | 67.3 |
| Belgique (BE) | 28.4 | 15.1 | 36.0 | 53.9 |
| Luxembourg (LU = LU00) | 26.4 | 17.5 | 30.4 | 50.8 (u) |
| Suisse (CH) | 60.1 | 50.9 | 68.3 | 64.2 |

#### Taux d'emploi 2025 (%), 20-24 ans — [Eurostat lfsa_ergaed](https://ec.europa.eu/eurostat/databrowser/view/lfsa_ergaed/default/table?lang=fr)

| Territoire | Tous niveaux | Faible (CITE 0-2) | Moyen (CITE 3-4) | Élevé (CITE 5-8) |
|---|---|---|---|---|
| UE-27 (EU27_2020) | 53.5 | 48.0 | 51.9 | 62.7 |
| France (FR) | 56.4 | 34.4 | 52.3 | 67.4 |
| Belgique (BE) | 42.5 | 31.7 | 40.5 | 54.2 |
| Luxembourg (LU = LU00) | 37.3 | 31.2 (u) | 32.7 | 52.7 (u) |
| Suisse (CH) | 70.6 | 68.9 | 71.9 | 65.0 |

#### Taux d'emploi 2025 (%), 25-29 ans — [Eurostat lfsa_ergaed](https://ec.europa.eu/eurostat/databrowser/view/lfsa_ergaed/default/table?lang=fr)

| Territoire | Tous niveaux | Faible (CITE 0-2) | Moyen (CITE 3-4) | Élevé (CITE 5-8) |
|---|---|---|---|---|
| UE-27 (EU27_2020) | 76.9 | 55.1 | 77.1 | 83.1 |
| France (FR) | 77.3 | 46.0 | 74.1 | 84.4 |
| Belgique (BE) | 73.8 | 42.6 | 68.8 | 83.4 |
| Luxembourg (LU = LU00) | 78.6 | 65.8 (u) | 77.2 | 81.0 |
| Suisse (CH) | 84.7 | 66.4 | 85.6 | 87.5 |

#### Taux d'emploi 2025 (%), 30-34 ans — [Eurostat lfsa_ergaed](https://ec.europa.eu/eurostat/databrowser/view/lfsa_ergaed/default/table?lang=fr)

| Territoire | Tous niveaux | Faible (CITE 0-2) | Moyen (CITE 3-4) | Élevé (CITE 5-8) |
|---|---|---|---|---|
| UE-27 (EU27_2020) | 82.1 | 58.2 | 82.0 | 89.6 |
| France (FR) | 82.1 | 53.2 | 79.6 | 89.3 |
| Belgique (BE) | 83.1 | 52.3 | 80.0 | 92.0 |
| Luxembourg (LU = LU00) | 89.8 | 70.5 (u) | 84.0 | 94.1 |
| Suisse (CH) | 86.8 | 66.7 | 85.4 | 91.7 |

#### Taux d'emploi 2025 (%), 25-54 ans — [Eurostat lfsa_ergaed](https://ec.europa.eu/eurostat/databrowser/view/lfsa_ergaed/default/table?lang=fr)

| Territoire | Tous niveaux | Faible (CITE 0-2) | Moyen (CITE 3-4) | Élevé (CITE 5-8) |
|---|---|---|---|---|
| UE-27 (EU27_2020) | 82.7 | 63.4 | 83.2 | 90.0 |
| France (FR) | 83.0 | 59.6 | 81.7 | 89.9 |
| Belgique (BE) | 81.3 | 53.6 | 78.7 | 90.4 |
| Luxembourg (LU = LU00) | 85.2 | 72.6 | 82.7 | 88.9 |
| Suisse (CH) | 86.3 | 71.6 | 86.5 | 90.2 |

#### Taux d'emploi 2025 (%), 55-64 ans — [Eurostat lfsa_ergaed](https://ec.europa.eu/eurostat/databrowser/view/lfsa_ergaed/default/table?lang=fr)

| Territoire | Tous niveaux | Faible (CITE 0-2) | Moyen (CITE 3-4) | Élevé (CITE 5-8) |
|---|---|---|---|---|
| UE-27 (EU27_2020) | 66.4 | 50.6 | 67.0 | 80.3 |
| France (FR) | 61.7 | 46.0 | 59.6 | 76.8 |
| Belgique (BE) | 61.5 | 37.7 | 58.4 | 77.3 |
| Luxembourg (LU = LU00) | 48.9 | 32.4 | 41.5 | 69.4 |
| Suisse (CH) | 75.3 | 60.6 | 74.7 | 83.4 |

- Base OCDE « Education at a Glance » (collecte LSO-NEAC ; année de référence 2025 disponible, y compris pour le Canada), extraite le 22/11/2026 par l'API SDMX de l'OCDE (requêtes ci-dessous avec l'en-tête `Accept: application/vnd.sdmx.data+csv; labels=both` ; l'API a répondu normalement, contrairement aux pages web de l'OCDE). Les valeurs 2025 de la France, de la Belgique et de la Suisse sont identiques à celles d'Eurostat (même enquête sur les forces de travail). Pour le Canada, le niveau « moyen » (CITE 3-4) inclut les certificats de métiers et le « tertiaire court » (CITE 5) les diplômes collégiaux/cégep — [OCDE SDMX DF_LSO_NEAC_UNEMP](https://sdmx.oecd.org/public/rest/data/OECD.EDU.IMEP,DSD_EAG_LSO_EA@DF_LSO_NEAC_UNEMP,/all?startPeriod=2022) ; [OCDE SDMX DF_LSO_NEAC_EMP](https://sdmx.oecd.org/public/rest/data/OECD.EDU.IMEP,DSD_EAG_LSO_EA@DF_LSO_NEAC_EMP,/all?startPeriod=2022) ; [OCDE SDMX DF_LSO_NEAC_INAC](https://sdmx.oecd.org/public/rest/data/OECD.EDU.IMEP,DSD_EAG_LSO_EA@DF_LSO_NEAC_INAC,/all?startPeriod=2022)

#### OCDE — Taux de chômage (%), 25-34 ans, 2025 — [OCDE SDMX DF_LSO_NEAC_UNEMP](https://sdmx.oecd.org/public/rest/data/OECD.EDU.IMEP,DSD_EAG_LSO_EA@DF_LSO_NEAC_UNEMP,/all?startPeriod=2022)

| Pays | Tous niveaux | Faible (CITE 0-2) | Moyen (CITE 3-4) | Tertiaire (CITE 5-8) | Tertiaire court (CITE 5) | Licence/bachelor (CITE 6) |
| --- | --- | --- | --- | --- | --- | --- |
| France | 9.1 | 22.0 | 10.1 | 7.0 | 6.1 | 7.6 |
| Belgique | 7.6 | 20.5 | 9.1 | 5.1 | : | 6.2 |
| Luxembourg | : | : | : | : | : | : |
| Suisse | 5.8 | 13.3 (u) | 6.0 | 4.5 | : (m) | 3.9 |
| Canada | 7.1 | 13.0 | 8.5 | 6.2 | 6.3 | 6.4 |
| Moyenne OCDE | 6.3 | 13.9 | 6.8 | 5.0 | 5.7 | 5.2 |

#### OCDE — Taux de chômage (%), 55-64 ans, 2025 — [OCDE SDMX DF_LSO_NEAC_UNEMP](https://sdmx.oecd.org/public/rest/data/OECD.EDU.IMEP,DSD_EAG_LSO_EA@DF_LSO_NEAC_UNEMP,/all?startPeriod=2022)

| Pays | Tous niveaux | Faible (CITE 0-2) | Moyen (CITE 3-4) | Tertiaire (CITE 5-8) | Tertiaire court (CITE 5) | Licence/bachelor (CITE 6) |
| --- | --- | --- | --- | --- | --- | --- |
| France | 5.2 | 8.1 | 5.0 | 4.2 | 3.9 | 4.0 |
| Belgique | 4.1 | 6.3 | 4.1 | 3.5 | : | 3.8 |
| Luxembourg | : | : | : | : | : | : |
| Suisse | 3.6 | 6.2 | 3.3 | 3.1 | : (m) | 3.4 |
| Canada | 5.6 | 8.2 | 6.0 | 5.0 | 5.0 | 5.1 |
| Moyenne OCDE | 4.0 | 7.6 | 4.2 | 3.0 | 3.3 | 3.5 |

#### OCDE — Taux de chômage (%), 25-64 ans, 2025 — [OCDE SDMX DF_LSO_NEAC_UNEMP](https://sdmx.oecd.org/public/rest/data/OECD.EDU.IMEP,DSD_EAG_LSO_EA@DF_LSO_NEAC_UNEMP,/all?startPeriod=2022)

| Pays | Tous niveaux | Faible (CITE 0-2) | Moyen (CITE 3-4) | Tertiaire (CITE 5-8) | Tertiaire court (CITE 5) | Licence/bachelor (CITE 6) |
| --- | --- | --- | --- | --- | --- | --- |
| France | 6.3 | 12.2 | 6.6 | 4.7 | 4.2 | 4.7 |
| Belgique | 5.2 | 12.0 | 5.7 | 3.5 | 3.7 | 3.9 |
| Luxembourg | : | : | : | : | : | : |
| Suisse | 4.5 | 8.1 | 4.1 | 3.9 | : (m) | 3.6 |
| Canada | 5.8 | 10.0 | 6.7 | 5.1 | 5.1 | 5.1 |
| Moyenne OCDE | 4.7 | 9.7 | 5.1 | 3.6 | 4.0 | 3.8 |

#### OCDE — Taux d'emploi (%), 25-34 ans, 2025 — [OCDE SDMX DF_LSO_NEAC_EMP](https://sdmx.oecd.org/public/rest/data/OECD.EDU.IMEP,DSD_EAG_LSO_EA@DF_LSO_NEAC_EMP,/all?startPeriod=2022)

| Pays | Tous niveaux | Faible (CITE 0-2) | Moyen (CITE 3-4) | Tertiaire (CITE 5-8) | Tertiaire court (CITE 5) | Licence/bachelor (CITE 6) |
| --- | --- | --- | --- | --- | --- | --- |
| France | 79.7 | 49.8 | 76.9 | 86.9 | 87.8 | 82.9 |
| Belgique | 78.6 | 48.0 | 74.4 | 87.8 | : | 85.9 |
| Luxembourg | 84.4 | : | : | 88.0 | : | : |
| Suisse | 85.9 | 66.6 | 85.5 | 89.8 | : (m) | 89.3 |
| Canada | 82.1 | 57.5 | 77.6 | 85.7 | 84.3 | 85.9 |
| Moyenne OCDE | 80.9 | 58.3 | 78.9 | 86.6 | 85.8 | 85.0 |

#### OCDE — Taux d'emploi (%), 55-64 ans, 2025 — [OCDE SDMX DF_LSO_NEAC_EMP](https://sdmx.oecd.org/public/rest/data/OECD.EDU.IMEP,DSD_EAG_LSO_EA@DF_LSO_NEAC_EMP,/all?startPeriod=2022)

| Pays | Tous niveaux | Faible (CITE 0-2) | Moyen (CITE 3-4) | Tertiaire (CITE 5-8) | Tertiaire court (CITE 5) | Licence/bachelor (CITE 6) |
| --- | --- | --- | --- | --- | --- | --- |
| France | 61.7 | 46.0 | 59.6 | 76.8 | 72.9 | 78.0 |
| Belgique | 61.5 | 37.7 | 58.4 | 77.3 | : | 74.7 |
| Luxembourg | 49.2 | : | : | : | : | : |
| Suisse | 75.5 | 60.6 | 74.7 | 83.4 | : (m) | 81.9 |
| Canada | 63.8 | 49.8 | 62.0 | 67.4 | 65.6 | 67.5 |
| Moyenne OCDE | 67.1 | 51.7 | 66.5 | 77.7 | 72.8 | 76.4 |

#### OCDE — Taux d'emploi (%), 25-64 ans, 2025 — [OCDE SDMX DF_LSO_NEAC_EMP](https://sdmx.oecd.org/public/rest/data/OECD.EDU.IMEP,DSD_EAG_LSO_EA@DF_LSO_NEAC_EMP,/all?startPeriod=2022)

| Pays | Tous niveaux | Faible (CITE 0-2) | Moyen (CITE 3-4) | Tertiaire (CITE 5-8) | Tertiaire court (CITE 5) | Licence/bachelor (CITE 6) |
| --- | --- | --- | --- | --- | --- | --- |
| France | 77.5 | 54.4 | 75.0 | 87.6 | 86.4 | 86.0 |
| Belgique | 76.3 | 48.1 | 73.1 | 87.7 | 80.9 | 86.1 |
| Luxembourg | 77.4 | 57.1 | 72.1 | 86.6 | : | 83.3 |
| Suisse | 83.7 | 68.1 | 83.1 | 88.9 | : (m) | 88.4 |
| Canada | 78.8 | 57.1 | 74.8 | 82.8 | 80.2 | 83.8 |
| Moyenne OCDE | 79.2 | 59.4 | 77.4 | 87.0 | 83.4 | 85.9 |

#### OCDE — Taux d'inactivité (%), 25-34 ans, 2025 — [OCDE SDMX DF_LSO_NEAC_INAC](https://sdmx.oecd.org/public/rest/data/OECD.EDU.IMEP,DSD_EAG_LSO_EA@DF_LSO_NEAC_INAC,/all?startPeriod=2022)

| Pays | Tous niveaux | Faible (CITE 0-2) | Moyen (CITE 3-4) | Tertiaire (CITE 5-8) | Tertiaire court (CITE 5) | Licence/bachelor (CITE 6) |
| --- | --- | --- | --- | --- | --- | --- |
| France | 12.2 | 36.1 | 14.4 | 6.6 | 6.4 | 10.3 |
| Belgique | 14.9 | 39.7 | 18.2 | 7.5 | : | 8.4 |
| Luxembourg | : | : | : | : | : | : |
| Suisse | 8.8 | 23.2 | 9.1 | 5.9 | : (m) | 7.2 |
| Canada | 11.6 | 33.9 | 15.2 | 8.6 | 10.0 | 8.2 |
| Moyenne OCDE | 13.8 | 32.5 | 15.5 | 8.9 | 10.2 | 10.4 |

#### OCDE — Taux d'inactivité (%), 55-64 ans, 2025 — [OCDE SDMX DF_LSO_NEAC_INAC](https://sdmx.oecd.org/public/rest/data/OECD.EDU.IMEP,DSD_EAG_LSO_EA@DF_LSO_NEAC_INAC,/all?startPeriod=2022)

| Pays | Tous niveaux | Faible (CITE 0-2) | Moyen (CITE 3-4) | Tertiaire (CITE 5-8) | Tertiaire court (CITE 5) | Licence/bachelor (CITE 6) |
| --- | --- | --- | --- | --- | --- | --- |
| France | 34.9 | 49.9 | 37.3 | 19.9 | 24.1 | 18.8 |
| Belgique | 35.9 | 59.8 | 39.1 | 19.9 | : | 22.3 |
| Luxembourg | 48.3 | : | : | : | : | : |
| Suisse | 21.7 | 35.4 | 22.8 | 13.9 | : (m) | 15.3 |
| Canada | 32.5 | 45.8 | 34.0 | 29.0 | 30.9 | 28.9 |
| Moyenne OCDE | 30.1 | 44.2 | 30.6 | 19.9 | 25.3 | 21.1 |

#### OCDE — Taux d'inactivité (%), 25-64 ans, 2025 — [OCDE SDMX DF_LSO_NEAC_INAC](https://sdmx.oecd.org/public/rest/data/OECD.EDU.IMEP,DSD_EAG_LSO_EA@DF_LSO_NEAC_INAC,/all?startPeriod=2022)

| Pays | Tous niveaux | Faible (CITE 0-2) | Moyen (CITE 3-4) | Tertiaire (CITE 5-8) | Tertiaire court (CITE 5) | Licence/bachelor (CITE 6) |
| --- | --- | --- | --- | --- | --- | --- |
| France | 17.3 | 38.0 | 19.7 | 8.1 | 9.8 | 9.7 |
| Belgique | 19.6 | 45.3 | 22.5 | 9.1 | 16.0 | 10.4 |
| Luxembourg | 17.9 | : | : | : | : | : |
| Suisse | 12.4 | 25.9 | 13.3 | 7.5 | : (m) | 8.4 |
| Canada | 16.4 | 36.6 | 19.8 | 12.7 | 15.5 | 11.7 |
| Moyenne OCDE | 16.9 | 34.1 | 18.3 | 9.7 | 13.5 | 10.6 |

#### OCDE — taux de chômage (%), 25-34 ans, 2024 (dernière année complète pour le Luxembourg) — [OCDE SDMX DF_LSO_NEAC_UNEMP](https://sdmx.oecd.org/public/rest/data/OECD.EDU.IMEP,DSD_EAG_LSO_EA@DF_LSO_NEAC_UNEMP,/all?startPeriod=2022)

| Pays | Tous niveaux | Faible (CITE 0-2) | Moyen (CITE 3-4) | Tertiaire (CITE 5-8) | Tertiaire court (CITE 5) | Licence/bachelor (CITE 6) |
| --- | --- | --- | --- | --- | --- | --- |
| France | 8.5 | 18.5 | 9.9 | 6.3 | 6.2 | 7.7 |
| Belgique | 7.1 | 17.4 | 8.9 | 4.2 | 5.9 | 4.5 |
| Luxembourg | 6.6 | : | : | 4.9 | : | : |
| Suisse | 4.9 | 11.5 | 4.9 | 4.0 | : (m) | 3.9 |
| Canada | 6.8 | 14.7 | 8.1 | 6.0 | 5.7 | 6.0 |
| Moyenne OCDE | 6.5 | 13.4 | 7.2 | 5.1 | 6.1 | 5.2 |

#### OCDE — taux d'emploi (%), 55-64 ans, 2024 (dernière année complète pour le Luxembourg) — [OCDE SDMX DF_LSO_NEAC_EMP](https://sdmx.oecd.org/public/rest/data/OECD.EDU.IMEP,DSD_EAG_LSO_EA@DF_LSO_NEAC_EMP,/all?startPeriod=2022)

| Pays | Tous niveaux | Faible (CITE 0-2) | Moyen (CITE 3-4) | Tertiaire (CITE 5-8) | Tertiaire court (CITE 5) | Licence/bachelor (CITE 6) |
| --- | --- | --- | --- | --- | --- | --- |
| France | 60.3 | 46.2 | 58.6 | 74.6 | 70.3 | 74.2 |
| Belgique | 59.4 | 37.7 | 56.7 | 77.2 | 55.9 | 74.8 |
| Luxembourg | 48.3 | 34.2 | 44.0 | 64.9 | 48.8 | 62.3 |
| Suisse | 75.2 | 58.8 | 74.9 | 83.5 | : (m) | 83.0 |
| Canada | 64.4 | 51.1 | 62.5 | 68.2 | 66.1 | 68.1 |
| Moyenne OCDE | 66.1 | 50.5 | 65.3 | 76.8 | 71.6 | 75.9 |

- Revenus du travail relatifs par niveau de diplôme (secondaire supérieur = 100), ensemble des travailleurs (temps complet et partiel), dernière année disponible par pays — [OCDE SDMX DF_LSO_EARN_REL_UPPER](https://sdmx.oecd.org/public/rest/data/OECD.EDU.IMEP,DSD_EAG_LSO_EA@DF_LSO_EARN_REL_UPPER,/all?startPeriod=2022)

#### OCDE — revenus relatifs (secondaire supérieur = 100), 25-64 ans, tous temps de travail — [OCDE SDMX DF_LSO_EARN_REL_UPPER](https://sdmx.oecd.org/public/rest/data/OECD.EDU.IMEP,DSD_EAG_LSO_EA@DF_LSO_EARN_REL_UPPER,/all?startPeriod=2022)

| Pays | Année | Faible (CITE 0-2) | Moyen (CITE 3-4) | Tertiaire court (CITE 5) | Licence/bachelor (CITE 6) | Master-doctorat (CITE 7-8) | Tertiaire (CITE 5-8) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| France | 2022 | 69 | 100 | 143 | 159 | 229 | 180 |
| Belgique | 2023 | 73 | 101 | .. | 135 | 169 | 151 |
| Luxembourg | 2024 | 75 | 100 | 126 | 143 | 163 | 155 |
| Suisse | 2024 | 82 | 100 | .. | 136 (w) | 172 (w) | 153 |
| Canada | 2023 | 85 | 109 | 120 | 151 | 181 | 145 |
| Moyenne OCDE | 2024 | 79 | 100 | 117 | 143 | 189 | 154 |

#### OCDE — revenus relatifs (secondaire supérieur = 100), 25-34 ans, tous temps de travail — [OCDE SDMX DF_LSO_EARN_REL_UPPER](https://sdmx.oecd.org/public/rest/data/OECD.EDU.IMEP,DSD_EAG_LSO_EA@DF_LSO_EARN_REL_UPPER,/all?startPeriod=2022)

| Pays | Année | Faible (CITE 0-2) | Moyen (CITE 3-4) | Tertiaire court (CITE 5) | Licence/bachelor (CITE 6) | Master-doctorat (CITE 7-8) | Tertiaire (CITE 5-8) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| France | 2022 | 70 | 100 | 128 | 136 | 186 | 159 |
| Belgique | 2023 | 72 (u) | 102 | .. | 124 | 151 | 139 |
| Luxembourg | 2024 | 71 | 100 | .. | 128 | 138 | 134 |
| Suisse | 2024 | 79 | 100 | .. | 126 (w) | 144 (w) | 133 |
| Canada | 2023 | 94 | 118 | 118 | 150 | 161 | 141 |
| Moyenne OCDE | 2024 | 81 | 100 | 113 | 133 | 157 | 138 |

#### OCDE — revenus relatifs (secondaire supérieur = 100), 55-64 ans, tous temps de travail — [OCDE SDMX DF_LSO_EARN_REL_UPPER](https://sdmx.oecd.org/public/rest/data/OECD.EDU.IMEP,DSD_EAG_LSO_EA@DF_LSO_EARN_REL_UPPER,/all?startPeriod=2022)

| Pays | Année | Faible (CITE 0-2) | Moyen (CITE 3-4) | Tertiaire court (CITE 5) | Licence/bachelor (CITE 6) | Master-doctorat (CITE 7-8) | Tertiaire (CITE 5-8) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| France | 2022 | 65 | 100 | 161 | 193 | 341 | 226 |
| Belgique | 2023 | 70 | 101 | .. | 145 | 221 | 180 |
| Luxembourg | 2024 | 63 | 99 | .. | 162 | 184 | 169 |
| Suisse | 2024 | 79 | 100 | .. | 145 (w) | 188 (w) | 164 |
| Canada | 2023 | 84 | 105 | 117 | 174 | 215 | 154 |
| Moyenne OCDE | 2024 | 74 | 100 | 123 | 154 | 213 | 169 |

#### OCDE — revenus relatifs (secondaire supérieur = 100), 25-64 ans, travailleurs à temps complet seulement — [OCDE SDMX DF_LSO_EARN_REL_UPPER](https://sdmx.oecd.org/public/rest/data/OECD.EDU.IMEP,DSD_EAG_LSO_EA@DF_LSO_EARN_REL_UPPER,/all?startPeriod=2022)

| Pays | Année | Faible (CITE 0-2) | Moyen (CITE 3-4) | Tertiaire court (CITE 5) | Licence/bachelor (CITE 6) | Master-doctorat (CITE 7-8) | Tertiaire (CITE 5-8) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| France | 2022 | 88 | 100 | 127 | 139 | 194 | 157 |
| Belgique | 2023 | 84 | 101 | .. | 122 | 151 | 137 |
| Luxembourg | 2024 | 76 | 100 | 128 | 142 | 156 | 150 |
| Suisse | 2024 | 83 | 100 | .. | 134 (w) | 163 (w) | 148 |
| Canada | 2023 | 90 | 107 | 116 | 148 | 172 | 141 |
| Moyenne OCDE | 2024 | 83 | 100 | 115 | 141 | 182 | 151 |

### Inferences
- Le Canada présente le gradient de chômage par diplôme le plus plat des cinq pays chez les 55-64 ans (8,2 % / 6,0 % / 5,0 %) et un taux d'emploi des 55-64 ans diplômés du supérieur nettement plus bas (67,4 %) qu'en Europe (76,8 % en France, 83,4 % en Suisse) : au Canada le diplôme protège moins du chômage mais l'inactivité des seniors diplômés est plus fréquente (29,0 % d'inactifs).
- En France, la prime salariale du diplôme augmente fortement avec l'âge (indice 159 à 25-34 ans, 226 à 55-64 ans pour le supérieur), alors qu'au Canada elle reste presque constante (141 puis 154) ; l'année de référence diffère toutefois selon les pays (2022 pour la France, 2023 pour la Belgique et le Canada, 2024 pour le Luxembourg et la Suisse).
- Le Luxembourg cumule un taux d'emploi très élevé des 30-34 ans diplômés du supérieur (94,1 %) et le taux d'emploi des 55-64 ans le plus bas (48,9 %) : le profil d'âge compte davantage que le diplôme en fin de carrière.

### Gaps
- Luxembourg : en 2025, les taux de chômage par diplôme sont supprimés pour toutes les tranches fines (15-24, 25-29, 30-34, 55-64) ; l'OCDE ne publie pas encore le détail 2025 par diplôme des 25-34 et 55-64 ans (valeurs 2024 partielles seulement).
- La catégorie OCDE « master-doctorat » (CITE 7-8) est manquante pour les cinq pays dans les tableaux de chômage et d'emploi extraits.
- L'édition imprimée exacte de « Regards sur l'éducation » correspondant à ces données (vraisemblablement l'édition 2026) n'a pas été vérifiée ; seules les données de la base ont été extraites. Aucune donnée infranationale (provinces canadiennes, régions) n'a été cherchée dans la base OCDE.

## Canada : chômage et emploi par âge et scolarité, par province et territoire (Enquête sur la population active)

### Takeaway
En 2025, le taux de chômage des 15-24 ans sans diplôme d'études secondaires est de 23,5 % au Canada, 25,2 % en Ontario et 15,9 % au Québec ; celui des 25-54 ans diplômés universitaires de 5,1 % au Canada, 5,8 % en Ontario, 4,4 % au Québec et 4,1 % au Nouveau-Brunswick. Le Québec a les taux les plus bas des grandes provinces à presque tous les profils ; les petites provinces (Î.-P.-É., Terre-Neuve, Saskatchewan) ont de nombreuses cellules supprimées, et les territoires n'ont aucune ventilation par scolarité.

### Cited Findings
- Source principale : Statistique Canada, tableau 14-10-0020-01 « Taux de chômage, taux d'activité et taux d'emploi selon le niveau de scolarité atteint, données annuelles », fichier complet téléchargé le 22/11/2026 (<https://www150.statcan.gc.ca/n1/tbl/csv/14100020-eng.zip>, fichier daté du 9 janvier 2026, dernière année 2025), genre = total — [Statistique Canada, tableau 14-10-0020-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=1410002001)
- Catégories de scolarité de l'EPA : 0 à 8 années ; études secondaires partielles ; diplôme d'études secondaires (DES) ; études postsecondaires partielles ; certificat ou diplôme d'études postsecondaires (métiers, collège/cégep, certificat universitaire inférieur au baccalauréat) ; grade universitaire (baccalauréat et plus) — [Statistique Canada, tableau 14-10-0020-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=1410002001)

#### Grille exploitable par machine : province × âge × scolarité, taux de chômage (tc) et taux d'emploi (te), 2025 et cumul 2023-2025

Colonnes : `tc_*_2025` = taux de chômage 2025 ; `tc_*_note` = `publie` (taux publié), `calc_somme` ([calc] somme des chômeurs / somme des actifs des catégories regroupées), `calc_residuel` ([calc] total moins les autres catégories, utilisé quand « 0 à 8 années » est supprimé ; fragile), `x` (supprimé), `nc` (non calculable) ; `tc_*_2023_2025_calc` = [calc] chômeurs cumulés 2023-2025 / actifs cumulés 2023-2025 (`tc_*_n` = nombre d'années utilisées) ; `te_*_2025` = taux d'emploi 2025 (publié pour tous/postsec/univ, [calc] pour les regroupements). Groupes : `tous` ; `faible` = sans DES (0-8 années + secondaire partiel) ; `moyen` = DES + postsecondaire partiel ; `postsec` = certificat/diplôme postsecondaire ; `univ` = grade universitaire ; `eleve_large` = postsec + univ. Fichier : `donnees_age_diplome_statcan_1410002001_grille.csv`. — [Statistique Canada, tableau 14-10-0020-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=1410002001)

```csv
province,age,tc_tous_2025,tc_tous_note,tc_faible_2025,tc_faible_note,tc_moyen_2025,tc_moyen_note,tc_postsec_2025,tc_postsec_note,tc_univ_2025,tc_univ_note,tc_eleve_large_2025,tc_eleve_large_note,tc_tous_2023_2025_calc,tc_tous_n,tc_faible_2023_2025_calc,tc_faible_n,tc_moyen_2023_2025_calc,tc_moyen_n,tc_postsec_2023_2025_calc,tc_postsec_n,tc_univ_2023_2025_calc,tc_univ_n,tc_eleve_large_2023_2025_calc,tc_eleve_large_n,te_tous_2025,te_faible_2025,te_moyen_2025,te_postsec_2025,te_univ_2025,te_eleve_large_2025
Canada,15-24,13.8,publie,23.5,calc_somme,13.2,calc_somme,8.4,publie,10.6,publie,9.2,calc_somme,12.6,3,20.3,3,12.2,3,7.5,3,9.6,3,8.2,3,54.3,30.5,58.6,76.8,72.8,75.3
Canada,25-54,5.8,publie,10.7,calc_somme,7.6,calc_somme,5.2,publie,5.1,publie,5.1,calc_somme,5.2,3,10.1,3,6.9,3,4.6,3,4.6,3,4.6,3,83.3,61.2,75.9,85.5,87.7,86.7
Canada,55-64,5.6,publie,8.1,calc_somme,5.8,calc_somme,5.5,publie,5.0,publie,5.2,calc_somme,5.1,3,7.7,3,5.4,3,4.9,3,4.5,3,4.7,3,63.7,49.9,60.7,65.3,69.2,67.0
Canada,15+,6.8,publie,14.6,calc_somme,8.8,calc_somme,5.5,publie,5.3,publie,5.4,calc_somme,6.2,3,13.2,3,8.0,3,4.9,3,4.8,3,4.9,3,60.8,31.3,54.5,65.3,73.8,69.5
Quebec,15-24,9.7,publie,15.9,calc_somme,9.0,calc_somme,6.6,publie,9.3,publie,7.1,calc_somme,8.9,3,14.2,3,8.8,3,5.6,3,7.8,3,6.0,3,61.9,42.6,64.4,76.5,71.3,75.5
Quebec,25-54,4.8,publie,8.1,calc_somme,6.3,calc_somme,4.2,publie,4.4,publie,4.3,calc_somme,4.4,3,8.5,3,5.8,3,3.9,3,3.9,3,3.9,3,86.1,67.7,80.3,88.5,89.2,88.8
Quebec,55-64,5.5,publie,7.6,calc_somme,,nc,5.5,publie,5.0,publie,5.3,calc_somme,4.9,3,7.4,3,,0,4.4,3,4.5,3,4.4,3,64.3,52.6,63.1,65.3,69.5,66.9
Quebec,15+,5.6,publie,10.4,calc_somme,6.8,calc_somme,4.8,publie,4.6,publie,4.7,calc_somme,5.1,3,9.8,3,6.4,3,4.2,3,4.2,3,4.2,3,61.3,35.9,53.9,66.9,73.6,69.8
Nouveau-Brunswick,15-24,14.9,publie,24.0,calc_residuel,14.5,calc_somme,10.3,publie,8.3,publie,9.7,calc_somme,12.8,3,19.5,3,13.7,3,6.9,3,8.5,3,7.4,3,54.0,30.8,59.9,75.8,73.3,75.0
Nouveau-Brunswick,25-54,5.6,publie,21.0,calc_residuel,7.8,calc_somme,4.5,publie,4.1,publie,4.3,calc_somme,5.6,3,16.9,3,8.4,3,4.7,3,3.9,3,4.3,3,83.3,53.5,73.4,86.1,90.2,87.9
Nouveau-Brunswick,55-64,7.0,publie,14.4,calc_somme,,nc,6.2,publie,4.5,publie,5.6,calc_somme,6.9,3,15.6,3,,0,5.9,3,4.1,3,5.2,3,58.5,44.7,57.2,62.6,62.9,62.7
Nouveau-Brunswick,15+,7.1,publie,19.3,calc_somme,9.3,calc_somme,5.4,publie,4.3,publie,4.9,calc_somme,6.9,3,17.5,3,9.3,3,5.2,3,4.2,3,4.8,3,56.2,25.5,51.4,62.8,72.2,66.6
Ontario,15-24,16.0,publie,25.2,calc_somme,16.0,calc_somme,10.7,publie,12.1,publie,11.3,calc_somme,14.7,3,22.5,3,14.4,3,10.0,3,11.5,3,10.7,3,50.7,27.7,52.5,74.8,71.9,73.4
Ontario,25-54,6.7,publie,12.2,calc_somme,9.1,calc_somme,6.1,publie,5.8,publie,5.9,calc_somme,5.7,3,10.7,3,7.7,3,5.2,3,5.1,3,5.1,3,81.9,57.2,72.1,83.4,87.0,85.6
Ontario,55-64,5.8,publie,8.0,calc_somme,6.5,calc_somme,5.6,publie,5.2,publie,5.4,calc_somme,5.0,3,7.2,2,6.3,2,4.6,3,4.7,3,4.6,3,63.8,48.7,59.6,65.8,69.0,67.3
Ontario,15+,7.7,publie,16.1,calc_somme,10.4,calc_somme,6.3,publie,6.0,publie,6.1,calc_somme,6.8,3,14.6,3,9.1,3,5.4,3,5.3,3,5.4,3,60.0,28.7,51.3,64.5,73.6,69.5
Manitoba,15-24,11.9,publie,23.8,calc_somme,10.6,calc_somme,5.6,publie,7.0,publie,6.1,calc_somme,10.6,3,21.6,2,9.7,3,5.2,3,7.5,2,5.9,2,58.2,28.9,68.4,83.1,83.5,83.2
Manitoba,25-54,4.8,publie,10.8,calc_residuel,5.4,calc_somme,4.0,publie,4.3,publie,4.1,calc_somme,4.4,3,10.0,3,5.4,3,3.8,3,3.7,3,3.7,3,84.1,58.3,79.0,87.3,89.2,88.3
Manitoba,55-64,4.5,publie,,nc,,nc,5.6,publie,3.2,publie,4.5,calc_somme,4.4,3,,0,,0,4.9,3,3.5,3,4.3,3,62.5,56.1,60.1,61.4,70.2,65.1
Manitoba,15+,5.9,publie,14.0,calc_somme,6.7,calc_somme,4.5,publie,4.2,publie,4.4,calc_somme,5.4,3,12.7,3,6.4,3,4.1,3,3.8,3,3.9,3,62.7,32.8,61.3,66.5,76.5,71.4
Saskatchewan,15-24,11.9,publie,,nc,10.7,calc_somme,6.3,publie,,x,,nc,11.0,3,19.3,1,10.2,3,5.3,3,9.5,1,6.2,1,55.8,30.4,66.0,84.2,78.3,82.2
Saskatchewan,25-54,4.2,publie,9.6,calc_residuel,5.5,calc_somme,3.4,publie,3.6,publie,3.5,calc_somme,4.3,3,10.4,3,5.3,3,3.6,3,3.7,3,3.6,3,85.5,64.2,80.3,88.8,89.5,89.2
Saskatchewan,55-64,3.9,publie,,nc,,nc,4.2,publie,3.2,publie,3.8,calc_somme,3.5,3,,0,,0,3.4,3,2.9,3,3.2,3,67.6,53.6,67.1,67.9,74.6,70.3
Saskatchewan,15+,5.2,publie,12.8,calc_somme,6.3,calc_somme,3.6,publie,3.7,publie,3.6,calc_somme,5.1,3,12.2,3,6.1,3,3.7,3,3.7,3,3.7,3,63.9,34.0,62.3,68.9,76.9,72.4
Alberta,15-24,15.7,publie,31.4,calc_residuel,13.0,calc_somme,6.6,publie,9.9,publie,7.9,calc_somme,14.2,3,26.1,3,12.6,3,6.7,3,8.5,3,7.4,3,54.3,26.3,66.1,82.7,75.7,79.7
Alberta,25-54,5.9,publie,11.6,calc_residuel,6.9,calc_somme,5.8,publie,5.0,publie,5.4,calc_somme,5.5,3,10.1,3,7.3,3,4.9,3,4.7,3,4.8,3,82.9,58.9,79.2,84.1,87.3,85.8
Alberta,55-64,5.7,publie,,nc,,nc,4.4,publie,6.1,publie,5.2,calc_somme,5.7,3,,0,,0,5.2,3,5.7,3,5.4,3,65.3,50.3,62.2,68.1,69.7,68.8
Alberta,15+,7.2,publie,18.6,calc_somme,8.5,calc_somme,5.6,publie,5.3,publie,5.4,calc_somme,6.7,3,15.6,3,8.4,3,5.1,3,4.9,3,5.0,3,63.9,33.0,62.0,67.0,75.5,71.1
Colombie-Britannique,15-24,13.4,publie,25.6,calc_residuel,11.9,calc_somme,9.7,publie,8.9,publie,9.4,calc_somme,11.5,3,20.8,3,11.0,3,7.2,3,6.6,3,7.0,3,52.2,25.5,58.5,75.8,71.4,74.1
Colombie-Britannique,25-54,5.3,publie,10.6,calc_residuel,6.6,calc_somme,4.7,publie,4.7,publie,4.7,calc_somme,4.9,3,10.1,3,5.7,3,4.4,3,4.6,3,4.5,3,83.8,62.5,78.0,85.8,86.9,86.5
Colombie-Britannique,55-64,4.8,publie,,nc,,nc,5.0,publie,4.5,publie,4.7,calc_somme,4.6,3,,0,,0,4.8,3,3.9,3,4.3,3,64.1,49.2,60.2,65.1,69.4,67.2
Colombie-Britannique,15+,6.2,publie,15.5,calc_somme,7.6,calc_somme,5.2,publie,4.8,publie,5.0,calc_somme,5.7,3,13.3,3,6.9,3,4.7,3,4.5,3,4.6,3,60.9,29.1,55.1,64.2,73.0,68.9
Nouvelle-Ecosse,15-24,13.0,publie,24.2,calc_residuel,12.5,calc_somme,5.5,publie,9.2,publie,7.1,calc_somme,12.4,3,21.4,3,12.3,3,6.0,3,8.5,3,7.0,3,56.7,31.8,61.4,80.6,76.7,78.9
Nouvelle-Ecosse,25-54,5.6,publie,14.1,calc_residuel,8.4,calc_somme,5.3,publie,3.9,publie,4.5,calc_somme,5.5,3,12.8,3,7.7,3,4.9,3,4.4,3,4.6,3,81.8,54.4,72.5,84.0,88.1,86.3
Nouvelle-Ecosse,55-64,5.8,publie,,nc,,nc,5.6,publie,3.4,publie,4.7,calc_somme,5.8,3,,0,,0,6.1,3,3.8,3,5.2,3,59.4,43.8,55.7,61.9,66.2,63.4
Nouvelle-Ecosse,15+,6.6,publie,15.5,calc_somme,9.2,calc_somme,5.4,publie,4.1,publie,4.7,calc_somme,6.5,3,14.2,3,8.6,3,5.3,3,4.5,3,4.9,3,57.3,27.4,53.4,59.6,71.9,65.4
Ile-du-Prince-Edouard,15-24,10.9,publie,,nc,14.5,calc_somme,,x,,x,,nc,11.2,3,16.7,1,13.4,3,4.7,2,11.1,1,7.0,1,60.6,39.2,61.5,85.4,85.7,85.5
Ile-du-Prince-Edouard,25-54,6.8,publie,16.7,calc_residuel,10.3,calc_somme,5.3,publie,5.2,publie,5.3,calc_somme,6.6,3,17.6,2,10.9,2,5.2,3,4.7,3,5.0,3,83.9,67.6,76.4,86.8,87.6,87.2
Ile-du-Prince-Edouard,55-64,9.4,publie,,nc,,nc,6.2,publie,5.7,publie,6.0,calc_somme,8.5,3,,0,,0,6.8,3,5.3,2,5.7,2,62.3,44.0,65.0,62.2,68.8,64.4
Ile-du-Prince-Edouard,15+,8.0,publie,17.0,calc_somme,11.4,calc_somme,5.4,publie,5.4,publie,5.4,calc_somme,7.7,3,16.9,3,10.9,3,5.6,3,4.8,3,5.2,3,60.8,35.6,56.1,65.3,72.9,68.5
Terre-Neuve-et-Labrador,15-24,16.4,publie,,nc,16.1,calc_somme,13.7,publie,,x,,nc,15.1,3,,0,14.7,3,11.7,3,,0,,0,51.1,27.2,57.6,73.3,78.0,74.8
Terre-Neuve-et-Labrador,25-54,8.4,publie,,nc,,nc,8.6,publie,4.2,publie,6.7,calc_somme,8.2,3,20.0,1,12.0,1,8.3,3,3.8,3,6.5,3,79.6,48.2,65.7,81.8,90.3,85.3
Terre-Neuve-et-Labrador,55-64,11.5,publie,,nc,,nc,12.0,publie,,x,,nc,12.3,3,17.7,1,,0,13.4,3,5.6,1,12.0,1,53.7,40.2,53.4,54.1,63.8,56.7
Terre-Neuve-et-Labrador,15+,10.1,publie,19.1,calc_somme,13.9,calc_somme,10.0,publie,4.5,publie,7.9,calc_somme,10.0,3,20.1,3,13.8,3,9.8,3,4.2,3,7.7,3,52.0,22.5,47.3,56.2,72.9,61.8
```

#### Tableau lisible (catégories d'origine) — Taux de chômage 2025 (%), 15 ans et plus — [Statistique Canada, tableau 14-10-0020-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=1410002001)

| Province | Total | 0-8 ans | Sec. partiel | [calc] Sans DES | DES | Postsec. partiel | Cert./dipl. postsec. | Univ. | Bacc. | > Bacc. |
|---|---|---|---|---|---|---|---|---|---|---|
| Canada | 6.8 | 12.0 | 15.1 | 14.6 | 8.6 | 9.3 | 5.5 | 5.3 | 5.4 | 5.0 |
| Québec | 5.6 | 10.6 | 10.3 | 10.4 | 6.6 | 7.2 | 4.8 | 4.6 | 4.6 | 4.6 |
| Nouveau-Brunswick | 7.1 | 20.9 | 19.0 | 19.3 | 9.2 | 10.1 | 5.4 | 4.3 | 4.3 | 4.2 |
| Ontario | 7.7 | 12.2 | 16.8 | 16.1 | 10.1 | 11.5 | 6.3 | 6.0 | 6.3 | 5.4 |
| Manitoba | 5.9 | 12.8 | 14.2 | 14.0 | 6.6 | 7.0 | 4.5 | 4.2 | 4.4 | 3.9 |
| Saskatchewan | 5.2 | 10.6 | 13.1 | 12.8 | 6.4 | 5.9 | 3.6 | 3.7 | 3.3 | 4.5 |
| Alberta | 7.2 | 12.8 | 19.3 | 18.6 | 8.3 | 9.2 | 5.6 | 5.3 | 5.3 | 5.1 |
| Colombie-Britannique | 6.2 | 14.3 | 15.6 | 15.5 | 7.4 | 8.1 | 5.2 | 4.8 | 4.8 | 4.7 |
| Nouvelle-Écosse | 6.6 | 17.0 | 15.3 | 15.5 | 9.5 | 7.9 | 5.4 | 4.1 | 4.5 | 3.3 |
| Île-du-Prince-Édouard | 8.0 | 20.0 | 16.7 | 17.0 | 11.4 | 11.3 | 5.4 | 5.4 | 5.5 | 5.2 |
| Terre-Neuve-et-Labrador | 10.1 | 17.6 | 19.4 | 19.1 | 14.0 | 13.2 | 10.0 | 4.5 | 4.8 | 4.0 |

#### Tableau lisible (catégories d'origine) — Taux de chômage 2025 (%), 15-24 ans — [Statistique Canada, tableau 14-10-0020-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=1410002001)

| Province | Total | 0-8 ans | Sec. partiel | [calc] Sans DES | DES | Postsec. partiel | Cert./dipl. postsec. | Univ. | Bacc. | > Bacc. |
|---|---|---|---|---|---|---|---|---|---|---|
| Canada | 13.8 | 23.2 | 23.5 | 23.5 | 13.9 | 11.9 | 8.4 | 10.6 | 10.8 | 9.3 |
| Québec | 9.7 | 21.0 | 14.8 | 15.9 | 9.6 | 8.3 | 6.6 | 9.3 | 9.3 | .. (x) |
| Nouveau-Brunswick | 14.9 | .. (x) | 23.9 | n.c. | 15.9 | 11.1 | 10.3 | 8.3 | 8.9 | .. (x) |
| Ontario | 16.0 | 23.7 | 25.3 | 25.2 | 16.7 | 14.7 | 10.7 | 12.1 | 12.5 | 8.7 |
| Manitoba | 11.9 | 35.7 | 23.1 | 23.8 | 11.7 | 8.1 | 5.6 | 7.0 | 6.6 | .. (x) |
| Saskatchewan | 11.9 | .. (x) | 21.4 | n.c. | 11.0 | 9.7 | 6.3 | .. (x) | .. (x) | .. (x) |
| Alberta | 15.7 | .. (x) | 31.4 | n.c. | 12.9 | 13.0 | 6.6 | 9.9 | 9.5 | .. (x) |
| Colombie-Britannique | 13.4 | .. (x) | 25.3 | n.c. | 12.5 | 10.8 | 9.7 | 8.9 | 8.4 | .. (x) |
| Nouvelle-Écosse | 13.0 | .. (x) | 23.0 | n.c. | 13.9 | 9.8 | 5.5 | 9.2 | 9.6 | .. (x) |
| Île-du-Prince-Édouard | 10.9 | .. (x) | 12.5 | n.c. | 15.7 | 12.0 | .. (x) | .. (x) | .. (x) | .. (x) |
| Terre-Neuve-et-Labrador | 16.4 | .. (x) | 26.1 | n.c. | 16.1 | 16.1 | 13.7 | .. (x) | .. (x) | .. (x) |

#### Tableau lisible (catégories d'origine) — Taux de chômage 2025 (%), 25-54 ans — [Statistique Canada, tableau 14-10-0020-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=1410002001)

| Province | Total | 0-8 ans | Sec. partiel | [calc] Sans DES | DES | Postsec. partiel | Cert./dipl. postsec. | Univ. | Bacc. | > Bacc. |
|---|---|---|---|---|---|---|---|---|---|---|
| Canada | 5.8 | 10.5 | 10.8 | 10.7 | 7.5 | 8.0 | 5.2 | 5.1 | 5.1 | 5.1 |
| Québec | 4.8 | 8.0 | 8.1 | 8.1 | 6.1 | 7.3 | 4.2 | 4.4 | 4.3 | 4.6 |
| Nouveau-Brunswick | 5.6 | .. (x) | 19.5 | n.c. | 7.6 | 9.3 | 4.5 | 4.1 | 4.1 | 4.2 |
| Ontario | 6.7 | 12.6 | 12.1 | 12.2 | 8.9 | 9.8 | 6.1 | 5.8 | 6.0 | 5.4 |
| Manitoba | 4.8 | .. (x) | 10.8 | n.c. | 5.1 | 6.6 | 4.0 | 4.3 | 4.3 | 4.1 |
| Saskatchewan | 4.2 | .. (x) | 9.1 | n.c. | 5.7 | 4.3 | 3.4 | 3.6 | 3.1 | 4.6 |
| Alberta | 5.9 | .. (x) | 11.9 | n.c. | 6.7 | 7.9 | 5.8 | 5.0 | 4.9 | 5.3 |
| Colombie-Britannique | 5.3 | .. (x) | 9.7 | n.c. | 6.8 | 5.9 | 4.7 | 4.7 | 4.6 | 4.9 |
| Nouvelle-Écosse | 5.6 | .. (x) | 13.8 | n.c. | 8.7 | 7.4 | 5.3 | 3.9 | 4.2 | 3.5 |
| Île-du-Prince-Édouard | 6.8 | .. (x) | 15.4 | n.c. | 10.4 | 10.0 | 5.3 | 5.2 | 5.9 | 5.1 |
| Terre-Neuve-et-Labrador | 8.4 | .. (x) | 18.6 | n.c. | 14.2 | .. (x) | 8.6 | 4.2 | 4.7 | 3.7 |

#### Tableau lisible (catégories d'origine) — Taux de chômage 2025 (%), 55-64 ans — [Statistique Canada, tableau 14-10-0020-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=1410002001)

| Province | Total | 0-8 ans | Sec. partiel | [calc] Sans DES | DES | Postsec. partiel | Cert./dipl. postsec. | Univ. | Bacc. | > Bacc. |
|---|---|---|---|---|---|---|---|---|---|---|
| Canada | 5.6 | 9.7 | 7.6 | 8.1 | 5.9 | 5.7 | 5.5 | 5.0 | 4.9 | 5.0 |
| Québec | 5.5 | 7.4 | 7.7 | 7.6 | 5.5 | .. (x) | 5.5 | 5.0 | 5.2 | 4.4 |
| Nouveau-Brunswick | 7.0 | 20.0 | 11.7 | 14.4 | 6.7 | .. (x) | 6.2 | 4.5 | .. (x) | .. (x) |
| Ontario | 5.8 | 9.8 | 7.3 | 8.0 | 6.4 | 6.9 | 5.6 | 5.2 | 4.7 | 6.0 |
| Manitoba | 4.5 | .. (x) | 6.5 | n.c. | 3.3 | .. (x) | 5.6 | 3.2 | 3.1 | .. (x) |
| Saskatchewan | 3.9 | .. (x) | .. (x) | n.c. | 3.0 | .. (x) | 4.2 | 3.2 | .. (x) | .. (x) |
| Alberta | 5.7 | .. (x) | 7.2 | n.c. | 6.9 | .. (x) | 4.4 | 6.1 | 6.6 | 4.9 |
| Colombie-Britannique | 4.8 | .. (x) | .. (x) | n.c. | 3.8 | .. (x) | 5.0 | 4.5 | 4.9 | 4.1 |
| Nouvelle-Écosse | 5.8 | .. (x) | 7.0 | n.c. | 8.2 | .. (x) | 5.6 | 3.4 | 3.8 | .. (x) |
| Île-du-Prince-Édouard | 9.4 | .. (x) | 25.0 | n.c. | 10.5 | .. (x) | 6.2 | 5.7 | 8.3 | .. (x) |
| Terre-Neuve-et-Labrador | 11.5 | .. (x) | 15.8 | n.c. | 14.0 | .. (x) | 12.0 | .. (x) | .. (x) | .. (x) |

#### Tableau lisible (catégories d'origine) — Taux d'emploi 2025 (%), 15-24 ans — [Statistique Canada, tableau 14-10-0020-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=1410002001)

| Province | Total | 0-8 ans | Sec. partiel | [calc] Sans DES | DES | Postsec. partiel | Cert./dipl. postsec. | Univ. | Bacc. | > Bacc. |
|---|---|---|---|---|---|---|---|---|---|---|
| Canada | 54.3 | 26.1 | 31.0 | 30.5 | 60.2 | 56.1 | 76.8 | 72.8 | 73.1 | 71.1 |
| Québec | 61.9 | 33.5 | 45.2 | 42.6 | 67.3 | 61.6 | 76.5 | 71.3 | 70.6 | 76.1 |
| Nouveau-Brunswick | 54.0 | .. (x) | 32.3 | n.c. | 59.4 | 61.0 | 75.8 | 73.3 | 73.9 | .. (x) |
| Ontario | 50.7 | 22.6 | 28.1 | 27.7 | 53.0 | 51.6 | 74.8 | 71.9 | 71.9 | 71.5 |
| Manitoba | 58.2 | 23.8 | 29.2 | 28.9 | 69.3 | 66.5 | 83.1 | 83.5 | 83.8 | 72.7 |
| Saskatchewan | 55.8 | 20.0 | 31.0 | 30.4 | 67.8 | 62.1 | 84.2 | 78.3 | 78.3 | 77.8 |
| Alberta | 54.3 | 14.1 | 27.2 | 26.3 | 69.0 | 59.4 | 82.7 | 75.7 | 76.8 | 67.4 |
| Colombie-Britannique | 52.2 | 20.5 | 25.7 | 25.5 | 61.4 | 54.3 | 75.8 | 71.4 | 72.2 | 61.7 |
| Nouvelle-Écosse | 56.7 | .. (x) | 33.9 | n.c. | 62.7 | 59.0 | 80.6 | 76.7 | 77.7 | 62.5 |
| Île-du-Prince-Édouard | 60.6 | 50.0 | 38.6 | 39.2 | 64.2 | 56.8 | 85.4 | 85.7 | 89.5 | .. (x) |
| Terre-Neuve-et-Labrador | 51.1 | .. (x) | 27.9 | n.c. | 59.0 | 55.3 | 73.3 | 78.0 | 78.9 | .. (x) |

#### Tableau lisible (catégories d'origine) — Taux d'emploi 2025 (%), 25-54 ans — [Statistique Canada, tableau 14-10-0020-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=1410002001)

| Province | Total | 0-8 ans | Sec. partiel | [calc] Sans DES | DES | Postsec. partiel | Cert./dipl. postsec. | Univ. | Bacc. | > Bacc. |
|---|---|---|---|---|---|---|---|---|---|---|
| Canada | 83.3 | 53.5 | 63.7 | 61.2 | 75.9 | 76.0 | 85.5 | 87.7 | 87.2 | 88.5 |
| Québec | 86.1 | 60.1 | 71.9 | 67.7 | 81.2 | 77.4 | 88.5 | 89.2 | 89.4 | 88.7 |
| Nouveau-Brunswick | 83.3 | 46.7 | 55.0 | 53.5 | 73.1 | 74.7 | 86.1 | 90.2 | 90.0 | 90.5 |
| Ontario | 81.9 | 48.4 | 59.7 | 57.2 | 71.9 | 73.0 | 83.4 | 87.0 | 86.2 | 88.4 |
| Manitoba | 84.1 | 50.0 | 60.0 | 58.3 | 79.0 | 78.9 | 87.3 | 89.2 | 88.7 | 90.1 |
| Saskatchewan | 85.5 | 52.5 | 66.2 | 64.2 | 79.8 | 82.6 | 88.8 | 89.5 | 90.3 | 87.9 |
| Alberta | 82.9 | 47.0 | 62.0 | 58.9 | 79.4 | 78.4 | 84.1 | 87.3 | 86.7 | 88.5 |
| Colombie-Britannique | 83.8 | 50.0 | 64.8 | 62.5 | 77.9 | 78.3 | 85.8 | 86.9 | 86.3 | 88.0 |
| Nouvelle-Écosse | 81.8 | 47.1 | 55.9 | 54.4 | 72.5 | 72.9 | 84.0 | 88.1 | 87.6 | 88.9 |
| Île-du-Prince-Édouard | 83.9 | 60.0 | 68.8 | 67.6 | 76.0 | 78.3 | 86.8 | 87.6 | 86.3 | 90.2 |
| Terre-Neuve-et-Labrador | 79.6 | 31.3 | 51.1 | 48.2 | 65.5 | 67.3 | 81.8 | 90.3 | 89.1 | 92.4 |

#### Tableau lisible (catégories d'origine) — Taux d'emploi 2025 (%), 55-64 ans — [Statistique Canada, tableau 14-10-0020-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=1410002001)

| Province | Total | 0-8 ans | Sec. partiel | [calc] Sans DES | DES | Postsec. partiel | Cert./dipl. postsec. | Univ. | Bacc. | > Bacc. |
|---|---|---|---|---|---|---|---|---|---|---|
| Canada | 63.7 | 43.6 | 52.5 | 49.9 | 60.2 | 63.9 | 65.3 | 69.2 | 67.5 | 72.1 |
| Québec | 64.3 | 46.0 | 55.8 | 52.6 | 62.6 | 66.0 | 65.3 | 69.5 | 68.3 | 71.8 |
| Nouveau-Brunswick | 58.5 | 40.7 | 46.8 | 44.7 | 56.6 | 62.9 | 62.6 | 62.9 | 64.0 | 59.5 |
| Ontario | 63.8 | 45.9 | 49.9 | 48.7 | 59.2 | 62.2 | 65.8 | 69.0 | 67.6 | 71.3 |
| Manitoba | 62.5 | 52.6 | 57.0 | 56.1 | 59.9 | 61.2 | 61.4 | 70.2 | 68.0 | 75.7 |
| Saskatchewan | 67.6 | 25.9 | 60.2 | 53.6 | 67.3 | 66.1 | 67.9 | 74.6 | 71.9 | 79.2 |
| Alberta | 65.3 | 35.2 | 54.3 | 50.3 | 61.4 | 65.8 | 68.1 | 69.7 | 67.8 | 74.0 |
| Colombie-Britannique | 64.1 | 41.7 | 52.7 | 49.2 | 59.4 | 64.1 | 65.1 | 69.4 | 66.8 | 73.3 |
| Nouvelle-Écosse | 59.4 | 36.1 | 45.8 | 43.8 | 54.0 | 66.0 | 61.9 | 66.2 | 62.0 | 72.9 |
| Île-du-Prince-Édouard | 62.3 | 40.0 | 45.0 | 44.0 | 65.4 | 62.5 | 62.2 | 68.8 | 68.8 | 68.8 |
| Terre-Neuve-et-Labrador | 53.7 | 35.7 | 42.7 | 40.2 | 52.1 | 63.2 | 54.1 | 63.8 | 59.1 | 70.5 |

- Mise à jour 2026 : tableau 14-10-0019-01 (mensuel, non désaisonnalisé ; dernier mois disponible octobre 2026 ; fichier <https://www150.statcan.gc.ca/n1/tbl/csv/14100019-eng.zip>). [calc] Moyenne janvier-octobre 2026 = chômeurs cumulés / actifs cumulés sur les dix mois ; entre parenthèses la même période de 2025 ; `n.d.` = au moins un mois supprimé — [Statistique Canada, tableau 14-10-0019-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=1410001901)

#### [calc] Taux de chômage moyen janvier-octobre 2026 (janvier-octobre 2025), 15-24 ans — [Statistique Canada, tableau 14-10-0019-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=1410001901)

| Province | Total | Sans DES (0-8 + sec. partiel) | DES | Postsec. partiel | Cert./dipl. postsec. | Univ. |
|---|---|---|---|---|---|---|
| Canada | 13.6 (14.2) | 24.7 (23.6) | 14.1 (14.2) | 11.5 (12.3) | 7.5 (8.9) | 9.1 (11.0) |
| Québec | 9.4 (10.2) | 17.9 (16.1) | 8.4 (10.4) | 8.5 (8.5) | 5.2 (7.0) | 8.4 (10.4) |
| Nouveau-Brunswick | 14.4 (15.2) | n.d. (n.d.) | 18.4 (15.7) | n.d. (n.d.) | 7.6 (10.4) | n.d. (n.d.) |
| Ontario | 15.7 (16.4) | 29.0 (n.d.) | 15.8 (17.0) | 13.5 (15.1) | 10.8 (11.5) | 9.9 (12.3) |
| Manitoba | 11.7 (11.9) | n.d. (n.d.) | 9.6 (11.5) | 9.9 (8.2) | 6.5 (5.9) | n.d. (n.d.) |
| Saskatchewan | 12.3 (11.5) | n.d. (n.d.) | 11.9 (10.8) | 8.1 (8.6) | 5.6 (n.d.) | n.d. (n.d.) |
| Alberta | 14.8 (16.2) | n.d. (n.d.) | 14.7 (13.6) | 9.4 (13.5) | n.d. (n.d.) | n.d. (10.0) |
| Colombie-Britannique | 14.0 (13.8) | n.d. (n.d.) | 15.5 (12.4) | 13.5 (11.8) | 7.9 (9.9) | 8.4 (9.7) |
| Nouvelle-Écosse | 13.2 (13.4) | n.d. (n.d.) | 12.8 (14.6) | n.d. (n.d.) | n.d. (n.d.) | 8.1 (n.d.) |
| Île-du-Prince-Édouard | 12.2 (11.0) | n.d. (n.d.) | 14.0 (14.2) | n.d. (15.0) | n.d. (n.d.) | n.d. (n.d.) |
| Terre-Neuve-et-Labrador | 17.4 (16.3) | n.d. (n.d.) | 19.9 (15.9) | n.d. (15.2) | n.d. (14.6) | n.d. (n.d.) |

#### [calc] Taux de chômage moyen janvier-octobre 2026 (janvier-octobre 2025), 25-54 ans — [Statistique Canada, tableau 14-10-0019-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=1410001901)

| Province | Total | Sans DES (0-8 + sec. partiel) | DES | Postsec. partiel | Cert./dipl. postsec. | Univ. |
|---|---|---|---|---|---|---|
| Canada | 5.7 (5.9) | 11.0 (10.8) | 8.1 (7.6) | 8.6 (8.2) | 5.0 (5.2) | 4.7 (5.2) |
| Québec | 5.1 (4.9) | 10.1 (8.3) | 6.9 (6.3) | 10.2 (7.8) | 4.5 (4.1) | 4.2 (4.6) |
| Nouveau-Brunswick | 5.9 (5.7) | n.d. (n.d.) | 8.6 (7.9) | 10.3 (n.d.) | 5.8 (4.5) | 3.5 (4.3) |
| Ontario | 6.2 (6.7) | 11.3 (12.3) | 9.6 (8.9) | 9.4 (9.9) | 5.8 (6.2) | 5.0 (5.9) |
| Manitoba | 4.2 (4.9) | n.d. (n.d.) | 5.4 (5.3) | 5.8 (7.2) | 3.2 (4.0) | 3.7 (4.4) |
| Saskatchewan | 4.8 (4.2) | n.d. (n.d.) | 6.0 (5.7) | 7.4 (n.d.) | 4.0 (3.3) | 3.9 (3.6) |
| Alberta | 5.8 (6.1) | n.d. (n.d.) | 8.8 (7.0) | 6.1 (n.d.) | 4.7 (5.9) | 4.7 (5.1) |
| Colombie-Britannique | 5.4 (5.3) | n.d. (n.d.) | 6.5 (6.8) | 7.8 (5.9) | 5.0 (4.8) | 5.0 (4.7) |
| Nouvelle-Écosse | 5.6 (5.6) | n.d. (n.d.) | 7.6 (8.4) | 8.4 (n.d.) | 5.5 (5.4) | 4.2 (4.1) |
| Île-du-Prince-Édouard | 5.5 (6.7) | n.d. (n.d.) | 9.0 (10.5) | n.d. (n.d.) | 5.0 (5.2) | 3.6 (5.5) |
| Terre-Neuve-et-Labrador | 6.7 (8.4) | n.d. (n.d.) | 9.8 (14.1) | n.d. (n.d.) | 7.0 (8.5) | 3.3 (4.5) |

#### [calc] Taux de chômage moyen janvier-octobre 2026 (janvier-octobre 2025), 55-64 ans — [Statistique Canada, tableau 14-10-0019-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=1410001901)

| Province | Total | Sans DES (0-8 + sec. partiel) | DES | Postsec. partiel | Cert./dipl. postsec. | Univ. |
|---|---|---|---|---|---|---|
| Canada | 5.5 (5.7) | 7.7 (8.3) | 5.3 (5.9) | 6.0 (5.4) | 5.9 (5.5) | 4.6 (5.0) |
| Québec | 5.3 (5.5) | n.d. (n.d.) | 5.1 (5.6) | n.d. (n.d.) | 5.7 (5.7) | 4.2 (4.8) |
| Nouveau-Brunswick | 6.8 (7.4) | n.d. (n.d.) | 6.3 (6.7) | n.d. (n.d.) | 6.9 (6.4) | n.d. (4.5) |
| Ontario | 5.5 (5.9) | n.d. (n.d.) | 5.2 (6.2) | 7.1 (6.1) | 5.5 (5.8) | 5.4 (5.2) |
| Manitoba | 4.1 (4.7) | n.d. (n.d.) | 4.5 (n.d.) | n.d. (n.d.) | 4.2 (6.2) | n.d. (n.d.) |
| Saskatchewan | 5.2 (3.9) | n.d. (n.d.) | n.d. (n.d.) | n.d. (n.d.) | 5.4 (4.2) | n.d. (n.d.) |
| Alberta | 5.4 (5.6) | n.d. (n.d.) | n.d. (7.1) | n.d. (n.d.) | 6.6 (4.3) | 4.1 (6.3) |
| Colombie-Britannique | 5.6 (4.9) | n.d. (n.d.) | 6.0 (4.0) | n.d. (n.d.) | 6.4 (4.6) | 4.0 (4.8) |
| Nouvelle-Écosse | 5.9 (5.6) | n.d. (n.d.) | n.d. (8.3) | n.d. (n.d.) | 5.3 (5.5) | 4.9 (n.d.) |
| Île-du-Prince-Édouard | 8.0 (9.5) | n.d. (n.d.) | n.d. (11.6) | n.d. (n.d.) | 6.8 (6.4) | n.d. (n.d.) |
| Terre-Neuve-et-Labrador | 10.1 (11.3) | n.d. (n.d.) | n.d. (n.d.) | n.d. (n.d.) | 10.5 (12.2) | n.d. (n.d.) |

#### [calc] Taux de chômage moyen janvier-octobre 2026 (janvier-octobre 2025), 15 ans et plus — [Statistique Canada, tableau 14-10-0019-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=1410001901)

| Province | Total | Sans DES (0-8 + sec. partiel) | DES | Postsec. partiel | Cert./dipl. postsec. | Univ. |
|---|---|---|---|---|---|---|
| Canada | 6.7 (6.9) | 14.9 (14.8) | 8.8 (8.7) | 9.4 (9.6) | 5.4 (5.6) | 4.9 (5.4) |
| Québec | 5.7 (5.8) | 11.5 (10.6) | 6.5 (6.8) | 8.5 (7.5) | 4.8 (4.8) | 4.4 (4.7) |
| Nouveau-Brunswick | 7.3 (7.3) | n.d. (19.5) | 10.2 (9.4) | 9.8 (10.3) | 6.2 (5.4) | 3.7 (4.5) |
| Ontario | 7.2 (7.8) | 16.5 (16.3) | 9.9 (10.1) | 10.7 (11.7) | 6.0 (6.4) | 5.3 (6.1) |
| Manitoba | 5.4 (5.9) | 14.9 (n.d.) | 6.2 (6.7) | 7.4 (7.2) | 3.8 (4.6) | 3.7 (4.3) |
| Saskatchewan | 5.9 (5.1) | n.d. (n.d.) | 6.9 (6.3) | 7.2 (5.6) | 4.3 (3.6) | 4.1 (3.6) |
| Alberta | 6.9 (7.4) | 17.7 (n.d.) | 9.4 (8.7) | 7.5 (9.5) | 5.0 (5.7) | 4.7 (5.4) |
| Colombie-Britannique | 6.5 (6.3) | 13.4 (15.9) | 8.5 (7.4) | 9.7 (8.6) | 5.5 (5.1) | 4.9 (4.8) |
| Nouvelle-Écosse | 6.6 (6.6) | 18.3 (n.d.) | 8.2 (9.6) | 8.4 (8.1) | 5.4 (5.5) | 4.5 (4.1) |
| Île-du-Prince-Édouard | 7.3 (7.9) | n.d. (n.d.) | 10.6 (11.1) | 8.8 (11.6) | 6.1 (5.3) | 3.9 (5.5) |
| Terre-Neuve-et-Labrador | 9.1 (10.1) | n.d. (n.d.) | 12.6 (14.0) | 12.6 (12.9) | 8.7 (10.0) | 3.8 (4.6) |

- Durée du chômage par groupe d'âge et province, 2025 (tableau 14-10-0057-01, annuel ; fichier <https://www150.statcan.gc.ca/n1/tbl/csv/14100057-eng.zip>). Effectifs en milliers publiés ; parts en % = [calc] ; durée moyenne publiée (semaines, sans plafond) — [Statistique Canada, tableau 14-10-0057-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=1410005701)

#### Durée du chômage 2025, 15 ans et plus — [Statistique Canada, tableau 14-10-0057-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=1410005701)

| Province | Chômeurs (k) | 1-4 sem (k) | 5-13 (k) | 14-25 (k) | 27+ sem (k) | 52+ sem [calc: 52 + 53+] (k) | [calc] % 27+ sem | [calc] % 52+ sem | Durée moy. (sem., sans plafond) |
|---|---|---|---|---|---|---|---|---|---|
| Canada | 1538.9 | 466.9 | 403.3 | 243.6 | 349.3 | 199.5 | 22.7 | 13.0 | 21.8 |
| Québec | 276.2 | 90.8 | 77.9 | 43.6 | 49.8 | 25.7 | 18.0 | 9.3 | 18.2 |
| Nouveau-Brunswick | 31.1 | 9.9 | 8.6 | 5.0 | 5.2 | 2.6 | 16.7 | 8.4 | 18.1 |
| Ontario | 684.0 | 188.6 | 171.9 | 107.8 | 185.4 | 111.0 | 27.1 | 16.2 | 24.9 |
| Manitoba | 45.8 | 15.0 | 11.7 | 7.1 | 9.0 | 6.0 | 19.7 | 13.1 | 23.2 |
| Saskatchewan | 33.8 | 12.0 | 8.4 | 5.2 | 6.0 | 3.4 | 17.8 | 10.1 | 18.5 |
| Alberta | 200.9 | 65.2 | 51.2 | 30.9 | 44.1 | 25.4 | 22.0 | 12.6 | 20.9 |
| Colombie-Britannique | 194.6 | 62.4 | 54.1 | 31.9 | 36.7 | 18.8 | 18.9 | 9.7 | 18.5 |
| Nouvelle-Écosse | 36.9 | 12.4 | 9.3 | 5.8 | 6.7 | 3.5 | 18.2 | 9.5 | 19.3 |
| Île-du-Prince-Édouard | 8.1 | 2.4 | 2.4 | 1.5 | 1.4 | 0.7 | 17.3 | 8.6 | 17.6 |
| Terre-Neuve-et-Labrador | 27.6 | 8.1 | 7.9 | 4.7 | 5.1 | 2.5 | 18.5 | 9.1 | 19.1 |

#### Durée du chômage 2025, 15-24 ans — [Statistique Canada, tableau 14-10-0057-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=1410005701)

| Province | Chômeurs (k) | 1-4 sem (k) | 5-13 (k) | 14-25 (k) | 27+ sem (k) | 52+ sem [calc: 52 + 53+] (k) | [calc] % 27+ sem | [calc] % 52+ sem | Durée moy. (sem., sans plafond) |
|---|---|---|---|---|---|---|---|---|---|
| Canada | 436.9 | 162.3 | 123.6 | 62.9 | 69.4 | 40.3 | 15.9 | 9.2 | 15.9 |
| Québec | 67.0 | 31.6 | 19.1 | 7.3 | 6.7 | n.c. | 10.0 | n.c. | 12.1 |
| Nouveau-Brunswick | 8.8 | 3.0 | 2.8 | 1.2 | 1.2 | n.c. | 13.6 | n.c. | 15.0 |
| Ontario | 200.6 | 65.3 | 56.3 | 32.0 | 38.1 | 22.9 | 19.0 | 11.4 | 18.0 |
| Manitoba | 14.9 | 5.7 | 3.8 | 2.4 | 2.1 | 1.5 | 14.1 | 10.1 | 16.3 |
| Saskatchewan | 11.3 | 4.3 | 2.9 | 1.7 | 1.6 | 1.0 | 14.2 | 8.8 | 15.0 |
| Alberta | 62.3 | 22.8 | 17.3 | 9.0 | 11.1 | 6.5 | 17.8 | 10.4 | 16.1 |
| Colombie-Britannique | 54.6 | 22.8 | 16.7 | 6.5 | 6.2 | n.c. | 11.4 | n.c. | 12.8 |
| Nouvelle-Écosse | 10.0 | 4.1 | 2.5 | 1.5 | 1.2 | n.c. | 12.0 | n.c. | 13.3 |
| Île-du-Prince-Édouard | 1.8 | 0.6 | 0.5 | 0.3 | 0.3 | n.c. | 16.7 | n.c. | 18.6 |
| Terre-Neuve-et-Labrador | 5.8 | 2.1 | 1.7 | 0.8 | 0.9 | n.c. | 15.5 | n.c. | 15.7 |

#### Durée du chômage 2025, 25-54 ans — [Statistique Canada, tableau 14-10-0057-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=1410005701)

| Province | Chômeurs (k) | 1-4 sem (k) | 5-13 (k) | 14-25 (k) | 27+ sem (k) | 52+ sem [calc: 52 + 53+] (k) | [calc] % 27+ sem | [calc] % 52+ sem | Durée moy. (sem., sans plafond) |
|---|---|---|---|---|---|---|---|---|---|
| Canada | 860.4 | 240.9 | 224.9 | 139.2 | 211.6 | 120.9 | 24.6 | 14.1 | 23.6 |
| Québec | 153.0 | 45.0 | 44.5 | 26.1 | 29.3 | 16.2 | 19.2 | 10.6 | 19.5 |
| Nouveau-Brunswick | 15.6 | 4.8 | 4.2 | 2.6 | 2.7 | 1.4 | 17.3 | 9.0 | 20.1 |
| Ontario | 388.3 | 98.7 | 97.0 | 61.4 | 114.2 | 67.6 | 29.4 | 17.4 | 26.7 |
| Manitoba | 24.4 | 8.0 | 6.1 | 3.3 | 5.3 | 3.5 | 21.7 | 14.3 | 26.7 |
| Saskatchewan | 17.9 | 6.2 | 4.4 | 2.8 | 3.4 | 1.9 | 19.0 | 10.6 | 18.3 |
| Alberta | 112.0 | 35.1 | 27.8 | 17.8 | 25.2 | 14.4 | 22.5 | 12.9 | 22.6 |
| Colombie-Britannique | 110.6 | 31.5 | 30.4 | 19.0 | 23.8 | 12.2 | 21.5 | 11.0 | 20.6 |
| Nouvelle-Écosse | 20.1 | 6.0 | 5.3 | 3.2 | 4.1 | 2.1 | 20.4 | 10.4 | 22.2 |
| Île-du-Prince-Édouard | 4.3 | 1.3 | 1.2 | 0.8 | 0.7 | 0.4 | 16.3 | 9.3 | 17.6 |
| Terre-Neuve-et-Labrador | 14.3 | 4.2 | 4.1 | 2.2 | 2.7 | 1.2 | 18.9 | 8.4 | 19.7 |

#### Durée du chômage 2025, 55-64 ans — [Statistique Canada, tableau 14-10-0057-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=1410005701)

| Province | Chômeurs (k) | 1-4 sem (k) | 5-13 (k) | 14-25 (k) | 27+ sem (k) | 52+ sem [calc: 52 + 53+] (k) | [calc] % 27+ sem | [calc] % 52+ sem | Durée moy. (sem., sans plafond) |
|---|---|---|---|---|---|---|---|---|---|
| Canada | 191.6 | 51.9 | 42.1 | 31.2 | 53.7 | 29.9 | 28.0 | 15.6 | 25.7 |
| Québec | 42.8 | 11.5 | 10.2 | 7.6 | 10.2 | 5.0 | 23.8 | 11.7 | 22.8 |
| Nouveau-Brunswick | 5.2 | 1.8 | 1.1 | 0.7 | 1.0 | n.c. | 19.2 | n.c. | 17.6 |
| Ontario | 79.1 | 20.9 | 15.1 | 11.5 | 27.2 | 16.4 | 34.4 | 20.7 | 30.0 |
| Manitoba | 4.7 | 1.0 | 1.2 | 0.9 | 1.1 | n.c. | 23.4 | n.c. | 26.7 |
| Saskatchewan | 3.6 | 1.2 | 0.8 | 0.5 | 0.7 | n.c. | 19.4 | n.c. | 25.2 |
| Alberta | 21.4 | 5.4 | 5.0 | 3.0 | 6.7 | 3.9 | 31.3 | 18.2 | 26.5 |
| Colombie-Britannique | 22.2 | 6.7 | 5.2 | 4.8 | 4.4 | n.c. | 19.8 | n.c. | 20.0 |
| Nouvelle-Écosse | 5.3 | 1.7 | 1.3 | 0.7 | 1.0 | n.c. | 18.9 | n.c. | 19.2 |
| Île-du-Prince-Édouard | 1.5 | 0.4 | 0.5 | 0.3 | 0.2 | n.c. | 13.3 | n.c. | 17.4 |
| Terre-Neuve-et-Labrador | 5.8 | 1.3 | 1.7 | 1.3 | 1.1 | n.c. | 19.0 | n.c. | 20.9 |

- Mise à jour 2026 du chômage de longue durée (tableau 14-10-0342-01, mensuel, désaisonnalisé ; fichier <https://www150.statcan.gc.ca/n1/tbl/csv/14100342-eng.zip>) : [calc] part des chômeurs au chômage depuis 27 semaines ou plus en octobre 2026, et entre parenthèses en octobre 2025 — [Statistique Canada, tableau 14-10-0342-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=1410034201)

#### [calc] Part des chômeurs depuis 27 semaines ou plus (%), octobre 2026 (octobre 2025), données désaisonnalisées — [Statistique Canada, tableau 14-10-0342-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=1410034201)

| Province | 15 ans et plus | 15-24 ans | 25-54 ans | 25 ans et plus | 55 ans et plus |
|---|---|---|---|---|---|
| Canada | 23.7 (21.5) | 15.2 (14.4) | 25.3 (23.3) | 27.0 (24.3) | 32.7 (27.9) |
| Québec | 19.3 (16.4) | 11.6 (9.2) | 18.6 (16.9) | 21.7 (18.8) | 29.8 (24.4) |
| Nouveau-Brunswick | 17.1 (15.9) | 9.4 (13.0) | 23.4 (16.2) | 20.7 (17.2) | 14.9 (19.0) |
| Ontario | 27.0 (27.6) | 17.4 (19.9) | 27.8 (28.6) | 31.0 (30.8) | 43.2 (39.5) |
| Manitoba | 19.7 (12.9) | 15.2 (8.7) | 23.9 (16.1) | 21.8 (14.8) | 16.1 (9.8) |
| Saskatchewan | 15.3 (16.6) | 6.2 (12.1) | 20.4 (18.9) | 20.6 (18.8) | 19.6 (18.2) |
| Alberta | 22.0 (13.9) | 12.0 (8.5) | 23.7 (14.9) | 26.0 (16.0) | 34.9 (20.1) |
| Colombie-Britannique | 21.8 (15.9) | 21.4 (14.0) | 23.3 (17.6) | 21.9 (16.7) | 17.9 (13.0) |
| Nouvelle-Écosse | 19.8 (13.8) | 9.5 (6.7) | 21.9 (16.9) | 23.5 (16.5) | 28.6 (15.4) |
| Île-du-Prince-Édouard | 14.5 (17.9) | 22.2 (28.0) | 11.8 (10.0) | 12.1 (13.3) | 16.7 (21.1) |
| Terre-Neuve-et-Labrador | 18.1 (17.7) | 7.6 (12.3) | 17.9 (20.6) | 22.0 (19.4) | 27.3 (17.1) |

- Territoires : seul le tableau 14-10-0292-01 (moyennes mobiles de trois mois) donne un détail par âge, limité à « 15 ans et plus » et « 25 ans et plus », sans scolarité (TC = taux de chômage, TE = taux d'emploi ; fichier <https://www150.statcan.gc.ca/n1/tbl/csv/14100292-eng.zip>) — [Statistique Canada, tableau 14-10-0292-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=1410029201)

| Territoire | Mois (fin de période) | Type | TC 15+ | TC 25+ | TE 15+ | TE 25+ |
|---|---|---|---|---|---|---|
| Yukon | 2025-12 | Désaisonnalisé | 4.3 | 3.2 | 71.2 | 74.1 |
| Yukon | 2025-12 | Non désaisonnalisé | 4.3 | 3.2 | 70.7 | 73.8 |
| Yukon | 2026-10 | Désaisonnalisé | 5.3 | 3.9 | 68.9 | 73.1 |
| Yukon | 2026-10 | Non désaisonnalisé | 5.2 | 3.9 | 69.9 | 73.4 |
| Territoires du Nord-Ouest | 2025-12 | Désaisonnalisé | 4.2 | 3.8 | 64.3 | 68.0 |
| Territoires du Nord-Ouest | 2025-12 | Non désaisonnalisé | 4.3 | 3.8 | 62.9 | 68.0 |
| Territoires du Nord-Ouest | 2026-10 | Désaisonnalisé | 5.1 | 3.6 | 67.8 | 71.9 |
| Territoires du Nord-Ouest | 2026-10 | Non désaisonnalisé | 5.1 | 3.6 | 68.1 | 71.9 |
| Nunavut | 2025-12 | Désaisonnalisé | 15.4 | 14.0 | 53.7 | 58.8 |
| Nunavut | 2025-12 | Non désaisonnalisé | 15.4 | 14.0 | 53.7 | 58.8 |
| Nunavut | 2026-10 | Désaisonnalisé | 12.2 | 8.8 | 54.4 | 61.3 |
| Nunavut | 2026-10 | Non désaisonnalisé | 12.2 | 8.8 | 54.4 | 61.3 |

- Territoires, moyennes annuelles (tableau 14-10-0393-01 ; le fichier téléchargé le 22/11/2026 s'arrête à 2024) : taux de chômage 2024 de 4,5 % au Yukon, 5,8 % aux Territoires du Nord-Ouest et 8,4 % au Nunavut ; taux d'emploi 71,6 %, 66,4 % et 54,8 % — [Statistique Canada, tableau 14-10-0393-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=1410039301)
- Immigrants selon la scolarité, Canada, 25-54 ans, 2025 (tableau 14-10-0087-01 ; géographie = Canada seulement dans ce tableau ; fichier <https://www150.statcan.gc.ca/n1/tbl/csv/14100087-eng.zip>) — [Statistique Canada, tableau 14-10-0087-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=1410008701)

#### Taux de chômage 2025 (%), 25-54 ans, selon le statut d'immigrant et la scolarité — [Statistique Canada, tableau 14-10-0087-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=1410008701)

| Statut | Tous niveaux | Aucun grade, certificat ou diplôme | Diplôme d'études secondaires | DES + études postsec. partielles | Certificat ou diplôme postsecondaire | Grade universitaire |
|---|---|---|---|---|---|---|
| Population totale | 5.8 | 10.6 | 7.5 | 7.9 | 5.2 | 5.1 |
| Nés au Canada | 4.9 | 10.4 | 7.1 | 7.4 | 4.6 | 3.2 |
| Immigrants reçus (ensemble) | 6.9 | 10.8 | 8.2 | 9.8 | 6.4 | 6.5 |
| Immigrants reçus depuis 5 ans ou moins | 9.4 | 18.6 | 9.9 | .. (x) | 8.9 | 9.0 |
| Immigrants reçus depuis plus de 5 à 10 ans | 6.9 | 8.1 | 8.0 | .. (x) | 7.4 | 6.4 |
| Immigrants reçus depuis plus de 10 ans | 5.9 | 9.1 | 7.7 | 10.9 | 5.5 | 5.2 |

#### Taux d'emploi 2025 (%), 25-54 ans, selon le statut d'immigrant et la scolarité — [Statistique Canada, tableau 14-10-0087-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=1410008701)

| Statut | Tous niveaux | Aucun grade, certificat ou diplôme | Diplôme d'études secondaires | DES + études postsec. partielles | Certificat ou diplôme postsecondaire | Grade universitaire |
|---|---|---|---|---|---|---|
| Population totale | 83.3 | 61.6 | 75.9 | 76.6 | 85.5 | 87.7 |
| Nés au Canada | 84.9 | 61.8 | 76.9 | 78.2 | 87.0 | 91.6 |
| Immigrants reçus (ensemble) | 81.4 | 61.5 | 74.1 | 71.7 | 82.1 | 84.8 |
| Immigrants reçus depuis 5 ans ou moins | 78.0 | 50.6 | 72.5 | 67.1 | 78.1 | 81.1 |
| Immigrants reçus depuis plus de 5 à 10 ans | 81.7 | 57.6 | 75.0 | 79.5 | 81.1 | 85.0 |
| Immigrants reçus depuis plus de 10 ans | 82.6 | 66.3 | 74.3 | 70.7 | 83.4 | 86.7 |

- Petites communautés francophones (divisions et subdivisions de recensement) : seul le Recensement de 2021 croise situation d'activité × plus haut diplôme × âge (15-24, 25-54, 25-34, 35-44, 45-54, 55-64 ans, etc.) à ce niveau géographique : tableau 98-10-0400-01 « Situation d'activité selon le plus haut niveau de scolarité : Canada, provinces et territoires, divisions de recensement et subdivisions de recensement » (5 468 géographies ; dimensions vérifiées par l'API de métadonnées de Statistique Canada) — [Statistique Canada, tableau 98-10-0400-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=9810040001)
- Autres tableaux du Recensement de 2021 utiles (régions métropolitaines et agglomérations de recensement, avec âge) : 98-10-0451-01 (situation d'activité selon le plus haut niveau de scolarité, l'identité autochtone, l'âge et le genre) et 98-10-0446-01 (selon la minorité visible, le statut d'immigrant et la période d'immigration, la scolarité, l'âge et le genre) — [Statistique Canada, tableau 98-10-0451-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=9810045101) ; [Statistique Canada, tableau 98-10-0446-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=9810044601)

### Inferences
- [calc] Rapport « taux de chômage sans DES / grade universitaire » (15 ans et plus, 2025) : Nouveau-Brunswick 4,5 ; Canada 2,8 ; Ontario 2,7 ; Québec 2,3. Le gradient par diplôme du Nouveau-Brunswick, province à forte minorité francophone, est proche de celui de la Wallonie.
- Le chômage de longue durée est structurellement plus rare au Canada qu'en Europe francophone : en 2025, 13,0 % des chômeurs canadiens (9,3 % au Québec, 16,2 % en Ontario) cherchent depuis 52 semaines ou plus, contre 23 % en France et 32 % en Belgique (seuil de 12 mois). Mais la part des 27 semaines et plus augmente (Canada 21,5 % en octobre 2025, 23,7 % en octobre 2026) et elle croît avec l'âge (15-24 ans : 15,9 % ; 55-64 ans : 28,0 % en 2025).
- Entre janvier-octobre 2025 et janvier-octobre 2026, le chômage des jeunes diplômés universitaires recule au Canada (11,0 % à 9,1 %) et au Québec (10,4 % à 8,4 %), tandis que celui des jeunes sans DES augmente (23,6 % à 24,7 % au Canada ; 16,1 % à 17,9 % au Québec) : l'écart par diplôme se creuse chez les jeunes en 2026.
- Les immigrants récents diplômés universitaires (reçus depuis 5 ans ou moins) ont un taux de chômage de 9,0 % contre 3,2 % pour les natifs de même niveau (25-54 ans, 2025) : pour ce profil, le diplôme universitaire ne ramène pas le chômage au niveau des natifs sans diplôme postsecondaire (7,1 % pour les natifs avec DES).

### Gaps
- Territoires (Yukon, T.N.-O., Nunavut) : aucune ventilation par scolarité dans l'EPA ; par âge seulement 15+ et 25+ ; aucune tranche 15-24 ou 55-64 publiée ; moyenne annuelle 2025 non trouvée dans le tableau 14-10-0393-01 (arrêté à 2024 dans le fichier téléchargé).
- Cellules supprimées (x) en 2025 : « 0 à 8 années » dans presque toutes les provinces hors Québec et Ontario pour les 15-24 et 25-54 ans ; grade universitaire des 15-24 ans en Saskatchewan, à l'Î.-P.-É. et à Terre-Neuve-et-Labrador ; la plupart des cellules 55-64 ans × « postsecondaire partiel ». Le cumul 2023-2025 de la grille CSV en comble une partie.
- La durée du chômage n'est pas croisée avec la scolarité dans les tableaux publics utilisés (âge seulement) ; les résultats des immigrants par scolarité ne sont pas ventilés par province dans le tableau 14-10-0087-01.
- Les chiffres du Recensement de 2021 (tableau 98-10-0400-01) n'ont pas été extraits pour des communautés précises : seule l'existence et la structure du tableau ont été vérifiées ; la semaine de référence (mai 2021) est par ailleurs marquée par la pandémie.
- Aucune ventilation par langue (francophones / anglophones) n'existe dans ces tableaux de l'EPA ; les valeurs décrivent l'ensemble de la population de chaque province.

## Québec : tableaux de l'Institut de la statistique du Québec (ISQ)

### Takeaway
L'ISQ publie pour 2025 un croisement âge × scolarité pour le Québec entier : le taux de chômage des 15-29 ans sans diplôme d'études secondaires est de 15,1 % (16,8 % à 15-19 ans), contre 6,1 % pour les diplômés du postsecondaire et 6,2 % pour les universitaires ; chez les 30-54 ans, 7,6 % sans DES contre 3,9 % (postsecondaire) et 4,2 % (universitaire). Aucun croisement âge × diplôme par région administrative n'a été trouvé.

### Cited Findings
- Tableau 2 de l'ISQ « Taux de chômage selon le groupe d'âge et le niveau de scolarité, 15 à 54 ans, Québec, 2024 et 2025 » (source : EPA de Statistique Canada, adaptation ISQ ; `*` = coefficient de variation entre 15 % et 25 %, à interpréter avec prudence). Tableau reconstitué à partir du PDF (colonnes décalées à l'extraction ; cohérence vérifiée avec les variations 2024-2025 publiées et avec le texte) — [ISQ, Portrait du chômage chez les jeunes de 15 à 29 ans en 2025 (août 2026)](https://statistique.quebec.ca/fr/fichier/portrait-chomage-jeunes-15-29-ans-2025.pdf)

| Groupe d'âge | Niveau de scolarité | 2024 (%) | 2025 (%) |
|---|---|---|---|
| 15-29 ans | Sans diplôme d'études secondaires | 13,7 | 15,1 |
| 15-29 ans | Diplôme d'études secondaires | 9,3 | 8,8 |
| 15-29 ans | Diplôme d'études postsecondaires | 5,3 | 6,1 |
| 15-29 ans | Diplôme universitaire (bac+) | 5,9 | 6,2 |
| 15-19 ans | Sans diplôme d'études secondaires | 14,7 | 16,8 |
| 15-19 ans | Diplôme d'études secondaires | 9,3 | 9,5 |
| 15-19 ans | Diplôme d'études postsecondaires | 9,1 * | 7,7 * |
| 20-24 ans | Sans diplôme d'études secondaires | 14,2 * | 13,1 * |
| 20-24 ans | Diplôme d'études secondaires | 10,4 | 8,6 |
| 20-24 ans | Diplôme d'études postsecondaires | 5,0 | 6,4 |
| 20-24 ans | Diplôme universitaire (bac+) | 9,2 * | 9,0 * |
| 25-29 ans | Sans diplôme d'études secondaires | 9,4 * | 11,0 * |
| 25-29 ans | Diplôme d'études secondaires | 7,5 * | 7,9 * |
| 25-29 ans | Diplôme d'études postsecondaires | 5,2 | 5,6 |
| 25-29 ans | Diplôme universitaire (bac+) | 5,1 | 5,4 |
| 30-54 ans | Sans diplôme d'études secondaires | 9,6 | 7,6 |
| 30-54 ans | Diplôme d'études secondaires | 5,5 | 6,0 |
| 30-54 ans | Diplôme d'études postsecondaires | 3,9 | 3,9 |
| 30-54 ans | Diplôme universitaire (bac+) | 3,9 | 4,2 |

- En 2025, le Québec compte environ 220 000 chômeurs de 15 à 54 ans, dont près de 98 000 ont entre 15 et 29 ans (taux de chômage d'environ 8,2 %) ; taux de chômage d'environ 12,5 % à 15-19 ans, 7,9 % à 20-24 ans, 6,2 % à 25-29 ans et 4,5 % à 30-54 ans — [ISQ, Portrait du chômage chez les jeunes de 15 à 29 ans en 2025 (août 2026)](https://statistique.quebec.ca/fr/fichier/portrait-chomage-jeunes-15-29-ans-2025.pdf)
- Personnes immigrantes : taux de chômage 2025 de 27,6 % à 15-19 ans, 14,2 % à 20-24 ans et 7,5 % à 25-29 ans ; hommes de 15-29 ans 9,5 % contre 6,8 % pour les femmes — [ISQ, Portrait du chômage chez les jeunes de 15 à 29 ans en 2025 (août 2026)](https://statistique.quebec.ca/fr/fichier/portrait-chomage-jeunes-15-29-ans-2025.pdf)
- Comparaison interprovinciale des 15-19 ans en 2025 : Québec 12,5 %, Colombie-Britannique 20,1 %, Ontario 22,6 %, Alberta 24,1 % — [ISQ, Portrait du chômage chez les jeunes de 15 à 29 ans en 2025 (août 2026)](https://statistique.quebec.ca/fr/fichier/portrait-chomage-jeunes-15-29-ans-2025.pdf)
- Régions administratives : le bilan annuel de l'ISQ ne donne que des taux tous profils ; en 2025, quatre régions ont un taux de chômage supérieur à la moyenne québécoise : Gaspésie–Îles-de-la-Madeleine (8,9 %), Montréal (8,0 %), Laval (6,6 %) et Outaouais (6,6 %) — [ISQ, Bilan du marché du travail au Québec en 2025](https://statistique.quebec.ca/fr/fichier/bilan-marche-travail-quebec-2025.pdf)
- Données équivalentes de Statistique Canada pour le Québec (2025) : taux de chômage des 15-24 ans de 9,7 % (15,9 % [calc] sans DES ; 9,6 % avec DES ; 6,6 % avec certificat ou diplôme postsecondaire ; 9,3 % universitaires) ; des 25-54 ans de 4,8 % (8,1 % / 6,1 % / 4,2 % / 4,4 %) ; des 55-64 ans de 5,5 % (7,6 % / 5,5 % / 5,5 % / 5,0 %) — [Statistique Canada, tableau 14-10-0020-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=1410002001)

### Inferences
- Au Québec, l'avantage du diplôme universitaire sur le diplôme postsecondaire non universitaire (cégep technique, DEP) est nul ou négatif en termes de chômage à presque tous les âges (25-54 ans : 4,4 % contre 4,2 %) ; la coupure qui compte est celle du diplôme d'études secondaires.
- Les jeunes universitaires de 20-24 ans ont un chômage relativement élevé (9,0 %, estimation fragile), ce qui reflète l'entrée sur le marché du travail plus que le niveau de diplôme.

### Gaps
- Aucun tableau ISQ croisant âge × diplôme × région administrative n'a été trouvé ; les bulletins régionaux du ministère de l'Emploi (non-ISQ) donnent quelques taux par niveau d'études, non extraits ici.
- Le tableau ISQ s'arrête à 54 ans ; pour les 55-64 ans par diplôme il faut utiliser le tableau 14-10-0020-01 de Statistique Canada.
- Les valeurs du tableau ISQ proviennent d'une reconstruction à partir d'un PDF aux colonnes décalées ; à revérifier visuellement avant publication.

## France : sources nationales à profil détaillé (Insee, Céreq, France Travail, Dares)

### Takeaway
En France en 2025, le taux de chômage va de 5,3 % (bac+2 ou plus) à 14,7 % (aucun diplôme ou brevet) et de 5,0 % (50 ans ou plus) à 19,8 % (15-24 ans) ; le croisement le plus discriminant est diplôme × ancienneté de sortie d'études (2023 : 42,4 % pour les non-diplômés sortis depuis 1 à 4 ans contre 6,8 % pour les bac+5). France Travail publie un taux d'accès à l'emploi à six mois par âge et par niveau de formation : 53,8 % pour les moins de 26 ans contre 37,7 % pour les 50 ans et plus, 51,5 % pour les bac+2 et plus contre 41,5 % pour le niveau brevet ou inférieur (entrants du 2e trimestre 2025).

### Cited Findings
- Taux de chômage 2025 selon le diplôme (enquête Emploi, France, personnes actives en logement ordinaire) : bac+2 ou plus 5,3 % (805 000 chômeurs) ; baccalauréat 9,1 % (633 000) ; CAP, BEP ou équivalent 7,6 % (437 000) ; aucun diplôme ou brevet des collèges 14,7 % (567 000) ; ensemble 7,7 % (2 451 000) — [Insee, « Inégalités face au chômage », Emploi, chômage, revenus du travail, édition 2026](https://www.insee.fr/fr/statistiques/8733055)
- Taux de chômage 2025 selon la catégorie socioprofessionnelle : cadres 4,0 % ; professions intermédiaires 5,0 % ; employés qualifiés 7,3 % ; employés peu qualifiés 11,4 % ; ouvriers qualifiés 8,6 % ; ouvriers peu qualifiés 17,1 % — [Insee, « Inégalités face au chômage », Emploi, chômage, revenus du travail, édition 2026](https://www.insee.fr/fr/statistiques/8733055)
- Taux de chômage 2025 selon l'âge : 15-24 ans 19,8 % (18,8 % en 2024) ; 25-49 ans 6,9 % (6,7 %) ; 50 ans ou plus 5,0 % (4,9 %) ; selon la durée depuis la fin de la formation initiale : 1 à 4 ans 16,6 % (15,5 % en 2024) ; 5 à 10 ans 9,6 % (9,1 %) ; 11 ans ou plus 5,6 % (5,5 %) — [Insee, « Évolution du chômage », Emploi, chômage, revenus du travail, 02/07/2026](https://www.insee.fr/fr/statistiques/8733053)
- Parmi les chômeurs de 2025, 26,5 % des 15-24 ans n'ont jamais travaillé (7,0 % des 25-49 ans ; 2,5 % des 50 ans ou plus) ; 72,5 % des jeunes chômeurs ayant déjà travaillé sortent d'un emploi à durée limitée (39,7 % des 50 ans ou plus, dont 10,8 % ont subi un licenciement économique) — [Insee, « Inégalités face au chômage », Emploi, chômage, revenus du travail, édition 2026](https://www.insee.fr/fr/statistiques/8733055)
- Croisement diplôme × ancienneté de sortie de formation initiale, taux de chômage 2023 (dernier croisement publié trouvé ; enquête Emploi 2023, France hors Mayotte) — [Insee, « Chômage en phase d'insertion professionnelle », Formations et emploi, édition 2025](https://www.insee.fr/fr/statistiques/8305516)

| Niveau de diplôme | Sortis depuis 1 à 4 ans | 5 à 10 ans | 11 ans ou plus |
|---|---|---|---|
| Bac+5 ou plus | 6,8 | 4,8 | 3,6 |
| Bac+3 ou bac+4 | 10,7 | 6,9 | 3,8 |
| Bac+2 | 11,0 | 6,6 | 3,9 |
| Baccalauréat ou équivalent | 18,2 | 10,9 | 5,7 |
| CAP, BEP ou équivalent | 17,5 | 11,7 | 6,4 |
| Aucun diplôme, brevet des collèges | 42,4 | 29,9 | 10,1 |
| Ensemble | 14,2 | 9,3 | 5,6 |

- Enquête Génération du Céreq (jeunes sortis du système éducatif en 2021, environ 31 000 interrogés entre septembre 2024 et janvier 2025, soit trois ans après la sortie ; évolutions en % par rapport à la Génération 2017 ; `ns` = non significatif ; EDI = emploi à durée indéterminée parmi les emplois) — [Céreq Bref n° 487-488, « S'insérer dans un monde instable : le diplôme reste une valeur sûre », juillet 2026](https://www.cereq.fr/sites/default/files/2026-07/Bref_487-488_OK.pdf)

| Plus haut diplôme | Revenu médian du 1er emploi | Taux d'emploi à 3 ans (%) | Évol. | Taux de chômage à 3 ans (%) | Évol. | Part en EDI (%) | Évol. |
|---|---|---|---|---|---|---|---|
| Non-diplômé | 1 260 € | 43 | +13 | 40 | -20 | 41 | -20 |
| CAP-BEP (niveau 3) | 1 360 € | 65 | +6 | 25 | -18 | 55 | -10 |
| Bac (niveau 4) | 1 400 € | 71 | +3 | 18 | -13 | 56 | -8 |
| Bac+2 (niveau 5) | 1 480 € | 81 | ns | 13 | -14 | 66 | -11 |
| Santé-social | 1 840 € | 93 | ns | 3 | ns | 79 | ns |
| Bac+3/4 (niveau 6) | 1 530 € | 78 | +2 | 13 | ns | 67 | -11 |
| Master (niveau 7) | 1 810 € | 87 | +3 | 9 | -15 | 71 | -13 |
| Écoles d'ingénieurs et de commerce | 2 130 € | 90 | +2 | 7 | ns | 76 | -18 |
| Autres bac+5 (niveau 7) | 2 020 € | 87 | ns | 8 | ns | 83 | ns |
| Bac+8 (niveau 8) | 2 410 € | 90 | ns | 6 | ns | 71 | -6 |
| Ensemble | 1 530 € | 74 | +6 | 16 | -21 | 64 | -9 |

- Céreq : le taux de chômage de la Génération 2021 était au plus bas à 13 % et le taux d'emploi au plus haut à 77 % à l'été 2023, avant de se dégrader jusqu'à l'automne 2024 ; le taux de déclassement des jeunes diplômés atteint 32 % (26 % pour la Génération 2004) — [Céreq Bref n° 487-488, « S'insérer dans un monde instable : le diplôme reste une valeur sûre », juillet 2026](https://www.cereq.fr/sites/default/files/2026-07/Bref_487-488_OK.pdf)
- France Travail, taux d'accès à l'emploi (TAE) dans les six mois suivant l'inscription et taux de présence en emploi durable (CDI ou contrat de six mois ou plus) au sixième mois, **entrants sur les listes au 2e trimestre 2025** (mesure au 4e trimestre 2025 ; accès à l'emploi = plus de 78 heures travaillées dans un mois). Tableau reconstitué à partir du PDF (lignes décalées à l'extraction ; valeurs recoupées avec le texte de la publication) — [France Travail, Statistiques et indicateurs n° 26.011, juillet 2026](https://www.francetravail.org/files/live/sites/peorg/files/documents/Statistiques-et-analyses/S%26I/si_26.011_acces_a_l_emploi_des_inscrits_au_4e_trim_2025.pdf)

| Profil (entrants T2 2025) | TAE à 6 mois (%) | TAE entrants T2 2024 (%) | Emploi durable au 6e mois (%) |
|---|---|---|---|
| Femmes | 46,0 | 46,2 | 18,1 |
| Hommes | 51,1 | 51,2 | 20,0 |
| Moins de 26 ans | 53,8 | 56,6 | 21,2 |
| 26 à 49 ans | 48,7 | 47,8 | 19,5 |
| 50 ans et plus | 37,7 | 37,6 | 13,3 |
| BEPC ou inférieur | 41,5 | 40,3 | 14,3 |
| CAP/BEP | 48,9 | 47,6 | 16,7 |
| Bac | 53,3 | 52,8 | 20,1 |
| Bac+2 et plus | 51,5 | 51,2 | 23,4 |
| Motif : fin d'études et primo-arrivants | 38,6 | 36,2 | 15,5 |
| Motif : fin de CDD ou de mission d'intérim | 61,6 | 61,4 | 20,8 |
| Motif : licenciement | 37,6 | 38,5 | 16,7 |
| Motif : démission | 64,9 | 64,7 | 28,9 |
| Motif : rupture conventionnelle | 44,1 | 45,4 | 22,9 |
| Inscription automatique (loi Plein emploi) | 33,3 | NA | 14,5 |
| Ensemble | 48,6 | 48,8 | 19,1 |

- France Travail, mêmes indicateurs pour **l'ensemble des inscrits en catégories A ou B au 2e trimestre 2025** (stock, quelle que soit l'ancienneté d'inscription) — [France Travail, Statistiques et indicateurs n° 26.011, juillet 2026](https://www.francetravail.org/files/live/sites/peorg/files/documents/Statistiques-et-analyses/S%26I/si_26.011_acces_a_l_emploi_des_inscrits_au_4e_trim_2025.pdf)

| Profil (stock A-B, T2 2025) | TAE à 6 mois (%) | Emploi durable au 6e mois (%) |
|---|---|---|
| Femmes | 34,7 | 11,7 |
| Hommes | 39,1 | 12,7 |
| Moins de 26 ans | 47,6 | 18,2 |
| 26 à 49 ans | 38,9 | 12,8 |
| 50 ans et plus | 24,5 | 6,3 |
| BEPC ou inférieur | 30,7 | 8,8 |
| CAP/BEP | 33,6 | 9,6 |
| Bac | 41,0 | 13,3 |
| Bac+2 et plus | 41,2 | 15,4 |
| Bénéficiaires du RSA | 20,4 | 6,3 |
| Demandeurs d'emploi de longue durée (12 mois en cat. A sur 15) | 16,2 | 5,9 |
| Demandeurs d'emploi de très longue durée (24 mois sur 27) | 8,0 | 2,9 |
| Ensemble | 36,9 | 12,2 |

- France Travail, TAE à 6 mois par région (stock des inscrits A-B au 2e trimestre 2025 ; entre parenthèses le taux de présence en emploi durable) : Pays de la Loire 44,2 % (13,2) ; Bretagne 43,6 % (12,9) ; Corse 42,3 % (14,3) ; Nouvelle-Aquitaine 41,1 % (12,4) ; Auvergne-Rhône-Alpes 40,5 % (12,7) ; Centre-Val de Loire 39,1 % (11,7) ; Provence-Alpes-Côte d'Azur 38,7 % (12,6) ; Bourgogne-Franche-Comté 38,4 % (11,6) ; Normandie 37,8 % (11,8) ; Occitanie 37,7 % (11,6) ; Grand Est 36,2 % (11,4) ; Hauts-de-France 34,8 % (11,1) ; Île-de-France 34,6 % (13,4) ; France entière 36,9 % (12,2). Valeurs reconstituées (lignes décalées dans le PDF) et recoupées avec les huit valeurs citées dans le texte de la publication — [France Travail, Statistiques et indicateurs n° 26.011, juillet 2026](https://www.francetravail.org/files/live/sites/peorg/files/documents/Statistiques-et-analyses/S%26I/si_26.011_acces_a_l_emploi_des_inscrits_au_4e_trim_2025.pdf)
- Avertissement de France Travail : depuis le 1er janvier 2025, l'inscription automatique des demandeurs du RSA et des jeunes suivis en mission locale élargit le champ ; les évolutions sur un an (notamment -2,8 points pour les moins de 26 ans) ne sont pas interprétables comme conjoncturelles — [France Travail, Statistiques et indicateurs n° 26.011, juillet 2026](https://www.francetravail.org/files/live/sites/peorg/files/documents/Statistiques-et-analyses/S%26I/si_26.011_acces_a_l_emploi_des_inscrits_au_4e_trim_2025.pdf)

### Inferences
- L'ordre des difficultés est le même dans toutes les sources françaises : l'âge élevé pénalise la vitesse de retour à l'emploi (TAE de 37,7 % à 50 ans et plus) alors que la jeunesse pénalise le niveau de chômage (19,8 %) mais pas la vitesse de sortie (TAE de 53,8 %) ; le faible diplôme pénalise les deux.
- [calc] Écart de TAE entre bac+2 et plus et brevet ou inférieur : 10,0 points chez les entrants (51,5 contre 41,5) et 10,5 points dans le stock (41,2 contre 30,7) ; écart entre moins de 26 ans et 50 ans et plus : 16,1 points chez les entrants, 23,1 points dans le stock. L'âge est donc un facteur plus discriminant que le diplôme pour la vitesse de retour à l'emploi des inscrits.
- Le classement régional du TAE (Pays de la Loire et Bretagne en tête, Île-de-France et Hauts-de-France en queue) recoupe celui de la part du chômage de longue durée d'Eurostat (Bretagne et Pays de la Loire environ 12 %, Île-de-France 26,7 %, Hauts-de-France 25,6 %).

### Gaps
- Dares (seniors : ancienneté au chômage, tableau de bord des seniors) : la page <https://dares.travail-emploi.gouv.fr/donnees/les-seniors-sur-le-marche-du-travail> a renvoyé un contrôle anti-robot (captcha) ; aucune donnée Dares n'a pu être extraite. Substituts utilisés : Insee (part de longue durée de 39,1 % à 50 ans ou plus) et France Travail (TAE de 24,5 % à 50 ans et plus dans le stock).
- France Travail ne publie pas dans cette note de croisement âge × niveau de formation ni de ventilation régionale par âge ou diplôme (régions : total seulement).
- Le croisement Insee diplôme × ancienneté de sortie d'études n'a été trouvé que pour 2023 (édition 2025 de « Formations et emploi ») ; pour 2025 seules les marges sont publiées dans les pages consultées. Aucun croisement régional de ce type n'a été trouvé.
- Céreq : les résultats régionaux de l'enquête Génération (par exemple Normandie, juin 2026) n'ont pas pu être téléchargés ; seuls les résultats nationaux sont repris.
- Le budget de recherches web de la session ayant été épuisé, les sources Dares, les déclinaisons régionales du Céreq et d'éventuelles publications plus récentes de France Travail n'ont pas pu être recherchées plus avant.

## Belgique, Suisse, Luxembourg : sources nationales (Statbel, OFS/SECO, STATEC/ADEM)

### Takeaway
Les sources administratives confirment les profils d'enquête : en Suisse (chômage inscrit, octobre 2026) le taux est de 5,1 % pour le degré secondaire I contre 2,5 % pour le tertiaire, et de 4,1 % en Suisse romande et au Tessin contre 2,5 % en Suisse alémanique, avec une durée moyenne de 8,8 mois pour les 50-64 ans contre 3,1 mois pour les 15-24 ans. Au Luxembourg, les diplômés du supérieur représentent 33,2 % des demandeurs d'emploi résidents disponibles fin octobre 2026 (22,3 % fin octobre 2019), et 63,6 % des 45 ans et plus peu diplômés sont inscrits depuis plus d'un an.

### Cited Findings
- Suisse, chômage inscrit auprès des offices régionaux de placement (SECO), octobre 2026 ; tableaux 1, 4, 5, 6 et 10 du rapport mensuel (extraction du PDF vérifiée par deux méthodes ; les effectifs par niveau de formation somment bien à 141 015) — [SECO, La situation sur le marché du travail, octobre 2026 (PDF, 05/11/2026)](https://cms.news.admin.ch/fileservice/sdweb-docs-prod-nsbcch-files/files/2026/11/04/87ba940a-a408-4da2-a6fb-73f8fa79c052.pdf)

| Caractéristique | Chômeurs inscrits oct. 2026 | Variation sur un an | Taux de chômage oct. 2026 (%) | Taux oct. 2025 (%) | Durée moyenne écoulée (mois) | Durée médiane (mois) |
|---|---|---|---|---|---|---|
| Total Suisse | 141 015 | +4,3 % | 3,0 | 2,9 | 6,7 | 4,8 |
| Suisse alémanique | 85 864 | +3,9 % | 2,5 | 2,4 | 6,5 | 4,6 |
| Suisse romande et Tessin | 55 151 | +4,9 % | 4,1 | 3,9 | 7,0 | 5,0 |
| 15-24 ans | 13 667 | +1,5 % | 3,2 | 3,1 | 3,1 | 2,4 |
| 25-49 ans | 88 477 | +4,5 % | 3,3 | 3,1 | 6,3 | 4,7 |
| 50-64 ans | 38 721 | +4,7 % | 2,7 | 2,5 | 8,8 | 7,0 |
| Degré secondaire I | 30 114 | -1,0 % | 5,1 | 5,1 | 6,6 | 4,3 |
| Degré secondaire II | 54 173 | +2,5 % | 2,8 | 2,7 | 6,4 | 4,0 |
| Degré tertiaire | 52 837 | +13,9 % | 2,5 | 2,2 | 7,2 | 5,1 |
| Formation non spécifiée | 3 891 | -30,0 % | ... | ... | ... | ... |

- Suisse, octobre 2026 : chômeurs de longue durée (plus d'un an) 23 499 (+23,4 % sur un an), dont 10 194 âgés de 50 à 64 ans (+21,0 %) et 220 âgés de 15 à 24 ans ; chômeurs par durée écoulée : 79 805 de 1 à 6 mois, 37 711 de 7 à 12 mois, 23 499 de plus d'un an — [SECO, La situation sur le marché du travail, octobre 2026 (PDF, 05/11/2026)](https://cms.news.admin.ch/fileservice/sdweb-docs-prod-nsbcch-files/files/2026/11/04/87ba940a-a408-4da2-a6fb-73f8fa79c052.pdf)
- Suisse, taux de chômage inscrit par canton, octobre 2026 (octobre 2025) : Genève 5,3 % (4,9) ; Vaud 4,8 % (4,5) ; Neuchâtel 4,3 % (4,6) ; Jura 4,2 % (5,1) ; Valais 3,3 % (3,1) ; Fribourg 2,5 % (2,5) ; Berne 2,2 % (2,1) ; Soleure 3,0 % (3,1) ; Tessin 2,9 % (2,7) ; Suisse 3,0 % (2,9) — [SECO, La situation sur le marché du travail, octobre 2026 (PDF, 05/11/2026)](https://cms.news.admin.ch/fileservice/sdweb-docs-prod-nsbcch-files/files/2026/11/04/87ba940a-a408-4da2-a6fb-73f8fa79c052.pdf)
- Luxembourg, demandeurs d'emploi résidents disponibles inscrits à l'ADEM, par âge, niveau de diplôme et durée d'inscription. [calc] Effectifs agrégés par le rédacteur à partir du fichier de microdonnées agrégées publié par l'ADEM ; entre parenthèses, [calc] part des inscrits depuis 12 mois et plus — [ADEM, données ouvertes « Chiffres-clés de l'ADEM », fichier de-dispo-profils.csv (mise à jour du 20/11/2026)](https://download.data.public.lu/resources/chiffres-cles-de-ladem/20261120-100122/de-dispo-profils.csv)

#### ADEM — demandeurs d'emploi résidents disponibles au 31 octobre 2026 : effectifs (part inscrite depuis 12 mois et plus) — [ADEM, données ouvertes « Chiffres-clés de l'ADEM », fichier de-dispo-profils.csv (mise à jour du 20/11/2026)](https://download.data.public.lu/resources/chiffres-cles-de-ladem/20261120-100122/de-dispo-profils.csv)

| Âge | Secondaire inférieur | Secondaire supérieur | Supérieur | Total |
|---|---|---|---|---|
| Moins de 30 ans | 1620 (25.6 %) | 1659 (18.2 %) | 984 (12.3 %) | 4263 (19.6 %) |
| 30-44 ans | 2098 (45.5 %) | 2388 (34.8 %) | 3372 (25.2 %) | 7858 (33.5 %) |
| 45 ans et plus | 3556 (63.6 %) | 2323 (52.7 %) | 2435 (40.3 %) | 8314 (53.7 %) |
| Total | 7274 (49.9 %) | 6370 (37.0 %) | 6791 (28.7 %) | 20435 (38.8 %) |

#### ADEM — demandeurs d'emploi résidents disponibles au 31 octobre 2025 : effectifs (part inscrite depuis 12 mois et plus) — [ADEM, données ouvertes « Chiffres-clés de l'ADEM », fichier de-dispo-profils.csv (mise à jour du 20/11/2026)](https://download.data.public.lu/resources/chiffres-cles-de-ladem/20261120-100122/de-dispo-profils.csv)

| Âge | Secondaire inférieur | Secondaire supérieur | Supérieur | Total |
|---|---|---|---|---|
| Moins de 30 ans | 1375 (26.2 %) | 1478 (20.8 %) | 844 (13.9 %) | 3697 (21.2 %) |
| 30-44 ans | 2041 (45.6 %) | 2161 (35.3 %) | 3039 (26.1 %) | 7241 (34.4 %) |
| 45 ans et plus | 3454 (63.5 %) | 2197 (52.5 %) | 2131 (40.2 %) | 7782 (54.0 %) |
| Total | 6870 (50.7 %) | 5836 (38.1 %) | 6014 (29.4 %) | 18720 (39.9 %) |

#### ADEM — demandeurs d'emploi résidents disponibles au 31 octobre 2019 : effectifs (part inscrite depuis 12 mois et plus) — [ADEM, données ouvertes « Chiffres-clés de l'ADEM », fichier de-dispo-profils.csv (mise à jour du 20/11/2026)](https://download.data.public.lu/resources/chiffres-cles-de-ladem/20261120-100122/de-dispo-profils.csv)

| Âge | Secondaire inférieur | Secondaire supérieur | Supérieur | Total |
|---|---|---|---|---|
| Moins de 30 ans | 1238 (29.2 %) | 1191 (15.8 %) | 536 (9.1 %) | 2965 (20.2 %) |
| 30-44 ans | 2229 (42.5 %) | 1738 (31.2 %) | 1686 (21.9 %) | 5653 (32.9 %) |
| 45 ans et plus | 3744 (68.1 %) | 1550 (51.7 %) | 1124 (40.0 %) | 6418 (59.3 %) |
| Total | 7211 (53.5 %) | 4479 (34.2 %) | 3346 (26.0 %) | 15036 (41.6 %) |

- [calc] Structure par diplôme des demandeurs d'emploi résidents disponibles (fin octobre) : supérieur 22,3 % en 2019, 25,6 % en 2022, 32,1 % en 2025, 33,2 % en 2026 ; secondaire inférieur 48,0 % en 2019, 41,7 % en 2022, 36,7 % en 2025, 35,6 % en 2026 — [ADEM, données ouvertes « Chiffres-clés de l'ADEM », fichier de-dispo-profils.csv (mise à jour du 20/11/2026)](https://download.data.public.lu/resources/chiffres-cles-de-ladem/20261120-100122/de-dispo-profils.csv)
- [calc] Variations sur un an (31 octobre 2025 à 31 octobre 2026) : ensemble +9,2 % (18 720 à 20 435) ; diplômés du supérieur +12,9 % (6 014 à 6 791) ; secondaire inférieur +5,9 % ; moins de 30 ans +15,3 % (3 697 à 4 263) ; 45 ans et plus +6,8 % (7 782 à 8 314) — [ADEM, données ouvertes « Chiffres-clés de l'ADEM », fichier de-dispo-profils.csv (mise à jour du 20/11/2026)](https://download.data.public.lu/resources/chiffres-cles-de-ladem/20261120-100122/de-dispo-profils.csv)
- Communiqué ADEM de septembre 2026 : 20 269 demandeurs d'emploi résidents disponibles au 30 septembre 2026 (+7,1 % sur un an) ; taux de chômage désaisonnalisé de 6,5 % (STATEC) ; +10,6 % sur un an pour les plus qualifiés (+19,0 % en août) ; +10,7 % pour les 16-29 ans ; +7,6 % pour les 45-64 ans — [ADEM, communiqué « Un taux de chômage à 6,5 % », chiffres-clés de septembre 2026](https://gouvernement.lu/dam-assets/images-documents/actualites/2026/10-octobre/20-adem-chomage/communiqu-de-presse-sept-2026-chiffres-cls-adem.pdf)
- ADEM, flux d'octobre 2026 (résidents) : 3 256 ouvertures de dossiers et 2 643 clôtures (septembre 2026 : 3 432 et 2 894) ; ces flux ne sont ventilés ni par âge ni par diplôme — [ADEM, données ouvertes, fichier de-flux.csv](https://download.data.public.lu/resources/chiffres-cles-de-ladem/20261120-100138/de-flux.csv)
- Belgique : les ventilations région × diplôme × âge de l'Enquête sur les forces de travail de Statbel sont celles diffusées par Eurostat et reprises dans les sections précédentes (Bruxelles : 25,4 % de chômage pour les peu diplômés de 15-74 ans, 51,5 % pour les 15-24 ans peu diplômés ; Wallonie : 17,7 % et 34,4 %) — [Eurostat lfst_r_lfu3rt](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfu3rt/default/table?lang=fr)

### Inferences
- En Suisse, le chômage inscrit des diplômés du tertiaire augmente beaucoup plus vite (+13,9 % sur un an) que celui des autres niveaux, et leur durée moyenne de chômage est la plus longue (7,2 mois) ; [calc] ils forment 37,5 % des chômeurs inscrits (52 837 / 141 015). Le Luxembourg montre la même tendance (+12,9 % sur un an pour le supérieur).
- Au Luxembourg, la durée d'inscription dépend à la fois de l'âge et du diplôme, mais l'âge domine : un diplômé du supérieur de 45 ans et plus a une probabilité d'être inscrit depuis plus d'un an (40,3 %) plus élevée qu'un jeune de moins de 30 ans peu diplômé (25,6 %).
- Les taux SECO (chômage inscrit) sont nettement plus bas que les taux d'enquête ESPA/Eurostat (Suisse : 3,0 % en octobre 2026 contre 4,9 % en moyenne 2025 ; Région lémanique 7,8 % en 2025 selon Eurostat, Genève 5,3 % et Vaud 4,8 % selon le SECO) : les deux mesures ne sont pas interchangeables. Elles ordonnent les âges différemment (au SECO les 15-24 ans ont un taux proche des 25-49 ans, alors que dans l'enquête leur taux est presque double), car beaucoup de jeunes chômeurs ne s'inscrivent pas.

### Gaps
- Statbel, IWEPS et view.brussels n'ont pas été interrogés directement (budget de recherche épuisé) ; les données belges proviennent uniquement d'Eurostat (même enquête). Les statistiques administratives des demandeurs d'emploi inoccupés par âge et niveau d'études (Forem, Actiris) ne sont pas couvertes.
- SECO : le rapport mensuel ne croise pas âge × niveau de formation, ni canton × âge ; ces croisements existent en principe sur amstat.ch mais n'ont pas été extraits. Le taux de chômage inscrit par niveau de formation n'est pas publié par canton dans le rapport.
- OFS (ESPA) : non interrogé directement ; les données d'enquête suisses par grande région, âge et formation proviennent d'Eurostat.
- ADEM : pas de taux (seulement des effectifs) par âge × diplôme, faute de population active de référence par diplôme ; les tranches d'âge du fichier sont < 30, 30-44, 45 ans et plus.

## Taux de retour à l'emploi ou de sortie du chômage par âge et par diplôme

### Takeaway
Un véritable taux de retour à l'emploi par âge et par diplôme n'a été trouvé que pour la France (France Travail, taux d'accès à l'emploi à six mois : de 37,7 % pour les 50 ans et plus à 53,8 % pour les moins de 26 ans ; de 41,5 % pour le niveau brevet à 53,3 % pour le niveau bac, parmi les entrants). Pour les autres territoires, il faut utiliser des indicateurs indirects : part du chômage de longue durée, durée moyenne ou médiane, part des chômeurs récents.

### Cited Findings
- France : TAE à six mois des entrants du 2e trimestre 2025 — moins de 26 ans 53,8 % ; 26-49 ans 48,7 % ; 50 ans et plus 37,7 % ; BEPC ou inférieur 41,5 % ; CAP/BEP 48,9 % ; bac 53,3 % ; bac+2 et plus 51,5 % ; ensemble 48,6 % ; par région (stock) de 34,6 % en Île-de-France à 44,2 % en Pays de la Loire — [France Travail, Statistiques et indicateurs n° 26.011, juillet 2026](https://www.francetravail.org/files/live/sites/peorg/files/documents/Statistiques-et-analyses/S%26I/si_26.011_acces_a_l_emploi_des_inscrits_au_4e_trim_2025.pdf)
- France : dans le stock des inscrits, le TAE à six mois tombe à 16,2 % pour les demandeurs d'emploi de longue durée et à 8,0 % pour ceux de très longue durée — [France Travail, Statistiques et indicateurs n° 26.011, juillet 2026](https://www.francetravail.org/files/live/sites/peorg/files/documents/Statistiques-et-analyses/S%26I/si_26.011_acces_a_l_emploi_des_inscrits_au_4e_trim_2025.pdf)
- Suisse : durée moyenne de chômage écoulée de 3,1 mois (15-24 ans), 6,3 mois (25-49 ans) et 8,8 mois (50-64 ans) ; 6,6 mois (secondaire I), 6,4 mois (secondaire II), 7,2 mois (tertiaire), en octobre 2026 — [SECO, La situation sur le marché du travail, octobre 2026 (PDF, 05/11/2026)](https://cms.news.admin.ch/fileservice/sdweb-docs-prod-nsbcch-files/files/2026/11/04/87ba940a-a408-4da2-a6fb-73f8fa79c052.pdf)
- Canada : durée moyenne du chômage en 2025 de 15,9 semaines (15-24 ans), 23,6 semaines (25-54 ans) et 25,7 semaines (55-64 ans) ; au Québec 12,1, 19,5 et 22,8 semaines ; en Ontario 18,0, 26,7 et 30,0 semaines — [Statistique Canada, tableau 14-10-0057-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=1410005701)
- Luxembourg : part des inscrits depuis 12 mois et plus de 19,6 % (moins de 30 ans), 33,5 % (30-44 ans) et 53,7 % (45 ans et plus) ; 49,9 % (secondaire inférieur), 37,0 % (secondaire supérieur), 28,7 % (supérieur) au 31 octobre 2026 ([calc] à partir du fichier ADEM) — [ADEM, données ouvertes « Chiffres-clés de l'ADEM », fichier de-dispo-profils.csv (mise à jour du 20/11/2026)](https://download.data.public.lu/resources/chiffres-cles-de-ladem/20261120-100122/de-dispo-profils.csv)
- Belgique, France, Suisse (enquête, 2025) : part du chômage de longue durée par âge — voir le tableau `lfsa_upgan` de la section sur le chômage de longue durée (15-24 ans : France 9,3 %, Belgique 18,3 %, Suisse 15,0 % ; 55-64 ans : 42,6 %, 44,2 %, 43,9 %) — [Eurostat lfsa_upgan](https://ec.europa.eu/eurostat/databrowser/view/lfsa_upgan/default/table?lang=fr)

### Inferences
- Sur l'axe de l'âge, tous les indicateurs indirects racontent la même chose dans les cinq pays : les jeunes entrent souvent au chômage mais en sortent vite, les 50 ans et plus y entrent rarement mais y restent. Un indicateur de « difficulté » destiné au public devrait donc afficher séparément le risque (taux de chômage du profil) et la durée (part de longue durée ou taux d'accès à l'emploi).
- Sur l'axe du diplôme, l'effet sur la vitesse de sortie est net en France, en Belgique et au Luxembourg (parts de longue durée décroissantes avec le diplôme) mais faible ou nul en Suisse (durée moyenne la plus longue pour le tertiaire au SECO ; 30,1 % de longue durée pour le supérieur contre 27,5 % pour le niveau moyen selon Eurostat 2025) et au Canada.
- Les indicateurs ne sont pas comparables en niveau entre pays (TAE administratif français, durées écoulées suisses, semaines canadiennes, stocks luxembourgeois) : seule la comparaison des profils à l'intérieur d'un même territoire est légitime.

### Gaps
- Aucun taux de sortie ou de retour à l'emploi par âge × diplôme n'a été trouvé pour la Belgique (Forem, Actiris, ONEM non consultés), la Suisse (sorties SECO par profil non extraites d'amstat.ch), le Luxembourg (flux ADEM non ventilés) ni le Canada (les flux bruts de l'EPA par scolarité ne figurent pas dans les tableaux publics utilisés).
- Les tables de transitions d'Eurostat (flux trimestriels du marché du travail) et les indicateurs de l'OCDE sur les flux n'ont pas été examinés ; leur ventilation éventuelle par âge ou diplôme reste à vérifier.
- France Travail : pas de croisement âge × niveau de formation, pas de ventilation régionale par profil.

## Matrice de disponibilité : quelles cellules territoire × âge × diplôme existent, à quel niveau géographique

### Takeaway
La grille complète région × 3 âges × 3 diplômes n'existe en source harmonisée que pour le taux de chômage (Eurostat `lfst_r_lfu3rt` en Europe, tableau 14-10-0020-01 au Canada) ; tous les autres indicateurs ne croisent qu'une des deux dimensions au niveau régional. Les trous se concentrent en Corse, au Luxembourg, dans les petites provinces atlantiques et dans les trois territoires canadiens.

### Cited Findings
- Synthèse établie par le rédacteur à partir des dimensions effectivement renvoyées par les API interrogées le 22/11/2026 (Eurostat : [Eurostat lfst_r_lfu3rt](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfu3rt/default/table?lang=fr), [Eurostat lfst_r_lfe2emprtn](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfe2emprtn/default/table?lang=fr), [Eurostat lfst_r_lfu2ltu](https://ec.europa.eu/eurostat/databrowser/view/lfst_r_lfu2ltu/default/table?lang=fr), [Eurostat edat_lfse_33](https://ec.europa.eu/eurostat/databrowser/view/edat_lfse_33/default/table?lang=fr), [Eurostat edat_lfse_22](https://ec.europa.eu/eurostat/databrowser/view/edat_lfse_22/default/table?lang=fr), [Eurostat lfsa_upgan](https://ec.europa.eu/eurostat/databrowser/view/lfsa_upgan/default/table?lang=fr) ; Canada : [Statistique Canada, tableau 14-10-0020-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=1410002001), [Statistique Canada, tableau 14-10-0057-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=1410005701), [Statistique Canada, tableau 14-10-0292-01](https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=1410029201)).

| Indicateur | Source et code | Niveau géographique | Âges disponibles | Diplôme | Dernière période | Cellules manquantes ou supprimées |
|---|---|---|---|---|---|---|
| Taux de chômage | Eurostat lfst_r_lfu3rt | NUTS 0-1-2 (régions FR, BE1, BE3, LU00, CH01, CH02) | 15-24, 15-29, 25-34, 35-44, 45-54, 55-64, ≥ 25, 20-64, 15-74 | CITE 0-2, 3-4, 5-8 | 2025 | Corse (presque tout) ; Luxembourg (âge fin × diplôme) ; régions FR moyennes pour 35-64 ans × diplôme ; pas de 25-54 publié (calcul possible) |
| Taux de chômage détaillé | Eurostat lfsa_urgaed | Pays | tranches quinquennales, 25-49, 25-54, 50-64, 55-64 | CITE 0-2, 3-4, 5-8 | 2025 | Luxembourg : diplôme × âge fin supprimé |
| Taux d'emploi | Eurostat lfst_r_lfe2emprt | NUTS 0-1-2 | 15-24, 25-34, 35-44, 45-54, 55-64, 20-64 | non | 2025 | Corse : fiabilité faible |
| Taux d'emploi par diplôme | Eurostat lfst_r_lfe2emprtn / lfst_r_lfe2emprc | NUTS 0-1-2 | 15-64, 20-64, 25-54, 55-64 | CITE 0-2, 3-4, 5-8 (et nationalité / pays de naissance) | 2025 | pas de 15-24 ni 25-34 par diplôme |
| Chômage de longue durée par diplôme | Eurostat lfst_r_lfu2ltu | NUTS 0-1-2 | 15-74, 20-64, 25-64, ≥ 25 | CITE 0-2, 3-4, 5-8 | 2025 | Corse, Luxembourg, Bretagne, Pays de la Loire, Centre-Val de Loire (diplôme) |
| Chômage de longue durée par âge | Eurostat lfsa_upgan / lfsa_ugad | Pays | 15-24, 25-49, 25-54, 50-64, 55-64… | non | 2025 | Luxembourg (jeunes et seniors supprimés) |
| Durée du chômage × diplôme × âge | OCDE DF_LSO_NEAC_DISTR_DURUNEMP | Pays (dont Canada) | 25-34, 35-44, 45-54, 55-64, 25-64 | CITE 0-2, 3-4, 5-8 | 2024 (triennal) | Luxembourg (détail) ; pas de 15-24 |
| Diplômés récents (emploi) | Eurostat edat_lfse_33 / edat_lfse_24 | NUTS 0-1-2 | 20-34 (15-34, 18-34) | CITE 3-8, 3-4 (général / professionnel), 5-8 ; 0-2 au niveau pays | 2025 | CITE 3-4 dans la plupart des régions FR, Bruxelles, Luxembourg ; Corse |
| NEET | Eurostat edat_lfse_22 (régions) / edat_lfse_21 (pays × diplôme) | NUTS 0-1-2 / pays | 15-24, 15-29, 18-24 (régions) ; détail par âge (pays) | seulement au niveau pays | 2025 | Corse 15-24 ; Luxembourg par diplôme (u) |
| Emploi, chômage, inactivité par diplôme | OCDE DF_LSO_NEAC_EMP / UNEMP / INAC | Pays (FR, BE, LU, CH, CA) | 25-34, 35-44, 45-54, 55-64, 25-64 | CITE détaillée | 2025 | Luxembourg 2025 par diplôme ; pas de 15-24 |
| Revenus relatifs | OCDE DF_LSO_EARN_REL_UPPER | Pays | 25-34, 35-44, 45-54, 55-64, 25-64 | CITE détaillée | 2022 (FR) à 2024 (LU, CH) | tertiaire court pour BE, CH |
| Taux de chômage et d'emploi | Statistique Canada 14-10-0020-01 (annuel) et 14-10-0019-01 (mensuel) | Canada et 10 provinces | 15-24, 25-44, 25-54, 55-64, 55+, 15+ | 6 niveaux EPA | 2025 ; octobre 2026 | 0-8 années hors QC-ON ; universitaires 15-24 dans les petites provinces ; aucun territoire |
| Durée du chômage | Statistique Canada 14-10-0057-01 (annuel), 14-10-0342-01 (mensuel) | Canada et 10 provinces | 15-24, 25-54, 55-64, 55+, 15+ | non | 2025 ; octobre 2026 | 52 semaines et plus pour jeunes et seniors des petites provinces |
| Territoires canadiens | Statistique Canada 14-10-0292-01 ; 14-10-0393-01 | Yukon, T.N.-O., Nunavut | 15+, 25+ | non | octobre 2026 (moy. mobile 3 mois) ; 2024 (annuel) | tout croisement âge fin ou diplôme |
| Immigrants × scolarité | Statistique Canada 14-10-0087-01 | Canada seulement | 15+, 25-54 | 5 niveaux | 2025 | provinces |
| Activité × diplôme × âge, petites géographies | Recensement 2021, tableau 98-10-0400-01 | Divisions et subdivisions de recensement | 15-24, 25-34, …, 55-64, 25-54, 25-64 | 16 niveaux | mai 2021 | non extrait ; date ancienne |
| Chômage par âge × scolarité, Québec | ISQ (EPA), Portrait du chômage des jeunes | Québec | 15-19, 20-24, 25-29, 30-54 | 4 niveaux | 2025 | 55 ans et plus ; régions administratives |
| Chômage par diplôme, âge, ancienneté de sortie | Insee, enquête Emploi | France | 15-24, 25-49, 50+ ; ancienneté 1-4, 5-10, 11+ ans | 4 à 6 niveaux | 2025 (marges) ; 2023 (croisement) | régions |
| Insertion à 3 ans | Céreq, Génération 2021 | France | sortants 2021 | 10 niveaux | enquête 2024 | régions (non extraites) |
| Taux d'accès à l'emploi à 6 mois | France Travail S&I 26.011 | France ; régions (total seulement) | < 26, 26-49, 50+ | 4 niveaux de formation | entrants T2 2025 | croisement âge × formation ; profils par région |
| Chômage inscrit | SECO, rapport mensuel | Suisse, régions linguistiques, cantons (total) | 15-24, 25-49, 50-64 | secondaire I, II, tertiaire (Suisse entière) | octobre 2026 | âge × formation ; canton × âge ou formation (amstat.ch non extrait) |
| Demandeurs d'emploi inscrits | ADEM, de-dispo-profils.csv | Luxembourg | < 30, 30-44, 45+ | 3 niveaux | 31 octobre 2026 | effectifs seulement (pas de taux) |

### Inferences
- Pour une grille publique homogène, le seul indicateur disponible partout au croisement âge × diplôme est le taux de chômage d'enquête ; il peut être complété par un indicateur de durée disponible par âge (pays ou province) et par diplôme (régions européennes), mais pas par les deux à la fois au niveau régional.
- Les définitions de niveaux de diplôme ne coïncident pas entre l'Europe (CITE 0-2 / 3-4 / 5-8) et l'EPA canadienne (le « certificat ou diplôme postsecondaire » mélange métiers, cégep et collège, soit CITE 3 à 5) : un affichage commun en trois niveaux exige de classer ce groupe soit en « moyen », soit en « élevé » ; la grille CSV canadienne fournit les deux options (`postsec` séparé, `eleve_large` regroupé).
- Les tranches d'âge communes réalisables sont 15-24, 25-54 (calculée en Europe, publiée au Canada) et 55-64 ans.

### Gaps
- Aucune source ne fournit de données propres aux populations francophones minoritaires (Ontario, Manitoba, etc.) par âge × diplôme en dehors du Recensement de 2021, non extrait ici.
- Priorités non traitées faute de budget de recherche : Dares (seniors), Statbel/IWEPS/view.brussels en direct, OFS/amstat.ch (canton × âge × formation), déclinaisons régionales du Céreq, extraction du tableau de recensement 98-10-0400-01, flux de sortie du chômage par profil hors France.
- Les valeurs marquées « reconstitué à partir du PDF » (France Travail tableaux 1 à 3, ISQ tableau 2) devraient être relues sur le document original avant publication.

