//document.addEventListener('DOMContentLoaded', () => {
    //const Hamburger = document.querySelector('.hamburger');
    //const navLinksContainer = document.querySelector('.navlinks-container');

    //if (Hamburger && navLinksContainer) {
        //hamburgerButton.addEventListener('click', () => {
            // Toggle classes
           // navLinksContainer.classList.toggle('active');
            //hamburgerButton.classList.toggle('open');

            // Update aria-expanded
            //const expanded = hamburgerButton.getAttribute('aria-expanded') === 'true' || false;
            //hamburgerButton.setAttribute('aria-expanded', !expanded);
      //  });
   // }
//});

const Hamburger = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector(".navlinks-container");

Hamburger.addEventListener('click', () => {
    Hamburger.classList.toggle('open'); // Change l'apparence de l'icône hamburger
    navLinksContainer.classList.toggle('active'); // Ouvre ou ferme le menu
  
});

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;

      const offsetTop = target.offsetTop;

      window.scrollTo({
        top: offsetTop - 20, // un petit décalage si tu as un header fixe
        behavior: "smooth"
      });

      // Optionnel : effet "rebond" simulé
      setTimeout(() => {
        window.scrollBy({ top: -10, behavior: "smooth" });
        setTimeout(() => {
          window.scrollBy({ top: 10, behavior: "smooth" });
        }, 100);
      }, 700); // attend que le scroll principal finisse
    });
  });
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });
  
