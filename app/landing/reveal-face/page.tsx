import type { Metadata } from "next"
import HeroBannerRevealFace from "@/components/hero-banner-reveal-face"
import ServiceGrid from "@/components/service-grid"
import Testimonials from "@/components/testimonials"
import CallToAction from "@/components/call-to-action"

export const metadata: Metadata = {
  title: "Allan & Easton Law | Utah Criminal Defense Attorneys",
  description:
    "Allan & Easton defends good people facing tough legal moments in Utah. Experienced criminal defense attorneys specializing in DUI, domestic violence, and drug charges.",
}

export default function RevealFaceLandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroBannerRevealFace />
      <ServiceGrid />
      <Testimonials />
      <CallToAction />
    </div>
  )
}
