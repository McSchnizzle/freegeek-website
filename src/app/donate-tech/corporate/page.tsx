import Image from 'next/image';
import { Metadata } from 'next';
import { Button, Section } from '@/components';
import { getTranslations } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Corporate Tech Donations | Free Geek',
  description: 'Partner with Free Geek for responsible corporate e-waste disposal. Secure data destruction, pickup services, and documentation for tax deductions.',
};

export default async function CorporateDonationsPage() {
  const t = await getTranslations('corporateDonations');
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
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="https://freegeek.org/take-action-donate-technology/corporate" variant="primary" size="lg">
              {common('schedulePickup')}
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              {common('contactUs')}
            </Button>
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <Section background="white">
        <h2 className="text-3xl font-bold mb-12 text-center">{t('why.title')}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">{t('why.security.title')}</h3>
            <p className="text-gray-600">{t('why.security.description')}</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">{t('why.environment.title')}</h3>
            <p className="text-gray-600">{t('why.environment.description')}</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">{t('why.community.title')}</h3>
            <p className="text-gray-600">{t('why.community.description')}</p>
          </div>
        </div>
      </Section>

      {/* Data Security */}
      <Section background="black">
        <div className="flex flex-col md:flex-row items-center gap-12">
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
                <span className="text-gray-300">{t('security.item1')}</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">{t('security.item2')}</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">{t('security.item3')}</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">{t('security.item4')}</span>
              </li>
            </ul>
            <Button href="/data-security" variant="secondary">
              {t('security.cta')}
            </Button>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/icons/icon-security.png"
              alt="Data security"
              width={400}
              height={400}
              className="mx-auto"
            />
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section background="white">
        <h2 className="text-3xl font-bold mb-12 text-center">{t('services.title')}</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">{t('services.pickup.title')}</h3>
            <p className="text-gray-600">{t('services.pickup.description')}</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">{t('services.documentation.title')}</h3>
            <p className="text-gray-600">{t('services.documentation.description')}</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">{t('services.certificate.title')}</h3>
            <p className="text-gray-600">{t('services.certificate.description')}</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">{t('services.ecycles.title')}</h3>
            <p className="text-gray-600">{t('services.ecycles.description')}</p>
          </div>
        </div>
      </Section>

      {/* Tax Benefits */}
      <Section background="gray">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">{t('tax.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('tax.p1')}
            </p>
            <p className="text-gray-600 mb-4">
              {t('tax.p2')}
            </p>
            <div className="bg-white rounded-xl p-4">
              <p className="text-sm text-gray-500">{t('tax.ein')}</p>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="text-6xl font-black text-blue-600 mb-4">501(c)(3)</div>
              <p className="text-gray-600">{t('tax.nonprofit')}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section background="white">
        <h2 className="text-3xl font-bold mb-12 text-center">{t('process.title')}</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              1
            </div>
            <h3 className="font-bold mb-2">{t('process.step1.title')}</h3>
            <p className="text-gray-600 text-sm">{t('process.step1.description')}</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              2
            </div>
            <h3 className="font-bold mb-2">{t('process.step2.title')}</h3>
            <p className="text-gray-600 text-sm">{t('process.step2.description')}</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              3
            </div>
            <h3 className="font-bold mb-2">{t('process.step3.title')}</h3>
            <p className="text-gray-600 text-sm">{t('process.step3.description')}</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              4
            </div>
            <h3 className="font-bold mb-2">{t('process.step4.title')}</h3>
            <p className="text-gray-600 text-sm">{t('process.step4.description')}</p>
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
            <Button href="https://freegeek.org/take-action-donate-technology/corporate" variant="secondary" size="lg">
              {common('schedulePickup')}
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              {t('cta.questions')}
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
