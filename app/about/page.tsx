import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Scale, Heart, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import FormerProsecutors from "@/components/former-prosecutors"
import ReadyToDefend from "@/components/ready-to-defend"

export const metadata: Metadata = {
  title: "About Our Firm | Allan & Easton Law",
  description:
    "Learn about Allan & Easton Law's mission, values, and our dedicated attorneys who have defended thousands of Utahns facing life-changing charges.",
}

export default function AboutPage() {
  return (
    <div className="space-y-16">
      {/* Team Section with Rectangular Images - Now First */}
      <section className="bg-white py-16 px-4 md:px-10">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <h1 className="text-4xl font-bold font-serif text-firm-navy">Our Legal Team</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* John L. Allan */}
            <div className="space-y-4">
              <div className="relative w-64 h-80 mx-auto rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/john-allan-enhanced.jpeg"
                  alt="John L. Allan"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 256px"
                />
              </div>
              <h3 className="text-xl font-semibold text-firm-navy">John L. Allan</h3>
              <p className="text-firm-slate">
                Former prosecutor with 24 years of experience in criminal law, specializing in aggressive defense
                strategies.
              </p>
              <Link href="/about/john-allan">
                <Button
                  variant="outline"
                  className="mt-2 group border-firm-navy text-firm-navy hover:bg-firm-navy hover:text-white"
                >
                  View Profile
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* John J. Easton */}
            <div className="space-y-4">
              <div className="relative w-64 h-80 mx-auto rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/john-easton-enhanced.png"
                  alt="John J. Easton"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 256px"
                />
              </div>
              <h3 className="text-xl font-semibold text-firm-navy">John J. Easton</h3>
              <p className="text-firm-slate">
                Former state prosecutor focusing on unlawful police detentions, forensic evidence, and white-collar
                crimes.
              </p>
              <Link href="/about/john-easton">
                <Button
                  variant="outline"
                  className="mt-2 group border-firm-navy text-firm-navy hover:bg-firm-navy hover:text-white"
                >
                  View Profile
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Rachael Whitaker */}
            <div className="space-y-4">
              <div className="relative w-64 h-80 mx-auto rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/rachael-whitaker-enhanced.png"
                  alt="Rachael Whitaker"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 256px"
                />
              </div>
              <h3 className="text-xl font-semibold text-firm-navy">Rachael Whitaker</h3>
              <p className="text-firm-slate">
                Attorney with 10 years of experience, specializing in personal injury law and client advocacy.
              </p>
              <Link href="/about/rachael-whitaker">
                <Button
                  variant="outline"
                  className="mt-2 group border-firm-navy text-firm-navy hover:bg-firm-navy hover:text-white"
                >
                  View Profile
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FormerProsecutors />

      {/* Video Section */}
      <section className="bg-white py-10 px-4 md:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video rounded-lg overflow-hidden shadow-md">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/2qoYIzni5EI"
              title="Allan & Easton Law Firm – Utah Criminal Defense Attorneys"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-sm text-firm-slate text-center mt-4">
            Meet the team. Learn how we defend what matters most — your future.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold font-serif text-firm-navy text-center mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-firm-ivory border-none shadow-sm">
            <CardContent className="pt-6">
              <Shield className="h-10 w-10 text-firm-burgundy mb-4" />
              <h3 className="text-xl font-semibold mb-2">Second Chances</h3>
              <p className="text-firm-slate">
                We believe everyone deserves a second chance. Our approach focuses on not just resolving your current
                legal issue, but helping you move forward with your life.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-firm-ivory border-none shadow-sm">
            <CardContent className="pt-6">
              <Scale className="h-10 w-10 text-firm-burgundy mb-4" />
              <h3 className="text-xl font-semibold mb-2">Strategic Clarity</h3>
              <p className="text-firm-slate">
                Legal proceedings can be confusing. We provide clear, straightforward guidance so you always understand
                your options and the path forward.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-firm-ivory border-none shadow-sm">
            <CardContent className="pt-6">
              <Heart className="h-10 w-10 text-firm-burgundy mb-4" />
              <h3 className="text-xl font-semibold mb-2">Unwavering Respect</h3>
              <p className="text-firm-slate">
                We treat every client with dignity and respect, regardless of the charges they face. Your story matters
                to us, and we're here to listen.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-firm-ivory p-8 rounded-lg max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold font-serif text-firm-navy mb-4">Our Mission</h2>
        <p className="text-lg text-firm-slate">
          At Allan & Easton Law, our mission is to provide exceptional legal representation to individuals facing
          criminal charges in Utah. We are committed to protecting our clients' rights, offering compassionate guidance
          through difficult times, and achieving the best possible outcomes for their cases.
        </p>
      </section>

      {/* Ready to Defend CTA */}
      <ReadyToDefend />
    </div>
  )
}
