# Portfolio COP — prototype initial

Prototype statique de connexion Supabase et d'affichage des espaces A3, A4 et référente.

## Configuration

Modifier `src/config.js` avec l'URL du projet Supabase et sa clé **publique** `anon` / `publishable` (jamais la clé `service_role` ni une clé secrète). Pour les clés publishable modernes, utiliser une version compatible du client Supabase.

## Déploiement

Héberger les fichiers statiques sur un hébergement HTTPS autorisant l'utilisation pédagogique. Le dépôt GitHub peut rester privé. Configurer les URLs autorisées dans Supabase Authentication avant d'utiliser des liens d'authentification.

## État

Cette version est un **prototype** : authentification, affichage des profils et liste des étudiants pour la référente. La saisie des autoévaluations, les analyses, les mémoires, les questions flash et l'export PDF ne sont pas encore implémentés. Tester les règles RLS avec deux comptes de test avant toute donnée clinique réelle. Ne jamais saisir de données identifiantes de patients dans ce prototype.
