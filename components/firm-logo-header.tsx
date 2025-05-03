import Link from "next/link"

export default function FirmLogoHeader() {
  return (
    <header className="w-full bg-firm-navy py-4 px-6 md:px-12 flex items-center justify-between shadow-md z-50">
      <Link href="/" className="flex items-center gap-3">
        <img src="/images/courthouse-logo.png" alt="Courthouse logo" className="h-10 w-auto" />
        <span className="text-lg md:text-xl font-semibold text-firm-gold tracking-tight">Allan & Easton</span>
      </Link>
      <nav className="hidden md:flex gap-6 text-white font-medium text-sm items-center">
        <Link href="/about" className="hover:text-firm-gold transition">
          About
        </Link>
        <Link href="/services" className="hover:text-firm-gold transition">
          Services
        </Link>
        <Link href="/case-results" className="hover:text-firm-gold transition">
          Case Results
        </Link>
        <Link href="/blog" className="hover:text-firm-gold transition">
          Blog
        </Link>
        <Link href="/news" className="hover:text-firm-gold transition">
          News
        </Link>
        <Link href="/aelia" className="hover:text-firm-gold transition">
          AELIA
        </Link>
        <Link href="/testimonials" className="hover:text-firm-gold transition">
          Testimonials
        </Link>
        <Link href="/contact" className="hover:text-firm-gold transition">
          Contact
        </Link>
      </nav>
    </header>
  )
}
