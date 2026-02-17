// PANIER
let count = 0;
const panier = document.querySelector('#compteur-panier');
const btns = document.querySelectorAll('.btn-panier');
btns.forEach(btn => {
  btn.addEventListener('click', () => {
    count++;
    panier.textContent = `Panier (${count})`;
    alert("Excellent choix ! Ce produit a été ajouté.");
  });
});

// BOUTON RETOUR
const btnTop = document.querySelector('#btn-top');
window.addEventListener('scroll', () => {
  btnTop.style.display = (window.scrollY > 200) ? 'block' : 'none';
});
btnTop.addEventListener('click', () => { window.scrollTo({ top:0, behavior:'smooth' }); });

// FORMULAIRE CONTACT
const form = document.querySelector('#contact-form');
if(form){
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert("Merci ! Mme Aïcha a bien reçu votre message");
    form.reset();
  });
}

