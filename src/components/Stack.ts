export function renderStack(): string {
  const stackItems = [
    'TypeScript',
    'JavaScript',
    'React',
    'React Native',
    'Next.js',
    'Node.js',
    'Java',
    'Go',
    'Apache Kafka',
    'Redis',
    'PostgreSQL',
    'Elasticsearch',
    'AWS',
    'Google Cloud',
    'Docker',
    'Microservices'
  ];

  return `
    <section id="stack">
      <h3 class="section-heading">Stack</h3>
      <div class="stack-cloud">
        ${stackItems.map((item) => `<span class="stack-pill">${item}</span>`).join('')}
      </div>
    </section>
  `;
}
