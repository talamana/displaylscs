# displaylscs

Petit site statique (GitHub Pages) pour piloter un écran d'affichage :

- **`index.html`** – page de gestion : ajouter des images (par lien ou par fichier), puis **cliquer sur une image pour l'afficher** à l'écran. Bouton « Écran noir » pour ne rien afficher.
- **`diaporama.html`** – page à ouvrir sur l'écran : affiche en plein écran l'image choisie et change dans les secondes qui suivent un clic (pas de minuterie, pas de défilement automatique).

Les liens et l'image choisie sont enregistrés dans `config.json` ; les fichiers envoyés vont dans `images/`. Tout passe par l'API GitHub, il n'y a aucun serveur à gérer.

## Mise en route

1. **Activer GitHub Pages** : *Settings → Pages → Build and deployment* → Source « Deploy from a branch », branche `main`, dossier `/ (root)` → *Save*.
   Le site sera disponible sur `https://talamana.github.io/displaylscs/`.
2. **Créer un jeton d'accès** (une fois par appareil qui gère l'affichage) :
   [github.com/settings/personal-access-tokens/new](https://github.com/settings/personal-access-tokens/new)
   - *Repository access* : « Only select repositories » → `displaylscs`
   - *Permissions → Contents* : « Read and write »
3. Ouvrir `https://talamana.github.io/displaylscs/`, coller le jeton, puis ajouter des images.
4. Sur l'écran, ouvrir `https://talamana.github.io/displaylscs/diaporama.html` et cliquer une fois (ou touche **F**) pour passer en plein écran.

## Utilisation

| Page de gestion | |
|---|---|
| Coller un lien + « Ajouter » | Ajoute l'image à la liste (le lien doit pointer directement vers l'image) |
| Déposer / choisir un fichier | Envoie un fichier image dans le dépôt |
| Clic sur une image | L'affiche à l'écran (en 2 à 5 secondes) |
| Écran noir | N'affiche plus rien |
| Cadrage | Image entière ou remplir l'écran |
| ✕ | Retire l'image de la liste |

L'écran vérifie toutes les 3 secondes (réglable dans `config.js`) quelle image afficher, en lisant `config.json` via l'API GitHub. Si l'écran et la page de gestion sont ouverts dans le même navigateur, le changement est instantané.

## Notes

- Le jeton reste dans le navigateur (localStorage) ; le bouton « Se déconnecter » l'efface.
- Sans jeton, la page de gestion ne peut rien modifier : la page écran, elle, est publique comme le dépôt.
- Les grandes photos envoyées sont automatiquement réduites (2560 px max).
