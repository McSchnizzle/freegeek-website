import Image from 'next/image';
import { Metadata } from 'next';
import { Button, Section } from '@/components';
import { getTranslations } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'THE BRIDGE Monthly Giving | Free Geek',
  description: 'Join THE BRIDGE, Free Geek\'s monthly giving program. Your recurring support helps bridge the digital divide and provides technology access to those who need it most.',
};

export default async function BridgePage() {
  const t = await getTranslations('bridge');
  const common = await getTranslations('common');

  return (
    <main className="pt-[72px]">
      {/* Hero */}
      <section className="bg-black text-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-6">
            {t('hero.badge')}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('hero.title1')}<br />
            <span className="text-blue-500">{t('hero.title2')}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-8">
            {t('hero.description')}
          </p>
          <Button href="/contact" variant="primary" size="lg">
            {t('hero.cta')}
          </Button>
        </div>
      </section>

      {/* The Problem */}
      <Section background="white">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image
              src="/images/hero/digital-divide.png"
              alt={t('alt.digitalDivide')}
              width={500}
              height={400}
              className="rounded-2xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">{t('problem.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('problem.p1')}
            </p>
            <p className="text-gray-600 mb-4">
              {t('problem.p2')}
            </p>
            <p className="text-gray-600">
              {t('problem.p3')}
            </p>
          </div>
        </div>
      </Section>

      {/* Monthly Impact */}
      <Section background="gray">
        <h2 className="text-3xl font-bold mb-4 text-center">{t('impact.title')}</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          {t('impact.description')}
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="text-4xl font-black text-blue-600 mb-2">$10</div>
            <p className="text-gray-600">{t('impact.level1')}</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center border-2 border-blue-600">
            <div className="text-4xl font-black text-blue-600 mb-2">$25</div>
            <p className="text-gray-600">{t('impact.level2')}</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="text-4xl font-black text-blue-600 mb-2">$50</div>
            <p className="text-gray-600">{t('impact.level3')}</p>
          </div>
        </div>
      </Section>

      {/* Member Benefits */}
      <Section background="white">
        <h2 className="text-3xl font-bold mb-4 text-center">{t('benefits.title')}</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          {t('benefits.description')}
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold mb-1">{t('benefits.welcome.title')}</h3>
              <p className="text-gray-600 text-sm">{t('benefits.welcome.description')}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold mb-1">{t('benefits.reports.title')}</h3>
              <p className="text-gray-600 text-sm">{t('benefits.reports.description')}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold mb-1">{t('benefits.raffle.title')}</h3>
              <p className="text-gray-600 text-sm">{t('benefits.raffle.description')}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold mb-1">{t('benefits.annual.title')}</h3>
              <p className="text-gray-600 text-sm">{t('benefits.annual.description')}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonial */}
      <Section background="black">
        <div className="max-w-3xl mx-auto text-center">
          <svg className="w-12 h-12 text-blue-500 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-xl text-gray-300 mb-6 italic">
            {t('testimonial.quote')}
          </p>
          <p className="text-blue-400 font-semibold">{t('testimonial.author')}</p>
        </div>
      </Section>

      {/* How It Works */}
      <Section background="gray">
        <h2 className="text-3xl font-bold mb-12 text-center">{t('howItWorks.title')}</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              1
            </div>
            <h3 className="font-bold mb-2">{t('howItWorks.step1.title')}</h3>
            <p className="text-gray-600 text-sm">{t('howItWorks.step1.description')}</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              2
            </div>
            <h3 className="font-bold mb-2">{t('howItWorks.step2.title')}</h3>
            <p className="text-gray-600 text-sm">{t('howItWorks.step2.description')}</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              3
            </div>
            <h3 className="font-bold mb-2">{t('howItWorks.step3.title')}</h3>
            <p className="text-gray-600 text-sm">{t('howItWorks.step3.description')}</p>
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
            <Button href="/contact" variant="secondary" size="lg">
              {t('cta.joinBridge')}
            </Button>
            <Button href="/donate" variant="outline" size="lg">
              {t('cta.otherWays')}
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
