import { profileData } from '../data/profile';
import { renderIcon } from '../utils/icons';

export function renderSkills(): string {
  const categoriesHtml = profileData.skillCategories
    .map(
      (cat) => `
        <div class="skill-category-card glass-panel">
          <div class="skill-cat-header">
            <div class="skill-cat-icon">
              ${renderIcon(cat.icon, '', 20)}
            </div>
            <div>
              <h3 class="skill-cat-title">${cat.title}</h3>
              <p class="skill-cat-desc">${cat.description}</p>
            </div>
          </div>

          <div class="skills-list">
            ${cat.skills
              .map(
                (skill) => `
                  <div class="skill-row ${skill.featured ? 'is-featured' : ''}">
                    <div class="skill-info-row">
                      <span class="skill-name">
                        ${skill.name}
                        ${skill.featured ? `<span class="featured-dot" title="Core Specialty">★</span>` : ''}
                      </span>
                      <span class="skill-years">${skill.years} yrs</span>
                    </div>
                    <div class="skill-progress-track">
                      <div class="skill-progress-fill" style="width: ${skill.level}%;"></div>
                    </div>
                  </div>
                `
              )
              .join('')}
          </div>
        </div>
      `
    )
    .join('');

  return `
    <section id="skills" class="skills-section">
      <div class="container">
        <div class="section-header text-center">
          <div class="section-badge">
            ${renderIcon('Terminal', '', 14)}
            <span>Technical Arsenal</span>
          </div>
          <h2 class="section-title">
            Core Competencies & <span class="text-gradient">Tech Stack</span>
          </h2>
          <p class="section-subtitle">
            Battle-tested technologies and tools leveraged daily to build durable, scalable systems.
          </p>
        </div>

        <div class="skills-grid">
          ${categoriesHtml}
        </div>
      </div>
    </section>
  `;
}
