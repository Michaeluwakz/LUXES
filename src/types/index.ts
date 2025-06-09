import type { LucideIcon } from 'lucide-react';

export interface Amenity {
  id: string;
  name: string;
  icon?: LucideIcon;
}

export interface Apartment {
  id: string;
  name: string;
  location: string;
  pricePerNight: number;
  rating: number; // 1-5
  images: string[]; // URLs
  bedrooms: number;
  bathrooms: number;
  guests: number;
  amenities: Amenity[];
  availability: { // Simplified availability for now
    isAvailable: boolean;
    nextAvailableDate?: string; // ISO date string
  };
  description: string;
  host: {
    name: string;
    avatar: string;
  };
  isFeatured?: boolean;
  slug: string;
}
