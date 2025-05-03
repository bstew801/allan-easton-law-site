import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Criminal Defense with Proven Results | Allan & Easton Law",
  description:
    "Over 40 years of courtroom experience. Former prosecutors now fighting for your freedom. Request a free consultation today.",
}

export default function LandingBlackWhiteRed() {
  return (
    <div className="bg-firm-black text-firm-white min-h-screen font-sans">
      <header className="bg-firm-black border-b border-firm-red px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-firm-red">Allan & Easton</h1>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-firm-red transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-firm-red transition">
            About
          </Link>
          <Link href="/testimonials" className="hover:text-firm-red transition">
            Testimonials
          </Link>
          <Link href="/blog" className="hover:text-firm-red transition">
            Blog
          </Link>
          <Link
            href="/contact"
            className="bg-firm-red text-white px-4 py-2 rounded hover:bg-white hover:text-firm-black transition"
          >
            Free Consult
          </Link>
        </nav>
        <button className="md:hidden text-firm-white">
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
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Criminal Defense with Proven Results
        </h2>
        <p className="text-lg mt-6 text-gray-300">
          Over 40 years of courtroom experience. Former prosecutors now fighting for your freedom.
        </p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-firm-red text-white px-6 py-3 rounded-full hover:bg-white hover:text-firm-black transition"
            >
              Request Consultation
            </Button>
          </Link>
          <Link href="/about">
            <Button
              variant="outline"
              size="lg"
              className="border border-firm-red text-firm-red px-6 py-3 rounded-full hover:bg-firm-red hover:text-white transition"
            >
              Learn More About Us
            </Button>
          </Link>
        </div>
      </section>

      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-firm-black border border-firm-red p-6 rounded-lg">
            <h3 className="text-xl font-bold text-firm-red mb-3">Criminal Defense</h3>
            <p className="text-gray-300">
              Strategic defense for those facing criminal charges. We understand what you're going through and will
              fight for your rights.
            </p>
          </div>
          <div className="bg-firm-black border border-firm-red p-6 rounded-lg">
            <h3 className="text-xl font-bold text-firm-red mb-3">DUI Defense</h3>
            <p className="text-gray-300">
              Experienced representation for DUI charges. We'll help you navigate Utah's strict DUI laws and protect
              your future.
            </p>
          </div>
          <div className="bg-firm-black border border-firm-red p-6 rounded-lg">
            <h3 className="text-xl font-bold text-firm-red mb-3">Former Prosecutors</h3>
            <p className="text-gray-300">
              Our background as prosecutors gives us unique insight into how the state builds cases against you.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-firm-red text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Don't Face This Alone</h2>
          <p className="text-lg mb-8">
            The criminal justice system can be overwhelming. Let our experienced team guide you through this difficult
            time and fight for the best possible outcome.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-firm-black px-8 py-3 rounded-full font-bold hover:bg-firm-black hover:text-white transition"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

      <footer className="bg-firm-black border-t border-firm-red text-sm text-center text-gray-400 py-6">
        © {new Date().getFullYear()} Allan & Easton Law. All rights reserved.
      </footer>
    </div>
  )
}
