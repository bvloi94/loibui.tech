import { profileData } from '../data/profile';
import { renderIcon } from '../utils/icons';

export function renderRoadmap(): string {
  const phasesHtml = profileData.roadmap
    .map(
      (phase) => `
        <div class="roadmap-card glass-panel ${phase.active ? 'is-active-phase' : ''}">
          <div class="roadmap-header">
            <span class="roadmap-phase-num">${phase.phase}</span>
            <span class="roadmap-period">${phase.period}</span>
            ${phase.active ? `<span class="active-pulse-badge">${renderIcon('Sparkles', '', 12)} Current Focus</span>` : ''}
          </div>
          <h3 class="roadmap-title">${phase.title}</h3>
          <p class="roadmap-desc">${phase.desc}</p>
        </div>
      `
    )
    .join('');

  return `
    <div class="career-roadmap-block">
      <div class="roadmap-sub-header">
        <div class="roadmap-title-row">
          <span class="section-tag">${renderIcon('TrendingUp', '', 14)} Trajectory</span>
          <h3 class="roadmap-main-heading">Career Evolution Arc</h3>
        </div>
        <p class="roadmap-intro">
          From algorithmic foundations and full-stack software delivery to distributed cloud topologies and engineering leadership.
        </p>
      </div>
      <div class="roadmap-grid">
        ${phasesHtml}
      </div>
    </div>
  `;
}
