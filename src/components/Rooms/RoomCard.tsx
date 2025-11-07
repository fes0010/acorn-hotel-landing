import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { RoomData } from '../../types';

gsap.registerPlugin(ScrollTrigger);

interface RoomCardProps {
  room: RoomData;
  index: number;
}

export default function RoomCard({ room, index }: RoomCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (!cardRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(cardRef.current, 
        {
          y: 80,
          opacity: 0,
          scale: 0.9
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
          duration: 0.8,
          delay: index * 0.15,
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
        y: -10,
        boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
        duration: 0.3,
        ease: 'power2.out'
      });
    }
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 1.1,
        duration: 0.4,
        ease: 'power2.out'
      });
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        y: 0,
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
        duration: 0.3,
        ease: 'power2.out'
      });
    }
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 1,
        duration: 0.4,
        ease: 'power2.out'
      });
    }
  };

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-lg overflow-hidden shadow-lg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-gray-200">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          </div>
        )}
        <img
          ref={imageRef}
          src={room.image}
          alt={room.imageAlt}
          className="w-full h-full object-cover"
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{room.title}</h3>
        <p className="text-sm sm:text-base text-gray-600">{room.description}</p>
      </div>
    </div>
  );
}
