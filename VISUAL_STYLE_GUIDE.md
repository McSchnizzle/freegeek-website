# Free Geek Visual Style Guide

## Illustration Style

**Primary approach:** Flat vector illustrations with bold outlines. No photo realism.

**Do NOT mix:** Photos with line art on the same page (unless explicitly required).

### Character Representation
- **Skin tones:** Varied, depicting diverse racial backgrounds
- **Gender expressions:** Include non-binary-presenting figures alongside masculine/feminine
- **Disability:** Include representation where appropriate (wheelchairs, assistive devices, etc.)
- **Hair/features:** Varied hairstyles, body types, and features

### Backgrounds
- Keep mostly white/clean
- Soft gradients or simple shapes used sparingly
- Avoid visual clutter

## Color Palette

**Primary:**
- Black: `#000000` (backgrounds, text)
- White: `#FFFFFF` (backgrounds, text)

**Accent Colors (use consistently):**
- Blue: `#2563EB` (primary accent, CTAs, links)
- Teal: `#00A0B0` (illustrations, secondary accent)
- Purple: `#9B4DCA` (illustrations, highlights)

**Use Sparingly:**
- Orange: `#F5A623` (minimal highlights only)
- Yellow: `#F8E71C` (rarely, for specific emphasis)

**Avoid:**
- Green checkmarks/accents (unless specifically branded)
- Off-palette colors
- Unstyled stock imagery

## Typography

**Font Family:** Inter (system fallbacks: system-ui, -apple-system, etc.)

**Usage:**
- Hero titles: `text-4xl md:text-6xl font-bold`
- Section headers: `text-3xl font-bold`
- Body text: `text-lg` or default

## When to Use What

### Hero/Section Art
- Full illustrations with people and devices
- Align with teal/blue/purple palette
- **No photos** - replace photo placeholders with matching illustrations
- Include diverse character representation

### Icons (Small UI Elements)
- Simple, stroke-based designs
- For: stats, bullets, feature cards, process steps
- **Consistent stroke weight** across all icons
- Colors from primary palette only
- Avoid green unless brand-specified

### Trust/Credential Badges
- Use official logos where available
- Otherwise: minimal, monochrome or brand-accent treatments
- Examples: i-SIGMA, Oregon 100 Best, 501(c)(3)

## Existing Assets

**Location:** `/public/images/`

### Icons (`/icons/`)
| File | Usage | Notes |
|------|-------|-------|
| `icon-donate.png` | Donation flow | Check palette compliance |
| `icon-refurbish.png` | Rebuild process | |
| `icon-distribute.png` | Distribution | |
| `icon-recycle.png` | Environmental | |
| `icon-education.png` | Digital skills | |
| `icon-security.png` | Data security | |
| `stat-ewaste.png` | Statistics | |
| `stat-devices.png` | Statistics | |

### Hero Images (`/hero/`)
| File | Status | Action Needed |
|------|--------|---------------|
| `hero-donate.png` | Review | Verify palette/representation |
| `hero-receive.png` | Review | Verify palette/representation |
| `hero-community.png` | **Replace** | Update with diverse representation |
| `digital-divide.png` | Review | Verify palette/representation |

## Page Layout Patterns

### Hero Sections
- Black background with white text
- Blue accent for emphasis (`text-blue-500`)
- Max width `5xl` for content
- Padding: `py-20 px-4`

### Content Sections
- Alternating backgrounds: `white`, `gray`, `black`, `blue`
- Use `Section` component for consistency

### Cards
- Light: `bg-gray-50 rounded-2xl p-6`
- Dark: `bg-gray-900 rounded-xl p-6`

## Do / Don't

### Do
- Maintain consistent line weight and corner radii
- Use established accent colors (teal/blue/purple)
- Ensure alt text is descriptive
- Include diverse representation in all people illustrations
- Keep icon stroke weights uniform

### Don't
- Mix realistic photos with line art on the same page
- Introduce off-palette colors
- Use unstyled stock imagery
- Use green checkmarks (use blue instead)
- Exclude representation of different abilities, genders, or ethnicities

## Accessibility

- All decorative icons: `aria-hidden="true"`
- All meaningful images: descriptive `alt` text
- Links: hover states with color transitions
- Focus rings: `focus:ring-2 focus:ring-blue-500`
