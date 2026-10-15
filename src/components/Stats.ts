import { profileData } from '../data/profile';
import { renderIcon } from '../utils/icons';

export function renderStats(): string {
  const cardsHtml = profileData.stats
    .map(
      (stat) => `
        <div class="stat-card glass-panel">
          <div class="stat-header">
            <div class="stat-icon-wrapper">
              ${renderIcon(stat.icon, 'stat-icon', 22)}
            </div>
            <div class="stat-value">${stat.value}</div>
          </div>
          <div class="stat-label">${stat.label}</div>
          <div class="stat-sub">${stat.sub}</div>
        </div>
      `
    )
    .join('');

  return `
    <section class="stats-section">
      <div class="container">
        <div class="stats-grid">
          ${cardsHtml}
        </div>
      </div>
    </section>
  `;
}
