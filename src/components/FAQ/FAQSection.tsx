import SectionHeader from '../shared/SectionHeader';
import FAQAccordion from './FAQAccordion';
import { FAQ_ITEMS } from '../../utils/constants';

export default function FAQSection() {
  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <SectionHeader 
          title="Frequently Asked Questions" 
          subtitle="Find answers to common questions about our hotel and services"
        />
        <FAQAccordion faqItems={FAQ_ITEMS} />
      </div>
    </section>
  );
}
