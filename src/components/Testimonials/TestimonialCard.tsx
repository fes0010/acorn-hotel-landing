import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import StarRating from '../shared/StarRating';
import type { Testimonial } from '../../types';

gsap.registerPlugin(ScrollTrigger);

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(cardRef.current,
        {
          y: 60,
          opacity: 0,
          scale: 0.95
        },
        {
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          },
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          delay: index * 0.12,
          ease: 'power3.out',
          force3D: true,
          clearProps: 'transform,opacity'
        }
      );
    }, cardRef);

    return () => ctx.revert();
  }, [index]);

  const handleMouseEnter = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        y: -8,
        boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
        duration: 0.3,
        ease: 'power2.out'
      });
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        y: 0,
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        duration: 0.3,
        ease: 'power2.out'
      });
    }
  };

  return (
    <div
      ref={cardRef}
      className="bg-white p-4 sm:p-6 rounded-lg shadow-md"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="mb-3 sm:mb-4">
        <StarRating rating={testimonial.rating} />
      </div>
      <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 italic">"{testimonial.review}"</p>
      <div className="flex items-center">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-full flex items-center justify-center mr-3">
          <span className="text-primary-700 font-bold text-base sm:text-lg">
            {testimonial.guestName.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-semibold text-sm sm:text-base text-gray-900">{testimonial.guestName}</p>
          <p className="text-xs sm:text-sm text-gray-600">{new Date(testimonial.date).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}
