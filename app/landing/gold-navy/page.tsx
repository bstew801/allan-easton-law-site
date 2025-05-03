import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import FirmLogoHeader from "@/components/firm-logo-header"

export const metadata: Metadata = {
  title: "Legacy. Integrity. Unmatched Defense. | Allan & Easton Law",
  description:
    "We are a firm rooted in tradition and driven by results. Former prosecutors defending your future. Request a consultation today.",
}

export default function LandingGoldNavy() {
  return (
    <div className="bg-firm-navy text-firm-gold min-h-screen font-serif">
      <header className="bg-firm-black px-6 py-4 flex justify-between items-center border-b border-firm-gold">
        <FirmLogoHeader />
        <nav className="hidden md:flex space-x-6 text-firm-white text-sm">
          <Link href="/" className="hover:text-firm-gold transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-firm-gold transition">
            About
          </Link>
          <Link href="/testimonials" className="hover:text-firm-gold transition">
            Testimonials
          </Link>
          <Link href="/blog" className="hover:text-firm-gold transition">
            Blog
          </Link>
          <Link
            href="/contact"
            className="bg-firm-gold text-firm-black px-4 py-2 rounded hover:bg-white hover:text-firm-black transition"
          >
            Consultation
          </Link>
        </nav>
        <button className="md:hidden text-firm-gold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      <section className="px-6 py-20 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-firm-gold leading-tight">
          Legacy. Integrity. Unmatched Defense.
        </h2>
        <p className="text-lg mt-6 text-firm-white">
          We are a firm rooted in tradition and driven by results. Former prosecutors defending your future.
        </p>
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-firm-gold text-firm-black px-6 py-3 rounded-full hover:bg-white hover:text-firm-black transition"
            >
              Request a Consultation
            </Button>
          </Link>
          <Link href="/about">
            <Button
              variant="outline"
              size="lg"
              className="border border-firm-gold text-firm-gold px-6 py-3 rounded-full hover:bg-firm-gold hover:text-firm-black transition"
            >
              Our Story
            </Button>
          </Link>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-firm-gold text-center mb-12">Areas of Practice</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-firm-navy border border-firm-gold p-6 rounded-lg hover:bg-firm-navy/80 transition">
              <h3 className="text-xl font-bold text-firm-gold mb-3">Criminal Defense</h3>
              <p className="text-firm-white">
                Strategic defense for those facing criminal charges. We understand what you're going through and will
                fight for your rights.
              </p>
            </div>
            <div className="bg-firm-navy border border-firm-gold p-6 rounded-lg hover:bg-firm-navy/80 transition">
              <h3 className="text-xl font-bold text-firm-gold mb-3">DUI Defense</h3>
              <p className="text-firm-white">
                Experienced representation for DUI charges. We'll help you navigate Utah's strict DUI laws and protect
                your future.
              </p>
            </div>
            <div className="bg-firm-navy border border-firm-gold p-6 rounded-lg hover:bg-firm-navy/80 transition">
              <h3 className="text-xl font-bold text-firm-gold mb-3">Domestic Violence</h3>
              <p className="text-firm-white">
                Sensitive, effective representation for those facing domestic violence charges, understanding the
                complex family dynamics often involved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 bg-firm-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-firm-gold text-center mb-12">Why Choose Allan & Easton</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-firm-gold mb-4">Former Prosecutors</h3>
              <p className="text-firm-white mb-6">
                Our background as prosecutors gives us unique insight into how the state builds cases. We know their
                playbook and can anticipate their strategy.
              </p>
              <h3 className="text-xl font-bold text-firm-gold mb-4">Decades of Experience</h3>
              <p className="text-firm-white">
                With over 40 years of combined experience in Utah's courtrooms, we've seen it all. This experience
                translates to effective defense strategies for our clients.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-firm-gold mb-4">Personalized Approach</h3>
              <p className="text-firm-white mb-6">
                We don't believe in one-size-fits-all defense. Each case receives a customized strategy based on the
                unique circumstances and your specific goals.
              </p>
              <h3 className="text-xl font-bold text-firm-gold mb-4">Proven Results</h3>
              <p className="text-firm-white">
                Our track record speaks for itself. We've helped thousands of clients achieve favorable outcomes in even
                the most challenging cases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-firm-gold mb-12">Client Testimonial</h2>
          <div className="bg-firm-navy border border-firm-gold p-8 rounded-lg">
            <p className="text-xl text-firm-white italic mb-6">
              "Because of his knowledge and experience, he was able to negotiate with the prosecutor to have my charges
              DISMISSED!!! I would recommend John to anyone needing legal representation."
            </p>
            <p className="text-firm-gold font-semibold">— Jonathan K.</p>
          </div>
          <Link href="/testimonials" className="inline-block mt-8 text-firm-gold hover:underline">
            Read More Client Testimonials
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-firm-gold text-firm-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Your Future Is Worth Fighting For</h2>
          <p className="text-lg mb-8">
            Don't face the legal system alone. Our experienced team is ready to stand by your side and fight for the
            best possible outcome.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-firm-black text-firm-gold px-8 py-3 rounded-full font-bold hover:bg-white hover:text-firm-black transition"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>

      <footer className="bg-firm-black text-center text-sm text-firm-slate py-6 border-t border-firm-gold">
        © {new Date().getFullYear()} Allan & Easton Law. All rights reserved.
      </footer>
    </div>
  )
}
