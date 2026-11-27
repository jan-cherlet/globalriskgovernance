// Reads an icon from public/icons and returns it as inline SVG markup (no extra request, follows tokens.css).
import { readFileSync } from 'node:fs';
const cache = new Map();
export function icon(file, { size = null, label = null, cls = '' } = {}) {
  if (!cache.has(file)) cache.set(file, readFileSync(new URL(`../../public/icons/${file}`, import.meta.url), 'utf-8'));
  let svg = cache.get(file).trim();
  svg = svg.replace(/<title>[\s\S]*?<\/title>/, label ? `<title>${label}</title>` : '');
  svg = svg.replace(/ width="100" height="100"/, size ? ` width="${size}" height="${size}"` : '');
  svg = svg.replace(/ role="img"/, label ? ' role="img"' : ' aria-hidden="true" focusable="false"');
  if (cls) svg = svg.replace('<svg ', `<svg class="${cls}" `);
  // make clip-path ids unique per file so two icons on one page cannot collide
  const id = file.replace(/\W/g, '');
  svg = svg.replace(/id="lens"/g, `id="lens-${id}"`).replace(/url\(#lens\)/g, `url(#lens-${id})`);
  return svg;
}
