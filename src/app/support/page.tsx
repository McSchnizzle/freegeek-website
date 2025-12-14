import { Metadata } from 'next';
import { Button, Section } from '@/components';
import { getTranslations } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Digital Navigation Support | Free Geek',
  description: 'Get help setting up your device, navigating the internet, and building digital skills with support from Free Geek\'s Digital Navigation team.',
};

export default async function SupportPage() {
  const t = await getTranslations('supportPage');
  const common = await getTranslations('common');

  return (
    <main className="pt-[72px]">
      {/* Hero */}
      <section className="bg-black text-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('hero.title1')}<br />
            <span className="text-blue-500">{t('hero.title2')}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            {t('hero.description')}
          </p>
        </div>
      </section>

      {/* Important Notice */}
      <Section background="white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h2 className="text-xl font-bold text-amber-800 mb-2">{t('notice.title')}</h2>
            <p className="text-amber-700">{t('notice.description')}</p>
          </div>
        </div>
      </Section>

      {/* Warranty Info */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">{t('warranty.title')}</h2>
          <p className="text-gray-600 text-lg mb-6">{t('warranty.description')}</p>
          <p className="text-gray-600 mb-4">{t('warranty.eligible')}</p>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
            <li>{t('warranty.programs.pip')}</li>
            <li>{t('warranty.programs.geekbox')}</li>
            <li>{t('warranty.programs.grants')}</li>
          </ul>
          <p className="text-gray-700 font-medium mb-2">{t('warranty.contact')}</p>
          <p className="text-blue-600">
            <a href={`mailto:${t('contact.email')}`} className="hover:underline">{t('contact.email')}</a>
            {' · '}
            <a href={`tel:${t('contact.phone').replace(/\s+/g, '')}`} className="hover:underline">{t('contact.phone')}</a>
          </p>
        </div>
      </Section>

      {/* 1:1 Support */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">{t('navigation.title')}</h2>
          <p className="text-gray-600 text-lg mb-6">{t('navigation.description')}</p>
          <ul className="space-y-3 mb-8">
            {['item1', 'item2', 'item3', 'item4', 'item5'].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">{t(`navigation.${item}`)}</span>
              </li>
            ))}
          </ul>
          <Button href="/contact" variant="primary">
            {t('navigation.cta')}
          </Button>
        </div>
      </Section>

      {/* Programs Covered */}
      <Section background="black">
        <h2 className="text-3xl font-bold mb-4 text-center">{t('programs.title')}</h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">{t('programs.description')}</p>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-2">{t('programs.pip.title')}</h3>
            <p className="text-gray-400">{t('programs.pip.description')}</p>
          </div>
          <div className="bg-gray-900 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-2">{t('programs.geekbox.title')}</h3>
            <p className="text-gray-400">{t('programs.geekbox.description')}</p>
          </div>
          <div className="bg-gray-900 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-2">{t('programs.grants.title')}</h3>
            <p className="text-gray-400">{t('programs.grants.description')}</p>
          </div>
          <div className="bg-gray-900 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-2">{t('programs.digitalNav.title')}</h3>
            <p className="text-gray-400">{t('programs.digitalNav.description')}</p>
          </div>
        </div>
      </Section>

      {/* Contact Info */}
      <Section background="white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">{t('contact.title')}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <svg className="w-8 h-8 text-blue-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <p className="font-bold">{common('phone')}</p>
              <a href={`tel:${t('contact.phone').replace(/\s+/g, '')}`} className="text-blue-600 hover:underline">
                {t('contact.phone')}
              </a>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <svg className="w-8 h-8 text-blue-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <p className="font-bold">{common('email')}</p>
              <a href={`mailto:${t('contact.email')}`} className="text-blue-600 hover:underline">
                {t('contact.email')}
              </a>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <svg className="w-8 h-8 text-blue-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="font-bold">{common('hours')}</p>
              <p className="text-gray-600">{t('contact.hours')}</p>
            </div>
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
          <Button href="/programs/plug-into-portland" variant="secondary" size="lg">
            {common('applyNow')}
          </Button>
        </div>
      </Section>
    </main>
  );
}
