import Image from 'next/image';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { NewsletterForm } from '@/components/forms/NewsletterForm';

export async function Footer() {
  const t = await getTranslations('footer');
  const common = await getTranslations('common');
  const currentYear = new Date().getFullYear();

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
    ],
  };

  const recognitionBadges = [
    {
      nameKey: 'isigma',
      href: 'https://isigma.org/',
    },
    {
      nameKey: 'ndia',
      href: 'https://www.digitalinclusion.org/',
    },
    {
      nameKey: 'bestNonprofits',
      href: null,
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
            <NewsletterForm />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
          {/* Logo and Mission */}
          <div className="max-w-xs">
            <Link href="/">
              <Image
                src="/images/logos/freegeek-logo.svg"
                alt="Free Geek"
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
          <div className="flex flex-wrap justify-center gap-6">
            {recognitionBadges.map((badge) => (
              badge.href ? (
                <a
                  key={badge.nameKey}
                  href={badge.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
                  title={t(`recognition.${badge.nameKey}.description`)}
                >
                  <span className="text-sm text-gray-300 group-hover:text-white">{t(`recognition.${badge.nameKey}.name`)}</span>
                  <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span className="sr-only"> {common('opensNewTab')}</span>
                </a>
              ) : (
                <span
                  key={badge.nameKey}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-lg"
                  title={t(`recognition.${badge.nameKey}.description`)}
                >
                  <span className="text-sm text-gray-300">{t(`recognition.${badge.nameKey}.name`)}</span>
                </span>
              )
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} {t('copyright')}
          </p>
          <p className="text-gray-600 text-sm">
            {t('since')}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
