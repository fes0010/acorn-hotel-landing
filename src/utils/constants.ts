import type { RoomData, NavigationLink, EventType, Testimonial, FAQItem } from '../types';

export const HOTEL_INFO = {
  name: 'The Acorn Sagana',
  tagline: 'Your Gateway to Comfort & Celebration',
  description: 'Experience exceptional hospitality in the heart of Sagana',
  location: 'Sagana, Kenya',
  contact: {
    phone: '0701-155-589',
    email: 'info@acornsagana.com',
    address: 'The Acorn Sagana, Sagana, Kenya',
    hours: 'Open 24/7',
    parking: true
  }
};

export const NAVIGATION_LINKS: NavigationLink[] = [
  { id: 'home', label: 'Home', href: '#hero' },
  { id: 'rooms', label: 'Rooms', href: '#rooms' },
  { id: 'dining', label: 'Dining', href: '#dining' },
  { id: 'events', label: 'Events', href: '#events' },
  { id: 'gallery', label: 'Gallery', href: '#gallery' },
  { id: 'testimonials', label: 'Testimonials', href: '#testimonials' },
  { id: 'faq', label: 'FAQ', href: '#faq' },
  { id: 'contact', label: 'Contact', href: '#contact' }
];

export const ROOMS: RoomData[] = [
  {
    id: 'room-1',
    title: 'Deluxe Suite',
    description: 'Spacious and elegantly furnished suite with modern amenities',
    image: '/images/rooms/Screenshot%20From%202025-10-30%2022-35-25.png',
    imageAlt: 'Deluxe Suite interior'
  },
  {
    id: 'room-2',
    title: 'Executive Room',
    description: 'Comfortable room perfect for business and leisure travelers',
    image: '/images/rooms/Screenshot%20From%202025-10-30%2022-35-03.png',
    imageAlt: 'Executive Room interior'
  },
  {
    id: 'room-3',
    title: 'Premium Suite',
    description: 'Luxurious accommodation with stunning views and premium facilities',
    image: '/images/rooms/WhatsApp%20Image%202025-11-01%20at%204.57.18%20PM%20(2).jpeg',
    imageAlt: 'Premium Suite interior'
  }
];

export const EVENT_TYPES: EventType[] = [
  {
    id: 'weddings',
    name: 'Weddings',
    description: 'Create unforgettable memories with our elegant wedding venues and comprehensive services',
    capacity: 'Up to 300 guests',
    image: '/images/events/Screenshot%20From%202025-10-30%2022-32-48.png'
  },
  {
    id: 'ruracio',
    name: 'Ruracio Ceremonies',
    description: 'Honor tradition with our authentic Kenyan ruracio ceremony hosting services',
    capacity: 'Flexible arrangements',
    image: '/images/events/WhatsApp%20Image%202025-11-01%20at%204.57.19%20PM%20(1).jpeg'
  },
  {
    id: 'meetings',
    name: 'Corporate Meetings',
    description: 'Professional meeting spaces equipped with modern amenities for productive gatherings',
    capacity: 'Up to 100 attendees',
    image: '/images/events/Screenshot%20From%202025-10-30%2022-34-39.png'
  },
  {
    id: 'feasting',
    name: 'General Feasting & Relaxation',
    description: 'Enjoy casual gatherings and celebrations in our comfortable dining spaces',
    capacity: 'Various group sizes',
    image: '/images/events/Screenshot%20From%202025-10-30%2022-33-19.png'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    guestName: 'Sarah Mwangi',
    rating: 5,
    review: 'Outstanding service and beautiful facilities. Perfect for our wedding! The staff went above and beyond to make our special day memorable.',
    date: '2024-10-15'
  },
  {
    id: '2',
    guestName: 'John Kamau',
    rating: 5,
    review: 'The ruracio ceremony was handled with such care and cultural respect. The team understood our traditions perfectly and created a wonderful atmosphere.',
    date: '2024-09-20'
  },
  {
    id: '3',
    guestName: 'Grace Wanjiru',
    rating: 4,
    review: 'Great location, ample parking, and excellent food. Highly recommend for any event! The rooms are spacious and well-maintained.',
    date: '2024-08-10'
  }
];

export const GALLERY_CATEGORIES = [
  {
    id: 'rooms',
    name: 'Rooms',
    images: [
      { id: 'room-1', src: '/images/gallery/rooms/Screenshot From 2025-10-30 22-35-03.png', alt: 'Hotel Room 1', category: 'rooms' },
      { id: 'room-2', src: '/images/gallery/rooms/Screenshot From 2025-10-30 22-35-25.png', alt: 'Hotel Room 2', category: 'rooms' },
      { id: 'room-3', src: '/images/gallery/rooms/WhatsApp Image 2025-11-01 at 4.57.18 PM (2).jpeg', alt: 'Hotel Room 3', category: 'rooms' }
    ]
  },
  {
    id: 'dining',
    name: 'Dining',
    images: [
      { id: 'dining-1', src: '/images/gallery/dining/Screenshot From 2025-10-30 22-32-35.png', alt: 'Dining Area 1', category: 'dining' },
      { id: 'dining-2', src: '/images/gallery/dining/Screenshot From 2025-10-30 22-33-12.png', alt: 'Dining Area 2', category: 'dining' },
      { id: 'dining-3', src: '/images/gallery/dining/WhatsApp Image 2025-11-01 at 4.57.15 PM (1).jpeg', alt: 'Dining Setup 1', category: 'dining' },
      { id: 'dining-4', src: '/images/gallery/dining/WhatsApp Image 2025-11-01 at 4.57.15 PM.jpeg', alt: 'Dining Setup 2', category: 'dining' },
      { id: 'dining-5', src: '/images/gallery/dining/WhatsApp Image 2025-11-01 at 4.57.16 PM (1).jpeg', alt: 'Dining Setup 3', category: 'dining' },
      { id: 'dining-6', src: '/images/gallery/dining/WhatsApp Image 2025-11-01 at 4.57.16 PM.jpeg', alt: 'Dining Setup 4', category: 'dining' },
      { id: 'dining-7', src: '/images/gallery/dining/WhatsApp Image 2025-11-01 at 4.57.18 PM.jpeg', alt: 'Dining Setup 5', category: 'dining' },
      { id: 'dining-8', src: '/images/gallery/dining/WhatsApp Image 2025-11-01 at 4.57.19 PM (2).jpeg', alt: 'Dining Setup 6', category: 'dining' },
      { id: 'dining-9', src: '/images/gallery/dining/WhatsApp Image 2025-11-01 at 4.57.19 PM (3).jpeg', alt: 'Dining Setup 7', category: 'dining' },
      { id: 'dining-10', src: '/images/gallery/dining/WhatsApp Image 2025-11-01 at 4.57.19 PM.jpeg', alt: 'Dining Setup 8', category: 'dining' }
    ]
  },
  {
    id: 'events',
    name: 'Events',
    images: [
      { id: 'event-1', src: '/images/gallery/events/Screenshot From 2025-10-30 22-32-17.png', alt: 'Event Space 1', category: 'events' },
      { id: 'event-2', src: '/images/gallery/events/Screenshot From 2025-10-30 22-32-48.png', alt: 'Event Space 2', category: 'events' },
      { id: 'event-3', src: '/images/gallery/events/Screenshot From 2025-10-30 22-33-19.png', alt: 'Event Space 3', category: 'events' },
      { id: 'event-4', src: '/images/gallery/events/Screenshot From 2025-10-30 22-34-39.png', alt: 'Event Space 4', category: 'events' },
      { id: 'event-5', src: '/images/gallery/events/Screenshot From 2025-10-30 22-35-43.png', alt: 'Event Space 5', category: 'events' },
      { id: 'event-6', src: '/images/gallery/events/WhatsApp Image 2025-11-01 at 4.57.18 PM (3).jpeg', alt: 'Event Setup 1', category: 'events' },
      { id: 'event-7', src: '/images/gallery/events/WhatsApp Image 2025-11-01 at 4.57.19 PM (1).jpeg', alt: 'Event Setup 2', category: 'events' },
      { id: 'event-8', src: '/images/gallery/events/WhatsApp Image 2025-11-01 at 4.57.20 PM (2).jpeg', alt: 'Event Setup 3', category: 'events' }
    ]
  },
  {
    id: 'exterior',
    name: 'Exterior',
    images: [
      { id: 'exterior-1', src: '/images/gallery/exterior/Screenshot From 2025-10-30 22-33-01.png', alt: 'Hotel Exterior 1', category: 'exterior' },
      { id: 'exterior-2', src: '/images/gallery/exterior/Screenshot From 2025-10-30 22-33-26.png', alt: 'Hotel Exterior 2', category: 'exterior' },
      { id: 'exterior-3', src: '/images/gallery/exterior/Screenshot From 2025-10-30 22-36-17.png', alt: 'Hotel Exterior 3', category: 'exterior' },
      { id: 'exterior-4', src: '/images/gallery/exterior/WhatsApp Image 2025-11-01 at 4.57.20 PM (3).jpeg', alt: 'Hotel Exterior 4', category: 'exterior' },
      { id: 'exterior-5', src: '/images/gallery/exterior/WhatsApp Image 2025-11-01 at 4.57.20 PM (4).jpeg', alt: 'Hotel Exterior 5', category: 'exterior' }
    ]
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: '1',
    question: 'What are your check-in and check-out times?',
    answer: 'Check-in is at 2:00 PM and check-out is at 11:00 AM. Early check-in and late check-out may be available upon request.',
    category: 'general'
  },
  {
    id: '2',
    question: 'Is parking available at the hotel?',
    answer: 'Yes, we offer ample free parking for all our guests and event attendees.',
    category: 'amenities'
  },
  {
    id: '3',
    question: 'What types of events can you host?',
    answer: 'We specialize in weddings, ruracio ceremonies, corporate meetings, and general feasting events. Our flexible spaces can accommodate various group sizes.',
    category: 'events'
  },
  {
    id: '4',
    question: 'Do you provide catering services?',
    answer: 'Yes, we have an in-house dining facility that provides catering for all events and daily meals for our guests.',
    category: 'dining'
  },
  {
    id: '5',
    question: 'What is the capacity for wedding events?',
    answer: 'Our wedding venues can accommodate up to 300 guests comfortably, with both indoor and outdoor options available.',
    category: 'events'
  },
  {
    id: '6',
    question: 'Are you experienced with traditional Kenyan ceremonies?',
    answer: 'Absolutely! We have extensive experience hosting ruracio and other traditional Kenyan ceremonies with cultural sensitivity and attention to detail.',
    category: 'events'
  }
];
