import Image from 'next/image';
import Link from 'next/link';
import { NewsletterForm } from '@/components/forms/NewsletterForm';

const footerLinks = {
  programs: [
    { href: '/programs', label: 'Get a Computer' },
    { href: '/programs/hardware-grants', label: 'Hardware Grants' },
    { href: '/programs/digital-skills', label: 'Digital Skills' },
  ],
  getInvolved: [
    { href: '/donate-tech', label: 'Donate Tech' },
    { href: '/volunteer', label: 'Volunteer' },
    { href: '/donate', label: 'Donate Money' },
    { href: '/donate/bridge', label: 'BRIDGE Monthly Giving' },
  ],
  about: [
    { href: '/about', label: 'Our Story' },
    { href: '/about/staff', label: 'Our Team' },
    { href: '/about/impact', label: 'Our Impact' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' },
  ],
  social: [
    { href: 'https://instagram.com/freegeekmothership', label: 'Instagram', external: true },
    { href: 'https://linkedin.com/company/free-geek', label: 'LinkedIn', external: true },
    { href: 'https://twitter.com/FreeGeekPDX', label: 'Twitter', external: true },
  ],
};

const recognitionBadges = [
  {
    name: 'i-SIGMA Member',
    description: 'Certified member of the International Secure Information Governance & Management Association',
    href: 'https://isigma.org/',
  },
  {
    name: 'NDIA Affiliate',
    description: 'National Digital Inclusion Alliance affiliate organization',
    href: 'https://www.digitalinclusion.org/',
  },
  {
    name: '100 Best Nonprofits',
    description: 'Oregon Business 100 Best Nonprofits to Work For',
    href: null,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 px-4" role="contentinfo" aria-label="Site footer">
      <div className="max-w-5xl mx-auto">
        {/* Newsletter Signup */}
        <div className="border-b border-gray-800 pb-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold mb-1">Stay in the loop</h2>
              <p className="text-gray-400 text-sm">Get news, impact stories, and volunteer opportunities delivered to your inbox.</p>
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
              Sustainably reusing technology, enabling digital access,
              and empowering communities since 2000.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Programs */}
            <div>
              <h3 className="font-bold mb-4">Programs</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {footerLinks.programs.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get Involved */}
            <div>
              <h3 className="font-bold mb-4">Get Involved</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {footerLinks.getInvolved.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About */}
            <div>
              <h3 className="font-bold mb-4">About</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {footerLinks.about.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="font-bold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {footerLinks.social.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                      <span className="sr-only"> (opens in new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Recognition Badges */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h3 className="text-sm font-semibold text-gray-400 mb-4 text-center">Memberships & Recognition</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {recognitionBadges.map((badge) => (
              badge.href ? (
                <a
                  key={badge.name}
                  href={badge.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
                  title={badge.description}
                >
                  <span className="text-sm text-gray-300 group-hover:text-white">{badge.name}</span>
                  <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              ) : (
                <span
                  key={badge.name}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-lg"
                  title={badge.description}
                >
                  <span className="text-sm text-gray-300">{badge.name}</span>
                </span>
              )
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Free Geek. 501(c)(3) Nonprofit Organization.
          </p>
          <p className="text-gray-600 text-sm">
            Turning e-waste into opportunity since Earth Day, 2000.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
