# Global Alpha Tech website

Website for Global Alpha Tech Security Pvt. Ltd., a digital marketing and web studio in Laxmi Nagar, Delhi, replacing the WordPress site at globalalphatech.com. Static Astro 7 build with Tailwind v4, uploaded by hand to Hostinger. Owner: Nitin (tomar@devrizhealthcare.in), who directs the work and is not a full-time developer, so explain changes in plain language.

Read `README.md` first: commands, file map, design rationale and the list of facts still waiting on the company's sign-off. `HOSTING.md` covers deployment. `IMAGE-PROMPTS.md` lists every image and video slot with its prompt (generated from `src/data/slots.ts` by `npm run prompts`; never edit it by hand).

## Working here

- `npm run dev` serves on port 5190 (launch config `alphatech-dev`). `npm run check` builds and tests every link; run it before calling anything done.
- Content lives in `src/data/*.ts` and `src/content/**/*.md`. Adding a service, project or article there creates its page and links. Do not hand-write pages for individual services or posts.
- Do not invent facts about the company (figures, awards, partners, clients, years, people). If something is not in `src/data` or on the old site, ask, or add it to the "Facts to confirm" list in the README.

## Design rules (do not break without being asked)

- Colours: paper, indigo ink and one accent, the logo violet (`alpha`). No gradients on surfaces, no glassmorphism, no glow.
- Headlines are two weights, heavy then light, after the logo lockup (`t-h1`/`t-h2` plus `.light`). Bricolage Grotesque for display, Geist for text, Geist Mono for labels.
- Use the semantic colour classes (`bg-bg`, `text-fg`, `text-muted`, `border-line`) so components work inside `.theme-night` sections. No raw hex in page markup.
- No em or en dashes in copy; `npm run check` fails if one appears. British spelling.
- One label for the main call to action: "Start a project", linking to `/contact/`.
- Motion only with opacity and transform, observers instead of scroll listeners, and everything respects reduced motion.

## Images

Nitin generates images and videos himself and drops them in by file name. Do not generate them with connected tools unless he asks. Real people, the team and the office stay real photographs. Client portraits are never generated; the quotes slider uses initials.
