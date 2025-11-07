import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import type { NavigationLink } from '../../types';

interface MobileNavProps {
  links: NavigationLink[];
  isOpen: boolean;
  onLinkClick: (href: string) => void;
}

export default function MobileNav({ links, isOpen, onLinkClick }: MobileNavProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuRef.current) {
      if (isOpen) {
        gsap.to(menuRef.current, {
          x: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      } else {
        gsap.to(menuRef.current, {
          x: '100%',
          duration: 0.3,
          ease: 'power2.in'
        });
      }
    }
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      className="md:hidden fixed top-16 right-0 bottom-0 w-64 bg-white shadow-lg transform translate-x-full"
    >
      <div className="flex flex-col p-4 space-y-4">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => onLinkClick(link.href)}
            className="text-left text-gray-700 hover:text-primary-600 py-2 px-4 rounded-md hover:bg-gray-100 transition-colors duration-200"
          >
            {link.label}
          </button>
        ))}
      </div>
    </div>
  );
}
