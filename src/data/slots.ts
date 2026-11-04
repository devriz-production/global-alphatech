// Every photograph and video the site expects, in one place.
// Drop a file named <id>.jpg / .png / .webp into src/assets/photo/ (or <id>.mp4 / .webm into
// src/assets/video/) and the matching slot fills itself on the next build. Until then the page
// shows a labelled placeholder. IMAGE-PROMPTS.md is the readable version of this list:
// regenerate it with `npm run prompts` after editing anything here.

export type Slot = {
  id: string;
  w: number;
  h: number;
  usedOn: string;
  kind: 'generate' | 'real-photo' | 'screenshot';
  prompt: string;
  // A short looping video for the same spot. `required` slots are designed around motion;
  // the others are optional upgrades that replace the still when supplied.
  video?: { prompt: string; seconds: number; required?: boolean };
};

export const houseStyle =
  'Editorial still life and documentary photography for a design-led digital studio. Photorealistic, shot on a medium format camera. Palette: deep indigo navy (#0E1030), warm off-white paper (#F5F4EF) and one accent of electric violet light (#6A3DF0); everything else neutral. Soft directional light with crisp shadows, matte surfaces, precise composition and generous empty space. Where people or places appear they are contemporary Indian and natural, never posed. No text, letters, numbers, logos or readable screens anywhere. No watermark, no neon cyberpunk glow, no holograms, no robots, no floating icons, no lens flare, no stock-photo handshakes.';

export const videoStyle =
  'Cinematic product film look, photorealistic, 24 fps, slow and controlled camera motion, no cuts. Same palette as the stills: deep indigo, warm off-white and one electric violet accent light. No text, logos or readable screens. The last frame must match the first so the clip loops without a visible jump. Export H.264 MP4 at 1920 x 1080 or larger, under 8 MB, with no audio track.';

export const slots: Slot[] = [
  // ---- Homepage Wireframe Real Work Showcase (5 Image Slots @ 1600x1000) ---
  {
    id: 'home-img-1',
    w: 1600,
    h: 1000,
    usedOn: 'Homepage Card Section: img-1 (Center Column, Top) - Meta Ads Manager Multi-Platform Previews',
    kind: 'screenshot',
    prompt:
      'Meta Business Ads Manager showcasing high-converting multi-platform video ad creatives for Facebook, Instagram, and TikTok with safe 50px margins.',
  },
  {
    id: 'home-img-2',
    w: 1600,
    h: 1000,
    usedOn: 'Homepage Card Section: img-2 (Center Column, Middle) - Shopify Admin Panel & Store Themes',
    kind: 'screenshot',
    prompt:
      'Shopify Admin Panel (Themes / Dawn theme customization) showing desktop and mobile storefront mockups with centered safe margins.',
  },
  {
    id: 'home-img-3',
    w: 1600,
    h: 1000,
    usedOn: 'Homepage Card Section: img-3 (Center Column, Bottom) - Kotil Skin Science Live Clinic & Academy Website',
    kind: 'screenshot',
    prompt:
      'Kotil Skin Science live website header and hero with 17-in-1 Hydra Facial Technology, medical practitioner, and booking CTAs.',
  },
  {
    id: 'home-img-4',
    w: 1600,
    h: 1000,
    usedOn: 'Homepage Card Section: img-4 (Left Column, Bottom) - Devriz Professional D2C Skincare Storefront',
    kind: 'screenshot',
    prompt:
      'Devriz Professional D2C skincare e-commerce website showing storefront, coupon code, skin age test, and order tracker.',
  },
  {
    id: 'home-img-5',
    w: 1600,
    h: 1000,
    usedOn: 'Homepage Card Section: img-5 (Right Column, Top) - Devriz Group Corporate Enterprise Portal',
    kind: 'screenshot',
    prompt:
      'Devriz Group corporate enterprise website across 7 business sectors with safe margins and sub-second performance display.',
  },

  // ---- Homepage ----------------------------------------------------------------
  {
    id: 'home-hero-reel',
    w: 2560,
    h: 1440,
    usedOn: 'Homepage, the wide panel under the headline (shown cropped to a letterbox on large screens, so keep the subject in the middle band)',
    kind: 'generate',
    prompt:
      'A sculptural landscape of matte off-white paper blocks of varying heights on a deep indigo seamless set, arranged like a small city skyline that rises gently from left to right. A thin plane of electric violet light grazes across the tops of the blocks. Low camera at block height, 35mm, shallow depth of field, a soft haze in the air. Keep all important detail inside the middle 60 percent of the frame height.',
    video: {
      prompt:
        'Slow lateral dolly from left to right across the paper block skyline, camera at block height. The plane of violet light sweeps slowly across the tops of the blocks as if measuring them, then fades back. Haze drifts gently. 10 seconds, seamless loop.',
      seconds: 10,
      required: true,
    },
  },
  {
    id: 'home-cta-loop',
    w: 2560,
    h: 1440,
    usedOn: 'Dark "Start a project" band near the foot of most pages, behind the text at low opacity',
    kind: 'generate',
    prompt:
      'Macro of a clear glass prism on a dark indigo surface. A narrow beam of white light enters from the left and leaves as a thin band of violet light, throwing soft caustic patterns across the surface. Most of the frame is deep, quiet indigo. 100mm macro, very shallow depth of field.',
    video: {
      prompt:
        'The prism rotates a few degrees and back, very slowly. The violet band and the caustic patterns drift across the surface like light under water. Camera locked off. 8 seconds, seamless loop.',
      seconds: 8,
      required: true,
    },
  },

  // ---- Services (one each; also the hover preview on the homepage list) ---------
  {
    id: 'service-digital-marketing',
    w: 1600,
    h: 2000,
    usedOn: 'Digital Marketing Strategy page header and homepage services list',
    kind: 'generate',
    prompt:
      'A brass navigation compass resting on a fanned arc of matte off-white cards, each card a slightly different height, on a deep indigo seamless backdrop. A single beam of violet light grazes the edges of the cards from the right. Three quarter overhead angle, 80mm, crisp shadows, plenty of empty indigo space above the subject.',
    video: { prompt: 'Very slow push in towards the compass. The needle settles into place. The violet light along the card edges breathes gently brighter and dimmer. 8 seconds, seamless loop.', seconds: 8 },
  },
  {
    id: 'service-seo-services',
    w: 1600,
    h: 2000,
    usedOn: 'SEO Services page header and homepage services list',
    kind: 'generate',
    prompt:
      'A staircase of seven matte off-white paper blocks rising from left to right on a warm off-white surface in front of a deep indigo wall. A small polished glass sphere rests on the highest step and catches a single violet highlight. Low side light from the left, long soft shadows, 90mm, minimal and architectural.',
    video: { prompt: 'The camera glides slowly upward along the steps towards the glass sphere at the top. The violet highlight on the sphere grows a little stronger. 8 seconds, seamless loop.', seconds: 8 },
  },
  {
    id: 'service-performance-marketing',
    w: 1600,
    h: 2000,
    usedOn: 'Performance Marketing page header and homepage services list',
    kind: 'generate',
    prompt:
      'A triangular glass prism on a matte off-white plinth in a dark indigo room. A hard beam of white light enters from the left and leaves the prism as a narrow fan of violet and blue light that falls across the plinth. Clean, scientific, high contrast, 100mm macro.',
    video: { prompt: 'The prism turns a few degrees and the violet fan of light sweeps slowly across the plinth and back. Camera locked off. 8 seconds, seamless loop.', seconds: 8 },
  },
  {
    id: 'service-social-media-marketing',
    w: 1600,
    h: 2000,
    usedOn: 'Social Media Marketing page header and homepage services list',
    kind: 'generate',
    prompt:
      'Three smartphones standing upright in a staggered row on an off-white paper sweep. Their screens glow with soft abstract gradients of indigo and violet, with no interface, icons or text. Gentle reflections on the paper, soft top light, 85mm, shallow depth of field.',
    video: { prompt: 'The colour fields on the three screens shift slowly, like light moving through water, each out of step with the others. The camera drifts slightly sideways. 8 seconds, seamless loop.', seconds: 8 },
  },
  {
    id: 'service-lead-generation',
    w: 1600,
    h: 2000,
    usedOn: 'Lead Generation page header and homepage services list',
    kind: 'generate',
    prompt:
      'A clean laboratory glass funnel held in a matte black stand above a glass beaker on an off-white surface. Small matte off-white spheres sit inside the funnel and a few have collected in the beaker, one violet sphere among them. Deep indigo background, soft side light, precise and calm, 90mm.',
    video: { prompt: 'One sphere at a time drops through the funnel into the beaker in gentle slow motion. Camera locked off. 8 seconds, seamless loop.', seconds: 8 },
  },
  {
    id: 'service-email-marketing',
    w: 1600,
    h: 2000,
    usedOn: 'Email Marketing page header and homepage services list',
    kind: 'generate',
    prompt:
      'A neat stack of uncoated off-white envelopes on a deep indigo surface, the top envelope closed with a plain violet wax seal that carries no symbol. Raking light from the upper left shows the paper texture. Overhead angle, 70mm, generous empty space to the right of the stack.',
    video: { prompt: 'The top envelope slides gently forward off the stack while the camera pushes in slowly. 6 seconds, seamless loop.', seconds: 6 },
  },
  {
    id: 'service-website-design',
    w: 1600,
    h: 2000,
    usedOn: 'Website Design page header and homepage services list',
    kind: 'generate',
    prompt:
      "Top down view of a designer's desk: hand drawn wireframe sketches of web page layouts on off-white paper, drawn only with boxes and lines and no words, a graphite pencil, a steel ruler and three colour swatch chips in indigo, off-white and violet. Morning light from the left, crisp shadows, 50mm, flat lay with clean margins.",
    video: { prompt: 'Slow overhead drift across the sketches. Soft shadows move across the desk as if a cloud is passing outside. 8 seconds, seamless loop.', seconds: 8 },
  },
  {
    id: 'service-website-development',
    w: 1600,
    h: 2000,
    usedOn: 'Website Development page header and homepage services list',
    kind: 'generate',
    prompt:
      'Close up of a laptop on a dark desk at night. The screen shows only out of focus horizontal bands of coloured light that suggest code, with nothing readable. A small desk lamp casts violet light from the edge of the frame. Deep indigo room, a ceramic cup reflecting the glow. 50mm at f/1.4, very shallow depth of field.',
    video: { prompt: 'The blurred coloured bands on the screen scroll slowly upward. The lamp light stays steady. A slight parallax move from left to right. 8 seconds, seamless loop.', seconds: 8 },
  },
  {
    id: 'service-app-development',
    w: 1600,
    h: 2000,
    usedOn: 'App Development page header and homepage services list',
    kind: 'generate',
    prompt:
      'A smartphone in a minimal charging stand beside a paper prototype of an app: several phone sized cards of off-white card stock with simple drawn boxes and circles and no words, laid out in a flow and joined by a thin violet thread. Warm off-white surface, indigo wall, soft side light, 85mm.',
    video: { prompt: 'The camera tracks slowly along the violet thread from card to card and arrives at the phone, whose screen glows softly. 8 seconds, seamless loop.', seconds: 8 },
  },
  {
    id: 'service-branding-graphic-design',
    w: 1600,
    h: 2000,
    usedOn: 'Branding and Graphic Design page header and homepage services list',
    kind: 'generate',
    prompt:
      'A brand identity flat lay arranged on a precise grid on a deep indigo surface: blank off-white business cards, a folded letterhead, an envelope, a canvas tote bag and three colour swatch chips in indigo, off-white and violet. Every item is completely blank. Overhead, soft even light with gentle shadows, 50mm.',
    video: { prompt: 'Stop motion feel: the items slide into their places on the grid one by one until the layout is complete, then hold. 6 seconds.', seconds: 6 },
  },
  {
    id: 'service-digital-transformation-consulting',
    w: 1600,
    h: 2000,
    usedOn: 'Digital Transformation Consulting page header and homepage services list',
    kind: 'generate',
    prompt:
      'Overhead view of a meeting table with a large sheet of off-white paper showing a process flowchart drawn in pencil: rectangles, diamonds and arrows, no words. Blank violet and off-white sticky notes, two coffee cups, and the hands of two Indian professionals, one pointing at a shape. Soft daylight, 35mm, documentary feel.',
    video: { prompt: 'A hand draws a pencil arrow connecting two shapes on the flowchart while the camera drifts slowly overhead. 8 seconds.', seconds: 8 },
  },

  // ---- Work (real screenshots, uniform 16:10 @ 1600x1000) -------------------
  {
    id: 'work-kotil-skin-science',
    w: 1600,
    h: 1000,
    usedOn: 'Work page and homepage: Kotil Skin Science clinic and academy website',
    kind: 'screenshot',
    prompt: 'Kotil Skin Science live clinic and academy admissions website at 1600x1000 with safe margins.',
  },
  {
    id: 'work-shopify-store-dawn',
    w: 1600,
    h: 1000,
    usedOn: 'Work page and homepage: Shopify store architecture and theme development',
    kind: 'screenshot',
    prompt: 'Shopify admin panel and Dawn theme customization at 1600x1000 with safe margins.',
  },
  {
    id: 'work-meta-ads-acquisition',
    w: 1600,
    h: 1000,
    usedOn: 'Work page and homepage: Meta Ads performance campaign previews',
    kind: 'screenshot',
    prompt: 'Meta Ads Manager Facebook and Instagram ad campaign previews at 1600x1000 with safe margins.',
  },
  {
    id: 'work-devriz-ecommerce',
    w: 1600,
    h: 1000,
    usedOn: 'Work page and homepage: Devriz Professional D2C e-commerce website',
    kind: 'screenshot',
    prompt: 'Devriz Professional D2C e-commerce skincare storefront at 1600x1000 with safe margins.',
  },
  {
    id: 'work-devriz-group-portal',
    w: 1600,
    h: 1000,
    usedOn: 'Work page and homepage: Devriz Group enterprise corporate portal',
    kind: 'screenshot',
    prompt: 'Devriz Group corporate enterprise website across 7 sectors at 1600x1000 with safe margins.',
  },
  {
    id: 'work-devriz-group',
    w: 1024,
    h: 522,
    usedOn: 'Work page and homepage: Devriz Group enterprise corporate portal',
    kind: 'screenshot',
    prompt: 'Devriz Group corporate enterprise website across 7 sectors.',
  },
  {
    id: 'work-kotil-skin-science',
    w: 1899,
    h: 787,
    usedOn: 'Work page and homepage: Kotil Skin Science clinic and academy website',
    kind: 'screenshot',
    prompt: 'Kotil Skin Science live clinic and academy admissions website.',
  },
  {
    id: 'work-shopify-store-dawn',
    w: 455,
    h: 290,
    usedOn: 'Work page and homepage: Shopify store architecture and theme development',
    kind: 'screenshot',
    prompt: 'Shopify admin panel and Dawn theme customization.',
  },
  {
    id: 'work-meta-ads-acquisition',
    w: 2065,
    h: 1170,
    usedOn: 'Work page and homepage: Meta Ads performance campaign previews',
    kind: 'screenshot',
    prompt: 'Meta Ads Manager Facebook and Instagram ad campaign previews.',
  },
  {
    id: 'work-devriz-festive-campaign',
    w: 2560,
    h: 987,
    usedOn: 'Work page and homepage: Devriz Professional D2C festive performance campaign',
    kind: 'screenshot',
    prompt: 'Devriz Professional festive sales campaign creative.',
  },
  {
    id: 'work-devriz-ecommerce',
    w: 1024,
    h: 446,
    usedOn: 'Work page and homepage: Devriz Professional D2C e-commerce website',
    kind: 'screenshot',
    prompt: 'Devriz Professional D2C e-commerce skincare storefront.',
  },
  {
    id: 'work-devriz-group-portal',
    w: 1024,
    h: 522,
    usedOn: 'Work page and homepage: Devriz Group enterprise corporate portal',
    kind: 'screenshot',
    prompt: 'Devriz Group corporate enterprise website across 7 sectors.',
  },
  {
    id: 'work-devriz-group',
    w: 1024,
    h: 522,
    usedOn: 'Work page and homepage: Devriz Group enterprise corporate portal',
    kind: 'screenshot',
    prompt: 'Devriz Group corporate enterprise website across 7 sectors.',
  },
  {
    id: 'work-clinic-online-booking',
    w: 2400,
    h: 1600,
    usedOn: 'Work page and homepage: clinic website with online booking',
    kind: 'screenshot',
    prompt:
      'If the client cannot be shown, generate instead: a calm modern clinic reception in Delhi, pale stone floor, light oak counter, a single plant, soft morning light, no people, no signage. 35mm, quiet and clean.',
  },
  {
    id: 'work-travel-seo-redesign',
    w: 2400,
    h: 1600,
    usedOn: 'Work page and homepage: travel company SEO and redesign',
    kind: 'screenshot',
    prompt:
      'If the client cannot be shown, generate instead: a quiet Himalayan valley at first light seen from a hillside road, layered blue ridges, mist in the valley, a single prayer flag line in the foreground with no lettering. 50mm, cool morning tones with a warm edge.',
  },
  {
    id: 'work-school-website-admin',
    w: 2400,
    h: 1600,
    usedOn: 'Work page and homepage: school website with admin panel',
    kind: 'screenshot',
    prompt:
      'If the client cannot be shown, generate instead: an empty, sunlit Indian school corridor in the morning, a row of classroom doors, a polished stone floor and long window shadows. No people, no writing on walls or boards. 28mm, calm and orderly.',
  },
  {
    id: 'work-interior-studio-portfolio',
    w: 2400,
    h: 1600,
    usedOn: 'Work page and homepage: interior design studio portfolio',
    kind: 'screenshot',
    prompt:
      'If the client cannot be shown, generate instead: a beautifully finished Indian living room by an interior designer, terrazzo floor, cane and teak furniture, a single violet cushion, late afternoon light through sheer curtains. 35mm architectural photography, no people.',
  },
  {
    id: 'work-gym-website-meta-ads',
    w: 2400,
    h: 1600,
    usedOn: 'Work page and homepage: gym website and Meta ads',
    kind: 'screenshot',
    prompt:
      'If the client cannot be shown, generate instead: a clean neighbourhood gym at dawn, a rack of dumbbells and a single kettlebell in the foreground, dark indigo walls, a strip of violet light along the ceiling, no people and no branding. 35mm.',
  },
  {
    id: 'work-travel-blog-seo',
    w: 2400,
    h: 1600,
    usedOn: 'Work page: travel blog design and SEO',
    kind: 'screenshot',
    prompt:
      'If the client cannot be shown, generate instead: an open travel notebook with blank pages, a film camera, a folded paper map with no labels and a cup of chai on a wooden table by a window in the hills. Soft daylight, 50mm, no writing anywhere.',
  },
  {
    id: 'work-brand-seo-growth',
    w: 2400,
    h: 1600,
    usedOn: 'Work page: SEO strategy for a consumer brand',
    kind: 'screenshot',
    prompt:
      'If the client cannot be shown, generate instead: unbranded product packaging, three plain off-white boxes and a glass bottle, on an indigo shelf with a violet rim light, studio product photography, 90mm, no labels or text.',
  },

  // ---- About, Careers, Contact ------------------------------------------------
  {
    id: 'about-hero',
    w: 2560,
    h: 1440,
    usedOn: 'About page, wide image under the headline',
    kind: 'generate',
    prompt:
      'Elevated view at dusk over East Delhi: an elevated metro viaduct curving through dense apartment blocks, a train passing with lit windows, the city fading into blue haze beyond. Deep indigo sky with a thin warm band on the horizon; the upper third of the frame is calm sky with no detail. 70mm, slight telephoto compression, documentary.',
    video: { prompt: 'Dusk to night timelapse from the same viewpoint: trains pass along the viaduct, windows and street lights come on, the sky deepens to indigo. 10 seconds, seamless loop.', seconds: 10 },
  },
  {
    id: 'studio-team',
    w: 2400,
    h: 1600,
    usedOn: 'Homepage studio section and About page',
    kind: 'real-photo',
    prompt:
      'Real photograph of the Global Alpha Tech team at work in the Laxmi Nagar office: three to five people around one screen, candid, natural window light. Until it is taken, a stand in can be generated: a small Indian creative team in their twenties and thirties gathered around a large monitor in a compact modern studio, one person pointing, others leaning in, off-white walls with indigo accents, daylight, 35mm documentary.',
  },
  {
    id: 'studio-detail',
    w: 1600,
    h: 2000,
    usedOn: 'About page, beside the story',
    kind: 'real-photo',
    prompt:
      'Real photograph of a detail in the office: a desk with sketches and a laptop, the wall behind, or the entrance with the company sign. Until it is taken, a stand in can be generated: a tidy designer desk by a window in a small Delhi studio, sketchbook, laptop closed, a violet notebook, afternoon light, 50mm, no readable text.',
  },
  {
    id: 'careers-hero',
    w: 2560,
    h: 1440,
    usedOn: 'Careers page, wide image under the headline',
    kind: 'real-photo',
    prompt:
      'Real photograph of the team: a relaxed group photo or a candid working moment in the office. Until it is taken, a stand in can be generated: a young Indian team in a bright studio having a stand up meeting by a whiteboard covered in blank sticky notes, laughing, natural light, 35mm documentary, no readable text.',
  },
  {
    id: 'contact-office',
    w: 1600,
    h: 2000,
    usedOn: 'Contact page, beside the address, so visitors recognise the building',
    kind: 'real-photo',
    prompt:
      'Real photograph of the office building entrance at Plot No. 8, 3rd Floor, B-61/152, Gali No. 4, Guru Nanak Pura, Laxmi Nagar, taken in daylight from the lane so a first time visitor recognises it. Do not use a generated image here.',
  },

  // ---- Insights covers --------------------------------------------------------
  {
    id: 'insight-top-digital-marketing-agency-in-delhi-2026-global-alpha-tech',
    w: 2400,
    h: 1350,
    usedOn: 'Insights: choosing a digital marketing agency in Delhi',
    kind: 'generate',
    prompt:
      'A chess board on a deep indigo surface in the middle of a game, low angle. One off-white knight stands a step ahead of the other pieces, lit by a narrow beam of violet light; the rest of the board falls into soft shadow. 90mm, shallow depth of field.',
  },
  {
    id: 'insight-seo-or-google-ads',
    w: 2400,
    h: 1350,
    usedOn: 'Insights: SEO or Google Ads first',
    kind: 'generate',
    prompt:
      'Two identical glass hourglasses side by side on a deep indigo surface. The left one has fine off-white sand still falling slowly; the right one has already emptied into a neat pile. A violet rim light outlines both glasses. Eye level, 85mm, symmetrical composition.',
  },
  {
    id: 'insight-google-business-profile-checklist',
    w: 2400,
    h: 1350,
    usedOn: 'Insights: Google Business Profile checklist',
    kind: 'generate',
    prompt:
      'A single brass map pin pushed into a large off-white paper map of a dense city street grid with no labels or words, on an indigo desk. A pool of violet light surrounds the pin; the rest of the map fades into shadow. Three quarter overhead angle, 70mm.',
  },
  {
    id: 'insight-website-speed-and-enquiries',
    w: 2400,
    h: 1350,
    usedOn: 'Insights: website speed and enquiries',
    kind: 'generate',
    prompt:
      'A steel stopwatch with a plain dial and no numerals lying on off-white paper against a deep indigo background. Behind it a soft streak of violet light suggests speed. Low angle, 100mm macro, crisp detail on the crown and hand.',
  },
];

export const getSlot = (id: string) => slots.find((s) => s.id === id);
