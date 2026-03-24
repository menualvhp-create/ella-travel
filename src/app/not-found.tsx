import Link from "next/link";
import { MapPin, Home, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center" style={{ background: "linear-gradient(135deg, #1B4332 0%, #0a1a12 100%)" }}>
      {/* Gold decorative circle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5" style={{ background: "radial-gradient(circle, #D4AF37 0%, transparent 70%)" }} />
      </div>

      <div className="relative z-10 max-w-xl">
        <p className="text-secondary text-[10rem] font-bold luxury-heading leading-none opacity-20 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">404</p>
        
        <div className="relative">
          <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <MapPin className="w-10 h-10 text-secondary" />
          </div>
          <h1 className="luxury-heading text-5xl md:text-6xl font-bold text-white mb-4">Lost in the Mist</h1>
          <p className="text-white/60 text-lg mb-10 leading-relaxed">
            Like the morning mist over Ella&apos;s mountains, this page seems to have disappeared. Let us guide you back to safety.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="flex items-center gap-2 justify-center bg-secondary text-primary px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:shadow-xl hover:shadow-secondary/30 transition-all hover:scale-105">
              <Home className="w-4 h-4" /> Back to Home
            </Link>
            <Link href="/#contact" className="flex items-center gap-2 justify-center border border-white/20 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:border-secondary hover:text-secondary transition-all">
              <Phone className="w-4 h-4" /> Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
