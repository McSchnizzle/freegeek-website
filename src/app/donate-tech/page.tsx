import Image from 'next/image';
import { Metadata } from 'next';
import { Button, Section } from '@/components';

export const metadata: Metadata = {
  title: 'Donate Technology | Free Geek',
  description: 'Donate your old computers, laptops, and electronics to Free Geek. We securely wipe your data and give devices new life in our community.',
};

export default function DonateTechPage() {
  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="bg-black text-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your old tech<br />
            <span className="text-blue-500">deserves a second life.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-8">
            That laptop collecting dust in your closet? It could help a student
            do their homework, a job seeker land an interview, or a senior
            connect with family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="#drop-off" variant="primary" size="lg">
              Drop Off In Person
            </Button>
            <Button href="#schedule" variant="outline" size="lg">
              Schedule a Pickup
            </Button>
          </div>
        </div>
      </section>

      {/* Drop Off Info */}
      <Section background="white" id="drop-off">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image
              src="/images/hero/hero-donate.png"
              alt="Donating technology"
              width={500}
              height={500}
              className="rounded-2xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Drop off your donation</h2>
            <div className="bg-gray-50 rounded-2xl p-6 mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">Location</h3>
                  <p className="text-gray-600">1731 SE 10th Avenue, Portland, OR 97214</p>
                  <p className="text-sm text-gray-500">Outdoor parking lot on the northeast side of our building</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">Hours</h3>
                  <p className="text-gray-600">Wednesday - Saturday</p>
                  <p className="text-gray-600">11:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
            <p className="text-gray-600">
              No appointment needed for small donations. Just drive up during our
              drop-off hours and our team will help you unload.
            </p>
          </div>
        </div>
      </Section>

      {/* Donation Types */}
      <Section background="gray" id="schedule">
        <h2 className="text-3xl font-bold mb-12 text-center">Donation options</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">Small</div>
            <p className="text-gray-500 text-sm mb-4">Under 20 devices</p>
            <p className="text-gray-600 mb-6">
              Perfect for personal donations. Just drive up during our drop-off
              hours—no appointment needed.
            </p>
            <Button href="https://freegeek.org/donatetech" className="w-full">
              Drop Off Anytime
            </Button>
          </div>
          <div className="bg-white rounded-2xl p-6 border-2 border-blue-600">
            <div className="text-3xl font-bold text-blue-600 mb-2">Large</div>
            <p className="text-gray-500 text-sm mb-4">20+ devices</p>
            <p className="text-gray-600 mb-6">
              Have a bigger donation? Schedule ahead so we can make sure we have
              space and staff ready for you.
            </p>
            <Button href="https://freegeek.org/take-action-donate-technology/large-donation" className="w-full">
              Schedule Drop-Off
            </Button>
          </div>
          <div className="bg-white rounded-2xl p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">Corporate</div>
            <p className="text-gray-500 text-sm mb-4">Business donations</p>
            <p className="text-gray-600 mb-6">
              Retiring IT equipment? We offer pickup services and can provide
              documentation for your records.
            </p>
            <Button href="https://freegeek.org/take-action-donate-technology/corporate" className="w-full">
              Contact Us
            </Button>
          </div>
        </div>
      </Section>

      {/* Data Security */}
      <Section background="black">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image
              src="/images/icons/icon-security.png"
              alt="Data security"
              width={300}
              height={300}
              className="mx-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Your data is safe with us</h2>
            <p className="text-gray-300 mb-6">
              We take data security seriously. Every data-bearing device goes
              directly to our secure, staff-only area for proper sanitization.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">NIST SP800-88 compliant data sanitization</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">i-SIGMA certified processes</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Certificate of Data Destruction available ($10/device)</span>
              </li>
            </ul>
            <Button href="https://freegeek.org/data-security" variant="secondary">
              Learn More About Data Security
            </Button>
          </div>
        </div>
      </Section>

      {/* What We Accept */}
      <Section background="white">
        <h2 className="text-3xl font-bold mb-12 text-center">What can you donate?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="text-center p-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="font-semibold">Laptops</p>
          </div>
          <div className="text-center p-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="font-semibold">Desktops</p>
          </div>
          <div className="text-center p-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="font-semibold">Smartphones</p>
          </div>
          <div className="text-center p-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="font-semibold">Tablets</p>
          </div>
          <div className="text-center p-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="font-semibold">Monitors</p>
          </div>
          <div className="text-center p-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="font-semibold">Printers</p>
          </div>
          <div className="text-center p-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="font-semibold">Keyboards</p>
          </div>
          <div className="text-center p-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="font-semibold">Cables & Accessories</p>
          </div>
        </div>
        <p className="text-center text-gray-600">
          Not sure if we accept your item? Check our{' '}
          <a href="https://freegeek.org/faqs" className="text-blue-600 hover:underline">FAQ</a>{' '}
          or contact us at{' '}
          <a href="mailto:computerfriends@freegeek.org" className="text-blue-600 hover:underline">
            computerfriends@freegeek.org
          </a>
        </p>
      </Section>

      {/* CTA */}
      <Section background="blue">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to make a difference?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Every device you donate helps bridge the digital divide in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#drop-off" variant="secondary" size="lg">
              Get Directions
            </Button>
            <Button href="/donate" variant="outline" size="lg">
              Make a Financial Donation
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
