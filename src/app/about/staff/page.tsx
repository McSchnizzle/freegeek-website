import Image from 'next/image';
import { Metadata } from 'next';
import { Button, Section } from '@/components';
import { getTranslations } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Our Team | Free Geek',
  description: 'Meet the dedicated team behind Free Geek. Our staff, leadership, and board of directors work together to bridge the digital divide.',
};

interface TeamMember {
  name: string;
  title: string;
  pronouns?: string;
  image?: string;
  linkedin?: string;
}

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="bg-white rounded-2xl p-6 text-center">
      <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            width={96}
            height={96}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        )}
      </div>
      <h3 className="font-bold text-lg">{member.name}</h3>
      {member.pronouns && (
        <p className="text-gray-500 text-sm">({member.pronouns})</p>
      )}
      <p className="text-gray-600 text-sm mt-1">{member.title}</p>
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm mt-2"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          LinkedIn
        </a>
      )}
    </div>
  );
}

export default async function StaffPage() {
  const t = await getTranslations('staff');
  const common = await getTranslations('common');

  // Note: In production, this data would come from a CMS or API
  const leadership: TeamMember[] = [
    { name: 'Executive Director', title: t('roles.executiveDirector'), pronouns: 'they/them' },
  ];

  const boardMembers: TeamMember[] = [
    { name: t('board.placeholder1'), title: t('roles.boardMember') },
    { name: t('board.placeholder2'), title: t('roles.boardMember') },
    { name: t('board.placeholder3'), title: t('roles.boardMember') },
  ];

  const departments = [
    {
      name: t('departments.operations.name'),
      members: [
        { name: t('departments.operations.member1'), title: t('roles.manager') },
      ],
    },
    {
      name: t('departments.programs.name'),
      members: [
        { name: t('departments.programs.member1'), title: t('roles.manager') },
      ],
    },
    {
      name: t('departments.development.name'),
      members: [
        { name: t('departments.development.member1'), title: t('roles.manager') },
      ],
    },
  ];

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

      {/* Leadership */}
      <Section background="white">
        <h2 className="text-3xl font-bold mb-4 text-center">{t('leadership.title')}</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          {t('leadership.description')}
        </p>
        <div className="flex justify-center">
          <div className="bg-gray-50 rounded-2xl p-8 text-center max-w-sm">
            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <p className="text-gray-500 text-sm italic">{t('leadership.comingSoon')}</p>
          </div>
        </div>
      </Section>

      {/* Board of Directors */}
      <Section background="gray">
        <h2 className="text-3xl font-bold mb-4 text-center">{t('board.title')}</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          {t('board.description')}
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {boardMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
        <p className="text-center text-gray-500 text-sm mt-8 italic">
          {t('board.comingSoon')}
        </p>
      </Section>

      {/* Department Teams */}
      <Section background="white">
        <h2 className="text-3xl font-bold mb-4 text-center">{t('teams.title')}</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          {t('teams.description')}
        </p>
        <div className="space-y-12">
          {departments.map((dept, deptIndex) => (
            <div key={deptIndex}>
              <h3 className="text-2xl font-bold mb-6 text-center">{dept.name}</h3>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {dept.members.map((member, memberIndex) => (
                  <TeamMemberCard key={memberIndex} member={member} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-500 text-sm mt-8 italic">
          {t('teams.comingSoon')}
        </p>
      </Section>

      {/* Join the Team CTA */}
      <Section background="blue">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">{t('cta.title')}</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/careers" variant="secondary" size="lg">
              {t('cta.viewCareers')}
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
