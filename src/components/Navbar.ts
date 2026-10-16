import { profileData } from '../data/profile';
import { toggleTheme, getPreferredTheme } from '../utils/theme';

export function renderNavbar(): string {
  const currentTheme = getPreferredTheme();
  const isDark = currentTheme === 'dark';

  return `
    <header class="site-navbar">
      <div class="page-container navbar-inner">
        <a href="#" class="brand-link">
          <svg class="brand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
          <span>${profileData.name}</span>
        </a>

        <nav class="nav-links" aria-label="Main Navigation">
          <a href="#about" class="nav-link">About</a>
          <a href="#bio" class="nav-link">Bio</a>
          <a href="#works" class="nav-link">Works</a>
          <a href="#stack" class="nav-link">Stack</a>
          <a href="#contact" class="nav-link">Contact</a>
        </nav>

        <div class="navbar-actions">
          <button id="theme-toggle" class="theme-toggle-btn" aria-label="Toggle light and dark theme">
            ${isDark ? getSunIcon() : getMoonIcon()}
          </button>
        </div>
      </div>
    </header>
  `;
}

function getSunIcon(): string {
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  `;
}

function getMoonIcon(): string {
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  `;
}

export function initNavbarEvents(): void {
  const themeBtn = document.getElementById('theme-toggle');

  const updateIcon = () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (themeBtn) {
      themeBtn.innerHTML = isDark ? getSunIcon() : getMoonIcon();
    }
  };

  themeBtn?.addEventListener('click', () => {
    toggleTheme();
    updateIcon();
  });

  window.addEventListener('themechange', updateIcon);
}
