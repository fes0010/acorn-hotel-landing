import type { NavigationLink } from '../../types';

interface DesktopNavProps {
  links: NavigationLink[];
  isScrolled: boolean;
  onLinkClick: (href: string) => void;
}

export default function DesktopNav({ links, isScrolled, onLinkClick }: DesktopNavProps) {
  return (
    <div className="hidden md:flex space-x-8">
      {links.map((link) => (
        <button
          key={link.id}
          onClick={() => onLinkClick(link.href)}
          className={`text-sm font-medium transition-colors duration-300 hover:text-primary-600 ${
            isScrolled ? 'text-gray-700' : 'text-white'
          }`}
        >
          {link.label}
        </button>
      ))}
    </div>
  );
}
