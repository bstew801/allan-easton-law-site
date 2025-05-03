import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "John L. Allan | Allan & Easton Law",
  description:
    "Learn about John L. Allan, former Violent Crimes Division Chief with 24 years of experience prosecuting and defending criminal cases in Utah.",
}

export default function JohnAllanPage() {
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
              src="/images/john-allan-enhanced.jpeg"
              alt="John L. Allan"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          <div className="mt-6 bg-firm-ivory p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-firm-navy mb-3">Contact Information</h3>
            <p className="text-firm-slate mb-2">Email: john.allan@allaneastonlaw.com</p>
            <p className="text-firm-slate">Phone: (801) 375-8800</p>
          </div>

          <div className="mt-6 bg-firm-ivory p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-firm-navy mb-3">Bar Admissions</h3>
            <ul className="text-firm-slate space-y-1">
              <li>Utah State Bar</li>
              <li>U.S. District Court, District of Utah</li>
              <li>U.S. Court of Appeals, Tenth Circuit</li>
            </ul>
          </div>
        </div>

        <div className="md:w-2/3">
          <h1 className="text-3xl md:text-4xl font-bold font-serif text-firm-navy mb-4">John L. Allan</h1>
          <p className="text-lg text-firm-burgundy font-medium mb-6">
            Former Violent Crimes Division Chief & Criminal Defense Attorney
          </p>

          <div className="prose max-w-none text-firm-slate">
            <p>
              John L. Allan brings 24 years of experience both prosecuting and defending criminal cases to his defense
              practice. His extensive background as a prosecutor gives him unique insights into how the state builds
              cases, allowing him to develop powerful defense strategies for his clients.
            </p>

            <h2 className="text-xl font-semibold text-firm-navy mt-6 mb-3">Prosecutorial Background</h2>
            <p>
              John served for 16 years as a Deputy Utah County Prosecutor, culminating in his role as the Violent Crimes
              Division Chief for the Utah County Attorney's Office. In this capacity, he handled high-profile cases
              including murder, rape, aggravated assault, domestic violence, kidnapping, and other serious violent
              crimes.
            </p>

            <h2 className="text-xl font-semibold text-firm-navy mt-6 mb-3">Criminal Law Experience</h2>
            <p>Throughout his 24-year career, John has extensive experience both prosecuting and defending:</p>
            <ul>
              <li>Violent crimes, including capital homicide cases</li>
              <li>Sex-related crimes</li>
              <li>Property crimes</li>
              <li>Drug-related offenses</li>
              <li>DUI cases</li>
            </ul>
            <p>
              He has tried scores of DUI cases to a jury throughout his career and has litigated numerous murder cases,
              including capital homicide. John has handled all types of sexual abuse crimes and has taken numerous cases
              all the way through trial.
            </p>

            <h2 className="text-xl font-semibold text-firm-navy mt-6 mb-3">Teaching & Training</h2>
            <p>
              John has trained hundreds of prosecutors throughout the United States on criminal trial skills and
              strategies. He has also trained police officers and prosecutors on automobile stops, search and seizure,
              and search warrants.
            </p>
            <p>
              His outstanding credentials in teaching the nuances of criminal law led to his appointment as Chairman of
              the Utah State Training Committee for prosecutors, a position he held for over seven years.
            </p>
            <p>John has taught at both the State and National levels in such courses as:</p>
            <ul>
              <li>Search and seizure</li>
              <li>Opening and closing statements</li>
              <li>Direct and cross-examination</li>
              <li>Trial technique and tactics</li>
              <li>Plea negotiations</li>
            </ul>

            <h2 className="text-xl font-semibold text-firm-navy mt-6 mb-3">Education</h2>
            <ul>
              <li>J.D., J. Reuben Clark Law School at Brigham Young University, 1987</li>
              <li>B.A. in English, Brigham Young University, 1984</li>
            </ul>
            <p>John began practicing law at the age of 25 and is licensed in both State and Federal Courts.</p>

            <h2 className="text-xl font-semibold text-firm-navy mt-6 mb-3">Defense Approach</h2>
            <p>
              With his extensive background as a prosecutor, John understands how the state builds cases and where
              weaknesses might exist. He leverages this knowledge to develop strategic defenses tailored to each
              client's unique situation.
            </p>
            <p>
              John's approach combines thorough case preparation, strategic thinking, and courtroom excellence. His
              experience on both sides of the criminal justice system gives him a comprehensive understanding of how to
              build effective defense strategies and achieve the best possible outcomes for his clients.
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
