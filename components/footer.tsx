import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-firm-navy text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img src="/images/courthouse-logo.png" alt="Courthouse logo" className="h-10 w-auto" />
              <span className="text-lg font-semibold text-firm-gold tracking-tight">Allan & Easton</span>
            </div>
            <p className="text-firm-ivory mb-4">
              Defending good people facing tough legal moments. Let's talk about your options.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-firm-ivory hover:text-firm-gold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-firm-ivory hover:text-firm-gold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-firm-ivory hover:text-firm-gold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-firm-gold" />
                <div>
                  <p className="text-firm-ivory font-medium">Provo Office:</p>
                  <p className="text-firm-ivory">
                    1892 N. 1120 W.
                    <br />
                    Provo, Utah 84604
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-firm-gold" />
                <div>
                  <p className="text-firm-ivory font-medium">Salt Lake City Office:</p>
                  <p className="text-firm-ivory">
                    175 South Main Street, Suite 400
                    <br />
                    Salt Lake City, UT 84111
                  </p>
                </div>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-firm-gold" />
                <span className="text-firm-ivory">(801) 375-8800</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-firm-gold" />
                <span className="text-firm-ivory">info@allaneastonlaw.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-firm-ivory hover:text-firm-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-firm-ivory hover:text-firm-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-firm-ivory hover:text-firm-gold transition-colors">
                  Legal Blog
                </Link>
              </li>
              <li>
                <Link href="/chat" className="text-firm-ivory hover:text-firm-gold transition-colors">
                  Chat with AELIA
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-firm-ivory hover:text-firm-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-firm-slate/30 text-center text-firm-ivory/70 text-sm">
          <p>© {currentYear} Allan & Easton Law. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/privacy" className="hover:text-firm-gold transition-colors">
              Privacy Policy
            </Link>
            {" | "}
            <Link href="/terms" className="hover:text-firm-gold transition-colors">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
