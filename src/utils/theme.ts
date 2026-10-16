export type Theme = 'dark' | 'light';

const THEME_KEY = 'loibui_tech_theme_v2';

export function getPreferredTheme(): Theme {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === 'light' || stored === 'dark') {
    return stored;
  }
  // Default to light warm aesthetic (devas.life / craftz.dog style)
  return 'light';
}

export function setTheme(theme: Theme): void {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);
  
  // Dispatch custom event so UI components can react if needed
  window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
}

export function toggleTheme(): Theme {
  const current = (document.documentElement.getAttribute('data-theme') as Theme) || getPreferredTheme();
  const next: Theme = current === 'dark' ? 'light' : 'dark';
  setTheme(next);
  return next;
}

export function initTheme(): void {
  const initial = getPreferredTheme();
  setTheme(initial);
}
