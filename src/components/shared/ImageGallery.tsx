import { useState } from 'react';
import type { GalleryImage } from '../../types';

interface ImageGalleryProps {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
}

export default function ImageGallery({ images, columns = 3 }: ImageGalleryProps) {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const handleImageLoad = (id: string) => {
    setLoadedImages(prev => new Set(prev).add(id));
  };

  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-4`}>
      {images.map((image) => (
        <div key={image.id} className="relative overflow-hidden rounded-lg shadow-md">
          {!loadedImages.has(image.id) && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
          )}
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            loading="lazy"
            onLoad={() => handleImageLoad(image.id)}
          />
          {image.caption && (
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm">
              {image.caption}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
