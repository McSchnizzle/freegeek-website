interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'black' | 'gray' | 'blue';
  id?: string;
}

const backgroundClasses = {
  white: 'bg-white text-black',
  black: 'bg-black text-white',
  gray: 'bg-gray-50 text-black',
  blue: 'bg-blue-600 text-white',
};

export function Section({
  children,
  className = '',
  background = 'white',
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 px-4 ${backgroundClasses[background]} ${className}`}
    >
      <div className="max-w-5xl mx-auto">
        {children}
      </div>
    </section>
  );
}

export default Section;
