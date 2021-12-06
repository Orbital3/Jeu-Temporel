# Plan de Test
### Équipe Temporalis
- Raphaël Fillion
- Philippe Trudel

### Remise le lundi 13 décembre 2021

# Introduction

 Temporalis est une présentation intéractive multimédia qui, en tant que jeu télévisé, sert à faire réfléchir et comprendre aux intéracteurs, les importances du combat contre les changements climatiques.

 Notre Produit minimum viable est une présentation sur la plateforme Unity, où nous montrons avec quelques questions (5 environs), les intéractions possibles (Déclenchement d'un son, déclenchement d'une vidéo, intéraction arduino et unity, etc.)

Pour suivre notre développement et notre projet, suivre ce [lien](https://github.com/Orbital3/Temporalis)

### Calendrier
- Planification (Remis le 12 octobre 2021)
- Conception    (Remis le 12 octobre 2021)
- Prototypage (À terminer pour le 13 décembre 2021)
- Production (À faire du 20 janvier 2022 à la mi-mars 2022)
- Installation (Semaine précédant la présentation)

# Matrice de risques

| Risque ou technologie recherchée | Attentes | Résultats finaux|
|---|---|---|
| LEAP motion | Utilisation de LEAP motion afin de faire des mouvements libres et virtuels | LEAP motions est trop compliqué à utilisé pour nos connaissances dans le domaine |
| Arduino | Intéraction des boutons physique vers Unity pour sélectionner des questions | Fonctionne bien |
| Programmation Unity | Faire la programmation soit en C# ou en Bolt (Visual Scripting) | Fonctionne bien pour le moment, besoin de plus d'aide d'un professeur/tutoriel sur le web |
| Soudure électronique | Soudure des éléments électronique pour le podium de jeu | Aisance avec la soudure pour les deux coéquipiers |
| Multi-projection | Projections avec plusieurs ordinateurs/projecteur pour le jeu | Besoin de plus de test |


 Pour ce qui est des risques, le plus gros risque était le LEAP motion, et dès que les premières semaines de prototypage étaient entamé, nous avons tout de suite remarqué la lourdeur et la courbe d'apprentissage trop élevé pour nous. Nous avons donc décidé de revenir vers une intéraction physique et électronique avec des boutons d'arcades.

 Pour ce qui est des autres risques, pour le moment avec le prototypage, tout semble raisonnable et faisable. Tout de moins, il est certain que lorsque nous seront 100% dans la production, il y aura des enbûches et des risques que ce que nous voulons faire, ne soit pas exactement parfait et qu'il y ait des problèmes. Pour ces risques, nous avons toujours des plan B, avec des versions plus simples et plus rapide afin de tout compléter avant la présentation finale.

 # Tests à réaliser

| Scénario 1 | L'intéracteur arrive devant le podium |
|---|---|
| Identification | Cas de test 1.1  |
| Priorité | Premier test de prototypage |
| Date limite | Avant le 12 décembre |
| Description | Faire un test d'un lumino-résisteur qui démarre le projet unity lorsqu'une personne arrive près du podium |
| Contraintes | Apprentissage de la technologie du lumino-résisteur en concordance avec Unity |
| Dépendances | Faire un test d'un lumino-résisteur avec Arduino vers Unity|
| Procédure de test | Résultat attendus : Démarrage du jeu Unity|
| Résultat | Non-testé pour l'instant |

#
| Scénario 1 | L'intéracteur presse un bouton menant à la bonne réponse |
|---|---|
| Identification | Cas de test 1.2.1 |
| Priorité | Selon la matrice des risques |
| Date limite | Avant le 12 décembre |
| Description | Faire un test de Arduino sur Unity pour voir si nous pouvons sélectionner une question avec des boutons physiques |
| Contraintes | Comprendre comment envoyer Arduino vers Unity |
| Dépendances | Tout est appris dans le cours d'Espace Intéractif avec Thomas. Nous suivons les notes de cours |
| Procédure de test | Suivre les notes de cours de Thomas sur comment envoyer Arduino vers Unity. Résultat attendus : Faire activer une réponse avec un bouton. |
| Résultat | Raphaël a fait les test, et ils ont montré que c'était faisable et que lorsque nous appuyons sur le bouton, Unity faisait une action. |
#
| Scénario 1 | L'intéracteur presse un bouton menant à une mauvaise réponse |
|---|---|
| Identification | Cas de test 1.2.2  |
| Priorité | Selon la matrice des risques |
| Date limite | Avant le 12 décembre |
| Description | Faire un test de Arduino sur Unity pour voir si nous pouvons sélectionner une question avec des boutons physiques |
| Contraintes | Comprendre comment envoyer Arduino vers Unity |
| Dépendances | Tout est appris dans le cours d'Espace Intéractif avec Thomas. Nous suivons les notes de cours |
| Procédure de test | Suivre les notes de cours de Thomas sur comment envoyer Arduino vers Unity. Résultat attendus : Faire activer une réponse avec un bouton. |
| Résultat | Raphaël a fait les test, et ils ont montré que c'était faisable et que lorsque nous appuyons sur le bouton, Unity faisait une action. |
#
| Scénario 2 | Animation du personnage et activation d'un son selon la réponse |
|---|---|
| Identification | Cas de test 1.3 |
| Priorité | Selon la matrice des risques |
| Date limite | Avant le 12 décembre |
| Description | Faire un test de Visual Scripting sur Unity selon les questions choisi |
| Contraintes | Trouver de l'aide avec Bolt|
| Dépendances | Nous devons faire des test en Visual Scripting, lorsque nous activons une réponse, cela joue un son et une animation |
| Procédure de test | Résultat attendus : Que ça fonctionne |
| Résultat | Philippe doit faire les test de Visual Scripting, mais nous sommes positif par rapport à ces test-ci. |