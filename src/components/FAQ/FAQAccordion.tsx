import { useState } from 'react';
import type { FAQItem as FAQItemType } from '../../types';
import FAQItem from './FAQItem';

interface FAQAccordionProps {
  faqItems: FAQItemType[];
}

export default function FAQAccordion({ faqItems }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {faqItems.map((faq, index) => (
        <FAQItem
          key={faq.id}
          faq={faq}
          isOpen={openId === faq.id}
          onToggle={() => handleToggle(faq.id)}
          index={index}
        />
      ))}
    </div>
  );
}
