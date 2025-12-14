# Free Geek Visual Asset Plan

## Representation Requirements

All illustrations featuring people must include:
- **Varied skin tones** depicting diverse racial backgrounds
- **Gender expressions** including non-binary-presenting figures
- **Disability representation** where appropriate
- **Varied hairstyles, body types, and features**

## Placement Checklist

| Page | Location | Current Status | Asset Needed |
|------|----------|----------------|--------------|
| **Home** | Hero/community section | Has `hero-community.png` | **Replace** with diverse illustration |
| **Programs** | Hero + program cards | Text-heavy | Add hero illustration + card imagery |
| **Volunteer** | Hero + CTA | Minimal visuals | Add volunteer/community illustration |
| **Donate Tech** | Trust strip | Has icons | Add data security visual |
| **Digital Skills** | Hero | Text-heavy | Add coaching/learning illustration |
| **Impact** | Report section | Minimal | Add impact visualization |

### New Visual Slots (Text-Heavy Areas)
Identify 2-3 areas that would benefit from illustrations:
1. **Programs landing page** - Add program differentiation imagery
2. **About page** - Add mission/values illustration
3. **FAQ page** - Add supportive visual element

## Required Assets by Priority

### High Priority (P1)

| Asset | Description | Representation | Specs |
|-------|-------------|----------------|-------|
| **hero-community.png replacement** | Community illustration showing Free Geek's impact | Multiple skin tones, non-binary figures, varied ages | 1200x800px, flat vector, teal/blue/purple palette |
| **Data Security Visual** | Technician performing secure data wipe | Diverse representation | 800x600px, flat vector |
| **Device Distribution** | Recipient receiving laptop, showing positive impact | Varied skin tones, ages, abilities | 800x600px, flat vector |

### Medium Priority (P2)

| Asset | Description | Representation | Specs |
|-------|-------------|----------------|-------|
| **Volunteer Scene** | Community drop-off or volunteers sorting tech | Diverse group | 800x600px, flat vector |
| **Digital Skills Coaching** | Learner + Digital Navigator in session | Cross-generational, diverse | 800x600px, flat vector |
| **Program Card: Individuals** | Person with laptop (Plug Into Portland) | Include disability rep | 400x300px, flat vector |
| **Program Card: Organizations** | Group/team receiving equipment | Diverse workplace | 400x300px, flat vector |
| **Program Card: Affordable Tech** | Shop/retail setting | Inclusive | 400x300px, flat vector |

### Lower Priority (P3)

| Asset | Description | Representation | Specs |
|-------|-------------|----------------|-------|
| **Donor Testimonial Portrait** | Illustrated portrait for quote | Varied | 200x200px |
| **Partner Testimonial Portrait** | Illustrated portrait for quote | Varied | 200x200px |
| **Spanish Support Badge** | Visual indicator for language support | N/A | SVG, 100x30px |
| **Building Exterior** | Free Geek location illustration | N/A | 800x400px |

## Existing Assets - AUDIT COMPLETE ✓

### Location: `/public/images/`

**Logos:**
- `logos/freegeek-logo.svg` - Primary logo ✓

**Hero Images - ALL PASS:**
- `hero/hero-donate.png` ✓ Palette compliant, varied skin tones
- `hero/hero-receive.png` ✓ Palette compliant, single person scene
- `hero/hero-community.png` ✓ Diverse: varied skin tones, wheelchair user, multiple ages
- `hero/digital-divide.png` ✓ Diverse: varied skin tones, multiple wheelchair users

**Icons - ALL PASS (teal/purple/orange palette):**
- `icons/icon-donate.png` ✓ Teal hand, consistent stroke
- `icons/icon-refurbish.png` ✓ Purple/teal, consistent stroke
- `icons/icon-distribute.png` ✓ Orange/teal accents
- `icons/icon-recycle.png` ✓ Teal monitor
- `icons/icon-education.png` ✓ Purple accents
- `icons/icon-security.png` ✓ Teal shield, orange lock
- `icons/stat-ewaste.png` ✓ Teal/purple/orange devices
- `icons/stat-devices.png` ✓ Varied skin tones, teal/purple hearts

## Art Direction Guidelines

### Style Requirements
1. **Flat vector illustrations** - no photo realism
2. **Bold outlines** with consistent stroke weights
3. **No mixing** photos with line art on same page
4. **Clean backgrounds** - mostly white, minimal gradients

### Color Requirements
- Primary palette: teal (`#00A0B0`), blue (`#2563EB`), purple (`#9B4DCA`)
- **Limited orange** (`#F5A623`) - highlights only
- **Avoid green** unless brand-specified
- No off-palette colors

### Character Requirements
- Every illustration with people must show diversity
- Include at minimum: 2+ skin tones, varied gender presentations
- Consider including: wheelchair users, assistive devices, varied ages

## Implementation Checklist

When assets are created:

- [ ] Verify representation requirements are met
- [ ] Confirm palette compliance (teal/blue/purple, limited orange)
- [ ] Check stroke weights match existing icons
- [ ] Add to `/public/images/[category]/`
- [ ] Use Next.js `Image` component
- [ ] Provide descriptive alt text
- [ ] Update page components with new paths
- [ ] Test across breakpoints
