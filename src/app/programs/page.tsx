import Image from 'next/image';
import { Metadata } from 'next';
import { Button, Section } from '@/components';
import { getTranslations } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Programs | Free Geek',
  description: 'Free Geek offers free and low-cost computers to individuals and organizations. Learn about Plug Into Portland, Hardware Grants, and our Affordable Tech Program.',
};

export default async function ProgramsPage() {
  const t = await getTranslations('programs');
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

      {/* For Individuals */}
      <Section background="white">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image
              src="/images/hero/hero-receive.png"
              alt="Person receiving a computer"
              width={500}
              height={500}
              className="rounded-2xl"
            />
          </div>
          <div className="md:w-1/2">
            <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
              {t('individuals.badge')}
            </div>
            <h2 className="text-3xl font-bold mb-6">{t('individuals.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('individuals.description')}
            </p>
            <p className="text-gray-600 mb-6">
              {t('individuals.stats')}
            </p>
            <div className="space-y-3">
              <Button href="https://freegeek.org/free-computers/plug-portland" size="lg">
                {t('individuals.cta')}
              </Button>
              <p className="text-sm text-gray-500">
                {t('individuals.questions')}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* What You Get */}
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
            <p className="text-gray-600 text-sm">
              {t('receive.laptop.description')}
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">{t('receive.warranty.title')}</h3>
            <p className="text-gray-600 text-sm">
              {t('receive.warranty.description')}
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">{t('receive.support.title')}</h3>
            <p className="text-gray-600 text-sm">
              {t('receive.support.description')}
            </p>
          </div>
        </div>
      </Section>

      {/* For Organizations */}
      <Section background="white">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="md:w-1/2">
            <Image
              src="/images/hero/hero-community.png"
              alt="Organizations receiving computers"
              width={500}
              height={500}
              className="rounded-2xl"
            />
          </div>
          <div className="md:w-1/2">
            <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
              {t('organizations.badge')}
            </div>
            <h2 className="text-3xl font-bold mb-6">{t('organizations.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('organizations.description')}
            </p>

            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold">{t('organizations.orgGrants.title')}</h3>
                <p className="text-gray-600 text-sm">{t('organizations.orgGrants.description')}</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold">{t('organizations.communityGrants.title')}</h3>
                <p className="text-gray-600 text-sm">{t('organizations.communityGrants.description')}</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold">{t('organizations.affordable.title')}</h3>
                <p className="text-gray-600 text-sm">{t('organizations.affordable.description')}</p>
                <span className="inline-block bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-xs font-semibold mt-1">
                  {t('organizations.affordable.badge')}
                </span>
              </div>
            </div>

            <Button href="/programs/hardware-grants" size="lg">
              {t('organizations.cta')}
            </Button>
          </div>
        </div>
      </Section>

      {/* Shop Option */}
      <Section background="black">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">{t('shop.title')}</h2>
          <p className="text-xl text-gray-300 mb-8">
            {t('shop.description')}
          </p>
          <Button href="/shop" variant="secondary" size="lg">
            {t('shop.cta')}
          </Button>
        </div>
      </Section>

      {/* Impact Story */}
      <Section background="gray">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">{t('homeworkGap.title')}</h2>
          <p className="text-gray-600 mb-6">
            {t('homeworkGap.p1')}
          </p>
          <p className="text-gray-600 mb-8">
            {t('homeworkGap.p2')}
          </p>
          <Button href="/donate-tech">
            {t('homeworkGap.cta')}
          </Button>
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
    </div>
  );
}
