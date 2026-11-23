# Post LinkedIn — brouillon du 23 novembre 2026

Lien à partager : https://erwanbargain.com/job-search/fr/ (version anglaise : https://erwanbargain.com/job-search/)

Image d'aperçu : `public/og-fr.png` et `public/og-en.png` (1200 × 630), reprises automatiquement par LinkedIn une fois en ligne.

## Version française

Où aller quand on parle français et qu'on cherche un emploi ?

J'ai comparé 31 territoires : les régions françaises, la Wallonie et Bruxelles, le Luxembourg, la Suisse romande, le Québec, et les provinces et territoires canadiens qui ont des programmes fédéraux pour accueillir des francophones.

Le résultat est un site. Vous indiquez votre âge, votre diplôme et ce qui compte le plus pour vous : garder le plus d'argent après le loyer, trouver facilement un emploi, ou le meilleur compromis. Il vous donne un classement.

Trois choses que j'ai apprises en le construisant :

1. Le profil compte plus que le territoire. En France, un jeune sans diplôme a un taux de chômage huit fois supérieur à celui d'un diplômé du supérieur de 55-64 ans. Entre régions, le taux d'ensemble ne varie que de 5,6 % à 8,8 %.

2. Le loyer redessine les écarts. À Paris, au salaire médian, il reste environ 800 € par mois après impôt et loyer pour une personne seule ; à Rennes, environ 1 360 €. Pour le profil moyen, l'Île-de-France arrive dernière du compromis argent-emploi.

3. La durée des recherches varie bien plus que le taux de chômage. Environ 9 % des chômeurs cherchent depuis un an ou plus au Québec, contre 46 % à Bruxelles.

Ce que le classement ne dit pas : le droit de travailler dans le pays, la langue réelle au travail et votre métier passent avant tout. Hors Québec, le français n'est la langue principale au travail que dans le nord du Nouveau-Brunswick. Et changer de métier ou élargir son rayon de recherche rapporte souvent plus que changer de région.

Chaque chiffre est sourcé (270 sources, en majorité des statistiques officielles), la méthode est publique et les limites sont écrites à côté des résultats. Les chiffres estimés sont signalés comme tels.

Si vous voyez une erreur ou un chiffre discutable, dites-le-moi : c'est fait pour être corrigé.

https://erwanbargain.com/job-search/fr/

#emploi #mobilité #Canada #données

## Ligne facultative (à ajouter au point 2 si vous voulez un résultat plus marquant)

« En tête du même classement : le Yukon et les Territoires du Nord-Ouest, devant la Saskatchewan — avec des réserves que j'explique sur la page. »

Réserves : pour ces deux territoires, le salaire retenu est celui des personnes à temps plein toute l'année, le chômage par diplôme est estimé et la durée des recherches n'est pas publiée. À ne citer qu'avec la mention des réserves.

## English version

Where should you go if you speak French and are looking for work?

I compared 31 territories: the French regions, Wallonia and Brussels, Luxembourg, French-speaking Switzerland, Québec, and the Canadian provinces and territories with federal programmes to welcome French speakers.

The result is a website. You enter your age, your level of education and what matters most to you: keeping the most money after rent, finding a job easily, or the best all-round. It gives you a ranking.

Three things I learned while building it:

1. Your profile matters more than the territory. In France, a young person with no diploma has an unemployment rate eight times that of a 55-64-year-old graduate. Between regions, the overall rate only ranges from 5.6% to 8.8%.

2. Rent redraws the map. In Paris, at the median wage, a single person keeps about €800 a month after tax and rent; in Rennes, about €1,360. For the average profile, Île-de-France comes last in the money-and-job ranking.

3. How long searches last varies far more than the unemployment rate. About 9% of the unemployed have been searching for a year or more in Québec, against 46% in Brussels.

What the ranking does not tell you: the right to work in the country, the language actually used at work and your occupation come first. Outside Québec, French is the main language at work only in northern New Brunswick. And changing occupation or widening your search area often pays more than changing region.

Every figure is sourced (270 sources, mostly official statistics), the method is public and the limits are written next to the results. Estimated figures are marked as such.

If you spot a mistake or a questionable figure, tell me: it is made to be corrected.

https://erwanbargain.com/job-search/

## D'où viennent les chiffres du post

- 31 territoires, 270 sources : données du site (`src/data/generated.json`, `src/data/references.json`).
- Huit fois, 5,6 % à 8,8 %, 9 % et 46 %, nord du Nouveau-Brunswick, métier et rayon de recherche : constats de l'étude (`src/data/findings.ts`).
- 800 € (802) à Paris et 1 360 € (1 358) à Rennes : `src/data/gains.json`, personne seule au salaire médian, loyer d'annonce. Pour Rennes, le salaire est la médiane nationale faute de médiane régionale publiée : c'est une borne haute.
- Île-de-France dernière : classement « meilleur compromis » de la page d'accueil, profil « tous âges, tous diplômes ».
