import Link from "next/link"
import { Button } from "@/components/ui/button"
import FirmLogoHeader from "./firm-logo-header"

export default function LandingGoldNavy() {
  return (
    <div className="bg-firm-navy text-firm-gold min-h-screen font-serif">
      <header className="bg-firm-black px-6 py-4 flex justify-between items-center border-b border-firm-gold">
        <FirmLogoHeader />
        <nav className="hidden md:flex space-x-6 text-firm-white text-sm">
          <Link href="/" className="hover:text-firm-gold">
            Home
          </Link>
          <Link href="/about" className="hover:text-firm-gold">
            About
          </Link>
          <Link href="/testimonials" className="hover:text-firm-gold">
            Testimonials
          </Link>
          <Link href="/blog" className="hover:text-firm-gold">
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

      {/* Case Results Section */}
      <section className="py-16 px-6 bg-firm-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-firm-gold text-center mb-12">Recent Case Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-firm-gold p-6 rounded-lg">
              <h3 className="text-xl font-bold text-firm-gold mb-2">DUI Charges Dismissed</h3>
              <p className="text-firm-white mb-3">
                Our client was facing a DUI charge with potential license suspension. We successfully challenged the
                legality of the traffic stop.
              </p>
              <p className="text-sm text-firm-gold font-semibold">Result: All charges dismissed</p>
            </div>
            <div className="border border-firm-gold p-6 rounded-lg">
              <h3 className="text-xl font-bold text-firm-gold mb-2">Domestic Violence Case</h3>
              <p className="text-firm-white mb-3">
                Our client was wrongfully accused of domestic violence. We conducted a thorough investigation and
                presented evidence that proved their innocence.
              </p>
              <p className="text-sm text-firm-gold font-semibold">Result: Case dismissed</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/case-results">
              <Button
                variant="outline"
                className="border border-firm-gold text-firm-gold hover:bg-firm-gold hover:text-firm-black"
              >
                View More Case Results
              </Button>
            </Link>
          </div>
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
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-firm-black text-firm-gold px-8 py-3 rounded-full font-bold hover:bg-white hover:text-firm-black transition"
            >
              Schedule Your Consultation
            </Button>
          </Link>
        </div>
      </section>

      <footer className="bg-firm-black text-center text-sm text-firm-slate py-6 border-t border-firm-gold">
        © {new Date().getFullYear()} Allan & Easton Law. All rights reserved.
      </footer>
    </div>
  )
}
