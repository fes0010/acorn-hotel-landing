import type { Testimonial } from '../../types';
import TestimonialCard from './TestimonialCard';

interface TestimonialGridProps {
  testimonials: Testimonial[];
}

export default function TestimonialGrid({ testimonials }: TestimonialGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
      ))}
    </div>
  );
}
