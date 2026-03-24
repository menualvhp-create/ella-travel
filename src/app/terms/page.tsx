import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 px-6 bg-accent/20 dark:bg-zinc-950">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <span className="text-secondary text-xs font-bold uppercase tracking-widest block mb-3">Legal</span>
            <h1 className="luxury-heading text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-foreground/50 text-sm">Last updated: March 2025</p>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-foreground/80">
            <section>
              <h2 className="luxury-heading text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">By accessing or using Ella Travel&apos;s services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
            </section>

            <section>
              <h2 className="luxury-heading text-2xl font-bold text-foreground mb-4">2. Booking & Payments</h2>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>All bookings are subject to availability and confirmation by Ella Travel.</li>
                <li>Payment is due on the day of the tour unless otherwise arranged.</li>
                <li>Prices are quoted in USD and include all transportation during the tour.</li>
                <li>Ella Travel reserves the right to adjust pricing with reasonable notice.</li>
              </ul>
            </section>

            <section>
              <h2 className="luxury-heading text-2xl font-bold text-foreground mb-4">3. Cancellation Policy</h2>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>24+ hours notice:</strong> Full refund, no cancellation fee.</li>
                <li><strong>12–24 hours notice:</strong> 50% refund of the total tour price.</li>
                <li><strong>Less than 12 hours:</strong> No refund unless due to extreme weather or force majeure.</li>
                <li>Ella Travel may cancel or reschedule tours due to extreme weather conditions for guest safety.</li>
              </ul>
            </section>

            <section>
              <h2 className="luxury-heading text-2xl font-bold text-foreground mb-4">4. Guest Responsibilities</h2>
              <p className="leading-relaxed">Guests are responsible for:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Arriving at the designated meeting point on time</li>
                <li>Wearing appropriate clothing for outdoor activities</li>
                <li>Following guide instructions for safety</li>
                <li>Respecting local culture, communities, and natural environments</li>
                <li>Ensuring adequate personal travel insurance</li>
              </ul>
            </section>

            <section>
              <h2 className="luxury-heading text-2xl font-bold text-foreground mb-4">5. Liability</h2>
              <p className="leading-relaxed">Ella Travel takes all reasonable precautions to ensure guest safety. However, participation in outdoor activities involves inherent risks. Ella Travel shall not be liable for any injury, loss, or damage sustained during the tour unless due to proven negligence on our part.</p>
            </section>

            <section>
              <h2 className="luxury-heading text-2xl font-bold text-foreground mb-4">6. Photography & Media</h2>
              <p className="leading-relaxed">Ella Travel may photograph tours for marketing purposes. By participating, guests consent to such photography unless they explicitly opt out at the start of the tour. Guests retain full rights to their own photographs.</p>
            </section>

            <section>
              <h2 className="luxury-heading text-2xl font-bold text-foreground mb-4">7. Governing Law</h2>
              <p className="leading-relaxed">These terms are governed by the laws of the Democratic Socialist Republic of Sri Lanka. Any disputes shall be resolved through the courts of Badulla District, Sri Lanka.</p>
            </section>

            <section>
              <h2 className="luxury-heading text-2xl font-bold text-foreground mb-4">8. Contact</h2>
              <p className="leading-relaxed">For questions about these terms, please contact <a href="mailto:hello@ellatravel.luxury" className="text-secondary hover:underline">hello@ellatravel.luxury</a>.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
