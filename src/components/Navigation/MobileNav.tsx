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
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuRef.current && overlayRef.current) {
      if (isOpen) {
        gsap.to(overlayRef.current, {
          opacity: 1,
          duration: 0.3,
          display: 'block',
          ease: 'power2.out'
        });
        gsap.to(menuRef.current, {
          x: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      } else {
        gsap.to(overlayRef.current, {
          opacity: 0,
          duration: 0.3,
          display: 'none',
          ease: 'power2.in'
        });
        gsap.to(menuRef.current, {
          x: '100%',
          duration: 0.3,
          ease: 'power2.in'
        });
      }
    }
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="md:hidden fixed inset-0 bg-black/50 z-40 hidden opacity-0"
        style={{ top: '64px' }}
      />
      
      {/* Sidebar */}
      <div
        ref={menuRef}
        className="md:hidden fixed top-16 right-0 bottom-0 w-64 bg-white shadow-lg transform translate-x-full z-50"
      >
        <div className="flex flex-col p-4 space-y-2">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => onLinkClick(link.href)}
              className="text-left text-gray-700 hover:text-primary-600 py-3 px-4 rounded-md hover:bg-gray-100 transition-colors duration-200 font-medium"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
