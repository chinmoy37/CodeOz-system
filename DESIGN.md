# CodeOZ & Aurora Design System Specification
**Version 1.0.0** · *Production Ready*

---

## 1. Executive Summary & Design Philosophy

The **CodeOZ / Aurora Design System** is an avant-garde, production-ready design language forged for high-conviction luxury developments, architectural showcases, and high-performance developer ecosystems.

It diverges intentionally from generic, sterile SaaS interfaces by embracing **dual polarity**:
1. **Dark Polarity (Showcase & Heroic Realms):** Immerses visitors in a deep midnight-violet cosmic abyss (`#07030E`, `#0D061A`), elevated with glassmorphism, subtle starfield ambient textures, and illuminated by high-voltage electric lime (`#CCFF00`) and solar orange (`#FF6A00`) highlights.
2. **Light Polarity (Transactional & High-Density Flow):** Provides pristine daylight surfaces (`#FFFFFF`, `#F8F7FD`), deep midnight typography, and crisp structural borders (`#E8E3F5`) for long-form reading, documentation, legal closing rooms, and financial ledgers.

---

## 2. Visual Identity & Brand Foundations

- **Brand Mark:** CodeOZ orbit symbol representing astronomical curiosity and precise developer tooling, accented with Solar Orange (`#FF6A00`).
- **Signature Accent:** Electric Lime (`#CCFF00`) signifies active status, primary calls-to-action, tactile triggers ("CLICK TO ENLARGE +"), and the iconic corner tag marks.
- **Secondary Accent:** Hot Pink Neon (`#FF007A`) utilized sparingly for celebratory badges and high-priority alerts.
- **Foundation Palette:**
  - `Midnight 950` (`#07030E`): Deepest background canvas.
  - `Midnight 900` (`#0D061A`): Primary container background.
  - `Midnight 850` (`#130A24`): Card and interactive surface.
  - `Midnight 800` (`#1B0E33`): Elevated popovers, tooltips, and floating menus.
  - `Midnight 700` (`#261547`): Borders and dividers.

---

## 3. Centralized Design Tokens

All tokens are defined in `src/tokens/tokens.json` and mirrored in Tailwind and CSS custom properties.

### 3.1 Color Palette
| Token Name | Hex Value | Usage / Semantic Role |
| :--- | :--- | :--- |
| `color.accent.lime` | `#CCFF00` | Signature CTA, active rings, corner tags |
| `color.brand.solarOrange` | `#FF6A00` | CodeOZ planetary orbit and secondary CTA |
| `color.accent.pinkNeon` | `#FF007A` | Decorative spark, limited accents |
| `color.foundation.midnight950` | `#07030E` | Main dark background canvas |
| `color.foundation.midnight850` | `#130A24` | Dark cards, modals, sidebars |
| `color.light.background` | `#FFFFFF` | Primary light canvas |
| `color.light.surface` | `#F8F7FD` | Light card surfaces |
| `color.light.textPrimary` | `#0D061A` | Midnight high-contrast text on light surfaces |

### 3.2 Typography Tokens
- **Display Headings:** `Space Grotesk` (Google Font), sans-serif, geometric, tight letter-spacing (`-0.025em`), bold (`700`).
- **Functional UI & Body:** `Rubik` (Google Font), sans-serif, legible humanistic geometry, weights `400`, `500`, `600`.
- **Code & Metadata:** `JetBrains Mono` / `Monaco`, monospace, tracking `0.05em`, uppercase for architectural tags (`WATERFRONT · ABU DHABI`).

### 3.3 Elevation & Shadows
- `shadow-lime-glow`: `0 0 20px rgba(204, 255, 0, 0.35)`
- `shadow-lime-glow-lg`: `0 0 35px rgba(204, 255, 0, 0.55)`
- `shadow-solar-glow`: `0 0 25px rgba(255, 106, 0, 0.4)`
- `shadow-card-dark`: `0 14px 40px -10px rgba(0, 0, 0, 0.6)`
- `shadow-card-light`: `0 10px 30px -10px rgba(40, 20, 80, 0.08)`

---

## 4. Reusable Component Catalog

### 4.1 Buttons
- **Primary:** Electric lime fill, deep midnight-950 text, lime neon emission glow.
- **Secondary:** Midnight-800 fill, purple-border, crisp white typography.
- **Solar:** Solar Orange fill for CodeOZ developer actions.
- **Ghost:** Borderless, subtle hover backdrop.
- **Outline:** Transparent with midnight-700 border, shifts to lime on hover.
- **Inverted:** Crisp white fill with deep midnight text for dark backgrounds.
- **States:** Default, Hover (`translateY(-1px)`), Active (`scale(0.98)`), Focus-visible (`ring-2 ring-lime`), Disabled (`opacity-50`), Loading (`spinner`).

### 4.2 Aurora 3D Cylindrical Ring Gallery
- The flagship component inspired by the reference imagery.
- Rendered using CSS 3D Transforms (`perspective: 1200px`, `transform-style: preserve-3d`).
- Elliptical carousel ring of architectural property cards distributed over 36 radial positions.
- **Active Centerpiece:** Elevated card with signature electric-lime top-left corner mark (`AccentCornerTag`), caption hierarchy (`Serenity Terraces / WATERFRONT · ABU DHABI`), and direct trigger for the full-screen cinematic inspection modal.

### 4.3 Cards & Containers
- **Standard Card:** Rounded-2xl, subtle border, dual-theme background.
- **Highlighted Card:** Gradient background with electric-lime glow.
- **Feature Card:** Integrated icon pill, header, and structured metrics.

### 4.4 Form Controls
- Text inputs with floating labels or uppercase label eyebrows.
- Password input with toggle reveal.
- Live validation states (error alert, verified green check).
- Pill switch with electric-lime active fill.

### 4.5 Data & Overlays
- **Modal Dialog:** 16px backdrop blur, ESC shortcut listener, accessible focus trap.
- **Table:** Paginated rows with status pills and hover transitions.
- **Alert Banners:** Semantic status messages (Lime, Info, Warning, Error).

---

## 5. Responsive Behavior & Breakpoints

- **Mobile (< 640px):** Single column, collapsible navigation drawer, swipe/arrow navigation for 3D carousel.
- **Tablet (640px - 1024px):** 2-column card layouts, compact button sizes.
- **Desktop (1024px+):** Full 3D cylindrical stage, 3-column feature cards, persistent horizontal header.

---

## 6. Accessibility & Contrast (WCAG AAA)

- Contrast ratio of Electric Lime (`#CCFF00`) on Midnight-950 (`#07030E`) is **16.2:1**, far exceeding WCAG AAA requirements (7:1).
- Every interactive element includes high-visibility `focus-visible` rings.
- Font sizes never drop below `12px` (and metadata tags at `10px` use uppercase high-tracking letters for clarity).
- Color is never used as the sole conveyor of information: icons, text badges, and shapes accompany status colors.

---

## 7. Do's and Don'ts

### DO:
- Keep the signature 2.5x2.5px square lime corner tag on luxury property cards.
- Use `Space Grotesk` exclusively for prominent headings, and `Rubik` for body copy.
- Maintain dark polarity for high-impact hero sections and 3D showcases.
- Use centralized design tokens instead of arbitrary Tailwind hex classes.

### DON'T:
- Do not add random blue or purple gradients that dilute the electric-lime / midnight foundation.
- Do not apply heavy glows to every card simultaneously; reserve neon glow for active or selected states.
- Do not remove the letter-spacing from uppercase monospaced labels.
