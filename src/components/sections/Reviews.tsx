"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateIn from "@/components/ui/AnimateIn";
import { Star, Quote, PenLine, CheckCircle2, User, ChevronLeft, ChevronRight } from "lucide-react";

const initialReviews = [
  {
    id: 1,
    name: "Alexandra Thompson",
    role: "Luxury Traveler · UK",
    text: "The best experience we had in Sri Lanka. The attention to detail and personal touch was incredible. Truly felt like a billionaire experience in a tuk-tuk!",
    rating: 5,
    date: "March 2025",
    avatar: "AT",
    tourType: "Signature Ella Day Tour",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Adventure Blogger · USA",
    text: "Ella is beautiful, but this tour made it magical. We saw sunrise spots that weren't on any map. Highly recommended for anyone wanting a premium tour.",
    rating: 5,
    date: "February 2025",
    avatar: "SJ",
    tourType: "Sunrise Nine Arch Experience",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Photography Enthusiast · Singapore",
    text: "The photo opportunities were endless. Our guide knew exactly where to go and when. The luxury vibe was consistent throughout the entire day.",
    rating: 5,
    date: "January 2025",
    avatar: "MC",
    tourType: "Waterfall & Nature Trail",
  },
  {
    id: 4,
    name: "Emma Rodriguez",
    role: "Honeymooner · Spain",
    text: "We came for our honeymoon and Ella Travel made it unforgettable. The sunset viewpoint recommendation was the most romantic moment of our entire trip.",
    rating: 5,
    date: "December 2024",
    avatar: "ER",
    tourType: "Custom Itinerary",
  },
  {
    id: 5,
    name: "David Kim",
    role: "Business Traveler · South Korea",
    text: "I only had one day in Ella and was worried about missing out. They packed the perfect itinerary — efficient, luxurious, and unforgettable.",
    rating: 4,
    date: "November 2024",
    avatar: "DK",
    tourType: "Signature Ella Day Tour",
  },
];

interface Review {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
  date: string;
  avatar: string;
  tourType: string;
}

function StarRating({ value, onChange }: { value: number; onChange?: (n: number) => void }) {
  const [hover, setHover] = useState(0);
  return (
    <div className="flex gap-1">
      {[1,2,3,4,5].map(star => (
        <button
          key={star}
          type="button"
          onClick={() => onChange?.(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          className={onChange ? "cursor-pointer" : "cursor-default"}
        >
          <Star
            className={`w-6 h-6 transition-colors ${star <= (hover || value) ? "fill-secondary text-secondary" : "text-white/20"}`}
          />
        </button>
      ))}
    </div>
  );
}

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [formOpen, setFormOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [newReview, setNewReview] = useState({ name: "", role: "", text: "", rating: 5, tourType: "Signature Ella Day Tour" });
  const [submitted, setSubmitted] = useState(false);

  const perPage = 3;
  const totalPages = Math.ceil(reviews.length / perPage);
  const displayed = reviews.slice(page * perPage, page * perPage + perPage);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    const newEntry: Review = {
      id: reviews.length + 1,
      name: newReview.name,
      role: newReview.role || "Verified Traveler",
      text: newReview.text,
      rating: newReview.rating,
      date: new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" }),
      avatar: newReview.name.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2),
      tourType: newReview.tourType,
    };
    setReviews([newEntry, ...reviews]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormOpen(false);
      setNewReview({ name: "", role: "", text: "", rating: 5, tourType: "Signature Ella Day Tour" });
      setPage(0);
    }, 2500);
  };

  return (
    <section id="reviews" className="py-28 px-6 bg-accent/30 dark:bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <AnimateIn direction="down">
            <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">Testimonials</span>
            <h2 className="luxury-heading text-4xl md:text-6xl font-bold">
              What Our Travelers Say
            </h2>
            <div className="flex items-center gap-3 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
              ))}
              <span className="text-foreground/60 text-sm ml-1">4.9 out of 5 · {reviews.length} reviews</span>
            </div>
          </AnimateIn>
          <AnimateIn direction="left" delay={0.2}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFormOpen(true)}
              className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-xs uppercase tracking-widest font-bold shadow-lg hover:bg-secondary hover:text-primary transition-all"
            >
              <PenLine className="w-4 h-4" /> Write a Review
            </motion.button>
          </AnimateIn>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <AnimatePresence mode="wait">
            {displayed.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-xl relative flex flex-col"
              >
                <div className="absolute top-8 right-8 opacity-10">
                  <Quote className="w-10 h-10 text-primary" />
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold luxury-heading text-lg leading-none">{review.name}</h4>
                    <p className="text-xs text-foreground/50 mt-1">{review.role}</p>
                  </div>
                </div>

                <StarRating value={review.rating} />
                <p className="text-foreground/70 text-sm mt-4 mb-5 italic leading-relaxed flex-1">&quot;{review.text}&quot;</p>

                <div className="flex items-center justify-between pt-4 border-t border-foreground/10">
                  <span className="text-[10px] uppercase tracking-widest text-secondary font-bold">{review.tourType}</span>
                  <span className="text-[10px] text-foreground/40">{review.date}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setPage(p => Math.max(0, p - 1))}
              disabled={page === 0}
              className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center disabled:opacity-30 hover:border-secondary hover:text-secondary transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${i === page ? "bg-secondary w-6" : "bg-foreground/20"}`}
              />
            ))}
            <button
              onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center disabled:opacity-30 hover:border-secondary hover:text-secondary transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Review Form Modal */}
      <AnimatePresence>
        {formOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6"
            style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }}
            onClick={e => { if (e.target === e.currentTarget) setFormOpen(false); }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              className="bg-white dark:bg-zinc-900 rounded-[2rem] p-10 w-full max-w-lg shadow-2xl"
            >
              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle2 className="w-16 h-16 text-secondary mx-auto mb-4" />
                  <h3 className="luxury-heading text-3xl font-bold mb-2">Thank You!</h3>
                  <p className="text-foreground/60">Your review has been published.</p>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="luxury-heading text-3xl font-bold">Share Your Experience</h3>
                    <button onClick={() => setFormOpen(false)} className="text-foreground/40 hover:text-foreground transition-colors">✕</button>
                  </div>
                  <form onSubmit={handleSubmitReview} className="space-y-5">
                    <div>
                      <label className="text-foreground/40 text-[10px] uppercase tracking-widest block mb-2">Your Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Emma Rodriguez"
                        value={newReview.name}
                        onChange={e => setNewReview({ ...newReview, name: e.target.value })}
                        className="w-full border border-foreground/10 rounded-2xl py-3 px-5 bg-accent/30 dark:bg-zinc-800 outline-none focus:border-secondary/60 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-foreground/40 text-[10px] uppercase tracking-widest block mb-2">Your Role / Location</label>
                      <input
                        type="text"
                        placeholder="e.g. Adventure Traveler · Germany"
                        value={newReview.role}
                        onChange={e => setNewReview({ ...newReview, role: e.target.value })}
                        className="w-full border border-foreground/10 rounded-2xl py-3 px-5 bg-accent/30 dark:bg-zinc-800 outline-none focus:border-secondary/60 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-foreground/40 text-[10px] uppercase tracking-widest block mb-2">Tour Type</label>
                      <select
                        value={newReview.tourType}
                        onChange={e => setNewReview({ ...newReview, tourType: e.target.value })}
                        className="w-full border border-foreground/10 rounded-2xl py-3 px-5 bg-accent/30 dark:bg-zinc-800 outline-none focus:border-secondary/60 transition-all text-sm"
                      >
                        <option>Signature Ella Day Tour</option>
                        <option>Sunrise Nine Arch Experience</option>
                        <option>Waterfall & Nature Trail</option>
                        <option>Custom Itinerary</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-foreground/40 text-[10px] uppercase tracking-widest block mb-2">Your Rating *</label>
                      <StarRating value={newReview.rating} onChange={r => setNewReview({ ...newReview, rating: r })} />
                    </div>
                    <div>
                      <label className="text-foreground/40 text-[10px] uppercase tracking-widest block mb-2">Your Review *</label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell us about your experience..."
                        value={newReview.text}
                        onChange={e => setNewReview({ ...newReview, text: e.target.value })}
                        className="w-full border border-foreground/10 rounded-2xl py-3 px-5 bg-accent/30 dark:bg-zinc-800 outline-none focus:border-secondary/60 transition-all text-sm resize-none"
                      />
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-primary text-white font-bold py-4 rounded-2xl uppercase tracking-widest text-sm flex items-center justify-center gap-2 hover:bg-secondary hover:text-primary transition-all"
                    >
                      <User className="w-4 h-4" /> Publish My Review
                    </motion.button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
