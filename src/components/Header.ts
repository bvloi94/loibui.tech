import { profileData } from '../data/profile';
import { toggleTheme } from '../utils/theme';

export function renderHeader(): string {
  return `
    <header class="site-masthead">
      <div class="archive-container masthead-inner">
        <a href="#statement" class="masthead-brand">
          <span class="brand-title">${profileData.name}</span>
          <span class="brand-domain">${profileData.domain}</span>
        </a>

        <nav class="masthead-nav" aria-label="Page Sections">
          <a href="#experience" class="masthead-link">Experience</a>
          <a href="#works" class="masthead-link">Works</a>
          <a href="#education" class="masthead-link">Education</a>
          <a href="#capabilities" class="masthead-link">Capabilities</a>
          <a href="#contact" class="masthead-link">Contact</a>
        </nav>

        <div class="masthead-actions">
          <a href="/cv_loibui.docx" download="Loi_Bui_CV.docx" class="cv-download-link" title="Download CV document">
            <span>Download CV</span>
          </a>
          <button id="theme-toggle" class="theme-pill-btn" aria-label="Toggle theme">
            <span class="theme-text">Theme</span>
          </button>
        </div>
      </div>
    </header>
  `;
}

export function initHeaderEvents(): void {
  const themeBtn = document.getElementById('theme-toggle');
  const themeText = themeBtn?.querySelector('.theme-text');

  const updateLabel = () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (themeText) {
      themeText.textContent = isDark ? 'Light' : 'Dark';
    }
  };

  updateLabel();

  themeBtn?.addEventListener('click', () => {
    toggleTheme();
    updateLabel();
  });

  window.addEventListener('themechange', updateLabel);
}
