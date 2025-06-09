
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-background via-secondary/30 to-background">
       <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <Image
          src="https://i.ibb.co/VcwdbTc6/image.png"
          alt="Luxe Shortlets background"
          layout="fill"
          objectFit="cover"
          className="opacity-10"
          priority
        />
      </div>
      <div className="container max-w-screen-xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl font-headline font-bold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
          Experience Unrivaled Luxury in Abuja
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-foreground/80 sm:text-xl">
          Discover curated short-term rentals in Nigeria's capital that redefine elegance and comfort. Your extraordinary stay begins here.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg px-8 py-3 text-lg">
            <Link href="/apartments">Explore Apartments</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 shadow-lg px-8 py-3 text-lg">
            <Link href="#featured">Featured Stays</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
