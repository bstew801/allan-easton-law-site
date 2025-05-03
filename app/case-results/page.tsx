import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CaseResults from "@/components/case-results"
import ReadyToDefend from "@/components/ready-to-defend"

export const metadata: Metadata = {
  title: "Case Results | Allan & Easton Law",
  description:
    "Review our track record of successful case outcomes in criminal defense, DUI cases, domestic violence, and more throughout Utah.",
}

export default function CaseResultsPage() {
  return (
    <div>
      <section className="bg-firm-navy py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold font-serif text-white mb-4">Our Track Record of Success</h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            At Allan & Easton Law, we measure our success by the outcomes we achieve for our clients. Review some of our
            notable case results below.
          </p>
        </div>
      </section>

      <CaseResults />

      <section className="py-16 px-4 bg-firm-ivory">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-serif text-firm-navy text-center mb-8">Our Approach to Every Case</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
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
                  className="text-firm-burgundy"
                >
                  <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                  <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-firm-navy mb-2">Thorough Consultation</h3>
              <p className="text-firm-slate">
                We begin with a comprehensive consultation to understand your case, concerns, and goals.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
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
                  className="text-firm-burgundy"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-firm-navy mb-2">Strategic Defense</h3>
              <p className="text-firm-slate">
                We develop a customized strategy based on the unique circumstances of your case and legal situation.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
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
                  className="text-firm-burgundy"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-firm-navy mb-2">Relentless Advocacy</h3>
              <p className="text-firm-slate">
                We fight tirelessly for your rights, whether through skilled negotiation or aggressive courtroom
                representation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-serif text-firm-navy mb-6">Discuss Your Case With Us</h2>
          <p className="text-lg text-firm-slate mb-8">
            Every case is unique. Contact us today to discuss your situation and learn how we can help you achieve the
            best possible outcome.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-firm-burgundy hover:bg-firm-navy">
              Schedule a Free Consultation
            </Button>
          </Link>
        </div>
      </section>

      <ReadyToDefend />
    </div>
  )
}
