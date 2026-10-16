export function renderAbout(): string {
  return `
    <section id="about">
      <h3 class="section-heading">Work</h3>
      <p class="about-paragraph">
        Loi is a Senior Full-Stack Engineer with 7+ years of experience engineering scalable web applications, mobile platforms, and distributed systems. He has engineered core systems across fintech (<a href="https://anfin.vn" target="_blank" rel="noopener noreferrer" style="color: var(--accent); text-decoration: underline;">Anfin</a>), nationwide mobility and payment gateways (<a href="https://futabus.vn" target="_blank" rel="noopener noreferrer" style="color: var(--accent); text-decoration: underline;">Futa Group</a>), connected vehicle IoT (<a href="https://www.denso.com" target="_blank" rel="noopener noreferrer" style="color: var(--accent); text-decoration: underline;">Denso Japan</a>), and low-latency blockchain data streaming pipelines.
      </p>

      <div class="about-actions">
        <a href="/cv_loibui.docx" download="Loi_Bui_CV.docx" class="btn-primary" title="Download CV Document">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          <span>Download CV (DOCX)</span>
        </a>

        <a href="#contact" class="btn-secondary">
          <span>Get in Touch &rarr;</span>
        </a>
      </div>
    </section>
  `;
}
