import { Metadata } from 'next';
import { Button, Section } from '@/components';
import { getTranslations } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Digital Equity Enrollment | Free Geek',
  description: 'Enroll in our Digital Equity program for digital skills training, one-on-one support, and resources to help you thrive in the digital world.',
};

export default async function DigitalEquityPage() {
  const t = await getTranslations('digitalEquity');
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
        <h2 className="text-3xl font-bold mb-4 text-center">{t('services.title')}</h2>
        <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">{t('services.description')}</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">{t('services.navigation.title')}</h3>
            <p className="text-gray-600 text-sm">{t('services.navigation.description')}</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">{t('services.training.title')}</h3>
            <p className="text-gray-600 text-sm">{t('services.training.description')}</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">{t('services.connectivity.title')}</h3>
            <p className="text-gray-600 text-sm">{t('services.connectivity.description')}</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">{t('services.ongoing.title')}</h3>
            <p className="text-gray-600 text-sm">{t('services.ongoing.description')}</p>
          </div>
        </div>
      </Section>

      {/* Eligibility */}
      <Section background="gray">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">{t('eligibility.title')}</h2>
          <p className="text-gray-600 mb-6">{t('eligibility.description')}</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">{t('eligibility.item1')}</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">{t('eligibility.item2')}</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">{t('eligibility.item3')}</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">{t('eligibility.item4')}</span>
            </li>
          </ul>
        </div>
      </Section>

      {/* Enrollment Form */}
      <Section background="white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">{t('form.title')}</h2>
          <p className="text-gray-600 mb-8 text-center">{t('form.description')}</p>

          <form className="bg-gray-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('form.firstName')} *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('form.lastName')} *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('form.email')} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('form.phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-1">
                {t('form.preferredContact')} *
              </label>
              <select
                id="preferredContact"
                name="preferredContact"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">--</option>
                <option value="email">{t('form.contactOptions.email')}</option>
                <option value="phone">{t('form.contactOptions.phone')}</option>
                <option value="either">{t('form.contactOptions.either')}</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('form.interests')} *
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="interests" value="basics" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <span className="text-gray-700">{t('form.interestOptions.basics')}</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="interests" value="internet" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <span className="text-gray-700">{t('form.interestOptions.internet')}</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="interests" value="safety" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <span className="text-gray-700">{t('form.interestOptions.safety')}</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="interests" value="productivity" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <span className="text-gray-700">{t('form.interestOptions.productivity')}</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="interests" value="connectivity" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <span className="text-gray-700">{t('form.interestOptions.connectivity')}</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="interests" value="other" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <span className="text-gray-700">{t('form.interestOptions.other')}</span>
                </label>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                {t('form.experience')} *
              </label>
              <select
                id="experience"
                name="experience"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">--</option>
                <option value="none">{t('form.experienceOptions.none')}</option>
                <option value="beginner">{t('form.experienceOptions.beginner')}</option>
                <option value="intermediate">{t('form.experienceOptions.intermediate')}</option>
                <option value="advanced">{t('form.experienceOptions.advanced')}</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-1">
                {t('form.goals')}
              </label>
              <textarea
                id="goals"
                name="goals"
                rows={4}
                placeholder={t('form.goalsPlaceholder')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              {t('form.submit')}
            </button>
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
          <Button href="/programs/plug-into-portland" variant="secondary" size="lg">
            {common('applyNow')}
          </Button>
        </div>
      </Section>
    </div>
  );
}
