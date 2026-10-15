export function renderEducation(): string {
  return `
    <section id="education" class="archive-section">
      <div class="archive-container">
        <div class="section-label">03 / Education & Honors</div>

        <div class="education-list">
          <div class="education-entry">
            <div class="education-period">2012 — 2016</div>
            <div>
              <h3 class="education-degree">Bachelor of Software Engineering</h3>
              <div class="education-school">FPT University • Vietnam</div>
              <ul class="education-notes">
                <li>Recipient of Full-Tuition Academic Scholarship</li>
                <li>Core focus on Distributed Systems, Algorithms, and Software Architecture</li>
              </ul>
            </div>
          </div>

          <div class="education-entry">
            <div class="education-period">2009 — 2012</div>
            <div>
              <h3 class="education-degree">Specialization in Mathematics</h3>
              <div class="education-school">Hung Vuong Gifted High School</div>
              <ul class="education-notes">
                <li>Bronze Medalist, National Programming Olympiad (2011)</li>
                <li>First Prize, Youth Informatics Contest (City / Provincial Level, 2011)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
