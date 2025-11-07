import { useState, useEffect, useRef } from 'react';
import type { FormEvent } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import StarRating from '../shared/StarRating';
import type { FeedbackFormData } from '../../types';

gsap.registerPlugin(ScrollTrigger);

interface FeedbackFormProps {
  onSubmit: (data: FeedbackFormData) => Promise<void>;
}

export default function FeedbackForm({ onSubmit }: FeedbackFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState<FeedbackFormData>({
    name: '',
    email: '',
    rating: 0,
    comments: ''
  });
  
  const [errors, setErrors] = useState<Partial<FeedbackFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (!formRef.current) return;

    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set(formRef.current, { y: 40, opacity: 0 });
      
      // Create animation with ScrollTrigger
      gsap.to(formRef.current, {
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 85%',
          end: 'top 20%',
          toggleActions: 'play none none none',
          once: true
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        force3D: true
      });
    }, formRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (isSuccess && successRef.current) {
      gsap.from(successRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.4,
        ease: 'back.out(1.7)'
      });
    }
  }, [isSuccess]);

  const validate = (): boolean => {
    const newErrors: Partial<FeedbackFormData> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (formData.rating === 0) newErrors.rating = 1;
    if (!formData.comments.trim()) newErrors.comments = 'Comments are required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    try {
      await onSubmit(formData);
      setIsSuccess(true);
      setFormData({ name: '', email: '', rating: 0, comments: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Rating *
          </label>
          <StarRating
            rating={formData.rating}
            interactive
            onRatingChange={(rating) => setFormData({ ...formData, rating })}
            size="lg"
          />
          {errors.rating && <p className="mt-1 text-sm text-red-600">Please select a rating</p>}
        </div>

        <div>
          <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-2">
            Comments *
          </label>
          <textarea
            id="comments"
            rows={4}
            value={formData.comments}
            onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent ${
              errors.comments ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.comments && <p className="mt-1 text-sm text-red-600">{errors.comments}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
        </button>
      </form>

      {isSuccess && (
        <div
          ref={successRef}
          className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg"
        >
          <p className="text-green-800 font-semibold">
            Thank you for your feedback! We appreciate your input.
          </p>
        </div>
      )}
    </div>
  );
}
