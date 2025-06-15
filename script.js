document.addEventListener("DOMContentLoaded", () => {
  // Navigation mobile
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
  
  // Fermer le menu lorsqu'un lien est cliqué
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
  
  // Formulaire de contact
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");
  
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      
      // Animation de soumission
      formMessage.textContent = "Merci pour votre message ! Je vous répondrai bientôt.";
      formMessage.style.color = "#28a745";
      
      // Réinitialiser le formulaire après 3 secondes
      setTimeout(() => {
        form.reset();
      }, 3000);
    });
  }
  
  // Animation au scroll
  const animateOnScroll = () => {
    const cards = document.querySelectorAll('.card');
    const windowHeight = window.innerHeight;
    
    cards.forEach(card => {
      const cardPosition = card.getBoundingClientRect().top;
      const scrollPosition = windowHeight / 1.3;
      
      if (cardPosition < scrollPosition) {
        card.classList.add('show');
      }
    });
  };
  
  // Initialiser les animations
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Pour les éléments déjà visibles au chargement
});

// Ajoutez dans la fonction animateOnScroll (vers la fin)
const veilleItems = document.querySelectorAll('.tool-item');
veilleItems.forEach(item => {
  const itemPosition = item.getBoundingClientRect().top;
  if (itemPosition < windowHeight / 1.3) {
    item.classList.add('show');
  }
});