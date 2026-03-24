"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Landmark, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const navLinks = [
  { name: "Attractions", href: "/#attractions" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Reviews", href: "/#reviews" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const handleBookNow = () => {
    setMobileMenuOpen(false);
    // Dispatch custom event to open booking dialog
    window.dispatchEvent(new CustomEvent("openBooking"));
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 border-b",
          isScrolled 
            ? "bg-[#0a1a12]/95 backdrop-blur-xl shadow-2xl py-5 md:py-6 border-white/10" 
            : "bg-[#0a1a12]/40 backdrop-blur-md py-8 md:py-10 border-white/10"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                <Landmark className="text-primary w-8 h-8" />
              </div>
              <div>
                <span className="luxury-heading text-3xl font-bold tracking-tight text-white drop-shadow-lg block leading-none">
                  ELLA TRAVEL
                </span>
                <span className="text-secondary text-[11px] uppercase tracking-[0.3em] block mt-1">Sri Lanka</span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-12 lg:gap-14">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="text-sm uppercase tracking-widest font-semibold text-white/90 hover:text-secondary transition-colors duration-300 relative group py-2"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={handleBookNow}
              className="bg-secondary text-primary px-10 py-5 rounded-full text-sm uppercase tracking-widest font-bold shadow-lg hover:shadow-secondary/30 hover:scale-105 transition-all duration-300 flex items-center gap-3 ml-2"
            >
              <Calendar className="w-5 h-5" />
              Book Now
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-white z-[60] relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X className="w-8 h-8" />
                </motion.div>
              ) : (
                <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu className="w-8 h-8" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ background: "linear-gradient(135deg, #1B4332 0%, #0a1a12 60%, #1B4332 100%)" }}
          >
            {/* Decorative gold circles */}
            <div className="absolute top-20 right-10 w-48 h-48 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #D4AF37 0%, transparent 70%)" }} />
            <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #D4AF37 0%, transparent 70%)" }} />

            <div className="flex flex-col justify-center items-center h-full gap-2 px-8">
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-secondary text-xs uppercase tracking-[0.4em] mb-8"
              >
                Ella Travel — Sri Lanka
              </motion.p>

              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="w-full text-center"
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="luxury-heading text-4xl font-bold text-white/90 hover:text-secondary transition-colors block py-3 border-b border-white/10 last:border-none"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={handleBookNow}
                className="mt-10 bg-secondary text-primary px-10 py-4 rounded-full text-sm uppercase tracking-widest font-bold shadow-2xl flex items-center gap-3"
              >
                <Calendar className="w-4 h-4" />
                Book Your Tour
              </motion.button>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-6 flex gap-6"
              >
                <span className="text-white/40 text-xs">Tel: +94 123 456 789</span>
                <span className="text-white/40 text-xs">•</span>
                <span className="text-white/40 text-xs">hello@ellatravel.luxury</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
