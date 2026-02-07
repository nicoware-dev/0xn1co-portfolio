const categoryTitles = {
  ai: "AI & Automations",
  websites: "Websites & Frontend",
  fullstack: "Full-Stack & Backend",
  blockchain: "Blockchain & Web3",
  mobile: "Mobile Apps",
  games: "Games"
};
const categoryDescriptions = {
  ai: "Agentic workflows, n8n automations, multi‑LLM systems, and data‑aware tools.",
  websites: "A collection of responsive websites and modern web interfaces with intuitive designs and seamless user experiences.",
  fullstack: "Comprehensive web applications with robust backend systems, scalable APIs, and dynamic integrations.",
  blockchain: "Decentralized applications, smart contract projects, and blockchain-based tools for the Web3 ecosystem.",
  mobile: "Mobile applications for Android and iOS, built with cross-platform technologies and optimized for performance.",
  games: "Browser-based games featuring creative visuals, interactive gameplay, and smooth animations."
};
const categoryIcons = {
  ai: "mdi:robot",
  websites: "mdi:web",
  fullstack: "mdi:database",
  blockchain: "mdi:cube-outline",
  mobile: "mdi:cellphone",
  games: "mdi:gamepad-variant"
};
const PROJECT_IMAGES = {
  australopithecus: "/assets/projects/australopithecus.png",
  portfolio: "/assets/projects/portfolio.png",
  worksgood: "/assets/projects/worksgood.png",
  cuponchain: "/assets/projects/cuponchain.png",
  n8nbot: "/assets/projects/aibot.webp",
  puzzle: "/assets/projects/puzzle.webp",
  growapp: "/assets/projects/growapp.webp",
  dedux: "/assets/projects/dedux.webp",
  seilingBuidlbox: "/assets/projects/seiling-buidlbox-architecture.png",
  hiveFi: "/assets/projects/customer-support-bot.webp",
  aigentlayer: "/assets/projects/aibot.webp"
};
const portafolioData = [
  {
    imgSrc: PROJECT_IMAGES.hiveFi,
    title: "Hive Fi",
    category: "ai",
    skills: ["logos:n8n", "logos:typescript-icon", "logos:nodejs-icon"],
    techStack: ["n8n", "TypeScript", "Node.js", "LLM APIs"],
    description: "Autonomous AI workflow for finance intelligence. Winner — 1st Prize (Sozu Virtual AI Hack).",
    demoURL: "#",
    repoURL: "#",
    anim: "fade-up"
  },
  {
    imgSrc: PROJECT_IMAGES.aigentlayer,
    title: "AIgentlayer",
    category: "ai",
    skills: ["logos:python", "logos:docker-icon", "logos:typescript-icon"],
    techStack: ["Python", "TypeScript", "Docker", "Agent Frameworks"],
    description: "Agentic system layers for autonomous task execution. Winner — 1st Prize (Gaia’s Autonomous Hackathon).",
    demoURL: "#",
    repoURL: "#",
    anim: "fade-up"
  },
  {
    imgSrc: PROJECT_IMAGES.seilingBuidlbox,
    title: "Seiling Buidlbox",
    category: "ai",
    skills: ["logos:typescript-icon", "logos:nodejs-icon", "logos:docker-icon"],
    techStack: ["TypeScript", "Node.js", "Docker", "CLI/Tooling"],
    description: "Developer tooling for AI agents and infra. Winner — 1st Prize (Tooling & Infrastructure) at the SEI AI/Accelathon.",
    demoURL: "https://github.com/nicoware-dev/seiling-buidlbox",
    repoURL: "https://github.com/nicoware-dev/seiling-buidlbox",
    anim: "fade-up"
  },
  {
    imgSrc: PROJECT_IMAGES.australopithecus,
    title: "Australopithecus Project",
    category: "websites",
    skills: ["logos:react", "logos:nextjs", "logos:ethereum"],
    techStack: ["Next.js", "React", "Ethereum", "Web3.js", "Tailwind CSS"],
    description: "A revolutionary music project integrating Web3 features, allowing artists and fans to interact in new ways through blockchain technology.",
    demoURL: "https://australopithecus.worksgood.xyz/",
    repoURL: "#",
    anim: "fade-up"
  },
  {
    imgSrc: PROJECT_IMAGES.portfolio,
    title: "Personal Portfolio",
    category: "websites",
    skills: ["logos:astro", "logos:typescript", "logos:tailwindcss"],
    techStack: ["Astro", "TypeScript", "Tailwind CSS", "React"],
    description: "A modern, responsive portfolio website showcasing professional work and technical expertise with a focus on performance and user experience.",
    demoURL: "https://0xn1c0.worksgood.xyz/",
    repoURL: "#",
    anim: "fade-up"
  },
  {
    imgSrc: PROJECT_IMAGES.worksgood,
    title: "Worksgood Website",
    category: "websites",
    skills: ["logos:nextjs", "logos:typescript", "logos:tailwindcss"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    description: "Corporate website for a holding company specializing in tech industry solutions, products, and services.",
    demoURL: "https://www.worksgood.xyz/",
    repoURL: "#",
    anim: "fade-up"
  },
  {
    imgSrc: PROJECT_IMAGES.cuponchain,
    title: "CuponChain",
    category: "blockchain",
    skills: ["logos:ethereum", "logos:solidity", "logos:react"],
    techStack: ["Solidity", "Ethereum", "React", "Web3.js", "Hardhat"],
    description: "A Web3 platform enabling businesses to create and manage tokenized coupons on the blockchain, providing secure and cost-effective loyalty solutions.",
    demoURL: "https://cuponchain.worksgood.xyz/",
    repoURL: "#",
    anim: "fade-left"
  },
  {
    imgSrc: PROJECT_IMAGES.n8nbot,
    title: "n8n Telegram AI Bot",
    category: "ai",
    skills: ["logos:n8n", "logos:python", "logos:openai-icon"],
    techStack: ["n8n", "Python", "OpenAI API", "Telegram Bot API"],
    description: "An intelligent Telegram bot powered by AI, automating responses and providing smart assistance through n8n workflows.",
    demoURL: "#",
    repoURL: "#",
    anim: "fade-up"
  },
  {
    imgSrc: PROJECT_IMAGES.puzzle,
    title: "Puzzle Game",
    category: "games",
    skills: ["logos:javascript", "logos:html-5", "logos:css-3"],
    techStack: ["JavaScript", "HTML5 Canvas", "CSS3", "Web Audio API"],
    description: "An engaging browser-based puzzle game featuring challenging levels, smooth animations, and interactive gameplay mechanics.",
    demoURL: "#",
    repoURL: "#",
    anim: "fade-right"
  },
  {
    imgSrc: PROJECT_IMAGES.growapp,
    title: "GrowApp",
    category: "mobile",
    skills: ["logos:react", "logos:firebase", "logos:typescript-icon"],
    techStack: ["React Native", "Firebase", "TypeScript", "Node.js"],
    description: "A comprehensive mobile application for gardening enthusiasts to track and manage their plants, crops, and gardening schedules.",
    demoURL: "#",
    repoURL: "#",
    anim: "fade-left"
  },
  {
    imgSrc: PROJECT_IMAGES.dedux,
    title: "Dedux Academy",
    category: "fullstack",
    skills: ["logos:nodejs", "logos:mongodb", "logos:react"],
    techStack: ["Node.js", "MongoDB", "React", "Express", "JWT"],
    description: "A full-featured online learning platform providing comprehensive courses and interactive learning experiences.",
    demoURL: "https://dedux.worksgood.xyz/",
    repoURL: "#",
    anim: "fade-right"
  }
];

export { categoryIcons as a, categoryDescriptions as b, categoryTitles as c, portafolioData as p };
