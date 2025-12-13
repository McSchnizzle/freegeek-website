import Image from 'next/image';
import { Metadata } from 'next';
import { Button, Section } from '@/components';
import { getTranslations } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'About | Free Geek',
  description: 'Free Geek launched on Earth Day 2000 with a mission to sustainably reuse technology and enable digital access for all.',
};

export default async function AboutPage() {
  const t = await getTranslations('about');
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

      {/* Origin Story */}
      <Section background="white">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image
              src="/images/hero/hero-community.png"
              alt="Free Geek community"
              width={500}
              height={500}
              className="rounded-2xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">{t('origin.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('origin.p1')}
            </p>
            <p className="text-gray-600 mb-4">
              {t('origin.p2')}
            </p>
            <p className="text-gray-600">
              {t('origin.p3')}
            </p>
          </div>
        </div>
      </Section>

      {/* Mission */}
      <Section background="gray">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">{t('mission.title')}</h2>
          <p className="text-2xl text-gray-700 leading-relaxed">
            {t('mission.statement')}
          </p>
        </div>
      </Section>

      {/* The Problem We Solve */}
      <Section background="white">
        <h2 className="text-3xl font-bold mb-12 text-center">
          {t('problems.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="text-5xl font-black text-blue-600 mb-4">27%</div>
            <h3 className="text-xl font-bold mb-3">{t('problems.digitalDivide.title')}</h3>
            <p className="text-gray-600 mb-4">
              {t('problems.digitalDivide.p1')}
            </p>
            <p className="text-gray-600">
              {t('problems.digitalDivide.p2')}
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="text-5xl font-black text-blue-600 mb-4">70%</div>
            <h3 className="text-xl font-bold mb-3">{t('problems.ewaste.title')}</h3>
            <p className="text-gray-600 mb-4">
              {t('problems.ewaste.p1')}
            </p>
            <p className="text-gray-600">
              {t('problems.ewaste.p2')}
            </p>
          </div>
        </div>
      </Section>

      {/* The Circular Model */}
      <Section background="black">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">{t('circular.title')}</h2>
          <p className="text-xl text-gray-300 mb-8">
            {t('circular.description')}
          </p>
          <Image
            src="/images/hero/digital-divide.png"
            alt="Bridging the digital divide"
            width={600}
            height={400}
            className="rounded-2xl mx-auto"
          />
        </div>
      </Section>

      {/* Impact Stats */}
      <Section background="white">
        <h2 className="text-3xl font-bold mb-12 text-center">{t('impact.title')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-blue-600">25</div>
            <div className="text-gray-600 mt-2">{t('impact.years')}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-blue-600">82M+</div>
            <div className="text-gray-600 mt-2">{t('impact.diverted')}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-blue-600">75K+</div>
            <div className="text-gray-600 mt-2">{t('impact.devices')}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-blue-600">150K+</div>
            <div className="text-gray-600 mt-2">{t('impact.community')}</div>
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
            <Button href="/donate-tech" variant="secondary" size="lg">
              {common('donateTech')}
            </Button>
            <Button href="/volunteer" variant="outline" size="lg">
              {common('volunteer')}
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
