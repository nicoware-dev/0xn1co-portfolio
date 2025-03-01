// Create a types file for shared interfaces
interface ServiceItem {
  title: string;
  description: string;
  features: string[];
  icon: string;
}

interface ShowroomItem {
  title: string;
  description: string;
  demos: Array<{
    name: string;
    icon: string;
  }>;
  icon: string;
}

export interface PortfolioItem {
    imgSrc: string;
    title: string;
    category: 
        | 'landing'           // Landing Pages
        | 'websites'          // Multi-Page Websites
        | 'blogs'            // Blogs and Magazines
        | 'nonprofit'        // Non-Profit Organization Site
        | 'interactive'      // Interactive Applications and Games
        | 'utility'          // Utility Tools
        | 'gallery'          // Photo Gallery
        | 'frontend'         // Front-End Framework Applications
        | 'fullstack'        // Full-Stack Applications
        | 'api'              // APIs and Authentication Systems
        | 'blockchain'       // Blockchain Applications
        | 'mobile'           // Mobile Applications
        | 'ai';              // AI and Machine Learning Applications
    skills: string[];
    techStack: string[];
    description: string;
    demoURL: string;
    repoURL: string;
    anim?: string;
}

export interface CategoryTitles {
    [key: string]: string;
}

export interface ServiceCategory {
    title: string;
    description: string;
    deliverables: string[];
    outcomes: string[];
    pricing: {
        name: string;
        price: string;
        description?: string;
    }[];
}

export interface ServiceDetail {
    slug: string;
    icon: string;
    title: string;
    description: string;
    features: string[];
    categories: ServiceCategory[];
} 