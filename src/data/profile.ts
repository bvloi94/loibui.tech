import type { ProfileData } from '../types/career';

export const profileData: ProfileData = {
  name: 'Loi Van Bui',
  handle: '@loibui',
  domain: 'loibui.tech',
  roleTitle: 'Tech Lead & Senior Systems Architect',
  shortBio: 'Architecting resilient distributed systems, high-concurrency cloud backends, and elegant developer-centric interfaces. Over 8+ years turning complex technical challenges into production-grade reality.',
  detailedBio: [
    'I am a passionate software engineer and technical leader specialized in building distributed cloud infrastructures, high-throughput backend services, and scalable web applications.',
    'Throughout my career journey, I have progressed from low-level algorithms and full-stack development to orchestrating microservice topologies, event-driven pipelines, and developer platforms serving millions of users.',
    'I believe that great software is born at the intersection of rigorous systems design, clean TypeScript craft, and relentless empathy for end-users and fellow engineers.'
  ],
  avatar: '/avatar.jpg',
  availability: 'Available for Tech Advisory & Strategic Roles',
  location: 'Ho Chi Minh City, Vietnam (UTC+7) / Remote Worldwide',
  email: 'contact@loibui.tech',
  github: 'https://github.com/kura-hashed',
  linkedin: 'https://linkedin.com/in/loibui',
  twitter: 'https://x.com/loibui_tech',
  stats: [
    {
      label: 'Years in Tech',
      value: '8+',
      sub: 'Continuous growth & craft',
      icon: 'Award'
    },
    {
      label: 'Production Uptime',
      value: '99.99%',
      sub: 'High availability systems',
      icon: 'ShieldCheck'
    },
    {
      label: 'Throughput Scaled',
      value: '25M+',
      sub: 'Daily requests handled',
      icon: 'Zap'
    },
    {
      label: 'Engineers Mentored',
      value: '20+',
      sub: 'Fostering engineering culture',
      icon: 'Users'
    }
  ],
  roadmap: [
    {
      phase: 'Phase 01',
      period: '2016 — 2018',
      title: 'Foundations & Exploration',
      desc: 'Mastered CS fundamentals, low-level data structures, and web technologies.'
    },
    {
      phase: 'Phase 02',
      period: '2018 — 2021',
      title: 'Full-Stack Velocity',
      desc: 'Built production SaaS platforms with modern TypeScript, Node.js, and React.'
    },
    {
      phase: 'Phase 03',
      period: '2021 — 2024',
      title: 'Distributed Systems & Cloud',
      desc: 'Spearheaded Kubernetes migrations, event-driven streaming, and database scaling.'
    },
    {
      phase: 'Phase 04',
      period: '2024 — Present',
      title: 'Tech Leadership & AI Systems',
      desc: 'Leading multi-disciplinary teams, autonomous agent workflows, and system resiliency.',
      active: true
    }
  ],
  milestones: [
    {
      id: 'staff-lead-2024',
      role: 'Tech Lead & Staff Systems Architect',
      company: 'OmniCloud Technologies',
      companyUrl: 'https://loibui.tech',
      period: 'Jan 2024 — Present',
      startYear: 2024,
      endYear: 'Present',
      location: 'Remote / Hybrid',
      type: 'Lead',
      category: ['leadership', 'architecture', 'engineering'],
      summary: 'Steering the technical vision, architectural roadmap, and cross-functional engineering teams for the next-generation distributed observability and cloud runtime platform.',
      keyAchievements: [
        'Designed and spearheaded a distributed event streaming mesh processing over 25M daily transactions with sub-40ms P99 latency.',
        'Established engineering standards, automated CI/CD quality gates, and code review practices across 4 squad teams (18+ engineers).',
        'Architected an autonomous AI agent orchestration workbench that accelerated internal developer onboarding and release velocity by 60%.',
        'Pioneered disaster recovery and multi-region failover protocols, achieving flawless 99.99% production uptime SLA.'
      ],
      technologies: ['TypeScript', 'Go', 'Kubernetes', 'Apache Kafka', 'gRPC', 'Docker', 'PostgreSQL', 'Terraform', 'Next.js'],
      metrics: [
        { label: 'Uptime SLA', value: '99.99%' },
        { label: 'Daily Events', value: '25M+' },
        { label: 'P99 Latency', value: '<40ms' }
      ],
      highlight: true,
      featured: true
    },
    {
      id: 'senior-engineer-2022',
      role: 'Senior Full-Stack & Cloud Engineer',
      company: 'Nexus Scale Labs',
      companyUrl: 'https://loibui.tech',
      period: 'Mar 2022 — Dec 2023',
      startYear: 2022,
      endYear: 2023,
      location: 'Ho Chi Minh City, Vietnam',
      type: 'Full-time',
      category: ['engineering', 'architecture'],
      summary: 'Architected high-throughput microservices and cloud-native backend engines while leading front-end performance modernization using TypeScript and React.',
      keyAchievements: [
        'Executed zero-downtime database partition and sharding migration for 2.2 million active accounts.',
        'Optimized AWS cloud infrastructure spend by 35% through custom horizontal pod autoscaling algorithms and caching strategies.',
        'Engineered real-time WebSocket communication service supporting 80,000 concurrent active socket connections.',
        'Authored internal TypeScript core component library and design system adopted across 5 product teams.'
      ],
      technologies: ['TypeScript', 'Node.js', 'React', 'AWS (EKS, RDS)', 'Redis', 'GraphQL', 'PostgreSQL', 'TailwindCSS'],
      metrics: [
        { label: 'Cloud Cost Cut', value: '-35%' },
        { label: 'Concurrent Sockets', value: '80K' },
        { label: 'Lighthouse Score', value: '98/100' }
      ],
      highlight: true
    },
    {
      id: 'software-engineer-2020',
      role: 'Full-Stack Software Engineer',
      company: 'Apex Digital Solutions',
      companyUrl: 'https://loibui.tech',
      period: 'Jul 2020 — Feb 2022',
      startYear: 2020,
      endYear: 2022,
      location: 'Ho Chi Minh City, Vietnam',
      type: 'Full-time',
      category: ['engineering'],
      summary: 'Delivered customer-facing enterprise SaaS modules, complex data visualization dashboards, and resilient RESTful microservices.',
      keyAchievements: [
        'Built dynamic real-time reporting canvas using WebGL and Canvas API capable of rendering 100K+ data points without dropped frames.',
        'Streamlined build pipeline from 18 minutes down to 3.5 minutes using esbuild, Vite, and parallelized Docker caching.',
        'Partnered with product managers and UX designers to release 12 major enterprise features on schedule.',
        'Conducted technical interviews and mentored 5 junior engineers through career transitions.'
      ],
      technologies: ['TypeScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Docker', 'Jest', 'GitLab CI'],
      metrics: [
        { label: 'Build Time', value: '-78%' },
        { label: 'Features Shipped', value: '12 Major' },
        { label: 'Test Coverage', value: '88%' }
      ]
    },
    {
      id: 'founding-dev-2018',
      role: 'Software Engineer & Systems Specialist',
      company: 'Vanguard Interactive',
      companyUrl: 'https://loibui.tech',
      period: 'Aug 2018 — Jun 2020',
      startYear: 2018,
      endYear: 2020,
      location: 'Ho Chi Minh City, Vietnam',
      type: 'Full-time',
      category: ['engineering', 'milestones'],
      summary: 'Focused on backend API reliability, relational database optimization, and implementing scalable microservices from the ground up.',
      keyAchievements: [
        'Transformed legacy monolithic cron batch jobs into event-driven asynchronous queues using RabbitMQ.',
        'Constructed developer portal and comprehensive API documentation with Swagger/OpenAPI, cutting partner integration time by 50%.',
        'Implemented rigorous automated unit, integration, and end-to-end test suites across the core payments pipeline.'
      ],
      technologies: ['JavaScript/TypeScript', 'Node.js', 'MySQL', 'RabbitMQ', 'Redis', 'Linux/Nginx'],
      metrics: [
        { label: 'Integration Speed', value: '+50%' },
        { label: 'API Downtime', value: '0.01%' }
      ]
    },
    {
      id: 'early-foundations-2016',
      role: 'Junior Engineer & Computer Science Graduate',
      company: 'Tech Academy & University Labs',
      companyUrl: 'https://loibui.tech',
      period: 'Sep 2016 — Jul 2018',
      startYear: 2016,
      endYear: 2018,
      location: 'Vietnam',
      type: 'Full-time',
      category: ['milestones'],
      summary: 'Graduated with honors in Computer Science. Deep-dived into operating systems, distributed networking protocols, and modern web application development.',
      keyAchievements: [
        'Developed open-source tooling for automated algorithmic benchmarking with 500+ GitHub stars.',
        'Won 1st prize in University Hackathon for building an emergency response dispatch application.',
        'Co-authored technical research paper on distributed hash tables and consensus algorithms.'
      ],
      technologies: ['C/C++', 'Python', 'JavaScript', 'SQL', 'Git', 'Linux'],
      metrics: [
        { label: 'Hackathon', value: '1st Place' },
        { label: 'OSS Stars', value: '500+' }
      ]
    }
  ],
  projects: [
    {
      id: 'novaflow-mesh',
      title: 'NovaFlow Observability Mesh',
      tagline: 'Distributed microservices telemetry & dynamic topology visualizer',
      description: 'An enterprise-grade observability platform designed to monitor microservice dependency graphs, traffic latencies, and service health states in real time with sub-second telemetry propagation.',
      image: '/projects/cloud_arch.jpg',
      tags: ['TypeScript', 'Go', 'Kubernetes', 'gRPC', 'WebSockets', 'OpenTelemetry'],
      metrics: 'Processes 25M+ events/day • 98.4% uptime • Sub-40ms P99 latency',
      period: '2024 — Present',
      role: 'Lead Architect',
      architectureBreakdown: [
        { component: 'Telemetry Ingestion Engine', tech: 'Go & gRPC', purpose: 'Handles high-throughput concurrent agent telemetry with minimal CPU overhead.' },
        { component: 'Topology Engine', tech: 'TypeScript & WebGL', purpose: 'Computes real-time dynamic node graph layout with smooth physics animations.' },
        { component: 'Storage Layer', tech: 'TimescaleDB & Redis', purpose: 'Efficient time-series aggregation and low-latency cache queries.' }
      ],
      liveUrl: 'https://loibui.tech',
      githubUrl: 'https://github.com/kura-hashed',
      featured: true
    },
    {
      id: 'catalyst-agentic',
      title: 'Catalyst-X Agentic Studio',
      tagline: 'Multi-agent AI code generation & autonomous workflow orchestrator',
      description: 'An integrated developer environment that chains autonomous AI agents together to execute multi-step software engineering workflows—from prompt ingestion to analysis, code synthesis, and automated test execution.',
      image: '/projects/ai_agent.jpg',
      tags: ['TypeScript', 'Next.js', 'Python', 'LLM Agents', 'Docker', 'WebAssembly'],
      metrics: '60% faster task completion • Multi-model support • Sandboxed execution',
      period: '2023 — 2024',
      role: 'Principal Engineer',
      architectureBreakdown: [
        { component: 'Orchestrator Core', tech: 'TypeScript / State Machines', purpose: 'Deterministic agent coordination and cyclic dependency resolution.' },
        { component: 'Code Sandbox Runtime', tech: 'Docker & WebAssembly', purpose: 'Isolated evaluation of generated code snippets in secure ephemeral containers.' },
        { component: 'Interactive Studio UI', tech: 'React & Monaco Editor', purpose: 'Real-time diff visualizer, conversational prompt inspector, and node debugger.' }
      ],
      liveUrl: 'https://loibui.tech',
      githubUrl: 'https://github.com/kura-hashed',
      featured: true
    },
    {
      id: 'quantum-trade',
      title: 'QuantumTrade Analytics Desk',
      tagline: 'Institutional-grade high-frequency trading & market depth platform',
      description: 'A ultra-low latency market analytics engine featuring real-time candlestick charts, order book depth visualization, and sub-5ms trade execution metric telemetry.',
      image: '/projects/fintech_engine.jpg',
      tags: ['TypeScript', 'Rust', 'WebSockets', 'Canvas API', 'Redis Stream', 'PostgreSQL'],
      metrics: '2.15ms network latency • 80K concurrent users • 99.98% reliability',
      period: '2022 — 2023',
      role: 'Senior Systems Engineer',
      architectureBreakdown: [
        { component: 'Order Book Feed', tech: 'Rust & WebSockets', purpose: 'Direct binary protocol parsing with microsecond order book updates.' },
        { component: 'High-Speed Charting Engine', tech: 'HTML5 Canvas & WebGL', purpose: 'Smooth 120fps candlestick rendering with 50+ technical indicators.' },
        { component: 'Risk & Execution Gate', tech: 'TypeScript & Redis Streams', purpose: 'Pre-trade margin verification and order routing within 3.4ms.' }
      ],
      liveUrl: 'https://loibui.tech',
      githubUrl: 'https://github.com/kura-hashed',
      featured: true
    }
  ],
  skillCategories: [
    {
      title: 'Distributed Systems & Architecture',
      icon: 'Network',
      description: 'Designing fault-tolerant, horizontally scalable cloud systems and event streams.',
      skills: [
        { name: 'Microservices & SOA', level: 95, years: 6, featured: true },
        { name: 'Apache Kafka & Event Streaming', level: 90, years: 5, featured: true },
        { name: 'gRPC & Protocol Buffers', level: 88, years: 4 },
        { name: 'System High Availability / SLAs', level: 92, years: 6, featured: true },
        { name: 'Database Sharding & Partitioning', level: 88, years: 5 }
      ]
    },
    {
      title: 'Core Languages & Runtimes',
      icon: 'Code2',
      description: 'Crafting performant, type-safe, and clean maintainable code across stacks.',
      skills: [
        { name: 'TypeScript', level: 98, years: 7, featured: true },
        { name: 'Node.js / Bun', level: 95, years: 7, featured: true },
        { name: 'Go (Golang)', level: 85, years: 4, featured: true },
        { name: 'Python', level: 82, years: 5 },
        { name: 'SQL & Query Optimization', level: 90, years: 8, featured: true },
        { name: 'Modern CSS / Design Systems', level: 94, years: 8 }
      ]
    },
    {
      title: 'Cloud, Containers & DevOps',
      icon: 'Cloud',
      description: 'Automating continuous deployment pipelines and container orchestration.',
      skills: [
        { name: 'Kubernetes (K8s) & Helm', level: 88, years: 4, featured: true },
        { name: 'Docker & Containerization', level: 95, years: 7, featured: true },
        { name: 'AWS & Multi-Cloud', level: 90, years: 6, featured: true },
        { name: 'Terraform & IaC', level: 84, years: 3 },
        { name: 'Prometheus & Grafana', level: 86, years: 4 },
        { name: 'CI/CD (GitHub Actions, GitLab)', level: 94, years: 6 }
      ]
    },
    {
      title: 'Modern Frontend & Web APIs',
      icon: 'Layers',
      description: 'Building snappy, responsive, and accessible interactive interfaces.',
      skills: [
        { name: 'React & Next.js', level: 96, years: 7, featured: true },
        { name: 'WebSockets & Real-Time Sync', level: 92, years: 5, featured: true },
        { name: 'State Management & Architecture', level: 95, years: 7 },
        { name: 'Web Performance & Core Web Vitals', level: 94, years: 6, featured: true },
        { name: 'Vite & Modern Tooling', level: 92, years: 4 }
      ]
    }
  ],
  philosophies: [
    {
      number: '01',
      title: 'Architect for Simplicity First',
      description: 'Avoid premature complexity. The most resilient architectures are simple, observable, and easy to reason about before scaling horizontally.',
      icon: 'Compass'
    },
    {
      number: '02',
      title: 'Uncompromising Type Safety & Craft',
      description: 'Types are the bedrock of reliable systems and painless refactoring. Strict typing in TypeScript prevents entire classes of runtime errors before they reach production.',
      icon: 'CheckCircle2'
    },
    {
      number: '03',
      title: 'Obsess Over Developer Experience',
      description: 'Empowered engineers move faster. Investing in automated tooling, clean documentation, and fast feedback loops compounds organizational engineering velocity.',
      icon: 'Flame'
    },
    {
      number: '04',
      title: 'Continuous Growth & Pragmatic Innovation',
      description: 'Technology changes rapidly—from monoliths to microservices, and now autonomous AI agents. Stay curious, evaluate technologies pragmatically, and anchor decisions to business value.',
      icon: 'Sparkles'
    }
  ]
};
