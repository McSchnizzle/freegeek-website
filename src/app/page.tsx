import Image from "next/image";
import { Button } from "@/components";

export default function Home() {
  return (
    <div className="pt-[72px]">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-72px)] px-4 py-16 bg-black">
        <div className="max-w-xl text-center md:text-left md:mr-8">
          {/* Coming Soon Badge */}
          <div className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold mb-6 uppercase tracking-wide">
            New Website Coming Soon
          </div>

          {/* Tagline */}
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
            Your old tech.
            <br />
            <span className="text-blue-500">Someone&apos;s new future.</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            We turn e-waste into opportunity. For 25 years, we&apos;ve been
            keeping tech out of landfills and putting it into the hands of
            people who need it most.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/donate-tech" size="lg">
              Donate Your Tech
            </Button>
            <Button href="/programs" variant="secondary" size="lg">
              Get a Computer
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-12 md:mt-0">
          <Image
            src="/images/hero/hero-donate.png"
            alt="Diverse community members donating technology"
            width={500}
            height={500}
            className="rounded-2xl"
            priority
          />
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="text-4xl md:text-5xl font-black text-blue-600">
                82M+
              </div>
              <div className="text-sm text-gray-600 mt-2">
                Pounds of e-waste saved from landfills
              </div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl md:text-5xl font-black text-blue-600">
                75K+
              </div>
              <div className="text-sm text-gray-600 mt-2">
                Devices given to people in need
              </div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl md:text-5xl font-black text-blue-600">
                150K+
              </div>
              <div className="text-sm text-gray-600 mt-2">
                Community members connected
              </div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl md:text-5xl font-black text-blue-600">
                25
              </div>
              <div className="text-sm text-gray-600 mt-2">
                Years bridging the digital divide
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="/images/hero/digital-divide.png"
                alt="Bridging the digital divide - people connected through technology"
                width={500}
                height={500}
                className="rounded-2xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Two crises. One solution.
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-black text-blue-600">70%</div>
                  <p className="text-gray-700">
                    E-waste is just 2% of America&apos;s trash—but <strong>70% of its toxic waste</strong>.
                    Most ends up in landfills, poisoning soil and water.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-black text-blue-600 whitespace-nowrap">1 in 5</div>
                  <p className="text-gray-700">
                    American households don&apos;t have a computer. <strong>No computer means no job applications</strong>,
                    no homework, no telehealth, no connection.
                  </p>
                </div>
              </div>
              <p className="text-lg text-gray-600 mt-6">
                We take devices people no longer need and give them to people who do.
                It&apos;s not charity—it&apos;s common sense.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Here&apos;s how it works
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <Image
                src="/images/icons/icon-donate.png"
                alt="Donate"
                width={120}
                height={120}
                className="mb-6"
              />
              <h3 className="text-xl font-bold mb-3">You donate</h3>
              <p className="text-gray-400">
                Drop off laptops, desktops, phones—anything with a plug.
                We wipe your data securely.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/images/icons/icon-refurbish.png"
                alt="Refurbish"
                width={120}
                height={120}
                className="mb-6"
              />
              <h3 className="text-xl font-bold mb-3">We refurbish</h3>
              <p className="text-gray-400">
                Our team rebuilds what can be saved. What can&apos;t gets
                responsibly recycled—zero landfill.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/images/icons/icon-distribute.png"
                alt="Distribute"
                width={120}
                height={120}
                className="mb-6"
              />
              <h3 className="text-xl font-bold mb-3">They thrive</h3>
              <p className="text-gray-400">
                A student gets a laptop for school. A job seeker sends their
                first resume. A grandma video-calls her family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="/images/hero/hero-community.png"
                alt="Diverse community members connected through technology"
                width={500}
                height={500}
                className="rounded-2xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Digital inclusion is a civil rights issue
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Without technology access, full participation in American society is impossible.
                Jobs, education, healthcare, civic engagement—all require being connected.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                The digital divide hits hardest for low-income families, immigrants, seniors,
                people with disabilities, and communities of color. We&apos;re here to change that.
              </p>
              <Button href="/programs">
                Explore Our Programs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Got old tech collecting dust?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            That laptop in your closet could change someone&apos;s life. Drop it
            off, and we&apos;ll handle the rest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/donate-tech" variant="secondary" size="lg">
              Donate Now
            </Button>
            <Button href="/volunteer" variant="outline" size="lg">
              Volunteer With Us
            </Button>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-black mb-4">Visit Us</h2>
          <p className="text-lg text-gray-600 mb-2">
            <strong>1731 SE 10th Avenue, Portland, OR 97214</strong>
          </p>
          <p className="text-gray-500">Wednesday - Saturday, 11 AM - 4 PM</p>
          <p className="text-gray-500 mt-4">
            <a href="mailto:computerfriends@freegeek.org" className="text-blue-600 hover:text-blue-700">
              computerfriends@freegeek.org
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
