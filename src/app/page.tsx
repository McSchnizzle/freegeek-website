import Image from "next/image";
import { Button, Section } from "@/components";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("home");
  return (
    <div className="pt-[72px]">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-72px)] px-4 py-16 bg-black">
        <div className="max-w-xl text-center md:text-left md:mr-8">
          {/* Coming Soon Badge */}
          <div className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold mb-6 uppercase tracking-wide">
            {t("hero.badge")}
          </div>

          {/* Tagline */}
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
            {t("hero.title1")}
            <br />
            <span className="text-blue-500">{t("hero.title2")}</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            {t("hero.description")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/donate-tech" size="lg">
              {t("cta.donateYourTech")}
            </Button>
            <Button href="/programs" variant="secondary" size="lg">
              {t("cta.getAComputer")}
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-12 md:mt-0">
          <Image
            src="/images/hero/hero-donate.png"
            alt={t("alt.heroDonate")}
            width={500}
            height={500}
            className="rounded-2xl"
            priority
          />
        </div>
      </section>

      {/* Impact Stats */}
      <Section background="gray">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6">
            <div className="text-4xl md:text-5xl font-black text-blue-600">
              82M+
            </div>
            <div className="text-sm text-gray-600 mt-2">
              {t("stats.ewaste")}
            </div>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl md:text-5xl font-black text-blue-600">
              75K+
            </div>
            <div className="text-sm text-gray-600 mt-2">
              {t("stats.devices")}
            </div>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl md:text-5xl font-black text-blue-600">
              150K+
            </div>
            <div className="text-sm text-gray-600 mt-2">
              {t("stats.community")}
            </div>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl md:text-5xl font-black text-blue-600">
              25
            </div>
            <div className="text-sm text-gray-600 mt-2">
              {t("stats.years")}
            </div>
          </div>
        </div>
      </Section>

      {/* Problem Section */}
      <Section background="white">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image
              src="/images/hero/digital-divide.png"
              alt={t("alt.digitalDivide")}
              width={500}
              height={500}
              className="rounded-2xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              {t("problem.title")}
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl font-black text-blue-600">{t("problem.stat1")}</div>
                <p className="text-gray-700">
                  {t("problem.stat1Text")}
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl font-black text-blue-600 whitespace-nowrap">{t("problem.stat2")}</div>
                <p className="text-gray-700">
                  {t("problem.stat2Text")}
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-600 mt-6">
              {t("problem.solution")}
            </p>
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section background="black">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            {t("howItWorks.title")}
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <Image
                src="/images/icons/icon-donate.png"
                alt={t("alt.iconDonate")}
                width={120}
                height={120}
                className="mb-6"
              />
              <h3 className="text-xl font-bold mb-3">{t("howItWorks.donate.title")}</h3>
              <p className="text-gray-400">
                {t("howItWorks.donate.description")}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/images/icons/icon-refurbish.png"
                alt={t("alt.iconRefurbish")}
                width={120}
                height={120}
                className="mb-6"
              />
              <h3 className="text-xl font-bold mb-3">{t("howItWorks.refurbish.title")}</h3>
              <p className="text-gray-400">
                {t("howItWorks.refurbish.description")}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/images/icons/icon-distribute.png"
                alt={t("alt.iconDistribute")}
                width={120}
                height={120}
                className="mb-6"
              />
              <h3 className="text-xl font-bold mb-3">{t("howItWorks.distribute.title")}</h3>
              <p className="text-gray-400">
                {t("howItWorks.distribute.description")}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Community Section */}
      <Section background="white">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="md:w-1/2">
            <Image
              src="/images/hero/hero-community.png"
              alt={t("alt.community")}
              width={500}
              height={500}
              className="rounded-2xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              {t("community.title")}
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              {t("community.p1")}
            </p>
            <p className="text-lg text-gray-600 mb-6">
              {t("community.p2")}
            </p>
            <Button href="/programs">
              {t("cta.explorePrograms")}
            </Button>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="blue">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("cta.title")}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t("cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/donate-tech" variant="secondary" size="lg">
              {t("cta.donateNow")}
            </Button>
            <Button href="/volunteer" variant="outline" size="lg">
              {t("cta.volunteerWithUs")}
            </Button>
          </div>
        </div>
      </Section>

      {/* Location */}
      <Section background="gray">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-black mb-4">{t("visit.title")}</h2>
          <p className="text-lg text-gray-600 mb-2">
            <strong>{t("visit.address")}</strong>
          </p>
          <p className="text-gray-500">{t("visit.hours")}</p>
          <p className="text-gray-500 mt-4">
            <a href="mailto:computerfriends@freegeek.org" className="text-blue-600 hover:text-blue-700">
              computerfriends@freegeek.org
            </a>
          </p>
        </div>
      </Section>
    </div>
  );
}
