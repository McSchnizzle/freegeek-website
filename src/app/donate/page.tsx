import { Metadata } from 'next';
import { Button, Section } from '@/components';
import { getTranslations } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Donate | Free Geek',
  description: 'Support Free Geek with a financial donation. Your gift helps bridge the digital divide and keep technology out of landfills.',
};

export default async function DonatePage() {
  const t = await getTranslations('donate');
  const common = await getTranslations('common');

  return (
    <div className="pt-[72px]">
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

      {/* Donation Options */}
      <Section background="white">
        <h2 className="text-3xl font-bold mb-4 text-center">{t('ways.title')}</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          {t('ways.description')}
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* One-Time */}
          <div className="bg-gray-50 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">{t('ways.oneTime.title')}</h3>
            <p className="text-gray-600 text-sm mb-6">
              {t('ways.oneTime.description')}
            </p>
            <Button href="/donate/bridge" className="w-full">
              {common('donateNow')}
            </Button>
          </div>

          {/* Monthly */}
          <div className="bg-blue-50 rounded-2xl p-6 text-center border-2 border-blue-600">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">{t('ways.monthly.title')}</h3>
            <p className="text-gray-600 text-sm mb-6">
              {t('ways.monthly.description')}
            </p>
            <Button href="/donate/bridge" className="w-full">
              {t('ways.monthly.cta')}
            </Button>
          </div>

          {/* Legacy */}
          <div className="bg-gray-50 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">{t('ways.legacy.title')}</h3>
            <p className="text-gray-600 text-sm mb-6">
              {t('ways.legacy.description')}
            </p>
            <Button href="/contact" variant="secondary" className="w-full">
              {common('contactUs')}
            </Button>
          </div>
        </div>
      </Section>

      {/* Impact */}
      <Section background="gray">
        <h2 className="text-3xl font-bold mb-12 text-center">{t('impact.title')}</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-5xl font-black text-blue-600 mb-2">$25</div>
            <p className="text-gray-600">
              {t('impact.level1')}
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-black text-blue-600 mb-2">$100</div>
            <p className="text-gray-600">
              {t('impact.level2')}
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-black text-blue-600 mb-2">$250</div>
            <p className="text-gray-600">
              {t('impact.level3')}
            </p>
          </div>
        </div>
      </Section>

      {/* Other Ways */}
      <Section background="white">
        <h2 className="text-3xl font-bold mb-8 text-center">{t('otherWays.title')}</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <a
            href="/donate-tech"
            className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow block"
          >
            <h3 className="font-bold text-lg mb-2">{t('otherWays.donateTech.title')}</h3>
            <p className="text-gray-600 text-sm">
              {t('otherWays.donateTech.description')}
            </p>
          </a>
          <a
            href="/volunteer"
            className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow block"
          >
            <h3 className="font-bold text-lg mb-2">{t('otherWays.volunteer.title')}</h3>
            <p className="text-gray-600 text-sm">
              {t('otherWays.volunteer.description')}
            </p>
          </a>
          <a
            href="/volunteer/tech-drive"
            className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow block"
          >
            <h3 className="font-bold text-lg mb-2">{t('otherWays.techDrive.title')}</h3>
            <p className="text-gray-600 text-sm">
              {t('otherWays.techDrive.description')}
            </p>
          </a>
          <a
            href="/volunteer/ambassador"
            className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow block"
          >
            <h3 className="font-bold text-lg mb-2">{t('otherWays.ambassador.title')}</h3>
            <p className="text-gray-600 text-sm">
              {t('otherWays.ambassador.description')}
            </p>
          </a>
        </div>
      </Section>

      {/* Tax Info */}
      <Section background="black">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">{t('tax.title')}</h2>
          <p className="text-xl text-gray-300 mb-4">
            {t('tax.description')}
          </p>
          <p className="text-gray-400">
            EIN: 93-1243063
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section background="blue">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">{t('cta.title')}</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          <Button href="/donate/bridge" variant="secondary" size="lg">
            {common('donateNow')}
          </Button>
        </div>
      </Section>
    </div>
  );
}
