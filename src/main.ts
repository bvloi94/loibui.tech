import './style.css';

import { renderNavbar, initNavbarEvents } from './components/Navbar';
import { renderIntro } from './components/Intro';
import { renderAbout } from './components/About';
import { renderBio } from './components/Bio';
import { renderWorks } from './components/Works';
import { renderStack } from './components/Stack';
import { renderContact, initContactEvents } from './components/Contact';

import { initTheme } from './utils/theme';

function initApp(): void {
  const appRoot = document.getElementById('app');
  if (!appRoot) return;

  // Initialize theme
  initTheme();

  // Assemble the unified, single-page portfolio & CV
  appRoot.innerHTML = `
    ${renderNavbar()}
    <main class="page-container">
      ${renderIntro()}
      ${renderAbout()}
      ${renderBio()}
      ${renderWorks()}
      ${renderStack()}
      ${renderContact()}
    </main>
  `;

  // Initialize event handlers
  initNavbarEvents();
  initContactEvents();
}

// Start on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
