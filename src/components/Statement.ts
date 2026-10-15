import { profileData } from '../data/profile';

export function renderStatement(): string {
  return `
    <section id="statement" class="hero-statement-section">
      <div class="archive-container">
        <div class="statement-kicker">Curriculum Vitae & Selected Works</div>
        
        <h1 class="statement-headline">
          ${profileData.shortBio}
        </h1>

        <div class="statement-lead">
          <p style="margin-bottom: 20px;">
            ${profileData.detailedBio[0]}
          </p>
          <p>
            ${profileData.detailedBio[1]}
          </p>
        </div>

        <div class="statement-meta-row">
          <span class="meta-coordinate">${profileData.location}</span>
          <span class="meta-separator">•</span>
          <a href="mailto:${profileData.email}" class="meta-link">${profileData.email}</a>
          <span class="meta-separator">•</span>
          <a href="${profileData.github}" target="_blank" rel="noopener noreferrer" class="meta-link">GitHub</a>
          <span class="meta-separator">•</span>
          <a href="${profileData.linkedin}" target="_blank" rel="noopener noreferrer" class="meta-link">LinkedIn</a>
        </div>
      </div>
    </section>
  `;
}
