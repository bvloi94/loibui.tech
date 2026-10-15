import { profileData } from '../data/profile';

export function renderSelectedWork(): string {
  const worksHtml = profileData.projects
    .map(
      (work) => `
        <article class="work-item">
          <figure class="work-figure">
            <img 
              src="${work.image}" 
              alt="${work.title} system overview" 
              class="work-image"
              loading="lazy"
              width="1040"
              height="585"
            />
          </figure>

          <div class="work-caption-row">
            <h3 class="work-title">${work.title}</h3>
            <span class="work-period">${work.period}</span>
          </div>

          <p class="work-desc">${work.description}</p>

          ${
            work.architectureBreakdown
              ? `
              <div class="work-architecture-list">
                ${work.architectureBreakdown
                  .map(
                    (item) => `
                      <div class="arch-col">
                        <div class="arch-col-title">${item.component}</div>
                        <div class="arch-col-tech">${item.tech}</div>
                        <div class="arch-col-purpose">${item.purpose}</div>
                      </div>
                    `
                  )
                  .join('')}
              </div>
            `
              : ''
          }
        </article>
      `
    )
    .join('');

  return `
    <section id="works" class="archive-section">
      <div class="archive-container-wide">
        <div class="section-label">02 / Selected Works & Architecture</div>
        
        <div class="works-list">
          ${worksHtml}
        </div>
      </div>
    </section>
  `;
}
