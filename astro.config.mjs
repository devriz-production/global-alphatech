import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// The contact and careers forms post to public/api/enquiry.php, which only runs on
// Hostinger. In `npm run dev` there is no PHP, so this stands in for it: it checks
// the same required fields and answers the way the real handler does.
const devEnquiry = {
  name: 'dev-enquiry-endpoint',
  configureServer(server) {
    server.middlewares.use('/api/enquiry.php', (req, res) => {
      if (req.method !== 'POST') {
        res.statusCode = 405;
        return res.end(JSON.stringify({ ok: false, error: 'method' }));
      }
      let raw = '';
      req.on('data', (c) => (raw += c));
      req.on('end', () => {
        const fields = Object.fromEntries(new URLSearchParams(raw));
        const errors = {};
        if (!fields.name?.trim()) errors.name = 'Enter your name.';
        if (!/^\S+@\S+\.\S+$/.test(fields.email ?? '')) errors.email = 'Enter an email address in the format name@example.com.';
        if (fields.consent !== 'yes') errors.consent = 'Please tick this box so we can reply to you.';
        if (!fields.message?.trim()) errors.message = 'Tell us a little about what you need.';
        const ok = Object.keys(errors).length === 0;
        console.log(`[dev enquiry] ${fields.form ?? 'contact'} from ${fields.name ?? '?'}: ${ok ? 'accepted' : 'rejected'}`);
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = ok ? 200 : 422;
        res.end(JSON.stringify(ok ? { ok: true } : { ok: false, errors }));
      });
    });
  },
};

// Static build. Every route is a folder with an index.html, so URLs end in a slash
// and match the addresses the old WordPress site published (/about/, /contact/).
export default defineConfig({
  site: 'https://globalalphatech.com',
  trailingSlash: 'always',
  compressHTML: true,
  devToolbar: { enabled: false },
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => !/\/(404|thank-you)\/$/.test(page),
    }),
  ],
  vite: { plugins: [tailwindcss(), devEnquiry] },
});
