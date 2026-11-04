# Portfolio clinique COP · A3/A4

Site statique GitHub Pages, connecté à Supabase. La clé `sb_publishable` du fichier `src/config.js` est une clé publique ; **ne jamais y placer une clé `service_role`**.

## Déploiement
Remplacer les fichiers du dépôt GitHub par le contenu de ce dossier, conserver `main` / `(root)` dans Settings → Pages, attendre le déploiement puis actualiser le site.

## Base de données
Tables utilisées : `profiles` (`user_id`, `display_name`, `role`, `promotion`), `portfolio_entries`, `self_assessments`, `flash_questions`. Les politiques RLS doivent être actives et testées avec deux comptes étudiants distincts et un compte référente.

## À valider avant usage réel
- Les sous-critères C1 à C4 sont **provisoires**, à remplacer/valider selon les matrices officielles COP.
- Vérifier les politiques RLS de toutes les tables, y compris les anciennes `portfolios`, `private_notes`, `allowed_members`.
- Tester le compte référente, les comptes A3/A4, les sauvegardes, les autorisations et les erreurs.
- Aucun nom ou donnée identifiable de patient ne doit être saisi.
- L'export PDF, les notifications, l'historique graphique multi-dates et la remise à zéro annuelle ne sont pas encore implémentés.


Version 3 : logo officiel fourni par la référente et mode observateur A3/A4 en lecture seule, avec données fictives. Aucun accès aux données des étudiants dans le mode observateur.
