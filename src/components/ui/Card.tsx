interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'bordered' | 'elevated';
}

const variantClasses = {
  default: 'bg-white',
  bordered: 'bg-white border border-gray-200',
  elevated: 'bg-white shadow-lg',
};

export function Card({
  children,
  className = '',
  variant = 'default',
}: CardProps) {
  return (
    <div className={`rounded-2xl p-6 ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
}

export default Card;
