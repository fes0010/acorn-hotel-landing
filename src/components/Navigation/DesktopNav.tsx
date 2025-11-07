import type { NavigationLink } from '../../types';

interface DesktopNavProps {
  links: NavigationLink[];
  onLinkClick: (href: string) => void;
}

export default function DesktopNav({ links, onLinkClick }: DesktopNavProps) {
  return (
    <div className="hidden md:flex space-x-8">
      {links.map((link) => (
        <button
          key={link.id}
          onClick={() => onLinkClick(link.href)}
          className="text-sm font-medium transition-colors duration-300 text-gray-700 hover:text-primary-600"
        >
          {link.label}
        </button>
      ))}
    </div>
  );
}
