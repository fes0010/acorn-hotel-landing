# Acorn Hotel Landing Page

A modern, responsive landing page for Acorn Hotel in Kenya, featuring smooth GSAP animations and an elegant design.

## Features

- **Hero Section** with animated entrance
- **Rooms Gallery** with hover effects and lazy loading
- **Dining Section** showcasing culinary offerings
- **Events Section** highlighting weddings, ruracio ceremonies, meetings, and feasting
- **Exterior Section** with parallax scrolling
- **Testimonials** from satisfied guests
- **FAQ Section** with accordion animations
- **Feedback Form** for guest reviews
- **Contact Section** with booking functionality
- **Fully Responsive** design for all devices
- **GSAP Animations** throughout for smooth interactions
- **Accessibility** features including keyboard navigation and reduced motion support

## Technology Stack

- React 18+ with TypeScript
- Vite for fast development and building
- Tailwind CSS for styling
- GSAP 3.x with ScrollTrigger for animations
- Responsive design with mobile-first approach

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd acorn-hotel-landing
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
acorn-hotel-landing/
├── public/
│   └── images/          # Hotel images organized by category
├── src/
│   ├── components/      # React components
│   │   ├── Navigation/
│   │   ├── Hero/
│   │   ├── Rooms/
│   │   ├── Dining/
│   │   ├── Events/
│   │   ├── Exterior/
│   │   ├── Testimonials/
│   │   ├── FAQ/
│   │   ├── Feedback/
│   │   ├── Contact/
│   │   ├── Footer/
│   │   └── shared/
│   ├── types/           # TypeScript interfaces
│   ├── utils/           # Constants and utilities
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## Features Highlights

### Event Hosting
- Weddings (up to 300 guests)
- Ruracio Ceremonies (traditional Kenyan pre-wedding ceremonies)
- Corporate Meetings (up to 100 attendees)
- General Feasting & Relaxation

### Amenities
- Ample free parking
- 24/7 operations
- In-house dining
- Located in Kenya

## Customization

### Updating Content

Edit the constants in `src/utils/constants.ts` to update:
- Hotel information
- Room details
- Event types
- Testimonials
- FAQ items
- Navigation links

### Updating Images

Replace images in the `public/images/` directory, organized by category:
- `hero/` - Hero section background
- `rooms/` - Room images
- `dining/` - Dining area images
- `events/` - Event space images
- `exterior/` - Exterior and location images

### Styling

The project uses Tailwind CSS. Customize colors and theme in `tailwind.config.js`.

## Performance

- Lazy loading for images
- GSAP animations optimized for 60fps
- Responsive images with appropriate sizes
- Code splitting and tree shaking
- Reduced motion support for accessibility

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright © 2025 Acorn Hotel. All rights reserved.
