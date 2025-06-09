import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Building2 } from 'lucide-react';

export function Navbar() {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/apartments', label: 'Apartments' },
    { href: '/#contact', label: 'Contact Us' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <Building2 className="h-8 w-8 text-primary" />
          <span className="font-headline text-2xl font-bold text-primary">Luxe Shortlet</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
            <Link href="/#search">Find a Stay</Link>
          </Button>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background p-6">
              <div className="flex flex-col space-y-6">
                <Link href="/" className="flex items-center space-x-2 mb-4">
                  <Building2 className="h-8 w-8 text-primary" />
                  <span className="font-headline text-2xl font-bold text-primary">Luxe Shortlet</span>
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full mt-4">
                  <Link href="/#search">Find a Stay</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
