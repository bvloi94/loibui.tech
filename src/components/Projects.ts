import { profileData } from '../data/profile';
import { renderIcon } from '../utils/icons';

export function renderProjects(): string {
  const projectsHtml = profileData.projects
    .map(
      (project) => `
        <article class="project-card glass-panel" data-id="${project.id}">
          <div class="project-img-wrapper">
            <img 
              src="${project.image}" 
              alt="${project.title} Interface" 
              class="project-img"
              loading="lazy"
              width="600"
              height="338"
            />
            <div class="project-img-overlay">
              <span class="project-role-badge">${project.role}</span>
              <span class="project-period-badge">${project.period}</span>
            </div>
          </div>

          <div class="project-content">
            <div class="project-metrics-pill">
              ${renderIcon('Zap', 'metric-zap', 14)}
              <span>${project.metrics}</span>
            </div>

            <h3 class="project-title">${project.title}</h3>
            <p class="project-tagline">${project.tagline}</p>
            <p class="project-desc">${project.description}</p>

            <div class="project-tech-tags">
              ${project.tags.map((t) => `<span class="project-tag">${t}</span>`).join('')}
            </div>

            <!-- Architecture Breakdown Accordion / Preview -->
            ${
              project.architectureBreakdown
                ? `
                <div class="project-arch-preview">
                  <div class="arch-preview-header">
                    <span class="arch-label">${renderIcon('Cpu', '', 14)} Architecture Highlights</span>
                  </div>
                  <div class="arch-components-list">
                    ${project.architectureBreakdown
                      .map(
                        (item) => `
                          <div class="arch-component-item">
                            <span class="arch-comp-name">${item.component}</span>
                            <span class="arch-comp-tech">${item.tech}</span>
                            <span class="arch-comp-purpose">${item.purpose}</span>
                          </div>
                        `
                      )
                      .join('')}
                  </div>
                </div>
              `
                : ''
            }

            <div class="project-actions">
              <a href="#contact" class="btn btn-primary btn-sm">
                ${renderIcon('MessageSquare', '', 14)}
                <span>Inquire About Architecture</span>
              </a>
              <a href="${profileData.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
                ${renderIcon('Github', '', 14)}
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </article>
      `
    )
    .join('');

  return `
    <section id="projects" class="projects-section">
      <div class="container">
        <div class="section-header text-center">
          <div class="section-badge">
            ${renderIcon('Layers', '', 14)}
            <span>Production Architecture</span>
          </div>
          <h2 class="section-title">
            Flagship Systems & <span class="text-gradient">Case Studies</span>
          </h2>
          <p class="section-subtitle">
            Real-world architectures engineered for resilience, low latency, and massive concurrency.
          </p>
        </div>

        <div class="projects-grid">
          ${projectsHtml}
        </div>
      </div>
    </section>
  `;
}
