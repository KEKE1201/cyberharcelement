# Reconnaître une situation de cyberharcèlement

Capsule pédagogique interactive en français, destinée aux 13–15 ans. Durée estimée : 8 minutes.

## Parcours à réaliser

1. **Introduction — 30 s** : objectif, compétences visées, durée et bouton « Commencer ».
2. **Ressource officielle — 1 min 30** : présenter le lien vers l’infographie du ministère et inviter à repérer les indices.
3. **Repérer les indices — 1 min** : conversation fictive Nathan/Lucas, choix multiples et feedback expliquant qu’un échange seul ne suffit pas à conclure.
4. **Identifier et classer — 2 min 30** : classer trois situations comme conflit ponctuel, plaisanterie consentie ou situation de cyberharcèlement possible, avec correction expliquée.
5. **Évaluation — 1 min 30** : situation inédite d’Inès, sélection des trois indices attendus et feedback.
6. **Synthèse — 1 min** : récapitulatif et conseil de demander l’aide d’un adulte de confiance.

## Structure React + Vite

```text
cyberharcelement/
├── public/
├── src/
│   ├── components/
│   │   ├── MultiSelectQuestion.jsx
│   │   ├── ProgressBar.jsx
│   │   └── SceneIllustration.jsx # illustrations SVG originales par situation
│   ├── content/
│   │   └── course.js     # six étapes, situations, réponses et feedbacks
│   ├── App.jsx           # accueil, navigation et interactions
│   ├── main.jsx          # point d’entrée React
│   └── styles.css        # mise en page responsive et focus clavier
├── index.html
├── package.json         # scripts Vite et dépendances React
├── package-lock.json    # créé lors de l’installation npm
└── README.md
```

## État actuel

- Squelette React + Vite créé, dépendances installées sans vulnérabilité signalée.
- Vérification navigateur effectuée : `http://localhost:5173/` répond et affiche l’écran d’accueil.
- Parcours de six étapes intégré ; navigation, progression, réponses, corrections et écran de fin vérifiés dans le navigateur.
- Illustrations SVG originales ajoutées à l’accueil, aux activités et à la synthèse ; les personnages et les couleurs ont un style illustré moderne, les textes ont été raccourcis.
- L’évaluation d’Inès présente maintenant trois cartes visuelles pour repérer la répétition, le partage et la demande d’arrêt.
- Sur petit écran, l’illustration de couverture apparaît dès le premier écran ; les cartes de classement utilisent aussi des visuels plus grands.
- Node.js 26.13.0 et npm 11.20.0.

## Ordre de réalisation

1. **Terminé** : créer le squelette React + Vite et vérifier la page d’accueil sur le serveur local.
2. **Terminé** : extraire les six étapes et bâtir la navigation avec une progression visible.
3. **Terminé** : créer les composants de progression et de choix multiples ; utiliser des champs natifs pour le classement.
4. **Terminé** : ajouter les activités, corrections et feedbacks du cahier des charges, sans transformer les indices en diagnostic.
5. **En cours** : vérifier le contraste, le clavier et plusieurs tailles d’écran ; ne pas faire dépendre une réponse de la couleur seule.
6. **Vérifié dans le navigateur** : parcourir les six étapes, sélectionner les réponses, afficher les feedbacks et terminer la capsule. La capsule reste autonome et ne transmet pas les réponses à un enseignant sans LMS ou service supplémentaire.

## Repères pédagogiques

- Objectifs : repérer des indices, distinguer les trois types de situations et analyser un nouvel exemple en justifiant son choix.
- Indices à mettre en avant : répétition, humiliation, diffusion de contenus, contexte et vécu de la personne concernée.
- Présenter une situation comme « possible » et encourager à demander de l’aide ; la capsule n’établit pas de diagnostic juridique.
- Toutes les conversations et situations sont fictives. Citer la ressource institutionnelle et conserver son lien d’origine.
