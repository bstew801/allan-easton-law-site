import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative bg-firm-ivory">
      {/* Full-width banner image */}
      <div className="relative w-full h-[350px] md:h-[450px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/ae-team-full.jpeg"
            alt="Allan & Easton Law Team - Utah Criminal Defense Attorneys"
            fill
            className="object-contain object-center"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-firm-navy/70 to-transparent flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-white mb-4 drop-shadow-md">
                Experienced Legal Team Fighting For You
              </h1>
              <p className="text-white text-lg md:text-xl mb-6 drop-shadow-md">
                Former prosecutors with over 40 years of criminal law experience
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-firm-burgundy hover:bg-firm-gold hover:text-firm-navy"
                  >
                    Request a Free Consultation
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto border-white text-white hover:bg-white/10"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Former Prosecutors Section */}
      <section className="bg-firm-ivory py-16 px-4 md:px-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold font-serif text-firm-navy">
            Former Prosecutors Providing Aggressive Criminal Defense
          </h2>
          <p className="text-lg text-firm-slate">
            With over 24 years of experience prosecuting misdemeanors and felonies in Utah, Allan & Easton now dedicate
            their expertise to defending those accused of crimes. Our deep understanding of the judicial system allows
            us to navigate cases effectively, ensuring our clients receive the best possible defense.
          </p>
        </div>
      </section>

      {/* Services preview section */}
      <div className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-firm-ivory p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-serif font-bold text-firm-navy mb-2">Criminal Defense</h3>
              <p className="text-firm-slate mb-4">Strategic defense for those facing criminal charges in Utah.</p>
              <Link
                href="/services"
                className="text-firm-burgundy hover:text-firm-navy font-medium inline-flex items-center"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="bg-firm-ivory p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-serif font-bold text-firm-navy mb-2">DUI Defense</h3>
              <p className="text-firm-slate mb-4">Experienced representation for DUI and related charges.</p>
              <Link
                href="/services"
                className="text-firm-burgundy hover:text-firm-navy font-medium inline-flex items-center"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="bg-firm-ivory p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-serif font-bold text-firm-navy mb-2">Free Consultation</h3>
              <p className="text-firm-slate mb-4">Discuss your case with our attorneys at no cost.</p>
              <Link
                href="/contact"
                className="text-firm-burgundy hover:text-firm-navy font-medium inline-flex items-center"
              >
                Contact us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
