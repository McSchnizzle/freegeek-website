import { Metadata } from 'next';
import { Button, Section } from '@/components';
import { getTranslations } from 'next-intl/server';
import { ContactForm } from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Free Geek',
  description: 'Get in touch with Free Geek Portland. Visit us, email us, or fill out our contact form.',
};

export default async function ContactPage() {
  const t = await getTranslations('contact');
  const common = await getTranslations('common');

  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="bg-black text-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            {t('hero.description')}
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <Section background="white">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Visit Us */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-2">{t('visit.title')}</h2>
            <p className="text-gray-600 mb-2">
              <strong>{t('visit.address')}</strong><br />
              {t('visit.city')}
            </p>
            <p className="text-gray-500 text-sm mb-4">
              {t('visit.dropoffNote')}
            </p>
            <a
              href="https://maps.google.com/?q=1731+SE+10th+Avenue+Portland+OR+97214"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm font-semibold"
            >
              {common('getDirections')} →
            </a>
          </div>

          {/* Hours */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-2">{common('hours')}</h2>
            <div className="space-y-2 text-gray-600">
              <div className="flex justify-between">
                <span>{t('hours.wednesday')}</span>
                <span>11 AM - 4 PM</span>
              </div>
              <div className="flex justify-between">
                <span>{t('hours.thursday')}</span>
                <span>11 AM - 4 PM</span>
              </div>
              <div className="flex justify-between">
                <span>{t('hours.friday')}</span>
                <span>11 AM - 4 PM</span>
              </div>
              <div className="flex justify-between">
                <span>{t('hours.saturday')}</span>
                <span>11 AM - 4 PM</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>{t('hours.sunTue')}</span>
                <span>{t('hours.closed')}</span>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-2">{t('email.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('email.description')}
            </p>
            <a
              href="mailto:computerfriends@freegeek.org"
              className="text-blue-600 hover:underline font-semibold"
            >
              computerfriends@freegeek.org
            </a>
          </div>
        </div>
      </Section>

      {/* Quick Links */}
      <Section background="gray">
        <h2 className="text-3xl font-bold mb-8 text-center">{t('quickLinks.title')}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <a
            href="/donate-tech"
            className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="font-bold mb-2">{t('quickLinks.donateTech.title')}</h3>
            <p className="text-gray-600 text-sm">
              {t('quickLinks.donateTech.description')}
            </p>
          </a>
          <a
            href="/programs"
            className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="font-bold mb-2">{t('quickLinks.getComputer.title')}</h3>
            <p className="text-gray-600 text-sm">
              {t('quickLinks.getComputer.description')}
            </p>
          </a>
          <a
            href="/volunteer"
            className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="font-bold mb-2">{t('quickLinks.volunteer.title')}</h3>
            <p className="text-gray-600 text-sm">
              {t('quickLinks.volunteer.description')}
            </p>
          </a>
          <a
            href="/faq"
            className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="font-bold mb-2">{t('quickLinks.faqs.title')}</h3>
            <p className="text-gray-600 text-sm">
              {t('quickLinks.faqs.description')}
            </p>
          </a>
        </div>
      </Section>

      {/* Contact Form */}
      <Section background="white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">{t('form.title')}</h2>
          <p className="text-gray-600 text-center mb-8">
            {t('form.description')}
          </p>
          <ContactForm
            translations={{
              name: t('form.name'),
              email: t('form.email'),
              subject: t('form.subject'),
              selectTopic: t('form.selectTopic'),
              topics: {
                digitalInclusion: t('form.topics.digitalInclusion'),
                donation: t('form.topics.donation'),
                business: t('form.topics.business'),
                volunteering: t('form.topics.volunteering'),
                shop: t('form.topics.shop'),
                fundraising: t('form.topics.fundraising'),
                press: t('form.topics.press'),
                hr: t('form.topics.hr'),
                other: t('form.topics.other'),
              },
              message: t('form.message'),
              submit: t('form.submit'),
              sending: t('form.sending'),
              success: t('form.success'),
              successDescription: t('form.successDescription'),
              sendAnother: t('form.sendAnother'),
              error: t('form.error'),
            }}
          />
          <p className="text-sm text-gray-500 text-center mt-6">
            {t('form.note')}
          </p>
        </div>
      </Section>

      {/* Social Media */}
      <Section background="black">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">{t('social.title')}</h2>
          <p className="text-gray-300 mb-8">
            {t('social.description')}
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.instagram.com/freegeekmothership"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/freegeekmothership"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://twitter.com/FreeGeekPDX"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition"
              aria-label="Twitter/X"
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/free-geek"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="blue">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">{t('cta.title')}</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/donate-tech" variant="secondary" size="lg">
              {common('donateTech')}
            </Button>
            <Button href="/donate" variant="outline" size="lg">
              {common('makeFinancialDonation')}
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
