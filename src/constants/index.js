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
    ricknmorty,
    mtx,
    tidal,
    qcs
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Data Analyst",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: github,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Fullstack Consultant",
      company_name: "MTX Group",
      icon: mtx,
      iconBg: "white",
      date: "Sep 2021 - March 2022",
      points: [
        "Developing and maintaining web applications using Angular and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Led the development and delivery of a full-featured e-commerce platform, overseeing frontend and backend architecture and database design.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Developed a script that facilitated the seamless migration of employee work data from one platform to another. This script played a crucial role in ensuring a smooth transition and minimizing data loss during the migration process.",
      ],
    },
    {
      title: "Software Development Engineer",
      company_name: "Quark Characterisation Services",
      icon: qcs,
      iconBg: "white",
      date: "July 2022 - Dec 2023",
      points: [
        "Delivered end-to-end projects utilizing React.js, managing the entire software development lifecycle (SDLC) from initial concept to production deployment.",
        "Extracted actionable insights from large datasets using data mining driving data-driven business decisions and trends.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Applied advanced data visualization tools (Tableau, Power BI) and statistical methods to transform raw data into actionable intelligence, improving strategic outcomes.",
      ],
    },
    {
      title: "Software & Data Analytics Engineer",
      company_name: "Tidal Vision",
      icon: tidal,
      iconBg: "white",
      date: "Jan 2024 - Aug 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
 
  ];
  
  
  const projects = [
    {
      name: "Plasma Life",
      description:
        "A plasma donation app that helped create a network of plasma donors and covid patients during the Covid-19 pandemic in India.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: plasma,
      source_code_link: "https://github.com/hemang7/Plasma_Donation",
      live_app_link: "https://jodhpur-plasma.netlify.app/",
    },
    {
      name: "Cryptomania",
      description:
        "Web application to keep track of the latest cryptocurrency prices.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: crypto,
      source_code_link:"https://github.com/hemang7/cryptoTracker",
      live_app_link: "https://hm-cryptotracker.netlify.app/"
    },
    {
      name: "Rick and Morty Wiki", 
      description:
        "Everything Rick and Morty in one place. Search for characters, episodes, locations and more.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: ricknmorty,
      source_code_link: "https://github.com/hemang7/Rick-and-Morty",
      live_app_link:  "https://rick-and-morty-hm.vercel.app/",
      
    },
  ];
  
  export { services, technologies, experiences, projects };