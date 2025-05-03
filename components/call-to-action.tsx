import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section className="bg-firm-burgundy text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold font-serif mb-4">Ready to Discuss Your Case?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Schedule a free 30-minute consultation with one of our attorneys. We'll listen to your story and help you
          understand your options.
        </p>
        <Link href="/contact">
          <Button size="lg" variant="secondary" className="font-medium bg-firm-gold text-firm-navy hover:bg-white">
            Contact Us Today
          </Button>
        </Link>
      </div>
    </section>
  )
}
