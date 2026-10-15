import { renderIcon } from './icons';

export function showToast(message: string, icon = 'CheckCircle2', duration = 3200): void {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-card';
  toast.innerHTML = `
    <span class="toast-icon">${renderIcon(icon, 'icon-emerald', 18)}</span>
    <span class="toast-text">${message}</span>
  `;

  container.appendChild(toast);

  // Trigger enter animation
  requestAnimationFrame(() => {
    toast.classList.add('toast-visible');
  });

  setTimeout(() => {
    toast.classList.remove('toast-visible');
    toast.classList.add('toast-exit');
    setTimeout(() => {
      toast.remove();
      if (container && container.children.length === 0) {
        container.remove();
      }
    }, 300);
  }, duration);
}
