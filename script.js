/*
  Portfolio frontend script
  What this file does:
  1. Adds the custom cursor animation.
  2. Reveals cards when they enter the viewport.
  3. Handles language switching (EN / FR / NL) and remembers the chosen language.
*/

/* =========================
   1) Custom Cursor
   ========================= */

const cursorDot = document.getElementById("cursor");
const cursorRing = document.getElementById("cursorRing");

let mouseX = 0;
let mouseY = 0;
let ringX = 0;
let ringY = 0;

function initCustomCursor() {
  // Guard clause: if cursor elements are missing, skip this feature safely.
  if (!cursorDot || !cursorRing) {
    return;
  }

  // Track current mouse position and move the small dot immediately.
  document.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    cursorDot.style.transform = `translate(${mouseX - 6}px, ${mouseY - 6}px)`;
  });

  // Move the ring with a small delay for a smooth "lag" effect.
  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    cursorRing.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`;
    requestAnimationFrame(animateRing);
  }

  animateRing();
}

/* =========================
   2) Scroll Reveal Animation
   ========================= */

function initScrollReveal() {
  const revealTargets = document.querySelectorAll(".skill-card, .project-card, .stat");

  // If there are no cards, there is nothing to observe.
  if (!revealTargets.length) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  // Set initial hidden state, then let IntersectionObserver reveal each card.
  revealTargets.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(element);
  });
}

/* =========================
   3) Language Switcher (i18n)
   ========================= */

// Translation dictionary. The keys are the same in every language.
const translations = {
  en: {
    metaTitle: "Michael Yeboah - Web & E-commerce Developer",
    navSkills: "Skills",
    navProjects: "Projects",
    navAbout: "About",
    navContact: "Contact",
    heroTag: "Available for hire - Gent, Belgium",
    heroDesc:
      "Frontend developer & webshop specialist.<br />Building fast, beautiful, and conversion-ready online stores with WordPress, WooCommerce & OpenCart.",
    heroCtaWork: "View my work",
    heroCtaContact: "Get in touch",
    statsYears: "Years Experience",
    statsProjects: "Projects Completed",
    statsPlatforms: "Platforms Mastered",
    statsSatisfaction: "Client Satisfaction",
    skillsTag: "What I do",
    skillsTitle: "Core Skills",
    skill1Name: "Webshop Management",
    skill1Desc:
      "End-to-end management of online stores - products, stock, orders, promotions and customer experience.",
    skill2Name: "WordPress Development",
    skill2Desc:
      "Theme customisation, plugin management, performance optimisation and full site builds from scratch.",
    skill3Name: "Frontend Development",
    skill3Desc:
      "Pixel-perfect, responsive interfaces built with clean semantic code and smooth interactions.",
    skill4Name: "Analytics & SEO",
    skill4Desc:
      "Tracking performance, optimising product pages for search engines, and improving conversion rates.",
    skill5Name: "Site Security & Maintenance",
    skill5Desc:
      "Regular updates, backups, SSL management, uptime monitoring and security hardening.",
    skill6Name: "Responsive Design",
    skill6Desc:
      "Mobile-first design ensuring flawless shopping experiences across all devices and screen sizes.",
    projectsTag: "Portfolio",
    projectsTitle: "Featured Projects",
    project1Type: "WooCommerce - WordPress",
    project1Title: "E-commerce Store Redesign",
    project1Desc:
      "Full redesign and rebuild of an online store - custom theme, optimised checkout flow, Bancontact payment integration.",
    project1Link: "View project",
    project2Type: "Google Api PiP Mode",
    project2Title: "Picture In Picture Mode",
    project2Desc:
      "Picture-in-Picture lets content play in a small floating window so you can continue using other apps while watching or viewing information.",
    project2Link: "View project",
    project3Type: "WeatherApp Frontend",
    project3Title: "Weather Application",
    project3Desc:
      "A weather app that provides real-time forecasts, temperature updates, and local weather conditions to help you plan your day.",
    project3Link: "View project",
    aboutTag: "Background",
    aboutTitle: "About Me",
    aboutP1:
      "I'm <strong>Michael Yeboah</strong>, a frontend developer and webshop specialist based in <strong>Gent, Belgium</strong>. I combine technical development skills with a sharp eye for design and user experience.",
    aboutP2:
      "I specialise in building and managing <strong>e-commerce platforms</strong> - from setting up WooCommerce stores to managing product catalogues, processing orders, and optimising the customer journey.",
    aboutP3:
      "My background spans <strong>WordPress, OpenCart, HTML/CSS, and JavaScript</strong>. I'm currently expanding my full-stack skills through the <strong>VDAB development program</strong>, adding backend technologies to my toolkit.",
    aboutP4:
      "I'm passionate about helping businesses grow their <strong>online presence</strong> and turn visitors into customers.",
    contactTag: "Let's work",
    contactTitle: "Get In Touch",
    contactHeading: "Open to opportunities<br />in Gent & remote.",
    contactDesc:
      "Looking for a webshop beheerder or frontend developer? I'm available for full-time roles, part-time, and freelance projects.",
    formNamePlaceholder: "Your name",
    formEmailPlaceholder: "Your email",
    formMessagePlaceholder: "Your message...",
    sendMessage: "Send Message",
    footerLine1: "&copy; 2026 <span>Michael Yeboah</span> - Gent, Belgium",
    footerLine2: "Built with <span>HTML - CSS - JS</span>",
  },
  fr: {
    metaTitle: "Michael Yeboah - Developpeur Web et E-commerce",
    navSkills: "Competences",
    navProjects: "Projets",
    navAbout: "A propos",
    navContact: "Contact",
    heroTag: "Disponible pour mission - Gand, Belgique",
    heroDesc:
      "Developpeur frontend et specialiste webshop.<br />Je cree des boutiques en ligne rapides, elegantes et optimisees pour la conversion avec WordPress, WooCommerce et OpenCart.",
    heroCtaWork: "Voir mes projets",
    heroCtaContact: "Me contacter",
    statsYears: "Annees d'experience",
    statsProjects: "Projets realises",
    statsPlatforms: "Plateformes maitrisees",
    statsSatisfaction: "Satisfaction client",
    skillsTag: "Ce que je fais",
    skillsTitle: "Competences principales",
    skill1Name: "Gestion de Webshop",
    skill1Desc:
      "Gestion complete des boutiques en ligne - produits, stock, commandes, promotions et experience client.",
    skill2Name: "Developpement WordPress",
    skill2Desc:
      "Personnalisation de themes, gestion de plugins, optimisation des performances et creation complete de sites.",
    skill3Name: "Developpement Frontend",
    skill3Desc:
      "Interfaces responsives et precises, construites avec un code semantique propre et des interactions fluides.",
    skill4Name: "Analyse et SEO",
    skill4Desc:
      "Suivi des performances, optimisation SEO des pages produits et amelioration du taux de conversion.",
    skill5Name: "Securite et Maintenance",
    skill5Desc:
      "Mises a jour regulieres, sauvegardes, gestion SSL, surveillance de disponibilite et renforcement de la securite.",
    skill6Name: "Design Responsive",
    skill6Desc:
      "Approche mobile-first pour offrir une experience d'achat fluide sur tous les appareils.",
    projectsTag: "Portfolio",
    projectsTitle: "Projets en vedette",
    project1Type: "WooCommerce - WordPress",
    project1Title: "Refonte de boutique e-commerce",
    project1Desc:
      "Refonte complete d'une boutique en ligne - theme sur mesure, tunnel de paiement optimise et integration Bancontact.",
    project1Link: "Voir le projet",
    project2Type: "Mode PiP API Google",
    project2Title: "Mode Picture-in-Picture",
    project2Desc:
      "Le mode Picture-in-Picture permet au contenu d'etre lu dans une petite fenetre flottante afin que vous puissiez continuer a utiliser d'autres applications tout en regardant ou en consultant des informations.",
    project2Link: "Voir le projet",
    project3Type: "Frontend WeatherApp",
    project3Title: "Application Meteo",
    project3Desc:
      "Une application meteo qui fournit des previsions en temps reel, des mises a jour de temperature et les conditions locales pour vous aider a planifier votre journee.",
    project3Link: "Voir le projet",
    aboutTag: "Parcours",
    aboutTitle: "A propos de moi",
    aboutP1:
      "Je suis <strong>Michael Yeboah</strong>, developpeur frontend et specialiste webshop base a <strong>Gand, Belgique</strong>. J'allie competences techniques, design et experience utilisateur.",
    aboutP2:
      "Je me specialise dans la creation et la gestion de <strong>plateformes e-commerce</strong> - de la mise en place de boutiques WooCommerce a la gestion de catalogues produits et des commandes.",
    aboutP3:
      "Mon parcours couvre <strong>WordPress, OpenCart, HTML/CSS et JavaScript</strong>. Je developpe actuellement mes competences full-stack via le <strong>programme de developpement VDAB</strong>.",
    aboutP4:
      "J'aime aider les entreprises a renforcer leur <strong>presence en ligne</strong> et transformer les visiteurs en clients.",
    contactTag: "Travaillons ensemble",
    contactTitle: "Contactez-moi",
    contactHeading: "Ouvert aux opportunites<br />a Gand et en remote.",
    contactDesc:
      "Vous cherchez un gestionnaire webshop ou un developpeur frontend ? Je suis disponible pour des roles temps plein, temps partiel et freelance.",
    formNamePlaceholder: "Votre nom",
    formEmailPlaceholder: "Votre e-mail",
    formMessagePlaceholder: "Votre message...",
    sendMessage: "Envoyer le message",
    footerLine1: "&copy; 2026 <span>Michael Yeboah</span> - Gand, Belgique",
    footerLine2: "Cree avec <span>HTML - CSS - JS</span>",
  },
  nl: {
    metaTitle: "Michael Yeboah - Web en E-commerce Developer",
    navSkills: "Vaardigheden",
    navProjects: "Projecten",
    navAbout: "Over mij",
    navContact: "Contact",
    heroTag: "Beschikbaar voor opdrachten - Gent, Belgie",
    heroDesc:
      "Frontend developer en webshop specialist.<br />Ik bouw snelle, mooie en conversiegerichte webshops met WordPress, WooCommerce en OpenCart.",
    heroCtaWork: "Bekijk mijn werk",
    heroCtaContact: "Neem contact op",
    statsYears: "Jaar ervaring",
    statsProjects: "Afgeronde projecten",
    statsPlatforms: "Beheerste platformen",
    statsSatisfaction: "Klanttevredenheid",
    skillsTag: "Wat ik doe",
    skillsTitle: "Kernvaardigheden",
    skill1Name: "Webshopbeheer",
    skill1Desc:
      "Volledig beheer van online winkels - producten, voorraad, bestellingen, promoties en klantervaring.",
    skill2Name: "WordPress Ontwikkeling",
    skill2Desc:
      "Theme-aanpassingen, pluginbeheer, performance-optimalisatie en volledige websites van nul opbouwen.",
    skill3Name: "Frontend Ontwikkeling",
    skill3Desc:
      "Pixel-perfecte, responsieve interfaces met schone semantische code en vloeiende interacties.",
    skill4Name: "Analytics & SEO",
    skill4Desc:
      "Prestaties opvolgen, productpagina's SEO-optimaliseren en conversieratio's verbeteren.",
    skill5Name: "Sitebeveiliging & Onderhoud",
    skill5Desc:
      "Regelmatige updates, back-ups, SSL-beheer, uptime monitoring en security hardening.",
    skill6Name: "Responsive Design",
    skill6Desc:
      "Mobile-first design voor een vlekkeloze winkelervaring op alle toestellen en schermgroottes.",
    projectsTag: "Portfolio",
    projectsTitle: "Uitgelichte projecten",
    project1Type: "WooCommerce - WordPress",
    project1Title: "Herontwerp van e-commerce store",
    project1Desc:
      "Volledige redesign en rebuild van een online winkel - custom theme, geoptimaliseerde checkout flow en Bancontact-integratie.",
    project1Link: "Bekijk project",
    project2Type: "Google API PiP-modus",
    project2Title: "Picture-in-Picture Modus",
    project2Desc:
      "Met Picture-in-Picture kan inhoud in een klein zwevend venster blijven afspelen, zodat je andere apps kunt blijven gebruiken terwijl je kijkt of informatie bekijkt.",
    project2Link: "Bekijk project",
    project3Type: "WeatherApp Frontend",
    project3Title: "Weerapplicatie",
    project3Desc:
      "Een weerapp die realtime voorspellingen, temperatuurupdates en lokale weersomstandigheden geeft om je dag beter te plannen.",
    project3Link: "Bekijk project",
    aboutTag: "Achtergrond",
    aboutTitle: "Over mij",
    aboutP1:
      "Ik ben <strong>Michael Yeboah</strong>, een frontend developer en webshop specialist uit <strong>Gent, Belgie</strong>. Ik combineer technische skills met een scherp oog voor design en gebruikservaring.",
    aboutP2:
      "Ik specialiseer me in het bouwen en beheren van <strong>e-commerce platformen</strong> - van WooCommerce stores opzetten tot productcatalogi beheren en bestellingen verwerken.",
    aboutP3:
      "Mijn achtergrond omvat <strong>WordPress, OpenCart, HTML/CSS en JavaScript</strong>. Momenteel breid ik mijn full-stack vaardigheden uit via het <strong>VDAB-ontwikkelprogramma</strong>.",
    aboutP4:
      "Ik help bedrijven graag hun <strong>online aanwezigheid</strong> te versterken en bezoekers om te zetten in klanten.",
    contactTag: "Laten we samenwerken",
    contactTitle: "Neem contact op",
    contactHeading: "Open voor kansen<br />in Gent en remote.",
    contactDesc:
      "Zoek je een webshop beheerder of frontend developer? Ik ben beschikbaar voor fulltime, parttime en freelance projecten.",
    formNamePlaceholder: "Jouw naam",
    formEmailPlaceholder: "Jouw e-mail",
    formMessagePlaceholder: "Jouw bericht...",
    sendMessage: "Bericht verzenden",
    footerLine1: "&copy; 2026 <span>Michael Yeboah</span> - Gent, Belgie",
    footerLine2: "Gemaakt met <span>HTML - CSS - JS</span>",
  },
};

/*
  Binding list for regular text elements.
  - selector: where to find the element in the DOM
  - key: translation key to read from the active language dictionary
  - html: set true when value contains safe markup like <br /> or <strong>
*/
const textBindings = [
  { selector: 'nav .nav-links a[href="#skills"]', key: "navSkills" },
  { selector: 'nav .nav-links a[href="#projects"]', key: "navProjects" },
  { selector: 'nav .nav-links a[href="#about"]', key: "navAbout" },
  { selector: 'nav .nav-links a[href="#contact"]', key: "navContact" },
  { selector: ".hero-tag", key: "heroTag" },
  { selector: ".hero-desc", key: "heroDesc", html: true },
  { selector: ".hero-cta .btn-primary", key: "heroCtaWork" },
  { selector: ".hero-cta .btn-secondary", key: "heroCtaContact" },
  { selector: ".stats-bar .stat:nth-child(1) .stat-label", key: "statsYears" },
  { selector: ".stats-bar .stat:nth-child(2) .stat-label", key: "statsProjects" },
  { selector: ".stats-bar .stat:nth-child(3) .stat-label", key: "statsPlatforms" },
  { selector: ".stats-bar .stat:nth-child(4) .stat-label", key: "statsSatisfaction" },
  { selector: "#skills .section-tag", key: "skillsTag" },
  { selector: "#skills .section-title", key: "skillsTitle" },
  { selector: "#skills .skill-card:nth-child(1) .skill-name", key: "skill1Name" },
  { selector: "#skills .skill-card:nth-child(1) .skill-desc", key: "skill1Desc" },
  { selector: "#skills .skill-card:nth-child(2) .skill-name", key: "skill2Name" },
  { selector: "#skills .skill-card:nth-child(2) .skill-desc", key: "skill2Desc" },
  { selector: "#skills .skill-card:nth-child(3) .skill-name", key: "skill3Name" },
  { selector: "#skills .skill-card:nth-child(3) .skill-desc", key: "skill3Desc" },
  { selector: "#skills .skill-card:nth-child(4) .skill-name", key: "skill4Name" },
  { selector: "#skills .skill-card:nth-child(4) .skill-desc", key: "skill4Desc" },
  { selector: "#skills .skill-card:nth-child(5) .skill-name", key: "skill5Name" },
  { selector: "#skills .skill-card:nth-child(5) .skill-desc", key: "skill5Desc" },
  { selector: "#skills .skill-card:nth-child(6) .skill-name", key: "skill6Name" },
  { selector: "#skills .skill-card:nth-child(6) .skill-desc", key: "skill6Desc" },
  { selector: "#projects .section-tag", key: "projectsTag" },
  { selector: "#projects .section-title", key: "projectsTitle" },
  { selector: "#projects .project-card:nth-child(1) .project-type", key: "project1Type" },
  { selector: "#projects .project-card:nth-child(1) .project-title", key: "project1Title" },
  { selector: "#projects .project-card:nth-child(1) .project-desc", key: "project1Desc" },
  { selector: "#projects .project-card:nth-child(1) .project-link", key: "project1Link" },
  { selector: "#projects .project-card:nth-child(2) .project-type", key: "project2Type" },
  { selector: "#projects .project-card:nth-child(2) .project-title", key: "project2Title" },
  { selector: "#projects .project-card:nth-child(2) .project-desc", key: "project2Desc" },
  { selector: "#projects .project-card:nth-child(2) .project-link", key: "project2Link" },
  { selector: "#projects .project-card:nth-child(3) .project-type", key: "project3Type" },
  { selector: "#projects .project-card:nth-child(3) .project-title", key: "project3Title" },
  { selector: "#projects .project-card:nth-child(3) .project-desc", key: "project3Desc" },
  { selector: "#projects .project-card:nth-child(3) .project-link", key: "project3Link" },
  { selector: "#about .section-tag", key: "aboutTag" },
  { selector: "#about .section-title", key: "aboutTitle" },
  { selector: "#about .about-text p:nth-child(1)", key: "aboutP1", html: true },
  { selector: "#about .about-text p:nth-child(2)", key: "aboutP2", html: true },
  { selector: "#about .about-text p:nth-child(3)", key: "aboutP3", html: true },
  { selector: "#about .about-text p:nth-child(4)", key: "aboutP4", html: true },
  { selector: "#contact .section-tag", key: "contactTag" },
  { selector: "#contact .section-title", key: "contactTitle" },
  { selector: "#contact .contact-info h3", key: "contactHeading", html: true },
  { selector: "#contact .contact-info p", key: "contactDesc" },
  { selector: "#contact .contact-form button", key: "sendMessage" },
  { selector: "footer p:nth-child(1)", key: "footerLine1", html: true },
  { selector: "footer p:nth-child(2)", key: "footerLine2", html: true },
];

// Same idea as text bindings, but for input/textarea placeholders.
const placeholderBindings = [
  { selector: '#contact input[type="text"]', key: "formNamePlaceholder" },
  { selector: '#contact input[type="email"]', key: "formEmailPlaceholder" },
  { selector: "#contact textarea", key: "formMessagePlaceholder" },
];

const languageButtons = Array.from(document.querySelectorAll(".lang-btn"));
const languageStorageKey = "portfolioLanguage";

function getLanguagePack(languageCode) {
  return translations[languageCode] || translations.en;
}

function applyTextBindings(languagePack) {
  textBindings.forEach((binding) => {
    const element = document.querySelector(binding.selector);
    const value = languagePack[binding.key];

    if (!element || typeof value !== "string") {
      return;
    }

    if (binding.html) {
      // Safe because strings come from this local file (not user input).
      element.innerHTML = value;
      return;
    }

    element.textContent = value;
  });
}

function applyPlaceholderBindings(languagePack) {
  placeholderBindings.forEach((binding) => {
    const element = document.querySelector(binding.selector);
    const value = languagePack[binding.key];

    if (!element || typeof value !== "string") {
      return;
    }

    element.setAttribute("placeholder", value);
  });
}

function highlightActiveLanguage(activeLanguage) {
  languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === activeLanguage);
  });
}

function applyTranslations(languageCode) {
  const selectedLanguage = translations[languageCode] ? languageCode : "en";
  const languagePack = getLanguagePack(selectedLanguage);

  // Keep browser metadata aligned with the selected language.
  document.documentElement.lang = selectedLanguage;
  document.title = languagePack.metaTitle;

  applyTextBindings(languagePack);
  applyPlaceholderBindings(languagePack);
  highlightActiveLanguage(selectedLanguage);

  // Save user choice so language stays the same on refresh.
  localStorage.setItem(languageStorageKey, selectedLanguage);
}

function initLanguageSwitcher() {
  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      applyTranslations(button.dataset.lang || "en");
    });
  });

  const savedLanguage = localStorage.getItem(languageStorageKey);
  applyTranslations(savedLanguage || "en");
}

/* =========================
   App Start
   ========================= */

initCustomCursor();
initScrollReveal();
initLanguageSwitcher();

