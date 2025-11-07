import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import type { GalleryCategory } from '../../types';

interface CategoryGalleryProps {
  category: GalleryCategory;
}

export default function CategoryGallery({ category }: CategoryGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const imageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoPlayTimerRef = useRef<number | null>(null);

  const images = category.images;

  useEffect(() => {
    setCurrentIndex(0);
    setIsAutoPlaying(true);
  }, [category.id]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || images.length <= 1) return;

    autoPlayTimerRef.current = setTimeout(() => {
      goToNext();
    }, 4000); // Change image every 4 seconds

    return () => {
      if (autoPlayTimerRef.current) {
        clearTimeout(autoPlayTimerRef.current);
      }
    };
  }, [currentIndex, isAutoPlaying, images.length]);

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    if (autoPlayTimerRef.current) {
      clearTimeout(autoPlayTimerRef.current);
    }
  };

  const resumeAutoPlay = () => {
    setIsAutoPlaying(true);
  };

  useEffect(() => {
    if (!imageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(imageRef.current,
        {
          opacity: 0,
          scale: 0.9,
          x: 50
        },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 0.5,
          ease: 'power3.out'
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [currentIndex]);

  const goToNext = () => {
    if (!imageRef.current) return;
    
    pauseAutoPlay();
    
    gsap.to(imageRef.current, {
      opacity: 0,
      x: -50,
      duration: 0.4,
      ease: 'power2.in',
      onComplete: () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setTimeout(resumeAutoPlay, 100);
      }
    });
  };

  const goToPrevious = () => {
    if (!imageRef.current) return;
    
    pauseAutoPlay();
    
    gsap.to(imageRef.current, {
      opacity: 0,
      x: 50,
      duration: 0.4,
      ease: 'power2.in',
      onComplete: () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
        setTimeout(resumeAutoPlay, 100);
      }
    });
  };

  const goToImage = (index: number) => {
    if (index === currentIndex || !imageRef.current) return;
    
    pauseAutoPlay();
    
    const direction = index > currentIndex ? -50 : 50;
    
    gsap.to(imageRef.current, {
      opacity: 0,
      x: direction,
      duration: 0.4,
      ease: 'power2.in',
      onComplete: () => {
        setCurrentIndex(index);
        setTimeout(resumeAutoPlay, 100);
      }
    });
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Main Image Display */}
      <div className="relative bg-gray-900 rounded-2xl shadow-2xl overflow-hidden mb-6">
        <div className="relative min-h-[400px] max-h-[600px] flex items-center justify-center">
          <div ref={imageRef} className="w-full h-full p-4">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-contain max-h-[580px]"
            />
          </div>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
                aria-label="Next image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Auto-play Control */}
          {images.length > 1 && (
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
              aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
            >
              {isAutoPlaying ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
          )}

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-semibold">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </div>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-4 px-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => goToImage(index)}
              className={`flex-shrink-0 w-28 h-28 rounded-lg overflow-hidden transition-all duration-300 bg-gray-100 ${
                index === currentIndex
                  ? 'ring-4 ring-primary-600 scale-105 shadow-lg'
                  : 'opacity-60 hover:opacity-100 hover:scale-105'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
