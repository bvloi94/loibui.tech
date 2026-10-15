import { profileData } from '../data/profile';
import { renderIcon } from '../utils/icons';
import { showToast } from '../utils/toast';

export function renderResumeModal(): string {
  return `
    <div id="resume-modal" class="modal-backdrop" aria-hidden="true" role="dialog" aria-modal="true">
      <div class="modal-dialog glass-panel">
        <div class="modal-header">
          <div class="modal-title-group">
            <span class="modal-badge">${renderIcon('FileText', '', 14)} Curriculum Vitae</span>
            <h2 class="modal-title">${profileData.name} — Professional Resume</h2>
          </div>
          <div class="modal-actions">
            <button id="print-resume-btn" class="btn btn-secondary btn-sm" title="Print or save as PDF">
              ${renderIcon('Printer', '', 16)}
              <span>Print / PDF</span>
            </button>
            <button id="close-resume-btn" class="icon-btn" aria-label="Close modal">
              ${renderIcon('X', '', 20)}
            </button>
          </div>
        </div>

        <div class="modal-body printable-resume" id="printable-resume">
          <!-- Resume Header -->
          <div class="resume-sheet-header">
            <div>
              <h1 class="resume-name">${profileData.name}</h1>
              <p class="resume-role">${profileData.roleTitle}</p>
              <p class="resume-meta">
                <span>${profileData.location}</span> • 
                <a href="mailto:${profileData.email}">${profileData.email}</a> • 
                <a href="https://${profileData.domain}" target="_blank">${profileData.domain}</a>
              </p>
            </div>
            <div class="resume-qr">
              <span class="brand-monogram">LB</span>
              <span class="qr-label">${profileData.domain}</span>
            </div>
          </div>

          <hr class="resume-divider" />

          <!-- Executive Summary -->
          <div class="resume-section">
            <h3 class="resume-section-title">Professional Summary</h3>
            <p class="resume-text">${profileData.detailedBio.join(' ')}</p>
          </div>

          <!-- Career Experience -->
          <div class="resume-section">
            <h3 class="resume-section-title">Work Experience & Leadership</h3>
            <div class="resume-jobs-list">
              ${profileData.milestones
                .map(
                  (m) => `
                    <div class="resume-job-item">
                      <div class="resume-job-header">
                        <div>
                          <strong class="resume-job-role">${m.role}</strong>
                          <span class="resume-job-company"> — ${m.company} (${m.type})</span>
                        </div>
                        <span class="resume-job-period">${m.period}</span>
                      </div>
                      <p class="resume-job-summary">${m.summary}</p>
                      <ul class="resume-job-achievements">
                        ${m.keyAchievements.map((ach) => `<li>${ach}</li>`).join('')}
                      </ul>
                      <p class="resume-job-tech">
                        <strong>Technologies:</strong> ${m.technologies.join(', ')}
                      </p>
                    </div>
                  `
                )
                .join('')}
            </div>
          </div>

          <!-- Technical Skills -->
          <div class="resume-section">
            <h3 class="resume-section-title">Core Competencies</h3>
            <div class="resume-skills-grid">
              ${profileData.skillCategories
                .map(
                  (cat) => `
                    <div class="resume-skill-cat">
                      <strong>${cat.title}:</strong>
                      <span>${cat.skills.map((s) => s.name).join(', ')}</span>
                    </div>
                  `
                )
                .join('')}
            </div>
          </div>

          <!-- Education -->
          <div class="resume-section">
            <h3 class="resume-section-title">Education & Credentials</h3>
            <div class="resume-job-item">
              <div class="resume-job-header">
                <div>
                  <strong class="resume-job-role">Bachelor of Science in Computer Science & Engineering</strong>
                  <span class="resume-job-company"> — Honors Graduate</span>
                </div>
                <span class="resume-job-period">2014 — 2018</span>
              </div>
              <p class="resume-job-summary">Core Focus: Distributed Systems, Operating Systems, Computer Networks, and High-Performance Database Systems.</p>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button id="copy-resume-email" class="btn btn-secondary btn-sm">
            ${renderIcon('Copy', '', 14)}
            <span>Copy Contact Email</span>
          </button>
          <button id="close-modal-bottom-btn" class="btn btn-primary btn-sm">
            <span>Close Preview</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

export function initResumeModalEvents(): void {
  const modal = document.getElementById('resume-modal');
  const openBtns = [
    document.getElementById('cv-quick-view-btn'),
    document.getElementById('mobile-cv-btn'),
    document.getElementById('hero-cv-btn')
  ];
  const closeBtn = document.getElementById('close-resume-btn');
  const closeBottomBtn = document.getElementById('close-modal-bottom-btn');
  const printBtn = document.getElementById('print-resume-btn');
  const copyEmailBtn = document.getElementById('copy-resume-email');

  const openModal = () => {
    if (!modal) return;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  openBtns.forEach((btn) => btn?.addEventListener('click', openModal));
  closeBtn?.addEventListener('click', closeModal);
  closeBottomBtn?.addEventListener('click', closeModal);

  // Close on clicking backdrop outside dialog
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Print button
  printBtn?.addEventListener('click', () => {
    window.print();
  });

  // Copy email from modal
  copyEmailBtn?.addEventListener('click', () => {
    navigator.clipboard.writeText(profileData.email).then(() => {
      showToast('Email copied to clipboard: ' + profileData.email, 'CheckCircle2');
    });
  });

  // ESC key to close
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('is-open')) {
      closeModal();
    }
  });
}
