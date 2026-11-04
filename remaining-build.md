# Screenshot Sizing Guide & Prompts for Global Alpha Tech

> **Standard Canvas Resolution:** `1600 x 1000 px`
> **Aspect Ratio:** `16:10` (Uniform across all showcase and project cards)
> **Safe Margins:** Leave **40px–60px padding** inside the canvas so text and CTAs never touch the edge or get cut off.

---

## 1. Homepage 6-Box Matrix Layout

The homepage now uses the exact 2-row × 3-column layout from your wireframe:

```
+-----------------------------------+-----------------------------------+-----------------------------------+
|                                   |                                   |                                   |
|        TEXT BLOCK 1               |             IMAGE 1               |             IMAGE 2               |
|      (What We Do & CTAs)          |      (Meta Ads Manager)           |        (Shopify Admin)            |
|                                   |                                   |                                   |
+-----------------------------------+-----------------------------------+-----------------------------------+
|                                   |                                   |                                   |
|             IMAGE 3               |             IMAGE 4               |        TEXT BLOCK 2               |
|     (Kotil Skin Science)          |     (Devriz Professional)         |   ("we grow gyms, schools...")    |
|                                   |                                   |                                   |
+-----------------------------------+-----------------------------------+-----------------------------------+
```

---

## 2. Prompts & Sizing for the 4 Homepage Showcase Cards

### Card 1: Meta Business Ads Account
- **Slot ID:** `home-wireframe-meta-ads`
- **Save as:** `src/assets/photo/home-wireframe-meta-ads.png` (or `.jpg`)
- **Required Size:** `1600 x 1000 px` (Aspect Ratio 16:10)
- **What to show:**
  A crisp capture of the Meta Ads Manager multi-platform creative previews featuring real sponsored video ad formats across Facebook, Instagram, and TikTok.
- **Key Elements to Keep Centered:**
  - "Sponsored" tags and profile badges.
  - Video ad thumbnails.
  - Interactive "Learn More" / "Get" call-to-action buttons.
- **Framing Tip:** Leave 50px whitespace/padding around the phone and ad containers so no icons touch the canvas boundary.

---

### Card 2: Shopify Store Architecture & Themes
- **Slot ID:** `home-wireframe-shopify`
- **Save as:** `src/assets/photo/home-wireframe-shopify.png` (or `.jpg`)
- **Required Size:** `1600 x 1000 px` (Aspect Ratio 16:10)
- **What to show:**
  A clean capture of the Shopify Admin Panel (`Online Store > Themes`) showing the active Dawn theme with both desktop and mobile storefront mockups.
- **Key Elements to Keep Centered:**
  - "Themes" dashboard heading.
  - "Dawn Current theme" status badge.
  - Desktop & mobile responsive previews.
  - "Customize" button and "Theme library" section.
- **Framing Tip:** Keep the store preview centered with uniform grey margins on left and right.

---

### Card 3: Kotil Skin Science Live Website
- **Slot ID:** `home-wireframe-kotil`
- **Save as:** `src/assets/photo/home-wireframe-kotil.png` (or `.jpg`)
- **Required Size:** `1600 x 1000 px` (Aspect Ratio 16:10)
- **What to show:**
  The complete hero section of the live Kotil Skin Science aesthetic clinic website.
- **Key Elements to Keep Centered:**
  - Kotil Skin Science brand logo and top utility bar (open hours, WhatsApp, phone).
  - Main headline: *"ADVANCED 17-IN-1 HYDRA FACIAL TECHNOLOGY"*.
  - Clinical practitioner with aesthetic medical device.
  - "Experience 17-in-1 Hydra Facial" and "Book Now" call-to-action buttons.
- **Framing Tip:** Frame so that the headline on the left and the doctor on the right both have at least 40px safe breathing room from the outer edges.

---

### Card 4: Devriz Professional D2C Skincare
- **Slot ID:** `home-wireframe-devriz`
- **Save as:** `src/assets/photo/home-wireframe-devriz.png` (or `.jpg`)
- **Required Size:** `1600 x 1000 px` (Aspect Ratio 16:10)
- **What to show:**
  The live Devriz Professional D2C e-commerce website storefront.
- **Key Elements to Keep Centered:**
  - Devriz Professional logo, search, account, and shopping bag icons.
  - Festive announcement bar (*"Festive offer: 10% off with code FESTIVAL10"*).
  - Diagnostic tool link (*"Know Your Real Skin Age"*).
  - Customer unboxing hero visual and "Call us" / "WhatsApp" instant care buttons.
- **Framing Tip:** Capture at desktop resolution (1440px or 1600px wide) so the entire navigation bar and unboxing visual are displayed with natural proportions.

---

## 3. Work Page Portfolio Slots (`/work/`)

All portfolio project cards now also use the exact same uniform `16:10` (`1600 x 1000 px`) aspect ratio:

| Slot ID | Client & Project | Recommended Size | What to Frame |
| :--- | :--- | :--- | :--- |
| `work-kotil-skin-science` | Kotil Skin Science (Aesthetic Clinic) | `1600 x 1000 px` | Hydra Facial technology, booking CTA, doctor & clinic branding |
| `work-meta-ads-acquisition` | Meta Ads Performance Campaigns | `1600 x 1000 px` | Multi-placement Facebook & Instagram sponsored video ads |
| `work-shopify-store-dawn` | Shopify Store Architecture | `1600 x 1000 px` | Shopify admin themes dashboard & mobile storefront preview |
| `work-devriz-ecommerce` | Devriz Professional Skincare | `1600 x 1000 px` | D2C storefront, coupon code, skin age test, and order tracker |
| `work-devriz-group-portal` | Devriz Group Corporate Portal | `1600 x 1000 px` | Enterprise portal: 7 sectors, 20+ companies, 2,000+ employees |
| `work-travel-seo-redesign` | Holiday Travel Company | `1600 x 1000 px` | Destination package showcase & search booking flow |
| `work-school-website-admin` | School & Academy Website | `1600 x 1000 px` | Parent portal, student noticeboard, and staff announcement admin |

---

## 4. How to Supply the Enhanced Images

1. Capture or frame your screenshots at **`1600 x 1000 px`** (or 16:10 equivalent like `1920 x 1200 px`).
2. Drop them into `src/assets/photo/` with the exact slot filenames:
   - `home-wireframe-meta-ads.png`
   - `home-wireframe-shopify.png`
   - `home-wireframe-kotil.png`
   - `home-wireframe-devriz.png`
3. Run `npm run build` — the site automatically resizes, optimizes, generates high-speed WebP variations, and affixes them without any clipping or distortion.
