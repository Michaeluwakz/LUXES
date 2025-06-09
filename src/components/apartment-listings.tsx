import { apartments } from '@/data/apartments';
import { ApartmentCard } from './apartment-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function ApartmentListings() {
  // For homepage, show a limited number. For a full listing page, show all or paginate.
  const apartmentsToShow = apartments.slice(0, 6); // Show first 6 for example

  if (!apartmentsToShow || apartmentsToShow.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl font-headline font-semibold text-primary mb-4 sm:mb-0 text-center sm:text-left">
            Discover Your Next Getaway
            </h2>
            <Button asChild variant="outline" className="border-accent text-accent hover:text-accent-foreground hover:bg-accent/90">
                <Link href="/apartments">View All Apartments</Link>
            </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {apartmentsToShow.map((apartment) => (
            <ApartmentCard key={apartment.id} apartment={apartment} />
          ))}
        </div>
      </div>
    </section>
  );
}
