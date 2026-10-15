import { profileData } from '../data/profile';
import { renderIcon } from '../utils/icons';
import { toggleTheme } from '../utils/theme';

export function renderNavbar(): string {
  return `
    <header id="main-header" class="site-header">
      <div class="scroll-progress-bar" id="scroll-progress"></div>
      <div class="container header-container">
        <a href="#hero" class="brand-logo" aria-label="Loi Bui Home">
          <div class="brand-monogram">
            <span>LB</span>
          </div>
          <div class="brand-text">
            <span class="brand-name">${profileData.name}</span>
            <span class="brand-domain">${profileData.domain}</span>
          </div>
        </a>

        <nav class="desktop-nav" aria-label="Main Navigation">
          <a href="#career" class="nav-link" data-section="career">Career Path</a>
          <a href="#projects" class="nav-link" data-section="projects">Projects</a>
          <a href="#skills" class="nav-link" data-section="skills">Arsenal</a>
          <a href="#philosophy" class="nav-link" data-section="philosophy">Philosophy</a>
          <a href="#contact" class="nav-link" data-section="contact">Contact</a>
        </nav>

        <div class="header-actions">
          <button id="theme-toggle-btn" class="icon-btn" aria-label="Toggle dark/light theme" title="Toggle theme">
            <span class="theme-icon-dark">${renderIcon('Sun', '', 18)}</span>
            <span class="theme-icon-light">${renderIcon('Moon', '', 18)}</span>
          </button>

          <button id="cv-quick-view-btn" class="btn btn-secondary btn-sm" aria-label="View Resume">
            ${renderIcon('FileText', '', 16)}
            <span>CV / Resume</span>
          </button>

          <a href="#contact" class="btn btn-primary btn-sm header-cta">
            ${renderIcon('Mail', '', 16)}
            <span>Get in Touch</span>
          </a>

          <button id="mobile-menu-toggle" class="icon-btn mobile-menu-btn" aria-label="Open mobile menu">
            ${renderIcon('Menu', '', 20)}
          </button>
        </div>
      </div>

      <!-- Mobile navigation drawer -->
      <div id="mobile-drawer" class="mobile-drawer" aria-hidden="true">
        <div class="mobile-drawer-header">
          <div class="brand-monogram"><span>LB</span></div>
          <span class="brand-domain">${profileData.domain}</span>
          <button id="mobile-menu-close" class="icon-btn" aria-label="Close menu">
            ${renderIcon('X', '', 20)}
          </button>
        </div>
        <nav class="mobile-nav-links">
          <a href="#hero" class="mobile-nav-link">Overview</a>
          <a href="#career" class="mobile-nav-link">Career Path</a>
          <a href="#projects" class="mobile-nav-link">Projects & Systems</a>
          <a href="#skills" class="mobile-nav-link">Tech Arsenal</a>
          <a href="#philosophy" class="mobile-nav-link">Principles</a>
          <a href="#contact" class="mobile-nav-link">Contact</a>
        </nav>
        <div class="mobile-drawer-footer">
          <button id="mobile-cv-btn" class="btn btn-secondary btn-block">
            ${renderIcon('FileText', '', 16)}
            <span>View Complete Resume</span>
          </button>
          <a href="#contact" class="btn btn-primary btn-block mobile-contact-trigger">
            ${renderIcon('Mail', '', 16)}
            <span>Get in Touch</span>
          </a>
        </div>
      </div>
    </header>
  `;
}

export function initNavbarEvents(): void {
  const header = document.getElementById('main-header');
  const progressBar = document.getElementById('scroll-progress');
  const themeBtn = document.getElementById('theme-toggle-btn');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileClose = document.getElementById('mobile-menu-close');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-contact-trigger');

  // Theme toggle
  themeBtn?.addEventListener('click', () => {
    toggleTheme();
  });

  // Mobile menu
  const toggleMobile = (open: boolean) => {
    if (!mobileDrawer) return;
    if (open) {
      mobileDrawer.classList.add('is-open');
      mobileDrawer.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    } else {
      mobileDrawer.classList.remove('is-open');
      mobileDrawer.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  };

  mobileToggle?.addEventListener('click', () => toggleMobile(true));
  mobileClose?.addEventListener('click', () => toggleMobile(false));

  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => toggleMobile(false));
  });

  // Scroll spy & progress bar
  window.addEventListener('scroll', () => {
    const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
    const currentScroll = window.scrollY;
    if (progressBar && totalScroll > 0) {
      const percentage = (currentScroll / totalScroll) * 100;
      progressBar.style.width = `${percentage}%`;
    }

    if (header) {
      if (currentScroll > 40) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }

    // Active nav link highlight
    const sections = ['career', 'projects', 'skills', 'philosophy', 'contact'];
    let activeId = '';
    for (const sec of sections) {
      const el = document.getElementById(sec);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 200) {
          activeId = sec;
          break;
        }
      }
    }

    document.querySelectorAll('.desktop-nav .nav-link').forEach((link) => {
      if (link.getAttribute('data-section') === activeId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }, { passive: true });
}
