"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimateIn from "@/components/ui/AnimateIn";
import { ShieldCheck, MapPin, Award } from "lucide-react";
import { IMAGES } from "@/data/images";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white dark:bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <AnimateIn direction="right">
          <div className="relative">
            <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl z-20">
              <Image 
                src={IMAGES.aboutGuide.src}
                alt={IMAGES.aboutGuide.alt}
                fill
                className="object-cover"
              />
            </div>
            {/* Aesthetic Background Elements */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10" />
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="absolute -bottom-10 right-10 glass p-8 rounded-2xl shadow-2xl z-30 max-w-xs"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <Award className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold luxury-heading text-lg">10+ Years</h4>
                  <p className="text-xs text-foreground/60 uppercase tracking-widest">Experience</p>
                </div>
              </div>
              <p className="text-sm italic">
                "Our mission is to provide a billion-dollar service to every traveler, showing the true heart of Ella."
              </p>
            </motion.div>
          </div>
        </AnimateIn>

        <AnimateIn direction="left" delay={0.2}>
          <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">
            Meet Your Guide
          </span>
          <h2 className="luxury-heading text-4xl md:text-6xl font-bold mb-8">
            Redefining the <br /> 
            <span className="text-primary font-serif italic">Tuk-Tuk Adventure</span>
          </h2>
          <p className="text-foreground/70 text-lg mb-10 leading-relaxed">
            Forget everything you know about traditional tours. We offer a premium, 
            luxurious approach to exploring the mountains of Sri Lanka. From hidden 
            waterfalls to private sunrise breakfasts, every detail is crafted for 
            the sophisticated traveler.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-accent flex items-center justify-center">
                <ShieldCheck className="text-secondary w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl luxury-heading mb-1">Unmatched Safety</h4>
                <p className="text-foreground/60">Professional, licensed guides with high-end, well-maintained vehicles.</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-accent flex items-center justify-center">
                <MapPin className="text-secondary w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl luxury-heading mb-1">Exclusive Routes</h4>
                <p className="text-foreground/60">Special access to private viewing spots away from the crowds.</p>
              </div>
            </div>
          </div>

          <button className="mt-12 bg-primary text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-secondary hover:text-primary transition-all shadow-xl">
            Learn More About Our Story
          </button>
        </AnimateIn>
      </div>
    </section>
  );
}
