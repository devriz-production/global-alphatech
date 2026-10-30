// Generates the favicon PNGs, app icons and the social sharing image (og.png) from SVG.
// Run with: npm run brand   (only needed again if the mark, colours or tagline change)
import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const pub = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'public');

const INK = '#0e1030';
const PAPER = '#f5f4ef';
const ALPHA = '#6A3DF0';

const mark = (stroke, nucleus, s = 1.8) => `
  <g fill="none" stroke="${stroke}" stroke-width="${s}">
    <ellipse cx="16" cy="16" rx="13" ry="5.2"/>
    <ellipse cx="16" cy="16" rx="13" ry="5.2" transform="rotate(60 16 16)"/>
    <ellipse cx="16" cy="16" rx="13" ry="5.2" transform="rotate(120 16 16)"/>
  </g>
  <circle cx="16" cy="16" r="3" fill="${nucleus}"/>
  <circle cx="29" cy="16" r="2.6" fill="${ALPHA}"/>`;

// App icon: paper mark on an ink tile.
const icon = (size, pad = 0.18) => {
  const inner = size * (1 - pad * 2);
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    <rect width="${size}" height="${size}" fill="${INK}"/>
    <g transform="translate(${size * pad} ${size * pad}) scale(${inner / 32})">${mark(PAPER, PAPER)}</g>
  </svg>`);
};

// Favicon: ink mark on transparent.
const fav = (size) =>
  Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 32 32">${mark(INK, INK)}</svg>`);

await sharp(fav(32)).png().toFile(path.join(pub, 'favicon-32.png'));
await sharp(icon(180, 0.16)).png().toFile(path.join(pub, 'apple-touch-icon.png'));
await sharp(icon(192)).png().toFile(path.join(pub, 'icon-192.png'));
await sharp(icon(512)).png().toFile(path.join(pub, 'icon-512.png'));

// Social sharing image, 1200 x 630. Text is converted by the system's SVG renderer, so it
// uses a generic sans-serif; the layout carries the brand rather than the exact font.
const og = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${INK}"/>
  <g transform="translate(860 120) scale(14)" opacity="0.12">${mark(PAPER, PAPER, 1.2)}</g>
  <g transform="translate(80 80) scale(2.2)">${mark(PAPER, PAPER)}</g>
  <text x="168" y="125" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="34" fill="${PAPER}" font-weight="700">Global <tspan font-weight="300" fill="#A68CFF">ALPHA</tspan></text>
  <text x="80" y="370" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="84" font-weight="800" fill="${PAPER}" letter-spacing="-3">We grow businesses</text>
  <text x="80" y="460" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="84" font-weight="300" fill="#A68CFF" letter-spacing="-3">online.</text>
  <text x="80" y="560" font-family="Consolas, Menlo, monospace" font-size="22" fill="#A3A5C2" letter-spacing="2">SEO  /  ADS  /  WEBSITES  /  APPS  /  BRANDING  /  DELHI</text>
</svg>`);
await sharp(og).png().toFile(path.join(pub, 'og.png'));

console.log('Brand files written to public/: favicon-32.png, apple-touch-icon.png, icon-192.png, icon-512.png, og.png');
