import Image from 'next/image';
import Link from 'next/link';

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
  ],
  social: [
    { href: 'https://instagram.com/freegeekmothership', label: 'Instagram', external: true },
    { href: 'https://linkedin.com/company/free-geek', label: 'LinkedIn', external: true },
    { href: 'https://twitter.com/FreeGeekPDX', label: 'Twitter', external: true },
  ],
};

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
            <form className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                type="email"
                id="newsletter-email"
                name="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition w-full sm:w-64"
                required
                aria-required="true"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
              >
                Subscribe
              </button>
            </form>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Note: Newsletter signup is not yet connected. For updates, follow us on social media.
          </p>
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
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
