const projects = [
  {
    title: "Générateur de factures XML → PDF",
    shortDesc: "Automatisation de la génération et l’envoi de factures PDF via PHP.",
    moreInfo: "Ce projet utilise mPDF pour générer des PDF à partir de données XML, et PHPMailer pour envoyer les factures par email automatiquement. Idéal pour la gestion commerciale.",
  },
  {
    title: "Site de décoration maison",
    shortDesc: "Site web responsive avec catalogue de produits déco.",
    moreInfo: "Un site fictif pour présenter des idées de décoration intérieure. Technologies utilisées : HTML, CSS, JavaScript, avec une attention portée sur le design responsive.",
  },
  {
    title: "Portfolio dynamique",
    shortDesc: "Ce portfolio que vous voyez, construit avec HTML, CSS et JavaScript.",
    moreInfo: "Utilisation de JavaScript pour afficher dynamiquement les projets, permettre l’interaction et améliorer l’expérience utilisateur.",
  }
];

const projectsList = document.getElementById("projects-list");

projects.forEach((project, index) => {
  const card = document.createElement("div");
  card.classList.add("project-card");
  
  card.innerHTML = `
    <div class="project-title">${project.title}</div>
    <div class="project-desc">${project.shortDesc}</div>
    <button aria-expanded="false">Voir plus</button>
    <div class="project-more">${project.moreInfo}</div>
  `;

  const button = card.querySelector("button");
  button.addEventListener("click", () => {
    card.classList.toggle("show-more");
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", !expanded);
    button.textContent = expanded ? "Voir plus" : "Voir moins";
  });

  projectsList.appendChild(card);
});
