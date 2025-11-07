import SectionHeader from '../shared/SectionHeader';
import RoomGallery from './RoomGallery';
import { ROOMS } from '../../utils/constants';

export default function RoomsSection() {
  return (
    <section id="rooms" className="py-12 sm:py-16 md:py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Our Rooms" 
          subtitle="Experience comfort and elegance in our thoughtfully designed accommodations"
        />
        <RoomGallery rooms={ROOMS} />
      </div>
    </section>
  );
}
