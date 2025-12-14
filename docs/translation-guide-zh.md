# Chinese Translation Guide / 中文翻译指南

This guide provides context for translators working on the Chinese (zh) locale for Free Geek's website.

## Script Decision: Simplified Chinese

This translation uses **Simplified Chinese (简体中文)**, which is:
- Used in Mainland China, Singapore, Malaysia
- The most widely understood Chinese script globally
- Appropriate for the Portland-area Chinese community, which includes speakers from various regions

If Traditional Chinese is needed in the future, a separate `zh-TW.json` locale can be created.

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

### Chinese translation guidance:
- Use clear, modern Simplified Chinese
- Avoid overly formal or bureaucratic language (不要用官方语言)
- Keep sentences concise - Chinese often requires fewer words than English
- Use common vocabulary accessible to all education levels
- Maintain warmth - use 您 (formal you) for respect, but keep tone friendly

## Key Terminology Glossary

| English Term | Chinese (Simplified) | Notes |
|--------------|---------------------|-------|
| Digital divide | 数字鸿沟 | The gap between those with/without technology access |
| Digital equity | 数字公平 | Equal access to technology and skills |
| Digital inclusion | 数字包容 | Programs that connect people with technology |
| E-waste | 电子垃圾 | Electronic waste |
| Refurbished | 翻新的 | Repaired and restored devices |
| Hardware grants | 硬件资助 | Free devices for nonprofits |
| Digital Navigator | 数字导航员 | Staff who help with tech skills |
| Digital skills | 数字技能 | Technology literacy skills |
| Nonprofit | 非营利组织 | 501(c)(3) organization |
| Volunteer | 志愿者 | |
| Donate / Donation | 捐赠 / 捐献 | |
| Community | 社区 | |
| Sustainability | 可持续性 | Environmental sustainability |
| Drop-off | 送达 | Bringing items to Free Geek |
| Pickup | 上门取件 | Free Geek collecting from you |
| Laptop | 笔记本电脑 | |
| Desktop | 台式电脑 | |
| Smartphone | 智能手机 | |
| Tablet | 平板电脑 | |
| Data security | 数据安全 | |
| Data destruction | 数据销毁 | |

## Program Names (Do Not Translate)

These should remain in English:
- **Free Geek** - Organization name
- **Plug Into Portland** - Program name (flagship laptop program)
- **THE BRIDGE** - Monthly giving program name
- **Gift a Geekbox** - Desktop program name (currently closed)
- **Linux Mint** - Operating system name
- **NIST** - National Institute of Standards and Technology
- **i-SIGMA** - Certification body name
- **eBay** - Online marketplace
- **Big Cartel** - Merchandise store platform

## Addresses & Contact Info

Keep addresses in English format for usability:
- 1731 SE 10th Avenue, Portland, OR 97214
- Phone: 503-232-9350
- Email addresses remain unchanged

## Numbers & Formatting

- Use Arabic numerals (1, 2, 3...) - standard in modern Chinese
- Keep currency in USD format: $25, $100
- Keep percentages: 27%, 70%
- Large numbers can use Chinese units: 8200万 (82 million), 7.5万 (75,000)
- Or use Arabic numerals throughout for consistency: 82,000,000

## Character Considerations

- **Font support**: The site uses Noto Sans SC and PingFang SC as fallbacks
- **Character width**: Chinese characters are typically wider than Latin letters
- **Line breaks**: Chinese doesn't use spaces between words; line breaks can occur between any characters
- **Punctuation**: Use Chinese punctuation marks:
  - Period: 。(not .)
  - Comma: ，(not ,)
  - Question mark: ？
  - Exclamation: ！
  - Quotation marks: 「」or ""
  - Parentheses: （）

## Cultural Considerations

- Chinese community in Portland includes immigrants from various regions (Mainland, Taiwan, Hong Kong)
- Many may be seniors, families, or recent immigrants
- Digital literacy levels vary - avoid technical jargon
- Translation should feel natural, not word-for-word from English
- Respect is important - use polite forms where appropriate

## File Structure

The translation file is located at:
```
messages/zh.json
```

It mirrors the structure of `messages/en.json` (English source).

## Translation Process

1. Start with `en.json` copied to `zh.json` (already done if file exists)
2. Translate each string while maintaining JSON structure
3. Preserve all placeholders like `{count}` or `{name}`
4. Run validation: `node scripts/validate-translations.mjs zh`
5. Test in browser with `NEXT_LOCALE=zh` cookie
6. Review for natural phrasing

## Quality Checklist

Before submitting translations:
- [ ] All JSON keys match English file
- [ ] No untranslated English text remains (except brand names)
- [ ] Placeholders ({variable}) are preserved
- [ ] Links and URLs are unchanged
- [ ] Brand names remain in English
- [ ] Numbers use consistent formatting
- [ ] Chinese punctuation is used correctly
- [ ] Text fits UI elements (check for overflow)
- [ ] Run `node scripts/validate-translations.mjs zh` with no errors

## Common Phrases

| English | Chinese |
|---------|---------|
| Learn More | 了解更多 |
| Get Started | 开始 |
| Apply Now | 立即申请 |
| Contact Us | 联系我们 |
| Donate Now | 立即捐赠 |
| View All | 查看全部 |
| Submit | 提交 |
| Thank you | 谢谢 |
| Welcome | 欢迎 |

## Contact

Questions about translation context or brand voice:
- Email: info@freegeek.org
- Website: https://freegeek.org
