import type { ProfileData } from '../types/career';

export const profileData: ProfileData = {
  name: 'Loi Bui',
  handle: '@kura-hashed',
  domain: 'loibui.tech',
  roleTitle: 'Senior Full-Stack Engineer',
  shortBio: 'Senior Full-Stack Engineer with 7+ years of experience building scalable web, mobile, fintech, and mobility platforms. Experienced in designing distributed systems, cloud-native backends, and high-impact products used by thousands of customers.',
  detailedBio: [
    'I am a Senior Full-Stack Engineer with 7+ years of professional experience engineering resilient web and mobile applications, high-throughput microservices, and cloud-native distributed platforms.',
    'My background spans building blockchain intelligence pipelines, scalable fintech super-apps and robo-advisors at Anfin Services, mobility and digital payment infrastructure at Futa Platform, and Apple-featured travel platforms with intelligent recommendation at Tale Technologies.',
    'I have delivered enterprise IoT solutions onsite in Japan for Denso (Internet of Vehicles), and hold a Bachelor of Software Engineering from FPT University on a Full-Tuition Scholarship, preceded by National Programming Olympiad honors.'
  ],
  avatar: '/avatar.jpg',
  availability: 'Available for Full-Stack, Distributed Systems & Strategic Roles',
  location: 'Ho Chi Minh City, Vietnam (UTC+7) / Remote Worldwide',
  email: 'contact@loibui.tech',
  github: 'https://github.com/kura-hashed',
  linkedin: 'https://linkedin.com/in/loibui',
  twitter: 'https://x.com/loibui_tech',
  stats: [
    {
      label: 'Years in Tech',
      value: '7+',
      sub: 'Web, Mobile, Fintech & Cloud',
      icon: 'Award'
    },
    {
      label: 'Pipeline Latency',
      value: '-15%',
      sub: 'Kafka & Elasticsearch streams',
      icon: 'Zap'
    },
    {
      label: 'Payment Success',
      value: '+15%',
      sub: 'MoMo, VNPay, ZaloPay & QR',
      icon: 'ShieldCheck'
    },
    {
      label: 'Apple Featured',
      value: 'Top Tier',
      sub: 'TaleCity Travel Platform',
      icon: 'Sparkles'
    }
  ],
  roadmap: [
    {
      phase: 'Phase 01',
      period: '2012 — 2016',
      title: 'Academic Excellence & Foundations',
      desc: 'Software Engineering at FPT University (Full-Tuition Scholarship) & National Programming Olympiad medalist.'
    },
    {
      phase: 'Phase 02',
      period: '2017 — 2019',
      title: 'Enterprise Software & IoV in Japan',
      desc: 'Engineered automotive IoT gateways and remote vehicle diagnostics onsite at Denso Japan, preceded by FPT Software.'
    },
    {
      phase: 'Phase 03',
      period: '2019 — 2022',
      title: 'Consumer Tech & High-Scale Mobility',
      desc: 'Built Apple-featured TaleCity, and scaled nationwide digital payment & mobility services at Futa Platform.'
    },
    {
      phase: 'Phase 04',
      period: '2023 — Present',
      title: 'Fintech Super-Apps & Blockchain Analytics',
      desc: 'Led robo-advisor and securities trading features at Anfin, followed by real-time blockchain telemetry pipelines.',
      active: true
    }
  ],
  milestones: [
    {
      id: 'blockchain-analytics-2025',
      role: 'Full-Stack Developer',
      company: 'Blockchain Analytics Platform (Remote)',
      companyUrl: 'https://github.com/kura-hashed',
      period: '2025 — Present',
      startYear: 2025,
      endYear: 'Present',
      location: 'Remote',
      type: 'Full-time',
      category: ['engineering', 'architecture', 'leadership'],
      summary: 'Architected and launched a blockchain analytics platform delivering real-time market intelligence, token portfolio tracking, and community-driven insights.',
      keyAchievements: [
        'Designed scalable data pipelines leveraging Apache Kafka and Elasticsearch, reducing data processing latency by 15% and improving data accuracy by 10%.',
        'Delivered high-performance, real-time analytics dashboards that transformed complex on-chain blockchain metrics into clear, actionable business insights.',
        'Engineered responsive web client and asynchronous event streaming architecture for high-frequency market updates.'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'Apache Kafka', 'Elasticsearch', 'Docker', 'WebSockets', 'REST APIs'],
      metrics: [
        { label: 'Latency Cut', value: '-15%' },
        { label: 'Data Accuracy', value: '+10%' },
        { label: 'Processing', value: 'Real-Time' }
      ],
      highlight: true,
      featured: true
    },
    {
      id: 'anfin-fintech-2023',
      role: 'Full-Stack Developer',
      company: 'Anfin Services',
      companyUrl: 'https://anfin.vn',
      period: '2023 — 2024',
      startYear: 2023,
      endYear: 2024,
      location: 'Ho Chi Minh City, Vietnam',
      type: 'Full-time',
      category: ['engineering', 'architecture', 'milestones'],
      summary: 'Built and scaled key features for a leading fintech super-app covering securities investment, savings, and fractional trading products.',
      keyAchievements: [
        'Led end-to-end development of proprietary robo-advisor solutions that enhanced smart portfolio management and algorithmic investment decision-making.',
        'Improved platform scalability and backend performance through cloud infrastructure enhancements and microservices optimization on Google Cloud Platform (GCP).',
        'Delivered seamless, secure financial onboarding and transaction flows across mobile and web interfaces with high reliability.'
      ],
      technologies: ['React Native', 'React', 'Node.js', 'Google Cloud (GCP)', 'PostgreSQL', 'Redis', 'Microservices', 'Docker'],
      metrics: [
        { label: 'Platform', value: 'Fintech Super-App' },
        { label: 'Feature', value: 'Robo-Advisor' },
        { label: 'Cloud', value: 'GCP Native' }
      ],
      highlight: true,
      featured: true
    },
    {
      id: 'futa-mobility-2021',
      role: 'Full-Stack Developer',
      company: 'Futa Platform (Phuong Trang)',
      companyUrl: 'https://futabus.vn',
      period: '2021 — 2022',
      startYear: 2021,
      endYear: 2022,
      location: 'Ho Chi Minh City, Vietnam',
      type: 'Full-time',
      category: ['engineering', 'architecture'],
      summary: 'Developed and scaled core services powering the nationwide mobility, passenger transit, express delivery, and digital payment ecosystems.',
      keyAchievements: [
        'Integrated major digital payment providers including MoMo, VNPay, ZaloPay, and QR Payments, increasing end-to-end transaction success rates by 15%.',
        'Optimized backend architecture and high-throughput transactional APIs to improve system reliability, fault tolerance, and operational efficiency.',
        'Collaborated across cross-functional teams to modernize transit booking workflows handling millions of active travelers.'
      ],
      technologies: ['Node.js', 'React Native', 'Java', 'Payment Gateways (MoMo, VNPay, ZaloPay)', 'MySQL', 'PostgreSQL', 'Microservices'],
      metrics: [
        { label: 'Payment Success', value: '+15%' },
        { label: 'Domain', value: 'Mobility & Logistics' },
        { label: 'Scale', value: 'Nationwide' }
      ],
      highlight: false
    },
    {
      id: 'tale-technologies-2019',
      role: 'Full-Stack Developer',
      company: 'Tale Technologies',
      companyUrl: 'https://github.com/kura-hashed',
      period: '2019 — 2020',
      startYear: 2019,
      endYear: 2020,
      location: 'Ho Chi Minh City, Vietnam',
      type: 'Full-time',
      category: ['engineering', 'milestones'],
      summary: 'Delivered TaleCity, an Apple-featured travel platform, and TalePass, a digital management ecosystem connecting travelers and tour operators.',
      keyAchievements: [
        'Delivered TaleCity, an Apple-featured travel application providing personalized destination recommendations and interactive trip planning experiences.',
        'Built TalePass, a comprehensive digital management platform enabling seamless booking, ticketing, and tour operator workflow management.',
        'Engineered intelligent recommendations, voice recognition, and marketing automation features that drove a 20% increase in platform adoption.'
      ],
      technologies: ['React', 'React Native', 'Node.js', 'Python', 'AWS', 'Voice Recognition', 'MongoDB', 'Appsflyer'],
      metrics: [
        { label: 'App Store', value: 'Apple Featured' },
        { label: 'Adoption Rate', value: '+20%' },
        { label: 'Features', value: 'Voice & AI Recs' }
      ],
      highlight: true
    },
    {
      id: 'denso-japan-2018',
      role: 'Java Developer (Onsite Japan)',
      company: 'Denso Japan',
      companyUrl: 'https://www.denso.com',
      period: '2018 — 2019',
      startYear: 2018,
      endYear: 2019,
      location: 'Japan (Onsite)',
      type: 'Full-time',
      category: ['engineering', 'architecture', 'milestones'],
      summary: 'Engineered core components for next-generation Internet of Vehicles (IoV) automotive platforms, including Over-the-Air (OTA) updates, IoT gateways, and diagnostics.',
      keyAchievements: [
        'Engineered mission-critical components for next-generation Internet of Vehicles (IoV) platforms, including OTA updates, IoT gateways, and remote vehicle diagnostics.',
        'Contributed to strategic smart automotive platform initiatives showcased at major automotive technology exhibitions in Japan.',
        'Developed real-time vehicle telemetry and monitoring capabilities that significantly enhanced fleet visibility and operational safety.'
      ],
      technologies: ['Java', 'OSGi', 'IoT Gateways', 'OTA Firmware Systems', 'Vehicle Telemetry', 'Linux', 'MQTT'],
      metrics: [
        { label: 'Location', value: 'Japan Onsite' },
        { label: 'Domain', value: 'IoV & Connected Cars' },
        { label: 'Impact', value: 'Tech Exhibited' }
      ],
      highlight: false
    },
    {
      id: 'fpt-software-2017',
      role: 'Junior Developer',
      company: 'FPT Software',
      companyUrl: 'https://fptsoftware.com',
      period: '2017 — 2018',
      startYear: 2017,
      endYear: 2018,
      location: 'Vietnam',
      type: 'Full-time',
      category: ['milestones', 'engineering'],
      summary: 'Built foundational software engineering skills, working on enterprise software applications, backend services, and automated CI/CD pipelines.',
      keyAchievements: [
        'Contributed to enterprise web application development adhering to rigorous industry coding standards and Agile methodologies.',
        'Implemented backend APIs, unit test suites, and database queries for client projects.',
        'Participated in automated continuous integration and deployment pipelines.'
      ],
      technologies: ['Java', 'JavaScript', 'SQL', 'Spring Framework', 'Git', 'CI/CD'],
      metrics: [
        { label: 'Role', value: 'Enterprise Dev' },
        { label: 'Foundation', value: 'Agile & CI/CD' }
      ]
    }
  ],
  projects: [
    {
      id: 'blockchain-analytics-platform',
      title: 'Blockchain Market Intelligence & Analytics Platform',
      tagline: 'Real-time on-chain telemetry, portfolio tracking & community market insights',
      description: 'An enterprise blockchain analytics platform that aggregates on-chain data into real-time market intelligence. Features scalable streaming pipelines built with Kafka and Elasticsearch, achieving a 15% reduction in latency and 10% gain in data accuracy.',
      image: '/projects/cloud_arch.jpg',
      tags: ['React', 'Node.js', 'Apache Kafka', 'Elasticsearch', 'Docker', 'WebSockets', 'TypeScript'],
      metrics: '-15% Processing Latency • +10% Data Accuracy • Real-Time Stream',
      period: '2025 — Present',
      role: 'Full-Stack Developer (Remote)',
      architectureBreakdown: [
        { component: 'Streaming Ingestion Pipeline', tech: 'Apache Kafka', purpose: 'Consumes high-frequency blockchain transaction feeds with decoupled event queues.' },
        { component: 'Search & Indexing Engine', tech: 'Elasticsearch', purpose: 'Powers ultra-fast multi-dimensional queries and token metric aggregations.' },
        { component: 'Live Analytics Canvas', tech: 'React & WebSockets', purpose: 'Real-time reactive visual dashboard for portfolio tracking and wallet telemetry.' }
      ],
      liveUrl: 'https://loibui.tech',
      githubUrl: 'https://github.com/kura-hashed',
      featured: true
    },
    {
      id: 'anfin-fintech-superapp',
      title: 'Anfin Fintech Super-App & Robo-Advisor',
      tagline: 'Comprehensive investment platform with algorithmic robo-advisory & trading products',
      description: 'A mobile and web fintech super-app offering fractional stock trading, structured savings, and intelligent robo-advisor capabilities. Engineered scalable microservices on Google Cloud Platform with sub-second execution.',
      image: '/projects/fintech_engine.jpg',
      tags: ['React Native', 'React', 'Node.js', 'Google Cloud (GCP)', 'PostgreSQL', 'Redis', 'Microservices'],
      metrics: 'Robo-Advisor Portfolio Engine • Fractional Stock Trading • GCP Cloud Native',
      period: '2023 — 2024',
      role: 'Full-Stack Developer',
      architectureBreakdown: [
        { component: 'Robo-Advisor Core', tech: 'Node.js & Algorithmic Models', purpose: 'Calculates tailored portfolio allocations and automated rebalancing routines.' },
        { component: 'Trading Microservices', tech: 'Google Cloud Platform & PostgreSQL', purpose: 'Secure transaction processing, idempotency, and audit logging.' },
        { component: 'Cross-Platform App', tech: 'React Native', purpose: 'Fluid, high-security mobile client for iOS and Android.' }
      ],
      liveUrl: 'https://anfin.vn',
      githubUrl: 'https://github.com/kura-hashed',
      featured: true
    },
    {
      id: 'talecity-app',
      title: 'TaleCity (Apple-Featured Travel App) & TalePass',
      tagline: 'Personalized destination discovery with intelligent recommendations & tour ecosystem',
      description: 'An Apple App Store featured travel companion delivering personalized destination recommendations, voice recognition, and interactive trip itineraries, coupled with TalePass for seamless tour operator management.',
      image: '/projects/ai_agent.jpg',
      tags: ['React Native', 'React', 'Node.js', 'Python', 'AWS', 'Voice Recognition', 'MongoDB'],
      metrics: 'Featured by Apple • +20% Platform Adoption • Voice & Recommendation AI',
      period: '2019 — 2020',
      role: 'Full-Stack Developer',
      architectureBreakdown: [
        { component: 'Recommendation Engine', tech: 'Python & Intelligent Filters', purpose: 'Tailors customized travel itineraries based on traveler preferences.' },
        { component: 'Voice Recognition Module', tech: 'Audio Processing & Speech API', purpose: 'Hands-free voice discovery and interactive audio guides.' },
        { component: 'TalePass Booking System', tech: 'Node.js & MongoDB', purpose: 'Seamless reservation, ticket verification, and tour operator dashboard.' }
      ],
      liveUrl: 'https://loibui.tech',
      githubUrl: 'https://github.com/kura-hashed',
      featured: true
    }
  ],
  skillCategories: [
    {
      title: 'Front-End & Mobile Engineering',
      icon: 'Layers',
      description: 'Crafting responsive, high-performance web applications and native mobile experiences.',
      skills: [
        { name: 'React', level: 96, years: 7, featured: true },
        { name: 'React Native', level: 94, years: 6, featured: true },
        { name: 'TypeScript & JavaScript', level: 95, years: 7, featured: true },
        { name: 'HTML5 & CSS3 / Sass', level: 92, years: 7 },
        { name: 'Bootstrap / Modern UI', level: 90, years: 6 }
      ]
    },
    {
      title: 'Back-End & Microservices',
      icon: 'Code2',
      description: 'Designing robust RESTful & GraphQL APIs, microservices, and distributed streaming pipelines.',
      skills: [
        { name: 'Node.js & Express.js', level: 95, years: 7, featured: true },
        { name: 'Java & Spring / OSGi', level: 88, years: 5, featured: true },
        { name: 'Python (Django, Flask)', level: 84, years: 4 },
        { name: 'Apache Kafka', level: 88, years: 4, featured: true },
        { name: 'RESTful APIs & GraphQL', level: 94, years: 7, featured: true },
        { name: 'Microservices Architecture', level: 92, years: 6, featured: true }
      ]
    },
    {
      title: 'Databases & In-Memory Caching',
      icon: 'Network',
      description: 'Managing relational, document, and search engine data architectures with high throughput.',
      skills: [
        { name: 'PostgreSQL & MySQL', level: 92, years: 7, featured: true },
        { name: 'MongoDB', level: 90, years: 6, featured: true },
        { name: 'Elasticsearch', level: 88, years: 4, featured: true },
        { name: 'Redis', level: 90, years: 5, featured: true },
        { name: 'DynamoDB & Firebase', level: 85, years: 4 }
      ]
    },
    {
      title: 'Cloud, Infrastructure & DevOps',
      icon: 'Cloud',
      description: 'Deploying, monitoring, and orchestrating containerized cloud environments.',
      skills: [
        { name: 'Amazon Web Services (AWS)', level: 88, years: 5, featured: true },
        { name: 'Google Cloud Platform (GCP)', level: 88, years: 4, featured: true },
        { name: 'Docker & Kubernetes', level: 88, years: 5, featured: true },
        { name: 'CI/CD (Jenkins, GitHub Actions)', level: 90, years: 6, featured: true },
        { name: 'Grafana & Prometheus', level: 85, years: 4 },
        { name: 'Testing (Jest, Mocha, Cypress)', level: 90, years: 6 }
      ]
    }
  ],
  philosophies: [
    {
      number: '01',
      title: 'Balancing Tech Excellence with Business Value',
      description: 'High-quality code matters most when it drives user delight and business outcomes—from increasing payment conversion rates by 15% to cutting pipeline latency.',
      icon: 'Compass'
    },
    {
      number: '02',
      title: 'Resilient Microservices & Event Streaming',
      description: 'Decoupling services through Apache Kafka and clean API contracts creates resilient platforms that scale reliably under heavy peak traffic.',
      icon: 'Zap'
    },
    {
      number: '03',
      title: 'Fluid Cross-Platform User Experiences',
      description: 'Whether engineering on React Native for fintech super-apps or WebSockets on the web, smooth responsiveness and intuitive design build user trust.',
      icon: 'CheckCircle2'
    },
    {
      number: '04',
      title: 'Lifelong Rigor & Computer Science Craft',
      description: 'Rooted in a mathematical background and competitive programming medals, I bring algorithmic precision and continuous learning to every system I touch.',
      icon: 'Sparkles'
    }
  ]
};
