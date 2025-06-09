
import type { Apartment } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, BedDouble, Bath, Users, Star, DollarSign } from 'lucide-react';

interface ApartmentCardProps {
  apartment: Apartment;
  displayMode?: 'full' | 'compact';
}

export function ApartmentCard({ apartment, displayMode = 'full' }: ApartmentCardProps) {
  const isCompact = displayMode === 'compact';

  return (
    <Card className="overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full bg-card">
      <CardHeader className="p-0 relative">
        <Link href={`/apartments/${apartment.slug}`} className="block group">
          <Image
            src={apartment.images[0]}
            alt={`Image of ${apartment.name}`}
            width={600}
            height={isCompact ? 300 : 400} 
            className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${isCompact ? 'h-40 sm:h-44 md:h-48' : 'h-48 sm:h-52 md:h-56'}`}
            
          />
        </Link>
        {apartment.isFeatured && (
          <Badge variant="default" className="absolute top-3 right-3 bg-primary text-primary-foreground">Featured</Badge>
        )}
      </CardHeader>
      <CardContent className={`p-6 flex-grow ${isCompact ? 'pb-3' : ''}`}>
        <Link href={`/apartments/${apartment.slug}`}>
          <CardTitle className={`text-xl font-headline mb-2 hover:text-primary transition-colors ${isCompact ? '!text-lg !mb-1' : ''}`}>{apartment.name}</CardTitle>
        </Link>
        <div className="flex items-center text-sm text-muted-foreground mb-3">
          <MapPin className="w-4 h-4 mr-1.5 text-primary" />
          <span>{apartment.location}</span>
        </div>
        {!isCompact && (
          <>
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
              <div className="flex items-center" title={`${apartment.bedrooms} Bedrooms`}>
                <BedDouble className="w-4 h-4 mr-1 text-primary" /> {apartment.bedrooms}
              </div>
              <div className="flex items-center" title={`${apartment.bathrooms} Bathrooms`}>
                <Bath className="w-4 h-4 mr-1 text-primary" /> {apartment.bathrooms}
              </div>
              <div className="flex items-center" title={`Sleeps ${apartment.guests}`}>
                <Users className="w-4 h-4 mr-1 text-primary" /> {apartment.guests}
              </div>
              <div className="flex items-center" title={`${apartment.rating} Stars`}>
                <Star className="w-4 h-4 mr-1 text-yellow-500 fill-yellow-500" /> {apartment.rating}
              </div>
            </div>
            <p className="text-sm text-foreground/80 line-clamp-3 mb-4">{apartment.description}</p>
          </>
        )}
      </CardContent>
      {!isCompact && (
        <CardFooter className="p-6 border-t border-border/50 flex justify-between items-center">
          <div className="text-xl font-semibold text-primary flex items-center">
             <DollarSign className="w-5 h-5 mr-1"/> {apartment.pricePerNight}
            <span className="text-sm text-muted-foreground ml-1">/ night</span>
          </div>
          <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href={`/apartments/${apartment.slug}`}>View Details</Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
