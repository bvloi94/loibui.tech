import { profileData } from '../data/profile';
import { renderIcon } from '../utils/icons';
import { showToast } from '../utils/toast';

export function renderContact(): string {
  return `
    <section id="contact" class="contact-section">
      <div class="container">
        <div class="section-header text-center">
          <div class="section-badge">
            ${renderIcon('Mail', '', 14)}
            <span>Direct Channel</span>
          </div>
          <h2 class="section-title">
            Let's Connect & <span class="text-gradient">Collaborate</span>
          </h2>
          <p class="section-subtitle">
            Whether you are looking for technical leadership, distributed systems advisory, or an impactful engineering collaboration.
          </p>
        </div>

        <div class="contact-grid">
          <!-- Left: Direct Info & Quick Copy -->
          <div class="contact-info-panel glass-panel">
            <div class="contact-card-top">
              <div class="contact-avatar-small">
                <img src="${profileData.avatar}" alt="${profileData.name}" width="64" height="64" />
                <span class="online-indicator"></span>
              </div>
              <div>
                <h3 class="contact-person-name">${profileData.name}</h3>
                <p class="contact-person-role">${profileData.roleTitle}</p>
                <p class="contact-domain-highlight">${profileData.domain}</p>
              </div>
            </div>

            <p class="contact-pitch">
              I am always keen to discuss challenging engineering problems, high-scale architectures, and strategic technical roles. Feel free to copy my direct email or submit the form.
            </p>

            <div class="email-copy-box">
              <div class="email-details">
                <span class="email-label">Direct Email</span>
                <span class="email-value" id="display-email">${profileData.email}</span>
              </div>
              <button id="copy-email-btn" class="btn btn-secondary btn-sm" title="Copy email address to clipboard">
                ${renderIcon('Copy', '', 14)}
                <span id="copy-email-text">Copy Email</span>
              </button>
            </div>

            <div class="contact-meta-list">
              <div class="contact-meta-item">
                <div class="meta-icon">${renderIcon('MapPin', '', 16)}</div>
                <div>
                  <span class="meta-label">Location</span>
                  <span class="meta-val">${profileData.location}</span>
                </div>
              </div>
              <div class="contact-meta-item">
                <div class="meta-icon">${renderIcon('Clock', '', 16)}</div>
                <div>
                  <span class="meta-label">Timezone</span>
                  <span class="meta-val">UTC+7 (Indochina Time) • Flexible for global syncs</span>
                </div>
              </div>
              <div class="contact-meta-item">
                <div class="meta-icon">${renderIcon('CheckCircle2', 'text-emerald', 16)}</div>
                <div>
                  <span class="meta-label">Availability</span>
                  <span class="meta-val">${profileData.availability}</span>
                </div>
              </div>
            </div>

            <div class="contact-social-grid">
              <a href="${profileData.github}" target="_blank" rel="noopener noreferrer" class="social-pill-btn">
                ${renderIcon('Github', '', 16)}
                <span>GitHub</span>
              </a>
              <a href="${profileData.linkedin}" target="_blank" rel="noopener noreferrer" class="social-pill-btn">
                ${renderIcon('Linkedin', '', 16)}
                <span>LinkedIn</span>
              </a>
              <a href="mailto:${profileData.email}" class="social-pill-btn">
                ${renderIcon('Mail', '', 16)}
                <span>Send Direct Mail</span>
              </a>
            </div>
          </div>

          <!-- Right: Interactive Inquiry Form -->
          <div class="contact-form-panel glass-panel">
            <h3 class="form-title">Send a Direct Inquiry</h3>
            <p class="form-desc">Fill out the quick form below to start a conversation.</p>

            <form id="contact-inquiry-form" class="inquiry-form" novalidate>
              <!-- Inquiry Type Selector -->
              <div class="form-group">
                <label class="form-label">Purpose of Inquiry</label>
                <div class="inquiry-type-pills" id="inquiry-type-group">
                  <label class="inquiry-radio-label">
                    <input type="radio" name="inquiryType" value="Advisory" checked />
                    <span class="radio-pill">Tech Advisory</span>
                  </label>
                  <label class="inquiry-radio-label">
                    <input type="radio" name="inquiryType" value="Leadership" />
                    <span class="radio-pill">Tech Lead Role</span>
                  </label>
                  <label class="inquiry-radio-label">
                    <input type="radio" name="inquiryType" value="Architecture" />
                    <span class="radio-pill">Architecture Review</span>
                  </label>
                  <label class="inquiry-radio-label">
                    <input type="radio" name="inquiryType" value="General" />
                    <span class="radio-pill">Say Hello</span>
                  </label>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="sender-name" class="form-label">Your Name *</label>
                  <input 
                    type="text" 
                    id="sender-name" 
                    name="name" 
                    class="form-input" 
                    placeholder="e.g. Alex Morgan" 
                    required 
                  />
                  <span class="form-error" id="name-error"></span>
                </div>

                <div class="form-group">
                  <label for="sender-email" class="form-label">Your Email *</label>
                  <input 
                    type="email" 
                    id="sender-email" 
                    name="email" 
                    class="form-input" 
                    placeholder="alex@company.com" 
                    required 
                  />
                  <span class="form-error" id="email-error"></span>
                </div>
              </div>

              <div class="form-group">
                <label for="sender-message" class="form-label">Message or Project Scope *</label>
                <textarea 
                  id="sender-message" 
                  name="message" 
                  rows="4" 
                  class="form-input form-textarea" 
                  placeholder="Share details about your system architecture challenges, team objectives, or timelines..." 
                  required
                ></textarea>
                <span class="form-error" id="message-error"></span>
              </div>

              <div class="form-submit-row">
                <button type="submit" id="submit-inquiry-btn" class="btn btn-primary btn-lg btn-block">
                  <span id="btn-submit-text">Send Message to Loi Bui</span>
                  ${renderIcon('Send', 'submit-icon', 16)}
                </button>
              </div>

              <div id="form-success-banner" class="form-success-banner" style="display: none;">
                <div class="success-icon">${renderIcon('CheckCircle2', 'text-emerald', 24)}</div>
                <div>
                  <h4>Message Delivered Successfully!</h4>
                  <p>Thank you for reaching out. I usually review inquiries within 24 hours.</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initContactEvents(): void {
  const copyBtn = document.getElementById('copy-email-btn');
  const copyText = document.getElementById('copy-email-text');
  const form = document.getElementById('contact-inquiry-form') as HTMLFormElement | null;
  const submitBtn = document.getElementById('submit-inquiry-btn') as HTMLButtonElement | null;
  const submitText = document.getElementById('btn-submit-text');
  const successBanner = document.getElementById('form-success-banner');

  // Copy email functionality
  copyBtn?.addEventListener('click', () => {
    navigator.clipboard.writeText(profileData.email).then(() => {
      showToast('Copied ' + profileData.email + ' to clipboard!', 'CheckCircle2');
      if (copyText) {
        copyText.textContent = 'Copied!';
        setTimeout(() => {
          copyText.textContent = 'Copy Email';
        }, 2500);
      }
    });
  });

  // Form handling
  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('sender-name') as HTMLInputElement;
    const emailInput = document.getElementById('sender-email') as HTMLInputElement;
    const msgInput = document.getElementById('sender-message') as HTMLTextAreaElement;

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const msgError = document.getElementById('message-error');

    // Reset errors
    if (nameError) nameError.textContent = '';
    if (emailError) emailError.textContent = '';
    if (msgError) msgError.textContent = '';

    let isValid = true;

    if (!nameInput.value.trim()) {
      if (nameError) nameError.textContent = 'Please enter your name.';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
      if (emailError) emailError.textContent = 'Please provide a valid email address.';
      isValid = false;
    }

    if (!msgInput.value.trim() || msgInput.value.trim().length < 10) {
      if (msgError) msgError.textContent = 'Please enter a message of at least 10 characters.';
      isValid = false;
    }

    if (!isValid) return;

    // Simulate sending state
    if (submitBtn && submitText) {
      submitBtn.disabled = true;
      submitText.textContent = 'Transmitting Message...';
    }

    setTimeout(() => {
      if (submitBtn && submitText) {
        submitBtn.disabled = false;
        submitText.textContent = 'Send Message to Loi Bui';
      }

      form.reset();
      if (successBanner) {
        successBanner.style.display = 'flex';
        successBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      showToast('Thank you! Your message has been sent to Loi Bui.', 'CheckCircle2', 4000);
    }, 900);
  });
}
