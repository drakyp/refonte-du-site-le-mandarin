# Le Mandarin Saint-Germain - Refonte du Site Web

Ce projet est la refonte du site web du restaurant **Le Mandarin Saint-Germain**.
Il est développé avec **React (Vite)** et **Tailwind CSS** pour offrir une expérience moderne, fluide et responsive.

## 🚀 Comment lancer le projet en local

### 1. Prérequis
Assurez-vous d'avoir [Node.js](https://nodejs.org/) installé sur votre ordinateur.

### 2. Installation
Ouvrez votre terminal, placez-vous dans le dossier du projet, puis exécutez la commande suivante pour installer toutes les dépendances nécessaires :
```bash
npm install
```

### 3. Lancement du serveur de développement (Mode Dev)
Pour lancer le site sur votre ordinateur et voir les modifications en temps réel, tapez :
```bash
npm run dev
```
Ouvrez ensuite votre navigateur et allez à l'adresse : **http://localhost:5000** (ou l'adresse indiquée dans votre terminal).

### 4. Compiler pour la production (Mode Build)
Avant de déployer le site sur Vercel ou un autre hébergeur, vous pouvez générer la version de production optimisée avec :
```bash
npm run build
```
Les fichiers prêts à être mis en ligne seront générés dans le dossier `/dist`.

---

## 📸 Comment remplacer les photos de présentation (Placeholder)
Les images actuelles sont des images libres de droits issues de *Unsplash* pour servir d'exemples. 
Pour mettre vos **vraies photos**, suivez cette méthode :

1. Prenez vos vraies photos (format `.jpg` ou `.png` recommandé).
2. Nommez-les de la même manière que celles existantes (ex: `ambience-1.jpg`, `duck.jpg`, `food-1.jpg`...).
3. Placez-les dans le dossier `src/assets/`, en écrasant (remplaçant) les fichiers existants.
4. Les composants React iront automatiquement chercher vos nouvelles images !

Si vous ajoutez des images avec des noms différents, n'oubliez pas d'aller modifier les `import` au début des composants correspondants (ex: `Hero.jsx`, `Menu.jsx`).

## 🔗 Endpoints et Liens (Téléphone, Réservations)
Si vous devez mettre à jour le numéro de téléphone ou rajouter un lien vers une plateforme de réservation externe (ex: TheFork) :
- **Numéro de téléphone :** Cherchez le lien `href="tel:0143290714"` dans `Navbar.jsx`, `Hero.jsx` et `Contact.jsx`.
- **Lien de réservation (futur) :** Si vous souhaitez que le bouton "Réserver" pointe vers un site au lieu de lancer un appel, remplacez simplement `href="tel:0143290714"` par `href="https://www.le-lien-de-votre-partenaire.com"` dans ces mêmes fichiers.

---

## 📊 Analyse du Trafic & Tracking

Le site intègre **Google Tag Manager (GTM)** directement dans [`index.html`](index.html) (scripts dans `<head>` et `<body>`). 

Cela permet de brancher et gérer les outils de suivi d'audience (ex: Google Analytics 4, suivi des clics d'appels et réservations) directement depuis l'interface en ligne sans avoir à retoucher le code du projet.
