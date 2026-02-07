import { a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from './astro/server_D321Zypn.mjs';
import 'kleur/colors';
import { $ as $$Boton } from './Boton_CcaMN8mf.mjs';
/* empty css                         */

const $$CallToAction = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="cta-section" data-astro-cid-m23jkmdp> <div class="max-w-[var(--max-width)] mx-auto px-4" data-astro-cid-m23jkmdp> <div class="cta-container" data-astro-cid-m23jkmdp> <h2 data-astro-cid-m23jkmdp>Ready to Transform Your Ideas into Reality?</h2> <p data-astro-cid-m23jkmdp>Let's collaborate to build innovative solutions that drive your business forward. Whether you need custom software, AI integration, or technical consultation, I'm here to help.</p> <div class="cta-buttons" data-astro-cid-m23jkmdp> ${renderComponent($$result, "Boton", $$Boton, { "href": "https://forms.gle/Qz6YfDwRazVcU8Vo8", "texto": "Request a Quote", "class": "primary", "data-astro-cid-m23jkmdp": true })} ${renderComponent($$result, "Boton", $$Boton, { "href": "/contact", "texto": "Contact Me", "class": "secondary", "data-astro-cid-m23jkmdp": true })} </div> </div> </div> </section> `;
}, "C:/Users/PC/Documents/GitHub/0xn1co-portfolio/src/components/cta/CallToAction.astro", void 0);

const services = [
  {
    slug: "ai-automation",
    icon: "mdi:robot",
    title: "AI Automation and Integration",
    description: "Unlock the potential of AI to optimize your workflows, save time, and reduce costs. From chatbots to predictive analytics, we integrate intelligent solutions that empower your business to stay ahead in a competitive landscape.",
    features: [
      "AI Chatbots and Virtual Assistants",
      "Process Automation",
      "Data Analysis and Insights"
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
        title: "AI Chatbots and Virtual Assistants",
        description: "Develop AI-driven chatbots to handle customer queries, sales support, or internal assistance. Our bots are tailored to meet your needs, using NLP (Natural Language Processing) for human-like interactions.",
        deliverables: [
          "Fully functional chatbot integrated with platforms like WhatsApp or Slack",
          "Analytics to track user interactions and performance",
          "Training for employees to manage and improve the chatbot"
        ],
        outcomes: [
          "Provide 24/7 support without increasing staff costs",
          "Improve customer engagement with instant responses",
          "Boost sales through proactive customer interactions"
        ],
        pricing: [
          {
            name: "Basic Plan",
            price: "$3,000–$5,000",
            description: "Rule-based bots"
          },
          {
            name: "Advanced Plan",
            price: "$7,000–$15,000",
            description: "AI-powered, multi-channel bots"
          }
        ]
      },
      {
        title: "Process Automation",
        description: "Automate repetitive tasks, such as data entry, invoicing, and reporting, with advanced Robotic Process Automation (RPA) tools. Save time and eliminate errors by streamlining workflows.",
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
      },
      {
        title: "Data Analysis and Insights",
        description: "Leverage AI to uncover patterns, trends, and opportunities in your data. From customer segmentation to predictive analytics, our tools provide actionable insights.",
        deliverables: [
          "Custom dashboards and visualizations",
          "Data pipelines for seamless integration",
          "Predictive models to support decision-making"
        ],
        outcomes: [
          "Make informed business decisions backed by data",
          "Enhance marketing campaigns with targeted strategies",
          "Identify and capitalize on growth opportunities"
        ],
        pricing: [
          {
            name: "Basic Analysis",
            price: "$3,000–$7,000",
            description: "Single dataset analysis"
          },
          {
            name: "Advanced Analytics",
            price: "$10,000–$20,000",
            description: "Full-scale analytics solutions"
          }
        ]
      }
    ]
  },
  {
    slug: "custom-software-development",
    icon: "mdi:code-braces",
    title: "Custom Software Development",
    description: "Tailored software is the backbone of successful businesses in today's digital world. From small-scale applications to enterprise-grade systems, our solutions are designed to address your unique challenges and drive growth.",
    features: [
      "Web and Mobile Applications",
      "Enterprise Systems",
      "API Development and Integration"
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
      },
      {
        title: "API Development and Integration",
        description: "We create secure and scalable APIs, including RESTful and GraphQL, enabling seamless third-party integrations with services like Stripe, PayPal, or Twilio.",
        deliverables: [
          "Secure and scalable APIs",
          "Comprehensive documentation for developers",
          "Testing and integration support"
        ],
        outcomes: [
          "Faster product development through modular APIs",
          "Enhanced functionality through third-party integrations"
        ],
        pricing: [
          {
            name: "Basic Plan",
            price: "$1,000–$5,000",
            description: "Single API development"
          },
          {
            name: "Advanced Plan",
            price: "$5,000–$15,000",
            description: "API suite and complex integrations"
          }
        ]
      }
    ]
  },
  {
    slug: "blockchain-solutions",
    icon: "mdi:cube-outline",
    title: "Blockchain Solutions",
    description: "Blockchain offers unparalleled transparency, security, and efficiency. We help businesses harness its potential with solutions tailored to your industry.",
    features: [
      "Smart Contract Development",
      "DeFi Applications",
      "Blockchain Integration"
    ],
    categories: [
      {
        title: "Smart Contract Development",
        description: "Design, audit, and deploy secure smart contracts for platforms like Ethereum, Conflux, and Binance Smart Chain. From token contracts to complex DeFi applications, we ensure your contracts are robust and reliable.",
        deliverables: [
          "Audited smart contracts",
          "Deployment support",
          "Comprehensive test reports"
        ],
        outcomes: [
          "Reduce operational costs through automated transactions",
          "Increase trust and transparency in your ecosystem"
        ],
        pricing: [
          {
            name: "Basic Plan",
            price: "$1,000–$5,000",
            description: "Simple contracts"
          },
          {
            name: "Advanced Plan",
            price: "$10,000+",
            description: "Complex logic contracts"
          }
        ]
      },
      {
        title: "DeFi Applications",
        description: "Develop decentralized finance (DeFi) platforms like decentralized exchanges (DEXs), lending protocols, or staking solutions.",
        deliverables: [
          "Fully functional DApp (Decentralized Application)",
          "Front-end and back-end development",
          "User guides and onboarding support"
        ],
        outcomes: [
          "Attract users with cutting-edge financial tools",
          "Build trust with transparent systems",
          "Increase user engagement and transaction volumes"
        ],
        pricing: [
          {
            name: "Tier 1",
            price: "$10,000–$25,000",
            description: "Simple DApps"
          },
          {
            name: "Tier 2",
            price: "$50,000+",
            description: "Full-scale DeFi solutions"
          }
        ]
      },
      {
        title: "Blockchain Integration",
        description: "Integrate blockchain into your existing systems or create new platforms that leverage its potential.",
        deliverables: [
          "API integrations for blockchain functionality",
          "Wallet setups for users and businesses",
          "Testing and security audits"
        ],
        outcomes: [
          "Enhanced trust through transparency",
          "Reduced risks of fraud and tampering"
        ],
        pricing: [
          {
            name: "Starter Plan",
            price: "$5,000–$15,000",
            description: "Small integrations"
          },
          {
            name: "Advanced Plan",
            price: "$20,000+",
            description: "Full-system integrations"
          }
        ]
      }
    ]
  },
  {
    slug: "consulting",
    icon: "mdi:lightbulb-on-outline",
    title: "Consulting and Content Creation",
    description: "From strategic advice to engaging content, we provide end-to-end solutions to align your technology journey with business goals.",
    features: [
      "Technical Strategy",
      "Process Optimization",
      "Content Creation"
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
      },
      {
        title: "Content Creation",
        description: "Create high-quality, engaging content to educate and inspire your audience.",
        deliverables: [
          "Blog posts, guides, and documentation",
          "SEO-optimized content"
        ],
        outcomes: [
          "Improved online presence and credibility",
          "Enhanced customer understanding of your services"
        ],
        pricing: [
          {
            name: "Per Post",
            price: "$200–$500",
            description: "Individual content pieces"
          },
          {
            name: "Monthly Plan",
            price: "$1,000–$3,000/month",
            description: "Regular content creation and strategy"
          }
        ]
      }
    ]
  }
];
function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug);
}

export { $$CallToAction as $, getServiceBySlug as g, services as s };
