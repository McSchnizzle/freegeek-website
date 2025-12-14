# Free Geek Visual Style Guide

## Brand Colors

**Primary:**
- Black: `#000000` (backgrounds, text)
- White: `#FFFFFF` (backgrounds, text)
- Blue: `#2563EB` (primary accent, CTAs, links)

**Secondary:**
- Teal: `#00A0B0`
- Purple: `#9B4DCA`
- Orange: `#F5A623`
- Yellow: `#F8E71C`

## Typography

**Font Family:** Inter (system fallbacks: system-ui, -apple-system, etc.)

**Usage:**
- Hero titles: `text-4xl md:text-6xl font-bold`
- Section headers: `text-3xl font-bold`
- Body text: `text-lg` or default

## Photography vs. Iconography

### When to Use Photography
- Hero sections on major pages (Home, About, Programs landing)
- Team/staff portraits
- Testimonials with portraits
- Action shots showing community impact

### When to Use Icons
- Feature cards and service descriptions
- Process steps (numbered steps)
- Benefit lists
- Statistics and data points

### Current Icon Style
**Format:** PNG with transparent backgrounds
**Style:** Flat illustration style, vibrant colors
**Location:** `/public/images/icons/`

| Icon | Usage |
|------|-------|
| `icon-donate.png` | Donation flow, tech drop-off |
| `icon-refurbish.png` | Rebuild process |
| `icon-distribute.png` | Program distribution |
| `icon-recycle.png` | Recycling, environmental impact |
| `icon-education.png` | Digital skills, training |
| `icon-security.png` | Data security |
| `stat-ewaste.png` | E-waste statistics |
| `stat-devices.png` | Device count statistics |

## Page Layout Patterns

### Hero Sections
- Black background with white text
- Blue accent for emphasis (`text-blue-500`)
- Max width `5xl` for content
- Padding: `py-20 px-4`

### Content Sections
- Alternating backgrounds: `white`, `gray`, `black`, `blue`
- Use `Section` component for consistency
- Max width varies by content type

### Cards
- `bg-gray-50 rounded-2xl p-6` for light backgrounds
- `bg-gray-900 rounded-xl p-6` for dark backgrounds

## Checkmarks and Lists
- Use blue checkmark SVG: `text-blue-500`
- Consistent spacing: `gap-3` between icon and text

## Trust Badges
Display at bottom of relevant pages:
- Oregon 100 Best Green Workplaces
- i-SIGMA Member
- 501(c)(3) Nonprofit status

## Accessibility
- All icons use `aria-hidden="true"` when decorative
- Links have hover states with color transitions
- Focus rings on interactive elements: `focus:ring-2 focus:ring-blue-500`
