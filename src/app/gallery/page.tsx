"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, ChevronLeft, ChevronRight, RotateCcw, ImageIcon, VideoIcon, Focus } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AnimateIn from "@/components/ui/AnimateIn";
import { IMAGES } from "@/data/images";

type MediaType = "all" | "photo" | "video" | "360";

const galleryItems = [
  { id: 1, type: "photo", title: "Nine Arch Bridge", src: IMAGES.nineArch.src, cat: "Architecture", description: "The iconic nine arch bridge surrounded by lush jungle." },
  { id: 2, type: "photo", title: "Little Adam's Peak", src: IMAGES.littleAdams.src, cat: "Nature", description: "Breathtaking panoramic views from the summit." },
  { id: 3, type: "photo", title: "Ravana Falls", src: IMAGES.ravanaFalls.src, cat: "Waterfall", description: "The majestic cascading falls of Ravana." },
  { id: 4, type: "photo", title: "Ella Landscape", src: IMAGES.hero.src, cat: "Scenery", description: "The stunning rolling hills and mist of Ella." },
  { id: 5, type: "photo", title: "Tea Plantation", src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1200", cat: "Culture", description: "Endless rows of pristine tea bushes." },
  { id: 6, type: "photo", title: "Tuk Tuk Experience", src: "https://images.unsplash.com/photo-1578507065211-1c0a57a56a90?auto=format&fit=crop&q=80&w=1200", cat: "Experience", description: "Your premium tuk tuk adventure." },
  { id: 7, type: "video", title: "Nine Arch Bridge Video", src: "https://www.youtube.com/embed/LXb3EKWsInQ", thumbnail: IMAGES.nineArch.src, cat: "Architecture", description: "Watch the Nine Arch Bridge in action with trains passing." },
  { id: 8, type: "video", title: "Ella Travel Guide", src: "https://www.youtube.com/embed/R3gOrUEWRY0", thumbnail: IMAGES.hero.src, cat: "Guides", description: "A complete travel guide to Ella, Sri Lanka." },
  { id: 9, type: "360", title: "Little Adam's Peak 360°", src: "https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https://pannellum.org/images/alma.jpg", thumbnail: IMAGES.littleAdams.src, cat: "Nature", description: "Immersive 360° panoramic view from Little Adam's Peak." },
  { id: 10, type: "360", title: "Ella Village 360°", src: "https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https://pannellum.org/images/from-tree.jpg", thumbnail: IMAGES.hero.src, cat: "Scenery", description: "360° view of the beautiful Ella village." },
  { id: 11, type: "photo", title: "Sunrise Mist", src: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=1200", cat: "Sunrise", description: "The ethereal morning mist rolling over the mountains." },
  { id: 12, type: "photo", title: "Demodara Loop", src: "https://images.unsplash.com/photo-1510797215324-95aa89f43c33?auto=format&fit=crop&q=80&w=1200", cat: "Architecture", description: "The spectacular Demodara railway loop." },
];

const typeIcons: Record<string, React.ElementType> = { photo: ImageIcon, video: VideoIcon, "360": Focus };

export default function GalleryPage() {
  const [filter, setFilter] = useState<MediaType>("all");
  const [selected, setSelected] = useState<typeof galleryItems[0] | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filtered = filter === "all" ? galleryItems : galleryItems.filter(i => i.type === filter);

  const openItem = (item: typeof galleryItems[0]) => {
    setSelected(item);
    setSelectedIndex(filtered.findIndex(i => i.id === item.id));
  };
  const closeItem = () => setSelected(null);
  const prevItem = () => {
    const newIdx = (selectedIndex - 1 + filtered.length) % filtered.length;
    setSelectedIndex(newIdx);
    setSelected(filtered[newIdx]);
  };
  const nextItem = () => {
    const newIdx = (selectedIndex + 1) % filtered.length;
    setSelectedIndex(newIdx);
    setSelected(filtered[newIdx]);
  };

  const tabs: { label: string; value: MediaType; icon: React.ElementType }[] = [
    { label: "All", value: "all", icon: ImageIcon },
    { label: "Photos", value: "photo", icon: ImageIcon },
    { label: "Videos", value: "video", icon: VideoIcon },
    { label: "360° Views", value: "360", icon: Focus },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-accent/30 dark:bg-zinc-950">
        {/* Hero Banner */}
        <div className="relative h-72 md:h-96 overflow-hidden">
          <Image src={IMAGES.hero.src} alt="Gallery" fill className="object-cover brightness-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <AnimateIn direction="down">
              <span className="text-secondary text-xs font-bold uppercase tracking-[0.3em] block mb-3">Media Gallery</span>
              <h1 className="luxury-heading text-5xl md:text-7xl font-bold text-white">
                Gallery & <span className="italic text-secondary">Experiences</span>
              </h1>
              <p className="text-white/60 mt-4 max-w-lg mx-auto">Photos, videos and 360° panoramic views from your next luxury adventure.</p>
            </AnimateIn>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="sticky top-20 z-30 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-foreground/5 py-4">
          <div className="max-w-7xl mx-auto px-6 flex items-center gap-4">
            {tabs.map(tab => (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  filter === tab.value
                    ? "bg-primary text-white shadow-lg"
                    : "text-foreground/50 hover:text-foreground"
                }`}
              >
                <tab.icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            ))}
            <span className="ml-auto text-xs text-foreground/40">{filtered.length} items</span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence>
              {filtered.map((item, i) => {
                const Icon = typeIcons[item.type];
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: i * 0.04 }}
                    whileHover={{ y: -4 }}
                    onClick={() => openItem(item)}
                    className={`relative cursor-pointer rounded-2xl overflow-hidden shadow-lg group ${i === 0 || i === 7 ? "md:col-span-2 md:row-span-2" : ""}`}
                    style={{ aspectRatio: i === 0 || i === 7 ? "1" : "3/4" }}
                  >
                    <Image
                      src={(item as { thumbnail?: string }).thumbnail || item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Type Badge */}
                    <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold flex items-center gap-1.5">
                      <Icon className="w-3 h-3 text-secondary" />
                      {item.type === "360" ? "360°" : item.type}
                    </div>
                    {/* Play button for video/360 */}
                    {(item.type === "video" || item.type === "360") && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-14 h-14 bg-secondary/90 rounded-full flex items-center justify-center shadow-xl">
                          {item.type === "video" ? <Play className="w-6 h-6 text-primary ml-1" fill="currentColor" /> : <RotateCcw className="w-6 h-6 text-primary" />}
                        </div>
                      </div>
                    )}
                    {/* Title */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="text-white font-bold text-sm">{item.title}</p>
                      <p className="text-white/60 text-xs">{item.cat}</p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>
      <Footer />

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center"
            style={{ background: "rgba(0,0,0,0.95)", backdropFilter: "blur(20px)" }}
          >
            {/* Close */}
            <button onClick={closeItem} className="absolute top-6 right-6 text-white/60 hover:text-white z-10">
              <X className="w-8 h-8" />
            </button>

            {/* Navigation */}
            <button onClick={prevItem} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white z-10 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-secondary transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={nextItem} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white z-10 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-secondary transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              key={selected.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl w-full mx-12"
            >
              {selected.type === "photo" ? (
                <div className="relative w-full" style={{ maxHeight: "80vh", aspectRatio: "16/10" }}>
                  <Image src={selected.src} alt={selected.title} fill className="object-contain rounded-2xl" />
                </div>
              ) : (
                <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <iframe
                    src={selected.src}
                    className="w-full h-full"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; xr-spatial-tracking"
                    title={selected.title}
                  />
                </div>
              )}
              <div className="mt-4 text-center">
                <h3 className="text-white luxury-heading text-2xl font-bold">{selected.title}</h3>
                <p className="text-white/50 mt-1">{selected.description}</p>
                <p className="text-secondary text-xs uppercase tracking-widest mt-2 font-bold">{selected.cat}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
