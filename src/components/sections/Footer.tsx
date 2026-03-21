import { Landmark, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                <Landmark className="text-primary w-5 h-5" />
              </div>
              <div>
                <span className="luxury-heading text-xl font-bold tracking-tight text-white block">ELLA TRAVEL</span>
                <span className="text-secondary text-[9px] uppercase tracking-[0.3em]">Sri Lanka</span>
              </div>
            </div>
            <p className="text-white/60 max-w-sm mb-8 leading-relaxed text-sm">
              Providing world-class luxury tuk-tuk travel experiences in the heart of Ella, Sri Lanka. Your bespoke adventure awaits.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300 group">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="luxury-heading text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li><Link href="/#attractions" className="hover:text-secondary transition-colors">Attractions</Link></li>
              <li><Link href="/gallery" className="hover:text-secondary transition-colors">Gallery</Link></li>
              <li><Link href="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href="/#reviews" className="hover:text-secondary transition-colors">Traveler Reviews</Link></li>
              <li><Link href="/#contact" className="hover:text-secondary transition-colors">Contact & Booking</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="luxury-heading text-lg font-bold mb-6">Tours</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li><a href="#" className="hover:text-secondary transition-colors">Signature Day Tour</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Sunrise Nine Arch</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Waterfall Trail</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Custom Itinerary</a></li>
            </ul>

            <h4 className="luxury-heading text-lg font-bold mt-8 mb-4">Contact</h4>
            <ul className="space-y-2 text-white/60 text-xs">
              <li>+94 123 456 789</li>
              <li>hello@ellatravel.luxury</li>
              <li>Ella, Badulla, Sri Lanka</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 uppercase tracking-widest">
          <p>© 2026 Ella Travel. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
