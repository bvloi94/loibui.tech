import { icons } from 'lucide';

export function renderIcon(
  iconName: string,
  className = '',
  size = 20
): string {
  const iconMap = icons as unknown as Record<string, [string, Record<string, string>][]>;
  const iconData = iconMap[iconName] || iconMap['Sparkles'] || [];
  
  const children = iconData
    .map(([tag, attrs]) => {
      const attrStr = Object.entries(attrs)
        .map(([k, v]) => `${k}="${v}"`)
        .join(' ');
      return `<${tag} ${attrStr}></${tag}>`;
    })
    .join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-icon ${className}">${children}</svg>`;
}
