"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Attractions from "@/components/sections/Attractions";
import About from "@/components/sections/About";
import Reviews from "@/components/sections/Reviews";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import BookingDialog from "@/components/ui/BookingDialog";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setBookingOpen(true);
    window.addEventListener("openBooking", handleOpen);
    return () => window.removeEventListener("openBooking", handleOpen);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Attractions />
        <About />
        <Reviews />
        <Contact />
      </main>
      <Footer />

      <AnimatePresence>
        {bookingOpen && (
          <BookingDialog onClose={() => setBookingOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
