let compteur = 0;

const panierCount = document.getElementById("panier-count");
const boutonsPanier = document.querySelectorAll(".btn-panier");

boutonsPanier.forEach((btn) => {
  btn.addEventListener("click", () => {
    compteur++;
    panierCount.textContent = compteur;
    alert("Excellent choix ! Ce produit a été ajouté.");
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const form= document.getElementById("formcontact");
  if (form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault() ;

  alert("Merci! Mme Aicha a bien reçu votre message.");
    });
  }   
});  
