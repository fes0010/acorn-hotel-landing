export interface RoomData {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  hours: string;
  location: string;
  parking: boolean;
}

export interface NavigationLink {
  id: string;
  label: string;
  href: string;
}

export interface Testimonial {
  id: string;
  guestName: string;
  rating: number;
  review: string;
  date: string;
  avatar?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface FeedbackFormData {
  name: string;
  email: string;
  rating: number;
  comments: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export interface GalleryCategory {
  id: string;
  name: string;
  images: GalleryImage[];
}

export interface EventType {
  id: string;
  name: string;
  description: string;
  capacity?: string;
  image: string;
}

export interface AnimationConfig {
  duration: number;
  ease: string;
  stagger?: number;
  scrollTrigger?: {
    trigger: string;
    start: string;
    end?: string;
    scrub?: boolean;
  };
}
