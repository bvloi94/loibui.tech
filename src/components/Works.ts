export function renderWorks(): string {
  const works = [
    {
      title: 'Blockchain Streaming & Analytics',
      badge: '2025',
      image: '/projects/blockchain_analytics.jpg',
      desc: 'Institutional-grade on-chain intelligence platform processing real-time telemetry pipelines via Kafka, Elasticsearch, and low-latency WebSockets.',
      tags: ['React', 'TypeScript', 'Node.js', 'Kafka', 'Elasticsearch']
    },
    {
      title: 'Anfin Fintech Super-App',
      badge: '2021 — 2023',
      image: '/projects/anfin_fintech.jpg',
      desc: 'Mobile investing & wealth management app serving 500k+ users with robo-advisor portfolio engines and real-time stock trading.',
      tags: ['React Native', 'TypeScript', 'Node.js', 'GCP', 'PostgreSQL']
    },
    {
      title: 'TaleCity Audio Travel Platform',
      badge: '2019 — 2020',
      image: '/projects/talecity_travel.jpg',
      desc: 'Location-aware historical audio narratives and walking tour guide. Recognized and featured on the Apple App Store.',
      tags: ['React Native', 'Node.js', 'Geofencing', 'Audio Engine']
    }
  ];

  const cardsHtml = works
    .map(
      (w) => `
        <article class="work-card">
          <div class="work-card-media">
            <img 
              src="${w.image}" 
              alt="${w.title}" 
              loading="lazy"
              width="580"
              height="326"
            />
          </div>
          <div class="work-card-content">
            <div class="work-card-header">
              <h4 class="work-card-title">${w.title}</h4>
              <span class="work-card-badge">${w.badge}</span>
            </div>
            <p class="work-card-desc">${w.desc}</p>
            <div class="work-card-tags">
              ${w.tags.map((t) => `<span class="work-tag">${t}</span>`).join('')}
            </div>
          </div>
        </article>
      `
    )
    .join('');

  return `
    <section id="works">
      <h3 class="section-heading">Works</h3>
      <div class="works-grid">
        ${cardsHtml}
      </div>
    </section>
  `;
}
