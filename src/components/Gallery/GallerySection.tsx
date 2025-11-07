import { useState } from 'react';
import SectionHeader from '../shared/SectionHeader';
import CategoryGallery from './CategoryGallery';
import { GALLERY_CATEGORIES } from '../../utils/constants';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState(GALLERY_CATEGORIES[0].id);

  const currentCategory = GALLERY_CATEGORIES.find(cat => cat.id === activeCategory);

  return (
    <section id="gallery" className="py-12 sm:py-16 md:py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Photo Gallery" 
          subtitle="Explore our beautiful hotel through these stunning images"
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 sm:mb-12">
          {GALLERY_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Display */}
        {currentCategory && (
          <CategoryGallery 
            key={currentCategory.id}
            category={currentCategory}
          />
        )}
      </div>
    </section>
  );
}
