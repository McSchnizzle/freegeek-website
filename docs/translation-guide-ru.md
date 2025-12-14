# Russian Translation Guide / Руководство по переводу на русский

This guide provides context for translators working on the Russian (ru) locale for Free Geek's website.

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

### Russian translation guidance:
- Use clear, modern Russian accessible to all education levels
- Avoid overly formal or bureaucratic language (избегайте канцелярита)
- Maintain warmth - use вы (formal you) but keep tone friendly
- Keep sentences concise and clear
- Translation should feel natural, not word-for-word from English

## Key Terminology Glossary

| English Term | Russian | Notes |
|--------------|---------|-------|
| Digital divide | Цифровое неравенство | The gap between those with/without technology access |
| Digital equity | Цифровое равенство | Equal access to technology and skills |
| Digital inclusion | Цифровая инклюзия | Programs that connect people with technology |
| E-waste | Электронные отходы | Electronic waste |
| Refurbished | Восстановленный | Repaired and restored devices |
| Hardware grants | Гранты на оборудование | Free devices for nonprofits |
| Digital Navigator | Цифровой навигатор | Staff who help with tech skills |
| Digital skills | Цифровые навыки | Technology literacy skills |
| Nonprofit | Некоммерческая организация | 501(c)(3) organization |
| Volunteer | Волонтёр | |
| Donate / Donation | Пожертвовать / Пожертвование | |
| Community | Сообщество | |
| Sustainability | Устойчивое развитие | Environmental sustainability |
| Drop-off | Доставка | Bringing items to Free Geek |
| Pickup | Самовывоз | Free Geek collecting from you |
| Laptop | Ноутбук | |
| Desktop | Настольный компьютер | |
| Smartphone | Смартфон | |
| Tablet | Планшет | |
| Data security | Безопасность данных | |
| Data destruction | Уничтожение данных | |

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

- Use Arabic numerals (1, 2, 3...) - standard in Russian
- Keep currency in USD format: $25, $100 or 25 долларов
- Keep percentages: 27%, 70%
- Large numbers: 82 миллиона (82 million), 75 000 (75,000)
- Note: Russian uses spaces as thousand separators, not commas

## Cyrillic Character Considerations

- **Font support**: The site includes Noto Sans and Helvetica Neue for Cyrillic support
- **Character set**: Full Cyrillic alphabet (А-Я, а-я) plus Ё/ё
- **Always use Ё**: Write ещё (not еще), её (not ее) for clarity
- **Quotation marks**: Use «ёлочки» (angle quotes) for Russian: «текст»

## Grammar Notes

- **Formal address**: Use вы (you-formal) consistently
- **Gender agreement**: Be consistent with grammatical gender
- **Cases**: Pay attention to proper case endings, especially with numbers
- **Verb aspects**: Choose appropriate perfective/imperfective forms

### Number Agreement Examples:
- 1 компьютер (nominative singular)
- 2-4 компьютера (genitive singular)
- 5+ компьютеров (genitive plural)

## Cultural Considerations

- Russian-speaking community in Portland includes immigrants from various former Soviet countries
- Many may be seniors, families, or refugees
- Digital literacy levels vary - avoid technical jargon where possible
- Translation should feel natural to native speakers
- Respectful, polite tone is important

## File Structure

The translation file is located at:
```
messages/ru.json
```

It mirrors the structure of `messages/en.json` (English source).

## Translation Process

1. Start with `en.json` copied to `ru.json` (already done if file exists)
2. Translate each string while maintaining JSON structure
3. Preserve all placeholders like `{count}` or `{name}`
4. Run validation: `node scripts/validate-translations.mjs ru`
5. Test in browser with `NEXT_LOCALE=ru` cookie
6. Review for natural phrasing

## Quality Checklist

Before submitting translations:
- [ ] All JSON keys match English file
- [ ] No untranslated English text remains (except brand names)
- [ ] Placeholders ({variable}) are preserved
- [ ] Links and URLs are unchanged
- [ ] Brand names remain in English
- [ ] Numbers use consistent formatting (spaces for thousands)
- [ ] Proper Cyrillic characters used (including Ё)
- [ ] Text fits UI elements (check for overflow)
- [ ] Run `node scripts/validate-translations.mjs ru` with no errors

## Common Phrases

| English | Russian |
|---------|---------|
| Learn More | Узнать больше |
| Get Started | Начать |
| Apply Now | Подать заявку |
| Contact Us | Связаться с нами |
| Donate Now | Пожертвовать сейчас |
| View All | Смотреть все |
| Submit | Отправить |
| Thank you | Спасибо |
| Welcome | Добро пожаловать |
| Free | Бесплатно |
| Hours | Часы работы |

## Contact

Questions about translation context or brand voice:
- Email: info@freegeek.org
- Website: https://freegeek.org
