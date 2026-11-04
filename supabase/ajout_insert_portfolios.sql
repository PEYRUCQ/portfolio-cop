-- À exécuter UNIQUEMENT si les étudiants ne peuvent pas créer leur premier portfolio.
-- Ne supprime aucune donnée existante.
ALTER TABLE public.portfolios ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS portfolio_insert_own ON public.portfolios;
CREATE POLICY portfolio_insert_own ON public.portfolios FOR INSERT TO authenticated
WITH CHECK (user_id = (SELECT auth.uid()));
