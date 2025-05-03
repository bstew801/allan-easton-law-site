import HeroBannerThreeCTAs from "@/components/hero-banner-three-ctas"
import ServiceGrid from "@/components/service-grid"
import Testimonials from "@/components/testimonials"
import BlogTeaser from "@/components/blog-teaser"
import BlogTeaserAELIA from "@/components/blog-teaser-aelia"
import NewsTeaser from "@/components/news-teaser"
import CallToAction from "@/components/call-to-action"

export default function Home() {
  return (
    <div>
      <HeroBannerThreeCTAs />
      <ServiceGrid />
      <Testimonials />
      <BlogTeaser />
      <NewsTeaser />
      <BlogTeaserAELIA />
      <CallToAction />
    </div>
  )
}
