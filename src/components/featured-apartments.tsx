
"use client";

import React from 'react';
import { getFeaturedApartments } from '@/data/apartments';
import { ApartmentCard } from './apartment-card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
// import { Card } from '@/components/ui/card'; // This import seems unused here after CarouselItem uses ApartmentCard
import Autoplay from "embla-carousel-autoplay";

export function FeaturedApartments() {
  const featured = getFeaturedApartments();

  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  if (!featured || featured.length === 0) {
    return null;
  }

  return (
    <section id="featured" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-headline font-semibold text-center mb-12 text-primary">
          Featured Stays
        </h2>
        <Carousel
          plugins={[autoplayPlugin.current]}
          opts={{
            align: "center", // Changed from "start" to "center"
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {featured.map((apartment) => (
              <CarouselItem key={apartment.id} className="md:basis-1/2 lg:basis-1/3 p-4">
                <ApartmentCard apartment={apartment} displayMode="compact" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex bg-background/80 hover:bg-background text-primary border-primary hover:text-primary/80" />
          <CarouselNext className="hidden sm:flex bg-background/80 hover:bg-background text-primary border-primary hover:text-primary/80" />
        </Carousel>
      </div>
    </section>
  );
}
