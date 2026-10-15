import { profileData } from '../data/profile';

export function renderContact(): string {
  const currentYear = new Date().getFullYear();

  return `
    <section id="contact" class="contact-section">
      <div class="archive-container">
        <div class="section-label">06 / Contact & Inquiries</div>

        <h2 class="contact-headline">
          Inquiries & Strategic Collaborations
        </h2>

        <p class="contact-lead">
          I am always open to discussing distributed systems challenges, high-scale fintech or mobility platforms, and engineering advisory.
        </p>

        <div class="contact-actions">
          <button id="copy-email-action" class="contact-email-btn" title="Click to copy email address">
            <span id="copy-text-label">Copy ${profileData.email}</span>
          </button>
          
          <div class="contact-social-links">
            <a href="mailto:${profileData.email}" class="text-link">Send Email</a>
            <span>•</span>
            <a href="${profileData.github}" target="_blank" rel="noopener noreferrer" class="text-link">GitHub</a>
            <span>•</span>
            <a href="${profileData.linkedin}" target="_blank" rel="noopener noreferrer" class="text-link">LinkedIn</a>
          </div>
        </div>

        <div class="colophon-footer">
          <div>
            <span>© ${currentYear} ${profileData.name}</span>
            <span>•</span>
            <span>${profileData.domain}</span>
          </div>
          <div>
            <span>Typeset in Newsreader & Plus Jakarta Sans</span>
          </div>
        </div>
      </div>
    </section>

    <div id="simple-toast" class="archive-toast" aria-hidden="true">
      Copied to clipboard: ${profileData.email}
    </div>
  `;
}

export function initContactEvents(): void {
  const copyBtn = document.getElementById('copy-email-action');
  const copyLabel = document.getElementById('copy-text-label');
  const toast = document.getElementById('simple-toast');

  copyBtn?.addEventListener('click', () => {
    navigator.clipboard.writeText(profileData.email).then(() => {
      if (copyLabel) copyLabel.textContent = 'Copied to Clipboard';
      if (toast) {
        toast.classList.add('visible');
        setTimeout(() => toast.classList.remove('visible'), 2800);
      }
      setTimeout(() => {
        if (copyLabel) copyLabel.textContent = `Copy ${profileData.email}`;
      }, 2500);
    });
  });
}
