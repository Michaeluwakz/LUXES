
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/hero-section';
import { FeaturedApartments } from '@/components/featured-apartments';
import { SearchFilter } from '@/components/search-filter';
import { ContactForm } from '@/components/contact-form';
// import { ApartmentListings } from '@/components/apartment-listings'; // Removed this import
import { Suspense } from 'react';

function SearchFilterFallback() {
  return <div className="h-[300px] w-full bg-muted/30 animate-pulse rounded-xl container max-w-screen-lg my-12 md:my-16" />
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <Suspense fallback={<SearchFilterFallback/>}>
           <SearchFilter />
        </Suspense>
        <FeaturedApartments />
        {/* <ApartmentListings /> Removed this component */}
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
