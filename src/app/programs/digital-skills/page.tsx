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
            <Button href="/programs/digital-equity" className="w-full">
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
            <Button href="/programs/digital-equity" className="w-full">
              {t('services.skills.cta')}
            </Button>
          </div>
        </div>
      </Section>

      {/* Education Programs */}
      <Section background="gray">
        <h2 className="text-3xl font-bold mb-4 text-center">{t('programs.title')}</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          {t('programs.description')}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-bold mb-2">{t('programs.computerBasics.title')}</h3>
            <p className="text-sm text-gray-600">{t('programs.computerBasics.description')}</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="font-bold mb-2">{t('programs.internetSafety.title')}</h3>
            <p className="text-sm text-gray-600">{t('programs.internetSafety.description')}</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-bold mb-2">{t('programs.email.title')}</h3>
            <p className="text-sm text-gray-600">{t('programs.email.description')}</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="font-bold mb-2">{t('programs.productivity.title')}</h3>
            <p className="text-sm text-gray-600">{t('programs.productivity.description')}</p>
          </div>
        </div>
      </Section>

      {/* Class Schedule */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">{t('schedule.title')}</h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            {t('schedule.description')}
          </p>
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {t('schedule.inPerson.title')}
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="font-medium text-black">{t('schedule.inPerson.dropIn')}:</span>
                    {t('schedule.inPerson.dropInTime')}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium text-black">{t('schedule.inPerson.workshops')}:</span>
                    {t('schedule.inPerson.workshopsTime')}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium text-black">{t('schedule.inPerson.oneOnOne')}:</span>
                    {t('schedule.inPerson.oneOnOneTime')}
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  {t('schedule.virtual.title')}
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="font-medium text-black">{t('schedule.virtual.webinars')}:</span>
                    {t('schedule.virtual.webinarsTime')}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-medium text-black">{t('schedule.virtual.selfPaced')}:</span>
                    {t('schedule.virtual.selfPacedTime')}
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <Button href="/programs/digital-equity" variant="primary">
                {t('schedule.cta')}
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Impact Stats */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">{t('impact.title')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">1,500+</div>
              <div className="text-gray-600">{t('impact.learners')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">{t('impact.workshops')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600">{t('impact.satisfaction')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-600 mb-2">20+</div>
              <div className="text-gray-600">{t('impact.partners')}</div>
            </div>
          </div>
        </div>
      </Section>

      {/* What is Digital Equity */}
      <Section background="white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{t('equity.title')}</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            {t('equity.description')}
          </p>
        </div>
      </Section>

      {/* Education Platforms */}
      <Section background="black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-6xl md:text-7xl font-black text-blue-500 mb-4">{t('educationPlatforms.stat')}</div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t('educationPlatforms.statDescription')}
            </p>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-center">{t('educationPlatforms.title')}</h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            {t('educationPlatforms.description')}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <a
              href="https://sites.google.com/freegeek.org/gettingstarted/home"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-colors group"
            >
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{t('educationPlatforms.platform.title')}</h3>
              <p className="text-gray-400 mb-4">{t('educationPlatforms.platform.description')}</p>
              <span className="text-blue-400 font-semibold inline-flex items-center gap-2">
                {t('educationPlatforms.platform.cta')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </a>
            <a
              href="https://www.youtube.com/@FreeGeekMothership/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-colors group"
            >
              <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-red-400 transition-colors">{t('educationPlatforms.youtube.title')}</h3>
              <p className="text-gray-400 mb-4">{t('educationPlatforms.youtube.description')}</p>
              <span className="text-red-400 font-semibold inline-flex items-center gap-2">
                {t('educationPlatforms.youtube.cta')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </Section>

      {/* Community Resources */}
      <Section background="gray">
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
            <Button href="/programs/digital-equity" variant="secondary" size="lg">
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
