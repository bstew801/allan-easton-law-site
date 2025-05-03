import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroBannerRevealFace() {
  return (
    <section className="relative w-full aspect-[21/10] md:aspect-[21/8] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/allan-easton-team.jpg"
          alt="Allan & Easton Legal Team"
          fill
          className="object-cover object-top brightness-75"
          priority
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>
      <div className="absolute inset-0 z-20 flex flex-col items-start pt-48 md:pt-64 px-6 md:px-24 text-white max-w-2xl space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Experienced Legal Team
          <br />
          Fighting For You
        </h1>
        <p className="text-lg text-white/90">
          Former prosecutors with over 40 years of criminal law experience. You don't have to face this alone. We know
          the system — and we know how to fight for you.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-firm-burgundy text-white px-6 py-3 rounded-full hover:bg-firm-slate transition duration-200 ease-in-out"
            >
              Request a Free Consultation
            </Button>
          </Link>
          <Link href="/about">
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-firm-burgundy border border-firm-burgundy px-6 py-3 rounded-full hover:bg-gray-100 transition duration-200 ease-in-out"
            >
              Learn More About Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
