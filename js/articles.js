// articles.js - Substack article data for Writing Galaxy constellation

(function() {
    'use strict';

    // Article theme configuration (sub-clusters within Writing Galaxy)
    window.ARTICLE_THEMES = {
        education: {
            displayName: 'Education & Teaching',
            color: '#4FC3F7',  // Same blue as Education Galaxy for visual connection
            description: 'AI-powered teaching tools and classroom transformation'
        },
        collaboration: {
            displayName: 'AI-Human Collaboration',
            color: '#AB47BC',  // Purple like AI Agent Nebula
            description: 'The dance between human intent and AI execution'
        },
        building: {
            displayName: 'Technical Building',
            color: '#FFA726',  // Orange like Web App Supernova
            description: 'Shipping products with AI assistance'
        },
        meta: {
            displayName: 'Meta & Publication',
            color: '#66BB6A',  // Green like Research Cluster
            description: 'Reflections on the AI-human creative process'
        },
        research: {
            displayName: 'Research & Ideas',
            color: '#EF5350',  // Red like Developer Tools
            description: 'Interdisciplinary explorations and analysis'
        }
    };

    // Writing constellation configuration
    window.CONSTELLATIONS.writing = {
        displayName: 'Writing Galaxy',
        color: '#FFD700',  // Gold - distinct from all other constellations
        description: '20 Substack articles exploring AI-augmented learning, building, and collaboration'
    };

    // Article data - 20 Substack articles from 2025
    window.ARTICLES = [
        // Education & Teaching
        {
            title: 'Teaching <Database Management> in the Age of AI Assistants',
            slug: 'teaching-database-management',
            constellation: 'writing',
            theme: 'education',
            substack_url: 'https://chatwithgpt.substack.com/p/teaching-database-management-in-the',
            publish_date: '2025-12-23',
            description: 'How Claude Code transforms course management from clicking through LMS menus to conversational collaboration—and why that matters for students learning to work alongside AI.',
            word_count: 2100,
            linked_repos: ['canvas-mcp', 'database-management'],
            concepts: ['claude-code', 'canvas', 'mcp', 'teaching']
        },
        {
            title: 'Context Engineering in Action: From Medium Article to Sales Database Teaching Tool',
            slug: 'context-engineering-in-action',
            constellation: 'writing',
            theme: 'education',
            substack_url: 'https://chatwithgpt.substack.com/p/context-engineering-in-action-from',
            publish_date: '2025-09-25',
            description: 'How Claude Desktop\'s project context transformed a generic SQL tutorial into domain-specific educational gold.',
            word_count: 1800,
            linked_repos: [],
            concepts: ['context-engineering', 'sql', 'teaching']
        },
        {
            title: 'Upgraded, Automated, Delivered: A Canvas Grading Sprint',
            slug: 'canvas-grading-sprint',
            constellation: 'writing',
            theme: 'education',
            substack_url: 'https://chatwithgpt.substack.com/p/upgraded-automated-delivered-a-canvas',
            publish_date: '2025-09-16',
            description: 'Automating the most tedious part of teaching with AI assistance.',
            word_count: 1500,
            linked_repos: ['canvas-mcp'],
            concepts: ['canvas', 'grading', 'automation']
        },
        {
            title: 'Three Months of Canvas MCP Evolution: A Technical Journey',
            slug: 'canvas-mcp-evolution',
            constellation: 'writing',
            theme: 'education',
            substack_url: 'https://chatwithgpt.substack.com/p/three-months-of-canvas-mcp-evolution',
            publish_date: '2025-09-15',
            description: 'AI reflection on educational technology development cycles.',
            word_count: 2200,
            linked_repos: ['canvas-mcp'],
            concepts: ['mcp', 'canvas', 'evolution']
        },
        {
            title: 'Analyzing Course Discussions Using AI',
            slug: 'analyzing-discussions',
            constellation: 'writing',
            theme: 'education',
            substack_url: 'https://chatwithgpt.substack.com/p/analyzing-course-discussions-using',
            publish_date: '2025-08-16',
            description: 'Teaching data storytelling in a strategic brand communication degree program, augmented by AI analysis.',
            word_count: 1600,
            linked_repos: [],
            concepts: ['teaching', 'discussion', 'analysis']
        },
        {
            title: 'Beyond ChatGPT: How AI Transformed My Classroom Into a Living Laboratory',
            slug: 'beyond-chatgpt',
            constellation: 'writing',
            theme: 'education',
            substack_url: 'https://chatwithgpt.substack.com/p/beyond-chatgpt-how-ai-transformed',
            publish_date: '2025-06-19',
            description: 'How 22 student forum posts became a foundation for an experiment in AI\'s educational potential.',
            word_count: 2400,
            linked_repos: ['intelligent-textbooks'],
            concepts: ['teaching', 'classroom', 'transformation']
        },
        {
            title: 'Rethinking Online Learning in an AI-Saturated World',
            slug: 'rethinking-online-learning',
            constellation: 'writing',
            theme: 'education',
            substack_url: 'https://chatwithgpt.substack.com/p/rethinking-online-learning-in-an',
            publish_date: '2025-05-10',
            description: 'Mentorship + Formative Assessment: one possible future of online education.',
            word_count: 1900,
            linked_repos: [],
            concepts: ['online-learning', 'mentorship', 'assessment']
        },

        // AI-Human Collaboration
        {
            title: 'I Taught Claude a Skill. You Can Too',
            slug: 'taught-claude-skill',
            constellation: 'writing',
            theme: 'collaboration',
            substack_url: 'https://chatwithgpt.substack.com/p/i-taught-claude-a-skill-you-can-too',
            publish_date: '2025-12-19',
            description: 'How a human\'s patience and an AI\'s persistence turned basic shapes into sunset skylines.',
            word_count: 2000,
            linked_repos: [],
            concepts: ['skills', 'tldraw', 'collaboration']
        },
        {
            title: 'Research at Machine Speed: Compiling 150+ Sources in 11 Hours',
            slug: 'research-machine-speed',
            constellation: 'writing',
            theme: 'collaboration',
            substack_url: 'https://chatwithgpt.substack.com/p/research-at-machine-speed-compiling',
            publish_date: '2025-12-11',
            description: 'How a conversation about AI usage became a comprehensive research repository.',
            word_count: 2300,
            linked_repos: ['ai-impact'],
            concepts: ['research', 'speed', 'compilation']
        },
        {
            title: 'Skills Creating Skills: When AI Becomes Your Knowledge Architect',
            slug: 'skills-creating-skills',
            constellation: 'writing',
            theme: 'collaboration',
            substack_url: 'https://chatwithgpt.substack.com/p/skills-creating-skills-when-ai-becomes',
            publish_date: '2025-11-07',
            description: 'A Meta-Journey in Systematizing Educational Expertise.',
            word_count: 2100,
            linked_repos: [],
            concepts: ['skills', 'meta', 'systematization']
        },
        {
            title: 'The AI Memory Problem: When Your Team\'s Coding Assistants Don\'t Talk to Each Other',
            slug: 'ai-memory-problem',
            constellation: 'writing',
            theme: 'collaboration',
            substack_url: 'https://chatwithgpt.substack.com/p/the-ai-memory-problem-when-your-teams',
            publish_date: '2025-06-30',
            description: 'Working on AgentLab, a multi-agent AI system for educational simulations, and discovering the challenges of distributed AI context.',
            word_count: 1800,
            linked_repos: ['AgentLab'],
            concepts: ['memory', 'agents', 'collaboration']
        },
        {
            title: 'From Announcement to Production: Building in Real-Time with AI',
            slug: 'announcement-to-production',
            constellation: 'writing',
            theme: 'collaboration',
            substack_url: 'https://chatwithgpt.substack.com/p/from-announcement-to-production-building',
            publish_date: '2025-06-29',
            description: 'The story of turning a 3,000-line MCP server into a desktop extension in 2.5 hours, then scaling it further.',
            word_count: 2500,
            linked_repos: ['canvas-mcp'],
            concepts: ['speed', 'building', 'mcp']
        },
        {
            title: 'When Claude Code Becomes Your Co-Developer: Building a Canvas LMS Tool',
            slug: 'claude-code-codeveloper',
            constellation: 'writing',
            theme: 'collaboration',
            substack_url: 'https://chatwithgpt.substack.com/p/when-claude-code-becomes-your-codeveloper',
            publish_date: '2025-06-20',
            description: 'A 4-month journey from "I hate clicking through Canvas" to "Holy sh*t, Claude just wrote 3,000 lines of code."',
            word_count: 2800,
            linked_repos: ['canvas-mcp'],
            concepts: ['claude-code', 'canvas', 'co-development']
        },

        // Technical Building
        {
            title: 'Shipping a 800+ Project Explorer in Hours',
            slug: 'shipping-project-explorer',
            constellation: 'writing',
            theme: 'building',
            substack_url: 'https://chatwithgpt.substack.com/p/shipping-a-800-project-explorer-in',
            publish_date: '2025-09-13',
            description: 'Going bananas with rapid AI-assisted development.',
            word_count: 1400,
            linked_repos: ['nano-hack'],
            concepts: ['shipping', 'speed', 'explorer']
        },
        {
            title: 'Context Engineering is the New Prompt Engineering',
            slug: 'context-engineering',
            constellation: 'writing',
            theme: 'building',
            substack_url: 'https://chatwithgpt.substack.com/p/context-engineering-is-the-new-prompt',
            publish_date: '2025-08-18',
            description: 'Over the past few months, a new term has started to gain traction in the world of AI: context engineering.',
            word_count: 2000,
            linked_repos: [],
            concepts: ['context-engineering', 'prompts', 'paradigm-shift']
        },

        // Meta & Publication
        {
            title: 'Launching "The Hybrid Builder": When AI Becomes Your Creative Partner',
            slug: 'launching-hybrid-builder',
            constellation: 'writing',
            theme: 'meta',
            substack_url: 'https://chatwithgpt.substack.com/p/launching-the-hybrid-builder-when',
            publish_date: '2025-06-27',
            description: 'Prompts by Vishal Sachdev and writing by Claude Code.',
            word_count: 1200,
            linked_repos: [],
            concepts: ['launch', 'hybrid-builder', 'creative']
        },
        {
            title: 'Join My New Subscriber Chat',
            slug: 'subscriber-chat',
            constellation: 'writing',
            theme: 'meta',
            substack_url: 'https://chatwithgpt.substack.com/p/join-my-new-subscriber-chat',
            publish_date: '2025-03-18',
            description: 'A private space for us to converse and connect.',
            word_count: 400,
            linked_repos: [],
            concepts: ['community', 'chat']
        },
        {
            title: 'Build It and They Will Learn',
            slug: 'build-and-learn',
            constellation: 'writing',
            theme: 'meta',
            substack_url: 'https://chatwithgpt.substack.com/p/build-it-and-they-will-learn',
            publish_date: '2025-03-17',
            description: 'Vibe Coding - the philosophy of learning through building.',
            word_count: 1000,
            linked_repos: [],
            concepts: ['vibe-coding', 'learning', 'building']
        },

        // Research & Ideas
        {
            title: 'Connecting the Dots with Grok: AI-Augmented Interdisciplinary Research',
            slug: 'connecting-dots-grok',
            constellation: 'writing',
            theme: 'research',
            substack_url: 'https://chatwithgpt.substack.com/p/connecting-the-dots-with-grok-a-case',
            publish_date: '2025-12-20',
            description: 'From embryo gastrulation to multi-agent swarms — how one focal paper snowballed into a mental model for learning, teaching, and building.',
            word_count: 2600,
            linked_repos: ['venturebot', 'AgentLab'],
            concepts: ['collective-intelligence', 'interdisciplinary', 'grok']
        },
        {
            title: 'Can You Profitably Own a Waymo?',
            slug: 'waymo-profitability',
            constellation: 'writing',
            theme: 'research',
            substack_url: 'https://chatwithgpt.substack.com/p/can-you-profitably-own-a-waymo',
            publish_date: '2025-04-27',
            description: 'And learn using AI - an exploration of autonomous vehicle economics.',
            word_count: 1500,
            linked_repos: ['waymo-investment-calculator'],
            concepts: ['waymo', 'economics', 'analysis']
        }
    ];

    console.log(`Loaded ${window.ARTICLES.length} articles across ${Object.keys(window.ARTICLE_THEMES).length} themes`);

})();
