import { Metadata } from 'next';
import { Button, Section } from '@/components';
import { getTranslations } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Schedule Large Donation | Free Geek',
  description: 'Schedule a large tech donation (20+ devices) with Free Geek. We offer pickup service for large donations in the Portland metro area.',
};

export default async function LargeDonationPage() {
  const t = await getTranslations('largeDonation');
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

      {/* What Counts */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">{t('what.title')}</h2>
          <p className="text-gray-600 text-lg mb-6">{t('what.description')}</p>
          <ul className="space-y-3">
            {['item1', 'item2', 'item3', 'item4'].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">{t(`what.${item}`)}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Pickup Service */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 flex flex-col md:flex-row items-start gap-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">{t('pickup.title')}</h2>
              <p className="text-gray-600 mb-4">{t('pickup.description')}</p>
              <p className="text-sm text-gray-500 italic">{t('pickup.note')}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Form CTA */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">{t('form.title')}</h2>
            <p className="text-gray-600 mb-6">{t('form.description')}</p>
            <p className="text-gray-500 mb-6">
              {t('form.instructions')}
            </p>
            <Button href="/contact" variant="primary" size="lg">
              {common('contactUs')}
            </Button>
          </div>
        </div>
      </Section>

      {/* Drop-Off Info */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">{t('dropOff.title')}</h2>
          <div className="bg-white rounded-xl p-6 inline-block">
            <p className="text-xl font-medium mb-2">{t('dropOff.address')}</p>
            <p className="text-gray-600 mb-4">{t('dropOff.hours')}</p>
            <p className="text-sm text-gray-500">{t('dropOff.note')}</p>
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
          <Button href="/donate-tech" variant="secondary" size="lg">
            {common('donateTech')}
          </Button>
        </div>
      </Section>
    </main>
  );
}
