"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimateIn from "@/components/ui/AnimateIn";
import { IMAGES } from "@/data/images";
import { Calendar, MapPin } from "lucide-react";

export default function Hero() {
  const openBooking = () => window.dispatchEvent(new CustomEvent("openBooking"));

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={IMAGES.hero.src}
          alt={IMAGES.hero.alt}
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background/80" />
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <AnimateIn direction="down" delay={0.2}>
          <span className="text-secondary font-bold tracking-[0.3em] uppercase text-sm mb-6 block">
            The Pinnacle of Sri Lankan Luxury
          </span>
        </AnimateIn>

        <AnimateIn delay={0.4}>
          <h1 className="luxury-heading text-5xl md:text-8xl text-white font-bold leading-tight mb-8">
            Experience Ella <br />
            <span className="text-secondary font-serif italic">Like Never Before</span>
          </h1>
        </AnimateIn>

        <AnimateIn delay={0.6}>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium">
            Discover the hidden gems of Sri Lanka with a personalized,
            premium travel experience curated by local experts.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.8} direction="up">
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <motion.button
              onClick={openBooking}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 bg-secondary text-primary px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm shadow-2xl shadow-secondary/30 hover:shadow-secondary/50 transition-all"
            >
              <Calendar className="w-4 h-4" />
              Book Now
            </motion.button>
            <motion.a
              href="/#attractions"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 border-2 border-white/50 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              <MapPin className="w-4 h-4" />
              Explore Attractions
            </motion.a>
          </div>
        </AnimateIn>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-[10px] uppercase tracking-widest">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-4 bg-secondary"
          />
        </div>
      </motion.div>
    </section>
  );
}
