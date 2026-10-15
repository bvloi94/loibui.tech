import type { ProfileData } from '../types/career';

export const profileData: ProfileData = {
  name: 'Loi Bui',
  handle: '@kura-hashed',
  domain: 'loibui.tech',
  roleTitle: 'Senior Full-Stack Engineer',
  shortBio: 'Senior Full-Stack Engineer with 7+ years of experience designing and delivering resilient web, mobile, fintech, and distributed cloud applications. Proven track record turning complex technical challenges into dependable production systems.',
  detailedBio: [
    'I am a Senior Full-Stack Engineer with over seven years of experience delivering scalable products across fintech, mobility, automotive IoT, and real-time distributed platforms.',
    'My career is rooted in a disciplined mathematical foundation—earning a Bronze Medal at the National Programming Olympiad and completing my Software Engineering degree at FPT University on a Full-Tuition Scholarship.',
    'Over the years, I have engineered mission-critical systems onsite in Japan for Denso (connected vehicle IoT & OTA update gateways), architected core robo-advisor and securities trading features for the Anfin fintech super-app, integrated nationwide digital payment rails for Futa Platform, and built TaleCity, an Apple-featured travel platform.',
    'I focus on pragmatic engineering: writing clean, type-safe code, architecting resilient event-driven microservices with Kafka, and keeping developer experience and customer reliability at the center of every architectural decision.'
  ],
  avatar: '/avatar.jpg',
  availability: 'Available for Full-Stack & Systems Architecture Roles',
  location: 'Ho Chi Minh City, Vietnam (UTC+7) • Open to Global Remote',
  email: 'hi@loibui.tech',
  github: 'https://github.com/kura-hashed',
  linkedin: 'https://linkedin.com/in/loibui',
  twitter: 'https://x.com/loibui_tech',
  stats: [
    {
      label: 'Engineering Experience',
      value: '7+ Yrs',
      sub: 'Web, Mobile, Cloud & IoT',
      icon: 'Award'
    },
    {
      label: 'Pipeline Optimization',
      value: '-15%',
      sub: 'Latency cut via Kafka & ES',
      icon: 'Zap'
    },
    {
      label: 'Payment Conversion',
      value: '+15%',
      sub: 'Unified MoMo, VNPay & ZaloPay',
      icon: 'ShieldCheck'
    },
    {
      label: 'Apple Featured',
      value: 'TaleCity',
      sub: 'App Store Featured App',
      icon: 'Sparkles'
    }
  ],
  roadmap: [
    {
      phase: '01 / Academic Foundation',
      period: '2012 — 2016',
      title: 'Algorithmic Rigor & CS Degree',
      desc: 'Software Engineering at FPT University (Full-Tuition Scholarship) following Bronze Medal honors at the National Programming Olympiad.'
    },
    {
      phase: '02 / Enterprise & Automotive IoT',
      period: '2017 — 2019',
      title: 'Global Delivery & Denso Japan',
      desc: 'Engineered mission-critical Internet of Vehicles (IoV) OTA gateways and telemetry systems onsite in Japan, preceded by enterprise foundations at FPT Software.'
    },
    {
      phase: '03 / Consumer Platforms & Scale',
      period: '2019 — 2022',
      title: 'Travel Tech & Nationwide Mobility',
      desc: 'Delivered Apple-featured TaleCity travel platform, followed by scaling transit booking and unified payment integrations for Futa Platform.'
    },
    {
      phase: '04 / Fintech & Streaming Systems',
      period: '2023 — Present',
      title: 'Fintech Super-App & Real-Time Data',
      desc: 'Spearheaded robo-advisor portfolio engines on Google Cloud Platform at Anfin, followed by low-latency blockchain intelligence streaming pipelines.',
      active: true
    }
  ],
  milestones: [
    {
      id: 'blockchain-analytics-2025',
      role: 'Senior Full-Stack Developer',
      company: 'Blockchain Intelligence Platform (Remote)',
      companyUrl: 'https://github.com/kura-hashed',
      period: '2025 — Present',
      startYear: 2025,
      endYear: 'Present',
      location: 'Remote',
      type: 'Full-time',
      category: ['engineering', 'architecture'],
      summary: 'Architecting an institutional-grade blockchain market intelligence and wallet portfolio analytics platform delivering sub-second on-chain telemetry.',
      keyAchievements: [
        'Designed decoupled event-driven data streaming pipelines with Apache Kafka and Elasticsearch, reducing event ingestion latency by 15% and increasing data accuracy by 10%.',
        'Engineered responsive real-time analytics dashboards transforming complex block metrics into intuitive, actionable market intelligence.',
        'Implemented robust WebSocket connection pooling and backpressure handling for high-frequency price and liquidity feeds.'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'Apache Kafka', 'Elasticsearch', 'Docker', 'WebSockets', 'REST APIs'],
      metrics: [
        { label: 'Latency Cut', value: '-15%' },
        { label: 'Accuracy Gain', value: '+10%' },
        { label: 'Pipeline Mode', value: 'Real-Time' }
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
      summary: 'Delivered core wealth-management products for a high-growth fintech super-app spanning automated fractional investment, savings, and robo-advisory.',
      keyAchievements: [
        'Led end-to-end development of proprietary robo-advisor algorithms providing users with automated risk-weighted portfolio allocations and rebalancing.',
        'Enhanced platform throughput and backend reliability through microservices refactoring and cloud infrastructure optimizations on Google Cloud Platform (GCP).',
        'Strengthened security, data compliance, and transactional integrity across cross-platform mobile and web interfaces.'
      ],
      technologies: ['React Native', 'React', 'Node.js', 'Google Cloud (GCP)', 'PostgreSQL', 'Redis', 'Microservices', 'Docker'],
      metrics: [
        { label: 'Core System', value: 'Robo-Advisor' },
        { label: 'Domain', value: 'Fintech Super-App' },
        { label: 'Infrastructure', value: 'GCP Native' }
      ],
      highlight: true,
      featured: true
    },
    {
      id: 'futa-mobility-2021',
      role: 'Full-Stack Developer',
      company: 'Futa Platform (Phuong Trang Group)',
      companyUrl: 'https://futabus.vn',
      period: '2021 — 2022',
      startYear: 2021,
      endYear: 2022,
      location: 'Ho Chi Minh City, Vietnam',
      type: 'Full-time',
      category: ['engineering', 'architecture'],
      summary: 'Developed and scaled transactional microservices powering nationwide passenger transportation, parcel delivery, and mobile checkout systems.',
      keyAchievements: [
        'Integrated multi-provider digital payment gateways including MoMo, VNPay, ZaloPay, and QR Payments, increasing checkout completion and success rates by 15%.',
        'Architected high-throughput transactional APIs with caching and database indexing to handle extreme peak traffic during holiday booking seasons.',
        'Collaborated with operational and mobile teams to streamline end-to-end ticketing, passenger check-in, and dispatch workflows.'
      ],
      technologies: ['Node.js', 'React Native', 'Java', 'Payment Gateways (MoMo, VNPay, ZaloPay)', 'MySQL', 'PostgreSQL', 'Redis'],
      metrics: [
        { label: 'Payment Success', value: '+15%' },
        { label: 'Scale', value: 'Nationwide' },
        { label: 'Domain', value: 'Mobility & Logistics' }
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
      summary: 'Built TaleCity, an Apple-featured travel discovery platform, and TalePass, a unified management ecosystem for travelers and tour operators.',
      keyAchievements: [
        'Delivered TaleCity, an iOS application featured by Apple on the App Store for its intuitive destination recommendations and interactive audio guides.',
        'Built TalePass, enabling tour operators to seamlessly manage inventory, dynamic schedules, and real-time customer bookings.',
        'Implemented intelligent recommendation models, voice recognition, and marketing automation that drove a 20% increase in active platform adoption.'
      ],
      technologies: ['React', 'React Native', 'Node.js', 'Python', 'AWS', 'Voice Recognition', 'MongoDB', 'Appsflyer'],
      metrics: [
        { label: 'Recognition', value: 'Apple Featured' },
        { label: 'Adoption Growth', value: '+20%' },
        { label: 'Innovations', value: 'Voice & AI Recs' }
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
      summary: 'Engineered mission-critical software components for connected vehicle (Internet of Vehicles - IoV) platforms onsite at Denso Japan.',
      keyAchievements: [
        'Engineered core modules for next-generation Internet of Vehicles (IoV) platforms, including Over-the-Air (OTA) firmware delivery, IoT gateways, and remote vehicle diagnostics.',
        'Contributed to strategic connected automotive platform initiatives showcased at major automotive technology exhibitions in Japan.',
        'Built real-time vehicle telemetry collectors and fault monitoring services improving fleet safety and diagnostic speed.'
      ],
      technologies: ['Java', 'OSGi', 'IoT Gateways', 'OTA Firmware Architecture', 'Vehicle Telemetry', 'Linux', 'MQTT'],
      metrics: [
        { label: 'Location', value: 'Japan Onsite' },
        { label: 'Domain', value: 'IoV & Automotive' },
        { label: 'Showcase', value: 'Tokyo Exhibition' }
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
      summary: 'Developed enterprise web applications, backend services, and automated CI/CD workflows under international client specifications.',
      keyAchievements: [
        'Contributed to scalable enterprise software delivery following clean code principles, test coverage, and Agile Scrum methodologies.',
        'Implemented modular backend REST APIs, relational database schemas, and unit test suites.',
        'Participated in automated continuous integration and code review processes across distributed engineering squads.'
      ],
      technologies: ['Java', 'JavaScript', 'Spring Framework', 'SQL', 'Git', 'Jenkins CI/CD'],
      metrics: [
        { label: 'Focus', value: 'Enterprise Engineering' },
        { label: 'Process', value: 'Agile & CI/CD' }
      ]
    }
  ],
  projects: [
    {
      id: 'blockchain-analytics-platform',
      title: 'Blockchain Market Intelligence & On-Chain Analytics',
      tagline: 'Real-time telemetry, portfolio tracking & community-driven market insights',
      description: 'An institutional-grade blockchain analytics platform that aggregates on-chain transaction logs and market order books. Powered by an event streaming pipeline using Kafka and Elasticsearch, reducing end-to-end ingestion latency by 15% with 10% improved data accuracy.',
      image: '/projects/blockchain_analytics.jpg',
      tags: ['React', 'Node.js', 'Apache Kafka', 'Elasticsearch', 'Docker', 'WebSockets', 'TypeScript'],
      metrics: '-15% Pipeline Latency • +10% Data Accuracy • Real-Time On-Chain Streams',
      period: '2025 — Present',
      role: 'Senior Full-Stack Developer (Remote)',
      architectureBreakdown: [
        { component: 'Streaming Telemetry Pipeline', tech: 'Apache Kafka', purpose: 'Decouples high-volume blockchain transaction feeds into partitioned event topics.' },
        { component: 'High-Speed Query Engine', tech: 'Elasticsearch', purpose: 'Enables sub-50ms multi-field aggregations across millions of on-chain records.' },
        { component: 'Reactive Client Canvas', tech: 'React & WebSockets', purpose: 'Live portfolio tracking and interactive charting without rendering lag.' }
      ],
      liveUrl: 'https://loibui.tech',
      githubUrl: 'https://github.com/kura-hashed',
      featured: true
    },
    {
      id: 'anfin-fintech-superapp',
      title: 'Anfin Fintech Super-App & Robo-Advisor',
      tagline: 'Algorithmic wealth management, fractional investing & automated savings',
      description: 'A comprehensive financial platform enabling retail investors to manage diversified portfolios through automated robo-advisory, structured savings plans, and fractional equity trading. Engineered with cloud-native microservices on GCP.',
      image: '/projects/anfin_fintech.jpg',
      tags: ['React Native', 'React', 'Node.js', 'Google Cloud (GCP)', 'PostgreSQL', 'Redis', 'Microservices'],
      metrics: 'Robo-Advisor Portfolio Engine • Fractional Stock Trading • GCP Cloud Architecture',
      period: '2023 — 2024',
      role: 'Full-Stack Developer',
      architectureBreakdown: [
        { component: 'Robo-Advisor Calculation Engine', tech: 'Node.js & Quantitative Models', purpose: 'Computes risk-adjusted asset allocations and triggers automated rebalancing.' },
        { component: 'Transactional Microservices', tech: 'GCP & PostgreSQL', purpose: 'Handles idempotent deposit, withdrawal, and trade execution orders.' },
        { component: 'Secure Mobile Client', tech: 'React Native', purpose: 'High-security client application with biometric authentication and live portfolio charts.' }
      ],
      liveUrl: 'https://anfin.vn',
      githubUrl: 'https://github.com/kura-hashed',
      featured: true
    },
    {
      id: 'talecity-app',
      title: 'TaleCity (Apple-Featured App) & TalePass Ecosystem',
      tagline: 'Personalized travel companion with intelligent recommendations & tour management',
      description: 'An Apple App Store featured travel companion providing personalized destination recommendations, interactive audio tours, and voice recognition, paired with the TalePass platform for tour operators.',
      image: '/projects/talecity_travel.jpg',
      tags: ['React Native', 'React', 'Node.js', 'Python', 'AWS', 'Voice Recognition', 'MongoDB'],
      metrics: 'Featured by Apple • +20% Platform Adoption • Intelligent Recommendations',
      period: '2019 — 2020',
      role: 'Full-Stack Developer',
      architectureBreakdown: [
        { component: 'Recommendation Core', tech: 'Python & Intelligent Filters', purpose: 'Synthesizes user interest profiles to suggest curated itineraries.' },
        { component: 'Voice Recognition Assistant', tech: 'Audio Processing & Speech API', purpose: 'Enables hands-free voice discovery during active walking tours.' },
        { component: 'TalePass Operations Portal', tech: 'Node.js & MongoDB', purpose: 'Real-time booking management, ticket validation, and operator analytics.' }
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
      description: 'Building snappy, accessible, and resilient user interfaces for web and mobile.',
      skills: [
        { name: 'React', level: 96, years: 7, featured: true },
        { name: 'React Native', level: 94, years: 6, featured: true },
        { name: 'TypeScript & JavaScript', level: 95, years: 7, featured: true },
        { name: 'HTML5 & Modern CSS / Sass', level: 92, years: 7 },
        { name: 'Responsive UI & Design Systems', level: 92, years: 6 }
      ]
    },
    {
      title: 'Back-End & Microservices',
      icon: 'Code2',
      description: 'Architecting robust RESTful & GraphQL APIs, distributed event streams, and service fabrics.',
      skills: [
        { name: 'Node.js & Express.js', level: 95, years: 7, featured: true },
        { name: 'Java (Spring & OSGi)', level: 88, years: 5, featured: true },
        { name: 'Apache Kafka', level: 88, years: 4, featured: true },
        { name: 'Microservices Architecture', level: 92, years: 6, featured: true },
        { name: 'Python (Django & Flask)', level: 84, years: 4 },
        { name: 'RESTful APIs & GraphQL', level: 94, years: 7, featured: true }
      ]
    },
    {
      title: 'Databases & In-Memory Caching',
      icon: 'Network',
      description: 'Designing transactional, document, and search engine data layers with high reliability.',
      skills: [
        { name: 'PostgreSQL & MySQL', level: 92, years: 7, featured: true },
        { name: 'Redis', level: 90, years: 5, featured: true },
        { name: 'Elasticsearch', level: 88, years: 4, featured: true },
        { name: 'MongoDB', level: 90, years: 6, featured: true },
        { name: 'DynamoDB & Firebase', level: 85, years: 4 }
      ]
    },
    {
      title: 'Cloud, Infrastructure & DevOps',
      icon: 'Cloud',
      description: 'Deploying, monitoring, and operating containerized cloud systems with CI/CD automation.',
      skills: [
        { name: 'Google Cloud Platform (GCP)', level: 88, years: 4, featured: true },
        { name: 'Amazon Web Services (AWS)', level: 88, years: 5, featured: true },
        { name: 'Docker & Containerization', level: 92, years: 6, featured: true },
        { name: 'CI/CD (Jenkins, GitHub Actions)', level: 90, years: 6, featured: true },
        { name: 'Testing (Jest, Mocha, Cypress)', level: 90, years: 6 },
        { name: 'Observability & Grafana', level: 85, years: 4 }
      ]
    }
  ],
  philosophies: [
    {
      number: '01',
      title: 'Pragmatic Engineering Over Hype',
      description: 'True technical excellence is measured by business value, operational simplicity, and dependability under pressure—not adherence to ephemeral industry fads.',
      icon: 'Compass'
    },
    {
      number: '02',
      title: 'Reliability Built on Strong Foundations',
      description: 'Rooted in a competitive mathematical and algorithmic background, I believe strict types, clean boundaries, and decoupled queues build platforms that withstand time.',
      icon: 'CheckCircle2'
    },
    {
      number: '03',
      title: 'Uncompromising Polish & Empathy',
      description: 'Software should feel thoughtful, whether in the sub-millisecond response of a backend API or the micro-interactions of a fintech mobile screen.',
      icon: 'Sparkles'
    },
    {
      number: '04',
      title: 'Continuous Curiosity & Mastery',
      description: 'From automotive IoT in Japan to fintech super-apps and distributed data pipelines, continuous learning and quiet humility are the hallmarks of great engineers.',
      icon: 'Flame'
    }
  ]
};
