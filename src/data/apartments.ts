
import type { Apartment } from '@/types';
import { BedDouble, Bath, Users, Wifi, Tv, Utensils, ParkingCircle, LocateFixed, Star, CalendarDays, Search, DollarSign, Coffee, Snowflake } from 'lucide-react';

export const amenitiesData = {
  wifi: { id: 'wifi', name: 'WiFi', icon: Wifi },
  tv: { id: 'tv', name: 'TV', icon: Tv },
  kitchen: { id: 'kitchen', name: 'Kitchen', icon: Utensils },
  parking: { id: 'parking', name: 'Parking', icon: ParkingCircle },
  coffee: { id: 'coffee', name: 'Coffee Maker', icon: Coffee },
  ac: { id: 'ac', name: 'Air Conditioning', icon: Snowflake },
};

export const apartments: Apartment[] = [
  {
    id: '1',
    slug: 'maitama-modern-penthouse',
    name: 'Maitama Modern Penthouse',
    location: 'Maitama, Abuja, Nigeria',
    pricePerNight: 450,
    rating: 4.9,
    images: [
      'https://i.ibb.co/RpHj0ZVP/image.png',
      'https://placehold.co/600x400/B8860B/FAFAFA.png',
      'https://placehold.co/600x400/D4AF37/FFFFFF.png',
    ],
    bedrooms: 3,
    bathrooms: 2,
    guests: 6,
    amenities: [amenitiesData.wifi, amenitiesData.tv, amenitiesData.kitchen, amenitiesData.ac],
    availability: { isAvailable: true, nextAvailableDate: '2024-08-15' },
    description: 'Experience luxury at its finest in this stunning penthouse with panoramic views of the city. Modern amenities, spacious rooms, and a prime location in Maitama make this the perfect city getaway.',
    host: { name: 'Aisha Bello', avatar: 'https://placehold.co/100x100/D4AF37/FAFAFA.png' },
    isFeatured: true,
  },
  {
    id: '2',
    slug: 'asokoro-serene-villa',
    name: 'Asokoro Serene Villa',
    location: 'Asokoro, Abuja, Nigeria',
    pricePerNight: 700,
    rating: 4.8,
    images: [
      'https://i.ibb.co/5Wgv9dwJ/image.png', 
      'https://placehold.co/600x400/B8860B/FAFAFA.png',
      'https://placehold.co/600x400/D4AF37/FFFFFF.png',
    ],
    bedrooms: 4,
    bathrooms: 3,
    guests: 8,
    amenities: [amenitiesData.wifi, amenitiesData.tv, amenitiesData.kitchen, amenitiesData.parking, amenitiesData.ac],
    availability: { isAvailable: false, nextAvailableDate: '2024-09-01' },
    description: 'Indulge in this beautiful villa in Asokoro. Private pool, lush gardens, and breathtaking city views await you.',
    host: { name: 'Babatunde Adebayo', avatar: 'https://placehold.co/100x100/B8860B/FAFAFA.png' },
    isFeatured: true,
  },
  {
    id: '3',
    slug: 'gwarinpa-cozy-duplex',
    name: 'Gwarinpa Cozy Duplex',
    location: 'Gwarinpa, Abuja, Nigeria',
    pricePerNight: 300,
    rating: 4.7,
    images: [
      'https://i.ibb.co/bMVcGkvJ/image.png',
      'https://placehold.co/600x400/B8860B/FAFAFA.png',
      'https://placehold.co/600x400/D4AF37/FFFFFF.png',
    ],
    bedrooms: 2,
    bathrooms: 1,
    guests: 4,
    amenities: [amenitiesData.wifi, amenitiesData.kitchen, amenitiesData.parking, amenitiesData.coffee],
    availability: { isAvailable: true },
    description: 'Escape to this cozy duplex in Gwarinpa. Perfect for a family stay, offering comfort and modern conveniences.',
    host: { name: 'Chinedu Okafor', avatar: 'https://placehold.co/100x100/D4AF37/FAFAFA.png' },
    isFeatured: true,
  },
  {
    id: '4',
    slug: 'wuse-urban-chic-flat',
    name: 'Wuse Urban Chic Flat',
    location: 'Wuse II, Abuja, Nigeria',
    pricePerNight: 350,
    rating: 4.6,
    images: [
      'https://i.ibb.co/ycYXjWDp/image.png',
      'https://placehold.co/600x400/B8860B/FAFAFA.png',
    ],
    bedrooms: 1,
    bathrooms: 1,
    guests: 2,
    amenities: [amenitiesData.wifi, amenitiesData.tv, amenitiesData.kitchen, amenitiesData.ac],
    availability: { isAvailable: true },
    description: 'Stylish and modern flat in the heart of Wuse II. Close to shops, restaurants, and nightlife.',
    host: { name: 'Fatima Ibrahim', avatar: 'https://placehold.co/100x100/B8860B/FAFAFA.png' },
    isFeatured: true,
  },
  {
    id: '5',
    slug: 'jabi-lakeside-retreat',
    name: 'Jabi Lakeside Retreat',
    location: 'Jabi, Abuja, Nigeria',
    pricePerNight: 220,
    rating: 4.5,
    images: [
      'https://i.ibb.co/WWQ7csHj/image.png',
      'https://placehold.co/600x400/B8860B/FAFAFA.png',
    ],
    bedrooms: 2,
    bathrooms: 2,
    guests: 4,
    amenities: [amenitiesData.wifi, amenitiesData.kitchen, amenitiesData.parking, amenitiesData.coffee],
    availability: { isAvailable: false, nextAvailableDate: '2024-10-10' },
    description: 'Peaceful retreat by Jabi Lake. Enjoy the serene environment, waterside views, and easy access to Jabi Lake Mall.',
    host: { name: 'Emeka Nwosu', avatar: 'https://placehold.co/100x100/D4AF37/FAFAFA.png' },
    isFeatured: true,
  }
];

export const getApartmentBySlug = (slug: string): Apartment | undefined => {
  return apartments.find(apartment => apartment.slug === slug);
};

export const getFeaturedApartments = (): Apartment[] => {
  return apartments.filter(apartment => apartment.isFeatured);
};
