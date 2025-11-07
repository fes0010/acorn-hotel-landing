import SectionHeader from '../shared/SectionHeader';
import TestimonialGrid from './TestimonialGrid';
import { TESTIMONIALS } from '../../utils/constants';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Guest Testimonials" 
          subtitle="Hear what our guests have to say about their experience"
        />
        <TestimonialGrid testimonials={TESTIMONIALS} />
      </div>
    </section>
  );
}
