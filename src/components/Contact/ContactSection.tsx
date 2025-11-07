import SectionHeader from '../shared/SectionHeader';
import { HOTEL_INFO } from '../../utils/constants';

export default function ContactSection() {
  const handleBookNow = () => {
    window.location.href = `mailto:${HOTEL_INFO.contact.email}?subject=Booking Inquiry`;
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Contact Us" 
          subtitle="Get in touch with us for bookings and inquiries"
        />
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">{HOTEL_INFO.contact.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">{HOTEL_INFO.contact.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-600">{HOTEL_INFO.contact.address}</p>
                    <p className="text-primary-600 font-semibold mt-1">{HOTEL_INFO.location}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Hours</p>
                    <p className="text-gray-600">{HOTEL_INFO.contact.hours}</p>
                  </div>
                </div>
                
                {HOTEL_INFO.contact.parking && (
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Parking</p>
                      <p className="text-gray-600">Ample free parking available</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="bg-primary-600 text-white p-6 sm:p-8 rounded-lg shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Ready to Book?</h3>
              <p className="text-sm sm:text-base mb-4 sm:mb-6">
                Contact us today to make a reservation or inquire about our rooms, events, and services.
              </p>
              <button
                onClick={handleBookNow}
                className="w-full bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
