import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeader from '../shared/SectionHeader';
import { EVENT_TYPES } from '../../utils/constants';

gsap.registerPlugin(ScrollTrigger);

export default function EventsSection() {
  const contentRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(imagesRef.current,
        {
          x: -80,
          opacity: 0
        },
        {
          scrollTrigger: {
            trigger: imagesRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          force3D: true,
          clearProps: 'transform,opacity'
        }
      );

      gsap.fromTo(contentRef.current,
        {
          x: 80,
          opacity: 0
        },
        {
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          x: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: 'power3.out',
          force3D: true,
          clearProps: 'transform,opacity'
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="events" className="py-12 sm:py-16 md:py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Events & Celebrations" 
          subtitle="Host unforgettable moments in our versatile event spaces"
        />
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div ref={imagesRef} className="grid grid-cols-2 gap-3 sm:gap-4">
            {EVENT_TYPES.slice(0, 4).map((event) => (
              <img 
                key={event.id}
                src={event.image} 
                alt={event.name} 
                className="rounded-lg shadow-lg w-full h-40 sm:h-48 object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            ))}
          </div>
          <div ref={contentRef}>
            <div className="space-y-4 sm:space-y-6">
              {EVENT_TYPES.map((event) => (
                <div key={event.id} className="border-l-4 border-primary-600 pl-3 sm:pl-4">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{event.name}</h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-1">{event.description}</p>
                  {event.capacity && (
                    <p className="text-xs sm:text-sm text-gray-600">Capacity: {event.capacity}</p>
                  )}
                </div>
              ))}
              <div className="bg-primary-50 p-3 sm:p-4 rounded-lg mt-4 sm:mt-6">
                <p className="text-sm sm:text-base text-gray-800 font-semibold">
                  ✓ Ample free parking available for all event guests
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
