const PROJECTS = [
  {
    id: "cms",
    slug: "project-cms.html",
    title: "Demon Slayer Fan CMS",
    type: "school",
    category: "Individueel project",
    featured: true,
    period: "Leerjaar 2 · Module 5.2 · 2025–2026",
    shortDescription:
      "Zelfstandig gebouwd content management systeem met CRUD-functionaliteit, database-koppeling en beheeromgeving.",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/Abud-Alr/Hobby-Website.git",
    live: "https://u240910.gluwebsite.nl/demon_slayer_cms/",
    team: "Solo",
    role: "Full-stack developer — database-ontwerp, backend-logica, adminpanel en frontend.",
    highlights: [
      "Volledige CRUD voor karakters en content",
      "Responsive design met image upload",
      "Beveiligde admin-login en sessiebeheer",
      "Database-structuur zelf ontworpen en geïmplementeerd",
    ],
    images: [
      "assets/images/CMS/Screenshot 2026-07-06 004436.png",
      "assets/images/CMS/Screenshot 2026-07-06 004458.png",
      "assets/images/CMS/Screenshot 2026-07-06 004528.png",
      "assets/images/CMS/Screenshot 2026-07-06 004600.png",
    ],
    codeSnippet: `// Voorbeeld: karakter ophalen uit database
async function loadCharacters() {
  const response = await fetch('api/characters.php');
  const data = await response.json();
  renderGallery(data);
}`,
    collaboration:
      "Individueel project — zelfstandig van ontwerp tot oplevering, met feedback van docenten verwerkt in latere iteraties.",
  },
  {
    id: "utrechts-archief",
    slug: "project-utrechts-archief.html",
    title: "Het Utrechts Archief",
    type: "school",
    category: "Teamproject",
    featured: true,
    period: "Leerjaar 2 · Module 6.1 · 2025–2026",
    shortDescription:
      "Interactieve webapplicatie waarmee historische panoramafoto's van Utrecht doorzoekbaar en presenteerbaar worden gemaakt.",
    technologies: ["JavaScript", "HTML", "CSS", "API", "Teamwork"],
    github: "https://github.com/Samboterham/samalek.git",
    live: null,
    team: "Team",
    role: "Frontend developer — UI, paginaviewer, navigatie en data-presentatie binnen het team.",
    highlights: [
      "Panorama-viewer met 33 interactieve panelen",
      "Intuïtieve paginaselectie en thumbnail-navigatie",
      "Samenwerking met duidelijke taakverdeling",
      "Historische content toegankelijk gemaakt voor gebruikers",
    ],
    images: [
      "assets/images/Het-Utrechts-Archief/Screenshot 2026-06-30 134047.png",
      "assets/images/Het-Utrechts-Archief/Screenshot 2026-06-30 134115.png",
      "assets/images/Het-Utrechts-Archief/Screenshot 2026-06-30 134134.png",
      "assets/images/Het-Utrechts-Archief/Screenshot 2026-06-30 134200.png",
      "assets/images/Het-Utrechts-Archief/Screenshot 2026-06-30 134450.png",
    ],
    codeSnippet: `// Panorama-pagina laden op basis van selectie
function loadPanoramaPage(pageNumber) {
  const panel = document.querySelector('.panorama-panel');
  panel.src = \`assets/panorama/page-\${pageNumber}.jpg\`;
  updateThumbnailActive(pageNumber);
}`,
    collaboration:
      "Teamproject met merkbaar betere samenwerking dan eerdere projecten. Taken verdeeld op frontend, backend en data-verwerking.",
  },
  {
    id: "love-u-festival",
    slug: "project-love-u-festival.html",
    title: "Love U Festival",
    type: "school",
    category: "Individueel project",
    featured: false,
    period: "Leerjaar 2 · Module 8.1 · 2025–2026",
    shortDescription:
      "Volledige festivalwebsite met programma, nieuws, kaart en mobiel-first design voor een fictief evenement in Utrecht.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    github: "https://github.com/Abud-Alr/U-Festival.git",
    live: "https://u-festival.onrender.com/",
    team: "Solo",
    role: "Full-stack frontend developer — complete UI, navigatie, contentstructuur en responsive layout.",
    highlights: [
      "Mobiel-first interface met dark mode",
      "Meertalige ondersteuning (NL/EN)",
      "Nieuws- en meldingensectie met visuele hiërarchie",
      "Bottom navigation voor optimale mobiele UX",
    ],
    images: [
      "assets/images/Love-U-Festival/Screenshot 2026-07-06 005427.png",
      "assets/images/Love-U-Festival/Screenshot 2026-07-06 005442.png",
      "assets/images/Love-U-Festival/Screenshot 2026-07-06 005504.png",
      "assets/images/Love-U-Festival/Screenshot 2026-07-06 005608.png",
      "assets/images/Love-U-Festival/Screenshot 2026-07-06 005648.png",
    ],
    codeSnippet: `// Taal wisselen zonder pagina reload
function switchLanguage(lang) {
  document.querySelectorAll('[data-lang]').forEach(el => {
    el.hidden = el.dataset.lang !== lang;
  });
}`,
    collaboration: "Individueel project — feedback van medestudenten en docent verwerkt in latere versies.",
  },
  {
    id: "kiosk",
    slug: "project-kiosk.html",
    title: "Happy Herbivore Kiosk",
    type: "school",
    category: "Teamproject",
    featured: false,
    period: "Leerjaar 2 · Module 7.1 · 2025–2026",
    shortDescription:
      "Interactieve kiosk-applicatie voor een plant-based food concept met meertalige interface en touch-first design.",
    technologies: ["HTML", "CSS", "JavaScript", "UI/UX"],
    github: "https://github.com/Samboterham/HamHalek.git",
    live: null,
    team: "Team (2 personen)",
    role: "Frontend developer — visuele interface, animaties en kiosk-interactie samen met teamgenoot.",
    highlights: [
      "Touch-to-start kiosk flow",
      "Meertalige interface (EN/NL/CN)",
      "Visueel verzorgd merkidentiteit design",
      "Responsive kiosk-layout",
    ],
    images: [
      "assets/images/Kiosk/kiosk1.png",
      "assets/images/Kiosk/Schermafbeelding_2026-06-24_133719.png",
      "assets/images/Kiosk/Schermafbeelding_2026-06-24_133904.png",
      "assets/images/Kiosk/Schermafbeelding_2026-06-24_134655.png",
      "assets/images/Kiosk/Schermafbeelding_2026-06-24_134703.png",
    ],
    codeSnippet: `// Kiosk startscherm — taal selectie
document.querySelector('.touch-start').addEventListener('click', () => {
  document.body.classList.add('kiosk-active');
  showMenu(selectedLanguage);
});`,
    collaboration:
      "Samen met één teamgenoot gebouwd. Communicatie over onderdelen kon explicieter, maar eindresultaat visueel sterk.",
  },
  {
    id: "annex-bios",
    slug: "project-annex-bios.html",
    title: "Annex Bios",
    type: "school",
    category: "Teamproject · Scrum",
    featured: false,
    period: "Leerjaar 2 · Module 5.1 · 2025–2026",
    shortDescription:
      "Bioscoopwebsite met filmoverzicht en voorstellingen, gebouwd in Scrum met backend/database-koppeling.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Scrum"],
    github: null,
    live: null,
    team: "Team",
    role: "Scrum Master — sprintplanning, daily scrums, reviews en retrospectives faciliteren.",
    highlights: [
      "Volledige bioscoop-website met film- en voorstellingdata",
      "Scrum Master rol — waardevolle leerervaring",
      "Frontend gekoppeld aan backend en database",
      "Eerlijke reflectie op Scrum-proces en verbeterpunten",
    ],
    images: [],
    codeSnippet: null,
    collaboration:
      "Teamproject waarbij ik Scrum Master was. Het proces leerde me dat structuur alleen niet genoeg is — actieve begeleiding van meetings is essentieel.",
  },
  {
    id: "js-game",
    slug: "project-js-game.html",
    title: "JavaScript Game",
    type: "school",
    category: "Individueel project",
    featured: false,
    period: "Leerjaar 2 · Module 6.2 · 2025–2026",
    shortDescription:
      "Zelf gebouwd browser-spel met eigen spellogica, botsingsdetectie en scoreberekening — zonder externe game-library.",
    technologies: ["JavaScript", "HTML5 Canvas", "CSS"],
    github: null,
    live: null,
    team: "Solo",
    role: "Game developer — volledige spellogica, besturing en rendering.",
    highlights: [
      "Eigen botsings- en bewegingslogica",
      "Score-systeem en game loop",
      "Geen externe libraries gebruikt",
      "Probleemoplossend vermogen bij complexe logica",
    ],
    images: [],
    codeSnippet: `function checkCollision(player, obstacle) {
  return player.x < obstacle.x + obstacle.width &&
         player.x + player.width > obstacle.x &&
         player.y < obstacle.y + obstacle.height &&
         player.y + player.height > obstacle.y;
}`,
    collaboration: "Individueel project — zelfstandig ontwikkeld en getest.",
  },
  {
    id: "remote-controller",
    slug: "project-remote-controller.html",
    title: "Remote Controller Racing",
    type: "eigen",
    category: "Individueel project",
    featured: false,
    period: "Leerjaar 2 · Module 7.2 · 2025–2026",
    shortDescription:
      "Stunt racing game bestuurd via je telefoon als remote controller — real-time communicatie tussen devices.",
    technologies: ["JavaScript", "WebSockets", "HTML", "CSS"],
    github: null,
    live: null,
    team: "Solo",
    role: "Full-stack developer — communicatieprotocol, game-interface en remote besturing.",
    highlights: [
      "Telefoon als remote controller",
      "Real-time device communicatie",
      "Zelfstandig debuggen van verbindingsproblemen",
      "Innovatieve interactie tussen schermen",
    ],
    images: [],
    codeSnippet: `socket.on('steer', (direction) => {
  car.velocity += direction * ACCELERATION;
  updateCarPosition();
});`,
    collaboration: "Individueel project — leerde me doorzetten bij complexe debug-uitdagingen.",
  },
  {
    id: "portfolio",
    slug: null,
    title: "Persoonlijk Portfolio",
    type: "eigen",
    category: "Individueel project",
    featured: false,
    period: "Leerjaar 2 · Module 8.2 · 2026",
    shortDescription:
      "Deze portfolio-website — mijn visitekaartje als beginnend web developer met focus op mijn groei en projecten.",
    technologies: ["HTML", "CSS", "JavaScript", "Accessibility"],
    github: "https://github.com/Abud-Alr",
    live: null,
    team: "Solo",
    role: "Designer & developer — volledige site, content en presentatie.",
    highlights: [
      "Responsive en toegankelijk design",
      "Project showcase met interactieve previews",
      "Professionele presentatie van mijn ontwikkeling",
      "Reflectie op leerproces en toekomstdoelen",
    ],
    images: [],
    codeSnippet: null,
    collaboration: "Eigen initiatief — portfolio als bewijs van groei over 2 jaar Web Development.",
  },
];
