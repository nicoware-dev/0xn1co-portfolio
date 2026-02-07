export interface CaseStudy {
    slug: string;
    title: string;
    subtitle: string;
    challenge: string;
    solution: string;
    impact: string[];
    techStack: string[];
    category: string;
}

export const caseStudies: CaseStudy[] = [
    {
        slug: 'internal-operations-automation',
        title: 'Reducing Manual Operations Through Workflow Automation',
        subtitle: 'Internal Operations Automation',
        challenge: 'A small team relied on manual coordination across multiple tools, leading to delays and frequent errors.',
        solution: 'Designed and implemented a centralized automation system connecting core tools and standardizing execution logic.',
        impact: [
            'Reduced manual operational work by ~40%',
            'Improved execution consistency',
            'Fewer follow-ups and interruptions'
        ],
        techStack: ['n8n', 'Airtable', 'Slack', 'OpenAI'],
        category: 'Automation'
    },
    {
        slug: 'improving-support-consistency',
        title: 'Improving Support Consistency with AI-Assisted Workflows',
        subtitle: 'AI-Assisted Support Workflow',
        challenge: 'Support processes were inconsistent and heavily dependent on individual judgment, leading to variable response quality and times.',
        solution: 'Introduced AI-assisted classification and routing combined with rule-based automation to standardize responses and triage.',
        impact: [
            'Faster response times',
            'More consistent handling of tickets',
            'Reduced cognitive load for the support team'
        ],
        techStack: ['OpenAI', 'n8n', 'Python', 'Zendesk'],
        category: 'AI Automation'
    },
    {
        slug: 'process-stabilization-first',
        title: 'Why We Didn’t Automate First — And Why That Worked Better',
        subtitle: 'Process Stabilization Before Automation',
        challenge: 'A team wanted automation, but their process changed weekly and lacked ownership, making any automation brittle.',
        solution: 'Focused first on process stabilization, documentation, and ownership definition before introducing any automation tools.',
        impact: [
            'Avoided costly automation failures',
            'Created a stable foundation for future scaling',
            'Clarified team roles and responsibilities'
        ],
        techStack: ['Process Mapping', 'Documentation', 'SOPs'],
        category: 'Consulting'
    },
    {
        slug: 'connecting-disconnected-tools',
        title: 'Connecting Disconnected Tools Into a Single Operational System',
        subtitle: 'Multi-Tool Integration System',
        challenge: 'Data and actions were spread across multiple platforms with no clear flow, resulting in manual data entry and sync errors.',
        solution: 'Built a lightweight integration layer to coordinate actions and data across tools, ensuring a single source of truth.',
        impact: [
            'Fewer manual handoffs between teams',
            'Clearer operational visibility',
            'More reliable execution of cross-platform tasks'
        ],
        techStack: ['n8n', 'TypeScript', 'REST APIs', 'Postgres'],
        category: 'Integration'
    }
];
