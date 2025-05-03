import type { Metadata } from "next"
import ContactForm from "@/components/contact-form"
import { MapPin, Phone, Mail, Clock, MapIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | Allan & Easton Law",
  description:
    "Contact Allan & Easton Law for a free consultation. Our Utah criminal defense attorneys are here to help with your case.",
}

export default function ContactPage() {
  const citiesServed = ["Farmington", "Fillmore", "Heber", "Nephi", "Ogden", "Provo", "Salt Lake City", "Vernal"]

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold font-serif text-firm-navy mb-6 text-center">Contact Us</h1>
      <p className="text-lg text-firm-slate max-w-2xl mx-auto text-center mb-12">
        We're here to listen and help. Reach out to discuss your case with our team.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold font-serif text-firm-navy mb-6">Get In Touch</h2>
          <ContactForm />
        </div>

        <div className="space-y-8">
          <div className="bg-firm-ivory p-8 rounded-lg">
            <h2 className="text-2xl font-bold font-serif text-firm-navy mb-6">Our Offices</h2>

            <div className="space-y-8">
              <div className="border-b pb-6 border-firm-slate/20">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-firm-burgundy mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-firm-navy">Provo Office</h3>
                    <p className="text-firm-slate">
                      1892 N. 1120 W.
                      <br />
                      Provo, Utah 84604
                    </p>
                    <p className="mt-2">
                      <a
                        href="tel:8013758800"
                        className="text-firm-burgundy hover:text-firm-navy font-medium flex items-center"
                      >
                        <Phone className="h-4 w-4 mr-1" />
                        (801) 375-8800
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-firm-burgundy mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-firm-navy">Salt Lake City Office</h3>
                    <p className="text-firm-slate">
                      175 South Main Street, Suite 400
                      <br />
                      Salt Lake City, UT 84111
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-5 w-5 text-firm-burgundy mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold text-firm-navy">Email</h3>
                  <p className="text-firm-slate">info@allaneastonlaw.com</p>
                  <p className="text-sm text-firm-slate/80">We respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-5 w-5 text-firm-burgundy mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold text-firm-navy">Office Hours</h3>
                  <p className="text-firm-slate">
                    Monday - Friday: 8:30 AM - 5:30 PM
                    <br />
                    Saturday: 9:00 AM - 1:00 PM (By appointment)
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-firm-ivory p-8 rounded-lg">
            <div className="flex items-start mb-4">
              <MapIcon className="h-5 w-5 text-firm-burgundy mt-1 mr-3" />
              <h3 className="font-semibold text-firm-navy text-lg">Cities We Serve</h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {citiesServed.map((city) => (
                <div key={city} className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-firm-gold mr-2"></div>
                  <span className="text-firm-slate">{city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
