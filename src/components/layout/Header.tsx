'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../ui/Button';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/donate-tech', label: 'Donate Tech' },
  { href: '/shop', label: 'Shop', external: true, url: 'https://freegeek.org/shop' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-black z-50">
      {/* Skip link for accessibility */}
      <a
        href="#main-content"
        className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white"
      >
        Skip to main content
      </a>

      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logos/freegeek-logo.svg"
            alt="Free Geek"
            width={120}
            height={40}
            className="invert"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            link.external ? (
              <a
                key={link.href}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button href="/donate-tech" size="sm">
            Donate Tech
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <nav className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.href}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-white py-2 text-base font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-300 hover:text-white py-2 text-base font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
            <div className="pt-4">
              <Button href="/donate-tech" className="w-full">
                Donate Tech
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
