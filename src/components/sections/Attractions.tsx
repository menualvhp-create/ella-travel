"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimateIn from "@/components/ui/AnimateIn";
import { ArrowRight, Star } from "lucide-react";
import { IMAGES } from "@/data/images";

const attractions = [
  {
    title: "Nine Arch Bridge",
    description: "A marvel of colonial-era engineering, surrounded by lush jungle and tea fields.",
    image: IMAGES.nineArch,
    rating: 4.9,
    category: "Architecture",
  },
  {
    title: "Little Adam's Peak",
    description: "Breathtaking panoramic views of the Ella Gap and surrounding mountain ranges.",
    image: IMAGES.littleAdams,
    rating: 4.8,
    category: "Nature",
  },
  {
    title: "Ravana Falls",
    description: "One of the widest waterfalls in the country, steeped in ancient mythical legends.",
    image: IMAGES.ravanaFalls,
    rating: 4.7,
    category: "Waterfall",
  },
  {
    title: "Ella Rock",
    description: "A challenging yet rewarding hike through tea estates and dense forests, culminating in stunning 360° views of the surrounding valleys.",
    image: IMAGES.ellaRock,
    rating: 4.9,
    category: "Hiking",
  },
  {
    title: "Demodara Railway Loop",
    description: "An engineering masterpiece where the train spirals under itself — one of the most unique railway loops in the world.",
    image: IMAGES.demodaraLoop,
    rating: 4.8,
    category: "Architecture",
  },
  {
    title: "Kuda Ravana Ella Waterfall",
    description: "A hidden gem tucked in the jungle — a serene, lesser-known cascade perfect for a tranquil escape from the crowds.",
    image: IMAGES.kudaRavana,
    rating: 4.6,
    category: "Waterfall",
  },
  {
    title: "Diyaluma Falls",
    description: "Sri Lanka's second highest waterfall, cascading 220 metres over dramatic rock ledges into natural pools below.",
    image: IMAGES.diyaluma,
    rating: 4.8,
    category: "Waterfall",
  },
  {
    title: "Nildiya Pokuna",
    description: "A mystical natural rock pool nestled deep within an ancient forest, shrouded in legends and breathtaking natural beauty.",
    image: IMAGES.nildiyaPokuna,
    rating: 4.7,
    category: "Nature",
  },
  {
    title: "Baker's Bend",
    description: "A scenic bend on the iconic Ella–Badulla highway offering sweeping panoramic views of the misty valley below.",
    image: IMAGES.bakersBend,
    rating: 4.6,
    category: "Viewpoint",
  },
  {
    title: "Lipton's Seat",
    description: "Sir Thomas Lipton's favourite viewpoint — a majestic hilltop overlooking endless rolling tea estates stretching to the horizon.",
    image: IMAGES.liptonsSeat,
    rating: 4.9,
    category: "Viewpoint",
  },
];

export default function Attractions() {
  return (
    <section id="attractions" className="py-24 px-6 bg-accent dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <AnimateIn direction="left" className="max-w-xl">
            <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">
              Curated Destinations
            </span>
            <h2 className="luxury-heading text-4xl md:text-6xl font-bold mb-6">
              The Finest Sights <br /> of Ella
            </h2>
            <p className="text-foreground/70 text-lg">
              Explore the most iconic and hidden locations in Ella, 
              personally selected for their beauty and luxury appeal.
            </p>
          </AnimateIn>
          
          <AnimateIn direction="right" delay={0.2}>
            <button className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm group">
              View All Places
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </AnimateIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {attractions.map((item, i) => (
            <AnimateIn key={item.title} delay={(i % 3) * 0.15}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="group relative bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500"
              >
                <div className="relative h-[400px] overflow-hidden">
                  <Image
                    src={item.image.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute top-6 right-6 glass px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4 fill-secondary text-secondary" />
                    <span className="text-xs font-bold">{item.rating}</span>
                  </div>
                </div>

                <div className="p-8">
                  <span className="text-secondary text-[10px] uppercase font-bold tracking-widest mb-2 block">
                    {item.category}
                  </span>
                  <h3 className="luxury-heading text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <button className="text-primary dark:text-secondary text-xs uppercase font-bold tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                    Explore Details <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
