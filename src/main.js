import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { SUPABASE_URL, SUPABASE_ANON_KEY } from './config.js';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
const $ = id => document.getElementById(id);
async function render() {
  const { data: { user } } = await supabase.auth.getUser();
  $('login').hidden = !!user; $('dashboard').hidden = !user;
  if (!user) { $('heading').textContent = 'Connexion'; return; }
  const {data: profile,error} = await supabase.from('profiles').select('display_name,role,promotion').eq('user_id',user.id).single();
  if(error || !profile){$('welcome').textContent='Profil indisponible. Contactez la référente.';return;}
  $('heading').textContent = profile.role === 'referent' ? 'Espace référente' : `Mon portfolio ${profile.promotion}`;
  $('welcome').textContent = `Bienvenue ${profile.display_name}`;
  const content=$('content'); content.replaceChildren();
  if(profile.role === 'referent') {
    const {data,error:err}=await supabase.from('profiles').select('display_name,promotion').eq('role','student').order('display_name');
    if(err){content.textContent='Impossible de charger les étudiants.';return;}
    const title=document.createElement('h3');title.textContent='Étudiants inscrits';content.append(title);
    for(const p of data){const div=document.createElement('div');div.className='item';div.textContent=`${p.display_name} — ${p.promotion}`;content.append(div);}
  } else {
    for(const name of ['Autoévaluation des compétences','Analyses de pratique et cas cliniques','Mon prochain objectif concret',...(profile.promotion==='A4'?['Suivi du mémoire']:[])]){const div=document.createElement('div');div.className='item';div.textContent=name+' — rubrique en préparation';content.append(div);}
  }
}
$('signin').onclick=async()=>{ $('message').textContent='Connexion en cours…';const {error}=await supabase.auth.signInWithPassword({email:$('email').value.trim(),password:$('password').value});$('message').textContent=error?'Connexion impossible : vérifiez vos identifiants.':'';if(!error)await render();};
$('signout').onclick=async()=>{await supabase.auth.signOut();await render();};
render();
