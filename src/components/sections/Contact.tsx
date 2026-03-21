"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimateIn from "@/components/ui/AnimateIn";
import { Phone, Mail, MessageSquare, MapPin, Send, CheckCircle2 } from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+94 123 456 789",
    sub: "Mon–Sun, 6am – 8pm",
    href: "tel:+94123456789",
    color: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@ellatravel.luxury",
    sub: "We reply within 2 hours",
    href: "mailto:hello@ellatravel.luxury",
    color: "from-amber-500/20 to-amber-500/5",
  },
  {
    icon: MessageSquare,
    label: "WhatsApp",
    value: "+94 987 654 321",
    sub: "Instant messaging support",
    href: "https://wa.me/94987654321",
    color: "from-green-500/20 to-green-500/5",
  },
  {
    icon: MapPin,
    label: "Find Us",
    value: "Ella, Badulla District",
    sub: "Sri Lanka, 90090",
    href: "https://maps.google.com/?q=Ella,Sri+Lanka",
    color: "from-blue-500/20 to-blue-500/5",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", guests: "1", date: "", tourType: "", message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #0f2419 0%, #1B4332 50%, #0f2419 100%)" }}>
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/60 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/60 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimateIn direction="down" className="text-center mb-20">
          <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">Contact & Inquiries</span>
          <h2 className="luxury-heading text-5xl md:text-7xl font-bold text-white mb-6">
            Plan Your <span className="text-secondary italic">Dream Trip</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto leading-relaxed">
            Reach out via your preferred channel or fill out the inquiry form — we'll craft a bespoke itinerary within hours.
          </p>
        </AnimateIn>

        {/* Contact Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {contactMethods.map((method, i) => (
            <AnimateIn key={method.label} delay={i * 0.1} direction="up">
              <a
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`block p-6 rounded-3xl bg-gradient-to-b ${method.color} border border-white/10 hover:border-secondary/40 transition-all duration-300 group hover:-translate-y-1`}
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 group-hover:bg-secondary/20 flex items-center justify-center mb-4 transition-colors">
                  <method.icon className="w-5 h-5 text-secondary" />
                </div>
                <p className="text-white/50 text-[10px] uppercase tracking-widest mb-1">{method.label}</p>
                <p className="text-white font-bold text-sm mb-1 leading-tight">{method.value}</p>
                <p className="text-white/40 text-xs">{method.sub}</p>
              </a>
            </AnimateIn>
          ))}
        </div>

        {/* Form */}
        <AnimateIn direction="up" delay={0.3}>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2.5rem] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Map / Side */}
              <div className="lg:col-span-2 bg-black/20 p-10 flex flex-col justify-between">
                <div>
                  <h3 className="text-white luxury-heading text-3xl font-bold mb-4">Send an Inquiry</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-8">
                    Tell us about your dream escape and we'll put together a fully personalized luxury itinerary just for you.
                  </p>
                </div>
                <div className="rounded-2xl overflow-hidden h-56 border border-white/10">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31729.6!2d81.0466!3d6.8667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae49e576ba3a8f5%3A0x9f3a5a56e3c26d32!2sElla%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1623456789"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "invert(0.85) hue-rotate(180deg) saturate(0.6)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ella, Sri Lanka Map"
                  />
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-3 p-10">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center h-full text-center gap-4 py-16"
                  >
                    <CheckCircle2 className="w-16 h-16 text-secondary" />
                    <h4 className="text-white luxury-heading text-3xl font-bold">Inquiry Sent!</h4>
                    <p className="text-white/60">We'll get back to you within 2 hours with your personalized itinerary.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="text-white/40 text-[10px] uppercase tracking-widest block mb-2">Full Name *</label>
                        <input
                          required
                          type="text"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 focus:border-secondary/60 rounded-2xl py-4 px-5 text-white placeholder-white/30 outline-none transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label className="text-white/40 text-[10px] uppercase tracking-widest block mb-2">Email Address *</label>
                        <input
                          required
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 focus:border-secondary/60 rounded-2xl py-4 px-5 text-white placeholder-white/30 outline-none transition-all text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="text-white/40 text-[10px] uppercase tracking-widest block mb-2">Phone / WhatsApp</label>
                        <input
                          type="tel"
                          placeholder="+1 234 567 8901"
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 focus:border-secondary/60 rounded-2xl py-4 px-5 text-white placeholder-white/30 outline-none transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label className="text-white/40 text-[10px] uppercase tracking-widest block mb-2">Number of Guests</label>
                        <select
                          value={formData.guests}
                          onChange={e => setFormData({ ...formData, guests: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 focus:border-secondary/60 rounded-2xl py-4 px-5 text-white outline-none transition-all text-sm"
                        >
                          {[1,2,3,4,5,6].map(n => <option key={n} value={n} className="bg-[#1B4332]">{n} {n === 1 ? "Guest" : "Guests"}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="text-white/40 text-[10px] uppercase tracking-widest block mb-2">Preferred Date</label>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={e => setFormData({ ...formData, date: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 focus:border-secondary/60 rounded-2xl py-4 px-5 text-white outline-none transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label className="text-white/40 text-[10px] uppercase tracking-widest block mb-2">Tour Type</label>
                        <select
                          value={formData.tourType}
                          onChange={e => setFormData({ ...formData, tourType: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 focus:border-secondary/60 rounded-2xl py-4 px-5 text-white outline-none transition-all text-sm"
                        >
                          <option value="" className="bg-[#1B4332]">Select a tour...</option>
                          <option value="signature" className="bg-[#1B4332]">Signature Ella Day Tour</option>
                          <option value="sunrise" className="bg-[#1B4332]">Sunrise Nine Arch Experience</option>
                          <option value="falls" className="bg-[#1B4332]">Waterfall & Nature Trail</option>
                          <option value="custom" className="bg-[#1B4332]">Custom Itinerary</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-white/40 text-[10px] uppercase tracking-widest block mb-2">Your Message</label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your dream experience..."
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 focus:border-secondary/60 rounded-2xl py-4 px-5 text-white placeholder-white/30 outline-none transition-all text-sm resize-none"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-secondary text-primary font-bold py-4 rounded-2xl uppercase tracking-widest text-sm flex items-center justify-center gap-3 shadow-lg shadow-secondary/20 hover:shadow-secondary/40 transition-all"
                    >
                      <Send className="w-4 h-4" />
                      Send My Inquiry
                    </motion.button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
