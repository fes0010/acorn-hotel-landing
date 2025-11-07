interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({ title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <div className={`mb-8 sm:mb-10 md:mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
          {subtitle}
        </p>
      )}
    </div>
  );
}
