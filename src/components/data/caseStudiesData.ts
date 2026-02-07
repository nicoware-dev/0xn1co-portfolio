import type { CaseStudy } from '../../types';

export const caseStudies: CaseStudy[] = [
    {
        slug: 'internal-operations-automation',
        title: 'Reducing Manual Operations Through Workflow Automation',
        subtitle: 'Internal Operations Automation',
        challenge: 'A growing operations team was losing 15+ hours per week on manual coordination across Airtable, Slack, and email. Data entry errors were causing a 20% mismatch rate between systems, leading to constant "status check" interruptions and delayed project kickoffs.',
        solution: 'Designed and implemented a centralized n8n orchestration layer. The system now automatically captures triggers from core tools, standardizes the data payload, and executes multi-step logic to sync Airtable records, generate documents, and notify stakeholders via Slack without human intervention.',
        impact: [
            'Reduced manual operational overhead by 40%, saving ~60 hours/month',
            'Achieved 99.9% data consistency across 5 core platforms',
            'Eliminated 95% of internal "status update" interruptions',
            'Reduced project kickoff latency from 2 days to <1 hour'
        ],
        techStack: ['n8n', 'Airtable', 'Slack', 'OpenAI', 'Webhooks'],
        category: 'Automation'
    },
    {
        slug: 'improving-support-consistency',
        title: 'Improving Support Consistency with AI-Assisted Workflows',
        subtitle: 'AI-Assisted Support Workflow',
        challenge: 'Support processes were inconsistent, with response times ranging from 2 to 24 hours depending on the agent. CSAT scores fluctuated heavily due to subjective ticket tagging and manual routing errors, which consumed 30% of the team\'s capacity.',
        solution: 'Introduced an AI-assisted triage system using Python and OpenAI. The solution automatically classifies incoming tickets with 92% accuracy, suggests draft responses based on historical best practices, and routes complex issues to specific specialists, keeping humans in the loop for final approval.',
        impact: [
            'Reduced First Response Time (FRT) by 65% (from 4h to 1.2h)',
            'Standardized ticket categorization, reducing misrouting by 80%',
            'Freed up 30% of support agent capacity for complex Tier-2 issues',
            'Stabilized CSAT scores above 4.8/5.0'
        ],
        techStack: ['OpenAI', 'n8n', 'Python', 'Zendesk', 'Vector DB'],
        category: 'AI Automation'
    },
    {
        slug: 'process-stabilization-first',
        title: 'Why We Didn’t Automate First — And Why That Worked Better',
        subtitle: 'Process Stabilization Before Automation',
        challenge: 'A client requested full automation for a fulfillment process that had changed 4 times in 2 months. The lack of documented standards and clear ownership meant that any automation built would have broken within weeks, wasting significant budget.',
        solution: 'We paused the build and implemented a "Documentation-First" framework. We mapped 12 core Standard Operating Procedures (SOPs), defined clear role ownership, and ran the process manually for 4 weeks to validate stability before writing a single line of code.',
        impact: [
            'Prevented an estimated $15k+ in wasted development spend',
            'Established a process baseline that allowed for 2x volume scaling',
            'Reduced role ambiguity, cutting internal meeting time by 25%',
            'Created a "ready-to-automate" foundation for Phase 2'
        ],
        techStack: ['Process Mapping', 'Documentation', 'SOPs', 'Consulting'],
        category: 'Consulting'
    },
    {
        slug: 'connecting-disconnected-tools',
        title: 'Connecting Disconnected Tools Into a Single Operational System',
        subtitle: 'Multi-Tool Integration System',
        challenge: 'Critical customer data was siloed across CRM, Billing, and Project Management tools. Staff manually copied data between platforms, causing a 3-day lag in reporting and frequent sync errors that frustrated the sales team.',
        solution: 'Architected a lightweight, bi-directional integration layer using TypeScript and Node.js. The system listens for real-time webhooks from all platforms, normalizes the data schema, and ensures a "Single Source of Truth" across the entire tech stack.',
        impact: [
            'Eliminated 100% of manual data entry between Sales and Ops',
            'Enabled real-time dashboards, reducing reporting latency from 1 week to 0 seconds',
            'Reduced data sync errors to near-zero (<0.01%)',
            'Saved the team ~10 hours/week in data reconciliation'
        ],
        techStack: ['n8n', 'TypeScript', 'REST APIs', 'Postgres', 'Node.js'],
        category: 'Integration'
    }
];
