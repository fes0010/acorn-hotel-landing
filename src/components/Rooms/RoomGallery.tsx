import type { RoomData } from '../../types';
import RoomCard from './RoomCard';

interface RoomGalleryProps {
  rooms: RoomData[];
}

export default function RoomGallery({ rooms }: RoomGalleryProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {rooms.map((room, index) => (
        <RoomCard key={room.id} room={room} index={index} />
      ))}
    </div>
  );
}
