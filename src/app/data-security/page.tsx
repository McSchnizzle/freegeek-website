import Image from 'next/image';
import { Metadata } from 'next';
import { Button, Section } from '@/components';
import { getTranslations } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Data Security | Free Geek',
  description: 'Learn about Free Geek\'s NIST-compliant data sanitization process. We securely destroy data on all donated devices using industry-leading methods.',
};

export default async function DataSecurityPage() {
  const t = await getTranslations('dataSecurity');
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

      {/* Certifications */}
      <Section background="white">
        <h2 className="text-3xl font-bold mb-12 text-center">{t('certifications.title')}</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">{t('certifications.nist.title')}</h3>
            <p className="text-gray-600">{t('certifications.nist.description')}</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">{t('certifications.isigma.title')}</h3>
            <p className="text-gray-600">{t('certifications.isigma.description')}</p>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section background="gray">
        <h2 className="text-3xl font-bold mb-4 text-center">{t('process.title')}</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          {t('process.description')}
        </p>
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              1
            </div>
            <h3 className="font-bold mb-2">{t('process.step1.title')}</h3>
            <p className="text-gray-600 text-sm">{t('process.step1.description')}</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              2
            </div>
            <h3 className="font-bold mb-2">{t('process.step2.title')}</h3>
            <p className="text-gray-600 text-sm">{t('process.step2.description')}</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              3
            </div>
            <h3 className="font-bold mb-2">{t('process.step3.title')}</h3>
            <p className="text-gray-600 text-sm">{t('process.step3.description')}</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              4
            </div>
            <h3 className="font-bold mb-2">{t('process.step4.title')}</h3>
            <p className="text-gray-600 text-sm">{t('process.step4.description')}</p>
          </div>
        </div>
      </Section>

      {/* Secure Data Area */}
      <Section background="black">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">{t('secureArea.title')}</h2>
            <p className="text-gray-300 mb-4">
              {t('secureArea.p1')}
            </p>
            <p className="text-gray-300 mb-6">
              {t('secureArea.p2')}
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">{t('secureArea.item1')}</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">{t('secureArea.item2')}</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">{t('secureArea.item3')}</span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/icons/icon-security.png"
              alt="Secure data area"
              width={400}
              height={400}
              className="mx-auto"
            />
          </div>
        </div>
      </Section>

      {/* Destruction Methods */}
      <Section background="white">
        <h2 className="text-3xl font-bold mb-12 text-center">{t('methods.title')}</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">{t('methods.overwrite.title')}</h3>
            <p className="text-gray-600 mb-4">{t('methods.overwrite.description')}</p>
            <p className="text-sm text-gray-500">{t('methods.overwrite.note')}</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">{t('methods.physical.title')}</h3>
            <p className="text-gray-600 mb-4">{t('methods.physical.description')}</p>
            <p className="text-sm text-gray-500">{t('methods.physical.note')}</p>
          </div>
        </div>
      </Section>

      {/* Certificate of Data Destruction */}
      <Section background="gray">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="text-5xl font-black text-blue-600 mb-2">$10</div>
              <p className="text-gray-600">{t('certificate.perDevice')}</p>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">{t('certificate.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('certificate.p1')}
            </p>
            <p className="text-gray-600 mb-6">
              {t('certificate.p2')}
            </p>
            <Button href="/contact" variant="primary">
              {t('certificate.cta')}
            </Button>
          </div>
        </div>
      </Section>

      {/* DIY Option */}
      <Section background="white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{t('diy.title')}</h2>
          <p className="text-gray-600 mb-4">
            {t('diy.p1')}
          </p>
          <p className="text-gray-600 mb-8">
            {t('diy.p2')}
          </p>
          <div className="bg-gray-50 rounded-2xl p-6 text-left">
            <h3 className="font-bold mb-4">{t('diy.dban.title')}</h3>
            <p className="text-gray-600 mb-4">{t('diy.dban.description')}</p>
            <p className="text-sm text-gray-500 italic">{t('diy.dban.note')}</p>
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
              {t('cta.questions')}
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
