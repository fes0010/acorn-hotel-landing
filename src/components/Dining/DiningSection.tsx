import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeader from '../shared/SectionHeader';

gsap.registerPlugin(ScrollTrigger);

export default function DiningSection() {
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
    <section id="dining" className="py-12 sm:py-16 md:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Dining Experience" 
          subtitle="Savor exquisite cuisine in our elegant dining spaces"
        />
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div ref={imagesRef} className="grid grid-cols-2 gap-3 sm:gap-4">
            <img 
              src="/images/dining/WhatsApp%20Image%202025-11-01%20at%204.57.15%20PM.jpeg" 
              alt="Dining area" 
              className="rounded-lg shadow-lg w-full h-40 sm:h-48 object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <img 
              src="/images/dining/WhatsApp%20Image%202025-11-01%20at%204.57.20%20PM%20(1).jpeg" 
              alt="Dining setup" 
              className="rounded-lg shadow-lg w-full h-40 sm:h-48 object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <img 
              src="/images/dining/WhatsApp%20Image%202025-11-01%20at%204.57.16%20PM.jpeg" 
              alt="Restaurant interior" 
              className="rounded-lg shadow-lg w-full h-40 sm:h-48 object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <img 
              src="/images/dining/WhatsApp%20Image%202025-11-01%20at%204.57.18%20PM.jpeg" 
              alt="Dining experience" 
              className="rounded-lg shadow-lg w-full h-40 sm:h-48 object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
          <div ref={contentRef}>
            <div className="space-y-4 sm:space-y-6">
              <div className="border-l-4 border-primary-600 pl-3 sm:pl-4">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Restaurant & Bar</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Enjoy delicious meals prepared by our experienced chefs using fresh, locally-sourced ingredients. Our menu features both international cuisine and authentic Kenyan dishes.
                </p>
              </div>
              
              <div className="border-l-4 border-primary-600 pl-3 sm:pl-4">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Breakfast, Lunch & Dinner</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Whether you're enjoying a casual breakfast, a business lunch, or an elegant dinner, our dining spaces provide the perfect ambiance for every occasion.
                </p>
              </div>
              
              <div className="border-l-4 border-primary-600 pl-3 sm:pl-4">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Catering Services</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  We offer comprehensive catering services for all events, from intimate gatherings to large celebrations, ensuring every guest is delighted.
                </p>
              </div>

              <div className="bg-primary-50 p-3 sm:p-4 rounded-lg mt-4 sm:mt-6">
                <p className="text-sm sm:text-base text-gray-800 font-semibold">
                  ✓ Fresh ingredients sourced locally for authentic flavors
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
