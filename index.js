const register = document.getElementById('register');
const formulaire = document.getElementById('formulaire');
const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');
const boutonx = document.getElementById('boutonx');
const r = document.getElementById('r');

register.addEventListener('click', () =>
{
    register.style.display='block';
    register.style.position='relative';
    formulaire.style.display='block';
    formulaire.style.position='absolute';
    formulaire.style.opacity='80%';
    
})
boutonx.addEventListener('click' , () => 
{
    /*const nom = nom.value;
    const prenom = prenom.value;*/
    formulaire.style.visibility='hidden';

    alert("bonjour " +nom.value+" "+prenom.value);
    
})