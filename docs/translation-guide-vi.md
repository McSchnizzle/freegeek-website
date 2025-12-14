# Vietnamese Translation Guide / Hướng dẫn Dịch thuật Tiếng Việt

This guide provides context for translators working on the Vietnamese (vi) locale for Free Geek's website.

## About Free Geek

Free Geek is a nonprofit organization in Portland, Oregon that:
- Collects donated technology (laptops, computers, phones)
- Refurbishes and redistributes devices to people in need
- Provides digital skills training
- Keeps e-waste out of landfills

## Brand Voice & Tone

### English tone characteristics:
- **Accessible**: Simple, clear language anyone can understand
- **Warm**: Friendly and welcoming, not corporate
- **Action-oriented**: Focus on impact and what people can do
- **Mission-driven**: Emphasizes community benefit and digital equity

### Vietnamese translation guidance:
- Use polite, respectful Vietnamese appropriate for all ages
- Prefer common Vietnamese words over Sino-Vietnamese when possible for accessibility
- Maintain warmth - avoid overly formal bureaucratic language
- Keep sentences concise and clear

## Key Terminology Glossary

| English Term | Suggested Vietnamese | Notes |
|--------------|---------------------|-------|
| Digital divide | Khoảng cách số | The gap between those with/without technology access |
| Digital equity | Công bằng kỹ thuật số | Equal access to technology and skills |
| Digital inclusion | Hòa nhập kỹ thuật số | Programs that connect people with technology |
| E-waste | Rác thải điện tử | Electronic waste |
| Refurbished | Được tân trang | Repaired and restored devices |
| Hardware grants | Tài trợ phần cứng | Free devices for nonprofits |
| Digital Navigator | Người hướng dẫn kỹ thuật số | Staff who help with tech skills |
| Digital skills | Kỹ năng số | Technology literacy skills |
| Nonprofit | Tổ chức phi lợi nhuận | 501(c)(3) organization |
| Volunteer | Tình nguyện viên | |
| Donate / Donation | Quyên góp / Đóng góp | |
| Community | Cộng đồng | |
| Sustainability | Bền vững | Environmental sustainability |
| Drop-off | Giao trực tiếp | Bringing items to Free Geek |
| Pickup | Nhận hàng tận nơi | Free Geek collecting from you |

## Program Names (Do Not Translate)

These should remain in English:
- **Free Geek** - Organization name
- **Plug Into Portland** - Program name (flagship laptop program)
- **THE BRIDGE** - Monthly giving program name
- **Gift a Geekbox** - Desktop program name (currently closed)
- **Linux Mint** - Operating system name
- **NIST** - National Institute of Standards and Technology
- **i-SIGMA** - Certification body name

## Addresses & Contact Info

Keep addresses in English format for usability:
- 1731 SE 10th Avenue, Portland, OR 97214
- Phone: 503-232-9350
- Email addresses remain unchanged

## Numbers & Formatting

- Use Western Arabic numerals (1, 2, 3...)
- Keep currency in USD format: $25, $100
- Keep percentages: 27%, 70%
- Statistics with large numbers: 82 triệu (82 million), 75.000 (75,000)

## Cultural Considerations

- Vietnamese community in Portland is one of the largest LEP (Limited English Proficiency) populations
- Many Vietnamese speakers are immigrants, seniors, or families
- Digital skills gap may be significant - avoid technical jargon
- Translation should feel natural, not word-for-word from English

## File Structure

The translation file is located at:
```
messages/vi.json
```

It mirrors the structure of `messages/en.json` (English source) and `messages/es.json` (Spanish).

## Translation Process

1. Copy strings from `en.json` as placeholders (already done)
2. Translate each string while maintaining JSON structure
3. Preserve all placeholders like `{count}` or `{name}`
4. Test in browser with `NEXT_LOCALE=vi` cookie
5. Have native speakers review for natural phrasing

## Quality Checklist

Before submitting translations:
- [ ] All JSON keys match English file
- [ ] No untranslated English text remains
- [ ] Placeholders ({variable}) are preserved
- [ ] Links and URLs are unchanged
- [ ] Brand names remain in English
- [ ] Numbers use consistent formatting
- [ ] Text fits UI elements (check for overflow)
- [ ] Reviewed by native Vietnamese speaker

## Contact

Questions about translation context or brand voice:
- Email: info@freegeek.org
- Website: https://freegeek.org
