import { profileData } from '../data/profile';

export function renderCapabilities(): string {
  const categoriesHtml = profileData.skillCategories
    .map(
      (cat) => `
        <div class="capability-block">
          <h3>${cat.title}</h3>
          <ul class="capability-list">
            ${cat.skills.map((s) => `<li>${s.name}</li>`).join('')}
          </ul>
        </div>
      `
    )
    .join('');

  const philosophiesHtml = profileData.philosophies
    .map(
      (p) => `
        <div class="principle-item">
          <span class="principle-num">${p.number}</span>
          <h4 class="principle-title">${p.title}</h4>
          <p class="principle-desc">${p.description}</p>
        </div>
      `
    )
    .join('');

  return `
    <section id="capabilities" class="archive-section">
      <div class="archive-container">
        <div class="section-label">04 / Technical Capabilities</div>

        <div class="capabilities-grid" style="margin-bottom: 64px;">
          ${categoriesHtml}
        </div>

        <div class="section-label">05 / Principles & Craft</div>

        <div class="principles-grid">
          ${philosophiesHtml}
        </div>
      </div>
    </section>
  `;
}
