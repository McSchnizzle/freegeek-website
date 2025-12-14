import Image from 'next/image';
import { Metadata } from 'next';
import { Section } from '@/components';
import { getTranslations } from 'next-intl/server';
import { VolunteerForm } from '@/components/forms/VolunteerForm';

export const metadata: Metadata = {
  title: 'Volunteer | Free Geek',
  description: 'Join Free Geek as a volunteer. Help bridge the digital divide through ambassador programs, tech drives, warehouse work, and more.',
};

export default async function VolunteerPage() {
  const t = await getTranslations('volunteer');
  const common = await getTranslations('common');

  const volunteerOpportunities = [
    {
      titleKey: 'opportunities.ambassador.title',
      descriptionKey: 'opportunities.ambassador.description',
      ctaKey: 'opportunities.ambassador.cta',
      href: '/volunteer/ambassador',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
    },
    {
      titleKey: 'opportunities.techDrive.title',
      descriptionKey: 'opportunities.techDrive.description',
      ctaKey: 'opportunities.techDrive.cta',
      href: '/volunteer/tech-drive',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      titleKey: 'opportunities.warehouse.title',
      descriptionKey: 'opportunities.warehouse.description',
      ctaKey: 'opportunities.warehouse.cta',
      href: '#interest-form',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      titleKey: 'opportunities.fundraise.title',
      descriptionKey: 'opportunities.fundraise.description',
      ctaKey: 'opportunities.fundraise.cta',
      href: '/donate',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
  ];

  const interests = [
    t('form.interests.ambassador'),
    t('form.interests.techDrives'),
    t('form.interests.warehouse'),
    t('form.interests.fundraising'),
    t('form.interests.internship'),
    t('form.interests.other'),
  ];

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

      {/* Opportunities */}
      <Section background="white">
        <h2 className="text-3xl font-bold mb-4 text-center">{t('opportunities.title')}</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          {t('opportunities.subtitle')}
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {volunteerOpportunities.map((opp) => (
            <div key={opp.titleKey} className="bg-gray-50 rounded-2xl p-6 flex flex-col">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                {opp.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{t(opp.titleKey)}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{t(opp.descriptionKey)}</p>
              <Button href={opp.href} variant="primary" className="self-start">
                {t(opp.ctaKey)}
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* Impact */}
      <Section background="gray">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image
              src="/images/hero/hero-community.png"
              alt="Free Geek volunteers working together"
              width={500}
              height={500}
              className="rounded-2xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">{t('impact.title')}</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl font-black text-blue-600">35K+</div>
                <p className="text-gray-700">
                  {t('impact.volunteers')}
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl font-black text-blue-600">82M</div>
                <p className="text-gray-700">
                  {t('impact.ewaste')}
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl font-black text-blue-600">75K+</div>
                <p className="text-gray-700">
                  {t('impact.devices')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Interest Form */}
      <Section background="white" id="interest-form">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">{t('form.title')}</h2>
          <p className="text-gray-600 text-center mb-8">
            {t('form.subtitle')}
          </p>
          <VolunteerForm
            interests={interests}
            translations={{
              name: t('form.name'),
              email: t('form.email'),
              interestsLabel: t('form.interestsLabel'),
              interestsNote: t('form.interestsNote'),
              about: t('form.about'),
              aboutPlaceholder: t('form.aboutPlaceholder'),
              submit: t('form.submit'),
              sending: t('form.sending'),
              success: t('form.success'),
              error: t('form.error'),
            }}
          />
          <p className="text-sm text-gray-500 text-center mt-6">
            {t('form.note')}
          </p>
        </div>
      </Section>

      {/* Internship CTA */}
      <Section background="black">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">{t('internship.title')}</h2>
          <p className="text-xl text-gray-300 mb-8">
            {t('internship.description')}
          </p>
          <Button href="/careers" variant="secondary" size="lg">
            {t('internship.cta')}
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/donate-tech" variant="secondary" size="lg">
              {common('donateTech')}
            </Button>
            <Button href="/donate" variant="outline" size="lg">
              {common('makeFinancialDonation')}
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
