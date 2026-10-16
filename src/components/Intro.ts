import { profileData } from '../data/profile';

export function renderIntro(): string {
  return `
    <section id="intro">
      <div class="notice-box">
        Hello, I'm a Senior Full-Stack Engineer based in Vietnam!
      </div>

      <div class="profile-header-row">
        <div class="profile-intro-text">
          <h1 class="profile-name">${profileData.name}</h1>
          <p class="profile-tagline">Digital Craftsman / Senior Full-Stack Engineer ( Web / Mobile / Cloud )</p>
        </div>

        <div class="profile-avatar-wrap">
          <img 
            src="${profileData.avatar}" 
            alt="${profileData.name}" 
            class="profile-avatar"
            width="96" 
            height="96"
            loading="eager"
          />
        </div>
      </div>
    </section>
  `;
}
