"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Users, MapPin, ChevronRight, CheckCircle2, Star } from "lucide-react";

const tours = [
  { id: "signature", name: "Signature Ella Day Tour", price: 85, duration: "8 hours", highlights: ["Nine Arch Bridge", "Little Adam's Peak", "Ella Rock Viewpoint"], rating: 4.9 },
  { id: "sunrise", name: "Sunrise Nine Arch Experience", price: 65, duration: "4 hours", highlights: ["Early Morning Bridge", "Tea Plantation Walk", "Breakfast Included"], rating: 5.0 },
  { id: "falls", name: "Waterfall & Nature Trail", price: 70, duration: "6 hours", highlights: ["Ravana Falls", "Bamboo Forest", "Swimming Stop"], rating: 4.8 },
  { id: "custom", name: "Custom Itinerary", price: 120, duration: "Full Day", highlights: ["Your Choice", "Personalized Route", "Flexible Timing"], rating: 5.0 },
];

const steps = ["Choose Tour", "Trip Details", "Confirm & Pay"];

interface BookingFormData {
  tour: string;
  date: string;
  guests: number;
  name: string;
  email: string;
  phone: string;
  notes: string;
}

export default function BookingDialog({ onClose }: { onClose?: () => void }) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<BookingFormData>({ tour: "", date: "", guests: 2, name: "", email: "", phone: "", notes: "" });
  const [confirmed, setConfirmed] = useState(false);

  const selectedTour = tours.find(t => t.id === form.tour);
  const total = selectedTour ? selectedTour.price * form.guests : 0;

  const canNext = () => {
    if (step === 0) return !!form.tour;
    if (step === 1) return !!form.date && !!form.name && !!form.email;
    return true;
  };

  const handleConfirm = () => {
    setConfirmed(true);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(12px)" }}>
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0 }}
        className="bg-white dark:bg-zinc-900 rounded-[2.5rem] w-full max-w-2xl shadow-2xl overflow-hidden"
        style={{ maxHeight: "90vh", overflowY: "auto" }}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white dark:bg-zinc-900 px-8 pt-8 pb-4 border-b border-foreground/10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-secondary text-xs uppercase tracking-widest font-bold">Ella Travel</p>
              <h2 className="luxury-heading text-2xl font-bold">Book Your Tour</h2>
            </div>
            {onClose && (
              <button onClick={onClose} className="text-foreground/40 hover:text-foreground p-2 rounded-full hover:bg-accent/50 transition-colors">
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Step indicator */}
          {!confirmed && (
            <div className="flex items-center gap-2">
              {steps.map((s, i) => (
                <div key={s} className="flex items-center gap-2 flex-1">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${i < step ? "bg-secondary text-primary" : i === step ? "bg-primary text-white" : "bg-foreground/10 text-foreground/30"}`}>
                    {i < step ? <CheckCircle2 className="w-4 h-4" /> : i + 1}
                  </div>
                  <span className={`text-xs font-semibold hidden sm:block ${i === step ? "text-foreground" : "text-foreground/40"}`}>{s}</span>
                  {i < steps.length - 1 && <div className={`flex-1 h-0.5 ${i < step ? "bg-secondary" : "bg-foreground/10"}`} />}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-8">
          <AnimatePresence mode="wait">
            {confirmed ? (
              <motion.div key="confirmed" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-8">
                <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="luxury-heading text-3xl font-bold mb-3">Booking Confirmed!</h3>
                <p className="text-foreground/60 mb-8">Thank you, <strong>{form.name}</strong>. We&apos;ve received your booking and will send a confirmation to <strong>{form.email}</strong> within 30 minutes.</p>
                <div className="bg-accent/40 rounded-2xl p-6 text-left mb-6">
                  <h4 className="font-bold mb-4 text-sm uppercase tracking-widest text-foreground/40">Booking Summary</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-foreground/60">Tour</span><span className="font-bold">{selectedTour?.name}</span></div>
                    <div className="flex justify-between"><span className="text-foreground/60">Date</span><span className="font-bold">{form.date}</span></div>
                    <div className="flex justify-between"><span className="text-foreground/60">Guests</span><span className="font-bold">{form.guests}</span></div>
                    <div className="flex justify-between border-t border-foreground/10 pt-2 mt-2"><span className="text-foreground/60 font-bold">Total</span><span className="font-bold text-secondary">${total}</span></div>
                  </div>
                </div>
                <button onClick={onClose} className="bg-primary text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-secondary hover:text-primary transition-all">
                  Close
                </button>
              </motion.div>
            ) : step === 0 ? (
              <motion.div key="step0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h3 className="font-bold text-lg mb-6">Select Your Tour Experience</h3>
                <div className="space-y-4">
                  {tours.map(tour => (
                    <motion.button
                      key={tour.id}
                      whileHover={{ scale: 1.01 }}
                      onClick={() => setForm({ ...form, tour: tour.id })}
                      className={`w-full text-left p-5 rounded-2xl border-2 transition-all ${form.tour === tour.id ? "border-secondary bg-secondary/10" : "border-foreground/10 hover:border-foreground/30"}`}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-bold mb-1">{tour.name}</h4>
                          <div className="flex items-center gap-3 text-xs text-foreground/50 mb-3">
                            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{tour.duration}</span>
                            <span className="flex items-center gap-1"><Star className="w-3 h-3 fill-secondary text-secondary" />{tour.rating}</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {tour.highlights.map(h => (
                              <span key={h} className="text-[10px] bg-accent px-3 py-1 rounded-full text-foreground/60 uppercase tracking-wider">{h}</span>
                            ))}
                          </div>
                        </div>
                        <div className="text-right ml-4 flex-shrink-0">
                          <p className="text-2xl font-bold text-primary">${tour.price}</p>
                          <p className="text-xs text-foreground/40">per person</p>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ) : step === 1 ? (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h3 className="font-bold text-lg mb-6">Trip Details</h3>
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-foreground/40 text-[10px] uppercase tracking-widest block mb-2 flex items-center gap-1"><Calendar className="w-3 h-3" /> Tour Date *</label>
                      <input type="date" required value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} className="w-full border border-foreground/10 rounded-2xl py-3.5 px-5 bg-accent/30 dark:bg-zinc-800 outline-none focus:border-secondary/60 transition-all text-sm" />
                    </div>
                    <div>
                      <label className="text-foreground/40 text-[10px] uppercase tracking-widest block mb-2 flex items-center gap-1"><Users className="w-3 h-3" /> Number of Guests</label>
                      <select value={form.guests} onChange={e => setForm({ ...form, guests: +e.target.value })} className="w-full border border-foreground/10 rounded-2xl py-3.5 px-5 bg-accent/30 dark:bg-zinc-800 outline-none focus:border-secondary/60 transition-all text-sm">
                        {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} {n===1 ? "Guest" : "Guests"}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-foreground/40 text-[10px] uppercase tracking-widest block mb-2">Full Name *</label>
                    <input required type="text" placeholder="Your full name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full border border-foreground/10 rounded-2xl py-3.5 px-5 bg-accent/30 dark:bg-zinc-800 outline-none focus:border-secondary/60 transition-all text-sm" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-foreground/40 text-[10px] uppercase tracking-widest block mb-2">Email *</label>
                      <input required type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full border border-foreground/10 rounded-2xl py-3.5 px-5 bg-accent/30 dark:bg-zinc-800 outline-none focus:border-secondary/60 transition-all text-sm" />
                    </div>
                    <div>
                      <label className="text-foreground/40 text-[10px] uppercase tracking-widest block mb-2">Phone / WhatsApp</label>
                      <input type="tel" placeholder="+1 234 567 8901" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="w-full border border-foreground/10 rounded-2xl py-3.5 px-5 bg-accent/30 dark:bg-zinc-800 outline-none focus:border-secondary/60 transition-all text-sm" />
                    </div>
                  </div>
                  <div>
                    <label className="text-foreground/40 text-[10px] uppercase tracking-widest block mb-2">Special Requests</label>
                    <textarea rows={3} placeholder="Any special requirements or questions..." value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} className="w-full border border-foreground/10 rounded-2xl py-3.5 px-5 bg-accent/30 dark:bg-zinc-800 outline-none focus:border-secondary/60 transition-all text-sm resize-none" />
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h3 className="font-bold text-lg mb-6">Confirm Your Booking</h3>
                <div className="bg-gradient-to-b from-primary/5 to-transparent border border-primary/20 rounded-2xl p-6 mb-6">
                  <h4 className="text-xs uppercase tracking-widest text-foreground/40 mb-4">Booking Summary</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between"><span className="text-foreground/60 flex items-center gap-2"><MapPin className="w-3.5 h-3.5" />Tour</span><span className="font-bold">{selectedTour?.name}</span></div>
                    <div className="flex justify-between"><span className="text-foreground/60 flex items-center gap-2"><Calendar className="w-3.5 h-3.5" />Date</span><span className="font-bold">{form.date}</span></div>
                    <div className="flex justify-between"><span className="text-foreground/60 flex items-center gap-2"><Users className="w-3.5 h-3.5" />Guests</span><span className="font-bold">{form.guests}</span></div>
                    <div className="flex justify-between"><span className="text-foreground/60">Name</span><span className="font-bold">{form.name}</span></div>
                    <div className="flex justify-between"><span className="text-foreground/60">Email</span><span className="font-bold">{form.email}</span></div>
                    <div className="border-t border-foreground/10 pt-3 mt-1 flex justify-between">
                      <span className="font-bold">Price per person</span><span className="text-secondary">${selectedTour?.price}</span>
                    </div>
                    <div className="flex justify-between text-lg">
                      <span className="font-bold">Total</span><span className="font-bold text-secondary text-2xl">${total}</span>
                    </div>
                  </div>
                </div>
                <p className="text-foreground/50 text-xs mb-6 text-center">By confirming, you agree to our booking policy. Payment is collected on the day of the tour. Free cancellation up to 24 hours before.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        {!confirmed && (
          <div className="sticky bottom-0 bg-white dark:bg-zinc-900 px-8 py-5 border-t border-foreground/10 flex gap-4">
            {step > 0 && (
              <button onClick={() => setStep(s => s - 1)} className="flex-1 py-3 rounded-2xl border border-foreground/20 text-sm font-bold uppercase tracking-widest hover:border-foreground/50 transition-colors">
                Back
              </button>
            )}
            {step < 2 ? (
              <motion.button
                whileHover={{ scale: canNext() ? 1.02 : 1 }}
                onClick={() => canNext() && setStep(s => s + 1)}
                disabled={!canNext()}
                className={`flex-1 py-3 rounded-2xl text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${canNext() ? "bg-primary text-white hover:bg-secondary hover:text-primary" : "bg-foreground/10 text-foreground/30 cursor-not-allowed"}`}
              >
                Next Step <ChevronRight className="w-4 h-4" />
              </motion.button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleConfirm}
                className="flex-1 py-3 rounded-2xl bg-secondary text-primary text-sm font-bold uppercase tracking-widest hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" /> Confirm Booking
              </motion.button>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
}
