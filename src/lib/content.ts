import type { MarkdownInstance } from 'astro';

// Insights (the blog) and legal pages are plain Markdown files. Adding a file to
// src/content/insights/ creates its page, its card on /insights/ and its sitemap entry.

type PostFront = {
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  updated?: string;
  category: string;
  services?: string[];
  draft?: boolean;
};

type LegalFront = { title: string; description: string; updated: string };

const postFiles = import.meta.glob<MarkdownInstance<PostFront>>('../content/insights/*.md', { eager: true });
const legalFiles = import.meta.glob<MarkdownInstance<LegalFront>>('../content/legal/*.md', { eager: true });

const slugOf = (path: string) => path.split('/').pop()!.replace(/\.md$/, '');
const words = (raw: string) => raw.replace(/[#>*_`\-|[\]()]/g, ' ').split(/\s+/).filter(Boolean).length;

export const posts = Object.entries(postFiles)
  .map(([path, mod]) => ({
    slug: slugOf(path),
    ...mod.frontmatter,
    minutes: Math.max(2, Math.round(words(mod.rawContent()) / 220)),
    Content: mod.Content,
    headings: mod.getHeadings(),
  }))
  .filter((p) => !p.draft)
  .sort((a, b) => b.date.localeCompare(a.date));

export const legal = Object.entries(legalFiles).map(([path, mod]) => ({
  slug: slugOf(path),
  ...mod.frontmatter,
  Content: mod.Content,
}));

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00+05:30`).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Kolkata' });
