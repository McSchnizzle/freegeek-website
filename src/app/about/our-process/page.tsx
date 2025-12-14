import { Metadata } from 'next';
import { Button, Section } from '@/components';
import { getTranslations } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Our Process | Free Geek',
  description: 'Learn how Free Geek processes donated technology - from intake to data security to refurbishment and distribution.',
};

export default async function OurProcessPage() {
  const t = await getTranslations('ourProcess');
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

      {/* Step 1: Intake */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-2xl font-bold">
              1
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">{t('intake.title')}</h2>
              <p className="text-gray-600 text-lg">{t('intake.description')}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Step 2: Data Security */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-2xl font-bold">
              2
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">{t('security.title')}</h2>
              <p className="text-gray-600 text-lg mb-6">{t('security.description')}</p>
              <Button href="/data-security" variant="secondary">
                {t('security.cta')}
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Step 3: Assessment */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-2xl font-bold">
              3
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">{t('assessment.title')}</h2>
              <p className="text-gray-600 text-lg">{t('assessment.description')}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Breakdown: Reuse vs Recycle */}
      <Section background="black">
        <h2 className="text-3xl font-bold mb-12 text-center">{t('breakdown.title')}</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-green-900/30 border border-green-500/30 rounded-2xl p-8 text-center">
            <div className="text-5xl font-black text-green-400 mb-4">{t('breakdown.refurbish.stat')}</div>
            <h3 className="text-xl font-bold text-white mb-3">{t('breakdown.refurbish.title')}</h3>
            <p className="text-gray-300">{t('breakdown.refurbish.description')}</p>
          </div>
          <div className="bg-blue-900/30 border border-blue-500/30 rounded-2xl p-8 text-center">
            <div className="text-5xl font-black text-blue-400 mb-4">{t('breakdown.recycle.stat')}</div>
            <h3 className="text-xl font-bold text-white mb-3">{t('breakdown.recycle.title')}</h3>
            <p className="text-gray-300">{t('breakdown.recycle.description')}</p>
          </div>
        </div>
      </Section>

      {/* Rebuild Departments */}
      <Section background="white">
        <h2 className="text-3xl font-bold mb-12 text-center">{t('departments.title')}</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-bold mb-2">{t('departments.laptops.title')}</h3>
            <p className="text-gray-600 text-sm">{t('departments.laptops.description')}</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h3 className="font-bold mb-2">{t('departments.desktops.title')}</h3>
            <p className="text-gray-600 text-sm">{t('departments.desktops.description')}</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-bold mb-2">{t('departments.macland.title')}</h3>
            <p className="text-gray-600 text-sm">{t('departments.macland.description')}</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-bold mb-2">{t('departments.other.title')}</h3>
            <p className="text-gray-600 text-sm">{t('departments.other.description')}</p>
          </div>
        </div>
      </Section>

      {/* Step 4: Distribution */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-2xl font-bold">
              4
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">{t('distribution.title')}</h2>
              <p className="text-gray-600 text-lg mb-6">{t('distribution.description')}</p>
              <Button href="/programs" variant="secondary">
                {t('distribution.programs')}
              </Button>
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
          <Button href="/donate-tech" variant="secondary" size="lg">
            {common('donateTech')}
          </Button>
        </div>
      </Section>
    </main>
  );
}
