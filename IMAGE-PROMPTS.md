# Image and video prompts for the Global Alpha Tech site

29 of 29 images supplied. 0 of 2 required videos supplied. This file is generated from `src/data/slots.ts` by `npm run prompts`; edit that file, not this one.

## How to hand images and videos back

1. Generate each image with its prompt, at the size shown or larger.
2. Save it with the exact file name given (`.jpg`, `.png` or `.webp` all work) in `src/assets/photo/`.
3. For a video, save it as `.mp4` (or `.webm`) with the same name in `src/assets/video/`. Keep the matching still too: it is shown while the video loads and to visitors who have reduced motion turned on.
4. Run `npm run build`. Each placeholder fills itself; images are resized and compressed automatically.

Nothing in the code needs to change. Until a file arrives, its spot on the site shows a striped panel labelled with the file name and size, so gaps are easy to find.

## House style

Every image prompt already ends with this, so the set looks like one shoot:

> Editorial still life and documentary photography for a design-led digital studio. Photorealistic, shot on a medium format camera. Palette: deep indigo navy (#0E1030), warm off-white paper (#F5F4EF) and one accent of electric violet light (#6A3DF0); everything else neutral. Soft directional light with crisp shadows, matte surfaces, precise composition and generous empty space. Where people or places appear they are contemporary Indian and natural, never posed. No text, letters, numbers, logos or readable screens anywhere. No watermark, no neon cyberpunk glow, no holograms, no robots, no floating icons, no lens flare, no stock-photo handshakes.

Every video prompt ends with:

> Cinematic product film look, photorealistic, 24 fps, slow and controlled camera motion, no cuts. Same palette as the stills: deep indigo, warm off-white and one electric violet accent light. No text, logos or readable screens. The last frame must match the first so the clip loops without a visible jump. Export H.264 MP4 at 1920 x 1080 or larger, under 8 MB, with no audio track.

The idea behind the set: each service is shown as a calm, tactile **still life metaphor** (a compass for strategy, steps for SEO, a prism for ads, a funnel for lead generation) on the same indigo and paper set with one violet light. That keeps the site free of generic stock imagery and makes eleven different services look like one studio.

Checks before you accept an image: no readable text, numbers or logos anywhere (generators love to add them on screens and paper), hands look natural, the violet is a light accent rather than a wash, and any area the prompt says to keep empty really is empty.

## Your logo

Not a prompt, a file. Export the official logo and save it as `src/assets/brand/logo.svg` (or `logo.png` at 600 px wide or more, transparent background). It replaces the typeset version in the header automatically. A version that works on dark backgrounds is useful later for the footer.

## Videos the design is built around (2)

These two loop in the background. They are generated from the stills in the same section, so make the still first.

### home-hero-reel

- **Save as:** `src/assets/photo/home-hero-reel.jpg`
- **Size:** 2560 x 1440 px (16:9)
- **Used on:** Homepage, the wide panel under the headline (shown cropped to a letterbox on large screens, so keep the subject in the middle band)
- **Status:** supplied

```text
A sculptural landscape of matte off-white paper blocks of varying heights on a deep indigo seamless set, arranged like a small city skyline that rises gently from left to right. A thin plane of electric violet light grazes across the tops of the blocks. Low camera at block height, 35mm, shallow depth of field, a soft haze in the air. Keep all important detail inside the middle 60 percent of the frame height. Editorial still life and documentary photography for a design-led digital studio. Photorealistic, shot on a medium format camera. Palette: deep indigo navy (#0E1030), warm off-white paper (#F5F4EF) and one accent of electric violet light (#6A3DF0); everything else neutral. Soft directional light with crisp shadows, matte surfaces, precise composition and generous empty space. Where people or places appear they are contemporary Indian and natural, never posed. No text, letters, numbers, logos or readable screens anywhere. No watermark, no neon cyberpunk glow, no holograms, no robots, no floating icons, no lens flare, no stock-photo handshakes. Aspect ratio 16:9.
```

**Motion version:** save as `src/assets/video/home-hero-reel.mp4`, 10 seconds. Status: needed. Generate it from the still above (image to video) so the two match; the still becomes the poster frame.

```text
Slow lateral dolly from left to right across the paper block skyline, camera at block height. The plane of violet light sweeps slowly across the tops of the blocks as if measuring them, then fades back. Haze drifts gently. 10 seconds, seamless loop. Cinematic product film look, photorealistic, 24 fps, slow and controlled camera motion, no cuts. Same palette as the stills: deep indigo, warm off-white and one electric violet accent light. No text, logos or readable screens. The last frame must match the first so the clip loops without a visible jump. Export H.264 MP4 at 1920 x 1080 or larger, under 8 MB, with no audio track.
```

### home-cta-loop

- **Save as:** `src/assets/photo/home-cta-loop.jpg`
- **Size:** 2560 x 1440 px (16:9)
- **Used on:** Dark "Start a project" band near the foot of most pages, behind the text at low opacity
- **Status:** supplied

```text
Macro of a clear glass prism on a dark indigo surface. A narrow beam of white light enters from the left and leaves as a thin band of violet light, throwing soft caustic patterns across the surface. Most of the frame is deep, quiet indigo. 100mm macro, very shallow depth of field. Editorial still life and documentary photography for a design-led digital studio. Photorealistic, shot on a medium format camera. Palette: deep indigo navy (#0E1030), warm off-white paper (#F5F4EF) and one accent of electric violet light (#6A3DF0); everything else neutral. Soft directional light with crisp shadows, matte surfaces, precise composition and generous empty space. Where people or places appear they are contemporary Indian and natural, never posed. No text, letters, numbers, logos or readable screens anywhere. No watermark, no neon cyberpunk glow, no holograms, no robots, no floating icons, no lens flare, no stock-photo handshakes. Aspect ratio 16:9.
```

**Motion version:** save as `src/assets/video/home-cta-loop.mp4`, 8 seconds. Status: needed. Generate it from the still above (image to video) so the two match; the still becomes the poster frame.

```text
The prism rotates a few degrees and back, very slowly. The violet band and the caustic patterns drift across the surface like light under water. Camera locked off. 8 seconds, seamless loop. Cinematic product film look, photorealistic, 24 fps, slow and controlled camera motion, no cuts. Same palette as the stills: deep indigo, warm off-white and one electric violet accent light. No text, logos or readable screens. The last frame must match the first so the clip loops without a visible jump. Export H.264 MP4 at 1920 x 1080 or larger, under 8 MB, with no audio track.
```

## Images to generate (16)

12 of these also have an optional motion version. Add it whenever you like; the video replaces the still on the page.

### service-digital-marketing

- **Save as:** `src/assets/photo/service-digital-marketing.jpg`
- **Size:** 1600 x 2000 px (4:5)
- **Used on:** Digital Marketing Strategy page header and homepage services list
- **Status:** supplied

```text
A brass navigation compass resting on a fanned arc of matte off-white cards, each card a slightly different height, on a deep indigo seamless backdrop. A single beam of violet light grazes the edges of the cards from the right. Three quarter overhead angle, 80mm, crisp shadows, plenty of empty indigo space above the subject. Editorial still life and documentary photography for a design-led digital studio. Photorealistic, shot on a medium format camera. Palette: deep indigo navy (#0E1030), warm off-white paper (#F5F4EF) and one accent of electric violet light (#6A3DF0); everything else neutral. Soft directional light with crisp shadows, matte surfaces, precise composition and generous empty space. Where people or places appear they are contemporary Indian and natural, never posed. No text, letters, numbers, logos or readable screens anywhere. No watermark, no neon cyberpunk glow, no holograms, no robots, no floating icons, no lens flare, no stock-photo handshakes. Aspect ratio 4:5.
```

**Motion version (optional):** save as `src/assets/video/service-digital-marketing.mp4`, 8 seconds. Status: needed. Generate it from the still above (image to video) so the two match; the still becomes the poster frame.

```text
Very slow push in towards the compass. The needle settles into place. The violet light along the card edges breathes gently brighter and dimmer. 8 seconds, seamless loop. Cinematic product film look, photorealistic, 24 fps, slow and controlled camera motion, no cuts. Same palette as the stills: deep indigo, warm off-white and one electric violet accent light. No text, logos or readable screens. The last frame must match the first so the clip loops without a visible jump. Export H.264 MP4 at 1920 x 1080 or larger, under 8 MB, with no audio track.
```

### service-seo-services

- **Save as:** `src/assets/photo/service-seo-services.jpg`
- **Size:** 1600 x 2000 px (4:5)
- **Used on:** SEO Services page header and homepage services list
- **Status:** supplied

```text
A staircase of seven matte off-white paper blocks rising from left to right on a warm off-white surface in front of a deep indigo wall. A small polished glass sphere rests on the highest step and catches a single violet highlight. Low side light from the left, long soft shadows, 90mm, minimal and architectural. Editorial still life and documentary photography for a design-led digital studio. Photorealistic, shot on a medium format camera. Palette: deep indigo navy (#0E1030), warm off-white paper (#F5F4EF) and one accent of electric violet light (#6A3DF0); everything else neutral. Soft directional light with crisp shadows, matte surfaces, precise composition and generous empty space. Where people or places appear they are contemporary Indian and natural, never posed. No text, letters, numbers, logos or readable screens anywhere. No watermark, no neon cyberpunk glow, no holograms, no robots, no floating icons, no lens flare, no stock-photo handshakes. Aspect ratio 4:5.
```

**Motion version (optional):** save as `src/assets/video/service-seo-services.mp4`, 8 seconds. Status: needed. Generate it from the still above (image to video) so the two match; the still becomes the poster frame.

```text
The camera glides slowly upward along the steps towards the glass sphere at the top. The violet highlight on the sphere grows a little stronger. 8 seconds, seamless loop. Cinematic product film look, photorealistic, 24 fps, slow and controlled camera motion, no cuts. Same palette as the stills: deep indigo, warm off-white and one electric violet accent light. No text, logos or readable screens. The last frame must match the first so the clip loops without a visible jump. Export H.264 MP4 at 1920 x 1080 or larger, under 8 MB, with no audio track.
```

### service-performance-marketing

- **Save as:** `src/assets/photo/service-performance-marketing.jpg`
- **Size:** 1600 x 2000 px (4:5)
- **Used on:** Performance Marketing page header and homepage services list
- **Status:** supplied

```text
A triangular glass prism on a matte off-white plinth in a dark indigo room. A hard beam of white light enters from the left and leaves the prism as a narrow fan of violet and blue light that falls across the plinth. Clean, scientific, high contrast, 100mm macro. Editorial still life and documentary photography for a design-led digital studio. Photorealistic, shot on a medium format camera. Palette: deep indigo navy (#0E1030), warm off-white paper (#F5F4EF) and one accent of electric violet light (#6A3DF0); everything else neutral. Soft directional light with crisp shadows, matte surfaces, precise composition and generous empty space. Where people or places appear they are contemporary Indian and natural, never posed. No text, letters, numbers, logos or readable screens anywhere. No watermark, no neon cyberpunk glow, no holograms, no robots, no floating icons, no lens flare, no stock-photo handshakes. Aspect ratio 4:5.
```

**Motion version (optional):** save as `src/assets/video/service-performance-marketing.mp4`, 8 seconds. Status: needed. Generate it from the still above (image to video) so the two match; the still becomes the poster frame.

```text
The prism turns a few degrees and the violet fan of light sweeps slowly across the plinth and back. Camera locked off. 8 seconds, seamless loop. Cinematic product film look, photorealistic, 24 fps, slow and controlled camera motion, no cuts. Same palette as the stills: deep indigo, warm off-white and one electric violet accent light. No text, logos or readable screens. The last frame must match the first so the clip loops without a visible jump. Export H.264 MP4 at 1920 x 1080 or larger, under 8 MB, with no audio track.
```

### service-social-media-marketing

- **Save as:** `src/assets/photo/service-social-media-marketing.jpg`
- **Size:** 1600 x 2000 px (4:5)
- **Used on:** Social Media Marketing page header and homepage services list
- **Status:** supplied

```text
Three smartphones standing upright in a staggered row on an off-white paper sweep. Their screens glow with soft abstract gradients of indigo and violet, with no interface, icons or text. Gentle reflections on the paper, soft top light, 85mm, shallow depth of field. Editorial still life and documentary photography for a design-led digital studio. Photorealistic, shot on a medium format camera. Palette: deep indigo navy (#0E1030), warm off-white paper (#F5F4EF) and one accent of electric violet light (#6A3DF0); everything else neutral. Soft directional light with crisp shadows, matte surfaces, precise composition and generous empty space. Where people or places appear they are contemporary Indian and natural, never posed. No text, letters, numbers, logos or readable screens anywhere. No watermark, no neon cyberpunk glow, no holograms, no robots, no floating icons, no lens flare, no stock-photo handshakes. Aspect ratio 4:5.
```

**Motion version (optional):** save as `src/assets/video/service-social-media-marketing.mp4`, 8 seconds. Status: needed. Generate it from the still above (image to video) so the two match; the still becomes the poster frame.

```text
The colour fields on the three screens shift slowly, like light moving through water, each out of step with the others. The camera drifts slightly sideways. 8 seconds, seamless loop. Cinematic product film look, photorealistic, 24 fps, slow and controlled camera motion, no cuts. Same palette as the stills: deep indigo, warm off-white and one electric violet accent light. No text, logos or readable screens. The last frame must match the first so the clip loops without a visible jump. Export H.264 MP4 at 1920 x 1080 or larger, under 8 MB, with no audio track.
```

### service-lead-generation

- **Save as:** `src/assets/photo/service-lead-generation.jpg`
- **Size:** 1600 x 2000 px (4:5)
- **Used on:** Lead Generation page header and homepage services list
- **Status:** supplied

```text
A clean laboratory glass funnel held in a matte black stand above a glass beaker on an off-white surface. Small matte off-white spheres sit inside the funnel and a few have collected in the beaker, one violet sphere among them. Deep indigo background, soft side light, precise and calm, 90mm. Editorial still life and documentary photography for a design-led digital studio. Photorealistic, shot on a medium format camera. Palette: deep indigo navy (#0E1030), warm off-white paper (#F5F4EF) and one accent of electric violet light (#6A3DF0); everything else neutral. Soft directional light with crisp shadows, matte surfaces, precise composition and generous empty space. Where people or places appear they are contemporary Indian and natural, never posed. No text, letters, numbers, logos or readable screens anywhere. No watermark, no neon cyberpunk glow, no holograms, no robots, no floating icons, no lens flare, no stock-photo handshakes. Aspect ratio 4:5.
```

**Motion version (optional):** save as `src/assets/video/service-lead-generation.mp4`, 8 seconds. Status: needed. Generate it from the still above (image to video) so the two match; the still becomes the poster frame.

```text
One sphere at a time drops through the funnel into the beaker in gentle slow motion. Camera locked off. 8 seconds, seamless loop. Cinematic product film look, photorealistic, 24 fps, slow and controlled camera motion, no cuts. Same palette as the stills: deep indigo, warm off-white and one electric violet accent light. No text, logos or readable screens. The last frame must match the first so the clip loops without a visible jump. Export H.264 MP4 at 1920 x 1080 or larger, under 8 MB, with no audio track.
```

### service-email-marketing

- **Save as:** `src/assets/photo/service-email-marketing.jpg`
- **Size:** 1600 x 2000 px (4:5)
- **Used on:** Email Marketing page header and homepage services list
- **Status:** supplied

```text
A neat stack of uncoated off-white envelopes on a deep indigo surface, the top envelope closed with a plain violet wax seal that carries no symbol. Raking light from the upper left shows the paper texture. Overhead angle, 70mm, generous empty space to the right of the stack. Editorial still life and documentary photography for a design-led digital studio. Photorealistic, shot on a medium format camera. Palette: deep indigo navy (#0E1030), warm off-white paper (#F5F4EF) and one accent of electric violet light (#6A3DF0); everything else neutral. Soft directional light with crisp shadows, matte surfaces, precise composition and generous empty space. Where people or places appear they are contemporary Indian and natural, never posed. No text, letters, numbers, logos or readable screens anywhere. No watermark, no neon cyberpunk glow, no holograms, no robots, no floating icons, no lens flare, no stock-photo handshakes. Aspect ratio 4:5.
```

**Motion version (optional):** save as `src/assets/video/service-email-marketing.mp4`, 6 seconds. Status: needed. Generate it from the still above (image to video) so the two match; the still becomes the poster frame.

```text
The top envelope slides gently forward off the stack while the camera pushes in slowly. 6 seconds, seamless loop. Cinematic product film look, photorealistic, 24 fps, slow and controlled camera motion, no cuts. Same palette as the stills: deep indigo, warm off-white and one electric violet accent light. No text, logos or readable screens. The last frame must match the first so the clip loops without a visible jump. Export H.264 MP4 at 1920 x 1080 or larger, under 8 MB, with no audio track.
```

### service-website-design

- **Save as:** `src/assets/photo/service-website-design.jpg`
- **Size:** 1600 x 2000 px (4:5)
- **Used on:** Website Design page header and homepage services list
- **Status:** supplied

```text
Top down view of a designer's desk: hand drawn wireframe sketches of web page layouts on off-white paper, drawn only with boxes and lines and no words, a graphite pencil, a steel ruler and three colour swatch chips in indigo, off-white and violet. Morning light from the left, crisp shadows, 50mm, flat lay with clean margins. Editorial still life and documentary photography for a design-led digital studio. Photorealistic, shot on a medium format camera. Palette: deep indigo navy (#0E1030), warm off-white paper (#F5F4EF) and one accent of electric violet light (#6A3DF0); everything else neutral. Soft directional light with crisp shadows, matte surfaces, precise composition and generous empty space. Where people or places appear they are contemporary Indian and natural, never posed. No text, letters, numbers, logos or readable screens anywhere. No watermark, no neon cyberpunk glow, no holograms, no robots, no floating icons, no lens flare, no stock-photo handshakes. Aspect ratio 4:5.
```

**Motion version (optional):** save as `src/assets/video/service-website-design.mp4`, 8 seconds. Status: needed. Generate it from the still above (image to video) so the two match; the still becomes the poster frame.

```text
Slow overhead drift across the sketches. Soft shadows move across the desk as if a cloud is passing outside. 8 seconds, seamless loop. Cinematic product film look, photorealistic, 24 fps, slow and controlled camera motion, no cuts. Same palette as the stills: deep indigo, warm off-white and one electric violet accent light. No text, logos or readable screens. The last frame must match the first so the clip loops without a visible jump. Export H.264 MP4 at 1920 x 1080 or larger, under 8 MB, with no audio track.
```

### service-website-development

- **Save as:** `src/assets/photo/service-website-development.jpg`
- **Size:** 1600 x 2000 px (4:5)
- **Used on:** Website Development page header and homepage services list
- **Status:** supplied

```text
Close up of a laptop on a dark desk at night. The screen shows only out of focus horizontal bands of coloured light that suggest code, with nothing readable. A small desk lamp casts violet light from the edge of the frame. Deep indigo room, a ceramic cup reflecting the glow. 50mm at f/1.4, very shallow depth of field. Editorial still life and documentary photography for a design-led digital studio. Photorealistic, shot on a medium format camera. Palette: deep indigo navy (#0E1030), warm off-white paper (#F5F4EF) and one accent of electric violet light (#6A3DF0); everything else neutral. Soft directional light with crisp shadows, matte surfaces, precise composition and generous empty space. Where people or places appear they are contemporary Indian and natural, never posed. No text, letters, numbers, logos or readable screens anywhere. No watermark, no neon cyberpunk glow, no holograms, no robots, no floating icons, no lens flare, no stock-photo handshakes. Aspect ratio 4:5.
```

**Motion version (optional):** save as `src/assets/video/service-website-development.mp4`, 8 seconds. Status: needed. Generate it from the still above (image to video) so the two match; the still becomes the poster frame.

```text
The blurred coloured bands on the screen scroll slowly upward. The lamp light stays steady. A slight parallax move from left to right. 8 seconds, seamless loop. Cinematic product film look, photorealistic, 24 fps, slow and controlled camera motion, no cuts. Same palette as the stills: deep indigo, warm off-white and one electric violet accent light. No text, logos or readable screens. The last frame must match the first so the clip loops without a visible jump. Export H.264 MP4 at 1920 x 1080 or larger, under 8 MB, with no audio track.
```

### service-app-development

- **Save as:** `src/assets/photo/service-app-development.jpg`
- **Size:** 1600 x 2000 px (4:5)
- **Used on:** App Development page header and homepage services list
- **Status:** supplied

```text
A smartphone in a minimal charging stand beside a paper prototype of an app: several phone sized cards of off-white card stock with simple drawn boxes and circles and no words, laid out in a flow and joined by a thin violet thread. Warm off-white surface, indigo wall, soft side light, 85mm. Editorial still life and documentary photography for a design-led digital studio. Photorealistic, shot on a medium format camera. Palette: deep indigo navy (#0E1030), warm off-white paper (#F5F4EF) and one accent of electric violet light (#6A3DF0); everything else neutral. Soft directional light with crisp shadows, matte surfaces, precise composition and generous empty space. Where people or places appear they are contemporary Indian and natural, never posed. No text, letters, numbers, logos or readable screens anywhere. No watermark, no neon cyberpunk glow, no holograms, no robots, no floating icons, no lens flare, no stock-photo handshakes. Aspect ratio 4:5.
```

**Motion version (optional):** save as `src/assets/video/service-app-development.mp4`, 8 seconds. Status: needed. Generate it from the still above (image to video) so the two match; the still becomes the poster frame.

```text
The camera tracks slowly along the violet thread from card to card and arrives at the phone, whose screen glows softly. 8 seconds, seamless loop. Cinematic product film look, photorealistic, 24 fps, slow and controlled camera motion, no cuts. Same palette as the stills: deep indigo, warm off-white and one electric violet accent light. No text, logos or readable screens. The last frame must match the first so the clip loops without a visible jump. Export H.264 MP4 at 1920 x 1080 or larger, under 8 MB, with no audio track.
```

### service-branding-graphic-design

- **Save as:** `src/assets/photo/service-branding-graphic-design.jpg`
- **Size:** 1600 x 2000 px (4:5)
- **Used on:** Branding and Graphic Design page header and homepage services list
- **Status:** supplied

```text
A brand identity flat lay arranged on a precise grid on a deep indigo surface: blank off-white business cards, a folded letterhead, an envelope, a canvas tote bag and three colour swatch chips in indigo, off-white and violet. Every item is completely blank. Overhead, soft even light with gentle shadows, 50mm. Editorial still life and documentary photography for a design-led digital studio. Photorealistic, shot on a medium format camera. Palette: deep indigo navy (#0E1030), warm off-white paper (#F5F4EF) and one accent of electric violet light (#6A3DF0); everything else neutral. Soft directional light with crisp shadows, matte surfaces, precise composition and generous empty space. Where people or places appear they are contemporary Indian and natural, never posed. No text, letters, numbers, logos or readable screens anywhere. No watermark, no neon cyberpunk glow, no holograms, no robots, no floating icons, no lens flare, no stock-photo handshakes. Aspect ratio 4:5.
```

**Motion version (optional):** save as `src/assets/video/service-branding-graphic-design.mp4`, 6 seconds. Status: needed. Generate it from the still above (image to video) so the two match; the still becomes the poster frame.

```text
Stop motion feel: the items slide into their places on the grid one by one until the layout is complete, then hold. 6 seconds. Cinematic product film look, photorealistic, 24 fps, slow and controlled camera motion, no cuts. Same palette as the stills: deep indigo, warm off-white and one electric violet accent light. No text, logos or readable screens. The last frame must match the first so the clip loops without a visible jump. Export H.264 MP4 at 1920 x 1080 or larger, under 8 MB, with no audio track.
```

### service-digital-transformation-consulting

- **Save as:** `src/assets/photo/service-digital-transformation-consulting.jpg`
- **Size:** 1600 x 2000 px (4:5)
- **Used on:** Digital Transformation Consulting page header and homepage services list
- **Status:** supplied

```text
Overhead view of a meeting table with a large sheet of off-white paper showing a process flowchart drawn in pencil: rectangles, diamonds and arrows, no words. Blank violet and off-white sticky notes, two coffee cups, and the hands of two Indian professionals, one pointing at a shape. Soft daylight, 35mm, documentary feel. Editorial still life and documentary photography for a design-led digital studio. Photorealistic, shot on a medium format camera. Palette: deep indigo navy (#0E1030), warm off-white paper (#F5F4EF) and one accent of electric violet light (#6A3DF0); everything else neutral. Soft directional light with crisp shadows, matte surfaces, precise composition and generous empty space. Where people or places appear they are contemporary Indian and natural, never posed. No text, letters, numbers, logos or readable screens anywhere. No watermark, no neon cyberpunk glow, no holograms, no robots, no floating icons, no lens flare, no stock-photo handshakes. Aspect ratio 4:5.
```

**Motion version (optional):** save as `src/assets/video/service-digital-transformation-consulting.mp4`, 8 seconds. Status: needed. Generate it from the still above (image to video) so the two match; the still becomes the poster frame.

```text
A hand draws a pencil arrow connecting two shapes on the flowchart while the camera drifts slowly overhead. 8 seconds. Cinematic product film look, photorealistic, 24 fps, slow and controlled camera motion, no cuts. Same palette as the stills: deep indigo, warm off-white and one electric violet accent light. No text, logos or readable screens. The last frame must match the first so the clip loops without a visible jump. Export H.264 MP4 at 1920 x 1080 or larger, under 8 MB, with no audio track.
```

### about-hero

- **Save as:** `src/assets/photo/about-hero.jpg`
- **Size:** 2560 x 1440 px (16:9)
- **Used on:** About page, wide image under the headline
- **Status:** supplied

```text
Elevated view at dusk over East Delhi: an elevated metro viaduct curving through dense apartment blocks, a train passing with lit windows, the city fading into blue haze beyond. Deep indigo sky with a thin warm band on the horizon; the upper third of the frame is calm sky with no detail. 70mm, slight telephoto compression, documentary. Editorial still life and documentary photography for a design-led digital studio. Photorealistic, shot on a medium format camera. Palette: deep indigo navy (#0E1030), warm off-white paper (#F5F4EF) and one accent of electric violet light (#6A3DF0); everything else neutral. Soft directional light with crisp shadows, matte surfaces, precise composition and generous empty space. Where people or places appear they are contemporary Indian and natural, never posed. No text, letters, numbers, logos or readable screens anywhere. No watermark, no neon cyberpunk glow, no holograms, no robots, no floating icons, no lens flare, no stock-photo handshakes. Aspect ratio 16:9.
```

**Motion version (optional):** save as `src/assets/video/about-hero.mp4`, 10 seconds. Status: needed. Generate it from the still above (image to video) so the two match; the still becomes the poster frame.

```text
Dusk to night timelapse from the same viewpoint: trains pass along the viaduct, windows and street lights come on, the sky deepens to indigo. 10 seconds, seamless loop. Cinematic product film look, photorealistic, 24 fps, slow and controlled camera motion, no cuts. Same palette as the stills: deep indigo, warm off-white and one electric violet accent light. No text, logos or readable screens. The last frame must match the first so the clip loops without a visible jump. Export H.264 MP4 at 1920 x 1080 or larger, under 8 MB, with no audio track.
```

### insight-top-digital-marketing-agency-in-delhi-2026-global-alpha-tech

- **Save as:** `src/assets/photo/insight-top-digital-marketing-agency-in-delhi-2026-global-alpha-tech.jpg`
- **Size:** 2400 x 1350 px (16:9)
- **Used on:** Insights: choosing a digital marketing agency in Delhi
- **Status:** supplied

```text
A chess board on a deep indigo surface in the middle of a game, low angle. One off-white knight stands a step ahead of the other pieces, lit by a narrow beam of violet light; the rest of the board falls into soft shadow. 90mm, shallow depth of field. Editorial still life and documentary photography for a design-led digital studio. Photorealistic, shot on a medium format camera. Palette: deep indigo navy (#0E1030), warm off-white paper (#F5F4EF) and one accent of electric violet light (#6A3DF0); everything else neutral. Soft directional light with crisp shadows, matte surfaces, precise composition and generous empty space. Where people or places appear they are contemporary Indian and natural, never posed. No text, letters, numbers, logos or readable screens anywhere. No watermark, no neon cyberpunk glow, no holograms, no robots, no floating icons, no lens flare, no stock-photo handshakes. Aspect ratio 16:9.
```

### insight-seo-or-google-ads

- **Save as:** `src/assets/photo/insight-seo-or-google-ads.jpg`
- **Size:** 2400 x 1350 px (16:9)
- **Used on:** Insights: SEO or Google Ads first
- **Status:** supplied

```text
Two identical glass hourglasses side by side on a deep indigo surface. The left one has fine off-white sand still falling slowly; the right one has already emptied into a neat pile. A violet rim light outlines both glasses. Eye level, 85mm, symmetrical composition. Editorial still life and documentary photography for a design-led digital studio. Photorealistic, shot on a medium format camera. Palette: deep indigo navy (#0E1030), warm off-white paper (#F5F4EF) and one accent of electric violet light (#6A3DF0); everything else neutral. Soft directional light with crisp shadows, matte surfaces, precise composition and generous empty space. Where people or places appear they are contemporary Indian and natural, never posed. No text, letters, numbers, logos or readable screens anywhere. No watermark, no neon cyberpunk glow, no holograms, no robots, no floating icons, no lens flare, no stock-photo handshakes. Aspect ratio 16:9.
```

### insight-google-business-profile-checklist

- **Save as:** `src/assets/photo/insight-google-business-profile-checklist.jpg`
- **Size:** 2400 x 1350 px (16:9)
- **Used on:** Insights: Google Business Profile checklist
- **Status:** supplied

```text
A single brass map pin pushed into a large off-white paper map of a dense city street grid with no labels or words, on an indigo desk. A pool of violet light surrounds the pin; the rest of the map fades into shadow. Three quarter overhead angle, 70mm. Editorial still life and documentary photography for a design-led digital studio. Photorealistic, shot on a medium format camera. Palette: deep indigo navy (#0E1030), warm off-white paper (#F5F4EF) and one accent of electric violet light (#6A3DF0); everything else neutral. Soft directional light with crisp shadows, matte surfaces, precise composition and generous empty space. Where people or places appear they are contemporary Indian and natural, never posed. No text, letters, numbers, logos or readable screens anywhere. No watermark, no neon cyberpunk glow, no holograms, no robots, no floating icons, no lens flare, no stock-photo handshakes. Aspect ratio 16:9.
```

### insight-website-speed-and-enquiries

- **Save as:** `src/assets/photo/insight-website-speed-and-enquiries.jpg`
- **Size:** 2400 x 1350 px (16:9)
- **Used on:** Insights: website speed and enquiries
- **Status:** supplied

```text
A steel stopwatch with a plain dial and no numerals lying on off-white paper against a deep indigo background. Behind it a soft streak of violet light suggests speed. Low angle, 100mm macro, crisp detail on the crown and hand. Editorial still life and documentary photography for a design-led digital studio. Photorealistic, shot on a medium format camera. Palette: deep indigo navy (#0E1030), warm off-white paper (#F5F4EF) and one accent of electric violet light (#6A3DF0); everything else neutral. Soft directional light with crisp shadows, matte surfaces, precise composition and generous empty space. Where people or places appear they are contemporary Indian and natural, never posed. No text, letters, numbers, logos or readable screens anywhere. No watermark, no neon cyberpunk glow, no holograms, no robots, no floating icons, no lens flare, no stock-photo handshakes. Aspect ratio 16:9.
```

## Real photographs (4)

These show the actual team and office, so a generated image should only ever be a temporary stand in. Use a phone on a bright day if nothing else: natural light, landscape orientation, a steady hand.

### studio-team

- **Save as:** `src/assets/photo/studio-team.jpg`
- **Size:** 2400 x 1600 px (3:2)
- **Used on:** Homepage studio section and About page
- **Status:** supplied

```text
Real photograph of the Global Alpha Tech team at work in the Laxmi Nagar office: three to five people around one screen, candid, natural window light. Until it is taken, a stand in can be generated: a small Indian creative team in their twenties and thirties gathered around a large monitor in a compact modern studio, one person pointing, others leaning in, off-white walls with indigo accents, daylight, 35mm documentary.
```

### studio-detail

- **Save as:** `src/assets/photo/studio-detail.jpg`
- **Size:** 1600 x 2000 px (4:5)
- **Used on:** About page, beside the story
- **Status:** supplied

```text
Real photograph of a detail in the office: a desk with sketches and a laptop, the wall behind, or the entrance with the company sign. Until it is taken, a stand in can be generated: a tidy designer desk by a window in a small Delhi studio, sketchbook, laptop closed, a violet notebook, afternoon light, 50mm, no readable text.
```

### careers-hero

- **Save as:** `src/assets/photo/careers-hero.jpg`
- **Size:** 2560 x 1440 px (16:9)
- **Used on:** Careers page, wide image under the headline
- **Status:** supplied

```text
Real photograph of the team: a relaxed group photo or a candid working moment in the office. Until it is taken, a stand in can be generated: a young Indian team in a bright studio having a stand up meeting by a whiteboard covered in blank sticky notes, laughing, natural light, 35mm documentary, no readable text.
```

### contact-office

- **Save as:** `src/assets/photo/contact-office.jpg`
- **Size:** 1600 x 2000 px (4:5)
- **Used on:** Contact page, beside the address, so visitors recognise the building
- **Status:** supplied

```text
Real photograph of the office building entrance at Plot No. 8, 3rd Floor, B-61/152, Gali No. 4, Guru Nanak Pura, Laxmi Nagar, taken in daylight from the lane so a first time visitor recognises it. Do not use a generated image here.
```

## Project screenshots (7)

The best image for a project is the project itself. For each one, open the client's live website on a laptop at full width and take a clean screenshot of the homepage or the best page (or use a browser extension that captures at 2400 px wide). Ask the client's permission first. If a client cannot be shown, use the stand in prompt.

### work-clinic-online-booking

- **Save as:** `src/assets/photo/work-clinic-online-booking.jpg`
- **Size:** 2400 x 1600 px (3:2)
- **Used on:** Work page and homepage: clinic website with online booking
- **Status:** supplied

```text
If the client cannot be shown, generate instead: a calm modern clinic reception in Delhi, pale stone floor, light oak counter, a single plant, soft morning light, no people, no signage. 35mm, quiet and clean.
```

### work-travel-seo-redesign

- **Save as:** `src/assets/photo/work-travel-seo-redesign.jpg`
- **Size:** 2400 x 1600 px (3:2)
- **Used on:** Work page and homepage: travel company SEO and redesign
- **Status:** supplied

```text
If the client cannot be shown, generate instead: a quiet Himalayan valley at first light seen from a hillside road, layered blue ridges, mist in the valley, a single prayer flag line in the foreground with no lettering. 50mm, cool morning tones with a warm edge.
```

### work-school-website-admin

- **Save as:** `src/assets/photo/work-school-website-admin.jpg`
- **Size:** 2400 x 1600 px (3:2)
- **Used on:** Work page and homepage: school website with admin panel
- **Status:** supplied

```text
If the client cannot be shown, generate instead: an empty, sunlit Indian school corridor in the morning, a row of classroom doors, a polished stone floor and long window shadows. No people, no writing on walls or boards. 28mm, calm and orderly.
```

### work-interior-studio-portfolio

- **Save as:** `src/assets/photo/work-interior-studio-portfolio.jpg`
- **Size:** 2400 x 1600 px (3:2)
- **Used on:** Work page and homepage: interior design studio portfolio
- **Status:** supplied

```text
If the client cannot be shown, generate instead: a beautifully finished Indian living room by an interior designer, terrazzo floor, cane and teak furniture, a single violet cushion, late afternoon light through sheer curtains. 35mm architectural photography, no people.
```

### work-gym-website-meta-ads

- **Save as:** `src/assets/photo/work-gym-website-meta-ads.jpg`
- **Size:** 2400 x 1600 px (3:2)
- **Used on:** Work page and homepage: gym website and Meta ads
- **Status:** supplied

```text
If the client cannot be shown, generate instead: a clean neighbourhood gym at dawn, a rack of dumbbells and a single kettlebell in the foreground, dark indigo walls, a strip of violet light along the ceiling, no people and no branding. 35mm.
```

### work-travel-blog-seo

- **Save as:** `src/assets/photo/work-travel-blog-seo.jpg`
- **Size:** 2400 x 1600 px (3:2)
- **Used on:** Work page: travel blog design and SEO
- **Status:** supplied

```text
If the client cannot be shown, generate instead: an open travel notebook with blank pages, a film camera, a folded paper map with no labels and a cup of chai on a wooden table by a window in the hills. Soft daylight, 50mm, no writing anywhere.
```

### work-brand-seo-growth

- **Save as:** `src/assets/photo/work-brand-seo-growth.jpg`
- **Size:** 2400 x 1600 px (3:2)
- **Used on:** Work page: SEO strategy for a consumer brand
- **Status:** supplied

```text
If the client cannot be shown, generate instead: unbranded product packaging, three plain off-white boxes and a glass bottle, on an indigo shelf with a violet rim light, studio product photography, 90mm, no labels or text.
```
