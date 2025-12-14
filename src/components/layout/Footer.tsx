import Image from 'next/image';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { NewsletterForm } from '@/components/forms/NewsletterForm';

export async function Footer() {
  const t = await getTranslations('footer');
  const common = await getTranslations('common');
  const currentYear = new Date().getFullYear();

  const newsletterTranslations = {
    emailLabel: t('newsletter.emailLabel'),
    placeholder: t('newsletter.placeholder'),
    subscribe: t('newsletter.subscribe'),
    subscribing: t('newsletter.subscribing'),
    success: t('newsletter.success'),
    error: t('newsletter.error'),
  };

  const footerLinks = {
    programs: [
      { href: '/programs', labelKey: 'getComputer' },
      { href: '/programs/hardware-grants', labelKey: 'hardwareGrants' },
      { href: '/programs/digital-skills', labelKey: 'digitalSkills' },
    ],
    getInvolved: [
      { href: '/donate-tech', labelKey: 'donateTech' },
      { href: '/volunteer', labelKey: 'volunteer' },
      { href: '/donate', labelKey: 'donateMoney' },
      { href: '/donate/bridge', labelKey: 'bridgeGiving' },
    ],
    about: [
      { href: '/about', labelKey: 'ourStory' },
      { href: '/about/staff', labelKey: 'ourTeam' },
      { href: '/about/impact', labelKey: 'ourImpact' },
      { href: '/careers', labelKey: 'careers' },
      { href: '/contact', labelKey: 'contact' },
    ],
    social: [
      { href: 'https://instagram.com/freegeekmothership', labelKey: 'instagram', external: true },
      { href: 'https://linkedin.com/company/free-geek', labelKey: 'linkedin', external: true },
      { href: 'https://twitter.com/FreeGeekPDX', labelKey: 'twitter', external: true },
      { href: 'https://github.com/freegeek-pdx', labelKey: 'github', external: true },
    ],
  };

  const recognitionBadges = [
    {
      nameKey: 'isigma',
      href: 'https://isigma.org/',
      image: '/images/badges/isigma-member.png',
    },
    {
      nameKey: 'ndia',
      href: 'https://www.digitalinclusion.org/',
      image: '/images/badges/ndia-affiliate.png',
    },
    {
      nameKey: 'bestNonprofits',
      href: 'https://oregonbusiness.com/category/100-best-non-profits/',
      image: '/images/badges/100-best-nonprofits.png',
    },
    {
      nameKey: 'greenWorkplaces',
      href: 'https://oregonbusiness.com/category/100-best-green/',
      image: '/images/badges/100-best-green.png',
    },
    {
      nameKey: 'mostAdmiredTech',
      href: 'https://www.bizjournals.com/portland/news/2025/12/11/most-admired-companies-intro.html',
      image: '/images/badges/pbj-most-admired.png',
    },
  ];

  return (
    <footer className="bg-black text-white py-12 px-4" role="contentinfo" aria-label="Site footer">
      <div className="max-w-5xl mx-auto">
        {/* Newsletter Signup */}
        <div className="border-b border-gray-800 pb-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold mb-1">{t('newsletter.title')}</h2>
              <p className="text-gray-400 text-sm">{t('newsletter.description')}</p>
            </div>
            <NewsletterForm translations={newsletterTranslations} />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
          {/* Logo and Mission */}
          <div className="max-w-xs">
            <Link href="/">
              <Image
                src="/images/logos/freegeek-logo.svg"
                alt={common('logoAlt')}
                width={150}
                height={50}
                className="invert mb-4"
              />
            </Link>
            <p className="text-gray-400 text-sm">
              {t('tagline')}
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Programs */}
            <div>
              <h3 className="font-bold mb-4">{t('sections.programs')}</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {footerLinks.programs.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-white transition-colors">
                      {t(`links.${link.labelKey}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get Involved */}
            <div>
              <h3 className="font-bold mb-4">{t('sections.getInvolved')}</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {footerLinks.getInvolved.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-white transition-colors">
                      {t(`links.${link.labelKey}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About */}
            <div>
              <h3 className="font-bold mb-4">{t('sections.about')}</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {footerLinks.about.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-white transition-colors">
                      {t(`links.${link.labelKey}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="font-bold mb-4">{t('sections.connect')}</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {footerLinks.social.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      {t(`links.${link.labelKey}`)}
                      <span className="sr-only"> {common('opensNewTab')}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Recognition Badges */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h3 className="text-sm font-semibold text-gray-400 mb-4 text-center">{t('recognition.title')}</h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {recognitionBadges.map((badge) => (
              <a
                key={badge.nameKey}
                href={badge.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-900 transition-colors"
                title={t(`recognition.${badge.nameKey}.description`)}
              >
                <Image
                  src={badge.image}
                  alt={t(`recognition.${badge.nameKey}.name`)}
                  width={80}
                  height={80}
                  className="opacity-90 group-hover:opacity-100 transition-opacity"
                />
                <span className="sr-only">{t(`recognition.${badge.nameKey}.name`)} - {common('opensNewTab')}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-sm">
                &copy; {currentYear} {t('copyright')}
              </p>
              <p className="text-gray-600 text-sm">
                {t('ein')}
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-500 text-sm font-medium">{t('support.title')}</p>
              <p className="text-gray-600 text-sm">
                <a href={`tel:${t('support.phone').replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {t('support.phone')}
                </a>
                {' · '}
                <a href={`mailto:${t('support.email')}`} className="hover:text-white transition-colors">
                  {t('support.email')}
                </a>
              </p>
            </div>
          </div>
          <p className="text-gray-600 text-sm text-center">
            {t('since')}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
