import { Metadata } from 'next';
import { Button, Section } from '@/components';

export const metadata: Metadata = {
  title: 'Hardware Grants | Free Geek',
  description: 'Free Geek provides free and low-cost refurbished technology to qualifying nonprofits through our Hardware Grants program.',
};

export default function HardwareGrantsPage() {
  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="bg-black text-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hardware Grants<br />
            <span className="text-blue-500">for Organizations</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Free and low-cost refurbished technology for nonprofits and
            community organizations serving those in need.
          </p>
        </div>
      </section>

      {/* Status Notice */}
      <Section background="gray">
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg max-w-3xl mx-auto">
          <h2 className="font-bold text-yellow-800 mb-2">Application Status</h2>
          <p className="text-yellow-700">
            The Hardware Grants program is periodically open and closed based on
            inventory availability. Please contact us to check current status
            and availability.
          </p>
          <Button href="/contact" variant="secondary" className="mt-4">
            Contact Digital Inclusion Team
          </Button>
        </div>
      </Section>

      {/* Grant Types */}
      <Section background="white">
        <h2 className="text-3xl font-bold mb-12 text-center">Grant Programs</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4 text-blue-600">Organizational Hardware Grants</h3>
            <p className="text-gray-600 mb-4">
              Free and low-cost refurbished technology for nonprofit organizational
              use—equipping your staff and volunteers with the tools they need.
            </p>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Desktop and laptop computers
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Monitors and peripherals
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Networking equipment
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4 text-blue-600">Community Hardware Grants</h3>
            <p className="text-gray-600 mb-4">
              Free technology for the community members your nonprofit serves—
              helping you extend digital access to those who need it most.
            </p>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Laptops for clients and program participants
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Distribution through your existing programs
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Support for digital inclusion initiatives
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Eligibility */}
      <Section background="gray">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Eligibility</h2>
          <div className="bg-white rounded-2xl p-6 space-y-4">
            <p className="text-gray-600">
              To qualify for Hardware Grants, organizations must:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-sm">1</span>
                <span className="text-gray-600">Be a registered 501(c)(3) nonprofit organization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-sm">2</span>
                <span className="text-gray-600">Serve communities in the Portland metro area</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-sm">3</span>
                <span className="text-gray-600">Demonstrate need for technology to fulfill your mission</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Testimonial */}
      <Section background="black">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-xl text-gray-300 italic mb-6">
            &quot;We at A Family for Every Child unconditionally support Free Geek;
            they serve an irreplaceable role in our community. Were it not for
            the generous past donations of Free Geek, we would neither be able
            to function during this health crisis, nor serve our mission as a whole.&quot;
          </blockquote>
          <p className="text-gray-400">— Andrew Hampton, A Family for Every Child</p>
        </div>
      </Section>

      {/* Impact */}
      <Section background="white">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Impact</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          <div>
            <div className="text-5xl font-black text-blue-600 mb-2">150+</div>
            <p className="text-gray-600">Organizations served annually</p>
          </div>
          <div>
            <div className="text-5xl font-black text-blue-600 mb-2">75K+</div>
            <p className="text-gray-600">Total devices granted</p>
          </div>
          <div>
            <div className="text-5xl font-black text-blue-600 mb-2">25</div>
            <p className="text-gray-600">Years of community service</p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="blue">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in a Hardware Grant?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact our Digital Inclusion team to learn about current availability
            and eligibility requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary" size="lg">
              Contact Us
            </Button>
            <Button href="/programs" variant="outline" size="lg">
              View All Programs
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
