export interface PortfolioItem {
    imgSrc: string;
    title: string;
    skills: string[];
    techStack: string[];
    description: string;
    demoURL: string;
    repoURL: string;
    anim: string;
    category: 'websites' | 'games' | 'mobile' | 'ai' | 'fullstack' | 'blockchain' | 'saas' | string[];
}
