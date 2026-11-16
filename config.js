// Paramètres du dépôt utilisé pour stocker les images.
// Modifiez ces valeurs si vous renommez le dépôt ou la branche.
window.DISPLAY_CONFIG = {
  owner: 'talamana',
  repo: 'displaylscs',
  branch: 'main',
  configPath: 'config.json',
  // Canal temps réel (ntfy.sh, gratuit) : le clic sur une image est transmis
  // instantanément à l'écran. L'écran n'accepte que les images de la liste.
  ntfyServer: 'https://ntfy.sh',
  ntfyTopic: 'displaylscs-ac09cfab4d9ec8b8cee8',
  // Vérification de secours via GitHub (secondes), au cas où le canal temps réel serait coupé.
  pollSeconds: 5
};
