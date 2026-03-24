import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AnimateIn from "@/components/ui/AnimateIn";
import { IMAGES } from "@/data/images";
import { Award, MapPin, Heart, Users, Star } from "lucide-react";

const values = [
  { icon: Award, title: "Award-Winning Service", desc: "Recognized for excellence in personalized luxury travel experiences across Sri Lanka." },
  { icon: Heart, title: "Passion for Ella", desc: "Born and raised in Ella, our guides share an authentic, deep love for this magical destination." },
  { icon: Users, title: "Small Groups Only", desc: "We limit each experience to 6 guests maximum, ensuring a truly private, exclusive adventure." },
  { icon: MapPin, title: "Hidden Gems", desc: "Access breathtaking spots that aren't on any tourist map, reserved for our guests." },
];

const team = [
  { name: "Kasun Perera", role: "Founder & Head Guide", img: IMAGES.aboutGuide.src, bio: "Born in Ella, Kasun has guided over 5,000 travelers across his beloved home with unmatched passion." },
  { name: "Nimal Silva", role: "Senior Tuk Tuk Guide", img: IMAGES.hero.src, bio: "15 years of experience navigating every trail and hidden viewpoint Ella has to offer." },
  { name: "Amaya Fernando", role: "Experience Coordinator", img: IMAGES.littleAdams.src, bio: "Amaya ensures every booking is seamless and every guest feels like a VIP." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <div className="relative h-80 md:h-[500px] overflow-hidden">
          <Image src={IMAGES.nineArch.src} alt="About Ella Travel" fill className="object-cover brightness-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <AnimateIn direction="down">
              <span className="text-secondary text-xs font-bold uppercase tracking-[0.3em] block mb-3">Our Story</span>
              <h1 className="luxury-heading text-5xl md:text-7xl font-bold text-white">
                About <span className="italic text-secondary">Ella Travel</span>
              </h1>
            </AnimateIn>
          </div>
        </div>

        {/* Mission */}
        <section className="py-24 px-6" style={{ background: "linear-gradient(180deg, #1B4332 0%, #0f2419 100%)" }}>
          <div className="max-w-4xl mx-auto text-center">
            <AnimateIn direction="down">
              <p className="text-secondary text-xs uppercase tracking-widest font-bold mb-6">Our Mission</p>
              <h2 className="luxury-heading text-4xl md:text-5xl font-bold text-white mb-8">
                To Share The Magic of Ella with Every Traveler
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Ella Travel was founded on a simple belief: that the most beautiful places in the world deserve to be experienced properly — with intention, with expertise, and with the kind of personal touch that only comes from someone who truly loves a place. Our tuk-tuk guides aren&apos;t just drivers. They&apos;re storytellers, photographers, and friends.
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 px-6 bg-accent/40">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "5,000+", label: "Happy Travelers" },
                { value: "4.9★", label: "Average Rating" },
                { value: "8+", label: "Years Experience" },
                { value: "50+", label: "Unique Spots" },
              ].map(stat => (
                <AnimateIn key={stat.label} direction="up">
                  <p className="luxury-heading text-5xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-foreground/60 text-sm uppercase tracking-widest">{stat.label}</p>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 px-6 bg-white dark:bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <AnimateIn direction="down" className="text-center mb-16">
              <span className="text-secondary font-bold tracking-widest uppercase text-xs block mb-4">Why Choose Us</span>
              <h2 className="luxury-heading text-4xl md:text-5xl font-bold">Our Promise to You</h2>
            </AnimateIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((v, i) => (
                <AnimateIn key={v.title} direction="up" delay={i * 0.15}>
                  <div className="p-8 rounded-3xl bg-accent/30 dark:bg-zinc-900 hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-12 h-12 bg-secondary/20 rounded-2xl flex items-center justify-center mb-6">
                      <v.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="font-bold text-lg mb-3">{v.title}</h3>
                    <p className="text-foreground/60 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 px-6 bg-accent/20 dark:bg-zinc-900">
          <div className="max-w-7xl mx-auto">
            <AnimateIn direction="down" className="text-center mb-16">
              <span className="text-secondary font-bold tracking-widest uppercase text-xs block mb-4">Meet The Team</span>
              <h2 className="luxury-heading text-4xl md:text-5xl font-bold">Your Ella Experts</h2>
            </AnimateIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {team.map((member, i) => (
                <AnimateIn key={member.name} direction="up" delay={i * 0.15}>
                  <div className="text-center group">
                    <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-secondary/30 group-hover:ring-secondary/80 transition-all">
                      <Image src={member.img} alt={member.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <h3 className="luxury-heading text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-secondary text-xs uppercase tracking-widest font-bold mb-4">{member.role}</p>
                    <p className="text-foreground/60 text-sm">{member.bio}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6" style={{ background: "linear-gradient(135deg, #1B4332 0%, #0a1a12 100%)" }}>
          <div className="max-w-3xl mx-auto text-center">
            <AnimateIn direction="down">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-secondary text-secondary" />)}
              </div>
              <h2 className="luxury-heading text-4xl md:text-5xl font-bold text-white mb-6">Ready to Experience Ella?</h2>
              <p className="text-white/60 mb-10">Join thousands of travelers who&apos;ve made Ella their most unforgettable journey.</p>
              <Link href="/#contact" className="inline-block bg-secondary text-primary px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:shadow-xl hover:shadow-secondary/20 transition-all">
                Book Your Adventure
              </Link>
            </AnimateIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
