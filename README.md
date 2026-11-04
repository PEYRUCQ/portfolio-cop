# Portfolio COP — V13 + Supabase (version de test)

Cette version reprend l’interface du prototype V13 et branche l’authentification et les sauvegardes sur Supabase.

## Installation
1. Conserver une copie du dépôt GitHub existant.
2. Décompresser cette archive et déposer `index.html`, `logo-cop.png`, `src/config.js` à la racine du dépôt.
3. Ne pas remplacer le site public avant d’avoir testé les comptes.
4. Tester avec un compte étudiant fictif A3 et A4 et le compte référente.

## Important — SQL
La table `portfolios` doit autoriser INSERT pour l’utilisateur propriétaire, en plus de SELECT et UPDATE. Si le test étudiant échoue à la première sauvegarde, exécuter le SQL de `supabase/ajout_insert_portfolios.sql` après vérification.

## Limites
- Le journal privé est stocké séparément dans `private_notes` et ne peut pas être consulté par la référente.
- Les questions flash V13 sont fournies dans le prototype ; la publication depuis Supabase n’est pas encore synchronisée dans cette version.
- Les autoévaluations V13 sont sauvegardées dans `portfolios.content` ; la table historique `self_assessments` n’est pas alimentée séparément.
- Le bouton PDF ouvre une page imprimable : utiliser « Imprimer → Enregistrer en PDF ».
- Aucune remise à zéro automatique ni notification n’est activée.
- Les comptes Supabase existants doivent être autorisés dans `profiles`.
- Test technique de bout en bout avec Supabase réel non réalisé dans cet environnement.
