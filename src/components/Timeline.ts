import { profileData } from '../data/profile';
import type { CareerMilestone, MilestoneCategory } from '../types/career';
import { renderIcon } from '../utils/icons';
import { renderRoadmap } from './Roadmap';

export function renderCareerTimeline(): string {
  return `
    <section id="career" class="career-section">
      <div class="container">
        <div class="section-header text-center">
          <div class="section-badge">
            ${renderIcon('Milestone', '', 14)}
            <span>Professional Journey</span>
          </div>
          <h2 class="section-title">
            Career Path & <span class="text-gradient">Engineering Leadership</span>
          </h2>
          <p class="section-subtitle">
            A chronological timeline of roles, architectural milestones, and high-impact systems delivered over the last 8+ years.
          </p>
        </div>

        <!-- Career Evolution Arc Roadmap -->
        ${renderRoadmap()}

        <!-- Timeline Filter Controls -->
        <div class="timeline-controls-wrapper">
          <div class="timeline-filter-tabs" role="tablist" aria-label="Career path filters">
            <button class="filter-tab active" data-category="all" role="tab" aria-selected="true">
              ${renderIcon('Layers', '', 14)}
              <span>All Milestones (${profileData.milestones.length})</span>
            </button>
            <button class="filter-tab" data-category="leadership" role="tab" aria-selected="false">
              ${renderIcon('Users', '', 14)}
              <span>Leadership</span>
            </button>
            <button class="filter-tab" data-category="architecture" role="tab" aria-selected="false">
              ${renderIcon('Cpu', '', 14)}
              <span>Architecture</span>
            </button>
            <button class="filter-tab" data-category="engineering" role="tab" aria-selected="false">
              ${renderIcon('Code2', '', 14)}
              <span>Engineering</span>
            </button>
            <button class="filter-tab" data-category="milestones" role="tab" aria-selected="false">
              ${renderIcon('Award', '', 14)}
              <span>Key Milestones</span>
            </button>
          </div>

          <div class="timeline-quick-actions">
            <button id="expand-all-milestones-btn" class="btn btn-ghost btn-sm" title="Expand or collapse all achievements">
              ${renderIcon('ChevronsUpDown', '', 14)}
              <span id="expand-all-text">Expand All Details</span>
            </button>
          </div>
        </div>

        <!-- Vertical Timeline Track -->
        <div class="timeline-container">
          <div class="timeline-spine"></div>
          <div class="timeline-list" id="timeline-list">
            ${renderMilestonesList(profileData.milestones)}
          </div>
        </div>

        <!-- Next Frontier Horizon Banner -->
        <div class="career-horizon-card glass-panel">
          <div class="horizon-badge">
            ${renderIcon('Compass', '', 16)}
            <span>The Next Horizon</span>
          </div>
          <div class="horizon-content">
            <h3 class="horizon-title">Continuous Exploration & Open Collaborations</h3>
            <p class="horizon-desc">
              Currently exploring autonomous multi-agent developer tooling, distributed actor models, and high-throughput real-time streaming architectures. Always enthusiastic to connect with visionary technical founders, teams, and open-source contributors.
            </p>
          </div>
          <div class="horizon-action">
            <a href="#contact" class="btn btn-primary">
              ${renderIcon('MessageSquare', '', 16)}
              <span>Discuss an Initiative</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderMilestonesList(milestones: CareerMilestone[]): string {
  if (milestones.length === 0) {
    return `
      <div class="timeline-empty glass-panel text-center">
        <p>No career milestones found for this filter.</p>
      </div>
    `;
  }

  return milestones
    .map((milestone, index) => {
      const isLatest = index === 0;
      return `
        <article 
          class="timeline-item glass-panel ${milestone.highlight ? 'is-highlighted' : ''} ${isLatest ? 'is-latest' : ''}" 
          data-id="${milestone.id}"
          data-categories="${milestone.category.join(' ')}"
        >
          <!-- Timeline Rail Connector -->
          <div class="timeline-node">
            <div class="timeline-node-dot">
              <span class="node-inner-pulse"></span>
            </div>
            <div class="timeline-year-label">${milestone.endYear === 'Present' ? 'Present' : milestone.startYear}</div>
          </div>

          <div class="timeline-card">
            <!-- Header Row -->
            <div class="timeline-card-header">
              <div class="role-company-group">
                <div class="role-badge-row">
                  <span class="role-type-pill ${milestone.type.toLowerCase()}">${milestone.type}</span>
                  <span class="period-pill">${renderIcon('Calendar', '', 12)} ${milestone.period}</span>
                  <span class="location-pill">${renderIcon('MapPin', '', 12)} ${milestone.location}</span>
                </div>
                <h3 class="timeline-role">${milestone.role}</h3>
                <h4 class="timeline-company">
                  <a href="${milestone.companyUrl || '#'}" target="_blank" rel="noopener noreferrer" class="company-link">
                    ${milestone.company}
                    ${renderIcon('ExternalLink', '', 12)}
                  </a>
                </h4>
              </div>

              <!-- Top Metrics Highlights -->
              <div class="milestone-metrics-grid">
                ${milestone.metrics
                  .map(
                    (m) => `
                      <div class="milestone-metric-chip">
                        <span class="metric-chip-val">${m.value}</span>
                        <span class="metric-chip-lbl">${m.label}</span>
                      </div>
                    `
                  )
                  .join('')}
              </div>
            </div>

            <!-- Role Summary -->
            <p class="timeline-summary">${milestone.summary}</p>

            <!-- Key Achievements (Expandable) -->
            <div class="timeline-achievements-wrapper" id="achievements-${milestone.id}">
              <div class="achievements-heading">
                <span class="bold">${renderIcon('CheckCircle2', 'text-emerald', 14)} Key Achievements & Systems Delivered:</span>
              </div>
              <ul class="achievements-list">
                ${milestone.keyAchievements
                  .map(
                    (ach) => `
                      <li class="achievement-item">
                        <span class="achievement-bullet">›</span>
                        <span class="achievement-text">${ach}</span>
                      </li>
                    `
                  )
                  .join('')}
              </ul>
            </div>

            <!-- Footer: Tech Stack Tags & Toggle -->
            <div class="timeline-card-footer">
              <div class="technologies-group">
                <span class="tech-group-label">${renderIcon('Code2', '', 12)} Technologies:</span>
                <div class="tech-pill-list">
                  ${milestone.technologies
                    .map((tech) => `<span class="tech-pill">${tech}</span>`)
                    .join('')}
                </div>
              </div>

              <button 
                class="btn btn-ghost btn-xs toggle-milestone-btn" 
                data-target="achievements-${milestone.id}"
                aria-expanded="true"
                title="Toggle achievements breakdown"
              >
                <span>Hide Breakdown</span>
                ${renderIcon('ChevronUp', 'toggle-chevron', 14)}
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join('');
}

export function initTimelineEvents(): void {
  const filterTabs = document.querySelectorAll<HTMLButtonElement>('.timeline-filter-tabs .filter-tab');
  const timelineItems = document.querySelectorAll<HTMLElement>('.timeline-item');
  const expandAllBtn = document.getElementById('expand-all-milestones-btn');
  const expandAllText = document.getElementById('expand-all-text');

  let allExpanded = true;

  // Filter tabs click handling
  filterTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const category = tab.getAttribute('data-category') as MilestoneCategory;

      filterTabs.forEach((t) => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      timelineItems.forEach((item) => {
        const itemCategories = item.getAttribute('data-categories') || '';
        if (category === 'all' || itemCategories.includes(category)) {
          item.style.display = 'grid';
          requestAnimationFrame(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          });
        } else {
          item.style.opacity = '0';
          item.style.transform = 'translateY(12px)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // Individual toggle buttons
  document.querySelectorAll<HTMLButtonElement>('.toggle-milestone-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      if (!targetId) return;
      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;

      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        targetEl.style.display = 'none';
        btn.setAttribute('aria-expanded', 'false');
        btn.innerHTML = `<span>Show Breakdown</span>${renderIcon('ChevronDown', 'toggle-chevron', 14)}`;
      } else {
        targetEl.style.display = 'block';
        btn.setAttribute('aria-expanded', 'true');
        btn.innerHTML = `<span>Hide Breakdown</span>${renderIcon('ChevronUp', 'toggle-chevron', 14)}`;
      }
    });
  });

  // Expand / Collapse all button
  expandAllBtn?.addEventListener('click', () => {
    allExpanded = !allExpanded;
    document.querySelectorAll<HTMLElement>('.timeline-achievements-wrapper').forEach((el) => {
      el.style.display = allExpanded ? 'block' : 'none';
    });
    document.querySelectorAll<HTMLButtonElement>('.toggle-milestone-btn').forEach((btn) => {
      btn.setAttribute('aria-expanded', allExpanded ? 'true' : 'false');
      btn.innerHTML = allExpanded
        ? `<span>Hide Breakdown</span>${renderIcon('ChevronUp', 'toggle-chevron', 14)}`
        : `<span>Show Breakdown</span>${renderIcon('ChevronDown', 'toggle-chevron', 14)}`;
    });
    if (expandAllText) {
      expandAllText.textContent = allExpanded ? 'Collapse All Details' : 'Expand All Details';
    }
  });
}
