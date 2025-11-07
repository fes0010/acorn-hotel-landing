import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ExteriorSection() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        scrollTrigger: {
          trigger: bgRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        },
        y: -100,
        ease: 'none'
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
      <div 
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/exterior/WhatsApp%20Image%202025-11-01%20at%204.57.20%20PM%20(3).jpeg')`,
          height: '120%'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="text-center text-white max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Located in the Heart of Kenya
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4">
            Experience the perfect blend of modern comfort and Kenyan hospitality
          </p>
          <p className="text-base sm:text-lg">
            Our hotel offers a serene environment with easy access to local attractions, 
            making it the ideal destination for both business and leisure travelers.
          </p>
        </div>
      </div>
    </section>
  );
}
