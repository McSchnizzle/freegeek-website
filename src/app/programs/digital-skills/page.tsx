import { Metadata } from 'next';
import { Button, Section } from '@/components';
import { getTranslations } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Digital Skills | Free Geek',
  description: 'Free Geek offers digital skills training and digital navigation support to help community members build confidence with technology.',
};

export default async function DigitalSkillsPage() {
  const t = await getTranslations('digitalSkills');
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

      {/* Services */}
      <Section background="white">
        <h2 className="text-3xl font-bold mb-12 text-center">{t('services.title')}</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Digital Navigation */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">{t('services.navigation.title')}</h3>
            <p className="text-gray-600 mb-4">
              {t('services.navigation.description')}
            </p>
            <ul className="space-y-2 text-gray-600 text-sm mb-6">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {t('services.navigation.item1')}
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {t('services.navigation.item2')}
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {t('services.navigation.item3')}
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {t('services.navigation.item4')}
              </li>
            </ul>
            <Button href="https://freegeek.org/digitalequity" className="w-full">
              {t('services.navigation.cta')}
            </Button>
          </div>

          {/* Digital Skills Building */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">{t('services.skills.title')}</h3>
            <p className="text-gray-600 mb-4">
              {t('services.skills.description')}
            </p>
            <ul className="space-y-2 text-gray-600 text-sm mb-6">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {t('services.skills.item1')}
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {t('services.skills.item2')}
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {t('services.skills.item3')}
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {t('services.skills.item4')}
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {t('services.skills.item5')}
              </li>
            </ul>
            <Button href="https://freegeek.org/digitalequity" className="w-full">
              {t('services.skills.cta')}
            </Button>
          </div>
        </div>
      </Section>

      {/* What is Digital Equity */}
      <Section background="gray">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{t('equity.title')}</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            {t('equity.description')}
          </p>
        </div>
      </Section>

      {/* Community Resources */}
      <Section background="white">
        <h2 className="text-3xl font-bold mb-8 text-center">{t('resources.title')}</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          {t('resources.description')}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <a
            href="https://www.portland.gov/bps/smart-city-pdx/community-technology"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 rounded-xl p-4 hover:shadow-lg transition-shadow block"
          >
            <h3 className="font-bold mb-1">{t('resources.communityTech.title')}</h3>
            <p className="text-gray-500 text-sm">{t('resources.communityTech.description')}</p>
          </a>
          <a
            href="https://multcolib.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 rounded-xl p-4 hover:shadow-lg transition-shadow block"
          >
            <h3 className="font-bold mb-1">{t('resources.library.title')}</h3>
            <p className="text-gray-500 text-sm">{t('resources.library.description')}</p>
          </a>
          <a
            href="https://digitunity.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 rounded-xl p-4 hover:shadow-lg transition-shadow block"
          >
            <h3 className="font-bold mb-1">{t('resources.digitunity.title')}</h3>
            <p className="text-gray-500 text-sm">{t('resources.digitunity.description')}</p>
          </a>
          <a
            href="https://www.digitalinclusion.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 rounded-xl p-4 hover:shadow-lg transition-shadow block"
          >
            <h3 className="font-bold mb-1">{t('resources.ndia.title')}</h3>
            <p className="text-gray-500 text-sm">{t('resources.ndia.description')}</p>
          </a>
          <a
            href="https://www.xfinity.com/learn/internet-service/internet-essentials"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 rounded-xl p-4 hover:shadow-lg transition-shadow block"
          >
            <h3 className="font-bold mb-1">{t('resources.xfinity.title')}</h3>
            <p className="text-gray-500 text-sm">{t('resources.xfinity.description')}</p>
          </a>
          <a
            href="https://www.pcsforpeople.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 rounded-xl p-4 hover:shadow-lg transition-shadow block"
          >
            <h3 className="font-bold mb-1">{t('resources.pcs.title')}</h3>
            <p className="text-gray-500 text-sm">{t('resources.pcs.description')}</p>
          </a>
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
            <Button href="https://freegeek.org/digitalequity" variant="secondary" size="lg">
              {common('getStarted')}
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              {common('contactUs')}
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
