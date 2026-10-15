import { profileData } from '../data/profile';

export function renderExperience(): string {
  const entriesHtml = profileData.milestones
    .map(
      (m) => `
        <article class="experience-entry">
          <div class="experience-period">
            <span>${m.period}</span>
          </div>

          <div class="experience-main">
            <div class="experience-role-row">
              <h3 class="experience-role">${m.role}</h3>
            </div>
            
            <div class="experience-company">
              <a href="${m.companyUrl || '#'}" target="_blank" rel="noopener noreferrer">
                ${m.company}
              </a>
              <span>• ${m.location}</span>
            </div>

            <p class="experience-summary">${m.summary}</p>

            <ul class="experience-bullets">
              ${m.keyAchievements
                .map((ach) => `<li class="experience-bullet">${ach}</li>`)
                .join('')}
            </ul>

            <div class="experience-tech-line">
              <span style="margin-right: 6px;">Technologies:</span>
              ${m.technologies
                .map((t) => `<span class="tech-tag-simple">${t}</span>`)
                .join('')}
            </div>
          </div>
        </article>
      `
    )
    .join('');

  return `
    <section id="experience" class="archive-section">
      <div class="archive-container">
        <div class="section-label">01 / Professional Experience</div>
        
        <div class="experience-list">
          ${entriesHtml}
        </div>
      </div>
    </section>
  `;
}
