import Image from 'next/image';
import { Metadata } from 'next';
import { Button, Section } from '@/components';

export const metadata: Metadata = {
  title: 'About | Free Geek',
  description: 'Free Geek launched on Earth Day 2000 with a mission to sustainably reuse technology and enable digital access for all.',
};

export default function AboutPage() {
  return (
    <main className="pt-[72px]">
      {/* Hero */}
      <section className="bg-black text-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            We believe technology<br />
            <span className="text-blue-500">should be for everyone.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Since Earth Day 2000, we&apos;ve been turning e-waste into opportunity—
            keeping tech out of landfills and putting it into the hands of people
            who need it most.
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
            <h2 className="text-3xl font-bold mb-6">Our Origin Story</h2>
            <p className="text-gray-600 mb-4">
              Free Geek launched at Pioneer Courthouse Square on Earth Day 2000.
              That September, we opened our doors on SE 10th Avenue as a drop-off
              for electronic waste—salvaging technology before it hit landfills.
            </p>
            <p className="text-gray-600 mb-4">
              Over 25 years, we&apos;ve evolved from a recycling center into a
              digital inclusion powerhouse. Our reuse and recycling programs
              still form our backbone, providing the refurbished devices we put
              back into the community.
            </p>
            <p className="text-gray-600">
              But today, our core mission is narrowing the digital divide—
              ensuring everyone has access to technology and the skills to use it.
            </p>
          </div>
        </div>
      </Section>

      {/* Mission */}
      <Section background="gray">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-2xl text-gray-700 leading-relaxed">
            To sustainably reuse technology, enable digital access, and provide
            education to create a community that empowers people to realize
            their potential.
          </p>
        </div>
      </Section>

      {/* The Problem We Solve */}
      <Section background="white">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Two Problems. One Solution.
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="text-5xl font-black text-blue-600 mb-4">27%</div>
            <h3 className="text-xl font-bold mb-3">The Digital Divide</h3>
            <p className="text-gray-600 mb-4">
              27% of Americans don&apos;t own a computer. One in ten families
              lack home internet. This gap falls hardest on low-income families,
              immigrants, seniors, and communities of color.
            </p>
            <p className="text-gray-600">
              Without technology access, full participation in American society—
              jobs, education, healthcare, civic engagement—is compromised.
              <strong> This is a social justice issue.</strong>
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="text-5xl font-black text-blue-600 mb-4">70%</div>
            <h3 className="text-xl font-bold mb-3">The E-Waste Crisis</h3>
            <p className="text-gray-600 mb-4">
              Only 27% of e-waste gets recycled nationally. E-waste is just 2%
              of America&apos;s landfill trash—but 70% of its toxic waste.
            </p>
            <p className="text-gray-600">
              Most &quot;e-waste&quot; isn&apos;t waste at all. It&apos;s
              perfectly good equipment that can be repaired, refurbished, and
              given new life.
            </p>
          </div>
        </div>
      </Section>

      {/* The Circular Model */}
      <Section background="black">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">The Circular Model</h2>
          <p className="text-xl text-gray-300 mb-8">
            We point these two problems at each other. The computers we grant
            to Digital Inclusion participants are saved from landfills and go
            on to help our community&apos;s most vulnerable populations build
            the digital skills they need to thrive.
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
        <h2 className="text-3xl font-bold mb-12 text-center">Our Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-blue-600">25</div>
            <div className="text-gray-600 mt-2">Years of service</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-blue-600">82M+</div>
            <div className="text-gray-600 mt-2">Pounds diverted from landfills</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-blue-600">75K+</div>
            <div className="text-gray-600 mt-2">Devices granted</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-blue-600">150K+</div>
            <div className="text-gray-600 mt-2">Community members served</div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="blue">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get involved?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you donate tech, volunteer your time, or support us financially,
            you&apos;re helping bridge the digital divide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/donate-tech" variant="secondary" size="lg">
              Donate Tech
            </Button>
            <Button href="/volunteer" variant="outline" size="lg">
              Volunteer
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
