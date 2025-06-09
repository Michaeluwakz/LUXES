
"use client";

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { MapPin, CalendarDays, DollarSign, Search, Users } from 'lucide-react';
import { format } from 'date-fns';
import { useRouter, useSearchParams } from 'next/navigation';

export function SearchFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [location, setLocation] = useState(searchParams.get('location') || '');
  const [dates, setDates] = useState<{ from: Date | undefined; to: Date | undefined }>({
    from: searchParams.get('checkin') ? new Date(searchParams.get('checkin')!) : undefined,
    to: searchParams.get('checkout') ? new Date(searchParams.get('checkout')!) : undefined,
  });
  const [priceRange, setPriceRange] = useState<[number, number]>([
    parseInt(searchParams.get('minPrice') || '50', 10),
    parseInt(searchParams.get('maxPrice') || '1000', 10),
  ]);
  const [guests, setGuests] = useState(searchParams.get('guests') || '');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  useEffect(() => {
    if (isMounted) {
      setLocation(searchParams.get('location') || '');
      setDates({
        from: searchParams.get('checkin') ? new Date(searchParams.get('checkin')!) : undefined,
        to: searchParams.get('checkout') ? new Date(searchParams.get('checkout')!) : undefined,
      });
      setPriceRange([
        parseInt(searchParams.get('minPrice') || '50', 10),
        parseInt(searchParams.get('maxPrice') || '1000', 10),
      ]);
      setGuests(searchParams.get('guests') || '');
    }
  }, [searchParams, isMounted]);


  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const queryParams = new URLSearchParams();
    if (location) queryParams.set('location', location);
    if (dates.from) queryParams.set('checkin', format(dates.from, 'yyyy-MM-dd'));
    if (dates.to) queryParams.set('checkout', format(dates.to, 'yyyy-MM-dd'));
    queryParams.set('minPrice', priceRange[0].toString());
    queryParams.set('maxPrice', priceRange[1].toString());
    if (guests) queryParams.set('guests', guests);
    
    router.push(`/apartments?${queryParams.toString()}`);
  };
  
  if (!isMounted) {
    return null; // Or a loading skeleton
  }

  return (
    <section id="search" className="py-12 md:py-16 bg-background">
      <div className="container max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-headline font-semibold text-center mb-8 text-primary">
          Find Your Perfect Stay
        </h2>
        <form onSubmit={handleSearch} className="p-6 md:p-8 bg-card shadow-xl rounded-xl border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div>
              <Label htmlFor="location" className="flex items-center mb-2 text-sm font-medium text-foreground/80">
                <MapPin className="w-4 h-4 mr-2 text-primary" /> Location
              </Label>
              <Input
                id="location"
                type="text"
                placeholder="e.g., Maitama, Abuja"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="bg-background border-input focus:ring-primary"
              />
            </div>
            <div>
              <Label htmlFor="dates" className="flex items-center mb-2 text-sm font-medium text-foreground/80">
                <CalendarDays className="w-4 h-4 mr-2 text-primary" /> Dates
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="dates"
                    variant="outline"
                    className="w-full justify-start text-left font-normal bg-background border-input hover:bg-muted/50 focus:ring-primary"
                  >
                    {dates.from ? (
                      dates.to ? (
                        <>
                          {format(dates.from, "LLL dd, y")} - {format(dates.to, "LLL dd, y")}
                        </>
                      ) : (
                        format(dates.from, "LLL dd, y")
                      )
                    ) : (
                      <span>Pick a date range</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-card" align="start">
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={dates.from}
                    selected={{ from: dates.from, to: dates.to }}
                    onSelect={(range) => range && setDates({ from: range.from, to: range.to })}
                    numberOfMonths={2}
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <Label htmlFor="guests" className="flex items-center mb-2 text-sm font-medium text-foreground/80">
                <Users className="w-4 h-4 mr-2 text-primary" /> Guests
              </Label>
              <Select value={guests} onValueChange={setGuests}>
                <SelectTrigger id="guests" className="bg-background border-input focus:ring-primary">
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent className="bg-card">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <SelectItem key={num} value={num.toString()}>{num} Guest{num > 1 ? 's' : ''}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="md:col-span-2 lg:col-span-1">
              <Label htmlFor="price" className="flex items-center mb-2 text-sm font-medium text-foreground/80">
                <DollarSign className="w-4 h-4 mr-2 text-primary" /> Price Range
              </Label>
              <div className="mt-2.5">
                 <Slider
                    id="price"
                    min={0}
                    max={2000}
                    step={50}
                    value={[priceRange[0], priceRange[1]]}
                    onValueChange={(value) => setPriceRange([value[0], value[1]])}
                    className="[&_button]:bg-primary [&_span[data-radix-collection-item]]:bg-primary/80"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
              </div>
            </div>
          </div>
          <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-base">
            <Search className="w-5 h-5 mr-2" /> Search Apartments
          </Button>
        </form>
      </div>
    </section>
  );
}
