import { profileData } from '../data/profile';
import { renderIcon } from '../utils/icons';

export function renderFooter(): string {
  const currentYear = new Date().getFullYear();

  return `
    <footer class="site-footer">
      <div class="container footer-container">
        <div class="footer-top-row">
          <div class="footer-brand">
            <a href="#hero" class="brand-logo">
              <div class="brand-monogram">
                <span>LB</span>
              </div>
              <div class="brand-text">
                <span class="brand-name">${profileData.name}</span>
                <span class="brand-domain">${profileData.domain}</span>
              </div>
            </a>
            <p class="footer-tagline">
              Engineering high-scale cloud platforms, distributed systems, and modern web applications with precision craft.
            </p>
          </div>

          <div class="footer-links-group">
            <div class="footer-col">
              <h4 class="footer-col-title">Navigation</h4>
              <ul class="footer-links">
                <li><a href="#hero">Overview</a></li>
                <li><a href="#career">Career Journey</a></li>
                <li><a href="#projects">Systems & Projects</a></li>
                <li><a href="#skills">Tech Arsenal</a></li>
                <li><a href="#philosophy">Principles</a></li>
              </ul>
            </div>

            <div class="footer-col">
              <h4 class="footer-col-title">Connect</h4>
              <ul class="footer-links">
                <li><a href="${profileData.github}" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="${profileData.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="mailto:${profileData.email}">Email</a></li>
              </ul>
            </div>
          </div>
        </div>

        <hr class="footer-divider" />

        <div class="footer-bottom-row">
          <p class="footer-copyright">
            © ${currentYear} <strong>${profileData.name}</strong> • All rights reserved. Registered on <strong>${profileData.domain}</strong>.
          </p>

          <div class="footer-tech-stack">
            <span class="tech-badge">TypeScript</span>
            <span class="tech-badge">Vanilla CSS</span>
            <span class="tech-badge">Vite</span>
          </div>

          <button id="back-to-top-btn" class="back-to-top-btn" aria-label="Scroll back to top" title="Back to top">
            ${renderIcon('ArrowUp', '', 16)}
            <span>Top</span>
          </button>
        </div>
      </div>
    </footer>
  `;
}

export function initFooterEvents(): void {
  const backToTopBtn = document.getElementById('back-to-top-btn');
  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
