# Capsule interactive : cyberharcèlement

Projet React + Vite pour la capsule pédagogique de 8 minutes destinée aux 13–15 ans.

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
