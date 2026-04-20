# Mes Droits au Travail — Guide de déploiement

## Structure du projet

```
droits-travail/
├── public/
│   └── index.html      ← Le site (frontend)
├── api/
│   └── chat.js         ← Le serveur (backend, cache ta clé API)
├── vercel.json         ← Config Vercel
└── README.md
```

---

## Déploiement sur Vercel (gratuit)

### Étape 1 — Crée un compte GitHub
Va sur https://github.com et crée un compte gratuit.

### Étape 2 — Crée un nouveau dépôt GitHub
1. Clique sur le "+" en haut à droite → "New repository"
2. Nom : `droits-travail`
3. Laisse tout par défaut → "Create repository"
4. Upload les fichiers : clique "uploading an existing file"
5. Glisse-dépose **tout le contenu** du dossier `droits-travail/` (pas le dossier lui-même)
6. Clique "Commit changes"

### Étape 3 — Crée un compte Vercel
Va sur https://vercel.com → "Sign up" → connecte avec ton compte GitHub.

### Étape 4 — Importe le projet
1. Dans Vercel, clique "Add New Project"
2. Sélectionne ton dépôt `droits-travail`
3. Clique "Import"
4. Ne touche rien dans les settings → clique "Deploy"

### Étape 5 — Ajoute ta clé API (IMPORTANT)
1. Dans ton projet Vercel, va dans **Settings → Environment Variables**
2. Ajoute :
   - **Name** : `ANTHROPIC_API_KEY`
   - **Value** : ta clé API Anthropic (sk-ant-...)
3. Clique "Save"
4. Va dans **Deployments** → clique les "..." sur le dernier déploiement → "Redeploy"

### Étape 6 — Ton site est en ligne !
Vercel te donne une URL du type : `https://droits-travail-xxx.vercel.app`

---

## Obtenir une clé API Anthropic
1. Va sur https://console.anthropic.com
2. Crée un compte (gratuit)
3. Va dans "API Keys" → "Create Key"
4. Copie la clé (commence par `sk-ant-`)

💡 Le coût : environ 0,01€ par question posée sur le site.

---

## Nom de domaine personnalisé (optionnel)
1. Achète un domaine sur https://www.ovhcloud.com (ex: `mesdroitsautravail.fr`, ~10€/an)
2. Dans Vercel → Settings → Domains → ajoute ton domaine
3. Suis les instructions pour configurer les DNS chez OVH
