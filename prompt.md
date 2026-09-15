# Master Specification Prompt: SteakHouse Luxury Restaurant Website

> **Instructions for the User Before Starting:**
> 1. **Download and Prepare Source Assets:** Ensure you have downloaded all media files, including the 192-frame video sequence (`hero_video.mp4` or extracted frames `frame_000.jpg` to `frame_191.jpg`) and all high-resolution culinary imagery (`images/`).
> 2. **Choose Your Tech Stack Architecture:** This specification supports two implementation paths:
>    - **Option A (Static HTML5 / Vanilla CSS / Modern JavaScript):** Zero build tools, ultra-fast, native Canvas 2D API, GSAP + ScrollTrigger, Bootstrap 5 Grid, Swiper JS.
>    - **Option B (Dynamic React / Next.js 14+ App Router):** React 18 / Next.js with TypeScript, HTML5 Canvas `useRef` with `requestAnimationFrame` lerp loop, Tailwind CSS / CSS Modules, Framer Motion or GSAP ScrollTrigger, Lucide Icons, and client state management for the cart and booking systems.

---

```markdown
You are an award-winning Principal Creative Director and Senior Full-Stack Web Architect recognized with Awwwards Site of the Day, FWA, and CSS Design Awards. Your mission is to engineer a breathtaking, ultra-premium website for "SteakHouse" — a world-class luxury artisanal steakhouse specializing in 45-day dry-aged wagyu, live oak-wood fire grilling, and vintage wine cellar pairings.

The centerpiece of the user experience is an Apple-grade, high-performance scroll-driven Canvas video engine scrubbing through 192 high-definition frames of a raw marbled wagyu steak rotating in raging fire, searing at 1,200°F, and settling juicy and sizzling onto an artisan table setting with fine cabernet.

Every detail — typography, color science, micro-interactions, responsive fluid grids, and dynamic state management — must be executed to production perfection.

---

## 1. VISUAL DESIGN SYSTEM & BRAND IDENTITY

### 1.1 Curated Color Palette
- **Deep Obsidian Black (Canvas & Dark Sections):** `#0d0e12` (RGB: `13, 14, 18`)
- **Dark Surface Graphite (Cards & Process Section):** `#15171e` (RGB: `21, 23, 30`) / `#1e202a`
- **Warm Parchment Cream (Light Sections & Footer):** `#faf7f2` (RGB: `250, 247, 242`)
- **Pure White (Card Surfaces & Accents):** `#ffffff` (RGB: `255, 255, 255`)
- **Flame Crimson (Primary Brand Accent & Buttons):** `#c92a2a` (RGB: `201, 42, 42`)
- **Crimson Hover / Active:** `#b02323` (RGB: `176, 35, 35`)
- **Deep Burgundy (CTA Gradients):** `#8c1818` (RGB: `140, 24, 24`)
- **Golden Ember (Stars, Step Icons, Accents):** `#dca346` (RGB: `220, 163, 70`) / `#f59e0b`
- **Typography Dark:** `#17181c` (RGB: `23, 24, 28`)
- **Typography Muted:** `#6c707a` (RGB: `108, 112, 122`)
- **Typography Light Muted:** `rgba(255, 255, 255, 0.85)`
- **Border Light:** `#e9e3d8` / Border Dark: `rgba(255, 255, 255, 0.1)`

### 1.2 Typography Hierarchy
- **Primary Serif (Headlines & Brand Elegance):** `'Playfair Display', 'Inria Serif', Georgia, serif`
  - Hero Title: `3.4rem` (`54px`), font-weight `700`, line-height `1.15`, letter-spacing `-0.01em`
  - Section Headings (`h2`): `3.2rem` (`51px`), font-weight `700`, line-height `1.2`
  - Subheadings / Card Titles (`h3`): `1.25rem` – `1.8rem`, font-weight `700`
- **Primary Sans (Body, Navigation, UI Elements):** `'Plus Jakarta Sans', 'Manrope', -apple-system, sans-serif`
  - Body Text: `1rem` (`16px`), line-height `1.65`, font-weight `400`
  - Eyebrows / Section Labels: `0.85rem` (`13.6px`), font-weight `700`, letter-spacing `0.25em`, uppercase, color `--primary-red`
  - Button Text: `0.88rem` (`14px`), font-weight `600`, letter-spacing `0.05em`, uppercase
  - Navigation Links: `0.88rem` (`14px`), font-weight `500`, letter-spacing `0.08em`, uppercase

### 1.3 Depth, Elevation & Shadows
- **Text Shadows (Hero Title on Canvas):** `0 4px 20px rgba(0, 0, 0, 0.95), 0 2px 6px rgba(0, 0, 0, 0.9)` (Guarantees 100% legibility over roaring fire frames with zero dimming overlay)
- **Button Shadow:** `0 4px 15px rgba(201, 42, 42, 0.3)`, Hover: `0 6px 20px rgba(201, 42, 42, 0.45)`
- **Card Shadow (Hover):** `0 16px 36px rgba(0, 0, 0, 0.08)`
- **Glassmorphism Backdrop Blur:** `backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);`

---

## 2. HERO CANVAS SCROLL ENGINE SPECIFICATIONS

### 2.1 Technical Architecture
1. **Container Dimensions:**
   - Parent track `.hero-scroll-track`: `height: 550vh; position: relative; width: 100%;`
   - Pinned viewport `.hero-sticky-frame`: `position: sticky; top: 0; left: 0; width: 100%; height: 100vh; overflow: hidden;`
   - Target canvas `#heroCanvas`: `width: 100%; height: 100%; object-fit: cover;`
2. **High-DPI Retina Rendering:**
   - Detect `dpr = Math.min(window.devicePixelRatio || 1, 2)`.
   - Scale canvas bitmap: `canvas.width = window.innerWidth * dpr`, `canvas.height = window.innerHeight * dpr`.
   - Normalise 2D context: `ctx.scale(dpr, dpr)`.
3. **Aspect Ratio Cover Crop Algorithm:**
   - Image dimensions `(iw, ih)`, Canvas viewport `(cw, ch)`.
   - `scale = Math.max(cw / iw, ch / ih)`.
   - `nw = iw * scale`, `nh = ih * scale`.
   - Draw coordinates: `nx = (cw - nw) / 2`, `ny = (ch - nh) / 2`.
   - Render: `ctx.drawImage(img, nx, ny, nw, nh)`.
4. **Cinematic Smooth Lerp Interpolation:**
   - Frame Count: `192` (`frame_000.jpg` to `frame_191.jpg`).
   - Calculate target: `targetProgress = scrollY / (trackHeight - windowHeight)`.
   - Lerp formula in `requestAnimationFrame`:
     `currentProgress += (targetProgress - currentProgress) * 0.085`.
   - Current frame index: `Math.floor(currentProgress * 191)`.
   - Redraw **only** when frame index changes (`frameIndex !== lastDrawnIndex`).
5. **No Dimming Overlay:**
   - Do **not** apply dark vignette or black semi-transparent overlays over the canvas. Let the raw flame embers, sparks, and steak colors shine with 100% natural vibrancy.

### 2.2 Hero Content Layout & 3-Stage Progression
The hero content layer is anchored to the **complete left bottom** (`left: 2.5rem; bottom: 4rem; max-width: 500px;`) aligning flush with the header brand logo and completely clearing the centered steak dish.

There are exactly **3 distinct, well-paced stages**:
- **Stage 0 (0% – 28% scroll): The Grand Introduction**
  - Eyebrow: `ARTISANAL STEAKHOUSE & WOOD GRILL` (with red horizontal accent dash)
  - Headline: `Meet, Eat, Enjoy The True Taste`
  - Body: `Experience the pinnacle of culinary fire craft. Hand-selected prime cuts, dry-aged for 45 days and seared over fragrant oak wood embers.`
  - CTAs: `[Book a Table]` (Primary Red) + `[Order Online]` (Ghost Outline)
- **Stage 1 (35% – 65% scroll): Heritage Cuts & Fire Searing**
  - Eyebrow: `HERITAGE PRIME SELECTION`
  - Headline: `100% USDA Prime & Miyazaki A5 Wagyu`
  - Body: `Every cut is ethically raised on family ranches, dry-aged in our Himalayan pink salt vault to concentrate deep nutty umami and extraordinary tenderness.`
  - CTA: `[Our Heritage Story]` (Ghost Outline)
- **Stage 2 (72% – 100% scroll): Artisan Plating & Dining**
  - Eyebrow: `ARTISAN PLATING`
  - Headline: `Plated to Absolute Perfection`
  - Body: `Rested to succulent equilibrium, brushed with roasted garlic herb butter, and sprinkled with crunchy Cornish sea salt flakes.`
  - CTAs: `[Reserve Your Table]` (Primary Red) + `[How to Order]` (Ghost Outline)

---

## 3. DYNAMIC NAVIGATION BEHAVIOR

- **Initial State (Inside Hero):**
  - Header is fixed (`position: fixed; top: 0; left: 0; width: 100%; z-index: 1000; padding: 1.25rem 2.5rem;`).
  - Background is **100% transparent** (`background: transparent; border-color: transparent; box-shadow: none;`).
- **Scroll Boundary Trigger:**
  - Track distance to the second section: `rect = document.getElementById("about").getBoundingClientRect()`.
  - Trigger condition: `rect.top <= window.innerHeight + 100`.
  - As soon as the second section is **about to enter from the bottom of the viewport**, the navbar activates the `.scrolled` state with a smooth `0.35s` transition:
    `background: rgba(13, 14, 18, 0.96); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(255, 255, 255, 0.08); box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4); padding: 0.85rem 2.5rem;`.
  - When scrolling back into the hero, it automatically returns to transparent.

---

## 4. COMPLETE SECTION-BY-SECTION BLUEPRINT

### Section 1: Header & Navigation
- **Left:** Brand Logo with fire icon inside a rounded square:
  - Icon: `<i class="fa-solid fa-fire-flame-curved"></i>` in red gradient box (`38x38px`).
  - Text: `STEAK` (White) + `HOUSE` (Red `#c92a2a`).
- **Center:** Navigation menu items:
  - `Home`, `About`, `Menu`, `Order`, `Reviews`, `Gallery`, `Contact`.
  - Interactive underline micro-animation on hover/active expanding from `width: 0%` to `width: 100%` (`height: 2px; background: #c92a2a; transition: 0.25s;`).
- **Right:**
  - Interactive Cart trigger button with pill counter badge (`0`).
  - "Book a Table" Red CTA button.
  - Mobile hamburger toggle button (`display: none` on desktop, visible below `991px`).

### Section 2: Hello & Welcome! (About Section)
- **Background:** Warm cream `#faf7f2`.
- **Side Watermark:** Vertical rotated text `ESTABLISHED 2012 • NYC`.
- **Left Column (50%):**
  - Eyebrow: `HELLO & WELCOME!`.
  - Heading: `Where Passion Meets The Open Flame` with GSAP SplitText letter reveal.
  - Body copy on wood-fired artisanal gastronomy.
  - Link: `Explore Our Full Menu ->` with animated arrow translate.
  - Featured Image: Juicy grilled ribeye steak with diamond grill marks, sliced zucchini, and fresh lettuce (`images/hero_about_steak.jpg`) inside a GSAP mask reveal (`.sis-reveal`).
- **Right Column (50%):**
  - Floating red chili pepper accent illustration with gentle hover bounce animation.
  - Photo: Warm luxury steakhouse dining room with tufted leather booths, wine cellar wall, and ambient lighting (`images/dining_room.jpg`) with `.sis-reveal` mask.
  - 4-Feature Highlights Grid (`2x2`):
    1. **Premium Quality:** Award badge icon — "Certified USDA Prime & Miyazaki A5 wagyu."
    2. **100% ECO Ingredients:** Leaf icon — "Locally grown organic heirloom produce."
    3. **Wood-Burned Grill:** Flame icon — "Natural white oak charcoal burning at 1,200°F."
    4. **Creative Menu:** Chef hat/cutlery icon — "Signature sauces & truffle compound butters."

### Section 3: Explore Our Menu (Interactive Filter & Cart Add)
- **Background:** `#ffffff`.
- **Header:** Title `Explore Our Menu` with circular prev/next arrow buttons.
- **Left Sidebar / Filter Tabs:**
  - `All Specialties`, `Starters`, `Burgers & Salads`, `Prime Steaks`, `Side Dishes`, `Desserts`, `Cocktails & Wine`.
  - Active tab shows red vertical indicator bar and red highlight.
- **Right Menu Grid:** Responsive 4-column cards with image, title, gourmet description, price tag, and red `(+)` Add to Order button.
  - Card 1: `Oxtail Soup` (`$25.99`, `images/dish_oxtail_soup.jpg`)
  - Card 2: `Red Mullet Bouillabaisse` (`$35.99`, `images/dish_red_mullet.jpg`)
  - Card 3: `Avocado Salad` (`$18.99`, `images/dish_avocado_salad.jpg`)
  - Card 4: `Smoked Feta Bowl` (`$19.99`, `images/dish_feta_bowl.jpg`)
  - Card 5: `Braised Short Rib` (`$42.00`, `images/gallery_short_rib.jpg`)
  - Card 6: `Filet Mignon 8oz` (`$48.50`, `images/gallery_filet_mignon.jpg`)
  - Card 7: `Valrhona Chocolate Torte` (`$14.50`, `images/gallery_chocolate_cake.jpg`)
  - Card 8: `Blood Orange Old Fashioned` (`$16.00`, `images/gallery_cocktails.jpg`)
- **Cart Add Interaction:** Clicking `(+)` adds item to cart array, increments header badge, updates live subtotal, and triggers toast: `"Added '[Item]' to your order!"`.

### Section 4: How to Order Online (Process & Culinary Highlights)
- **Background:** Luxury Dark Graphite `#1e1f24` with gold accents.
- **Header:** `How to Order Online` (Centered, white serif).
- **4-Step Workflow Grid:**
  1. `Add Items to Your Cart` (Cart icon, directional arrow)
  2. `Checkout Online` (Credit card icon, directional arrow)
  3. `Your Order is on Its Way` (Courier scooter icon, directional arrow)
  4. `Enjoy Your Meal` (Fork/knife icon)
- **Appetizer Platter Showcase (3 Columns):**
  - Left: Ceramic plate with grilled beef satay skewers (`images/dish_skewers.jpg`).
  - Center: Artisan sourdough bread platter with olive oil dipping bowls & roasted garlic (`images/dish_bread_spread.jpg`).
  - Right: Callout card: "Craving Wood-Fired Perfection? Order direct for exclusive chef specials."

### Section 5: Clients Testimonials
- **Background:** Warm cream `#faf7f2`.
- **Carousel Component:** Swiper.js slider with autoplay (6s delay).
- **Cards:** 5 gold stars, italicized quote, verified diner name, city, and TripAdvisor / Google 5.0 badge.
- **Decorative Accent:** Cluster of organic black peppercorns SVG on the right.

### Section 6: Culinary Gallery & VIP Newsletter
- **Top Row (5 Columns):**
  - Flame-grilled steak over glowing oak grates (`images/gallery_flame_grill.jpg`).
  - Fresh garden avocado salad (`images/dish_avocado_salad.jpg`).
  - Craft blood orange cocktails (`images/gallery_cocktails.jpg`).
  - Glazed braised short rib (`images/gallery_short_rib.jpg`).
  - Creamy butternut squash soup with croutons (`images/gallery_soup.jpg`).
- **Bottom Row (4 Columns):**
  - Smoked feta bowl (`images/dish_feta_bowl.jpg`).
  - Valrhona chocolate cake slice (`images/gallery_chocolate_cake.jpg`).
  - Center-cut filet mignon with asparagus (`images/gallery_filet_mignon.jpg`).
  - **VIP Newsletter Card:** "Sign up to our newsletter & get news and special offers", input field, red submit arrow button, rosemary branch illustration.

### Section 7: Location, Operating Hours & Styled Map
- **Left Column (5 Columns):**
  - Phone: `+1 800 483 4878`
  - Email: `reservations@steakhouse.com`
  - Address: `56 12th Ave, New York, NY 10011` ("Get Directions" link)
  - Operating Hours: Mon-Thu 10am-11pm, Fri-Sat 11am-1am, Sun Private Events.
  - Social Links: Facebook, Twitter/X, Instagram, YouTube, Pinterest.
- **Right Column (7 Columns):**
  - Styled interactive OpenStreetMap iframe centered on Meatpacking District / 12th Ave, NYC with custom pin styling.

### Section 8: Call to Action Banner
- **Background:** Rich crimson wood grain gradient (`rgba(177, 26, 26, 0.92)` to `rgba(140, 24, 24, 0.96)`) overlaid on wood embers.
- **Headline:** `Enjoy The True Taste of Food`.
- **Actions:** Dark button `[Book a Table]` + Ghost outline `[Order Online]`.

### Section 9: Footer
- Brand logo: `STEAKHOUSE` with fire icon.
- Footer navigation links: `Home`, `About`, `Menu`, `Events`, `Contact`, `News`, `Reservations`.
- Copyright notice: `Copyright © 2026 SteakHouse. All Rights Reserved. Crafted with passion for fine steak dining.`

---

## 5. INTERACTIVE OVERLAYS & MODALS

### 5.1 Table Reservation Modal
- Dark blurred backdrop (`rgba(0,0,0,0.75); backdrop-filter: blur(8px);`).
- White dialog card with form fields:
  - Party Size selector (2, 4, 6, 8+ guests)
  - Date picker
  - Time selector (5:30 PM, 6:45 PM, 7:30 PM, 8:15 PM, 9:00 PM)
  - Phone & Full Name
  - Dietary Preferences / Special Occasions textarea
  - Primary Red Submit Button: `Confirm Reservation`
  - Success action: Closes modal and triggers toast notification.

### 5.2 Off-Canvas Slide-Out Cart Drawer
- Smooth slide-in from right (`transform: translateX(0); transition: 0.4s cubic-bezier(0.16, 1, 0.3, 1);`).
- Header with cart title and close button.
- Body with item list, unit prices, quantity multipliers, item totals, and remove `(x)` buttons.
- Sticky footer with live subtotal calculation and "Proceed to Checkout" button.

### 5.3 Custom Trailing Cursor
- Dot follower (`sisf-cursor--follower`) trailing mouse movement with smooth spring damping.
- Expands on hovering interactive links, buttons, and gallery items.

---

## 6. MEDIA ASSET TABLE & PATHS

| Asset ID | File Path / Source | Description |
|---|---|---|
| **Hero Video** | `hero_video.mp4` | 192 frames, 1280x720 24fps wagyu steak searing sequence |
| **Hero Frames** | `frames/frame_000.jpg` – `frames/frame_191.jpg` | Pre-extracted JPG frames (85% quality, ~40KB each) |
| **Ribeye Zucchini** | `images/hero_about_steak.jpg` | Plated grilled ribeye with crosshatch marks & zucchini |
| **Dining Room** | `images/dining_room.jpg` | Luxury dark leather booth dining room with wine wall |
| **Oxtail Soup** | `images/dish_oxtail_soup.jpg` | Braised oxtail in ceramic bowl with root vegetables |
| **Red Mullet** | `images/dish_red_mullet.jpg` | Pan-seared red mullet with saffron bouillabaisse |
| **Avocado Salad** | `images/dish_avocado_salad.jpg` | Hass avocado salad with edible pansies & radishes |
| **Feta Salad Bowl**| `images/dish_feta_bowl.jpg` | Charred Greek feta with heirloom tomatoes & olives |
| **Bread & Dips** | `images/dish_bread_spread.jpg` | Sourdough slices, roasted garlic & infused dipping oils |
| **Beef Skewers** | `images/dish_skewers.jpg` | Grilled beef satay skewers with spicy peanut dip |
| **Flame Grill** | `images/gallery_flame_grill.jpg` | Thick steak searing over live oak charcoal flames |
| **Cocktails** | `images/gallery_cocktails.jpg` | Blood orange old fashioned craft cocktails |
| **Short Rib** | `images/gallery_short_rib.jpg` | Braised beef short rib with honey glazed baby carrots |
| **Butternut Soup**| `images/gallery_soup.jpg` | Golden squash soup with cream swirl & garlic croutons |
| **Chocolate Cake**| `images/gallery_chocolate_cake.jpg` | Valrhona dark chocolate mousse cake with raspberries |
| **Filet Mignon** | `images/gallery_filet_mignon.jpg` | Prime filet mignon with grilled asparagus & demi-glace |

---

## 7. RESPONSIVE BREAKPOINT SPECIFICATIONS

- **Desktop Large (≥ 1200px):** Full layout, complete left hero positioning (`left: 2.5rem; bottom: 4rem; max-width: 500px;`), 4-col menu, 5-col gallery top, 4-col process.
- **Tablet / Laptop (768px – 1199px):** Hero text `3rem`, order steps in `2x2` grid, gallery top `3-col`, gallery bottom `2-col`.
- **Mobile (≤ 767px):**
  - Header padding `1rem 1.25rem`. Mobile hamburger menu toggles full-screen glass drawer.
  - Hero text scales to `2.2rem`, positioned at `left: 15px; right: 15px; bottom: 2rem; max-width: calc(100% - 30px);`.
  - Scroll indicator hidden.
  - Menu filter pills scroll horizontally.
  - About features grid collapses to single column.
  - Process steps stack vertically with arrows hidden.
  - Gallery displays as a 2-column grid.

---

## 8. ACCESSIBILITY, PERFORMANCE & SEO CRITICAL REQUIREMENTS

1. **Performance:**
   - Preload the first 25 frames immediately to make hero interactive instantly; cache remaining frames in the background with progress bar indicator.
   - Clamp Canvas drawing to frame changes only (`lastDrawnIndex` cache).
   - Use `passive: true` on scroll listeners.
2. **Accessibility (WCAG 2.1 AA):**
   - High text contrast with dual text-shadow on hero overlay.
   - All interactive controls have clear `aria-label` attributes (`aria-label="View Cart"`, `aria-label="Toggle Menu"`).
   - Full keyboard accessibility on modals and ESC key to dismiss.
3. **SEO:**
   - Single semantic `<h1>` in hero stage.
   - Valid OpenGraph meta tags, meta descriptions, and descriptive image alt tags.

---

## 9. IMPLEMENTATION CHECKLIST

- [ ] Canvas frame scrubbing engine initializes with 192 frames and lerp easing `0.085`.
- [ ] Hero content stays anchored to complete left (`left: 2.5rem`) without covering the centered plate.
- [ ] Exactly 3 text stages display smoothly across the scroll runway.
- [ ] Navbar is 100% transparent in hero and turns solid (`rgba(13, 14, 18, 0.96)`) immediately when the second section is about to scroll in (`rect.top <= window.innerHeight + 100`).
- [ ] GSAP mask reveals (`.sis-reveal`) wipe images into view on scroll.
- [ ] Category tabs interactively filter dishes in "Explore Our Menu".
- [ ] Cart system adds items, calculates subtotal, and slides open the drawer.
- [ ] Reservation modal opens, captures input, and confirms booking.
- [ ] 100% responsive across mobile, tablet, and ultra-wide screens.
```
