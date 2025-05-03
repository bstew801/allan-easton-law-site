import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroBannerFinal() {
  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/ae-team-full.jpeg"
          alt="Allan & Easton Law Team"
          fill
          className="object-cover brightness-75"
          priority
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
      <div className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-24 text-white max-w-2xl space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold font-serif leading-tight">
          Experienced Legal Team <br /> Fighting For You
        </h1>
        <p className="text-lg text-white/90">
          Former prosecutors with over 40 years of criminal law experience. You don't have to face this alone. We know
          the system — and we know how to fight for you.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-firm-burgundy text-white px-6 py-3 rounded-full shadow hover:bg-firm-slate transition duration-200 ease-in-out"
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
