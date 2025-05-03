import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "John J. Easton | Allan & Easton Law",
  description:
    "Learn about John J. Easton, former state prosecutor with specialized training in forensic DNA and extensive experience in criminal defense.",
}

export default function JohnEastonPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/about">
        <Button variant="ghost" size="sm" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to About
        </Button>
      </Link>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="md:w-1/3">
          <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/john-easton-enhanced.png"
              alt="John J. Easton"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          <div className="mt-6 bg-firm-ivory p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-firm-navy mb-3">Contact Information</h3>
            <p className="text-firm-slate mb-2">Email: john.easton@allaneastonlaw.com</p>
            <p className="text-firm-slate">Phone: (801) 375-8800</p>
          </div>

          <div className="mt-6 bg-firm-ivory p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-firm-navy mb-3">Bar Admissions</h3>
            <ul className="text-firm-slate space-y-1">
              <li>Utah State Bar</li>
              <li>California State Bar</li>
              <li>U.S. District Court, District of Utah</li>
            </ul>
          </div>
        </div>

        <div className="md:w-2/3">
          <h1 className="text-3xl md:text-4xl font-bold font-serif text-firm-navy mb-4">John J. Easton</h1>
          <p className="text-lg text-firm-burgundy font-medium mb-6">
            Former State Prosecutor & Criminal Defense Attorney
          </p>

          <div className="prose max-w-none text-firm-slate">
            <p>
              John J. Easton brings a wealth of prosecutorial experience to his criminal defense practice. As a former
              State Prosecutor, John has an insider's understanding of how cases are built and prosecuted, giving him
              unique insights that benefit his clients.
            </p>

            <h2 className="text-xl font-semibold text-firm-navy mt-6 mb-3">Prosecutorial Background</h2>
            <ul>
              <li>State Prosecutor for the Felony Drug Unit</li>
              <li>State Prosecutor for Theft/Property Crimes Unit</li>
              <li>Former State Prosecutor for Sex Crimes Task Force</li>
            </ul>

            <h2 className="text-xl font-semibold text-firm-navy mt-6 mb-3">Specialized Training</h2>
            <p>
              John is one of the few criminal defense attorneys in Utah to have received advanced training by the FBI in
              the use of forensic DNA in sex crimes and violent crimes. This specialized knowledge allows him to
              effectively challenge forensic evidence and expert testimony in complex cases.
            </p>

            <h2 className="text-xl font-semibold text-firm-navy mt-6 mb-3">Education</h2>
            <ul>
              <li>J.D., Whittier Law School, Class of 2000</li>
              <li>Graduated Magna Cum Laude (Top 5% of the Class)</li>
              <li>B.S. in Psychology, Utah State University</li>
            </ul>

            <h2 className="text-xl font-semibold text-firm-navy mt-6 mb-3">Professional Experience</h2>
            <p>
              Licensed in both California and Utah, John focuses his practice on unlawful police detentions, probable
              cause, search and seizure, and police misconduct. His experience on both sides of the criminal justice
              system gives him a comprehensive understanding of how to build effective defense strategies.
            </p>
            <p>
              John clerked for the California Court of Appeals, 4th District, gaining valuable insights into appellate
              procedure and judicial decision-making. This experience enhances his ability to identify potential
              appellate issues early in cases.
            </p>
            <p>
              In addition to his legal credentials, John was previously licensed to sell securities and held a Federal
              Series Sixty Six license. This financial background and training in securities regulations provides him
              with specialized knowledge to defend clients accused of white collar crime or securities fraud.
            </p>

            <h2 className="text-xl font-semibold text-firm-navy mt-6 mb-3">Areas of Practice</h2>
            <ul>
              <li>Criminal Defense</li>
              <li>Drug Offenses</li>
              <li>Sex Crimes Defense</li>
              <li>White Collar Crime & Securities Fraud</li>
              <li>Police Misconduct Cases</li>
              <li>Mental Health Defense</li>
            </ul>

            <h2 className="text-xl font-semibold text-firm-navy mt-6 mb-3">Approach to Defense</h2>
            <p>
              John recognizes the special needs of clients suffering from mental wellness issues, such as Veterans, and
              works for treatment and recovery, rather than punishment. He believes in addressing the underlying causes
              of criminal behavior and advocating for rehabilitative solutions when appropriate.
            </p>
            <p>
              With his background as a prosecutor, John understands how the state builds cases and where weaknesses
              might exist. He leverages this knowledge to develop strategic defenses tailored to each client's unique
              situation.
            </p>
          </div>

          <div className="mt-8">
            <Link href="/contact">
              <Button className="bg-firm-burgundy hover:bg-firm-navy">Schedule a Consultation with John</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
