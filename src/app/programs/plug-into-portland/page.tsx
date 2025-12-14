import { Metadata } from 'next';
import { Button, Section } from '@/components';
import { getTranslations } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Plug Into Portland Application | Free Geek',
  description: 'Apply for a free refurbished laptop through our Plug Into Portland program. We provide computers to individuals and families in need throughout the Portland metro area.',
};

export default async function PlugIntoPdxPage() {
  const t = await getTranslations('plugIntoPdx');
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

      {/* Eligibility */}
      <Section background="white">
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

      {/* What You Receive */}
      <Section background="gray">
        <h2 className="text-3xl font-bold mb-12 text-center">{t('receive.title')}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">{t('receive.laptop.title')}</h3>
            <p className="text-gray-600 text-sm">{t('receive.laptop.description')}</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">{t('receive.warranty.title')}</h3>
            <p className="text-gray-600 text-sm">{t('receive.warranty.description')}</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">{t('receive.support.title')}</h3>
            <p className="text-gray-600 text-sm">{t('receive.support.description')}</p>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section background="white">
        <h2 className="text-3xl font-bold mb-12 text-center">{t('process.title')}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
            <h3 className="font-bold text-lg mb-2">{t('process.step1.title')}</h3>
            <p className="text-gray-600 text-sm">{t('process.step1.description')}</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
            <h3 className="font-bold text-lg mb-2">{t('process.step2.title')}</h3>
            <p className="text-gray-600 text-sm">{t('process.step2.description')}</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
            <h3 className="font-bold text-lg mb-2">{t('process.step3.title')}</h3>
            <p className="text-gray-600 text-sm">{t('process.step3.description')}</p>
          </div>
        </div>
      </Section>

      {/* Application Form */}
      <Section background="gray">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">{t('form.title')}</h2>
          <p className="text-gray-600 mb-8 text-center">{t('form.description')}</p>

          <form className="bg-white rounded-2xl p-8 shadow-sm">
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
                  {t('form.phone')} *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                {t('form.address')} *
              </label>
              <input
                type="text"
                id="address"
                name="address"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('form.city')} *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('form.state')} *
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  required
                  defaultValue="Oregon"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('form.zip')} *
                </label>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="householdSize" className="block text-sm font-medium text-gray-700 mb-1">
                {t('form.householdSize')} *
              </label>
              <select
                id="householdSize"
                name="householdSize"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6+">6+</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="needReason" className="block text-sm font-medium text-gray-700 mb-1">
                {t('form.needReason')} *
              </label>
              <textarea
                id="needReason"
                name="needReason"
                rows={4}
                required
                placeholder={t('form.needReasonPlaceholder')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="referral" className="block text-sm font-medium text-gray-700 mb-1">
                {t('form.referral')}
              </label>
              <select
                id="referral"
                name="referral"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">--</option>
                <option value="friend">{t('form.referralOptions.friend')}</option>
                <option value="social">{t('form.referralOptions.socialMedia')}</option>
                <option value="community">{t('form.referralOptions.communityOrg')}</option>
                <option value="school">{t('form.referralOptions.school')}</option>
                <option value="other">{t('form.referralOptions.other')}</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              {t('form.submit')}
            </button>
          </form>

          <div className="mt-8 bg-blue-50 rounded-xl p-6">
            <h3 className="font-bold mb-2">{t('note.title')}</h3>
            <p className="text-gray-600 text-sm mb-2">{t('note.waitlist')}</p>
            <p className="text-gray-600 text-sm mb-2">{t('note.pickup')}</p>
            <p className="text-gray-600 text-sm">
              {t('note.contact')}{' '}
              <a href="mailto:computerfriends@freegeek.org" className="text-blue-600 hover:underline">
                computerfriends@freegeek.org
              </a>
            </p>
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
          <Button href="/shop" variant="secondary" size="lg">
            {common('shop')}
          </Button>
        </div>
      </Section>
    </div>
  );
}
