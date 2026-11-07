import { SITE } from "../config.jsx";
import { WORKS } from "../data/works";
import { WRITINGS } from "../data/writings";
import { STACK } from "../data/stack";
import { CV_FILES, PRESS_DOWNLOADS, PRESS_FACTS, PRESS_MENTIONS } from "../data/press";

const EN_UI = {
  language: "Language", languageChanged: "Language changed to English.",
  home: "Home", hero: "Introduction", sections: "Sections", index: "Section index",
  skip: "Skip to content", scroll: "Scroll", viewProject: "View project on GitHub:",
  profile: "View full profile", profileLabel: "View full profile on LinkedIn",
  category: "Category", technology: "Technology", note: "Note",
  online: "Find me online", training: "Education & training",
  name: "Your name", replyAddress: "Reply address", emailPlaceholder: "you@example.com",
  letter: "Letter", messagePlaceholder: "Tell me about the opportunity or project.",
  openEmail: "Open email", privacy: "This opens your preferred email app; no form data is stored.",
  messageReady: "Message ready to send.",
  messageReadyBody: "Your email client should have opened with a prefilled message. You can also browse the",
  projects: "projects", findMe: "Or find me at", availability: "Availability", email: "Email",
  emailSubject: "Portfolio enquiry from", emailGreeting: "Hello Achraf,", emailReply: "Reply to:",
  colophon: "Colophon", typography: "Set in", fontAnd: "and",
  rights: "All rights reserved · except where noted.",
};

const FR_SITE = {
  ...SITE,
  title: "Achraf El Allali — Étudiant ingénieur & développeur",
  description: "Portfolio d’Achraf El Allali, étudiant ingénieur en France : applications full-stack, API et systèmes logiciels.",
  owner: { ...SITE.owner, role: "Étudiant ingénieur en informatique" },
  hero: {
    ...SITE.hero,
    titleLine1: "Concevoir",
    titleLine2Italic: "des logiciels utiles",
    lede: "Étudiant ingénieur en informatique et développeur full-stack, entre web, IA générative et DevOps. J’aime transformer des problèmes concrets en applications web fiables et soignées.",
    nav: SITE.hero.nav.map((item) => ({ ...item, label: { "#about": "À propos", "#work": "Projets", "#experience": "Expérience", "#stack": "Compétences", "#education": "Formation", "#contact": "Contact" }[item.href] })),
    topRight: SITE.hero.topRight.map((item) => ({
      ...item,
      label: item.download ? "Télécharger le CV" : "Me contacter",
      href: item.download ? CV_FILES.fr : item.href,
    })),
  },
  about: {
    ...SITE.about, label: "À propos",
    title: <>Un peu de magie, <em>beaucoup de code.</em></>,
    body: [
      "Je suis Achraf, étudiant ingénieur à l’ISIMA, à Clermont-Ferrand, et apprenti mage du logiciel à mes heures perdues. Mon grimoire est un éditeur de code ; mon mana, de l’électricité. Heureusement, les prises sont plus faciles à trouver que les cristaux enchantés.",
      "J’aime assembler des sorts — du code — pour donner vie à des idées : une application utile, une API solide ou un petit monde jouable. Du frontend au backend, je cherche la bonne formule pour que tout fonctionne ensemble.",
      "Ma quête : créer des logiciels clairs, fiables et agréables à utiliser, tout en progressant en génie logiciel. Et quand un bug résiste à mes incantations, je sors mon artefact le plus puissant : le débogueur.",
    ],
    stats: [
      { num: String(WORKS.length), label: "Projets présentés", note: "web · jeux · simulation" },
      { num: "2", label: "Projets en équipe", note: "OCULA · API de jeu incrémental" },
      { num: "3", label: "Stacks backend", note: ".NET · Spring Boot · FastAPI" },
      { num: "3", label: "Langues parlées", note: "Français · anglais · arabe" },
    ],
  },
  work: {
    ...SITE.work, label: "Sélection de projets",
    title: <>Ce que j’ai <em>construit et exploré</em></>,
    lede: "Une sélection de projets full-stack, backend et d’architecture, réalisés pendant mes études et à titre personnel.",
  },
  writing: {
    ...SITE.writing, label: "Expérience",
    title: <>Apprendre en <em>développant</em></>,
    lede: "Une expérience concrète sur une plateforme IoT, des fonctionnalités produit et du firmware des capteurs jusqu’à l’observabilité et l’infrastructure de déploiement — et un podium en hackathon IA bancaire.",
  },
  stack: {
    ...SITE.stack, label: "Compétences & technologies",
    title: <>Ma <em>boîte à outils</em></>,
    lede: "Les technologies utilisées dans mes projets, mes études et mes expériences professionnelles.",
    countLabel: "technologies dans ma boîte à outils", countMeta: "apprendre et progresser en continu",
  },
  press: {
    ...SITE.press, label: "Formation",
    title: <>Des bases pour <em>bien construire</em></>,
    lede: "Un parcours en informatique, en architecture logicielle et en ingénierie appliquée.",
  },
  contact: {
    ...SITE.contact,
    title: <>Créons quelque chose <em>d’utile</em></>,
    lede: "Je recherche un stage de fin d’études en génie logiciel à partir d’avril 2027. N’hésitez pas à me contacter pour une opportunité, un projet ou un échange technique.",
    workingHours: "Basé en France · ouvert aux opportunités",
    workingHoursNote: "Ce formulaire ouvre votre messagerie avec un message prérempli.",
  },
  footer: {
    ...SITE.footer,
    line: "Conçu et développé par Achraf El Allali.",
    techCredit: "Réalisé avec React, Vite, framer-motion et Lenis.",
  },
};

const FR_WORKS = {
  portfolio: { title: "Portfolio personnel", role: "Projet frontend", blurb: "Un portfolio bilingue à l’identité visuelle inspirée de la peinture, avec des scènes animées au défilement, des projets encadrés et des interactions accessibles. Réalisé avec React et Vite, avec sélection EN/FR persistante et déploiement statique." },
  ocula: { role: "Projet full-stack en équipe", blurb: "Une application web d’analyse vidéo par IA générative : importer des vidéos, les transcrire et interroger leur contenu via un chatbot reposant sur un pipeline RAG (embeddings et recherche sémantique), conteneurisée avec Docker et déployée sur Azure Blob Storage." },
  "incremental-game": { title: "API de jeu incrémental", role: "Projet backend en équipe", blurb: "Un backend persistant en ASP.NET Core pour un jeu incrémental : progression, améliorations, succès, authentification, événements en temps réel et tests." },
  "labyrinth-2d": { role: "Projet de développement de jeu", blurb: "Un jeu d’évasion dans un labyrinthe 2D procédural avec SDL2, des ennemis intelligents aux comportements multiples et une recherche de chemin par BFS, Dijkstra et A*." },
  "life-game": { title: "Jeu de la vie collaboratif", role: "Projet d’application web", blurb: "Un éditeur multi-utilisateurs pour le Jeu de la vie de Conway : canevas interactif, grille partagée, transactions, import de motifs RLE et commandes de simulation." },
  "unity-platformer": { title: "Prototype de plateforme 2D", role: "Projet de développement de jeu", blurb: "Un prototype Unity avec un contrôleur C# personnalisé, des pièges dynamiques, des points de contrôle persistants, un chargement additif des scènes et des commandes PC et mobile." },
  "rabbit-simulation": { title: "Simulation de population de lapins", role: "Projet de simulation", blurb: "Une simulation de population en C, accompagnée de scripts Python d’analyse et de visualisations de la croissance, de la structure de population et des extinctions." },
};

const FR_TAGS = { Algorithms: "Algorithmes", "Game AI": "IA de jeu", Physics: "Physique", "Scene Management": "Gestion des scènes", "Data Visualisation": "Visualisation de données" };
const FR_STACK = [
  { category: "Langages", notes: ["API et services backend", "Spring et architecture logicielle", "services IA et outils backend", "capteurs embarqués et projets systèmes", "développement frontend typé"] },
  { category: "Frontend", notes: ["interfaces web modernes et réactives", "applications monopages structurées", "interfaces à base de composants", "interfaces sémantiques et adaptatives", "création d’interfaces rapide et cohérente"] },
  { category: "Backend & données", notes: ["API REST en architecture Vertical Slice", "développement d’API Python", "services web Java", "données applicatives relationnelles", "stockage léger et relationnel"] },
  { category: "IA", notes: ["assistants personnalisés et IA générative", "réponses ancrées dans des documents et médias", "recherche sémantique avec ChromaDB"] },
  { category: "DevOps & cloud", notes: ["environnements locaux et de préproduction reproductibles", "bases de l’orchestration de conteneurs", "qualité et déploiement automatisés", "hébergement cloud et stockage objet", "gestion collaborative du code source", "environnement de développement et de déploiement"] },
];

export const CONTENT = {
  en: { site: SITE, ui: EN_UI, works: WORKS, writings: WRITINGS, stack: STACK, downloads: PRESS_DOWNLOADS, facts: PRESS_FACTS, mentions: PRESS_MENTIONS, locale: "en-GB" },
  fr: {
    site: FR_SITE, locale: "fr-FR",
    ui: {
      language: "Langue", languageChanged: "La langue sélectionnée est le français.",
      home: "Accueil", hero: "Présentation", sections: "Sections", index: "Index des sections",
      skip: "Aller au contenu", scroll: "Défiler", viewProject: "Voir le projet sur GitHub :",
      profile: "Voir le profil complet", profileLabel: "Voir le profil complet sur LinkedIn",
      category: "Catégorie", technology: "Technologie", note: "Utilisation",
      online: "Me retrouver en ligne", training: "Études & formation",
      name: "Votre nom", replyAddress: "Adresse de réponse", emailPlaceholder: "vous@exemple.fr",
      letter: "Votre message", messagePlaceholder: "Parlez-moi de l’opportunité ou du projet.",
      openEmail: "Ouvrir la messagerie", privacy: "Votre messagerie s’ouvre ; aucune donnée du formulaire n’est stockée.",
      messageReady: "Votre message est prêt.",
      messageReadyBody: "Votre messagerie devrait s’être ouverte avec un message prérempli. Vous pouvez aussi découvrir les",
      projects: "projets", findMe: "Ou me retrouver ici", availability: "Disponibilité", email: "E-mail",
      emailSubject: "Contact depuis le portfolio de la part de", emailGreeting: "Bonjour Achraf,", emailReply: "Répondre à :",
      colophon: "Crédits", typography: "Typographies :", fontAnd: "et",
      rights: "Tous droits réservés · sauf mention contraire.",
    },
    works: WORKS.map((work) => ({ ...work, ...FR_WORKS[work.id], tags: work.tags.map((tag) => FR_TAGS[tag] || tag), imageAlt: work.imageAltFr })),
    writings: WRITINGS.map((entry, i) => ({ ...entry, ...[
      { title: "Développeur logiciel · CTCPA", dek: "Poursuite du développement de la plateforme IoT HeatSight : observabilité (métriques, logs structurés, Sentry), programmation des capteurs en C avec STM32Cube, CI/CD et optimisation sur Scaleway, revues de cybersécurité et support IT avec Intune, Entra ID et WatchGuard.", venue: "CDD · sept. 2026 – févr. 2027" },
      { title: "Hackathon IA bancaire – 3e place · Sopra Steria × Crédit Agricole", dek: "Conception de Smith, un assistant bancaire : frontend Angular, backend FastAPI, moteur déterministe « Safe to Spend », LLM LangChain personnalisé et RAG avec ChromaDB et des embeddings Hugging Face.", venue: "Hackathon · oct. 2026" },
      { title: "Stagiaire développeur full-stack · CTCPA", dek: "Développement de modules IoT (échelle semi-log, réservation, étalonnage des capteurs) et d’API FastEndpoints en architecture Vertical Slice ; travail sur une PWA offline-first Svelte 5 et Tailwind avec un backend REST .NET Core, la conteneurisation Docker et des pipelines CI/CD multi-environnements.", venue: "Stage · mars 2026 – août 2026" },
    ][i] })),
    stack: STACK.map((category, i) => ({ ...category, category: FR_STACK[i].category, items: category.items.map((item, j) => ({ ...item, note: FR_STACK[i].notes[j] })) })),
    downloads: PRESS_DOWNLOADS.map((entry, i) => ({
      ...entry,
      label: ["Télécharger le CV", "Profil GitHub", "Profil LinkedIn", "Contacter Achraf"][i],
      note: ["PDF · 255 Ko", "Projets & code source", "Expérience & contact", "Engager la discussion"][i],
      href: entry.download ? CV_FILES.fr : entry.href,
    })),
    facts: [
      { k: "Localisation", v: "Clermont-Ferrand, France" },
      { k: "Études", v: "Génie logiciel à l’ISIMA" },
      { k: "Recherche", v: "Stage de fin d’études à partir d’avril 2027" },
      { k: "Langues", v: "Français · anglais · arabe" },
      { k: "Centres d’intérêt", v: "Échecs · sport · lecture" },
    ],
    mentions: PRESS_MENTIONS.map((entry, i) => ({ ...entry, title: ["Diplôme d’ingénieur en informatique · Génie logiciel & systèmes informatiques", "Licence informatique · Mathématiques-informatique", "Angular – The Complete Guide"][i] })),
  },
};
