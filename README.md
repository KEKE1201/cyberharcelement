# Capsule interactive : cyberharcèlement

Projet React + Vite pour la capsule pédagogique de 8 minutes destinée aux 13–15 ans.

## Origine du projet

Ce projet est adapté du dépôt original [YogaH99/cyberharcelement](https://github.com/YogaH99/cyberharcelement). La publication dans un fork conserve l’historique et les contributions de l’auteur d’origine. Les adaptations pédagogiques et d’accessibilité sont décrites ci-dessous.

## Publication sur GitHub Pages

Le workflow `.github/workflows/deploy.yml` construit et publie la branche `main` avec GitHub Actions. Dans les paramètres Pages du fork, sélectionner la source **GitHub Actions**. Chaque nouveau commit sur `main` déclenche une publication.

Pour un dépôt nommé `cyberharcelement`, le chemin Vite de publication est `/cyberharcelement/`. Le développement local conserve `/`. Pour vérifier la construction Pages en local :

```sh
GITHUB_PAGES=true npm run build
```

Si le dépôt est renommé, adapter également le `base` dans `vite.config.js`. Ne jamais envoyer les modifications vers le dépôt d’origine : utiliser le fork personnel comme destination.

## Démarrer le projet

Dans le terminal VS Code, ouvre ce dossier puis lance :

```powershell
npm install
npm run dev
```

Ouvre ensuite l’adresse locale affichée par Vite, généralement `http://localhost:5173/`.

## Fichiers principaux

- `src/App.jsx` : accueil, navigation et activités du parcours.
- `src/content/course.js` : contenu des six étapes, réponses et feedbacks.
- `src/components/` : progression, questions et illustrations SVG originales adaptées aux adolescents.
- `src/styles.css` : styles responsives et états de focus clavier.
- `src/main.jsx` : entrée React.
- `vite.config.js` : configuration Vite et React.
- `PLAN_DE_PROJET.md` : parcours pédagogique et étapes de réalisation.

Les activités restent autonomes : les réponses ne sont pas transmises à un enseignant.

## Conformité pédagogique et limites techniques

Le contenu a été relu à partir de `Cahier_des_charges_cyberharcelement_version_revisee.docx`, fourni à côté du dossier du projet. Les six étapes et leurs durées sont conservées (8 minutes estimées). Les réponses attendues sont A/B/D pour Nathan et Lucas, les trois catégories dans leur ordre pour le classement, puis A/B/C pour Inès.

La page de ressource apporte les connaissances avant les exercices. Les corrections expliquent les indices et leurs limites ; les trois activités peuvent être recommencées. Une réponse incorrecte n’empêche pas d’avancer après consultation de la correction.

À la dernière étape, « Imprimer ou enregistrer en PDF » ouvre la boîte d’impression du navigateur. La feuille de style d’impression affiche uniquement la fiche récapitulative, sans les réponses de l’apprenant. Choisir « Enregistrer au format PDF » pour la conserver.

Le cahier des charges prévoit **Lumi H5P – Course Presentation**, avec des activités H5P et une association ou un glisser-déposer. Cette réalisation conserve **React + Vite** : cases à cocher pour les deux choix multiples et listes déroulantes natives pour le classement (clavier et tactile). Elle ne produit pas de fichier `.h5p`, de paquet SCORM ou de suivi LMS. La conformité à l’outil demandé doit donc être validée avec l’enseignant ; aucune conversion n’a été effectuée.

## Confidentialité et accessibilité

Aucune donnée personnelle n’est demandée. Les choix restent dans la mémoire de la page et sont effacés à l’actualisation. Aucun stockage persistant, outil d’analyse d’audience ou service de collecte n’est ajouté. Les liens officiels ouvrent des sites externes ; leurs règles et les éventuels journaux de l’hébergeur sont indépendants de cette capsule.

Navigation au clavier, lien d’évitement, focus visible, consignes avant validation, corrections textuelles et réduction des animations sont prévus. Les conversations et illustrations sont fictives.

## Vérification

```sh
npm run build
```

À vérifier manuellement avant remise : parcours complet avec bonnes et mauvaises réponses et nouvelles tentatives ; navigation clavier et lecteur d’écran ; affichage à 320/375/768 pixels et zoom 200 % ; aperçu de la fiche en A4 et sauvegarde PDF ; durée réelle avec des adolescents. Une compilation réussie ne remplace pas ces essais.
