interface CardProps {
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  badge?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export function Card({
  title,
  description,
  image,
  imageAlt,
  badge,
  onClick,
  children,
}: CardProps) {
  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-default hover:shadow-lg transition-shadow duration-300 cursor-pointer h-full"
      onClick={onClick}
    >
      {/* Image */}
      {image && (
        <div className="relative w-full h-64 overflow-hidden bg-secondary">
          <img
            src={image}
            alt={imageAlt || title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
          {badge && (
            <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
              {badge}
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <h3 className="text-h4 mb-2">{title}</h3>
        {description && (
          <p className="text-body text-gray-600 mb-4">{description}</p>
        )}
        {children}
      </div>
    </div>
  );
}
