interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  backgroundColor?: 'light' | 'white' | 'accent';
  centered?: boolean;
}

export function Section({
  title,
  subtitle,
  children,
  backgroundColor = 'white',
  centered = false,
}: SectionProps) {
  const bgMap = {
    light: 'bg-secondary',
    white: 'bg-white',
    accent: 'bg-accent/5',
  };

  return (
    <section className={`w-full py-16 md:py-24 ${bgMap[backgroundColor]}`}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {title && (
          <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
            <h2 className="text-h2 mb-4">{title}</h2>
            {subtitle && (
              <p className="text-body text-gray-600 max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
