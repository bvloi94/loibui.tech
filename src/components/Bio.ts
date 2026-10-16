export function renderBio(): string {
  const bioEntries = [
    {
      year: '2023 to present',
      text: 'Senior Full-Stack Engineer — Web3 Streaming & Analytics Platform (Decoupled real-time Kafka pipelines & high-frequency dashboards).'
    },
    {
      year: '2021 to 2023',
      text: 'Senior Frontend & Mobile Lead at <span class="bio-company">Anfin</span> (Robo-advisor fintech super-app, 500k+ downloads).'
    },
    {
      year: '2020 to 2021',
      text: 'Full-Stack Engineer at <span class="bio-company">Futa Group</span> (Mobility booking, ticketing & unified payment integrations).'
    },
    {
      year: '2019 to 2020',
      text: 'Senior Mobile Engineer at <span class="bio-company">TaleCity</span> (Location-aware travel narrative app, featured on Apple App Store).'
    },
    {
      year: '2016 to 2019',
      text: 'Software Engineer at <span class="bio-company">FPT Software / Denso Japan</span> (Connected vehicle IoT & OTA update gateways onsite in Japan).'
    },
    {
      year: '2016',
      text: 'Graduated with Bachelor of Software Engineering from <span class="bio-company">FPT University</span> (Full-Tuition Academic Scholarship).'
    },
    {
      year: '2011',
      text: 'Bronze Medalist at the <span class="bio-company">National Programming Olympiad</span> (Vietnam).'
    }
  ];

  const listHtml = bioEntries
    .map(
      (entry) => `
        <div class="bio-item">
          <span class="bio-year">${entry.year}</span>
          <span class="bio-text">${entry.text}</span>
        </div>
      `
    )
    .join('');

  return `
    <section id="bio">
      <h3 class="section-heading">Bio</h3>
      <div class="bio-list">
        ${listHtml}
      </div>
    </section>
  `;
}
