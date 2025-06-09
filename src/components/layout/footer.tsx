import Link from 'next/link';
import { Building2, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 text-muted-foreground py-12 mt-auto">
      <div className="container max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Building2 className="h-8 w-8 text-primary" />
              <span className="font-headline text-2xl font-bold text-primary">Luxe Shortlet</span>
            </Link>
            <p className="text-sm">Premium short-term apartment rentals for your exquisite taste.</p>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold text-foreground mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/apartments" className="hover:text-primary transition-colors">All Apartments</Link></li>
              <li><Link href="/#contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold text-foreground mb-3">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={24} />
              </Link>
              <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={24} />
              </Link>
              <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={24} />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-8 text-center text-sm">
          <p>&copy; {currentYear} Luxe Shortlet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
