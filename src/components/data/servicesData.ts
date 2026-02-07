import type { ServiceDetail } from '../../types';

export const services: ServiceDetail[] = [
    {
        slug: 'ai-automation',
        icon: "mdi:robot",
        title: "AI Automation & Operational Systems",
        description: "I design and implement automation systems that reduce repetitive work, improve consistency, and make operations easier to run. The goal is not more automation — it’s less friction.",
        features: [
            "Workflow Automation",
            "AI-Assisted Decision Support",
            "Reliable Integrations"
        ],
        categories: [
            {
                title: "Agentic Systems & Orchestration",
                description: "Design and deploy multi‑agent systems, tool‑enabled workflows, retrieval‑augmented pipelines, and robust orchestration using platforms like n8n.",
                deliverables: [
                    "Architecture and system design documentation",
                    "Orchestrated workflows (n8n) with error handling and retries",
                    "Tool registry and capability routing",
                    "Observability dashboards and runbooks"
                ],
                outcomes: [
                    "Increased autonomy and throughput",
                    "Reduced manual operations and handoffs",
                    "Reproducible, monitorable workflows"
                ],
                pricing: [
                    {
                        name: "Pilot",
                        price: "$5,000–$12,000",
                        description: "Scoped PoC with 1–2 agent workflows"
                    },
                    {
                        name: "Production",
                        price: "$15,000–$35,000",
                        description: "Hardened system with monitoring and handoffs"
                    }
                ]
            },
            {
                title: "Process Automation",
                description: "Automate repetitive tasks, such as data entry, invoicing, and reporting. Save time and eliminate errors by streamlining workflows.",
                deliverables: [
                    "Custom automation scripts tailored to specific workflows",
                    "Workflow documentation and process blueprints",
                    "Employee training to manage automation systems"
                ],
                outcomes: [
                    "Save significant time on repetitive tasks",
                    "Reduce operational costs",
                    "Ensure accuracy and consistency in processes"
                ],
                pricing: [
                    {
                        name: "Single Process",
                        price: "$5,000–$10,000",
                        description: "Single Process Automation"
                    },
                    {
                        name: "Full Workflow",
                        price: "$15,000–$25,000",
                        description: "Full Workflow Optimization"
                    }
                ]
            }
        ]
    },
    {
        slug: 'custom-software-development',
        icon: "mdi:code-braces",
        title: "Custom Software Development",
        description: "When automation is part of a larger system, I build custom software tailored to your operational needs. This includes internal tools, backend services, integrations, and lightweight platforms designed to support real workflows rather than abstract requirements.",
        features: [
            "Internal Tools & Dashboards",
            "Backend Services",
            "Complex Integrations"
        ],
        categories: [
            {
                title: "Web and Mobile Applications",
                description: "We develop responsive, user-friendly, and scalable apps for web, iOS, and Android platforms. Using modern frameworks like React, Angular, Flutter, and Swift, we ensure that your application delivers an exceptional user experience while meeting your business goals.",
                deliverables: [
                    "Functional app ready for deployment",
                    "Customized user interfaces (UI/UX)",
                    "Backend integration with databases and APIs",
                    "Post-launch support and maintenance plans"
                ],
                outcomes: [
                    "Reach a broader audience with mobile accessibility",
                    "Increased customer satisfaction through intuitive designs",
                    "Scalability for future growth and updates"
                ],
                pricing: [
                    {
                        name: "Starter Plan",
                        price: "$5,000–$10,000",
                        description: "Small apps with basic functionality"
                    },
                    {
                        name: "Standard Plan",
                        price: "$10,000–$25,000",
                        description: "Multi-platform apps with moderate complexity"
                    },
                    {
                        name: "Premium Plan",
                        price: "$25,000+",
                        description: "Enterprise-grade solutions with advanced features"
                    }
                ]
            },
            {
                title: "Enterprise Systems",
                description: "Streamline your business processes with custom enterprise solutions like ERP (Enterprise Resource Planning), CRM (Customer Relationship Management), and internal tools. These systems are tailored to fit your organization's needs, providing a centralized platform for efficiency.",
                deliverables: [
                    "Fully integrated enterprise software",
                    "Custom dashboards and reporting tools",
                    "Training for end-users and ongoing support"
                ],
                outcomes: [
                    "Enhanced operational efficiency",
                    "Improved decision-making with centralized data",
                    "Reduced redundancy across departments"
                ],
                pricing: [
                    {
                        name: "Small Business Plan",
                        price: "$15,000–$30,000",
                        description: "CRM/ERP for up to 50 users"
                    },
                    {
                        name: "Enterprise Plan",
                        price: "$30,000–$100,000",
                        description: "Fully integrated systems for larger organizations"
                    }
                ]
            }
        ]
    },
    {
        slug: 'consulting',
        icon: "mdi:lightbulb-on-outline",
        title: "Consulting & Technical Strategy",
        description: "For teams that need clarity before implementation, I offer consulting and technical guidance around automation strategy, system design, and process improvement. This is often used to assess automation readiness, identify what should (and should not) be automated, and reduce risk before committing to builds.",
        features: [
            "Automation Readiness Assessment",
            "System Design & Architecture",
            "Process Improvement"
        ],
        categories: [
            {
                title: "Technical Strategy",
                description: "Assess your current systems, identify gaps, and recommend tailored solutions to enhance your technology stack.",
                deliverables: [
                    "System audits and assessments",
                    "Comprehensive strategy roadmaps"
                ],
                outcomes: [
                    "Long-term cost savings",
                    "Improved operational efficiency"
                ],
                pricing: [
                    {
                        name: "One-Time Assessment",
                        price: "$2,000–$5,000",
                        description: "Complete system audit and recommendations"
                    },
                    {
                        name: "Ongoing Support",
                        price: "$1,000–$3,000/month",
                        description: "Continuous strategy and advisory services"
                    }
                ]
            },
            {
                title: "Process Optimization",
                description: "Optimize workflows to eliminate inefficiencies and improve productivity.",
                deliverables: [
                    "Workflow analysis reports",
                    "Tool recommendations and implementation plans"
                ],
                outcomes: [
                    "Streamlined operations",
                    "Reduced redundancies"
                ],
                pricing: [
                    {
                        name: "Basic Analysis",
                        price: "$2,000–$5,000",
                        description: "Basic Workflow Analysis"
                    },
                    {
                        name: "Complete Overhaul",
                        price: "$10,000–$20,000",
                        description: "Comprehensive Process Overhaul"
                    }
                ]
            }
        ]
    }
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
    return services.find(service => service.slug === slug);
}
