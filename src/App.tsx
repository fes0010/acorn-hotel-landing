import Navigation from './components/Navigation/Navigation';
import HeroSection from './components/Hero/HeroSection';
import RoomsSection from './components/Rooms/RoomsSection';
import DiningSection from './components/Dining/DiningSection';
import EventsSection from './components/Events/EventsSection';
import ExteriorSection from './components/Exterior/ExteriorSection';
import GallerySection from './components/Gallery/GallerySection';
import TestimonialsSection from './components/Testimonials/TestimonialsSection';
import FAQSection from './components/FAQ/FAQSection';
import FeedbackSection from './components/Feedback/FeedbackSection';
import ContactSection from './components/Contact/ContactSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <main className="overflow-x-hidden">
        <HeroSection />
        <RoomsSection />
        <DiningSection />
        <EventsSection />
        <ExteriorSection />
        <GallerySection />
        <TestimonialsSection />
        <FAQSection />
        <FeedbackSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
