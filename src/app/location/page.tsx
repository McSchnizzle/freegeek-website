import { Metadata } from 'next';
import { Button, Section } from '@/components';
import { getTranslations } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Visit Free Geek | Location & Hours',
  description: 'Visit Free Geek at 1731 SE 10th Avenue, Portland, OR. Open Wednesday-Saturday, 11 AM - 4 PM. Drop off tech donations, pick up a computer, or learn about our programs.',
};

export default async function LocationPage() {
  const t = await getTranslations('location');
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
          <p className="text-xl text-gray-300 max-w-2xl mb-8">
            {t('hero.description')}
          </p>
          <Button
            href="https://maps.google.com/?q=1731+SE+10th+Avenue+Portland+OR+97214"
            variant="primary"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            {common('getDirections')}
          </Button>
        </div>
      </section>

      {/* Address and Hours */}
      <Section background="white">
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h2 className="text-2xl font-bold mb-6">{t('address.title')}</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-xl font-medium mb-1">{t('address.street')}</p>
              <p className="text-gray-600 mb-4">{t('address.city')}</p>
              <a
                href="https://maps.google.com/?q=1731+SE+10th+Avenue+Portland+OR+97214"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline flex items-center gap-1"
              >
                {t('address.mapLink')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">{t('hours.title')}</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('hours.days.wed')}</span>
                  <span className="font-medium text-green-600">{t('hours.open')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('hours.days.thu')}</span>
                  <span className="font-medium text-green-600">{t('hours.open')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('hours.days.fri')}</span>
                  <span className="font-medium text-green-600">{t('hours.open')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('hours.days.sat')}</span>
                  <span className="font-medium text-green-600">{t('hours.open')}</span>
                </div>
                <div className="flex justify-between border-t pt-2 mt-2">
                  <span className="text-gray-600">{t('hours.days.sunTue')}</span>
                  <span className="font-medium text-red-600">{t('hours.closed')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Getting Here */}
      <Section background="gray">
        <h2 className="text-3xl font-bold mb-12 text-center">{t('getting.title')}</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">{t('getting.transit.title')}</h3>
            <p className="text-gray-600">{t('getting.transit.description')}</p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">{t('getting.bike.title')}</h3>
            <p className="text-gray-600">{t('getting.bike.description')}</p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">{t('getting.car.title')}</h3>
            <p className="text-gray-600">{t('getting.car.description')}</p>
          </div>
        </div>
      </Section>

      {/* Building Entrances */}
      <Section background="white">
        <h2 className="text-3xl font-bold mb-12 text-center">{t('entrances.title')}</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">{t('entrances.donations.title')}</h3>
            <p className="text-gray-600">{t('entrances.donations.description')}</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">{t('entrances.info.title')}</h3>
            <p className="text-gray-600">{t('entrances.info.description')}</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">{t('entrances.shop.title')}</h3>
            <p className="text-gray-600">{t('entrances.shop.description')}</p>
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
            <Button href="/contact" variant="outline" size="lg">
              {common('contactUs')}
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
