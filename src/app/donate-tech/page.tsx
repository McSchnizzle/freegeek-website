import Image from 'next/image';
import { Metadata } from 'next';
import { Button, Section } from '@/components';
import { getTranslations } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Donate Technology | Free Geek',
  description: 'Donate your old computers, laptops, and electronics to Free Geek. We securely wipe your data and give devices new life in our community.',
};

export default async function DonateTechPage() {
  const t = await getTranslations('donateTech');
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
          <p className="text-xl text-gray-300 max-w-2xl mb-8">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="#drop-off" variant="primary" size="lg">
              {t('hero.dropOff')}
            </Button>
            <Button href="#schedule" variant="outline" size="lg">
              {common('schedulePickup')}
            </Button>
          </div>
        </div>
      </section>

      {/* Drop Off Info */}
      <Section background="white" id="drop-off">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image
              src="/images/hero/hero-donate.png"
              alt="Donating technology"
              width={500}
              height={500}
              className="rounded-2xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">{t('dropOff.title')}</h2>
            <div className="bg-gray-50 rounded-2xl p-6 mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">{t('dropOff.location')}</h3>
                  <p className="text-gray-600">1731 SE 10th Avenue, Portland, OR 97214</p>
                  <p className="text-sm text-gray-500">{t('dropOff.locationNote')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">{common('hours')}</h3>
                  <p className="text-gray-600">{t('dropOff.days')}</p>
                  <p className="text-gray-600">{t('dropOff.hours')}</p>
                </div>
              </div>
            </div>
            <p className="text-gray-600">
              {t('dropOff.noAppointment')}
            </p>
          </div>
        </div>
      </Section>

      {/* Donation Types */}
      <Section background="gray" id="schedule">
        <h2 className="text-3xl font-bold mb-12 text-center">{t('types.title')}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">{t('types.small.title')}</div>
            <p className="text-gray-500 text-sm mb-4">{t('types.small.subtitle')}</p>
            <p className="text-gray-600 mb-6">
              {t('types.small.description')}
            </p>
            <Button href="https://freegeek.org/donatetech" className="w-full">
              {common('dropOffAnytime')}
            </Button>
          </div>
          <div className="bg-white rounded-2xl p-6 border-2 border-blue-600">
            <div className="text-3xl font-bold text-blue-600 mb-2">{t('types.large.title')}</div>
            <p className="text-gray-500 text-sm mb-4">{t('types.large.subtitle')}</p>
            <p className="text-gray-600 mb-6">
              {t('types.large.description')}
            </p>
            <Button href="https://freegeek.org/take-action-donate-technology/large-donation" className="w-full">
              {common('scheduleDropOff')}
            </Button>
          </div>
          <div className="bg-white rounded-2xl p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">{t('types.corporate.title')}</div>
            <p className="text-gray-500 text-sm mb-4">{t('types.corporate.subtitle')}</p>
            <p className="text-gray-600 mb-6">
              {t('types.corporate.description')}
            </p>
            <Button href="/donate-tech/corporate" className="w-full">
              {common('contactUs')}
            </Button>
          </div>
        </div>
      </Section>

      {/* Data Security */}
      <Section background="black">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image
              src="/images/icons/icon-security.png"
              alt="Data security"
              width={300}
              height={300}
              className="mx-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">{t('security.title')}</h2>
            <p className="text-gray-300 mb-6">
              {t('security.description')}
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">{t('security.nist')}</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">{t('security.isigma')}</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">{t('security.certificate')}</span>
              </li>
            </ul>
            <Button href="/data-security" variant="secondary">
              {t('security.cta')}
            </Button>
          </div>
        </div>
      </Section>

      {/* What We Accept */}
      <Section background="white">
        <h2 className="text-3xl font-bold mb-12 text-center">{t('accept.title')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {['laptops', 'desktops', 'smartphones', 'tablets', 'monitors', 'printers', 'keyboards', 'cables'].map((item) => (
            <div key={item} className="text-center p-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="font-semibold">{t(`accept.items.${item}`)}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600">
          {t('accept.notSure')}
        </p>
      </Section>

      {/* CTA */}
      <Section background="blue">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">{t('cta.title')}</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#drop-off" variant="secondary" size="lg">
              {common('getDirections')}
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
