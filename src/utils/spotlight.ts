export function initSpotlight(): void {
  // Check if reduced motion is requested
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  let rafId: number | null = null;
  let targetX = window.innerWidth / 2;
  let targetY = window.innerHeight / 2;
  let currentX = targetX;
  let currentY = targetY;

  window.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
    
    // Also update CSS custom properties on hoverable elements
    document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
  }, { passive: true });

  const ambient = document.getElementById('ambient-spotlight');

  function update() {
    // Smooth lerp for buttery smooth spotlight movement
    currentX += (targetX - currentX) * 0.12;
    currentY += (targetY - currentY) * 0.12;

    if (ambient) {
      ambient.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
    }

    rafId = requestAnimationFrame(update);
  }

  update();

  window.addEventListener('beforeunload', () => {
    if (rafId) cancelAnimationFrame(rafId);
  });
}
