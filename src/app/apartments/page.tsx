"use client"; 

import { Suspense } from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { SearchFilter } from '@/components/search-filter';
import { ApartmentCard } from '@/components/apartment-card';
import { apartments as allApartmentsData } from '@/data/apartments'; 
import type { Apartment } from '@/types';
import { useSearchParams } from 'next/navigation';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2 } from 'lucide-react';

function filterApartments(apartments: Apartment[], searchParams: URLSearchParams): Apartment[] {
  let filtered = [...apartments];

  const location = searchParams.get('location')?.toLowerCase();
  if (location) {
    filtered = filtered.filter(apt => apt.location.toLowerCase().includes(location));
  }

  const guestsParam = searchParams.get('guests');
  if (guestsParam) {
    const guests = parseInt(guestsParam, 10);
    if (!isNaN(guests)) {
      filtered = filtered.filter(apt => apt.guests >= guests);
    }
  }
  
  const minPriceParam = searchParams.get('minPrice');
  if (minPriceParam) {
    const minPrice = parseInt(minPriceParam, 10);
    if(!isNaN(minPrice)){
        filtered = filtered.filter(apt => apt.pricePerNight >= minPrice);
    }
  }

  const maxPriceParam = searchParams.get('maxPrice');
  if (maxPriceParam) {
     const maxPrice = parseInt(maxPriceParam, 10);
     if(!isNaN(maxPrice)){
        filtered = filtered.filter(apt => apt.pricePerNight <= maxPrice);
     }
  }
  
  // Placeholder for date filtering
  // const checkin = searchParams.get('checkin');
  // const checkout = searchParams.get('checkout');
  // if (checkin && checkout) { ... }

  return filtered;
}

function ApartmentsPageContent() {
  const searchParams = useSearchParams();
  const filteredApartments = filterApartments(allApartmentsData, searchParams);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <SearchFilter />
        <section className="py-12 md:py-16 bg-background">
          <div className="container max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-headline font-semibold text-center mb-10 text-primary">
              Explore Our Apartments
            </h1>
            {filteredApartments.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredApartments.map((apartment) => (
                  <ApartmentCard key={apartment.id} apartment={apartment} />
                ))}
              </div>
            ) : (
              <Alert className="max-w-lg mx-auto bg-card border-primary/30">
                <AlertTitle className="font-headline text-primary">No Apartments Found</AlertTitle>
                <AlertDescription className="text-foreground/80">
                  Sorry, no apartments match your current search criteria. Try adjusting your filters.
                </AlertDescription>
              </Alert>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


export default function ApartmentsPage() {
  return (
    <Suspense fallback={<FullPageLoader />}>
      <ApartmentsPageContent />
    </Suspense>
  );
}

function FullPageLoader() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-background">
      <Loader2 className="h-16 w-16 animate-spin text-primary" />
      <p className="mt-4 text-lg text-foreground/80">Loading luxurious stays...</p>
    </div>
  );
}

function SearchFilterFallback() {
  return <div className="h-[300px] w-full bg-muted/30 animate-pulse rounded-xl container max-w-screen-lg my-12 md:my-16" />
}
