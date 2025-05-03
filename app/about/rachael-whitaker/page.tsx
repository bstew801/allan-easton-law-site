import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Rachael Whitaker | Allan & Easton Law",
  description:
    "Learn about Rachael Whitaker, criminal defense and personal injury attorney with extensive experience in litigation and a background in court operations.",
}

export default function RachaelWhitakerPage() {
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
              src="/images/rachael-whitaker-enhanced.png"
              alt="Rachael Whitaker"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          <div className="mt-6 bg-firm-ivory p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-firm-navy mb-3">Contact Information</h3>
            <p className="text-firm-slate mb-2">Email: rachael.whitaker@allaneastonlaw.com</p>
            <p className="text-firm-slate">Phone: (801) 375-8800</p>
          </div>
        </div>

        <div className="md:w-2/3">
          <h1 className="text-3xl md:text-4xl font-bold font-serif text-firm-navy mb-4">Rachael Whitaker</h1>
          <p className="text-lg text-firm-burgundy font-medium mb-6">Criminal Defense & Personal Injury Attorney</p>

          <div className="prose max-w-none text-firm-slate">
            <p>
              Rachael Whitaker brings a unique perspective to her legal practice, combining exceptional research and
              analytical skills with practical courtroom experience. She specializes in both criminal defense and
              personal injury cases, providing comprehensive legal representation to clients during difficult times.
            </p>

            <h2 className="text-xl font-semibold text-firm-navy mt-6 mb-3">Education</h2>
            <p>
              Rachael earned a Bachelor of Science degree in Political Science from the University of Utah and received
              her Juris Doctorate from Arizona Summit Law School. She graduated in the top ten percent of her class and
              as Cum Laude with an Order of the Quill distinction.
            </p>
            <p>
              While attending Arizona Summit Law School, a private law school located in the heart of downtown Phoenix,
              Rachael was distinguished from her classmates because of her notable research and analytical skills.
              Rachael received the Cali award, an award given to the highest grade in the class, in Worker's
              Compensation.
            </p>

            <h2 className="text-xl font-semibold text-firm-navy mt-6 mb-3">Bar Admissions</h2>
            <ul>
              <li>Utah State Bar</li>
            </ul>

            <h2 className="text-xl font-semibold text-firm-navy mt-6 mb-3">Professional Experience</h2>
            <p>
              Rachael was hired by one of the largest legal research companies to assist other students and faculty
              members with legal research. She also had the opportunity to work as a Teaching Assistant for Civil
              Procedure and Contracts as well as a Research Assistant for the Dean of Teaching and Learning at Arizona
              Summit Law School. Rachael moved back to Utah and was admitted to the State Bar. She joined the law firm
              of Allan & Easton in 2013 as a Criminal Defense and Personal Injury attorney.
            </p>
            <p>
              Rachael has extensive experience with Personal Injury cases and currently litigates on behalf of clients.
              She has over 10 years of experience in dealing with cases ranging from automobile accidents, motorcycle
              accidents, and slip and falls. She protects the rights of people who are injured, through no fault of
              their own. She makes the recovery process as smooth and painless as possible by guiding each case through
              the complicated insurance process.
            </p>
            <p>
              Rachael offers a unique insight into the courtroom process and preferences because of her unique
              experience working for several different courts. She worked at the Second District Court in Utah and the
              Court of Appeals in Arizona. This court experience gives her valuable perspective on how judges and court
              staff approach different types of cases.
            </p>

            <h2 className="text-xl font-semibold text-firm-navy mt-6 mb-3">Areas of Practice</h2>
            <ul>
              <li>Criminal Defense</li>
              <li>Personal Injury</li>
              <li>Automobile Accidents</li>
              <li>Motorcycle Accidents</li>
              <li>Slip and Fall Injuries</li>
              <li>Insurance Claims</li>
            </ul>

            <h2 className="text-xl font-semibold text-firm-navy mt-6 mb-3">Personal Approach</h2>
            <p>
              Rachael is known for being kind, caring, and compassionate yet an aggressive advocate on behalf of her
              clients. She understands that whether you're facing criminal charges or recovering from an injury, you
              need an attorney who will listen to your concerns and fight for your best interests.
            </p>
            <p>
              Her extensive research background allows her to thoroughly investigate every aspect of a case, while her
              court experience helps her navigate the legal system efficiently. Clients appreciate her clear
              communication style and her ability to explain complex legal concepts in understandable terms.
            </p>
          </div>

          <div className="mt-8">
            <Link href="/contact">
              <Button className="bg-firm-burgundy hover:bg-firm-navy">Schedule a Consultation with Rachael</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
