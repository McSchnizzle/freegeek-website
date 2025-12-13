import Image from 'next/image';
import { Metadata } from 'next';
import { Button, Section } from '@/components';

export const metadata: Metadata = {
  title: 'Volunteer | Free Geek',
  description: 'Join Free Geek as a volunteer. Help bridge the digital divide through ambassador programs, tech drives, warehouse work, and more.',
};

const volunteerOpportunities = [
  {
    title: 'Ambassador Program',
    description: 'Share Free Geek\'s vision with your community through social media, email, fundraising, and more.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
    cta: 'Become an Ambassador',
    href: 'https://freegeek.org/take-action/ambassador-program',
  },
  {
    title: 'Host a Tech Drive',
    description: 'Organize a tech collection at your workplace, school, or neighborhood to help us reach more donors.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    cta: 'Start a Tech Drive',
    href: 'https://freegeek.org/take-action/host-tech-drive',
  },
  {
    title: 'Warehouse Volunteering',
    description: 'Get hands-on experience receiving, sorting, and processing donated technology in our facility.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    cta: 'Apply to Volunteer',
    href: 'https://freegeek.org/take-action-donate-technology/volunteer',
  },
  {
    title: 'Fundraise for Free Geek',
    description: 'Host a fundraiser—whether it\'s a Facebook campaign, community event, bake sale, or walk-a-thon.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    cta: 'Start a Fundraiser',
    href: 'https://freegeek.org/donate',
  },
];

export default function VolunteerPage() {
  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="bg-black text-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Join our mission.<br />
            <span className="text-blue-500">Make an impact.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Since 2000, over 35,000 volunteers have helped Free Geek turn e-waste
            into opportunity. There&apos;s a place for you too.
          </p>
        </div>
      </section>

      {/* Opportunities */}
      <Section background="white">
        <h2 className="text-3xl font-bold mb-4 text-center">Ways to Get Involved</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Whether you have an hour or a month, there&apos;s a way for you to contribute
          to digital equity in our community.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {volunteerOpportunities.map((opp) => (
            <div key={opp.title} className="bg-gray-50 rounded-2xl p-6 flex flex-col">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                {opp.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{opp.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{opp.description}</p>
              <Button href={opp.href} variant="primary" className="self-start">
                {opp.cta}
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* Impact */}
      <Section background="gray">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image
              src="/images/hero/hero-community.png"
              alt="Free Geek volunteers working together"
              width={500}
              height={500}
              className="rounded-2xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Your impact adds up</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl font-black text-blue-600">35K+</div>
                <p className="text-gray-700">
                  Volunteers have contributed their time and skills to Free Geek over 25 years.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl font-black text-blue-600">82M</div>
                <p className="text-gray-700">
                  Pounds of e-waste diverted from landfills thanks to our collective efforts.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl font-black text-blue-600">75K+</div>
                <p className="text-gray-700">
                  Devices refurbished and given to people who need them most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Interest Form */}
      <Section background="white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Interested in volunteering?</h2>
          <p className="text-gray-600 text-center mb-8">
            Tell us about yourself and we&apos;ll be in touch with opportunities that match your interests.
          </p>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  required
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  required
                  aria-required="true"
                />
              </div>
            </div>
            <div>
              <fieldset>
                <legend className="block text-sm font-semibold mb-2">
                  What interests you? <span className="text-gray-500">(select all that apply)</span>
                </legend>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'Ambassador Program',
                    'Tech Drives',
                    'Warehouse Volunteering',
                    'Fundraising',
                    'Internship',
                    'Other',
                  ].map((interest) => (
                    <label key={interest} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition">
                      <input
                        type="checkbox"
                        name="interests"
                        value={interest.toLowerCase().replace(' ', '-')}
                        className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span>{interest}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Tell us about yourself
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
                placeholder="Share any relevant experience, availability, or questions..."
              />
            </div>
            <div className="text-center">
              <Button type="submit" size="lg">
                Submit Interest Form
              </Button>
            </div>
          </form>
          <p className="text-sm text-gray-500 text-center mt-6">
            Note: This form is not yet connected. For immediate assistance,
            please email us at{' '}
            <a href="mailto:computerfriends@freegeek.org" className="text-blue-600 hover:underline">
              computerfriends@freegeek.org
            </a>
          </p>
        </div>
      </Section>

      {/* Internship CTA */}
      <Section background="black">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Looking for an internship?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Free Geek offers internship opportunities for students and career-changers
            interested in technology, nonprofit management, and sustainability.
          </p>
          <Button href="https://freegeek.org/about/careers" variant="secondary" size="lg">
            View Open Positions
          </Button>
        </div>
      </Section>

      {/* CTA */}
      <Section background="blue">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Can&apos;t volunteer right now?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            You can still make a difference. Donate your old tech or support our mission financially.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/donate-tech" variant="secondary" size="lg">
              Donate Tech
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
