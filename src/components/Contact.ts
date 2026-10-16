import { profileData } from '../data/profile';

export function renderContact(): string {
  const currentYear = new Date().getFullYear();

  return `
    <section id="contact">
      <h3 class="section-heading">On the Web</h3>
      
      <div class="web-links-list">
        <button id="copy-email-btn" class="web-link-btn" title="Click to copy email address">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          <span id="copy-email-text">@${profileData.email} (Copy)</span>
        </button>

        <a href="${profileData.github}" target="_blank" rel="noopener noreferrer" class="web-link-btn">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          <span>@bvloi94 (GitHub)</span>
        </a>

        <a href="${profileData.linkedin}" target="_blank" rel="noopener noreferrer" class="web-link-btn">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
          <span>Loi Bui (LinkedIn)</span>
        </a>

        <a href="/cv_loibui.docx" download="Loi_Bui_CV.docx" class="web-link-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          <span>Curriculum Vitae (DOCX)</span>
        </a>
      </div>

      <footer class="site-footer">
        <p>© ${currentYear} ${profileData.name}. All Rights Reserved.</p>
      </footer>
    </section>

    <div id="copy-toast" class="copy-toast" aria-hidden="true">
      Copied to clipboard: ${profileData.email}
    </div>
  `;
}

export function initContactEvents(): void {
  const copyBtn = document.getElementById('copy-email-btn');
  const copyText = document.getElementById('copy-email-text');
  const toast = document.getElementById('copy-toast');

  copyBtn?.addEventListener('click', () => {
    navigator.clipboard.writeText(profileData.email).then(() => {
      if (copyText) copyText.textContent = `@${profileData.email} (Copied!)`;
      if (toast) {
        toast.classList.add('show');
        setTimeout(() => {
          toast.classList.remove('show');
          if (copyText) copyText.textContent = `@${profileData.email} (Copy)`;
        }, 2200);
      }
    });
  });
}
