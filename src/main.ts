import './style.css';

import { renderHeader, initHeaderEvents } from './components/Header';
import { renderStatement } from './components/Statement';
import { renderExperience } from './components/Experience';
import { renderSelectedWork } from './components/SelectedWork';
import { renderEducation } from './components/Education';
import { renderCapabilities } from './components/Capabilities';
import { renderContact, initContactEvents } from './components/Contact';

import { initTheme } from './utils/theme';

function initApp(): void {
  const appRoot = document.getElementById('app');
  if (!appRoot) return;

  // Initialize theme
  initTheme();

  // Assemble the unified, single-page CV experience
  appRoot.innerHTML = `
    ${renderHeader()}
    <main>
      ${renderStatement()}
      <hr class="archive-rule" />
      ${renderExperience()}
      <hr class="archive-rule archive-rule-wide" />
      ${renderSelectedWork()}
      <hr class="archive-rule" />
      ${renderEducation()}
      <hr class="archive-rule" />
      ${renderCapabilities()}
      <hr class="archive-rule" />
      ${renderContact()}
    </main>
  `;

  // Initialize event handlers
  initHeaderEvents();
  initContactEvents();
}

// Start on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
