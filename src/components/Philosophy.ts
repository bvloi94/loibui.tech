import { profileData } from '../data/profile';
import { renderIcon } from '../utils/icons';

export function renderPhilosophy(): string {
  const itemsHtml = profileData.philosophies
    .map(
      (item) => `
        <div class="philosophy-card glass-panel">
          <div class="philosophy-header">
            <span class="philosophy-number">${item.number}</span>
            <div class="philosophy-icon-wrap">
              ${renderIcon(item.icon, '', 20)}
            </div>
          </div>
          <h3 class="philosophy-title">${item.title}</h3>
          <p class="philosophy-desc">${item.description}</p>
        </div>
      `
    )
    .join('');

  return `
    <section id="philosophy" class="philosophy-section">
      <div class="container">
        <div class="section-header text-center">
          <div class="section-badge">
            ${renderIcon('Compass', '', 14)}
            <span>Engineering Principles</span>
          </div>
          <h2 class="section-title">
            How I Think & <span class="text-gradient">Deliver Value</span>
          </h2>
          <p class="section-subtitle">
            Core beliefs cultivated through years of designing systems, scaling teams, and shipping production software.
          </p>
        </div>

        <div class="philosophy-grid">
          ${itemsHtml}
        </div>
      </div>
    </section>
  `;
}
