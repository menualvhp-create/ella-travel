import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 px-6 bg-accent/20 dark:bg-zinc-950">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <span className="text-secondary text-xs font-bold uppercase tracking-widest block mb-3">Legal</span>
            <h1 className="luxury-heading text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-foreground/50 text-sm">Last updated: March 2025</p>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-foreground/80">
            <section>
              <h2 className="luxury-heading text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
              <p className="leading-relaxed">When you book a tour or contact us, we may collect personal information including your name, email address, phone number, and travel preferences. This information is used solely to provide you with our services and improve your experience.</p>
            </section>

            <section>
              <h2 className="luxury-heading text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
              <p className="leading-relaxed">Your personal information is used to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Process and confirm your tour bookings</li>
                <li>Communicate with you about your itinerary</li>
                <li>Send relevant travel information and updates</li>
                <li>Improve our services based on your feedback</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="luxury-heading text-2xl font-bold text-foreground mb-4">3. Data Security</h2>
              <p className="leading-relaxed">We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. All data transmitted through our website is encrypted using SSL technology.</p>
            </section>

            <section>
              <h2 className="luxury-heading text-2xl font-bold text-foreground mb-4">4. Third-Party Services</h2>
              <p className="leading-relaxed">We do not sell, trade, or transfer your personal information to third parties without your consent, except where required by law or to provide our services (e.g., payment processing).</p>
            </section>

            <section>
              <h2 className="luxury-heading text-2xl font-bold text-foreground mb-4">5. Cookies</h2>
              <p className="leading-relaxed">Our website uses cookies to enhance your browsing experience. You may choose to disable cookies through your browser settings, though this may affect some functionality of our website.</p>
            </section>

            <section>
              <h2 className="luxury-heading text-2xl font-bold text-foreground mb-4">6. Your Rights</h2>
              <p className="leading-relaxed">You have the right to access, correct, or delete your personal information at any time. To exercise these rights, please contact us at <a href="mailto:hello@ellatravel.luxury" className="text-secondary hover:underline">hello@ellatravel.luxury</a>.</p>
            </section>

            <section>
              <h2 className="luxury-heading text-2xl font-bold text-foreground mb-4">7. Contact Us</h2>
              <p className="leading-relaxed">If you have any questions about this Privacy Policy, please contact us at <a href="mailto:hello@ellatravel.luxury" className="text-secondary hover:underline">hello@ellatravel.luxury</a> or call us at +94 123 456 789.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
