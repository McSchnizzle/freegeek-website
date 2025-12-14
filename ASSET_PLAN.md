# Free Geek Visual Asset Plan

## Required Assets

### High Priority

| Asset | Description | Placement | Specs |
|-------|-------------|-----------|-------|
| **Data Security Visual** | Photo/illustration showing secure data wipe or technician at work | `/donate-tech`, `/data-security`, trust strip | 800x600px min, dark/neutral background |
| **Device Distribution** | Photo of recipient receiving device, showing positive impact | `/programs`, homepage CTA, BRIDGE page | 800x600px, natural lighting, diverse representation |
| **Volunteer/Drop-off Scene** | Community members dropping off tech or volunteers sorting | `/volunteer`, `/donate-tech` | 800x600px, action shot |
| **Digital Skills Coaching** | Learner and Digital Navigator in session | `/programs/digital-skills` | 800x600px, approachable/educational feel |

### Medium Priority

| Asset | Description | Placement | Specs |
|-------|-------------|-----------|-------|
| **Program Card Images** | Distinct imagery for each program type | `/programs` landing, homepage | 400x300px each |
| └ Individuals | Person with laptop (Plug Into Portland) | | |
| └ Organizations | Group/team receiving equipment (Hardware Grants) | | |
| └ Affordable Tech | Shop/retail setting | | |
| **Donor Testimonial Portrait** | Quote with photo | Homepage, `/donate-tech` | 200x200px headshot |
| **Partner Testimonial Portrait** | Quote with photo | Homepage, `/programs` | 200x200px headshot |

### Lower Priority

| Asset | Description | Placement | Specs |
|-------|-------------|-----------|-------|
| **Building Exterior** | Free Geek building photo | `/location` | 800x400px |
| **Building Interior** | Workshop/volunteer area | `/about`, `/volunteer` | 800x600px |
| **Bilingual Support Badge** | Visual indicator for Spanish support | Near language toggle | SVG, 100x30px |

## Existing Assets (in `/public/images/`)

### Logos
- `logos/freegeek-logo.svg` - Primary logo

### Hero Images
- `hero/hero-donate.png` - Donation flow
- `hero/hero-receive.png` - Receiving devices
- `hero/hero-community.png` - Community impact
- `hero/digital-divide.png` - Digital equity

### Icons
- `icons/icon-donate.png`
- `icons/icon-refurbish.png`
- `icons/icon-distribute.png`
- `icons/icon-recycle.png`
- `icons/icon-education.png`
- `icons/icon-security.png`
- `icons/stat-ewaste.png`
- `icons/stat-devices.png`

## Art Direction Guidelines

1. **Photography Style:**
   - Natural lighting preferred
   - Diverse representation in all people shots
   - Action/candid over posed
   - Portland/Pacific Northwest aesthetic

2. **Color Treatment:**
   - Photos can be full color
   - Consider slight desaturation for consistency
   - Avoid heavy filters

3. **Icon Consistency:**
   - Flat illustration style (matching existing icons)
   - Use brand palette (blue, teal, purple, orange)
   - Transparent PNG backgrounds
   - Consistent line weights

## Implementation Notes

When assets are ready:
1. Add to `/public/images/[category]/`
2. Use Next.js `Image` component for optimization
3. Provide alt text for accessibility
4. Update page components with new image paths
