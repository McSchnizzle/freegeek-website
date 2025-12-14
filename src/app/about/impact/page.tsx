import { Metadata } from 'next';
import { Button, Section } from '@/components';
import { getTranslations } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Our Impact | Free Geek',
  description: 'See how Free Geek is making a difference. Read impact stories, view our annual reports, and learn about our community programs.',
};

export default async function ImpactPage() {
  const t = await getTranslations('impact');
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

      {/* Impact Stats */}
      <Section background="white">
        <h2 className="text-3xl font-bold mb-12 text-center">{t('stats.title')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">6M+</div>
            <div className="text-gray-600">{t('stats.poundsRecycled')}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">50K+</div>
            <div className="text-gray-600">{t('stats.computersDistributed')}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">100K+</div>
            <div className="text-gray-600">{t('stats.volunteerHours')}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-yellow-600 mb-2">25+</div>
            <div className="text-gray-600">{t('stats.yearsServing')}</div>
          </div>
        </div>
      </Section>

      {/* Impact Stories */}
      <Section background="gray">
        <h2 className="text-3xl font-bold mb-4 text-center">{t('stories.title')}</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          {t('stories.description')}
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Story 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">{t('stories.story1.title')}</h3>
            <p className="text-gray-600 mb-4">{t('stories.story1.description')}</p>
            <p className="text-sm text-blue-600 font-medium">{t('stories.story1.impact')}</p>
          </div>

          {/* Story 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">{t('stories.story2.title')}</h3>
            <p className="text-gray-600 mb-4">{t('stories.story2.description')}</p>
            <p className="text-sm text-green-600 font-medium">{t('stories.story2.impact')}</p>
          </div>

          {/* Story 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">{t('stories.story3.title')}</h3>
            <p className="text-gray-600 mb-4">{t('stories.story3.description')}</p>
            <p className="text-sm text-purple-600 font-medium">{t('stories.story3.impact')}</p>
          </div>
        </div>
      </Section>

      {/* Plug Into Portland */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">
                  {t('plugIntoPdx.badge')}
                </span>
                <h2 className="text-3xl font-bold mb-4">{t('plugIntoPdx.title')}</h2>
                <p className="text-gray-700 mb-6">
                  {t('plugIntoPdx.description')}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{t('plugIntoPdx.item1')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{t('plugIntoPdx.item2')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{t('plugIntoPdx.item3')}</span>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Annual Report */}
      <Section background="gray">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{t('report.title')}</h2>
          <p className="text-gray-600 mb-8">
            {t('report.description')}
          </p>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-20 bg-red-100 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-lg">{t('report.fileName')}</h3>
                  <p className="text-sm text-gray-500">{t('report.fileType')}</p>
                </div>
              </div>
              <Button
                href="https://freegeek.org/annualreport"
                variant="primary"
              >
                {t('report.cta')}
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* News Section */}
      <Section background="white">
        <h2 className="text-3xl font-bold mb-4 text-center">{t('news.title')}</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          {t('news.description')}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* News Item 1 */}
          <article className="bg-gray-50 rounded-xl overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600"></div>
            <div className="p-6">
              <span className="text-sm text-gray-500">{t('news.item1.date')}</span>
              <h3 className="font-bold text-lg mt-2 mb-2">{t('news.item1.title')}</h3>
              <p className="text-gray-600 text-sm">{t('news.item1.excerpt')}</p>
            </div>
          </article>

          {/* News Item 2 */}
          <article className="bg-gray-50 rounded-xl overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-green-500 to-green-600"></div>
            <div className="p-6">
              <span className="text-sm text-gray-500">{t('news.item2.date')}</span>
              <h3 className="font-bold text-lg mt-2 mb-2">{t('news.item2.title')}</h3>
              <p className="text-gray-600 text-sm">{t('news.item2.excerpt')}</p>
            </div>
          </article>

          {/* News Item 3 */}
          <article className="bg-gray-50 rounded-xl overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-600"></div>
            <div className="p-6">
              <span className="text-sm text-gray-500">{t('news.item3.date')}</span>
              <h3 className="font-bold text-lg mt-2 mb-2">{t('news.item3.title')}</h3>
              <p className="text-gray-600 text-sm">{t('news.item3.excerpt')}</p>
            </div>
          </article>
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
            <Button href="/donate" variant="secondary" size="lg">
              {common('donate')}
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
