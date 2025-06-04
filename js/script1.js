 // Références aux éléments principaux
 const mainImage = document.getElementById('main-image');
 const productTitle = document.getElementById('produit-title');
 const productDescription = document.getElementById('produit-description');
 const productPrice = document.getElementById('produit-prix');

 // Ajouter un écouteur d'événements sur chaque miniature
 document.querySelectorAll('.thumbnail').forEach(thumb => {
     thumb.addEventListener('click', (e) => {
         // Changer l'image principale
         mainImage.src = e.target.src;

         // Mettre à jour les détails du produit
         
         productTitle.textContent = e.target.dataset.title || "";
            productDescription.textContent = e.target.dataset.description || "";
            //productPrice.textContent = `Prix : ${e.target.dataset.price || ""}`;
     });
 });

