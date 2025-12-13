import Image from 'next/image';
import { Metadata } from 'next';
import { Button, Section } from '@/components';

export const metadata: Metadata = {
  title: 'Programs | Free Geek',
  description: 'Free Geek offers free and low-cost computers to individuals and organizations. Learn about Plug Into Portland, Hardware Grants, and our Affordable Tech Program.',
};

export default function ProgramsPage() {
  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="bg-black text-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Need a computer?<br />
            <span className="text-blue-500">We&apos;ve got you.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            27% of Americans don&apos;t own a computer. We&apos;re working to change that
            with free and low-cost technology for individuals and organizations.
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
              For Individuals
            </div>
            <h2 className="text-3xl font-bold mb-6">Plug Into Portland</h2>
            <p className="text-gray-600 mb-4">
              Our flagship program for individuals who need a computer. Apply to get on
              the waitlist for a free laptop running Linux Mint, with a one-year warranty
              and Digital Navigation Support.
            </p>
            <p className="text-gray-600 mb-6">
              Currently, 75,000 Oregon students don&apos;t have a personal computer to
              complete their assignments. We&apos;re here to close that gap.
            </p>
            <div className="space-y-3">
              <Button href="https://freegeek.org/free-computers/plug-portland" size="lg">
                Apply for a Free Laptop
              </Button>
              <p className="text-sm text-gray-500">
                Questions? Email us at{' '}
                <a href="mailto:computerfriends@freegeek.org" className="text-blue-600 hover:underline">
                  computerfriends@freegeek.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* What You Get */}
      <Section background="gray">
        <h2 className="text-3xl font-bold mb-12 text-center">What you&apos;ll receive</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Refurbished Laptop</h3>
            <p className="text-gray-600 text-sm">
              A quality refurbished laptop running Linux Mint, ready to use
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">One-Year Warranty</h3>
            <p className="text-gray-600 text-sm">
              Full warranty coverage so you can use your device with confidence
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Digital Navigation Support</h3>
            <p className="text-gray-600 text-sm">
              Help getting set up and learning to use your new computer
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
              For Organizations
            </div>
            <h2 className="text-3xl font-bold mb-6">Hardware Grants & Affordable Tech</h2>
            <p className="text-gray-600 mb-4">
              Free Geek supports nonprofits and community organizations with technology.
              Whether you need devices for your staff or the communities you serve,
              we have programs to help.
            </p>

            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold">Organizational Hardware Grants</h3>
                <p className="text-gray-600 text-sm">Free refurbished technology for nonprofit organizational use</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold">Community Hardware Grants</h3>
                <p className="text-gray-600 text-sm">Free technology for the community members your nonprofit serves</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold">Affordable Tech Program</h3>
                <p className="text-gray-600 text-sm">Partnership opportunities for larger-scale technology needs at affordable prices</p>
                <span className="inline-block bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-xs font-semibold mt-1">
                  Inquire for Availability
                </span>
              </div>
            </div>

            <Button href="https://freegeek.org/our-work/hardware-grants" size="lg">
              Learn More & Apply
            </Button>
          </div>
        </div>
      </Section>

      {/* Shop Option */}
      <Section background="black">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Need a computer now?</h2>
          <p className="text-xl text-gray-300 mb-8">
            If you&apos;re not eligible for our free programs or can&apos;t wait for the
            waitlist, you can purchase quality refurbished computers from our online
            shop at affordable prices.
          </p>
          <Button href="https://freegeek.org/shop" variant="secondary" size="lg">
            Visit Our Shop
          </Button>
        </div>
      </Section>

      {/* Impact Story */}
      <Section background="gray">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">The homework gap is real</h2>
          <p className="text-gray-600 mb-6">
            The &quot;homework gap&quot; describes the difficulty students face completing
            assignments without access to a device or internet at home. In Oregon alone,
            75,000 students lack a personal computer for schoolwork.
          </p>
          <p className="text-gray-600 mb-8">
            When we put a computer in a student&apos;s hands, we&apos;re not just giving them
            a device—we&apos;re giving them the ability to do their homework, apply for
            jobs, connect with family, and participate fully in our digital world.
          </p>
          <Button href="/donate-tech">
            Help Us Close the Gap
          </Button>
        </div>
      </Section>

      {/* CTA */}
      <Section background="blue">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Not sure which program is right for you?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Reach out and we&apos;ll help you find the best path to getting connected.
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            Contact Us
          </Button>
        </div>
      </Section>
    </div>
  );
}
