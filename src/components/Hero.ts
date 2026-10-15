import { profileData } from '../data/profile';
import { renderIcon } from '../utils/icons';

export function renderHero(): string {
  return `
    <section id="hero" class="hero-section">
      <div class="container hero-container">
        <div class="hero-content">
          <div class="hero-badge animate-fade-in">
            <span class="status-pulse-dot"></span>
            <span class="status-text">${profileData.availability}</span>
          </div>

          <h1 class="hero-title animate-fade-in-delay-1">
            Hi, I'm <span class="text-gradient">${profileData.name}</span>.
            <span class="hero-subtitle">Senior Full-Stack Engineer specializing in web, mobile, fintech & cloud-native systems.</span>
          </h1>

          <p class="hero-bio animate-fade-in-delay-2">
            ${profileData.shortBio}
          </p>

          <div class="hero-tags animate-fade-in-delay-2">
            <span class="tech-tag">${renderIcon('Layers', '', 14)} React & React Native</span>
            <span class="tech-tag">${renderIcon('Code2', '', 14)} Node.js & Java</span>
            <span class="tech-tag">${renderIcon('Zap', '', 14)} Kafka & Data Pipelines</span>
            <span class="tech-tag">${renderIcon('Cloud', '', 14)} AWS & Google Cloud</span>
            <span class="tech-tag">${renderIcon('ShieldCheck', '', 14)} Fintech & Mobility</span>
          </div>

          <div class="hero-actions animate-fade-in-delay-3">
            <a href="#career" class="btn btn-primary btn-lg" id="hero-explore-btn">
              <span>Explore Career Path</span>
              ${renderIcon('ArrowDown', '', 18)}
            </a>
            <a href="#projects" class="btn btn-secondary btn-lg">
              <span>View Flagship Systems</span>
              ${renderIcon('Layers', '', 18)}
            </a>
            <button id="hero-cv-btn" class="btn btn-ghost btn-lg">
              ${renderIcon('FileText', '', 18)}
              <span>Curriculum Vitae</span>
            </button>
          </div>

          <div class="hero-social-links animate-fade-in-delay-3">
            <span class="social-label">Connect:</span>
            <a href="${profileData.github}" target="_blank" rel="noopener noreferrer" class="social-link" title="GitHub Profile">
              ${renderIcon('Github', '', 18)}
              <span>GitHub</span>
            </a>
            <a href="${profileData.linkedin}" target="_blank" rel="noopener noreferrer" class="social-link" title="LinkedIn Profile">
              ${renderIcon('Linkedin', '', 18)}
              <span>LinkedIn</span>
            </a>
            <a href="mailto:${profileData.email}" class="social-link" title="Send Email">
              ${renderIcon('Mail', '', 18)}
              <span>${profileData.email}</span>
            </a>
          </div>
        </div>

        <div class="hero-visual animate-fade-in-delay-2">
          <div class="avatar-wrapper">
            <div class="avatar-glow-ring"></div>
            <div class="avatar-card glass-panel">
              <img 
                src="${profileData.avatar}" 
                alt="${profileData.name} - ${profileData.roleTitle}" 
                class="avatar-img"
                width="420"
                height="420"
                loading="eager"
              />
              <div class="avatar-floating-card top-right glass-card">
                <div class="floating-icon">${renderIcon('Zap', '', 18)}</div>
                <div class="floating-text">
                  <span class="bold">7+ Years</span>
                  <span class="sub">Full-Stack & Cloud</span>
                </div>
              </div>

              <div class="avatar-floating-card bottom-left glass-card">
                <div class="floating-icon">${renderIcon('Sparkles', '', 18)}</div>
                <div class="floating-text">
                  <span class="bold">Featured</span>
                  <span class="sub">Apple App Store</span>
                </div>
              </div>

              <div class="avatar-domain-tag">
                <span class="domain-prefix">https://</span>
                <span class="domain-highlight">${profileData.domain}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
