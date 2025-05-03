import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Scale, AlertTriangle, FileText, Users, Car, Briefcase, Building, Gavel } from "lucide-react"
import ReadyToDefend from "@/components/ready-to-defend"

export const metadata: Metadata = {
  title: "Legal Services | Allan & Easton Law",
  description:
    "Allan & Easton Law offers expert legal representation in criminal defense, DUI cases, domestic violence, drug charges, and more throughout Utah.",
}

export default function ServicesPage() {
  const practiceAreas = [
    {
      id: "criminal-defense",
      title: "Criminal Defense",
      description:
        "Our attorneys have extensive experience defending clients against all types of criminal charges, from misdemeanors to serious felonies.",
      icon: <Shield className="h-10 w-10 text-firm-burgundy" />,
      details: [
        "Felony and misdemeanor defense",
        "Probation violations",
        "Expungements and record sealing",
        "Bail hearings and pretrial motions",
        "Jury trials and bench trials",
      ],
    },
    {
      id: "dui-defense",
      title: "DUI Defense",
      description:
        "With Utah having the strictest DUI laws in the nation, our experienced attorneys provide strategic defense against DUI and alcohol-related charges.",
      icon: <Car className="h-10 w-10 text-firm-burgundy" />,
      details: [
        "First-time and repeat DUI offenses",
        "Felony DUI cases",
        "Driver's license hearings",
        "Breathalyzer and field sobriety test challenges",
        "Ignition interlock device issues",
      ],
    },
    {
      id: "domestic-violence",
      title: "Domestic Violence",
      description:
        "We provide sensitive, effective representation for those facing domestic violence charges, understanding the complex family dynamics often involved.",
      icon: <Users className="h-10 w-10 text-firm-burgundy" />,
      details: [
        "Domestic assault and battery",
        "Protective order violations",
        "Child abuse allegations",
        "Stalking and harassment charges",
        "Negotiating treatment alternatives",
      ],
    },
    {
      id: "drug-charges",
      title: "Drug Charges",
      description:
        "Our attorneys defend clients against all types of drug-related offenses, from simple possession to trafficking and distribution charges.",
      icon: <AlertTriangle className="h-10 w-10 text-firm-burgundy" />,
      details: [
        "Possession of controlled substances",
        "Distribution and trafficking",
        "Prescription drug offenses",
        "Drug manufacturing",
        "Asset forfeiture defense",
      ],
    },
    {
      id: "white-collar",
      title: "White Collar Crime",
      description:
        "With specialized experience in financial regulations, our team provides sophisticated defense against white collar and securities fraud charges.",
      icon: <Building className="h-10 w-10 text-firm-burgundy" />,
      details: ["Securities fraud", "Embezzlement and theft", "Tax evasion", "Money laundering", "Wire and mail fraud"],
    },
    {
      id: "expungement",
      title: "Record Expungement",
      description:
        "We help clients clear their criminal records to remove barriers to employment, housing, and other opportunities for a fresh start.",
      icon: <FileText className="h-10 w-10 text-firm-burgundy" />,
      details: [
        "Eligibility assessment",
        "Certificate of eligibility application",
        "Petition preparation and filing",
        "Court representation",
        "Record sealing",
      ],
    },
    {
      id: "appeals",
      title: "Criminal Appeals",
      description:
        "Our attorneys have experience with appellate procedure and can identify and argue legal errors that occurred during your trial.",
      icon: <Gavel className="h-10 w-10 text-firm-burgundy" />,
      details: [
        "Direct appeals",
        "Post-conviction relief",
        "Habeas corpus petitions",
        "Sentence modifications",
        "Constitutional rights violations",
      ],
    },
    {
      id: "consultation",
      title: "Legal Consultation",
      description:
        "Not sure what you need? Schedule a free consultation to discuss your case with one of our experienced attorneys.",
      icon: <Briefcase className="h-10 w-10 text-firm-burgundy" />,
      details: [
        "Case evaluation",
        "Legal options assessment",
        "Strategy development",
        "Fee structure discussion",
        "Next steps planning",
      ],
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-firm-navy text-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">Our Legal Services</h1>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            With decades of combined experience as both prosecutors and defense attorneys, we provide strategic,
            effective representation across a wide range of legal matters.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-firm-burgundy hover:bg-firm-gold hover:text-firm-navy">
                Request a Free Consultation
              </Button>
            </Link>
            <Link href="#practice-areas">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Explore Our Practice Areas
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Former Prosecutors Section */}
      <section className="py-16 px-6 bg-firm-ivory">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold font-serif text-firm-navy mb-4">
                Former Prosecutors Now Fighting For You
              </h2>
              <p className="text-firm-slate mb-4">
                Our attorneys have worked on both sides of the courtroom. As former prosecutors, we understand how the
                state builds cases against defendants, giving us unique insight into effective defense strategies.
              </p>
              <p className="text-firm-slate">
                This prosecutorial experience allows us to anticipate the opposition's tactics, identify weaknesses in
                their case, and build stronger defenses for our clients.
              </p>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-80 w-full rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/ae-team.jpeg"
                alt="Allan & Easton Law Team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section id="practice-areas" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-serif text-firm-navy text-center mb-4">Our Practice Areas</h2>
          <p className="text-firm-slate text-center max-w-3xl mx-auto mb-12">
            We provide experienced legal representation across a wide range of practice areas, with particular expertise
            in criminal defense matters.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area) => (
              <Card
                key={area.id}
                className="border-none shadow-sm hover:shadow-md transition-shadow duration-300 h-full"
              >
                <CardHeader>
                  <div className="mb-4">{area.icon}</div>
                  <CardTitle className="text-xl text-firm-navy">{area.title}</CardTitle>
                  <CardDescription className="text-firm-slate">{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-medium text-firm-navy mb-2">How We Can Help:</h4>
                  <ul className="space-y-1">
                    {area.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-firm-burgundy mr-2">•</span>
                        <span className="text-firm-slate">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold font-serif text-firm-navy text-center mb-12">Our Approach</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-firm-ivory rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Scale className="h-8 w-8 text-firm-burgundy" />
              </div>
              <h3 className="text-xl font-semibold text-firm-navy mb-2">Personalized Strategy</h3>
              <p className="text-firm-slate">
                We develop customized defense strategies based on the unique circumstances of your case and your
                specific goals.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-firm-ivory rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-firm-burgundy" />
              </div>
              <h3 className="text-xl font-semibold text-firm-navy mb-2">Aggressive Advocacy</h3>
              <p className="text-firm-slate">
                We fight vigorously to protect your rights, challenge evidence, and pursue the best possible outcome for
                your case.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-firm-ivory rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-firm-burgundy" />
              </div>
              <h3 className="text-xl font-semibold text-firm-navy mb-2">Compassionate Support</h3>
              <p className="text-firm-slate">
                We provide clear communication and emotional support throughout the legal process, recognizing the
                stress you're under.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Highlight */}
      <section className="py-16 px-6 bg-firm-ivory">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-serif text-firm-navy mb-8">What Our Clients Say</h2>

          <div className="bg-white p-8 rounded-lg shadow-sm relative">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-firm-burgundy rounded-full p-2 text-white">
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
                className="lucide lucide-quote"
              >
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
              </svg>
            </div>

            <p className="text-lg text-firm-slate mb-6">
              John Allan fought for my son when nobody else would. He took the time to understand our situation and
              never made us feel judged. His experience as a former prosecutor gave him insight that made all the
              difference in our case. Forever grateful for his help.
            </p>

            <p className="font-semibold text-firm-navy">Sarah J.</p>
            <p className="text-sm text-firm-slate">Drug Possession Defense</p>
          </div>

          <Link href="/contact" className="mt-8 inline-block">
            <Button className="bg-firm-burgundy hover:bg-firm-navy">Schedule Your Consultation</Button>
          </Link>
        </div>
      </section>

      {/* Ready to Defend CTA */}
      <ReadyToDefend />
    </div>
  )
}
