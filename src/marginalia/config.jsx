import { WORKS } from "./data/works";

export const SITE = {
  title: "Achraf El Allali — Software Engineering Student & Developer",
  description:
    "Portfolio of Achraf El Allali, a software engineering student in France building full-stack applications, APIs, and developer-focused systems.",
  themeColor: "#1a1208",
  owner: {
    name: "Achraf El Allali",
    initials: "AE",
    role: "Software Engineering Student",
    location: "Clermont-Ferrand · France",
    email: "achrafelallali123@gmail.com",
  },
  hero: {
    titleLine1: "Building",
    titleLine2Italic: "useful software",
    folioLabel: "Portfolio · 2026",
    lede: <>Software engineering student and full-stack developer. I enjoy turning practical problems into reliable, well-crafted web applications.</>,
    nav: [
      { label: "About", numeral: "I", href: "#about" },
      { label: "Projects", numeral: "II", href: "#work" },
      { label: "Experience", numeral: "III", href: "#experience" },
      { label: "Skills", numeral: "IV", href: "#stack" },
      { label: "Education", numeral: "V", href: "#education" },
      { label: "Contact", numeral: "VI", href: "#contact" },
    ],
    topRight: [
      { kind: "link", label: "Download CV", href: "/assets/marginalia/CV_Achraf_EL_ALLALI_Dev_Stage.pdf", download: true },
      { kind: "cta", label: "Get in touch", href: "#contact" },
    ],
  },
  about: {
    numeral: "I", label: "About",
    title: <>A little magic, <em>a lot of code.</em></>,
    body: [
      "I’m Achraf, an engineering student at ISIMA in Clermont-Ferrand and an apprentice software mage in my spare time. My spellbook is a code editor; my mana is electricity. Luckily, power sockets are easier to find than enchanted crystals.",
      "I enjoy weaving spells — code — to bring ideas to life: a useful application, a dependable API, or a small playable world. From frontend to backend, I look for the right formula to make everything work together.",
      "My quest: to build clear, reliable software that feels good to use, while growing as a software engineer. And when a bug resists my incantations, I reach for my most powerful artifact: the debugger.",
    ],
    signature: "— Achraf El Allali", signatureMeta: "Clermont-Ferrand · France",
    stats: [
      { num: String(WORKS.length), label: "Featured projects", note: "web · games · simulation" },
      { num: "2", label: "Team projects", note: "OCULA · Incremental Game API" },
      { num: "3", label: "Backend stacks", note: ".NET · Spring Boot · FastAPI" },
      { num: "3", label: "Spoken languages", note: "French · English · Arabic" },
    ],
  },
  work: {
    numeral: "II", label: "Selected Projects",
    title: <>Things I have <em>built and explored</em></>,
    lede: "A selection of full-stack, backend, and architecture work from coursework and personal projects.",
  },
  writing: {
    numeral: "III", label: "Experience",
    title: <>Learning by <em>shipping</em></>,
    lede: "Hands-on full-stack experience on an IoT platform, from product features to delivery infrastructure.",
    archiveHref: "https://www.linkedin.com/in/achraf-el-allali",
  },
  stack: {
    numeral: "IV", label: "Skills & Technologies",
    title: <>The <em>engineering toolkit</em></>,
    lede: "Technologies I have used across projects, coursework, and professional development work.",
    countLabel: "technologies in my toolkit", countMeta: "actively learning and refining",
  },
  press: {
    numeral: "V", label: "Education",
    title: <>Foundations for <em>building well</em></>,
    lede: "Academic training in computer science, software architecture, and practical engineering.",
  },
  contact: {
    numeral: "VI", label: "Contact",
    title: <>Let’s build something <em>useful</em></>,
    lede: "I am looking for a software-development internship from March 2027. Feel free to reach out about an opportunity, a project, or a technical conversation.",
    workingHours: "Based in France · open to opportunities",
    workingHoursNote: "The form opens your email client with a prefilled message.",
  },
  footer: {
    line: "Designed and developed by Achraf El Allali.", typeCredit: <em>Instrument Serif</em>,
    techCredit: "Built with React, Vite, framer-motion, and Lenis.",
    links: [
      { label: "GitHub", href: "https://github.com/H-raf0" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/achraf-el-allali" },
    ],
  },
  assets: { bg: "/assets/marginalia/bg-01-dawn.webp", figure: "/assets/marginalia/figure-01-standing.webp" },
};
