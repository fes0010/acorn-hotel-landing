import SectionHeader from '../shared/SectionHeader';
import FeedbackForm from './FeedbackForm';
import type { FeedbackFormData } from '../../types';

export default function FeedbackSection() {
  const handleSubmit = async (data: FeedbackFormData) => {
    // In a real application, this would send data to a backend
    console.log('Feedback submitted:', data);
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  return (
    <section id="feedback" className="py-12 sm:py-16 md:py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <SectionHeader 
          title="Share Your Feedback" 
          subtitle="We'd love to hear about your experience at Acorn Hotel"
        />
        <FeedbackForm onSubmit={handleSubmit} />
      </div>
    </section>
  );
}
