import type { PortfolioItem } from '../../types';

export const categoryTitles = {
    ai: "AI & Automations",
    saas: "SaaS & Micro-SaaS",
    blockchain: "Blockchain & Web3",
};

// Update category descriptions
export const categoryDescriptions = {
    ai: "Agentic workflows, n8n automations, multi‑LLM systems, and data‑aware tools.",
    saas: "Scalable software-as-a-service platforms and specialized micro-SaaS solutions solving niche business problems.",
    blockchain: "Decentralized applications, smart contract projects, and blockchain-based tools for the Web3 ecosystem.",
};

// Update category icons
export const categoryIcons = {
    ai: "mdi:robot",
    saas: "mdi:cloud-check",
    blockchain: "mdi:cube-outline",
};

// Update all project image paths to use actual images
const PROJECT_IMAGES = {
    cuponchain: '/assets/projects/cuponchain.png',
    n8nbot: '/assets/projects/customer-support-bot.webp',
    seilingBuidlbox: '/assets/projects/seiling-buidlbox-architecture.png',
    hiveFi: '/assets/projects/hivefi.png',
    aigentlayer: '/assets/projects/aigentlayer.png',
    automationToolkit: '/assets/projects/automationToolkit.jpeg', 
    integrationLayer: '/assets/projects/integrationLayer.jpeg',
    aiOpsSystem: '/assets/projects/aiOpsSystem.jpeg',
    floehub: '/assets/projects/floehub.png', // Placeholder
    umas: '/assets/projects/umas.jpeg' // Placeholder
};

export const portafolioData: PortfolioItem[] = [
    {
        imgSrc: PROJECT_IMAGES.floehub,
        title: 'Floe Hub',
        category: 'saas',
        skills: ['logos:react', 'logos:typescript-icon', 'logos:tailwindcss', 'logos:nodejs-icon'],
        techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
        description: 'Your Freelance Command Center. Track time, move leads, ship client work, and jot down income/expenses in one workspace.',
        demoURL: 'https://floehub.com',
        repoURL: '#',
        anim: 'fade-up'
    },
    {
        imgSrc: PROJECT_IMAGES.umas,
        title: 'UMAS (Ultimate Multi Agent System)',
        category: 'ai',
        skills: ['logos:n8n', 'logos:openai-icon', 'logos:python'],
        techStack: ['n8n', 'OpenAI', 'Python', 'Vector DB'],
        description: 'A modular, scalable AI Workforce with an orchestrator agent and specialized squads for task management, content creation, and more.',
        demoURL: '#',
        repoURL: '#',
        anim: 'fade-up'
    },
    {
        imgSrc: PROJECT_IMAGES.hiveFi,
        title: 'Hive Fi',
        category: ['ai', 'blockchain'],
        skills: ['logos:n8n', 'logos:typescript-icon', 'logos:nodejs-icon'],
        techStack: ['n8n', 'TypeScript', 'Node.js', 'LLM APIs'],
        description: 'Autonomous AI workflow for finance intelligence. Winner — 1st Prize (Sozu Virtual AI Hack).',
        demoURL: '#',
        repoURL: '#',
        anim: 'fade-up'
    },
    {
        imgSrc: PROJECT_IMAGES.aigentlayer,
        title: 'AIgentlayer',
        category: ['ai', 'blockchain'],
        skills: ['logos:python', 'logos:docker-icon', 'logos:typescript-icon'],
        techStack: ['Python', 'TypeScript', 'Docker', 'Agent Frameworks'],
        description: 'Agentic system layers for autonomous task execution. Winner — 1st Prize (Gaia’s Autonomous Hackathon).',
        demoURL: '#',
        repoURL: '#',
        anim: 'fade-up'
    },
    {
        imgSrc: PROJECT_IMAGES.seilingBuidlbox,
        title: 'Seiling Buidlbox',
        category: ['ai', 'blockchain'],
        skills: ['logos:typescript-icon', 'logos:nodejs-icon', 'logos:docker-icon'],
        techStack: ['TypeScript', 'Node.js', 'Docker', 'CLI/Tooling'],
        description: 'Developer tooling for AI agents and infra. Winner — 1st Prize (Tooling & Infrastructure) at the SEI AI/Accelathon.',
        demoURL: 'https://github.com/nicoware-dev/seiling-buidlbox',
        repoURL: 'https://github.com/nicoware-dev/seiling-buidlbox',
        anim: 'fade-up'
    },
    {
        imgSrc: PROJECT_IMAGES.cuponchain,
        title: 'CuponChain',
        category: 'blockchain',
        skills: ['logos:ethereum', 'logos:solidity', 'logos:react'],
        techStack: ['Solidity', 'Ethereum', 'React', 'Web3.js', 'Hardhat'],
        description: 'A Web3 platform enabling businesses to create and manage tokenized coupons on the blockchain, providing secure and cost-effective loyalty solutions.',
        demoURL: 'https://cuponchain.worksgood.xyz/',
        repoURL: '#',
        anim: 'fade-left'
    },
    {
        imgSrc: PROJECT_IMAGES.n8nbot,
        title: 'n8n Telegram AI Bot',
        category: 'ai',
        skills: ['logos:n8n', 'logos:python', 'logos:openai-icon'],
        techStack: ['n8n', 'Python', 'OpenAI API', 'Telegram Bot API'],
        description: 'An intelligent Telegram bot powered by AI, automating responses and providing smart assistance through n8n workflows.',
        demoURL: '#',
        repoURL: '#',
        anim: 'fade-up'
    },
    {
        imgSrc: PROJECT_IMAGES.automationToolkit,
        title: 'Automation Decision Toolkit',
        category: 'saas',
        skills: ['logos:react', 'logos:typescript-icon', 'logos:tailwindcss'],
        techStack: ['React', 'TypeScript', 'Tailwind', 'Calculators'],
        description: 'A collection of decision-support tools helping teams assess readiness, ROI, prioritization, and risk before automating.',
        demoURL: '#',
        repoURL: '#',
        anim: 'fade-up'
    },
    {
        imgSrc: PROJECT_IMAGES.integrationLayer,
        title: 'Operational Integration Layer',
        category: 'ai',
        skills: ['logos:n8n', 'logos:nodejs-icon', 'logos:postgresql'],
        techStack: ['n8n', 'Node.js', 'Postgres', 'Webhooks'],
        description: 'A lightweight system designed to coordinate actions across multiple tools with minimal maintenance overhead.',
        demoURL: '#',
        repoURL: '#',
        anim: 'fade-up'
    },
    {
        imgSrc: PROJECT_IMAGES.aiOpsSystem,
        title: 'AI-Assisted Operations System',
        category: 'ai',
        skills: ['logos:openai-icon', 'logos:python', 'logos:fastapi-icon'],
        techStack: ['OpenAI API', 'Python', 'FastAPI', 'Vector DB'],
        description: 'An example of AI used to support classification, routing, or prioritization within a stable operational framework.',
        demoURL: '#',
        repoURL: '#',
        anim: 'fade-up'
    }
];
