// data.js - Repository data and constellation configuration

(function() {
    'use strict';

    // Constellation theme configuration
    window.CONSTELLATIONS = {
        education: {
            displayName: 'Education Galaxy',
            color: '#4FC3F7',
            description: 'AI-powered learning tools and educational technology'
        },
        agents: {
            displayName: 'AI Agent Nebula',
            color: '#AB47BC',
            description: 'Intelligent agents and conversational AI experiments'
        },
        research: {
            displayName: 'Research Cluster',
            color: '#66BB6A',
            description: 'Academic research, economic analysis, and curriculum design'
        },
        webapps: {
            displayName: 'Web App Supernova',
            color: '#FFA726',
            description: 'Full-stack applications solving real problems'
        },
        tools: {
            displayName: 'Developer Tools',
            color: '#EF5350',
            description: 'Meta-level tooling and AI visualizations'
        }
    };

    // Repository data collected from local git repos
    window.REPOS = [
        // Education Galaxy
        {
            name: 'Intelligent Textbooks',
            slug: 'intelligent-textbooks',
            constellation: 'education',
            github_url: 'https://github.com/vishalsachdev/intelligent-textbooks',
            commits_2025: 169,
            first_commit: '2025-01-07',
            last_commit: '2025-11-22',
            ai_assisted: true,
            description: 'Building AI-powered interactive textbooks that adapt to student learning patterns and provide personalized educational experiences.'
        },
        {
            name: 'Canvas MCP',
            slug: 'canvas-mcp',
            constellation: 'education',
            github_url: 'https://github.com/vishalsachdev/canvas-mcp',
            commits_2025: 113,
            first_commit: '2025-02-27',
            last_commit: '2025-12-25',
            ai_assisted: true,
            description: 'Model Context Protocol server enabling Claude to interact with Canvas LMS - manage courses, assignments, and student data.'
        },
        {
            name: 'BADM554 API',
            slug: 'badm554-api',
            constellation: 'education',
            github_url: 'https://github.com/BADM554/brewery-api',
            commits_2025: 27,
            first_commit: '2025-10-06',
            last_commit: '2025-10-09',
            ai_assisted: true,
            description: 'Self-hosted Open Brewery DB API for student use. Contains 8,925 breweries from around the world for teaching API concepts.'
        },
        {
            name: 'Nano Hack',
            slug: 'nano-hack',
            constellation: 'education',
            github_url: 'https://github.com/vishalsachdev/nano-hack',
            commits_2025: 19,
            first_commit: '2025-09-13',
            last_commit: '2025-12-25',
            ai_assisted: true,
            description: 'A semantic search tool to help students discover relevant projects from the Nano Banana Hackathon project showcase.'
        },

        // AI Agent Nebula
        {
            name: 'VentureBot',
            slug: 'venturebot',
            constellation: 'agents',
            github_url: 'https://github.com/gies-ai-experiments/VentureBot',
            commits_2025: 242,
            first_commit: '2025-04-19',
            last_commit: '2025-12-19',
            ai_assisted: true,
            description: 'Stage-based, multi-agent entrepreneurship coaching app powered by CrewAI. Guides founders through ideation to launch.'
        },
        {
            name: 'Claude Interviewer',
            slug: 'claude-interviewer-clone',
            constellation: 'agents',
            github_url: 'https://github.com/vishalsachdev/claude-interviewer-clone',
            commits_2025: 13,
            first_commit: '2025-12-04',
            last_commit: '2025-12-05',
            ai_assisted: true,
            description: 'Open-source interview bot for gathering perspectives on AI use in education. Users select their role and share experiences.'
        },
        {
            name: 'EntreBot',
            slug: 'entrebot',
            constellation: 'agents',
            github_url: 'https://github.com/vishalsachdev/entrebot',
            commits_2025: 16,
            first_commit: '2025-11-17',
            last_commit: '2025-12-01',
            ai_assisted: true,
            description: 'AI-powered entrepreneurship coaching platform backend built with Node.js, Express, Supabase, and OpenAI.'
        },
        {
            name: 'AgentLab',
            slug: 'AgentLab',
            constellation: 'agents',
            github_url: 'https://github.com/vishalsachdev/AgentLab',
            commits_2025: 13,
            first_commit: '2025-07-03',
            last_commit: '2025-08-19',
            ai_assisted: true,
            description: 'Student-led research at Gies College of Business exploring how intelligent agent teams can transform business workflows.'
        },

        // Research Cluster
        {
            name: 'NBER AI Explorer',
            slug: 'nber',
            constellation: 'research',
            github_url: 'https://github.com/vishalsachdev/nber',
            commits_2025: 66,
            first_commit: '2025-09-30',
            last_commit: '2025-10-06',
            ai_assisted: true,
            description: 'Interactive AI-powered tool for exploring presentations from the NBER Economics of Transformative AI workshop.'
        },
        {
            name: 'A2I Curriculum',
            slug: 'a2i-curriculum',
            constellation: 'research',
            github_url: 'https://github.com/vishalsachdev/a2i-curriculum',
            commits_2025: 65,
            first_commit: '2025-11-01',
            last_commit: '2025-11-12',
            ai_assisted: true,
            description: 'Applied AI for Impact (A²I) curriculum proposal - designing the future of AI education in business schools.'
        },
        {
            name: 'GDPVal',
            slug: 'gdpval',
            constellation: 'research',
            github_url: 'https://github.com/vishalsachdev/gdpval',
            commits_2025: 28,
            first_commit: '2025-09-28',
            last_commit: '2025-11-28',
            ai_assisted: true,
            description: 'Assignment AI Tester - evaluating how AI models perform on educational assessment tasks.'
        },
        {
            name: 'AI Taskforce',
            slug: 'ai-taskforce',
            constellation: 'research',
            github_url: 'https://github.com/vishalsachdev/ai-taskforce',
            commits_2025: 17,
            first_commit: '2025-11-23',
            last_commit: '2025-11-30',
            ai_assisted: true,
            description: 'Campus AI Curriculum Task Force research - analyzing AI integration across university programs.'
        },
        {
            name: 'Anthropic Economic Index',
            slug: 'anthropic-economic-index',
            constellation: 'research',
            github_url: 'https://github.com/vishalsachdev/aei',
            commits_2025: 12,
            first_commit: '2025-09-17',
            last_commit: '2025-09-25',
            ai_assisted: true,
            description: 'Interactive materials for exploring the Anthropic Economic Index (AEI) v3 data on AI economic impacts.'
        },
        {
            name: 'AI Impact Research',
            slug: 'ai-impact',
            constellation: 'research',
            github_url: 'https://github.com/vishalsachdev/ai-impact',
            commits_2025: 11,
            first_commit: '2025-12-10',
            last_commit: '2025-12-11',
            ai_assisted: true,
            description: 'Comprehensive research on AI from frontier labs: usage patterns, capabilities, trajectories, and implications.'
        },

        // Web App Supernova
        {
            name: 'TLDW',
            slug: 'tldw',
            constellation: 'webapps',
            github_url: 'https://github.com/vishalsachdev/tldw',
            commits_2025: 279,
            first_commit: '2025-08-27',
            last_commit: '2025-10-21',
            ai_assisted: true,
            description: 'TLDW turns long-form YouTube videos into a structured learning workspace. Paste a URL and get AI-generated summaries.'
        },
        {
            name: 'IlliniHunt',
            slug: 'illinihunt',
            constellation: 'webapps',
            github_url: 'https://github.com/vishalsachdev/illinihunt',
            commits_2025: 230,
            first_commit: '2025-07-27',
            last_commit: '2025-12-11',
            ai_assisted: true,
            description: 'Campus-wide scavenger hunt platform for UIUC students. Interactive challenges, team competitions, and real-time leaderboards.'
        },
        {
            name: 'MakerLab',
            slug: 'makerlab',
            constellation: 'webapps',
            github_url: 'https://github.com/vishalsachdev/makerlab',
            commits_2025: 94,
            first_commit: '2025-11-17',
            last_commit: '2025-12-07',
            ai_assisted: true,
            description: 'Complete replica of the Illinois MakerLab website built with static HTML, CSS, and JavaScript.'
        },
        {
            name: 'LearnByEmail',
            slug: 'LearnByEmail',
            constellation: 'webapps',
            github_url: 'https://github.com/vishalsachdev/LearnByEmail',
            commits_2025: 86,
            first_commit: '2025-03-02',
            last_commit: '2025-03-29',
            ai_assisted: true,
            description: 'Educational email subscription service delivering personalized, AI-generated educational content to your inbox.'
        },

        // Developer Tools
        {
            name: 'LLMs.txt',
            slug: 'llms-txt',
            constellation: 'tools',
            github_url: 'https://github.com/vishalsachdev/llms-text',
            commits_2025: 7,
            first_commit: '2025-04-13',
            last_commit: '2025-04-13',
            ai_assisted: true,
            description: 'Generator for llms.txt files - making websites AI-readable with structured metadata for large language models.'
        },
        {
            name: 'Claude Soul Viz',
            slug: 'claude-soul-viz',
            constellation: 'tools',
            github_url: 'https://github.com/vishalsachdev/claude-soul-viz',
            commits_2025: 2,
            first_commit: '2025-12-05',
            last_commit: '2025-12-08',
            ai_assisted: true,
            description: 'Desktop-first visualization of the Claude Soul document with three views: gravitational, geological, and network perspectives.'
        }
    ];

    console.log(`Loaded ${window.REPOS.length} repos across ${Object.keys(window.CONSTELLATIONS).length} constellations`);

})();
