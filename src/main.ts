import './style.css';

import { renderNavbar, initNavbarEvents } from './components/Navbar';
import { renderHero } from './components/Hero';
import { renderStats } from './components/Stats';
import { renderCareerTimeline, initTimelineEvents } from './components/Timeline';
import { renderProjects } from './components/Projects';
import { renderSkills } from './components/Skills';
import { renderPhilosophy } from './components/Philosophy';
import { renderContact, initContactEvents } from './components/Contact';
import { renderFooter, initFooterEvents } from './components/Footer';
import { renderResumeModal, initResumeModalEvents } from './components/ResumeModal';

import { initTheme } from './utils/theme';
import { initSpotlight } from './utils/spotlight';

function initApp(): void {
  const appRoot = document.getElementById('app');
  if (!appRoot) return;

  // Initialize Theme preference first to prevent flash
  initTheme();

  // Assemble the application components
  appRoot.innerHTML = `
    ${renderNavbar()}
    <main>
      ${renderHero()}
      ${renderStats()}
      ${renderCareerTimeline()}
      ${renderProjects()}
      ${renderSkills()}
      ${renderPhilosophy()}
      ${renderContact()}
    </main>
    ${renderFooter()}
    ${renderResumeModal()}
  `;

  // Initialize interactive event listeners
  initNavbarEvents();
  initTimelineEvents();
  initContactEvents();
  initFooterEvents();
  initResumeModalEvents();
  initSpotlight();
}

// Start once DOM is fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
