import { Metadata } from 'next';
import { Button, Section } from '@/components';
import { getTranslations } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'FAQs | Free Geek',
  description: 'Find answers to frequently asked questions about Free Geek. Learn about donating tech, getting a computer, volunteering, data security, and more.',
};

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="border-b border-gray-200 py-6">
      <h3 className="text-lg font-bold mb-3">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
}

export default async function FAQPage() {
  const t = await getTranslations('faq');
  const common = await getTranslations('common');

  return (
    <main className="pt-[72px]">
      {/* Hero */}
      <section className="bg-black text-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            {t('hero.description')}
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <Section background="white">
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#donating" className="px-6 py-3 bg-gray-100 rounded-full hover:bg-gray-200 transition font-medium">
            {t('categories.donating')}
          </a>
          <a href="#getting-computer" className="px-6 py-3 bg-gray-100 rounded-full hover:bg-gray-200 transition font-medium">
            {t('categories.gettingComputer')}
          </a>
          <a href="#volunteering" className="px-6 py-3 bg-gray-100 rounded-full hover:bg-gray-200 transition font-medium">
            {t('categories.volunteering')}
          </a>
          <a href="#data-security" className="px-6 py-3 bg-gray-100 rounded-full hover:bg-gray-200 transition font-medium">
            {t('categories.dataSecurity')}
          </a>
          <a href="#visiting" className="px-6 py-3 bg-gray-100 rounded-full hover:bg-gray-200 transition font-medium">
            {t('categories.visiting')}
          </a>
          <a href="#shop" className="px-6 py-3 bg-gray-100 rounded-full hover:bg-gray-200 transition font-medium">
            {t('categories.shop')}
          </a>
        </div>
      </Section>

      {/* Donating Tech */}
      <Section background="gray" id="donating">
        <h2 className="text-3xl font-bold mb-8">{t('donating.title')}</h2>
        <div className="max-w-3xl">
          <FAQItem
            question={t('donating.q1.question')}
            answer={t('donating.q1.answer')}
          />
          <FAQItem
            question={t('donating.q2.question')}
            answer={t('donating.q2.answer')}
          />
          <FAQItem
            question={t('donating.q3.question')}
            answer={t('donating.q3.answer')}
          />
          <FAQItem
            question={t('donating.q4.question')}
            answer={t('donating.q4.answer')}
          />
          <FAQItem
            question={t('donating.q5.question')}
            answer={t('donating.q5.answer')}
          />
        </div>
        <div className="mt-8">
          <Button href="/donate-tech" variant="primary">
            {t('donating.cta')}
          </Button>
        </div>
      </Section>

      {/* Getting a Computer */}
      <Section background="white" id="getting-computer">
        <h2 className="text-3xl font-bold mb-8">{t('gettingComputer.title')}</h2>
        <div className="max-w-3xl">
          <FAQItem
            question={t('gettingComputer.q1.question')}
            answer={t('gettingComputer.q1.answer')}
          />
          <FAQItem
            question={t('gettingComputer.q2.question')}
            answer={t('gettingComputer.q2.answer')}
          />
          <FAQItem
            question={t('gettingComputer.q3.question')}
            answer={t('gettingComputer.q3.answer')}
          />
          <FAQItem
            question={t('gettingComputer.q4.question')}
            answer={t('gettingComputer.q4.answer')}
          />
          <FAQItem
            question={t('gettingComputer.q5.question')}
            answer={t('gettingComputer.q5.answer')}
          />
        </div>
        <div className="mt-8">
          <Button href="/programs" variant="primary">
            {t('gettingComputer.cta')}
          </Button>
        </div>
      </Section>

      {/* Volunteering */}
      <Section background="gray" id="volunteering">
        <h2 className="text-3xl font-bold mb-8">{t('volunteering.title')}</h2>
        <div className="max-w-3xl">
          <FAQItem
            question={t('volunteering.q1.question')}
            answer={t('volunteering.q1.answer')}
          />
          <FAQItem
            question={t('volunteering.q2.question')}
            answer={t('volunteering.q2.answer')}
          />
          <FAQItem
            question={t('volunteering.q3.question')}
            answer={t('volunteering.q3.answer')}
          />
          <FAQItem
            question={t('volunteering.q4.question')}
            answer={t('volunteering.q4.answer')}
          />
        </div>
        <div className="mt-8">
          <Button href="/volunteer" variant="primary">
            {t('volunteering.cta')}
          </Button>
        </div>
      </Section>

      {/* Data Security */}
      <Section background="white" id="data-security">
        <h2 className="text-3xl font-bold mb-8">{t('dataSecurity.title')}</h2>
        <div className="max-w-3xl">
          <FAQItem
            question={t('dataSecurity.q1.question')}
            answer={t('dataSecurity.q1.answer')}
          />
          <FAQItem
            question={t('dataSecurity.q2.question')}
            answer={t('dataSecurity.q2.answer')}
          />
          <FAQItem
            question={t('dataSecurity.q3.question')}
            answer={t('dataSecurity.q3.answer')}
          />
          <FAQItem
            question={t('dataSecurity.q4.question')}
            answer={t('dataSecurity.q4.answer')}
          />
        </div>
        <div className="mt-8">
          <Button href="/data-security" variant="primary">
            {t('dataSecurity.cta')}
          </Button>
        </div>
      </Section>

      {/* Visiting */}
      <Section background="gray" id="visiting">
        <h2 className="text-3xl font-bold mb-8">{t('visiting.title')}</h2>
        <div className="max-w-3xl">
          <FAQItem
            question={t('visiting.q1.question')}
            answer={t('visiting.q1.answer')}
          />
          <FAQItem
            question={t('visiting.q2.question')}
            answer={t('visiting.q2.answer')}
          />
          <FAQItem
            question={t('visiting.q3.question')}
            answer={t('visiting.q3.answer')}
          />
          <FAQItem
            question={t('visiting.q4.question')}
            answer={t('visiting.q4.answer')}
          />
        </div>
        <div className="mt-8">
          <Button href="/contact" variant="primary">
            {common('contactUs')}
          </Button>
        </div>
      </Section>

      {/* Shop */}
      <Section background="white" id="shop">
        <h2 className="text-3xl font-bold mb-8">{t('shop.title')}</h2>
        <div className="max-w-3xl">
          <FAQItem
            question={t('shop.q1.question')}
            answer={t('shop.q1.answer')}
          />
          <FAQItem
            question={t('shop.q2.question')}
            answer={t('shop.q2.answer')}
          />
          <FAQItem
            question={t('shop.q3.question')}
            answer={t('shop.q3.answer')}
          />
          <FAQItem
            question={t('shop.q4.question')}
            answer={t('shop.q4.answer')}
          />
        </div>
        <div className="mt-8">
          <Button href="/shop" variant="primary">
            {t('shop.cta')}
          </Button>
        </div>
      </Section>

      {/* Still Have Questions CTA */}
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
