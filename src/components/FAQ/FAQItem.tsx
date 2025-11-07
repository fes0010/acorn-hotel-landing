import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { FAQItem as FAQItemType } from '../../types';

gsap.registerPlugin(ScrollTrigger);

interface FAQItemProps {
  faq: FAQItemType;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

export default function FAQItem({ faq, isOpen, onToggle, index }: FAQItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!itemRef.current) return;

    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set(itemRef.current, { x: -30, opacity: 0 });
      
      // Create animation with ScrollTrigger
      gsap.to(itemRef.current, {
        scrollTrigger: {
          trigger: itemRef.current,
          start: 'top 85%',
          end: 'top 20%',
          toggleActions: 'play none none none',
          once: true
        },
        x: 0,
        opacity: 1,
        duration: 0.6,
        delay: index * 0.1,
        ease: 'power3.out',
        force3D: true
      });
    }, itemRef);

    return () => ctx.revert();
  }, [index]);

  useEffect(() => {
    if (!contentRef.current || !iconRef.current) return;

    if (isOpen) {
      gsap.to(contentRef.current, {
        height: 'auto',
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
      gsap.to(iconRef.current, {
        rotation: 180,
        duration: 0.3,
        ease: 'power2.out'
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
      gsap.to(iconRef.current, {
        rotation: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
  }, [isOpen]);

  return (
    <div
      ref={itemRef}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50 transition-colors duration-200"
      >
        <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
        <svg
          ref={iconRef}
          className="w-6 h-6 text-primary-600 flex-shrink-0 ml-4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        ref={contentRef}
        className="h-0 opacity-0 overflow-hidden"
      >
        <div className="px-6 pb-4">
          <p className="text-gray-700">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}
