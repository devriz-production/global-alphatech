// Writes IMAGE-PROMPTS.md from src/data/slots.ts, so the brief and the site never disagree
// about a file name or size. Run with: npm run prompts
import { readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { slots, houseStyle, videoStyle } from '../src/data/slots.ts';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const walk = async (dir) => {
  const out = [];
  try {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) out.push(...(await walk(full)));
      else out.push(entry.name);
    }
  } catch {}
  return out;
};
const files = await walk(path.join(root, 'src', 'assets'));
const haveImage = new Set(files.filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f)).map((f) => f.replace(/\.[^.]+$/, '')));
const haveVideo = new Set(files.filter((f) => /\.(mp4|webm)$/i.test(f)).map((f) => f.replace(/\.[^.]+$/, '')));

const gcd = (a, b) => (b ? gcd(b, a % b) : a);
const ratio = (w, h) => `${w / gcd(w, h)}:${h / gcd(w, h)}`;
const status = (have) => (have ? 'supplied' : 'needed');

const imageBlock = (s) => {
  const lines = [
    `### ${s.id}`,
    '',
    `- **Save as:** \`src/assets/photo/${s.id}.jpg\``,
    `- **Size:** ${s.w} x ${s.h} px (${ratio(s.w, s.h)})`,
    `- **Used on:** ${s.usedOn}`,
    `- **Status:** ${status(haveImage.has(s.id))}`,
    '',
    '```text',
    s.kind === 'generate' ? `${s.prompt} ${houseStyle} Aspect ratio ${ratio(s.w, s.h)}.` : s.prompt,
    '```',
  ];
  if (s.video) {
    lines.push(
      '',
      `**Motion version${s.video.required ? '' : ' (optional)'}:** save as \`src/assets/video/${s.id}.mp4\`, ${s.video.seconds} seconds. Status: ${status(haveVideo.has(s.id))}. Generate it from the still above (image to video) so the two match; the still becomes the poster frame.`,
      '',
      '```text',
      `${s.video.prompt} ${videoStyle}`,
      '```',
    );
  }
  return lines.join('\n') + '\n';
};

const generate = slots.filter((s) => s.kind === 'generate');
const real = slots.filter((s) => s.kind === 'real-photo');
const shots = slots.filter((s) => s.kind === 'screenshot');
const required = slots.filter((s) => s.video?.required);
const optional = slots.filter((s) => s.video && !s.video.required);
const doneImages = slots.filter((s) => haveImage.has(s.id)).length;

const md = `# Image and video prompts for the Global Alpha Tech site

${doneImages} of ${slots.length} images supplied. ${required.filter((s) => haveVideo.has(s.id)).length} of ${required.length} required videos supplied. This file is generated from \`src/data/slots.ts\` by \`npm run prompts\`; edit that file, not this one.

## How to hand images and videos back

1. Generate each image with its prompt, at the size shown or larger.
2. Save it with the exact file name given (\`.jpg\`, \`.png\` or \`.webp\` all work) in \`src/assets/photo/\`.
3. For a video, save it as \`.mp4\` (or \`.webm\`) with the same name in \`src/assets/video/\`. Keep the matching still too: it is shown while the video loads and to visitors who have reduced motion turned on.
4. Run \`npm run build\`. Each placeholder fills itself; images are resized and compressed automatically.

Nothing in the code needs to change. Until a file arrives, its spot on the site shows a striped panel labelled with the file name and size, so gaps are easy to find.

## House style

Every image prompt already ends with this, so the set looks like one shoot:

> ${houseStyle}

Every video prompt ends with:

> ${videoStyle}

The idea behind the set: each service is shown as a calm, tactile **still life metaphor** (a compass for strategy, steps for SEO, a prism for ads, a funnel for lead generation) on the same indigo and paper set with one violet light. That keeps the site free of generic stock imagery and makes eleven different services look like one studio.

Checks before you accept an image: no readable text, numbers or logos anywhere (generators love to add them on screens and paper), hands look natural, the violet is a light accent rather than a wash, and any area the prompt says to keep empty really is empty.

## Your logo

Not a prompt, a file. Export the official logo and save it as \`src/assets/brand/logo.svg\` (or \`logo.png\` at 600 px wide or more, transparent background). It replaces the typeset version in the header automatically. A version that works on dark backgrounds is useful later for the footer.

## Videos the design is built around (${required.length})

These two loop in the background. They are generated from the stills in the same section, so make the still first.

${required.map(imageBlock).join('\n')}
## Images to generate (${generate.filter((s) => !s.video?.required).length})

${optional.length} of these also have an optional motion version. Add it whenever you like; the video replaces the still on the page.

${generate.filter((s) => !s.video?.required).map(imageBlock).join('\n')}
## Real photographs (${real.length})

These show the actual team and office, so a generated image should only ever be a temporary stand in. Use a phone on a bright day if nothing else: natural light, landscape orientation, a steady hand.

${real.map(imageBlock).join('\n')}
## Project screenshots (${shots.length})

The best image for a project is the project itself. For each one, open the client's live website on a laptop at full width and take a clean screenshot of the homepage or the best page (or use a browser extension that captures at 2400 px wide). Ask the client's permission first. If a client cannot be shown, use the stand in prompt.

${shots.map(imageBlock).join('\n')}`;

await writeFile(path.join(root, 'IMAGE-PROMPTS.md'), md);
console.log(`IMAGE-PROMPTS.md written: ${slots.length} slots, ${doneImages} images supplied.`);
