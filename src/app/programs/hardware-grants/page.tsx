import { Metadata } from 'next';
import { Button, Section } from '@/components';
import { getTranslations } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Hardware Grants | Free Geek',
  description: 'Free Geek provides free and low-cost refurbished technology to qualifying nonprofits through our Hardware Grants program.',
};

export default async function HardwareGrantsPage() {
  const t = await getTranslations('hardwareGrants');
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

      {/* Status Notice */}
      <Section background="gray">
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg max-w-3xl mx-auto">
          <h2 className="font-bold text-yellow-800 mb-2">{t('status.title')}</h2>
          <p className="text-yellow-700">
            {t('status.description')}
          </p>
          <Button href="/contact" variant="secondary" className="mt-4">
            {t('status.cta')}
          </Button>
        </div>
      </Section>

      {/* Grant Types */}
      <Section background="white">
        <h2 className="text-3xl font-bold mb-12 text-center">{t('types.title')}</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4 text-blue-600">{t('types.organizational.title')}</h3>
            <p className="text-gray-600 mb-4">
              {t('types.organizational.description')}
            </p>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {t('types.organizational.item1')}
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {t('types.organizational.item2')}
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {t('types.organizational.item3')}
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4 text-blue-600">{t('types.community.title')}</h3>
            <p className="text-gray-600 mb-4">
              {t('types.community.description')}
            </p>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {t('types.community.item1')}
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {t('types.community.item2')}
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {t('types.community.item3')}
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Eligibility */}
      <Section background="gray">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('eligibility.title')}</h2>
          <div className="bg-white rounded-2xl p-6 space-y-4">
            <p className="text-gray-600">
              {t('eligibility.intro')}
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-sm">1</span>
                <span className="text-gray-600">{t('eligibility.req1')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-sm">2</span>
                <span className="text-gray-600">{t('eligibility.req2')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-sm">3</span>
                <span className="text-gray-600">{t('eligibility.req3')}</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Testimonial */}
      <Section background="black">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-xl text-gray-300 italic mb-6">
            &quot;{t('testimonial.quote')}&quot;
          </blockquote>
          <p className="text-gray-400">— {t('testimonial.author')}</p>
        </div>
      </Section>

      {/* Impact */}
      <Section background="white">
        <h2 className="text-3xl font-bold mb-12 text-center">{t('impact.title')}</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          <div>
            <div className="text-5xl font-black text-blue-600 mb-2">150+</div>
            <p className="text-gray-600">{t('impact.organizations')}</p>
          </div>
          <div>
            <div className="text-5xl font-black text-blue-600 mb-2">75K+</div>
            <p className="text-gray-600">{t('impact.devices')}</p>
          </div>
          <div>
            <div className="text-5xl font-black text-blue-600 mb-2">25</div>
            <p className="text-gray-600">{t('impact.years')}</p>
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
              {common('contactUs')}
            </Button>
            <Button href="/programs" variant="outline" size="lg">
              {common('viewAllPrograms')}
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
