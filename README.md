# Global Alpha Tech website

A from-scratch rebuild of globalalphatech.com, replacing the WordPress site (whose Services and Portfolio pages were empty and whose Careers and Pricing links were broken). Static Astro build with Tailwind CSS, deployed by uploading files to Hostinger. No database, no plugins, nothing to update.

- **27 pages:** home, services overview, 11 service pages, work, about, pricing, insights (blog) with 4 articles, careers, contact, privacy policy, terms, thank you, 404.
- **Working features:** services mega menu, mobile menu, "where to start" service finder, hover previews on the services list, client quotes slider, work filter, FAQ accordions, contact and careers forms that email the studio, floating WhatsApp button, redirects from every old WordPress address, sitemap and search engine markup.
- **Images and videos:** every spot is a named placeholder. See [IMAGE-PROMPTS.md](IMAGE-PROMPTS.md) for the prompt, size and file name for each one.

## Commands

Run these in this folder.

```bash
npm install
```

```bash
npm run dev
```

Opens the site at http://localhost:5190 and reloads as you edit. Forms work here too: a stand-in answers instead of the real PHP mailer, and prints each submission in the terminal.

```bash
npm run check
```

Builds the site into `dist/` and tests every page: broken links, missing anchors, titles, descriptions, one main heading per page, and no em or en dashes in the copy. Run it before every upload.

```bash
npm run prompts
```

Rewrites `IMAGE-PROMPTS.md` from `src/data/slots.ts`, including which images and videos have been supplied so far.

```bash
npm run brand
```

Regenerates the favicons, app icons and the social sharing image (`public/og.png`). Only needed if the mark or colours change.

## Adding images and videos

1. Pick a slot in [IMAGE-PROMPTS.md](IMAGE-PROMPTS.md) and generate it with the prompt given.
2. Save it with the exact name shown: images in `src/assets/photo/`, videos in `src/assets/video/`.
3. Run `npm run dev` or `npm run build`. The placeholder is replaced, and images are resized and converted to WebP automatically.

The official logo goes in `src/assets/brand/logo.svg` (or `.png`). Until then the header shows a typeset version of the lockup.

## Where things live

| To change | Edit |
|---|---|
| Phone, email, address, WhatsApp, social links, analytics ID | `src/data/site.ts` |
| Services: names, copy, deliverables, FAQs, tools | `src/data/services.ts` (adding an entry creates its page, menu link, footer link and form option) |
| Client projects and quotes | `src/data/work.ts` |
| Homepage FAQs | `src/data/faqs.ts` |
| Process steps, reasons to choose us, industries, team disciplines, vision | `src/data/company.ts` |
| Pricing models and starting prices | `src/data/pricing.ts` |
| Careers roles (set `open: true` to show "Hiring now") | `src/data/careers.ts` |
| Image and video slots and their prompts | `src/data/slots.ts` |
| Blog articles | `src/content/insights/*.md` (a new file becomes a new article) |
| Privacy policy, terms | `src/content/legal/*.md` |
| Colours, type, buttons, animation | `src/styles/global.css` |
| Form email address and spam settings | `public/api/enquiry.php` (top of file) |
| Redirects from old addresses | `public/.htaccess` |

## Design

The brief was a site that does not look generated. The decisions behind it:

- **Brand first.** The colours come from the existing logo: the deep navy of "Global" becomes the ink, the violet of "ALPHA" becomes the single accent. The logo's bold-then-thin lockup becomes the headline system: every headline is set heavy, then light (Bricolage Grotesque at 760 and 260). The atom in the logo becomes the orbit mark used as the favicon, the marquee separator and background watermarks.
- **One accent, used sparingly.** No gradients, no glass, no glowing blobs. Violet only marks what matters: the rotating word, active links, numbers, the main button on dark sections.
- **Editorial layout.** Asymmetric "staircase" hero headline, numbered section labels in mono type, hairline grids instead of shadowed cards, generous white space.
- **Proof over claims.** Clients are quoted in their own words. No invented statistics, awards or partner badges (see "Facts to confirm").
- **Imagery as one shoot.** Every service is shown as a tactile still-life metaphor (a compass for strategy, a staircase for SEO, a prism for ads, a funnel for lead generation) on the same indigo and paper set with one violet light. Real people and the real office are kept as real photographs.

External references studied for direction:

| Reference | What was borrowed |
|---|---|
| Metalab (metalab.com) | Oversized editorial type, asymmetric composition, restraint |
| NoGood (nogood.io) | Growth agency positioning, dark proof sections, capability marquee |
| Linear and Vercel | Hairline grids, mono labels, precise spacing and numbering |
| Basement Studio and Locomotive | Hover image previews on lists, oversized footer wordmark, kinetic marquee |
| Pentagram and Instrument | Numbered service index, case studies told through the client's words |

Motion is limited to opacity and movement, respects the "reduce motion" setting, and pages fade between each other in browsers that support view transitions.

## Facts to confirm before launch

These are drafted sensibly but the company must confirm them. Each is easy to change in the file named.

1. **Testimonials and work** (`src/data/work.ts`). The ten quotes and seven projects come from the old site. Confirm each client is real, happy to be named, and described accurately. The old site attached Apollo, MakeMyTrip, Amity, Accenture, KPMG, UrbanClap, Cult.Fit and Conde Nast to these people; those names were removed because they implied those companies were clients.
2. **Removed claims.** "Best digital marketing agency in Delhi 2025" and the Google Partner, Meta Marketing Partner, ISO and DMCA badges were not carried over. Add any that can be backed by a certificate to `credentials` in `src/data/site.ts` and they appear on the About page.
3. **WhatsApp** (`src/data/site.ts`). The buttons use 7703882098. Confirm it is on WhatsApp, or set `whatsapp: ''` to hide them.
4. **Social profiles.** Only Instagram (gats.limited) is linked; the old Facebook, Pinterest and X links pointed to those sites' home pages. Add real profile addresses to `social`.
5. **Office hours.** Not shown until `hours` is filled in.
6. **Commitments the copy makes.** Accounts, domains and code set up in the client's name ("100% of accounts in your name" on the homepage), one point of contact, dated milestones, weekly updates and a monthly report on retainers, ad spend billed separately, and "we never ask candidates for money". Remove any the studio will not stand behind (`src/data/company.ts`, `src/data/pricing.ts`, homepage).
7. **Prices.** All three models say "Quote on request". Add a starting price to `from` in `src/data/pricing.ts` to show it.
8. **Budget ranges** offered in the contact form (`src/components/EnquiryForm.astro`).
9. **Careers.** No role is marked as open. Set `open: true` on any live vacancy.
10. **Legal pages.** The privacy policy (which refers to India's DPDP Act 2023) and terms are sensible starting points, not legal advice. Have them reviewed.
11. **The migrated article** "Top Digital Marketing Agency in Delhi 2026" was rewritten to remove unverifiable superlatives. It keeps its old address through a redirect.
