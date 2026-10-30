import type { ImageMetadata } from 'astro';

// Every image and video under src/assets, keyed by file name without the extension.
// A file only has to exist with the right name to be picked up; nothing else changes.
const imageFiles = import.meta.glob<{ default: ImageMetadata }>('/src/assets/**/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
});
const videoFiles = import.meta.glob<string>('/src/assets/video/*.{mp4,webm}', {
  eager: true,
  query: '?url',
  import: 'default',
});

const baseName = (path: string) => path.split('/').pop()!.replace(/\.[^.]+$/, '');

const images = new Map<string, ImageMetadata>();
for (const [path, mod] of Object.entries(imageFiles)) images.set(baseName(path), mod.default);

const videos = new Map<string, { mp4?: string; webm?: string }>();
for (const [path, url] of Object.entries(videoFiles)) {
  const id = baseName(path);
  const entry = videos.get(id) ?? {};
  if (path.endsWith('.webm')) entry.webm = url;
  else entry.mp4 = url;
  videos.set(id, entry);
}

export const findImage = (...ids: (string | undefined)[]) => {
  for (const id of ids) if (id && images.has(id)) return images.get(id)!;
  return undefined;
};

export const findVideo = (id: string) => videos.get(id);
export const hasImage = (id: string) => images.has(id);
