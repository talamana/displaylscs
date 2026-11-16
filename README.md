# displaylscs

Petit site statique (GitHub Pages) pour gérer un écran d'affichage :

- **`index.html`** – page de gestion : ajouter des images par lien (ou en envoyant des fichiers), choisir lesquelles sont affichées, l'ordre, la durée par image, puis **Publier**.
- **`diaporama.html`** – page à ouvrir sur l'écran : affiche uniquement les images sélectionnées en diaporama plein écran, et se met à jour toute seule (vérification toutes les 30 s).

Les liens et la sélection sont enregistrés dans `config.json` ; les fichiers envoyés vont dans le dossier `images/`. Tout passe par l'API GitHub, il n'y a aucun serveur à gérer.

## Mise en route

1. **Activer GitHub Pages** : *Settings → Pages → Build and deployment* → Source « Deploy from a branch », branche `main`, dossier `/ (root)` → *Save*.
   Le site sera disponible sur `https://talamana.github.io/displaylscs/`.
2. **Créer un jeton d'accès** (une fois par appareil qui gère les images) :
   [github.com/settings/personal-access-tokens/new](https://github.com/settings/personal-access-tokens/new)
   - *Repository access* : « Only select repositories » → `displaylscs`
   - *Permissions → Contents* : « Read and write »
3. Ouvrir `https://talamana.github.io/displaylscs/`, coller le jeton, puis ajouter des images.
4. Sur l'écran, ouvrir `https://talamana.github.io/displaylscs/diaporama.html` et cliquer une fois (ou touche **F**) pour passer en plein écran.

## Utilisation

| Page de gestion | |
|---|---|
| Coller un lien + « Ajouter le lien » | Ajoute l'image (le lien doit pointer directement vers l'image) |
| Glisser-déposer / cliquer sur la zone | Envoie des fichiers images dans le dépôt |
| Clic sur une vignette ou interrupteur | Affiche / masque l'image |
| ↑ ↓ | Change l'ordre de passage |
| ✕ | Supprime l'image du dépôt |
| Durée, cadrage, ordre aléatoire | Réglages du diaporama |
| **Publier** | Enregistre la sélection (visible sur l'écran en ~1 min, le temps que GitHub Pages se mette à jour) |

| Diaporama | |
|---|---|
| Clic / **F** | Plein écran |
| ← → | Image précédente / suivante |
| Espace | Pause / lecture |

Les grandes photos sont automatiquement réduites (2560 px max) avant l'envoi pour garder le dépôt léger.

## Notes

- Le jeton reste dans le navigateur (localStorage) ; le bouton « Se déconnecter » l'efface.
- Sans jeton, la page de gestion ne peut rien modifier : le diaporama, lui, est public comme le dépôt.
- Le nom du dépôt, de la branche et l'intervalle de rafraîchissement se règlent dans `config.js`.
