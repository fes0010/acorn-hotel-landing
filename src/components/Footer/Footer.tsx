import { HOTEL_INFO } from '../../utils/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleBookNow = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">{HOTEL_INFO.name}</h3>
            <p className="text-gray-400 mb-4">{HOTEL_INFO.tagline}</p>
            <p className="text-gray-400">{HOTEL_INFO.description}</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#rooms" className="text-gray-400 hover:text-white transition-colors">Rooms</a>
              </li>
              <li>
                <a href="#dining" className="text-gray-400 hover:text-white transition-colors">Dining</a>
              </li>
              <li>
                <a href="#events" className="text-gray-400 hover:text-white transition-colors">Events</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>{HOTEL_INFO.contact.phone}</li>
              <li>{HOTEL_INFO.contact.email}</li>
              <li>{HOTEL_INFO.contact.address}</li>
              <li className="text-primary-400 font-semibold">{HOTEL_INFO.location}</li>
            </ul>
            <button
              onClick={handleBookNow}
              className="mt-4 bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300"
            >
              Book Now
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} {HOTEL_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
