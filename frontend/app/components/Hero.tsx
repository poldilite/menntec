interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  children?: React.ReactNode;
}

export function Hero({ title, subtitle, backgroundImage, children }: HeroProps) {
  return (
    <section
      className="relative w-full min-h-[500px] phone-only:min-h-[300px] flex items-center justify-center text-center text-white"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}
    >
      {/* Overlay */}
      {backgroundImage && <div className="absolute inset-0 bg-black/40" />}

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl px-4 md:px-8">
        <h1 className="text-h1 mb-4 text-white">{title}</h1>
        {subtitle && (
          <p className="text-body text-gray-200 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        {children}
      </div>

      {/* Default background if no image */}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/10" />
      )}
    </section>
  );
}
