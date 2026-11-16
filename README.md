# displaylscs

Petit site statique (GitHub Pages) pour piloter un écran d'affichage :

- **`index.html`** – page de gestion : ajouter des images par **lien**, puis **cliquer sur une image pour l'afficher** à l'écran. Bouton « Écran noir » pour ne rien afficher.
- **`diaporama.html`** – page à ouvrir sur l'écran : affiche en plein écran l'image choisie et change **instantanément** au clic (pas de minuterie, pas de défilement automatique).

Le clic est transmis instantanément à l'écran via [ntfy.sh](https://ntfy.sh) (service gratuit de messages en temps réel, environ 250 messages par jour en offre gratuite). En parallèle, la liste et l'image choisie sont mémorisées dans `config.json` sur GitHub, pour qu'un écran rallumé reprenne la bonne image. Il n'y a aucun serveur à gérer.

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
| Clic sur une image | L'affiche à l'écran immédiatement |
| Écran noir | N'affiche plus rien |
| Cadrage | Image entière ou remplir l'écran |
| ✕ | Retire l'image de la liste |

L'écran précharge toutes les images de la liste pour que le changement soit immédiat. Il n'accepte que les images de la liste : un message envoyé par quelqu'un d'autre sur le canal ntfy avec une autre image est ignoré. Si ntfy est indisponible, l'écran se rabat sur GitHub (vérification toutes les 5 s, réglable dans `config.js`).

## Notes

- Le jeton reste dans le navigateur (localStorage) ; le bouton « Se déconnecter » l'efface.
- Sans jeton, la page de gestion ne peut rien modifier : la page écran, elle, est publique comme le dépôt.
