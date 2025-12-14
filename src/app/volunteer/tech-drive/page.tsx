import { Metadata } from 'next';
import { Button, Section } from '@/components';
import { getTranslations } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Host a Tech Drive | Free Geek',
  description: 'Organize a tech collection drive at your workplace, school, or community. Free Geek provides marketing materials and support.',
};

export default async function TechDrivePage() {
  const t = await getTranslations('techDrive');
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
          <Button href="#register" variant="primary" size="lg">
            {t('hero.cta')}
          </Button>
        </div>
      </section>

      {/* Why Host */}
      <Section background="white">
        <h2 className="text-3xl font-bold mb-12 text-center">{t('why.title')}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">{t('why.environment.title')}</h3>
            <p className="text-gray-600">{t('why.environment.description')}</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">{t('why.community.title')}</h3>
            <p className="text-gray-600">{t('why.community.description')}</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">{t('why.engagement.title')}</h3>
            <p className="text-gray-600">{t('why.engagement.description')}</p>
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section background="gray">
        <h2 className="text-3xl font-bold mb-12 text-center">{t('howItWorks.title')}</h2>
        <div className="grid md:grid-cols-5 gap-4 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              1
            </div>
            <h3 className="font-bold mb-2">{t('howItWorks.step1.title')}</h3>
            <p className="text-gray-600 text-sm">{t('howItWorks.step1.description')}</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              2
            </div>
            <h3 className="font-bold mb-2">{t('howItWorks.step2.title')}</h3>
            <p className="text-gray-600 text-sm">{t('howItWorks.step2.description')}</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              3
            </div>
            <h3 className="font-bold mb-2">{t('howItWorks.step3.title')}</h3>
            <p className="text-gray-600 text-sm">{t('howItWorks.step3.description')}</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              4
            </div>
            <h3 className="font-bold mb-2">{t('howItWorks.step4.title')}</h3>
            <p className="text-gray-600 text-sm">{t('howItWorks.step4.description')}</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              5
            </div>
            <h3 className="font-bold mb-2">{t('howItWorks.step5.title')}</h3>
            <p className="text-gray-600 text-sm">{t('howItWorks.step5.description')}</p>
          </div>
        </div>
      </Section>

      {/* We Provide */}
      <Section background="white">
        <h2 className="text-3xl font-bold mb-12 text-center">{t('provide.title')}</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold mb-1">{t('provide.flyers.title')}</h3>
              <p className="text-gray-600 text-sm">{t('provide.flyers.description')}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold mb-1">{t('provide.email.title')}</h3>
              <p className="text-gray-600 text-sm">{t('provide.email.description')}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold mb-1">{t('provide.support.title')}</h3>
              <p className="text-gray-600 text-sm">{t('provide.support.description')}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold mb-1">{t('provide.pickup.title')}</h3>
              <p className="text-gray-600 text-sm">{t('provide.pickup.description')}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* What to Collect */}
      <Section background="gray">
        <h2 className="text-3xl font-bold mb-8 text-center">{t('collect.title')}</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4 text-green-600">{t('collect.accepted.title')}</h3>
            <ul className="space-y-2">
              {['laptops', 'desktops', 'smartphones', 'tablets', 'monitors', 'keyboards', 'cables'].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t(`collect.accepted.${item}`)}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4 text-red-600">{t('collect.notAccepted.title')}</h3>
            <ul className="space-y-2">
              {['crts', 'appliances', 'microwaves', 'hazardous'].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  {t(`collect.notAccepted.${item}`)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Register Form */}
      <Section background="white" id="register">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">{t('form.title')}</h2>
          <p className="text-gray-600 text-center mb-8">{t('form.description')}</p>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block font-medium mb-2">{t('form.name')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-medium mb-2">{t('form.email')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label htmlFor="organization" className="block font-medium mb-2">{t('form.organization')}</label>
              <input
                type="text"
                id="organization"
                name="organization"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="location" className="block font-medium mb-2">{t('form.location')}</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="dates" className="block font-medium mb-2">{t('form.dates')}</label>
                <input
                  type="text"
                  id="dates"
                  name="dates"
                  placeholder={t('form.datesPlaceholder')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label htmlFor="details" className="block font-medium mb-2">{t('form.details')}</label>
              <textarea
                id="details"
                name="details"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-800">{t('form.note')}</p>
            </div>
            <Button type="submit" variant="primary" size="lg" className="w-full">
              {t('form.submit')}
            </Button>
          </form>
        </div>
      </Section>

      {/* CTA */}
      <Section background="blue">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">{t('cta.title')}</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            {common('contactUs')}
          </Button>
        </div>
      </Section>
    </main>
  );
}
