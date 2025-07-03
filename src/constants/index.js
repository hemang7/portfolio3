import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  github,
  plasma,
  crypto,
  ziggy,
  ricknmorty,
  mtx,
  tidal,
  qcs
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" }
];

const services = [
  { title: "Web Developer", icon: web },
  { title: "React Developer", icon: mobile },
  { title: "Backend Developer", icon: backend },
  { title: "Data Analyst", icon: creator }
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "Git", icon: git },
  { name: "Figma", icon: figma },
  { name: "Docker", icon: docker }
];

const experiences = [
  {
    title: "Fullstack Consultant",
    company_name: "MTX Group",
    icon: mtx,
    iconBg: "white",
    date: "Sep 2021 - March 2022",
    points: [
      "Developed and maintained web applications using Angular and related technologies.",
      "Collaborated with cross-functional teams to deliver high-quality products.",
      "Led the development of a full-featured e-commerce platform, including frontend/backend architecture.",
      "Participated in code reviews and provided feedback.",
      "Created a script for seamless employee data migration between platforms, reducing transition risk."
    ]
  },
  {
    title: "Software Development Engineer",
    company_name: "Quark Characterisation Services",
    icon: qcs,
    iconBg: "white",
    date: "July 2022 - Dec 2023",
    points: [
      "Delivered full lifecycle React.js projects from concept to production.",
      "Extracted insights from large datasets to support data-driven decisions.",
      "Implemented responsive designs with cross-browser compatibility.",
      "Used Tableau and Power BI to visualize key metrics and trends."
    ]
  },
  {
    title: "Software & Data Analytics Engineer",
    company_name: "Tidal Vision",
    icon: tidal,
    iconBg: "white",
    date: "Jan 2024 - Aug 2024",
    points: [
      "Built and maintained frontend applications using React.js.",
      "Collaborated with designers and PMs to refine UI/UX.",
      "Ensured cross-browser compatibility and responsive UI.",
      "Participated in code reviews and iterative development."
    ]
  }
];

const projects = [
  {
    name: "Ziggy",
    description: "A fullstack one-stop solution for all your travel needs.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" }
    ],
    image: ziggy,
    source_code_link: "https://github.com/hemang2050/ziggy",
    live_app_link: "https://ziggy-frontend.vercel.app/"
  },
  {
    name: "Plasma Life",
    description:
      "A plasma donation app connecting COVID-19 patients with plasma donors across India.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" }
    ],
    image: plasma,
    source_code_link: "https://github.com/hemang7/Plasma_Donation",
    live_app_link: "https://jodhpur-plasma.netlify.app/"
  },
  {
    name: "Cryptomania",
    description: "A crypto dashboard tracking live cryptocurrency prices.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "restapi", color: "green-text-gradient" },
      { name: "scss", color: "pink-text-gradient" }
    ],
    image: crypto,
    source_code_link: "https://github.com/hemang7/cryptoTracker",
    live_app_link: "https://hm-cryptotracker.netlify.app/"
  },
  {
    name: "Rick and Morty Wiki",
    description:
      "Search for characters, episodes, and locations from the Rick and Morty universe.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "supabase", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" }
    ],
    image: ricknmorty,
    source_code_link: "https://github.com/hemang7/Rick-and-Morty",
    live_app_link: "https://rick-and-morty-hm.vercel.app/"
  }
];

export { services, technologies, experiences, projects };
