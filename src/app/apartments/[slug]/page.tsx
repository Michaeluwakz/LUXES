
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { getApartmentBySlug, apartments as allApartments } from '@/data/apartments';
import type { Apartment, Amenity as AmenityType } from '@/types';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Separator } from '@/components/ui/separator';
import { BedDouble, Bath, Users, Star, MapPin, DollarSign, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

interface ApartmentPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return allApartments.map((apartment) => ({
    slug: apartment.slug,
  }));
}

export default async function ApartmentPage({ params }: ApartmentPageProps) {
  const apartment = getApartmentBySlug(params.slug);

  if (!apartment) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-4xl font-headline text-destructive">Apartment Not Found</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Sorry, the apartment you are looking for does not exist.
          </p>
          <Button asChild className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/apartments">Back to Listings</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow py-12 md:py-16">
        <div className="container max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden rounded-xl shadow-2xl bg-card border-border/50">
            <CardHeader className="p-0">
              <Carousel className="w-full rounded-t-xl overflow-hidden">
                <CarouselContent>
                  {apartment.images.map((src, index) => (
                    <CarouselItem key={index}>
                      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[550px]">
                        <Image
                          src={src}
                          alt={`Image ${index + 1} of ${apartment.name}`}
                          layout="fill"
                          objectFit="cover"
                          priority={index === 0}
                          
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {apartment.images.length > 1 && (
                  <>
                    <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/70 hover:bg-background text-primary border-primary" />
                    <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/70 hover:bg-background text-primary border-primary" />
                  </>
                )}
              </Carousel>
            </CardHeader>
            <CardContent className="p-6 md:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
                <div className="lg:col-span-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h1 className="text-3xl md:text-4xl font-headline text-primary mb-2 sm:mb-0">{apartment.name}</h1>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < Math.floor(apartment.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-muted-foreground/50'}`}
                        />
                      ))}
                      <span className="ml-2 text-sm text-muted-foreground">({apartment.rating.toFixed(1)})</span>
                    </div>
                  </div>

                  <div className="flex items-center text-muted-foreground text-sm mb-6">
                    <MapPin className="w-4 h-4 mr-2 text-primary" />
                    <span>{apartment.location}</span>
                  </div>

                  <Separator className="my-6" />

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm mb-6">
                    <div className="flex items-center"><BedDouble className="w-3 h-3 sm:w-5 sm:h-5 mr-2 text-primary" /> {apartment.bedrooms} Bedrooms</div>
                    <div className="flex items-center"><Bath className="w-3 h-3 sm:w-5 sm:h-5 mr-2 text-primary" /> {apartment.bathrooms} Bathrooms</div>
                    <div className="flex items-center"><Users className="w-3 h-3 sm:w-5 sm:h-5 mr-2 text-primary" /> Sleeps {apartment.guests}</div>
                  </div>
                  
                  <h2 className="text-xl font-headline font-semibold text-foreground mb-3">About this space</h2>
                  <p className="text-foreground/80 leading-relaxed whitespace-pre-line">{apartment.description}</p>

                  <Separator className="my-8" />

                  <h2 className="text-xl font-headline font-semibold text-foreground mb-4">Amenities</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-3">
                    {apartment.amenities.map((amenity: AmenityType) => (
                      <div key={amenity.id} className="flex items-center text-sm">
                        {amenity.icon ? <amenity.icon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-primary" /> : <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-primary" />}
                        <span>{amenity.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <Card className="sticky top-24 p-6 shadow-lg rounded-lg bg-muted/30 border-primary/20">
                    <div className="flex items-center justify-between mb-4">
                       <div className="text-3xl font-bold text-primary flex items-center">
                        <DollarSign className="w-7 h-7 mr-1"/> {apartment.pricePerNight}
                        <span className="text-sm font-normal text-muted-foreground ml-1">/ night</span>
                      </div>
                      {apartment.availability.isAvailable ? (
                        <Badge variant="default" className="bg-green-600 text-white">Available</Badge>
                      ) : (
                        <Badge variant="destructive">Unavailable</Badge>
                      )}
                    </div>
                   
                    <p className="text-sm text-muted-foreground mb-1">
                      {apartment.availability.isAvailable 
                        ? "Ready for your stay!" 
                        : `Next available: ${apartment.availability.nextAvailableDate ? new Date(apartment.availability.nextAvailableDate).toLocaleDateString() : 'Contact host'}`}
                    </p>

                    <Button size="lg" className="w-full mt-6 bg-accent text-accent-foreground hover:bg-accent/90 text-lg">
                      {apartment.availability.isAvailable ? 'Book Now' : 'Inquire Availability'}
                    </Button>
                    <p className="text-xs text-center text-muted-foreground mt-3">Contact host for specific dates and booking.</p>
                    
                    <Separator className="my-6" />

                    <div className="text-center">
                        <h3 className="text-md font-headline font-semibold text-foreground mb-2">Hosted by {apartment.host.name}</h3>
                        <Image src={apartment.host.avatar} alt={apartment.host.name} width={80} height={80} className="rounded-full mx-auto mb-2 border-2 border-primary" />
                    </div>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
