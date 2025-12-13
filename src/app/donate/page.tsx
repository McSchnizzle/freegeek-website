import Image from 'next/image';
import { Metadata } from 'next';
import { Button, Section } from '@/components';

export const metadata: Metadata = {
  title: 'Donate | Free Geek',
  description: 'Support Free Geek with a financial donation. Your gift helps bridge the digital divide and keep technology out of landfills.',
};

export default function DonatePage() {
  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="bg-black text-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Fuel the mission.<br />
            <span className="text-blue-500">Bridge the divide.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Your financial support helps us put technology into the hands of
            those who need it most while keeping e-waste out of landfills.
          </p>
        </div>
      </section>

      {/* Donation Options */}
      <Section background="white">
        <h2 className="text-3xl font-bold mb-4 text-center">Ways to Give</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Every dollar helps us refurbish computers, provide digital skills training,
          and connect community members to opportunity.
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* One-Time */}
          <div className="bg-gray-50 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">One-Time Gift</h3>
            <p className="text-gray-600 text-sm mb-6">
              Make an immediate impact with a single donation of any amount.
            </p>
            <Button href="https://freegeek.org/donate" className="w-full">
              Donate Now
            </Button>
          </div>

          {/* Monthly */}
          <div className="bg-blue-50 rounded-2xl p-6 text-center border-2 border-blue-600">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Monthly Giving</h3>
            <p className="text-gray-600 text-sm mb-6">
              Become a sustaining supporter with a recurring monthly gift.
            </p>
            <Button href="https://freegeek.org/donate" className="w-full">
              Give Monthly
            </Button>
          </div>

          {/* Legacy */}
          <div className="bg-gray-50 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Corporate & Legacy</h3>
            <p className="text-gray-600 text-sm mb-6">
              Partner with us or include Free Geek in your estate planning.
            </p>
            <Button href="/contact" variant="secondary" className="w-full">
              Contact Us
            </Button>
          </div>
        </div>
      </Section>

      {/* Impact */}
      <Section background="gray">
        <h2 className="text-3xl font-bold mb-12 text-center">Your Impact</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-5xl font-black text-blue-600 mb-2">$25</div>
            <p className="text-gray-600">
              Covers data sanitization and refurbishment supplies for one device
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-black text-blue-600 mb-2">$100</div>
            <p className="text-gray-600">
              Provides digital skills training for one community member
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-black text-blue-600 mb-2">$250</div>
            <p className="text-gray-600">
              Fully funds one refurbished computer for a student or job seeker
            </p>
          </div>
        </div>
      </Section>

      {/* Other Ways */}
      <Section background="white">
        <h2 className="text-3xl font-bold mb-8 text-center">Other Ways to Support</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <a
            href="/donate-tech"
            className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow block"
          >
            <h3 className="font-bold text-lg mb-2">Donate Technology</h3>
            <p className="text-gray-600 text-sm">
              Have old devices? We&apos;ll refurbish them for community members in need.
            </p>
          </a>
          <a
            href="/volunteer"
            className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow block"
          >
            <h3 className="font-bold text-lg mb-2">Volunteer Your Time</h3>
            <p className="text-gray-600 text-sm">
              Join our team and help bridge the digital divide hands-on.
            </p>
          </a>
          <a
            href="https://freegeek.org/take-action/host-tech-drive"
            className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow block"
          >
            <h3 className="font-bold text-lg mb-2">Host a Tech Drive</h3>
            <p className="text-gray-600 text-sm">
              Organize a collection at your workplace, school, or community.
            </p>
          </a>
          <a
            href="https://freegeek.org/take-action/ambassador-program"
            className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow block"
          >
            <h3 className="font-bold text-lg mb-2">Become an Ambassador</h3>
            <p className="text-gray-600 text-sm">
              Spread the word about Free Geek in your community and networks.
            </p>
          </a>
        </div>
      </Section>

      {/* Tax Info */}
      <Section background="black">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Tax-Deductible Giving</h2>
          <p className="text-xl text-gray-300 mb-4">
            Free Geek is a 501(c)(3) nonprofit organization. Your donation is
            tax-deductible to the fullest extent allowed by law.
          </p>
          <p className="text-gray-400">
            EIN: 93-1243063
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section background="blue">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to make a difference?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of supporters who believe technology should be accessible to everyone.
          </p>
          <Button href="https://freegeek.org/donate" variant="secondary" size="lg">
            Donate Now
          </Button>
        </div>
      </Section>
    </div>
  );
}
